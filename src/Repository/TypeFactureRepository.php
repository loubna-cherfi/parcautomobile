<?php

namespace App\Repository;

use App\Entity\TypeFacture;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TypeFacture>
 *
 * @method TypeFacture|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeFacture|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeFacture[]    findAll()
 * @method TypeFacture[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeFactureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeFacture::class);
    }

//    /**
//     * @return TypeFacture[] Returns an array of TypeFacture objects
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

//    public function findOneBySomeField($value): ?TypeFacture
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
