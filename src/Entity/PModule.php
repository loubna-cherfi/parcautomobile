<?php

namespace App\Entity;

use App\Repository\PModuleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PModuleRepository::class)]
#[ORM\Table(name: 'p_module')]
class PModule
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;


    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdate = null;

    #[ORM\OneToMany(mappedBy: 'pModule', targetEntity: PSousModule::class , fetch:"EAGER")]
    private Collection $pSousModule;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $icon = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $route = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\ManyToOne]
    private ?User $userUpdate = null;

    #[ORM\Column(nullable: true)]
    private ?bool $setting = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    

    public function __construct()
    {
        $this->pSousModule = new ArrayCollection();
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

    /**
     * @return Collection<int, PSousModule>
     */
    public function getPSousModule(): Collection
    {
        return $this->pSousModule;
    }

    public function addPSousModule(PSousModule $pSousModule): self
    {
        if (!$this->pSousModule->contains($pSousModule)) {
            $this->pSousModule->add($pSousModule);
            $pSousModule->setPModule($this);
        }

        return $this;
    }

    public function removePSousModule(PSousModule $pSousModule): self
    {
        if ($this->pSousModule->removeElement($pSousModule)) {
            // set the owning side to null (unless already changed)
            if ($pSousModule->getPModule() === $this) {
                $pSousModule->setPModule(null);
            }
        }

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;

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

    public function isSetting(): ?bool
    {
        return $this->setting;
    }

    public function setSetting(?bool $setting): self
    {
        $this->setting = $setting;

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

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    
}
