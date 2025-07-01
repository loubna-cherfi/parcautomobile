<?php

namespace App\Repository;

use App\Entity\PModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PModule>
 *
 * @method PModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method PModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method PModule[]    findAll()
 * @method PModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PModule::class);
    }

    public function save(PModule $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PModule $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PModule[] Returns an array of PModule objects
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

//    public function findOneBySomeField($value): ?PModule
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    public function findUserModules($userId)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin('m.pSousModule','s')
            ->innerJoin('s.pActions', 'a')
            ->innerJoin('a.userAction', 'u')
            ->where('u.id = :userId')
            ->andWhere('m.active = 1')
            ->orderBy('m.ord', 'ASC')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findUserModulesBySite($user , $site)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin('m.pSousModule','s')
            ->innerJoin('s.pActions', 'a')
            ->innerJoin('a.pUserDossierActions', 'u')
            ->where('u.userr = :user')
            ->andWhere('u.dossier = :site')
            ->andWhere('m.active = 1')
            ->orderBy('m.ord', 'ASC')
            ->setParameter('user', $user)
            ->setParameter('site', $site)
            ->getQuery()
            ->getResult()
        ;
    }

    
}
