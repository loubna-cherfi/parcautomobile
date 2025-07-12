<?php

namespace App\Service;

use App\Entity\PPrestation;

class TarifCalculator
{
    /**
     * Calcule le tarif total d’une prestation selon la date, la quantité et le nombre de jours.
     */
    public function calculerTarif(PPrestation $prestation, \DateTime $date, int $quantite = 1, int $nbJours = 1): float
    {
        // Vérification jour de semaine ou weekend
        $jour = (int) $date->format('w'); // 0 (dimanche) à 6 (samedi)
        $heure = (int) $date->format('H'); // Heure sur 24h

        $tarifUnitaire = 0;

        if ($jour === 0 || $jour === 6) {
            // Week-end
            $tarifUnitaire = $prestation->getTarifWeekend() ?? 0;
        } elseif ($heure >= 20 || $heure < 6) {
            // Nuit (entre 20h et 6h du matin)
            $tarifUnitaire = $prestation->getTarifNuit() ?? 0;
        } else {
            // Journée normale
            $tarifUnitaire = $prestation->getTarifJour() ?? 0;
        }

        // Total = tarif unitaire x quantité x nombre de jours
        return $tarifUnitaire * $quantite * $nbJours;
    }
}
