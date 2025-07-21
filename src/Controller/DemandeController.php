<?php

namespace App\Controller;

use App\Entity\PConducteur;
use App\Entity\PEntite;
use App\Entity\PPrestation;
use App\Entity\PStatut;
use App\Entity\PTypePrestation;
use App\Entity\PVehicule;   
use App\Entity\PZone;
use App\Entity\TDemandeCab;
use App\Entity\TDemandeDet;
use App\Entity\TMissionCab;
use App\Entity\TMissionDet;
use App\Repository\PConducteurRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PVehiculeRepository;
use App\Repository\PPrestationRepository;
use App\Repository\PTypePrestationRepository;
use App\Repository\PZoneRepository;
use App\Repository\TDemandeCabRepository;
use App\Repository\TDemandeDetRepository;
use App\Service\TarifCalculator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

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
   $demandes=$em->getRepository(TDemandeCab::class)->findAll();
   $dossiers=$em->getRepository(PEntite::class)->findAll();
   $conducteurs=$em->getRepository(PConducteur::class)->findAll();
   $vehicules=$em->getRepository(PVehicule::class)->findAll();
   $prestations=$em->getRepository(PPrestation::class)->findAll();
   $typePrestations=$em->getRepository(PTypePrestation::class)->findAll();
   $zones=$em->getRepository(PZone::class)->findAll();

        return $this->render('demande/listDemande.html.twig', [
            'demandes' => $demandes,
            'dossiers' => $dossiers,
            'conducteurs' => $conducteurs,
            'vehicules' => $vehicules,
            'prestations' => $prestations,
            'typePrestations' => $typePrestations,
            'zones' => $zones,
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
        'id' => $det->getId(),
        'vehiculeId' => $det->getVehiculeId()?->getId(),
        'vehicule' => $det->getVehiculeId()?->getMatricule() ?? '',
        'conducteurId' => $det->getConducteurId()?->getId(),
        'conducteur' => $det->getConducteurId()?->getNom() ?? '',
        'type_prestation' => $det->getPrestationId()?->getTypePrestationId()?->getLibelle() ?? '',
        'zone' => $det->getPrestationId()?->getZoneId()?->getLibelle() ?? '',
        'prestation' => $det->getPrestationId()?->getNomPrestation() ?? '',
        'prestationId' => $det->getPrestationId()?->getId(), 
        'quantite' => $det->getQuantite(),
        'nb_jours' => $det->getNbjour(),
        'tarif' => $det->getTarif() != 0 ? $det->getTarif() : '',
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
        $kilometrage = (int) $request->query->get('kilometrage', 0); 
        $demandeId = $request->query->get('demandeId');
        $nbPersonnes = $request->query->getInt('nbPersonnes', 1);


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
        
          if ($demandeId) {
        $demande = $em->getRepository(TDemandeCab::class)->find($demandeId);
        if ($demande) {
            $nbPersonnes = $demande->getNbPersonnes();
        }
    }

        $tarif = $tarifCalculator->calculerTarif($prestation, $dateTime, $quantite, $nbJours, $kilometrage, $nbPersonnes);

        return new JsonResponse($tarif);
    }

  
#[Route('/demande/ajouter', name: 'demande_ajouter', methods: ['POST'])]
public function ajouterDemande(Request $request, EntityManagerInterface $em,Security $security): RedirectResponse
{
    $user = $security->getUser();
    // dd($user);
    $data = $request->request->all();
    $dossierId = $request->getSession()->get('dossier');
    $dossier = $em->getRepository(PEntite::class)->find($dossierId);
    $statutCree = $em->getRepository(PStatut::class)->findOneBy(['libelle' => 'CRÉÉE']);

   

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
    $demande->setDossierId($dossier);
    $demande->setCreatedUserId($user);
    $demande->setStatutId($statutCree);
    $details = [];
// dd($demande);
    if (isset($data['details']) && is_array($data['details'])) {
    foreach ($data['details'] as $index => $detail) {
        // Liste des champs obligatoires
        $requiredKeys = ['vehicule', 'conducteur', 'type_prestation', 'zone', 'prestation'];

        // Vérifier que tous les champs sont présents
        foreach ($requiredKeys as $key) {
            if (!isset($detail[$key])) {
              
                continue 2; 
            }
        }

        // ⚙️ Rechercher les entités
        $vehicule = $em->getRepository(PVehicule::class)->find($detail['vehicule']);
        $conducteur = $em->getRepository(PConducteur::class)->find($detail['conducteur']);
        $typePrestation = $em->getRepository(PTypePrestation::class)->find($detail['type_prestation']);
        $zone = $em->getRepository(PZone::class)->find($detail['zone']);
        $prestation = $em->getRepository(PPrestation::class)->find($detail['prestation']);

        // Ignorer les lignes invalides
        if (!$vehicule || !$conducteur || !$typePrestation || !$zone || !$prestation) {
            continue;
        }

        $quantite = (int) ($detail['quantite'] ?? 0);
        $nbJours = (int) ($detail['nb_jours'] ?? 0);

        $detailDemande = new TDemandeDet();
        $detailDemande->setVehiculeId($vehicule);
        $detailDemande->setConducteurId($conducteur);
        $detailDemande->setPrestationId($prestation);
        $detailDemande->setQuantite($quantite);
        $detailDemande->setNbjour($nbJours);
        $detailDemande->setDemandeId($demande);

        $details[] = $detailDemande;
    }
}


   
    // $demande->setTarifTotal(...);

    $em->persist($demande);
    foreach ($details as $detail) {
        $em->persist($detail);
    }

    $em->flush();

    $this->addFlash('success', 'Demande enregistrée avec succès !');

    return $this->redirectToRoute('listDemandes');
}





#[Route('/traiter/enregistrer', name: 'demande_traiter_enregistrer', methods: ['POST'])]
public function enregistrerTraitement(Request $request, EntityManagerInterface $em, TarifCalculator $tarifCalculator, Security $security): JsonResponse
{
    $data = json_decode($request->getContent(), true);

    if (!$data || !isset($data['id']) || !isset($data['details'])) {
        return $this->json(['error' => 'Données invalides'], 400);
    }

    $demande = $em->getRepository(TDemandeCab::class)->find($data['id']);
    if (!$demande) {
        return $this->json(['error' => 'Demande non trouvée'], 404);
    }
    $totalTarif = 0;
    foreach ($data['details'] as $detail) {

        $det = $em->getRepository(TDemandeDet::class)->find($detail['id']);
        $tarif = !empty($detail['tarif']) ? floatval($detail['tarif']) : 0.0;
        
        if (!$det) {
            return $this->json(['error' => 'Detail non trouvée'], 404);
        }

        $det->setTarif($tarif);
        // $det->setVehiculeId($vehicule);
// Mise à jour du kilométrage
        if (isset($detail['kilometrage'])) {
            $det->setKilometrage((int)$detail['kilometrage']);
        }

        $em->persist($det);

        $totalTarif += $tarif;
    }
    
     $user = $security->getUser(); // utilisateur connecté
    $statutTraiter = $em->getRepository(PStatut::class)->findOneBy(['libelle' => 'TRAITER']);

    $demande->setTraitantUserId($user);
    
    $demande->setDateTraitement(new \DateTime());
    $demande->setTarifTotal($totalTarif);
    $demande->setStatutId($statutTraiter);

    $em->persist($demande);
    $em->flush();

    return $this->json(['success' => true, 'message' => 'Traitement enregistré avec succès', 'tarifTotal' => $totalTarif]);
}
#[Route('/prestation/{id}/kilometrage', name: 'prestation_kilometrage', methods: ['GET'])]
public function isKilometrage(int $id, PPrestationRepository $prestationRepository): JsonResponse
{
    $prestation = $prestationRepository->find($id);

    if (!$prestation) {
        return $this->json(['error' => 'Prestation non trouvée'], 404);
    }

    return $this->json(['isKilometrage' => $prestation->isIskilometrage()]);
}


#[Route('/changer-statutValider/{id}', name: 'changer_statut_Valider', methods: ['POST'])]
public function changerStatut(
    int $id, 
    EntityManagerInterface $em,
    Security $security // injection du service Security pour l'utilisateur connecté
): JsonResponse {
    // Récupérer la demande
    $demande = $em->getRepository(TDemandeCab::class)->find($id);

    if (!$demande) {  
        return new JsonResponse(['error' => 'Demande non trouvée'], 404);
    }

    // Récupérer le statut "validé" (id = 7)
    $statutValide = $em->getRepository(PStatut::class)->find(7);
    if (!$statutValide) {
        return new JsonResponse(['error' => 'Statut "validé" non trouvé'], 404);
    }

    // Changer le statut
    $demande->setStatutId($statutValide);

    // Récupérer utilisateur connecté
    $user = $security->getUser();
    $demande->setValidateurUserId( $user);


    // Date validation : date actuelle
    $demande->setDateValidation(new \DateTime());

    $em->flush();

    return new JsonResponse(['success' => true]);
}



#[Route('/changer-statutAnnuler/{id}', name: 'changer_statut_annuler', methods: ['POST'])]
public function annulerDemande(   
    int $id,
    EntityManagerInterface $em,
    Security $security
): JsonResponse {
    $demande = $em->getRepository(TDemandeCab::class)->find($id);

    if (!$demande) {
        return new JsonResponse(['error' => 'Demande non trouvée'], 404);
    }

   
    $statutAnnule = $em->getRepository(PStatut::class)->find(6);
    if (!$statutAnnule) {
        return new JsonResponse(['error' => 'Statut "Annulé" non trouvé'], 404);
    }

    $demande->setStatutId($statutAnnule);
    
    $user = $security->getUser();
    $demande->setAnnulerUserId( $user);


    
    $demande->setDateAnnulation(new \DateTime());
    $em->flush();

    return new JsonResponse(['success' => true, 'message' => 'Demande annulée avec succès']);
}

#[Route('/executerDemande/{id}', name: 'executer_demande', methods: ['POST'])]
public function executerDemande(int $id,EntityManagerInterface $em,Security $security): JsonResponse {
    $demande = $em->getRepository(TDemandeCab::class)->find($id);
    if (!$demande) {
        return new JsonResponse(['error' => 'Demande non trouvée'], 404);
    }
    $statutExecute = $em->getRepository(PStatut::class)->find(3);
    if (!$statutExecute) {
        return new JsonResponse(['error' => 'Statut "Exécuté" non trouvé'], 404);
    }
    $demande->setStatutId($statutExecute);
    $user = $security->getUser();
    $demande->setExecutantUserId($user);
    $demande->setDateExecution(new \DateTime());
    $mission = new TMissionCab();
    $mission->setDemandeId($demande);
    $mission->setStatutId($statutExecute);
    $mission->setExecutantUserId($user);
    $mission->setDateExecution(new \DateTime());
    $mission->setActive(true);
    $mission->setNbPersonne($demande->getNbPersonnes());
    $mission->setContact($demande->getContact());
    $mission->setCin($demande->getCin());
    $mission->setNomBenificiaire($demande->getNomBenificiaire());
    $mission->setDescription($demande->getDescription());
    $mission->setObservation($demande->getObservation());
    $mission->setAdressDepart($demande->getAdressDepart());
    $mission->setDossier($demande->getDossierId());
    $mission->setDateMission($demande->getDateDemande());
    $mission->setTarifTotal($demande->getTarifTotal());
    $em->persist($mission);
    foreach ($demande->getTDemandeDets() as $demandeDet) {
        $missionDet = new TMissionDet();
        $missionDet->setMissionId($mission);
        $missionDet->setConducteurId($demandeDet->getConducteurId());
        $missionDet->setVehiculeId($demandeDet->getVehiculeId());
        $missionDet->setPrestation($demandeDet->getPrestationId()); 
        $missionDet->setNbPersonne($demandeDet->getQuantite()); 
        $missionDet->setQuantite($demandeDet->getQuantite());
        $missionDet->setKilometrage($demandeDet->getKilometrage());
        $missionDet->setTarifUnique($demandeDet->getTarif());
        $em->persist($missionDet);
    }
        // dd("zarou");
    $em->flush();
    return new JsonResponse(['success' => true, 'message' => 'Demande exécutée avec succès']);
}


}   