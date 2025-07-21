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

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/site.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBbUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NldHRpbmdzL3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7aW1wb3J0IHJvdXRlcyBmcm9tIFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcUEFSQ0FVVE9cXFxcdmFyXFxcXGNhY2hlXFxcXGZvc1JvdXRlcy5qc29uXCI7Um91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpe1xyXG5cclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLm1lbnUtaXRlbVwiLCBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICBpZigkKHRoaXMpLmZpbmQoXCIubW9kdWxlUGx1c1wiKS5oYXNDbGFzcyhcImZhLXBsdXNcIikpe1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5tb2R1bGVQbHVzXCIpLnJlbW92ZUNsYXNzKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIubW9kdWxlUGx1c1wiKS5hZGRDbGFzcyhcImZhLW1pbnVzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLm1vZHVsZVBsdXNcIikuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5tb2R1bGVQbHVzXCIpLnJlbW92ZUNsYXNzKFwiZmEtbWludXNcIik7XHJcbiAgICAgIH1cclxuICAgICAgJChcImJvZHkgI3N1Yk1lbnVcIitpZCkudG9nZ2xlKFwiM3NcIik7XHJcbiAgICB9KVxyXG4gIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLnN1Yk1lbnUtaXRlbVwiLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgaWYoJCh0aGlzKS5maW5kKFwiLnN1Ym1vZHVsZVBsdXNcIikuaGFzQ2xhc3MoXCJmYS1wbHVzXCIpKXtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIuc3VibW9kdWxlUGx1c1wiKS5yZW1vdmVDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLnN1Ym1vZHVsZVBsdXNcIikuYWRkQ2xhc3MoXCJmYS1taW51c1wiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICQodGhpcykuZmluZChcIi5zdWJtb2R1bGVQbHVzXCIpLmFkZENsYXNzKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIuc3VibW9kdWxlUGx1c1wiKS5yZW1vdmVDbGFzcyhcImZhLW1pbnVzXCIpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgJChcImJvZHkgI2FjdGlvblwiK2lkKS50b2dnbGUoXCIzc1wiKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gJChcIiNuYXZiYXJEcm9wZG93blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICQoXCIjZGl2TWVudVwiKS50b2dnbGUoXCI1bXNcIik7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vICQoXCJodG1sXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJyNuYXZiYXJEcm9wZG93bicpLmxlbmd0aCA9PSAwKVxyXG4gICAgLy8gICAgICAgJChcIiNkaXZNZW51XCIpLmhpZGUoXCI1bXNcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcjc2l0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBpZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICBcclxuICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Rvc3NpZXIvJysgaWQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XHJcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xyXG5cclxudmFyIEZJTkQgPSAnZmluZCc7XHJcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XHJcblxyXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZpbmQgLS0gdGVzdGluZ1xyXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xyXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcclxuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJpZCIsImF0dHIiLCJmaW5kIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidG9nZ2xlIiwiZSIsInZhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=