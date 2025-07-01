<?php

namespace App\Repository;

use App\Entity\PTypePiece;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PTypePiece>
 *
 * @method PTypePiece|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTypePiece|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTypePiece[]    findAll()
 * @method PTypePiece[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTypePieceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTypePiece::class);
    }

//    /**
//     * @return PTypePiece[] Returns an array of PTypePiece objects
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

//    public function findOneBySomeField($value): ?PTypePiece
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
