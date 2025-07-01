<?php

namespace App\Entity;

use App\Repository\PZoneRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PZoneRepository::class)]
class PZone
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\Column(length:255)]
    private ?float $tarif_jour = null;

    #[ORM\Column(length:255 )]
    private ?float $tarif_nuit = null;

    #[ORM\OneToMany(mappedBy: 'zone_id', targetEntity: TDemandeDet::class)]
    private Collection $tDemandeDets;

    public function __construct()
    {
        $this->tDemandeDets = new ArrayCollection();
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

    public function getTarifJour(): ?string
    {
        return $this->tarif_jour;
    }

    public function setTarifJour(string $tarif_jour): static
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
            $tDemandeDet->setZoneId($this);
        }

        return $this;
    }

    public function removeTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if ($this->tDemandeDets->removeElement($tDemandeDet)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeDet->getZoneId() === $this) {
                $tDemandeDet->setZoneId(null);
            }
        }

        return $this;
    }
}
