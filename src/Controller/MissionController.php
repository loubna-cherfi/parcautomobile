<?php

namespace App\Controller;

use App\Entity\PStatut;
use App\Entity\TMissionCab;
use App\Entity\TMissionDet;
use App\Repository\PConducteurRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PVehiculeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
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
       $detailsParMission = [];
    foreach ($missions as $mission) {
        $details = $em->getRepository(TMissionDet::class)->findBy(['mission_id' => $mission->getId()]);
        $detailsParMission[$mission->getId()] = $details;
    }
    return $this->render('mission/index.html.twig', [
        'missions' => $missions,
        'conducteurs' => $conducteurs,
        'vehicules' => $vehicules,
        'detailsParMission' => $detailsParMission
    ]);
    // dd($missions);
}


#[Route('/evaluer/{id}', name: 'evaluer_mission', methods: ['POST'])]
public function evaluerMission(
    int $id, 
    Request $request, 
    EntityManagerInterface $em
): JsonResponse {
    $note = $request->request->get('note');
    $user = $this->getUser();

    /** @var TMissionCab $mission */
    $mission = $em->getRepository(TMissionCab::class)->find($id);

    if (!$mission) {
        return $this->json(['error' => 'Mission introuvable'], 404);
    }

    // Met à jour les champs de la mission
    $mission->setEvaluationNote((int)$note);
    $mission->setDateEvaluation(new \DateTime());
    $mission->setEvaluateurUserId($user);

    // Met à jour le statut (par exemple ID = 4)
    $statut = $em->getRepository(PStatut::class)->find(4);
    if ($statut) {
        $mission->setStatutId($statut);
    }

    $em->flush();

    return $this->json(['message' => 'Évaluation enregistrée avec succès']);
}
}
