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
$(document).on('click', '.saveUpdateConducteur', function (e) {
     e.preventDefault(); 
    let data = {
        id: $('#idConducteur').val(),
        nom: $('#nomUpd').val(),
        prenom: $('#prenomUpd').val(),
        cin: $('#cinUpd').val(),
        permisNumero: $('#permisNumeroUpd').val(),
        permisType: $('#permisTypeUpd').val(),
        telephone: $('#telephoneUpd').val(),
        email: $('#emailUpd').val(),
        adresse: $('#adresseUpd').val(),
        status: $('input[name="statusupd"]:checked').val()
    };

    $.post('/conducteur/updateConducteur', data, function (response) {
        toastr.success(response.success);
        location.reload(); // ou recharger la DataTable
    }).fail(function (xhr) {
        toastr.error("Erreur lors de la modification");
    });
});
$(document).on('click', '.btnToggleStatusConducteur', function () {
    let id = $(this).data('id');

    $.post('/conducteur/toggleConducteur/' + id, function (response) {
        toastr.success(response.success);
        location.reload(); // ou mise à jour du DOM si tu préfères
    }).fail(function (xhr) {
        toastr.error("Erreur lors du changement de statut");
    });
});
$(document).on('click', '.saveAddConducteur', function (e) {
    e.preventDefault();

let data = {
    nom: $('#nom').val(),
    prenom: $('#prenom').val(),
    cin: $('#cin').val(),
    permisNumero: $('#permisNumero').val(),
    permisType: $('#permisType').val(),
    telephone: $('#telephone').val(),
    email: $('#email').val(),
    adresse: $('#adresse').val(),
    permisDateObtention: $('#permisDateObtention').val(),
    dateNaissance: $('#dateNaissance').val(),
    status: $('input[name="status"]:checked').val()
};


    $.post('/conducteur/addConducteur', data, function (response) {
        toastr.success(response.success);
        $('#addConducteur').modal('hide');
        location.reload(); // ou reload DataTable si tu veux éviter le rechargement complet
    }).fail(function (xhr) {
        toastr.error("Erreur lors de l'ajout du conducteur");
        console.error(xhr.responseText);
    });
});


        });