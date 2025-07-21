<?php

namespace App\Entity;

use App\Repository\TMissionCabRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMissionCabRepository::class)]
class TMissionCab
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionCabs')]
    private ?TDemandeCab $demande_id = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionCabs')]
    private ?PStatut $statut_id = null;

    #[ORM\Column]
    private ?float $tarif_total = null;

    #[ORM\Column(nullable:true)]
    private ?bool $is_facturee = null;

    #[ORM\ManyToOne(inversedBy: 'tMissionCabs')]
    private ?User $executant_user_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_execution = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?User $evaluateur_user_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,nullable:true)]
    private ?\DateTimeInterface $date_evaluation = null;

    #[ORM\Column(nullable:true)]
    private ?int $evaluation_note = null;

    #[ORM\Column(nullable:true)]
    private ?bool $active = null;

    #[ORM\OneToMany(mappedBy: 'mission_id', targetEntity: TMissionDet::class)]
    private Collection $tMissionDets;

    #[ORM\ManyToOne(inversedBy: 'tMissionCabsDossier')]
    private ?PEntite $dossier = null;

    #[ORM\Column(nullable: true)]
    private ?int $nbPersonne = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $date_mission = null;

    #[ORM\Column]
    private ?int $contact = null;

    #[ORM\Column(length: 255)]
    private ?string $cin = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_benificiaire = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $observation = null;

    #[ORM\Column(length: 255)]
    private ?string $adress_depart = null;

    public function __construct()
    {
        $this->tMissionDets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDemandeId(): ?TDemandeCab
    {
        return $this->demande_id;
    }

    public function setDemandeId(?TDemandeCab $demande_id): static
    {
        $this->demande_id = $demande_id;

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

    public function isIsFacturee(): ?bool
    {
        return $this->is_facturee;
    }

    public function setIsFacturee(bool $is_facturee): static
    {
        $this->is_facturee = $is_facturee;

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

    public function getDateExecution(): ?\DateTimeInterface
    {
        return $this->date_execution;
    }

    public function setDateExecution(\DateTimeInterface $date_execution): static
    {
        $this->date_execution = $date_execution;

        return $this;
    }

    public function getEvaluateurUserId(): ?User
    {
        return $this->evaluateur_user_id;
    }

    public function setEvaluateurUserId(?User $evaluateur_user_id): static
    {
        $this->evaluateur_user_id = $evaluateur_user_id;

        return $this;
    }

    public function getDateEvaluation(): ?\DateTimeInterface
    {
        return $this->date_evaluation;
    }

    public function setDateEvaluation(\DateTimeInterface $date_evaluation): static
    {
        $this->date_evaluation = $date_evaluation;

        return $this;
    }

    public function getEvaluationNote(): ?int
    {
        return $this->evaluation_note;
    }

    public function setEvaluationNote(int $evaluation_note): static
    {
        $this->evaluation_note = $evaluation_note;

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
            $tMissionDet->setMissionId($this);
        }

        return $this;
    }

    public function removeTMissionDet(TMissionDet $tMissionDet): static
    {
        if ($this->tMissionDets->removeElement($tMissionDet)) {
            // set the owning side to null (unless already changed)
            if ($tMissionDet->getMissionId() === $this) {
                $tMissionDet->setMissionId(null);
            }
        }

        return $this;
    }

    public function getDossier(): ?PEntite
    {
        return $this->dossier;
    }

    public function setDossier(?PEntite $dossier): static
    {
        $this->dossier = $dossier;

        return $this;
    }

    public function getNbPersonne(): ?int
    {
        return $this->nbPersonne;
    }

    public function setNbPersonne(?int $nbPersonne): static
    {
        $this->nbPersonne = $nbPersonne;

        return $this;
    }

    public function getDateMission(): ?\DateTimeInterface
    {
        return $this->date_mission;
    }

    public function setDateMission(\DateTimeInterface $date_mission): static
    {
        $this->date_mission = $date_mission;

        return $this;
    }

    public function getContact(): ?int
    {
        return $this->contact;
    }

    public function setContact(int $contact): static
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

    public function getAdressDepart(): ?string
    {
        return $this->adress_depart;
    }

    public function setAdressDepart(string $adress_depart): static
    {
        $this->adress_depart = $adress_depart;

        return $this;
    }
}
