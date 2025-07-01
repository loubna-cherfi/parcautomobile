<?php

namespace App\Entity;

use App\Repository\PEtTypeEntitesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PEtTypeEntitesRepository::class)]
#[ORM\Table(name: 'p_type_entites')]
class PEtTypeEntites
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\OneToMany(mappedBy: 'typeEntite', targetEntity: PEntite::class)]
    private Collection $pEntites;

    public function __construct()
    {
        $this->pEntites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): static
    {
        $this->titre = $titre;

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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): static
    {
        $this->created = $created;

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
            $pEntite->setTypeEntite($this);
        }

        return $this;
    }

    public function removePEntite(PEntite $pEntite): static
    {
        if ($this->pEntites->removeElement($pEntite)) {
            // set the owning side to null (unless already changed)
            if ($pEntite->getTypeEntite() === $this) {
                $pEntite->setTypeEntite(null);
            }
        }

        return $this;
    }
}
