<?php

namespace App\Controller;

use App\Repository\PConducteurRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\UserOperation;
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

}
