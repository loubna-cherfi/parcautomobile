<?php

namespace App\Entity;

use App\Repository\PActionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PActionRepository::class)]
#[ORM\Table(name: 'p_action')]
class PAction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255 , name:'nom')]
    private ?string $nom = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdate = null;

    #[ORM\ManyToOne(inversedBy: 'pActions')]
    private ?PSousModule $pSousModule = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $icon = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\Column(nullable: true)]
    private ?bool $horizontal = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $className = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $idName = null;

    #[ORM\OneToMany(mappedBy: 'action', targetEntity: PUserDossierAction::class)]
    private Collection $pUserDossierActions;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $route = null;

    #[ORM\ManyToOne]
    private ?User $userUpdate = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\Column(nullable: true)]
    private ?bool $principal = null;

    #[ORM\Column(nullable: true)]
    private ?bool $modal = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $modalName = null;


    public function __construct()
    {
        $this->pUserDossierActions = new ArrayCollection();
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

    public function getPSousModule(): ?PSousModule
    {
        return $this->pSousModule;
    }

    public function setPSousModule(?PSousModule $pSousModule): self
    {
        $this->pSousModule = $pSousModule;

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

    public function getOrd(): ?int
    {
        return $this->ord;
    }

    public function setOrd(?int $ord): self
    {
        $this->ord = $ord;

        return $this;
    }

    public function isHorizontal(): ?bool
    {
        return $this->horizontal;
    }

    public function setHorizontal(?bool $horizontal): self
    {
        $this->horizontal = $horizontal;

        return $this;
    }

    public function getClassName(): ?string
    {
        return $this->className;
    }

    public function setClassName(?string $className): self
    {
        $this->className = $className;

        return $this;
    }

    public function getIdName(): ?string
    {
        return $this->idName;
    }

    public function setIdName(?string $idName): self
    {
        $this->idName = $idName;

        return $this;
    }

    /**
     * @return Collection<int, PUserDossierAction>
     */
    public function getPUserDossierActions(): Collection
    {
        return $this->pUserDossierActions;
    }

    public function addPUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if (!$this->pUserDossierActions->contains($pUserDossierAction)) {
            $this->pUserDossierActions->add($pUserDossierAction);
            $pUserDossierAction->setAction($this);
        }

        return $this;
    }

    public function removePUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if ($this->pUserDossierActions->removeElement($pUserDossierAction)) {
            // set the owning side to null (unless already changed)
            if ($pUserDossierAction->getAction() === $this) {
                $pUserDossierAction->setAction(null);
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

    public function getUserUpdate(): ?User
    {
        return $this->userUpdate;
    }

    public function setUserUpdate(?User $userUpdate): self
    {
        $this->userUpdate = $userUpdate;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function isPrincipal(): ?bool
    {
        return $this->principal;
    }

    public function setPrincipal(?bool $principal): static
    {
        $this->principal = $principal;

        return $this;
    }

    public function isModal(): ?bool
    {
        return $this->modal;
    }

    public function setModal(?bool $modal): static
    {
        $this->modal = $modal;

        return $this;
    }

    public function getModalName(): ?string
    {
        return $this->modalName;
    }

    public function setModalName(?string $modalName): static
    {
        $this->modalName = $modalName;

        return $this;
    }


}
