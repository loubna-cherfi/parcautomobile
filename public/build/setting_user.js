(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_user"],{

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

/***/ "./assets/js/settings/user.js":
/*!************************************!*\
  !*** ./assets/js/settings/user.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
$(document).ready(function () {
  $("select").select2();
  $('#myTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
    "autoWidth": false
  });
  $("body").on("click", ".activateUser", function () {
    var id = $(this).attr("data-id");
    $.ajax({
      url: "activateUser",
      method: "POST",
      data: {
        idUser: id
      },
      success: function success(data) {
        if ($.fn.dataTable.isDataTable("#myTable")) {
          $('#myTable').DataTable().clear().destroy();
        }
        $("#listUsers").html(data.html);
        $("#myTable").DataTable({
          lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
          "autoWidth": false
        });
        toastr.success(data.message);
      }
    });
  });
  $("body").on("click", ".deleteUser", function () {
    var id = $(this).attr("data-id");
    $.ajax({
      url: "deleteUser",
      method: "POST",
      data: {
        idUser: id
      },
      success: function success(data) {
        if ($.fn.dataTable.isDataTable("#myTable")) {
          $('#myTable').DataTable().clear().destroy();
        }
        $("#listUsers").html(data.html);
        $("#myTable").DataTable({
          lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
          "autoWidth": false
        });
        $("#closeAddUser").click();
        toastr.success(data.message);
      }
    });
  });
  $(".saveAddUser").on("click", function () {
    var username = $("#username").val();
    var nom = $("#nom").val();
    var password = $("#password").val();
    var routeName = $("#routeName").val();
    var status = $('input[name="status"]:checked').val();
    var profession = $("#profession").val();
    if (password == "") {
      $("#password").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#password").attr('style', "border: 1px solid #gray !important");
    }
    if (username == "") {
      $("#username").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#username").attr('style', "border: 1px solid lightgray  !important");
    }
    if (nom == "") {
      $("#name").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#name").attr('style', "border: 1px solid lightgray  !important");
    }
    if (profession == "") {
      $("#select2-profession-container").parent().css("border", "1px solid #eb0000");
    } else {
      $("#select2-profession-container").parent().css("border", "1px solid lightgray ");
    }
    if (password != "" && username != "" && nom != "" && profession != "") {
      var la = ladda.create(document.activeElement);
      la.start();
      $.ajax({
        url: "addUser",
        method: "POST",
        data: {
          username: username,
          nom: nom,
          password: password,
          status: status,
          profession: profession,
          routeName: routeName
        },
        success: function success(data) {
          if (data != "USER ALREDY EXIST") {
            if ($.fn.dataTable.isDataTable("#myTable")) {
              $('#myTable').DataTable().clear().destroy();
            }
            $("#listUsers").html(data);
            $("#myTable").DataTable({
              lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
              "autoWidth": false
            });
            $("#closeAddUser").click();
            toastr.success("Utilisateur ajouté avec success");
            la.stop();
          } else {
            toastr.error("Le nom d'utilisateur déja exist !");
            la.stop();
          }
        }
      });
    }
  });
  $("body").on("click", ".updateBtn", function () {
    var idUser = $(this).attr("id").slice(13);
    $.ajax({
      url: "findUser",
      method: "POST",
      data: {
        idUser: idUser
      },
      success: function success(data) {
        $("#idUser").val(data.id);
        $("#usernameUpd").val(data.username);
        $("#nomUpd").val(data.nom);
        $("#routeNameUpd").val(data.route);
        if (data.status) {
          $("#active").prop("checked", "checked");
        } else {
          $("#desactive").prop("checked", "checked");
        }
        $("#professionUpd").val(data.profession).trigger("change");
        $("#updateUser").modal('show');
      }
    });
  });
  $(".saveUpdateUser").on("click", function () {
    var idUser = $("#idUser").val();
    var username = $("#usernameUpd").val();
    var nom = $("#nomUpd").val();
    var password = $("#passwordUpd").val();
    var routeName = $("#routeNameUpd").val();
    var status = $('input[name="statusUpd"]:checked').val();
    var profession = $("#professionUpd").val();
    if (password == "") {
      $("#passwordUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#passwordUpd").attr('style', "border: 1px solid #gray !important");
    }
    if (username == "") {
      $("#usernameUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#usernameUpd").attr('style', "border: 1px solid lightgray  !important");
    }
    if (nom == "") {
      $("#nameUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#nameUpd").attr('style', "border: 1px solid lightgray  !important");
    }
    if (profession == "") {
      $("#select2-professionUpd-container").parent().css("border", "1px solid #eb0000");
    } else {
      $("#select2-professionUpd-container").parent().css("border", "1px solid lightgray ");
    }
    if (password != "" && username != "" && nom != "" && profession != "") {
      var l = ladda.create(document.activeElement);
      l.start();
      $.ajax({
        url: "updateUser",
        method: "POST",
        data: {
          idUser: idUser,
          username: username,
          nom: nom,
          password: password,
          status: status,
          profession: profession,
          routeName: routeName
        },
        success: function success(data) {
          if (data != "USER ALREDY EXIST") {
            if ($.fn.dataTable.isDataTable("#myTable")) {
              $('#myTable').DataTable().clear().destroy();
            }
            $("#listUsers").html(data);
            $("#myTable").DataTable({
              lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
              "autoWidth": false
            });
            $("#updateUser").modal('hide');
            $("#closeUpdateUser").click();
            toastr.success("Utilisateur modifié avec success");
            l.stop();
          } else {
            toastr.error("Le nom d'utilisateur déja exist !");
            l.stop();
          }
        },
        error: function error() {
          l.stop();
        }
      });
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var nativeSlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/user.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjtBQUMxRDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3BEWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsd0JBQXdCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ25FLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDM0Qsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRixrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy91c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxQQVJDQVVUT1xcXFx2YXJcXFxcY2FjaGVcXFxcZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiICAkKGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG5cclxuICAgICAgICAkKCcjbXlUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAnQWxsJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXCJhdXRvV2lkdGhcIjogZmFsc2VcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3RpdmF0ZVVzZXJcIiAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG5cclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJhY3RpdmF0ZVVzZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBpZFVzZXI6IGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICBpZiAoICQuZm4uZGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI215VGFibGVcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbXlUYWJsZScpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2xpc3RVc2Vyc1wiKS5odG1sKGRhdGEuaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI215VGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZVVzZXJcIiAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiZGVsZXRlVXNlclwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIGlkVXNlcjogaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgIGlmICggJC5mbi5kYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbXlUYWJsZVwiKSApIHtcclxuICAgICAgICAgICAgICAgICQoJyNteVRhYmxlJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjbGlzdFVzZXJzXCIpLmh0bWwoZGF0YS5odG1sKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjbXlUYWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgJ0FsbCddLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiYXV0b1dpZHRoXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKFwiI2Nsb3NlQWRkVXNlclwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAkKFwiLnNhdmVBZGRVc2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICB2YXIgdXNlcm5hbWUgPSAkKFwiI3VzZXJuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgdmFyIG5vbSA9ICQoXCIjbm9tXCIpLnZhbCgpO1xyXG4gICAgICAgICAgdmFyIHBhc3N3b3JkID0gJChcIiNwYXNzd29yZFwiKS52YWwoKTtcclxuICAgICAgICAgIHZhciByb3V0ZU5hbWUgPSAkKFwiI3JvdXRlTmFtZVwiKS52YWwoKTtcclxuICAgICAgICAgIHZhciBzdGF0dXMgPSAkKCdpbnB1dFtuYW1lPVwic3RhdHVzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICAgIHZhciBwcm9mZXNzaW9uID0gJChcIiNwcm9mZXNzaW9uXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgIGlmKHBhc3N3b3JkID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICQoXCIjcGFzc3dvcmRcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNlYjAwMDAgIWltcG9ydGFudFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgJChcIiNwYXNzd29yZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2dyYXkgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodXNlcm5hbWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgJChcIiN1c2VybmFtZVwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgJChcIiN1c2VybmFtZVwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5ICAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChub20gPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgJChcIiNuYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAkKFwiI25hbWVcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheSAgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocHJvZmVzc2lvbiA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAkKFwiI3NlbGVjdDItcHJvZmVzc2lvbi1jb250YWluZXJcIikucGFyZW50KCkuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgI2ViMDAwMFwiKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICQoXCIjc2VsZWN0Mi1wcm9mZXNzaW9uLWNvbnRhaW5lclwiKS5wYXJlbnQoKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCBsaWdodGdyYXkgXCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHBhc3N3b3JkICE9IFwiXCIgJiYgdXNlcm5hbWUgIT0gXCJcIiAmJiBub20gIT0gXCJcIiAmJiBwcm9mZXNzaW9uICE9IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGEgPSBsYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBsYS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcImFkZFVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIG5vbTpub20sXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDpwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czpzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9mZXNzaW9uOnByb2Zlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZU5hbWU6cm91dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhICE9IFwiVVNFUiBBTFJFRFkgRVhJU1RcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAkLmZuLmRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNteVRhYmxlXCIpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNteVRhYmxlJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNsaXN0VXNlcnNcIikuaHRtbChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI215VGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b1dpZHRoXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjY2xvc2VBZGRVc2VyXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlV0aWxpc2F0ZXVyIGFqb3V0w6kgYXZlYyBzdWNjZXNzXCIpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGxhLnN0b3AoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiTGUgbm9tIGQndXRpbGlzYXRldXIgZMOpamEgZXhpc3QgIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGEuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuXHJcbiAgICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiAsIFwiLnVwZGF0ZUJ0blwiLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgaWRVc2VyID0gJCh0aGlzKS5hdHRyKFwiaWRcIikuc2xpY2UoMTMpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB1cmw6IFwiZmluZFVzZXJcIixcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBpZFVzZXI6IGlkVXNlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgJChcIiNpZFVzZXJcIikudmFsKGRhdGEuaWQpXHJcbiAgICAgICAgICAgICQoXCIjdXNlcm5hbWVVcGRcIikudmFsKGRhdGEudXNlcm5hbWUpXHJcbiAgICAgICAgICAgICQoXCIjbm9tVXBkXCIpLnZhbChkYXRhLm5vbSlcclxuICAgICAgICAgICAgJChcIiNyb3V0ZU5hbWVVcGRcIikudmFsKGRhdGEucm91dGUpXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgICAgICAkKFwiI2FjdGl2ZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICQoXCIjZGVzYWN0aXZlXCIpLnByb3AoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI3Byb2Zlc3Npb25VcGRcIikudmFsKGRhdGEucHJvZmVzc2lvbikudHJpZ2dlcihcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICAgICAgJChcIiN1cGRhdGVVc2VyXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgICAgJChcIi5zYXZlVXBkYXRlVXNlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWRVc2VyID0gJChcIiNpZFVzZXJcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciB1c2VybmFtZSA9ICQoXCIjdXNlcm5hbWVVcGRcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBub20gPSAkKFwiI25vbVVwZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gJChcIiNwYXNzd29yZFVwZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHJvdXRlTmFtZSA9ICQoXCIjcm91dGVOYW1lVXBkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gJCgnaW5wdXRbbmFtZT1cInN0YXR1c1VwZFwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9mZXNzaW9uID0gJChcIiNwcm9mZXNzaW9uVXBkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYocGFzc3dvcmQgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Bhc3N3b3JkVXBkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICQoXCIjcGFzc3dvcmRVcGRcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNncmF5ICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1c2VybmFtZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICQoXCIjdXNlcm5hbWVVcGRcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNlYjAwMDAgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICQoXCIjdXNlcm5hbWVVcGRcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheSAgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vbSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICQoXCIjbmFtZVVwZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgJChcIiNuYW1lVXBkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXkgICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9mZXNzaW9uID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgJChcIiNzZWxlY3QyLXByb2Zlc3Npb25VcGQtY29udGFpbmVyXCIpLnBhcmVudCgpLmNzcyhcImJvcmRlclwiLFwiMXB4IHNvbGlkICNlYjAwMDBcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3NlbGVjdDItcHJvZmVzc2lvblVwZC1jb250YWluZXJcIikucGFyZW50KCkuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgbGlnaHRncmF5IFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocGFzc3dvcmQgIT0gXCJcIiAmJiB1c2VybmFtZSAhPSBcIlwiICYmIG5vbSAhPSBcIlwiICYmIHByb2Zlc3Npb24gIT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGwgPSBsYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwidXBkYXRlVXNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVXNlcjogaWRVc2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tOm5vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czpzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb246cHJvZmVzc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVOYW1lOnJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSAhPSBcIlVTRVIgQUxSRURZIEVYSVNUXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAkLmZuLmRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNteVRhYmxlXCIpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI215VGFibGUnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsaXN0VXNlcnNcIikuaHRtbChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbXlUYWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgJ0FsbCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b1dpZHRoXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3VwZGF0ZVVzZXJcIikubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjbG9zZVVwZGF0ZVVzZXJcIikuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJVdGlsaXNhdGV1ciBtb2RpZmnDqSBhdmVjIHN1Y2Nlc3NcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiTGUgbm9tIGQndXRpbGlzYXRldXIgZMOpamEgZXhpc3QgIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9ICk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcclxuXHJcbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xyXG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xyXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xyXG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJyYXkgPSBbXTtcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XHJcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XHJcbiAgfSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyhbXS5zbGljZSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XHJcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XHJcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xyXG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcclxuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xyXG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcblxyXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcclxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xyXG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcclxudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcclxuXHJcbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xyXG52YXIgZW1wdHkgPSBbXTtcclxudmFyIGNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XHJcbnZhciBjb25zdHJ1Y3RvclJlZ0V4cCA9IC9eXFxzKig/OmNsYXNzfGZ1bmN0aW9uKVxcYi87XHJcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoY29uc3RydWN0b3JSZWdFeHAuZXhlYyk7XHJcbnZhciBJTkNPUlJFQ1RfVE9fU1RSSU5HID0gIWNvbnN0cnVjdG9yUmVnRXhwLmV4ZWMobm9vcCk7XHJcblxyXG52YXIgaXNDb25zdHJ1Y3Rvck1vZGVybiA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcclxuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0cnVjdChub29wLCBlbXB0eSwgYXJndW1lbnQpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG52YXIgaXNDb25zdHJ1Y3RvckxlZ2FjeSA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcclxuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XHJcbiAgc3dpdGNoIChjbGFzc29mKGFyZ3VtZW50KSkge1xyXG4gICAgY2FzZSAnQXN5bmNGdW5jdGlvbic6XHJcbiAgICBjYXNlICdHZW5lcmF0b3JGdW5jdGlvbic6XHJcbiAgICBjYXNlICdBc3luY0dlbmVyYXRvckZ1bmN0aW9uJzogcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgLy8gd2UgY2FuJ3QgY2hlY2sgLnByb3RvdHlwZSBzaW5jZSBjb25zdHJ1Y3RvcnMgcHJvZHVjZWQgYnkgLmJpbmQgaGF2ZW4ndCBpdFxyXG4gICAgLy8gYEZ1bmN0aW9uI3RvU3RyaW5nYCB0aHJvd3Mgb24gc29tZSBidWlsdC1pdCBmdW5jdGlvbiBpbiBzb21lIGxlZ2FjeSBlbmdpbmVzXHJcbiAgICAvLyAoZm9yIGV4YW1wbGUsIGBET01RdWFkYCBhbmQgc2ltaWxhciBpbiBGRjQxLSlcclxuICAgIHJldHVybiBJTkNPUlJFQ1RfVE9fU1RSSU5HIHx8ICEhZXhlYyhjb25zdHJ1Y3RvclJlZ0V4cCwgaW5zcGVjdFNvdXJjZShhcmd1bWVudCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5pc0NvbnN0cnVjdG9yTGVnYWN5LnNoYW0gPSB0cnVlO1xyXG5cclxuLy8gYElzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3JcclxubW9kdWxlLmV4cG9ydHMgPSAhY29uc3RydWN0IHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY2FsbGVkO1xyXG4gIHJldHVybiBpc0NvbnN0cnVjdG9yTW9kZXJuKGlzQ29uc3RydWN0b3JNb2Rlcm4uY2FsbClcclxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKE9iamVjdClcclxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZTsgfSlcclxuICAgIHx8IGNhbGxlZDtcclxufSkgPyBpc0NvbnN0cnVjdG9yTGVnYWN5IDogaXNDb25zdHJ1Y3Rvck1vZGVybjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcclxudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xyXG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XHJcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xyXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XHJcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xyXG52YXIgbmF0aXZlU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcclxuXHJcbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcclxuXHJcbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XHJcbnZhciAkQXJyYXkgPSBBcnJheTtcclxudmFyIG1heCA9IE1hdGgubWF4O1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXHJcbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xyXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XHJcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcclxuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcclxuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xyXG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcclxuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxyXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XHJcbiAgICBpZiAoaXNBcnJheShPKSkge1xyXG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XHJcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXHJcbiAgICAgIGlmIChpc0NvbnN0cnVjdG9yKENvbnN0cnVjdG9yKSAmJiAoQ29uc3RydWN0b3IgPT09ICRBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcclxuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gJEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UoTywgaywgZmluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gJEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XHJcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcclxuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QyIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9uIiwiaWQiLCJhdHRyIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJpZFVzZXIiLCJzdWNjZXNzIiwiZm4iLCJkYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImh0bWwiLCJ0b2FzdHIiLCJtZXNzYWdlIiwiY2xpY2siLCJ1c2VybmFtZSIsInZhbCIsIm5vbSIsInBhc3N3b3JkIiwicm91dGVOYW1lIiwic3RhdHVzIiwicHJvZmVzc2lvbiIsInBhcmVudCIsImNzcyIsImxhIiwibGFkZGEiLCJjcmVhdGUiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJzdG9wIiwiZXJyb3IiLCJzbGljZSIsInJvdXRlIiwicHJvcCIsInRyaWdnZXIiLCJtb2RhbCIsImwiXSwic291cmNlUm9vdCI6IiJ9