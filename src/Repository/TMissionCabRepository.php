<?php

namespace App\Repository;

use App\Entity\TMissionCab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMissionCab>
 *
 * @method TMissionCab|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMissionCab|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMissionCab[]    findAll()
 * @method TMissionCab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMissionCabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMissionCab::class);
    }

//    /**
//     * @return TMissionCab[] Returns an array of TMissionCab objects
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

//    public function findOneBySomeField($value): ?TMissionCab
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
