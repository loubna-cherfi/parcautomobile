<?php

namespace App\Entity;

use App\Repository\PEntiteOrgRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PEntiteOrgRepository::class)]
#[ORM\Table(name:"p_entite_org")]
class PEntiteOrg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $prefix = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\Column(nullable: true)]
    private ?int $niveau = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $natureentite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $parente = null;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $parent = null;

    #[ORM\OneToMany(mappedBy: 'organisation', targetEntity: PEntite::class)]
    private Collection $pEntites;

    public function __construct()
    {
        $this->pEntites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): static
    {
        $this->designation = $designation;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): static
    {
        $this->abreviation = $abreviation;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function getPrefix(): ?string
    {
        return $this->prefix;
    }

    public function setPrefix(?string $prefix): static
    {
        $this->prefix = $prefix;

        return $this;
    }

    public function getOrd(): ?int
    {
        return $this->ord;
    }

    public function setOrd(?int $ord): static
    {
        $this->ord = $ord;

        return $this;
    }

    public function getNiveau(): ?int
    {
        return $this->niveau;
    }

    public function setNiveau(?int $niveau): static
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getNatureentite(): ?string
    {
        return $this->natureentite;
    }

    public function setNatureentite(?string $natureentite): static
    {
        $this->natureentite = $natureentite;

        return $this;
    }

    public function getParente(): ?string
    {
        return $this->parente;
    }

    public function setParente(?string $parente): static
    {
        $this->parente = $parente;

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): static
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, PEntite>
     */
    public function getPEntites(): Collection
    {
        return $this->pEntites;
    }

    public function addPEntite(PEntite $pEntite): static
    {
        if (!$this->pEntites->contains($pEntite)) {
            $this->pEntites->add($pEntite);
            $pEntite->setOrganisation($this);
        }

        return $this;
    }

    public function removePEntite(PEntite $pEntite): static
    {
        if ($this->pEntites->removeElement($pEntite)) {
            // set the owning side to null (unless already changed)
            if ($pEntite->getOrganisation() === $this) {
                $pEntite->setOrganisation(null);
            }
        }

        return $this;
    }
}
