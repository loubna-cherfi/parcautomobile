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

  // ➕ Ajouter un détail avec calcul tarif réel
  $('#add-detail').on('click', function () {
    const vehicule = $('select[name="details[0][vehicule]"] option:selected');
    const conducteur = $('select[name="details[0][conducteur]"] option:selected');
    const typePrestation = $('select[name="details[0][type_prestation]"] option:selected');
    const zone = $('select[name="details[0][zone]"] option:selected');
    const prestation = $('select[name="details[0][prestation]"] option:selected');
    const quantite = $('input[name="details[0][quantite]"]').val();
    const nbJours = $('input[name="details[0][nb_jours]"]').val();
    const dateDemande = $('input[name="dateDemande"]').val();

    if (!vehicule.val() || !conducteur.val() || !typePrestation.val() || !zone.val() || !prestation.val() || !quantite || !nbJours) {
      alert('Veuillez remplir tous les champs du détail.');
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
            <td>${prestation.text()}<input type="hidden" name="details[${detailIndex}][prestation]" value="${prestation.val()}"></td>
            <td>${quantite}<input type="hidden" name="details[${detailIndex}][quantite]" value="${quantite}"></td>
            <td>${nbJours}<input type="hidden" name="details[${detailIndex}][nb_jours]" value="${nbJours}"></td>
            <td>${tarif.toFixed(2)}<input type="hidden" name="details[${detailIndex}][tarif]" value="${tarif.toFixed(2)}"></td>
            <td><button class="btn btn-sm btnRemoveDetail"><i class="fa fa-trash"></i></button></td>
          </tr>
        `);

        detailIndex++;

        // ✅ Supprimer les champs de base pour éviter qu’ils soient soumis
        $('select[name^="details[0]"]').removeAttr('name');
        $('input[name="details[0][quantite]"]').val('').removeAttr('name');
        $('input[name="details[0][nb_jours]"]').val('').removeAttr('name');
        $('#add-prestation-0').html('<option value="">Prestation</option>').removeAttr('name');
      },
      error: function () {
        alert('Erreur lors du calcul du tarif.');
      }
    });
  });

  // ❌ Supprimer un détail
  $(document).on('click', '.btnRemoveDetail', function () {
    $(this).closest('tr').remove();

    // ❗ Cacher le tableau s’il n’y a plus de lignes
    if ($('#table-details tbody tr').length === 0) {
      $('#table-details-container').hide();
      detailIndex = 0;
    }
  });

  // 🔽 Filtres dynamiques : prestations par type + zone
  function filterPrestationsAjax(typeSelect, zoneSelect, prestationSelect) {
    const selectedType = $(typeSelect).val();
    const selectedZone = $(zoneSelect).val();

    if (!selectedType || !selectedZone) {
      $(prestationSelect).html('<option value="">Sélectionner une prestation</option>');
      return;
    }

    $.ajax({
      url: '/demande/ajax/prestations',
      method: 'GET',
      data: { type: selectedType, zone: selectedZone },
      success: function (data) {
        let options = '<option value="">Sélectionner une prestation</option>';
        data.forEach(function (prestation) {
          options += `<option value="${prestation.id}">${prestation.nom}</option>`;
        });
        $(prestationSelect).html(options);
      },
      error: function () {
        $(prestationSelect).html('<option value="">Erreur de chargement</option>');
      }
    });
  }

  $('#add-type-prestation, #add-zone').on('change', function () {
    filterPrestationsAjax('#add-type-prestation', '#add-zone', '#add-prestation-0');
  });

  // 🕓 Remplir automatiquement la date/heure actuelle
  $('#addDemande').on('shown.bs.modal', function () {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const formatted = `${yyyy}-${mm}-${dd}T${hh}:${min}`;
    $('input[name="dateDemande"]').val(formatted);
  });

  // ❗ Empêcher soumission s’il n’y a pas de détail
  $('#formAddDemande').on('submit', function (e) {
    if ($('#table-details tbody tr').length === 0) {
      alert('Veuillez ajouter au moins un détail avant de soumettre.');
      e.preventDefault();
    }
  });
});
