<?php

namespace App\Repository;

use App\Entity\PTypePrestation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PTypePrestation>
 *
 * @method PTypePrestation|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTypePrestation|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTypePrestation[]    findAll()
 * @method PTypePrestation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTypePrestationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTypePrestation::class);
    }

//    /**
//     * @return PTypePrestation[] Returns an array of PTypePrestation objects
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

//    public function findOneBySomeField($value): ?PTypePrestation
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
