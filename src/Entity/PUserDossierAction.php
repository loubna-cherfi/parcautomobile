<?php

namespace App\Entity;

use App\Repository\PUserDossierActionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Mapping\ClassMetadata;

#[ORM\Entity(repositoryClass: PUserDossierActionRepository::class)]
#[ORM\Table(name:"p_user_entite_action")]
class PUserDossierAction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'pUserDossierActions' , fetch:"EAGER")]
    private ?User $userr = null;

    #[ORM\ManyToOne(inversedBy: 'pUserDossierActions' , fetch:"EAGER")]
    private ?PEntite $dossier = null;

    #[ORM\ManyToOne(inversedBy: 'pUserDossierActions' , fetch:"EAGER")]
    private ?PAction $action = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserr(): ?User
    {
        return $this->userr;
    }

    public function setUserr(?User $userr): self
    {
        $this->userr = $userr;

        return $this;
    }

    public function getDossier(): ?PEntite
    {
        return $this->dossier;
    }

    public function setDossier(?PEntite $dossier): self
    {
        $this->dossier = $dossier;

        return $this;
    }

    public function getAction(): ?PAction
    {
        return $this->action;
    }

    public function setAction(?PAction $action): self
    {
        $this->action = $action;

        return $this;
    }

    // public static function loadValidatorMetadata(ClassMetadata $metadata)
    // {
    //     $metadata->addConstraint(new UniqueEntity([
    //         'fields' => ['user', 'dossier','action'],
    //         'errorPath' => 'affectation',
    //         'message' => 'This affectation is already exist.',
    //     ]));
    // }
}
