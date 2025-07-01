<?php

namespace App\Form;

use App\Entity\TDemandeCab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TDemandeCabType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('date_creation')
            ->add('nb_personnes')
            ->add('date_demande')
            ->add('contact')
            ->add('cin')
            ->add('tarif_total')
            ->add('nom_benificiaire')
            ->add('description')
            ->add('observation')
            ->add('date_traitement')
            ->add('date_validation')
            ->add('active')
            ->add('created_user_id')
            ->add('dossier_id')
            ->add('statut_id')
            ->add('traitant_user_id')
            ->add('validateur_user_id')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TDemandeCab::class,
        ]);
    }
}
