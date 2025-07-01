<?php

namespace App\Repository;

use App\Entity\PEntiteOrg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PEntiteOrg>
 *
 * @method PEntiteOrg|null find($id, $lockMode = null, $lockVersion = null)
 * @method PEntiteOrg|null findOneBy(array $criteria, array $orderBy = null)
 * @method PEntiteOrg[]    findAll()
 * @method PEntiteOrg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PEntiteOrgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PEntiteOrg::class);
    }

//    /**
//     * @return PEntiteOrg[] Returns an array of PEntiteOrg objects
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

//    public function findOneBySomeField($value): ?PEntiteOrg
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
