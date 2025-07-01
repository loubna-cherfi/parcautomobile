$(document).ready( function () {
    var previousXhr = null;

    // initialize datatables
    var table = $("#modulesTable").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: {
            url: Routing.generate("app_settings_module_list"),
            type: "get",
            data: function (d) {
                // d.filterDate = filterValue;
            },
            beforeSend: function (jqXHR) {
                if (previousXhr) {
                    previousXhr.abort();
                }
                previousXhr = jqXHR;
            },
            dataSrc: function (json) {
                // Store actions globally for dynamic rendering
                window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
                return json.data;
            },
        },
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        columns: [
            { name: "m.id", data: "id" },
            { name: "m.nom", data: "nom" },
            { name: "m.icon", data: "icon" },
            { name: "m.route", data: "route" },
            { name: "m.ord", data: "ord" },
            { name: "m.active", data: "active" },
            { name: 'actions', date: null, orderable: false, searchable: false, render: function (data,type, full) {
                var actionsHtml = `<div class="dropdown">
                            <i class="menuActions fa-solid fa-ellipsis-vertical" id="${full.id}">
                            </i>
                            <div class="dropdown-menu dropdown-content divMenu" id="divMenu${full.id}">`;
                            window.globalActions.forEach(function (action) {
                                actionsHtml += `
                                    <button data-id="${full.id}" class="${action.className} dropdown-item d-flex align-items-end"><i class="${action.icon} menuIcon"></i> ${action.nom}</button>`;
                            });
                    actionsHtml += '</div>';
                    return actionsHtml;
            } },
        ],
        columnDefs: [
            {
                targets: 0,
                orderable: false,
                searchable: false,
                // render: function (data, type, full, meta) {
                //     var checked = livraison_array.includes(data) ? 'checked' : '';
                //     return `<input type="checkbox" class="selectLivraison" data-id="${data}" ${checked}>`;
                // }
            },
        ],
        language: datatablesFrench,
        initComplete: function () {
            // Prevent sorting when interacting with select in header
            $("thead .selection").on("click", function (e) {
                e.stopPropagation();
            });
        },
    });

    // ajouter module
    $("body").on("click", ".saveAddModule" , async function(){
        const l = ladda.create(document.activeElement);
        l.start();

        var route = $("#route").val();
        var icon = $("#icon").val();
        var nom = $("#nomModule").val();

        if(!route || !icon || !nom){
            toastr.error("veuillez remplir tous les champs obligatoires.")
            l.stop()
            return;
        }

        try {
            toastr.info("En cours...", {
                timeOut: 0,
                closeButton: true
            });
            const request = await axios.post(
                Routing.generate('app_settings_module_add',{
                    route: route,
                    icon: icon,
                    nom: nom,
                })
            );
            const response = await request.data;
            toastr.clear();
            l.stop();
            console.log(response)
            toastr.success(response)
            $('#addModule').modal("hide")
            table.ajax.reload();
        } catch (error) {
            l.stop();
            toastr.clear();
            console.log(error);
            if (error.response && error.response.data) {
                const message = error.response.data.error;
                toastr.error(message);
            } else {
                toastr.error('Something went wrong!');
            }
        }
    })

    $('body').on('click', '.activateModule', async function (e) {
        e.preventDefault();
        try {
            let id = $(this).attr('data-id');
            toastr.info("En cours...", {
                timeOut: 0,
                closeButton: true
            });
            const request = await axios.post(
                Routing.generate('app_settings_module_toggle_active', { module: id })
            );
            const response = await request.data;
            toastr.clear();
            toastr.success(response)
            table.ajax.reload(false);
        } catch (error) {
            toastr.clear();
            console.log(error);
            if (error.response && error.response.data) {
                const message = error.response.data;
                toastr.error(message);
            } else {
                toastr.error('Something went wrong!');
            }
        }
    })
})
