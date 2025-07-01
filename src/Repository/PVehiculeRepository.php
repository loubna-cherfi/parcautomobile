<?php

namespace App\Repository;

use App\Entity\PVehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PVehicule>
 *
 * @method PVehicule|null find($id, $lockMode = null, $lockVersion = null)
 * @method PVehicule|null findOneBy(array $criteria, array $orderBy = null)
 * @method PVehicule[]    findAll()
 * @method PVehicule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PVehiculeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PVehicule::class);
    }

//    /**
//     * @return PVehicule[] Returns an array of PVehicule objects
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

//    public function findOneBySomeField($value): ?PVehicule
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
