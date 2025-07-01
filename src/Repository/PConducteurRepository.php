<?php

namespace App\Repository;

use App\Entity\PConducteur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PConducteur>
 *
 * @method PConducteur|null find($id, $lockMode = null, $lockVersion = null)
 * @method PConducteur|null findOneBy(array $criteria, array $orderBy = null)
 * @method PConducteur[]    findAll()
 * @method PConducteur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PConducteurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PConducteur::class);
    }

//    /**
//     * @return PConducteur[] Returns an array of PConducteur objects
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

//    public function findOneBySomeField($value): ?PConducteur
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
