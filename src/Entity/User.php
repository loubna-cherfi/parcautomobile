<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'p_user')]
#[UniqueEntity(fields: ['username'], message: 'There is already an account with this username')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?bool $isActive = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdate = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?PProfession $PProfession = null;

    #[ORM\Column( nullable: true)]
    private ?bool $isDeleted = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $route = null;

    #[ORM\OneToMany(mappedBy: 'userr', targetEntity: PUserDossierAction::class)]
    private Collection $pUserDossierActions;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $userUpdate = null;


        private Collection $tAcReceptionObjsEtiqueter;

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PStatut::class)]
        private Collection $pStatuts;

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PTypePrestation::class)]
        private Collection $pTypePrestations;

      

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PPrestation::class)]
        private Collection $pprestations;

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PConducteur::class)]
        private Collection $pConducteurs;

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PTypeVehicule::class)]
        private Collection $pTypeVehicules;

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PMarqueVehicule::class)]
        private Collection $pMarqueVehicules;

        #[ORM\OneToMany(mappedBy: 'user_created_id', targetEntity: PVehicule::class)]
        private Collection $pVehicules;

        #[ORM\OneToMany(mappedBy: 'created_user_id', targetEntity: TDemandeCab::class)]
        private Collection $tDemandeCabs;

        #[ORM\OneToMany(mappedBy: 'executant_user_id', targetEntity: TMissionCab::class)]
        private Collection $tMissionCabs;

        #[ORM\OneToMany(mappedBy: 'annuler_user_id', targetEntity: TDemandeCab::class)]
        private Collection $test;

        #[ORM\OneToMany(mappedBy: 'executant_user_id', targetEntity: TDemandeCab::class)]
        private Collection $excutercabs;


    public function __construct()
    {
        $this->pUserDossierActions = new ArrayCollection();
      
        $this->tAcReceptionObjsEtiqueter = new ArrayCollection();
        $this->pStatuts = new ArrayCollection();
        $this->pTypePrestations = new ArrayCollection();
        $this->pprestations = new ArrayCollection();
        $this->pConducteurs = new ArrayCollection();
        $this->pTypeVehicules = new ArrayCollection();
        $this->pMarqueVehicules = new ArrayCollection();
        $this->pVehicules = new ArrayCollection();
        $this->tDemandeCabs = new ArrayCollection();
        $this->tMissionCabs = new ArrayCollection();
        $this->test = new ArrayCollection();
        $this->excutercabs = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

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


    public function getPProfession(): ?PProfession
    {
        return $this->PProfession;
    }

    public function setPProfession(?PProfession $PProfession): self
    {
        $this->PProfession = $PProfession;

        return $this;
    }

    public function isIsDeleted(): ?bool
    {
        return $this->isDeleted;
    }

    public function setIsDeleted(bool $isDeleted): self
    {
        $this->isDeleted = $isDeleted;

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
            $pUserDossierAction->setUserr($this);
        }

        return $this;
    }

    public function removePUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if ($this->pUserDossierActions->removeElement($pUserDossierAction)) {
            // set the owning side to null (unless already changed)
            if ($pUserDossierAction->getUserr() === $this) {
                $pUserDossierAction->setUserr(null);
            }
        }

        return $this;
    }

    public function getUserUpdate(): ?self
    {
        return $this->userUpdate;
    }

    public function setUserUpdate(?self $userUpdate): self
    {
        $this->userUpdate = $userUpdate;

        return $this;
    }

    /**
     * @return Collection<int, PStatut>
     */
    public function getPStatuts(): Collection
    {
        return $this->pStatuts;
    }

    public function addPStatut(PStatut $pStatut): static
    {
        if (!$this->pStatuts->contains($pStatut)) {
            $this->pStatuts->add($pStatut);
            $pStatut->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePStatut(PStatut $pStatut): static
    {
        if ($this->pStatuts->removeElement($pStatut)) {
            // set the owning side to null (unless already changed)
            if ($pStatut->getUserCreatedId() === $this) {
                $pStatut->setUserCreatedId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PTypePrestation>
     */
    public function getPTypePrestations(): Collection
    {
        return $this->pTypePrestations;
    }

    public function addPTypePrestation(PTypePrestation $pTypePrestation): static
    {
        if (!$this->pTypePrestations->contains($pTypePrestation)) {
            $this->pTypePrestations->add($pTypePrestation);
            $pTypePrestation->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePTypePrestation(PTypePrestation $pTypePrestation): static
    {
        if ($this->pTypePrestations->removeElement($pTypePrestation)) {
            // set the owning side to null (unless already changed)
            if ($pTypePrestation->getUserCreatedId() === $this) {
                $pTypePrestation->setUserCreatedId(null);
            }
        }

        return $this;
    }

  


    /**
     * @return Collection<int, Pprestation>
     */
    public function getPprestations(): Collection
    {
        return $this->pprestations;
    }

    public function addPprestation(Pprestation $pprestation): static
    {
        if (!$this->pprestations->contains($pprestation)) {
            $this->pprestations->add($pprestation);
            $pprestation->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePprestation(Pprestation $pprestation): static
    {
        if ($this->pprestations->removeElement($pprestation)) {
            // set the owning side to null (unless already changed)
            if ($pprestation->getUserCreatedId() === $this) {
                $pprestation->setUserCreatedId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PConducteur>
     */
    public function getPConducteurs(): Collection
    {
        return $this->pConducteurs;
    }

    public function addPConducteur(PConducteur $pConducteur): static
    {
        if (!$this->pConducteurs->contains($pConducteur)) {
            $this->pConducteurs->add($pConducteur);
            $pConducteur->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePConducteur(PConducteur $pConducteur): static
    {
        if ($this->pConducteurs->removeElement($pConducteur)) {
            // set the owning side to null (unless already changed)
            if ($pConducteur->getUserCreatedId() === $this) {
                $pConducteur->setUserCreatedId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PTypeVehicule>
     */
    public function getPTypeVehicules(): Collection
    {
        return $this->pTypeVehicules;
    }

    public function addPTypeVehicule(PTypeVehicule $pTypeVehicule): static
    {
        if (!$this->pTypeVehicules->contains($pTypeVehicule)) {
            $this->pTypeVehicules->add($pTypeVehicule);
            $pTypeVehicule->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePTypeVehicule(PTypeVehicule $pTypeVehicule): static
    {
        if ($this->pTypeVehicules->removeElement($pTypeVehicule)) {
            // set the owning side to null (unless already changed)
            if ($pTypeVehicule->getUserCreatedId() === $this) {
                $pTypeVehicule->setUserCreatedId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PMarqueVehicule>
     */
    public function getPMarqueVehicules(): Collection
    {
        return $this->pMarqueVehicules;
    }

    public function addPMarqueVehicule(PMarqueVehicule $pMarqueVehicule): static
    {
        if (!$this->pMarqueVehicules->contains($pMarqueVehicule)) {
            $this->pMarqueVehicules->add($pMarqueVehicule);
            $pMarqueVehicule->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePMarqueVehicule(PMarqueVehicule $pMarqueVehicule): static
    {
        if ($this->pMarqueVehicules->removeElement($pMarqueVehicule)) {
            // set the owning side to null (unless already changed)
            if ($pMarqueVehicule->getUserCreatedId() === $this) {
                $pMarqueVehicule->setUserCreatedId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PVehicule>
     */
    public function getPVehicules(): Collection
    {
        return $this->pVehicules;
    }

    public function addPVehicule(PVehicule $pVehicule): static
    {
        if (!$this->pVehicules->contains($pVehicule)) {
            $this->pVehicules->add($pVehicule);
            $pVehicule->setUserCreatedId($this);
        }

        return $this;
    }

    public function removePVehicule(PVehicule $pVehicule): static
    {
        if ($this->pVehicules->removeElement($pVehicule)) {
            // set the owning side to null (unless already changed)
            if ($pVehicule->getUserCreatedId() === $this) {
                $pVehicule->setUserCreatedId(null);
            }
        }

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
            $tDemandeCab->setCreatedUserId($this);
        }

        return $this;
    }

    public function removeTDemandeCab(TDemandeCab $tDemandeCab): static
    {
        if ($this->tDemandeCabs->removeElement($tDemandeCab)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeCab->getCreatedUserId() === $this) {
                $tDemandeCab->setCreatedUserId(null);
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
            $tMissionCab->setExecutantUserId($this);
        }

        return $this;
    }

    public function removeTMissionCab(TMissionCab $tMissionCab): static
    {
        if ($this->tMissionCabs->removeElement($tMissionCab)) {
            // set the owning side to null (unless already changed)
            if ($tMissionCab->getExecutantUserId() === $this) {
                $tMissionCab->setExecutantUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TDemandeCab>
     */
    public function getTest(): Collection
    {
        return $this->test;
    }

    public function addTest(TDemandeCab $test): static
    {
        if (!$this->test->contains($test)) {
            $this->test->add($test);
            $test->setAnnulerUserId($this);
        }

        return $this;
    }

    public function removeTest(TDemandeCab $test): static
    {
        if ($this->test->removeElement($test)) {
            // set the owning side to null (unless already changed)
            if ($test->getAnnulerUserId() === $this) {
                $test->setAnnulerUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TDemandeCab>
     */
    public function getExcutercabs(): Collection
    {
        return $this->excutercabs;
    }

    public function addExcutercab(TDemandeCab $excutercab): static
    {
        if (!$this->excutercabs->contains($excutercab)) {
            $this->excutercabs->add($excutercab);
            $excutercab->setExecutantUserId($this);
        }

        return $this;
    }

    public function removeExcutercab(TDemandeCab $excutercab): static
    {
        if ($this->excutercabs->removeElement($excutercab)) {
            // set the owning side to null (unless already changed)
            if ($excutercab->getExecutantUserId() === $this) {
                $excutercab->setExecutantUserId(null);
            }
        }

        return $this;
    }
}
