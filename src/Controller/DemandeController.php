<?php

namespace App\Controller;

use App\Entity\TDemandeCab;
use App\Entity\PConducteur;
use App\Entity\PEntite;
use App\Repository\PEntiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\PConducteurRepository;
use App\Repository\PVehiculeRepository;
use App\Repository\PPrestationRepository;
use App\Repository\PTypePrestationRepository;

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
    PTypePrestationRepository $pTypePrestationRepository
): Response {
    $demandes = $em->getRepository(TDemandeCab::class)->findAll();
    $dossiers = $pEntiteRepository->findAll();
    $conducteurs = $pConducteurRepository->findAll();
    $vehicules = $pVehiculeRepository->findAll();
    $prestations = $pPrestationRepository->findAll();
    $typePrestations = $pTypePrestationRepository->findAll();
    


    return $this->render('demande/listDemande.html.twig', [
        'demandes' => $demandes,
        'dossiers' => $dossiers,
        'conducteurs' => $conducteurs,
        'vehicules' => $vehicules,
        'prestations' => $prestations,
        'typePrestations' => $typePrestations
    ]);
}


     #[Route('/demandes/{id}/details', name: 'demandes_details', methods: ['GET'])]
    public function details(int $id, EntityManagerInterface $em): JsonResponse
    {
        $demande = $em->getRepository(TDemandeCab::class)->find($id);

        if (!$demande) {
            return $this->json(['error' => 'Demande non trouvée'], 404);
        } 

        $details = $demande->getTDemandeDets();

        $data = [];
        foreach ($details as $det) {
            $data[] = [
                'id' => $det->getId(),
                'lieu' => $det->getLieu(),
                'date' => $det->getDate()?->format('d/m/Y'),
                'heure' => $det->getHeure()?->format('H:i'),
                'tarif' => $det->getTarif(),
                'ville' => $det->getVille(),
                'prestation' => $det->getPrestationId()?->getNomPrestation() ?? '',
                'vehicule' => $det->getVehiculeId()?->getMatricule() ?? '',
                'conducteur' => $det->getConducteurId()?->getNom() ?? '',
                

            ];
        }

        return $this->json($data);
    }
    #[Route('/demande/getDemande/{id}', name: 'get_demande', methods: ['GET'])]
public function getDemande(int $id, EntityManagerInterface $em): JsonResponse
{
    $demande = $em->getRepository(TDemandeCab::class)->find($id);

    if (!$demande) {
        return new JsonResponse(['error' => 'Demande non trouvée'], 404);
    }

    $details = [];

    foreach ($demande->getTDemandeDets() as $index => $detail) {
     $details[] = [
    'prestation' => $detail->getPrestationId()?->getId(),
    'vehicule' => $detail->getVehiculeId()?->getId(),
    'conducteur' => $detail->getConducteurId()?->getId(),
];

    }

    return new JsonResponse([
        'id' => $demande->getId(),
        'nomBenificiaire' => $demande->getNomBenificiaire(),
        'cin' => $demande->getCin(),
        'contact' => $demande->getContact(),
        'dateDemande' => $demande->getDateDemande()?->format('Y-m-d'),
        'nbPersonnes' => $demande->getNbPersonnes(),
        'lieu' => $demande->getLieu(),
        'observation' => $demande->getObservation(),
        'description' => $demande->getDescription(),
        'details' => $details,
    ]);
}
#[Route('/demande/{id}/traitement', name: 'demande_traitement', methods: ['GET'])]
public function traiterDemande(
    int $id,
    EntityManagerInterface $em,
    PConducteurRepository $conducteurRepo,
    PVehiculeRepository $vehiculeRepo,
    PPrestationRepository $prestationRepo,
    PTypePrestationRepository $typePrestationRepo
): Response {
    $demande = $em->getRepository(TDemandeCab::class)->find($id);
    if (!$demande) {
        throw $this->createNotFoundException('Demande introuvable');
    }

    return $this->render('demande/_modal_traitement.html.twig', [
        'demande' => $demande,
        'conducteurs' => $conducteurRepo->findAll(),
        'vehicules' => $vehiculeRepo->findAll(),
        'prestations' => $prestationRepo->findAll(),
        'typePrestations' => $typePrestationRepo->findAll(),
    ]);
}

}
