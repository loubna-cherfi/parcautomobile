<?php

namespace App\Repository;

use App\Entity\PZone;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PZone>
 *
 * @method PZone|null find($id, $lockMode = null, $lockVersion = null)
 * @method PZone|null findOneBy(array $criteria, array $orderBy = null)
 * @method PZone[]    findAll()
 * @method PZone[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PZoneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PZone::class);
    }

//    /**
//     * @return PZone[] Returns an array of PZone objects
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

//    public function findOneBySomeField($value): ?PZone
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
