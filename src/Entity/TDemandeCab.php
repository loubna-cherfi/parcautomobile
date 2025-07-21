<?php

namespace App\Entity;
use App\Entity\PEntite;

use App\Repository\TDemandeCabRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TDemandeCabRepository::class)]
class TDemandeCab
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeCabs')]
    private ?User $created_user_id = null;


    #[ORM\ManyToOne(inversedBy: 'tDemandeCabs')]
    private ?PEntite  $dossier_id = null;

    #[ORM\Column]
    private ?int $nb_personnes = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $date_demande = null;

    #[ORM\Column(length: 255)]
    private ?string $contact = null;

  


    #[ORM\Column(length: 255)]
    private ?string $cin = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeCabs')]
    private ?PStatut $statut_id = null;

    #[ORM\Column(nullable:true)]
    private ?float $tarif_total = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_benificiaire = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $observation = null;

     #[ORM\ManyToOne(inversedBy: 'tDemandeCabs')]
    private ?User $traitant_user_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,nullable:true)]
    private ?\DateTimeInterface $date_traitement = null;

    #[ORM\ManyToOne(inversedBy: 'tDemandeCabs')]
    private ?User $validateur_user_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,nullable:true)]
    private ?\DateTimeInterface $date_validation = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\OneToMany(mappedBy: 'demande_id', targetEntity: TDemandeDet::class)]
    private Collection $tDemandeDets;

    #[ORM\OneToMany(mappedBy: 'demande_id', targetEntity: TMissionCab::class)]
    private Collection $tMissionCabs;

   

       #[ORM\Column(length: 255,nullable: true)]
    private ?string $adressdepart = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $annuler_user_id = null;


    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_annulation = null;

     #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_execution = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $executant_user_id = null;

    public function __construct()
    {
        $this->tDemandeDets = new ArrayCollection();
        $this->tMissionCabs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedUserId(): ?User
    {
        return $this->created_user_id;
    }

    public function setCreatedUserId(?User $created_user_id): static
    {
        $this->created_user_id = $created_user_id;

        return $this;
    }


    public function getDossierId(): ?Pentite
    {
        return $this->dossier_id;
    }

    public function setDossierId(?Pentite $dossier_id): static
    {
        $this->dossier_id = $dossier_id;

        return $this;
    }

    public function getNbPersonnes(): ?int
    {
        return $this->nb_personnes;
    }

    public function setNbPersonnes(int $nb_personnes): static
    {
        $this->nb_personnes = $nb_personnes;

        return $this;
    }

    public function getDateDemande(): ?\DateTimeInterface
    {
        return $this->date_demande;
    }

    public function setDateDemande(\DateTimeInterface $date_demande): static
    {
        $this->date_demande = $date_demande;

        return $this;
    }

    public function getContact(): ?string
    {
        return $this->contact;
    }

    public function setContact(string $contact): static
    {
        $this->contact = $contact;

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

    public function getStatutId(): ?PStatut
    {
        return $this->statut_id;
    }

    public function setStatutId(?PStatut $statut_id): static
    {
        $this->statut_id = $statut_id;

        return $this;
    }

    public function getTarifTotal(): ?float
    {
        return $this->tarif_total;
    }

    public function setTarifTotal(float $tarif_total): static
    {
        $this->tarif_total = $tarif_total;

        return $this;
    }

    public function getNomBenificiaire(): ?string
    {
        return $this->nom_benificiaire;
    }

    public function setNomBenificiaire(string $nom_benificiaire): static
    {
        $this->nom_benificiaire = $nom_benificiaire;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(string $observation): static
    {
        $this->observation = $observation;

        return $this;
    }

    public function getTraitantUserId(): ?User
    {
        return $this->traitant_user_id;
    }

    public function setTraitantUserId(?User $traitant_user_id): static
    {
        $this->traitant_user_id = $traitant_user_id;

        return $this;
    }

    public function getDateTraitement(): ?\DateTimeInterface
    {
        return $this->date_traitement;
    }

    public function setDateTraitement(\DateTimeInterface $date_traitement): static
    {
        $this->date_traitement = $date_traitement;

        return $this;
    }

    public function getValidateurUserId(): ?User
    {
        return $this->validateur_user_id;
    }

    public function setValidateurUserId(?User $validateur_user_id): static
    {
        $this->validateur_user_id = $validateur_user_id;

        return $this;
    }

    public function getDateValidation(): ?\DateTimeInterface
    {
        return $this->date_validation;
    }

    public function setDateValidation(\DateTimeInterface $date_validation): static
    {
        $this->date_validation = $date_validation;

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
            $tDemandeDet->setDemandeId($this);
        }

        return $this;
    }

    public function removeTDemandeDet(TDemandeDet $tDemandeDet): static
    {
        if ($this->tDemandeDets->removeElement($tDemandeDet)) {
            // set the owning side to null (unless already changed)
            if ($tDemandeDet->getDemandeId() === $this) {
                $tDemandeDet->setDemandeId(null);
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
            $tMissionCab->setDemandeId($this);
        }

        return $this;
    }

    public function removeTMissionCab(TMissionCab $tMissionCab): static
    {
        if ($this->tMissionCabs->removeElement($tMissionCab)) {
            // set the owning side to null (unless already changed)
            if ($tMissionCab->getDemandeId() === $this) {
                $tMissionCab->setDemandeId(null);
            }
        }

        return $this;
    }

    public function getAdressDepart(): ?string
    {
        return $this->adressdepart;
    }

    public function setAdressDepart(string $adressdepart): static
    {
        $this->adressdepart = $adressdepart;

        return $this;
    }

    public function getAnnulerUserId(): ?User
    {
        return $this->annuler_user_id;
    }

    public function setAnnulerUserId(?User $annuler_user_id): static
    {
        $this->annuler_user_id = $annuler_user_id;

        return $this;
    }

    public function getDateAnnulation(): ?\DateTimeInterface
    {
        return $this->date_annulation;
    }

    public function setDateAnnulation(\DateTimeInterface $date_annulation): static
    {
        $this->date_annulation = $date_annulation;

        return $this;
    }

    public function getDateExecution(): ?\DateTimeInterface
    {
        return $this->date_execution;
    }

    public function setDateExecution(\DateTimeInterface $date_execution): static
    {
        $this->date_execution = $date_execution;

        return $this;
    }

    public function getExecutantUserId(): ?User
    {
        return $this->executant_user_id;
    }

    public function setExecutantUserId(?User $executant_user_id): static
    {
        $this->executant_user_id = $executant_user_id;

        return $this;
    }

    
}
