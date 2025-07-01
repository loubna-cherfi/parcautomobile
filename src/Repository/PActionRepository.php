<?php

namespace App\Repository;

use App\Entity\PAction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PAction>
 *
 * @method PAction|null find($id, $lockMode = null, $lockVersion = null)
 * @method PAction|null findOneBy(array $criteria, array $orderBy = null)
 * @method PAction[]    findAll()
 * @method PAction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PActionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PAction::class);
    }

    public function save(PAction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PAction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findActionsByUserAndRouteName($route, $userId = null, $dossier = null)
    {
        // dd($userId, $route, $dossier);
        if($userId) {
            return $this->createQueryBuilder('a')
            ->innerJoin('a.pUserDossierActions','userDossierAction')
            ->innerJoin('a.pSousModule', 's')
            ->where('userDossierAction.userr = :userId')
            ->andWhere('s.route = :route')
            ->andWhere('userDossierAction.dossier = :dossier')
            ->andWhere('a.active = 1')
            ->andWhere('a.modal = 0')
            ->orderBy('a.ord', 'ASC')
            ->setParameter('userId', $userId)
            ->setParameter('route', $route)
            ->setParameter('dossier', $dossier)
            ->getQuery()
            ->getResult()
            ;
        } else {
            return $this->createQueryBuilder('a')
            ->innerJoin('a.pSousModule', 's')
            ->andWhere('s.route = :route')
            ->andWhere('a.active = 1')
            ->andWhere('a.modal = 0')
            ->orderBy('a.ord', 'ASC')
            ->setParameter('route', $route)
            ->getQuery()
            ->getResult()
            ;

        }
    }

    public function findModalActionsByUserAndRouteName($route, $userId = null, $dossier = null)
    {
        if($userId) {
            return $this->createQueryBuilder('a')
            ->innerJoin('a.pUserDossierActions','userDossierAction')
            ->innerJoin('a.pSousModule', 's')
            ->where('userDossierAction.userr = :userId')
            ->andWhere('s.route = :route')
            ->andWhere('userDossierAction.dossier = :dossier')
            ->andWhere('a.active = 1')
            ->andWhere('a.modal = 1')
            ->orderBy('a.ord', 'ASC')
            ->setParameter('userId', $userId)
            ->setParameter('route', $route)
            ->setParameter('dossier', $dossier)
            ->getQuery()
            ->getResult()
            ;
        } else {
            return $this->createQueryBuilder('a')
            ->innerJoin('a.pSousModule', 's')
            ->andWhere('s.route = :route')
            ->andWhere('a.active = 1')
            ->andWhere('a.modal = 1')
            ->orderBy('a.ord', 'ASC')
            ->setParameter('route', $route)
            ->getQuery()
            ->getResult()
            ;

        }
    }

    public function findUserAction($userId , $actionId)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin('a.userAction','u')
            ->where('u.id = :userId')
            ->andWhere('a.id = :actionId')
            ->orderBy('a.ord', 'ASC')
            ->setParameter('userId', $userId)
            ->setParameter('actionId', $actionId)
            ->select('a.id')
            ->getQuery()
            ->getResult()
        ;
    }

//    /**
//     * @return PAction[] Returns an array of PAction objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PAction
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
