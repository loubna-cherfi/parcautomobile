(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_profile"],{

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

/***/ "./assets/js/settings/profile.js":
/*!***************************************!*\
  !*** ./assets/js/settings/profile.js ***!
  \***************************************/
/***/ (() => {

$(document).ready(function () {
  $("#profession").select2();
  $("body").on("click", "#saveInfoUser", function () {
    var id = $("#id").val();
    var fullName = $("#fullName").val();
    var status = $('input[name="active"]:checked').val();
    var profession = $("#profession").val();
    var la = ladda.create(document.activeElement);
    la.start();
    $.ajax({
      type: "POST",
      url: "/updateInfoUser",
      data: {
        id: id,
        fullName: fullName,
        status: status,
        profession: profession
      },
      success: function success(data) {
        la.stop();
        toastr.success("Modification fait avec succéss !");
      },
      error: function error() {
        la.stop();
        toastr.error("Erreur");
      }
    });
  });
  $("body").on("click", "#savePasswordChange", function () {
    var id = $("#id").val();
    var oldPassword = $("#currentPassword").val();
    var newPassword = $("#newPassword").val();
    var repeatNewPassword = $("#repeatNewPassword").val();
    if (!oldPassword) {
      toastr.warning("Veuillez entrer le mot de passe actuel");
    } else if (!newPassword) {
      toastr.warning("Veuillez entrer le nouveau mot de passe");
    } else if (!repeatNewPassword) {
      toastr.warning("Veuillez confirmer le nouveau mot de passe");
    } else if (newPassword != repeatNewPassword) {
      toastr.warning("Veuillez confirmer le même nouveau mot de passe");
    } else {
      var la = ladda.create(document.activeElement);
      la.start();
      $.ajax({
        type: "POST",
        url: "/updatePassword",
        data: {
          id: id,
          oldPassword: oldPassword,
          newPassword: newPassword,
          repeatNewPassword: repeatNewPassword
        },
        success: function success(data) {
          if (data == "GOOD") {
            toastr.success("Votre mot de passe à été modifié !");
          } else {
            toastr.warning(data);
          }
          la.stop();
        },
        error: function error() {
          toastr.error("Erreur");
          la.stop();
        }
      });
    }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/profile.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNJLEtBQUssQ0FBQyxDQUFDO01BRWhCZCxDQUFDLENBQUNlLElBQUksQ0FBQztRQUNMQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxHQUFHLEVBQUMsaUJBQWlCO1FBQ3JCQyxJQUFJLEVBQUM7VUFDSGIsRUFBRSxFQUFDQSxFQUFFO1VBQ0xrQixXQUFXLEVBQUNBLFdBQVc7VUFDdkJDLFdBQVcsRUFBQ0EsV0FBVztVQUN2QkMsaUJBQWlCLEVBQUNBO1FBQ3BCLENBQUM7UUFDRE4sT0FBTyxFQUFFLFNBQUFBLFFBQVNELElBQUksRUFBQztVQUNyQixJQUFHQSxJQUFJLElBQUksTUFBTSxFQUFDO1lBRWhCRyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztVQUN0RCxDQUFDLE1BQ0c7WUFDRkUsTUFBTSxDQUFDSyxPQUFPLENBQUNSLElBQUksQ0FBQztVQUN0QjtVQUVBUixFQUFFLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUNERSxLQUFLLEVBQUMsU0FBQUEsTUFBQSxFQUFVO1VBQ2RELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQztVQUV0QlosRUFBRSxDQUFDVSxJQUFJLENBQUMsQ0FBQztRQUNYO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFJRixDQUFDLENBQUM7QUFHSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7aW1wb3J0IHJvdXRlcyBmcm9tIFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcUEFSQ0FVVE9cXFxcdmFyXFxcXGNhY2hlXFxcXGZvc1JvdXRlcy5qc29uXCI7Um91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoXCIjcHJvZmVzc2lvblwiKS5zZWxlY3QyKCk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjc2F2ZUluZm9Vc2VyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaWQgPSAkKFwiI2lkXCIpLnZhbCgpO1xyXG4gICAgdmFyIGZ1bGxOYW1lID0gJChcIiNmdWxsTmFtZVwiKS52YWwoKTtcclxuICAgIHZhciBzdGF0dXMgPSAkKCdpbnB1dFtuYW1lPVwiYWN0aXZlXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBwcm9mZXNzaW9uID0gJChcIiNwcm9mZXNzaW9uXCIpLnZhbCgpO1xyXG5cclxuICAgIGNvbnN0IGxhID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIGxhLnN0YXJ0KCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDpcIi91cGRhdGVJbmZvVXNlclwiLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBpZDppZCxcclxuICAgICAgICBmdWxsTmFtZTpmdWxsTmFtZSxcclxuICAgICAgICBzdGF0dXM6c3RhdHVzLFxyXG4gICAgICAgIHByb2Zlc3Npb246cHJvZmVzc2lvblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBcclxuICAgICAgICBsYS5zdG9wKClcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIk1vZGlmaWNhdGlvbiBmYWl0IGF2ZWMgc3VjY8Opc3MgIVwiKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICBsYS5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjc2F2ZVBhc3N3b3JkQ2hhbmdlXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaWQgPSAkKFwiI2lkXCIpLnZhbCgpO1xyXG4gICAgdmFyIG9sZFBhc3N3b3JkID0gJChcIiNjdXJyZW50UGFzc3dvcmRcIikudmFsKCk7XHJcbiAgICB2YXIgbmV3UGFzc3dvcmQgPSAkKFwiI25ld1Bhc3N3b3JkXCIpLnZhbCgpO1xyXG4gICAgdmFyIHJlcGVhdE5ld1Bhc3N3b3JkID0gJChcIiNyZXBlYXROZXdQYXNzd29yZFwiKS52YWwoKTtcclxuXHJcbiAgICBpZighb2xkUGFzc3dvcmQpe1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IGVudHJlciBsZSBtb3QgZGUgcGFzc2UgYWN0dWVsXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighbmV3UGFzc3dvcmQpe1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IGVudHJlciBsZSBub3V2ZWF1IG1vdCBkZSBwYXNzZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIXJlcGVhdE5ld1Bhc3N3b3JkKXtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBjb25maXJtZXIgbGUgbm91dmVhdSBtb3QgZGUgcGFzc2VcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKG5ld1Bhc3N3b3JkICE9IHJlcGVhdE5ld1Bhc3N3b3JkKXtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBjb25maXJtZXIgbGUgbcOqbWUgbm91dmVhdSBtb3QgZGUgcGFzc2VcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgY29uc3QgbGEgPSBsYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBsYS5zdGFydCgpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6XCIvdXBkYXRlUGFzc3dvcmRcIixcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgb2xkUGFzc3dvcmQ6b2xkUGFzc3dvcmQsXHJcbiAgICAgICAgICBuZXdQYXNzd29yZDpuZXdQYXNzd29yZCxcclxuICAgICAgICAgIHJlcGVhdE5ld1Bhc3N3b3JkOnJlcGVhdE5ld1Bhc3N3b3JkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgIGlmKGRhdGEgPT0gXCJHT09EXCIpe1xyXG5cclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJWb3RyZSBtb3QgZGUgcGFzc2Ugw6Agw6l0w6kgbW9kaWZpw6kgIVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGRhdGEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxhLnN0b3AoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiKVxyXG5cclxuICAgICAgICAgIGxhLnN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgfSlcclxuICBcclxuXHJcbn0pIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2VsZWN0MiIsIm9uIiwiaWQiLCJ2YWwiLCJmdWxsTmFtZSIsInN0YXR1cyIsInByb2Zlc3Npb24iLCJsYSIsImxhZGRhIiwiY3JlYXRlIiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsInN0b3AiLCJ0b2FzdHIiLCJlcnJvciIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJyZXBlYXROZXdQYXNzd29yZCIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9