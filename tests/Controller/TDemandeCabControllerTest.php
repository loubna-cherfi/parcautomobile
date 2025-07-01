<?php

namespace App\Test\Controller;

use App\Entity\TDemandeCab;
use App\Repository\TDemandeCabRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TDemandeCabControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private TDemandeCabRepository $repository;
    private string $path = '/t/demande/cab/';
    private EntityManagerInterface $manager;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(TDemandeCab::class);

        foreach ($this->repository->findAll() as $object) {
            $this->manager->remove($object);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TDemandeCab index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            't_demande_cab[date_creation]' => 'Testing',
            't_demande_cab[nb_personnes]' => 'Testing',
            't_demande_cab[date_demande]' => 'Testing',
            't_demande_cab[contact]' => 'Testing',
            't_demande_cab[cin]' => 'Testing',
            't_demande_cab[tarif_total]' => 'Testing',
            't_demande_cab[nom_benificiaire]' => 'Testing',
            't_demande_cab[description]' => 'Testing',
            't_demande_cab[observation]' => 'Testing',
            't_demande_cab[date_traitement]' => 'Testing',
            't_demande_cab[date_validation]' => 'Testing',
            't_demande_cab[active]' => 'Testing',
            't_demande_cab[created_user_id]' => 'Testing',
            't_demande_cab[dossier_id]' => 'Testing',
            't_demande_cab[statut_id]' => 'Testing',
            't_demande_cab[traitant_user_id]' => 'Testing',
            't_demande_cab[validateur_user_id]' => 'Testing',
        ]);

        self::assertResponseRedirects('/t/demande/cab/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new TDemandeCab();
        $fixture->setDate_creation('My Title');
        $fixture->setNb_personnes('My Title');
        $fixture->setDate_demande('My Title');
        $fixture->setContact('My Title');
        $fixture->setCin('My Title');
        $fixture->setTarif_total('My Title');
        $fixture->setNom_benificiaire('My Title');
        $fixture->setDescription('My Title');
        $fixture->setObservation('My Title');
        $fixture->setDate_traitement('My Title');
        $fixture->setDate_validation('My Title');
        $fixture->setActive('My Title');
        $fixture->setCreated_user_id('My Title');
        $fixture->setDossier_id('My Title');
        $fixture->setStatut_id('My Title');
        $fixture->setTraitant_user_id('My Title');
        $fixture->setValidateur_user_id('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TDemandeCab');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new TDemandeCab();
        $fixture->setDate_creation('My Title');
        $fixture->setNb_personnes('My Title');
        $fixture->setDate_demande('My Title');
        $fixture->setContact('My Title');
        $fixture->setCin('My Title');
        $fixture->setTarif_total('My Title');
        $fixture->setNom_benificiaire('My Title');
        $fixture->setDescription('My Title');
        $fixture->setObservation('My Title');
        $fixture->setDate_traitement('My Title');
        $fixture->setDate_validation('My Title');
        $fixture->setActive('My Title');
        $fixture->setCreated_user_id('My Title');
        $fixture->setDossier_id('My Title');
        $fixture->setStatut_id('My Title');
        $fixture->setTraitant_user_id('My Title');
        $fixture->setValidateur_user_id('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            't_demande_cab[date_creation]' => 'Something New',
            't_demande_cab[nb_personnes]' => 'Something New',
            't_demande_cab[date_demande]' => 'Something New',
            't_demande_cab[contact]' => 'Something New',
            't_demande_cab[cin]' => 'Something New',
            't_demande_cab[tarif_total]' => 'Something New',
            't_demande_cab[nom_benificiaire]' => 'Something New',
            't_demande_cab[description]' => 'Something New',
            't_demande_cab[observation]' => 'Something New',
            't_demande_cab[date_traitement]' => 'Something New',
            't_demande_cab[date_validation]' => 'Something New',
            't_demande_cab[active]' => 'Something New',
            't_demande_cab[created_user_id]' => 'Something New',
            't_demande_cab[dossier_id]' => 'Something New',
            't_demande_cab[statut_id]' => 'Something New',
            't_demande_cab[traitant_user_id]' => 'Something New',
            't_demande_cab[validateur_user_id]' => 'Something New',
        ]);

        self::assertResponseRedirects('/t/demande/cab/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getDate_creation());
        self::assertSame('Something New', $fixture[0]->getNb_personnes());
        self::assertSame('Something New', $fixture[0]->getDate_demande());
        self::assertSame('Something New', $fixture[0]->getContact());
        self::assertSame('Something New', $fixture[0]->getCin());
        self::assertSame('Something New', $fixture[0]->getTarif_total());
        self::assertSame('Something New', $fixture[0]->getNom_benificiaire());
        self::assertSame('Something New', $fixture[0]->getDescription());
        self::assertSame('Something New', $fixture[0]->getObservation());
        self::assertSame('Something New', $fixture[0]->getDate_traitement());
        self::assertSame('Something New', $fixture[0]->getDate_validation());
        self::assertSame('Something New', $fixture[0]->getActive());
        self::assertSame('Something New', $fixture[0]->getCreated_user_id());
        self::assertSame('Something New', $fixture[0]->getDossier_id());
        self::assertSame('Something New', $fixture[0]->getStatut_id());
        self::assertSame('Something New', $fixture[0]->getTraitant_user_id());
        self::assertSame('Something New', $fixture[0]->getValidateur_user_id());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new TDemandeCab();
        $fixture->setDate_creation('My Title');
        $fixture->setNb_personnes('My Title');
        $fixture->setDate_demande('My Title');
        $fixture->setContact('My Title');
        $fixture->setCin('My Title');
        $fixture->setTarif_total('My Title');
        $fixture->setNom_benificiaire('My Title');
        $fixture->setDescription('My Title');
        $fixture->setObservation('My Title');
        $fixture->setDate_traitement('My Title');
        $fixture->setDate_validation('My Title');
        $fixture->setActive('My Title');
        $fixture->setCreated_user_id('My Title');
        $fixture->setDossier_id('My Title');
        $fixture->setStatut_id('My Title');
        $fixture->setTraitant_user_id('My Title');
        $fixture->setValidateur_user_id('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/t/demande/cab/');
    }
}
