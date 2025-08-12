(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_action"],{

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

/***/ "./assets/js/settings/action.js":
/*!**************************************!*\
  !*** ./assets/js/settings/action.js ***!
  \**************************************/
/***/ (() => {

$(document).ready(function () {
  $("#subModule").select2();
  $("#subModuleUpd").select2();
  $('#actionsTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
    "autoWidth": false
  });
  $("body").on("click", ".saveAddAction", function () {
    var actionName = $("#actionName").val();
    var icon = $("#icon").val();
    var subModule = $("#subModule").val();
    var ord = $("#ord").val();
    var className = $("#className").val();
    var horizontal = $('input[name="horizontal"]:checked').val();
    var idName = $("#idName").val();
    var routeName = $("#routeName").val();
    if (actionName == "") {
      $("#actionName").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#actionName").attr('style', "border: 1px solid #gray !important");
    }
    if (icon == "") {
      $("#icon").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#icon").attr('style', "border: 1px solid #gray !important");
    }
    if (ord == "") {
      $("#ord").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#ord").attr('style', "border: 1px solid #gray !important");
    }
    // if(className == ""){
    //   $("#className").attr('style', "border: 1px solid #eb0000 !important");

    // }
    // else{
    //   $("#className").attr('style', "border: 1px solid #gray !important");
    // }
    if (subModule == "") {
      $("#select2-subModule-container").parent().css("border", "1px solid #eb0000");
    } else {
      $("#select2-subModule-container").parent().css("border", "1px solid lightgray ");
    }
    // if(idName == ""){
    //   $("#idName").attr('style', "border: 1px solid #eb0000 !important");

    // }
    // else{
    //   $("#idName").attr('style', "border: 1px solid #gray !important");
    // }
    if (routeName == "") {
      $("#routeName").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#routeName").attr('style', "border: 1px solid #gray !important");
    }
    if (actionName != "" && icon != "" && ord != "" && className != "" && subModule != "") {
      var l = ladda.create(document.activeElement);
      l.start();
      $.ajax({
        url: "addAction",
        method: "POST",
        data: {
          actionName: actionName,
          icon: icon,
          ord: ord,
          className: className,
          subModule: subModule,
          horizontal: horizontal,
          idName: idName,
          routeName: routeName
        },
        success: function success(data) {
          l.stop();
          if ($.fn.dataTable.isDataTable("#actionsTable")) {
            $('#actionsTable').DataTable().clear().destroy();
          }
          $("#listActions").html(data);
          $("#actionsTable").DataTable({
            lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
            "autoWidth": false
          });
          $("#closeAddAction").click();
          toastr.success("Action ajouté avec success");
        },
        error: function error(data) {
          toastr.error("Erreur");
          l.stop();
        }
      });
    }
  });
  $("body").on("click", ".update_action", function () {
    // alert("s")
    var action = $(this).attr("data-id");
    $.ajax({
      url: "findAction",
      method: "POST",
      data: {
        action: action
      },
      success: function success(data) {
        $("#idAction").val(data.id);
        $("#actionNameUpd").val(data.nom);
        $("#iconUpd").val(data.icon);
        $("#idNameUpd").val(data.id_button);
        $("#routeNameUpd").val(data.route);
        $("#subModuleUpd").val(data.sousModule).trigger("change");
        if (data.horizontal === true) {
          $("#horizontal_update_true").prop("checked", true);
        } else if (data.horizontal === false) {
          $("#horizontal_update_false").prop("checked", true);
        }
        $("#updateAction").modal('show');
      }
    });
  });
  $("body").on("click", ".saveUpdateAction", function () {
    var id = $("#idAction").val();
    var nom = $("#actionNameUpd").val();
    var icon = $("#iconUpd").val();
    var id_button = $("#idNameUpd").val();
    var route = $("#routeNameUpd").val();
    var sous_module = $("#subModuleUpd").val();
    var horizontal = $('input[name="horizontal_update"]:checked').val();
    if (nom == "") {
      $("#actionNameUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#actionNameUpd").attr('style', "border: 1px solid #gray !important");
    }
    if (sous_module == "") {
      $("#select2-subModuleUpd-container").parent().css("border", "1px solid #eb0000");
    } else {
      $("#select2-subModuleUpd-container").parent().css("border", "1px solid lightgray ");
    }
    if (nom != "" && sous_module != "") {
      var l = ladda.create(document.activeElement);
      l.start();
      $.ajax({
        url: "updateAction",
        method: "POST",
        data: {
          id: id,
          nom: nom,
          icon: icon,
          id_button: id_button,
          route: route,
          sous_module: sous_module,
          horizontal: horizontal
        },
        success: function success(data) {
          l.stop();
          if ($.fn.dataTable.isDataTable("#actionsTable")) {
            $('#actionsTable').DataTable().clear().destroy();
          }
          $("#listActions").html(data);
          $("#actionsTable").DataTable({
            lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
            "autoWidth": false
          });
          $("#closeUpdateAction").click();
          toastr.success("Action modifiée avec success");
        },
        error: function error(data) {
          toastr.error("Erreur");
          l.stop();
        }
      });
    }
  });
  $("body").on("click", ".deleteAction", function () {
    var action = $(this).attr("data-id");
    var l = ladda.create(document.activeElement);
    l.start();

    // alert(id);
    $.ajax({
      url: "deleteAction",
      method: "POST",
      data: {
        action: action
      },
      success: function success(data) {
        l.stop();
        if ($.fn.dataTable.isDataTable("#actionsTable")) {
          $('#actionsTable').DataTable().clear().destroy();
        }
        $("#listActions").html(data);
        $("#actionsTable").DataTable({
          lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
          "autoWidth": false
        });
        toastr.success("Action Supprimer avec success");
      },
      error: function error(data) {
        toastr.error("Erreur");
        l.stop();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/action.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNoQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUN0QjtVQUNDLFdBQVcsRUFBRTtRQUNmLENBQUMsQ0FBQztRQUVGZ0MsTUFBTSxDQUFDVCxPQUFPLENBQUMsK0JBQStCLENBQUM7TUFDL0MsQ0FBQztNQUNEVSxLQUFLLEVBQUUsU0FBQUEsTUFBU1gsSUFBSSxFQUFDO1FBQ25CVSxNQUFNLENBQUNDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDdEJuQixDQUFDLENBQUNVLElBQUksQ0FBQyxDQUFDO01BQ1Y7SUFDRixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFLRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy9hY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiJChkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJChcIiNzdWJNb2R1bGVcIikuc2VsZWN0MigpO1xyXG4gICQoXCIjc3ViTW9kdWxlVXBkXCIpLnNlbGVjdDIoKTtcclxuICBcclxuXHJcbiAgICAkKCcjYWN0aW9uc1RhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgIF0sXHJcbiAgICAgIFxyXG4gICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNhdmVBZGRBY3Rpb25cIiAsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgYWN0aW9uTmFtZSA9ICQoXCIjYWN0aW9uTmFtZVwiKS52YWwoKTtcclxuICAgIHZhciBpY29uID0gJChcIiNpY29uXCIpLnZhbCgpO1xyXG4gICAgdmFyIHN1Yk1vZHVsZSA9ICQoXCIjc3ViTW9kdWxlXCIpLnZhbCgpO1xyXG4gICAgdmFyIG9yZCA9ICQoXCIjb3JkXCIpLnZhbCgpO1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9ICQoXCIjY2xhc3NOYW1lXCIpLnZhbCgpO1xyXG4gICAgdmFyIGhvcml6b250YWwgPSAkKCdpbnB1dFtuYW1lPVwiaG9yaXpvbnRhbFwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICB2YXIgaWROYW1lID0gJChcIiNpZE5hbWVcIikudmFsKCk7XHJcbiAgICB2YXIgcm91dGVOYW1lID0gJChcIiNyb3V0ZU5hbWVcIikudmFsKCk7XHJcblxyXG4gICAgaWYoYWN0aW9uTmFtZSA9PSBcIlwiKXtcclxuICAgICAgJChcIiNhY3Rpb25OYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgJChcIiNhY3Rpb25OYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZ3JheSAhaW1wb3J0YW50XCIpO1xyXG4gICAgfVxyXG4gICAgaWYoaWNvbiA9PSBcIlwiKXtcclxuICAgICAgJChcIiNpY29uXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgJChcIiNpY29uXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZ3JheSAhaW1wb3J0YW50XCIpO1xyXG4gICAgfVxyXG4gICAgaWYob3JkID09IFwiXCIpe1xyXG4gICAgICAkKFwiI29yZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICQoXCIjb3JkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZ3JheSAhaW1wb3J0YW50XCIpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYoY2xhc3NOYW1lID09IFwiXCIpe1xyXG4gICAgLy8gICAkKFwiI2NsYXNzTmFtZVwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2V7XHJcbiAgICAvLyAgICQoXCIjY2xhc3NOYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZ3JheSAhaW1wb3J0YW50XCIpO1xyXG4gICAgLy8gfVxyXG4gICAgaWYoc3ViTW9kdWxlID09IFwiXCIpe1xyXG4gICAgICAkKFwiI3NlbGVjdDItc3ViTW9kdWxlLWNvbnRhaW5lclwiKS5wYXJlbnQoKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCAjZWIwMDAwXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgJChcIiNzZWxlY3QyLXN1Yk1vZHVsZS1jb250YWluZXJcIikucGFyZW50KCkuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgbGlnaHRncmF5IFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAvLyBpZihpZE5hbWUgPT0gXCJcIil7XHJcbiAgICAvLyAgICQoXCIjaWROYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZXtcclxuICAgIC8vICAgJChcIiNpZE5hbWVcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNncmF5ICFpbXBvcnRhbnRcIik7XHJcbiAgICAvLyB9XHJcbiAgICBpZihyb3V0ZU5hbWUgPT0gXCJcIil7XHJcbiAgICAgICQoXCIjcm91dGVOYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgJChcIiNyb3V0ZU5hbWVcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNncmF5ICFpbXBvcnRhbnRcIik7XHJcbiAgICB9XHJcbiAgICBpZihhY3Rpb25OYW1lICE9IFwiXCIgJiYgaWNvbiAhPSBcIlwiICYmIG9yZCAhPSBcIlwiICYmIGNsYXNzTmFtZSAhPSBcIlwiICYmIHN1Yk1vZHVsZSAhPSBcIlwiKXtcclxuICAgICAgY29uc3QgbCA9IGxhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogXCJhZGRBY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiBhY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjppY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkOiBvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Yk1vZHVsZTpzdWJNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOmhvcml6b250YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6aWROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVOYW1lOnJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGlmICggJC5mbi5kYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjYWN0aW9uc1RhYmxlXCIpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjYWN0aW9uc1RhYmxlJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2xpc3RBY3Rpb25zXCIpLmh0bWwoZGF0YSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWN0aW9uc1RhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAnQWxsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b1dpZHRoXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjbG9zZUFkZEFjdGlvblwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiQWN0aW9uIGFqb3V0w6kgYXZlYyBzdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIilcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiICwgXCIudXBkYXRlX2FjdGlvblwiICwgZnVuY3Rpb24oKXtcclxuICAgIC8vIGFsZXJ0KFwic1wiKVxyXG4gICAgdmFyICBhY3Rpb24gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICB1cmw6IFwiZmluZEFjdGlvblwiLFxyXG4gICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgZGF0YTp7XHJcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgIH0sXHJcbiAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgIFxyXG4gICAgICAgJChcIiNpZEFjdGlvblwiKS52YWwoZGF0YS5pZCk7XHJcbiAgICAgICAkKFwiI2FjdGlvbk5hbWVVcGRcIikudmFsKGRhdGEubm9tKVxyXG4gICAgICAgJChcIiNpY29uVXBkXCIpLnZhbChkYXRhLmljb24pXHJcbiAgICAgICAkKFwiI2lkTmFtZVVwZFwiKS52YWwoZGF0YS5pZF9idXR0b24pXHJcbiAgICAgICAkKFwiI3JvdXRlTmFtZVVwZFwiKS52YWwoZGF0YS5yb3V0ZSlcclxuICAgICAgICQoXCIjc3ViTW9kdWxlVXBkXCIpLnZhbChkYXRhLnNvdXNNb2R1bGUpLnRyaWdnZXIoXCJjaGFuZ2VcIilcclxuICAgICAgIGlmIChkYXRhLmhvcml6b250YWwgPT09IHRydWUpIHtcclxuICAgICAgICAkKFwiI2hvcml6b250YWxfdXBkYXRlX3RydWVcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5ob3Jpem9udGFsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgJChcIiNob3Jpem9udGFsX3VwZGF0ZV9mYWxzZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAkKFwiI3VwZGF0ZUFjdGlvblwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgIH1cclxuICAgfSlcclxuIH0pXHJcblxyXG4gJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zYXZlVXBkYXRlQWN0aW9uXCIgLCBmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgaWQgPSAkKFwiI2lkQWN0aW9uXCIpLnZhbCgpO1xyXG4gIHZhciBub20gPSAkKFwiI2FjdGlvbk5hbWVVcGRcIikudmFsKClcclxuICB2YXIgaWNvbiA9ICQoXCIjaWNvblVwZFwiKS52YWwoKVxyXG4gIHZhciBpZF9idXR0b24gPSAkKFwiI2lkTmFtZVVwZFwiKS52YWwoKVxyXG4gIHZhciByb3V0ZSA9ICQoXCIjcm91dGVOYW1lVXBkXCIpLnZhbCgpXHJcbiAgdmFyIHNvdXNfbW9kdWxlID0gJChcIiNzdWJNb2R1bGVVcGRcIikudmFsKClcclxuICB2YXIgaG9yaXpvbnRhbCA9ICQoJ2lucHV0W25hbWU9XCJob3Jpem9udGFsX3VwZGF0ZVwiXTpjaGVja2VkJykudmFsKCk7XHJcblxyXG4gIGlmKG5vbSA9PSBcIlwiKXtcclxuICAgICQoXCIjYWN0aW9uTmFtZVVwZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG5cclxuICB9XHJcbiAgZWxzZXtcclxuICAgICQoXCIjYWN0aW9uTmFtZVVwZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2dyYXkgIWltcG9ydGFudFwiKTtcclxuICB9XHJcbiAgaWYoc291c19tb2R1bGUgPT0gXCJcIil7XHJcbiAgICAkKFwiI3NlbGVjdDItc3ViTW9kdWxlVXBkLWNvbnRhaW5lclwiKS5wYXJlbnQoKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCAjZWIwMDAwXCIpO1xyXG5cclxuICB9XHJcbiAgZWxzZXtcclxuICAgICAgJChcIiNzZWxlY3QyLXN1Yk1vZHVsZVVwZC1jb250YWluZXJcIikucGFyZW50KCkuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgbGlnaHRncmF5IFwiKTtcclxuXHJcbiAgfVxyXG4gIGlmKG5vbSAhPSBcIlwiICYmIHNvdXNfbW9kdWxlICE9IFwiXCIpe1xyXG4gICAgY29uc3QgbCA9IGxhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogXCJ1cGRhdGVBY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgICAgICAgICBub206IG5vbSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOmljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaWRfYnV0dG9uOmlkX2J1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZTpyb3V0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VzX21vZHVsZTpzb3VzX21vZHVsZSxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOmhvcml6b250YWxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICQuZm4uZGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2FjdGlvbnNUYWJsZVwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQoJyNhY3Rpb25zVGFibGUnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJChcIiNsaXN0QWN0aW9uc1wiKS5odG1sKGRhdGEpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgJChcIiNhY3Rpb25zVGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgJChcIiNjbG9zZVVwZGF0ZUFjdGlvblwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIkFjdGlvbiBtb2RpZmnDqWUgYXZlYyBzdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIilcclxuICAgICAgICAgICAgICAgICAgbC5zdG9wKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZUFjdGlvblwiICwgZnVuY3Rpb24oKXtcclxuICB2YXIgIGFjdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIilcclxuXHJcbiAgY29uc3QgbCA9IGxhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgbC5zdGFydCgpO1xyXG5cclxuICAvLyBhbGVydChpZCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogXCJkZWxldGVBY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBkYXRhOntcclxuICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAoICQuZm4uZGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2FjdGlvbnNUYWJsZVwiKSApIHtcclxuICAgICAgICAgICQoJyNhY3Rpb25zVGFibGUnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJChcIiNsaXN0QWN0aW9uc1wiKS5odG1sKGRhdGEpXHJcblxyXG4gICAgICAkKFwiI2FjdGlvbnNUYWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICBbMTUsIDI1LCA1MCwgJ0FsbCddLFxyXG4gICAgICBdLFxyXG4gICAgICAgIFwiYXV0b1dpZHRoXCI6IGZhbHNlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0b2FzdHIuc3VjY2VzcyhcIkFjdGlvbiBTdXBwcmltZXIgYXZlYyBzdWNjZXNzXCIpXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIilcclxuICAgICAgICBsLnN0b3AoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbiAgXHJcblxyXG59KSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib24iLCJhY3Rpb25OYW1lIiwidmFsIiwiaWNvbiIsInN1Yk1vZHVsZSIsIm9yZCIsImNsYXNzTmFtZSIsImhvcml6b250YWwiLCJpZE5hbWUiLCJyb3V0ZU5hbWUiLCJhdHRyIiwicGFyZW50IiwiY3NzIiwibCIsImxhZGRhIiwiY3JlYXRlIiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwic3RvcCIsImZuIiwiZGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJodG1sIiwiY2xpY2siLCJ0b2FzdHIiLCJlcnJvciIsImFjdGlvbiIsImlkIiwibm9tIiwiaWRfYnV0dG9uIiwicm91dGUiLCJzb3VzTW9kdWxlIiwidHJpZ2dlciIsInByb3AiLCJtb2RhbCIsInNvdXNfbW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==