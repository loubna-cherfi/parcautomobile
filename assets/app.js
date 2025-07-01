/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import './styles/login.scss';



const $ = require('jquery');

import "@fontsource/roboto-condensed"; // Defaults to weight 400
import "@fontsource/roboto-condensed/400.css"; // Specify weight
import "@fontsource/roboto-condensed/400-italic.css"; // Specify weight and style

global.$ = global.jQuery = $;

import 'jquery-ui/ui/widgets/autocomplete.js';
import 'jquery-ui/ui/widgets/datepicker.js';
import 'jquery-ui/ui/i18n/datepicker-fr.js';
import 'jquery-ui/themes/base/all.css';


$(document).ready(function() {
  $.active = false;
  $('body').bind('click keypress', function() {
    $.active = true;

  });
  checkActivity(3600000, 60000, 0); // timeout = 30 minutes, interval = 1 minute.
});

function checkActivity(timeout, interval, elapsed) {
  console.log("ZZ")
  if ($.active) {
      elapsed = 0;
      $.active = false;
      $.get(Routing.generate('app_login'));
  }
  if (elapsed < timeout) {
      elapsed += interval;
      setTimeout(function() {
          checkActivity(timeout, interval, elapsed);
      }, interval);
  } else {
      window.location = Routing.generate('app_logout'); // Redirect to "session expired" page.
  }
}

import 'bootstrap/dist/js/bootstrap.bundle'
import 'datatables.net'
const datatablesFrench = 'datatables.net-plugins/i18n/fr-FR.mjs';
global.datatablesFrench = datatablesFrench;
// import 'datatables.net-select'

// import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net-select-dt/css/select.dataTables.css';

import './plugins/pace';

const swal = require('sweetalert2');
const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success btn-xs sySweetStyle mr-2',
    cancelButton: 'btn btn-secondary btn-xs sySweetStyle'
  },
  buttonsStyling: false
})

global.Swal = swal;
global.swalWithBootstrapButtons = swalWithBootstrapButtons;




// start the Stimulus application
import './bootstrap';
const toastr = require('toastr');
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
global.toastr = toastr;

require('select2')
require('select2/dist/css/select2.min.css')

$.fn.select2.amd.define('select2/i18n/fr', [], require("select2/src/js/select2/i18n/fr"));


import Routing from 'fos-router';

global.Routing = Routing;

// require('pace');

import * as Ladda from 'ladda';
global.ladda = Ladda;

require('ladda/dist/ladda.min.css')

const moment = require('moment');

window.moment = moment;



const axios = require('axios');
global.axios = axios;

import './images/logoHCZ2.png'

import './images/logoHcz.png'
import './images/bg_login.jpg'
import './images/26807.jpg'
import './images/5570863.jpg'


import './images/gestion_patient.png'
import './images/hospital.png'
import './images/appointment.png'
import './images/medical-record.png'
import './images/bill.png'
import './images/factures.png'
import './images/consulting.png'
import './images/pec.png'
import './images/archive.png'


import './images/parametrage/dossiers/logo_HMK.png'
import './images/parametrage/dossiers/logo_HMS.png'
import './images/parametrage/dossiers/logo_HMY.png'
import './images/parametrage/dossiers/logo_HMB.png'
import './images/parametrage/dossiers/_logo_FCZ.png'







$(document).ready(function () {

  $("select").select2();

//   function to highligh error inputs
  $.fn.highlightError = function(duration = 5000) {
        this.addClass('border border-danger');
        setTimeout(() => {
            this.removeClass('border border-danger');
        }, duration);
        return this;
    };

  // setInterval(checkSession, 5);

  $("#navbarDropdown").on("click", function () {

    $("#divMenu").toggle("5ms");
  })

  $("html").click(function (e) {
    if ($(e.target).closest('#navbarDropdown').length == 0)
      $("#divMenu").hide("5ms");

  });

  $("body").on("click", ".menuActions", function () {
    var id = $(this).attr("id");

    $("body #divMenu" + id).toggle("5ms");
    $(".divMenu:not(#divMenu" + id + ")").hide();
  })

  $("html").click(function (e) {
    if ($(e.target).closest('.menuActions').length == 0)
      $(".divMenu").hide("5ms");
  });

  window.findAllPatientWarnings = function (ipp) {
    $.ajax({
      type: 'POST',
      url: Routing.generate('gestion_patient_warnings'),
      data: {
        ipp: ipp
      },
      success: function (result) {
        if (result != 'error')
          alert(result);
      }
    });
  }


  window.arrayToOption = function (array, disableOptions = null) {

    const options = array.map(function (item) {
      var option = new Option(item.text, item.id, false, false);
      if (disableOptions && $.inArray(item.id, disableOptions) >= 0) {
        option.disabled = true
      }
      return option
    });

    return options;
  }

  window.dateTimeToString = function (value) {
    var date = new Date(value.date)

    var m = date.getMonth() + 1;

    var month = m.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })

    var day = date.getDate().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })

    return date.getFullYear() + "-" + month + "-" + day
  }

  window.formatNumberToCurrency = function (number) {
    var formattedNumber = new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);

    return formattedNumber;
  }


  const loader = $(".loader-bg");
  global.loader = loader

  // loader.show();


  $('body').on('click', '.typeRepartition', function (e) {
    var value = $(this).val()

    if (value === 'forfait') {
      $('body #montantForfait').prop('disabled', false);
      $('body #valeurPourcentage').prop('disabled', true);

      $('body #pourcentageParte').prop('disabled', true);
      $('body #repartition').prop('disabled', true);

      $('body #btnAddPourcentageDet').hide();
      $('body .list-quotas').hide();
    }
    else if (value === 'pourcentage') {
      $('body #valeurPourcentage').prop('disabled', false);
      $('body #montantForfait').prop('disabled', true);

      $('body #pourcentageParte').prop('disabled', true);
      $('body #repartition').prop('disabled', true);

      $('body #btnAddPourcentageDet').hide();
      $('body .list-quotas').hide();
    }
    else if (value === 'pourcentage_parts') {
      $('body #montantForfait').prop('disabled', true);
      $('body #valeurPourcentage').prop('disabled', true);

      $('body #pourcentageParte').prop('disabled', false);
      $('body #repartition').prop('disabled', false);

      $('body #btnAddPourcentageDet').show();
      $('body .list-quotas').show();
    }
    else {
      $('body #montantForfait').prop('disabled', true);
      $('body #valeurPourcentage').prop('disabled', true);

      $('body #pourcentageParte').prop('disabled', true);
      $('body #repartition').prop('disabled', true);

      $('body #btnAddPourcentageDet').hide();
      $('body .list-quotas').hide();
    }
  })

  $('body').on('click', '#btnAddPourcentageDet', function (e) {
    var codeQuotas = $("#repartition").val();
    var quotas = $("#repartition option:selected").text();
    var pourcentage = $("#pourcentageParte").val();

    var existingItem = $('body .list-quotas').find('.code-quotas').filter(function () {
      return $(this).text() === codeQuotas;
    });

    if (existingItem.length > 0) {
      return toastr.warning("Vous avez déjà ajouté ce quota")
    } else {
      var item = '<li class="list-group-item list-quotas-item">' +
        '<div class="d-flex justify-content-start align-items-center">' +
        '<span class="code-quotas text-danger">' + codeQuotas + '</span>' +
        '&nbsp-&nbsp<span class="quotas">' + quotas + '</span>' +
        '&nbsp-&nbsp<span class="pourcentage-quotas">' + pourcentage + ' %</span>' +
        '<button class="btn ml-auto remove_quotas" type="button"><i class="fa-solid fa-xmark text-danger"></i></button>' +
        '</div>' +
        '</li>';
      $('body .list-quotas').prepend(item);
    }
  });

  $("body").on("click", ".add-patient", function () {
    window.open('/gestion/patient/add', '_blank');
  })

  $('body').on("change", ".check_majoration", function (e) {
    var montant = $(this).closest('tr').find('td:eq(4)').text();

    var mt = parseFloat(montant.replace(/\s/g, '').replace(',', '.'))
    if ($(this).prop('checked')) {

      var res = mt + (mt * 30) / 100;
      $(this).closest('tr').find('td:eq(6)').html(res.toLocaleString('en-US'));
    }
    else {
      $(this).closest('tr').find('td:eq(6)').html(montant);

    }
  })

  $("body").on("dblclick", "#det_dossier_imputation > tbody > tr", function (e) {
    var di_det = $(this).attr('id');

    loader.show();
    $.ajax({
      type: 'POST',
      url: Routing.generate('app_dossier_imputation_detail_technique', { det: di_det }),
      success: function (result) {

        if ($.fn.DataTable.isDataTable('body #det_technique_dossier_imputation')) {
          $('body #det_technique_dossier_imputation').DataTable().clear().destroy();
        }

        $("body #dossier_imputation_dets_technique").empty().append(result);

        $('body #det_technique_dossier_imputation').DataTable({
          columnDefs: [
            {
              targets: 0,
              orderable: false,
              className: 'select-checkbox',
              render: function (data, type, full, meta) {
                return '<input type="checkbox" class="select-checkbox">';
              }
            }
          ],
          order: [[1, 'asc']],
          language: {
            url: window.frenchJsonUrl
          },
          lengthMenu: [
            [20, 50, 100, 200],
            [20, 50, 100, 200],
          ],
          createdRow: function (row, data, dataIndex) {
            // Add the text-right class to the 'montant' or 'prix' column
            $(row).find('td:eq(3)').addClass('text-right');
          }
        });
        loader.hide();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        loader.hide();
        return toastr.error(jqXHR.responseText);
      }
    });
  })


  // $("body").on("change" ,".check-facturable-det", function(e) {
  //   var id = $(this).closest('tr').attr('id');

  //   var checked = $(this).prop('checked');

  //   loader.show();

  //   $.ajax({
  //     type: 'POST',
  //     url: Routing.generate('app_facturable_dossier_imputation_detail',{det:id}),
  //     success: function (result) {

  //       $('.check-facturable-det-technique').prop('checked',checked)

  //       $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) +' DH');
  //       $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) +' DH');
  //       $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) +' DH');

  //       var montantDi = window.formatNumberToCurrency(result.mtFacturable)

  //       console.log(result.di + " : " +montantDi)


  //       $('body .di'+result.di).empty().html(montantDi);


  //       loader.hide();
  //       return toastr.info(result.message);

  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       loader.hide();
  //       return toastr.error(jqXHR.responseText);
  //     }
  //   });
  // })

  // $("body").on("change" ,".check-facturable-det-technique", function(e) {

  //   var id = $(this).closest('tr').attr('id');
  //   var det_id = $(this).closest('tr').attr('data-id');

  //   // var totalCheckboxes = $('.check-facturable-det-technique').length;
  //   var checkedCheckboxes = $('.check-facturable-det-technique:checked').length;

  //   if (checkedCheckboxes === 1) {
  //     $('#'+det_id).find('td:eq(6)').children().prop('checked',true)

  //   } else if (checkedCheckboxes === 0) {
  //     $('#'+det_id).find('td:eq(6)').children().prop('checked',false)

  //   }

  //   loader.show();

  //   $.ajax({
  //     type: 'POST',
  //     url: Routing.generate('app_facturable_dossier_imputation_detail_technique',{technique:id}),
  //     success: function (result) {

  //       $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) +' DH');
  //       $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) +' DH');
  //       $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) +' DH');

  //       var montantDi = window.formatNumberToCurrency(result.mtFacturable)

  //       console.log(result.di + " : " +montantDi)

  //       $('body .di'+result.di).empty().html(montantDi);

  //       loader.hide();
  //       return toastr.info(result.message);
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       loader.hide();
  //       return toastr.error(jqXHR.responseText);
  //     }
  //   });
  // })

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function getCurrentDate() {
    const now = new Date();
    return (
      now.getFullYear() + '-' +
      padTo2Digits(now.getMonth() + 1) + '-' +
      padTo2Digits(now.getDate())
    );
  }

  function getCurrentDatetimeLocal() {
    const now = new Date();
    return (
      now.getFullYear() + '-' +
      padTo2Digits(now.getMonth() + 1) + '-' +
      padTo2Digits(now.getDate()) + 'T' +
      padTo2Digits(now.getHours()) + ':' +
      padTo2Digits(now.getMinutes())
    );
  }
  function updateInputValues() {
    $('.current-date').val(getCurrentDate());

    $('.current-datetime').val(getCurrentDatetimeLocal());
  }

  updateInputValues();
  setInterval(updateInputValues, 60000);


  $("body").on("click", "#check-all-actes", function (e) {
    var isChecked = $(this).prop("checked");

    $("body .checkActe").prop("checked", isChecked);
    $("body .checkAllByRassembleur").prop("checked", isChecked);
    $("body .checkSubcategory").prop("checked", isChecked);
  })


//   var patientsTable = $('#tablePatient').DataTable({
//     language: {
//       url: window.frenchJsonUrl
//     },
//     processing: true,
//     serverSide: true,
//     ajax: {
//       url: Routing.generate('gestion_patient_fetch_search_patient'),
//       data: function (d) {
//         d.draw = d.draw || 0;
//         d.start = d.start || 0;
//         d.length = d.length || 15;
//         d.nomPatient = $('#nomPatient').val();;
//         d.prenomPatient = $('#prenomPatient').val();
//         d.numdocPatient = $('#numdocPatient').val();
//         d.phonePatient = $('#phonePatient').val();
//         d.numAssurPatient = $('#numAssurPatient').val();
//         d.dateNaissancePatient = $('#dateNaissancePatient').val();
//         d.genrePatient = $('#genrePatient').val();
//       }
//     },
//     order: [[0, 'asc']],
//     columns: [
//       { name: 'p.id', data: 'id', orderable: true, searchable: true },
//       { name: 'p.ipp', data: 'ipp', orderable: true, searchable: true },
//       { name: 'P.nom', data: 'nom', orderable: true, searchable: true },
//       { name: 'p.prenom', data: 'prenom', orderable: true, searchable: true },
//       { name: 'p.dateNaissance', data: 'dateNaissance', orderable: true, searchable: true },
//       { name: 'p.numDocument', data: 'numDocument', orderable: true, searchable: true },
//       { name: 'p.numAssurance', data: 'numAssurance', orderable: true, searchable: true },
//       { name: 'p.numTelephone', data: 'numTelephone', orderable: true, searchable: true },
//       { name: 'p.numTelephone2', data: 'numTelephone2', orderable: true, searchable: true },
//     ],
//     autoWidth: false,
//     searching: false,
//     createdRow: function (row, data, dataIndex) {
//       $(row).attr('data-ipp', data.ipp);
//       $(row).attr('data-id', data.id);
//       $(row).attr('data-nom', (data.nom + " " + data.prenom));
//     }

//   });

  $('#nomPatient').on('input', function (e) {
    patientsTable.ajax.reload()
  });
  $('#prenomPatient').on('input', function (e) {
    patientsTable.ajax.reload()
  });
  $('#numdocPatient').on('input', function (e) {
    patientsTable.ajax.reload()
  });
  $('#phonePatient').on('input', function (e) {
    patientsTable.ajax.reload()
  });
  $('#numAssurPatient').on('input', function (e) {
    patientsTable.ajax.reload()
  });
  $('#dateNaissancePatient').on('input', function (e) {
    patientsTable.ajax.reload()
  });
  $('#genrePatient').on('change', function (e) {
    patientsTable.ajax.reload()
  });


  $('body').on('click', '.typeActe', function (event) {
    if ($(event.target).is(':checkbox')) {
      return;
    }

    const typeActeId = $(this).attr('id').replace('typeActe', '');
    const collapseId = `#collapsetypeActe${typeActeId}`;
    const panierDetCollapseId = `#panierDetCollapsetypeActe${typeActeId}`;

    $(collapseId).slideToggle();
    $(panierDetCollapseId).slideToggle();
  });

  $('body').on('click', '.subcategory-item', function (event) {
    if ($(event.target).is(':checkbox')) {
      return;
    }
    event.stopPropagation();

    const subcategoryId = $(this).attr('id').replace('subcategory', '');
    const nestedCollapseId = `#collapsesubcategory${subcategoryId}`;
    const panierDetCollapseId = `#collapsePanierDet${subcategoryId}`;

    if ($(nestedCollapseId).length) {
      $(nestedCollapseId).slideToggle();
    } else if ($(panierDetCollapseId).length) {
      $(panierDetCollapseId).slideToggle();
    }
  });

  $('body').on('change', '.checkAllByRassembleur', function () {
    const typeActeId = $(this).val();

    $(`#listSubcategories${typeActeId} .form-check-input`).prop('checked', this.checked);
  });

  $('body').on('change', '.checkSubcategory', function () {
    const subcategoryId = $(this).val();

    $(`#listPanierDets${subcategoryId} .form-check-input`).prop('checked', this.checked);


    const typeActeCheckbox = $(this).closest('.listSubcategories').parent().prev('li.typeActe').find('.checkAllByRassembleur');

    $(`#subcategory${subcategoryId} .form-check-input`).prop('checked', this.checked);
    $(`#nestedSubcategories${subcategoryId} .form-check-input`).prop('checked', this.checked);


    typeActeCheckbox.prop('checked', this.checked);

  });

  $('body').on('change', '.checkActe', function () {

    const subcategoryCheckbox = $(this).closest('.listPanierDets').parent().prev('.subcategory-item').find('.form-check-input');

    subcategoryCheckbox.prop('checked', true);

  });


  $('body').on('click', '#selectAllDet', function () {
    var rows = $("#det_dossier_imputation").DataTable().rows({ 'search': 'applied' }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });

  $('body').on('click', '#selectAllDetTechnique', function () {
    var rows = $("#det_technique_dossier_imputation").DataTable().rows({ 'search': 'applied' }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });

  $('body').on('click', '#selectAllArticles', function () {
    var rows = $("#table_articles_pharmacie").DataTable().rows({ 'search': 'applied' }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });

  $('body #det_dossier_imputation tbody').on('change', 'input[type="checkbox"]', function () {
    if (!this.checked) {
      var el = $('#selectAllDet').get(0);
      if (el && el.checked && ('indeterminate' in el)) {
        el.indeterminate = true;
      }
    }
  });

  $('body #det_technique_dossier_imputation tbody').on('change', 'input[type="checkbox"]', function () {
    if (!this.checked) {
      var el = $('#selectAllDetTechnique').get(0);
      if (el && el.checked && ('indeterminate' in el)) {
        el.indeterminate = true;
      }
    }
  });

  $('body').on('click', '#btn_facturable , #btn_nonfacturable', function (e) {
    var table_det_di = $('body #det_dossier_imputation').DataTable();

    var selectedIds = [];
    table_det_di.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {

        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });

    if (selectedIds.length > 0) {

      loader.show();

      var url = $(this).attr('id') === 'btn_facturable'
        ? Routing.generate('app_facturable_dossier_imputation_detail')
        : Routing.generate('app_non_facturable_dossier_imputation_detail');

      $.ajax({
        type: 'POST',
        url: url,
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function (result) {

          $('body #selectAllDet').prop('checked', false);

          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');

          $("body #dossier_imputation_dets_technique").empty();

          var montantDi = window.formatNumberToCurrency(result.mtFacturable)

          console.log(result.di + " : " + montantDi)

          $('body .di' + result.di).empty().html(montantDi);

          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }

          $("body #det_dossier_imputation tbody").empty().append(result.html);

          $('body #det_dossier_imputation').DataTable({
            columnDefs: [
              {
                targets: 0,
                orderable: false,
                className: 'select-checkbox',
                render: function (data, type, full, meta) {
                  return '<input type="checkbox" class="select-checkbox">';
                }
              }
            ],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [
              [20, 50, 100, 200],
              [20, 50, 100, 200],
            ],
            createdRow: function (row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });

          loader.hide();

          return toastr.success(result.message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }

  })

  $('body').on('click', '#btn_facturable_technique , #btn_nonfacturable_technique', function (e) {
    var table_det_di_technique = $('body #det_technique_dossier_imputation').DataTable();

    var selectedIds = [];
    table_det_di_technique.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {

        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });

    if (selectedIds.length > 0) {

      loader.show();

      var url = $(this).attr('id') === 'btn_facturable_technique'
        ? Routing.generate('app_facturable_dossier_imputation_detail_technique')
        : Routing.generate('app_non_facturable_dossier_imputation_detail_technique');

      $.ajax({
        type: 'POST',
        url: url,
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function (result) {

          $('body #selectAllDetTechnique').prop('checked', false);

          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');

          var montantDi = window.formatNumberToCurrency(result.mtFacturable)

          console.log(result.di + " : " + montantDi)

          $('body .di' + result.di).empty().html(montantDi);

          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }

          if ($.fn.DataTable.isDataTable('body #det_technique_dossier_imputation')) {
            $('body #det_technique_dossier_imputation').DataTable().clear().destroy();
          }

          $("body #det_dossier_imputation tbody").empty().append(result.html);
          $("body #det_technique_dossier_imputation tbody").empty().append(result.technique);

          $('body #det_dossier_imputation').DataTable({
            columnDefs: [
              {
                targets: 0,
                orderable: false,
                className: 'select-checkbox',
                render: function (data, type, full, meta) {
                  return '<input type="checkbox" class="select-checkbox">';
                }
              }
            ],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [
              [20, 50, 100, 200],
              [20, 50, 100, 200],
            ],
            createdRow: function (row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });

          $('body #det_technique_dossier_imputation').DataTable({
            columnDefs: [
              {
                targets: 0,
                orderable: false,
                className: 'select-checkbox',
                render: function (data, type, full, meta) {
                  return '<input type="checkbox" class="select-checkbox">';
                }
              }
            ],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [
              [20, 50, 100, 200],
              [20, 50, 100, 200],
            ],
            createdRow: function (row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(3)').addClass('text-right');
            }
          });

          loader.hide();

          return toastr.success(result.message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }

  })

  $('body').on('click', '#btn_forfait , #btn_nonforfait', function (e) {
    var table_det_di = $('body #det_dossier_imputation').DataTable();

    var selectedIds = [];
    table_det_di.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {

        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });

    if (selectedIds.length > 0) {
      loader.show();

      var url = $(this).attr('id') === 'btn_forfait'
        ? Routing.generate('app_forfait_dossier_imputation_detail')
        : Routing.generate('app_non_forfait_dossier_imputation_detail');

      $.ajax({
        type: 'POST',
        url: url,
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function (result) {

          $('body #selectAllDet').prop('checked', false);

          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');

          var montantDi = window.formatNumberToCurrency(result.mtFacturable)

          console.log(result.di + " : " + montantDi)

          $('body .di' + result.di).empty().html(montantDi);

          $("body #dossier_imputation_dets_technique").empty();

          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }

          $("body #det_dossier_imputation tbody").empty().append(result.html);

          $('body #det_dossier_imputation').DataTable({
            columnDefs: [
              {
                targets: 0,
                orderable: false,
                className: 'select-checkbox',
                render: function (data, type, full, meta) {
                  return '<input type="checkbox" class="select-checkbox">';
                }
              }
            ],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [
              [20, 50, 100, 200],
              [20, 50, 100, 200],
            ],
            createdRow: function (row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });

          loader.hide();

          return toastr.success(result.message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }

  })

  $('body').on('click', '#closeModalAddDoctorPartition', function () {
    $('#modalAddDoctorPartition').modal('hide');
  })

  var mtTotalRest = null

  $('body').on('click', '#btn_delete_det', function (e) {
    var table_det_di = $('body #det_dossier_imputation').DataTable();

    var selectedIds = [];
    table_det_di.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {

        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });

    if (selectedIds.length > 0) {
      loader.show();

      $.ajax({
        type: 'POST',
        url: Routing.generate('app_remove_dossier_imputation_detail'),
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function (result) {

          $('body #selectAllDet').prop('checked', false);

          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');


          $.each(result.allDossiersImputations, function (key, value) {
            var montantDi = window.formatNumberToCurrency(value)

            $('body .di' + key).empty().html(montantDi);
          });



          $("body #dossier_imputation_dets_technique").empty();

          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }

          $("body #det_dossier_imputation tbody").empty().append(result.html);

          $('body .panierDets').empty().append(result.html2);

          $('body #det_dossier_imputation').DataTable({
            columnDefs: [
              {
                targets: 0,
                orderable: false,
                className: 'select-checkbox',
                render: function (data, type, full, meta) {
                  return '<input type="checkbox" class="select-checkbox">';
                }
              }
            ],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [
              [20, 50, 100, 200],
              [20, 50, 100, 200],
            ],
            createdRow: function (row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });

          // $('body #allDossiersImputation').empty().append(result.allDossierImputations);

          $("body .montant").map(function () {
            mtTotalRest += parseFloat($(this).attr('data-value'));
          })

          if (parseFloat(mtTotalRest) != 0) {
            $("body #validate_rendezvous_facturation").find('.generation_dossier_imputation').prop('disabled', true)
          }

          loader.hide();

          return toastr.success(result.message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }

  })

  $('body').on('click', '.tabs .tab-links a', function (e) {
    var currentAttrValue = $(this).attr('href');

    // Show/Hide Tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });

  $("body").on("click", ".facturer-di", function (e) {

    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment facturer le dossier d'imputation ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Annuler !",
      confirmButtonClass: 'btn btn-success',

    }).then((result) => {
      if (result.value) {
        var dossierImputation = $(this).attr('data-id');

        loader.show();
        $.ajax({
          type: 'POST',
          url: Routing.generate('app_facturation_facturer_dossier_imputation', { dossierImputation: dossierImputation }),
          success: function (result) {

            loader.hide();

            toastr.success(result)

            window.location.href = '/facturation/';

            loader.hide();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            loader.hide();
            return toastr.error(jqXHR.responseText);
          }
        });
      }
    });

  })


})
