<?php

namespace App\Repository;

use App\Entity\PProfession;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PProfession>
 *
 * @method PProfession|null find($id, $lockMode = null, $lockVersion = null)
 * @method PProfession|null findOneBy(array $criteria, array $orderBy = null)
 * @method PProfession[]    findAll()
 * @method PProfession[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PProfessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PProfession::class);
    }

//    /**
//     * @return PProfession[] Returns an array of PProfession objects
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

//    public function findOneBySomeField($value): ?PProfession
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
