<?php

namespace App\Entity;

use App\Repository\PPrestationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrestationRepository::class)]
class PPrestation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_prestation = null;

#[ORM\ManyToOne(inversedBy: '')]
#[ORM\JoinColumn(nullable: true)]
    private ?PTypePrestation $type_prestation_id = null;

 

    #[ORM\Column]
    private ?float $tarif_jour = null;

    #[ORM\Column]
    private ?float $tarif_nuit = null;

    #[ORM\Column]
    private ?int $kilometrage = null;

    #[ORM\Column(length: 255)]
    private ?string $descriprtion = null;

    #[ORM\Column(length: 255)]
    private ?string $active = null;

    #[ORM\ManyToOne(inversedBy: 'PPrestations')]
    private ?User $user_created_id = null;

    #[ORM\OneToMany(mappedBy: 'prestation_id', targetEntity: TDemandeDet::class)]
    private Collection $tDemandeDets;

    #[ORM\ManyToOne(cascade: ['persist', 'remove'])]
    private ?PZone $zone_id = null;

    #[ORM\Column(nullable: true)]
    private ?float $tarifWeekEnd = null;

    #[ORM\Column]
    private ?bool $isKilometrage = null;

    #[ORM\Column]
    private ?bool $isAvecNbPersonne = null;

    #[ORM\OneToMany(mappedBy: 'prestation', targetEntity: TMissionDet::class)]
    private Collection $tMissionDets;

    public function __construct()
    {
        $this->tDemandeDets = new ArrayCollection();
        $this->tMissionDets = new ArrayCollection();
    }

 

 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPrestation(): ?string
    {
        return $this->nom_prestation;
    }

    public function setNomPrestation(string $nom_prestation): static
    {
        $this->nom_prestation = $nom_prestation;

        return $this;
    }

    public function getTypePrestationId(): ?PTypePrestation
    {
        return $this->type_prestation_id;
    }

    public function setTypePrestationId(?PTypePrestation $type_prestation_id): static
    {
        $this->type_prestation_id = $type_prestation_id;

        return $this;
    }

   

  

    public function getTarifJour(): ?float
    {
        return $this->tarif_jour;
    }

    public function setTarifJour(float $tarif_jour): static
    {
        $this->tarif_jour = $tarif_jour;

        return $this;
    }

    public function getTarifNuit(): ?float
    {
        return $this->tarif_nuit;
    }

    public function setTarifNuit(float $tarif_nuit): static
    {
        $this->tarif_nuit = $tarif_nuit;

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

    public function getDescriprtion(): ?string
    {
        return $this->descriprtion;
    }

    public function setDescriprtion(string $descriprtion): static
    {
        $this->descriprtion = $descriprtion;

        return $this;
    }

    public function getActive(): ?string
    {
        return $this->active;
    }

    public function setActive(string $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function getUserCreatedId(): ?User
    {
        return $this->user_created_id;
    }

    public function setUserCreatedId(?User $user_created_id): static
    {
        $this->user_created_id = $user_created_id;

        return $this;
    }

    /**
     * @return Collection<int, TDemandeDet>
     */
    public function getTDemandeDets(): Collection
    {
        return $this->tDemandeDets;
    }

    public function addTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if (!$this->tDemandeDets->contains($tDemandeDet)) {
            $this->tDemandeDets->add($tDemandeDet);
            $tDemandeDet->setPrestationId($this);
        }

        return $this;
    }

    public function removeTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if ($this->tDemandeDets->removeElement($tDemandeDet)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeDet->getPrestationId() === $this) {
                $tDemandeDet->setPrestationId(null);
            }
        }

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

    public function getTarifWeekEnd(): ?float
    {
        return $this->tarifWeekEnd;
    }

    public function setTarifWeekEnd(float $tarifWeekEnd): static
    {
        $this->tarifWeekEnd = $tarifWeekEnd;

        return $this;
    }

    public function isIsKilometrage(): ?bool
    {
        return $this->isKilometrage;
    }

    public function setIsKilometrage(bool $isKilometrage): static
    {
        $this->isKilometrage = $isKilometrage;

        return $this;
    }

    public function isIsAvecNbPersonne(): ?bool
    {
        return $this->isAvecNbPersonne;
    }

    public function setIsAvecNbPersonne(bool $isAvecNbPersonne): static
    {
        $this->isAvecNbPersonne = $isAvecNbPersonne;

        return $this;
    }

    /**
     * @return Collection<int, TMissionDet>
     */
    public function getTMissionDets(): Collection
    {
        return $this->tMissionDets;
    }

    public function addTMissionDet(TMissionDet $tMissionDet): static
    {
        if (!$this->tMissionDets->contains($tMissionDet)) {
            $this->tMissionDets->add($tMissionDet);
            $tMissionDet->setPrestation($this);
        }

        return $this;
    }

    public function removeTMissionDet(TMissionDet $tMissionDet): static
    {
        if ($this->tMissionDets->removeElement($tMissionDet)) {
            // set the owning side to null (unless already changed)
            if ($tMissionDet->getPrestation() === $this) {
                $tMissionDet->setPrestation(null);
            }
        }

        return $this;
    }


 
}
