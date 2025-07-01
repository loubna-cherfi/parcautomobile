<?php

namespace App\Entity;

use App\Repository\PCounterRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PCounterRepository::class)]
#[ORM\Table(name:"p_counter")]

class PCounter
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $piece = null;

    #[ORM\Column]
    private ?int $count = null;

    #[ORM\Column(nullable: true)]
    private ?int $annee = null;

    #[ORM\ManyToOne(inversedBy: 'counters')]
    private ?PEntite $entite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $entiteAbreviation = null;

    #[ORM\ManyToOne(inversedBy: 'counters')]
    private ?PTypePiece $typePiece = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPiece(): ?string
    {
        return $this->piece;
    }

    public function setPiece(string $piece): self
    {
        $this->piece = $piece;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): self
    {
        $this->count = $count;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(?int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getEntite(): ?PEntite
    {
        return $this->entite;
    }

    public function setEntite(?PEntite $entite): self
    {
        $this->entite = $entite;

        return $this;
    }

    public function getEntiteAbreviation(): ?string
    {
        return $this->entiteAbreviation;
    }

    public function setEntiteAbreviation(?string $entiteAbreviation): self
    {
        $this->entiteAbreviation = $entiteAbreviation;

        return $this;
    }

    public function getTypePiece(): ?PTypePiece
    {
        return $this->typePiece;
    }

    public function setTypePiece(?PTypePiece $typePiece): static
    {
        $this->typePiece = $typePiece;

        return $this;
    }
}
