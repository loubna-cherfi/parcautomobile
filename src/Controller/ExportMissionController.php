<?php
namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ExportMissionController extends AbstractController
{
    #[Route('/export-excel', name: 'export_excel')]
    public function exportExcel(Request $request, EntityManagerInterface $em): StreamedResponse
    {
        // Récupération des filtres depuis l'URL (?date_debut=YYYY-MM-DD&date_fin=YYYY-MM-DD&dossier=ID)
        $dateDebut = $request->query->get('date_debut');
        $dateFin = $request->query->get('date_fin');
        $dossier = $request->query->get('dossier');

        $qb = $em->createQueryBuilder();
        $qb->select('cab', 'det', 'p')
            ->from('App\Entity\TMissionCab', 'cab')
            ->innerJoin('cab.tMissionDets', 'det')
            ->leftJoin('det.prestation', 'p');

        // Appliquer le filtre date mission uniquement si dateDebut ET dateFin sont définies
        if ($dateDebut && $dateFin) {
            $qb->andWhere('cab.date_mission BETWEEN :dateDebut AND :dateFin')
               ->setParameter('dateDebut', new \DateTime($dateDebut))
               ->setParameter('dateFin', new \DateTime($dateFin));
        }

        // Appliquer le filtre dossier si défini
        if ($dossier) {
            $qb->andWhere('cab.dossier = :dossier')
               ->setParameter('dossier', $dossier);
        }

        $results = $qb->getQuery()->getResult();

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // En-têtes
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'Demande ID');
        $sheet->setCellValue('C1', 'Tarif total');
        $sheet->setCellValue('D1', 'Dossier');
        $sheet->setCellValue('E1', 'Date mission');
        $sheet->setCellValue('F1', 'Contact');
        $sheet->setCellValue('J1', 'CIN');
        $sheet->setCellValue('H1', 'Nom bénéficiaire');
        $sheet->setCellValue('I1', 'Description');
        $sheet->setCellValue('G1', 'Observation');
        $sheet->setCellValue('K1', 'Adresse départ');
        $sheet->setCellValue('L1', 'Prestation');

        $row = 2;
        foreach ($results as $cab) {
            foreach ($cab->getTMissionDets() as $det) {
                $prestation = $det->getPrestation();

                $sheet->setCellValue('A' . $row, $cab->getId());
                $sheet->setCellValue('B' . $row, $cab->getDemandeId()?->getId() ?? '');
                $sheet->setCellValue('C' . $row, $cab->getTarifTotal());
                $sheet->setCellValue('D' . $row, $cab->getDossier()?->getId() ?? '');
                $sheet->setCellValue('E' . $row, $cab->getDateMission()?->format('Y-m-d H:i') ?? '');
                $sheet->setCellValue('F' . $row, $cab->getContact());
                $sheet->setCellValue('G' . $row, $cab->getObservation());
                $sheet->setCellValue('H' . $row, $cab->getNomBenificiaire());
                $sheet->setCellValue('I' . $row, $cab->getDescription());
                $sheet->setCellValue('J' . $row, $cab->getCin());
                $sheet->setCellValue('K' . $row, $cab->getAdressDepart());
                $sheet->setCellValue('L' . $row, $prestation?->getNomPrestation() ?? '');

                $row++;
            }
        }

        $response = new StreamedResponse(function () use ($spreadsheet) {
            $writer = new Xlsx($spreadsheet);
            $writer->save('php://output');
        });

        $fileName = 'export_' . date('Y-m-d_H-i-s') . '.xlsx';

        $response->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment;filename="' . $fileName . '"');
        $response->headers->set('Cache-Control', 'max-age=0');

        return $response;
    }
}
