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
        $tarifBase = $prestation->getTarifJour(); 
        if (!$tarifBase) {
            return 0;
        }

        // Étape 1 : frais de gestion (2%)
        $fraisGestion = $tarifBase * 0.02;
        $tarifJour = $tarifBase + $fraisGestion;

        // Étape 2 : déterminer le jour et l'heure
        $jour = (int) $date->format('w'); // 0 (dimanche) à 6 (samedi)
        $heure = (int) $date->format('H'); // 0 à 23

        // Étape 3 : appliquer les majorations
        if ($jour === 0 || $jour === 6) {
            // Week-End : +25%
            $tarifUnitaire = $tarifJour + ($tarifJour * 0.25);
        } elseif ($heure >= 20 || $heure < 6) {
            // Nuit : +50%
            $tarifUnitaire = $tarifJour + ($tarifJour * 0.50);
        } else {
            // Jour normal
            $tarifUnitaire = $tarifJour;
        }

        return round($tarifUnitaire * $quantite * $nbJours, 2);
    }
}
