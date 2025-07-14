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

    if (!vehicule.val() || !conducteur.val() || !typePrestation.val() || !zone.val() || !prestation.val() || quantite <= 0 || nbJours <= 0) {
      alert('Veuillez remplir tous les champs du détail avec des valeurs valides.');
      return;
    }

    $.ajax({
      url: '/demande/ajax/tarif',
      method: 'GET',
      data: {
        prestationId: prestation.val(),
        date: dateDemande,
        quantite: quantite,
        nbJours: nbJours
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
            <td>${quantite}<input type="hidden" name="details[${detailIndex}][quantite]" value="${quantite}"></td>
            <td>${nbJours}<input type="hidden" name="details[${detailIndex}][nb_jours]" value="${nbJours}"></td>
            <td><button class="btn btn-sm btnRemoveDetail" type="button"><i class="fa fa-trash"></i></button></td>
          </tr>
        `);

        detailIndex++;
        resetDetailFields();
      },
      error: function () {
        alert('Erreur lors du calcul du tarif.');
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
      alert('Veuillez ajouter au moins un détail avant de soumettre.');
      e.preventDefault();
    }
  });

  $(document).on('click', '.btnTraiterDemande', function () {
  const demandeId = $(this).data('id');


  $.ajax({
    url: '/demande/ajax/get/' + demandeId,
    method: 'GET',
    success: function (data) {
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
    <tr data-prestation-id="${d.prestationId}">
      <td>${i + 1}</td>
      <td class="vehicule">${d.vehicule}</td>
      <td class="conducteur">${d.conducteur}</td>
      <td class="type_prestation">${d.type_prestation}</td>
      <td class="zone">${d.zone}</td>
      <td class="prestation">${d.prestation}</td>
      <td class="quantite">${d.quantite}</td>
      <td class="nb_jours">${d.nb_jours}</td>
      <td class="tarif">${d.tarif ?? ''}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-sm" type="button" id="dropdownMenuButton${d.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 30px; height: 30px; padding: 0;">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton${d.id}">
            <button type="button" class="dropdown-item btnModifierDetail" data-id="${d.id}">
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
      alert("Erreur lors du chargement de la demande.");
    }
  });
});


 // clic sur "Modifier" depuis la liste des détails
$(document).on('click', '.btnModifierDetail', function () {
  const $row = $(this).closest('tr');

  const detailId = $(this).data('id');
  const prestationId = $row.data('prestation-id'); // ID prestation
  
  const prestationNom = $row.find('td.prestation').text().trim();

  $('#detail-id').val(detailId);
  $('#edit-vehicule').val($row.find('td.vehicule').text().trim());
  $('#edit-conducteur').val($row.find('td.conducteur').text().trim());
  $('#edit-type').val($row.find('td.type_prestation').text().trim());
  $('#edit-zone').val($row.find('td.zone').text().trim());

  $('#edit-prestation').val(prestationNom);
  $('#edit-prestation-id').val(prestationId); // Remplissage du champ caché avec ID

  $('#edit-quantite').val($row.find('td.quantite').text().trim());
  $('#edit-jours').val($row.find('td.nb_jours').text().trim());

  $('#modifierDetailModal').modal('show');
});



 $('#btn-enregistrer-detail').on('click', function (e) {
  e.preventDefault();

  const $modal = $('#modifierDetailModal');
  const prestationId = $('#edit-prestation-id').val(); // ID et non nom
  const quantite = $('#edit-quantite').val();
  const nbJours = $('#edit-jours').val();
  const date = $('#traiter-date').val();

  // Optionnel : vérifie que prestationId est bien défini
  if (!prestationId) {
    alert("Prestation non sélectionnée correctement.");
    return;
  }

  $.ajax({
    url: '/demande/ajax/tarif',
    method: 'GET',
    data: {
      prestationId: prestationId,
      quantite: quantite,
      nbJours: nbJours,
      date: date
    },
    success: function (tarif) {
      // Trouver la ligne correspondant à ce détail dans la table
      // On peut chercher via detail-id ou d.id, ici on utilise data-id ou autre approche selon ton code
      const detailId = $('#detail-id').val();
      const $row = $(`#traiter-details-table tbody tr button.btnModifierDetail[data-id="${detailId}"]`).closest('tr');

      $row.find('.quantite').text(quantite);
      $row.find('.nb_jours').text(nbJours);
      $row.find('.tarif').text(parseFloat(tarif).toFixed(2));

      $modal.modal('hide');
    },
    error: function () {
      alert("Erreur lors du recalcul du tarif.");
    }
  });
});



$('#btn-traiter-enregistrer').on('click', function () {
  const id = $('#traiter-id').val();
  const details = [];

  $('#traiter-details-table tbody tr').each(function () {
    const row = $(this);
    details.push({
      vehicule: row.find('.vehicule').text().trim(),
      conducteur: row.find('.conducteur').text().trim(),
      type_prestation: row.find('.type_prestation').text().trim(),
      zone: row.find('.zone').text().trim(),
      prestation: row.find('.prestation').text().trim(),
      quantite: row.find('.quantite').text().trim(),
      nb_jours: row.find('.nb_jours').text().trim(),
      tarif: row.find('.tarif').text().trim()
    });
  });

  $.ajax({
    url: '/demande/traiter/enregistrer',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ id: id, details: details }),
    success: function (res) {
      alert(res.message);
      location.reload();
    },
    error: function () {
      alert("Erreur lors de l'enregistrement du traitement.");
    }
  });
});

});