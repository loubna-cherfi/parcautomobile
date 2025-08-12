(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_site"],{

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

/***/ "./assets/js/settings/site.js":
/*!************************************!*\
  !*** ./assets/js/settings/site.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
$(document).ready(function () {
  $("body").on("click", ".menu-item", function () {
    var id = $(this).attr('id');
    if ($(this).find(".modulePlus").hasClass("fa-plus")) {
      $(this).find(".modulePlus").removeClass("fa-plus");
      $(this).find(".modulePlus").addClass("fa-minus");
    } else {
      $(this).find(".modulePlus").addClass("fa-plus");
      $(this).find(".modulePlus").removeClass("fa-minus");
    }
    $("body #subMenu" + id).toggle("3s");
  });
  $("body").on("click", ".subMenu-item", function () {
    if ($(this).find(".submodulePlus").hasClass("fa-plus")) {
      $(this).find(".submodulePlus").removeClass("fa-plus");
      $(this).find(".submodulePlus").addClass("fa-minus");
    } else {
      $(this).find(".submodulePlus").addClass("fa-plus");
      $(this).find(".submodulePlus").removeClass("fa-minus");
    }
    var id = $(this).attr('id');
    $("body #action" + id).toggle("3s");
  });

  // $("#navbarDropdown").on("click", function(){
  //   $("#divMenu").toggle("5ms");
  // })

  // $("html").click(function(e) {
  //   if ($(e.target).closest('#navbarDropdown').length == 0)
  //       $("#divMenu").hide("5ms");
  // });

  $('body').on('change', '#site', function (e) {
    var id = $(this).val();
    if (id) {
      window.location.href = '/dossier/' + id;
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
module.exports = JSON.parse('{"base_url":"","routes":{"app_fetch_conducteurs":{"tokens":[["text","/conducteur/fetch-conducteurs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_fetch_demandes":{"tokens":[["text","/demande/fetch-demandes"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_fetch_missions":{"tokens":[["text","/mission/fetch-missions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_list":{"tokens":[["text","/setting/module/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_add":{"tokens":[["text","/setting/module/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_toggle_active":{"tokens":[["variable","/","[^/]++","module",true],["text","/setting/module/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_list":{"tokens":[["text","/setting/sousmodule/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_add":{"tokens":[["text","/setting/sousmodule/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_toggle_active":{"tokens":[["variable","/","[^/]++","sousmodule",true],["text","/setting/sousmodule/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_assign_convention":{"tokens":[["text","/user/assign-convention"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_assign_caisse":{"tokens":[["text","/user/assign-caisse"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_duplicate_user":{"tokens":[["text","/user/duplicate-user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_fetch_vehicules":{"tokens":[["text","/vehicule/fetch-vehicules"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-array_js-n-687a39","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-823ffa"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/site.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19zaXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkcsZ0VBQXNCLENBQUMsNEVBQU07Ozs7Ozs7Ozs7OztBQ0ExSUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFHM0JGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBVTtJQUN6QyxJQUFJQyxFQUFFLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUUzQixJQUFHTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDO01BQ2pEUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUNsRFIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNHLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDbEQsQ0FBQyxNQUNHO01BQ0ZULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDRyxRQUFRLENBQUMsU0FBUyxDQUFDO01BQy9DVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNyRDtJQUNBUixDQUFDLENBQUMsZUFBZSxHQUFDSSxFQUFFLENBQUMsQ0FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQztFQUNwQyxDQUFDLENBQUM7RUFFRlYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFVO0lBRTlDLElBQUdILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQztNQUNwRFAsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUNyRFIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0csUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUNyRCxDQUFDLE1BQ0c7TUFDRlQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0csUUFBUSxDQUFDLFNBQVMsQ0FBQztNQUNsRFQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUN4RDtJQUVBLElBQUlKLEVBQUUsR0FBR0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNCTCxDQUFDLENBQUMsY0FBYyxHQUFDSSxFQUFFLENBQUMsQ0FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQztFQUNuQyxDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBVixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVVRLENBQUMsRUFBRTtJQUMzQyxJQUFJUCxFQUFFLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1ksR0FBRyxDQUFDLENBQUM7SUFFdEIsSUFBSVIsRUFBRSxFQUFFO01BQ05TLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsV0FBVyxHQUFFWCxFQUFFO0lBQ3hDO0VBQ0YsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2V0dGluZ3Mvc2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGluZyBmcm9tIFwiZm9zLXJvdXRlclwiO2ltcG9ydCByb3V0ZXMgZnJvbSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXFBBUkNBVVRPXFxcXHZhclxcXFxjYWNoZVxcXFxmb3NSb3V0ZXMuanNvblwiO1JvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKXtcclxuXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5tZW51LWl0ZW1cIiwgZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgaWYoJCh0aGlzKS5maW5kKFwiLm1vZHVsZVBsdXNcIikuaGFzQ2xhc3MoXCJmYS1wbHVzXCIpKXtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIubW9kdWxlUGx1c1wiKS5yZW1vdmVDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLm1vZHVsZVBsdXNcIikuYWRkQ2xhc3MoXCJmYS1taW51c1wiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5tb2R1bGVQbHVzXCIpLmFkZENsYXNzKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIubW9kdWxlUGx1c1wiKS5yZW1vdmVDbGFzcyhcImZhLW1pbnVzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCJib2R5ICNzdWJNZW51XCIraWQpLnRvZ2dsZShcIjNzXCIpO1xyXG4gICAgfSlcclxuICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5zdWJNZW51LWl0ZW1cIiwgZnVuY3Rpb24oKXtcclxuICAgICAgXHJcbiAgICAgIGlmKCQodGhpcykuZmluZChcIi5zdWJtb2R1bGVQbHVzXCIpLmhhc0NsYXNzKFwiZmEtcGx1c1wiKSl7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLnN1Ym1vZHVsZVBsdXNcIikucmVtb3ZlQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5zdWJtb2R1bGVQbHVzXCIpLmFkZENsYXNzKFwiZmEtbWludXNcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIuc3VibW9kdWxlUGx1c1wiKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLnN1Ym1vZHVsZVBsdXNcIikucmVtb3ZlQ2xhc3MoXCJmYS1taW51c1wiKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICQoXCJib2R5ICNhY3Rpb25cIitpZCkudG9nZ2xlKFwiM3NcIik7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vICQoXCIjbmF2YmFyRHJvcGRvd25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAkKFwiI2Rpdk1lbnVcIikudG9nZ2xlKFwiNW1zXCIpO1xyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyAkKFwiaHRtbFwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcjbmF2YmFyRHJvcGRvd24nKS5sZW5ndGggPT0gMClcclxuICAgIC8vICAgICAgICQoXCIjZGl2TWVudVwiKS5oaWRlKFwiNW1zXCIpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI3NpdGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgaWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgXHJcbiAgICAgIGlmIChpZCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kb3NzaWVyLycrIGlkO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIFxyXG59KSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiaWQiLCJhdHRyIiwiZmluZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRvZ2dsZSIsImUiLCJ2YWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9