<?php

namespace App\Controller\Settings;

use App\Entity\PModule;
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

#[Route('/setting/module')]
class ModuleController extends AbstractController
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

    #[Route('/', name: 'app_settings_module')]
    public function index(PEntiteRepository $pEntiteRepository , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request): Response
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_settings_module', $request);
        $professions = $professionRep->findAll();
        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        return $this->render('settings/module/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
        ]);
    }

    #[Route('/list', name: 'app_settings_module_list', options: ['expose' => true])]
    public function app_settings_module_list(Request $request): Response
    {
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_settings_module', $request);
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
            ->select('m.id, m.nom, m.icon, m.route, m.ord, m.active')
            ->from(PModule::class, 'm');
        if (!empty($search)) {
            $queryBuilder->andWhere('(m.nom LIKE :search OR m.icon LIKE :search OR m.route LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        $filteredRecords = count($queryBuilder->getQuery()->getResult());

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();

        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
            ->select('COUNT(m.id)')
            ->from(PModule::class, 'm')
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

    #[Route('/add', name: 'app_settings_module_add',  options: ['expose' => true])]
    public function app_settings_module_add(Request $request): Response
    {
        $module = new PModule();

        $module->setNom($request->get("nom"));
        $module->setIcon($request->get("icon"));
        $module->setRoute($request->get("route"));
        $module->setUserUpdate($this->getUser());
        $module->setDateUpdate(new \DateTime());
        $module->setActive(false);

        $this->em->persist($module);
        $this->em->flush();

        return new JsonResponse("Module Ajouté", 200);
    }

    #[Route('/activer/{module}', name: 'app_settings_module_toggle_active', options: ['expose' => true])]
    public function app_settings_sousmodule_toggle_active(PModule $module): Response
    {
        $module->setActive(!$module->isActive());

        $this->em->flush();
        return new JsonResponse(1);
    }
}
