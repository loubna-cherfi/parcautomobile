(self["webpackChunk"] = self["webpackChunk"] || []).push([["settings_mission"],{

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

/***/ "./assets/js/settings/mission.js":
/*!***************************************!*\
  !*** ./assets/js/settings/mission.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
$(document).ready(function () {
  var globalActions = [];
  $('#missionTable').DataTable({
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate('app_fetch_missions'),
      type: 'GET',
      dataSrc: function dataSrc(json) {
        window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
        return json.data;
      }
    },
    columns: [{
      data: 'id',
      name: 'm.id'
    }, {
      data: 'demande',
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
      data: 'observation',
      name: 'm.observation'
    }, {
      data: 'nom_benificiaire',
      name: 'm.nom_benificiaire'
    }, {
      data: 'cin',
      name: 'm.cin'
    }, {
      data: 'contact',
      name: 'm.contact'
    }, {
      data: 'date_mission',
      name: 'd.date_mission'
    }, {
      data: 'nbPersonne',
      name: 'm.nbPersonne'
    }, {
      data: 'adress_depart',
      name: 'm.adress_depart'
    }, {
      data: 'tarif_total',
      name: 'm.tarif_total'
    }, {
      data: 'date_evaluation',
      name: 'm.date_evaluation'
    }, {
      data: 'evaluation_note',
      name: 'm.evaluation_note',
      render: function render(data, type, row) {
        if (!data || isNaN(data)) {
          return '<span class="text-muted">Non noté</span>';
        }
        var stars = '';
        for (var i = 1; i <= 5; i++) {
          if (i <= data) {
            stars += '<i class="fas fa-star text-warning"></i>';
          } else {
            stars += '<i class="far fa-star text-warning"></i>';
          }
        }
        return "<span title=\"".concat(data, "/5\">").concat(stars, "</span>");
      }
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
              case 'EVALUER':
                shouldRender = statutId === 3;
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
  $(document).on('click', '.buttonDetailleMission', function () {
    var missionId = $(this).data('id');
    if (missionId) {
      var modalId = '#detailMissionModal' + missionId;
      $(modalId).modal('show');
    }
  });
  $(document).on('click', '.btnDetails', function () {
    var missionId = $(this).data('id');
    var url = "/mission/details-mission/".concat(missionId);
    $.ajax({
      url: url,
      method: 'GET',
      success: function success(data) {
        var html = '';
        if (data.length === 0) {
          html = '<tr><td colspan="10" class="text-center text-danger">Aucun détail trouvé</td></tr>';
        } else {
          data.forEach(function (d) {
            html += "\n              <tr>\n                <td>".concat(d.date_mission, "</td>\n                <td>").concat(d.heure_depart, "</td>\n                <td>").concat(d.lieu_mission, "</td>\n                <td>").concat(d.ville_mission, "</td>\n                <td>").concat(d.km_depart, "</td>\n                <td>").concat(d.km_retour, "</td>\n                <td>").concat(d.duree_mission || '-', "</td>\n                <td>").concat(d.tarif_unique, " MAD</td>\n                <td>").concat(d.conducteur || '-', "</td>\n                <td>").concat(d.vehicule || '-', "</td>\n              </tr>");
          });
        }
        $('#detailsMissionBody').html(html);
        $('#detailMissionModal').modal('show');
      },
      error: function error() {
        $('#detailsMissionBody').html('<tr><td colspan="10" class="text-center text-danger">Erreur de chargement</td></tr>');
        $('#detailMissionModal').modal('show');
      }
    });
  });
  var currentMissionId = null;
  $(document).on('click', '.btnEvaluerDemande', function () {
    currentMissionId = $(this).data('id');
    $('#noteEvaluation').val(0);
    $('#starRating .star').css('color', '#ccc');
    $('#evaluerMissionModal').modal('show'); // 👈 Affiche le modal
  });

  $(document).on('click', '#starRating .star', function () {
    var value = $(this).data('value');
    $('#noteEvaluation').val(value);
    $('#starRating .star').each(function () {
      var starValue = $(this).data('value');
      $(this).css('color', starValue <= value ? '#f0ad4e' : '#ccc');
    });
  });
  $('#submitEvaluation').on('click', function () {
    var note = $('#noteEvaluation').val();
    if (!note || note == 0) {
      toastr.warning("Veuillez sélectionner une note avant d'envoyer.");
      return;
    }
    $.ajax({
      url: "/mission/evaluer/".concat(currentMissionId),
      method: 'POST',
      data: {
        note: note
      },
      success: function success(res) {
        $('#evaluerMissionModal').modal('hide');
        toastr.success('Évaluation enregistrée avec succès.');
        setTimeout(function () {
          return location.reload();
        }, 1500);
      },
      error: function error() {
        toastr.error("Erreur lors de l'enregistrement de l'évaluation.");
      }
    });
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-array_js-n-687a39","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-ca4b17","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ff2c7b"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/mission.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBTXlCLElBQUksR0FBR3RFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDaUUsR0FBRyxDQUFDLENBQUM7SUFFdkMsSUFBSSxDQUFDSyxJQUFJLElBQUlBLElBQUksSUFBSSxDQUFDLEVBQUU7TUFDbEJDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGlEQUFpRCxDQUFDO01BQ3JFO0lBQ0Y7SUFFQXhFLENBQUMsQ0FBQ08sSUFBSSxDQUFDO01BQ0xDLEdBQUcsc0JBQUFrQixNQUFBLENBQXNCc0MsZ0JBQWdCLENBQUU7TUFDM0NmLE1BQU0sRUFBRSxNQUFNO01BQ2Q3QixJQUFJLEVBQUU7UUFBRWtELElBQUksRUFBRUE7TUFBSyxDQUFDO01BQ3BCcEIsT0FBTyxFQUFFLFNBQUFBLFFBQVV1QixHQUFHLEVBQUU7UUFDdEJ6RSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ2dELEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdkN1QixNQUFNLENBQUNyQixPQUFPLENBQUMscUNBQXFDLENBQUM7UUFDckR3QixVQUFVLENBQUM7VUFBQSxPQUFNQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1FBQUEsR0FBRSxJQUFJLENBQUM7TUFDM0MsQ0FBQztNQUNEYixLQUFLLEVBQUUsU0FBQUEsTUFBQSxFQUFZO1FBQ2pCUSxNQUFNLENBQUNSLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztNQUVsRTtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NldHRpbmdzL21pc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGdsb2JhbEFjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAkKCcjbWlzc2lvblRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsICAgXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mZXRjaF9taXNzaW9ucycpLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgZGF0YVNyYzogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoanNvbi5hY3Rpb25zKSA/IGpzb24uYWN0aW9ucyA6IE9iamVjdC52YWx1ZXMoanNvbi5hY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmRhdGE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ2lkJywgbmFtZTogJ20uaWQnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ2RlbWFuZGUnLCBuYW1lOiAnZC5pZCcgfSxcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogJ2Rvc3NpZXInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Uubm9tRG9zc2llcicsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIke2RhdGF9XCI+JHtkYXRhLnN1YnN0cmluZygwLCA0KX0uLi48L3NwYW4+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+QXVjdW4gZG9zc2llcjwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAnb2JzZXJ2YXRpb24nLCBuYW1lOiAnbS5vYnNlcnZhdGlvbicgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAnbm9tX2JlbmlmaWNpYWlyZScsIG5hbWU6ICdtLm5vbV9iZW5pZmljaWFpcmUnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ2NpbicsIG5hbWU6ICdtLmNpbicgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAnY29udGFjdCcsIG5hbWU6ICdtLmNvbnRhY3QnIH0sXHJcbiAgICAgICAgICAgICB7IGRhdGE6ICdkYXRlX21pc3Npb24nLCBuYW1lOiAnZC5kYXRlX21pc3Npb24nIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ25iUGVyc29ubmUnLCBuYW1lOiAnbS5uYlBlcnNvbm5lJyB9LFxyXG4gICAgICAgICAgICB7IGRhdGE6ICdhZHJlc3NfZGVwYXJ0JywgbmFtZTogJ20uYWRyZXNzX2RlcGFydCcgfSxcclxuICAgICAgICAgICAgICB7IGRhdGE6ICd0YXJpZl90b3RhbCcsIG5hbWU6ICdtLnRhcmlmX3RvdGFsJyB9LFxyXG4gICAgICAgICAgICAgeyBkYXRhOiAnZGF0ZV9ldmFsdWF0aW9uJywgbmFtZTogJ20uZGF0ZV9ldmFsdWF0aW9uJyB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgIGRhdGE6ICdldmFsdWF0aW9uX25vdGUnLFxyXG4gICAgbmFtZTogJ20uZXZhbHVhdGlvbl9ub3RlJyxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgaWYgKCFkYXRhIHx8IGlzTmFOKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Tm9uIG5vdMOpPC9zcGFuPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhcnMgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPD0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnMgKz0gJzxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgdGV4dC13YXJuaW5nXCI+PC9pPic7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnMgKz0gJzxpIGNsYXNzPVwiZmFyIGZhLXN0YXIgdGV4dC13YXJuaW5nXCI+PC9pPic7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgPHNwYW4gdGl0bGU9XCIke2RhdGF9LzVcIj4ke3N0YXJzfTwvc3Bhbj5gO1xyXG4gICAgfVxyXG59LFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogJ3N0YXR1dCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncy5saWJlbGxlJyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBzdHlsZT1cImNvbG9yOiAjNzU5M2FlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTBweDsgZGlzcGxheTogYmxvY2s7XCI+JHtkYXRhfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICB7IGRhdGE6IG51bGwsIG5hbWU6ICdhY3Rpb25zJywgb3JkZXJhYmxlOiBmYWxzZSwgc2VhcmNoYWJsZTogZmFsc2UsIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0Z1bGwgcm93IGRhdGE6JywgZnVsbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnR2xvYmFsIGFjdGlvbnM6Jywgd2luZG93Lmdsb2JhbEFjdGlvbnMpO1xyXG4gICAgdmFyIGFjdGlvbnNIdG1sID0gYDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwibWVudUFjdGlvbnMgZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIiBpZD1cIiR7ZnVsbC5pZH1cIj48L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tY29udGVudCBkaXZNZW51XCIgaWQ9XCJkaXZNZW51JHtmdWxsLmlkfVwiPmA7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkod2luZG93Lmdsb2JhbEFjdGlvbnMpKSB7XHJcbiAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgYWN0aW9uOicsIGFjdGlvbi5ub20sICdmb3Igc3RhdHV0SWQ6JywgZnVsbC5zdGF0dXRJZCk7XHJcbiAgIFxyXG4gICAgICAgIGxldCBzdGF0dXRJZCA9IGZ1bGwuc3RhdHV0SWQ7IFxyXG5cclxuICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLm5vbSkge1xyXG4gICAgICAgICAgY2FzZSAnREVUQUlMTEUnOlxyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgY2FzZSAnRVZBTFVFUic6XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IChzdGF0dXRJZCA9PT0gMyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuLy8gY29uc29sZS5sb2coYEFjdGlvbiAke2FjdGlvbi5ub219IHNob3VsZFJlbmRlcjpgLCBzaG91bGRSZW5kZXIpO1xyXG4gICAgICAgIGlmIChzaG91bGRSZW5kZXIpIHtcclxuICAgICAgICAgIGFjdGlvbnNIdG1sICs9IGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWlkPVwiJHtmdWxsLmlkfVwiIGNsYXNzPVwiJHthY3Rpb24uY2xhc3NOYW1lfSBkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7YWN0aW9uLmljb259IG1lbnVJY29uXCI+PC9pPiAke2FjdGlvbi5ub219XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uc0h0bWwgKz0gJzwvZGl2PjwvZGl2Pic7XHJcbiAgICByZXR1cm4gYWN0aW9uc0h0bWw7XHJcbiAgfVxyXG59XHJcblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2hcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnV0dG9uRGV0YWlsbGVNaXNzaW9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBtaXNzaW9uSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICBpZiAobWlzc2lvbklkKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxJZCA9ICcjZGV0YWlsTWlzc2lvbk1vZGFsJyArIG1pc3Npb25JZDtcclxuICAgICAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuRGV0YWlscycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1pc3Npb25JZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgIGNvbnN0IHVybCA9IGAvbWlzc2lvbi9kZXRhaWxzLW1pc3Npb24vJHttaXNzaW9uSWR9YDtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgaHRtbCA9ICcnO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgaHRtbCA9ICc8dHI+PHRkIGNvbHNwYW49XCIxMFwiIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1kYW5nZXJcIj5BdWN1biBkw6l0YWlsIHRyb3V2w6k8L3RkPjwvdHI+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2QuZGF0ZV9taXNzaW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtkLmhldXJlX2RlcGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7ZC5saWV1X21pc3Npb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2QudmlsbGVfbWlzc2lvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7ZC5rbV9kZXBhcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2Qua21fcmV0b3VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtkLmR1cmVlX21pc3Npb24gfHwgJy0nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtkLnRhcmlmX3VuaXF1ZX0gTUFEPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2QuY29uZHVjdGV1ciB8fCAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2QudmVoaWN1bGUgfHwgJy0nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZGV0YWlsc01pc3Npb25Cb2R5JykuaHRtbChodG1sKTtcclxuICAgICAgICAkKCcjZGV0YWlsTWlzc2lvbk1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjZGV0YWlsc01pc3Npb25Cb2R5JykuaHRtbCgnPHRyPjx0ZCBjb2xzcGFuPVwiMTBcIiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFuZ2VyXCI+RXJyZXVyIGRlIGNoYXJnZW1lbnQ8L3RkPjwvdHI+Jyk7XHJcbiAgICAgICAgJCgnI2RldGFpbE1pc3Npb25Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gICBsZXQgY3VycmVudE1pc3Npb25JZCA9IG51bGw7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuRXZhbHVlckRlbWFuZGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjdXJyZW50TWlzc2lvbklkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgJCgnI25vdGVFdmFsdWF0aW9uJykudmFsKDApO1xyXG4gICAgJCgnI3N0YXJSYXRpbmcgLnN0YXInKS5jc3MoJ2NvbG9yJywgJyNjY2MnKTtcclxuICAgICQoJyNldmFsdWVyTWlzc2lvbk1vZGFsJykubW9kYWwoJ3Nob3cnKTsgLy8g8J+RiCBBZmZpY2hlIGxlIG1vZGFsXHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjc3RhclJhdGluZyAuc3RhcicsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xyXG4gICAgJCgnI25vdGVFdmFsdWF0aW9uJykudmFsKHZhbHVlKTtcclxuICAgICQoJyNzdGFyUmF0aW5nIC5zdGFyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJWYWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcclxuICAgICAgJCh0aGlzKS5jc3MoJ2NvbG9yJywgc3RhclZhbHVlIDw9IHZhbHVlID8gJyNmMGFkNGUnIDogJyNjY2MnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3VibWl0RXZhbHVhdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5vdGUgPSAkKCcjbm90ZUV2YWx1YXRpb24nKS52YWwoKTtcclxuXHJcbiAgICBpZiAoIW5vdGUgfHwgbm90ZSA9PSAwKSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW5lIG5vdGUgYXZhbnQgZCdlbnZveWVyLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogYC9taXNzaW9uL2V2YWx1ZXIvJHtjdXJyZW50TWlzc2lvbklkfWAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7IG5vdGU6IG5vdGUgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICQoJyNldmFsdWVyTWlzc2lvbk1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB0b2FzdHIuc3VjY2Vzcygnw4l2YWx1YXRpb24gZW5yZWdpc3Ryw6llIGF2ZWMgc3VjY8Oocy4nKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxNTAwKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdlbnJlZ2lzdHJlbWVudCBkZSBsJ8OpdmFsdWF0aW9uLlwiKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJnbG9iYWxBY3Rpb25zIiwiRGF0YVRhYmxlIiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZSIsImRhdGFTcmMiLCJqc29uIiwid2luZG93IiwiQXJyYXkiLCJpc0FycmF5IiwiYWN0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsImRhdGEiLCJjb2x1bW5zIiwibmFtZSIsInJlbmRlciIsInJvdyIsImxlbmd0aCIsImNvbmNhdCIsInN1YnN0cmluZyIsImlzTmFOIiwic3RhcnMiLCJpIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImZ1bGwiLCJhY3Rpb25zSHRtbCIsImlkIiwiZm9yRWFjaCIsImFjdGlvbiIsInN0YXR1dElkIiwic2hvdWxkUmVuZGVyIiwibm9tIiwiY2xhc3NOYW1lIiwiaWNvbiIsImxhbmd1YWdlIiwiZGF0YXRhYmxlc0ZyZW5jaCIsIm9uIiwibWlzc2lvbklkIiwibW9kYWxJZCIsIm1vZGFsIiwibWV0aG9kIiwic3VjY2VzcyIsImh0bWwiLCJkIiwiZGF0ZV9taXNzaW9uIiwiaGV1cmVfZGVwYXJ0IiwibGlldV9taXNzaW9uIiwidmlsbGVfbWlzc2lvbiIsImttX2RlcGFydCIsImttX3JldG91ciIsImR1cmVlX21pc3Npb24iLCJ0YXJpZl91bmlxdWUiLCJjb25kdWN0ZXVyIiwidmVoaWN1bGUiLCJlcnJvciIsImN1cnJlbnRNaXNzaW9uSWQiLCJ2YWwiLCJjc3MiLCJ2YWx1ZSIsImVhY2giLCJzdGFyVmFsdWUiLCJub3RlIiwidG9hc3RyIiwid2FybmluZyIsInJlcyIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=