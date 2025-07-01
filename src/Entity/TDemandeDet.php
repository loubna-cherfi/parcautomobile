<?php

namespace App\Entity;

use App\Repository\TDemandeDetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TDemandeDetRepository::class)]
class TDemandeDet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?TDemandeCab $demande_id = null;

    #[ORM\Column(length: 255)]
    private ?string $lieu = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $heure = null;

    #[ORM\Column]
    private ?float $tarif = null;

    #[ORM\Column(length: 255)]
    private ?string $ville = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PPrestation $prestation_id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PVehicule $vehicule_id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PConducteur $conducteur_id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PZone $zone_id = null;

   


    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, PPrestation>
     */
    
    public function getDemandeId(): ?TDemandeCab
    {
        return $this->demande_id;
    }

    public function setDemandeId(?TDemandeCab $demande_id): static
    {
        $this->demande_id = $demande_id;

        return $this;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(string $lieu): static
    {
        $this->lieu = $lieu;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getHeure(): ?\DateTimeInterface
    {
        return $this->heure;
    }

    public function setHeure(\DateTimeInterface $heure): static
    {
        $this->heure = $heure;

        return $this;
    }

    public function getTarif(): ?float
    {
        return $this->tarif;
    }

    public function setTarif(float $tarif): static
    {
        $this->tarif = $tarif;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): static
    {
        $this->ville = $ville;

        return $this;
    }

    /**
     * @return Collection<int, PPrestation>
     */
  


    public function getPrestationId(): ?PPrestation
    {
        return $this->prestation_id;
    }

    public function setPrestationId(?PPrestation $prestation_id): static
    {
        $this->prestation_id = $prestation_id;

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

    public function getConducteurId(): ?PConducteur
    {
        return $this->conducteur_id;
    }

    public function setConducteurId(?PConducteur $conducteur_id): static
    {
        $this->conducteur_id = $conducteur_id;

        return $this;
    }

    public function getZoneId(): ?PZone
    {
        return $this->zone_id;
    }

    public function setZoneId(?PZone $zone_id): static
    {
        $this->zone_id = $zone_id;

        return $this;
    }

  

  

  
}
