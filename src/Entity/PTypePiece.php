<?php

namespace App\Entity;

use App\Repository\PTypePieceRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: PTypePieceRepository::class)]
#[ORM\Table(name: 'p_type_piece')]
class PTypePiece
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\OneToMany(mappedBy: 'typePiece', targetEntity: PCounter::class)]
    private Collection $counters;

 
    private Collection $tAcReceptions;

    public function __construct()
    {
       
        $this->tAcReceptions = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

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

    /**
     * @return Collection<int, PCounter>
     */
    public function getCounters(): Collection
    {
        return $this->counters;
    }

    public function addCounter(PCounter $counter): static
    {
        if (!$this->counters->contains($counter)) {
            $this->counters->add($counter);
            $counter->setTypePiece($this);
        }

        return $this;
    }

    public function removeCounter(PCounter $counter): static
    {
        if ($this->counters->removeElement($counter)) {
            // set the owning side to null (unless already changed)
            if ($counter->getTypePiece() === $this) {
                $counter->setTypePiece(null);
            }
        }

        return $this;
    }

   

  
   

    

  

}
