$(document).ready(function () {
    let globalActions = [];

    $('#vehiculeTable').DataTable({
        processing: true,
        serverSide: true,   
        ajax: {
            url: Routing.generate('app_fetch_vehicules'),
            type: 'GET',
            dataSrc: function (json) {
                // Store actions globally for dynamic rendering
                window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
                return json.data;
            },
        },
        columns: [
            { data: 'id', name: 'v.id' },
            { data: 'matricule', name: 'v.matricule' },
            { data: 'model', name: 'v.model' },
            { data: 'carburant', name: 'v.carburant' },
            { data: 'transmission', name: 'v.transmission' },
            { data: 'kilometrage', name: 'v.kilometrage' },
            { data: 'capacite', name: 'v.capacite' },
            {
                data: 'active',
                name: 'v.active',
                render: function (data) {
                    return data
                        ? '<i class="fa-regular fa-circle-check actifIcon"></i>'
                        : '<i class="fa-regular fa-circle-xmark inactifIcon"></i>';
                }
            },
            { name: 'actions', date: null, orderable: false, searchable: false, render: function (data,type, full) {
                var actionsHtml = `<div class="dropdown">
                            <i class="menuActions fa-solid fa-ellipsis-vertical" id="${full.id}">
                            </i>
                            <div class="dropdown-menu dropdown-content divMenu" id="divMenu${full.id}">`;
                            // console.log(window.globalActions);
                            window.globalActions.forEach(function (action) {
                                actionsHtml += `
                                    <button data-id="${full.id}" class="${action.className} dropdown-item d-flex align-items-end"><i class="${action.icon} menuIcon"></i> ${action.nom}</button>`;
                            });
                    actionsHtml += '</div>';
                    return actionsHtml;
            } },
        ],
        language: datatablesFrench
    });


    // Debug : bouton cliqué  
    $(document).on('click', 'button', function () {
        console.log("loubna:", $(this).attr("data-bs-target"));
    });

    // Charger les infos d’un véhicule à modifier
    $(document).on('click', '.btnUpdateVehicule', function () {
        let vehiculeId = $(this).data('id');

        $.ajax({
            url: '/vehicule/getVehicule/' + vehiculeId,
            method: 'GET',
            success: function (data) {
                $('#idVehicule').val(data.id);
                $('#matriculeUpd').val(data.matricule);
                $('#modelUpd').val(data.model);
                $('#carburantUpd').val(data.carburant);
                $('#transmissionUpd').val(data.transmission);
                $('#kilometrageUpd').val(data.kilometrage);
                $('#capaciteUpd').val(data.capacite);
                $('#marque_vehicule_id_upd').val(data.marque_vehicule_id).trigger('change');
                $('#type_vehicule_id_upd').val(data.type_vehicule_id).trigger('change');

                if (data.active) {
                    $('#actifUpd').prop('checked', true);
                } else {
                    $('#inactifUpd').prop('checked', true);
                }

                $('#updateVehicule').modal('show');
            },
            error: function () {
                toastr.error("Erreur lors du chargement du véhicule.");
            }
        });
    });

    // Enregistrer les modifications d’un véhicule
    $(document).on('click', '.saveUpdateVehicule', function (e) {
        e.preventDefault();

        let data = {
            id: $('#idVehicule').val(),
            matricule: $('#matriculeUpd').val().trim(),
            model: $('#modelUpd').val().trim(),
            carburant: $('#carburantUpd').val().trim(),
            transmission: $('#transmissionUpd').val().trim(),
            kilometrage: $('#kilometrageUpd').val().trim(),
            capacite: $('#capaciteUpd').val().trim(),
            statusVehicule: $('input[name="statusVehiculeUpd"]:checked').val(),
            marque_vehicule_id: $('#marque_vehicule_id_upd').val(),
            type_vehicule_id: $('#type_vehicule_id_upd').val()
        };

        // Vérification simple
        if (!data.matricule || !data.model || !data.carburant || !data.transmission || !data.kilometrage || !data.capacite || !data.marque_vehicule_id || !data.type_vehicule_id) {
            toastr.error("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        $.ajax({
            url: '/vehicule/updateVehicule',
            method: 'POST',
            data: data,
            success: function () {
                $('#updateVehicule').modal('hide');
                toastr.success("Véhicule modifié avec succès.");
                location.reload(); // ou recharger une seule ligne dynamiquement
            },
            error: function (xhr) {
                toastr.error("Une erreur est survenue lors de la modification.");
                console.error(xhr.responseText);
            }
        });
    });

    //  Soumission AJAX pour ajouter un véhicule
    $(document).on('click', '.saveAddVehicule', function (e) {
        e.preventDefault();

        let data = {
            matricule: $('#matricule').val().trim(),
            model: $('#model').val().trim(),
            carburant: $('#carburant').val().trim(),
            transmission: $('#transmission').val().trim(),
            kilometrage: $('#kilometrage').val().trim(),
            capacite: $('#capacite').val().trim(),
            status: $('input[name="statusVehicule"]:checked').val(),
            marque_vehicule_id: $('#marque_vehicule_id').val(),
            type_vehicule_id: $('#type_vehicule_id').val()
        };

        if (!data.matricule || !data.model || !data.carburant || !data.transmission || !data.kilometrage || !data.capacite || !data.marque_vehicule_id || !data.type_vehicule_id) {
            toastr.error("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        $.ajax({
            url: '/vehicule/addVehicule',
            method: 'POST',
            data: data,
            success: function (response) {
                if (response.exists) {
                    toastr.warning("VÉHICULE EXISTE DÉJÀ !");
                    return;
                }

                $('#addVehicule').modal('hide');
                toastr.success("Véhicule ajouté avec succès !");
              setTimeout(function () {
        location.reload();
    }, 1500);
                
            },
            error: function (xhr) {
                toastr.error("Une erreur est survenue lors de l'ajout.");
                console.error(xhr.responseText);
            }
        });
    });
    // 🔄 Activation/Désactivation d’un véhicule
$(document).on('click', '.btnToggleStatusVehicule', function () {
    let vehiculeId = $(this).data('id');

    $.ajax({
        url: '/vehicule/toggleStatus/' + vehiculeId,
        method: 'POST',
        success: function (response) {
            if (response.success) {
                toastr.success(response.message);
                location.reload(); // ou rafraîchir dynamiquement la ligne
            } else {
                toastr.error(response.message || "Erreur inattendue.");
            }
        },
        error: function () {
            toastr.error("Erreur lors du changement de statut.");
        }
    });
});

});




