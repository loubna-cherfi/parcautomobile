(self["webpackChunk"] = self["webpackChunk"] || []).push([["settings_demande"],{

/***/ "./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fos-router */ "./node_modules/fos-router/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_laragon_www_PARCAUTO_var_cache_fosRoutes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./var/cache/fosRoutes.json */ "./var/cache/fosRoutes.json");
fos_router__WEBPACK_IMPORTED_MODULE_0___default().setRoutingData(C_laragon_www_PARCAUTO_var_cache_fosRoutes_json__WEBPACK_IMPORTED_MODULE_1__);

/***/ }),

/***/ "./assets/js/settings/demande.js":
/*!***************************************!*\
  !*** ./assets/js/settings/demande.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
$(document).ready(function () {
  $('#demandeTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'ALL']],
    autoWidth: false,
    destroy: true
  });
  var isBootstrap5 = typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined';
  if (isBootstrap5) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
      return new bootstrap.Tooltip(el);
    });
  } else {
    $('[data-toggle="tooltip"]').tooltip();
  }
  var detailIndex = 0;

  // Réinitialiser champs formulaire après ajout un détail
  function resetDetailFields() {
    $('#zone-detail select, #zone-detail input').each(function () {
      var el = $(this);
      var tag = el.prop('tagName').toLowerCase();
      if (tag === 'select') {
        var id = el.attr('id');
        if (id === 'add-prestation-0') {
          el.html('<option value="">Prestation</option>');
        } else if (id && $('#templates #' + id + '-template').length) {
          el.html($('#templates #' + id + '-template').html());
        }
        el.val('');
      } else {
        el.val('');
      }
      el.removeAttr('name');
    });
  }
  $(document).ready(function () {
    // Initialisation DataTable
    $('#demandeTable').DataTable({
      lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'ALL']],
      autoWidth: false,
      destroy: true
    });

    //Tooltips pour Bootstrap 4 ou 5
    var isBootstrap5 = typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined';
    if (isBootstrap5) {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
        return new bootstrap.Tooltip(el);
      });
    } else {
      $('[data-toggle="tooltip"]').tooltip();
    }
    var detailIndex = 0;

    // Réinitialiser les champs du formulaire après ajout d'un détail
    function resetDetailFields() {
      $('#zone-detail select, #zone-detail input').each(function () {
        var el = $(this);
        var tag = el.prop('tagName').toLowerCase();
        if (tag === 'select') {
          var id = el.attr('id');
          if (id === 'add-prestation-0') {
            el.html('<option value="">Prestation</option>');
          } else if (id && $('#templates #' + id + '-template').length) {
            el.html($('#templates #' + id + '-template').html());
          }
          el.val('');
        } else {
          el.val('');
        }
        el.removeAttr('name');
      });
    }

    // Ajouter un nouveau détail
    $('#add-detail').on('click', function () {
      var getValue = function getValue(name) {
        return $("select[name=\"details[0][".concat(name, "]\"] option:selected"));
      };
      var vehicule = getValue('vehicule');
      var conducteur = getValue('conducteur');
      var typePrestation = getValue('type_prestation');
      var zone = getValue('zone');
      var prestation = getValue('prestation');
      var quantiteInput = $('input[name="details[0][quantite]"]');
      var nbJoursInput = $('input[name="details[0][nb_jours]"]');
      var quantite = parseInt(quantiteInput.val()) || 0;
      var nbJours = parseInt(nbJoursInput.val()) || 0;
      var dateDemande = $('input[name="dateDemande"]').val();
      var nbPersonnes = parseInt($('#nbPersonnesInput').val()) || 1;
      if (!vehicule.val() || !conducteur.val() || !typePrestation.val() || !zone.val() || !prestation.val() || quantite <= 0 || nbJours <= 0) {
        toastr.error('Veuillez remplir tous les champs du détail avec des valeurs valides.');
        return;
      }
      $.ajax({
        url: '/demande/ajax/tarif',
        method: 'GET',
        data: {
          prestationId: prestation.val(),
          date: dateDemande,
          quantite: quantite,
          nbJours: nbJours,
          nbPersonnes: nbPersonnes
        },
        success: function success(tarif) {
          $('#table-details-container').show();
          $('#table-details tbody').append("\n  <tr data-index=\"".concat(detailIndex, "\">\n    <td>").concat(detailIndex + 1, "</td>\n    <td>").concat(vehicule.text(), "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][vehicule]\" value=\"").concat(vehicule.val(), "\"></td>\n    <td>").concat(conducteur.text(), "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][conducteur]\" value=\"").concat(conducteur.val(), "\"></td>\n    <td>").concat(typePrestation.text(), "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][type_prestation]\" value=\"").concat(typePrestation.val(), "\"></td>\n    <td>").concat(zone.text(), "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][zone]\" value=\"").concat(zone.val(), "\"></td>\n    <td>").concat(prestation.text(), "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][prestation]\" value=\"").concat(prestation.val(), "\"></td>\n    <td>").concat(quantite, "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][quantite]\" value=\"").concat(quantite, "\"></td>\n    <td>").concat(nbJours, "<input type=\"hidden\" name=\"details[").concat(detailIndex, "][nb_jours]\" value=\"").concat(nbJours, "\"></td>\n    <td><button class=\"btn btn-sm btnRemoveDetail\" type=\"button\"><i class=\"fa fa-trash\"></i></button></td>\n  </tr>\n"));
          ;
          detailIndex++;
          resetDetailFields();
        },
        error: function error() {
          toastr.error('Erreur lors du calcul du tarif.');
        }
      });
    });

    // Supprimer un détail
    $(document).on('click', '.btnRemoveDetail', function () {
      $(this).closest('tr').remove();
      if ($('#table-details tbody tr').length === 0) {
        $('#table-details-container').hide();
        detailIndex = 0;
      }
    });

    // Charger les prestations dynamiquement
    function filterPrestationsAjax(typeSelector, zoneSelector, prestationSelector) {
      var selectedType = $(typeSelector).val();
      var selectedZone = $(zoneSelector).val();
      if (!selectedType || !selectedZone) {
        $(prestationSelector).html('<option value="">Sélectionner une prestation</option>');
        return;
      }
      $.ajax({
        url: '/demande/ajax/prestations',
        method: 'GET',
        data: {
          type: selectedType,
          zone: selectedZone
        },
        success: function success(data) {
          var options = '<option value="">Sélectionner une prestation</option>';
          data.forEach(function (p) {
            options += "<option value=\"".concat(p.id, "\">").concat(p.nom, "</option>");
          });
          $(prestationSelector).html(options);
        },
        error: function error() {
          $(prestationSelector).html('<option value="">Erreur de chargement</option>');
        }
      });
    }
    $('#add-type-prestation, #add-zone').on('change', function () {
      filterPrestationsAjax('#add-type-prestation', '#add-zone', '#add-prestation-0');
    });

    // Remplir la date actuelle automatiquement à l'ouverture du modal
    $('#addDemande').on('shown.bs.modal', function () {
      var now = new Date();
      var formatted = now.toISOString().slice(0, 16);
      $('input[name="dateDemande"]').val(formatted);
    });

    // Empêcher la soumission sans détails
    $('#formAddDemande').on('submit', function (e) {
      if ($('#table-details tbody tr').length === 0) {
        e.preventDefault();
        toastr.error('Veuillez ajouter au moins un détail avant de soumettre.');
      }
    });
    $(document).on('click', '.btnTraiterDemande', function () {
      var demandeId = $(this).data('id');
      $.ajax({
        url: '/demande/ajax/get/' + demandeId,
        method: 'GET',
        success: function success(data) {
          // console.log('Réponse AJAX /demande/ajax/get/:', data);
          // Remplir infos générales
          $('#traiter-id').val(data.id);
          $('#traiter-nom').val(data.nomBenificiaire);
          $('#traiter-cin').val(data.cin);
          $('#traiter-observation').val(data.observation);
          $('#traiter-description').val(data.description);
          $('#traiter-contact').val(data.contact);
          $('#traiter-nbPersonnes').val(data.nbPersonnes);
          $('#traiter-date').val(data.dateDemande);
          $('#traiter-adresse').val(data.adressDepart);

          // Remplir le tableau des détails
          var tbody = $('#traiter-details-table tbody');
          tbody.empty();
          data.details.forEach(function (d, i) {
            tbody.append("\n          <tr>\n                  <td>".concat(d.id, "</td>\n                    <td class=\"vehicule\" data-vehicule-id=\"").concat(d.vehiculeId, "\">").concat(d.vehicule, "</td>\n                    <td class=\"conducteur\" data-conducteur-id=\"").concat(d.conducteurId, "\">").concat(d.conducteur, "</td>\n                    <td class=\"type_prestation\" data-type-id=\"").concat(d.typePrestationId, "\">").concat(d.type_prestation, "</td>\n                    <td class=\"zone\" data-zone-id=\"").concat(d.zoneId, "\">").concat(d.zone, "</td>\n                    <td class=\"prestation\" data-prestation-id=\"").concat(d.prestationId, "\">").concat(d.prestation, "</td>\n                    <td class=\"quantite\">").concat(d.quantite, "</td>\n                    <td class=\"nb_jours\">").concat(d.nb_jours, "</td>\n                    <td class=\"tarif\">").concat(d.tarif, "</td>\n                    <td class=\"kilometrage\">").concat(d.kilometrage || 0, "</td>\n                      <td>\n                      <div class=\"dropdown\">\n                        <button class=\"btn btn-sm\" type=\"button\" id=\"dropdownMenuButton").concat(d.id, "\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 30px; height: 30px; padding: 0;\">\n                          <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton").concat(d.id, "\">\n                         <button type=\"button\" class=\"dropdown-item btnModifierDetail\" data-id=\"").concat(d.id, "\" data-iskilometrage=\"").concat(d.isKilometrage || 0, "\">\n                          <i class=\"fa-solid fa-pen-to-square\"></i> Modifier\n                        </button>\n\n                        </div>\n                      </div>\n                    </td>\n          </tr>\n        "));
          });
          $('#traiterDemande').modal('show');
        },
        error: function error() {
          toastr.error('Erreur lors du chargement de la demande.');
        }
      });
    });
  });
  // prestations dynamiquement
  function filterPrestationsAjax(typeSelector, zoneSelector, prestationSelector) {
    var selectedType = $(typeSelector).val();
    var selectedZone = $(zoneSelector).val();
    if (!selectedType || !selectedZone) {
      $(prestationSelector).html('<option value="">Sélectionner une prestation</option>');
      return;
    }
    $.ajax({
      url: '/demande/ajax/prestations',
      method: 'GET',
      data: {
        type: selectedType,
        zone: selectedZone
      },
      success: function success(data) {
        var options = '<option value="">Sélectionner une prestation</option>';
        data.forEach(function (p) {
          options += "<option value=\"".concat(p.id, "\">").concat(p.nom, "</option>");
        });
        $(prestationSelector).html(options);
      },
      error: function error() {
        $(prestationSelector).html('<option value="">Erreur de chargement</option>');
      }
    });
  }
  $('#add-type-prestation, #add-zone').on('change', function () {
    filterPrestationsAjax('#add-type-prestation', '#add-zone', '#add-prestation-0');
  });

  // date actuelle automatiquement
  $('#addDemande').on('shown.bs.modal', function () {
    var now = new Date();
    var formatted = now.toISOString().slice(0, 16);
    $('input[name="dateDemande"]').val(formatted);
  });

  // soumission sans détails
  $('#formAddDemande').on('submit', function (e) {
    if ($('#table-details tbody tr').length === 0) {
      toastr.error('Veuillez ajouter au moins un détail avant de soumettre.');
      e.preventDefault();
    }
  });
  function toggleKilometrageField() {
    var isKilometrage = $('#edit-iskilometrage').val();
    if (isKilometrage == 1 || isKilometrage === '1') {
      $('#edit-kilometrage').closest('.form-group').show();
    } else {
      $('#edit-kilometrage').closest('.form-group').hide();
      $('#edit-kilometrage').val('');
    }
  }

  // Quand on clique sur Modifier dans la liste des détails
  $(document).on('click', '.btnModifierDetail', function () {
    var $row = $(this).closest('tr'); // La ligne du tableau

    // Récupérer les données depuis les cellules et attributs data-*
    var detailId = $(this).data('id');
    var isKilometrage = $(this).data('iskilometrage') || 0;
    var vehiculeId = $row.find('td.vehicule').data('vehicule-id');
    var conducteurId = $row.find('td.conducteur').data('conducteur-id');
    var typePrestation = $row.find('td.type_prestation').text().trim();
    var zone = $row.find('td.zone').text().trim();
    var prestation = $row.find('td.prestation').text().trim();
    var prestationId = $row.find('td.prestation').data('prestation-id');
    var quantite = $row.find('td.quantite').text().trim();
    var nbJours = $row.find('td.nb_jours').text().trim();
    console.log('vehiculeId:', vehiculeId);
    console.log('conducteurId:', conducteurId);
    // Remplir les champs du modal
    $('#detail-id').val(detailId);

    //  $('#edit-vehicule').val(vehiculeId);
    //   $('#edit-conducteur').val(conducteurId);

    // console.log('Vehicule ID:', vehiculeId, typeof vehiculeId);
    // $('#edit-vehicule option').each(function () {
    //   console.log('Option value:', $(this).val(), typeof $(this).val());
    // });

    $('#edit-vehicule').val(vehiculeId).trigger('change');
    $('#edit-conducteur').val(conducteurId).trigger('change');
    $('#edit-type').val(typePrestation);
    $('#edit-zone').val(zone);
    $('#edit-prestation').val(prestation);
    $('#edit-prestation-id').val(prestationId);
    $('#edit-quantite').val(quantite);
    $('#edit-jours').val(nbJours);
    $('#edit-iskilometrage').val(isKilometrage);
    toggleKilometrageField();
    // Afficher la modal
    $('#kilometrageGroup').hide();
    $('#modifierDetailModal').modal('show');
    // On vérifie que l'ID prestation existe
    if (prestationId) {
      $.ajax({
        url: "prestation/".concat(prestationId, "/kilometrage"),
        type: 'GET',
        dataType: 'json',
        success: function success(response) {
          if (response.isKilometrage == 1 || response.isKilometrage === '1') {
            $('#edit-iskilometrage').val(1);
            $('#kilometrageGroup').show(); // ✅ Afficher
          } else {
            $('#edit-iskilometrage').val(0);
            $('#kilometrageGroup').hide(); // ✅ Masquer
          }
        },

        error: function error(xhr, status, _error) {
          console.error('Erreur AJAX:', status, _error);
        }
      });
    } else {
      console.warn("ID de prestation introuvable dans l'attribut data.");
      $('#kilometrageGroup').hide(); // Par défaut on cache
    }
  });

  $('#btn-enregistrer-detail').on('click', function (e) {
    e.preventDefault();
    var $modal = $('#modifierDetailModal');
    var prestationId = $('#edit-prestation-id').val(); // ID et non nom
    var quantite = $('#edit-quantite').val();
    var nbJours = $('#edit-jours').val();
    var date = $('#traiter-date').val();
    var vehiculeId = $('#edit-vehicule').val();
    var vehiculeText = $('#edit-vehicule option:selected').text();
    var conducteurId = $('#edit-conducteur').val();
    var conducteurText = $('#edit-conducteur option:selected').text();
    var kilometrage = parseInt($('#edit-kilometrage').val()) || 0;
    var nbPersonnes = parseInt($('#traiter-nbPersonnes').val()) || 1;
    // Optionnel : vérifie que prestationId est bien défini
    if (!prestationId) {
      toastr.error('Prestation non sélectionnée correctement.');
      return;
    }
    // Préparation des données à envoyer

    var dataToSend = {
      prestationId: prestationId,
      quantite: quantite,
      nbJours: nbJours,
      date: date,
      kilometrage: kilometrage,
      nbPersonnes: nbPersonnes
    };
    $.ajax({
      url: '/demande/ajax/tarif',
      method: 'GET',
      data: dataToSend,
      success: function success(tarif) {
        // Trouver la ligne correspondant à ce détail dans la table
        // On peut chercher via detail-id ou d.id, ici on utilise data-id ou autre approche selon ton code
        var detailId = $('#detail-id').val();
        var $row = $("#traiter-details-table tbody tr button.btnModifierDetail[data-id=\"".concat(detailId, "\"]")).closest('tr');
        $row.find('.vehicule').text(vehiculeText).data('vehicule-id', vehiculeId);
        $row.find('.conducteur').text(conducteurText).data('conducteur-id', conducteurId);
        $row.find('.quantite').text(quantite);
        $row.find('.nb_jours').text(nbJours);
        $row.find('.tarif').text(parseFloat(tarif).toFixed(2));
        $row.find('.kilometrage').text(kilometrage);
        $modal.modal('hide');
      },
      error: function error() {
        toastr.error('Erreur lors du recalcul du tarif.');
      }
    });
  });
  $('#btn-traiter-enregistrer').on('click', function () {
    var id = $('#traiter-id').val();
    var details = [];
    $('#traiter-details-table tbody tr').each(function () {
      var row = $(this);
      var detailId = row.find('.btnModifierDetail').data('id'); // ou row.find('td:first').text().trim()

      details.push({
        id: detailId,
        vehicule: row.find('td.vehicule').text().trim(),
        conducteur: row.find('td.conducteur').text().trim(),
        type_prestation: row.find('td.type_prestation').text().trim(),
        zone: row.find('td.zone').text().trim(),
        prestation: row.find('td.prestation').text().trim(),
        quantite: row.find('td.quantite').text().trim(),
        nb_jours: row.find('td.nb_jours').text().trim(),
        tarif: row.find('td.tarif').text().trim(),
        kilometrage: row.find('td.kilometrage').text().trim()
      });
    });
    $.ajax({
      url: '/demande/traiter/enregistrer',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        id: id,
        details: details
      }),
      success: function success(res) {
        toastr.success(res.message);
        location.reload();
      },
      error: function error() {
        toastr.error("Erreur lors de l'enregistrement du traitement.");
      }
    });
  });
  $('.btnValiderDemande').on('click', function () {
    var demandeId = this.dataset.id;
    fetch('/demande/changer-statutValider/' + demandeId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.success) {
        toastr.success('La demande validée avec succès !');
        setTimeout(function () {
          return location.reload();
        }, 1000);
      } else {
        toastr.error('Erreur : ' + data.error);
      }
    })["catch"](function (error) {
      toastr.error('La demande n\'a pas été validée');
    });
  });
  $('.btnAnnulerDemande').on('click', function () {
    var demandeId = this.dataset.id;
    fetch('/demande/changer-statutAnnuler/' + demandeId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        statut: 6
      }) // Statut 6 pour annuler
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.success) {
        toastr.success('La demande annulée avec succès !');
        setTimeout(function () {
          return location.reload();
        }, 1000);
      } else {
        toastr.error('Erreur : ' + data.error);
      }
    })["catch"](function (error) {
      toastr.error('La demande n\'a pas été annulée');
    });
  });
  $(document).on('click', '.btnExcuterDemande', function (e) {
    e.preventDefault();
    var demandeId = $(this).data('id');
    Swal.fire({
      title: 'Exécuter la demande ?',
      text: "Cette action exécutera définitivement la demande.",
      showCancelButton: true,
      confirmButtonColor: '#7593ae',
      cancelButtonColor: '#b6cb9e',
      confirmButtonText: 'Oui, exécuter',
      cancelButtonText: 'Annuler'
    }).then(function (result) {
      if (result.isConfirmed) {
        $.ajax({
          url: '/demande/executerDemande/' + demandeId,
          method: 'POST',
          success: function success(response) {
            toastr.success('La demande a été exécutée avec succès. Voir la mission.', 'Succès');
          },
          error: function error() {
            toastr.error('Une erreur est survenue lors de l\'exécution de la demande.', 'Erreur');
          }
        });
      }
    });
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/date-to-iso-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-iso-string.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var padStart = (__webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").start);

var $RangeError = RangeError;
var $isFinite = isFinite;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var nativeDateToISOString = DatePrototype.toISOString;
var thisTimeValue = uncurryThis(DatePrototype.getTime);
var getUTCDate = uncurryThis(DatePrototype.getUTCDate);
var getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);
var getUTCHours = uncurryThis(DatePrototype.getUTCHours);
var getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);
var getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);
var getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);
var getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);

// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!$isFinite(thisTimeValue(this))) throw $RangeError('Invalid time value');
  var date = this;
  var year = getUTCFullYear(date);
  var milliseconds = getUTCMilliseconds(date);
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
    '-' + padStart(getUTCDate(date), 2, 0) +
    'T' + padStart(getUTCHours(date), 2, 0) +
    ':' + padStart(getUTCMinutes(date), 2, 0) +
    ':' + padStart(getUTCSeconds(date), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-iso-string.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-iso-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toISOString = __webpack_require__(/*! ../internals/date-to-iso-string */ "./node_modules/core-js/internals/date-to-iso-string.js");

// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./var/cache/fosRoutes.json":
/*!**********************************!*\
  !*** ./var/cache/fosRoutes.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"app_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_list":{"tokens":[["text","/setting/module/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_add":{"tokens":[["text","/setting/module/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_toggle_active":{"tokens":[["variable","/","[^/]++","module",true],["text","/setting/module/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_list":{"tokens":[["text","/setting/sousmodule/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_add":{"tokens":[["text","/setting/sousmodule/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_toggle_active":{"tokens":[["variable","/","[^/]++","sousmodule",true],["text","/setting/sousmodule/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_assign_convention":{"tokens":[["text","/user/assign-convention"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_assign_caisse":{"tokens":[["text","/user/assign-caisse"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_duplicate_user":{"tokens":[["text","/user/duplicate-user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-80eafe","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-685c5c","vendors-node_modules_core-js_internals_string-pad_js-node_modules_core-js_modules_es_array_fi-9d7206"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/demande.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NfZGVtYW5kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZHLGdFQUFzQixDQUFDLDRFQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTFJQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUU1QkYsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDRyxTQUFTLENBQUM7SUFDM0JDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25EQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0VBR0YsSUFBTUMsWUFBWSxHQUFHLE9BQU9DLFNBQVMsS0FBSyxXQUFXLElBQUksT0FBT0EsU0FBUyxDQUFDQyxPQUFPLEtBQUssV0FBVztFQUNqRyxJQUFJRixZQUFZLEVBQUU7SUFDaEJOLFFBQVEsQ0FBQ1MsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEVBQUU7TUFBQSxPQUFJLElBQUlKLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDRyxFQUFFLENBQUM7SUFBQSxFQUFDO0VBQ2xHLENBQUMsTUFBTTtJQUNMWixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2EsT0FBTyxDQUFDLENBQUM7RUFDeEM7RUFFQSxJQUFJQyxXQUFXLEdBQUcsQ0FBQzs7RUFFbkI7RUFDQSxTQUFTQyxpQkFBaUJBLENBQUEsRUFBRztJQUMzQmYsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUNnQixJQUFJLENBQUMsWUFBWTtNQUM1RCxJQUFNSixFQUFFLEdBQUdaLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDbEIsSUFBTWlCLEdBQUcsR0FBR0wsRUFBRSxDQUFDTSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQzVDLElBQUlGLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDcEIsSUFBTUcsRUFBRSxHQUFHUixFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSUQsRUFBRSxLQUFLLGtCQUFrQixFQUFFO1VBQzdCUixFQUFFLENBQUNVLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztRQUNqRCxDQUFDLE1BQU0sSUFBSUYsRUFBRSxJQUFJcEIsQ0FBQyxDQUFDLGNBQWMsR0FBR29CLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQ0csTUFBTSxFQUFFO1VBQzVEWCxFQUFFLENBQUNVLElBQUksQ0FBQ3RCLENBQUMsQ0FBQyxjQUFjLEdBQUdvQixFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQ7UUFDQVYsRUFBRSxDQUFDWSxHQUFHLENBQUMsRUFBRSxDQUFDO01BQ1osQ0FBQyxNQUFNO1FBQ0xaLEVBQUUsQ0FBQ1ksR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUNaO01BQ0FaLEVBQUUsQ0FBQ2EsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDLENBQUM7RUFDSjtFQUVBekIsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7SUFDOUI7SUFDQUYsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDRyxTQUFTLENBQUM7TUFDM0JDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ25EQyxTQUFTLEVBQUUsS0FBSztNQUNoQkMsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBTUMsWUFBWSxHQUFHLE9BQU9DLFNBQVMsS0FBSyxXQUFXLElBQUksT0FBT0EsU0FBUyxDQUFDQyxPQUFPLEtBQUssV0FBVztJQUNqRyxJQUFJRixZQUFZLEVBQUU7TUFDaEJOLFFBQVEsQ0FBQ1MsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEVBQUU7UUFBQSxPQUFJLElBQUlKLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDRyxFQUFFLENBQUM7TUFBQSxFQUFDO0lBQ2xHLENBQUMsTUFBTTtNQUNMWixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2EsT0FBTyxDQUFDLENBQUM7SUFDeEM7SUFFQSxJQUFJQyxXQUFXLEdBQUcsQ0FBQzs7SUFFbkI7SUFDQSxTQUFTQyxpQkFBaUJBLENBQUEsRUFBRztNQUMzQmYsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUNnQixJQUFJLENBQUMsWUFBWTtRQUM1RCxJQUFNSixFQUFFLEdBQUdaLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBTWlCLEdBQUcsR0FBR0wsRUFBRSxDQUFDTSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLElBQUlGLEdBQUcsS0FBSyxRQUFRLEVBQUU7VUFDcEIsSUFBTUcsRUFBRSxHQUFHUixFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUM7VUFDeEIsSUFBSUQsRUFBRSxLQUFLLGtCQUFrQixFQUFFO1lBQzdCUixFQUFFLENBQUNVLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztVQUNqRCxDQUFDLE1BQU0sSUFBSUYsRUFBRSxJQUFJcEIsQ0FBQyxDQUFDLGNBQWMsR0FBR29CLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQ0csTUFBTSxFQUFFO1lBQzVEWCxFQUFFLENBQUNVLElBQUksQ0FBQ3RCLENBQUMsQ0FBQyxjQUFjLEdBQUdvQixFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDdEQ7VUFDQVYsRUFBRSxDQUFDWSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQyxNQUFNO1VBQ0xaLEVBQUUsQ0FBQ1ksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNaO1FBQ0FaLEVBQUUsQ0FBQ2EsVUFBVSxDQUFDLE1BQU0sQ0FBQztNQUN2QixDQUFDLENBQUM7SUFDSjs7SUFFQTtJQUNBekIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3ZDLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFHQyxJQUFJO1FBQUEsT0FBSTVCLENBQUMsNkJBQUE2QixNQUFBLENBQTRCRCxJQUFJLHlCQUFxQixDQUFDO01BQUE7TUFDaEYsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUMsVUFBVSxDQUFDO01BQ3JDLElBQU1JLFVBQVUsR0FBR0osUUFBUSxDQUFDLFlBQVksQ0FBQztNQUN6QyxJQUFNSyxjQUFjLEdBQUdMLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztNQUNsRCxJQUFNTSxJQUFJLEdBQUdOLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFDN0IsSUFBTU8sVUFBVSxHQUFHUCxRQUFRLENBQUMsWUFBWSxDQUFDO01BQ3pDLElBQU1RLGFBQWEsR0FBR25DLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQztNQUM3RCxJQUFNb0MsWUFBWSxHQUFHcEMsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDO01BRTVELElBQU1xQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNuRCxJQUFNZSxPQUFPLEdBQUdELFFBQVEsQ0FBQ0YsWUFBWSxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNqRCxJQUFNZ0IsV0FBVyxHQUFHeEMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQztNQUN4RCxJQUFNaUIsV0FBVyxHQUFHSCxRQUFRLENBQUN0QyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO01BRS9ELElBQUksQ0FBQ00sUUFBUSxDQUFDTixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNPLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDUSxjQUFjLENBQUNSLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ1MsSUFBSSxDQUFDVCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNVLFVBQVUsQ0FBQ1YsR0FBRyxDQUFDLENBQUMsSUFBSWEsUUFBUSxJQUFJLENBQUMsSUFBSUUsT0FBTyxJQUFJLENBQUMsRUFBRTtRQUNySUcsTUFBTSxDQUFDQyxLQUFLLENBQUMsc0VBQXNFLENBQUM7UUFDckY7TUFDRjtNQUVBM0MsQ0FBQyxDQUFDNEMsSUFBSSxDQUFDO1FBQ0xDLEdBQUcsRUFBRSxxQkFBcUI7UUFDMUJDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLElBQUksRUFBRTtVQUNKQyxZQUFZLEVBQUVkLFVBQVUsQ0FBQ1YsR0FBRyxDQUFDLENBQUM7VUFDOUJ5QixJQUFJLEVBQUVULFdBQVc7VUFDakJILFFBQVEsRUFBRUEsUUFBUTtVQUNsQkUsT0FBTyxFQUFFQSxPQUFPO1VBQ2ZFLFdBQVcsRUFBRUE7UUFDaEIsQ0FBQztRQUNEUyxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsS0FBSyxFQUFFO1VBQ3hCbkQsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNvRCxJQUFJLENBQUMsQ0FBQztVQUUxQ3BELENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDcUQsTUFBTSx5QkFBQXhCLE1BQUEsQ0FDZGYsV0FBVyxtQkFBQWUsTUFBQSxDQUNyQmYsV0FBVyxHQUFHLENBQUMscUJBQUFlLE1BQUEsQ0FDZkMsUUFBUSxDQUFDd0IsSUFBSSxDQUFDLENBQUMsNENBQUF6QixNQUFBLENBQXNDZixXQUFXLDRCQUFBZSxNQUFBLENBQXVCQyxRQUFRLENBQUNOLEdBQUcsQ0FBQyxDQUFDLHdCQUFBSyxNQUFBLENBQ3JHRSxVQUFVLENBQUN1QixJQUFJLENBQUMsQ0FBQyw0Q0FBQXpCLE1BQUEsQ0FBc0NmLFdBQVcsOEJBQUFlLE1BQUEsQ0FBeUJFLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDLENBQUMsd0JBQUFLLE1BQUEsQ0FDM0dHLGNBQWMsQ0FBQ3NCLElBQUksQ0FBQyxDQUFDLDRDQUFBekIsTUFBQSxDQUFzQ2YsV0FBVyxtQ0FBQWUsTUFBQSxDQUE4QkcsY0FBYyxDQUFDUixHQUFHLENBQUMsQ0FBQyx3QkFBQUssTUFBQSxDQUN4SEksSUFBSSxDQUFDcUIsSUFBSSxDQUFDLENBQUMsNENBQUF6QixNQUFBLENBQXNDZixXQUFXLHdCQUFBZSxNQUFBLENBQW1CSSxJQUFJLENBQUNULEdBQUcsQ0FBQyxDQUFDLHdCQUFBSyxNQUFBLENBQ3pGSyxVQUFVLENBQUNvQixJQUFJLENBQUMsQ0FBQyw0Q0FBQXpCLE1BQUEsQ0FBc0NmLFdBQVcsOEJBQUFlLE1BQUEsQ0FBeUJLLFVBQVUsQ0FBQ1YsR0FBRyxDQUFDLENBQUMsd0JBQUFLLE1BQUEsQ0FDM0dRLFFBQVEsNENBQUFSLE1BQUEsQ0FBc0NmLFdBQVcsNEJBQUFlLE1BQUEsQ0FBdUJRLFFBQVEsd0JBQUFSLE1BQUEsQ0FDeEZVLE9BQU8sNENBQUFWLE1BQUEsQ0FBc0NmLFdBQVcsNEJBQUFlLE1BQUEsQ0FBdUJVLE9BQU8sMElBRy9GLENBQUM7VUFDRjtVQUVRekIsV0FBVyxFQUFFO1VBQ2JDLGlCQUFpQixDQUFDLENBQUM7UUFDckIsQ0FBQztRQUNENEIsS0FBSyxFQUFFLFNBQUFBLE1BQUEsRUFBWTtVQUNqQkQsTUFBTSxDQUFDQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7UUFFakQ7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQTNDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUN5QixFQUFFLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVk7TUFDdEQxQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BRTlCLElBQUl4RCxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ3VCLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDN0N2QixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3lELElBQUksQ0FBQyxDQUFDO1FBQ3BDM0MsV0FBVyxHQUFHLENBQUM7TUFDakI7SUFDRixDQUFDLENBQUM7O0lBRUY7SUFDQSxTQUFTNEMscUJBQXFCQSxDQUFDQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsa0JBQWtCLEVBQUU7TUFDN0UsSUFBTUMsWUFBWSxHQUFHOUQsQ0FBQyxDQUFDMkQsWUFBWSxDQUFDLENBQUNuQyxHQUFHLENBQUMsQ0FBQztNQUMxQyxJQUFNdUMsWUFBWSxHQUFHL0QsQ0FBQyxDQUFDNEQsWUFBWSxDQUFDLENBQUNwQyxHQUFHLENBQUMsQ0FBQztNQUUxQyxJQUFJLENBQUNzQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1FBQ2xDL0QsQ0FBQyxDQUFDNkQsa0JBQWtCLENBQUMsQ0FBQ3ZDLElBQUksQ0FBQyx1REFBdUQsQ0FBQztRQUNuRjtNQUNGO01BRUF0QixDQUFDLENBQUM0QyxJQUFJLENBQUM7UUFDTEMsR0FBRyxFQUFFLDJCQUEyQjtRQUNoQ0MsTUFBTSxFQUFFLEtBQUs7UUFDYkMsSUFBSSxFQUFFO1VBQUVpQixJQUFJLEVBQUVGLFlBQVk7VUFBRTdCLElBQUksRUFBRThCO1FBQWEsQ0FBQztRQUNoRGIsT0FBTyxFQUFFLFNBQUFBLFFBQVVILElBQUksRUFBRTtVQUN2QixJQUFJa0IsT0FBTyxHQUFHLHVEQUF1RDtVQUNyRWxCLElBQUksQ0FBQ3BDLE9BQU8sQ0FBQyxVQUFBdUQsQ0FBQyxFQUFJO1lBQ2hCRCxPQUFPLHVCQUFBcEMsTUFBQSxDQUFzQnFDLENBQUMsQ0FBQzlDLEVBQUUsU0FBQVMsTUFBQSxDQUFLcUMsQ0FBQyxDQUFDQyxHQUFHLGNBQVc7VUFDeEQsQ0FBQyxDQUFDO1VBQ0ZuRSxDQUFDLENBQUM2RCxrQkFBa0IsQ0FBQyxDQUFDdkMsSUFBSSxDQUFDMkMsT0FBTyxDQUFDO1FBQ3JDLENBQUM7UUFDRHRCLEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQVk7VUFDakIzQyxDQUFDLENBQUM2RCxrQkFBa0IsQ0FBQyxDQUFDdkMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDO1FBQzlFO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7SUFFQXRCLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO01BQzVEZ0MscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO0lBQ2pGLENBQUMsQ0FBQzs7SUFFRjtJQUNBMUQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVk7TUFDaEQsSUFBTTBDLEdBQUcsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QixJQUFNQyxTQUFTLEdBQUdGLEdBQUcsQ0FBQ0csV0FBVyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDaER4RSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQzhDLFNBQVMsQ0FBQztJQUMvQyxDQUFDLENBQUM7O0lBRUY7SUFDQXRFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVK0MsQ0FBQyxFQUFFO01BQzdDLElBQUl6RSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ3VCLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFFN0NrRCxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCaEMsTUFBTSxDQUFDQyxLQUFLLENBQUMseURBQXlELENBQUM7TUFDekU7SUFDRixDQUFDLENBQUM7SUFHRjNDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUN5QixFQUFFLENBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVk7TUFDeEQsSUFBTWlELFNBQVMsR0FBRzNFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFFcEMvQyxDQUFDLENBQUM0QyxJQUFJLENBQUM7UUFDTEMsR0FBRyxFQUFFLG9CQUFvQixHQUFHOEIsU0FBUztRQUNyQzdCLE1BQU0sRUFBRSxLQUFLO1FBQ2JJLE9BQU8sRUFBRSxTQUFBQSxRQUFVSCxJQUFJLEVBQUU7VUFDdkI7VUFDQTtVQUNBL0MsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDdUIsSUFBSSxDQUFDM0IsRUFBRSxDQUFDO1VBQzdCcEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDdUIsSUFBSSxDQUFDNkIsZUFBZSxDQUFDO1VBQzNDNUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDdUIsSUFBSSxDQUFDOEIsR0FBRyxDQUFDO1VBQy9CN0UsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUN3QixHQUFHLENBQUN1QixJQUFJLENBQUMrQixXQUFXLENBQUM7VUFDL0M5RSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQ2dDLFdBQVcsQ0FBQztVQUMvQy9FLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDdUIsSUFBSSxDQUFDaUMsT0FBTyxDQUFDO1VBQ3ZDaEYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUN3QixHQUFHLENBQUN1QixJQUFJLENBQUNOLFdBQVcsQ0FBQztVQUMvQ3pDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQ1AsV0FBVyxDQUFDO1VBQ3hDeEMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUN3QixHQUFHLENBQUN1QixJQUFJLENBQUNrQyxZQUFZLENBQUM7O1VBRTVDO1VBQ0EsSUFBTUMsS0FBSyxHQUFHbEYsQ0FBQyxDQUFDLDhCQUE4QixDQUFDO1VBQy9Da0YsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBQztVQUVicEMsSUFBSSxDQUFDcUMsT0FBTyxDQUFDekUsT0FBTyxDQUFDLFVBQUMwRSxDQUFDLEVBQUVDLENBQUMsRUFBSztZQUMvQkosS0FBSyxDQUFDN0IsTUFBTSw0Q0FBQXhCLE1BQUEsQ0FFSXdELENBQUMsQ0FBQ2pFLEVBQUUsMkVBQUFTLE1BQUEsQ0FDaUN3RCxDQUFDLENBQUNFLFVBQVUsU0FBQTFELE1BQUEsQ0FBS3dELENBQUMsQ0FBQ3ZELFFBQVEsK0VBQUFELE1BQUEsQ0FDdkJ3RCxDQUFDLENBQUNHLFlBQVksU0FBQTNELE1BQUEsQ0FBS3dELENBQUMsQ0FBQ3RELFVBQVUsOEVBQUFGLE1BQUEsQ0FDaEN3RCxDQUFDLENBQUNJLGdCQUFnQixTQUFBNUQsTUFBQSxDQUFLd0QsQ0FBQyxDQUFDSyxlQUFlLG1FQUFBN0QsTUFBQSxDQUNuRHdELENBQUMsQ0FBQ00sTUFBTSxTQUFBOUQsTUFBQSxDQUFLd0QsQ0FBQyxDQUFDcEQsSUFBSSwrRUFBQUosTUFBQSxDQUNQd0QsQ0FBQyxDQUFDckMsWUFBWSxTQUFBbkIsTUFBQSxDQUFLd0QsQ0FBQyxDQUFDbkQsVUFBVSx3REFBQUwsTUFBQSxDQUNyRHdELENBQUMsQ0FBQ2hELFFBQVEsd0RBQUFSLE1BQUEsQ0FDVndELENBQUMsQ0FBQ08sUUFBUSxxREFBQS9ELE1BQUEsQ0FDYndELENBQUMsQ0FBQ2xDLEtBQUssMkRBQUF0QixNQUFBLENBQ0R3RCxDQUFDLENBQUNRLFdBQVcsSUFBSSxDQUFDLHFMQUFBaEUsTUFBQSxDQUd5QndELENBQUMsQ0FBQ2pFLEVBQUUsK1ZBQUFTLE1BQUEsQ0FHZXdELENBQUMsQ0FBQ2pFLEVBQUUsZ0hBQUFTLE1BQUEsQ0FDZHdELENBQUMsQ0FBQ2pFLEVBQUUsOEJBQUFTLE1BQUEsQ0FBeUJ3RCxDQUFDLENBQUNTLGFBQWEsSUFBSSxDQUFDLGlQQVExSSxDQUFDO1VBQ1IsQ0FBQyxDQUFDO1VBR0k5RixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQytGLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsQ0FBQztRQUNEcEQsS0FBSyxFQUFFLFNBQUFBLE1BQUEsRUFBWTtVQUNqQkQsTUFBTSxDQUFDQyxLQUFLLENBQUMsMENBQTBDLENBQUM7UUFDMUQ7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFDQTtFQUNBLFNBQVNlLHFCQUFxQkEsQ0FBQ0MsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGtCQUFrQixFQUFFO0lBQzdFLElBQU1DLFlBQVksR0FBRzlELENBQUMsQ0FBQzJELFlBQVksQ0FBQyxDQUFDbkMsR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBTXVDLFlBQVksR0FBRy9ELENBQUMsQ0FBQzRELFlBQVksQ0FBQyxDQUFDcEMsR0FBRyxDQUFDLENBQUM7SUFFMUMsSUFBSSxDQUFDc0MsWUFBWSxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUNsQy9ELENBQUMsQ0FBQzZELGtCQUFrQixDQUFDLENBQUN2QyxJQUFJLENBQUMsdURBQXVELENBQUM7TUFDbkY7SUFDRjtJQUVBdEIsQ0FBQyxDQUFDNEMsSUFBSSxDQUFDO01BQ0xDLEdBQUcsRUFBRSwyQkFBMkI7TUFDaENDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLElBQUksRUFBRTtRQUFFaUIsSUFBSSxFQUFFRixZQUFZO1FBQUU3QixJQUFJLEVBQUU4QjtNQUFhLENBQUM7TUFDaERiLE9BQU8sRUFBRSxTQUFBQSxRQUFVSCxJQUFJLEVBQUU7UUFDdkIsSUFBSWtCLE9BQU8sR0FBRyx1REFBdUQ7UUFDckVsQixJQUFJLENBQUNwQyxPQUFPLENBQUMsVUFBQXVELENBQUMsRUFBSTtVQUNoQkQsT0FBTyx1QkFBQXBDLE1BQUEsQ0FBc0JxQyxDQUFDLENBQUM5QyxFQUFFLFNBQUFTLE1BQUEsQ0FBS3FDLENBQUMsQ0FBQ0MsR0FBRyxjQUFXO1FBQ3hELENBQUMsQ0FBQztRQUNGbkUsQ0FBQyxDQUFDNkQsa0JBQWtCLENBQUMsQ0FBQ3ZDLElBQUksQ0FBQzJDLE9BQU8sQ0FBQztNQUNyQyxDQUFDO01BQ0R0QixLQUFLLEVBQUUsU0FBQUEsTUFBQSxFQUFZO1FBQ2pCM0MsQ0FBQyxDQUFDNkQsa0JBQWtCLENBQUMsQ0FBQ3ZDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQztNQUM5RTtJQUNGLENBQUMsQ0FBQztFQUNKO0VBRUF0QixDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWTtJQUM1RGdDLHFCQUFxQixDQUFDLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztFQUNqRixDQUFDLENBQUM7O0VBRUY7RUFDQTFELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZO0lBQ2hELElBQU0wQyxHQUFHLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBTUMsU0FBUyxHQUFHRixHQUFHLENBQUNHLFdBQVcsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2hEeEUsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN3QixHQUFHLENBQUM4QyxTQUFTLENBQUM7RUFDL0MsQ0FBQyxDQUFDOztFQUVGO0VBQ0F0RSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVStDLENBQUMsRUFBRTtJQUM3QyxJQUFJekUsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUN1QixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzVDbUIsTUFBTSxDQUFDQyxLQUFLLENBQUMseURBQXlELENBQUM7TUFDeEU4QixDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BCO0VBQ0YsQ0FBQyxDQUFDO0VBQ0osU0FBU3NCLHNCQUFzQkEsQ0FBQSxFQUFHO0lBQ2hDLElBQU1GLGFBQWEsR0FBRzlGLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLENBQUM7SUFFcEQsSUFBSXNFLGFBQWEsSUFBSSxDQUFDLElBQUlBLGFBQWEsS0FBSyxHQUFHLEVBQUU7TUFDL0M5RixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3VELE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxNQUFNO01BQ0xwRCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3VELE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFDcER6RCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDaEM7RUFDRjs7RUFHQTtFQUNBeEIsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ3lCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWTtJQUN4RCxJQUFNdUUsSUFBSSxHQUFHakcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDdUQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUU7O0lBRXJDO0lBQ0EsSUFBTTJDLFFBQVEsR0FBR2xHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsSUFBTStDLGFBQWEsR0FBRzlGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ3hELElBQU13QyxVQUFVLEdBQUdVLElBQUksQ0FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMvRCxJQUFNeUMsWUFBWSxHQUFHUyxJQUFJLENBQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUM7SUFDckUsSUFBTWYsY0FBYyxHQUFHaUUsSUFBSSxDQUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztJQUNwRSxJQUFNbkUsSUFBSSxHQUFHZ0UsSUFBSSxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDOEMsSUFBSSxDQUFDLENBQUM7SUFDL0MsSUFBTWxFLFVBQVUsR0FBRytELElBQUksQ0FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO0lBQzNELElBQU1wRCxZQUFZLEdBQUdpRCxJQUFJLENBQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUM7SUFDckUsSUFBTVYsUUFBUSxHQUFHNEQsSUFBSSxDQUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDOEMsSUFBSSxDQUFDLENBQUM7SUFDdkQsSUFBTTdELE9BQU8sR0FBRzBELElBQUksQ0FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO0lBR3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVmLFVBQVUsQ0FBQztJQUN0Q2MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFZCxZQUFZLENBQUM7SUFDMUM7SUFDQXhGLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQzBFLFFBQVEsQ0FBQzs7SUFFL0I7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFHRWxHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDK0QsVUFBVSxDQUFDLENBQUNnQixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JEdkcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUN3QixHQUFHLENBQUNnRSxZQUFZLENBQUMsQ0FBQ2UsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN6RHZHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQ1EsY0FBYyxDQUFDO0lBQ25DaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDd0IsR0FBRyxDQUFDUyxJQUFJLENBQUM7SUFDekJqQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQ1UsVUFBVSxDQUFDO0lBQ3JDbEMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUN3QixHQUFHLENBQUN3QixZQUFZLENBQUM7SUFDMUNoRCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDO0lBQ2pDckMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDZSxPQUFPLENBQUM7SUFDN0J2QyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQ3NFLGFBQWEsQ0FBQztJQUUzQ0Usc0JBQXNCLENBQUMsQ0FBQztJQUN4QjtJQUNBaEcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN5RCxJQUFJLENBQUMsQ0FBQztJQUM3QnpELENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDK0YsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN2QztJQUNFLElBQUkvQyxZQUFZLEVBQUU7TUFDZGhELENBQUMsQ0FBQzRDLElBQUksQ0FBQztRQUNIQyxHQUFHLGdCQUFBaEIsTUFBQSxDQUFnQm1CLFlBQVksaUJBQWM7UUFDN0NnQixJQUFJLEVBQUUsS0FBSztRQUNYd0MsUUFBUSxFQUFFLE1BQU07UUFDaEJ0RCxPQUFPLEVBQUUsU0FBQUEsUUFBVXVELFFBQVEsRUFBRTtVQUNuQixJQUFJQSxRQUFRLENBQUNYLGFBQWEsSUFBSSxDQUFDLElBQUlXLFFBQVEsQ0FBQ1gsYUFBYSxLQUFLLEdBQUcsRUFBRTtZQUN6RTlGLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQnhCLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDb0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2pDLENBQUMsTUFBTTtZQUNMcEQsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CeEIsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN5RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDakM7UUFDRixDQUFDOztRQUNEZCxLQUFLLEVBQUUsU0FBQUEsTUFBVStELEdBQUcsRUFBRUMsTUFBTSxFQUFFaEUsTUFBSyxFQUFFO1VBQ2pDMEQsT0FBTyxDQUFDMUQsS0FBSyxDQUFDLGNBQWMsRUFBRWdFLE1BQU0sRUFBRWhFLE1BQUssQ0FBQztRQUNoRDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNIMEQsT0FBTyxDQUFDTyxJQUFJLENBQUMsb0RBQW9ELENBQUM7TUFDbEU1RyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3lELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRTtJQUNwQztFQUNKLENBQUMsQ0FBQzs7RUFLRHpELENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVK0MsQ0FBQyxFQUFFO0lBQ3JEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1tQyxNQUFNLEdBQUc3RyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDeEMsSUFBTWdELFlBQVksR0FBR2hELENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELElBQU1hLFFBQVEsR0FBR3JDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBTWUsT0FBTyxHQUFHdkMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBTXlCLElBQUksR0FBR2pELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQU0rRCxVQUFVLEdBQUd2RixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLElBQU1zRixZQUFZLEdBQUc5RyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQ3NELElBQUksQ0FBQyxDQUFDO0lBQy9ELElBQU1rQyxZQUFZLEdBQUd4RixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELElBQU11RixjQUFjLEdBQUcvRyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQ3NELElBQUksQ0FBQyxDQUFDO0lBQ25FLElBQU11QyxXQUFXLEdBQUd2RCxRQUFRLENBQUN0QyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9ELElBQU1pQixXQUFXLEdBQUdILFFBQVEsQ0FBQ3RDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEU7SUFDQSxJQUFJLENBQUN3QixZQUFZLEVBQUU7TUFDakJOLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLDJDQUEyQyxDQUFDO01BQ3pEO0lBQ0Y7SUFDRTs7SUFJSCxJQUFNcUUsVUFBVSxHQUFHO01BQ2hCaEUsWUFBWSxFQUFFQSxZQUFZO01BQzFCWCxRQUFRLEVBQUVBLFFBQVE7TUFDbEJFLE9BQU8sRUFBRUEsT0FBTztNQUNoQlUsSUFBSSxFQUFFQSxJQUFJO01BQ1Y0QyxXQUFXLEVBQUVBLFdBQVc7TUFDeEJwRCxXQUFXLEVBQUVBO0lBQ2YsQ0FBQztJQUNEekMsQ0FBQyxDQUFDNEMsSUFBSSxDQUFDO01BQ0xDLEdBQUcsRUFBRSxxQkFBcUI7TUFDMUJDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLElBQUksRUFBQ2lFLFVBQVU7TUFDZjlELE9BQU8sRUFBRSxTQUFBQSxRQUFVQyxLQUFLLEVBQUU7UUFDeEI7UUFDQTtRQUNBLElBQU0rQyxRQUFRLEdBQUdsRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFNeUUsSUFBSSxHQUFHakcsQ0FBQyx1RUFBQTZCLE1BQUEsQ0FBc0VxRSxRQUFRLFFBQUksQ0FBQyxDQUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMvRzBDLElBQUksQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDd0QsWUFBWSxDQUFDLENBQUMvRCxJQUFJLENBQUMsYUFBYSxFQUFFd0MsVUFBVSxDQUFDO1FBQ3pFVSxJQUFJLENBQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzdDLElBQUksQ0FBQ3lELGNBQWMsQ0FBQyxDQUFDaEUsSUFBSSxDQUFDLGVBQWUsRUFBRXlDLFlBQVksQ0FBQztRQUNqRlMsSUFBSSxDQUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM3QyxJQUFJLENBQUNqQixRQUFRLENBQUM7UUFDckM0RCxJQUFJLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzdDLElBQUksQ0FBQ2YsT0FBTyxDQUFDO1FBQ3BDMEQsSUFBSSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM3QyxJQUFJLENBQUMyRCxVQUFVLENBQUM5RCxLQUFLLENBQUMsQ0FBQytELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RGpCLElBQUksQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDdUMsV0FBVyxDQUFDO1FBRTNDZ0IsTUFBTSxDQUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDO01BQ3RCLENBQUM7TUFDRHBELEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQVk7UUFDakJELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO01BQ25EO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBSUYzQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNwRCxJQUFNTixFQUFFLEdBQUdwQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQztJQUNqQyxJQUFNNEQsT0FBTyxHQUFHLEVBQUU7SUFFbEJwRixDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxZQUFZO01BQ3BELElBQU1tRyxHQUFHLEdBQUduSCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ25CLElBQU1rRyxRQUFRLEdBQUdpQixHQUFHLENBQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztNQUU1RHFDLE9BQU8sQ0FBQ2dDLElBQUksQ0FBQztRQUNYaEcsRUFBRSxFQUFFOEUsUUFBUTtRQUNacEUsUUFBUSxFQUFFcUYsR0FBRyxDQUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO1FBQy9DckUsVUFBVSxFQUFFb0YsR0FBRyxDQUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO1FBQ25EVixlQUFlLEVBQUV5QixHQUFHLENBQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztRQUM3RG5FLElBQUksRUFBRWtGLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztRQUN2Q2xFLFVBQVUsRUFBRWlGLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztRQUNuRC9ELFFBQVEsRUFBRThFLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztRQUMvQ1IsUUFBUSxFQUFFdUIsR0FBRyxDQUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO1FBQy9DakQsS0FBSyxFQUFFZ0UsR0FBRyxDQUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO1FBQ3pDUCxXQUFXLEVBQUVzQixHQUFHLENBQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUM4QyxJQUFJLENBQUM7TUFDdEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBSUZwRyxDQUFDLENBQUM0QyxJQUFJLENBQUM7TUFDTEMsR0FBRyxFQUFFLDhCQUE4QjtNQUNuQ0MsTUFBTSxFQUFFLE1BQU07TUFDZHVFLFdBQVcsRUFBRSxrQkFBa0I7TUFDL0J0RSxJQUFJLEVBQUV1RSxJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUFFbkcsRUFBRSxFQUFFQSxFQUFFO1FBQUVnRSxPQUFPLEVBQUVBO01BQVEsQ0FBQyxDQUFDO01BQ2xEbEMsT0FBTyxFQUFFLFNBQUFBLFFBQVVzRSxHQUFHLEVBQUU7UUFDdEI5RSxNQUFNLENBQUNRLE9BQU8sQ0FBQ3NFLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDO1FBQzNCQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ25CLENBQUM7TUFDRGhGLEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQVk7UUFDakJELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO01BQ2hFO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUQzQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUMzQyxJQUFNaUQsU0FBUyxHQUFHLElBQUksQ0FBQ2lELE9BQU8sQ0FBQ3hHLEVBQUU7SUFFakN5RyxLQUFLLENBQUMsaUNBQWlDLEdBQUdsRCxTQUFTLEVBQUU7TUFDakQ3QixNQUFNLEVBQUUsTUFBTTtNQUNkZ0YsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFLGtCQUFrQjtRQUNsQyxrQkFBa0IsRUFBRTtNQUN4QjtJQUNKLENBQUMsQ0FBQyxDQUNEQyxJQUFJLENBQUMsVUFBQXRCLFFBQVE7TUFBQSxPQUFJQSxRQUFRLENBQUN1QixJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDakNELElBQUksQ0FBQyxVQUFBaEYsSUFBSSxFQUFJO01BQ1YsSUFBSUEsSUFBSSxDQUFDRyxPQUFPLEVBQUU7UUFDZFIsTUFBTSxDQUFDUSxPQUFPLENBQUMsa0NBQWtDLENBQUM7UUFDbEQrRSxVQUFVLENBQUM7VUFBQSxPQUFNUCxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1FBQUEsR0FBRSxJQUFJLENBQUM7TUFDN0MsQ0FBQyxNQUFNO1FBQ0hqRixNQUFNLENBQUNDLEtBQUssQ0FBQyxXQUFXLEdBQUdJLElBQUksQ0FBQ0osS0FBSyxDQUFDO01BQzFDO0lBQ0osQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBQSxLQUFLLEVBQUk7TUFDWkQsTUFBTSxDQUFDQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUEzQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUM5QyxJQUFNaUQsU0FBUyxHQUFHLElBQUksQ0FBQ2lELE9BQU8sQ0FBQ3hHLEVBQUU7SUFFakN5RyxLQUFLLENBQUMsaUNBQWlDLEdBQUdsRCxTQUFTLEVBQUU7TUFDakQ3QixNQUFNLEVBQUUsTUFBTTtNQUNkZ0YsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFLGtCQUFrQjtRQUNsQyxrQkFBa0IsRUFBRTtNQUN4QixDQUFDO01BQ0RJLElBQUksRUFBRVosSUFBSSxDQUFDQyxTQUFTLENBQUM7UUFBRVksTUFBTSxFQUFFO01BQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBQyxVQUFBdEIsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUNqQ0QsSUFBSSxDQUFDLFVBQUFoRixJQUFJLEVBQUk7TUFDVixJQUFJQSxJQUFJLENBQUNHLE9BQU8sRUFBRTtRQUNkUixNQUFNLENBQUNRLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQztRQUNsRCtFLFVBQVUsQ0FBQztVQUFBLE9BQU1QLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7UUFBQSxHQUFFLElBQUksQ0FBQztNQUM3QyxDQUFDLE1BQU07UUFDSGpGLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLFdBQVcsR0FBR0ksSUFBSSxDQUFDSixLQUFLLENBQUM7TUFDMUM7SUFDSixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFBLEtBQUssRUFBSTtNQUNaRCxNQUFNLENBQUNDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFHSDNDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUN5QixFQUFFLENBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUrQyxDQUFDLEVBQUU7SUFDeERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBTUMsU0FBUyxHQUFHM0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUVwQ3FGLElBQUksQ0FBQ0MsSUFBSSxDQUFDO01BQ05DLEtBQUssRUFBRSx1QkFBdUI7TUFDOUJoRixJQUFJLEVBQUUsbURBQW1EO01BRXpEaUYsZ0JBQWdCLEVBQUUsSUFBSTtNQUN0QkMsa0JBQWtCLEVBQUUsU0FBUztNQUM3QkMsaUJBQWlCLEVBQUUsU0FBUztNQUM1QkMsaUJBQWlCLEVBQUUsZUFBZTtNQUNsQ0MsZ0JBQWdCLEVBQUU7SUFDdEIsQ0FBQyxDQUFDLENBQUNaLElBQUksQ0FBQyxVQUFDYSxNQUFNLEVBQUs7TUFDaEIsSUFBSUEsTUFBTSxDQUFDQyxXQUFXLEVBQUU7UUFDcEI3SSxDQUFDLENBQUM0QyxJQUFJLENBQUM7VUFDSEMsR0FBRyxFQUFFLDJCQUEyQixHQUFHOEIsU0FBUztVQUM1QzdCLE1BQU0sRUFBRSxNQUFNO1VBQ2RJLE9BQU8sRUFBRSxTQUFBQSxRQUFVdUQsUUFBUSxFQUFFO1lBQ3pCL0QsTUFBTSxDQUFDUSxPQUFPLENBQUMseURBQXlELEVBQUUsUUFBUSxDQUFDO1VBRXZGLENBQUM7VUFDRFAsS0FBSyxFQUFFLFNBQUFBLE1BQUEsRUFBWTtZQUNmRCxNQUFNLENBQUNDLEtBQUssQ0FBQyw2REFBNkQsRUFBRSxRQUFRLENBQUM7VUFDekY7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUtGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNwakJXO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsZUFBZSw0R0FBd0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7OztBQ3hDVztBQUNiLDJCQUEyQixtSEFBNEM7QUFDdkUsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2ZhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQywrRkFBaUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlGQUFpRjtBQUNyRjtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLDZHQUF3QztBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywrRkFBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBdUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NldHRpbmdzL2RlbWFuZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RhdGUtdG8taXNvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1pc28tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgJCgnI2RlbWFuZGVUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbWzE1LCAyNSwgNTAsIC0xXSwgWzE1LCAyNSwgNTAsICdBTEwnXV0sXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gICAgZGVzdHJveTogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICAgXHJcbiAgY29uc3QgaXNCb290c3RyYXA1ID0gdHlwZW9mIGJvb3RzdHJhcCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJvb3RzdHJhcC5Ub29sdGlwICE9PSAndW5kZWZpbmVkJztcclxuICBpZiAoaXNCb290c3RyYXA1KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykuZm9yRWFjaChlbCA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAoZWwpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxuICB9XHJcblxyXG4gIGxldCBkZXRhaWxJbmRleCA9IDA7XHJcblxyXG4gIC8vIFLDqWluaXRpYWxpc2VyIGNoYW1wcyBmb3JtdWxhaXJlIGFwcsOocyBham91dCB1biBkw6l0YWlsXHJcbiAgZnVuY3Rpb24gcmVzZXREZXRhaWxGaWVsZHMoKSB7XHJcbiAgICAkKCcjem9uZS1kZXRhaWwgc2VsZWN0LCAjem9uZS1kZXRhaWwgaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZWwgPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCB0YWcgPSBlbC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKHRhZyA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGVsLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYgKGlkID09PSAnYWRkLXByZXN0YXRpb24tMCcpIHtcclxuICAgICAgICAgIGVsLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5QcmVzdGF0aW9uPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpZCAmJiAkKCcjdGVtcGxhdGVzICMnICsgaWQgKyAnLXRlbXBsYXRlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICBlbC5odG1sKCQoJyN0ZW1wbGF0ZXMgIycgKyBpZCArICctdGVtcGxhdGUnKS5odG1sKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbC52YWwoJycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLnZhbCgnJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWwucmVtb3ZlQXR0cignbmFtZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgLy8gSW5pdGlhbGlzYXRpb24gRGF0YVRhYmxlXHJcbiAgJCgnI2RlbWFuZGVUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbWzE1LCAyNSwgNTAsIC0xXSwgWzE1LCAyNSwgNTAsICdBTEwnXV0sXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gICAgZGVzdHJveTogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICAvL1Rvb2x0aXBzIHBvdXIgQm9vdHN0cmFwIDQgb3UgNVxyXG4gIGNvbnN0IGlzQm9vdHN0cmFwNSA9IHR5cGVvZiBib290c3RyYXAgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBib290c3RyYXAuVG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgaWYgKGlzQm9vdHN0cmFwNSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpLmZvckVhY2goZWwgPT4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGVsKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBsZXQgZGV0YWlsSW5kZXggPSAwO1xyXG5cclxuICAvLyBSw6lpbml0aWFsaXNlciBsZXMgY2hhbXBzIGR1IGZvcm11bGFpcmUgYXByw6hzIGFqb3V0IGQndW4gZMOpdGFpbFxyXG4gIGZ1bmN0aW9uIHJlc2V0RGV0YWlsRmllbGRzKCkge1xyXG4gICAgJCgnI3pvbmUtZGV0YWlsIHNlbGVjdCwgI3pvbmUtZGV0YWlsIGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gJCh0aGlzKTtcclxuICAgICAgY29uc3QgdGFnID0gZWwucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICh0YWcgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlbC5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGlmIChpZCA9PT0gJ2FkZC1wcmVzdGF0aW9uLTAnKSB7XHJcbiAgICAgICAgICBlbC5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+UHJlc3RhdGlvbjwvb3B0aW9uPicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaWQgJiYgJCgnI3RlbXBsYXRlcyAjJyArIGlkICsgJy10ZW1wbGF0ZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgZWwuaHRtbCgkKCcjdGVtcGxhdGVzICMnICsgaWQgKyAnLXRlbXBsYXRlJykuaHRtbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWwudmFsKCcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC52YWwoJycpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsLnJlbW92ZUF0dHIoJ25hbWUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQWpvdXRlciB1biBub3V2ZWF1IGTDqXRhaWxcclxuICAkKCcjYWRkLWRldGFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gbmFtZSA9PiAkKGBzZWxlY3RbbmFtZT1cImRldGFpbHNbMF1bJHtuYW1lfV1cIl0gb3B0aW9uOnNlbGVjdGVkYCk7XHJcbiAgICBjb25zdCB2ZWhpY3VsZSA9IGdldFZhbHVlKCd2ZWhpY3VsZScpO1xyXG4gICAgY29uc3QgY29uZHVjdGV1ciA9IGdldFZhbHVlKCdjb25kdWN0ZXVyJyk7XHJcbiAgICBjb25zdCB0eXBlUHJlc3RhdGlvbiA9IGdldFZhbHVlKCd0eXBlX3ByZXN0YXRpb24nKTtcclxuICAgIGNvbnN0IHpvbmUgPSBnZXRWYWx1ZSgnem9uZScpO1xyXG4gICAgY29uc3QgcHJlc3RhdGlvbiA9IGdldFZhbHVlKCdwcmVzdGF0aW9uJyk7XHJcbiAgICBjb25zdCBxdWFudGl0ZUlucHV0ID0gJCgnaW5wdXRbbmFtZT1cImRldGFpbHNbMF1bcXVhbnRpdGVdXCJdJyk7XHJcbiAgICBjb25zdCBuYkpvdXJzSW5wdXQgPSAkKCdpbnB1dFtuYW1lPVwiZGV0YWlsc1swXVtuYl9qb3Vyc11cIl0nKTtcclxuXHJcbiAgICBjb25zdCBxdWFudGl0ZSA9IHBhcnNlSW50KHF1YW50aXRlSW5wdXQudmFsKCkpIHx8IDA7XHJcbiAgICBjb25zdCBuYkpvdXJzID0gcGFyc2VJbnQobmJKb3Vyc0lucHV0LnZhbCgpKSB8fCAwO1xyXG4gICAgY29uc3QgZGF0ZURlbWFuZGUgPSAkKCdpbnB1dFtuYW1lPVwiZGF0ZURlbWFuZGVcIl0nKS52YWwoKTtcclxuICAgIGNvbnN0IG5iUGVyc29ubmVzID0gcGFyc2VJbnQoJCgnI25iUGVyc29ubmVzSW5wdXQnKS52YWwoKSkgfHwgMTtcclxuXHJcbiAgICBpZiAoIXZlaGljdWxlLnZhbCgpIHx8ICFjb25kdWN0ZXVyLnZhbCgpIHx8ICF0eXBlUHJlc3RhdGlvbi52YWwoKSB8fCAhem9uZS52YWwoKSB8fCAhcHJlc3RhdGlvbi52YWwoKSB8fCBxdWFudGl0ZSA8PSAwIHx8IG5iSm91cnMgPD0gMCkge1xyXG4gICAgICAgdG9hc3RyLmVycm9yKCdWZXVpbGxleiByZW1wbGlyIHRvdXMgbGVzIGNoYW1wcyBkdSBkw6l0YWlsIGF2ZWMgZGVzIHZhbGV1cnMgdmFsaWRlcy4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9kZW1hbmRlL2FqYXgvdGFyaWYnLFxyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJlc3RhdGlvbklkOiBwcmVzdGF0aW9uLnZhbCgpLFxyXG4gICAgICAgIGRhdGU6IGRhdGVEZW1hbmRlLFxyXG4gICAgICAgIHF1YW50aXRlOiBxdWFudGl0ZSxcclxuICAgICAgICBuYkpvdXJzOiBuYkpvdXJzLFxyXG4gICAgICAgICBuYlBlcnNvbm5lczogbmJQZXJzb25uZXMgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0YXJpZikge1xyXG4gICAgICAgICQoJyN0YWJsZS1kZXRhaWxzLWNvbnRhaW5lcicpLnNob3coKTtcclxuXHJcbiAgJCgnI3RhYmxlLWRldGFpbHMgdGJvZHknKS5hcHBlbmQoYFxyXG4gIDx0ciBkYXRhLWluZGV4PVwiJHtkZXRhaWxJbmRleH1cIj5cclxuICAgIDx0ZD4ke2RldGFpbEluZGV4ICsgMX08L3RkPlxyXG4gICAgPHRkPiR7dmVoaWN1bGUudGV4dCgpfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRldGFpbHNbJHtkZXRhaWxJbmRleH1dW3ZlaGljdWxlXVwiIHZhbHVlPVwiJHt2ZWhpY3VsZS52YWwoKX1cIj48L3RkPlxyXG4gICAgPHRkPiR7Y29uZHVjdGV1ci50ZXh0KCl9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGV0YWlsc1ske2RldGFpbEluZGV4fV1bY29uZHVjdGV1cl1cIiB2YWx1ZT1cIiR7Y29uZHVjdGV1ci52YWwoKX1cIj48L3RkPlxyXG4gICAgPHRkPiR7dHlwZVByZXN0YXRpb24udGV4dCgpfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRldGFpbHNbJHtkZXRhaWxJbmRleH1dW3R5cGVfcHJlc3RhdGlvbl1cIiB2YWx1ZT1cIiR7dHlwZVByZXN0YXRpb24udmFsKCl9XCI+PC90ZD5cclxuICAgIDx0ZD4ke3pvbmUudGV4dCgpfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRldGFpbHNbJHtkZXRhaWxJbmRleH1dW3pvbmVdXCIgdmFsdWU9XCIke3pvbmUudmFsKCl9XCI+PC90ZD5cclxuICAgIDx0ZD4ke3ByZXN0YXRpb24udGV4dCgpfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRldGFpbHNbJHtkZXRhaWxJbmRleH1dW3ByZXN0YXRpb25dXCIgdmFsdWU9XCIke3ByZXN0YXRpb24udmFsKCl9XCI+PC90ZD5cclxuICAgIDx0ZD4ke3F1YW50aXRlfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRldGFpbHNbJHtkZXRhaWxJbmRleH1dW3F1YW50aXRlXVwiIHZhbHVlPVwiJHtxdWFudGl0ZX1cIj48L3RkPlxyXG4gICAgPHRkPiR7bmJKb3Vyc308aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkZXRhaWxzWyR7ZGV0YWlsSW5kZXh9XVtuYl9qb3Vyc11cIiB2YWx1ZT1cIiR7bmJKb3Vyc31cIj48L3RkPlxyXG4gICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0blJlbW92ZURldGFpbFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgPC90cj5cclxuYCk7XHJcbjtcclxuXHJcbiAgICAgICAgZGV0YWlsSW5kZXgrKztcclxuICAgICAgICByZXNldERldGFpbEZpZWxkcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2FsY3VsIGR1IHRhcmlmLicpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFN1cHByaW1lciB1biBkw6l0YWlsXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5SZW1vdmVEZXRhaWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgaWYgKCQoJyN0YWJsZS1kZXRhaWxzIHRib2R5IHRyJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICQoJyN0YWJsZS1kZXRhaWxzLWNvbnRhaW5lcicpLmhpZGUoKTtcclxuICAgICAgZGV0YWlsSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIH0pOyAgIFxyXG5cclxuICAvLyBDaGFyZ2VyIGxlcyBwcmVzdGF0aW9ucyBkeW5hbWlxdWVtZW50XHJcbiAgZnVuY3Rpb24gZmlsdGVyUHJlc3RhdGlvbnNBamF4KHR5cGVTZWxlY3Rvciwgem9uZVNlbGVjdG9yLCBwcmVzdGF0aW9uU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9ICQodHlwZVNlbGVjdG9yKS52YWwoKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkWm9uZSA9ICQoem9uZVNlbGVjdG9yKS52YWwoKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkVHlwZSB8fCAhc2VsZWN0ZWRab25lKSB7XHJcbiAgICAgICQocHJlc3RhdGlvblNlbGVjdG9yKS5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lciB1bmUgcHJlc3RhdGlvbjwvb3B0aW9uPicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL2RlbWFuZGUvYWpheC9wcmVzdGF0aW9ucycsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGRhdGE6IHsgdHlwZTogc2VsZWN0ZWRUeXBlLCB6b25lOiBzZWxlY3RlZFpvbmUgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lciB1bmUgcHJlc3RhdGlvbjwvb3B0aW9uPic7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7cC5pZH1cIj4ke3Aubm9tfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChwcmVzdGF0aW9uU2VsZWN0b3IpLmh0bWwob3B0aW9ucyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChwcmVzdGF0aW9uU2VsZWN0b3IpLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5FcnJldXIgZGUgY2hhcmdlbWVudDwvb3B0aW9uPicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICQoJyNhZGQtdHlwZS1wcmVzdGF0aW9uLCAjYWRkLXpvbmUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZmlsdGVyUHJlc3RhdGlvbnNBamF4KCcjYWRkLXR5cGUtcHJlc3RhdGlvbicsICcjYWRkLXpvbmUnLCAnI2FkZC1wcmVzdGF0aW9uLTAnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gUmVtcGxpciBsYSBkYXRlIGFjdHVlbGxlIGF1dG9tYXRpcXVlbWVudCDDoCBsJ291dmVydHVyZSBkdSBtb2RhbFxyXG4gICQoJyNhZGREZW1hbmRlJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZCA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJkYXRlRGVtYW5kZVwiXScpLnZhbChmb3JtYXR0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBFbXDDqmNoZXIgbGEgc291bWlzc2lvbiBzYW5zIGTDqXRhaWxzXHJcbiAgJCgnI2Zvcm1BZGREZW1hbmRlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJCgnI3RhYmxlLWRldGFpbHMgdGJvZHkgdHInKS5sZW5ndGggPT09IDApIHtcclxuICAgICBcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoJ1ZldWlsbGV6IGFqb3V0ZXIgYXUgbW9pbnMgdW4gZMOpdGFpbCBhdmFudCBkZSBzb3VtZXR0cmUuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0blRyYWl0ZXJEZW1hbmRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGVtYW5kZUlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9kZW1hbmRlL2FqYXgvZ2V0LycgKyBkZW1hbmRlSWQsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1LDqXBvbnNlIEFKQVggL2RlbWFuZGUvYWpheC9nZXQvOicsIGRhdGEpO1xyXG4gICAgICAgIC8vIFJlbXBsaXIgaW5mb3MgZ8OpbsOpcmFsZXNcclxuICAgICAgICAkKCcjdHJhaXRlci1pZCcpLnZhbChkYXRhLmlkKTtcclxuICAgICAgICAkKCcjdHJhaXRlci1ub20nKS52YWwoZGF0YS5ub21CZW5pZmljaWFpcmUpO1xyXG4gICAgICAgICQoJyN0cmFpdGVyLWNpbicpLnZhbChkYXRhLmNpbik7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItb2JzZXJ2YXRpb24nKS52YWwoZGF0YS5vYnNlcnZhdGlvbik7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItZGVzY3JpcHRpb24nKS52YWwoZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItY29udGFjdCcpLnZhbChkYXRhLmNvbnRhY3QpO1xyXG4gICAgICAgICQoJyN0cmFpdGVyLW5iUGVyc29ubmVzJykudmFsKGRhdGEubmJQZXJzb25uZXMpO1xyXG4gICAgICAgICQoJyN0cmFpdGVyLWRhdGUnKS52YWwoZGF0YS5kYXRlRGVtYW5kZSk7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItYWRyZXNzZScpLnZhbChkYXRhLmFkcmVzc0RlcGFydCk7XHJcblxyXG4gICAgICAgIC8vIFJlbXBsaXIgbGUgdGFibGVhdSBkZXMgZMOpdGFpbHNcclxuICAgICAgICBjb25zdCB0Ym9keSA9ICQoJyN0cmFpdGVyLWRldGFpbHMtdGFibGUgdGJvZHknKTtcclxuICAgICAgICB0Ym9keS5lbXB0eSgpO1xyXG5cclxuICAgICAgICBkYXRhLmRldGFpbHMuZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZChgXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4ke2QuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2ZWhpY3VsZVwiIGRhdGEtdmVoaWN1bGUtaWQ9XCIke2QudmVoaWN1bGVJZH1cIj4ke2QudmVoaWN1bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb25kdWN0ZXVyXCIgZGF0YS1jb25kdWN0ZXVyLWlkPVwiJHtkLmNvbmR1Y3RldXJJZH1cIj4ke2QuY29uZHVjdGV1cn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInR5cGVfcHJlc3RhdGlvblwiIGRhdGEtdHlwZS1pZD1cIiR7ZC50eXBlUHJlc3RhdGlvbklkfVwiPiR7ZC50eXBlX3ByZXN0YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ6b25lXCIgZGF0YS16b25lLWlkPVwiJHtkLnpvbmVJZH1cIj4ke2Quem9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInByZXN0YXRpb25cIiBkYXRhLXByZXN0YXRpb24taWQ9XCIke2QucHJlc3RhdGlvbklkfVwiPiR7ZC5wcmVzdGF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicXVhbnRpdGVcIj4ke2QucXVhbnRpdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJuYl9qb3Vyc1wiPiR7ZC5uYl9qb3Vyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhcmlmXCI+JHtkLnRhcmlmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwia2lsb21ldHJhZ2VcIj4ke2Qua2lsb21ldHJhZ2UgfHwgMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uJHtkLmlkfVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIHN0eWxlPVwid2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgcGFkZGluZzogMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvbiR7ZC5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZHJvcGRvd24taXRlbSBidG5Nb2RpZmllckRldGFpbFwiIGRhdGEtaWQ9XCIke2QuaWR9XCIgZGF0YS1pc2tpbG9tZXRyYWdlPVwiJHtkLmlzS2lsb21ldHJhZ2UgfHwgMH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmVcIj48L2k+IE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICBgKTtcclxuICB9KTtcclxuXHJcblxyXG4gICAgICAgICQoJyN0cmFpdGVyRGVtYW5kZScpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlIGxhIGRlbWFuZGUuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuICAvLyBwcmVzdGF0aW9ucyBkeW5hbWlxdWVtZW50XHJcbiAgZnVuY3Rpb24gZmlsdGVyUHJlc3RhdGlvbnNBamF4KHR5cGVTZWxlY3Rvciwgem9uZVNlbGVjdG9yLCBwcmVzdGF0aW9uU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9ICQodHlwZVNlbGVjdG9yKS52YWwoKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkWm9uZSA9ICQoem9uZVNlbGVjdG9yKS52YWwoKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkVHlwZSB8fCAhc2VsZWN0ZWRab25lKSB7XHJcbiAgICAgICQocHJlc3RhdGlvblNlbGVjdG9yKS5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lciB1bmUgcHJlc3RhdGlvbjwvb3B0aW9uPicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL2RlbWFuZGUvYWpheC9wcmVzdGF0aW9ucycsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGRhdGE6IHsgdHlwZTogc2VsZWN0ZWRUeXBlLCB6b25lOiBzZWxlY3RlZFpvbmUgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lciB1bmUgcHJlc3RhdGlvbjwvb3B0aW9uPic7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7cC5pZH1cIj4ke3Aubm9tfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChwcmVzdGF0aW9uU2VsZWN0b3IpLmh0bWwob3B0aW9ucyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChwcmVzdGF0aW9uU2VsZWN0b3IpLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5FcnJldXIgZGUgY2hhcmdlbWVudDwvb3B0aW9uPicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICQoJyNhZGQtdHlwZS1wcmVzdGF0aW9uLCAjYWRkLXpvbmUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZmlsdGVyUHJlc3RhdGlvbnNBamF4KCcjYWRkLXR5cGUtcHJlc3RhdGlvbicsICcjYWRkLXpvbmUnLCAnI2FkZC1wcmVzdGF0aW9uLTAnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZGF0ZSBhY3R1ZWxsZSBhdXRvbWF0aXF1ZW1lbnRcclxuICAkKCcjYWRkRGVtYW5kZScpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxNik7XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZURlbWFuZGVcIl0nKS52YWwoZm9ybWF0dGVkKTtcclxuICB9KTtcclxuXHJcbiAgLy8gc291bWlzc2lvbiBzYW5zIGTDqXRhaWxzXHJcbiAgJCgnI2Zvcm1BZGREZW1hbmRlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJCgnI3RhYmxlLWRldGFpbHMgdGJvZHkgdHInKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgIHRvYXN0ci5lcnJvcignVmV1aWxsZXogYWpvdXRlciBhdSBtb2lucyB1biBkw6l0YWlsIGF2YW50IGRlIHNvdW1ldHRyZS4nKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5mdW5jdGlvbiB0b2dnbGVLaWxvbWV0cmFnZUZpZWxkKCkge1xyXG4gIGNvbnN0IGlzS2lsb21ldHJhZ2UgPSAkKCcjZWRpdC1pc2tpbG9tZXRyYWdlJykudmFsKCk7XHJcblxyXG4gIGlmIChpc0tpbG9tZXRyYWdlID09IDEgfHwgaXNLaWxvbWV0cmFnZSA9PT0gJzEnKSB7XHJcbiAgICAkKCcjZWRpdC1raWxvbWV0cmFnZScpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuc2hvdygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjZWRpdC1raWxvbWV0cmFnZScpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuaGlkZSgpO1xyXG4gICAgJCgnI2VkaXQta2lsb21ldHJhZ2UnKS52YWwoJycpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFF1YW5kIG9uIGNsaXF1ZSBzdXIgTW9kaWZpZXIgZGFucyBsYSBsaXN0ZSBkZXMgZMOpdGFpbHNcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5Nb2RpZmllckRldGFpbCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCAkcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpOyAgLy8gTGEgbGlnbmUgZHUgdGFibGVhdVxyXG5cclxuICAvLyBSw6ljdXDDqXJlciBsZXMgZG9ubsOpZXMgZGVwdWlzIGxlcyBjZWxsdWxlcyBldCBhdHRyaWJ1dHMgZGF0YS0qXHJcbiAgY29uc3QgZGV0YWlsSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgY29uc3QgaXNLaWxvbWV0cmFnZSA9ICQodGhpcykuZGF0YSgnaXNraWxvbWV0cmFnZScpIHx8IDA7XHJcbiAgY29uc3QgdmVoaWN1bGVJZCA9ICRyb3cuZmluZCgndGQudmVoaWN1bGUnKS5kYXRhKCd2ZWhpY3VsZS1pZCcpO1xyXG4gIGNvbnN0IGNvbmR1Y3RldXJJZCA9ICRyb3cuZmluZCgndGQuY29uZHVjdGV1cicpLmRhdGEoJ2NvbmR1Y3RldXItaWQnKTtcclxuICBjb25zdCB0eXBlUHJlc3RhdGlvbiA9ICRyb3cuZmluZCgndGQudHlwZV9wcmVzdGF0aW9uJykudGV4dCgpLnRyaW0oKTtcclxuICBjb25zdCB6b25lID0gJHJvdy5maW5kKCd0ZC56b25lJykudGV4dCgpLnRyaW0oKTtcclxuICBjb25zdCBwcmVzdGF0aW9uID0gJHJvdy5maW5kKCd0ZC5wcmVzdGF0aW9uJykudGV4dCgpLnRyaW0oKTtcclxuICBjb25zdCBwcmVzdGF0aW9uSWQgPSAkcm93LmZpbmQoJ3RkLnByZXN0YXRpb24nKS5kYXRhKCdwcmVzdGF0aW9uLWlkJyk7XHJcbiAgY29uc3QgcXVhbnRpdGUgPSAkcm93LmZpbmQoJ3RkLnF1YW50aXRlJykudGV4dCgpLnRyaW0oKTtcclxuICBjb25zdCBuYkpvdXJzID0gJHJvdy5maW5kKCd0ZC5uYl9qb3VycycpLnRleHQoKS50cmltKCk7XHJcbiAgXHJcbiAgXHJcbiAgY29uc29sZS5sb2coJ3ZlaGljdWxlSWQ6JywgdmVoaWN1bGVJZCk7XHJcbiAgY29uc29sZS5sb2coJ2NvbmR1Y3RldXJJZDonLCBjb25kdWN0ZXVySWQpOyAgXHJcbiAgLy8gUmVtcGxpciBsZXMgY2hhbXBzIGR1IG1vZGFsXHJcbiAgJCgnI2RldGFpbC1pZCcpLnZhbChkZXRhaWxJZCk7XHJcbiBcclxuLy8gICQoJyNlZGl0LXZlaGljdWxlJykudmFsKHZlaGljdWxlSWQpO1xyXG4vLyAgICQoJyNlZGl0LWNvbmR1Y3RldXInKS52YWwoY29uZHVjdGV1cklkKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdWZWhpY3VsZSBJRDonLCB2ZWhpY3VsZUlkLCB0eXBlb2YgdmVoaWN1bGVJZCk7XHJcbi8vICQoJyNlZGl0LXZlaGljdWxlIG9wdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdPcHRpb24gdmFsdWU6JywgJCh0aGlzKS52YWwoKSwgdHlwZW9mICQodGhpcykudmFsKCkpO1xyXG4vLyB9KTtcclxuXHJcblxyXG4gICQoJyNlZGl0LXZlaGljdWxlJykudmFsKHZlaGljdWxlSWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICQoJyNlZGl0LWNvbmR1Y3RldXInKS52YWwoY29uZHVjdGV1cklkKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAkKCcjZWRpdC10eXBlJykudmFsKHR5cGVQcmVzdGF0aW9uKTtcclxuICAkKCcjZWRpdC16b25lJykudmFsKHpvbmUpO1xyXG4gICQoJyNlZGl0LXByZXN0YXRpb24nKS52YWwocHJlc3RhdGlvbik7XHJcbiAgJCgnI2VkaXQtcHJlc3RhdGlvbi1pZCcpLnZhbChwcmVzdGF0aW9uSWQpO1xyXG4gICQoJyNlZGl0LXF1YW50aXRlJykudmFsKHF1YW50aXRlKTtcclxuICAkKCcjZWRpdC1qb3VycycpLnZhbChuYkpvdXJzKTtcclxuICAkKCcjZWRpdC1pc2tpbG9tZXRyYWdlJykudmFsKGlzS2lsb21ldHJhZ2UpO1xyXG5cclxuICB0b2dnbGVLaWxvbWV0cmFnZUZpZWxkKCk7XHJcbiAgLy8gQWZmaWNoZXIgbGEgbW9kYWxcclxuICAkKCcja2lsb21ldHJhZ2VHcm91cCcpLmhpZGUoKTtcclxuICAkKCcjbW9kaWZpZXJEZXRhaWxNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgLy8gT24gdsOpcmlmaWUgcXVlIGwnSUQgcHJlc3RhdGlvbiBleGlzdGVcclxuICAgIGlmIChwcmVzdGF0aW9uSWQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGBwcmVzdGF0aW9uLyR7cHJlc3RhdGlvbklkfS9raWxvbWV0cmFnZWAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pc0tpbG9tZXRyYWdlID09IDEgfHwgcmVzcG9uc2UuaXNLaWxvbWV0cmFnZSA9PT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZWRpdC1pc2tpbG9tZXRyYWdlJykudmFsKDEpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2tpbG9tZXRyYWdlR3JvdXAnKS5zaG93KCk7IC8vIOKchSBBZmZpY2hlclxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZWRpdC1pc2tpbG9tZXRyYWdlJykudmFsKDApO1xyXG4gICAgICAgICAgICAgICAgJCgnI2tpbG9tZXRyYWdlR3JvdXAnKS5oaWRlKCk7IC8vIOKchSBNYXNxdWVyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIEFKQVg6Jywgc3RhdHVzLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiSUQgZGUgcHJlc3RhdGlvbiBpbnRyb3V2YWJsZSBkYW5zIGwnYXR0cmlidXQgZGF0YS5cIik7XHJcbiAgICAgICAgJCgnI2tpbG9tZXRyYWdlR3JvdXAnKS5oaWRlKCk7ICAvLyBQYXIgZMOpZmF1dCBvbiBjYWNoZVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiAkKCcjYnRuLWVucmVnaXN0cmVyLWRldGFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCAkbW9kYWwgPSAkKCcjbW9kaWZpZXJEZXRhaWxNb2RhbCcpO1xyXG4gIGNvbnN0IHByZXN0YXRpb25JZCA9ICQoJyNlZGl0LXByZXN0YXRpb24taWQnKS52YWwoKTsgLy8gSUQgZXQgbm9uIG5vbVxyXG4gIGNvbnN0IHF1YW50aXRlID0gJCgnI2VkaXQtcXVhbnRpdGUnKS52YWwoKTtcclxuICBjb25zdCBuYkpvdXJzID0gJCgnI2VkaXQtam91cnMnKS52YWwoKTtcclxuICBjb25zdCBkYXRlID0gJCgnI3RyYWl0ZXItZGF0ZScpLnZhbCgpO1xyXG4gIGNvbnN0IHZlaGljdWxlSWQgPSAkKCcjZWRpdC12ZWhpY3VsZScpLnZhbCgpO1xyXG4gIGNvbnN0IHZlaGljdWxlVGV4dCA9ICQoJyNlZGl0LXZlaGljdWxlIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcclxuICBjb25zdCBjb25kdWN0ZXVySWQgPSAkKCcjZWRpdC1jb25kdWN0ZXVyJykudmFsKCk7XHJcbiAgY29uc3QgY29uZHVjdGV1clRleHQgPSAkKCcjZWRpdC1jb25kdWN0ZXVyIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcclxuICBjb25zdCBraWxvbWV0cmFnZSA9IHBhcnNlSW50KCQoJyNlZGl0LWtpbG9tZXRyYWdlJykudmFsKCkpIHx8IDA7XHJcbiAgY29uc3QgbmJQZXJzb25uZXMgPSBwYXJzZUludCgkKCcjdHJhaXRlci1uYlBlcnNvbm5lcycpLnZhbCgpKSB8fCAxO1xyXG4gIC8vIE9wdGlvbm5lbCA6IHbDqXJpZmllIHF1ZSBwcmVzdGF0aW9uSWQgZXN0IGJpZW4gZMOpZmluaVxyXG4gIGlmICghcHJlc3RhdGlvbklkKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoJ1ByZXN0YXRpb24gbm9uIHPDqWxlY3Rpb25uw6llIGNvcnJlY3RlbWVudC4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgICAvLyBQcsOpcGFyYXRpb24gZGVzIGRvbm7DqWVzIMOgIGVudm95ZXJcclxuXHJcblxyXG5cclxuIGNvbnN0IGRhdGFUb1NlbmQgPSB7XHJcbiAgICBwcmVzdGF0aW9uSWQ6IHByZXN0YXRpb25JZCxcclxuICAgIHF1YW50aXRlOiBxdWFudGl0ZSxcclxuICAgIG5iSm91cnM6IG5iSm91cnMsXHJcbiAgICBkYXRlOiBkYXRlLFxyXG4gICAga2lsb21ldHJhZ2U6IGtpbG9tZXRyYWdlLFxyXG4gICAgbmJQZXJzb25uZXM6IG5iUGVyc29ubmVzXHJcbiAgfTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAnL2RlbWFuZGUvYWpheC90YXJpZicsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgZGF0YTpkYXRhVG9TZW5kLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHRhcmlmKSB7XHJcbiAgICAgIC8vIFRyb3V2ZXIgbGEgbGlnbmUgY29ycmVzcG9uZGFudCDDoCBjZSBkw6l0YWlsIGRhbnMgbGEgdGFibGVcclxuICAgICAgLy8gT24gcGV1dCBjaGVyY2hlciB2aWEgZGV0YWlsLWlkIG91IGQuaWQsIGljaSBvbiB1dGlsaXNlIGRhdGEtaWQgb3UgYXV0cmUgYXBwcm9jaGUgc2Vsb24gdG9uIGNvZGVcclxuICAgICAgY29uc3QgZGV0YWlsSWQgPSAkKCcjZGV0YWlsLWlkJykudmFsKCk7XHJcbiAgICAgIGNvbnN0ICRyb3cgPSAkKGAjdHJhaXRlci1kZXRhaWxzLXRhYmxlIHRib2R5IHRyIGJ1dHRvbi5idG5Nb2RpZmllckRldGFpbFtkYXRhLWlkPVwiJHtkZXRhaWxJZH1cIl1gKS5jbG9zZXN0KCd0cicpO1xyXG4gICAgICAkcm93LmZpbmQoJy52ZWhpY3VsZScpLnRleHQodmVoaWN1bGVUZXh0KS5kYXRhKCd2ZWhpY3VsZS1pZCcsIHZlaGljdWxlSWQpO1xyXG4gICAgICAkcm93LmZpbmQoJy5jb25kdWN0ZXVyJykudGV4dChjb25kdWN0ZXVyVGV4dCkuZGF0YSgnY29uZHVjdGV1ci1pZCcsIGNvbmR1Y3RldXJJZCk7XHJcbiAgICAgICRyb3cuZmluZCgnLnF1YW50aXRlJykudGV4dChxdWFudGl0ZSk7XHJcbiAgICAgICRyb3cuZmluZCgnLm5iX2pvdXJzJykudGV4dChuYkpvdXJzKTtcclxuICAgICAgJHJvdy5maW5kKCcudGFyaWYnKS50ZXh0KHBhcnNlRmxvYXQodGFyaWYpLnRvRml4ZWQoMikpO1xyXG4gICAgICAkcm93LmZpbmQoJy5raWxvbWV0cmFnZScpLnRleHQoa2lsb21ldHJhZ2UpOyBcclxuXHJcbiAgICAgICRtb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIGxvcnMgZHUgcmVjYWxjdWwgZHUgdGFyaWYuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcjYnRuLXRyYWl0ZXItZW5yZWdpc3RyZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaWQgPSAkKCcjdHJhaXRlci1pZCcpLnZhbCgpO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBbXTtcclxuXHJcbiAgJCgnI3RyYWl0ZXItZGV0YWlscy10YWJsZSB0Ym9keSB0cicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgcm93ID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGRldGFpbElkID0gcm93LmZpbmQoJy5idG5Nb2RpZmllckRldGFpbCcpLmRhdGEoJ2lkJyk7IC8vIG91IHJvdy5maW5kKCd0ZDpmaXJzdCcpLnRleHQoKS50cmltKClcclxuXHJcbiAgICBkZXRhaWxzLnB1c2goe1xyXG4gICAgICBpZDogZGV0YWlsSWQsXHJcbiAgICAgIHZlaGljdWxlOiByb3cuZmluZCgndGQudmVoaWN1bGUnKS50ZXh0KCkudHJpbSgpLFxyXG4gICAgICBjb25kdWN0ZXVyOiByb3cuZmluZCgndGQuY29uZHVjdGV1cicpLnRleHQoKS50cmltKCksXHJcbiAgICAgIHR5cGVfcHJlc3RhdGlvbjogcm93LmZpbmQoJ3RkLnR5cGVfcHJlc3RhdGlvbicpLnRleHQoKS50cmltKCksXHJcbiAgICAgIHpvbmU6IHJvdy5maW5kKCd0ZC56b25lJykudGV4dCgpLnRyaW0oKSxcclxuICAgICAgcHJlc3RhdGlvbjogcm93LmZpbmQoJ3RkLnByZXN0YXRpb24nKS50ZXh0KCkudHJpbSgpLFxyXG4gICAgICBxdWFudGl0ZTogcm93LmZpbmQoJ3RkLnF1YW50aXRlJykudGV4dCgpLnRyaW0oKSxcclxuICAgICAgbmJfam91cnM6IHJvdy5maW5kKCd0ZC5uYl9qb3VycycpLnRleHQoKS50cmltKCksXHJcbiAgICAgIHRhcmlmOiByb3cuZmluZCgndGQudGFyaWYnKS50ZXh0KCkudHJpbSgpLFxyXG4gICAgICBraWxvbWV0cmFnZTogcm93LmZpbmQoJ3RkLmtpbG9tZXRyYWdlJykudGV4dCgpLnRyaW0oKVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJy9kZW1hbmRlL3RyYWl0ZXIvZW5yZWdpc3RyZXInLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBpZDogaWQsIGRldGFpbHM6IGRldGFpbHMgfSksXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKHJlcy5tZXNzYWdlKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdlbnJlZ2lzdHJlbWVudCBkdSB0cmFpdGVtZW50LlwiKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4gJCgnLmJ0blZhbGlkZXJEZW1hbmRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBkZW1hbmRlSWQgPSB0aGlzLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICBmZXRjaCgnL2RlbWFuZGUvY2hhbmdlci1zdGF0dXRWYWxpZGVyLycgKyBkZW1hbmRlSWQsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0xhIGRlbWFuZGUgdmFsaWTDqWUgYXZlYyBzdWNjw6hzICEnKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxMDAwKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXIgOiAnICsgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0xhIGRlbWFuZGUgblxcJ2EgcGFzIMOpdMOpIHZhbGlkw6llJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAgICQoJy5idG5Bbm51bGVyRGVtYW5kZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZGVtYW5kZUlkID0gdGhpcy5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgZmV0Y2goJy9kZW1hbmRlL2NoYW5nZXItc3RhdHV0QW5udWxlci8nICsgZGVtYW5kZUlkLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHV0OiA2IH0pIC8vIFN0YXR1dCA2IHBvdXIgYW5udWxlclxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdMYSBkZW1hbmRlIGFubnVsw6llIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSwgMTAwMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIDogJyArIGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKCdMYSBkZW1hbmRlIG5cXCdhIHBhcyDDqXTDqSBhbm51bMOpZScpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5FeGN1dGVyRGVtYW5kZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgY29uc3QgZGVtYW5kZUlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG5cclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdFeMOpY3V0ZXIgbGEgZGVtYW5kZSA/JyxcclxuICAgICAgICB0ZXh0OiBcIkNldHRlIGFjdGlvbiBleMOpY3V0ZXJhIGTDqWZpbml0aXZlbWVudCBsYSBkZW1hbmRlLlwiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzc1OTNhZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjYjZjYjllJyxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgZXjDqWN1dGVyJyxcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQW5udWxlcidcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZW1hbmRlL2V4ZWN1dGVyRGVtYW5kZS8nICsgZGVtYW5kZUlkLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnTGEgZGVtYW5kZSBhIMOpdMOpIGV4w6ljdXTDqWUgYXZlYyBzdWNjw6hzLiBWb2lyIGxhIG1pc3Npb24uJywgJ1N1Y2PDqHMnKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGxvcnMgZGUgbFxcJ2V4w6ljdXRpb24gZGUgbGEgZGVtYW5kZS4nLCAnRXJyZXVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4gXHJcblxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcbnZhciBwYWRTdGFydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcGFkJykuc3RhcnQ7XHJcblxyXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xyXG52YXIgJGlzRmluaXRlID0gaXNGaW5pdGU7XHJcbnZhciBhYnMgPSBNYXRoLmFicztcclxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcclxudmFyIG5hdGl2ZURhdGVUb0lTT1N0cmluZyA9IERhdGVQcm90b3R5cGUudG9JU09TdHJpbmc7XHJcbnZhciB0aGlzVGltZVZhbHVlID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRUaW1lKTtcclxudmFyIGdldFVUQ0RhdGUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ0RhdGUpO1xyXG52YXIgZ2V0VVRDRnVsbFllYXIgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ0Z1bGxZZWFyKTtcclxudmFyIGdldFVUQ0hvdXJzID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRVVENIb3Vycyk7XHJcbnZhciBnZXRVVENNaWxsaXNlY29uZHMgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ01pbGxpc2Vjb25kcyk7XHJcbnZhciBnZXRVVENNaW51dGVzID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRVVENNaW51dGVzKTtcclxudmFyIGdldFVUQ01vbnRoID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRVVENNb250aCk7XHJcbnZhciBnZXRVVENTZWNvbmRzID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRVVENTZWNvbmRzKTtcclxuXHJcbi8vIGBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9pc29zdHJpbmdcclxuLy8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBmYWlscyBoZXJlOlxyXG5tb2R1bGUuZXhwb3J0cyA9IChmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5hdGl2ZURhdGVUb0lTT1N0cmluZy5jYWxsKG5ldyBEYXRlKC01ZTEzIC0gMSkpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xyXG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gIG5hdGl2ZURhdGVUb0lTT1N0cmluZy5jYWxsKG5ldyBEYXRlKE5hTikpO1xyXG59KSkgPyBmdW5jdGlvbiB0b0lTT1N0cmluZygpIHtcclxuICBpZiAoISRpc0Zpbml0ZSh0aGlzVGltZVZhbHVlKHRoaXMpKSkgdGhyb3cgJFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xyXG4gIHZhciBkYXRlID0gdGhpcztcclxuICB2YXIgeWVhciA9IGdldFVUQ0Z1bGxZZWFyKGRhdGUpO1xyXG4gIHZhciBtaWxsaXNlY29uZHMgPSBnZXRVVENNaWxsaXNlY29uZHMoZGF0ZSk7XHJcbiAgdmFyIHNpZ24gPSB5ZWFyIDwgMCA/ICctJyA6IHllYXIgPiA5OTk5ID8gJysnIDogJyc7XHJcbiAgcmV0dXJuIHNpZ24gKyBwYWRTdGFydChhYnMoeWVhciksIHNpZ24gPyA2IDogNCwgMCkgK1xyXG4gICAgJy0nICsgcGFkU3RhcnQoZ2V0VVRDTW9udGgoZGF0ZSkgKyAxLCAyLCAwKSArXHJcbiAgICAnLScgKyBwYWRTdGFydChnZXRVVENEYXRlKGRhdGUpLCAyLCAwKSArXHJcbiAgICAnVCcgKyBwYWRTdGFydChnZXRVVENIb3VycyhkYXRlKSwgMiwgMCkgK1xyXG4gICAgJzonICsgcGFkU3RhcnQoZ2V0VVRDTWludXRlcyhkYXRlKSwgMiwgMCkgK1xyXG4gICAgJzonICsgcGFkU3RhcnQoZ2V0VVRDU2Vjb25kcyhkYXRlKSwgMiwgMCkgK1xyXG4gICAgJy4nICsgcGFkU3RhcnQobWlsbGlzZWNvbmRzLCAzLCAwKSArXHJcbiAgICAnWic7XHJcbn0gOiBuYXRpdmVEYXRlVG9JU09TdHJpbmc7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcclxuXHJcbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcclxuXHJcbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XHJcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcclxuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKClcclxuICAgICAgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9PSBub25cclxuICAgICAgfHwgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciB0b0lTT1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kYXRlLXRvLWlzby1zdHJpbmcnKTtcclxuXHJcbi8vIGBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZ2AgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9pc29zdHJpbmdcclxuLy8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBoYXMgYSBicm9rZW4gaW1wbGVtZW50YXRpb25zXHJcbiQoeyB0YXJnZXQ6ICdEYXRlJywgcHJvdG86IHRydWUsIGZvcmNlZDogRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgIT09IHRvSVNPU3RyaW5nIH0sIHtcclxuICB0b0lTT1N0cmluZzogdG9JU09TdHJpbmdcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XHJcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xyXG5cclxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXHJcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xyXG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XHJcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsImF1dG9XaWR0aCIsImRlc3Ryb3kiLCJpc0Jvb3RzdHJhcDUiLCJib290c3RyYXAiLCJUb29sdGlwIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInRvb2x0aXAiLCJkZXRhaWxJbmRleCIsInJlc2V0RGV0YWlsRmllbGRzIiwiZWFjaCIsInRhZyIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImlkIiwiYXR0ciIsImh0bWwiLCJsZW5ndGgiLCJ2YWwiLCJyZW1vdmVBdHRyIiwib24iLCJnZXRWYWx1ZSIsIm5hbWUiLCJjb25jYXQiLCJ2ZWhpY3VsZSIsImNvbmR1Y3RldXIiLCJ0eXBlUHJlc3RhdGlvbiIsInpvbmUiLCJwcmVzdGF0aW9uIiwicXVhbnRpdGVJbnB1dCIsIm5iSm91cnNJbnB1dCIsInF1YW50aXRlIiwicGFyc2VJbnQiLCJuYkpvdXJzIiwiZGF0ZURlbWFuZGUiLCJuYlBlcnNvbm5lcyIsInRvYXN0ciIsImVycm9yIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJwcmVzdGF0aW9uSWQiLCJkYXRlIiwic3VjY2VzcyIsInRhcmlmIiwic2hvdyIsImFwcGVuZCIsInRleHQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiaGlkZSIsImZpbHRlclByZXN0YXRpb25zQWpheCIsInR5cGVTZWxlY3RvciIsInpvbmVTZWxlY3RvciIsInByZXN0YXRpb25TZWxlY3RvciIsInNlbGVjdGVkVHlwZSIsInNlbGVjdGVkWm9uZSIsInR5cGUiLCJvcHRpb25zIiwicCIsIm5vbSIsIm5vdyIsIkRhdGUiLCJmb3JtYXR0ZWQiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGVtYW5kZUlkIiwibm9tQmVuaWZpY2lhaXJlIiwiY2luIiwib2JzZXJ2YXRpb24iLCJkZXNjcmlwdGlvbiIsImNvbnRhY3QiLCJhZHJlc3NEZXBhcnQiLCJ0Ym9keSIsImVtcHR5IiwiZGV0YWlscyIsImQiLCJpIiwidmVoaWN1bGVJZCIsImNvbmR1Y3RldXJJZCIsInR5cGVQcmVzdGF0aW9uSWQiLCJ0eXBlX3ByZXN0YXRpb24iLCJ6b25lSWQiLCJuYl9qb3VycyIsImtpbG9tZXRyYWdlIiwiaXNLaWxvbWV0cmFnZSIsIm1vZGFsIiwidG9nZ2xlS2lsb21ldHJhZ2VGaWVsZCIsIiRyb3ciLCJkZXRhaWxJZCIsImZpbmQiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXIiLCJkYXRhVHlwZSIsInJlc3BvbnNlIiwieGhyIiwic3RhdHVzIiwid2FybiIsIiRtb2RhbCIsInZlaGljdWxlVGV4dCIsImNvbmR1Y3RldXJUZXh0IiwiZGF0YVRvU2VuZCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicm93IiwicHVzaCIsImNvbnRlbnRUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImRhdGFzZXQiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsInNldFRpbWVvdXQiLCJib2R5Iiwic3RhdHV0IiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInJlc3VsdCIsImlzQ29uZmlybWVkIl0sInNvdXJjZVJvb3QiOiIifQ==