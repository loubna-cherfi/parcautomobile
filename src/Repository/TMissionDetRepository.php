<?php

namespace App\Repository;

use App\Entity\TMissionDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMissionDet>
 *
 * @method TMissionDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMissionDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMissionDet[]    findAll()
 * @method TMissionDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMissionDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMissionDet::class);
    }

//    /**
//     * @return TMissionDet[] Returns an array of TMissionDet objects
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

//    public function findOneBySomeField($value): ?TMissionDet
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
