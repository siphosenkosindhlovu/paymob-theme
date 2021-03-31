/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
    accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
    accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
    accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(x * dpr) / dpr) || 0,
    y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

      if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(_min, tetherMin) : _min, _offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/*! exports provided: max, min, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/*! exports provided: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offcanvas", function() { return Offcanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const toType = obj => {
  if (obj === null || obj === undefined) {
    return `${obj}`;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = '#' + hrefAttr.split('#')[1];
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

const getSelectorFromElement = element => {
  const selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const getElementFromSelector = element => {
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};

const isElement = obj => (obj[0] || obj).nodeType;

const emulateTransitionEnd = (element, duration) => {
  let called = false;
  const durationPadding = 5;
  const emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

const typeCheckConfig = (componentName, config, configTypes) => {
  Object.keys(configTypes).forEach(property => {
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(`${componentName.toUpperCase()}: ` + `Option "${property}" provided type "${valueType}" ` + `but expected type "${expectedTypes}".`);
    }
  });
};

const isVisible = element => {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    const elementStyle = getComputedStyle(element);
    const parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

const noop = () => function () {};

const reflow = element => element.offsetHeight;

const getjQuery = () => {
  const {
    jQuery
  } = window;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

const isRTL = () => document.documentElement.dir === 'rtl';

const defineJQueryPlugin = (name, plugin) => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const elementMap = new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage

let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  const uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (let i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            // eslint-disable-next-line unicorn/consistent-destructuring
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler, delegationSelector = null) {
  const uidEventList = Object.keys(events);

  for (let i = 0, len = uidEventList.length; i < len; i++) {
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  const delegation = typeof handler === 'string';
  const originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  let typeEvent = originalTypeEvent.replace(stripNameRegex, '');
  const custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  const isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
  const events = getEvent(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(handlerKey => {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

const EventHandler = {
  on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },

  one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },

  off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(elementEvent => {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(keyHandlers => {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = getjQuery();
    const typeEvent = event.replace(stripNameRegex, '');
    const inNamespace = event !== typeEvent;
    const isNative = nativeEvents.has(typeEvent);
    let jQueryEvent;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(key => {
        Object.defineProperty(evt, key, {
          get() {
            return args[key];
          }

        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION = '5.0.0-beta3';

class BaseComponent {
  constructor(element) {
    element = typeof element === 'string' ? document.querySelector(element) : element;

    if (!element) {
      return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    this._element = null;
  }
  /** Static */


  static getInstance(element) {
    return Data.get(element, this.DATA_KEY);
  }

  static get VERSION() {
    return VERSION;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const NAME$b = 'alert';
const DATA_KEY$b = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$b}`;
const DATA_API_KEY$8 = '.data-api';
const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
const CLASS_NAME_ALERT = 'alert';
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Alert extends BaseComponent {
  // Getters
  static get DATA_KEY() {
    return DATA_KEY$b;
  } // Public


  close(element) {
    const rootElement = element ? this._getRootElement(element) : this._element;

    const customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent === null || customEvent.defaultPrevented) {
      return;
    }

    this._removeElement(rootElement);
  } // Private


  _getRootElement(element) {
    return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
  }

  _triggerCloseEvent(element) {
    return EventHandler.trigger(element, EVENT_CLOSE);
  }

  _removeElement(element) {
    element.classList.remove(CLASS_NAME_SHOW$8);

    if (!element.classList.contains(CLASS_NAME_FADE$5)) {
      this._destroyElement(element);

      return;
    }

    const transitionDuration = getTransitionDurationFromElement(element);
    EventHandler.one(element, 'transitionend', () => this._destroyElement(element));
    emulateTransitionEnd(element, transitionDuration);
  }

  _destroyElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    EventHandler.trigger(element, EVENT_CLOSED);
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$b);

      if (!data) {
        data = new Alert(this);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  }

  static handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$b, Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$a = 'button';
const DATA_KEY$a = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$a}`;
const DATA_API_KEY$7 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Button extends BaseComponent {
  // Getters
  static get DATA_KEY() {
    return DATA_KEY$a;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$a);

      if (!data) {
        data = new Button(this);
      }

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  let data = Data.get(button, DATA_KEY$a);

  if (!data) {
    data = new Button(button);
  }

  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$a, Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  },

  offset(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NODE_TEXT = 3;
const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$9 = 'carousel';
const DATA_KEY$9 = 'bs.carousel';
const EVENT_KEY$9 = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const SWIPE_THRESHOLD = 40;
const Default$8 = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
const DefaultType$8 = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
const EVENT_SLID = `slid${EVENT_KEY$9}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE$1 = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$8;
  }

  static get DATA_KEY() {
    return DATA_KEY$9;
  } // Public


  next() {
    if (!this._isSliding) {
      this._slide(ORDER_NEXT);
    }
  }

  nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    if (!this._isSliding) {
      this._slide(ORDER_PREV);
    }
  }

  pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
      triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  }

  cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  }

  to(index) {
    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, this._items[index]);
  }

  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
    this._items = null;
    this._config = null;
    this._interval = null;
    this._isPaused = null;
    this._isSliding = null;
    this._activeElement = null;
    this._indicatorsElement = null;
    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...Default$8,
      ...config
    };
    typeCheckConfig(NAME$9, config, DefaultType$8);
    return config;
  }

  _handleSwipe() {
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
      return;
    }

    this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
      EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    const start = event => {
      if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
        this.touchStartX = event.clientX;
      } else if (!this._pointerEvent) {
        this.touchStartX = event.touches[0].clientX;
      }
    };

    const move = event => {
      // ensure swiping with one touch and not pinching
      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
    };

    const end = event => {
      if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
        this.touchDeltaX = event.clientX - this.touchStartX;
      }

      this._handleSwipe();

      if (this._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
      EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
    });

    if (this._pointerEvent) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
    }
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    if (event.key === ARROW_LEFT_KEY) {
      event.preventDefault();

      this._slide(DIRECTION_LEFT);
    } else if (event.key === ARROW_RIGHT_KEY) {
      event.preventDefault();

      this._slide(DIRECTION_RIGHT);
    }
  }

  _getItemIndex(element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  }

  _getItemByOrder(order, activeElement) {
    const isNext = order === ORDER_NEXT;
    const isPrev = order === ORDER_PREV;

    const activeIndex = this._getItemIndex(activeElement);

    const lastItemIndex = this._items.length - 1;
    const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;

    if (isGoingToWrap && !this._config.wrap) {
      return activeElement;
    }

    const delta = isPrev ? -1 : 1;
    const itemIndex = (activeIndex + delta) % this._items.length;
    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
  }

  _triggerSlideEvent(relatedTarget, eventDirectionName) {
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
      relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  }

  _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

      for (let i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
          indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
        }
      }
    }
  }

  _updateInterval() {
    const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }

  _slide(directionOrOrder, element) {
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === ORDER_NEXT;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const transitionDuration = getTransitionDurationFromElement(activeElement);
      EventHandler.one(activeElement, 'transitionend', () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(() => {
          EventHandler.trigger(this._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        }, 0);
      });
      emulateTransitionEnd(activeElement, transitionDuration);
    } else {
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      EventHandler.trigger(this._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    }

    if (isCycling) {
      this.cycle();
    }
  }

  _directionToOrder(direction) {
    if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
      return direction;
    }

    if (isRTL()) {
      return direction === DIRECTION_RIGHT ? ORDER_PREV : ORDER_NEXT;
    }

    return direction === DIRECTION_RIGHT ? ORDER_NEXT : ORDER_PREV;
  }

  _orderToDirection(order) {
    if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
      return order;
    }

    if (isRTL()) {
      return order === ORDER_NEXT ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return order === ORDER_NEXT ? DIRECTION_RIGHT : DIRECTION_LEFT;
  } // Static


  static carouselInterface(element, config) {
    let data = Data.get(element, DATA_KEY$9);
    let _config = { ...Default$8,
      ...Manipulator.getDataAttributes(element)
    };

    if (typeof config === 'object') {
      _config = { ..._config,
        ...config
      };
    }

    const action = typeof config === 'string' ? config : _config.slide;

    if (!data) {
      data = new Carousel(element, _config);
    }

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError(`No method named "${action}"`);
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Carousel.carouselInterface(this, config);
    });
  }

  static dataApiClickHandler(event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    const config = { ...Manipulator.getDataAttributes(target),
      ...Manipulator.getDataAttributes(this)
    };
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
      Data.get(target, DATA_KEY$9).to(slideIndex);
    }

    event.preventDefault();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (let i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$9));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$9, Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$8 = 'collapse';
const DATA_KEY$8 = 'bs.collapse';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const Default$7 = {
  toggle: true,
  parent: ''
};
const DefaultType$7 = {
  toggle: 'boolean',
  parent: '(string|element)'
};
const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.show, .collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) {
      const elem = toggleList[i];
      const selector = getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return Default$7;
  }

  static get DATA_KEY() {
    return DATA_KEY$8;
  } // Public


  toggle() {
    if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$7)) {
      return;
    }

    let actives;
    let activesData;

    if (this._parent) {
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(elem => {
        if (typeof this._config.parent === 'string') {
          return elem.getAttribute('data-bs-parent') === this._config.parent;
        }

        return elem.classList.contains(CLASS_NAME_COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    const container = SelectorEngine.findOne(this._selector);

    if (actives) {
      const tempActiveData = actives.find(elem => container !== elem);
      activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$8) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    if (actives) {
      actives.forEach(elemActive => {
        if (container !== elemActive) {
          Collapse.collapseInterface(elemActive, 'hide');
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$8, null);
        }
      });
    }

    const dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      this._triggerArray.forEach(element => {
        element.classList.remove(CLASS_NAME_COLLAPSED);
        element.setAttribute('aria-expanded', true);
      });
    }

    this.setTransitioning(true);

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      this.setTransitioning(false);
      EventHandler.trigger(this._element, EVENT_SHOWN$5);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    const transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, 'transitionend', complete);
    emulateTransitionEnd(this._element, transitionDuration);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$7)) {
      return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

    const triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const elem = getElementFromSelector(trigger);

        if (elem && !elem.classList.contains(CLASS_NAME_SHOW$7)) {
          trigger.classList.add(CLASS_NAME_COLLAPSED);
          trigger.setAttribute('aria-expanded', false);
        }
      }
    }

    this.setTransitioning(true);

    const complete = () => {
      this.setTransitioning(false);

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(this._element, EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';
    const transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, 'transitionend', complete);
    emulateTransitionEnd(this._element, transitionDuration);
  }

  setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  }

  dispose() {
    super.dispose();
    this._config = null;
    this._parent = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  } // Private


  _getConfig(config) {
    config = { ...Default$7,
      ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    typeCheckConfig(NAME$8, config, DefaultType$7);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
  }

  _getParent() {
    let {
      parent
    } = this._config;

    if (isElement(parent)) {
      // it's a jQuery object
      if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
        parent = parent[0];
      }
    } else {
      parent = SelectorEngine.findOne(parent);
    }

    const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
    SelectorEngine.find(selector, parent).forEach(element => {
      const selected = getElementFromSelector(element);

      this._addAriaAndCollapsedClass(selected, [element]);
    });
    return parent;
  }

  _addAriaAndCollapsedClass(element, triggerArray) {
    if (!element || !triggerArray.length) {
      return;
    }

    const isOpen = element.classList.contains(CLASS_NAME_SHOW$7);
    triggerArray.forEach(elem => {
      if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static


  static collapseInterface(element, config) {
    let data = Data.get(element, DATA_KEY$8);
    const _config = { ...Default$7,
      ...Manipulator.getDataAttributes(element),
      ...(typeof config === 'object' && config ? config : {})
    };

    if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    if (!data) {
      data = new Collapse(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Collapse.collapseInterface(this, config);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const triggerData = Manipulator.getDataAttributes(this);
  const selector = getSelectorFromElement(this);
  const selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(element => {
    const data = Data.get(element, DATA_KEY$8);
    let config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse.collapseInterface(element, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$8, Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$7 = 'dropdown';
const DATA_KEY$7 = 'bs.dropdown';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const SPACE_KEY = 'Space';
const TAB_KEY = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
const EVENT_CLICK = `click${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_DISABLED = 'disabled';
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_NAVBAR = 'navbar';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const Default$6 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null
};
const DefaultType$6 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$6;
  }

  static get DefaultType() {
    return DefaultType$6;
  }

  static get DATA_KEY() {
    return DATA_KEY$7;
  } // Public


  toggle() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    const isActive = this._element.classList.contains(CLASS_NAME_SHOW$6);

    Dropdown.clearMenus();

    if (isActive) {
      return;
    }

    this.show();
  }

  show() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW$6)) {
      return;
    }

    const parent = Dropdown.getParentFromElement(this._element);
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    } // Totally disable Popper for Dropdowns in Navbar


    if (this._inNavbar) {
      Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
      if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = this._config.reference; // Check if it's jQuery element

        if (typeof this._config.reference.jquery !== 'undefined') {
          referenceElement = this._config.reference[0];
        }
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
      this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
      [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', null, noop()));
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.toggle(CLASS_NAME_SHOW$6);

    this._element.classList.toggle(CLASS_NAME_SHOW$6);

    EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
  }

  hide() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW$6)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.toggle(CLASS_NAME_SHOW$6);

    this._element.classList.toggle(CLASS_NAME_SHOW$6);

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
  }

  dispose() {
    EventHandler.off(this._element, EVENT_KEY$7);
    this._menu = null;

    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _addEventListeners() {
    EventHandler.on(this._element, EVENT_CLICK, event => {
      event.preventDefault();
      this.toggle();
    });
  }

  _getConfig(config) {
    config = { ...this.constructor.Default,
      ...Manipulator.getDataAttributes(this._element),
      ...config
    };
    typeCheckConfig(NAME$7, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME$7.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _getMenuElement() {
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
  }

  _getPlacement() {
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  } // Static


  static dropdownInterface(element, config) {
    let data = Data.get(element, DATA_KEY$7);

    const _config = typeof config === 'object' ? config : null;

    if (!data) {
      data = new Dropdown(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Dropdown.dropdownInterface(this, config);
    });
  }

  static clearMenus(event) {
    if (event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
        return;
      }

      if (/input|select|textarea|form/i.test(event.target.tagName)) {
        return;
      }
    }

    const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) {
      const context = Data.get(toggles[i], DATA_KEY$7);
      const relatedTarget = {
        relatedTarget: toggles[i]
      };

      if (event && event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      if (!context) {
        continue;
      }

      const dropdownMenu = context._menu;

      if (!toggles[i].classList.contains(CLASS_NAME_SHOW$6)) {
        continue;
      }

      if (event) {
        // Don't close the menu if the clicked element or one of its parents is the dropdown button
        if ([context._element].some(element => event.composedPath().includes(element))) {
          continue;
        } // Tab navigation through the dropdown menu shouldn't close the menu


        if (event.type === 'keyup' && event.key === TAB_KEY && dropdownMenu.contains(event.target)) {
          continue;
        }
      }

      const hideEvent = EventHandler.trigger(toggles[i], EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        continue;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', null, noop()));
      }

      toggles[i].setAttribute('aria-expanded', 'false');

      if (context._popper) {
        context._popper.destroy();
      }

      dropdownMenu.classList.remove(CLASS_NAME_SHOW$6);
      toggles[i].classList.remove(CLASS_NAME_SHOW$6);
      Manipulator.removeDataAttribute(dropdownMenu, 'popper');
      EventHandler.trigger(toggles[i], EVENT_HIDDEN$4, relatedTarget);
    }
  }

  static getParentFromElement(element) {
    return getElementFromSelector(element) || element.parentNode;
  }

  static dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    const parent = Dropdown.getParentFromElement(this);
    const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

    if (event.key === ESCAPE_KEY$2) {
      const button = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      button.focus();
      Dropdown.clearMenus();
      return;
    }

    if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
      const button = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      button.click();
      return;
    }

    if (!isActive || event.key === SPACE_KEY) {
      Dropdown.clearMenus();
      return;
    }

    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

    if (!items.length) {
      return;
    }

    let index = items.indexOf(event.target); // Up

    if (event.key === ARROW_UP_KEY && index > 0) {
      index--;
    } // Down


    if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
      index++;
    } // index is -1 if the first keydown is an ArrowUp


    index = index === -1 ? 0 : index;
    items[index].focus();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.dropdownInterface(this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$7, Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$6 = 'modal';
const DATA_KEY$6 = 'bs.modal';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
const DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$6}`;
const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
const CLASS_NAME_BACKDROP = 'modal-backdrop';
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
const SELECTOR_FIXED_CONTENT$1 = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT$1 = '.sticky-top';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = null;
    this._isShown = false;
    this._isBodyOverflowing = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollbarWidth = 0;
  } // Getters


  static get Default() {
    return Default$5;
  }

  static get DATA_KEY() {
    return DATA_KEY$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });

    if (this._isShown || showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    this._checkScrollbar();

    this._setScrollbar();

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));
    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
      EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
        if (event.target === this._element) {
          this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(() => this._showElement(relatedTarget));
  }

  hide(event) {
    if (event) {
      event.preventDefault();
    }

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.off(document, EVENT_FOCUSIN$1);

    this._element.classList.remove(CLASS_NAME_SHOW$5);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    if (isAnimated) {
      const transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', event => this._hideModal(event));
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      this._hideModal();
    }
  }

  dispose() {
    [window, this._element, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));
    super.dispose();
    /**
     * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `EVENT_CLICK_DATA_API` event that should remain
     */

    EventHandler.off(document, EVENT_FOCUSIN$1);
    this._config = null;
    this._dialog = null;
    this._backdrop = null;
    this._isShown = null;
    this._isBodyOverflowing = null;
    this._ignoreBackdropClick = null;
    this._isTransitioning = null;
    this._scrollbarWidth = null;
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _getConfig(config) {
    config = { ...Default$5,
      ...config
    };
    typeCheckConfig(NAME$6, config, DefaultType$5);
    return config;
  }

  _showElement(relatedTarget) {
    const isAnimated = this._isAnimated();

    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$5);

    if (this._config.focus) {
      this._enforceFocus();
    }

    const transitionComplete = () => {
      if (this._config.focus) {
        this._element.focus();
      }

      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    if (isAnimated) {
      const transitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.one(this._dialog, 'transitionend', transitionComplete);
      emulateTransitionEnd(this._dialog, transitionDuration);
    } else {
      transitionComplete();
    }
  }

  _enforceFocus() {
    EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$1, event => {
      if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
        this._element.focus();
      }
    });
  }

  _setEscapeEvent() {
    if (this._isShown) {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
          event.preventDefault();
          this.hide();
        } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
          this._triggerBackdropTransition();
        }
      });
    } else {
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
    }
  }

  _setResizeEvent() {
    if (this._isShown) {
      EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
    } else {
      EventHandler.off(window, EVENT_RESIZE);
    }
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._showBackdrop(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._resetScrollbar();

      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    });
  }

  _removeBackdrop() {
    this._backdrop.parentNode.removeChild(this._backdrop);

    this._backdrop = null;
  }

  _showBackdrop(callback) {
    const isAnimated = this._isAnimated();

    if (this._isShown && this._config.backdrop) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = CLASS_NAME_BACKDROP;

      if (isAnimated) {
        this._backdrop.classList.add(CLASS_NAME_FADE$4);
      }

      document.body.appendChild(this._backdrop);
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        } else {
          this.hide();
        }
      });

      if (isAnimated) {
        reflow(this._backdrop);
      }

      this._backdrop.classList.add(CLASS_NAME_SHOW$5);

      if (!isAnimated) {
        callback();
        return;
      }

      const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
      EventHandler.one(this._backdrop, 'transitionend', callback);
      emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
    } else if (!this._isShown && this._backdrop) {
      this._backdrop.classList.remove(CLASS_NAME_SHOW$5);

      const callbackRemove = () => {
        this._removeBackdrop();

        callback();
      };

      if (isAnimated) {
        const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
        EventHandler.one(this._backdrop, 'transitionend', callbackRemove);
        emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
      } else {
        callbackRemove();
      }
    } else {
      callback();
    }
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$4);
  }

  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);

    const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
    EventHandler.off(this._element, 'transitionend');
    EventHandler.one(this._element, 'transitionend', () => {
      this._element.classList.remove(CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        EventHandler.one(this._element, 'transitionend', () => {
          this._element.style.overflowY = '';
        });
        emulateTransitionEnd(this._element, modalTransitionDuration);
      }
    });
    emulateTransitionEnd(this._element, modalTransitionDuration);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!this._isBodyOverflowing && isModalOverflowing && !isRTL() || this._isBodyOverflowing && !isModalOverflowing && isRTL()) {
      this._element.style.paddingLeft = `${this._scrollbarWidth}px`;
    }

    if (this._isBodyOverflowing && !isModalOverflowing && !isRTL() || !this._isBodyOverflowing && isModalOverflowing && isRTL()) {
      this._element.style.paddingRight = `${this._scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  }

  _checkScrollbar() {
    const rect = document.body.getBoundingClientRect();
    this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    this._scrollbarWidth = this._getScrollbarWidth();
  }

  _setScrollbar() {
    if (this._isBodyOverflowing) {
      this._setElementAttributes(SELECTOR_FIXED_CONTENT$1, 'paddingRight', calculatedValue => calculatedValue + this._scrollbarWidth);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT$1, 'marginRight', calculatedValue => calculatedValue - this._scrollbarWidth);

      this._setElementAttributes('body', 'paddingRight', calculatedValue => calculatedValue + this._scrollbarWidth);
    }

    document.body.classList.add(CLASS_NAME_OPEN);
  }

  _setElementAttributes(selector, styleProp, callback) {
    SelectorEngine.find(selector).forEach(element => {
      if (element !== document.body && window.innerWidth > element.clientWidth + this._scrollbarWidth) {
        return;
      }

      const actualValue = element.style[styleProp];
      const calculatedValue = window.getComputedStyle(element)[styleProp];
      Manipulator.setDataAttribute(element, styleProp, actualValue);
      element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
    });
  }

  _resetScrollbar() {
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT$1, 'paddingRight');

    this._resetElementAttributes(SELECTOR_STICKY_CONTENT$1, 'marginRight');

    this._resetElementAttributes('body', 'paddingRight');
  }

  _resetElementAttributes(selector, styleProp) {
    SelectorEngine.find(selector).forEach(element => {
      const value = Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined' && element === document.body) {
        element.style[styleProp] = '';
      } else {
        Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    });
  }

  _getScrollbarWidth() {
    // thx d.walsh
    const scrollDiv = document.createElement('div');
    scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$6);
      const _config = { ...Default$5,
        ...Manipulator.getDataAttributes(this),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (!data) {
        data = new Modal(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = getElementFromSelector(this);

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$3, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  let data = Data.get(target, DATA_KEY$6);

  if (!data) {
    const config = { ...Manipulator.getDataAttributes(target),
      ...Manipulator.getDataAttributes(this)
    };
    data = new Modal(target, config);
  }

  data.toggle(this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$6, Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed';
const SELECTOR_STICKY_CONTENT = '.sticky-top';

const getWidth = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
};

const hide = (width = getWidth()) => {
  document.body.style.overflow = 'hidden';

  _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

  _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);

  _setElementAttributes('body', 'paddingRight', calculatedValue => calculatedValue + width);
};

const _setElementAttributes = (selector, styleProp, callback) => {
  const scrollbarWidth = getWidth();
  SelectorEngine.find(selector).forEach(element => {
    if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
      return;
    }

    const actualValue = element.style[styleProp];
    const calculatedValue = window.getComputedStyle(element)[styleProp];
    Manipulator.setDataAttribute(element, styleProp, actualValue);
    element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
  });
};

const reset = () => {
  document.body.style.overflow = 'auto';

  _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

  _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');

  _resetElementAttributes('body', 'paddingRight');
};

const _resetElementAttributes = (selector, styleProp) => {
  SelectorEngine.find(selector).forEach(element => {
    const value = Manipulator.getDataAttribute(element, styleProp);

    if (typeof value === 'undefined' && element === document.body) {
      element.style.removeProperty(styleProp);
    } else {
      Manipulator.removeDataAttribute(element, styleProp);
      element.style[styleProp] = value;
    }
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const NAME$5 = 'offcanvas';
const DATA_KEY$5 = 'bs.offcanvas';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const DATA_API_KEY$2 = '.data-api';
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
const ESCAPE_KEY = 'Escape';
const Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
const CLASS_NAME_BACKDROP_BODY = 'offcanvas-backdrop';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_TOGGLING = 'offcanvas-toggling';
const OPEN_SELECTOR = '.offcanvas.show';
const ACTIVE_SELECTOR = `${OPEN_SELECTOR}, .${CLASS_NAME_TOGGLING}`;
const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY$5}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$4;
  }

  static get DATA_KEY() {
    return DATA_KEY$5;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    if (this._config.backdrop) {
      document.body.classList.add(CLASS_NAME_BACKDROP_BODY);
    }

    if (!this._config.scroll) {
      hide();
    }

    this._element.classList.add(CLASS_NAME_TOGGLING);

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOW$4);

    const completeCallBack = () => {
      this._element.classList.remove(CLASS_NAME_TOGGLING);

      EventHandler.trigger(this._element, EVENT_SHOWN$2, {
        relatedTarget
      });

      this._enforceFocusOnElement(this._element);
    };

    setTimeout(completeCallBack, getTransitionDurationFromElement(this._element));
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._element.classList.add(CLASS_NAME_TOGGLING);

    EventHandler.off(document, EVENT_FOCUSIN);

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    const completeCallback = () => {
      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._element.style.visibility = 'hidden';

      if (this._config.backdrop) {
        document.body.classList.remove(CLASS_NAME_BACKDROP_BODY);
      }

      if (!this._config.scroll) {
        reset();
      }

      EventHandler.trigger(this._element, EVENT_HIDDEN$2);

      this._element.classList.remove(CLASS_NAME_TOGGLING);
    };

    setTimeout(completeCallback, getTransitionDurationFromElement(this._element));
  } // Private


  _getConfig(config) {
    config = { ...Default$4,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    typeCheckConfig(NAME$5, config, DefaultType$4);
    return config;
  }

  _enforceFocusOnElement(element) {
    EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN, event => {
      if (document !== event.target && element !== event.target && !element.contains(event.target)) {
        element.focus();
      }
    });
    element.focus();
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, () => this.hide());
    EventHandler.on(document, 'keydown', event => {
      if (this._config.keyboard && event.key === ESCAPE_KEY) {
        this.hide();
      }
    });
    EventHandler.on(document, EVENT_CLICK_DATA_API$1, event => {
      const target = SelectorEngine.findOne(getSelectorFromElement(event.target));

      if (!this._element.contains(event.target) && target !== this._element) {
        this.hide();
      }
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Data.get(this, DATA_KEY$5) || new Offcanvas(this, typeof config === 'object' ? config : {});

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$2, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const allReadyOpen = SelectorEngine.findOne(ACTIVE_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    return;
  }

  const data = Data.get(target, DATA_KEY$5) || new Offcanvas(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  SelectorEngine.find(OPEN_SELECTOR).forEach(el => (Data.get(el, DATA_KEY$5) || new Offcanvas(el)).show());
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(NAME$5, Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const allowedAttribute = (attr, allowedAttributeList) => {
  const attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) {
    if (uriAttrs.has(attrName)) {
      return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
    }

    return true;
  }

  const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

  for (let i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attrName)) {
      return true;
    }
  }

  return false;
};

const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const allowlistKeys = Object.keys(allowList);
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (let i = 0, len = elements.length; i < len; i++) {
    const el = elements[i];
    const elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) {
      el.parentNode.removeChild(el);
      continue;
    }

    const attributeList = [].concat(...el.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(attr => {
      if (!allowedAttribute(attr, allowedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const NAME$4 = 'tooltip';
const DATA_KEY$4 = 'bs.tooltip';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const CLASS_PREFIX$1 = 'bs-tooltip';
const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, 'g');
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
const AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
const Event$2 = {
  HIDE: `hide${EVENT_KEY$4}`,
  HIDDEN: `hidden${EVENT_KEY$4}`,
  SHOW: `show${EVENT_KEY$4}`,
  SHOWN: `shown${EVENT_KEY$4}`,
  INSERTED: `inserted${EVENT_KEY$4}`,
  CLICK: `click${EVENT_KEY$4}`,
  FOCUSIN: `focusin${EVENT_KEY$4}`,
  FOCUSOUT: `focusout${EVENT_KEY$4}`,
  MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
  MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
};
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$3 = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this.config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  } // Getters


  static get Default() {
    return Default$3;
  }

  static get NAME() {
    return NAME$4;
  }

  static get DATA_KEY() {
    return DATA_KEY$4;
  }

  static get Event() {
    return Event$2;
  }

  static get EVENT_KEY() {
    return EVENT_KEY$4;
  }

  static get DefaultType() {
    return DefaultType$3;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      const context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  }

  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

    if (this.tip && this.tip.parentNode) {
      this.tip.parentNode.removeChild(this.tip);
    }

    this._isEnabled = null;
    this._timeout = null;
    this._hoverState = null;
    this._activeTrigger = null;

    if (this._popper) {
      this._popper.destroy();
    }

    this._popper = null;
    this.config = null;
    this.tip = null;
    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }

    const tip = this.getTipElement();
    const tipId = getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    this.setContent();

    if (this.config.animation) {
      tip.classList.add(CLASS_NAME_FADE$3);
    }

    const placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const container = this._getContainer();

    Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.appendChild(tip);
      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add(CLASS_NAME_SHOW$3);
    const customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

    if (customClass) {
      tip.classList.add(...customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => {
        EventHandler.on(element, 'mouseover', noop());
      });
    }

    const complete = () => {
      const prevHoverState = this._hoverState;
      this._hoverState = null;
      EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

      if (prevHoverState === HOVER_STATE_OUT) {
        this._leave(null, this);
      }
    };

    if (this.tip.classList.contains(CLASS_NAME_FADE$3)) {
      const transitionDuration = getTransitionDurationFromElement(this.tip);
      EventHandler.one(this.tip, 'transitionend', complete);
      emulateTransitionEnd(this.tip, transitionDuration);
    } else {
      complete();
    }
  }

  hide() {
    if (!this._popper) {
      return;
    }

    const tip = this.getTipElement();

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
        tip.parentNode.removeChild(tip);
      }

      this._cleanTipClass();

      this._element.removeAttribute('aria-describedby');

      EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;

    if (this.tip.classList.contains(CLASS_NAME_FADE$3)) {
      const transitionDuration = getTransitionDurationFromElement(tip);
      EventHandler.one(tip, 'transitionend', complete);
      emulateTransitionEnd(tip, transitionDuration);
    } else {
      complete();
    }

    this._hoverState = '';
  }

  update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected


  isWithContent() {
    return Boolean(this.getTitle());
  }

  getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    const element = document.createElement('div');
    element.innerHTML = this.config.template;
    this.tip = element.children[0];
    return this.tip;
  }

  setContent() {
    const tip = this.getTipElement();
    this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
    tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
  }

  setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if (typeof content === 'object' && isElement(content)) {
      if (content.jquery) {
        content = content[0];
      } // content is a DOM node or a jQuery


      if (this.config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.appendChild(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this.config.html) {
      if (this.config.sanitize) {
        content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  }

  getTitle() {
    let title = this._element.getAttribute('data-bs-original-title');

    if (!title) {
      title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
    }

    return title;
  }

  updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private


  _initializeOnDelegatedTarget(event, context) {
    const dataKey = this.constructor.DATA_KEY;
    context = context || Data.get(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.set(event.delegateTarget, dataKey, context);
    }

    return context;
  }

  _getOffset() {
    const {
      offset
    } = this.config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          altBoundary: true,
          fallbackPlacements: this.config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this.config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
      }],
      onFirstUpdate: data => {
        if (data.options.placement !== data.placement) {
          this._handlePopperPlacementChange(data);
        }
      }
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this.config.popperConfig === 'function' ? this.config.popperConfig(defaultBsPopperConfig) : this.config.popperConfig)
    };
  }

  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
  }

  _getContainer() {
    if (this.config.container === false) {
      return document.body;
    }

    if (isElement(this.config.container)) {
      return this.config.container;
    }

    return SelectorEngine.findOne(this.config.container);
  }

  _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
  }

  _setListeners() {
    const triggers = this.config.trigger.split(' ');
    triggers.forEach(trigger => {
      if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.Event.CLICK, this.config.selector, event => this.toggle(event));
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        EventHandler.on(this._element, eventIn, this.config.selector, event => this._enter(event));
        EventHandler.on(this._element, eventOut, this.config.selector, event => this._leave(event));
      }
    });

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

    if (this.config.selector) {
      this.config = { ...this.config,
        trigger: 'manual',
        selector: ''
      };
    } else {
      this._fixTitle();
    }
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  }

  _enter(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
      context._hoverState = HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context.config.delay || !context.config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
      }
    }, context.config.delay.show);
  }

  _leave(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context.config.delay || !context.config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
      }
    }, context.config.delay.hide);
  }

  _isWithActiveTrigger() {
    for (const trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  }

  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => {
      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });

    if (config && typeof config.container === 'object' && config.container.jquery) {
      config.container = config.container[0];
    }

    config = { ...this.constructor.Default,
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    if (this.config) {
      for (const key in this.config) {
        if (this.constructor.Default[key] !== this.config[key]) {
          config[key] = this.config[key];
        }
      }
    }

    return config;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  }

  _handlePopperPlacementChange(popperData) {
    const {
      state
    } = popperData;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$4);

      const _config = typeof config === 'object' && config;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Tooltip(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


defineJQueryPlugin(NAME$4, Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$3 = 'popover';
const DATA_KEY$3 = 'bs.popover';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const CLASS_PREFIX = 'bs-popover';
const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
const Default$2 = { ...Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
};
const DefaultType$2 = { ...Tooltip.DefaultType,
  content: '(string|element|function)'
};
const Event$1 = {
  HIDE: `hide${EVENT_KEY$3}`,
  HIDDEN: `hidden${EVENT_KEY$3}`,
  SHOW: `show${EVENT_KEY$3}`,
  SHOWN: `shown${EVENT_KEY$3}`,
  INSERTED: `inserted${EVENT_KEY$3}`,
  CLICK: `click${EVENT_KEY$3}`,
  FOCUSIN: `focusin${EVENT_KEY$3}`,
  FOCUSOUT: `focusout${EVENT_KEY$3}`,
  MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
  MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
};
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }

  static get NAME() {
    return NAME$3;
  }

  static get DATA_KEY() {
    return DATA_KEY$3;
  }

  static get Event() {
    return Event$1;
  }

  static get EVENT_KEY() {
    return EVENT_KEY$3;
  }

  static get DefaultType() {
    return DefaultType$2;
  } // Overrides


  isWithContent() {
    return this.getTitle() || this._getContent();
  }

  setContent() {
    const tip = this.getTipElement(); // we use append for html objects to maintain js events

    this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

    let content = this._getContent();

    if (typeof content === 'function') {
      content = content.call(this._element);
    }

    this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
  } // Private


  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
  }

  _getContent() {
    return this._element.getAttribute('data-bs-content') || this.config.content;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$3);

      const _config = typeof config === 'object' ? config : null;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Popover(this, _config);
        Data.set(this, DATA_KEY$3, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


defineJQueryPlugin(NAME$3, Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY$1 = '.data-api';
const Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
const DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_DROPDOWN$1 = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const METHOD_OFFSET = 'offset';
const METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
  } // Getters


  static get Default() {
    return Default$1;
  }

  static get DATA_KEY() {
    return DATA_KEY$2;
  } // Public


  refresh() {
    const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = SelectorEngine.find(this._selector);
    targets.map(element => {
      const targetSelector = getSelectorFromElement(element);
      const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
      this._offsets.push(item[0]);

      this._targets.push(item[1]);
    });
  }

  dispose() {
    super.dispose();
    EventHandler.off(this._scrollElement, EVENT_KEY$2);
    this._scrollElement = null;
    this._config = null;
    this._selector = null;
    this._offsets = null;
    this._targets = null;
    this._activeTarget = null;
    this._scrollHeight = null;
  } // Private


  _getConfig(config) {
    config = { ...Default$1,
      ...(typeof config === 'object' && config ? config : {})
    };

    if (typeof config.target !== 'string' && isElement(config.target)) {
      let {
        id
      } = config.target;

      if (!id) {
        id = getUID(NAME$2);
        config.target.id = id;
      }

      config.target = `#${id}`;
    }

    typeCheckConfig(NAME$2, config, DefaultType$1);
    return config;
  }

  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }

  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }

  _process() {
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      const target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (let i = this._offsets.length; i--;) {
      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  }

  _activate(target) {
    this._activeTarget = target;

    this._clear();

    const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);

    const link = SelectorEngine.findOne(queries.join(','));

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      link.classList.add(CLASS_NAME_ACTIVE$1);
    } else {
      // Set triggered link as active
      link.classList.add(CLASS_NAME_ACTIVE$1);
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
        });
      });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _clear() {
    SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$2);

      const _config = typeof config === 'object' && config;

      if (!data) {
        data = new ScrollSpy(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy, Manipulator.getDataAttributes(spy)));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$2, ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const DATA_API_KEY = '.data-api';
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_UL = ':scope > li > .active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tab extends BaseComponent {
  // Getters
  static get DATA_KEY() {
    return DATA_KEY$1;
  } // Public


  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE) || isDisabled(this._element)) {
      return;
    }

    let previous;
    const target = getElementFromSelector(this._element);

    const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
      relatedTarget: this._element
    }) : null;
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    const complete = () => {
      EventHandler.trigger(previous, EVENT_HIDDEN$1, {
        relatedTarget: this._element
      });
      EventHandler.trigger(this._element, EVENT_SHOWN$1, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private


  _activate(element, container, callback) {
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) {
      const transitionDuration = getTransitionDurationFromElement(active);
      active.classList.remove(CLASS_NAME_SHOW$1);
      EventHandler.one(active, 'transitionend', complete);
      emulateTransitionEnd(active, transitionDuration);
    } else {
      complete();
    }
  }

  _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove(CLASS_NAME_ACTIVE);
      const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$1)) {
      element.classList.add(CLASS_NAME_SHOW$1);
    }

    if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
      const dropdownElement = element.closest(SELECTOR_DROPDOWN);

      if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Data.get(this, DATA_KEY$1) || new Tab(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault();
  const data = Data.get(this, DATA_KEY$1) || new Tab(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(NAME$1, Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Toast extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;

    this._setListeners();
  } // Getters


  static get DefaultType() {
    return DefaultType;
  }

  static get Default() {
    return Default;
  }

  static get DATA_KEY() {
    return DATA_KEY;
  } // Public


  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);

      this._element.classList.add(CLASS_NAME_SHOW);

      EventHandler.trigger(this._element, EVENT_SHOWN);

      if (this._config.autohide) {
        this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay);
      }
    };

    this._element.classList.remove(CLASS_NAME_HIDE);

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOWING);

    if (this._config.animation) {
      const transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  }

  hide() {
    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);

      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };

    this._element.classList.remove(CLASS_NAME_SHOW);

    if (this._config.animation) {
      const transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  }

  dispose() {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    super.dispose();
    this._config = null;
  } // Private


  _getConfig(config) {
    config = { ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
  }

  _setListeners() {
    EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY);

      const _config = typeof config === 'object' && config;

      if (!data) {
        data = new Toast(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */


defineJQueryPlugin(NAME, Toast);


/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sipho/Local Sites/paymobtech/app/public/wp-content/themes/paymob/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZG9tL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL29mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9zY3JvbGxzcHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVuZGxlLmpzIl0sIm5hbWVzIjpbIklOVkFMSURfRUxFTUVOVF9FUlJPUiIsIklORklOSVRFX0xPT1BfRVJST1IiLCJERUZBVUxUX09QVElPTlMiLCJwbGFjZW1lbnQiLCJtb2RpZmllcnMiLCJzdHJhdGVneSIsImFyZVZhbGlkRWxlbWVudHMiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsInNvbWUiLCJlbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9wcGVyR2VuZXJhdG9yIiwiZ2VuZXJhdG9yT3B0aW9ucyIsIl9nZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmIiwiZGVmYXVsdE1vZGlmaWVycyIsIl9nZW5lcmF0b3JPcHRpb25zJGRlZjIiLCJkZWZhdWx0T3B0aW9ucyIsImNyZWF0ZVBvcHBlciIsInJlZmVyZW5jZSIsInBvcHBlciIsIm9wdGlvbnMiLCJzdGF0ZSIsIm9yZGVyZWRNb2RpZmllcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2RpZmllcnNEYXRhIiwiZWxlbWVudHMiLCJhdHRyaWJ1dGVzIiwic3R5bGVzIiwiZWZmZWN0Q2xlYW51cEZucyIsImlzRGVzdHJveWVkIiwiaW5zdGFuY2UiLCJzZXRPcHRpb25zIiwiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsInNjcm9sbFBhcmVudHMiLCJpc0VsZW1lbnQiLCJsaXN0U2Nyb2xsUGFyZW50cyIsImNvbnRleHRFbGVtZW50Iiwib3JkZXJNb2RpZmllcnMiLCJtZXJnZUJ5TmFtZSIsImNvbmNhdCIsImZpbHRlciIsIm0iLCJlbmFibGVkIiwicHJvY2VzcyIsInVuaXF1ZUJ5IiwiX3JlZiIsIm5hbWUiLCJ2YWxpZGF0ZU1vZGlmaWVycyIsImdldEJhc2VQbGFjZW1lbnQiLCJhdXRvIiwiZmxpcE1vZGlmaWVyIiwiZmluZCIsIl9yZWYyIiwiY29uc29sZSIsImVycm9yIiwiam9pbiIsIl9nZXRDb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsInBhcnNlRmxvYXQiLCJ3YXJuIiwicnVuTW9kaWZpZXJFZmZlY3RzIiwidXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJfc3RhdGUkZWxlbWVudHMiLCJyZWN0cyIsImdldENvbXBvc2l0ZVJlY3QiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRMYXlvdXRSZWN0IiwicmVzZXQiLCJmb3JFYWNoIiwibW9kaWZpZXIiLCJkYXRhIiwiX19kZWJ1Z19sb29wc19fIiwiaW5kZXgiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCJmbiIsIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIiLCJfb3B0aW9ucyIsImRlYm91bmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZXN0cm95IiwidGhlbiIsIm9uRmlyc3RVcGRhdGUiLCJfcmVmMyIsIl9yZWYzJG9wdGlvbnMiLCJlZmZlY3QiLCJjbGVhbnVwRm4iLCJub29wRm4iLCJwdXNoIiwiY29udGFpbnMiLCJwYXJlbnQiLCJjaGlsZCIsInJvb3ROb2RlIiwiZ2V0Um9vdE5vZGUiLCJpc1NoYWRvd1Jvb3QiLCJuZXh0IiwiaXNTYW1lTm9kZSIsInBhcmVudE5vZGUiLCJob3N0IiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwieCIsInkiLCJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwiY2xpcHBpbmdQYXJlbnQiLCJ2aWV3cG9ydCIsInJlY3RUb0NsaWVudFJlY3QiLCJnZXRWaWV3cG9ydFJlY3QiLCJpc0hUTUxFbGVtZW50IiwiZ2V0RG9jdW1lbnRSZWN0IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZ2V0Q2xpcHBpbmdQYXJlbnRzIiwiY2xpcHBpbmdQYXJlbnRzIiwiZ2V0UGFyZW50Tm9kZSIsImNhbkVzY2FwZUNsaXBwaW5nIiwiaW5kZXhPZiIsInBvc2l0aW9uIiwiY2xpcHBlckVsZW1lbnQiLCJnZXROb2RlTmFtZSIsImdldENsaXBwaW5nUmVjdCIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwibWFpbkNsaXBwaW5nUGFyZW50cyIsImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCJjbGlwcGluZ1JlY3QiLCJyZWR1Y2UiLCJhY2NSZWN0IiwibWF4IiwibWluIiwiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCJvZmZzZXRQYXJlbnQiLCJpc0ZpeGVkIiwiZG9jdW1lbnRFbGVtZW50IiwiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCJzY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwib2Zmc2V0cyIsImlzU2Nyb2xsUGFyZW50IiwiZ2V0Tm9kZVNjcm9sbCIsImdldFdpbmRvd1Njcm9sbEJhclgiLCJnZXRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJfZWxlbWVudCRvd25lckRvY3VtZW4iLCJodG1sIiwid2luU2Nyb2xsIiwiZ2V0V2luZG93U2Nyb2xsIiwiYm9keSIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiZGlyZWN0aW9uIiwiZ2V0SFRNTEVsZW1lbnRTY3JvbGwiLCJjbGllbnRSZWN0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwiYWJzIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJub2RlIiwiZ2V0VHJ1ZU9mZnNldFBhcmVudCIsImdldENvbnRhaW5pbmdCbG9jayIsImlzRmlyZWZveCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImN1cnJlbnROb2RlIiwiY3NzIiwidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImlzVGFibGVFbGVtZW50IiwiYXNzaWduZWRTbG90IiwiZ2V0U2Nyb2xsUGFyZW50Iiwid2luIiwidmlzdWFsVmlld3BvcnQiLCJ0ZXN0IiwidG9TdHJpbmciLCJkZWZhdWx0VmlldyIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJPd25FbGVtZW50IiwiRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU2hhZG93Um9vdCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwibGlzdCIsInNjcm9sbFBhcmVudCIsImlzQm9keSIsInRhcmdldCIsInVwZGF0ZWRMaXN0IiwiYmFzZVBsYWNlbWVudHMiLCJzdGFydCIsImVuZCIsInZhcmlhdGlvblBsYWNlbWVudHMiLCJhY2MiLCJwbGFjZW1lbnRzIiwiYmVmb3JlUmVhZCIsInJlYWQiLCJhZnRlclJlYWQiLCJiZWZvcmVNYWluIiwibWFpbiIsImFmdGVyTWFpbiIsImJlZm9yZVdyaXRlIiwid3JpdGUiLCJhZnRlcldyaXRlIiwibW9kaWZpZXJQaGFzZXMiLCJhcHBseVN0eWxlcyIsImtleXMiLCJzdHlsZSIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaW5pdGlhbFN0eWxlcyIsImFycm93Iiwic3R5bGVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eSIsImF0dHJpYnV0ZSIsInBoYXNlIiwicmVxdWlyZXMiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwiZXhwYW5kVG9IYXNoTWFwIiwiX3N0YXRlJG1vZGlmaWVyc0RhdGEkIiwiYXJyb3dFbGVtZW50IiwicG9wcGVyT2Zmc2V0cyIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwiZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IiwiaXNWZXJ0aWNhbCIsImxlbiIsInBhZGRpbmdPYmplY3QiLCJhcnJvd1JlY3QiLCJtaW5Qcm9wIiwibWF4UHJvcCIsImVuZERpZmYiLCJzdGFydERpZmYiLCJhcnJvd09mZnNldFBhcmVudCIsImNsaWVudFNpemUiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsIndpdGhpbiIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiX29wdGlvbnMkZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXF1aXJlc0lmRXhpc3RzIiwidW5zZXRTaWRlcyIsInJvdW5kT2Zmc2V0c0J5RFBSIiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJvdW5kIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwiZ3B1QWNjZWxlcmF0aW9uIiwiYWRhcHRpdmUiLCJyb3VuZE9mZnNldHMiLCJfcmVmMyR4IiwiX3JlZjMkeSIsImhhc1giLCJoYXNZIiwic2lkZVgiLCJzaWRlWSIsImhlaWdodFByb3AiLCJ3aWR0aFByb3AiLCJjb21tb25TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbiIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNCIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwidHJhbnNpdGlvblByb3BlcnR5IiwicGFzc2l2ZSIsIl9vcHRpb25zJHNjcm9sbCIsIl9vcHRpb25zJHJlc2l6ZSIsInJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMiLCJvcHBvc2l0ZVBsYWNlbWVudCIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQiLCJmbGlwIiwiX3NraXAiLCJfb3B0aW9ucyRtYWluQXhpcyIsIm1haW5BeGlzIiwiY2hlY2tNYWluQXhpcyIsIl9vcHRpb25zJGFsdEF4aXMiLCJhbHRBeGlzIiwiY2hlY2tBbHRBeGlzIiwic3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJmbGlwVmFyaWF0aW9ucyIsImFsbG93ZWRBdXRvUGxhY2VtZW50cyIsInByZWZlcnJlZFBsYWNlbWVudCIsImlzQmFzZVBsYWNlbWVudCIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwicmVmZXJlbmNlUmVjdCIsImNoZWNrc01hcCIsIk1hcCIsIm1ha2VGYWxsYmFja0NoZWNrcyIsImZpcnN0Rml0dGluZ1BsYWNlbWVudCIsImkiLCJfYmFzZVBsYWNlbWVudCIsImlzU3RhcnRWYXJpYXRpb24iLCJnZXRWYXJpYXRpb24iLCJkZXRlY3RPdmVyZmxvdyIsIm1haW5WYXJpYXRpb25TaWRlIiwiYWx0VmFyaWF0aW9uU2lkZSIsImNoZWNrcyIsImV2ZXJ5IiwiY2hlY2siLCJzZXQiLCJudW1iZXJPZkNoZWNrcyIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwiZ2V0Iiwic2xpY2UiLCJfcmV0IiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic2lkZSIsImhpZGUiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VPdmVyZmxvdyIsImVsZW1lbnRDb250ZXh0IiwicG9wcGVyQWx0T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCJpbnZlcnREaXN0YW5jZSIsInNraWRkaW5nIiwiZGlzdGFuY2UiLCJfb3B0aW9ucyRvZmZzZXQiLCJfZGF0YSRzdGF0ZSRwbGFjZW1lbnQiLCJjb21wdXRlT2Zmc2V0cyIsIl9vcHRpb25zJHRldGhlciIsInRldGhlciIsIl9vcHRpb25zJHRldGhlck9mZnNldCIsInRldGhlck9mZnNldCIsInZhcmlhdGlvbiIsImdldEFsdEF4aXMiLCJ0ZXRoZXJPZmZzZXRWYWx1ZSIsIm1haW5TaWRlIiwiYWx0U2lkZSIsImFkZGl0aXZlIiwibWluTGVuIiwibWF4TGVuIiwiYXJyb3dQYWRkaW5nT2JqZWN0IiwiZ2V0RnJlc2hTaWRlT2JqZWN0IiwiYXJyb3dQYWRkaW5nTWluIiwiYXJyb3dQYWRkaW5nTWF4IiwiYXJyb3dMZW4iLCJtaW5PZmZzZXQiLCJtYXhPZmZzZXQiLCJjbGllbnRPZmZzZXQiLCJvZmZzZXRNb2RpZmllclZhbHVlIiwidGV0aGVyTWluIiwidGV0aGVyTWF4IiwicHJldmVudGVkT2Zmc2V0IiwibWF0aE1pbiIsIm1hdGhNYXgiLCJfbWFpblNpZGUiLCJfYWx0U2lkZSIsIl9vZmZzZXQiLCJfbWluIiwiX21heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJldmVudExpc3RlbmVycyIsIl9vcHRpb25zJGFsbG93ZWRBdXRvUCIsImFsbFBsYWNlbWVudHMiLCJhbGxvd2VkUGxhY2VtZW50cyIsIm92ZXJmbG93cyIsInNvcnQiLCJhIiwiYiIsImNvbW1vblgiLCJjb21tb25ZIiwicGVuZGluZyIsInVuZGVmaW5lZCIsIl9vcHRpb25zJHBsYWNlbWVudCIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiX29wdGlvbnMkYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRwYWRkaW5nIiwiYWx0Q29udGV4dCIsInJlZmVyZW5jZUVsZW1lbnQiLCJjbGlwcGluZ0NsaWVudFJlY3QiLCJyZWZlcmVuY2VDbGllbnRSZWN0IiwicG9wcGVyQ2xpZW50UmVjdCIsImVsZW1lbnRDbGllbnRSZWN0Iiwib3ZlcmZsb3dPZmZzZXRzIiwib2Zmc2V0RGF0YSIsImtleSIsIm11bHRpcGx5IiwiaGFzaE1hcCIsImZvcm1hdCIsInN0ciIsInAiLCJjIiwicmVwbGFjZSIsInNwbGl0IiwiaGFzaCIsIm1hdGNoZWQiLCJtZXJnZWQiLCJjdXJyZW50IiwiZXhpc3RpbmciLCJtYXAiLCJvcmRlciIsInZpc2l0ZWQiLCJTZXQiLCJyZXN1bHQiLCJhZGQiLCJkZXAiLCJoYXMiLCJkZXBNb2RpZmllciIsImFyciIsImlkZW50aWZpZXJzIiwiaXRlbSIsImlkZW50aWZpZXIiLCJJTlZBTElEX01PRElGSUVSX0VSUk9SIiwiTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SIiwiVkFMSURfUFJPUEVSVElFUyIsIlN0cmluZyIsImlzQXJyYXkiLCJzIiwicmVxdWlyZW1lbnQiLCJtb2QiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInRvVHlwZSIsIm9iaiIsImdldFVJRCIsInByZWZpeCIsImdldFNlbGVjdG9yIiwic2VsZWN0b3IiLCJocmVmQXR0ciIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsIk51bWJlciIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImNhbGxlZCIsImR1cmF0aW9uUGFkZGluZyIsImVtdWxhdGVkRHVyYXRpb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ0eXBlQ2hlY2tDb25maWciLCJleHBlY3RlZFR5cGVzIiwiY29uZmlnVHlwZXMiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJjb21wb25lbnROYW1lIiwiaXNWaXNpYmxlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiaXNEaXNhYmxlZCIsIk5vZGUiLCJmaW5kU2hhZG93Um9vdCIsInJvb3QiLCJub29wIiwicmVmbG93IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5Iiwib25ET01Db250ZW50TG9hZGVkIiwiY2FsbGJhY2siLCJpc1JUTCIsImRlZmluZUpRdWVyeVBsdWdpbiIsIiQiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJwbHVnaW4iLCJlbGVtZW50TWFwIiwiaW5zdGFuY2VNYXAiLCJyZW1vdmUiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwidWlkIiwiZ2V0VWlkRXZlbnQiLCJldmVudCIsImhhbmRsZXIiLCJFdmVudEhhbmRsZXIiLCJkb21FbGVtZW50cyIsImRlbGVnYXRpb25TZWxlY3RvciIsInVpZEV2ZW50TGlzdCIsImV2ZW50cyIsImRlbGVnYXRpb24iLCJvcmlnaW5hbEhhbmRsZXIiLCJ0eXBlRXZlbnQiLCJvcmlnaW5hbFR5cGVFdmVudCIsImN1c3RvbSIsImlzTmF0aXZlIiwiZGVsZWdhdGlvbkZuIiwibm9ybWFsaXplUGFyYW1zIiwiZ2V0RXZlbnQiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJmaW5kSGFuZGxlciIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiYm9vdHN0cmFwSGFuZGxlciIsIkJvb2xlYW4iLCJzdG9yZUVsZW1lbnRFdmVudCIsImhhbmRsZXJLZXkiLCJyZW1vdmVIYW5kbGVyIiwib24iLCJhZGRIYW5kbGVyIiwib25lIiwib2ZmIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsImVsZW1lbnRFdmVudCIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJqUXVlcnlFdmVudCIsImNhbmNlbGFibGUiLCJWRVJTSU9OIiwiY29uc3RydWN0b3IiLCJEYXRhIiwiZGlzcG9zZSIsImdldEluc3RhbmNlIiwiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiU0VMRUNUT1JfRElTTUlTUyIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJDTEFTU19OQU1FX0FMRVJUIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiX2dldFJvb3RFbGVtZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiX3JlbW92ZUVsZW1lbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJqUXVlcnlJbnRlcmZhY2UiLCJoYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsIkFsZXJ0IiwiQ0xBU1NfTkFNRV9BQ1RJVkUiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsInRvZ2dsZSIsImJ1dHRvbiIsInZhbCIsImNociIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsIm5vcm1hbGl6ZURhdGFLZXkiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJwdXJlS2V5Iiwibm9ybWFsaXplRGF0YSIsImdldERhdGFBdHRyaWJ1dGUiLCJOT0RFX1RFWFQiLCJTZWxlY3RvckVuZ2luZSIsImZpbmRPbmUiLCJjaGlsZHJlbiIsInBhcmVudHMiLCJhbmNlc3RvciIsInByZXYiLCJwcmV2aW91cyIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkVWRU5UX1NMSURFIiwiRVZFTlRfU0xJRCIsIkVWRU5UX0tFWURPV04iLCJFVkVOVF9NT1VTRUVOVEVSIiwiRVZFTlRfTU9VU0VMRUFWRSIsIkVWRU5UX1RPVUNIU1RBUlQiLCJFVkVOVF9UT1VDSE1PVkUiLCJFVkVOVF9UT1VDSEVORCIsIkVWRU5UX1BPSU5URVJET1dOIiwiRVZFTlRfUE9JTlRFUlVQIiwiRVZFTlRfRFJBR19TVEFSVCIsIkVWRU5UX0xPQURfREFUQV9BUEkiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfRU5EIiwiQ0xBU1NfTkFNRV9TVEFSVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIkNMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfTkVYVF9QUkVWIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0lORElDQVRPUiIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJQT0lOVEVSX1RZUEVfVE9VQ0giLCJQT0lOVEVSX1RZUEVfUEVOIiwibmV4dFdoZW5WaXNpYmxlIiwiY2xlYXJJbnRlcnZhbCIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJ0byIsImFjdGl2ZUluZGV4IiwiX2dldENvbmZpZyIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwibW92ZSIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJlIiwiX2tleWRvd24iLCJfZ2V0SXRlbUluZGV4IiwiX2dldEl0ZW1CeU9yZGVyIiwiaXNOZXh0IiwiaXNQcmV2IiwibGFzdEl0ZW1JbmRleCIsImlzR29pbmdUb1dyYXAiLCJkZWx0YSIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiYWN0aXZlSW5kaWNhdG9yIiwiaW5kaWNhdG9ycyIsIl91cGRhdGVJbnRlcnZhbCIsImVsZW1lbnRJbnRlcnZhbCIsIl9zbGlkZSIsImFjdGl2ZUVsZW1lbnQiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiZXZlbnREaXJlY3Rpb25OYW1lIiwic2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJfZGlyZWN0aW9uVG9PcmRlciIsIl9vcmRlclRvRGlyZWN0aW9uIiwiY2Fyb3VzZWxJbnRlcmZhY2UiLCJfY29uZmlnIiwiYWN0aW9uIiwiQ2Fyb3VzZWwiLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkVWRU5UX0hJREUiLCJFVkVOVF9ISURERU4iLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJXSURUSCIsIkhFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiY29udGFpbmVyIiwidGVtcEFjdGl2ZURhdGEiLCJhY3RpdmVzRGF0YSIsInN0YXJ0RXZlbnQiLCJlbGVtQWN0aXZlIiwiQ29sbGFwc2UiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsInNldFRyYW5zaXRpb25pbmciLCJfZ2V0RGltZW5zaW9uIiwiX2dldFBhcmVudCIsInNlbGVjdGVkIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsImNvbGxhcHNlSW50ZXJmYWNlIiwidHJpZ2dlckRhdGEiLCJzZWxlY3RvckVsZW1lbnRzIiwiRVNDQVBFX0tFWSIsIlNQQUNFX0tFWSIsIlRBQl9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIlJFR0VYUF9LRVlET1dOIiwiRVZFTlRfQ0xJQ0siLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX0RJU0FCTEVEIiwiQ0xBU1NfTkFNRV9EUk9QVVAiLCJDTEFTU19OQU1FX0RST1BFTkQiLCJDTEFTU19OQU1FX0RST1BTVEFSVCIsIkNMQVNTX05BTUVfTkFWQkFSIiwiU0VMRUNUT1JfTUVOVSIsIlNFTEVDVE9SX05BVkJBUl9OQVYiLCJTRUxFQ1RPUl9WSVNJQkxFX0lURU1TIiwiUExBQ0VNRU5UX1RPUCIsIlBMQUNFTUVOVF9UT1BFTkQiLCJQTEFDRU1FTlRfQk9UVE9NIiwiUExBQ0VNRU5UX0JPVFRPTUVORCIsIlBMQUNFTUVOVF9SSUdIVCIsIlBMQUNFTUVOVF9MRUZUIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsImlzQWN0aXZlIiwiRHJvcGRvd24iLCJfZWxlbWVudCIsInNob3dFdmVudCIsImlzRGlzcGxheVN0YXRpYyIsIlBvcHBlciIsImhpZGVFdmVudCIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2RldGVjdE5hdmJhciIsIl9nZXRPZmZzZXQiLCJwb3BwZXJEYXRhIiwiX2dldFBvcHBlckNvbmZpZyIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsImRyb3Bkb3duSW50ZXJmYWNlIiwiY2xlYXJNZW51cyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiZHJvcGRvd25NZW51IiwiZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImJhY2tkcm9wIiwiZm9jdXMiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX0ZPQ1VTSU4iLCJFVkVOVF9SRVNJWkUiLCJFVkVOVF9DTElDS19ESVNNSVNTIiwiRVZFTlRfS0VZRE9XTl9ESVNNSVNTIiwiRVZFTlRfTU9VU0VVUF9ESVNNSVNTIiwiRVZFTlRfTU9VU0VET1dOX0RJU01JU1MiLCJDTEFTU19OQU1FX1NDUk9MTEJBUl9NRUFTVVJFUiIsIkNMQVNTX05BTUVfQkFDS0RST1AiLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX1NUQVRJQyIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX0RJU01JU1MiLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJpc0FuaW1hdGVkIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfZW5mb3JjZUZvY3VzIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX2hpZGVNb2RhbCIsIl9yZW1vdmVCYWNrZHJvcCIsIl9zaG93QmFja2Ryb3AiLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsImNhbGxiYWNrUmVtb3ZlIiwiX2lzQW5pbWF0ZWQiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsImlzTW9kYWxPdmVyZmxvd2luZyIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwiX2FkanVzdERpYWxvZyIsIl9zY3JvbGxiYXJXaWR0aCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX2NoZWNrU2Nyb2xsYmFyIiwiX3NldFNjcm9sbGJhciIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImFjdHVhbFZhbHVlIiwiX3Jlc2V0U2Nyb2xsYmFyIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsIkNMQVNTX05BTUVfQkFDS0RST1BfQk9EWSIsIkNMQVNTX05BTUVfVE9HR0xJTkciLCJPUEVOX1NFTEVDVE9SIiwiQUNUSVZFX1NFTEVDVE9SIiwic2Nyb2xsQmFySGlkZSIsImNvbXBsZXRlQ2FsbEJhY2siLCJjb21wbGV0ZUNhbGxiYWNrIiwic2Nyb2xsQmFyUmVzZXQiLCJfZW5mb3JjZUZvY3VzT25FbGVtZW50IiwiYWxsUmVhZHlPcGVuIiwiZWwiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhdHRyTmFtZSIsImF0dHIiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsInJlZ0V4cCIsImF0dHJSZWdleCIsIkRlZmF1bHRBbGxvd2xpc3QiLCJhcmVhIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwcmUiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGbiIsImRvbVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsImFsbG93bGlzdEtleXMiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJhbGxvd0xpc3QiLCJDTEFTU19QUkVGSVgiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJjdXN0b21DbGFzcyIsInNhbml0aXplIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJFdmVudCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJDTEFTU19OQU1FX01PREFMIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJ0aXAiLCJ0aXBJZCIsImF0dGFjaG1lbnQiLCJwcmV2SG92ZXJTdGF0ZSIsImlzV2l0aENvbnRlbnQiLCJnZXRUaXBFbGVtZW50Iiwic2V0Q29udGVudCIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsInNhbml0aXplSHRtbCIsImdldFRpdGxlIiwidXBkYXRlQXR0YWNobWVudCIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJkYXRhS2V5IiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyIiwiX2dldERlbGVnYXRlQ29uZmlnIiwiX2NsZWFuVGlwQ2xhc3MiLCJ0YWJDbGFzcyIsInRva2VuIiwidENsYXNzIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsIlRvb2x0aXAiLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIkVWRU5UX0FDVElWQVRFIiwiRVZFTlRfU0NST0xMIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwiU0VMRUNUT1JfREFUQV9TUFkiLCJTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIlNFTEVDVE9SX05BVl9JVEVNUyIsIlNFTEVDVE9SX0xJU1RfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIk1FVEhPRF9PRkZTRVQiLCJNRVRIT0RfUE9TSVRJT04iLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsIm1heFNjcm9sbCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsImxpbmsiLCJsaXN0R3JvdXAiLCJuYXZJdGVtIiwiX2NsZWFyIiwic3B5IiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VIiwiU0VMRUNUT1JfQUNUSVZFX1VMIiwiU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJhY3RpdmVFbGVtZW50cyIsImFjdGl2ZSIsImlzVHJhbnNpdGlvbmluZyIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd24iLCJDTEFTU19OQU1FX0hJREUiLCJDTEFTU19OQU1FX1NIT1dJTkciLCJhdXRvaGlkZSIsIl9jbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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UCxHQURPO0FBRVAsU0FBRzZHLFdBQVcsQ0FBWEEsa0JBQThCLEtBRjFCLFFBRUpBLENBRkk7QUFHUCxVQUFJLGdEQUFKO0FBSE8sS0FBVDdHO0FBTUFILG1CQUFlLGVBQWUsaUJBQTlCQSxXQUFlLENBQWZBO0FBRUE7QUFDRDs7QUFFRDZkLGVBQWEsR0FBRztBQUNkcmIsZ0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLHNEQUEyRSxNQUFNLEtBQWpGQSxJQUFpRixFQUFqRkE7QUFDRDs7QUFFRDBmLGVBQWEsR0FBRztBQUNkeFcsZ0JBQVksQ0FBQyxLQUFiQSxRQUFZLENBQVpBO0FBQ0E7QUE1SDhCOzs7QUFpSVYsU0FBZnBGLGVBQWUsU0FBUztBQUM3QixXQUFPLFVBQVUsWUFBWTtBQUMzQixVQUFJamdCLElBQUksR0FBRzRlLElBQUksQ0FBSkEsVUFBWCxRQUFXQSxDQUFYOztBQUNBLFlBQU00SSxPQUFPLEdBQUcsOEJBQWhCOztBQUVBLFVBQUksQ0FBSixNQUFXO0FBQ1R4bkIsWUFBSSxHQUFHLGdCQUFQQSxPQUFPLENBQVBBO0FBQ0Q7O0FBRUQsVUFBSSxrQkFBSixVQUFnQztBQUM5QixZQUFJLE9BQU9BLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxnQkFBTSxjQUFlLG9CQUFtQjhaLE1BQXhDLEdBQU0sQ0FBTjtBQUNEOztBQUVEOVosWUFBSSxDQUFKQSxNQUFJLENBQUpBO0FBQ0Q7QUFkSCxLQUFPLENBQVA7QUFnQkQ7O0FBbEorQjtBQXFKbEM7Ozs7Ozs7O0FBT0ErYSxrQkFBa0IsT0FBbEJBLEtBQWtCLENBQWxCQTs7Ozs7Ozs7Ozs7OztBQ3hOQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCB2YWxpZGF0ZU1vZGlmaWVycyBmcm9tIFwiLi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IHVuaXF1ZUJ5IGZyb20gXCIuL3V0aWxzL3VuaXF1ZUJ5LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCAqIGZyb20gXCIuL2VudW1zLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93LCBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyQmFzZSB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCIuL3BvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCIuL2Zvcm1hdC5qc1wiO1xuaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgT2JqZWN0LmtleXMobW9kaWZpZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCAnXCJuYW1lXCInLCAnXCJzdHJpbmdcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLm5hbWUpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZW5hYmxlZFwiJywgJ1wiYm9vbGVhblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZW5hYmxlZCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn0iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmogPT4ge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHIgfHwgKCFocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyID0gJyMnICsgaHJlZkF0dHIuc3BsaXQoJyMnKVsxXVxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iaiA9PiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcblxuY29uc3QgZW11bGF0ZVRyYW5zaXRpb25FbmQgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGR1cmF0aW9uICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbmNvbnN0IHR5cGVDaGVja0NvbmZpZyA9IChjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSA9PiB7XG4gIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoZWxlbWVudC5zdHlsZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlKSB7XG4gICAgY29uc3QgZWxlbWVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIGNvbnN0IHBhcmVudE5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgcmV0dXJuIGVsZW1lbnRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIHBhcmVudE5vZGVTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIGVsZW1lbnRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJ1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiBmdW5jdGlvbiAoKSB7fVxuXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgY29uc3QgeyBqUXVlcnkgfSA9IHdpbmRvd1xuXG4gIGlmIChqUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIGpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnXG5cbmNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IChuYW1lLCBwbHVnaW4pID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXVxuICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW5cbiAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZ2V0VUlELFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIGlzRWxlbWVudCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZyxcbiAgaXNWaXNpYmxlLFxuICBpc0Rpc2FibGVkLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgbm9vcCxcbiAgcmVmbG93LFxuICBnZXRqUXVlcnksXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgaXNSVEwsXG4gIGRlZmluZUpRdWVyeVBsdWdpblxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIGdldFVpZEV2ZW50KGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gZWxlbWVudFxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChsZXQgaSA9IGRvbUVsZW1lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2NvbnNpc3RlbnQtZGVzdHJ1Y3R1cmluZ1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVG8gcGxlYXNlIEVTTGludFxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIGNvbnN0IHVpZEV2ZW50TGlzdCA9IE9iamVjdC5rZXlzKGV2ZW50cylcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdWlkRXZlbnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbdWlkRXZlbnRMaXN0W2ldXVxuXG4gICAgaWYgKGV2ZW50Lm9yaWdpbmFsSGFuZGxlciA9PT0gaGFuZGxlciAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGV2ZW50XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgY29uc3QgZGVsZWdhdGlvbiA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICBjb25zdCBvcmlnaW5hbEhhbmRsZXIgPSBkZWxlZ2F0aW9uID8gZGVsZWdhdGlvbkZuIDogaGFuZGxlclxuXG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgbGV0IHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICBjb25zdCBjdXN0b20gPSBjdXN0b21FdmVudHNbdHlwZUV2ZW50XVxuXG4gIGlmIChjdXN0b20pIHtcbiAgICB0eXBlRXZlbnQgPSBjdXN0b21cbiAgfVxuXG4gIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgaWYgKCFpc05hdGl2ZSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgaGFuZGxlciA9IGRlbGVnYXRpb25GblxuICAgIGRlbGVnYXRpb25GbiA9IG51bGxcbiAgfVxuXG4gIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGbikge1xuICAgIHByZXZpb3VzRm4ub25lT2ZmID0gcHJldmlvdXNGbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KG9yaWdpbmFsSGFuZGxlciwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGRlbGVnYXRpb24gP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbikgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlcilcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGxcbiAgZm4ub3JpZ2luYWxIYW5kbGVyID0gb3JpZ2luYWxIYW5kbGVyXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgZGVsZWdhdGlvbilcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChoYW5kbGVyS2V5ID0+IHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbEhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghZXZlbnRzIHx8ICFldmVudHNbdHlwZUV2ZW50XSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChlbGVtZW50RXZlbnQgPT4ge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goa2V5SGFuZGxlcnMgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc11cblxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcbiAgICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KVxuXG4gICAgbGV0IGpRdWVyeUV2ZW50XG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcbiAgICBsZXQgZXZ0ID0gbnVsbFxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBpZiAoaXNOYXRpdmUpIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgICAgIGV2dC5pbml0RXZlbnQodHlwZUV2ZW50LCBidWJibGVzLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBjdXN0b20gaW5mb3JtYXRpb24gaW4gb3VyIGV2ZW50XG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZ0LCBrZXksIHtcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIHR5cGVvZiBqUXVlcnlFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjAuMC1iZXRhMydcblxuY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvKiogU3RhdGljICovXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZWxlbWVudCwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IFNFTEVDVE9SX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9BTEVSVCA9ICdhbGVydCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBjb25zdCByb290RWxlbWVudCA9IGVsZW1lbnQgPyB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KSA6IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50ID09PSBudWxsIHx8IGN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfQUxFUlR9YClcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFKVxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZShlbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpKVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGVsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRElTTUlTUywgQWxlcnQuaGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5BbGVydCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgbGV0IGRhdGEgPSBEYXRhLmdldChidXR0b24sIERBVEFfS0VZKVxuICBpZiAoIWRhdGEpIHtcbiAgICBkYXRhID0gbmV3IEJ1dHRvbihidXR0b24pXG4gIH1cblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQnV0dG9uIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIEJ1dHRvbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsKSB7XG4gIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsID09PSBOdW1iZXIodmFsKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWwpXG4gIH1cblxuICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH0sXG5cbiAgb2Zmc2V0KGVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICAgIH1cbiAgfSxcblxuICBwb3NpdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5PREVfVEVYVCA9IDNcblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cblxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yICYmIGFuY2VzdG9yLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBhbmNlc3Rvci5ub2RlVHlwZSAhPT0gTk9ERV9URVhUKSB7XG4gICAgICBpZiAoYW5jZXN0b3IubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgfVxuXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogZmFsc2UsXG4gIHBhdXNlOiAnaG92ZXInLFxuICB3cmFwOiB0cnVlLFxuICB0b3VjaDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcDogJ2Jvb2xlYW4nLFxuICB0b3VjaDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUiA9ICdbZGF0YS1icy10YXJnZXRdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICAgIH1cbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTkVYVF9QUkVWLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG5cbiAgY3ljbGUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID9cbiAgICAgIE9SREVSX05FWFQgOlxuICAgICAgT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24gPiAwID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCBldmVudCA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCBldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIHRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzdGFydCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5jbGllbnRYXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSBldmVudCA9PiB7XG4gICAgICAvLyBlbnN1cmUgc3dpcGluZyB3aXRoIG9uZSB0b3VjaCBhbmQgbm90IHBpbmNoaW5nXG4gICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgICAwIDpcbiAgICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KS5mb3JFYWNoKGl0ZW1JbWcgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGl0ZW1JbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfTEVGVF9LRVkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9MRUZUKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19SSUdIVF9LRVkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9SSUdIVClcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgZWxlbWVudC5wYXJlbnROb2RlKSA6XG4gICAgICBbXVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlPcmRlcihvcmRlciwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgaXNQcmV2ID0gb3JkZXIgPT09IE9SREVSX1BSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCA9IChpc1ByZXYgJiYgYWN0aXZlSW5kZXggPT09IDApIHx8IChpc05leHQgJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXgpXG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgPSBpc1ByZXYgPyAtMSA6IDFcbiAgICBjb25zdCBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGhcblxuICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xID9cbiAgICAgIHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDpcbiAgICAgIHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF1cbiAgfVxuXG4gIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KSlcblxuICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgICBjb25zdCBpbmRpY2F0b3JzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTkRJQ0FUT1IsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE51bWJlci5wYXJzZUludChpbmRpY2F0b3JzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpLCAxMCkgPT09IHRoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KSkge1xuICAgICAgICAgIGluZGljYXRvcnNbaV0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgICAgICBpbmRpY2F0b3JzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKVxuXG4gICAgaWYgKGVsZW1lbnRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICB9XG4gIH1cblxuICBfc2xpZGUoZGlyZWN0aW9uT3JPcmRlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb25Pck9yZGVyKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLl9nZXRJdGVtQnlPcmRlcihvcmRlciwgYWN0aXZlRWxlbWVudClcblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkRcbiAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuICAgIGNvbnN0IGV2ZW50RGlyZWN0aW9uTmFtZSA9IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpXG5cbiAgICBpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKVxuICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudClcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnRcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmVFbGVtZW50KVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKGFjdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDApXG4gICAgICB9KVxuXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChhY3RpdmVFbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoIVtESVJFQ1RJT05fUklHSFQsIERJUkVDVElPTl9MRUZUXS5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9SSUdIVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1JJR0hUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcbiAgfVxuXG4gIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgaWYgKCFbT1JERVJfTkVYVCwgT1JERVJfUFJFVl0uaW5jbHVkZXMob3JkZXIpKSB7XG4gICAgICByZXR1cm4gb3JkZXJcbiAgICB9XG5cbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9ORVhUID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX05FWFQgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGNhcm91c2VsSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgbGV0IF9jb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIF9jb25maWcgPSB7XG4gICAgICAgIC4uLl9jb25maWcsXG4gICAgICAgIC4uLmNvbmZpZ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENhcm91c2VsKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHthY3Rpb259XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2FjdGlvbl0oKVxuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnRlcnZhbCAmJiBfY29uZmlnLnJpZGUpIHtcbiAgICAgIGRhdGEucGF1c2UoKVxuICAgICAgZGF0YS5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0KSxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpXG4gICAgfVxuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICB9XG5cbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0YXJnZXQsIGNvbmZpZylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBEYXRhLmdldCh0YXJnZXQsIERBVEFfS0VZKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIENhcm91c2VsLmRhdGFBcGlDbGlja0hhbmRsZXIpXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKGNhcm91c2Vsc1tpXSwgRGF0YS5nZXQoY2Fyb3VzZWxzW2ldLCBEQVRBX0tFWSkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5DYXJvdXNlbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNFbGVtZW50LFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGU6IHRydWUsXG4gIHBhcmVudDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gU2VsZWN0b3JFbmdpbmUuZmluZChcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtocmVmPVwiIyR7dGhpcy5fZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy10YXJnZXQ9XCIjJHt0aGlzLl9lbGVtZW50LmlkfVwiXWBcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVTLCB0aGlzLl9wYXJlbnQpXG4gICAgICAgIC5maWx0ZXIoZWxlbSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5fc2VsZWN0b3IpXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGNvbnN0IHRlbXBBY3RpdmVEYXRhID0gYWN0aXZlcy5maW5kKGVsZW0gPT4gY29udGFpbmVyICE9PSBlbGVtKVxuICAgICAgYWN0aXZlc0RhdGEgPSB0ZW1wQWN0aXZlRGF0YSA/IERhdGEuZ2V0KHRlbXBBY3RpdmVEYXRhLCBEQVRBX0tFWSkgOiBudWxsXG5cbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzLmZvckVhY2goZWxlbUFjdGl2ZSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXIgIT09IGVsZW1BY3RpdmUpIHtcbiAgICAgICAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZShlbGVtQWN0aXZlLCAnaGlkZScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgRGF0YS5zZXQoZWxlbUFjdGl2ZSwgREFUQV9LRVksIG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcblxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChlbGVtICYmICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbFxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoV0lEVEgpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9nZXRQYXJlbnQoKSB7XG4gICAgbGV0IHsgcGFyZW50IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmIChpc0VsZW1lbnQocGFyZW50KSkge1xuICAgICAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgcGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHBhcmVudFswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50WzBdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUocGFyZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2RhdGEtYnMtcGFyZW50PVwiJHtwYXJlbnR9XCJdYFxuXG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgcGFyZW50KVxuICAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KVxuXG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBbZWxlbWVudF1cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICF0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc09wZW4gPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfVxuXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENvbGxhcHNlKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJEYXRhID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yRWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuXG4gIHNlbGVjdG9yRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgbGV0IGNvbmZpZ1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAvLyB1cGRhdGUgcGFyZW50IGF0dHJpYnV0ZVxuICAgICAgaWYgKGRhdGEuX3BhcmVudCA9PT0gbnVsbCAmJiB0eXBlb2YgdHJpZ2dlckRhdGEucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRhLl9jb25maWcucGFyZW50ID0gdHJpZ2dlckRhdGEucGFyZW50XG4gICAgICAgIGRhdGEuX3BhcmVudCA9IGRhdGEuX2dldFBhcmVudCgpXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZyA9ICd0b2dnbGUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IHRyaWdnZXJEYXRhXG4gICAgfVxuXG4gICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkNvbGxhcHNlIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIENvbGxhcHNlKVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0VsZW1lbnQsXG4gIGlzVmlzaWJsZSxcbiAgaXNSVEwsXG4gIG5vb3AsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFNQQUNFX0tFWSA9ICdTcGFjZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IFJFR0VYUF9LRVlET1dOID0gbmV3IFJlZ0V4cChgJHtBUlJPV19VUF9LRVl9fCR7QVJST1dfRE9XTl9LRVl9fCR7RVNDQVBFX0tFWX1gKVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRElTQUJMRUQgPSAnZGlzYWJsZWQnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9OQVZCQVIgPSAnbmF2YmFyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXSdcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG90YWxseSBkaXNhYmxlIFBvcHBlciBmb3IgRHJvcGRvd25zIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhcikge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ25vbmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBqUXVlcnkgZWxlbWVudFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlWzBdXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgICBjb25zdCBpc0Rpc3BsYXlTdGF0aWMgPSBwb3BwZXJDb25maWcubW9kaWZpZXJzLmZpbmQobW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGVzJyAmJiBtb2RpZmllci5lbmFibGVkID09PSBmYWxzZSlcblxuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG5cbiAgICAgIGlmIChpc0Rpc3BsYXlTdGF0aWMpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAhcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vbihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpIHx8ICF0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICAgIHRoaXMuX21lbnUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGRyb3Bkb3duSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IERyb3Bkb3duKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEYXRhLmdldCh0b2dnbGVzW2ldLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghdG9nZ2xlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgLy8gRG9uJ3QgY2xvc2UgdGhlIG1lbnUgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBvciBvbmUgb2YgaXRzIHBhcmVudHMgaXMgdGhlIGRyb3Bkb3duIGJ1dHRvblxuICAgICAgICBpZiAoW2NvbnRleHQuX2VsZW1lbnRdLnNvbWUoZWxlbWVudCA9PiBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhlbGVtZW50KSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZICYmIGRyb3Bkb3duTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0b2dnbGVzW2ldLCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbSwgJ21vdXNlb3ZlcicsIG51bGwsIG5vb3AoKSkpXG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcblxuICAgICAgaWYgKGNvbnRleHQuX3BvcHBlcikge1xuICAgICAgICBjb250ZXh0Ll9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRvZ2dsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGRyb3Bkb3duTWVudSwgJ3BvcHBlcicpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0b2dnbGVzW2ldLCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID9cbiAgICAgIGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZIHx8IChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkgJiZcbiAgICAgICgoZXZlbnQua2V5ICE9PSBBUlJPV19ET1dOX0tFWSAmJiBldmVudC5rZXkgIT09IEFSUk9XX1VQX0tFWSkgfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfTUVOVSkpKSA6XG4gICAgICAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC5rZXkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuICAgICAgYnV0dG9uLmZvY3VzKClcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiAoZXZlbnQua2V5ID09PSBBUlJPV19VUF9LRVkgfHwgZXZlbnQua2V5ID09PSBBUlJPV19ET1dOX0tFWSkpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSkgPyB0aGlzIDogU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF1cbiAgICAgIGJ1dHRvbi5jbGljaygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZKSB7XG4gICAgICBEcm9wZG93bi5jbGVhck1lbnVzKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCBwYXJlbnQpLmZpbHRlcihpc1Zpc2libGUpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAvLyBVcFxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSAmJiBpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICAvLyBEb3duXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfRE9XTl9LRVkgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgLy8gaW5kZXggaXMgLTEgaWYgdGhlIGZpcnN0IGtleWRvd24gaXMgYW4gQXJyb3dVcFxuICAgIGluZGV4ID0gaW5kZXggPT09IC0xID8gMCA6IGluZGV4XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkRyb3Bkb3duIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IDBcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQW5pbWF0ZWQoKSkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgZXZlbnQgPT4gdGhpcy5oaWRlKGV2ZW50KSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFVVBfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUylcblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgZXZlbnQgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKGh0bWxFbGVtZW50ID0+IEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSkpXG5cbiAgICBzdXBlci5kaXNwb3NlKClcblxuICAgIC8qKlxuICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFVkVOVF9GT0NVU0lOYCBhbmQgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYFxuICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAqL1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fZGlhbG9nID0gbnVsbFxuICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gPSBudWxsXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBudWxsXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSBudWxsXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2RpYWxvZywgJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9kaWFsb2csIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAhdGhpcy5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUylcbiAgICB9XG4gIH1cblxuICBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4gdGhpcy5fYWRqdXN0RGlhbG9nKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYod2luZG93LCBFVkVOVF9SRVNJWkUpXG4gICAgfVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9iYWNrZHJvcClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDTEFTU19OQU1FX0JBQ0tEUk9QXG5cbiAgICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgICByZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBpZiAoIWlzQW5pbWF0ZWQpIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9iYWNrZHJvcCwgJ3RyYW5zaXRpb25lbmQnLCBjYWxsYmFjaylcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2JhY2tkcm9wLCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2JhY2tkcm9wLCAndHJhbnNpdGlvbmVuZCcsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9iYWNrZHJvcCwgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnKVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJydcbiAgICAgICAgfSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8ICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCgpKSB8fCAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiBpc1JUTCgpKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgcmVjdC5yaWdodCkgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICB9XG5cbiAgX3NldFNjcm9sbGJhcigpIHtcbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGgpXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHRoaXMuX3Njcm9sbGJhcldpZHRoKVxuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHRoaXMuX3Njcm9sbGJhcldpZHRoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG4gIH1cblxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcCwgY2FsbGJhY2spIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHRoaXMuX3Njcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXVxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wLCBhY3R1YWxWYWx1ZSlcbiAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gY2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSkgKyAncHgnXG4gICAgICB9KVxuICB9XG5cbiAgX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcpXG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wKSB7XG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXSA9ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gdmFsdWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2dldFNjcm9sbGJhcldpZHRoKCkgeyAvLyB0aHggZC53YWxzaFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcyksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRhcmdldCwgREFUQV9LRVkpXG4gIGlmICghZGF0YSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCksXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICAgIH1cblxuICAgIGRhdGEgPSBuZXcgTW9kYWwodGFyZ2V0LCBjb25maWcpXG4gIH1cblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLk1vZGFsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIE1vZGFsKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvcidcblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcblxuY29uc3QgZ2V0V2lkdGggPSAoKSA9PiB7XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpXG59XG5cbmNvbnN0IGhpZGUgPSAod2lkdGggPSBnZXRXaWR0aCgpKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG59XG5cbmNvbnN0IF9zZXRFbGVtZW50QXR0cmlidXRlcyA9IChzZWxlY3Rvciwgc3R5bGVQcm9wLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGdldFdpZHRoKClcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbc3R5bGVQcm9wXVxuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gY2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSkgKyAncHgnXG4gICAgfSlcbn1cblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0bydcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcpXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnKVxufVxuXG5jb25zdCBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyA9IChzZWxlY3Rvciwgc3R5bGVQcm9wKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcClcbiAgICB9IGVsc2Uge1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSB2YWx1ZVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRXaWR0aCgpID4gMFxufVxuXG5leHBvcnQge1xuICBnZXRXaWR0aCxcbiAgaGlkZSxcbiAgaXNCb2R5T3ZlcmZsb3dpbmcsXG4gIHJlc2V0XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHsgaGlkZSBhcyBzY3JvbGxCYXJIaWRlLCByZXNldCBhcyBzY3JvbGxCYXJSZXNldCB9IGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QX0JPRFkgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1RPR0dMSU5HID0gJ29mZmNhbnZhcy10b2dnbGluZydcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuY29uc3QgQUNUSVZFX1NFTEVDVE9SID0gYCR7T1BFTl9TRUxFQ1RPUn0sIC4ke0NMQVNTX05BTUVfVE9HR0xJTkd9YFxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJvZmZjYW52YXNcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQkFDS0RST1BfQk9EWSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIHNjcm9sbEJhckhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1RPR0dMSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9UT0dHTElORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1c09uRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoY29tcGxldGVDYWxsQmFjaywgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfVE9HR0xJTkcpXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQkFDS0RST1BfQk9EWSlcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIHNjcm9sbEJhclJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfVE9HR0xJTkcpXG4gICAgfVxuXG4gICAgc2V0VGltZW91dChjb21wbGV0ZUNhbGxiYWNrLCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZW5mb3JjZUZvY3VzT25FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgIGVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAhZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsICdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShnZXRTZWxlY3RvckZyb21FbGVtZW50KGV2ZW50LnRhcmdldCkpXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiB0YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFsbFJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoQUNUSVZFX1NFTEVDVE9SKVxuICBpZiAoYWxsUmVhZHlPcGVuICYmIGFsbFJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKS5mb3JFYWNoKGVsID0+IChEYXRhLmdldChlbCwgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXMoZWwpKS5zaG93KCkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cnMuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0clJlZ2V4ID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChyZWdFeHBbaV0udGVzdChhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBhbGxvd2xpc3RLZXlzID0gT2JqZWN0LmtleXMoYWxsb3dMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghYWxsb3dsaXN0S2V5cy5pbmNsdWRlcyhlbE5hbWUpKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHtcbiAgRGVmYXVsdEFsbG93bGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSlcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGh0bWw6IGZhbHNlLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIG9mZnNldDogWzAsIDBdLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUID0gJ291dCdcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwICYmIHRoaXMudGlwLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMudGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50aXApXG4gICAgfVxuXG4gICAgdGhpcy5faXNFbmFibGVkID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5jb25maWcgPSBudWxsXG4gICAgdGhpcy50aXAgPSBudWxsXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID9cbiAgICAgIHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy5fZWxlbWVudCkgOlxuICAgICAgc2hhZG93Um9vdC5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudFxuXG4gICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICBEYXRhLnNldCh0aXAsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjdXN0b21DbGFzcyA9IHR5cGVvZiB0aGlzLmNvbmZpZy5jdXN0b21DbGFzcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzKCkgOiB0aGlzLmNvbmZpZy5jdXN0b21DbGFzc1xuICAgIGlmIChjdXN0b21DbGFzcykge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoLi4uY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3AoKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGxcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcClcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy50aXAsICd0cmFuc2l0aW9uZW5kJywgY29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLnRpcCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX3BvcHBlcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRpcClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aXAsICd0cmFuc2l0aW9uZW5kJywgY29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aXAsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgIHJldHVybiB0aGlzLnRpcFxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jb25maWcudGVtcGxhdGVcblxuICAgIHRoaXMudGlwID0gZWxlbWVudC5jaGlsZHJlblswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9UT09MVElQX0lOTkVSLCB0aXApLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudChlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICBpZiAoY29udGVudC5qcXVlcnkpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRbMF1cbiAgICAgIH1cblxuICAgICAgLy8gY29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoY29udGVudC5wYXJlbnROb2RlICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQudGV4dENvbnRlbnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLmFsbG93TGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgICAgdGhpcy5jb25maWcudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIHVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCkge1xuICAgIGlmIChhdHRhY2htZW50ID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gJ2VuZCdcbiAgICB9XG5cbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gJ3N0YXJ0J1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2htZW50XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgRGF0YS5nZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgICAgIERhdGEuc2V0KGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0XG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLmNvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGFsdEJvdW5kYXJ5OiB0cnVlLFxuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb25DaGFuZ2UnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uRmlyc3RVcGRhdGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcHRpb25zLnBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldENvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb250YWluZXJcbiAgICB9XG5cbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gIH1cblxuICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSywgdGhpcy5jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMudG9nZ2xlKGV2ZW50KSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9lbnRlcihldmVudCkpXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2xlYXZlKGV2ZW50KSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgY29uc3Qgb3JpZ2luYWxUaXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRpdGxlIHx8IG9yaWdpbmFsVGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSB8fCAnJylcbiAgICAgIGlmICh0aXRsZSAmJiAhdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZGF0YUF0dHIgPT4ge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHIpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmNvbnRhaW5lciA9PT0gJ29iamVjdCcgJiYgY29uZmlnLmNvbnRhaW5lci5qcXVlcnkpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyWzBdXG4gICAgfVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLmFsbG93TGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBwb3BwZXJEYXRhXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRpcCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHN0YXRlLnBsYWNlbWVudCkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub29sdGlwIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5jb25zdCBEQVRBX0tFWSA9ICdicy5wb3BvdmVyJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy1wb3BvdmVyJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGNvbnRlbnQ6ICcnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuXG4gICAgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9USVRMRSwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0NPTlRFTlQsIHRpcCksIGNvbnRlbnQpXG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1jb250ZW50JykgfHwgdGhpcy5jb25maWcuY29udGVudFxuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICBEYXRhLnNldCh0aGlzLCBEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuUG9wb3ZlciB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBQb3BvdmVyKVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMTAsXG4gIG1ldGhvZDogJ2F1dG8nLFxuICB0YXJnZXQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCA9IGBzY3JvbGwke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAuJHtDTEFTU19OQU1FX0RST1BET1dOX0lURU19YFxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfU0NST0xMLCAoKSA9PiB0aGlzLl9wcm9jZXNzKCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID9cbiAgICAgIE1FVEhPRF9PRkZTRVQgOlxuICAgICAgTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgYXV0b01ldGhvZCA6XG4gICAgICB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBNRVRIT0RfUE9TSVRJT04gP1xuICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOlxuICAgICAgMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuXG4gICAgdGFyZ2V0cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldFNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0YXJnZXRTZWxlY3RvcikgOiBudWxsXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBNYW5pcHVsYXRvcltvZmZzZXRNZXRob2RdKHRhcmdldCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgaXNFbGVtZW50KGNvbmZpZy50YXJnZXQpKSB7XG4gICAgICBsZXQgeyBpZCB9ID0gY29uZmlnLnRhcmdldFxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IGdldFVJRChOQU1FKVxuICAgICAgICBjb25maWcudGFyZ2V0LmlkID0gaWRcbiAgICAgIH1cblxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICB9XG5cbiAgX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICApXG4gIH1cblxuICBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgd2luZG93LmlubmVySGVpZ2h0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9W2RhdGEtYnMtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgbGluayA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUocXVlcmllcy5qb2luKCcsJykpXG5cbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgU2VsZWN0b3JFbmdpbmUucGFyZW50cyhsaW5rLCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcbiAgICAgICAgLmZvckVhY2gobGlzdEdyb3VwID0+IHtcbiAgICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihuYXZJdGVtLCBTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSlcbiAgICAuZm9yRWFjaChzcHkgPT4gbmV3IFNjcm9sbFNweShzcHksIE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHNweSkpKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlNjcm9sbFNweSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNEaXNhYmxlZCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9VTCA9ICc6c2NvcGUgPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc6c2NvcGUgPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBpZiAoKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB8fFxuICAgICAgaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGl0ZW1TZWxlY3RvciwgbGlzdEVsZW1lbnQpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gcHJldmlvdXMgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgIT09IG51bGwgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVfVUwsIGNvbnRhaW5lcikgOlxuICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4oY29udGFpbmVyLCBTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgYWN0aXZlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaylcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpXG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUoYWN0aXZlLCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlLCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxELCBhY3RpdmUucGFyZW50Tm9kZSlcblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgZHJvcGRvd25DaGlsZC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSlcbiAgICAgICAgICAuZm9yRWFjaChkcm9wZG93biA9PiBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpIHx8IG5ldyBUYWIodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuICBkYXRhLnNob3coKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRhYiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKVxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTKVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsICgpID0+IHRoaXMuaGlkZSgpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub2FzdCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsImltcG9ydCB7IERyb3Bkb3duLCBBY2NvcmRpb24gfSBmcm9tICdib290c3RyYXAnOyJdLCJzb3VyY2VSb290IjoiIn0=