$(document).ready(function () {
    // Initialize Select2
    $("select").select2();

    // Initialize DataTable
    initDataTable();

    function initDataTable() {
        $('#conducteurTable').DataTable({
            lengthMenu: [
                [15, 25, 50, -1],
                [15, 25, 50, 'ALL']
            ],
            autoWidth: false,
            destroy: true // important pour reinitialiser après refresh
        });
    }

    // Debug : affiche le data-bs-target
    $(document).on('click', 'button', function () {
        console.log("loubna:", $(this).attr("data-bs-target"));
    });
    $(document).on('click', '.btnUpdateConducteur', function () {
    let conducteurId = $(this).data('id');

    $.ajax({
        url: '/conducteur/getConducteur/' + conducteurId,
        method: 'GET',
        success: function(data) {
            // Remplir les champs
            $('#idConducteur').val(data.id);
            $('#nomUpd').val(data.nom);
            $('#prenomUpd').val(data.prenom);
            $('#cinUpd').val(data.cin);
            $('#telephoneUpd').val(data.telephone);
            $('#permisNumeroUpd').val(data.permisNumero);
            $('#permisTypeUpd').val(data.permisType);
            $('#emailUpd').val(data.email);
            $('#adresseUpd').val(data.adresse);

            // Radio bouton
            if (data.active) {
                $('#actifupd').prop('checked', true);
            } else {
                $('#desactifupd').prop('checked', true);
            }

            // Afficher le modal
            $('#updateConducteur').modal('show');
        },
        error: function(xhr) {
            toastr.error("Erreur lors du chargement du conducteur.");
            console.error(xhr.responseText);
        }
    });
});

        });