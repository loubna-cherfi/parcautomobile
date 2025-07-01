<?php

namespace App\Controller\Settings;

use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PProfessionRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ProfileController extends AbstractController
{

    /**
     * @var Security
     */
    private $security;


    public function __construct(Security $security )
    {
       $this->security = $security;
    }

    #[Route('/profile', name: 'app__profile')]
    public function index(PProfessionRepository $professionRep,Request $request , PActionRepository $pActionRep , UserRepository $userRep , PModuleRepository $moduleRepository): Response
    {
        $session = new Session();

        $currentUser = $this->security->getUser();

        $actions = $session->get('actions');

        // if(count($actions) == 0){
        //     return $this->render('errors/403.html.twig');
        // }
        
        $professions = $professionRep->findAll();

        return $this->render('profile/index.html.twig', [
            "actions"=>$actions,
            "professions" => $professions
        ]);
    }

    #[Route('/updateInfoUser', name: 'updateInfoUser')]
    public function updateInfoUser(PProfessionRepository $professionRep,Request $request , UserRepository $userRep , ManagerRegistry $doctrine)
    {
        // dd($request);

        if($request->isXmlHttpRequest()){
            $em = $doctrine->getManager();

            $profession = $professionRep->find($request->get("profession"));

            $user = $userRep->find($request->get("id"));

            $user->setName($request->get("fullName"));
            if($request->get("status") == "active"){
                $user->setIsActive(true);
            }else{
                $user->setIsActive(false);
            }

            $user->setPProfession($profession);

            $em->flush();

            return new JsonResponse("GOOD");
        }

        


    }

    #[Route('/updatePassword', name: 'updatePassword')]
    public function updatePassword(UserPasswordHasherInterface $passwordHasher,PProfessionRepository $professionRep,Request $request , UserRepository $userRep , ManagerRegistry $doctrine)
    {
        // dd($request);

        if($request->isXmlHttpRequest()){

            $em = $doctrine->getManager();
    
            $user = $userRep->find($request->get("id"));
    
    
            if($passwordHasher->isPasswordValid($user, $request->get("oldPassword"))){
                $hashedPassword = $passwordHasher->hashPassword(
                    $user,
                    $request->get("newPassword")
                );
    
                $user->setPassword($hashedPassword);
                $user->setUserUpdate($user);
                $user->setDateUpdate(new \DateTime());
    
                $em->flush();
    
                return new JsonResponse("GOOD");
    
    
            }
            else{
                return new JsonResponse("L'ancien mot de passe est incorrect !");
            }
        }




    }
}
