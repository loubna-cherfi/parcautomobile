<?php

namespace App\Repository;

use App\Entity\PMarqueVehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PMarqueVehicule>
 *
 * @method PMarqueVehicule|null find($id, $lockMode = null, $lockVersion = null)
 * @method PMarqueVehicule|null findOneBy(array $criteria, array $orderBy = null)
 * @method PMarqueVehicule[]    findAll()
 * @method PMarqueVehicule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PMarqueVehiculeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PMarqueVehicule::class);
    }

//    /**
//     * @return PMarqueVehicule[] Returns an array of PMarqueVehicule objects
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

//    public function findOneBySomeField($value): ?PMarqueVehicule
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
