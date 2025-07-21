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
/***/ (() => {

$(document).ready(function () {
  // Initialisation de la table
  $('#missionTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'Tous']],
    autoWidth: false,
    destroy: true
  });
  var currentMissionId = null;

  // Quand on clique sur "Évaluer"
  $(document).on('click', '.btnEvaluerDemande', function () {
    currentMissionId = $(this).data('id');
    $('#noteEvaluation').val(0);
    $('#starRating .star').css('color', '#ccc'); // reset des étoiles
  });

  // Interaction avec les étoiles
  $(document).on('click', '#starRating .star', function () {
    var value = $(this).data('value');
    $('#noteEvaluation').val(value);
    $('#starRating .star').each(function () {
      var starValue = $(this).data('value');
      $(this).css('color', starValue <= value ? '#f0ad4e' : '#ccc');
    });
  });

  // Envoi de l'évaluation
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
        toastr.success("Évaluation enregistrée avec succès.");
        location.reload();
      },
      error: function error() {
        alert("Erreur lors de l'enregistrement de l'évaluation.");
        toastr.success("Évaluation enregistrée avec succès.");
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
module.exports = JSON.parse('{"base_url":"","routes":{"app_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_list":{"tokens":[["text","/setting/module/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_add":{"tokens":[["text","/setting/module/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_toggle_active":{"tokens":[["variable","/","[^/]++","module",true],["text","/setting/module/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_list":{"tokens":[["text","/setting/sousmodule/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_add":{"tokens":[["text","/setting/sousmodule/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_toggle_active":{"tokens":[["variable","/","[^/]++","sousmodule",true],["text","/setting/sousmodule/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_assign_convention":{"tokens":[["text","/user/assign-convention"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_assign_caisse":{"tokens":[["text","/user/assign-caisse"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_duplicate_user":{"tokens":[["text","/user/duplicate-user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/mission.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy9taXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7aW1wb3J0IHJvdXRlcyBmcm9tIFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcUEFSQ0FVVE9cXFxcdmFyXFxcXGNhY2hlXFxcXGZvc1JvdXRlcy5qc29uXCI7Um91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyBJbml0aWFsaXNhdGlvbiBkZSBsYSB0YWJsZVxyXG4gICQoJyNtaXNzaW9uVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgbGVuZ3RoTWVudTogW1sxNSwgMjUsIDUwLCAtMV0sIFsxNSwgMjUsIDUwLCAnVG91cyddXSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgICBkZXN0cm95OiB0cnVlXHJcbiAgfSk7XHJcblxyXG5cclxuICBcclxuICBsZXQgY3VycmVudE1pc3Npb25JZCA9IG51bGw7XHJcblxyXG4gIC8vIFF1YW5kIG9uIGNsaXF1ZSBzdXIgXCLDiXZhbHVlclwiXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5FdmFsdWVyRGVtYW5kZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGN1cnJlbnRNaXNzaW9uSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAkKCcjbm90ZUV2YWx1YXRpb24nKS52YWwoMCk7XHJcbiAgICAkKCcjc3RhclJhdGluZyAuc3RhcicpLmNzcygnY29sb3InLCAnI2NjYycpOyAvLyByZXNldCBkZXMgw6l0b2lsZXNcclxuICB9KTtcclxuXHJcbiAgLy8gSW50ZXJhY3Rpb24gYXZlYyBsZXMgw6l0b2lsZXNcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3N0YXJSYXRpbmcgLnN0YXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcclxuICAgICQoJyNub3RlRXZhbHVhdGlvbicpLnZhbCh2YWx1ZSk7XHJcblxyXG4gICAgJCgnI3N0YXJSYXRpbmcgLnN0YXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgc3RhclZhbHVlID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xyXG4gICAgICAkKHRoaXMpLmNzcygnY29sb3InLCBzdGFyVmFsdWUgPD0gdmFsdWUgPyAnI2YwYWQ0ZScgOiAnI2NjYycpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEVudm9pIGRlIGwnw6l2YWx1YXRpb25cclxuICAkKCcjc3VibWl0RXZhbHVhdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5vdGUgPSAkKCcjbm90ZUV2YWx1YXRpb24nKS52YWwoKTtcclxuXHJcbiAgICBpZiAoIW5vdGUgfHwgbm90ZSA9PSAwKSB7XHJcbiAgICAgIFxyXG4gICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW5lIG5vdGUgYXZhbnQgZCdlbnZveWVyLlwiKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IGAvbWlzc2lvbi9ldmFsdWVyLyR7Y3VycmVudE1pc3Npb25JZH1gLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgZGF0YTogeyBub3RlOiBub3RlIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAkKCcjZXZhbHVlck1pc3Npb25Nb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCLDiXZhbHVhdGlvbiBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBsb3JzIGRlIGwnZW5yZWdpc3RyZW1lbnQgZGUgbCfDqXZhbHVhdGlvbi5cIik7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCLDiXZhbHVhdGlvbiBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51IiwiYXV0b1dpZHRoIiwiZGVzdHJveSIsImN1cnJlbnRNaXNzaW9uSWQiLCJvbiIsImRhdGEiLCJ2YWwiLCJjc3MiLCJ2YWx1ZSIsImVhY2giLCJzdGFyVmFsdWUiLCJub3RlIiwidG9hc3RyIiwid2FybmluZyIsImFqYXgiLCJ1cmwiLCJjb25jYXQiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwibW9kYWwiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9