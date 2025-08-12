<?php

namespace App\Controller;

use App\Entity\PStatut;
use App\Entity\TMissionCab;
use App\Entity\TMissionDet;
use App\Repository\PConducteurRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PVehiculeRepository;
use App\Service\UserOperation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
#[Route('/mission')]   
class MissionController extends AbstractController
{




 /**
     * @var Security
     */   
    private $security;
    private $userOperation;
   

    public function __construct(Security $security, UserOperation $userOperation)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;
    }




   #[Route('/fetch-missions', name: 'app_fetch_missions', options: ['expose' => true], methods: ['GET'])]
public function fetchDemandes(Request $request, EntityManagerInterface $em): JsonResponse
{
    $draw = (int) $request->query->get('draw', 1);
    $start = (int) $request->query->get('start', 0);
    $length = (int) $request->query->get('length', 10);
    $search = $request->query->all('search')['value'] ?? '';
    $order = $request->query->all('order');
    $orderColumnIndex = $order[0]['column'] ?? 0;
    $orderDir = strtoupper($order[0]['dir'] ?? 'ASC');
    $columns = $request->query->all('columns');

    $orderColumn = $columns[$orderColumnIndex]['name'] ?? 'm.id';

    $allowedOrderFields = [
         'm.id', 'm.nom_benificiaire', 'm.cin', 'm.contact', 'm.date_mission', 'm.nbPersonne ',
        'm.description', 'm.observation', 's.libelle', 'e.nomDossier','m.tarif_total','m.adress_depart','m.date_evaluation','m.evaluation_note','d.id'
    ];

    if (!in_array($orderColumn, $allowedOrderFields)) {
        $orderColumn = 'm.id';
    }

    $qb = $em->createQueryBuilder()
        ->select('
            m.id,
            m.nom_benificiaire,
            m.cin,
            m.contact,
            m.date_mission,
            m.nbPersonne ,
            m.description,
            m.observation,
            s.id AS statutId,  
            s.libelle AS statut,
            e.nomDossier AS dossier,
            m.tarif_total,
            m.adress_depart,
            m.date_evaluation,
            m.evaluation_note,
            d.id as demande
        ')
        ->from(TMissionCab::class, 'm')
        ->leftJoin('m.statut_id', 's')
        ->leftJoin('m.dossier', 'e')
        ->leftJoin('m.demande_id', 'd')
        ->where('m.active = 1');

    if (!empty($search)) {
        $qb->andWhere('
            LOWER(m.nom_benificiaire) LIKE :search OR
            LOWER(m.cin) LIKE :search OR
            CAST(m.contact AS string) LIKE :search OR
            LOWER(s.libelle) LIKE :search OR
            LOWER(e.nomDossier) LIKE :search
        ')
        ->setParameter('search', '%' . strtolower($search) . '%');
    }

    $qb->orderBy($orderColumn, $orderDir)
        ->setFirstResult($start)
        ->setMaxResults($length);

    $results = $qb->getQuery()->getArrayResult();
// dd( $results);
   
  foreach ($results as &$row) {
    foreach (['date_mission', 'date_evaluation'] as $dateField) {
        if (isset($row[$dateField]) && $row[$dateField] instanceof \DateTimeInterface) {
            $row[$dateField] = $row[$dateField]->format('d/m/Y');
        } elseif (isset($row[$dateField]) && !empty($row[$dateField])) {
            try {
                $row[$dateField] = (new \DateTime($row[$dateField]))->format('d/m/Y');
            } catch (\Exception $e) {
                $row[$dateField] = ''; // Valeur vide si parsing échoue
            }
        } else {
            $row[$dateField] = '';
        }
    }
}
unset($row);


    // Total sans filtre
    $totalQb = $em->createQueryBuilder()
        ->select('COUNT(m.id)')
        ->from(TMissionCab::class, 'm')
        ->where('m.active = 1');
    $totalRecords = $totalQb->getQuery()->getSingleScalarResult();

    // Total filtré
    $filteredQb = clone $qb;
    $filteredQb->resetDQLPart('select')
               ->resetDQLPart('orderBy')
               ->select('COUNT(m.id)');
    $recordsFiltered = $filteredQb->getQuery()->getSingleScalarResult();

    // Actions (même logique que véhicules)
    $actions = $this->userOperation->getOperations($this->getUser(), 'listMissions', $request);
    $filteredActions = array_filter($actions, fn($action) => !$action->isHorizontal());
    $allActions = array_map(function ($action) {
        return [
            'sousModuleId' => $action->getPSousModule()->getId(),
            'idOp' => $action->getId(),
            'idName' => $action->getIdName(),
            'nom' => $action->getNom(),
            'className' => $action->getClassName(),
            'icon' => $action->getIcon(),
        ];
    }, $filteredActions);

    return new JsonResponse([
        'draw' => $draw,
        'recordsTotal' => (int) $totalRecords,
        'recordsFiltered' => (int) $recordsFiltered,
        'data' => $results,
        'actions' => $allActions
    ]);
}


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
