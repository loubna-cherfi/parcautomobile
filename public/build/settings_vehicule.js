(self["webpackChunk"] = self["webpackChunk"] || []).push([["settings_vehicule"],{

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

/***/ "./assets/js/settings/vehicule.js":
/*!****************************************!*\
  !*** ./assets/js/settings/vehicule.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
$(document).ready(function () {
  var globalActions = [];
  $('#vehiculeTable').DataTable({
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate('app_fetch_vehicules'),
      type: 'GET',
      dataSrc: function dataSrc(json) {
        // Store actions globally for dynamic rendering
        window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
        return json.data;
      }
    },
    columns: [{
      data: 'id',
      name: 'v.id'
    }, {
      data: 'matricule',
      name: 'v.matricule'
    }, {
      data: 'model',
      name: 'v.model'
    }, {
      data: 'carburant',
      name: 'v.carburant'
    }, {
      data: 'transmission',
      name: 'v.transmission'
    }, {
      data: 'kilometrage',
      name: 'v.kilometrage'
    }, {
      data: 'capacite',
      name: 'v.capacite'
    }, {
      data: 'active',
      name: 'v.active',
      render: function render(data) {
        return data ? '<i class="fa-regular fa-circle-check actifIcon"></i>' : '<i class="fa-regular fa-circle-xmark inactifIcon"></i>';
      }
    }, {
      name: 'actions',
      date: null,
      orderable: false,
      searchable: false,
      render: function render(data, type, full) {
        var actionsHtml = "<div class=\"dropdown\">\n                            <i class=\"menuActions fa-solid fa-ellipsis-vertical\" id=\"".concat(full.id, "\">\n                            </i>\n                            <div class=\"dropdown-menu dropdown-content divMenu\" id=\"divMenu").concat(full.id, "\">");
        // console.log(window.globalActions);
        window.globalActions.forEach(function (action) {
          actionsHtml += "\n                                    <button data-id=\"".concat(full.id, "\" class=\"").concat(action.className, " dropdown-item d-flex align-items-end\"><i class=\"").concat(action.icon, " menuIcon\"></i> ").concat(action.nom, "</button>");
        });
        actionsHtml += '</div>';
        return actionsHtml;
      }
    }],
    language: datatablesFrench
  });

  // Debug : bouton cliqué  
  $(document).on('click', 'button', function () {
    console.log("loubna:", $(this).attr("data-bs-target"));
  });

  // Charger les infos d’un véhicule à modifier
  $(document).on('click', '.btnUpdateVehicule', function () {
    var vehiculeId = $(this).data('id');
    $.ajax({
      url: '/vehicule/getVehicule/' + vehiculeId,
      method: 'GET',
      success: function success(data) {
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
      error: function error() {
        toastr.error("Erreur lors du chargement du véhicule.");
      }
    });
  });

  // Enregistrer les modifications d’un véhicule
  $(document).on('click', '.saveUpdateVehicule', function (e) {
    e.preventDefault();
    var data = {
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
      success: function success() {
        $('#updateVehicule').modal('hide');
        toastr.success("Véhicule modifié avec succès.");
        location.reload(); // ou recharger une seule ligne dynamiquement
      },

      error: function error(xhr) {
        toastr.error("Une erreur est survenue lors de la modification.");
        console.error(xhr.responseText);
      }
    });
  });

  //  Soumission AJAX pour ajouter un véhicule
  $(document).on('click', '.saveAddVehicule', function (e) {
    e.preventDefault();
    var data = {
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
      success: function success(response) {
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
      error: function error(xhr) {
        toastr.error("Une erreur est survenue lors de l'ajout.");
        console.error(xhr.responseText);
      }
    });
  });
  // 🔄 Activation/Désactivation d’un véhicule
  $(document).on('click', '.btnToggleStatusVehicule', function () {
    var vehiculeId = $(this).data('id');
    $.ajax({
      url: '/vehicule/toggleStatus/' + vehiculeId,
      method: 'POST',
      success: function success(response) {
        if (response.success) {
          toastr.success(response.message);
          location.reload(); // ou rafraîchir dynamiquement la ligne
        } else {
          toastr.error(response.message || "Erreur inattendue.");
        }
      },
      error: function error() {
        toastr.error("Erreur lors du changement de statut.");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-array_js-n-687a39","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-ca4b17","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-89a9f7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/vehicule.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy92ZWhpY3VsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGluZyBmcm9tIFwiZm9zLXJvdXRlclwiO2ltcG9ydCByb3V0ZXMgZnJvbSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXFBBUkNBVVRPXFxcXHZhclxcXFxjYWNoZVxcXFxmb3NSb3V0ZXMuanNvblwiO1JvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZ2xvYmFsQWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICQoJyN2ZWhpY3VsZVRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsICAgXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mZXRjaF92ZWhpY3VsZXMnKSxcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIGRhdGFTcmM6IGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBhY3Rpb25zIGdsb2JhbGx5IGZvciBkeW5hbWljIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lmdsb2JhbEFjdGlvbnMgPSBBcnJheS5pc0FycmF5KGpzb24uYWN0aW9ucykgPyBqc29uLmFjdGlvbnMgOiBPYmplY3QudmFsdWVzKGpzb24uYWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5kYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7IGRhdGE6ICdpZCcsIG5hbWU6ICd2LmlkJyB9LFxyXG4gICAgICAgICAgICB7IGRhdGE6ICdtYXRyaWN1bGUnLCBuYW1lOiAndi5tYXRyaWN1bGUnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ21vZGVsJywgbmFtZTogJ3YubW9kZWwnIH0sXHJcbiAgICAgICAgICAgIHsgZGF0YTogJ2NhcmJ1cmFudCcsIG5hbWU6ICd2LmNhcmJ1cmFudCcgfSxcclxuICAgICAgICAgICAgeyBkYXRhOiAndHJhbnNtaXNzaW9uJywgbmFtZTogJ3YudHJhbnNtaXNzaW9uJyB9LFxyXG4gICAgICAgICAgICB7IGRhdGE6ICdraWxvbWV0cmFnZScsIG5hbWU6ICd2LmtpbG9tZXRyYWdlJyB9LFxyXG4gICAgICAgICAgICB7IGRhdGE6ICdjYXBhY2l0ZScsIG5hbWU6ICd2LmNhcGFjaXRlJyB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnYWN0aXZlJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd2LmFjdGl2ZScsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBhY3RpZkljb25cIj48L2k+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGluYWN0aWZJY29uXCI+PC9pPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FjdGlvbnMnLCBkYXRlOiBudWxsLCBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiBmYWxzZSwgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSx0eXBlLCBmdWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uc0h0bWwgPSBgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCIke2Z1bGwuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1jb250ZW50IGRpdk1lbnVcIiBpZD1cImRpdk1lbnUke2Z1bGwuaWR9XCI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5nbG9iYWxBY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWlkPVwiJHtmdWxsLmlkfVwiIGNsYXNzPVwiJHthY3Rpb24uY2xhc3NOYW1lfSBkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj48aSBjbGFzcz1cIiR7YWN0aW9uLmljb259IG1lbnVJY29uXCI+PC9pPiAke2FjdGlvbi5ub219PC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zSHRtbDtcclxuICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2hcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBEZWJ1ZyA6IGJvdXRvbiBjbGlxdcOpICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb3VibmE6XCIsICQodGhpcykuYXR0cihcImRhdGEtYnMtdGFyZ2V0XCIpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoYXJnZXIgbGVzIGluZm9zIGTigJl1biB2w6loaWN1bGUgw6AgbW9kaWZpZXJcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuVXBkYXRlVmVoaWN1bGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZlaGljdWxlSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy92ZWhpY3VsZS9nZXRWZWhpY3VsZS8nICsgdmVoaWN1bGVJZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQoJyNpZFZlaGljdWxlJykudmFsKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21hdHJpY3VsZVVwZCcpLnZhbChkYXRhLm1hdHJpY3VsZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kZWxVcGQnKS52YWwoZGF0YS5tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjY2FyYnVyYW50VXBkJykudmFsKGRhdGEuY2FyYnVyYW50KTtcclxuICAgICAgICAgICAgICAgICQoJyN0cmFuc21pc3Npb25VcGQnKS52YWwoZGF0YS50cmFuc21pc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgJCgnI2tpbG9tZXRyYWdlVXBkJykudmFsKGRhdGEua2lsb21ldHJhZ2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2NhcGFjaXRlVXBkJykudmFsKGRhdGEuY2FwYWNpdGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21hcnF1ZV92ZWhpY3VsZV9pZF91cGQnKS52YWwoZGF0YS5tYXJxdWVfdmVoaWN1bGVfaWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3R5cGVfdmVoaWN1bGVfaWRfdXBkJykudmFsKGRhdGEudHlwZV92ZWhpY3VsZV9pZCkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2FjdGlmVXBkJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjaW5hY3RpZlVwZCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdXBkYXRlVmVoaWN1bGUnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSB2w6loaWN1bGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFbnJlZ2lzdHJlciBsZXMgbW9kaWZpY2F0aW9ucyBk4oCZdW4gdsOpaGljdWxlXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNhdmVVcGRhdGVWZWhpY3VsZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6ICQoJyNpZFZlaGljdWxlJykudmFsKCksXHJcbiAgICAgICAgICAgIG1hdHJpY3VsZTogJCgnI21hdHJpY3VsZVVwZCcpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgbW9kZWw6ICQoJyNtb2RlbFVwZCcpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgY2FyYnVyYW50OiAkKCcjY2FyYnVyYW50VXBkJykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICB0cmFuc21pc3Npb246ICQoJyN0cmFuc21pc3Npb25VcGQnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIGtpbG9tZXRyYWdlOiAkKCcja2lsb21ldHJhZ2VVcGQnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIGNhcGFjaXRlOiAkKCcjY2FwYWNpdGVVcGQnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIHN0YXR1c1ZlaGljdWxlOiAkKCdpbnB1dFtuYW1lPVwic3RhdHVzVmVoaWN1bGVVcGRcIl06Y2hlY2tlZCcpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXJxdWVfdmVoaWN1bGVfaWQ6ICQoJyNtYXJxdWVfdmVoaWN1bGVfaWRfdXBkJykudmFsKCksXHJcbiAgICAgICAgICAgIHR5cGVfdmVoaWN1bGVfaWQ6ICQoJyN0eXBlX3ZlaGljdWxlX2lkX3VwZCcpLnZhbCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVsOpcmlmaWNhdGlvbiBzaW1wbGVcclxuICAgICAgICBpZiAoIWRhdGEubWF0cmljdWxlIHx8ICFkYXRhLm1vZGVsIHx8ICFkYXRhLmNhcmJ1cmFudCB8fCAhZGF0YS50cmFuc21pc3Npb24gfHwgIWRhdGEua2lsb21ldHJhZ2UgfHwgIWRhdGEuY2FwYWNpdGUgfHwgIWRhdGEubWFycXVlX3ZlaGljdWxlX2lkIHx8ICFkYXRhLnR5cGVfdmVoaWN1bGVfaWQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgb2JsaWdhdG9pcmVzLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3ZlaGljdWxlL3VwZGF0ZVZlaGljdWxlJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJyN1cGRhdGVWZWhpY3VsZScpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlbDqWhpY3VsZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMuXCIpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIG91IHJlY2hhcmdlciB1bmUgc2V1bGUgbGlnbmUgZHluYW1pcXVlbWVudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsYSBtb2RpZmljYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gIFNvdW1pc3Npb24gQUpBWCBwb3VyIGFqb3V0ZXIgdW4gdsOpaGljdWxlXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNhdmVBZGRWZWhpY3VsZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgbWF0cmljdWxlOiAkKCcjbWF0cmljdWxlJykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICBtb2RlbDogJCgnI21vZGVsJykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICBjYXJidXJhbnQ6ICQoJyNjYXJidXJhbnQnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIHRyYW5zbWlzc2lvbjogJCgnI3RyYW5zbWlzc2lvbicpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAga2lsb21ldHJhZ2U6ICQoJyNraWxvbWV0cmFnZScpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgY2FwYWNpdGU6ICQoJyNjYXBhY2l0ZScpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgc3RhdHVzOiAkKCdpbnB1dFtuYW1lPVwic3RhdHVzVmVoaWN1bGVcIl06Y2hlY2tlZCcpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXJxdWVfdmVoaWN1bGVfaWQ6ICQoJyNtYXJxdWVfdmVoaWN1bGVfaWQnKS52YWwoKSxcclxuICAgICAgICAgICAgdHlwZV92ZWhpY3VsZV9pZDogJCgnI3R5cGVfdmVoaWN1bGVfaWQnKS52YWwoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5tYXRyaWN1bGUgfHwgIWRhdGEubW9kZWwgfHwgIWRhdGEuY2FyYnVyYW50IHx8ICFkYXRhLnRyYW5zbWlzc2lvbiB8fCAhZGF0YS5raWxvbWV0cmFnZSB8fCAhZGF0YS5jYXBhY2l0ZSB8fCAhZGF0YS5tYXJxdWVfdmVoaWN1bGVfaWQgfHwgIWRhdGEudHlwZV92ZWhpY3VsZV9pZCkge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJWZXVpbGxleiByZW1wbGlyIHRvdXMgbGVzIGNoYW1wcyBvYmxpZ2F0b2lyZXMuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvdmVoaWN1bGUvYWRkVmVoaWN1bGUnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWw4lISUNVTEUgRVhJU1RFIETDiUrDgCAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjYWRkVmVoaWN1bGUnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJWw6loaWN1bGUgYWpvdXTDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBsb3JzIGRlIGwnYWpvdXQuXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyDwn5SEIEFjdGl2YXRpb24vRMOpc2FjdGl2YXRpb24gZOKAmXVuIHbDqWhpY3VsZVxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0blRvZ2dsZVN0YXR1c1ZlaGljdWxlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHZlaGljdWxlSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvdmVoaWN1bGUvdG9nZ2xlU3RhdHVzLycgKyB2ZWhpY3VsZUlkLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy8gb3UgcmFmcmHDrmNoaXIgZHluYW1pcXVlbWVudCBsYSBsaWduZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgXCJFcnJldXIgaW5hdHRlbmR1ZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZGUgc3RhdHV0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImdsb2JhbEFjdGlvbnMiLCJEYXRhVGFibGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGF0YVNyYyIsImpzb24iLCJ3aW5kb3ciLCJBcnJheSIsImlzQXJyYXkiLCJhY3Rpb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0YSIsImNvbHVtbnMiLCJuYW1lIiwicmVuZGVyIiwiZGF0ZSIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJmdWxsIiwiYWN0aW9uc0h0bWwiLCJjb25jYXQiLCJpZCIsImZvckVhY2giLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpY29uIiwibm9tIiwibGFuZ3VhZ2UiLCJkYXRhdGFibGVzRnJlbmNoIiwib24iLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsInZlaGljdWxlSWQiLCJtZXRob2QiLCJzdWNjZXNzIiwidmFsIiwibWF0cmljdWxlIiwibW9kZWwiLCJjYXJidXJhbnQiLCJ0cmFuc21pc3Npb24iLCJraWxvbWV0cmFnZSIsImNhcGFjaXRlIiwibWFycXVlX3ZlaGljdWxlX2lkIiwidHJpZ2dlciIsInR5cGVfdmVoaWN1bGVfaWQiLCJhY3RpdmUiLCJwcm9wIiwibW9kYWwiLCJlcnJvciIsInRvYXN0ciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJzdGF0dXNWZWhpY3VsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwieGhyIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzIiwicmVzcG9uc2UiLCJleGlzdHMiLCJ3YXJuaW5nIiwic2V0VGltZW91dCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9