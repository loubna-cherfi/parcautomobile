<?php

namespace App\Repository;

use App\Entity\PadressMission;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PadressMission>
 *
 * @method PadressMission|null find($id, $lockMode = null, $lockVersion = null)
 * @method PadressMission|null findOneBy(array $criteria, array $orderBy = null)
 * @method PadressMission[]    findAll()
 * @method PadressMission[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PadressMissionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PadressMission::class);
    }

//    /**
//     * @return PadressMission[] Returns an array of PadressMission objects
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

//    public function findOneBySomeField($value): ?PadressMission
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
