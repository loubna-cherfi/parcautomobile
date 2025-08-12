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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
$(document).ready(function () {
  var globalActions = [];
  $('#conducteurTable').DataTable({
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate('app_fetch_conducteurs'),
      type: 'GET',
      dataSrc: function dataSrc(json) {
        // Store actions globally for dynamic rendering
        window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
        return json.data;
      }
    },
    columns: [{
      data: 'id'
    }, {
      data: 'nom'
    }, {
      data: 'prenom'
    }, {
      data: 'cin'
    }, {
      data: 'permis_type'
    }, {
      data: 'telephone'
    }, {
      data: 'active',
      name: 'c.active',
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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = (__webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = (__webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fos-router_public_js_router_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_is-array_js-n-687a39","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-ca4b17"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/conducteur.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDZCQUE2QjtBQUNqQztBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLHVIQUE4QztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhCQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWWTtBQUNiLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3ZELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2QztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy9jb25kdWN0ZXVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7aW1wb3J0IHJvdXRlcyBmcm9tIFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcUEFSQ0FVVE9cXFxcdmFyXFxcXGNhY2hlXFxcXGZvc1JvdXRlcy5qc29uXCI7Um91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxubGV0IGdsb2JhbEFjdGlvbnMgPSBbXTtcclxuXHJcbiQoJyNjb25kdWN0ZXVyVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZmV0Y2hfY29uZHVjdGV1cnMnKSxcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICBkYXRhU3JjOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgYWN0aW9ucyBnbG9iYWxseSBmb3IgZHluYW1pYyByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zID0gQXJyYXkuaXNBcnJheShqc29uLmFjdGlvbnMpID8ganNvbi5hY3Rpb25zIDogT2JqZWN0LnZhbHVlcyhqc29uLmFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgXHJcbiAgICAgICAgeyBkYXRhOiAnaWQnIH0sICBcclxuICAgICAgICB7IGRhdGE6ICdub20nIH0sXHJcbiAgICAgICAgeyBkYXRhOiAncHJlbm9tJyB9LFxyXG4gICAgICAgIHsgZGF0YTogJ2NpbicgfSxcclxuICAgICAgICB7IGRhdGE6ICdwZXJtaXNfdHlwZScgfSxcclxuICAgICAgICB7IGRhdGE6ICd0ZWxlcGhvbmUnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhOiAnYWN0aXZlJyxcclxuICAgICAgICAgICAgbmFtZTogJ2MuYWN0aXZlJyxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgPyAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBhY3RpZkljb25cIj48L2k+JyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGluYWN0aWZJY29uXCI+PC9pPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2FjdGlvbnMnLCBkYXRlOiBudWxsLCBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiBmYWxzZSwgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSx0eXBlLCBmdWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uc0h0bWwgPSBgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCIke2Z1bGwuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1jb250ZW50IGRpdk1lbnVcIiBpZD1cImRpdk1lbnUke2Z1bGwuaWR9XCI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5nbG9iYWxBY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWlkPVwiJHtmdWxsLmlkfVwiIGNsYXNzPVwiJHthY3Rpb24uY2xhc3NOYW1lfSBkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj48aSBjbGFzcz1cIiR7YWN0aW9uLmljb259IG1lbnVJY29uXCI+PC9pPiAke2FjdGlvbi5ub219PC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zSHRtbDtcclxuICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2hcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBEZWJ1ZyA6IGFmZmljaGUgbGUgZGF0YS1icy10YXJnZXRcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb3VibmE6XCIsICQodGhpcykuYXR0cihcImRhdGEtYnMtdGFyZ2V0XCIpKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5VcGRhdGVDb25kdWN0ZXVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGNvbmR1Y3RldXJJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9jb25kdWN0ZXVyL2dldENvbmR1Y3RldXIvJyArIGNvbmR1Y3RldXJJZCxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gUmVtcGxpciBsZXMgY2hhbXBzXHJcbiAgICAgICAgICAgICQoJyNpZENvbmR1Y3RldXInKS52YWwoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICQoJyNub21VcGQnKS52YWwoZGF0YS5ub20pO1xyXG4gICAgICAgICAgICAkKCcjcHJlbm9tVXBkJykudmFsKGRhdGEucHJlbm9tKTtcclxuICAgICAgICAgICAgJCgnI2NpblVwZCcpLnZhbChkYXRhLmNpbik7XHJcbiAgICAgICAgICAgICQoJyN0ZWxlcGhvbmVVcGQnKS52YWwoZGF0YS50ZWxlcGhvbmUpO1xyXG4gICAgICAgICAgICAkKCcjcGVybWlzTnVtZXJvVXBkJykudmFsKGRhdGEucGVybWlzTnVtZXJvKTtcclxuICAgICAgICAgICAgJCgnI3Blcm1pc1R5cGVVcGQnKS52YWwoZGF0YS5wZXJtaXNUeXBlKTtcclxuICAgICAgICAgICAgJCgnI2VtYWlsVXBkJykudmFsKGRhdGEuZW1haWwpO1xyXG4gICAgICAgICAgICAkKCcjYWRyZXNzZVVwZCcpLnZhbChkYXRhLmFkcmVzc2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmFkaW8gYm91dG9uXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2FjdGlmdXBkJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI2Rlc2FjdGlmdXBkJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZmZpY2hlciBsZSBtb2RhbFxyXG4gICAgICAgICAgICAkKCcjdXBkYXRlQ29uZHVjdGV1cicpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgY29uZHVjdGV1ci5cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNhdmVVcGRhdGVDb25kdWN0ZXVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICQoJyNpZENvbmR1Y3RldXInKS52YWwoKSxcclxuICAgICAgICBub206ICQoJyNub21VcGQnKS52YWwoKSxcclxuICAgICAgICBwcmVub206ICQoJyNwcmVub21VcGQnKS52YWwoKSxcclxuICAgICAgICBjaW46ICQoJyNjaW5VcGQnKS52YWwoKSxcclxuICAgICAgICBwZXJtaXNOdW1lcm86ICQoJyNwZXJtaXNOdW1lcm9VcGQnKS52YWwoKSxcclxuICAgICAgICBwZXJtaXNUeXBlOiAkKCcjcGVybWlzVHlwZVVwZCcpLnZhbCgpLFxyXG4gICAgICAgIHRlbGVwaG9uZTogJCgnI3RlbGVwaG9uZVVwZCcpLnZhbCgpLFxyXG4gICAgICAgIGVtYWlsOiAkKCcjZW1haWxVcGQnKS52YWwoKSxcclxuICAgICAgICBhZHJlc3NlOiAkKCcjYWRyZXNzZVVwZCcpLnZhbCgpLFxyXG4gICAgICAgIHN0YXR1czogJCgnaW5wdXRbbmFtZT1cInN0YXR1c3VwZFwiXTpjaGVja2VkJykudmFsKClcclxuICAgIH07XHJcblxyXG4gICAgJC5wb3N0KCcvY29uZHVjdGV1ci91cGRhdGVDb25kdWN0ZXVyJywgZGF0YSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzcG9uc2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIG91IHJlY2hhcmdlciBsYSBEYXRhVGFibGVcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIG1vZGlmaWNhdGlvblwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5Ub2dnbGVTdGF0dXNDb25kdWN0ZXVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG5cclxuICAgICQucG9zdCgnL2NvbmR1Y3RldXIvdG9nZ2xlQ29uZHVjdGV1ci8nICsgaWQsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLnN1Y2Nlc3MpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvLyBvdSBtaXNlIMOgIGpvdXIgZHUgRE9NIHNpIHR1IHByw6lmw6hyZXNcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZGUgc3RhdHV0XCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNhdmVBZGRDb25kdWN0ZXVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbmxldCBkYXRhID0ge1xyXG4gICAgbm9tOiAkKCcjbm9tJykudmFsKCksXHJcbiAgICBwcmVub206ICQoJyNwcmVub20nKS52YWwoKSxcclxuICAgIGNpbjogJCgnI2NpbicpLnZhbCgpLFxyXG4gICAgcGVybWlzTnVtZXJvOiAkKCcjcGVybWlzTnVtZXJvJykudmFsKCksXHJcbiAgICBwZXJtaXNUeXBlOiAkKCcjcGVybWlzVHlwZScpLnZhbCgpLFxyXG4gICAgdGVsZXBob25lOiAkKCcjdGVsZXBob25lJykudmFsKCksXHJcbiAgICBlbWFpbDogJCgnI2VtYWlsJykudmFsKCksXHJcbiAgICBhZHJlc3NlOiAkKCcjYWRyZXNzZScpLnZhbCgpLFxyXG4gICAgcGVybWlzRGF0ZU9idGVudGlvbjogJCgnI3Blcm1pc0RhdGVPYnRlbnRpb24nKS52YWwoKSxcclxuICAgIGRhdGVOYWlzc2FuY2U6ICQoJyNkYXRlTmFpc3NhbmNlJykudmFsKCksXHJcbiAgICBzdGF0dXM6ICQoJ2lucHV0W25hbWU9XCJzdGF0dXNcIl06Y2hlY2tlZCcpLnZhbCgpXHJcbn07XHJcblxyXG5cclxuICAgICQucG9zdCgnL2NvbmR1Y3RldXIvYWRkQ29uZHVjdGV1cicsIGRhdGEsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3BvbnNlLnN1Y2Nlc3MpO1xyXG4gICAgICAgICQoJyNhZGRDb25kdWN0ZXVyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy8gb3UgcmVsb2FkIERhdGFUYWJsZSBzaSB0dSB2ZXV4IMOpdml0ZXIgbGUgcmVjaGFyZ2VtZW50IGNvbXBsZXRcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnYWpvdXQgZHUgY29uZHVjdGV1clwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcclxudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xyXG5cclxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxufSA6IFtdLmZvckVhY2g7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcclxuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xyXG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXHJcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9LCAxKTtcclxuICB9KTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxudmFyIG9iamVjdEdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XHJcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XHJcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcclxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XHJcblxyXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSB1bmN1cnJ5VGhpcygkcHJvcGVydHlJc0VudW1lcmFibGUpO1xyXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xyXG5cclxuLy8gaW4gc29tZSBJRSB2ZXJzaW9ucywgYHByb3BlcnR5SXNFbnVtZXJhYmxlYCByZXR1cm5zIGluY29ycmVjdCByZXN1bHQgb24gaW50ZWdlciBrZXlzXHJcbi8vIG9mIGBudWxsYCBwcm90b3R5cGUgb2JqZWN0c1xyXG52YXIgSUVfQlVHID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcclxuICB2YXIgTyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgT1syXSA9IDI7XHJcbiAgcmV0dXJuICFwcm9wZXJ0eUlzRW51bWVyYWJsZShPLCAyKTtcclxufSk7XHJcblxyXG4vLyBgT2JqZWN0LnsgZW50cmllcywgdmFsdWVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cclxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xyXG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoaXQpO1xyXG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xyXG4gICAgdmFyIElFX1dPUktBUk9VTkQgPSBJRV9CVUcgJiYgb2JqZWN0R2V0UHJvdG90eXBlT2YoTykgPT09IG51bGw7XHJcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICB2YXIga2V5O1xyXG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcclxuICAgICAga2V5ID0ga2V5c1tpKytdO1xyXG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IChJRV9XT1JLQVJPVU5EID8ga2V5IGluIE8gOiBwcm9wZXJ0eUlzRW51bWVyYWJsZShPLCBrZXkpKSkge1xyXG4gICAgICAgIHB1c2gocmVzdWx0LCBUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8vIGBPYmplY3QuZW50cmllc2AgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xyXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcclxuICAvLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXHJcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XHJcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcclxudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XHJcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xyXG5cclxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcclxuXHJcbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xyXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XHJcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhcnJheSA9IFtdO1xyXG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xyXG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XHJcbn0pO1xyXG5cclxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XHJcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xyXG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XHJcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XHJcbn07XHJcblxyXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXHJcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XHJcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xyXG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XHJcbiAgICB2YXIgbiA9IDA7XHJcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XHJcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XHJcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcclxuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcclxuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XHJcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XHJcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQS5sZW5ndGggPSBuO1xyXG4gICAgcmV0dXJuIEE7XHJcbiAgfVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcclxuICBmb3JFYWNoOiBmb3JFYWNoXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xyXG5cclxuLy8gYEFycmF5LmlzQXJyYXlgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcclxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSB9LCB7XHJcbiAgaXNBcnJheTogaXNBcnJheVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xyXG5cclxuLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcclxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xyXG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKE8pIHtcclxuICAgIHJldHVybiAkdmFsdWVzKE8pO1xyXG4gIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XHJcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XHJcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XHJcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XHJcblxyXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcclxuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcclxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XHJcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcclxuICB9XHJcbn07XHJcblxyXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XHJcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XHJcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJnbG9iYWxBY3Rpb25zIiwiRGF0YVRhYmxlIiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZSIsImRhdGFTcmMiLCJqc29uIiwid2luZG93IiwiQXJyYXkiLCJpc0FycmF5IiwiYWN0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsImRhdGEiLCJjb2x1bW5zIiwibmFtZSIsInJlbmRlciIsImRhdGUiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiZnVsbCIsImFjdGlvbnNIdG1sIiwiY29uY2F0IiwiaWQiLCJmb3JFYWNoIiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm5vbSIsImxhbmd1YWdlIiwiZGF0YXRhYmxlc0ZyZW5jaCIsIm9uIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJjb25kdWN0ZXVySWQiLCJtZXRob2QiLCJzdWNjZXNzIiwidmFsIiwicHJlbm9tIiwiY2luIiwidGVsZXBob25lIiwicGVybWlzTnVtZXJvIiwicGVybWlzVHlwZSIsImVtYWlsIiwiYWRyZXNzZSIsImFjdGl2ZSIsInByb3AiLCJtb2RhbCIsImVycm9yIiwieGhyIiwidG9hc3RyIiwicmVzcG9uc2VUZXh0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdHVzIiwicG9zdCIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicGVybWlzRGF0ZU9idGVudGlvbiIsImRhdGVOYWlzc2FuY2UiXSwic291cmNlUm9vdCI6IiJ9