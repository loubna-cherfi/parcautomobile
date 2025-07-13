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

    #[ORM\Column(length: 255,nullable:true)]
    private ?string $lieu = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,nullable:true)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(type: Types::TIME_MUTABLE,nullable:true)]
    private ?\DateTimeInterface $heure = null;

    #[ORM\Column]
    private ?float $tarif = null;

  

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PPrestation $prestation_id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PVehicule $vehicule_id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeDets')]
    private ?PConducteur $conducteur_id = null;

    #[ORM\Column(length: 255,nullable:true)]
    private ?string $adressDepart = null;

    #[ORM\Column(length: 255)]
    private ?int $nbjour = null;

    #[ORM\Column]
    private ?int $quantite = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE,nullable:true)]
    private ?\DateTimeInterface $dateDemande = null;

    #[ORM\Column(nullable:true)]
    private ?bool $majWeekend = null;

    #[ORM\Column(nullable:true)]
    private ?bool $majNuit = null;

    #[ORM\Column(nullable:true)]
    private ?float $carburant = null;

    #[ORM\Column(nullable:true)]
    private ?float $jawaz = null;

    #[ORM\Column(nullable:true)]
    private ?int $kilometrage = null;



   


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

    public function getAdressDepart(): ?string
    {
        return $this->adressDepart;
    }

    public function setAdressDepart(string $adressDepart): static
    {
        $this->adressDepart = $adressDepart;

        return $this;
    }

    public function getNbjour(): ?int
    {
        return $this->nbjour;
    }

    public function setNbjour(int $nbjour): static
    {
        $this->nbjour = $nbjour;

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

    public function getDateDemande(): ?\DateTimeInterface
    {
        return $this->dateDemande;
    }

    public function setDateDemande(\DateTimeInterface $dateDemande): static
    {
        $this->dateDemande = $dateDemande;

        return $this;
    }

    public function isMajWeekend(): ?bool
    {
        return $this->majWeekend;
    }

    public function setMajWeekend(bool $majWeekend): static
    {
        $this->majWeekend = $majWeekend;

        return $this;
    }

    public function isMajNuit(): ?bool
    {
        return $this->majNuit;
    }

    public function setMajNuit(bool $majNuit): static
    {
        $this->majNuit = $majNuit;

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

    public function getJawaz(): ?float
    {
        return $this->jawaz;
    }

    public function setJawaz(float $jawaz): static
    {
        $this->jawaz = $jawaz;

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

   
  
}
