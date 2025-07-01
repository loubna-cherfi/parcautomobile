<?php

namespace App\Controller;

use PDO;
use App\Entity\User;
use App\Entity\PEntite;
use App\Service\UserOperation;
use App\Entity\PUserDossierAction;
use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use function PHPUnit\Framework\isNull;
use App\Entity\FactureDetTechniqueHosix;
use App\Entity\PAppParametrages;
use App\Repository\PSousModuleRepository;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use thiagoalessio\TesseractOCR\TesseractOCR;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PUserDossierActionRepository;
use App\Repository\PEntiteOrgRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use App\Service\SyncHosixData;


class GlobalController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;

    private $em;

    private $ocrService;

    private $syncHosixDataService;


    public function __construct(Security $security , ManagerRegistry $doctrine )
    {
       $this->security = $security;
       $this->em = $doctrine->getManager();

    }

    //pour tester si user affecter a un entite et les action dans cette netite

    #[Route('/addAffectation', name: 'addAffectation')]
    public function addAffectation(ManagerRegistry $doctrin, PActionRepository $pActionRepository , PEntiteRepository $pEntiteRepository , UserRepository $userRep)
    {
        $em = $doctrin->getManager();

        $u = new PUserDossierAction();
        $u->setUserr($userRep->find(1));
        $u->setDossier($pEntiteRepository->find(1));
        $u->setAction($pActionRepository->find(1));

        $em->persist($u);
        $em->flush();
    }

    #[Route('/app', name: 'app_global')]
    public function index(PActionRepository $pActionRepository , PEntiteRepository $pEntiteRepository , PEntiteOrgRepository $pEntiteOrgRepository)
    {
        $organisations = $pEntiteOrgRepository->findBy(["active" => true]);

        $user = $this->getUser();

        if(in_array('ROLE_ADMIN',$user->getRoles())){
            $sites = $pEntiteRepository->findBy(['active' => true]);
        }
        else{
            $sites = $pEntiteRepository->findSites($user);
        }

        if (count($sites) === 1) {
            $site = $sites[0];

            return $this->redirectToRoute('app_site_chois', ['id' => $site->getId()]);
        } else {
            return $this->render('global/index.html.twig', [
                "organisations" => $organisations,
                "sites" => $sites
            ]);
        }
    }

    #[Route('/app1', name: 'app1_global')]
    public function index1(PActionRepository $pActionRepository , PEntiteRepository $pEntiteRepository , PEntiteOrgRepository $pEntiteOrgRepository)
    {
        $organisations = $pEntiteOrgRepository->findBy(["active" => true]);

        $user = $this->getUser();

        $sites = $pEntiteRepository->findSites($user);


        return $this->render('global/index1.html.twig', [
            "organisations" => $organisations,
            "sites" => $sites
        ]);
    }

    #[Route('/dossier/{id}', name: 'app_site_chois')]
    public function site(Request $request, $id, UserOperation $userOperation, PUserDossierActionRepository $pUserDossierActionRepository ,PActionRepository $pActionRepository, PEntiteRepository $pEntiteRepository, PModuleRepository $pModuleRepository)
    {
        $session = new Session();


        $currentUser = $this->security->getUser();

        if(in_array('ROLE_ADMIN',$currentUser->getRoles())){
            $modules = $pModuleRepository->findBy(['active' => true], ['ord' => 'ASC']);
        }
        else{
            $modules = $pModuleRepository->findUserModulesBySite($currentUser, $pEntiteRepository->find($id));
        }

        // dd($modules[0]->getPSousModule()[0]);
        // dd($modules);
        $session->set("modules", $modules);

        $dossier = $this->em->getRepository(PEntite::class)->find($id);
        $session->set("dossier", $dossier);

        // $app_mode = $this->em->getRepository(PAppParametrages::class)->findOneBy(["designation" => "APP_MODE"]);
        // $session->set("APP_MODE", $app_mode->getValue());

        $actions = $userOperation->getOperations($this->getUser(), 'app_list_rendezvous', $request);


        // foreach($modules as $module){
        //     dd($module->getPSousModule()->current());
        // }

        // return $this->redirectToRoute("app_list_rendezvous");

        // return $this->render('gestion_rdv/rendez_vous/index.html.twig', [
        //     'actions' => $actions,
        //     'origines'=>$origines
        // ]);


        // return $this->render('global/list_modules.html.twig');
        return $this->render('global/module_choise.html.twig');
    }

    #[Route('/dossier/module/{id}', name: 'app_dossier_modules_chois')]
    public function setting_modules($id, PUserDossierActionRepository $pUserDossierActionRepository ,PActionRepository $pActionRepository, PEntiteRepository $pEntiteRepository, PModuleRepository $pModuleRepository)
    {

        return $this->render('global/list_modules.html.twig');
    }


}
