<?php

namespace App\Entity;

use App\Repository\PStatutRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PStatutRepository::class)]
class PStatut
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    #[ORM\ManyToOne(inversedBy: 'pStatuts')]
    private ?User $user_created_id = null;

    #[ORM\OneToMany(mappedBy: 'statut_id', targetEntity: TDemandeCab::class)]
    private Collection $tDemandeCabs;

    #[ORM\OneToMany(mappedBy: 'statut_id', targetEntity: TMissionCab::class)]
    private Collection $tMissionCabs;

    public function __construct()
    {
        $this->tDemandeCabs = new ArrayCollection();
        $this->tMissionCabs = new ArrayCollection();
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
     * @return Collection<int, TDemandeCab>
     */
    public function getTDemandeCabs(): Collection
    {
        return $this->tDemandeCabs;
    }

    public function addTDemandeCab(TDemandeCab $tDemandeCab): static
    {
        if (!$this->tDemandeCabs->contains($tDemandeCab)) {
            $this->tDemandeCabs->add($tDemandeCab);
            $tDemandeCab->setStatutId($this);
        }

        return $this;
    }

    public function removeTDemandeCab(TDemandeCab $tDemandeCab): static
    {
        if ($this->tDemandeCabs->removeElement($tDemandeCab)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeCab->getStatutId() === $this) {
                $tDemandeCab->setStatutId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TMissionCab>
     */
    public function getTMissionCabs(): Collection
    {
        return $this->tMissionCabs;
    }

    public function addTMissionCab(TMissionCab $tMissionCab): static
    {
        if (!$this->tMissionCabs->contains($tMissionCab)) {
            $this->tMissionCabs->add($tMissionCab);
            $tMissionCab->setStatutId($this);
        }

        return $this;
    }

    public function removeTMissionCab(TMissionCab $tMissionCab): static
    {
        if ($this->tMissionCabs->removeElement($tMissionCab)) {
            // set the owning side to null (unless already changed)
            if ($tMissionCab->getStatutId() === $this) {
                $tMissionCab->setStatutId(null);
            }
        }

        return $this;
    }
}
