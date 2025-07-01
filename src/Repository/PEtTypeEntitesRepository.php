<?php

namespace App\Repository;

use App\Entity\PEtTypeEntites;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PEtTypeEntites>
 *
 * @method PEtTypeEntites|null find($id, $lockMode = null, $lockVersion = null)
 * @method PEtTypeEntites|null findOneBy(array $criteria, array $orderBy = null)
 * @method PEtTypeEntites[]    findAll()
 * @method PEtTypeEntites[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PEtTypeEntitesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PEtTypeEntites::class);
    }

//    /**
//     * @return PEtTypeEntites[] Returns an array of PEtTypeEntites objects
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

//    public function findOneBySomeField($value): ?PEtTypeEntites
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
