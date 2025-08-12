<?php

namespace App\Entity;

use App\Repository\TMissionDetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMissionDetRepository::class)]
class TMissionDet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionDets')]
    private ?TMissionCab $mission_id = null;

    #[ORM\Column]
    private ?float $tarif_unique = null;

    
    #[ORM\ManyToOne(inversedBy: 'tMissionDets')]
    private ?PConducteur $conducteur_id = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionDets')]
    private ?PVehicule $vehicule_id = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionDets')]
    private ?PPrestation $prestation = null;

    #[ORM\Column]
    private ?int $nb_personne = null;

    #[ORM\Column]
    private ?int $quantite = null;

    #[ORM\Column]
    private ?int $kilometrage = null;

    #[ORM\Column ]
    private ?float $jawaz = null;

    #[ORM\Column]
    private ?float $carburant = null;
   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMissionId(): ?TMissionCab
    {
        return $this->mission_id;
    }

    public function setMissionId(?TMissionCab $mission_id): static
    {
        $this->mission_id = $mission_id;

        return $this;
    }

    public function getTarifUnique(): ?float
    {
        return $this->tarif_unique;
    }

    public function setTarifUnique(float $tarif_unique): static
    {
        $this->tarif_unique = $tarif_unique;

        return $this;
    }

    public function getConducteurId(): ?PConducteur
    {
        return $this->conducteur_id;
    }

    public function setConducteurId(?PConducteur $conducteur_id): static
    {
        $this->conducteur_id = $conducteur_id;

        return $this;
    }

    public function getVehiculeId(): ?PVehicule
    {
        return $this->vehicule_id;
    }
    public function setVehiculeId(?PVehicule $vehicule_id): static
    {
        $this->vehicule_id = $vehicule_id;

        return $this;
    }

    public function getPrestation(): ?PPrestation
    {
        return $this->prestation;
    }

    public function setPrestation(?PPrestation $prestation): static
    {
        $this->prestation = $prestation;

        return $this;
    }

    public function getNbPersonne(): ?int
    {
        return $this->nb_personne;
    }

    public function setNbPersonne(int $nb_personne): static
    {
        $this->nb_personne = $nb_personne;

        return $this;
    }

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(int $quantite): static
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getKilometrage(): ?int
    {
        return $this->kilometrage;
    }

    public function setKilometrage(int $kilometrage): static
    {
        $this->kilometrage = $kilometrage;

        return $this;
    }

    public function getJawaz(): ?float
    {
        return $this->jawaz;
    }

    public function setJawaz(float $jawaz): static
    {
        $this->jawaz = $jawaz;

        return $this;
    }

    public function getCarburant(): ?float
    {
        return $this->carburant;
    }

    public function setCarburant(float $carburant): static
    {
        $this->carburant = $carburant;

        return $this;
    }

}
