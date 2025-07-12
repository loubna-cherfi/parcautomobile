<?php

namespace App\Entity;

use App\Repository\PVehiculeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;  
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PVehiculeRepository::class)]
class PVehicule
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $matricule = null;

    #[ORM\Column(length: 255)]
    private ?string $model = null;

    #[ORM\ManyToOne(inversedBy: 'pVehicules')]
    private ?PTypeVehicule $type_vehicule_id = null;

    #[ORM\ManyToOne(inversedBy: 'pVehicules')]
    private ?PMarqueVehicule $marque_vehicule_id = null;

    #[ORM\Column(length: 255)]
    private ?string $carburant = null;

    #[ORM\Column(length: 255)]
    private ?string $transmission = null;

    #[ORM\Column]
    private ?int $kilometrage = null;

    #[ORM\Column]
    private ?int $capacite = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\ManyToOne(inversedBy: 'pVehicules')]
    private ?User $user_created_id = null;

  

   

    #[ORM\Column]
    private ?bool $isDeleted = null;

    #[ORM\OneToMany(mappedBy: 'vehicule_id', targetEntity: TDemandeDet::class)]
    private Collection $tDemandeDets;

    #[ORM\OneToMany(mappedBy: 'vehicule_id', targetEntity: TMissionDet::class)]
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

    public function getMatricule(): ?string
    {
        return $this->matricule;
    }

    public function setMatricule(string $matricule): static
    {
        $this->matricule = $matricule;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(string $model): static
    {
        $this->model = $model;

        return $this;
    }

    public function getTypeVehiculeId(): ?PTypeVehicule
    {
        return $this->type_vehicule_id;
    }

    public function setTypeVehiculeId(?PTypeVehicule $type_vehicule_id): static
    {
        $this->type_vehicule_id = $type_vehicule_id;

        return $this;
    }

    public function getMarqueVehiculeId(): ?PMarqueVehicule
    {
        return $this->marque_vehicule_id;
    }

    public function setMarqueVehiculeId(?PMarqueVehicule $marque_vehicule_id): static
    {
        $this->marque_vehicule_id = $marque_vehicule_id;

        return $this;
    }

    public function getCarburant(): ?string
    {
        return $this->carburant;
    }

    public function setCarburant(string $carburant): static
    {
        $this->carburant = $carburant;

        return $this;
    }

    public function getTransmission(): ?string
    {
        return $this->transmission;
    }

    public function setTransmission(string $transmission): static
    {
        $this->transmission = $transmission;

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

    public function getCapacite(): ?int
    {
        return $this->capacite;
    }

    public function setCapacite(int $capacite): static
    {
        $this->capacite = $capacite;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
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

    public function isIsDeleted(): ?bool
    {
        return $this->isDeleted;
    }

    public function setIsDeleted(bool $isDeleted): static
    {
        $this->isDeleted = $isDeleted;

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
            $tDemandeDet->setVehiculeId($this);
        }

        return $this;
    }

    public function removeTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if ($this->tDemandeDets->removeElement($tDemandeDet)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeDet->getVehiculeId() === $this) {
                $tDemandeDet->setVehiculeId(null);
            }
        }

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
            $tMissionDet->setVehiculeId($this);
        }

        return $this;
    }

    public function removeTMissionDet(TMissionDet $tMissionDet): static
    {
        if ($this->tMissionDets->removeElement($tMissionDet)) {
            // set the owning side to null (unless already changed)
            if ($tMissionDet->getVehiculeId() === $this) {
                $tMissionDet->setVehiculeId(null);
            }
        }

        return $this;
    }



}
