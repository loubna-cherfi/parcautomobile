<?php

namespace App\Entity;

use App\Repository\PEntiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PEntiteRepository::class)]
#[ORM\Table(name:"p_entite")]

class PEntite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $code = null;


    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateCreated = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $address = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $tel = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\Column(length: 50,  nullable: true)]
    private ?string $prefix = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cce_0_libelle = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $cce_0 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fcy_0_libelle = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $fcy_0 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logo = null;

    #[ORM\Column(nullable: true)]
    private ?int $logoWidth = null;

    #[ORM\Column(nullable: true)]
    private ?int $logoHeight = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\Column]
    private ?bool $isSubEntite = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'pEntites')]
    private ?self $parent = null;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    private Collection $pEntites;

    #[ORM\ManyToOne]
    private ?User $userCreated = null;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: PCounter::class)]
    private Collection $counters;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $natureentite = null;

    #[ORM\Column(nullable: true)]
    private ?int $niveau = null;

    #[ORM\ManyToOne(inversedBy: 'pEntites')]
    private ?PEntiteOrg $organisation = null;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: PUserDossierAction::class )]
    private Collection $pUserDossierActions;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomDossier = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $adresse = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $ice = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tel2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fax = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $site = null;

    #[ORM\ManyToOne(inversedBy: 'pEntites')]
    private ?PEtTypeEntites $typeEntite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cpyO = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cpy0Libelle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cceO = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cce0Libelle = null;

    #[ORM\Column(nullable: true)]
    private ?bool $entreprise = null;

    #[ORM\Column(nullable: true)]
    private ?bool $immo = null;

    private Collection $tAcReceptionObjs;

    #[ORM\OneToMany(mappedBy: 'dossier_id', targetEntity: TDemandeCab::class)]
    private Collection $tDemandeCabs;

    public function __construct()
    {
        $this->pUserDossierActions = new ArrayCollection();
        $this->pEntites = new ArrayCollection();
        $this->counters = new ArrayCollection();
        $this->tAcReceptionObjs = new ArrayCollection();
        $this->tDemandeCabs = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }


    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->dateCreated;
    }

    public function setDateCreated(?\DateTimeInterface $dateCreated): self
    {
        $this->dateCreated = $dateCreated;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(?string $tel): self
    {
        $this->tel = $tel;

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

    public function getPrefix(): ?string
    {
        return $this->prefix;
    }

    public function setPrefix(string $prefix): self
    {
        $this->prefix = $prefix;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCce0Libelle(): ?string
    {
        return $this->cce_0_libelle;
    }

    public function setCce0Libelle(?string $cce_0_libelle): self
    {
        $this->cce_0_libelle = $cce_0_libelle;

        return $this;
    }

    public function getCce0(): ?string
    {
        return $this->cce_0;
    }

    public function setCce0(?string $cce_0): self
    {
        $this->cce_0 = $cce_0;

        return $this;
    }

    public function getFcy0Libelle(): ?string
    {
        return $this->fcy_0_libelle;
    }

    public function setFcy0Libelle(?string $fcy_0_libelle): self
    {
        $this->fcy_0_libelle = $fcy_0_libelle;

        return $this;
    }

    public function getFcy0(): ?string
    {
        return $this->fcy_0;
    }

    public function setFcy0(?string $fcy_0): self
    {
        $this->fcy_0 = $fcy_0;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getLogoWidth(): ?int
    {
        return $this->logoWidth;
    }

    public function setLogoWidth(?int $logoWidth): self
    {
        $this->logoWidth = $logoWidth;

        return $this;
    }

    public function getLogoHeight(): ?int
    {
        return $this->logoHeight;
    }

    public function setLogoHeight(?int $logoHeight): self
    {
        $this->logoHeight = $logoHeight;

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

    public function isIsSubEntite(): ?bool
    {
        return $this->isSubEntite;
    }

    public function setIsSubEntite(bool $isSubEntite): self
    {
        $this->isSubEntite = $isSubEntite;

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getPEntites(): Collection
    {
        return $this->pEntites;
    }

    public function addPEntite(self $pEntite): self
    {
        if (!$this->pEntites->contains($pEntite)) {
            $this->pEntites->add($pEntite);
            $pEntite->setParent($this);
        }

        return $this;
    }

    public function removePEntite(self $pEntite): self
    {
        if ($this->pEntites->removeElement($pEntite)) {
            // set the owning side to null (unless already changed)
            if ($pEntite->getParent() === $this) {
                $pEntite->setParent(null);
            }
        }

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): self
    {
        $this->userCreated = $userCreated;

        return $this;
    }



    /**
     * @return Collection<int, PCounter>
     */
    public function getCounters(): Collection
    {
        return $this->counters;
    }

    public function addCounter(PCounter $counter): self
    {
        if (!$this->counters->contains($counter)) {
            $this->counters->add($counter);
            $counter->setEntite($this);
        }

        return $this;
    }

    public function removeCounter(PCounter $counter): self
    {
        if ($this->counters->removeElement($counter)) {
            // set the owning side to null (unless already changed)
            if ($counter->getEntite() === $this) {
                $counter->setEntite(null);
            }
        }

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

    public function getNiveau(): ?int
    {
        return $this->niveau;
    }

    public function setNiveau(?int $niveau): static
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getOrganisation(): ?PEntiteOrg
    {
        return $this->organisation;
    }

    public function setOrganisation(?PEntiteOrg $organisation): static
    {
        $this->organisation = $organisation;

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
            $pUserDossierAction->setDossier($this);
        }

        return $this;
    }

    public function removePUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if ($this->pUserDossierActions->removeElement($pUserDossierAction)) {
            // set the owning side to null (unless already changed)
            if ($pUserDossierAction->getDossier() === $this) {
                $pUserDossierAction->setDossier(null);
            }
        }

        return $this;
    }


  



  









  



 

  

    public function getNomDossier(): ?string
    {
        return $this->nomDossier;
    }

    public function setNomDossier(?string $nomDossier): static
    {
        $this->nomDossier = $nomDossier;

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

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getIce(): ?string
    {
        return $this->ice;
    }

    public function setIce(?string $ice): static
    {
        $this->ice = $ice;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getTel2(): ?string
    {
        return $this->tel2;
    }

    public function setTel2(?string $tel2): static
    {
        $this->tel2 = $tel2;

        return $this;
    }

    public function getFax(): ?string
    {
        return $this->fax;
    }

    public function setFax(?string $fax): static
    {
        $this->fax = $fax;

        return $this;
    }

    public function getSite(): ?string
    {
        return $this->site;
    }

    public function setSite(?string $site): static
    {
        $this->site = $site;

        return $this;
    }

    public function getTypeEntite(): ?PEtTypeEntites
    {
        return $this->typeEntite;
    }

    public function setTypeEntite(?PEtTypeEntites $typeEntite): static
    {
        $this->typeEntite = $typeEntite;

        return $this;
    }

    public function getCpyO(): ?string
    {
        return $this->cpyO;
    }

    public function setCpyO(?string $cpyO): static
    {
        $this->cpyO = $cpyO;

        return $this;
    }

    public function getCpy0Libelle(): ?string
    {
        return $this->cpy0Libelle;
    }

    public function setCpy0Libelle(?string $cpy0Libelle): static
    {
        $this->cpy0Libelle = $cpy0Libelle;

        return $this;
    }

    public function getCceO(): ?string
    {
        return $this->cceO;
    }

    public function setCceO(?string $cceO): static
    {
        $this->cceO = $cceO;

        return $this;
    }

    public function isEntreprise(): ?bool
    {
        return $this->entreprise;
    }

    public function setEntreprise(?bool $entreprise): static
    {
        $this->entreprise = $entreprise;

        return $this;
    }

    public function isImmo(): ?bool
    {
        return $this->immo;
    }

    public function setImmo(?bool $immo): static
    {
        $this->immo = $immo;

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
            $tDemandeCab->setDossierId($this);
        }

        return $this;
    }

    public function removeTDemandeCab(TDemandeCab $tDemandeCab): static
    {
        if ($this->tDemandeCabs->removeElement($tDemandeCab)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeCab->getDossierId() === $this) {
                $tDemandeCab->setDossierId(null);
            }
        }

        return $this;
    }

}
