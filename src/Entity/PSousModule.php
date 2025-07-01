<?php

namespace App\Entity;

use App\Repository\PSousModuleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PSousModuleRepository::class)]
#[ORM\Table(name: 'p_sousmodule')]
class PSousModule
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;


    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdate = null;

    #[ORM\ManyToOne(inversedBy: 'pSousModule')]
    private ?PModule $pModule = null;

    #[ORM\OneToMany(mappedBy: 'pSousModule', targetEntity: PAction::class)]
    private Collection $pActions;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $route = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\ManyToOne]
    private ?User $userUpdate = null;


    public function __construct()
    {
        $this->pActions = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }


    public function getDateUpdate(): ?\DateTimeInterface
    {
        return $this->dateUpdate;
    }

    public function setDateUpdate(?\DateTimeInterface $dateUpdate): self
    {
        $this->dateUpdate = $dateUpdate;

        return $this;
    }

    public function getPModule(): ?PModule
    {
        return $this->pModule;
    }

    public function setPModule(?PModule $pModule): self
    {
        $this->pModule = $pModule;

        return $this;
    }

    /**
     * @return Collection<int, PAction>
     */
    public function getPActions(): Collection
    {
        return $this->pActions;
    }

    public function addPAction(PAction $pAction): self
    {
        if (!$this->pActions->contains($pAction)) {
            $this->pActions->add($pAction);
            $pAction->setPSousModule($this);
        }

        return $this;
    }

    public function removePAction(PAction $pAction): self
    {
        if ($this->pActions->removeElement($pAction)) {
            // set the owning side to null (unless already changed)
            if ($pAction->getPSousModule() === $this) {
                $pAction->setPSousModule(null);
            }
        }

        return $this;
    }

    public function getRoute(): ?string
    {
        return $this->route;
    }

    public function setRoute(?string $route): self
    {
        $this->route = $route;

        return $this;
    }

    public function getOrd(): ?int
    {
        return $this->ord;
    }

    public function setOrd(?int $ord): self
    {
        $this->ord = $ord;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getUserUpdate(): ?User
    {
        return $this->userUpdate;
    }

    public function setUserUpdate(?User $userUpdate): self
    {
        $this->userUpdate = $userUpdate;

        return $this;
    }

}