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
    private ?int $km_depart = null;

    #[ORM\Column]
    private ?int $km_retour = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_mission = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $heure_depart = null;

    #[ORM\Column(length: 255)]
    private ?string $lieu_mission = null;

    #[ORM\Column(length: 255)]
    private ?string $ville_mission = null;

    #[ORM\Column]
    private ?float $tarif_unique = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $duree_mission = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionDets')]
    private ?PConducteur $conducteur_id = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionDets')]
    private ?PVehicule $vehicule_id = null;
   

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




    public function getKmDepart(): ?int
    {
        return $this->km_depart;
    }

    public function setKmDepart(int $km_depart): static
    {
        $this->km_depart = $km_depart;

        return $this;
    }

    public function getKmRetour(): ?int
    {
        return $this->km_retour;
    }

    public function setKmRetour(int $km_retour): static
    {
        $this->km_retour = $km_retour;

        return $this;
    }

    public function getDateMission(): ?\DateTimeInterface
    {
        return $this->date_mission;
    }

    public function setDateMission(\DateTimeInterface $date_mission): static
    {
        $this->date_mission = $date_mission;

        return $this;
    }

    public function getHeureDepart(): ?\DateTimeInterface
    {
        return $this->heure_depart;
    }

    public function setHeureDepart(\DateTimeInterface $heure_depart): static
    {
        $this->heure_depart = $heure_depart;

        return $this;
    }

    public function getLieuMission(): ?string
    {
        return $this->lieu_mission;
    }

    public function setLieuMission(string $lieu_mission): static
    {
        $this->lieu_mission = $lieu_mission;

        return $this;
    }

    public function getVilleMission(): ?string
    {
        return $this->ville_mission;
    }

    public function setVilleMission(string $ville_mission): static
    {
        $this->ville_mission = $ville_mission;

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

    public function getDureeMission(): ?\DateTimeInterface
    {
        return $this->duree_mission;
    }

    public function setDureeMission(\DateTimeInterface $duree_mission): static
    {
        $this->duree_mission = $duree_mission;

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







}
