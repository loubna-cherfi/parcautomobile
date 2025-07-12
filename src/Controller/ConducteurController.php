<?php

namespace App\Controller;

use App\Repository\PConducteurRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\UserOperation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Request;

#[Route('/conducteur')]
class ConducteurController extends AbstractController
{
    /**  
     * @var Security
     */   
    private $security;

    /**
     * @var UserOperation
     */
    private $userOperation;

    public function __construct(Security $security, UserOperation $userOperation)
    {
        $this->security = $security;
        $this->userOperation = $userOperation;
    }

    #[Route('/listconducteurs', name: 'listconducteurs')]
    public function index(PConducteurRepository $conducteurRepository, Request $request): Response
    {
        // Récupérer tous les conducteurs non supprimés, si tu as un champ "deleted" par exemple
        $conducteurs = $conducteurRepository->findBy([], ['id' => 'ASC']);

        // Vérifier si l'utilisateur a les droits pour voir cette page
        $actions = $this->userOperation->getOperations($this->getUser(), 'listconducteurs', $request);

        if (!$actions) {
            return $this->render('errors/403.html.twig');
        }

        return $this->render('conducteur/index.html.twig', [
            'conducteurs' => $conducteurs,
        ]);
    }
    #[Route('/getConducteur/{id}', name: 'getConducteur', methods: ['GET'])]
public function getConducteur(int $id, PConducteurRepository $conducteurRepository): JsonResponse
{
    $conducteur = $conducteurRepository->find($id);

    if (!$conducteur) {
        return new JsonResponse(['error' => 'Conducteur non trouvé'], 404);
    }

    return new JsonResponse([
        'id' => $conducteur->getId(),
        'nom' => $conducteur->getNom(),
        'prenom' => $conducteur->getPrenom(),
        'cin' => $conducteur->getCin(),
        'permisNumero' => $conducteur->getPermisNumero(),
        'permisType' => $conducteur->getPermisType(),
        'telephone' => $conducteur->getTelephone(),
        'email' => $conducteur->getEmail(),
        'adresse' => $conducteur->getAdresse(),
        'active' => $conducteur->isActive(),
    ]);
}
#[Route('/updateConducteur', name: 'update_conducteur', methods: ['POST'])]
public function updateConducteur(Request $request, PConducteurRepository $conducteurRepo, EntityManagerInterface $em): JsonResponse
{
    $id = $request->request->get('id');
    $conducteur = $conducteurRepo->find($id);

    if (!$conducteur) {
        return new JsonResponse(['error' => 'Conducteur non trouvé'], 404);
    }

    $conducteur->setNom($request->request->get('nom'))
        ->setPrenom($request->request->get('prenom'))
        ->setCin($request->request->get('cin'))
        ->setPermisNumero($request->request->get('permisNumero'))
        ->setPermisType($request->request->get('permisType'))
        ->setTelephone($request->request->get('telephone'))
        ->setEmail($request->request->get('email'))
        ->setAdresse($request->request->get('adresse'))
        ->setActive($request->request->get('status') === 'actif');

    $em->flush();

    return new JsonResponse(['success' => 'Conducteur modifié avec succès']);
}
#[Route('/toggleConducteur/{id}', name: 'toggle_conducteur', methods: ['POST'])]
public function toggleConducteur(int $id, PConducteurRepository $conducteurRepo, EntityManagerInterface $em): JsonResponse
{
    $conducteur = $conducteurRepo->find($id);

    if (!$conducteur) {
        return new JsonResponse(['error' => 'Conducteur non trouvé'], 404);
    }

    $conducteur->setActive(!$conducteur->isActive());
    $em->flush();

    return new JsonResponse([
        'success' => 'Statut mis à jour',
        'newStatus' => $conducteur->isActive() ? 'actif' : 'désactif'
    ]);
}
#[Route('/addConducteur', name: 'add_conducteur', methods: ['POST'])]
public function addConducteur(Request $request, EntityManagerInterface $em): JsonResponse
{
    $conducteur = new \App\Entity\PConducteur();
$conducteur->setNom($request->request->get('nom'))
    ->setPrenom($request->request->get('prenom'))
    ->setCin($request->request->get('cin'))
    ->setPermisNumero($request->request->get('permisNumero'))
    ->setPermisType($request->request->get('permisType'))
    ->setTelephone($request->request->get('telephone'))
    ->setEmail($request->request->get('email'))
    ->setAdresse($request->request->get('adresse'))
    ->setPermisDateObtention(new \DateTime($request->request->get('permisDateObtention')))
    ->setDateNaissance(new \DateTime($request->request->get('dateNaissance')))
    
    ->setActive($request->request->get('status') === 'actif');

    


    $em->persist($conducteur);
    $em->flush();

    return new JsonResponse(['success' => 'Conducteur ajouté avec succès']);
}


}
