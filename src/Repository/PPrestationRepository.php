<?php

namespace App\Repository;

use App\Entity\PPrestation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrestation>
 *
 * @method PPrestation|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrestation|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrestation[]    findAll()
 * @method PPrestation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrestationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrestation::class);
    }

//    /**
//     * @return PPrestation[] Returns an array of PPrestation objects
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

//    public function findOneBySomeField($value): ?PPrestation
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
