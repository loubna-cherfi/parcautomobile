<?php

namespace App\Repository;

use App\Entity\PEntite;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PEntite>
 *
 * @method PEntite|null find($id, $lockMode = null, $lockVersion = null)
 * @method PEntite|null findOneBy(array $criteria, array $orderBy = null)
 * @method PEntite[]    findAll()
 * @method PEntite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PEntiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PEntite::class);
    }

//    /**
//     * @return PEntite[] Returns an array of PEntite objects
//     */

    public function findSites(User $user): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.pUserDossierActions', 'u')
            ->where('p.active = 1')
            // ->andWhere('p.parent IS NOT NULL') // Optional: Uncomment if needed
            ->andWhere('u.userr = :user')
            ->orderBy('p.ord', 'ASC')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }
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

//    public function findOneBySomeField($value): ?PEntite
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
