<?php

namespace App\Controller;

use App\Entity\TMissionCab;
use App\Repository\PConducteurRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PVehiculeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
#[Route('/mission')]
class MissionController extends AbstractController
{
       #[Route('/listMissions', name: 'listMissions')]


public function index(
    EntityManagerInterface $em, 
    PEntiteRepository $pEntiteRepository,
    PConducteurRepository $pConducteurRepository,
    PVehiculeRepository $pVehiculeRepository,
   
): Response {
    $missions = $em->getRepository(TMissionCab::class)->findAll();
    $conducteurs = $pConducteurRepository->findAll();
    $vehicules = $pVehiculeRepository->findAll();
    
    return $this->render('mission/index.html.twig', [
        'missions' => $missions,
        'conducteurs' => $conducteurs,
        'vehicules' => $vehicules,
    ]);
    // dd($missions);
}
#[Route('/details-mission/{id}', name: 'details_mission', methods: ['GET'])]
public function detailsMission(int $id, EntityManagerInterface $em): JsonResponse
{
    $details = $em->getRepository(\App\Entity\TMissionDet::class)->findBy(['mission_id' => $id]);

    $data = [];

    foreach ($details as $detail) {
        $data[] = [
            'date_mission' => $detail->getDateMission()?->format('Y-m-d'),
            'heure_depart' => $detail->getHeureDepart()?->format('H:i'),
            'lieu_mission' => $detail->getLieuMission(),
            'ville_mission' => $detail->getVilleMission(),
            'km_depart' => $detail->getKmDepart(),
            'km_retour' => $detail->getKmRetour(),
            'duree_mission' => $detail->getDureeMission()?->format('H:i'),
            'tarif_unique' => $detail->getTarifUnique(),
            'conducteur' => $detail->getConducteurId()?->getNom(),
            'vehicule' => $detail->getVehiculeId()?->getMatricule()
        ];
    }

    return $this->json($data);
}



}
