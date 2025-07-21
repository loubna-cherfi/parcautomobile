(self["webpackChunk"] = self["webpackChunk"] || []).push([["settings_conducteur"],{

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

/***/ "./assets/js/settings/conducteur.js":
/*!******************************************!*\
  !*** ./assets/js/settings/conducteur.js ***!
  \******************************************/
/***/ (() => {

$(document).ready(function () {
  // Initialize Select2
  $("select").select2();

  // Initialize DataTable
  initDataTable();
  function initDataTable() {
    $('#conducteurTable').DataTable({
      lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'ALL']],
      autoWidth: false,
      destroy: true // important pour reinitialiser après refresh
    });
  }

  // Debug : affiche le data-bs-target
  $(document).on('click', 'button', function () {
    console.log("loubna:", $(this).attr("data-bs-target"));
  });
  $(document).on('click', '.btnUpdateConducteur', function () {
    var conducteurId = $(this).data('id');
    $.ajax({
      url: '/conducteur/getConducteur/' + conducteurId,
      method: 'GET',
      success: function success(data) {
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
      error: function error(xhr) {
        toastr.error("Erreur lors du chargement du conducteur.");
        console.error(xhr.responseText);
      }
    });
  });
  $(document).on('click', '.saveUpdateConducteur', function (e) {
    e.preventDefault();
    var data = {
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
    var id = $(this).data('id');
    $.post('/conducteur/toggleConducteur/' + id, function (response) {
      toastr.success(response.success);
      location.reload(); // ou mise à jour du DOM si tu préfères
    }).fail(function (xhr) {
      toastr.error("Erreur lors du changement de statut");
    });
  });
  $(document).on('click', '.saveAddConducteur', function (e) {
    e.preventDefault();
    var data = {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/conducteur.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVVWLEdBQUcsRUFBRTtNQUNuQkMsTUFBTSxDQUFDRixLQUFLLENBQUMsc0NBQXNDLENBQUM7TUFDcER0QixPQUFPLENBQUNzQixLQUFLLENBQUNDLEdBQUcsQ0FBQ0UsWUFBWSxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUdNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NldHRpbmdzL2NvbmR1Y3RldXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBTZWxlY3QyXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIERhdGFUYWJsZVxyXG4gICAgaW5pdERhdGFUYWJsZSgpO1xyXG4gICBcclxuICAgIGZ1bmN0aW9uIGluaXREYXRhVGFibGUoKSB7XHJcbiAgICAgICAgJCgnI2NvbmR1Y3RldXJUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgJ0FMTCddXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc3Ryb3k6IHRydWUgLy8gaW1wb3J0YW50IHBvdXIgcmVpbml0aWFsaXNlciBhcHLDqHMgcmVmcmVzaFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlYnVnIDogYWZmaWNoZSBsZSBkYXRhLWJzLXRhcmdldFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvdWJuYTpcIiwgJCh0aGlzKS5hdHRyKFwiZGF0YS1icy10YXJnZXRcIikpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0blVwZGF0ZUNvbmR1Y3RldXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY29uZHVjdGV1cklkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2NvbmR1Y3RldXIvZ2V0Q29uZHVjdGV1ci8nICsgY29uZHVjdGV1cklkLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBSZW1wbGlyIGxlcyBjaGFtcHNcclxuICAgICAgICAgICAgJCgnI2lkQ29uZHVjdGV1cicpLnZhbChkYXRhLmlkKTtcclxuICAgICAgICAgICAgJCgnI25vbVVwZCcpLnZhbChkYXRhLm5vbSk7XHJcbiAgICAgICAgICAgICQoJyNwcmVub21VcGQnKS52YWwoZGF0YS5wcmVub20pO1xyXG4gICAgICAgICAgICAkKCcjY2luVXBkJykudmFsKGRhdGEuY2luKTtcclxuICAgICAgICAgICAgJCgnI3RlbGVwaG9uZVVwZCcpLnZhbChkYXRhLnRlbGVwaG9uZSk7XHJcbiAgICAgICAgICAgICQoJyNwZXJtaXNOdW1lcm9VcGQnKS52YWwoZGF0YS5wZXJtaXNOdW1lcm8pO1xyXG4gICAgICAgICAgICAkKCcjcGVybWlzVHlwZVVwZCcpLnZhbChkYXRhLnBlcm1pc1R5cGUpO1xyXG4gICAgICAgICAgICAkKCcjZW1haWxVcGQnKS52YWwoZGF0YS5lbWFpbCk7XHJcbiAgICAgICAgICAgICQoJyNhZHJlc3NlVXBkJykudmFsKGRhdGEuYWRyZXNzZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSYWRpbyBib3V0b25cclxuICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWN0aWZ1cGQnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZGVzYWN0aWZ1cGQnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGVyIGxlIG1vZGFsXHJcbiAgICAgICAgICAgICQoJyN1cGRhdGVDb25kdWN0ZXVyJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBjb25kdWN0ZXVyLlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2F2ZVVwZGF0ZUNvbmR1Y3RldXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBpZDogJCgnI2lkQ29uZHVjdGV1cicpLnZhbCgpLFxyXG4gICAgICAgIG5vbTogJCgnI25vbVVwZCcpLnZhbCgpLFxyXG4gICAgICAgIHByZW5vbTogJCgnI3ByZW5vbVVwZCcpLnZhbCgpLFxyXG4gICAgICAgIGNpbjogJCgnI2NpblVwZCcpLnZhbCgpLFxyXG4gICAgICAgIHBlcm1pc051bWVybzogJCgnI3Blcm1pc051bWVyb1VwZCcpLnZhbCgpLFxyXG4gICAgICAgIHBlcm1pc1R5cGU6ICQoJyNwZXJtaXNUeXBlVXBkJykudmFsKCksXHJcbiAgICAgICAgdGVsZXBob25lOiAkKCcjdGVsZXBob25lVXBkJykudmFsKCksXHJcbiAgICAgICAgZW1haWw6ICQoJyNlbWFpbFVwZCcpLnZhbCgpLFxyXG4gICAgICAgIGFkcmVzc2U6ICQoJyNhZHJlc3NlVXBkJykudmFsKCksXHJcbiAgICAgICAgc3RhdHVzOiAkKCdpbnB1dFtuYW1lPVwic3RhdHVzdXBkXCJdOmNoZWNrZWQnKS52YWwoKVxyXG4gICAgfTtcclxuXHJcbiAgICAkLnBvc3QoJy9jb25kdWN0ZXVyL3VwZGF0ZUNvbmR1Y3RldXInLCBkYXRhLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5zdWNjZXNzKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy8gb3UgcmVjaGFyZ2VyIGxhIERhdGFUYWJsZVxyXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgbW9kaWZpY2F0aW9uXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0blRvZ2dsZVN0YXR1c0NvbmR1Y3RldXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgJC5wb3N0KCcvY29uZHVjdGV1ci90b2dnbGVDb25kdWN0ZXVyLycgKyBpZCwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIG91IG1pc2Ugw6Agam91ciBkdSBET00gc2kgdHUgcHLDqWbDqHJlc1xyXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgY2hhbmdlbWVudCBkZSBzdGF0dXRcIik7XHJcbiAgICB9KTtcclxufSk7XHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2F2ZUFkZENvbmR1Y3RldXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxubGV0IGRhdGEgPSB7XHJcbiAgICBub206ICQoJyNub20nKS52YWwoKSxcclxuICAgIHByZW5vbTogJCgnI3ByZW5vbScpLnZhbCgpLFxyXG4gICAgY2luOiAkKCcjY2luJykudmFsKCksXHJcbiAgICBwZXJtaXNOdW1lcm86ICQoJyNwZXJtaXNOdW1lcm8nKS52YWwoKSxcclxuICAgIHBlcm1pc1R5cGU6ICQoJyNwZXJtaXNUeXBlJykudmFsKCksXHJcbiAgICB0ZWxlcGhvbmU6ICQoJyN0ZWxlcGhvbmUnKS52YWwoKSxcclxuICAgIGVtYWlsOiAkKCcjZW1haWwnKS52YWwoKSxcclxuICAgIGFkcmVzc2U6ICQoJyNhZHJlc3NlJykudmFsKCksXHJcbiAgICBwZXJtaXNEYXRlT2J0ZW50aW9uOiAkKCcjcGVybWlzRGF0ZU9idGVudGlvbicpLnZhbCgpLFxyXG4gICAgZGF0ZU5haXNzYW5jZTogJCgnI2RhdGVOYWlzc2FuY2UnKS52YWwoKSxcclxuICAgIHN0YXR1czogJCgnaW5wdXRbbmFtZT1cInN0YXR1c1wiXTpjaGVja2VkJykudmFsKClcclxufTtcclxuXHJcblxyXG4gICAgJC5wb3N0KCcvY29uZHVjdGV1ci9hZGRDb25kdWN0ZXVyJywgZGF0YSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgJCgnI2FkZENvbmR1Y3RldXInKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvLyBvdSByZWxvYWQgRGF0YVRhYmxlIHNpIHR1IHZldXggw6l2aXRlciBsZSByZWNoYXJnZW1lbnQgY29tcGxldFxyXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdham91dCBkdSBjb25kdWN0ZXVyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuICAgICAgICB9KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QyIiwiaW5pdERhdGFUYWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJhdXRvV2lkdGgiLCJkZXN0cm95Iiwib24iLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsImNvbmR1Y3RldXJJZCIsImRhdGEiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInZhbCIsImlkIiwibm9tIiwicHJlbm9tIiwiY2luIiwidGVsZXBob25lIiwicGVybWlzTnVtZXJvIiwicGVybWlzVHlwZSIsImVtYWlsIiwiYWRyZXNzZSIsImFjdGl2ZSIsInByb3AiLCJtb2RhbCIsImVycm9yIiwieGhyIiwidG9hc3RyIiwicmVzcG9uc2VUZXh0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdHVzIiwicG9zdCIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicGVybWlzRGF0ZU9idGVudGlvbiIsImRhdGVOYWlzc2FuY2UiXSwic291cmNlUm9vdCI6IiJ9