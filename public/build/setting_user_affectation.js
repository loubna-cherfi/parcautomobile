(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_user_affectation"],{

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

/***/ "./assets/js/settings/userAffectation.js":
/*!***********************************************!*\
  !*** ./assets/js/settings/userAffectation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
var _require = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js"),
  Toaster = _require.Toaster;
$(document).ready(function () {
  $("body").on("click", ".menu-item", function () {
    var id = $(this).attr('id');
    $("body #subMenu" + id).toggle("3s");
  });
  $("body").on("click", ".subMenu-item", function () {
    var id = $(this).attr('id');
    $("body #action" + id).toggle("3s");
  });
  $("body").on("click", "#myTable tbody tr", function () {
    $("#myTable tbody tr").removeClass("colorRow");
    $(this).toggleClass("colorRow");
  });
  $("body").on("click", ".affectUser", function () {
    var idUser = $(".colorRow").attr("id");
    var idSite = $("#dossier").val();
    // alert(idSite);

    if (idUser) {
      $.ajax({
        type: "POST",
        url: "userActions",
        data: {
          idUser: idUser,
          idSite: idSite
        },
        success: function success(data) {
          $("#actionsAffectedToUser").empty();
          $('#dossier').val('').trigger('change');
          $("#affectUser").modal("show");
        },
        error: function error() {
          toastr.error("ERROR !");
        }
      });
    } else {
      toastr.warning("Choisir un utilisateur!");
    }
  });
  $("body").on("click", ".saveAffectButton", function () {
    // var users = [];
    var checkedActions = [];
    var uncheckedActions = [];
    var idUser = $(".colorRow").attr("id");
    var idSite = $("#dossier").val();
    // alert(idSite)
    $('input.checkboxAction:checkbox:checked').each(function () {
      checkedActions.push($(this).attr('id').slice(12));
    });
    $('input.checkboxAction:checkbox:not(:checked)').each(function () {
      uncheckedActions.push($(this).attr('id').slice(12));
    });

    // var jsonUsers = JSON.stringify(users);
    var jsonCheckedActions = JSON.stringify(checkedActions);
    var jsonUncheckedActions = JSON.stringify(uncheckedActions);
    var l = ladda.create(document.activeElement);
    l.start();
    $.ajax({
      type: "POST",
      url: "affectUser",
      data: {
        idUser: idUser,
        idSite: idSite,
        jsonCheckedActions: jsonCheckedActions,
        jsonUncheckedActions: jsonUncheckedActions
      },
      success: function success(data) {
        toastr.success(data.affected + " AFFECTE - " + data.notAffected + " NON AFFECTE");
        l.stop();
      },
      error: function error() {
        toastr.error("ERROR !");
        l.stop();
      }
    });
  });
  $("body").on("click", "#btn_affectUser", function (e) {
    var idUser = $(".colorRow").attr("id");
    if (idUser) {
      $("#actionsAffectedToUser").empty();
      $('#dossier').val('').trigger('change');
      $("#affectUser").modal("toggle");
    } else {
      toastr.info("Selectionez un utilisateur svp !");
    }
  });
  console.log("hi");
  $("body").on("change", "#dossier", function () {
    if ($(this).val() != "") {
      $.ajax({
        type: "POST",
        url: "userActions",
        data: {
          idUser: $(".colorRow").attr("id"),
          idSite: $(this).val()
        },
        success: function success(data) {
          // alert("zakaria")
          $("#actionsAffectedToUser").empty().append(data);
        },
        error: function error() {
          toastr.error("ERROR !");
        }
      });
    }
  });
  var id_user;
  var conventionTable = $("#convention_table").DataTable({
    language: {
      "url": window.frenchJsonUrl
    },
    columnDefs: [{
      orderable: false,
      targets: 0
    }],
    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tous"]],
    pageLength: 10
  });
  $("body").on("click", ".assignConvention", function () {
    id_user = $(".colorRow").attr("id");
    // alert(id_user);

    if (id_user) {
      $.ajax({
        url: "findUser",
        method: "POST",
        data: {
          idUser: id_user,
          convention: true
        },
        success: function success(result) {
          data = result.data;
          $('#user_name').val(data.username);
          $('#user_nom').val(data.name);
          $('#user_profession').val(data.professionDescription);
          $('#convention_table tbody').empty();
          if ($.fn.DataTable.isDataTable('body #convention_table')) {
            $('#convention_table').DataTable().destroy();
          }
          $('body #list_convention').empty().append(result.html);
          conventionTable = $("#convention_table").DataTable({
            language: {
              "url": window.frenchJsonUrl
            },
            columnDefs: [{
              orderable: false,
              targets: 0
            }],
            lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tous"]],
            pageLength: 10
          });
          updateDataTableSelectAllCtrl(conventionTable);
          $("#assign_convention").modal("show");
        },
        error: function error(xhr, status, _error) {
          toastr.error(xhr.responseText);
        }
      });
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
  $('#convention_table tbody').on('change', 'input[type="checkbox"]:enabled', function () {
    var $row = $(this).closest('tr');
    if (this.checked) {
      $row.addClass('colorRow');
    } else {
      $row.removeClass('colorRow');
    }

    // Update state of "Select all" control
    updateDataTableSelectAllCtrl(conventionTable);
  });
  $('#convention_table tbody').on('click', 'tr', function (event) {
    // Check if the target element is not a checkbox
    if (event.target.type !== 'checkbox') {
      var $checkbox = $(this).find('input[type="checkbox"]:enabled');
      $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
    }
  });

  // Handle click on "Select all" checkbox
  $('#convention_table thead').on('change', 'input[name="select_all"]', function () {
    var checked = this.checked;
    $('#convention_table tbody input[type="checkbox"]:enabled').each(function () {
      if (!this.disabled) {
        if (this.checked !== checked) {
          $(this).prop('checked', checked).trigger('change');
        }
      }
    });
  });
  function updateDataTableSelectAllCtrl(table) {
    var $table = table.table().node();
    var $chkbox_all = $('tbody input[type="checkbox"]:not(:disabled)', $table);
    var $chkbox_checked = $('tbody input[type="checkbox"]:checked:not(:disabled)', $table);
    var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

    // If none of the checkboxes are checked
    if ($chkbox_checked.length === 0) {
      chkbox_select_all.checked = false;
      if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = false;
      }
    } else if ($chkbox_checked.length === $chkbox_all.length) {
      // If all checkboxes are checked
      chkbox_select_all.checked = true;
      if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = false;
      }
    } else {
      // If some checkboxes are checked
      chkbox_select_all.checked = true;
      if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = true;
      }
    }
  }
  $("body").on("click", ".saveAssignConvention", function () {
    var la = ladda.create(document.activeElement);
    la.start();
    var conventionIds = [];
    $("#convention_table tbody tr").each(function () {
      var checkbox = $(this).find('input[type="checkbox"]');
      if (checkbox.is(':checked')) {
        conventionIds.push(checkbox.val());
      }
    });
    var userConventionData = {
      conventionIds: conventionIds,
      id_user: id_user
    };
    $.ajax({
      url: Routing.generate('app_assign_convention'),
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userConventionData),
      success: function success(result) {
        la.stop();
        toastr.success(result);
        $("#assign_convention").modal("hide");
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        la.stop();
        return toastr.error(jqXHR.responseText);
      }
    });
  });
  var caisseTable = $("#caisse_table").DataTable({
    language: {
      "url": window.frenchJsonUrl
    }
  });
  $("body").on("click", ".assignCaisse", function () {
    id_user = $(".colorRow").attr("id");
    // alert(id_user);

    if (id_user) {
      $.ajax({
        url: "findUser",
        method: "POST",
        data: {
          idUser: id_user,
          caisse: true
        },
        success: function success(result) {
          data = result.data;
          $('#user_name_caisse').val(data.username);
          $('#user_nom_caisse').val(data.name);
          $('#user_profession_caisse').val(data.professionDescription);
          if ($.fn.DataTable.isDataTable('body #caisse_table')) {
            $('#caisse_table').DataTable().destroy();
          }
          $('body #list_caisse').empty().append(result.html);
          caisseTable = $("#caisse_table").DataTable({
            language: {
              "url": window.frenchJsonUrl
            }
          });
          $("#caisse_table tbody tr").each(function () {
            if ($(this).find('input[type="checkbox"]').is(':checked')) {
              $(this).addClass('colorRow');
            }
          });
          $("#assign_caisse").modal("show");
        },
        error: function error(xhr, status, _error2) {
          toastr.error(xhr.responseText);
        }
      });
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
  $("body").on("click", "#caisse_table tbody tr", function () {
    if ($(this).hasClass("colorRow")) {
      $(this).removeClass("colorRow");
      $(this).find('input[type="checkbox"]').prop("checked", false);
    } else {
      caisseTable.$('tr').removeClass("colorRow");
      caisseTable.$('input[type="checkbox"]').prop("checked", false);
      $(this).addClass("colorRow");
      $(this).find('input[type="checkbox"]').prop("checked", true);
    }
  });
  $("body").on("click", ".saveAssignCaisse", function () {
    var _$$ajax;
    var la = ladda.create(document.activeElement);
    la.start();
    var selectedCaisse = caisseTable.rows('.colorRow').data().length > 0 ? caisseTable.rows('.colorRow').data()[0][1] : null;
    $.ajax((_$$ajax = {
      type: "POST",
      url: Routing.generate("app_assign_caisse"),
      contentType: 'application/json',
      data: JSON.stringify({
        selectedCaisse: selectedCaisse,
        id_user: id_user
      }),
      processData: false
    }, _defineProperty(_$$ajax, "contentType", false), _defineProperty(_$$ajax, "success", function success(result) {
      la.stop();
      toastr.success(result);
      $("#assign_caisse").modal("hide");
    }), _defineProperty(_$$ajax, "error", function error(jqXHR, textStatus, errorThrown) {
      la.stop();
      return toastr.error(jqXHR.responseText);
    }), _$$ajax));
  });
  $("body").on("click", ".duplicate", function () {
    id_user = $(".colorRow").attr("id");
    // alert(id_user);

    if (id_user) {
      $("#duplicate_user").modal("show");
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
  $("body").on("submit", "#duplicateUserForm", function (e) {
    e.preventDefault();
    id_user = $(".colorRow").attr("id");
    var username = $("#duplicated_username").val();
    var name = $("#duplicated_nom").val();
    var password = $("#duplicated_password").val();
    if (id_user) {
      var userData = {
        id_user: id_user,
        username: username,
        name: name,
        password: password
      };
      var l = ladda.create(document.activeElement);
      l.start();
      $.ajax({
        url: Routing.generate('app_duplicate_user'),
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function success(data) {
          toastr.success("Utilisateur dupliqué avec succès");
          l.stop();
          $("#duplicate_user").modal("hide");
          $("#duplicated_username").val("");
          $("#duplicated_nom").val("");
          $("#duplicated_password").val("");
          if ($.fn.dataTable.isDataTable("#myTable")) {
            $('#myTable').DataTable().clear().destroy();
          }
          $("#listUsers").html(data.html);
          $("#myTable").DataTable({
            lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
            "autoWidth": false
          });
        },
        error: function error(xhr, status, _error3) {
          toastr.error(xhr.responseText);
          l.stop();
        }
      });
    } else {
      toastr.info("Choisir un utilisateur!");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-80eafe","vendors-node_modules_core-js_modules_es_error_cause_js-node_modules_core-js_modules_es_error_-9d570a","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-ade6d7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/userAffectation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ191c2VyX2FmZmVjdGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkcsZ0VBQXNCLENBQUMsNEVBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTFJLElBQUFBLFFBQUEsR0FBb0JDLG1CQUFPLENBQUMscUVBQWlCLENBQUM7RUFBdENDLE9BQU8sR0FBQUYsUUFBQSxDQUFQRSxPQUFPO0FBRWZDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBRSxZQUFZO0VBSy9CRixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVU7SUFDekMsSUFBSUMsRUFBRSxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDM0JMLENBQUMsQ0FBQyxlQUFlLEdBQUNJLEVBQUUsQ0FBQyxDQUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ3BDLENBQUMsQ0FBQztFQUVGTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsZUFBZSxFQUFFLFlBQVU7SUFFOUMsSUFBSUMsRUFBRSxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDM0JMLENBQUMsQ0FBQyxjQUFjLEdBQUNJLEVBQUUsQ0FBQyxDQUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ25DLENBQUMsQ0FBQztFQUVGTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsWUFBVTtJQUNoREgsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNPLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDOUNQLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1EsV0FBVyxDQUFDLFVBQVUsQ0FBQztFQUNuQyxDQUFDLENBQUM7RUFFRlIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxZQUFVO0lBQ3pDLElBQUlNLE1BQU0sR0FBR1QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUlLLE1BQU0sR0FBR1YsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDVyxHQUFHLENBQUMsQ0FBQztJQUNoQzs7SUFFQSxJQUFHRixNQUFNLEVBQUM7TUFFUlQsQ0FBQyxDQUFDWSxJQUFJLENBQUM7UUFDTEMsSUFBSSxFQUFFLE1BQU07UUFDWkMsR0FBRyxFQUFDLGFBQWE7UUFDakJDLElBQUksRUFBQztVQUNITixNQUFNLEVBQUVBLE1BQU07VUFDZEMsTUFBTSxFQUFDQTtRQUNULENBQUM7UUFDRE0sT0FBTyxFQUFHLFNBQUFBLFFBQVNELElBQUksRUFBQztVQUN0QmYsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNpQixLQUFLLENBQUMsQ0FBQztVQUNuQ2pCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ1csR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDTyxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQ3ZDbEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUVoQyxDQUFDO1FBQ0RDLEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQVU7VUFDZkMsTUFBTSxDQUFDRCxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3pCO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUNHO01BQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLHlCQUF5QixDQUFDO0lBQzNDO0VBR0osQ0FBQyxDQUFDO0VBR0Z0QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsWUFBVTtJQUNqRDtJQUNBLElBQUlvQixjQUFjLEdBQUcsRUFBRTtJQUN2QixJQUFJQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQ3pCLElBQUlmLE1BQU0sR0FBR1QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUlLLE1BQU0sR0FBR1YsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDVyxHQUFHLENBQUMsQ0FBQztJQUNoQztJQUNBWCxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxZQUFZO01BQzFERixjQUFjLENBQUNHLElBQUksQ0FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDc0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQztJQUVGM0IsQ0FBQyxDQUFDLDZDQUE2QyxDQUFDLENBQUN5QixJQUFJLENBQUMsWUFBWTtNQUM5REQsZ0JBQWdCLENBQUNFLElBQUksQ0FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDc0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUlDLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsY0FBYyxDQUFDO0lBQ3ZELElBQUlRLG9CQUFvQixHQUFHRixJQUFJLENBQUNDLFNBQVMsQ0FBQ04sZ0JBQWdCLENBQUM7SUFFM0QsSUFBTVEsQ0FBQyxHQUFHQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ2pDLFFBQVEsQ0FBQ2tDLGFBQWEsQ0FBQztJQUU5Q0gsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQztJQUVUcEMsQ0FBQyxDQUFDWSxJQUFJLENBQUM7TUFDREMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFLFlBQVk7TUFDakJDLElBQUksRUFBRTtRQUNKTixNQUFNLEVBQUNBLE1BQU07UUFDYkMsTUFBTSxFQUFDQSxNQUFNO1FBQ2JrQixrQkFBa0IsRUFBRUEsa0JBQWtCO1FBQ3RDRyxvQkFBb0IsRUFBRUE7TUFDeEIsQ0FBQztNQUVEZixPQUFPLEVBQUUsU0FBQUEsUUFBU0QsSUFBSSxFQUFDO1FBQ3JCTSxNQUFNLENBQUNMLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDc0IsUUFBUSxHQUFHLGFBQWEsR0FBR3RCLElBQUksQ0FBQ3VCLFdBQVcsR0FBRyxjQUFjLENBQUM7UUFDakZOLENBQUMsQ0FBQ08sSUFBSSxDQUFDLENBQUM7TUFFVixDQUFDO01BQ0RuQixLQUFLLEVBQUMsU0FBQUEsTUFBQSxFQUFVO1FBQ2RDLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN2QlksQ0FBQyxDQUFDTyxJQUFJLENBQUMsQ0FBQztNQUNWO0lBQ0osQ0FBQyxDQUFDO0VBRU4sQ0FBQyxDQUFDO0VBRUZ2QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsVUFBU3FDLENBQUMsRUFBQztJQUVqRCxJQUFJL0IsTUFBTSxHQUFHVCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFdEMsSUFBR0ksTUFBTSxFQUFDO01BQ1JULENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDaUIsS0FBSyxDQUFDLENBQUM7TUFDbkNqQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNXLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQ08sT0FBTyxDQUFDLFFBQVEsQ0FBQztNQUN2Q2xCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQyxNQUNHO01BQ0ZFLE1BQU0sQ0FBQ29CLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztJQUNqRDtFQUVGLENBQUMsQ0FBQztFQUVGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFFakIzQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUMsVUFBVSxFQUFFLFlBQVU7SUFFMUMsSUFBR0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDVyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQztNQUVuQlgsQ0FBQyxDQUFDWSxJQUFJLENBQUM7UUFDTEMsSUFBSSxFQUFFLE1BQU07UUFDWkMsR0FBRyxFQUFFLGFBQWE7UUFDbEJDLElBQUksRUFBRTtVQUNKTixNQUFNLEVBQUVULENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztVQUNqQ0ssTUFBTSxFQUFFVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLEdBQUcsQ0FBQztRQUN0QixDQUFDO1FBRURLLE9BQU8sRUFBRSxTQUFBQSxRQUFTRCxJQUFJLEVBQUM7VUFDckI7VUFDQWYsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNpQixLQUFLLENBQUMsQ0FBQyxDQUFDMkIsTUFBTSxDQUFDN0IsSUFBSSxDQUFDO1FBQ2xELENBQUM7UUFDREssS0FBSyxFQUFDLFNBQUFBLE1BQUEsRUFBVTtVQUNoQkMsTUFBTSxDQUFDRCxLQUFLLENBQUMsU0FBUyxDQUFDO1FBRXZCO01BQ0osQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7RUFFRixJQUFJeUIsT0FBTztFQUVYLElBQUlDLGVBQWUsR0FBRzlDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDK0MsU0FBUyxDQUFDO0lBQ25EQyxRQUFRLEVBQUU7TUFDUixLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7SUFDaEIsQ0FBQztJQUNEQyxVQUFVLEVBQUUsQ0FDVjtNQUFFQyxTQUFTLEVBQUUsS0FBSztNQUFFQyxPQUFPLEVBQUU7SUFBRSxDQUFDLENBQ2pDO0lBQ0RDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOURDLFVBQVUsRUFBRTtFQUNoQixDQUFDLENBQUM7RUFHRnZELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxZQUFVO0lBQ2pEMEMsT0FBTyxHQUFHN0MsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25DOztJQUVBLElBQUd3QyxPQUFPLEVBQUM7TUFDUDdDLENBQUMsQ0FBQ1ksSUFBSSxDQUFDO1FBQ0hFLEdBQUcsRUFBRSxVQUFVO1FBQ2YwQyxNQUFNLEVBQUUsTUFBTTtRQUNkekMsSUFBSSxFQUFFO1VBQ0ZOLE1BQU0sRUFBRW9DLE9BQU87VUFDZlksVUFBVSxFQUFFO1FBQ2hCLENBQUM7UUFDRHpDLE9BQU8sRUFBRSxTQUFBQSxRQUFTMEMsTUFBTSxFQUFFO1VBQ3RCM0MsSUFBSSxHQUFHMkMsTUFBTSxDQUFDM0MsSUFBSTtVQUVsQmYsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDVyxHQUFHLENBQUNJLElBQUksQ0FBQzRDLFFBQVEsQ0FBQztVQUNsQzNELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ1csR0FBRyxDQUFDSSxJQUFJLENBQUM2QyxJQUFJLENBQUM7VUFDN0I1RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ1csR0FBRyxDQUFDSSxJQUFJLENBQUM4QyxxQkFBcUIsQ0FBQztVQUdyRDdELENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDaUIsS0FBSyxDQUFDLENBQUM7VUFFcEMsSUFBSWpCLENBQUMsQ0FBQzhELEVBQUUsQ0FBQ2YsU0FBUyxDQUFDZ0IsV0FBVyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDeEQvRCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQytDLFNBQVMsQ0FBQyxDQUFDLENBQUNpQixPQUFPLENBQUMsQ0FBQztVQUM5QztVQUVBaEUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNpQixLQUFLLENBQUMsQ0FBQyxDQUFDMkIsTUFBTSxDQUFDYyxNQUFNLENBQUNPLElBQUksQ0FBQztVQUV0RG5CLGVBQWUsR0FBRzlDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDK0MsU0FBUyxDQUFDO1lBQy9DQyxRQUFRLEVBQUU7Y0FDUixLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7WUFDaEIsQ0FBQztZQUNEQyxVQUFVLEVBQUUsQ0FDVjtjQUFFQyxTQUFTLEVBQUUsS0FBSztjQUFFQyxPQUFPLEVBQUU7WUFBRSxDQUFDLENBQ2pDO1lBQ0RDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOURDLFVBQVUsRUFBRTtVQUNoQixDQUFDLENBQUM7VUFFRlcsNEJBQTRCLENBQUNwQixlQUFlLENBQUM7VUFFN0M5QyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekMsQ0FBQztRQUNEQyxLQUFLLEVBQUUsU0FBQUEsTUFBUytDLEdBQUcsRUFBRUMsTUFBTSxFQUFFaEQsTUFBSyxFQUFFO1VBQ2hDQyxNQUFNLENBQUNELEtBQUssQ0FBQytDLEdBQUcsQ0FBQ0UsWUFBWSxDQUFDO1FBQ2xDO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUNHO01BQ0ZoRCxNQUFNLENBQUNvQixJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEM7RUFFRixDQUFDLENBQUM7RUFFRnpDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLFlBQVc7SUFDckYsSUFBSW1FLElBQUksR0FBR3RFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VFLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFaEMsSUFBSSxJQUFJLENBQUNDLE9BQU8sRUFBRTtNQUNoQkYsSUFBSSxDQUFDRyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUMsTUFBTTtNQUNMSCxJQUFJLENBQUMvRCxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQzlCOztJQUVBO0lBQ0EyRCw0QkFBNEIsQ0FBQ3BCLGVBQWUsQ0FBQztFQUMvQyxDQUFDLENBQUM7RUFFRjlDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFTdUUsS0FBSyxFQUFFO0lBQzdEO0lBQ0EsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUM5RCxJQUFJLEtBQUssVUFBVSxFQUFFO01BQ2xDLElBQUkrRCxTQUFTLEdBQUc1RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM2RSxJQUFJLENBQUMsZ0NBQWdDLENBQUM7TUFDOURELFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDRixTQUFTLENBQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDNUQsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUMzRTtFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBbEIsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsWUFBVztJQUMvRSxJQUFJcUUsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztJQUMxQnhFLENBQUMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFlBQVc7TUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQ3NELFFBQVEsRUFBRTtRQUNwQixJQUFJLElBQUksQ0FBQ1AsT0FBTyxLQUFLQSxPQUFPLEVBQUU7VUFDMUJ4RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM4RSxJQUFJLENBQUMsU0FBUyxFQUFFTixPQUFPLENBQUMsQ0FBQ3RELE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEQ7TUFDQTtJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGLFNBQVNnRCw0QkFBNEJBLENBQUNjLEtBQUssRUFBRTtJQUMzQyxJQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDakMsSUFBSUMsV0FBVyxHQUFHbkYsQ0FBQyxDQUFDLDZDQUE2QyxFQUFFaUYsTUFBTSxDQUFDO0lBQzFFLElBQUlHLGVBQWUsR0FBR3BGLENBQUMsQ0FBQyxxREFBcUQsRUFBRWlGLE1BQU0sQ0FBQztJQUN0RixJQUFJSSxpQkFBaUIsR0FBR3JGLENBQUMsQ0FBQyxnQ0FBZ0MsRUFBRWlGLE1BQU0sQ0FBQyxDQUFDSyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUUxRTtJQUNBLElBQUlGLGVBQWUsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtNQUM5QkYsaUJBQWlCLENBQUNiLE9BQU8sR0FBRyxLQUFLO01BQ2pDLElBQUksZUFBZSxJQUFJYSxpQkFBaUIsRUFBRTtRQUMxQ0EsaUJBQWlCLENBQUNHLGFBQWEsR0FBRyxLQUFLO01BQ3ZDO0lBQ0osQ0FBQyxNQUFNLElBQUlKLGVBQWUsQ0FBQ0csTUFBTSxLQUFLSixXQUFXLENBQUNJLE1BQU0sRUFBRTtNQUN0RDtNQUNBRixpQkFBaUIsQ0FBQ2IsT0FBTyxHQUFHLElBQUk7TUFDaEMsSUFBSSxlQUFlLElBQUlhLGlCQUFpQixFQUFFO1FBQzFDQSxpQkFBaUIsQ0FBQ0csYUFBYSxHQUFHLEtBQUs7TUFDdkM7SUFDSixDQUFDLE1BQU07TUFDSDtNQUNBSCxpQkFBaUIsQ0FBQ2IsT0FBTyxHQUFHLElBQUk7TUFDaEMsSUFBSSxlQUFlLElBQUlhLGlCQUFpQixFQUFFO1FBQzFDQSxpQkFBaUIsQ0FBQ0csYUFBYSxHQUFHLElBQUk7TUFDdEM7SUFDSjtFQUNGO0VBRUF4RixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsWUFBVTtJQUVyRCxJQUFNc0YsRUFBRSxHQUFHeEQsS0FBSyxDQUFDQyxNQUFNLENBQUNqQyxRQUFRLENBQUNrQyxhQUFhLENBQUM7SUFDL0NzRCxFQUFFLENBQUNyRCxLQUFLLENBQUMsQ0FBQztJQUVWLElBQUlzRCxhQUFhLEdBQUcsRUFBRTtJQUV0QjFGLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFlBQVc7TUFDNUMsSUFBSWtFLFFBQVEsR0FBRzNGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzZFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztNQUVyRCxJQUFJYyxRQUFRLENBQUNDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN6QkYsYUFBYSxDQUFDaEUsSUFBSSxDQUFDaUUsUUFBUSxDQUFDaEYsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUN0QztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUlrRixrQkFBa0IsR0FBRztNQUN2QkgsYUFBYSxFQUFFQSxhQUFhO01BQzVCN0MsT0FBTyxFQUFFQTtJQUNYLENBQUM7SUFFRDdDLENBQUMsQ0FBQ1ksSUFBSSxDQUFDO01BQ0xFLEdBQUcsRUFBRWdGLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLHVCQUF1QixDQUFDO01BQzlDdkMsTUFBTSxFQUFFLE1BQU07TUFDZHdDLFdBQVcsRUFBRSxrQkFBa0I7TUFDL0JqRixJQUFJLEVBQUVjLElBQUksQ0FBQ0MsU0FBUyxDQUFDK0Qsa0JBQWtCLENBQUM7TUFDeEM3RSxPQUFPLEVBQUUsU0FBQUEsUUFBVTBDLE1BQU0sRUFBRTtRQUN6QitCLEVBQUUsQ0FBQ2xELElBQUksQ0FBQyxDQUFDO1FBRVRsQixNQUFNLENBQUNMLE9BQU8sQ0FBQzBDLE1BQU0sQ0FBQztRQUV0QjFELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDLE1BQU0sQ0FBQztNQUV2QyxDQUFDO01BQ0RDLEtBQUssRUFBRSxTQUFBQSxNQUFVNkUsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtRQUMvQ1YsRUFBRSxDQUFDbEQsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPbEIsTUFBTSxDQUFDRCxLQUFLLENBQUM2RSxLQUFLLENBQUM1QixZQUFZLENBQUM7TUFDekM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFFQSxJQUFJK0IsV0FBVyxHQUFHcEcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDK0MsU0FBUyxDQUFDO0lBQzdDQyxRQUFRLEVBQUU7TUFDUixLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7SUFDaEI7RUFDRixDQUFDLENBQUM7RUFFRmxELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsWUFBVTtJQUM3QzBDLE9BQU8sR0FBRzdDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQzs7SUFFQSxJQUFHd0MsT0FBTyxFQUFDO01BQ1A3QyxDQUFDLENBQUNZLElBQUksQ0FBQztRQUNIRSxHQUFHLEVBQUUsVUFBVTtRQUNmMEMsTUFBTSxFQUFFLE1BQU07UUFDZHpDLElBQUksRUFBRTtVQUNGTixNQUFNLEVBQUVvQyxPQUFPO1VBQ2Z3RCxNQUFNLEVBQUU7UUFDWixDQUFDO1FBQ0RyRixPQUFPLEVBQUUsU0FBQUEsUUFBUzBDLE1BQU0sRUFBRTtVQUN0QjNDLElBQUksR0FBRzJDLE1BQU0sQ0FBQzNDLElBQUk7VUFDbEJmLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDVyxHQUFHLENBQUNJLElBQUksQ0FBQzRDLFFBQVEsQ0FBQztVQUN6QzNELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDVyxHQUFHLENBQUNJLElBQUksQ0FBQzZDLElBQUksQ0FBQztVQUNwQzVELENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDVyxHQUFHLENBQUNJLElBQUksQ0FBQzhDLHFCQUFxQixDQUFDO1VBRTVELElBQUk3RCxDQUFDLENBQUM4RCxFQUFFLENBQUNmLFNBQVMsQ0FBQ2dCLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ3BEL0QsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDK0MsU0FBUyxDQUFDLENBQUMsQ0FBQ2lCLE9BQU8sQ0FBQyxDQUFDO1VBQzFDO1VBRUFoRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDLENBQUMyQixNQUFNLENBQUNjLE1BQU0sQ0FBQ08sSUFBSSxDQUFDO1VBRWxEbUMsV0FBVyxHQUFHcEcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDK0MsU0FBUyxDQUFDO1lBQ3pDQyxRQUFRLEVBQUU7Y0FDUixLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7WUFDaEI7VUFDRixDQUFDLENBQUM7VUFFRmxELENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFlBQVc7WUFDeEMsSUFBSXpCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzZFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDZSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7Y0FDdkQ1RixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5RSxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hDO1VBQ0osQ0FBQyxDQUFDO1VBRUZ6RSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQztRQUNEQyxLQUFLLEVBQUUsU0FBQUEsTUFBUytDLEdBQUcsRUFBRUMsTUFBTSxFQUFFaEQsT0FBSyxFQUFFO1VBQ2hDQyxNQUFNLENBQUNELEtBQUssQ0FBQytDLEdBQUcsQ0FBQ0UsWUFBWSxDQUFDO1FBQ2xDO01BQ0osQ0FBQyxDQUFDO0lBRU4sQ0FBQyxNQUNHO01BQ0ZoRCxNQUFNLENBQUNvQixJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEM7RUFDRixDQUFDLENBQUM7RUFFRnpDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxZQUFZO0lBRXhELElBQUlILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3NHLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNoQ3RHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFVBQVUsQ0FBQztNQUMvQlAsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNkUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUNDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO0lBQy9ELENBQUMsTUFBTTtNQUNMc0IsV0FBVyxDQUFDcEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxXQUFXLENBQUMsVUFBVSxDQUFDO01BQzNDNkYsV0FBVyxDQUFDcEcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM4RSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUU5RDlFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lFLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDNUJ6RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM2RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDOUQ7RUFDSixDQUFDLENBQUM7RUFJRjlFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZO0lBQUEsSUFBQW9HLE9BQUE7SUFFckQsSUFBTWQsRUFBRSxHQUFHeEQsS0FBSyxDQUFDQyxNQUFNLENBQUNqQyxRQUFRLENBQUNrQyxhQUFhLENBQUM7SUFDL0NzRCxFQUFFLENBQUNyRCxLQUFLLENBQUMsQ0FBQztJQUVWLElBQUlvRSxjQUFjLEdBQUdKLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDMUYsSUFBSSxDQUFDLENBQUMsQ0FBQ3dFLE1BQU0sR0FBRyxDQUFDLEdBQUdhLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDMUYsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO0lBRXhIZixDQUFDLENBQUNZLElBQUksRUFBQTJGLE9BQUE7TUFDSjFGLElBQUksRUFBRSxNQUFNO01BQ1pDLEdBQUcsRUFBRWdGLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO01BQzFDQyxXQUFXLEVBQUUsa0JBQWtCO01BQy9CakYsSUFBSSxFQUFFYyxJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUNqQjBFLGNBQWMsRUFBRUEsY0FBYztRQUM5QjNELE9BQU8sRUFBRUE7TUFDYixDQUFDLENBQUM7TUFDRjZELFdBQVcsRUFBRTtJQUFLLEdBQUFDLGVBQUEsQ0FBQUosT0FBQSxpQkFDTCxLQUFLLEdBQUFJLGVBQUEsQ0FBQUosT0FBQSxhQUNULFNBQUF2RixRQUFVMEMsTUFBTSxFQUFFO01BQ3pCK0IsRUFBRSxDQUFDbEQsSUFBSSxDQUFDLENBQUM7TUFFVGxCLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDMEMsTUFBTSxDQUFDO01BRXRCMUQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNtQixLQUFLLENBQUMsTUFBTSxDQUFDO0lBRW5DLENBQUMsR0FBQXdGLGVBQUEsQ0FBQUosT0FBQSxXQUNNLFNBQUFuRixNQUFVNkUsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUMvQ1YsRUFBRSxDQUFDbEQsSUFBSSxDQUFDLENBQUM7TUFDVCxPQUFPbEIsTUFBTSxDQUFDRCxLQUFLLENBQUM2RSxLQUFLLENBQUM1QixZQUFZLENBQUM7SUFDekMsQ0FBQyxHQUFBa0MsT0FBQSxDQUNGLENBQUM7RUFDSixDQUFDLENBQUM7RUFFRnZHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsWUFBVTtJQUMxQzBDLE9BQU8sR0FBRzdDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQzs7SUFFQSxJQUFHd0MsT0FBTyxFQUFDO01BQ1A3QyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDdEMsQ0FBQyxNQUNHO01BQ0ZFLE1BQU0sQ0FBQ29CLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QztFQUVGLENBQUMsQ0FBQztFQUlGekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFVBQVVxQyxDQUFDLEVBQUU7SUFDeERBLENBQUMsQ0FBQ29FLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCL0QsT0FBTyxHQUFHN0MsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRW5DLElBQUlzRCxRQUFRLEdBQUczRCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ1csR0FBRyxDQUFDLENBQUM7SUFDOUMsSUFBSWlELElBQUksR0FBRzVELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDVyxHQUFHLENBQUMsQ0FBQztJQUNyQyxJQUFJa0csUUFBUSxHQUFHN0csQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLElBQUdrQyxPQUFPLEVBQUM7TUFFUCxJQUFJaUUsUUFBUSxHQUFHO1FBQ2JqRSxPQUFPLEVBQUVBLE9BQU87UUFDaEJjLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsSUFBSSxFQUFFQSxJQUFJO1FBQ1ZpRCxRQUFRLEVBQUVBO01BQ1osQ0FBQztNQUVELElBQU03RSxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDakMsUUFBUSxDQUFDa0MsYUFBYSxDQUFDO01BQzlDSCxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO01BRVRwQyxDQUFDLENBQUNZLElBQUksQ0FBQztRQUNMRSxHQUFHLEVBQUVnRixPQUFPLENBQUNDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUMzQ3ZDLE1BQU0sRUFBRSxNQUFNO1FBQ2R3QyxXQUFXLEVBQUUsa0JBQWtCO1FBQy9CakYsSUFBSSxFQUFFYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2dGLFFBQVEsQ0FBQztRQUM1QjlGLE9BQU8sRUFBRSxTQUFBQSxRQUFTRCxJQUFJLEVBQUU7VUFDcEJNLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDLGtDQUFrQyxDQUFDO1VBQ2xEZ0IsQ0FBQyxDQUFDTyxJQUFJLENBQUMsQ0FBQztVQUNSdkMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNtQixLQUFLLENBQUMsTUFBTSxDQUFDO1VBQ2xDbkIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNXLEdBQUcsQ0FBQyxFQUFFLENBQUM7VUFDakNYLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDVyxHQUFHLENBQUMsRUFBRSxDQUFDO1VBQzVCWCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ1csR0FBRyxDQUFDLEVBQUUsQ0FBQztVQUVqQyxJQUFLWCxDQUFDLENBQUM4RCxFQUFFLENBQUNpRCxTQUFTLENBQUNoRCxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUc7WUFDNUMvRCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMrQyxTQUFTLENBQUMsQ0FBQyxDQUFDaUUsS0FBSyxDQUFDLENBQUMsQ0FBQ2hELE9BQU8sQ0FBQyxDQUFDO1VBQzdDO1VBRUFoRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNpRSxJQUFJLENBQUNsRCxJQUFJLENBQUNrRCxJQUFJLENBQUM7VUFFL0JqRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMrQyxTQUFTLENBQUM7WUFDdEJPLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDaEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FDdEI7WUFDQyxXQUFXLEVBQUU7VUFDZixDQUFDLENBQUM7UUFFTixDQUFDO1FBQ0RsQyxLQUFLLEVBQUUsU0FBQUEsTUFBUytDLEdBQUcsRUFBRUMsTUFBTSxFQUFFaEQsT0FBSyxFQUFFO1VBQ2hDQyxNQUFNLENBQUNELEtBQUssQ0FBQytDLEdBQUcsQ0FBQ0UsWUFBWSxDQUFDO1VBQzlCckMsQ0FBQyxDQUFDTyxJQUFJLENBQUMsQ0FBQztRQUNaO01BQ0osQ0FBQyxDQUFDO0lBRU4sQ0FBQyxNQUNHO01BQ0ZsQixNQUFNLENBQUNvQixJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEM7RUFFRixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy91c2VyQWZmZWN0YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiY29uc3QgeyBUb2FzdGVyIH0gPSByZXF1aXJlKFwicmVhY3QtaG90LXRvYXN0XCIpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gXHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsXCIubWVudS1pdGVtXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAkKFwiYm9keSAjc3ViTWVudVwiK2lkKS50b2dnbGUoXCIzc1wiKTtcclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsXCIuc3ViTWVudS1pdGVtXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgJChcImJvZHkgI2FjdGlvblwiK2lkKS50b2dnbGUoXCIzc1wiKTtcclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsXCIjbXlUYWJsZSB0Ym9keSB0clwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiI215VGFibGUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXCJjb2xvclJvd1wiKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiY29sb3JSb3dcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLmFmZmVjdFVzZXJcIixmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaWRVc2VyID0gJChcIi5jb2xvclJvd1wiKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgIHZhciBpZFNpdGUgPSAkKFwiI2Rvc3NpZXJcIikudmFsKCk7XHJcbiAgICAgIC8vIGFsZXJ0KGlkU2l0ZSk7XHJcblxyXG4gICAgICBpZihpZFVzZXIpe1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6XCJ1c2VyQWN0aW9uc1wiLFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGlkVXNlcjogaWRVc2VyLFxyXG4gICAgICAgICAgICBpZFNpdGU6aWRTaXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6ICBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgJChcIiNhY3Rpb25zQWZmZWN0ZWRUb1VzZXJcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICAkKCcjZG9zc2llcicpLnZhbCgnJykudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICQoXCIjYWZmZWN0VXNlclwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRVJST1IgIVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkNob2lzaXIgdW4gdXRpbGlzYXRldXIhXCIpXHJcbiAgICAgIH1cclxuXHJcblxyXG4gIH0pXHJcblxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsXCIuc2F2ZUFmZmVjdEJ1dHRvblwiLGZ1bmN0aW9uKCl7XHJcbiAgICAvLyB2YXIgdXNlcnMgPSBbXTtcclxuICAgIHZhciBjaGVja2VkQWN0aW9ucyA9IFtdO1xyXG4gICAgdmFyIHVuY2hlY2tlZEFjdGlvbnMgPSBbXTtcclxuICAgIHZhciBpZFVzZXIgPSAkKFwiLmNvbG9yUm93XCIpLmF0dHIoXCJpZFwiKTtcclxuICAgIHZhciBpZFNpdGUgPSAkKFwiI2Rvc3NpZXJcIikudmFsKCk7XHJcbiAgICAvLyBhbGVydChpZFNpdGUpXHJcbiAgICAkKCdpbnB1dC5jaGVja2JveEFjdGlvbjpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNoZWNrZWRBY3Rpb25zLnB1c2goJCh0aGlzKS5hdHRyKCdpZCcpLnNsaWNlKDEyKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdpbnB1dC5jaGVja2JveEFjdGlvbjpjaGVja2JveDpub3QoOmNoZWNrZWQpJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdW5jaGVja2VkQWN0aW9ucy5wdXNoKCQodGhpcykuYXR0cignaWQnKS5zbGljZSgxMikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdmFyIGpzb25Vc2VycyA9IEpTT04uc3RyaW5naWZ5KHVzZXJzKTtcclxuICAgIHZhciBqc29uQ2hlY2tlZEFjdGlvbnMgPSBKU09OLnN0cmluZ2lmeShjaGVja2VkQWN0aW9ucyk7XHJcbiAgICB2YXIganNvblVuY2hlY2tlZEFjdGlvbnMgPSBKU09OLnN0cmluZ2lmeSh1bmNoZWNrZWRBY3Rpb25zKTtcclxuXHJcbiAgICBjb25zdCBsID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiYWZmZWN0VXNlclwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZFVzZXI6aWRVc2VyLFxyXG4gICAgICAgICAgICBpZFNpdGU6aWRTaXRlLFxyXG4gICAgICAgICAgICBqc29uQ2hlY2tlZEFjdGlvbnM6IGpzb25DaGVja2VkQWN0aW9ucyxcclxuICAgICAgICAgICAganNvblVuY2hlY2tlZEFjdGlvbnM6IGpzb25VbmNoZWNrZWRBY3Rpb25zLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5hZmZlY3RlZCArIFwiIEFGRkVDVEUgLSBcIiArIGRhdGEubm90QWZmZWN0ZWQgKyBcIiBOT04gQUZGRUNURVwiKTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVSUk9SICFcIilcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsXCIjYnRuX2FmZmVjdFVzZXJcIiwgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgdmFyIGlkVXNlciA9ICQoXCIuY29sb3JSb3dcIikuYXR0cihcImlkXCIpO1xyXG5cclxuICAgIGlmKGlkVXNlcil7XHJcbiAgICAgICQoXCIjYWN0aW9uc0FmZmVjdGVkVG9Vc2VyXCIpLmVtcHR5KClcclxuICAgICAgJCgnI2Rvc3NpZXInKS52YWwoJycpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAkKFwiI2FmZmVjdFVzZXJcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0b2FzdHIuaW5mbyhcIlNlbGVjdGlvbmV6IHVuIHV0aWxpc2F0ZXVyIHN2cCAhXCIpO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLFwiI2Rvc3NpZXJcIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZigkKHRoaXMpLnZhbCgpICE9IFwiXCIpe1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwidXNlckFjdGlvbnNcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWRVc2VyOiAkKFwiLmNvbG9yUm93XCIpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICAgICAgaWRTaXRlOiAkKHRoaXMpLnZhbCgpLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJ6YWthcmlhXCIpXHJcbiAgICAgICAgICAgICQoXCIjYWN0aW9uc0FmZmVjdGVkVG9Vc2VyXCIpLmVtcHR5KCkuYXBwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFUlJPUiAhXCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgdmFyIGlkX3VzZXI7XHJcblxyXG4gIHZhciBjb252ZW50aW9uVGFibGUgPSAkKFwiI2NvbnZlbnRpb25fdGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICBcInVybFwiOiB3aW5kb3cuZnJlbmNoSnNvblVybFxyXG4gICAgICB9LFxyXG4gICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiAwIH1cclxuICAgICAgXSxcclxuICAgICAgbGVuZ3RoTWVudTogW1sxMCwgMjUsIDUwLCAxMDAsIC0xXSwgWzEwLCAyNSwgNTAsIDEwMCwgXCJUb3VzXCJdXSxcclxuICAgICAgcGFnZUxlbmd0aDogMTBcclxuICB9KTtcclxuXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5hc3NpZ25Db252ZW50aW9uXCIsZnVuY3Rpb24oKXtcclxuICAgIGlkX3VzZXIgPSAkKFwiLmNvbG9yUm93XCIpLmF0dHIoXCJpZFwiKTtcclxuICAgIC8vIGFsZXJ0KGlkX3VzZXIpO1xyXG5cclxuICAgIGlmKGlkX3VzZXIpe1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJmaW5kVXNlclwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZFVzZXI6IGlkX3VzZXIsXHJcbiAgICAgICAgICAgICAgICBjb252ZW50aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSByZXN1bHQuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdXNlcl9uYW1lJykudmFsKGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VzZXJfbm9tJykudmFsKGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjdXNlcl9wcm9mZXNzaW9uJykudmFsKGRhdGEucHJvZmVzc2lvbkRlc2NyaXB0aW9uKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI2NvbnZlbnRpb25fdGFibGUgdGJvZHknKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjY29udmVudGlvbl90YWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNjb252ZW50aW9uX3RhYmxlJykuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJ2JvZHkgI2xpc3RfY29udmVudGlvbicpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdC5odG1sKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb252ZW50aW9uVGFibGUgPSAkKFwiI2NvbnZlbnRpb25fdGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbWzEwLCAyNSwgNTAsIDEwMCwgLTFdLCBbMTAsIDI1LCA1MCwgMTAwLCBcIlRvdXNcIl1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VMZW5ndGg6IDEwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhVGFibGVTZWxlY3RBbGxDdHJsKGNvbnZlbnRpb25UYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNhc3NpZ25fY29udmVudGlvblwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG9hc3RyLmluZm8oXCJDaG9pc2lyIHVuIHV0aWxpc2F0ZXVyIVwiKVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCcjY29udmVudGlvbl90YWJsZSB0Ym9keScpLm9uKCdjaGFuZ2UnLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmVuYWJsZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgJHJvdy5hZGRDbGFzcygnY29sb3JSb3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRyb3cucmVtb3ZlQ2xhc3MoJ2NvbG9yUm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0YXRlIG9mIFwiU2VsZWN0IGFsbFwiIGNvbnRyb2xcclxuICAgIHVwZGF0ZURhdGFUYWJsZVNlbGVjdEFsbEN0cmwoY29udmVudGlvblRhYmxlKTtcclxuICB9KVxyXG5cclxuICAkKCcjY29udmVudGlvbl90YWJsZSB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgY2hlY2tib3hcclxuICAgIGlmIChldmVudC50YXJnZXQudHlwZSAhPT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgIHZhciAkY2hlY2tib3ggPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTplbmFibGVkJyk7XHJcbiAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCAhJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEhhbmRsZSBjbGljayBvbiBcIlNlbGVjdCBhbGxcIiBjaGVja2JveFxyXG4gICQoJyNjb252ZW50aW9uX3RhYmxlIHRoZWFkJykub24oJ2NoYW5nZScsICdpbnB1dFtuYW1lPVwic2VsZWN0X2FsbFwiXScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAkKCcjY29udmVudGlvbl90YWJsZSB0Ym9keSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZW5hYmxlZCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCAhPT0gY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGFUYWJsZVNlbGVjdEFsbEN0cmwodGFibGUpIHtcclxuICAgIHZhciAkdGFibGUgPSB0YWJsZS50YWJsZSgpLm5vZGUoKTtcclxuICAgIHZhciAkY2hrYm94X2FsbCA9ICQoJ3Rib2R5IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsICR0YWJsZSk7XHJcbiAgICB2YXIgJGNoa2JveF9jaGVja2VkID0gJCgndGJvZHkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6bm90KDpkaXNhYmxlZCknLCAkdGFibGUpO1xyXG4gICAgdmFyIGNoa2JveF9zZWxlY3RfYWxsID0gJCgndGhlYWQgaW5wdXRbbmFtZT1cInNlbGVjdF9hbGxcIl0nLCAkdGFibGUpLmdldCgwKTtcclxuXHJcbiAgICAvLyBJZiBub25lIG9mIHRoZSBjaGVja2JveGVzIGFyZSBjaGVja2VkXHJcbiAgICBpZiAoJGNoa2JveF9jaGVja2VkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNoa2JveF9zZWxlY3RfYWxsLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJ2luZGV0ZXJtaW5hdGUnIGluIGNoa2JveF9zZWxlY3RfYWxsKSB7XHJcbiAgICAgICAgY2hrYm94X3NlbGVjdF9hbGwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoJGNoa2JveF9jaGVja2VkLmxlbmd0aCA9PT0gJGNoa2JveF9hbGwubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gSWYgYWxsIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWRcclxuICAgICAgICBjaGtib3hfc2VsZWN0X2FsbC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoJ2luZGV0ZXJtaW5hdGUnIGluIGNoa2JveF9zZWxlY3RfYWxsKSB7XHJcbiAgICAgICAgY2hrYm94X3NlbGVjdF9hbGwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgc29tZSBjaGVja2JveGVzIGFyZSBjaGVja2VkXHJcbiAgICAgICAgY2hrYm94X3NlbGVjdF9hbGwuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCdpbmRldGVybWluYXRlJyBpbiBjaGtib3hfc2VsZWN0X2FsbCkge1xyXG4gICAgICAgIGNoa2JveF9zZWxlY3RfYWxsLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5zYXZlQXNzaWduQ29udmVudGlvblwiLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgY29uc3QgbGEgPSBsYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsYS5zdGFydCgpO1xyXG5cclxuICAgIHZhciBjb252ZW50aW9uSWRzID0gW107XHJcblxyXG4gICAgJChcIiNjb252ZW50aW9uX3RhYmxlIHRib2R5IHRyXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnZlbnRpb25JZHMucHVzaChjaGVja2JveC52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHVzZXJDb252ZW50aW9uRGF0YSA9IHtcclxuICAgICAgY29udmVudGlvbklkczogY29udmVudGlvbklkcyxcclxuICAgICAgaWRfdXNlcjogaWRfdXNlclxyXG4gICAgfTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9hc3NpZ25fY29udmVudGlvbicpLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlckNvbnZlbnRpb25EYXRhKSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGxhLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0KTtcclxuXHJcbiAgICAgICAgJChcIiNhc3NpZ25fY29udmVudGlvblwiKS5tb2RhbChcImhpZGVcIik7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIGxhLnN0b3AoKTtcclxuICAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KVxyXG5cclxuICAgIHZhciBjYWlzc2VUYWJsZSA9ICQoXCIjY2Fpc3NlX3RhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5hc3NpZ25DYWlzc2VcIixmdW5jdGlvbigpe1xyXG4gICAgICBpZF91c2VyID0gJChcIi5jb2xvclJvd1wiKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgIC8vIGFsZXJ0KGlkX3VzZXIpO1xyXG5cclxuICAgICAgaWYoaWRfdXNlcil7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogXCJmaW5kVXNlclwiLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBpZFVzZXI6IGlkX3VzZXIsXHJcbiAgICAgICAgICAgICAgICAgIGNhaXNzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICQoJyN1c2VyX25hbWVfY2Fpc3NlJykudmFsKGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjdXNlcl9ub21fY2Fpc3NlJykudmFsKGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyN1c2VyX3Byb2Zlc3Npb25fY2Fpc3NlJykudmFsKGRhdGEucHJvZmVzc2lvbkRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjY2Fpc3NlX3RhYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY2Fpc3NlX3RhYmxlJykuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCdib2R5ICNsaXN0X2NhaXNzZScpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdC5odG1sKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNhaXNzZVRhYmxlID0gJChcIiNjYWlzc2VfdGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQoXCIjY2Fpc3NlX3RhYmxlIHRib2R5IHRyXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NvbG9yUm93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJChcIiNhc3NpZ25fY2Fpc3NlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRvYXN0ci5pbmZvKFwiQ2hvaXNpciB1biB1dGlsaXNhdGV1ciFcIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2NhaXNzZV90YWJsZSB0Ym9keSB0clwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiY29sb3JSb3dcIikpIHtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjb2xvclJvd1wiKTtcclxuICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYWlzc2VUYWJsZS4kKCd0cicpLnJlbW92ZUNsYXNzKFwiY29sb3JSb3dcIik7XHJcbiAgICAgICAgICBjYWlzc2VUYWJsZS4kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNvbG9yUm93XCIpO1xyXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zYXZlQXNzaWduQ2Fpc3NlXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGxhID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBsYS5zdGFydCgpO1xyXG5cclxuICAgICAgbGV0IHNlbGVjdGVkQ2Fpc3NlID0gY2Fpc3NlVGFibGUucm93cygnLmNvbG9yUm93JykuZGF0YSgpLmxlbmd0aCA+IDAgPyBjYWlzc2VUYWJsZS5yb3dzKCcuY29sb3JSb3cnKS5kYXRhKClbMF1bMV0gOiBudWxsO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJhcHBfYXNzaWduX2NhaXNzZVwiKSxcclxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYWlzc2U6IHNlbGVjdGVkQ2Fpc3NlLFxyXG4gICAgICAgICAgICBpZF91c2VyOiBpZF91c2VyLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgbGEuc3RvcCgpO1xyXG5cclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgJChcIiNhc3NpZ25fY2Fpc3NlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbGEuc3RvcCgpO1xyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLmR1cGxpY2F0ZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlkX3VzZXIgPSAkKFwiLmNvbG9yUm93XCIpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgLy8gYWxlcnQoaWRfdXNlcik7XHJcblxyXG4gICAgICBpZihpZF91c2VyKXtcclxuICAgICAgICAgICQoXCIjZHVwbGljYXRlX3VzZXJcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgdG9hc3RyLmluZm8oXCJDaG9pc2lyIHVuIHV0aWxpc2F0ZXVyIVwiKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIiNkdXBsaWNhdGVVc2VyRm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlkX3VzZXIgPSAkKFwiLmNvbG9yUm93XCIpLmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAgIHZhciB1c2VybmFtZSA9ICQoXCIjZHVwbGljYXRlZF91c2VybmFtZVwiKS52YWwoKTtcclxuICAgICAgdmFyIG5hbWUgPSAkKFwiI2R1cGxpY2F0ZWRfbm9tXCIpLnZhbCgpO1xyXG4gICAgICB2YXIgcGFzc3dvcmQgPSAkKFwiI2R1cGxpY2F0ZWRfcGFzc3dvcmRcIikudmFsKCk7XHJcblxyXG4gICAgICBpZihpZF91c2VyKXtcclxuXHJcbiAgICAgICAgICB2YXIgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkX3VzZXI6IGlkX3VzZXIsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IGwgPSBsYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZHVwbGljYXRlX3VzZXInKSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiVXRpbGlzYXRldXIgZHVwbGlxdcOpIGF2ZWMgc3VjY8Ooc1wiKTtcclxuICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZHVwbGljYXRlX3VzZXJcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2R1cGxpY2F0ZWRfdXNlcm5hbWVcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2R1cGxpY2F0ZWRfbm9tXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNkdXBsaWNhdGVkX3Bhc3N3b3JkXCIpLnZhbChcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICggJC5mbi5kYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbXlUYWJsZVwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbXlUYWJsZScpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKFwiI2xpc3RVc2Vyc1wiKS5odG1sKGRhdGEuaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKFwiI215VGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0b2FzdHIuaW5mbyhcIkNob2lzaXIgdW4gdXRpbGlzYXRldXIhXCIpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJfcmVxdWlyZSIsInJlcXVpcmUiLCJUb2FzdGVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImlkIiwiYXR0ciIsInRvZ2dsZSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJpZFVzZXIiLCJpZFNpdGUiLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwiZW1wdHkiLCJ0cmlnZ2VyIiwibW9kYWwiLCJlcnJvciIsInRvYXN0ciIsIndhcm5pbmciLCJjaGVja2VkQWN0aW9ucyIsInVuY2hlY2tlZEFjdGlvbnMiLCJlYWNoIiwicHVzaCIsInNsaWNlIiwianNvbkNoZWNrZWRBY3Rpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb25VbmNoZWNrZWRBY3Rpb25zIiwibCIsImxhZGRhIiwiY3JlYXRlIiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiYWZmZWN0ZWQiLCJub3RBZmZlY3RlZCIsInN0b3AiLCJlIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJpZF91c2VyIiwiY29udmVudGlvblRhYmxlIiwiRGF0YVRhYmxlIiwibGFuZ3VhZ2UiLCJ3aW5kb3ciLCJmcmVuY2hKc29uVXJsIiwiY29sdW1uRGVmcyIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsIm1ldGhvZCIsImNvbnZlbnRpb24iLCJyZXN1bHQiLCJ1c2VybmFtZSIsIm5hbWUiLCJwcm9mZXNzaW9uRGVzY3JpcHRpb24iLCJmbiIsImlzRGF0YVRhYmxlIiwiZGVzdHJveSIsImh0bWwiLCJ1cGRhdGVEYXRhVGFibGVTZWxlY3RBbGxDdHJsIiwieGhyIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiJHJvdyIsImNsb3Nlc3QiLCJjaGVja2VkIiwiYWRkQ2xhc3MiLCJldmVudCIsInRhcmdldCIsIiRjaGVja2JveCIsImZpbmQiLCJwcm9wIiwiZGlzYWJsZWQiLCJ0YWJsZSIsIiR0YWJsZSIsIm5vZGUiLCIkY2hrYm94X2FsbCIsIiRjaGtib3hfY2hlY2tlZCIsImNoa2JveF9zZWxlY3RfYWxsIiwiZ2V0IiwibGVuZ3RoIiwiaW5kZXRlcm1pbmF0ZSIsImxhIiwiY29udmVudGlvbklkcyIsImNoZWNrYm94IiwiaXMiLCJ1c2VyQ29udmVudGlvbkRhdGEiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJjb250ZW50VHlwZSIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY2Fpc3NlVGFibGUiLCJjYWlzc2UiLCJoYXNDbGFzcyIsIl8kJGFqYXgiLCJzZWxlY3RlZENhaXNzZSIsInJvd3MiLCJwcm9jZXNzRGF0YSIsIl9kZWZpbmVQcm9wZXJ0eSIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmQiLCJ1c2VyRGF0YSIsImRhdGFUYWJsZSIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==