$(document).ready(function () {
    let globalActions = [];

    $('#missionTable').DataTable({
        processing: true,
        serverSide: true,   
        ajax: {
            url: Routing.generate('app_fetch_missions'),
            type: 'GET',
            dataSrc: function (json) {
               
                window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
                return json.data;
            },
        },
        columns: [

       
            { data: 'id', name: 'm.id' },
            { data: 'demande', name: 'd.id' },
               {
                data: 'dossier',
                name: 'e.nomDossier',
                render: function(data, type, row) {
                    if (data) {
                        if (data.length > 4) {
                            return `<span data-bs-toggle="tooltip" title="${data}">${data.substring(0, 4)}...</span>`;
                        } else {
                            return data;
                        }
                    } else {
                        return `<span class="text-danger">Aucun dossier</span>`;
                    }
                }
            },
            { data: 'observation', name: 'm.observation' },
            { data: 'nom_benificiaire', name: 'm.nom_benificiaire' },
            { data: 'cin', name: 'm.cin' },
            { data: 'contact', name: 'm.contact' },
             { data: 'date_mission', name: 'd.date_mission' },
            { data: 'nbPersonne', name: 'm.nbPersonne' },
            { data: 'adress_depart', name: 'm.adress_depart' },
              { data: 'tarif_total', name: 'm.tarif_total' },
             { data: 'date_evaluation', name: 'm.date_evaluation' },
              {
    data: 'evaluation_note',
    name: 'm.evaluation_note',
    render: function(data, type, row) {
        if (!data || isNaN(data)) {
            return '<span class="text-muted">Non noté</span>';
        }

        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= data) {
                stars += '<i class="fas fa-star text-warning"></i>'; 
            } else {
                stars += '<i class="far fa-star text-warning"></i>'; 
            }
        }
        return `<span title="${data}/5">${stars}</span>`;
    }
},

           
            {
                data: 'statut',
                name: 's.libelle',
                render: function(data, type, row) {
                    return `<span style="color: #7593ae; text-align: center; font-size: 10px; display: block;">${data}</span>`;
                }
            },

        
          
         { data: null, name: 'actions', orderable: false, searchable: false, render: function (data, type, full) {
            // console.log('Full row data:', full);
    // console.log('Global actions:', window.globalActions);
    var actionsHtml = `<div class="dropdown">
        <i class="menuActions fa-solid fa-ellipsis-vertical" id="${full.id}"></i>
        <div class="dropdown-menu dropdown-content divMenu" id="divMenu${full.id}">`;

    if (Array.isArray(window.globalActions)) {
      window.globalActions.forEach(function (action) {
        //  console.log('Checking action:', action.nom, 'for statutId:', full.statutId);
   
        let statutId = full.statutId; 

        let shouldRender = false;

        switch (action.nom) {
          case 'DETAILLE':
            shouldRender = true;
            break;
    
          case 'EVALUER':
            shouldRender = (statutId === 3);
            break;
        }
// console.log(`Action ${action.nom} shouldRender:`, shouldRender);
        if (shouldRender) {
          actionsHtml += `
            <button data-id="${full.id}" class="${action.className} dropdown-item d-flex align-items-end">
              <i class="${action.icon} menuIcon"></i> ${action.nom}
            </button>`;
        }
      });
      
    }

    actionsHtml += '</div></div>';
    return actionsHtml;
  }
}

        ],
        language: datatablesFrench
    });

    $(document).on('click', '.buttonDetailleMission', function() {
    const missionId = $(this).data('id');
    if (missionId) {
        const modalId = '#detailMissionModal' + missionId;
        $(modalId).modal('show');
    }
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
        $('#detailMissionModal').modal('show');
      },
      error: function () {
        $('#detailsMissionBody').html('<tr><td colspan="10" class="text-center text-danger">Erreur de chargement</td></tr>');
        $('#detailMissionModal').modal('show');
      }
    });
  });



   let currentMissionId = null;

  $(document).on('click', '.btnEvaluerDemande', function () {
    currentMissionId = $(this).data('id');
    $('#noteEvaluation').val(0);
    $('#starRating .star').css('color', '#ccc');
    $('#evaluerMissionModal').modal('show'); // 👈 Affiche le modal
  });

  $(document).on('click', '#starRating .star', function () {
    const value = $(this).data('value');
    $('#noteEvaluation').val(value);
    $('#starRating .star').each(function () {
      const starValue = $(this).data('value');
      $(this).css('color', starValue <= value ? '#f0ad4e' : '#ccc');
    });
  });

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
        toastr.success('Évaluation enregistrée avec succès.');
        setTimeout(() => location.reload(), 1500); 
      },
      error: function () {
        toastr.error("Erreur lors de l'enregistrement de l'évaluation.");

      }
    });
  });
});