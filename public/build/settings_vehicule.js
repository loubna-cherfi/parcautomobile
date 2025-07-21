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

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
$(document).ready(function () {
  // Initialiser Select2
  $("select").select2();

  // Initialiser DataTable
  initDataTable();
  function initDataTable() {
    $('#vehiculeTable').DataTable({
      lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'Tous']],
      autoWidth: false,
      destroy: true
    });
  }

  // Debug : bouton cliqué  
  $(document).on('click', 'button', function () {
    console.log("loubna:", $(this).attr("data-bs-target"));
  });

  // 👉 Charger les infos d’un véhicule à modifier
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

  // ✅ Enregistrer les modifications d’un véhicule
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

  // ➕ Soumission AJAX pour ajouter un véhicule
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
        $('#listVehicules').html(response); // rafraîchir la liste
        initDataTable();
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

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/vehicule.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJhO0FBQ2IsY0FBYyxtQkFBTyxDQUFDLHlFQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLDZHQUF3QztBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywrRkFBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBdUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NldHRpbmdzL3ZlaGljdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gSW5pdGlhbGlzZXIgU2VsZWN0MlxyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZXIgRGF0YVRhYmxlXHJcbiAgICBpbml0RGF0YVRhYmxlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdERhdGFUYWJsZSgpIHtcclxuICAgICAgICAkKCcjdmVoaWN1bGVUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgJ1RvdXMnXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXN0cm95OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVidWcgOiBib3V0b24gY2xpcXXDqSAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG91Ym5hOlwiLCAkKHRoaXMpLmF0dHIoXCJkYXRhLWJzLXRhcmdldFwiKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDwn5GJIENoYXJnZXIgbGVzIGluZm9zIGTigJl1biB2w6loaWN1bGUgw6AgbW9kaWZpZXJcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuVXBkYXRlVmVoaWN1bGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZlaGljdWxlSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy92ZWhpY3VsZS9nZXRWZWhpY3VsZS8nICsgdmVoaWN1bGVJZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQoJyNpZFZlaGljdWxlJykudmFsKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21hdHJpY3VsZVVwZCcpLnZhbChkYXRhLm1hdHJpY3VsZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kZWxVcGQnKS52YWwoZGF0YS5tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjY2FyYnVyYW50VXBkJykudmFsKGRhdGEuY2FyYnVyYW50KTtcclxuICAgICAgICAgICAgICAgICQoJyN0cmFuc21pc3Npb25VcGQnKS52YWwoZGF0YS50cmFuc21pc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgJCgnI2tpbG9tZXRyYWdlVXBkJykudmFsKGRhdGEua2lsb21ldHJhZ2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2NhcGFjaXRlVXBkJykudmFsKGRhdGEuY2FwYWNpdGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21hcnF1ZV92ZWhpY3VsZV9pZF91cGQnKS52YWwoZGF0YS5tYXJxdWVfdmVoaWN1bGVfaWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3R5cGVfdmVoaWN1bGVfaWRfdXBkJykudmFsKGRhdGEudHlwZV92ZWhpY3VsZV9pZCkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2FjdGlmVXBkJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjaW5hY3RpZlVwZCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdXBkYXRlVmVoaWN1bGUnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSB2w6loaWN1bGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDinIUgRW5yZWdpc3RyZXIgbGVzIG1vZGlmaWNhdGlvbnMgZOKAmXVuIHbDqWhpY3VsZVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zYXZlVXBkYXRlVmVoaWN1bGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiAkKCcjaWRWZWhpY3VsZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXRyaWN1bGU6ICQoJyNtYXRyaWN1bGVVcGQnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIG1vZGVsOiAkKCcjbW9kZWxVcGQnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIGNhcmJ1cmFudDogJCgnI2NhcmJ1cmFudFVwZCcpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgdHJhbnNtaXNzaW9uOiAkKCcjdHJhbnNtaXNzaW9uVXBkJykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICBraWxvbWV0cmFnZTogJCgnI2tpbG9tZXRyYWdlVXBkJykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICBjYXBhY2l0ZTogJCgnI2NhcGFjaXRlVXBkJykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICBzdGF0dXNWZWhpY3VsZTogJCgnaW5wdXRbbmFtZT1cInN0YXR1c1ZlaGljdWxlVXBkXCJdOmNoZWNrZWQnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFycXVlX3ZlaGljdWxlX2lkOiAkKCcjbWFycXVlX3ZlaGljdWxlX2lkX3VwZCcpLnZhbCgpLFxyXG4gICAgICAgICAgICB0eXBlX3ZlaGljdWxlX2lkOiAkKCcjdHlwZV92ZWhpY3VsZV9pZF91cGQnKS52YWwoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFbDqXJpZmljYXRpb24gc2ltcGxlXHJcbiAgICAgICAgaWYgKCFkYXRhLm1hdHJpY3VsZSB8fCAhZGF0YS5tb2RlbCB8fCAhZGF0YS5jYXJidXJhbnQgfHwgIWRhdGEudHJhbnNtaXNzaW9uIHx8ICFkYXRhLmtpbG9tZXRyYWdlIHx8ICFkYXRhLmNhcGFjaXRlIHx8ICFkYXRhLm1hcnF1ZV92ZWhpY3VsZV9pZCB8fCAhZGF0YS50eXBlX3ZlaGljdWxlX2lkKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIG9ibGlnYXRvaXJlcy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy92ZWhpY3VsZS91cGRhdGVWZWhpY3VsZScsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjdXBkYXRlVmVoaWN1bGUnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJWw6loaWN1bGUgbW9kaWZpw6kgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvLyBvdSByZWNoYXJnZXIgdW5lIHNldWxlIGxpZ25lIGR5bmFtaXF1ZW1lbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGxvcnMgZGUgbGEgbW9kaWZpY2F0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOKelSBTb3VtaXNzaW9uIEFKQVggcG91ciBham91dGVyIHVuIHbDqWhpY3VsZVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zYXZlQWRkVmVoaWN1bGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG1hdHJpY3VsZTogJCgnI21hdHJpY3VsZScpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgbW9kZWw6ICQoJyNtb2RlbCcpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgY2FyYnVyYW50OiAkKCcjY2FyYnVyYW50JykudmFsKCkudHJpbSgpLFxyXG4gICAgICAgICAgICB0cmFuc21pc3Npb246ICQoJyN0cmFuc21pc3Npb24nKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIGtpbG9tZXRyYWdlOiAkKCcja2lsb21ldHJhZ2UnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIGNhcGFjaXRlOiAkKCcjY2FwYWNpdGUnKS52YWwoKS50cmltKCksXHJcbiAgICAgICAgICAgIHN0YXR1czogJCgnaW5wdXRbbmFtZT1cInN0YXR1c1ZlaGljdWxlXCJdOmNoZWNrZWQnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFycXVlX3ZlaGljdWxlX2lkOiAkKCcjbWFycXVlX3ZlaGljdWxlX2lkJykudmFsKCksXHJcbiAgICAgICAgICAgIHR5cGVfdmVoaWN1bGVfaWQ6ICQoJyN0eXBlX3ZlaGljdWxlX2lkJykudmFsKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEubWF0cmljdWxlIHx8ICFkYXRhLm1vZGVsIHx8ICFkYXRhLmNhcmJ1cmFudCB8fCAhZGF0YS50cmFuc21pc3Npb24gfHwgIWRhdGEua2lsb21ldHJhZ2UgfHwgIWRhdGEuY2FwYWNpdGUgfHwgIWRhdGEubWFycXVlX3ZlaGljdWxlX2lkIHx8ICFkYXRhLnR5cGVfdmVoaWN1bGVfaWQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgb2JsaWdhdG9pcmVzLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3ZlaGljdWxlL2FkZFZlaGljdWxlJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVsOJSElDVUxFIEVYSVNURSBEw4lKw4AgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI2FkZFZlaGljdWxlJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiVsOpaGljdWxlIGFqb3V0w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjbGlzdFZlaGljdWxlcycpLmh0bWwocmVzcG9uc2UpOyAvLyByYWZyYcOuY2hpciBsYSBsaXN0ZVxyXG4gICAgICAgICAgICAgICAgaW5pdERhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsJ2Fqb3V0LlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8g8J+UhCBBY3RpdmF0aW9uL0TDqXNhY3RpdmF0aW9uIGTigJl1biB2w6loaWN1bGVcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5Ub2dnbGVTdGF0dXNWZWhpY3VsZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB2ZWhpY3VsZUlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL3ZlaGljdWxlL3RvZ2dsZVN0YXR1cy8nICsgdmVoaWN1bGVJZCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIG91IHJhZnJhw65jaGlyIGR5bmFtaXF1ZW1lbnQgbGEgbGlnbmVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8IFwiRXJyZXVyIGluYXR0ZW5kdWUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRlIHN0YXR1dC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcclxuXHJcbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcclxuXHJcbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XHJcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcclxuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKClcclxuICAgICAgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9PSBub25cclxuICAgICAgfHwgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xyXG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcclxuXHJcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XHJcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXlsnICsgd2hpdGVzcGFjZXMgKyAnXSsnKTtcclxudmFyIHJ0cmltID0gUmVnRXhwKCcoXnxbXicgKyB3aGl0ZXNwYWNlcyArICddKVsnICsgd2hpdGVzcGFjZXMgKyAnXSskJyk7XHJcblxyXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXHJcbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcclxuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XHJcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBsdHJpbSwgJycpO1xyXG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgcnRyaW0sICckMScpO1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XHJcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcclxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXHJcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcclxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcclxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxyXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcclxuXHJcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcclxuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XHJcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXHJcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXHJcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcclxudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XHJcblxyXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cclxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XHJcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcclxuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QyIiwiaW5pdERhdGFUYWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJhdXRvV2lkdGgiLCJkZXN0cm95Iiwib24iLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsInZlaGljdWxlSWQiLCJkYXRhIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJ2YWwiLCJpZCIsIm1hdHJpY3VsZSIsIm1vZGVsIiwiY2FyYnVyYW50IiwidHJhbnNtaXNzaW9uIiwia2lsb21ldHJhZ2UiLCJjYXBhY2l0ZSIsIm1hcnF1ZV92ZWhpY3VsZV9pZCIsInRyaWdnZXIiLCJ0eXBlX3ZlaGljdWxlX2lkIiwiYWN0aXZlIiwicHJvcCIsIm1vZGFsIiwiZXJyb3IiLCJ0b2FzdHIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwic3RhdHVzVmVoaWN1bGUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInhociIsInJlc3BvbnNlVGV4dCIsInN0YXR1cyIsInJlc3BvbnNlIiwiZXhpc3RzIiwid2FybmluZyIsImh0bWwiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==