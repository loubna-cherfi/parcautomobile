<?php

namespace App\Repository;

use App\Entity\PUserDossierAction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PUserDossierAction>
 *
 * @method PUserDossierAction|null find($id, $lockMode = null, $lockVersion = null)
 * @method PUserDossierAction|null findOneBy(array $criteria, array $orderBy = null)
 * @method PUserDossierAction[]    findAll()
 * @method PUserDossierAction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PUserDossierActionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PUserDossierAction::class);
    }

    public function save(PUserDossierAction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PUserDossierAction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PUserDossierAction[] Returns an array of PUserDossierAction objects
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

//    public function findOneBySomeField($value): ?PUserDossierAction
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
