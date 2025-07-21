$(document).ready(function () {
  // Initialisation de la table
  $('#missionTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'Tous']],
    autoWidth: false,
    destroy: true
  });


  
  let currentMissionId = null;

  // Quand on clique sur "Évaluer"
  $(document).on('click', '.btnEvaluerDemande', function () {
    currentMissionId = $(this).data('id');
    $('#noteEvaluation').val(0);
    $('#starRating .star').css('color', '#ccc'); // reset des étoiles
  });

  // Interaction avec les étoiles
  $(document).on('click', '#starRating .star', function () {
    const value = $(this).data('value');
    $('#noteEvaluation').val(value);

    $('#starRating .star').each(function () {
      const starValue = $(this).data('value');
      $(this).css('color', starValue <= value ? '#f0ad4e' : '#ccc');
    });
  });

  // Envoi de l'évaluation
  $('#submitEvaluation').on('click', function () {
    const note = $('#noteEvaluation').val();

    if (!note || note == 0) {
      
      toastr.warning("Veuillez sélectionner une note avant d'envoyer.");

      return;
    }

    $.ajax({
      url: `/mission/evaluer/${currentMissionId}`,
      method: 'POST',
      data: { note: note },
      success: function (res) {
        $('#evaluerMissionModal').modal('hide');
        toastr.success("Évaluation enregistrée avec succès.");
        location.reload();
      },
      error: function () {
        alert("Erreur lors de l'enregistrement de l'évaluation.");
        toastr.success("Évaluation enregistrée avec succès.");
      }
    });
  });
});
