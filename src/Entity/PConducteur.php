<?php

namespace App\Entity;

use App\Repository\PConducteurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PConducteurRepository::class)]
class PConducteur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255)]
    private ?string $cin = null;

    #[ORM\Column(length: 255)]
    private ?string $permis_numero = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $permis_date_obtention = null;

    #[ORM\Column(length: 255)]
    private ?string $permis_type = null;

    #[ORM\Column(length: 255)]
    private ?string $telephone = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $adresse = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_naissance = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\ManyToOne(inversedBy: 'pConducteurs')]
    private ?User $user_created_id = null;

    #[ORM\OneToMany(mappedBy: 'conducteur_id', targetEntity: TDemandeDet::class)]
    private Collection $tDemandeDets;

    #[ORM\OneToMany(mappedBy: 'conducteur_id', targetEntity: TMissionDet::class)]
    private Collection $tMissionDets;

    public function __construct()
    {
        $this->tMissionDets = new ArrayCollection();
    }

 

  

 
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getCin(): ?string
    {
        return $this->cin;
    }

    public function setCin(string $cin): static
    {
        $this->cin = $cin;

        return $this;
    }

    public function getPermisNumero(): ?string
    {
        return $this->permis_numero;
    }

    public function setPermisNumero(string $permis_numero): static
    {
        $this->permis_numero = $permis_numero;

        return $this;
    }

    public function getPermisDateObtention(): ?\DateTimeInterface
    {
        return $this->permis_date_obtention;
    }

    public function setPermisDateObtention(\DateTimeInterface $permis_date_obtention): static
    {
        $this->permis_date_obtention = $permis_date_obtention;

        return $this;
    }

    public function getPermisType(): ?string
    {
        return $this->permis_type;
    }

    public function setPermisType(string $permis_type): static
    {
        $this->permis_type = $permis_type;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getDateNaissance(): ?\DateTimeInterface
    {
        return $this->date_naissance;
    }

    public function setDateNaissance(\DateTimeInterface $date_naissance): static
    {
        $this->date_naissance = $date_naissance;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function getUserCreatedId(): ?User
    {
        return $this->user_created_id;
    }

    public function setUserCreatedId(?User $user_created_id): static
    {
        $this->user_created_id = $user_created_id;

        return $this;
    }

    /**
     * @return Collection<int, TDemandeDet>
     */
    public function getTDemandeDets(): Collection
    {
        return $this->tDemandeDets;
    }

    public function addTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if (!$this->tDemandeDets->contains($tDemandeDet)) {
            $this->tDemandeDets->add($tDemandeDet);
            $tDemandeDet->setConducteurId($this);
        }

        return $this;
    }

    public function removeTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if ($this->tDemandeDets->removeElement($tDemandeDet)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeDet->getConducteurId() === $this) {
                $tDemandeDet->setConducteurId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TMissionDet>
     */
    public function getTMissionDets(): Collection
    {
        return $this->tMissionDets;
    }

    public function addTMissionDet(TMissionDet $tMissionDet): static
    {
        if (!$this->tMissionDets->contains($tMissionDet)) {
            $this->tMissionDets->add($tMissionDet);
            $tMissionDet->setConducteurId($this);
        }

        return $this;
    }

    public function removeTMissionDet(TMissionDet $tMissionDet): static
    {
        if ($this->tMissionDets->removeElement($tMissionDet)) {
            // set the owning side to null (unless already changed)
            if ($tMissionDet->getConducteurId() === $this) {
                $tMissionDet->setConducteurId(null);
            }
        }

        return $this;
    }

  
  


  

}
