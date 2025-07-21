$(document).ready(function () {
 
  $('#demandeTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'ALL']],
    autoWidth: false,
    destroy: true
  });

   
  const isBootstrap5 = typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined';
  if (isBootstrap5) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  } else {
    $('[data-toggle="tooltip"]').tooltip();
  }

  let detailIndex = 0;

  // Réinitialiser champs formulaire après ajout un détail
  function resetDetailFields() {
    $('#zone-detail select, #zone-detail input').each(function () {
      const el = $(this);
      const tag = el.prop('tagName').toLowerCase();
      if (tag === 'select') {
        const id = el.attr('id');
        if (id === 'add-prestation-0') {
          el.html('<option value="">Prestation</option>');
        } else if (id && $('#templates #' + id + '-template').length) {
          el.html($('#templates #' + id + '-template').html());
        }
        el.val('');
      } else {
        el.val('');
      }
      el.removeAttr('name');
    });
  }

  $(document).ready(function () {
  // Initialisation DataTable
  $('#demandeTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'ALL']],
    autoWidth: false,
    destroy: true
  });

  //Tooltips pour Bootstrap 4 ou 5
  const isBootstrap5 = typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined';
  if (isBootstrap5) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  } else {
    $('[data-toggle="tooltip"]').tooltip();
  }

  let detailIndex = 0;

  // Réinitialiser les champs du formulaire après ajout d'un détail
  function resetDetailFields() {
    $('#zone-detail select, #zone-detail input').each(function () {
      const el = $(this);
      const tag = el.prop('tagName').toLowerCase();
      if (tag === 'select') {
        const id = el.attr('id');
        if (id === 'add-prestation-0') {
          el.html('<option value="">Prestation</option>');
        } else if (id && $('#templates #' + id + '-template').length) {
          el.html($('#templates #' + id + '-template').html());
        }
        el.val('');
      } else {
        el.val('');
      }
      el.removeAttr('name');
    });
  }

  // Ajouter un nouveau détail
  $('#add-detail').on('click', function () {
    const getValue = name => $(`select[name="details[0][${name}]"] option:selected`);
    const vehicule = getValue('vehicule');
    const conducteur = getValue('conducteur');
    const typePrestation = getValue('type_prestation');
    const zone = getValue('zone');
    const prestation = getValue('prestation');
    const quantiteInput = $('input[name="details[0][quantite]"]');
    const nbJoursInput = $('input[name="details[0][nb_jours]"]');

    const quantite = parseInt(quantiteInput.val()) || 0;
    const nbJours = parseInt(nbJoursInput.val()) || 0;
    const dateDemande = $('input[name="dateDemande"]').val();
    const nbPersonnes = parseInt($('#nbPersonnesInput').val()) || 1;

    if (!vehicule.val() || !conducteur.val() || !typePrestation.val() || !zone.val() || !prestation.val() || quantite <= 0 || nbJours <= 0) {
       toastr.error('Veuillez remplir tous les champs du détail avec des valeurs valides.');
      return;
    }

    $.ajax({
      url: '/demande/ajax/tarif',
      method: 'GET',
      data: {
        prestationId: prestation.val(),
        date: dateDemande,
        quantite: quantite,
        nbJours: nbJours,
         nbPersonnes: nbPersonnes 
      },
      success: function (tarif) {
        $('#table-details-container').show();

  $('#table-details tbody').append(`
  <tr data-index="${detailIndex}">
    <td>${detailIndex + 1}</td>
    <td>${vehicule.text()}<input type="hidden" name="details[${detailIndex}][vehicule]" value="${vehicule.val()}"></td>
    <td>${conducteur.text()}<input type="hidden" name="details[${detailIndex}][conducteur]" value="${conducteur.val()}"></td>
    <td>${typePrestation.text()}<input type="hidden" name="details[${detailIndex}][type_prestation]" value="${typePrestation.val()}"></td>
    <td>${zone.text()}<input type="hidden" name="details[${detailIndex}][zone]" value="${zone.val()}"></td>
    <td>${prestation.text()}<input type="hidden" name="details[${detailIndex}][prestation]" value="${prestation.val()}"></td>
    <td>${quantite}<input type="hidden" name="details[${detailIndex}][quantite]" value="${quantite}"></td>
    <td>${nbJours}<input type="hidden" name="details[${detailIndex}][nb_jours]" value="${nbJours}"></td>
    <td><button class="btn btn-sm btnRemoveDetail" type="button"><i class="fa fa-trash"></i></button></td>
  </tr>
`);
;

        detailIndex++;
        resetDetailFields();
      },
      error: function () {
        toastr.error('Erreur lors du calcul du tarif.');

      }
    });
  });

  // Supprimer un détail
  $(document).on('click', '.btnRemoveDetail', function () {
    $(this).closest('tr').remove();

    if ($('#table-details tbody tr').length === 0) {
      $('#table-details-container').hide();
      detailIndex = 0;
    }
  });   

  // Charger les prestations dynamiquement
  function filterPrestationsAjax(typeSelector, zoneSelector, prestationSelector) {
    const selectedType = $(typeSelector).val();
    const selectedZone = $(zoneSelector).val();

    if (!selectedType || !selectedZone) {
      $(prestationSelector).html('<option value="">Sélectionner une prestation</option>');
      return;
    }

    $.ajax({
      url: '/demande/ajax/prestations',
      method: 'GET',
      data: { type: selectedType, zone: selectedZone },
      success: function (data) {
        let options = '<option value="">Sélectionner une prestation</option>';
        data.forEach(p => {
          options += `<option value="${p.id}">${p.nom}</option>`;
        });
        $(prestationSelector).html(options);
      },
      error: function () {
        $(prestationSelector).html('<option value="">Erreur de chargement</option>');
      }
    });
  }

  $('#add-type-prestation, #add-zone').on('change', function () {
    filterPrestationsAjax('#add-type-prestation', '#add-zone', '#add-prestation-0');
  });

  // Remplir la date actuelle automatiquement à l'ouverture du modal
  $('#addDemande').on('shown.bs.modal', function () {
    const now = new Date();
    const formatted = now.toISOString().slice(0, 16);
    $('input[name="dateDemande"]').val(formatted);
  });

  // Empêcher la soumission sans détails
  $('#formAddDemande').on('submit', function (e) {
    if ($('#table-details tbody tr').length === 0) {
     
      e.preventDefault();
      toastr.error('Veuillez ajouter au moins un détail avant de soumettre.');
    }
  });


  $(document).on('click', '.btnTraiterDemande', function () {
    const demandeId = $(this).data('id');

    $.ajax({
      url: '/demande/ajax/get/' + demandeId,
      method: 'GET',
      success: function (data) {
        // console.log('Réponse AJAX /demande/ajax/get/:', data);
        // Remplir infos générales
        $('#traiter-id').val(data.id);
        $('#traiter-nom').val(data.nomBenificiaire);
        $('#traiter-cin').val(data.cin);
        $('#traiter-observation').val(data.observation);
        $('#traiter-description').val(data.description);
        $('#traiter-contact').val(data.contact);
        $('#traiter-nbPersonnes').val(data.nbPersonnes);
        $('#traiter-date').val(data.dateDemande);
        $('#traiter-adresse').val(data.adressDepart);

        // Remplir le tableau des détails
        const tbody = $('#traiter-details-table tbody');
        tbody.empty();

        data.details.forEach((d, i) => {
        tbody.append(`
          <tr>
                  <td>${d.id}</td>
                    <td class="vehicule" data-vehicule-id="${d.vehiculeId}">${d.vehicule}</td>
                    <td class="conducteur" data-conducteur-id="${d.conducteurId}">${d.conducteur}</td>
                    <td class="type_prestation" data-type-id="${d.typePrestationId}">${d.type_prestation}</td>
                    <td class="zone" data-zone-id="${d.zoneId}">${d.zone}</td>
                    <td class="prestation" data-prestation-id="${d.prestationId}">${d.prestation}</td>
                    <td class="quantite">${d.quantite}</td>
                    <td class="nb_jours">${d.nb_jours}</td>
                    <td class="tarif">${d.tarif}</td>
                    <td class="kilometrage">${d.kilometrage || 0}</td>
                      <td>
                      <div class="dropdown">
                        <button class="btn btn-sm" type="button" id="dropdownMenuButton${d.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 30px; height: 30px; padding: 0;">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton${d.id}">
                         <button type="button" class="dropdown-item btnModifierDetail" data-id="${d.id}" data-iskilometrage="${d.isKilometrage || 0}">
                          <i class="fa-solid fa-pen-to-square"></i> Modifier
                        </button>

                        </div>
                      </div>
                    </td>
          </tr>
        `);
  });


        $('#traiterDemande').modal('show');
      },
      error: function () {
        toastr.error('Erreur lors du chargement de la demande.');
      }
    });
  });
});
  // prestations dynamiquement
  function filterPrestationsAjax(typeSelector, zoneSelector, prestationSelector) {
    const selectedType = $(typeSelector).val();
    const selectedZone = $(zoneSelector).val();

    if (!selectedType || !selectedZone) {
      $(prestationSelector).html('<option value="">Sélectionner une prestation</option>');
      return;
    }

    $.ajax({
      url: '/demande/ajax/prestations',
      method: 'GET',
      data: { type: selectedType, zone: selectedZone },
      success: function (data) {
        let options = '<option value="">Sélectionner une prestation</option>';
        data.forEach(p => {
          options += `<option value="${p.id}">${p.nom}</option>`;
        });
        $(prestationSelector).html(options);
      },
      error: function () {
        $(prestationSelector).html('<option value="">Erreur de chargement</option>');
      }
    });
  }

  $('#add-type-prestation, #add-zone').on('change', function () {
    filterPrestationsAjax('#add-type-prestation', '#add-zone', '#add-prestation-0');
  });

  // date actuelle automatiquement
  $('#addDemande').on('shown.bs.modal', function () {
    const now = new Date();
    const formatted = now.toISOString().slice(0, 16);
    $('input[name="dateDemande"]').val(formatted);
  });

  // soumission sans détails
  $('#formAddDemande').on('submit', function (e) {
    if ($('#table-details tbody tr').length === 0) {
       toastr.error('Veuillez ajouter au moins un détail avant de soumettre.');
      e.preventDefault();
    }
  });
function toggleKilometrageField() {
  const isKilometrage = $('#edit-iskilometrage').val();

  if (isKilometrage == 1 || isKilometrage === '1') {
    $('#edit-kilometrage').closest('.form-group').show();
  } else {
    $('#edit-kilometrage').closest('.form-group').hide();
    $('#edit-kilometrage').val('');
  }
}


// Quand on clique sur Modifier dans la liste des détails
$(document).on('click', '.btnModifierDetail', function () {
  const $row = $(this).closest('tr');  // La ligne du tableau

  // Récupérer les données depuis les cellules et attributs data-*
  const detailId = $(this).data('id');
  const isKilometrage = $(this).data('iskilometrage') || 0;
  const vehiculeId = $row.find('td.vehicule').data('vehicule-id');
  const conducteurId = $row.find('td.conducteur').data('conducteur-id');
  const typePrestation = $row.find('td.type_prestation').text().trim();
  const zone = $row.find('td.zone').text().trim();
  const prestation = $row.find('td.prestation').text().trim();
  const prestationId = $row.find('td.prestation').data('prestation-id');
  const quantite = $row.find('td.quantite').text().trim();
  const nbJours = $row.find('td.nb_jours').text().trim();
  
  
  console.log('vehiculeId:', vehiculeId);
  console.log('conducteurId:', conducteurId);  
  // Remplir les champs du modal
  $('#detail-id').val(detailId);
 
//  $('#edit-vehicule').val(vehiculeId);
//   $('#edit-conducteur').val(conducteurId);

// console.log('Vehicule ID:', vehiculeId, typeof vehiculeId);
// $('#edit-vehicule option').each(function () {
//   console.log('Option value:', $(this).val(), typeof $(this).val());
// });


  $('#edit-vehicule').val(vehiculeId).trigger('change');
  $('#edit-conducteur').val(conducteurId).trigger('change');
  $('#edit-type').val(typePrestation);
  $('#edit-zone').val(zone);
  $('#edit-prestation').val(prestation);
  $('#edit-prestation-id').val(prestationId);
  $('#edit-quantite').val(quantite);
  $('#edit-jours').val(nbJours);
  $('#edit-iskilometrage').val(isKilometrage);

  toggleKilometrageField();
  // Afficher la modal
  $('#kilometrageGroup').hide();
  $('#modifierDetailModal').modal('show');
  // On vérifie que l'ID prestation existe
    if (prestationId) {
        $.ajax({
            url: `prestation/${prestationId}/kilometrage`,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                      if (response.isKilometrage == 1 || response.isKilometrage === '1') {
                $('#edit-iskilometrage').val(1);
                $('#kilometrageGroup').show(); // ✅ Afficher
              } else {
                $('#edit-iskilometrage').val(0);
                $('#kilometrageGroup').hide(); // ✅ Masquer
              }
            },
            error: function (xhr, status, error) {
                console.error('Erreur AJAX:', status, error);
            }
        });
    } else {
        console.warn("ID de prestation introuvable dans l'attribut data.");
        $('#kilometrageGroup').hide();  // Par défaut on cache
    }
});




 $('#btn-enregistrer-detail').on('click', function (e) {
  e.preventDefault();

  const $modal = $('#modifierDetailModal');
  const prestationId = $('#edit-prestation-id').val(); // ID et non nom
  const quantite = $('#edit-quantite').val();
  const nbJours = $('#edit-jours').val();
  const date = $('#traiter-date').val();
  const vehiculeId = $('#edit-vehicule').val();
  const vehiculeText = $('#edit-vehicule option:selected').text();
  const conducteurId = $('#edit-conducteur').val();
  const conducteurText = $('#edit-conducteur option:selected').text();
  const kilometrage = parseInt($('#edit-kilometrage').val()) || 0;
  const nbPersonnes = parseInt($('#traiter-nbPersonnes').val()) || 1;
  // Optionnel : vérifie que prestationId est bien défini
  if (!prestationId) {
    toastr.error('Prestation non sélectionnée correctement.');
    return;
  }
    // Préparation des données à envoyer



 const dataToSend = {
    prestationId: prestationId,
    quantite: quantite,
    nbJours: nbJours,
    date: date,
    kilometrage: kilometrage,
    nbPersonnes: nbPersonnes
  };
  $.ajax({
    url: '/demande/ajax/tarif',
    method: 'GET',
    data:dataToSend,
    success: function (tarif) {
      // Trouver la ligne correspondant à ce détail dans la table
      // On peut chercher via detail-id ou d.id, ici on utilise data-id ou autre approche selon ton code
      const detailId = $('#detail-id').val();
      const $row = $(`#traiter-details-table tbody tr button.btnModifierDetail[data-id="${detailId}"]`).closest('tr');
      $row.find('.vehicule').text(vehiculeText).data('vehicule-id', vehiculeId);
      $row.find('.conducteur').text(conducteurText).data('conducteur-id', conducteurId);
      $row.find('.quantite').text(quantite);
      $row.find('.nb_jours').text(nbJours);
      $row.find('.tarif').text(parseFloat(tarif).toFixed(2));
      $row.find('.kilometrage').text(kilometrage); 

      $modal.modal('hide');
    },
    error: function () {
      toastr.error('Erreur lors du recalcul du tarif.');
    }
  });
});



$('#btn-traiter-enregistrer').on('click', function () {
  const id = $('#traiter-id').val();
  const details = [];

  $('#traiter-details-table tbody tr').each(function () {
    const row = $(this);
    const detailId = row.find('.btnModifierDetail').data('id'); // ou row.find('td:first').text().trim()

    details.push({
      id: detailId,
      vehicule: row.find('td.vehicule').text().trim(),
      conducteur: row.find('td.conducteur').text().trim(),
      type_prestation: row.find('td.type_prestation').text().trim(),
      zone: row.find('td.zone').text().trim(),
      prestation: row.find('td.prestation').text().trim(),
      quantite: row.find('td.quantite').text().trim(),
      nb_jours: row.find('td.nb_jours').text().trim(),
      tarif: row.find('td.tarif').text().trim(),
      kilometrage: row.find('td.kilometrage').text().trim()
    });
  });



  $.ajax({
    url: '/demande/traiter/enregistrer',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ id: id, details: details }),
    success: function (res) {
      toastr.success(res.message);
      location.reload();
    },
    error: function () {
      toastr.error("Erreur lors de l'enregistrement du traitement.");
    }
  });
});

 $('.btnValiderDemande').on('click', function () {
      const demandeId = this.dataset.id;

      fetch('/demande/changer-statutValider/' + demandeId, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              toastr.success('La demande validée avec succès !');
              setTimeout(() => location.reload(), 1000);
          } else {
              toastr.error('Erreur : ' + data.error);
          }
      })
      .catch(error => {
          toastr.error('La demande n\'a pas été validée');
      });
  });

    $('.btnAnnulerDemande').on('click', function () {
      const demandeId = this.dataset.id;

      fetch('/demande/changer-statutAnnuler/' + demandeId, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({ statut: 6 }) // Statut 6 pour annuler
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              toastr.success('La demande annulée avec succès !');
              setTimeout(() => location.reload(), 1000);
          } else {
              toastr.error('Erreur : ' + data.error);
          }
      })
      .catch(error => {
          toastr.error('La demande n\'a pas été annulée');
      });
  });


 $(document).on('click', '.btnExcuterDemande', function (e) {
    e.preventDefault(); 
    const demandeId = $(this).data('id');

    Swal.fire({
        title: 'Exécuter la demande ?',
        text: "Cette action exécutera définitivement la demande.",
        
        showCancelButton: true,
        confirmButtonColor: '#7593ae',
        cancelButtonColor: '#b6cb9e',
        confirmButtonText: 'Oui, exécuter',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: '/demande/executerDemande/' + demandeId,
                method: 'POST',
                success: function (response) {
                    toastr.success('La demande a été exécutée avec succès. Voir la mission.', 'Succès');
                  
                },
                error: function () {
                    toastr.error('Une erreur est survenue lors de l\'exécution de la demande.', 'Erreur');
                }
            });
        }
    });
});


 

});