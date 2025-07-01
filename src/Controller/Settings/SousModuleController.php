<?php

namespace App\Controller\Settings;

use App\Entity\PModule;
use App\Entity\PSousModule;
use App\Service\UserOperation;
use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PProfessionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/setting/sousmodule')]
class SousModuleController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;
    private $userOperation;
    private $em;

    public function __construct(Security $security, UserOperation $userOperation, EntityManagerInterface $em)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;
       $this->em = $em;
    }

    #[Route('/', name: 'app_settings_sousmodule')]
    public function index(PEntiteRepository $pEntiteRepository , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request): Response
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_settings_sousmodule', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        return $this->render('settings/sous_module/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
        ]);
    }

    #[Route('/list', name: 'app_settings_sousmodule_list', options: ['expose' => true])]
    public function app_settings_sousmodule_list(Request $request): Response
    {
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_settings_sousmodule', $request);
        $filteredActions = array_filter($actions, function($action) {
            return (!$action->isHorizontal());
        });
        $allActions = array_map(function($action) {
            return [
                'sousModuleId'=> $action->getPSousModule()->getId(),
                'idOp'=> $action->getId(),
                'idName' => $action->getIdName(),
                'nom' => $action->getNom(),
                'className' => $action->getClassName(),
                'icon' => $action->getIcon(),
            ];
        }, $filteredActions);
        // dd($actions);
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderDir = null;
        $orderDir = null;
        if (!empty($request->query->all('order'))) {
            $orderColumnIndex = $request->query->all('order')[0]['column'];
            $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
            $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        }

        $queryBuilder = $this->em->createQueryBuilder()
            ->select('s.id,m.nom as module, s.nom, s.route, s.ord, s.active')
            ->from(PSousModule::class, 's')
            ->leftJoin('s.pModule', 'm');
        if (!empty($search)) {
            $queryBuilder->andWhere('(s.nom LIKE :search OR m.nom LIKE :search OR s.route LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        $filteredRecords = count($queryBuilder->getQuery()->getResult());

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();

        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
            ->select('COUNT(s.id)')
            ->from(PSousModule::class, 's')
            ->getQuery()
            ->getSingleScalarResult();

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' => $filteredRecords,
            'data' => $results,
            'actions' => $allActions
        ]);
    }

    #[Route('/add', name: 'app_settings_sousmodule_add',  options: ['expose' => true])]
    public function app_settings_sousmodule_add(Request $request): Response
    {
        $module = $this->em->getRepository(PModule::class)->find($request->get("module"));
        // dd($module);

        $sousModule = new PSousModule();

        $sousModule->setNom($request->get("nom"));
        $sousModule->setPModule($module);
        $sousModule->setRoute($request->get("route"));
        $sousModule->setUserUpdate($this->getUser());
        $sousModule->setDateUpdate(new \DateTime());
        $sousModule->setActive(false);

        $this->em->persist($sousModule);
        $this->em->flush();

        return new JsonResponse("SousModule Ajouté", 200);
    }

    #[Route('/activer/{sousmodule}', name: 'app_settings_sousmodule_toggle_active', options: ['expose' => true])]
    public function app_settings_sousmodule_toggle_active(PSousModule $sousmodule): Response
    {
        $sousmodule->setActive(!$sousmodule->isActive());

        $this->em->flush();
        return new JsonResponse(1);
    }
}
