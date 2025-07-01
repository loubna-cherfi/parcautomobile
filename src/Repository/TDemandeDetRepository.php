<?php

namespace App\Repository;

use App\Entity\TDemandeDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TDemandeDet>
 *
 * @method TDemandeDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method TDemandeDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method TDemandeDet[]    findAll()
 * @method TDemandeDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TDemandeDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TDemandeDet::class);
    }

//    /**
//     * @return TDemandeDet[] Returns an array of TDemandeDet objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TDemandeDet
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
