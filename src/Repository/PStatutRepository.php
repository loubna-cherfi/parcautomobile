<?php

namespace App\Repository;

use App\Entity\PStatut;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PStatut>
 *
 * @method PStatut|null find($id, $lockMode = null, $lockVersion = null)
 * @method PStatut|null findOneBy(array $criteria, array $orderBy = null)
 * @method PStatut[]    findAll()
 * @method PStatut[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PStatutRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PStatut::class);
    }

//    /**
//     * @return PStatut[] Returns an array of PStatut objects
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

//    public function findOneBySomeField($value): ?PStatut
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
