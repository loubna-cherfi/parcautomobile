<?php

namespace App\Controller;

use App\Entity\PConducteur;
use App\Entity\PPrestation;
use App\Entity\PTypePrestation;
use App\Entity\PVehicule;
use App\Entity\PZone;
use App\Entity\TDemandeCab;
use App\Entity\TDemandeDet;
use App\Repository\PConducteurRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PVehiculeRepository;
use App\Repository\PPrestationRepository;
use App\Repository\PTypePrestationRepository;
use App\Repository\PZoneRepository;
use App\Service\TarifCalculator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/demande')]
class DemandeController extends AbstractController
{
    #[Route('/listDemandes', name: 'listDemandes')]
    public function index(
        EntityManagerInterface $em,
        PEntiteRepository $pEntiteRepository,
        PConducteurRepository $pConducteurRepository,
        PVehiculeRepository $pVehiculeRepository,
        PPrestationRepository $pPrestationRepository,
        PTypePrestationRepository $pTypePrestationRepository,
        PZoneRepository $pZoneRepository
    ): Response {
        return $this->render('demande/listDemande.html.twig', [
            'demandes' => $em->getRepository(TDemandeCab::class)->findAll(),
            'dossiers' => $pEntiteRepository->findAll(),
            'conducteurs' => $pConducteurRepository->findAll(),
            'vehicules' => $pVehiculeRepository->findAll(),
            'prestations' => $pPrestationRepository->findAll(),
            'typePrestations' => $pTypePrestationRepository->findAll(),
            'zones' => $pZoneRepository->findAll(),
        ]);
    }

    #[Route('/demandes/{id}/details', name: 'demandes_details', methods: ['GET'])]
    public function details(int $id, EntityManagerInterface $em): JsonResponse
    {
        $demande = $em->getRepository(TDemandeCab::class)->find($id);

        if (!$demande) {
            return $this->json(['error' => 'Demande non trouvée'], 404);
        }

        $data = [];
        foreach ($demande->getTDemandeDets() as $det) {
            $data[] = [
                'id' => $det->getId(),
                'lieu' => $det->getLieu(),
                'date' => $det->getDate()?->format('d/m/Y'),
                'heure' => $det->getHeure()?->format('H:i'),
                'tarif' => $det->getTarif(),
                'prestationId' => $det->getPrestationId()?->getId(),
                'prestationNom' => $det->getPrestationId()?->getNomPrestation() ?? '',
                'vehiculeId' => $det->getVehiculeId()?->getId(),
                'vehiculeMatricule' => $det->getVehiculeId()?->getMatricule() ?? '',
                'conducteurId' => $det->getConducteurId()?->getId(),
                'conducteurNom' => $det->getConducteurId()?->getNom() ?? '',
                'typePrestationId' => $det->getPrestationId()?->getTypePrestationId()?->getId(),
                'typePrestationNom' => $det->getPrestationId()?->getTypePrestationId()?->getLibelle() ?? '',
                'zoneId' => $det->getZone()?->getId(),
                'zoneNom' => $det->getZone()?->getLibelle() ?? '',
            ];
        }

        return $this->json($data);
        
    }

   #[Route('/ajax/get/{id}', name: 'get_demande', methods: ['GET'])]
public function getDemande(int $id, EntityManagerInterface $em): JsonResponse
{
    $demande = $em->getRepository(TDemandeCab::class)->find($id);

    if (!$demande) {
        return new JsonResponse(['error' => 'Demande non trouvée'], 404);
    }

    $details = [];
    foreach ($demande->getTDemandeDets() as $det) {
        $details[] = [
            'vehicule' => $det->getVehiculeId()?->getMatricule() ?? '',
            'conducteur' => $det->getConducteurId()?->getNom() ?? '',
            'type_prestation' => $det->getPrestationId()?->getTypePrestationId()?->getLibelle() ?? '',
            'zone' => $det->getPrestationId()?->getZoneId()?->getLibelle() ?? '',
            'prestation' => $det->getPrestationId()?->getNomPrestation() ?? '',
            'quantite' => $det->getQuantite(),
            'nb_jours' => $det->getNbjour(),
        ];
    }

    return new JsonResponse([
        'id' => $demande->getId(),
        'nomBenificiaire' => $demande->getNomBenificiaire(),
        'cin' => $demande->getCin(),
        'contact' => $demande->getContact(),
        'dateDemande' => $demande->getDateDemande()?->format('Y-m-d\TH:i'),
        'nbPersonnes' => $demande->getNbPersonnes(),
        'observation' => $demande->getObservation(),
        'description' => $demande->getDescription(),
        'adressDepart' => $demande->getAdressDepart(),
        'details' => $details,
    ]);
}

    #[Route('/ajax/prestations', name: 'ajax_prestations_by_type_and_zone')]
    public function getPrestationsByTypeAndZone(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $typeId = $request->query->get('type');
        $zoneId = $request->query->get('zone');

        if (!$typeId || !$zoneId) {
            return new JsonResponse(['error' => 'Type ou zone manquant'], 400);
        }

        $qb = $em->createQueryBuilder();
        $qb->select('p')
            ->from(PPrestation::class, 'p')
            ->join('p.type_prestation_id', 'tp')
            ->join('p.zone_id', 'z')
            ->where('tp.id = :typeId')
            ->andWhere('z.id = :zoneId')
            ->setParameter('typeId', $typeId)
            ->setParameter('zoneId', $zoneId);

        $prestations = $qb->getQuery()->getResult();

        $data = [];
        foreach ($prestations as $prestation) {
            $data[] = [
                'id' => $prestation->getId(),
                'nom' => $prestation->getNomPrestation(),
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/ajax/tarif', name: 'ajax_calcul_tarif', methods: ['GET'])]
    public function getTarifFromPrestation(Request $request, EntityManagerInterface $em, TarifCalculator $tarifCalculator): JsonResponse
    {
        $prestationId = $request->query->get('prestationId');
        $date = $request->query->get('date');
        $quantite = (int) $request->query->get('quantite');
        $nbJours = (int) $request->query->get('nbJours');

        if (!$prestationId || !$date) {
            return new JsonResponse(['error' => 'Paramètres manquants'], 400);
        }

        $prestation = $em->getRepository(PPrestation::class)->find($prestationId);
        if (!$prestation) {
            return new JsonResponse(['error' => 'Prestation non trouvée'], 404);
        }

        try {
            $dateTime = new \DateTime($date);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => 'Date invalide'], 400);
        }

        $tarif = $tarifCalculator->calculerTarif($prestation, $dateTime, $quantite, $nbJours);

        return new JsonResponse($tarif);
    }

   #[Route('/demande/ajouter', name: 'demande_ajouter', methods: ['POST'])]
public function ajouterDemande(Request $request, EntityManagerInterface $em, TarifCalculator $tarifCalculator): RedirectResponse
{
    $data = $request->request->all();
    // dd($data);
    $demande = new TDemandeCab();
    $demande->setNomBenificiaire($data['nomBenificiaire'] ?? null);
    $demande->setCin($data['cin'] ?? null);
    $demande->setNbPersonnes((int) ($data['nbPersonnes'] ?? 0));
    $demande->setContact($data['contact'] ?? null);
    $demande->setObservation($data['observation'] ?? null);
    $demande->setDescription($data['description'] ?? null);
    $demande->setDateDemande(new \DateTime($data['dateDemande'] ?? 'now'));
    $demande->setAdressDepart($data['adressDepart'] ?? null);
    $demande->setActive(1);

    $details = [];
    $totalTarif = 0;

   
    if (isset($data['details']) && is_array($data['details'])) {
        foreach ($data['details'] as $detail) {
            $vehicule = $em->getRepository(PVehicule::class)->find($detail['vehicule']);
            $conducteur = $em->getRepository(PConducteur::class)->find($detail['conducteur']);
            $typePrestation = $em->getRepository(PTypePrestation::class)->find($detail['type_prestation']);
            $zone = $em->getRepository(PZone::class)->find($detail['zone']);
            $prestation = $em->getRepository(PPrestation::class)->find($detail['prestation']);

            if (!$vehicule || !$conducteur || !$typePrestation || !$zone || !$prestation) {
                continue;
            }

            $quantite = (int) ($detail['quantite'] ?? 0);
            $nbJours = (int) ($detail['nb_jours'] ?? 0);
            $date = $demande->getDateDemande();

            $tarif = $tarifCalculator->calculerTarif($prestation, $date, $quantite, $nbJours);

            $detailDemande = new TDemandeDet();
            $detailDemande->setVehiculeId($vehicule);
            $detailDemande->setConducteurId($conducteur);
            $detailDemande->setPrestationId($prestation);
            $detailDemande->setQuantite($quantite);
            $detailDemande->setNbjour($nbJours);
            $detailDemande->setTarif($tarif);
            $detailDemande->setDemandeId($demande);
            

            $totalTarif += $tarif;
            $details[] = $detailDemande;
        }
    }

    // ✅ Définir le tarif total *avant* le flush
    $demande->setTarifTotal($totalTarif);

    // ✅ Persister d'abord la demande, ensuite les détails
    $em->persist($demande);
    foreach ($details as $detail) {
        $em->persist($detail);
    }

    $em->flush();

    $this->addFlash('success', 'Demande enregistrée avec succès !');

    return $this->redirectToRoute('listDemandes');
}

}
