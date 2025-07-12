$(document).ready(function () {
  $('#missionTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'Tous']],
    autoWidth: false,
    destroy: true
  });

  $(document).on('click', '.btnDetails', function () {
    const missionId = $(this).data('id');
    const url = `/mission/details-mission/${missionId}`;

    $.ajax({
      url: url,
      method: 'GET',
      success: function (data) {
        let html = '';
        if (data.length === 0) {
          html = '<tr><td colspan="10" class="text-center text-danger">Aucun détail trouvé</td></tr>';
        } else {
          data.forEach(function (d) {
            html += `
              <tr>
                <td>${d.date_mission}</td>
                <td>${d.heure_depart}</td>
                <td>${d.lieu_mission}</td>
                <td>${d.ville_mission}</td>
                <td>${d.km_depart}</td>
                <td>${d.km_retour}</td>
                <td>${d.duree_mission || '-'}</td>
                <td>${d.tarif_unique} MAD</td>
                <td>${d.conducteur || '-'}</td>
                <td>${d.vehicule || '-'}</td>
              </tr>`;
          });
        }

        $('#detailsMissionBody').html(html);
        $('#detailMissionModal').modal('show'); // <== ouvre la modal si non auto
      },
      error: function () {
        $('#detailsMissionBody').html('<tr><td colspan="10" class="text-center text-danger">Erreur de chargement</td></tr>');
        $('#detailMissionModal').modal('show');
      }
    });
  });
});
