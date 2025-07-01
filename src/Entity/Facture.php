<?php

namespace App\Entity;

use App\Repository\FactureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactureRepository::class)]
class Facture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_facture = null;

    #[ORM\Column(length: 255)]
    private ?string $code_facture = null;

    #[ORM\Column(length: 255)]
    private ?string $float = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'factures')]
    private ?self $type_facture_id = null;

    #[ORM\OneToMany(mappedBy: 'type_facture_id', targetEntity: self::class)]
    private Collection $factures;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TMissionCab $mission_cab_id = null;

    public function __construct()
    {
        $this->factures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateFacture(): ?\DateTimeInterface
    {
        return $this->date_facture;
    }

    public function setDateFacture(\DateTimeInterface $date_facture): static
    {
        $this->date_facture = $date_facture;

        return $this;
    }

    public function getCodeFacture(): ?string
    {
        return $this->code_facture;
    }

    public function setCodeFacture(string $code_facture): static
    {
        $this->code_facture = $code_facture;

        return $this;
    }

    public function getFloat(): ?string
    {
        return $this->float;
    }

    public function setFloat(string $float): static
    {
        $this->float = $float;

        return $this;
    }

    public function getTypeFactureId(): ?self
    {
        return $this->type_facture_id;
    }

    public function setTypeFactureId(?self $type_facture_id): static
    {
        $this->type_facture_id = $type_facture_id;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getFactures(): Collection
    {
        return $this->factures;
    }

    public function addFacture(self $facture): static
    {
        if (!$this->factures->contains($facture)) {
            $this->factures->add($facture);
            $facture->setTypeFactureId($this);
        }

        return $this;
    }

    public function removeFacture(self $facture): static
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getTypeFactureId() === $this) {
                $facture->setTypeFactureId(null);
            }
        }

        return $this;
    }

    public function getMissionCabId(): ?TMissionCab
    {
        return $this->mission_cab_id;
    }

    public function setMissionCabId(?TMissionCab $mission_cab_id): static
    {
        $this->mission_cab_id = $mission_cab_id;

        return $this;
    }
}
