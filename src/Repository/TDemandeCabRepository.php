<?php

namespace App\Repository;

use App\Entity\TDemandeCab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TDemandeCab>
 *
 * @method TDemandeCab|null find($id, $lockMode = null, $lockVersion = null)
 * @method TDemandeCab|null findOneBy(array $criteria, array $orderBy = null)
 * @method TDemandeCab[]    findAll()
 * @method TDemandeCab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TDemandeCabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TDemandeCab::class);
    }

//    /**
//     * @return TDemandeCab[] Returns an array of TDemandeCab objects
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

//    public function findOneBySomeField($value): ?TDemandeCab
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
