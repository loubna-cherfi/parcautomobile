$(document).ready(function () {
  // 📊 Initialisation DataTable
  $('#demandeTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'ALL']],
    autoWidth: false,
    destroy: true
  });

  // 🧩 Tooltips pour Bootstrap 4 ou 5
  const isBootstrap5 = typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined';
  if (isBootstrap5) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  } else {
    $('[data-toggle="tooltip"]').tooltip();
  }

  let detailIndex = 0;

  // 🔄 Réinitialiser les champs du formulaire après ajout d'un détail
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

  // 🔢 Ajouter un nouveau détail
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

  // ❌ Supprimer un détail
  $(document).on('click', '.btnRemoveDetail', function () {
    $(this).closest('tr').remove();

    if ($('#table-details tbody tr').length === 0) {
      $('#table-details-container').hide();
      detailIndex = 0;
    }
  });

  // 🔽 Charger les prestations dynamiquement
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

  // 🕒 Remplir la date actuelle automatiquement à l'ouverture du modal
  $('#addDemande').on('shown.bs.modal', function () {
    const now = new Date();
    const formatted = now.toISOString().slice(0, 16);
    $('input[name="dateDemande"]').val(formatted);
  });

  // 🚫 Empêcher la soumission sans détails
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
      // 🎯 Remplir infos générales
      $('#traiter-id').val(data.id);
      $('#traiter-nom').val(data.nomBenificiaire);
      $('#traiter-cin').val(data.cin);
      $('#traiter-observation').val(data.observation);
      $('#traiter-description').val(data.description);
      $('#traiter-contact').val(data.contact);
      $('#traiter-nbPersonnes').val(data.nbPersonnes);
      $('#traiter-date').val(data.dateDemande);
      $('#traiter-adresse').val(data.adressDepart);

      // 🧾 Remplir le tableau des détails
      const tbody = $('#traiter-details-table tbody');
      tbody.empty();

      data.details.forEach((d, i) => {
  tbody.append(`
    <tr>
      <td>${i + 1}</td>
      <td>${d.vehicule}</td>
      <td>${d.conducteur}</td>
      <td>${d.type_prestation}</td>
      <td>${d.zone}</td>
      <td>${d.prestation}</td>
      <td>${d.quantite}</td>
      <td>${d.nb_jours}</td>
      <td>
        <div class="dropdown">
          <button class="btn  btn-sm dropdown" type="button" data-toggle="dropdown">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item btnEditDetail" href="#" data-index="${i}"><i class="fa fa-edit"></i> Modifier</a>
          
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
});