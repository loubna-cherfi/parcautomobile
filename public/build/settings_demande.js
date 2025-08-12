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

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
$(document).ready(function () {
  var globalActions = [];
  $('#demandeTable').DataTable({
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate('app_fetch_demandes'),
      type: 'GET',
      dataSrc: function dataSrc(json) {
        // Store actions globally for dynamic rendering
        window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
        return json.data;
      }
    },
    columns: [{
      data: 'id',
      name: 'd.id'
    }, {
      data: 'dossier',
      name: 'e.nomDossier',
      render: function render(data, type, row) {
        if (data) {
          if (data.length > 4) {
            return "<span data-bs-toggle=\"tooltip\" title=\"".concat(data, "\">").concat(data.substring(0, 4), "...</span>");
          } else {
            return data;
          }
        } else {
          return "<span class=\"text-danger\">Aucun dossier</span>";
        }
      }
    }, {
      data: 'date_demande',
      name: 'd.date_demande'
    }, {
      data: 'nom_benificiaire',
      name: 'd.nom_benificiaire'
    }, {
      data: 'contact',
      name: 'd.contact'
    }, {
      data: 'cin',
      name: 'd.cin'
    }, {
      data: 'nb_personnes',
      name: 'd.nb_personnes'
    }, {
      data: 'adressdepart',
      name: 'd.adressdepart'
    }, {
      data: 'tarif_total',
      name: 'd.tarif_total'
    }, {
      data: 'description',
      name: 'd.description'
    }, {
      data: 'observation',
      name: 'd.observation'
    }, {
      data: 'statut',
      name: 's.libelle',
      render: function render(data, type, row) {
        return "<span style=\"color: #7593ae; text-align: center; font-size: 10px; display: block;\">".concat(data, "</span>");
      }
    }, {
      data: null,
      name: 'actions',
      orderable: false,
      searchable: false,
      render: function render(data, type, full) {
        // console.log('Full row data:', full);
        // console.log('Global actions:', window.globalActions);
        var actionsHtml = "<div class=\"dropdown\">\n        <i class=\"menuActions fa-solid fa-ellipsis-vertical\" id=\"".concat(full.id, "\"></i>\n        <div class=\"dropdown-menu dropdown-content divMenu\" id=\"divMenu").concat(full.id, "\">");
        if (Array.isArray(window.globalActions)) {
          window.globalActions.forEach(function (action) {
            //  console.log('Checking action:', action.nom, 'for statutId:', full.statutId);

            var statutId = full.statutId;
            var shouldRender = false;
            switch (action.nom) {
              case 'DETAILLE':
                shouldRender = true;
                break;
              case 'TRAITER':
                shouldRender = statutId === 1;
                break;
              case 'VALIDER':
              case 'ANNULER':
                shouldRender = statutId === 2;
                break;
              case 'EXCUTER':
                shouldRender = statutId === 7;
                break;
            }
            // console.log(`Action ${action.nom} shouldRender:`, shouldRender);
            if (shouldRender) {
              actionsHtml += "\n            <button data-id=\"".concat(full.id, "\" class=\"").concat(action.className, " dropdown-item d-flex align-items-end\">\n              <i class=\"").concat(action.icon, " menuIcon\"></i> ").concat(action.nom, "\n            </button>");
            }
          });
        }
        actionsHtml += '</div></div>';
        return actionsHtml;
      }
    }],
    language: datatablesFrench
  });
  var isBootstrap5 = typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined';
  if (isBootstrap5) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
      return new bootstrap.Tooltip(el);
    });
  } else {
    $('[data-toggle="tooltip"]').tooltip();
  }
  $(document).on('click', '.buttonDetailleDemande', function () {
    var demandeId = $(this).data('id');
    if (demandeId) {
      var modalId = '#detailDemandeModal' + demandeId;
      $(modalId).modal('show');
    }
  });
  var detailIndex = 0;
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
          console.log('Détails reçus:', data.details);
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
            tbody.append("\n          <tr>\n                  <td>".concat(d.id, "</td>\n                    <td class=\"vehicule\" data-vehicule-id=\"").concat(d.vehiculeId, "\">").concat(d.vehicule, "</td>\n                    <td class=\"conducteur\" data-conducteur-id=\"").concat(d.conducteurId, "\">").concat(d.conducteur, "</td>\n                    <td class=\"type_prestation\" data-type-id=\"").concat(d.typePrestationId, "\">").concat(d.type_prestation, "</td>\n                    <td class=\"zone\" data-zone-id=\"").concat(d.zoneId, "\">").concat(d.zone, "</td>\n                    <td class=\"prestation\" data-prestation-id=\"").concat(d.prestationId, "\">").concat(d.prestation, "</td>\n                    <td class=\"quantite\">").concat(d.quantite, "</td>\n                    <td class=\"nb_jours\">").concat(d.nb_jours, "</td>\n                    <td class=\"tarif\">").concat(d.tarif, "</td>\n                    <td class=\"kilometrage\">").concat(d.kilometrage || 0, "</td>\n                    <td class=\"jawaz\">").concat(d.jawaz || 0, "</td>\n                    <td class=\"carburant\">").concat(d.carburant || 0, "</td>\n                   \n                   \n\n            \n                      <td>\n                      <div class=\"dropdown\">\n                        <button class=\"btn btn-sm\" type=\"button\" id=\"dropdownMenuButton").concat(d.id, "\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 30px; height: 30px; padding: 0;\">\n                          <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton").concat(d.id, "\">\n                         <button type=\"button\" class=\"dropdown-item btnModifierDetail\" data-id=\"").concat(d.id, "\" data-iskilometrage=\"").concat(d.isKilometrage || 0, "\">\n                          <i class=\"fa-solid fa-pen-to-square\"></i> Modifier\n                        </button>\n\n                        </div>\n                      </div>\n                    </td>\n          </tr>\n        "));
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
            $('#kilometrageGroup').show();
          } else {
            $('#edit-iskilometrage').val(0);
            $('#kilometrageGroup').hide();
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
    var carburant = parseFloat($('input[name="details[0][carburant]"]').val()) || 0;
    var jawaz = parseFloat($('input[name="details[0][jawaz]"]').val()) || 0;
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
      nbPersonnes: nbPersonnes,
      carburant: carburant,
      jawaz: jawaz
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
        $row.find('.jawaz').text(jawaz.toFixed(2));
        $row.find('.carburant').text(carburant.toFixed(2));
        $modal.modal('hide');
      },
      error: function error() {
        toastr.error('Erreur lors du recalcul du tarif.');
      }
    });
  });
  $('#btn-traiter-enregistrer').on('click', function () {
    var dateDemande = $('#traiter-date').val();
    var id = $('#traiter-id').val();
    var details = [];
    $('#traiter-details-table tbody tr').each(function () {
      var row = $(this);
      var detailId = row.find('.btnModifierDetail').data('id');
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
        kilometrage: row.find('td.kilometrage').text().trim(),
        carburant: parseFloat(row.find('td.carburant').text()),
        jawaz: parseFloat(row.find('td.jawaz').text())
      });
    });
    var dataToSend = {
      id: id,
      dateDemande: dateDemande,
      details: details
    };
    $.ajax({
      url: '/demande/traiter/enregistrer',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(dataToSend),
      success: function success(res) {
        toastr.success(res.message);
        location.reload();
      },
      error: function error() {
        toastr.error("Erreur lors de l'enregistrement du traitement.");
      }
    });
  });
  $('#demandeTable').on('click', '.btnValiderDemande', function () {
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
  $('#demandeTable').on('click', '.btnAnnulerDemande', function () {
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
            setTimeout(function () {
              return location.reload();
            }, 1000);
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
module.exports = JSON.parse('{"base_url":"","routes":{"app_fetch_conducteurs":{"tokens":[["text","/conducteur/fetch-conducteurs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_fetch_demandes":{"tokens":[["text","/demande/fetch-demandes"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_fetch_missions":{"tokens":[["text","/mission/fetch-missions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_list":{"tokens":[["text","/setting/module/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_add":{"tokens":[["text","/setting/module/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_toggle_active":{"tokens":[["variable","/","[^/]++","module",true],["text","/setting/module/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_list":{"tokens":[["text","/setting/sousmodule/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_add":{"tokens":[["text","/setting/sousmodule/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_toggle_active":{"tokens":[["variable","/","[^/]++","sousmodule",true],["text","/setting/sousmodule/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_assign_convention":{"tokens":[["text","/user/assign-convention"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_assign_caisse":{"tokens":[["text","/user/assign-caisse"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_duplicate_user":{"tokens":[["text","/user/duplicate-user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_fetch_vehicules":{"tokens":[["text","/vehicule/fetch-vehicules"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-array_js-n-687a39","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-ca4b17","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_i-4ba9b1","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-3d97c7","vendors-node_modules_core-js_internals_string-pad_js-node_modules_core-js_modules_es_array_fi-9d7206"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/demande.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q04sQ0FBQyxDQUFDO0FBS0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2pyQlc7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxlQUFlLDRHQUF3QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7O0FDeENXO0FBQ2IsMkJBQTJCLG1IQUE0QztBQUN2RSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDZmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLCtGQUFpQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUZBQWlGO0FBQ3JGO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksNkdBQXdDO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUF1RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2V0dGluZ3MvZGVtYW5kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGF0ZS10by1pc28tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLWlzby1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGluZyBmcm9tIFwiZm9zLXJvdXRlclwiO2ltcG9ydCByb3V0ZXMgZnJvbSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXFBBUkNBVVRPXFxcXHZhclxcXFxjYWNoZVxcXFxmb3NSb3V0ZXMuanNvblwiO1JvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZ2xvYmFsQWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICQoJyNkZW1hbmRlVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSwgICBcclxuICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2ZldGNoX2RlbWFuZGVzJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBkYXRhU3JjOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgYWN0aW9ucyBnbG9iYWxseSBmb3IgZHluYW1pYyByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zID0gQXJyYXkuaXNBcnJheShqc29uLmFjdGlvbnMpID8ganNvbi5hY3Rpb25zIDogT2JqZWN0LnZhbHVlcyhqc29uLmFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuXHJcbiAgICAgICBcclxuICAgICAgICAgICAgeyBkYXRhOiAnaWQnLCBuYW1lOiAnZC5pZCcgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogJ2Rvc3NpZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Uubm9tRG9zc2llcicsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIke2RhdGF9XCI+JHtkYXRhLnN1YnN0cmluZygwLCA0KX0uLi48L3NwYW4+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+QXVjdW4gZG9zc2llcjwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAnZGF0ZV9kZW1hbmRlJywgbmFtZTogJ2QuZGF0ZV9kZW1hbmRlJyB9LFxyXG4gICAgICAgICAgICB7IGRhdGE6ICdub21fYmVuaWZpY2lhaXJlJywgbmFtZTogJ2Qubm9tX2JlbmlmaWNpYWlyZScgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAnY29udGFjdCcsIG5hbWU6ICdkLmNvbnRhY3QnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ2NpbicsIG5hbWU6ICdkLmNpbicgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAnbmJfcGVyc29ubmVzJywgbmFtZTogJ2QubmJfcGVyc29ubmVzJyB9LFxyXG4gICAgICAgICAgICB7IGRhdGE6ICdhZHJlc3NkZXBhcnQnLCBuYW1lOiAnZC5hZHJlc3NkZXBhcnQnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ3RhcmlmX3RvdGFsJywgbmFtZTogJ2QudGFyaWZfdG90YWwnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ2Rlc2NyaXB0aW9uJywgbmFtZTogJ2QuZGVzY3JpcHRpb24nIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ29ic2VydmF0aW9uJywgbmFtZTogJ2Qub2JzZXJ2YXRpb24nIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdzdGF0dXQnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3MubGliZWxsZScsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzc1OTNhZTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEwcHg7IGRpc3BsYXk6IGJsb2NrO1wiPiR7ZGF0YX08L3NwYW4+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgeyBkYXRhOiBudWxsLCBuYW1lOiAnYWN0aW9ucycsIG9yZGVyYWJsZTogZmFsc2UsIHNlYXJjaGFibGU6IGZhbHNlLCByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdGdWxsIHJvdyBkYXRhOicsIGZ1bGwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0dsb2JhbCBhY3Rpb25zOicsIHdpbmRvdy5nbG9iYWxBY3Rpb25zKTtcclxuICAgIHZhciBhY3Rpb25zSHRtbCA9IGA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICA8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCIke2Z1bGwuaWR9XCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLWNvbnRlbnQgZGl2TWVudVwiIGlkPVwiZGl2TWVudSR7ZnVsbC5pZH1cIj5gO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5nbG9iYWxBY3Rpb25zKSkge1xyXG4gICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ0NoZWNraW5nIGFjdGlvbjonLCBhY3Rpb24ubm9tLCAnZm9yIHN0YXR1dElkOicsIGZ1bGwuc3RhdHV0SWQpO1xyXG4gICBcclxuICAgICAgICBsZXQgc3RhdHV0SWQgPSBmdWxsLnN0YXR1dElkOyBcclxuXHJcbiAgICAgICAgbGV0IHNob3VsZFJlbmRlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi5ub20pIHtcclxuICAgICAgICAgIGNhc2UgJ0RFVEFJTExFJzpcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdUUkFJVEVSJzpcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gKHN0YXR1dElkID09PSAxKTsgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnVkFMSURFUic6XHJcbiAgICAgICAgICBjYXNlICdBTk5VTEVSJzpcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gKHN0YXR1dElkID09PSAyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdFWENVVEVSJzpcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gKHN0YXR1dElkID09PSA3KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4vLyBjb25zb2xlLmxvZyhgQWN0aW9uICR7YWN0aW9uLm5vbX0gc2hvdWxkUmVuZGVyOmAsIHNob3VsZFJlbmRlcik7XHJcbiAgICAgICAgaWYgKHNob3VsZFJlbmRlcikge1xyXG4gICAgICAgICAgYWN0aW9uc0h0bWwgKz0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCIke2Z1bGwuaWR9XCIgY2xhc3M9XCIke2FjdGlvbi5jbGFzc05hbWV9IGRyb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHthY3Rpb24uaWNvbn0gbWVudUljb25cIj48L2k+ICR7YWN0aW9uLm5vbX1cclxuICAgICAgICAgICAgPC9idXR0b24+YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25zSHRtbCArPSAnPC9kaXY+PC9kaXY+JztcclxuICAgIHJldHVybiBhY3Rpb25zSHRtbDtcclxuICB9XHJcbn1cclxuXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaFxyXG4gICAgfSk7XHJcblxyXG4gICBcclxuICBjb25zdCBpc0Jvb3RzdHJhcDUgPSB0eXBlb2YgYm9vdHN0cmFwICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYm9vdHN0cmFwLlRvb2x0aXAgIT09ICd1bmRlZmluZWQnO1xyXG4gIGlmIChpc0Jvb3RzdHJhcDUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS5mb3JFYWNoKGVsID0+IG5ldyBib290c3RyYXAuVG9vbHRpcChlbCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG4gIH1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnV0dG9uRGV0YWlsbGVEZW1hbmRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkZW1hbmRlSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICBpZiAoZGVtYW5kZUlkKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxJZCA9ICcjZGV0YWlsRGVtYW5kZU1vZGFsJyArIGRlbWFuZGVJZDtcclxuICAgICAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuICBsZXQgZGV0YWlsSW5kZXggPSAwO1xyXG5cclxuICBcclxuICBmdW5jdGlvbiByZXNldERldGFpbEZpZWxkcygpIHtcclxuICAgICQoJyN6b25lLWRldGFpbCBzZWxlY3QsICN6b25lLWRldGFpbCBpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBlbCA9ICQodGhpcyk7XHJcbiAgICAgIGNvbnN0IHRhZyA9IGVsLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAodGFnID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZWwuYXR0cignaWQnKTtcclxuICAgICAgICBpZiAoaWQgPT09ICdhZGQtcHJlc3RhdGlvbi0wJykge1xyXG4gICAgICAgICAgZWwuaHRtbCgnPG9wdGlvbiB2YWx1ZT1cIlwiPlByZXN0YXRpb248L29wdGlvbj4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlkICYmICQoJyN0ZW1wbGF0ZXMgIycgKyBpZCArICctdGVtcGxhdGUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGVsLmh0bWwoJCgnI3RlbXBsYXRlcyAjJyArIGlkICsgJy10ZW1wbGF0ZScpLmh0bWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsLnZhbCgnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwudmFsKCcnKTtcclxuICAgICAgfVxyXG4gICAgICBlbC5yZW1vdmVBdHRyKCduYW1lJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyBJbml0aWFsaXNhdGlvbiBEYXRhVGFibGVcclxuICAkKCcjZGVtYW5kZVRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtbMTUsIDI1LCA1MCwgLTFdLCBbMTUsIDI1LCA1MCwgJ0FMTCddXSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgICBkZXN0cm95OiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIC8vVG9vbHRpcHMgcG91ciBCb290c3RyYXAgNCBvdSA1XHJcbiAgY29uc3QgaXNCb290c3RyYXA1ID0gdHlwZW9mIGJvb3RzdHJhcCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJvb3RzdHJhcC5Ub29sdGlwICE9PSAndW5kZWZpbmVkJztcclxuICBpZiAoaXNCb290c3RyYXA1KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykuZm9yRWFjaChlbCA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAoZWwpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxuICB9XHJcblxyXG4gIGxldCBkZXRhaWxJbmRleCA9IDA7XHJcblxyXG4gIC8vIFLDqWluaXRpYWxpc2VyIGxlcyBjaGFtcHMgZHUgZm9ybXVsYWlyZSBhcHLDqHMgYWpvdXQgZCd1biBkw6l0YWlsXHJcbiAgZnVuY3Rpb24gcmVzZXREZXRhaWxGaWVsZHMoKSB7XHJcbiAgICAkKCcjem9uZS1kZXRhaWwgc2VsZWN0LCAjem9uZS1kZXRhaWwgaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZWwgPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCB0YWcgPSBlbC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKHRhZyA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGVsLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYgKGlkID09PSAnYWRkLXByZXN0YXRpb24tMCcpIHtcclxuICAgICAgICAgIGVsLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5QcmVzdGF0aW9uPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpZCAmJiAkKCcjdGVtcGxhdGVzICMnICsgaWQgKyAnLXRlbXBsYXRlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICBlbC5odG1sKCQoJyN0ZW1wbGF0ZXMgIycgKyBpZCArICctdGVtcGxhdGUnKS5odG1sKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbC52YWwoJycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLnZhbCgnJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWwucmVtb3ZlQXR0cignbmFtZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBBam91dGVyIHVuIG5vdXZlYXUgZMOpdGFpbFxyXG4gICQoJyNhZGQtZGV0YWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBuYW1lID0+ICQoYHNlbGVjdFtuYW1lPVwiZGV0YWlsc1swXVske25hbWV9XVwiXSBvcHRpb246c2VsZWN0ZWRgKTtcclxuICAgIGNvbnN0IHZlaGljdWxlID0gZ2V0VmFsdWUoJ3ZlaGljdWxlJyk7XHJcbiAgICBjb25zdCBjb25kdWN0ZXVyID0gZ2V0VmFsdWUoJ2NvbmR1Y3RldXInKTtcclxuICAgIGNvbnN0IHR5cGVQcmVzdGF0aW9uID0gZ2V0VmFsdWUoJ3R5cGVfcHJlc3RhdGlvbicpO1xyXG4gICAgY29uc3Qgem9uZSA9IGdldFZhbHVlKCd6b25lJyk7XHJcbiAgICBjb25zdCBwcmVzdGF0aW9uID0gZ2V0VmFsdWUoJ3ByZXN0YXRpb24nKTtcclxuICAgIGNvbnN0IHF1YW50aXRlSW5wdXQgPSAkKCdpbnB1dFtuYW1lPVwiZGV0YWlsc1swXVtxdWFudGl0ZV1cIl0nKTtcclxuICAgIGNvbnN0IG5iSm91cnNJbnB1dCA9ICQoJ2lucHV0W25hbWU9XCJkZXRhaWxzWzBdW25iX2pvdXJzXVwiXScpO1xyXG5cclxuICAgIGNvbnN0IHF1YW50aXRlID0gcGFyc2VJbnQocXVhbnRpdGVJbnB1dC52YWwoKSkgfHwgMDtcclxuICAgIGNvbnN0IG5iSm91cnMgPSBwYXJzZUludChuYkpvdXJzSW5wdXQudmFsKCkpIHx8IDA7XHJcbiAgICBjb25zdCBkYXRlRGVtYW5kZSA9ICQoJ2lucHV0W25hbWU9XCJkYXRlRGVtYW5kZVwiXScpLnZhbCgpO1xyXG4gICAgY29uc3QgbmJQZXJzb25uZXMgPSBwYXJzZUludCgkKCcjbmJQZXJzb25uZXNJbnB1dCcpLnZhbCgpKSB8fCAxO1xyXG5cclxuICAgIGlmICghdmVoaWN1bGUudmFsKCkgfHwgIWNvbmR1Y3RldXIudmFsKCkgfHwgIXR5cGVQcmVzdGF0aW9uLnZhbCgpIHx8ICF6b25lLnZhbCgpIHx8ICFwcmVzdGF0aW9uLnZhbCgpIHx8IHF1YW50aXRlIDw9IDAgfHwgbmJKb3VycyA8PSAwKSB7XHJcbiAgICAgICB0b2FzdHIuZXJyb3IoJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIGR1IGTDqXRhaWwgYXZlYyBkZXMgdmFsZXVycyB2YWxpZGVzLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL2RlbWFuZGUvYWpheC90YXJpZicsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwcmVzdGF0aW9uSWQ6IHByZXN0YXRpb24udmFsKCksXHJcbiAgICAgICAgZGF0ZTogZGF0ZURlbWFuZGUsXHJcbiAgICAgICAgcXVhbnRpdGU6IHF1YW50aXRlLFxyXG4gICAgICAgIG5iSm91cnM6IG5iSm91cnMsXHJcbiAgICAgICAgIG5iUGVyc29ubmVzOiBuYlBlcnNvbm5lcyBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHRhcmlmKSB7XHJcbiAgICAgICAgJCgnI3RhYmxlLWRldGFpbHMtY29udGFpbmVyJykuc2hvdygpO1xyXG5cclxuICAkKCcjdGFibGUtZGV0YWlscyB0Ym9keScpLmFwcGVuZChgXHJcbiAgPHRyIGRhdGEtaW5kZXg9XCIke2RldGFpbEluZGV4fVwiPlxyXG4gICAgPHRkPiR7ZGV0YWlsSW5kZXggKyAxfTwvdGQ+XHJcbiAgICA8dGQ+JHt2ZWhpY3VsZS50ZXh0KCl9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGV0YWlsc1ske2RldGFpbEluZGV4fV1bdmVoaWN1bGVdXCIgdmFsdWU9XCIke3ZlaGljdWxlLnZhbCgpfVwiPjwvdGQ+XHJcbiAgICA8dGQ+JHtjb25kdWN0ZXVyLnRleHQoKX08aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkZXRhaWxzWyR7ZGV0YWlsSW5kZXh9XVtjb25kdWN0ZXVyXVwiIHZhbHVlPVwiJHtjb25kdWN0ZXVyLnZhbCgpfVwiPjwvdGQ+XHJcbiAgICA8dGQ+JHt0eXBlUHJlc3RhdGlvbi50ZXh0KCl9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGV0YWlsc1ske2RldGFpbEluZGV4fV1bdHlwZV9wcmVzdGF0aW9uXVwiIHZhbHVlPVwiJHt0eXBlUHJlc3RhdGlvbi52YWwoKX1cIj48L3RkPlxyXG4gICAgPHRkPiR7em9uZS50ZXh0KCl9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGV0YWlsc1ske2RldGFpbEluZGV4fV1bem9uZV1cIiB2YWx1ZT1cIiR7em9uZS52YWwoKX1cIj48L3RkPlxyXG4gICAgPHRkPiR7cHJlc3RhdGlvbi50ZXh0KCl9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGV0YWlsc1ske2RldGFpbEluZGV4fV1bcHJlc3RhdGlvbl1cIiB2YWx1ZT1cIiR7cHJlc3RhdGlvbi52YWwoKX1cIj48L3RkPlxyXG4gICAgPHRkPiR7cXVhbnRpdGV9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGV0YWlsc1ske2RldGFpbEluZGV4fV1bcXVhbnRpdGVdXCIgdmFsdWU9XCIke3F1YW50aXRlfVwiPjwvdGQ+XHJcbiAgICA8dGQ+JHtuYkpvdXJzfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRldGFpbHNbJHtkZXRhaWxJbmRleH1dW25iX2pvdXJzXVwiIHZhbHVlPVwiJHtuYkpvdXJzfVwiPjwvdGQ+XHJcbiAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuUmVtb3ZlRGV0YWlsXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+PC90ZD5cclxuICA8L3RyPlxyXG5gKTtcclxuO1xyXG5cclxuICAgICAgICBkZXRhaWxJbmRleCsrO1xyXG4gICAgICAgIHJlc2V0RGV0YWlsRmllbGRzKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjYWxjdWwgZHUgdGFyaWYuJyk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gU3VwcHJpbWVyIHVuIGTDqXRhaWxcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0blJlbW92ZURldGFpbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAoJCgnI3RhYmxlLWRldGFpbHMgdGJvZHkgdHInKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgJCgnI3RhYmxlLWRldGFpbHMtY29udGFpbmVyJykuaGlkZSgpO1xyXG4gICAgICBkZXRhaWxJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgfSk7ICAgXHJcblxyXG4gIC8vIENoYXJnZXIgbGVzIHByZXN0YXRpb25zIGR5bmFtaXF1ZW1lbnRcclxuICBmdW5jdGlvbiBmaWx0ZXJQcmVzdGF0aW9uc0FqYXgodHlwZVNlbGVjdG9yLCB6b25lU2VsZWN0b3IsIHByZXN0YXRpb25TZWxlY3Rvcikge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gJCh0eXBlU2VsZWN0b3IpLnZhbCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRab25lID0gJCh6b25lU2VsZWN0b3IpLnZhbCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRUeXBlIHx8ICFzZWxlY3RlZFpvbmUpIHtcclxuICAgICAgJChwcmVzdGF0aW9uU2VsZWN0b3IpLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuZSBwcmVzdGF0aW9uPC9vcHRpb24+Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvZGVtYW5kZS9hamF4L3ByZXN0YXRpb25zJyxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgZGF0YTogeyB0eXBlOiBzZWxlY3RlZFR5cGUsIHpvbmU6IHNlbGVjdGVkWm9uZSB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuZSBwcmVzdGF0aW9uPC9vcHRpb24+JztcclxuICAgICAgICBkYXRhLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwLmlkfVwiPiR7cC5ub219PC9vcHRpb24+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHByZXN0YXRpb25TZWxlY3RvcikuaHRtbChvcHRpb25zKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHByZXN0YXRpb25TZWxlY3RvcikuaHRtbCgnPG9wdGlvbiB2YWx1ZT1cIlwiPkVycmV1ciBkZSBjaGFyZ2VtZW50PC9vcHRpb24+Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJCgnI2FkZC10eXBlLXByZXN0YXRpb24sICNhZGQtem9uZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaWx0ZXJQcmVzdGF0aW9uc0FqYXgoJyNhZGQtdHlwZS1wcmVzdGF0aW9uJywgJyNhZGQtem9uZScsICcjYWRkLXByZXN0YXRpb24tMCcpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBSZW1wbGlyIGxhIGRhdGUgYWN0dWVsbGUgYXV0b21hdGlxdWVtZW50IMOgIGwnb3V2ZXJ0dXJlIGR1IG1vZGFsXHJcbiAgJCgnI2FkZERlbWFuZGUnKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVkID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTYpO1xyXG4gICAgJCgnaW5wdXRbbmFtZT1cImRhdGVEZW1hbmRlXCJdJykudmFsKGZvcm1hdHRlZCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEVtcMOqY2hlciBsYSBzb3VtaXNzaW9uIHNhbnMgZMOpdGFpbHNcclxuICAkKCcjZm9ybUFkZERlbWFuZGUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKCcjdGFibGUtZGV0YWlscyB0Ym9keSB0cicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgIFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignVmV1aWxsZXogYWpvdXRlciBhdSBtb2lucyB1biBkw6l0YWlsIGF2YW50IGRlIHNvdW1ldHRyZS4nKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuVHJhaXRlckRlbWFuZGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBkZW1hbmRlSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL2RlbWFuZGUvYWpheC9nZXQvJyArIGRlbWFuZGVJZCxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRMOpdGFpbHMgcmXDp3VzOicsIGRhdGEuZGV0YWlscyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1LDqXBvbnNlIEFKQVggL2RlbWFuZGUvYWpheC9nZXQvOicsIGRhdGEpO1xyXG4gICAgICAgIC8vIFJlbXBsaXIgaW5mb3MgZ8OpbsOpcmFsZXNcclxuICAgICAgICAkKCcjdHJhaXRlci1pZCcpLnZhbChkYXRhLmlkKTtcclxuICAgICAgICAkKCcjdHJhaXRlci1ub20nKS52YWwoZGF0YS5ub21CZW5pZmljaWFpcmUpO1xyXG4gICAgICAgICQoJyN0cmFpdGVyLWNpbicpLnZhbChkYXRhLmNpbik7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItb2JzZXJ2YXRpb24nKS52YWwoZGF0YS5vYnNlcnZhdGlvbik7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItZGVzY3JpcHRpb24nKS52YWwoZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItY29udGFjdCcpLnZhbChkYXRhLmNvbnRhY3QpO1xyXG4gICAgICAgICQoJyN0cmFpdGVyLW5iUGVyc29ubmVzJykudmFsKGRhdGEubmJQZXJzb25uZXMpO1xyXG4gICAgICAgICQoJyN0cmFpdGVyLWRhdGUnKS52YWwoZGF0YS5kYXRlRGVtYW5kZSk7XHJcbiAgICAgICAgJCgnI3RyYWl0ZXItYWRyZXNzZScpLnZhbChkYXRhLmFkcmVzc0RlcGFydCk7XHJcblxyXG4gICAgICAgIC8vIFJlbXBsaXIgbGUgdGFibGVhdSBkZXMgZMOpdGFpbHNcclxuICAgICAgICBjb25zdCB0Ym9keSA9ICQoJyN0cmFpdGVyLWRldGFpbHMtdGFibGUgdGJvZHknKTtcclxuICAgICAgICB0Ym9keS5lbXB0eSgpO1xyXG5cclxuICAgICAgICBkYXRhLmRldGFpbHMuZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZChgXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4ke2QuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2ZWhpY3VsZVwiIGRhdGEtdmVoaWN1bGUtaWQ9XCIke2QudmVoaWN1bGVJZH1cIj4ke2QudmVoaWN1bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb25kdWN0ZXVyXCIgZGF0YS1jb25kdWN0ZXVyLWlkPVwiJHtkLmNvbmR1Y3RldXJJZH1cIj4ke2QuY29uZHVjdGV1cn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInR5cGVfcHJlc3RhdGlvblwiIGRhdGEtdHlwZS1pZD1cIiR7ZC50eXBlUHJlc3RhdGlvbklkfVwiPiR7ZC50eXBlX3ByZXN0YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ6b25lXCIgZGF0YS16b25lLWlkPVwiJHtkLnpvbmVJZH1cIj4ke2Quem9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInByZXN0YXRpb25cIiBkYXRhLXByZXN0YXRpb24taWQ9XCIke2QucHJlc3RhdGlvbklkfVwiPiR7ZC5wcmVzdGF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicXVhbnRpdGVcIj4ke2QucXVhbnRpdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJuYl9qb3Vyc1wiPiR7ZC5uYl9qb3Vyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhcmlmXCI+JHtkLnRhcmlmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwia2lsb21ldHJhZ2VcIj4ke2Qua2lsb21ldHJhZ2UgfHwgMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImphd2F6XCI+JHtkLmphd2F6ICB8fCAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2FyYnVyYW50XCI+JHtkLmNhcmJ1cmFudCB8fCAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc21cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b24ke2QuaWR9XCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgc3R5bGU9XCJ3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4OyBwYWRkaW5nOiAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uJHtkLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJ0bk1vZGlmaWVyRGV0YWlsXCIgZGF0YS1pZD1cIiR7ZC5pZH1cIiBkYXRhLWlza2lsb21ldHJhZ2U9XCIke2QuaXNLaWxvbWV0cmFnZSB8fCAwfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT4gTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIGApO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgICAgICAgJCgnI3RyYWl0ZXJEZW1hbmRlJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGUgbGEgZGVtYW5kZS4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4gIC8vIHByZXN0YXRpb25zIGR5bmFtaXF1ZW1lbnRcclxuICBmdW5jdGlvbiBmaWx0ZXJQcmVzdGF0aW9uc0FqYXgodHlwZVNlbGVjdG9yLCB6b25lU2VsZWN0b3IsIHByZXN0YXRpb25TZWxlY3Rvcikge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gJCh0eXBlU2VsZWN0b3IpLnZhbCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRab25lID0gJCh6b25lU2VsZWN0b3IpLnZhbCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRUeXBlIHx8ICFzZWxlY3RlZFpvbmUpIHtcclxuICAgICAgJChwcmVzdGF0aW9uU2VsZWN0b3IpLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuZSBwcmVzdGF0aW9uPC9vcHRpb24+Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvZGVtYW5kZS9hamF4L3ByZXN0YXRpb25zJyxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgZGF0YTogeyB0eXBlOiBzZWxlY3RlZFR5cGUsIHpvbmU6IHNlbGVjdGVkWm9uZSB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuZSBwcmVzdGF0aW9uPC9vcHRpb24+JztcclxuICAgICAgICBkYXRhLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwLmlkfVwiPiR7cC5ub219PC9vcHRpb24+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHByZXN0YXRpb25TZWxlY3RvcikuaHRtbChvcHRpb25zKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHByZXN0YXRpb25TZWxlY3RvcikuaHRtbCgnPG9wdGlvbiB2YWx1ZT1cIlwiPkVycmV1ciBkZSBjaGFyZ2VtZW50PC9vcHRpb24+Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJCgnI2FkZC10eXBlLXByZXN0YXRpb24sICNhZGQtem9uZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaWx0ZXJQcmVzdGF0aW9uc0FqYXgoJyNhZGQtdHlwZS1wcmVzdGF0aW9uJywgJyNhZGQtem9uZScsICcjYWRkLXByZXN0YXRpb24tMCcpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkYXRlIGFjdHVlbGxlIGF1dG9tYXRpcXVlbWVudFxyXG4gICQoJyNhZGREZW1hbmRlJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZCA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJkYXRlRGVtYW5kZVwiXScpLnZhbChmb3JtYXR0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBzb3VtaXNzaW9uIHNhbnMgZMOpdGFpbHNcclxuICAkKCcjZm9ybUFkZERlbWFuZGUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKCcjdGFibGUtZGV0YWlscyB0Ym9keSB0cicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgdG9hc3RyLmVycm9yKCdWZXVpbGxleiBham91dGVyIGF1IG1vaW5zIHVuIGTDqXRhaWwgYXZhbnQgZGUgc291bWV0dHJlLicpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbmZ1bmN0aW9uIHRvZ2dsZUtpbG9tZXRyYWdlRmllbGQoKSB7XHJcbiAgY29uc3QgaXNLaWxvbWV0cmFnZSA9ICQoJyNlZGl0LWlza2lsb21ldHJhZ2UnKS52YWwoKTtcclxuXHJcbiAgaWYgKGlzS2lsb21ldHJhZ2UgPT0gMSB8fCBpc0tpbG9tZXRyYWdlID09PSAnMScpIHtcclxuICAgICQoJyNlZGl0LWtpbG9tZXRyYWdlJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5zaG93KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNlZGl0LWtpbG9tZXRyYWdlJykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5oaWRlKCk7XHJcbiAgICAkKCcjZWRpdC1raWxvbWV0cmFnZScpLnZhbCgnJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gUXVhbmQgb24gY2xpcXVlIHN1ciBNb2RpZmllciBkYW5zIGxhIGxpc3RlIGRlcyBkw6l0YWlsc1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bk1vZGlmaWVyRGV0YWlsJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0ICRyb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7ICAvLyBMYSBsaWduZSBkdSB0YWJsZWF1XHJcblxyXG4gIC8vIFLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBkZXB1aXMgbGVzIGNlbGx1bGVzIGV0IGF0dHJpYnV0cyBkYXRhLSpcclxuICBjb25zdCBkZXRhaWxJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICBjb25zdCBpc0tpbG9tZXRyYWdlID0gJCh0aGlzKS5kYXRhKCdpc2tpbG9tZXRyYWdlJykgfHwgMDtcclxuICBjb25zdCB2ZWhpY3VsZUlkID0gJHJvdy5maW5kKCd0ZC52ZWhpY3VsZScpLmRhdGEoJ3ZlaGljdWxlLWlkJyk7XHJcbiAgY29uc3QgY29uZHVjdGV1cklkID0gJHJvdy5maW5kKCd0ZC5jb25kdWN0ZXVyJykuZGF0YSgnY29uZHVjdGV1ci1pZCcpO1xyXG4gIGNvbnN0IHR5cGVQcmVzdGF0aW9uID0gJHJvdy5maW5kKCd0ZC50eXBlX3ByZXN0YXRpb24nKS50ZXh0KCkudHJpbSgpO1xyXG4gIGNvbnN0IHpvbmUgPSAkcm93LmZpbmQoJ3RkLnpvbmUnKS50ZXh0KCkudHJpbSgpO1xyXG4gIGNvbnN0IHByZXN0YXRpb24gPSAkcm93LmZpbmQoJ3RkLnByZXN0YXRpb24nKS50ZXh0KCkudHJpbSgpO1xyXG4gIGNvbnN0IHByZXN0YXRpb25JZCA9ICRyb3cuZmluZCgndGQucHJlc3RhdGlvbicpLmRhdGEoJ3ByZXN0YXRpb24taWQnKTtcclxuICBjb25zdCBxdWFudGl0ZSA9ICRyb3cuZmluZCgndGQucXVhbnRpdGUnKS50ZXh0KCkudHJpbSgpO1xyXG4gIGNvbnN0IG5iSm91cnMgPSAkcm93LmZpbmQoJ3RkLm5iX2pvdXJzJykudGV4dCgpLnRyaW0oKTtcclxuICBcclxuICBcclxuICBjb25zb2xlLmxvZygndmVoaWN1bGVJZDonLCB2ZWhpY3VsZUlkKTtcclxuICBjb25zb2xlLmxvZygnY29uZHVjdGV1cklkOicsIGNvbmR1Y3RldXJJZCk7ICBcclxuICAvLyBSZW1wbGlyIGxlcyBjaGFtcHMgZHUgbW9kYWxcclxuICAkKCcjZGV0YWlsLWlkJykudmFsKGRldGFpbElkKTtcclxuIFxyXG4vLyAgJCgnI2VkaXQtdmVoaWN1bGUnKS52YWwodmVoaWN1bGVJZCk7XHJcbi8vICAgJCgnI2VkaXQtY29uZHVjdGV1cicpLnZhbChjb25kdWN0ZXVySWQpO1xyXG5cclxuLy8gY29uc29sZS5sb2coJ1ZlaGljdWxlIElEOicsIHZlaGljdWxlSWQsIHR5cGVvZiB2ZWhpY3VsZUlkKTtcclxuLy8gJCgnI2VkaXQtdmVoaWN1bGUgb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbi8vICAgY29uc29sZS5sb2coJ09wdGlvbiB2YWx1ZTonLCAkKHRoaXMpLnZhbCgpLCB0eXBlb2YgJCh0aGlzKS52YWwoKSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbiAgJCgnI2VkaXQtdmVoaWN1bGUnKS52YWwodmVoaWN1bGVJZCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgJCgnI2VkaXQtY29uZHVjdGV1cicpLnZhbChjb25kdWN0ZXVySWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICQoJyNlZGl0LXR5cGUnKS52YWwodHlwZVByZXN0YXRpb24pO1xyXG4gICQoJyNlZGl0LXpvbmUnKS52YWwoem9uZSk7XHJcbiAgJCgnI2VkaXQtcHJlc3RhdGlvbicpLnZhbChwcmVzdGF0aW9uKTtcclxuICAkKCcjZWRpdC1wcmVzdGF0aW9uLWlkJykudmFsKHByZXN0YXRpb25JZCk7XHJcbiAgJCgnI2VkaXQtcXVhbnRpdGUnKS52YWwocXVhbnRpdGUpO1xyXG4gICQoJyNlZGl0LWpvdXJzJykudmFsKG5iSm91cnMpO1xyXG4gICQoJyNlZGl0LWlza2lsb21ldHJhZ2UnKS52YWwoaXNLaWxvbWV0cmFnZSk7XHJcblxyXG4gIHRvZ2dsZUtpbG9tZXRyYWdlRmllbGQoKTtcclxuICAvLyBBZmZpY2hlciBsYSBtb2RhbFxyXG4gICQoJyNraWxvbWV0cmFnZUdyb3VwJykuaGlkZSgpO1xyXG4gICQoJyNtb2RpZmllckRldGFpbE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdJRCBwcmVzdGF0aW9uIGV4aXN0ZVxyXG4gICAgaWYgKHByZXN0YXRpb25JZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogYHByZXN0YXRpb24vJHtwcmVzdGF0aW9uSWR9L2tpbG9tZXRyYWdlYCxcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmlzS2lsb21ldHJhZ2UgPT0gMSB8fCByZXNwb25zZS5pc0tpbG9tZXRyYWdlID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICQoJyNlZGl0LWlza2lsb21ldHJhZ2UnKS52YWwoMSk7XHJcbiAgICAgICAgICAgICAgICAkKCcja2lsb21ldHJhZ2VHcm91cCcpLnNob3coKTsgXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyNlZGl0LWlza2lsb21ldHJhZ2UnKS52YWwoMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcja2lsb21ldHJhZ2VHcm91cCcpLmhpZGUoKTsgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIEFKQVg6Jywgc3RhdHVzLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiSUQgZGUgcHJlc3RhdGlvbiBpbnRyb3V2YWJsZSBkYW5zIGwnYXR0cmlidXQgZGF0YS5cIik7XHJcbiAgICAgICAgJCgnI2tpbG9tZXRyYWdlR3JvdXAnKS5oaWRlKCk7ICAvLyBQYXIgZMOpZmF1dCBvbiBjYWNoZVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiAkKCcjYnRuLWVucmVnaXN0cmVyLWRldGFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCAkbW9kYWwgPSAkKCcjbW9kaWZpZXJEZXRhaWxNb2RhbCcpO1xyXG4gIGNvbnN0IHByZXN0YXRpb25JZCA9ICQoJyNlZGl0LXByZXN0YXRpb24taWQnKS52YWwoKTsgLy8gSUQgZXQgbm9uIG5vbVxyXG4gIGNvbnN0IHF1YW50aXRlID0gJCgnI2VkaXQtcXVhbnRpdGUnKS52YWwoKTtcclxuICBjb25zdCBuYkpvdXJzID0gJCgnI2VkaXQtam91cnMnKS52YWwoKTtcclxuICBjb25zdCBkYXRlID0gJCgnI3RyYWl0ZXItZGF0ZScpLnZhbCgpO1xyXG4gIGNvbnN0IHZlaGljdWxlSWQgPSAkKCcjZWRpdC12ZWhpY3VsZScpLnZhbCgpO1xyXG4gIGNvbnN0IHZlaGljdWxlVGV4dCA9ICQoJyNlZGl0LXZlaGljdWxlIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcclxuICBjb25zdCBjb25kdWN0ZXVySWQgPSAkKCcjZWRpdC1jb25kdWN0ZXVyJykudmFsKCk7XHJcbiAgY29uc3QgY29uZHVjdGV1clRleHQgPSAkKCcjZWRpdC1jb25kdWN0ZXVyIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKTtcclxuICBjb25zdCBraWxvbWV0cmFnZSA9IHBhcnNlSW50KCQoJyNlZGl0LWtpbG9tZXRyYWdlJykudmFsKCkpIHx8IDA7XHJcbiAgY29uc3QgbmJQZXJzb25uZXMgPSBwYXJzZUludCgkKCcjdHJhaXRlci1uYlBlcnNvbm5lcycpLnZhbCgpKSB8fCAxO1xyXG4gIGNvbnN0IGNhcmJ1cmFudCA9IHBhcnNlRmxvYXQoJCgnaW5wdXRbbmFtZT1cImRldGFpbHNbMF1bY2FyYnVyYW50XVwiXScpLnZhbCgpKSB8fCAwO1xyXG4gY29uc3QgamF3YXogPSBwYXJzZUZsb2F0KCQoJ2lucHV0W25hbWU9XCJkZXRhaWxzWzBdW2phd2F6XVwiXScpLnZhbCgpKSB8fCAwO1xyXG4gIC8vIE9wdGlvbm5lbCA6IHbDqXJpZmllIHF1ZSBwcmVzdGF0aW9uSWQgZXN0IGJpZW4gZMOpZmluaVxyXG4gIGlmICghcHJlc3RhdGlvbklkKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoJ1ByZXN0YXRpb24gbm9uIHPDqWxlY3Rpb25uw6llIGNvcnJlY3RlbWVudC4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgICAvLyBQcsOpcGFyYXRpb24gZGVzIGRvbm7DqWVzIMOgIGVudm95ZXJcclxuXHJcblxyXG5cclxuIGNvbnN0IGRhdGFUb1NlbmQgPSB7XHJcbiAgICBwcmVzdGF0aW9uSWQ6IHByZXN0YXRpb25JZCxcclxuICAgIHF1YW50aXRlOiBxdWFudGl0ZSxcclxuICAgIG5iSm91cnM6IG5iSm91cnMsXHJcbiAgICBkYXRlOiBkYXRlLFxyXG4gICAga2lsb21ldHJhZ2U6IGtpbG9tZXRyYWdlLFxyXG4gICAgbmJQZXJzb25uZXM6IG5iUGVyc29ubmVzLFxyXG4gICAgY2FyYnVyYW50OiBjYXJidXJhbnQsXHJcbiAgICBqYXdhejogamF3YXpcclxuICB9O1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICcvZGVtYW5kZS9hamF4L3RhcmlmJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhOmRhdGFUb1NlbmQsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAodGFyaWYpIHtcclxuICAgICAgLy8gVHJvdXZlciBsYSBsaWduZSBjb3JyZXNwb25kYW50IMOgIGNlIGTDqXRhaWwgZGFucyBsYSB0YWJsZVxyXG4gICAgICAvLyBPbiBwZXV0IGNoZXJjaGVyIHZpYSBkZXRhaWwtaWQgb3UgZC5pZCwgaWNpIG9uIHV0aWxpc2UgZGF0YS1pZCBvdSBhdXRyZSBhcHByb2NoZSBzZWxvbiB0b24gY29kZVxyXG4gICAgICBjb25zdCBkZXRhaWxJZCA9ICQoJyNkZXRhaWwtaWQnKS52YWwoKTtcclxuICAgICAgY29uc3QgJHJvdyA9ICQoYCN0cmFpdGVyLWRldGFpbHMtdGFibGUgdGJvZHkgdHIgYnV0dG9uLmJ0bk1vZGlmaWVyRGV0YWlsW2RhdGEtaWQ9XCIke2RldGFpbElkfVwiXWApLmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICAgICRyb3cuZmluZCgnLnZlaGljdWxlJykudGV4dCh2ZWhpY3VsZVRleHQpLmRhdGEoJ3ZlaGljdWxlLWlkJywgdmVoaWN1bGVJZCk7XHJcbiAgICAgICRyb3cuZmluZCgnLmNvbmR1Y3RldXInKS50ZXh0KGNvbmR1Y3RldXJUZXh0KS5kYXRhKCdjb25kdWN0ZXVyLWlkJywgY29uZHVjdGV1cklkKTtcclxuICAgICAgJHJvdy5maW5kKCcucXVhbnRpdGUnKS50ZXh0KHF1YW50aXRlKTtcclxuICAgICAgJHJvdy5maW5kKCcubmJfam91cnMnKS50ZXh0KG5iSm91cnMpO1xyXG4gICAgICAkcm93LmZpbmQoJy50YXJpZicpLnRleHQocGFyc2VGbG9hdCh0YXJpZikudG9GaXhlZCgyKSk7XHJcbiAgICAgICRyb3cuZmluZCgnLmtpbG9tZXRyYWdlJykudGV4dChraWxvbWV0cmFnZSk7IFxyXG4gICAgICAkcm93LmZpbmQoJy5qYXdheicpLnRleHQoamF3YXoudG9GaXhlZCgyKSk7XHJcbiAgICAgICRyb3cuZmluZCgnLmNhcmJ1cmFudCcpLnRleHQoY2FyYnVyYW50LnRvRml4ZWQoMikpO1xyXG5cclxuICAgICAgJG1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXIgbG9ycyBkdSByZWNhbGN1bCBkdSB0YXJpZi4nKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiBcclxuXHJcblxyXG4kKCcjYnRuLXRyYWl0ZXItZW5yZWdpc3RyZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGF0ZURlbWFuZGUgPSAkKCcjdHJhaXRlci1kYXRlJykudmFsKCk7XHJcbiAgY29uc3QgaWQgPSAkKCcjdHJhaXRlci1pZCcpLnZhbCgpO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBbXTtcclxuXHJcbiAgJCgnI3RyYWl0ZXItZGV0YWlscy10YWJsZSB0Ym9keSB0cicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgcm93ID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGRldGFpbElkID0gcm93LmZpbmQoJy5idG5Nb2RpZmllckRldGFpbCcpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgZGV0YWlscy5wdXNoKHtcclxuICAgICAgaWQ6IGRldGFpbElkLFxyXG4gICAgICB2ZWhpY3VsZTogcm93LmZpbmQoJ3RkLnZlaGljdWxlJykudGV4dCgpLnRyaW0oKSxcclxuICAgICAgY29uZHVjdGV1cjogcm93LmZpbmQoJ3RkLmNvbmR1Y3RldXInKS50ZXh0KCkudHJpbSgpLFxyXG4gICAgICB0eXBlX3ByZXN0YXRpb246IHJvdy5maW5kKCd0ZC50eXBlX3ByZXN0YXRpb24nKS50ZXh0KCkudHJpbSgpLFxyXG4gICAgICB6b25lOiByb3cuZmluZCgndGQuem9uZScpLnRleHQoKS50cmltKCksXHJcbiAgICAgIHByZXN0YXRpb246IHJvdy5maW5kKCd0ZC5wcmVzdGF0aW9uJykudGV4dCgpLnRyaW0oKSxcclxuICAgICAgcXVhbnRpdGU6IHJvdy5maW5kKCd0ZC5xdWFudGl0ZScpLnRleHQoKS50cmltKCksXHJcbiAgICAgIG5iX2pvdXJzOiByb3cuZmluZCgndGQubmJfam91cnMnKS50ZXh0KCkudHJpbSgpLFxyXG4gICAgICB0YXJpZjogcm93LmZpbmQoJ3RkLnRhcmlmJykudGV4dCgpLnRyaW0oKSxcclxuICAgICAga2lsb21ldHJhZ2U6IHJvdy5maW5kKCd0ZC5raWxvbWV0cmFnZScpLnRleHQoKS50cmltKCksXHJcbiAgICAgIGNhcmJ1cmFudDogcGFyc2VGbG9hdChyb3cuZmluZCgndGQuY2FyYnVyYW50JykudGV4dCgpKSxcclxuICAgICBqYXdhejogcGFyc2VGbG9hdChyb3cuZmluZCgndGQuamF3YXonKS50ZXh0KCkpXHJcbiAgICB9KTtcclxuICB9KTtcclxuICBjb25zdCBkYXRhVG9TZW5kID0ge1xyXG4gICAgaWQ6IGlkLFxyXG4gICAgZGF0ZURlbWFuZGU6IGRhdGVEZW1hbmRlLFxyXG4gICAgZGV0YWlsczogZGV0YWlsc1xyXG4gIH07XHJcblxyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAnL2RlbWFuZGUvdHJhaXRlci9lbnJlZ2lzdHJlcicsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzLm1lc3NhZ2UpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2VucmVnaXN0cmVtZW50IGR1IHRyYWl0ZW1lbnQuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiAkKCcjZGVtYW5kZVRhYmxlJykub24oJ2NsaWNrJywgJy5idG5WYWxpZGVyRGVtYW5kZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZGVtYW5kZUlkID0gdGhpcy5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgZmV0Y2goJy9kZW1hbmRlL2NoYW5nZXItc3RhdHV0VmFsaWRlci8nICsgZGVtYW5kZUlkLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdMYSBkZW1hbmRlIHZhbGlkw6llIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSwgMTAwMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIDogJyArIGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKCdMYSBkZW1hbmRlIG5cXCdhIHBhcyDDqXTDqSB2YWxpZMOpZScpO1xyXG4gICAgICB9KTtcclxuICB9KTsgICBcclxuXHJcbiAgICAkKCcjZGVtYW5kZVRhYmxlJykub24oJ2NsaWNrJywgJy5idG5Bbm51bGVyRGVtYW5kZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZGVtYW5kZUlkID0gdGhpcy5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgZmV0Y2goJy9kZW1hbmRlL2NoYW5nZXItc3RhdHV0QW5udWxlci8nICsgZGVtYW5kZUlkLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHV0OiA2IH0pIC8vIFN0YXR1dCA2IHBvdXIgYW5udWxlclxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdMYSBkZW1hbmRlIGFubnVsw6llIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSwgMTAwMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIDogJyArIGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKCdMYSBkZW1hbmRlIG5cXCdhIHBhcyDDqXTDqSBhbm51bMOpZScpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgICBcclxuICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuRXhjdXRlckRlbWFuZGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgIGNvbnN0IGRlbWFuZGVJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuXHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnRXjDqWN1dGVyIGxhIGRlbWFuZGUgPycsXHJcbiAgICAgICAgdGV4dDogXCJDZXR0ZSBhY3Rpb24gZXjDqWN1dGVyYSBkw6lmaW5pdGl2ZW1lbnQgbGEgZGVtYW5kZS5cIixcclxuICAgICAgICBcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLCAgICAgIFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM3NTkzYWUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2I2Y2I5ZScsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGV4w6ljdXRlcicsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0FubnVsZXInXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGVtYW5kZS9leGVjdXRlckRlbWFuZGUvJyArIGRlbWFuZGVJZCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdMYSBkZW1hbmRlIGEgw6l0w6kgZXjDqWN1dMOpZSBhdmVjIHN1Y2PDqHMuIFZvaXIgbGEgbWlzc2lvbi4nLCAnU3VjY8OocycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9jYXRpb24ucmVsb2FkKCksIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsXFwnZXjDqWN1dGlvbiBkZSBsYSBkZW1hbmRlLicsICdFcnJldXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiBcclxuXHJcbn0pOyAgICIsIid1c2Ugc3RyaWN0JztcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIHBhZFN0YXJ0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1wYWQnKS5zdGFydDtcclxuXHJcbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XHJcbnZhciAkaXNGaW5pdGUgPSBpc0Zpbml0ZTtcclxudmFyIGFicyA9IE1hdGguYWJzO1xyXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xyXG52YXIgbmF0aXZlRGF0ZVRvSVNPU3RyaW5nID0gRGF0ZVByb3RvdHlwZS50b0lTT1N0cmluZztcclxudmFyIHRoaXNUaW1lVmFsdWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xyXG52YXIgZ2V0VVRDRGF0ZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VVRDRGF0ZSk7XHJcbnZhciBnZXRVVENGdWxsWWVhciA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VVRDRnVsbFllYXIpO1xyXG52YXIgZ2V0VVRDSG91cnMgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ0hvdXJzKTtcclxudmFyIGdldFVUQ01pbGxpc2Vjb25kcyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VVRDTWlsbGlzZWNvbmRzKTtcclxudmFyIGdldFVUQ01pbnV0ZXMgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ01pbnV0ZXMpO1xyXG52YXIgZ2V0VVRDTW9udGggPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ01vbnRoKTtcclxudmFyIGdldFVUQ1NlY29uZHMgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFVUQ1NlY29uZHMpO1xyXG5cclxuLy8gYERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b2lzb3N0cmluZ1xyXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGZhaWxzIGhlcmU6XHJcbm1vZHVsZS5leHBvcnRzID0gKGZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmF0aXZlRGF0ZVRvSVNPU3RyaW5nLmNhbGwobmV3IERhdGUoLTVlMTMgLSAxKSkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XHJcbn0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgbmF0aXZlRGF0ZVRvSVNPU3RyaW5nLmNhbGwobmV3IERhdGUoTmFOKSk7XHJcbn0pKSA/IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xyXG4gIGlmICghJGlzRmluaXRlKHRoaXNUaW1lVmFsdWUodGhpcykpKSB0aHJvdyAkUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XHJcbiAgdmFyIGRhdGUgPSB0aGlzO1xyXG4gIHZhciB5ZWFyID0gZ2V0VVRDRnVsbFllYXIoZGF0ZSk7XHJcbiAgdmFyIG1pbGxpc2Vjb25kcyA9IGdldFVUQ01pbGxpc2Vjb25kcyhkYXRlKTtcclxuICB2YXIgc2lnbiA9IHllYXIgPCAwID8gJy0nIDogeWVhciA+IDk5OTkgPyAnKycgOiAnJztcclxuICByZXR1cm4gc2lnbiArIHBhZFN0YXJ0KGFicyh5ZWFyKSwgc2lnbiA/IDYgOiA0LCAwKSArXHJcbiAgICAnLScgKyBwYWRTdGFydChnZXRVVENNb250aChkYXRlKSArIDEsIDIsIDApICtcclxuICAgICctJyArIHBhZFN0YXJ0KGdldFVUQ0RhdGUoZGF0ZSksIDIsIDApICtcclxuICAgICdUJyArIHBhZFN0YXJ0KGdldFVUQ0hvdXJzKGRhdGUpLCAyLCAwKSArXHJcbiAgICAnOicgKyBwYWRTdGFydChnZXRVVENNaW51dGVzKGRhdGUpLCAyLCAwKSArXHJcbiAgICAnOicgKyBwYWRTdGFydChnZXRVVENTZWNvbmRzKGRhdGUpLCAyLCAwKSArXHJcbiAgICAnLicgKyBwYWRTdGFydChtaWxsaXNlY29uZHMsIDMsIDApICtcclxuICAgICdaJztcclxufSA6IG5hdGl2ZURhdGVUb0lTT1N0cmluZztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xyXG5cclxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xyXG5cclxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3RcclxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xyXG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKVxyXG4gICAgICB8fCBub25bTUVUSE9EX05BTUVdKCkgIT09IG5vblxyXG4gICAgICB8fCAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FKTtcclxuICB9KTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIHRvSVNPU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RhdGUtdG8taXNvLXN0cmluZycpO1xyXG5cclxuLy8gYERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b2lzb3N0cmluZ1xyXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcclxuJCh7IHRhcmdldDogJ0RhdGUnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyAhPT0gdG9JU09TdHJpbmcgfSwge1xyXG4gIHRvSVNPU3RyaW5nOiB0b0lTT1N0cmluZ1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcclxudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XHJcblxyXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cclxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XHJcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcclxuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJnbG9iYWxBY3Rpb25zIiwiRGF0YVRhYmxlIiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZSIsImRhdGFTcmMiLCJqc29uIiwid2luZG93IiwiQXJyYXkiLCJpc0FycmF5IiwiYWN0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsImRhdGEiLCJjb2x1bW5zIiwibmFtZSIsInJlbmRlciIsInJvdyIsImxlbmd0aCIsImNvbmNhdCIsInN1YnN0cmluZyIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJmdWxsIiwiYWN0aW9uc0h0bWwiLCJpZCIsImZvckVhY2giLCJhY3Rpb24iLCJzdGF0dXRJZCIsInNob3VsZFJlbmRlciIsIm5vbSIsImNsYXNzTmFtZSIsImljb24iLCJsYW5ndWFnZSIsImRhdGF0YWJsZXNGcmVuY2giLCJpc0Jvb3RzdHJhcDUiLCJib290c3RyYXAiLCJUb29sdGlwIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwidG9vbHRpcCIsIm9uIiwiZGVtYW5kZUlkIiwibW9kYWxJZCIsIm1vZGFsIiwiZGV0YWlsSW5kZXgiLCJyZXNldERldGFpbEZpZWxkcyIsImVhY2giLCJ0YWciLCJwcm9wIiwidG9Mb3dlckNhc2UiLCJhdHRyIiwiaHRtbCIsInZhbCIsInJlbW92ZUF0dHIiLCJsZW5ndGhNZW51IiwiYXV0b1dpZHRoIiwiZGVzdHJveSIsImdldFZhbHVlIiwidmVoaWN1bGUiLCJjb25kdWN0ZXVyIiwidHlwZVByZXN0YXRpb24iLCJ6b25lIiwicHJlc3RhdGlvbiIsInF1YW50aXRlSW5wdXQiLCJuYkpvdXJzSW5wdXQiLCJxdWFudGl0ZSIsInBhcnNlSW50IiwibmJKb3VycyIsImRhdGVEZW1hbmRlIiwibmJQZXJzb25uZXMiLCJ0b2FzdHIiLCJlcnJvciIsIm1ldGhvZCIsInByZXN0YXRpb25JZCIsImRhdGUiLCJzdWNjZXNzIiwidGFyaWYiLCJzaG93IiwiYXBwZW5kIiwidGV4dCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJoaWRlIiwiZmlsdGVyUHJlc3RhdGlvbnNBamF4IiwidHlwZVNlbGVjdG9yIiwiem9uZVNlbGVjdG9yIiwicHJlc3RhdGlvblNlbGVjdG9yIiwic2VsZWN0ZWRUeXBlIiwic2VsZWN0ZWRab25lIiwib3B0aW9ucyIsInAiLCJub3ciLCJEYXRlIiwiZm9ybWF0dGVkIiwidG9JU09TdHJpbmciLCJzbGljZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIiwibm9tQmVuaWZpY2lhaXJlIiwiY2luIiwib2JzZXJ2YXRpb24iLCJkZXNjcmlwdGlvbiIsImNvbnRhY3QiLCJhZHJlc3NEZXBhcnQiLCJ0Ym9keSIsImVtcHR5IiwiZCIsImkiLCJ2ZWhpY3VsZUlkIiwiY29uZHVjdGV1cklkIiwidHlwZVByZXN0YXRpb25JZCIsInR5cGVfcHJlc3RhdGlvbiIsInpvbmVJZCIsIm5iX2pvdXJzIiwia2lsb21ldHJhZ2UiLCJqYXdheiIsImNhcmJ1cmFudCIsImlzS2lsb21ldHJhZ2UiLCJ0b2dnbGVLaWxvbWV0cmFnZUZpZWxkIiwiJHJvdyIsImRldGFpbElkIiwiZmluZCIsInRyaW0iLCJ0cmlnZ2VyIiwiZGF0YVR5cGUiLCJyZXNwb25zZSIsInhociIsInN0YXR1cyIsIndhcm4iLCIkbW9kYWwiLCJ2ZWhpY3VsZVRleHQiLCJjb25kdWN0ZXVyVGV4dCIsInBhcnNlRmxvYXQiLCJkYXRhVG9TZW5kIiwidG9GaXhlZCIsInB1c2giLCJjb250ZW50VHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkYXRhc2V0IiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInNldFRpbWVvdXQiLCJib2R5Iiwic3RhdHV0IiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInJlc3VsdCIsImlzQ29uZmlybWVkIl0sInNvdXJjZVJvb3QiOiIifQ==