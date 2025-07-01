$(document).ready(function () {
    // Initialize Select2
    $("select").select2();

    // Initialize DataTable
    initDataTable();

    function initDataTable() {
        $('#vehiculeTable').DataTable({
            lengthMenu: [
                [15, 25, 50, -1],
                [15, 25, 50, 'Tous']
            ],
            autoWidth: false,
            destroy: true // important pour reinitialiser après refresh
        });
    }

    // Debug : affiche le data-bs-target
    $(document).on('click', 'button', function () {
        console.log("loubna:", $(this).attr("data-bs-target"));
    });
$(document).on('click', '.btnUpdateVehicule', function () {
    let vehiculeId = $(this).data('id');

    $.ajax({
        url: '/vehicule/getVehicule/' + vehiculeId,
        method: 'GET',
        success: function(data) {
            $('#idVehicule').val(data.id);
            $('#matriculeUpd').val(data.matricule);
            $('#modelUpd').val(data.model);
            $('#carburantUpd').val(data.carburant);
            $('#transmissionUpd').val(data.transmission);
            $('#kilometrageUpd').val(data.kilometrage);
            $('#capaciteUpd').val(data.capacite);

            // Sélectionne les valeurs dans les SELECTs
            $('#marque_vehicule_id_upd').val(data.marque_vehicule_id).trigger('change');
            $('#type_vehicule_id_upd').val(data.type_vehicule_id).trigger('change');

            // Radio boutons
            if (data.active) {
                $('#actifUpd').prop('checked', true);
            } else {
                $('#inactifUpd').prop('checked', true);
            }

            // Afficher le modal
            $('#updateVehicule').modal('show');
        },
        error: function() {
            toastr.error("Erreur lors du chargement du véhicule.");
        }
    });
});

    // Soumission AJAX pour ajouter un véhicule
    $(document).on('click', '.saveAddVehicule', function (e) {
        e.preventDefault();

        // Récupération des valeurs du formulaire
        let matricule = $('#matricule').val().trim();
        let model = $('#model').val().trim();
        let carburant = $('#carburant').val().trim();
        let transmission = $('#transmission').val().trim();
        let kilometrage = $('#kilometrage').val().trim();
        let capacite = $('#capacite').val().trim();
        let status = $('input[name="statusVehicule"]:checked').val();
        let marque = $('#marque_vehicule_id').val();
        let type = $('#type_vehicule_id').val();

        // Validation simple
        if (!matricule || !model || !carburant || !transmission || !kilometrage || !capacite || !marque || !type) {
            toastr.error("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        let data = {
            matricule: matricule,
            model: model,
            carburant: carburant,
            transmission: transmission,
            kilometrage: kilometrage,
            capacite: capacite,
            status: status,
            marque_vehicule_id: marque,
            type_vehicule_id: type
        };

        console.log("🚗 Données envoyées :", data);

        $.ajax({
            url: '/vehicule/addVehicule',
            method: 'POST',
            data: data,
            success: function (response) {
                 // Si le véhicule existe déjà
                if (response.exists) {
                   toastr.warning("VÉHICULE EXISTE DÉJÀ !");
                   return;
                }
                $('#addVehicule').modal('hide');
                 toastr.success("Véhicule ajouté avec succès !");

                // Remplacement du tableau avec le HTML renvoyé
                $('#listVehicules').html(response);
                initDataTable(); // Reinitialiser le DataTable
            },
            error: function (xhr) {
                toastr.error("Une erreur est survenue lors de l'ajout du véhicule.");
                console.error(xhr.responseText);
            }
        });
    });
});
