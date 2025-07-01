<?php

namespace App\Controller\Settings;

use App\Entity\PAction;
use App\Entity\PModule;
use App\Entity\PSousModule;
use App\Repository\PArticleRepository;
use App\Service\UserOperation;
use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PSousModuleRepository;
use App\Repository\PProfessionRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[Route('/setting')]
class SettingController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;
    private $userOperation;


    public function __construct(Security $security , UserOperation $userOperation)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;

    }

    //MODULES MANAGMENT

    // #[Route('/module', name: 'module')]
    public function module(Request $request , UserRepository $userRep , PActionRepository $pActionRep , PModuleRepository $moduleRepository)
    {
        $session = new Session();



        $actions = $this->userOperation->getOperations($this->getUser(), 'module', $request);

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }


        $allModules = $moduleRepository->findAll();
        // $allModules = $moduleRepository->findBy(["active" => true]);

        // dd($actions);

        return $this->render('settings/module/index.html.twig', [
            'allModules' => $allModules,
            'actions'=>$actions,
        ]);
    }

    #[Route('/addModule', name: 'addModule')]
    public function addModule(Request $request , ManagerRegistry $doctrine , PModuleRepository $moduleRep , PActionRepository $pActionRep )
    {
        // $session = new Session();

        $currentUser = $this->security->getUser();

        $em = $doctrine->getManager();
        if($request->isXmlHttpRequest()){
            $module = new PModule();

            $module->setNom($request->get("nom"));
            $module->setIcon($request->get("icon"));
            $module->setRoute($request->get("route"));
            $module->setUserUpdate($currentUser);
            $module->setDateUpdate(new \DateTime());
            $module->setActive(true);

            $em->persist($module);
            $em->flush();

            // $modules = $moduleRep->findAll();

            // // $actions = $session->get("actions");

            // // dd($modules);

            // $html = $this->render('settings/module/inc/list_modules.html.twig',[
            //     'allModules' => $modules,
            //     // 'actions' => $actions,
            // ]);

            return new JsonResponse("Module Ajouté.", 200);




        }
    }

    #[Route('/findModule', name: 'findModule')]
    public function findModule(PModuleRepository $moduleRep , Request $request)
    {
        if($request->isXmlHttpRequest()){

            $module = $moduleRep->find($request->get("idModule"));

            $data = [
                "id"=> $module->getId(),
                "route"=> $module->getRoute(),
                "icon" => $module->getIcon(),
                "nom" => $module->getNom(),
            ];
            // dd($data);
            return new JsonResponse($data);
        }
    }

    #[Route('/updateModule', name: 'updateModule' )]
    public function updateModule(Request $request , ManagerRegistry $doctrine , PModuleRepository $moduleRep , PActionRepository $pActionRep )
    {

        $currentUser = $this->security->getUser();

        $em = $doctrine->getManager();
        if($request->isXmlHttpRequest()){
            $module = $moduleRep->find($request->get("idModule"));

            $module->setNom($request->get("nom"));
            $module->setIcon($request->get("icon"));
            $module->setRoute($request->get("route"));
            $module->setUserUpdate($currentUser);
            $module->setDateUpdate(new \DateTime());

            $em->flush();

            $modules = $moduleRep->findBy(["active"=>true]);


            // dd($modules);

            $html = $this->render('settings/module/inc//list_modules.html.twig',[
                'allModules' => $modules,
            ]);

            return new JsonResponse($html->getContent());


        }
    }

    #[Route('/activateModule', name: 'activateModule')]
    public function activateModule(PProfessionRepository $professionRep, PModuleRepository $moduleRep, Request $request , PActionRepository $pActionRep,  ManagerRegistry $doctrine)
    {

        if($request->isXmlHttpRequest()){

            $em = $doctrine->getManager();
            $module = $moduleRep->find($request->get("idModule"));
            $currentUser = $this->security->getUser();
            $actions = $this->userOperation->getOperations($this->getUser(), 'module', $request);


            if($module->isActive()) {

                $module->setActive(false);
                $module->setUserUpdate($currentUser);

                $em->flush();

                $message = "Le module a été désactivé avec Succès !";

            }
            else{
                $module->setActive(true);
                $module->setActive(true);(false);
                $module->setUserUpdate($currentUser);

                $em->flush();

                $message = "Le module a été activé avec Succès !";

            }


            $allModules = $moduleRep->findAll();

            $html = $this->render('settings/module/inc//list_modules.html.twig', array(
                "allModules" => $allModules,
                "actions" => $actions,
            ))->getContent();

            return new JsonResponse(array("html"=>$html , "message"=>$message));
        }


    }

    //SUBMODULES MANAGMENT

    #[Route('/subModule', name: 'subModule')]
    public function subModule(Request $request , PSousModuleRepository $pSousModuleRepository , UserRepository $userRep , PActionRepository $pActionRep , PModuleRepository $moduleRepository)
    {
        // $currentUser = $this->security->getUser();
        // $routeName = $request->attributes->get('_route');

        $actions = $this->userOperation->getOperations($this->getUser(), 'subModule', $request);


        if(count($actions) == 0){
            return $this->render('errors/403.html.twig');
        }

        // $modules = $session->get("modules");


        // $modules = GlobalController::userModules($currentUser->getId() ,$userRep, $moduleRepository);

        $allSubModules = $pSousModuleRepository->findAll();
        $allModules = $moduleRepository->findBy(["active" => true]);

        // dd($allSubModules);

        return $this->render('settings/sub_module/index.html.twig', [
            'allModules' => $allModules,
            'allSubModules' => $allSubModules,
            'actions' => $actions,
        ]);
    }

    #[Route('/addSubModule', name: 'addSubModule')]
    public function addSubModule(Request $request , ManagerRegistry $doctrine , PModuleRepository $moduleRep , PSousModuleRepository $subModuleRepository, PActionRepository $pActionRep )
    {

        $currentUser = $this->security->getUser();

        $actions = $this->userOperation->getOperations($this->getUser(), 'subModule', $request);


        $em = $doctrine->getManager();
        if($request->isXmlHttpRequest()){

            // dd($request);
            $subModule = new PSousModule();

            $subModule->setNom($request->get("nom"));
            $subModule->setRoute($request->get("route"));
            $subModule->setUserUpdate($currentUser);
            $subModule->setDateUpdate(new \DateTime());
            $subModule->setPModule($moduleRep->find($request->get("module")));

            $em->persist($subModule);
            $em->flush();

            $allSubModules = $subModuleRepository->findAll();


            // dd($modules);

            $html = $this->render('settings/sub_module/inc//list_sub_modules.html.twig',[
                'allSubModules' => $allSubModules,
                'actions' => $actions,
            ]);

            return new JsonResponse($html->getContent());



        }
    }

    #[Route('/findSubModule', name: 'findSubModule')]
    public function findSubModule(PSousModuleRepository $subModuleRep , Request $request)
    {

        if($request->isXmlHttpRequest()){

            $subModule = $subModuleRep->find($request->get("idSubModule"));

            // dd($subModule);

            $data = [
                "id"=> $subModule->getId(),
                "route"=> $subModule->getRoute(),
                "nom" => $subModule->getNom(),
                "module" => $subModule->getPModule()->getId()
            ];
            // dd($data);
            return new JsonResponse($data);
        }
    }

    #[Route('/updateSubModule', name: 'updateSubModule')]
    public function updateSubModule(Request $request , ManagerRegistry $doctrine , PModuleRepository $moduleRep , PSousModuleRepository $subModuleRepository, PActionRepository $pActionRep )
    {

        $currentUser = $this->security->getUser();

        $em = $doctrine->getManager();
        if($request->isXmlHttpRequest()){

            $actions = $this->userOperation->getOperations($this->getUser(), 'subModule', $request);


            // dd($request);
            $subModule = $subModuleRepository->find($request->get("idSubModule"));

            $subModule->setNom($request->get("nom"));
            $subModule->setRoute($request->get("route"));
            $subModule->setUserUpdate($currentUser);
            $subModule->setDateUpdate(new \DateTime());
            $subModule->setPModule($moduleRep->find($request->get("module")));

            $em->flush();

            $allSubModules = $subModuleRepository->findAll();


            // dd($allSubModules);

            $html = $this->render('settings/sub_module/inc//list_sub_modules.html.twig',[
                'allSubModules' => $allSubModules,
                'actions' => $actions
            ]);

            return new JsonResponse($html->getContent());



        }
    }

    #[Route('/activateSubModule', name: 'activateSubModule')]
    public function activateSubModule(Request $request , ManagerRegistry $doctrine , PModuleRepository $moduleRep , PSousModuleRepository $subModuleRepository, PActionRepository $pActionRep)
    {

        if($request->isXmlHttpRequest()){

            $em = $doctrine->getManager();
            $subModule = $subModuleRepository->find($request->get("idSubModule"));
            $currentUser = $this->security->getUser();
            $actions = $this->userOperation->getOperations($this->getUser(), 'subModule', $request);


            if($subModule->isActive()) {

                $subModule->setActive(false);
                $subModule->setUserUpdate($currentUser);

                $em->flush();

                $message = "Le module a été désactivé avec Succès !";

            }
            else{
                $subModule->setActive(true);
                $subModule->setActive(true);(false);
                $subModule->setUserUpdate($currentUser);

                $em->flush();

                $message = "Le module a été activé avec Succès !";

            }


            $allSubModules = $subModuleRepository->findAll();

            // dd($allSubModules);

            $html = $this->render('settings/sub_module/inc//list_sub_modules.html.twig', array(
                'allSubModules' => $allSubModules,
                'actions' => $actions
            ))->getContent();

            return new JsonResponse(array("html"=>$html , "message"=>$message));
        }


    }


//ACTIONS MANAGMENT

#[Route('/action', name: 'action')]
public function action(Request $request , PSousModuleRepository $pSousModuleRepository , UserRepository $userRep , PActionRepository $pActionRep , PModuleRepository $moduleRepository)
{
    $actions = $this->userOperation->getOperations($this->getUser(), 'action', $request);


    if(count($actions) == 0){
        return $this->render('errors/403.html.twig');
    }


    $allSubModules = $pSousModuleRepository->findAll();
    $allActions = $pActionRep->findAll();

    // dd($actions);

    return $this->render('settings/action/index.html.twig', [
        'allSubModules' => $allSubModules,
        'allActions' => $allActions,
        'actions' => $actions,

    ]);
}

#[Route('/addAction', name: 'addAction')]
public function addAction(Request $request , ManagerRegistry $doctrine , PModuleRepository $moduleRep , PSousModuleRepository $subModuleRepository, PActionRepository $pActionRep )
{
    $actions = $this->userOperation->getOperations($this->getUser(), 'action', $request);

    $currentUser = $this->security->getUser();

    $em = $doctrine->getManager();
    if($request->isXmlHttpRequest()){

        // dd($request);
        $action = new PAction();

        $action->setNom($request->get("actionName"));
        $action->setIcon($request->get("icon"));
        $action->setUserUpdate($currentUser);
        $action->setDateUpdate(new \DateTime());
        $action->setPSousModule($subModuleRepository->find($request->get("subModule")));
        $action->setOrd($request->get("ord"));
        $action->setClassName($request->get("className"));
        $action->setIdName($request->get("idName"));
        $action->setRoute($request->get("routeName"));

        if($request->get("horizontal") == "true"){
            $action->setHorizontal(true);
        }
        else{
            $action->setHorizontal(false);
        }

        $em->persist($action);
        $em->flush();

        $allActions = $pActionRep->findAll();

        // dd($modules);

        $html = $this->render('settings/action/inc/list_actions.html.twig',[
            'allActions' => $allActions,
            'actions' => $actions
        ]);

        return new JsonResponse($html->getContent());



    }
}

#[Route('/findAction', name: 'findAction')]
public function findAction(PActionRepository $actionRep , Request $request)
{
    if($request->isXmlHttpRequest()){

        $action = $actionRep->find($request->get("action"));

        // dd($subModule);

        $data = [
            "id"=> $action->getId(),
            "nom" => $action->getNom(),
            "icon" => $action->getIcon(),
            "sousModule" => $action->getPSousModule()->getId(),
            "id_button" => $action->getIdName(),
            "route" => $action->getRoute(),
            "horizontal" => $action->isHorizontal(),
        ];
        // dd($data);

        return new JsonResponse($data);
    }
}

#[Route('/updateAction', name: 'updateAction')]
public function updateAction(Request $request , ManagerRegistry $doctrine , PActionRepository $actionRep , PSousModuleRepository $subModuleRepository )
{
    $currentUser = $this->security->getUser();

    $em = $doctrine->getManager();
    if($request->isXmlHttpRequest()){

        $action = $actionRep->find($request->get("id"));

        // dd($request->get("horizontal"));
        $subModule = $subModuleRepository->find($request->get("sous_module"));

        $action->setNom($request->get("nom"));
        $action->setRoute($request->get("route"));
        $action->setPSousModule($subModule);
        $action->setIcon($request->get("icon"));
        $action->setIdName($request->get("id_button"));

        $action->setUserUpdate($currentUser);
        $action->setDateUpdate(new \DateTime());

        if($request->get("horizontal") == "true"){
            $action->setHorizontal(true);
        }
        else{
            $action->setHorizontal(false);
        }

        $em->flush();

        $allActions = $actionRep->findAll();
        $actions = $this->userOperation->getOperations($this->getUser(), 'action', $request);


        // dd($modules);

        $html = $this->render('settings/action/inc/list_actions.html.twig',[
            'allActions' => $allActions,
            'actions' => $actions
        ]);

        return new JsonResponse($html->getContent());
        }
    }

    #[Route('/deleteAction', name: 'deleteAction')]
    public function deleteAction(Request $request , ManagerRegistry $doctrine , PActionRepository $actionRep , PSousModuleRepository $subModuleRepository )
    {
        $currentUser = $this->security->getUser();

        $em = $doctrine->getManager();
        if($request->isXmlHttpRequest()){

            $action = $actionRep->find($request->get("action"));

            $action->setActive(false);
            $action->setUserUpdate($currentUser);
            $action->setDateUpdate(new \DateTime());

            $em->flush();

            $allActions = $actionRep->findAll();
            $actions = $this->userOperation->getOperations($this->getUser(), 'action', $request);

            // dd($modules);

            $html = $this->render('settings/action/inc/list_actions.html.twig',[
                'allActions' => $allActions,
                'actions' => $actions
            ]);

            return new JsonResponse($html->getContent());
        }
    }



}
