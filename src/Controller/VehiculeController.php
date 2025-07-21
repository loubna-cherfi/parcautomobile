<?php

namespace App\Controller;

use App\Entity\PVehicule;
use App\Repository\PVehiculeRepository;
use App\Service\UserOperation;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;  
use Symfony\Component\Security\Core\User\UserInterface;
use App\Repository\PTypeVehiculeRepository;
use App\Repository\PMarqueVehiculeRepository;
     

#[Route('/vehicule')]
class VehiculeController extends AbstractController
{
    // #[Route('/vehicule', name: 'app_vehicule')]
    // public function index(): Response
    // {
    //     return $this->render('vehicule/index.html.twig', [
    //         'controller_name' => 'VehiculeController',
    //     ]);
    // }
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
    #[Route('/listVehicules', name: 'listVehicules')]
public function listvehicules(
    PVehiculeRepository $vehiculeRep,
    PTypeVehiculeRepository $typeVehiculeRep,
    PMarqueVehiculeRepository $marqueVehiculeRep,
    Request $request
    
): Response {
    $vehicules = $vehiculeRep->findBy(["isDeleted" => 0], ["id" => "ASC"]);

    $actions = $this->userOperation->getOperations($this->getUser(), 'listVehicules', $request);

    if (!$actions) {
        return $this->render('errors/403.html.twig');
    }

    // Récupérer les types et marques de véhicule
    $types = $typeVehiculeRep->findAll();
    $marques = $marqueVehiculeRep->findAll();

    return $this->render('vehicule/index.html.twig', [
        'vehicules' => $vehicules, 
        'actions' => $actions,
        'types' => $types,
        'marques' => $marques
    ]);
}

#[Route('/getVehicule/{id}', name: 'getVehicule', methods: ['GET'])]
public function getVehicule(int $id, PVehiculeRepository $vehiculeRep): JsonResponse
{
    $vehicule = $vehiculeRep->find($id);
    if (!$vehicule) {
        return new JsonResponse(['error' => 'Véhicule non trouvé'], 404);
    }

    return new JsonResponse([
        'id' => $vehicule->getId(),
        'matricule' => $vehicule->getMatricule(),
        'model' => $vehicule->getModel(),
        'carburant' => $vehicule->getCarburant(),
        'transmission' => $vehicule->getTransmission(),
        'kilometrage' => $vehicule->getKilometrage(),
        'capacite' => $vehicule->getCapacite(),
        'active' => $vehicule->isActive(),
        'marque_vehicule_id' => $vehicule->getMarqueVehiculeId() ? $vehicule->getMarqueVehiculeId()->getId() : null,
        'type_vehicule_id' => $vehicule->getTypeVehiculeId() ? $vehicule->getTypeVehiculeId()->getId() : null,
    ]);
}


    #[Route('/addVehicule', name: 'addVehicule')]
public function addVehicule(
    Request $request,
    ManagerRegistry $doctrine,
    PVehiculeRepository $vehiculeRep,
    Security $security
): JsonResponse {
    if ($request->isXmlHttpRequest()) {

        $existingVehicule = $vehiculeRep->findOneBy(['matricule' => $request->get('matricule')]);

    if ($existingVehicule) {
    return new JsonResponse(['exists' => true]);
    }

      
        $em = $doctrine->getManager();

        $vehicule = new PVehicule();
        $vehicule->setMatricule($request->get('matricule'));
        $vehicule->setModel($request->get('model'));
        $vehicule->setCarburant($request->get('carburant'));
        $vehicule->setTransmission($request->get('transmission'));
        $vehicule->setKilometrage((int)$request->get('kilometrage'));
        $vehicule->setCapacite((int)$request->get('capacite'));

        $vehicule->setActive($request->get('status') === "actif");
        $vehicule->setIsDeleted(false);
        // $vehicule->set($user);
        // $vehicule->setDateUpdate(new \DateTime());

        $em->persist($vehicule);
        $em->flush();

        // Renvoi de la nouvelle liste HTML
        $vehicules = $vehiculeRep->findBy(['isDeleted' => false], ['id' => 'ASC']);
        $actions = $this->userOperation->getOperations($this->getUser(), 'settingsVehicule', $request);
$types = $doctrine->getRepository(\App\Entity\PTypeVehicule::class)->findAll();
$marques = $doctrine->getRepository(\App\Entity\PMarqueVehicule::class)->findAll();

$html = $this->render('vehicule/index.html.twig', [
    'vehicules' => $vehicules,
    'actions' => $actions,
    'types' => $types,
    'marques' => $marques,
])->getContent();

        return new JsonResponse($html);
    }

    return new JsonResponse("Requête invalide", 400);
}
#[Route('/updateVehicule', name: 'updateVehicule', methods: ['POST'])]
public function updateVehicule(
    Request $request,
    PVehiculeRepository $vehiculeRep,
    ManagerRegistry $doctrine
): JsonResponse {
    if ($request->isXmlHttpRequest()) {
        $vehiculeId = $request->get('id');
        $vehicule = $vehiculeRep->find($vehiculeId);

        if (!$vehicule) {
            return new JsonResponse(['error' => 'Véhicule non trouvé.'], 404);
        }

        // Vérification unique si matricule existe déjà pour un autre véhicule
        $existingVehicule = $vehiculeRep->findOneBy(['matricule' => $request->get('matricule')]);
        if ($existingVehicule && $existingVehicule->getId() != $vehiculeId) {
            return new JsonResponse(['exists' => true]);
        }

        $vehicule->setMatricule($request->get('matricule'));
        $vehicule->setModel($request->get('model'));
        $vehicule->setCarburant($request->get('carburant'));
        $vehicule->setTransmission($request->get('transmission'));
        $vehicule->setKilometrage((int)$request->get('kilometrage'));
        $vehicule->setCapacite((int)$request->get('capacite'));
        $vehicule->setActive($request->get('statusVehicule') === "actif");

        // Associations : type et marque (optionnel)
        $em = $doctrine->getManager();
        if ($request->get('marque_vehicule_id')) {
            $marque = $em->getRepository(\App\Entity\PMarqueVehicule::class)->find($request->get('marque_vehicule_id'));
            $vehicule->setMarqueVehiculeId($marque);
        }

        if ($request->get('type_vehicule_id')) {
            $type = $em->getRepository(\App\Entity\PTypeVehicule::class)->find($request->get('type_vehicule_id'));
            $vehicule->setTypeVehiculeId($type);
        }

        $em->flush();

        return new JsonResponse(['success' => true]);
    }

    return new JsonResponse(['error' => 'Requête invalide.'], 400);
}

#[Route('/toggleStatus/{id}', name: 'toggleStatusVehicule', methods: ['POST'])]
public function toggleStatusVehicule(int $id, PVehiculeRepository $vehiculeRep, EntityManagerInterface $em): JsonResponse
{
    $vehicule = $vehiculeRep->find($id);

    if (!$vehicule) {
        return new JsonResponse(['success' => false, 'message' => 'Véhicule non trouvé.'], 404);
    }

    $vehicule->setActive(!$vehicule->isActive());
    $em->flush();

    return new JsonResponse([
        'success' => true,
        'message' => $vehicule->isActive() ? 'Véhicule activé.' : 'Véhicule désactivé.'
    ]);
}


}
