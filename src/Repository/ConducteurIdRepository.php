<?php

namespace App\Repository;

use App\Entity\ConducteurId;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConducteurId>
 *
 * @method ConducteurId|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConducteurId|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConducteurId[]    findAll()
 * @method ConducteurId[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConducteurIdRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConducteurId::class);
    }

//    /**
//     * @return ConducteurId[] Returns an array of ConducteurId objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ConducteurId
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
