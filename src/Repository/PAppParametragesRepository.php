<?php

namespace App\Repository;

use App\Entity\PAppParametrages;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PAppParametrages>
 *
 * @method PAppParametrages|null find($id, $lockMode = null, $lockVersion = null)
 * @method PAppParametrages|null findOneBy(array $criteria, array $orderBy = null)
 * @method PAppParametrages[]    findAll()
 * @method PAppParametrages[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PAppParametragesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PAppParametrages::class);
    }

//    /**
//     * @return PAppParametrages[] Returns an array of PAppParametrages objects
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

//    public function findOneBySomeField($value): ?PAppParametrages
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
