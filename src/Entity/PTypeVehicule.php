<?php

namespace App\Entity;

use App\Repository\PTypeVehiculeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PTypeVehiculeRepository::class)]
class PTypeVehicule
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\ManyToOne(inversedBy: 'pTypeVehicules')]
    private ?User $user_created_id = null;

    #[ORM\OneToMany(mappedBy: 'type_vehicule_id', targetEntity: PVehicule::class)]
    private Collection $pVehicules;

    public function __construct()
    {
        $this->pVehicules = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): static
    {
        $this->libelle = $libelle;

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

    /**
     * @return Collection<int, PVehicule>
     */
    public function getPVehicules(): Collection
    {
        return $this->pVehicules;
    }

    public function addPVehicule(PVehicule $pVehicule): static
    {
        if (!$this->pVehicules->contains($pVehicule)) {
            $this->pVehicules->add($pVehicule);
            $pVehicule->setTypeVehiculeId($this);
        }

        return $this;
    }

    public function removePVehicule(PVehicule $pVehicule): static
    {
        if ($this->pVehicules->removeElement($pVehicule)) {
            // set the owning side to null (unless already changed)
            if ($pVehicule->getTypeVehiculeId() === $this) {
                $pVehicule->setTypeVehiculeId(null);
            }
        }

        return $this;
    }
}
