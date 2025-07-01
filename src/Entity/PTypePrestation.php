<?php

namespace App\Entity;

use App\Repository\PTypePrestationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PTypePrestationRepository::class)]
class PTypePrestation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\ManyToOne(inversedBy: 'pTypePrestations')]
    private ?User $user_created_id = null;

    #[ORM\OneToMany(mappedBy: 'type_prestation_id', targetEntity: PPrestation::class)]
    private Collection $zone_id;

    public function __construct()
    {
        $this->zone_id = new ArrayCollection();
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
     * @return Collection<int, PPrestation>
     */
    public function getZoneId(): Collection
    {
        return $this->zone_id;
    }

    public function addZoneId(PPrestation $zoneId): static
    {
        if (!$this->zone_id->contains($zoneId)) {
            $this->zone_id->add($zoneId);
            $zoneId->setTypePrestationId($this);
        }

        return $this;
    }

    public function removeZoneId(PPrestation $zoneId): static
    {
        if ($this->zone_id->removeElement($zoneId)) {
            // set the owning side to null (unless already changed)
            if ($zoneId->getTypePrestationId() === $this) {
                $zoneId->setTypePrestationId(null);
            }
        }

        return $this;
    }
}
