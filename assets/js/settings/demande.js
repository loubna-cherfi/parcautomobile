$(document).ready(function () {
    // Initialisation de DataTable pour la table principale
    $('#demandeTable').DataTable({
        lengthMenu: [
            [15, 25, 50, -1],
            [15, 25, 50, 'ALL']
        ],
        autoWidth: false,
        destroy: true
    });
       // Activation du tooltip pour Bootstrap 5
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.forEach(function (tooltipTriggerEl) {
                new bootstrap.Tooltip(tooltipTriggerEl);
            });
    $('.btnDetails').on('click', function () {
      const demandeId = $(this).data('id');
      const content = $('#template-detail-' + demandeId).html();

      $('#detailsTableBody').html(content);
      $('#detailDemandeModal').modal('show');
    });
$(document).on('change', '.type-prestation-select', function () {
  const index = $(this).data('index');
  const typeId = $(this).val();

  $(`select.prestation-select[data-index="${index}"] option`).each(function () {
    const prestationType = $(this).data('type');
    if (!typeId || prestationType == typeId) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  // Réinitialiser la sélection prestation
  $(`select.prestation-select[data-index="${index}"]`).val('');
});
$(document).on('click', '.btn-traiter', function () {
  const demandeId = $(this).data('id');
  $.get(`/demande/${demandeId}/traitement`, function (html) {
    $('#traiterDemandeContainer').html(html);
    $('#traiterDemande').modal('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.type-prestation').forEach(select => {
    select.addEventListener('change', function () {
      const index = this.dataset.index;
      const typeId = this.value;
      const prestationSelect = document.querySelector(`.prestation[data-index="${index}"]`);

      prestationSelect.querySelectorAll('option').forEach(option => {
        if (!typeId || option.dataset.type === typeId) {
          option.hidden = false;
        } else {
          option.hidden = true;
        }
      });
      prestationSelect.value = '';
    });
  });
});



  });