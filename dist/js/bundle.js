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
//eslint


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Local Sites\paymobtech\app\public\wp-content\themes\paymob\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZG9tL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL29mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9zY3JvbGxzcHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVuZGxlLmpzIl0sIm5hbWVzIjpbIklOVkFMSURfRUxFTUVOVF9FUlJPUiIsIklORklOSVRFX0xPT1BfRVJST1IiLCJERUZBVUxUX09QVElPTlMiLCJwbGFjZW1lbnQiLCJtb2RpZmllcnMiLCJzdHJhdGVneSIsImFyZVZhbGlkRWxlbWVudHMiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsInNvbWUiLCJlbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9wcGVyR2VuZXJhdG9yIiwiZ2VuZXJhdG9yT3B0aW9ucyIsIl9nZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmIiwiZGVmYXVsdE1vZGlmaWVycyIsIl9nZW5lcmF0b3JPcHRpb25zJGRlZjIiLCJkZWZhdWx0T3B0aW9ucyIsImNyZWF0ZVBvcHBlciIsInJlZmVyZW5jZSIsInBvcHBlciIsIm9wdGlvbnMiLCJzdGF0ZSIsIm9yZGVyZWRNb2RpZmllcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2RpZmllcnNEYXRhIiwiZWxlbWVudHMiLCJhdHRyaWJ1dGVzIiwic3R5bGVzIiwiZWZmZWN0Q2xlYW51cEZucyIsImlzRGVzdHJveWVkIiwiaW5zdGFuY2UiLCJzZXRPcHRpb25zIiwiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsInNjcm9sbFBhcmVudHMiLCJpc0VsZW1lbnQiLCJsaXN0U2Nyb2xsUGFyZW50cyIsImNvbnRleHRFbGVtZW50Iiwib3JkZXJNb2RpZmllcnMiLCJtZXJnZUJ5TmFtZSIsImNvbmNhdCIsImZpbHRlciIsIm0iLCJlbmFibGVkIiwicHJvY2VzcyIsInVuaXF1ZUJ5IiwiX3JlZiIsIm5hbWUiLCJ2YWxpZGF0ZU1vZGlmaWVycyIsImdldEJhc2VQbGFjZW1lbnQiLCJhdXRvIiwiZmxpcE1vZGlmaWVyIiwiZmluZCIsIl9yZWYyIiwiY29uc29sZSIsImVycm9yIiwiam9pbiIsIl9nZXRDb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsInBhcnNlRmxvYXQiLCJ3YXJuIiwicnVuTW9kaWZpZXJFZmZlY3RzIiwidXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJfc3RhdGUkZWxlbWVudHMiLCJyZWN0cyIsImdldENvbXBvc2l0ZVJlY3QiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRMYXlvdXRSZWN0IiwicmVzZXQiLCJmb3JFYWNoIiwibW9kaWZpZXIiLCJkYXRhIiwiX19kZWJ1Z19sb29wc19fIiwiaW5kZXgiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCJmbiIsIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIiLCJfb3B0aW9ucyIsImRlYm91bmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZXN0cm95IiwidGhlbiIsIm9uRmlyc3RVcGRhdGUiLCJfcmVmMyIsIl9yZWYzJG9wdGlvbnMiLCJlZmZlY3QiLCJjbGVhbnVwRm4iLCJub29wRm4iLCJwdXNoIiwiY29udGFpbnMiLCJwYXJlbnQiLCJjaGlsZCIsInJvb3ROb2RlIiwiZ2V0Um9vdE5vZGUiLCJpc1NoYWRvd1Jvb3QiLCJuZXh0IiwiaXNTYW1lTm9kZSIsInBhcmVudE5vZGUiLCJob3N0IiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwieCIsInkiLCJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwiY2xpcHBpbmdQYXJlbnQiLCJ2aWV3cG9ydCIsInJlY3RUb0NsaWVudFJlY3QiLCJnZXRWaWV3cG9ydFJlY3QiLCJpc0hUTUxFbGVtZW50IiwiZ2V0RG9jdW1lbnRSZWN0IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZ2V0Q2xpcHBpbmdQYXJlbnRzIiwiY2xpcHBpbmdQYXJlbnRzIiwiZ2V0UGFyZW50Tm9kZSIsImNhbkVzY2FwZUNsaXBwaW5nIiwiaW5kZXhPZiIsInBvc2l0aW9uIiwiY2xpcHBlckVsZW1lbnQiLCJnZXROb2RlTmFtZSIsImdldENsaXBwaW5nUmVjdCIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwibWFpbkNsaXBwaW5nUGFyZW50cyIsImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCJjbGlwcGluZ1JlY3QiLCJyZWR1Y2UiLCJhY2NSZWN0IiwibWF4IiwibWluIiwiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCJvZmZzZXRQYXJlbnQiLCJpc0ZpeGVkIiwiZG9jdW1lbnRFbGVtZW50IiwiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCJzY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwib2Zmc2V0cyIsImlzU2Nyb2xsUGFyZW50IiwiZ2V0Tm9kZVNjcm9sbCIsImdldFdpbmRvd1Njcm9sbEJhclgiLCJnZXRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJfZWxlbWVudCRvd25lckRvY3VtZW4iLCJodG1sIiwid2luU2Nyb2xsIiwiZ2V0V2luZG93U2Nyb2xsIiwiYm9keSIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiZGlyZWN0aW9uIiwiZ2V0SFRNTEVsZW1lbnRTY3JvbGwiLCJjbGllbnRSZWN0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwiYWJzIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJub2RlIiwiZ2V0VHJ1ZU9mZnNldFBhcmVudCIsImdldENvbnRhaW5pbmdCbG9jayIsImlzRmlyZWZveCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImN1cnJlbnROb2RlIiwiY3NzIiwidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImlzVGFibGVFbGVtZW50IiwiYXNzaWduZWRTbG90IiwiZ2V0U2Nyb2xsUGFyZW50Iiwid2luIiwidmlzdWFsVmlld3BvcnQiLCJ0ZXN0IiwidG9TdHJpbmciLCJkZWZhdWx0VmlldyIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJPd25FbGVtZW50IiwiRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU2hhZG93Um9vdCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwibGlzdCIsInNjcm9sbFBhcmVudCIsImlzQm9keSIsInRhcmdldCIsInVwZGF0ZWRMaXN0IiwiYmFzZVBsYWNlbWVudHMiLCJzdGFydCIsImVuZCIsInZhcmlhdGlvblBsYWNlbWVudHMiLCJhY2MiLCJwbGFjZW1lbnRzIiwiYmVmb3JlUmVhZCIsInJlYWQiLCJhZnRlclJlYWQiLCJiZWZvcmVNYWluIiwibWFpbiIsImFmdGVyTWFpbiIsImJlZm9yZVdyaXRlIiwid3JpdGUiLCJhZnRlcldyaXRlIiwibW9kaWZpZXJQaGFzZXMiLCJhcHBseVN0eWxlcyIsImtleXMiLCJzdHlsZSIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaW5pdGlhbFN0eWxlcyIsImFycm93Iiwic3R5bGVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eSIsImF0dHJpYnV0ZSIsInBoYXNlIiwicmVxdWlyZXMiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwiZXhwYW5kVG9IYXNoTWFwIiwiX3N0YXRlJG1vZGlmaWVyc0RhdGEkIiwiYXJyb3dFbGVtZW50IiwicG9wcGVyT2Zmc2V0cyIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwiZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IiwiaXNWZXJ0aWNhbCIsImxlbiIsInBhZGRpbmdPYmplY3QiLCJhcnJvd1JlY3QiLCJtaW5Qcm9wIiwibWF4UHJvcCIsImVuZERpZmYiLCJzdGFydERpZmYiLCJhcnJvd09mZnNldFBhcmVudCIsImNsaWVudFNpemUiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsIndpdGhpbiIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiX29wdGlvbnMkZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXF1aXJlc0lmRXhpc3RzIiwidW5zZXRTaWRlcyIsInJvdW5kT2Zmc2V0c0J5RFBSIiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJvdW5kIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwiZ3B1QWNjZWxlcmF0aW9uIiwiYWRhcHRpdmUiLCJyb3VuZE9mZnNldHMiLCJfcmVmMyR4IiwiX3JlZjMkeSIsImhhc1giLCJoYXNZIiwic2lkZVgiLCJzaWRlWSIsImhlaWdodFByb3AiLCJ3aWR0aFByb3AiLCJjb21tb25TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbiIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNCIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwidHJhbnNpdGlvblByb3BlcnR5IiwicGFzc2l2ZSIsIl9vcHRpb25zJHNjcm9sbCIsIl9vcHRpb25zJHJlc2l6ZSIsInJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMiLCJvcHBvc2l0ZVBsYWNlbWVudCIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQiLCJmbGlwIiwiX3NraXAiLCJfb3B0aW9ucyRtYWluQXhpcyIsIm1haW5BeGlzIiwiY2hlY2tNYWluQXhpcyIsIl9vcHRpb25zJGFsdEF4aXMiLCJhbHRBeGlzIiwiY2hlY2tBbHRBeGlzIiwic3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJmbGlwVmFyaWF0aW9ucyIsImFsbG93ZWRBdXRvUGxhY2VtZW50cyIsInByZWZlcnJlZFBsYWNlbWVudCIsImlzQmFzZVBsYWNlbWVudCIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwicmVmZXJlbmNlUmVjdCIsImNoZWNrc01hcCIsIk1hcCIsIm1ha2VGYWxsYmFja0NoZWNrcyIsImZpcnN0Rml0dGluZ1BsYWNlbWVudCIsImkiLCJfYmFzZVBsYWNlbWVudCIsImlzU3RhcnRWYXJpYXRpb24iLCJnZXRWYXJpYXRpb24iLCJkZXRlY3RPdmVyZmxvdyIsIm1haW5WYXJpYXRpb25TaWRlIiwiYWx0VmFyaWF0aW9uU2lkZSIsImNoZWNrcyIsImV2ZXJ5IiwiY2hlY2siLCJzZXQiLCJudW1iZXJPZkNoZWNrcyIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwiZ2V0Iiwic2xpY2UiLCJfcmV0IiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic2lkZSIsImhpZGUiLCJwcmV2ZW50T3ZlcmZsb3ciLCJyZWZlcmVuY2VPdmVyZmxvdyIsImVsZW1lbnRDb250ZXh0IiwicG9wcGVyQWx0T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCJpbnZlcnREaXN0YW5jZSIsInNraWRkaW5nIiwiZGlzdGFuY2UiLCJfb3B0aW9ucyRvZmZzZXQiLCJfZGF0YSRzdGF0ZSRwbGFjZW1lbnQiLCJjb21wdXRlT2Zmc2V0cyIsIl9vcHRpb25zJHRldGhlciIsInRldGhlciIsIl9vcHRpb25zJHRldGhlck9mZnNldCIsInRldGhlck9mZnNldCIsInZhcmlhdGlvbiIsImdldEFsdEF4aXMiLCJ0ZXRoZXJPZmZzZXRWYWx1ZSIsIm1haW5TaWRlIiwiYWx0U2lkZSIsImFkZGl0aXZlIiwibWluTGVuIiwibWF4TGVuIiwiYXJyb3dQYWRkaW5nT2JqZWN0IiwiZ2V0RnJlc2hTaWRlT2JqZWN0IiwiYXJyb3dQYWRkaW5nTWluIiwiYXJyb3dQYWRkaW5nTWF4IiwiYXJyb3dMZW4iLCJtaW5PZmZzZXQiLCJtYXhPZmZzZXQiLCJjbGllbnRPZmZzZXQiLCJvZmZzZXRNb2RpZmllclZhbHVlIiwidGV0aGVyTWluIiwidGV0aGVyTWF4IiwicHJldmVudGVkT2Zmc2V0IiwibWF0aE1pbiIsIm1hdGhNYXgiLCJfbWFpblNpZGUiLCJfYWx0U2lkZSIsIl9vZmZzZXQiLCJfbWluIiwiX21heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJldmVudExpc3RlbmVycyIsIl9vcHRpb25zJGFsbG93ZWRBdXRvUCIsImFsbFBsYWNlbWVudHMiLCJhbGxvd2VkUGxhY2VtZW50cyIsIm92ZXJmbG93cyIsInNvcnQiLCJhIiwiYiIsImNvbW1vblgiLCJjb21tb25ZIiwicGVuZGluZyIsInVuZGVmaW5lZCIsIl9vcHRpb25zJHBsYWNlbWVudCIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiX29wdGlvbnMkYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRwYWRkaW5nIiwiYWx0Q29udGV4dCIsInJlZmVyZW5jZUVsZW1lbnQiLCJjbGlwcGluZ0NsaWVudFJlY3QiLCJyZWZlcmVuY2VDbGllbnRSZWN0IiwicG9wcGVyQ2xpZW50UmVjdCIsImVsZW1lbnRDbGllbnRSZWN0Iiwib3ZlcmZsb3dPZmZzZXRzIiwib2Zmc2V0RGF0YSIsImtleSIsIm11bHRpcGx5IiwiaGFzaE1hcCIsImZvcm1hdCIsInN0ciIsInAiLCJjIiwicmVwbGFjZSIsInNwbGl0IiwiaGFzaCIsIm1hdGNoZWQiLCJtZXJnZWQiLCJjdXJyZW50IiwiZXhpc3RpbmciLCJtYXAiLCJvcmRlciIsInZpc2l0ZWQiLCJTZXQiLCJyZXN1bHQiLCJhZGQiLCJkZXAiLCJoYXMiLCJkZXBNb2RpZmllciIsImFyciIsImlkZW50aWZpZXJzIiwiaXRlbSIsImlkZW50aWZpZXIiLCJJTlZBTElEX01PRElGSUVSX0VSUk9SIiwiTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SIiwiVkFMSURfUFJPUEVSVElFUyIsIlN0cmluZyIsImlzQXJyYXkiLCJzIiwicmVxdWlyZW1lbnQiLCJtb2QiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInRvVHlwZSIsIm9iaiIsImdldFVJRCIsInByZWZpeCIsImdldFNlbGVjdG9yIiwic2VsZWN0b3IiLCJocmVmQXR0ciIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsIk51bWJlciIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImNhbGxlZCIsImR1cmF0aW9uUGFkZGluZyIsImVtdWxhdGVkRHVyYXRpb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ0eXBlQ2hlY2tDb25maWciLCJleHBlY3RlZFR5cGVzIiwiY29uZmlnVHlwZXMiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJjb21wb25lbnROYW1lIiwiaXNWaXNpYmxlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiaXNEaXNhYmxlZCIsIk5vZGUiLCJmaW5kU2hhZG93Um9vdCIsInJvb3QiLCJub29wIiwicmVmbG93IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5Iiwib25ET01Db250ZW50TG9hZGVkIiwiY2FsbGJhY2siLCJpc1JUTCIsImRlZmluZUpRdWVyeVBsdWdpbiIsIiQiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJwbHVnaW4iLCJlbGVtZW50TWFwIiwiaW5zdGFuY2VNYXAiLCJyZW1vdmUiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwidWlkIiwiZ2V0VWlkRXZlbnQiLCJldmVudCIsImhhbmRsZXIiLCJFdmVudEhhbmRsZXIiLCJkb21FbGVtZW50cyIsImRlbGVnYXRpb25TZWxlY3RvciIsInVpZEV2ZW50TGlzdCIsImV2ZW50cyIsImRlbGVnYXRpb24iLCJvcmlnaW5hbEhhbmRsZXIiLCJ0eXBlRXZlbnQiLCJvcmlnaW5hbFR5cGVFdmVudCIsImN1c3RvbSIsImlzTmF0aXZlIiwiZGVsZWdhdGlvbkZuIiwibm9ybWFsaXplUGFyYW1zIiwiZ2V0RXZlbnQiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJmaW5kSGFuZGxlciIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiYm9vdHN0cmFwSGFuZGxlciIsIkJvb2xlYW4iLCJzdG9yZUVsZW1lbnRFdmVudCIsImhhbmRsZXJLZXkiLCJyZW1vdmVIYW5kbGVyIiwib24iLCJhZGRIYW5kbGVyIiwib25lIiwib2ZmIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsImVsZW1lbnRFdmVudCIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJqUXVlcnlFdmVudCIsImNhbmNlbGFibGUiLCJWRVJTSU9OIiwiY29uc3RydWN0b3IiLCJEYXRhIiwiZGlzcG9zZSIsImdldEluc3RhbmNlIiwiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiU0VMRUNUT1JfRElTTUlTUyIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJDTEFTU19OQU1FX0FMRVJUIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiX2dldFJvb3RFbGVtZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiX3JlbW92ZUVsZW1lbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJqUXVlcnlJbnRlcmZhY2UiLCJoYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsIkFsZXJ0IiwiQ0xBU1NfTkFNRV9BQ1RJVkUiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsInRvZ2dsZSIsImJ1dHRvbiIsInZhbCIsImNociIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsIm5vcm1hbGl6ZURhdGFLZXkiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJwdXJlS2V5Iiwibm9ybWFsaXplRGF0YSIsImdldERhdGFBdHRyaWJ1dGUiLCJOT0RFX1RFWFQiLCJTZWxlY3RvckVuZ2luZSIsImZpbmRPbmUiLCJjaGlsZHJlbiIsInBhcmVudHMiLCJhbmNlc3RvciIsInByZXYiLCJwcmV2aW91cyIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkVWRU5UX1NMSURFIiwiRVZFTlRfU0xJRCIsIkVWRU5UX0tFWURPV04iLCJFVkVOVF9NT1VTRUVOVEVSIiwiRVZFTlRfTU9VU0VMRUFWRSIsIkVWRU5UX1RPVUNIU1RBUlQiLCJFVkVOVF9UT1VDSE1PVkUiLCJFVkVOVF9UT1VDSEVORCIsIkVWRU5UX1BPSU5URVJET1dOIiwiRVZFTlRfUE9JTlRFUlVQIiwiRVZFTlRfRFJBR19TVEFSVCIsIkVWRU5UX0xPQURfREFUQV9BUEkiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfRU5EIiwiQ0xBU1NfTkFNRV9TVEFSVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIkNMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfTkVYVF9QUkVWIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0lORElDQVRPUiIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJQT0lOVEVSX1RZUEVfVE9VQ0giLCJQT0lOVEVSX1RZUEVfUEVOIiwibmV4dFdoZW5WaXNpYmxlIiwiY2xlYXJJbnRlcnZhbCIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJ0byIsImFjdGl2ZUluZGV4IiwiX2dldENvbmZpZyIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwibW92ZSIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJlIiwiX2tleWRvd24iLCJfZ2V0SXRlbUluZGV4IiwiX2dldEl0ZW1CeU9yZGVyIiwiaXNOZXh0IiwiaXNQcmV2IiwibGFzdEl0ZW1JbmRleCIsImlzR29pbmdUb1dyYXAiLCJkZWx0YSIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiYWN0aXZlSW5kaWNhdG9yIiwiaW5kaWNhdG9ycyIsIl91cGRhdGVJbnRlcnZhbCIsImVsZW1lbnRJbnRlcnZhbCIsIl9zbGlkZSIsImFjdGl2ZUVsZW1lbnQiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiZXZlbnREaXJlY3Rpb25OYW1lIiwic2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJfZGlyZWN0aW9uVG9PcmRlciIsIl9vcmRlclRvRGlyZWN0aW9uIiwiY2Fyb3VzZWxJbnRlcmZhY2UiLCJfY29uZmlnIiwiYWN0aW9uIiwiQ2Fyb3VzZWwiLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkVWRU5UX0hJREUiLCJFVkVOVF9ISURERU4iLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJXSURUSCIsIkhFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiY29udGFpbmVyIiwidGVtcEFjdGl2ZURhdGEiLCJhY3RpdmVzRGF0YSIsInN0YXJ0RXZlbnQiLCJlbGVtQWN0aXZlIiwiQ29sbGFwc2UiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsInNldFRyYW5zaXRpb25pbmciLCJfZ2V0RGltZW5zaW9uIiwiX2dldFBhcmVudCIsInNlbGVjdGVkIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsImNvbGxhcHNlSW50ZXJmYWNlIiwidHJpZ2dlckRhdGEiLCJzZWxlY3RvckVsZW1lbnRzIiwiRVNDQVBFX0tFWSIsIlNQQUNFX0tFWSIsIlRBQl9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIlJFR0VYUF9LRVlET1dOIiwiRVZFTlRfQ0xJQ0siLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX0RJU0FCTEVEIiwiQ0xBU1NfTkFNRV9EUk9QVVAiLCJDTEFTU19OQU1FX0RST1BFTkQiLCJDTEFTU19OQU1FX0RST1BTVEFSVCIsIkNMQVNTX05BTUVfTkFWQkFSIiwiU0VMRUNUT1JfTUVOVSIsIlNFTEVDVE9SX05BVkJBUl9OQVYiLCJTRUxFQ1RPUl9WSVNJQkxFX0lURU1TIiwiUExBQ0VNRU5UX1RPUCIsIlBMQUNFTUVOVF9UT1BFTkQiLCJQTEFDRU1FTlRfQk9UVE9NIiwiUExBQ0VNRU5UX0JPVFRPTUVORCIsIlBMQUNFTUVOVF9SSUdIVCIsIlBMQUNFTUVOVF9MRUZUIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsImlzQWN0aXZlIiwiRHJvcGRvd24iLCJfZWxlbWVudCIsInNob3dFdmVudCIsImlzRGlzcGxheVN0YXRpYyIsIlBvcHBlciIsImhpZGVFdmVudCIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2RldGVjdE5hdmJhciIsIl9nZXRPZmZzZXQiLCJwb3BwZXJEYXRhIiwiX2dldFBvcHBlckNvbmZpZyIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsImRyb3Bkb3duSW50ZXJmYWNlIiwiY2xlYXJNZW51cyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiZHJvcGRvd25NZW51IiwiZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImJhY2tkcm9wIiwiZm9jdXMiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX0ZPQ1VTSU4iLCJFVkVOVF9SRVNJWkUiLCJFVkVOVF9DTElDS19ESVNNSVNTIiwiRVZFTlRfS0VZRE9XTl9ESVNNSVNTIiwiRVZFTlRfTU9VU0VVUF9ESVNNSVNTIiwiRVZFTlRfTU9VU0VET1dOX0RJU01JU1MiLCJDTEFTU19OQU1FX1NDUk9MTEJBUl9NRUFTVVJFUiIsIkNMQVNTX05BTUVfQkFDS0RST1AiLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX1NUQVRJQyIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX0RJU01JU1MiLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJpc0FuaW1hdGVkIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfZW5mb3JjZUZvY3VzIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX2hpZGVNb2RhbCIsIl9yZW1vdmVCYWNrZHJvcCIsIl9zaG93QmFja2Ryb3AiLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsImNhbGxiYWNrUmVtb3ZlIiwiX2lzQW5pbWF0ZWQiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsImlzTW9kYWxPdmVyZmxvd2luZyIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwiX2FkanVzdERpYWxvZyIsIl9zY3JvbGxiYXJXaWR0aCIsIl9yZXNldEFkanVzdG1lbnRzIiwiX2NoZWNrU2Nyb2xsYmFyIiwiX3NldFNjcm9sbGJhciIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImFjdHVhbFZhbHVlIiwiX3Jlc2V0U2Nyb2xsYmFyIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsIkNMQVNTX05BTUVfQkFDS0RST1BfQk9EWSIsIkNMQVNTX05BTUVfVE9HR0xJTkciLCJPUEVOX1NFTEVDVE9SIiwiQUNUSVZFX1NFTEVDVE9SIiwic2Nyb2xsQmFySGlkZSIsImNvbXBsZXRlQ2FsbEJhY2siLCJjb21wbGV0ZUNhbGxiYWNrIiwic2Nyb2xsQmFyUmVzZXQiLCJfZW5mb3JjZUZvY3VzT25FbGVtZW50IiwiYWxsUmVhZHlPcGVuIiwiZWwiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhdHRyTmFtZSIsImF0dHIiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsInJlZ0V4cCIsImF0dHJSZWdleCIsIkRlZmF1bHRBbGxvd2xpc3QiLCJhcmVhIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwcmUiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGbiIsImRvbVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsImFsbG93bGlzdEtleXMiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJhbGxvd0xpc3QiLCJDTEFTU19QUkVGSVgiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJjdXN0b21DbGFzcyIsInNhbml0aXplIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJFdmVudCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJDTEFTU19OQU1FX01PREFMIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJ0aXAiLCJ0aXBJZCIsImF0dGFjaG1lbnQiLCJwcmV2SG92ZXJTdGF0ZSIsImlzV2l0aENvbnRlbnQiLCJnZXRUaXBFbGVtZW50Iiwic2V0Q29udGVudCIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsInNhbml0aXplSHRtbCIsImdldFRpdGxlIiwidXBkYXRlQXR0YWNobWVudCIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJkYXRhS2V5IiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyIiwiX2dldERlbGVnYXRlQ29uZmlnIiwiX2NsZWFuVGlwQ2xhc3MiLCJ0YWJDbGFzcyIsInRva2VuIiwidENsYXNzIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsIlRvb2x0aXAiLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIkVWRU5UX0FDVElWQVRFIiwiRVZFTlRfU0NST0xMIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwiU0VMRUNUT1JfREFUQV9TUFkiLCJTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIlNFTEVDVE9SX05BVl9JVEVNUyIsIlNFTEVDVE9SX0xJU1RfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIk1FVEhPRF9PRkZTRVQiLCJNRVRIT0RfUE9TSVRJT04iLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsIm1heFNjcm9sbCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsImxpbmsiLCJsaXN0R3JvdXAiLCJuYXZJdGVtIiwiX2NsZWFyIiwic3B5IiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VIiwiU0VMRUNUT1JfQUNUSVZFX1VMIiwiU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJhY3RpdmVFbGVtZW50cyIsImFjdGl2ZSIsImlzVHJhbnNpdGlvbmluZyIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd24iLCJDTEFTU19OQU1FX0hJREUiLCJDTEFTU19OQU1FX1NIT1dJTkciLCJhdXRvaGlkZSIsIl9jbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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UCxHQURPO0FBRVAsU0FBRzZHLFdBQVcsQ0FBWEEsa0JBQThCLEtBRjFCLFFBRUpBLENBRkk7QUFHUCxVQUFJLGdEQUFKO0FBSE8sS0FBVDdHO0FBTUFILG1CQUFlLGVBQWUsaUJBQTlCQSxXQUFlLENBQWZBO0FBRUE7QUFDRDs7QUFFRDZkLGVBQWEsR0FBRztBQUNkcmIsZ0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLHNEQUEyRSxNQUFNLEtBQWpGQSxJQUFpRixFQUFqRkE7QUFDRDs7QUFFRDBmLGVBQWEsR0FBRztBQUNkeFcsZ0JBQVksQ0FBQyxLQUFiQSxRQUFZLENBQVpBO0FBQ0E7QUE1SDhCOzs7QUFpSVYsU0FBZnBGLGVBQWUsU0FBUztBQUM3QixXQUFPLFVBQVUsWUFBWTtBQUMzQixVQUFJamdCLElBQUksR0FBRzRlLElBQUksQ0FBSkEsVUFBWCxRQUFXQSxDQUFYOztBQUNBLFlBQU00SSxPQUFPLEdBQUcsOEJBQWhCOztBQUVBLFVBQUksQ0FBSixNQUFXO0FBQ1R4bkIsWUFBSSxHQUFHLGdCQUFQQSxPQUFPLENBQVBBO0FBQ0Q7O0FBRUQsVUFBSSxrQkFBSixVQUFnQztBQUM5QixZQUFJLE9BQU9BLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxnQkFBTSxjQUFlLG9CQUFtQjhaLE1BQXhDLEdBQU0sQ0FBTjtBQUNEOztBQUVEOVosWUFBSSxDQUFKQSxNQUFJLENBQUpBO0FBQ0Q7QUFkSCxLQUFPLENBQVA7QUFnQkQ7O0FBbEorQjtBQXFKbEM7Ozs7Ozs7O0FBT0ErYSxrQkFBa0IsT0FBbEJBLEtBQWtCLENBQWxCQTs7Ozs7Ozs7Ozs7OztBQ3hOQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wXG4gIH07XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3csIGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJCYXNlIH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHJvdW5kKHggKiBkcHIpIC8gZHByKSB8fCAwLFxuICAgIHk6IHJvdW5kKHJvdW5kKHkgKiBkcHIpIC8gZHByKSB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHM7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3ApIHtcbiAgICAgIHNpZGVZID0gYm90dG9tOyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeSAtPSBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF0gLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB4IC09IG9mZnNldFBhcmVudFt3aWR0aFByb3BdIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDwgMiA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5U3R5bGVzIH0gZnJvbSBcIi4vYXBwbHlTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyb3cgfSBmcm9tIFwiLi9hcnJvdy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wdXRlU3R5bGVzIH0gZnJvbSBcIi4vY29tcHV0ZVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsaXAgfSBmcm9tIFwiLi9mbGlwLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhpZGUgfSBmcm9tIFwiLi9oaWRlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9mZnNldCB9IGZyb20gXCIuL29mZnNldC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3BwZXJPZmZzZXRzIH0gZnJvbSBcIi4vcG9wcGVyT2Zmc2V0cy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV2ZW50T3ZlcmZsb3cgfSBmcm9tIFwiLi9wcmV2ZW50T3ZlcmZsb3cuanNcIjsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF0aE1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlc107XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xuaW1wb3J0IG9mZnNldCBmcm9tIFwiLi9tb2RpZmllcnMvb2Zmc2V0LmpzXCI7XG5pbXBvcnQgZmxpcCBmcm9tIFwiLi9tb2RpZmllcnMvZmxpcC5qc1wiO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4vbW9kaWZpZXJzL2Fycm93LmpzXCI7XG5pbXBvcnQgaGlkZSBmcm9tIFwiLi9tb2RpZmllcnMvaGlkZS5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZUVsZW1lbnQpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcXVlQnkoYXJyLCBmbikge1xuICB2YXIgaWRlbnRpZmllcnMgPSBuZXcgU2V0KCk7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBmbihpdGVtKTtcblxuICAgIGlmICghaWRlbnRpZmllcnMuaGFzKGlkZW50aWZpZXIpKSB7XG4gICAgICBpZGVudGlmaWVycy5hZGQoaWRlbnRpZmllcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCBmb3JtYXQgZnJvbSBcIi4vZm9ybWF0LmpzXCI7XG5pbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfTU9ESUZJRVJfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcHJvdmlkZWQgYW4gaW52YWxpZCAlcyBwcm9wZXJ0eSwgZXhwZWN0ZWQgJXMgYnV0IGdvdCAlcyc7XG52YXIgTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHJlcXVpcmVzIFwiJXNcIiwgYnV0IFwiJXNcIiBtb2RpZmllciBpcyBub3QgYXZhaWxhYmxlJztcbnZhciBWQUxJRF9QUk9QRVJUSUVTID0gWyduYW1lJywgJ2VuYWJsZWQnLCAncGhhc2UnLCAnZm4nLCAnZWZmZWN0JywgJ3JlcXVpcmVzJywgJ29wdGlvbnMnXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBPYmplY3Qua2V5cyhtb2RpZmllcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksICdcIm5hbWVcIicsICdcInN0cmluZ1wiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIubmFtZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlbmFibGVkXCInLCAnXCJib29sZWFuXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5lbmFibGVkKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXJQaGFzZXMuaW5kZXhPZihtb2RpZmllci5waGFzZSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJwaGFzZVwiJywgXCJlaXRoZXIgXCIgKyBtb2RpZmllclBoYXNlcy5qb2luKCcsICcpLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5waGFzZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZuJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJmblwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZWZmZWN0JzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVmZmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZWZmZWN0XCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlcyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufSIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iaiA9PiB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqfWBcbiAgfVxuXG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgbGV0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgaWYgKCFocmVmQXR0ciB8fCAoIWhyZWZBdHRyLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyLnN0YXJ0c1dpdGgoJy4nKSkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgaWYgKGhyZWZBdHRyLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaHJlZkF0dHIgPSAnIycgKyBocmVmQXR0ci5zcGxpdCgnIycpWzFdXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbmNvbnN0IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgZ2V0RWxlbWVudEZyb21TZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqID0+IChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuXG5jb25zdCBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZHVyYXRpb24gKyBkdXJhdGlvblBhZGRpbmdcblxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcilcbiAgfVxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuY29uc3QgdHlwZUNoZWNrQ29uZmlnID0gKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpID0+IHtcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgIClcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChlbGVtZW50LnN0eWxlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuc3R5bGUpIHtcbiAgICBjb25zdCBlbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgY29uc3QgcGFyZW50Tm9kZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICByZXR1cm4gZWxlbWVudFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgICAgcGFyZW50Tm9kZVN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgICAgZWxlbWVudFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IGZ1bmN0aW9uICgpIHt9XG5cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4gZWxlbWVudC5vZmZzZXRIZWlnaHRcblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCB7IGpRdWVyeSB9ID0gd2luZG93XG5cbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4galF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gKG5hbWUsIHBsdWdpbikgPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQge1xuICBnZXRVSUQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgaXNFbGVtZW50LFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnLFxuICBpc1Zpc2libGUsXG4gIGlzRGlzYWJsZWQsXG4gIGZpbmRTaGFkb3dSb290LFxuICBub29wLFxuICByZWZsb3csXG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBpc1JUTCxcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpXG4gIH0sXG5cbiAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KVxuXG4gICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gZ2V0VWlkRXZlbnQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50XG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0YXJnZXRcblxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vY29uc2lzdGVudC1kZXN0cnVjdHVyaW5nXG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dXG5cbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICBjb25zdCBkZWxlZ2F0aW9uID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIGNvbnN0IG9yaWdpbmFsSGFuZGxlciA9IGRlbGVnYXRpb24gPyBkZWxlZ2F0aW9uRm4gOiBoYW5kbGVyXG5cbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBsZXQgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUV2ZW50c1t0eXBlRXZlbnRdXG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIHR5cGVFdmVudCA9IGN1c3RvbVxuICB9XG5cbiAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICBpZiAoIWlzTmF0aXZlKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbFxuICB9XG5cbiAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0ZuID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0ZuKSB7XG4gICAgcHJldmlvdXNGbi5vbmVPZmYgPSBwcmV2aW91c0ZuLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQob3JpZ2luYWxIYW5kbGVyLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gZGVsZWdhdGlvbiA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbFxuICBmbi5vcmlnaW5hbEhhbmRsZXIgPSBvcmlnaW5hbEhhbmRsZXJcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBkZWxlZ2F0aW9uKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGhhbmRsZXJLZXkgPT4ge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRbaGFuZGxlcktleV1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsSGFuZGxlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFldmVudHMgfHwgIWV2ZW50c1t0eXBlRXZlbnRdKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGVsZW1lbnRFdmVudCA9PiB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChrZXlIYW5kbGVycyA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2tleUhhbmRsZXJzXVxuXG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgICBsZXQgalF1ZXJ5RXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIGxldCBldnQgPSBudWxsXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGlmIChpc05hdGl2ZSkge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgZXZ0LmluaXRFdmVudCh0eXBlRXZlbnQsIGJ1YmJsZXMsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZW9mIGpRdWVyeUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMC4wLWJldGEzJ1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudFxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8qKiBTdGF0aWMgKi9cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChlbGVtZW50LCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgU0VMRUNUT1JfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwiYWxlcnRcIl0nXG5cbmNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0FMRVJUID0gJ2FsZXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZWxlbWVudCA/IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIDogdGhpcy5fZWxlbWVudFxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQgPT09IG51bGwgfHwgY3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9BTEVSVH1gKVxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICBFdmVudEhhbmRsZXIub25lKGVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCkpXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9DTE9TRUQpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9ESVNNSVNTLCBBbGVydC5oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkFsZXJ0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdidXR0b24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICBsZXQgZGF0YSA9IERhdGEuZ2V0KGJ1dHRvbiwgREFUQV9LRVkpXG4gIGlmICghZGF0YSkge1xuICAgIGRhdGEgPSBuZXcgQnV0dG9uKGJ1dHRvbilcbiAgfVxuXG4gIGRhdGEudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5CdXR0b24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgQnV0dG9uKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWwgPT09IE51bWJlcih2YWwpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbClcbiAgfVxuXG4gIGlmICh2YWwgPT09ICcnIHx8IHZhbCA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgICAgfSlcblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfSxcblxuICBvZmZzZXQoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gICAgfVxuICB9LFxuXG4gIHBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTk9ERV9URVhUID0gM1xuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbilcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IgJiYgYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIGFuY2VzdG9yLm5vZGVUeXBlICE9PSBOT0RFX1RFWFQpIHtcbiAgICAgIGlmIChhbmNlc3Rvci5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICB9XG5cbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiBmYWxzZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHdyYXA6IHRydWUsXG4gIHRvdWNoOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzbGlkZTogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB3cmFwOiAnYm9vbGVhbicsXG4gIHRvdWNoOiAnYm9vbGVhbidcbn1cblxuY29uc3QgT1JERVJfTkVYVCA9ICduZXh0J1xuY29uc3QgT1JERVJfUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfTkVYVF9QUkVWID0gJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SID0gJ1tkYXRhLWJzLXRhcmdldF0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2l0ZW1zID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl90b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gICAgdGhpcy5fcG9pbnRlckV2ZW50ID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ORVhUX1BSRVYsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggP1xuICAgICAgT1JERVJfTkVYVCA6XG4gICAgICBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2l0ZW1zID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGxcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiA+IDAgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVClcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsIGV2ZW50ID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsIGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCkpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAgIDAgOlxuICAgICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCkpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpLmZvckVhY2goaXRlbUltZyA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaXRlbUltZywgRVZFTlRfRFJBR19TVEFSVCwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IG1vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiBlbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19MRUZUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX0xFRlQpXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1JJR0hUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX1JJR0hUKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCBlbGVtZW50LnBhcmVudE5vZGUpIDpcbiAgICAgIFtdXG5cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBpc1ByZXYgPSBvcmRlciA9PT0gT1JERVJfUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwID0gKGlzUHJldiAmJiBhY3RpdmVJbmRleCA9PT0gMCkgfHwgKGlzTmV4dCAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleClcblxuICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSA9IGlzUHJldiA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgP1xuICAgICAgdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOlxuICAgICAgdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpKVxuXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lORElDQVRPUiwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGluZGljYXRvcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyksIDEwKSA9PT0gdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpKSB7XG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgICAgIGluZGljYXRvcnNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb25Pck9yZGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbk9yT3JkZXIpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG4gICAgY29uc3QgZXZlbnREaXJlY3Rpb25OYW1lID0gdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlcilcblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUoYWN0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMClcbiAgICAgIH0pXG5cbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGFjdGl2ZUVsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmICghW0RJUkVDVElPTl9SSUdIVCwgRElSRUNUSU9OX0xFRlRdLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1JJR0hUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUklHSFQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoIVtPUkRFUl9ORVhULCBPUkRFUl9QUkVWXS5pbmNsdWRlcyhvcmRlcikpIHtcbiAgICAgIHJldHVybiBvcmRlclxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX05FWFQgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfTkVYVCA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY2Fyb3VzZWxJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICBkYXRhLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRhcmdldCwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIERhdGEuZ2V0KHRhcmdldCwgREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UoY2Fyb3VzZWxzW2ldLCBEYXRhLmdldChjYXJvdXNlbHNbaV0sIERBVEFfS0VZKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkNhcm91c2VsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc0VsZW1lbnQsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZTogdHJ1ZSxcbiAgcGFyZW50OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdG9nZ2xlOiAnYm9vbGVhbicsXG4gIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcblxuY29uc3QgV0lEVEggPSAnd2lkdGgnXG5jb25zdCBIRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5zaG93LCAuY29sbGFwc2luZydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBTZWxlY3RvckVuZ2luZS5maW5kKFxuICAgICAgYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2hyZWY9XCIjJHt0aGlzLl9lbGVtZW50LmlkfVwiXSxgICtcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtkYXRhLWJzLXRhcmdldD1cIiMke3RoaXMuX2VsZW1lbnQuaWR9XCJdYFxuICAgIClcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0b2dnbGVMaXN0W2ldXG4gICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgICAgICAuZmlsdGVyKGZvdW5kRWxlbSA9PiBmb3VuZEVsZW0gPT09IHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRVMsIHRoaXMuX3BhcmVudClcbiAgICAgICAgLmZpbHRlcihlbGVtID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0aGlzLl9zZWxlY3RvcilcbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgY29uc3QgdGVtcEFjdGl2ZURhdGEgPSBhY3RpdmVzLmZpbmQoZWxlbSA9PiBjb250YWluZXIgIT09IGVsZW0pXG4gICAgICBhY3RpdmVzRGF0YSA9IHRlbXBBY3RpdmVEYXRhID8gRGF0YS5nZXQodGVtcEFjdGl2ZURhdGEsIERBVEFfS0VZKSA6IG51bGxcblxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXMuZm9yRWFjaChlbGVtQWN0aXZlID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gZWxlbUFjdGl2ZSkge1xuICAgICAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1BY3RpdmUsICdoaWRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICBEYXRhLnNldChlbGVtQWN0aXZlLCBEQVRBX0tFWSwgbnVsbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGhcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgICAgaWYgKGVsZW0gJiYgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhXSURUSCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgeyBwYXJlbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGlzRWxlbWVudChwYXJlbnQpKSB7XG4gICAgICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiBwYXJlbnQuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgcGFyZW50WzBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShwYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy1wYXJlbnQ9XCIke3BhcmVudH1cIl1gXG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCBwYXJlbnQpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzT3BlbiA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IChldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRhdGEgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG5cbiAgc2VsZWN0b3JFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBsZXQgY29uZmlnXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgYXR0cmlidXRlXG4gICAgICBpZiAoZGF0YS5fcGFyZW50ID09PSBudWxsICYmIHR5cGVvZiB0cmlnZ2VyRGF0YS5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGRhdGEuX2NvbmZpZy5wYXJlbnQgPSB0cmlnZ2VyRGF0YS5wYXJlbnRcbiAgICAgICAgZGF0YS5fcGFyZW50ID0gZGF0YS5fZ2V0UGFyZW50KClcbiAgICAgIH1cblxuICAgICAgY29uZmlnID0gJ3RvZ2dsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gdHJpZ2dlckRhdGFcbiAgICB9XG5cbiAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ29sbGFwc2UgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRWxlbWVudCxcbiAgaXNWaXNpYmxlLFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgU1BBQ0VfS0VZID0gJ1NwYWNlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgUkVHRVhQX0tFWURPV04gPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWX18JHtBUlJPV19ET1dOX0tFWX18JHtFU0NBUEVfS0VZfWApXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9ESVNBQkxFRCA9ICdkaXNhYmxlZCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05BVkJBUiA9ICduYXZiYXInXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IFswLCAyXSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpIHx8IHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUb3RhbGx5IGRpc2FibGUgUG9wcGVyIGZvciBEcm9wZG93bnMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnbm9uZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudFxuICAgICAgfSBlbHNlIGlmIChpc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKClcbiAgICAgIGNvbnN0IGlzRGlzcGxheVN0YXRpYyA9IHBvcHBlckNvbmZpZy5tb2RpZmllcnMuZmluZChtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZXMnICYmIG1vZGlmaWVyLmVuYWJsZWQgPT09IGZhbHNlKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZylcblxuICAgICAgaWYgKGlzRGlzcGxheVN0YXRpYykge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICFwYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9uKGVsZW0sICdtb3VzZW92ZXInLCBudWxsLCBub29wKCkpKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgIXRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gICAgdGhpcy5fbWVudSA9IG51bGxcblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0ssIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJ1xuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT01cbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9OQVZCQVJ9YCkgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuICAgIGlmICh0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgZHJvcGRvd25JbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24oZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERhdGEuZ2V0KHRvZ2dsZXNbaV0sIERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCF0b2dnbGVzW2ldLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSB0aGUgbWVudSBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IG9yIG9uZSBvZiBpdHMgcGFyZW50cyBpcyB0aGUgZHJvcGRvd24gYnV0dG9uXG4gICAgICAgIGlmIChbY29udGV4dC5fZWxlbWVudF0uc29tZShlbGVtZW50ID0+IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGVsZW1lbnQpKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkgJiYgZHJvcGRvd25NZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRvZ2dsZXNbaV0sIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKSlcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICBpZiAoY29udGV4dC5fcG9wcGVyKSB7XG4gICAgICAgIGNvbnRleHQuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdG9nZ2xlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZHJvcGRvd25NZW51LCAncG9wcGVyJylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRvZ2dsZXNbaV0sIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgP1xuICAgICAgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkgfHwgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSAmJlxuICAgICAgKChldmVudC5rZXkgIT09IEFSUk9XX0RPV05fS0VZICYmIGV2ZW50LmtleSAhPT0gQVJST1dfVVBfS0VZKSB8fFxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKSkpIDpcbiAgICAgICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID8gdGhpcyA6IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdXG4gICAgICBidXR0b24uZm9jdXMoKVxuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuICAgICAgYnV0dG9uLmNsaWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgfHwgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkpIHtcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHBhcmVudCkuZmlsdGVyKGlzVmlzaWJsZSlcblxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIC8vIFVwXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfVVBfS0VZICYmIGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLVxuICAgIH1cblxuICAgIC8vIERvd25cbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19ET1dOX0tFWSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICAvLyBpbmRleCBpcyAtMSBpZiB0aGUgZmlyc3Qga2V5ZG93biBpcyBhbiBBcnJvd1VwXG4gICAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyAwIDogaW5kZXhcblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuRHJvcGRvd24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGlzVmlzaWJsZSxcbiAgaXNSVEwsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgZm9jdXM6ICdib29sZWFuJ1xufVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIgPSAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ21vZGFsLWJhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKClcbiAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCBldmVudCA9PiB0aGlzLmhpZGUoZXZlbnQpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBldmVudCA9PiB0aGlzLl9oaWRlTW9kYWwoZXZlbnQpKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKSlcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgPSBudWxsXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IG51bGxcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IG51bGxcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZGlhbG9nLCAndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2RpYWxvZywgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgIHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB0aGlzLl9hZGp1c3REaWFsb2coKSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csIEVWRU5UX1JFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2JhY2tkcm9wKVxuICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICB9XG5cbiAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcblxuICAgICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICAgIHJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIGlmICghaXNBbmltYXRlZCkge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2JhY2tkcm9wLCAndHJhbnNpdGlvbmVuZCcsIGNhbGxiYWNrKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fYmFja2Ryb3AsIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fYmFja2Ryb3AsICd0cmFuc2l0aW9uZW5kJywgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2JhY2tkcm9wLCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgY29uc3QgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcpXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnJ1xuICAgICAgICB9KVxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH1cbiAgICB9KVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICgoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8ICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpXG4gIH1cblxuICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aClcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gdGhpcy5fc2Nyb2xsYmFyV2lkdGgpXG4gICAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGgpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wLCBjYWxsYmFjaykge1xuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3N0eWxlUHJvcF1cbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKSArICdweCdcbiAgICAgIH0pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JylcbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3ApIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKSxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGxldCBkYXRhID0gRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSlcbiAgaWYgKCFkYXRhKSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0KSxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpXG4gICAgfVxuXG4gICAgZGF0YSA9IG5ldyBNb2RhbCh0YXJnZXQsIGNvbmZpZylcbiAgfVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuTW9kYWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IHV0aWwvc2Nyb2xsQmFyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yJ1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbn1cblxuY29uc3QgaGlkZSA9ICh3aWR0aCA9IGdldFdpZHRoKCkpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbn1cblxuY29uc3QgX3NldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3AsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0V2lkdGgoKVxuICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcCwgYWN0dWFsVmFsdWUpXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKSArICdweCdcbiAgICB9KVxufVxuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJ1xuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcpXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcpXG59XG5cbmNvbnN0IF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3ApID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wKVxuICAgIH0gZWxzZSB7XG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXSA9IHZhbHVlXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9ICgpID0+IHtcbiAgcmV0dXJuIGdldFdpZHRoKCkgPiAwXG59XG5cbmV4cG9ydCB7XG4gIGdldFdpZHRoLFxuICBoaWRlLFxuICBpc0JvZHlPdmVyZmxvd2luZyxcbiAgcmVzZXRcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGUsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgeyBoaWRlIGFzIHNjcm9sbEJhckhpZGUsIHJlc2V0IGFzIHNjcm9sbEJhclJlc2V0IH0gZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnYm9vbGVhbicsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1BfQk9EWSA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfVE9HR0xJTkcgPSAnb2ZmY2FudmFzLXRvZ2dsaW5nJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5jb25zdCBBQ1RJVkVfU0VMRUNUT1IgPSBgJHtPUEVOX1NFTEVDVE9SfSwgLiR7Q0xBU1NfTkFNRV9UT0dHTElOR31gXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm9mZmNhbnZhc1wiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9CQUNLRFJPUF9CT0RZKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgc2Nyb2xsQmFySGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfVE9HR0xJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1RPR0dMSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzT25FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgc2V0VGltZW91dChjb21wbGV0ZUNhbGxCYWNrLCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9UT0dHTElORylcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9CQUNLRFJPUF9CT0RZKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsQmFyUmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9UT0dHTElORylcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGNvbXBsZXRlQ2FsbGJhY2ssIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXNPbkVsZW1lbnQoZWxlbWVudCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICFlbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgICBlbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KSlcbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHRhcmdldCAhPT0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxsUmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShBQ1RJVkVfU0VMRUNUT1IpXG4gIGlmIChhbGxSZWFkeU9wZW4gJiYgYWxsUmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0YXJnZXQsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpLmZvckVhY2goZWwgPT4gKERhdGEuZ2V0KGVsLCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyhlbCkpLnNob3coKSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihOQU1FLCBPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gbmV3IFNldChbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dKVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW1xcZCsvYS16XSs9KiQvaVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gIGNvbnN0IGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJOYW1lKSkge1xuICAgIGlmICh1cmlBdHRycy5oYXMoYXR0ck5hbWUpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyLm5vZGVWYWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyUmVnZXggPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnRXhwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHJlZ0V4cFtpXS50ZXN0KGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRm4pIHtcbiAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IGFsbG93bGlzdEtleXMgPSBPYmplY3Qua2V5cyhhbGxvd0xpc3QpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKCFhbGxvd2xpc3RLZXlzLmluY2x1ZGVzKGVsTmFtZSkpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxOYW1lXSB8fCBbXSlcblxuICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIG5vb3AsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQge1xuICBEZWZhdWx0QWxsb3dsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi91dGlsL3Nhbml0aXplcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCdcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZycsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGU6ICcnLFxuICBkZWxheTogMCxcbiAgaHRtbDogZmFsc2UsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjdXN0b21DbGFzczogJycsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBIT1ZFUl9TVEFURV9TSE9XID0gJ3Nob3cnXG5jb25zdCBIT1ZFUl9TVEFURV9PVVQgPSAnb3V0J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuXG5jb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIC8vIHByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXAgJiYgdGhpcy50aXAucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy50aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRpcClcbiAgICB9XG5cbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLmNvbmZpZyA9IG51bGxcbiAgICB0aGlzLnRpcCA9IG51bGxcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNJblRoZURvbSA9IHNoYWRvd1Jvb3QgPT09IG51bGwgP1xuICAgICAgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLl9lbGVtZW50KSA6XG4gICAgICBzaGFkb3dSb290LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5fZWxlbWVudCkgOlxuICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICBjb25zdCBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKVxuICAgIERhdGEuc2V0KHRpcCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCkpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXApXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdHlwZW9mIHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcuY3VzdG9tQ2xhc3MoKSA6IHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzXG4gICAgaWYgKGN1c3RvbUNsYXNzKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZCguLi5jdXN0b21DbGFzcy5zcGxpdCgnICcpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCgpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLnRpcCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMudGlwLCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fcG9wcGVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhPVkVSX1NUQVRFX1NIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcblxuICAgIGlmICh0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRpcCwgJ3RyYW5zaXRpb25lbmQnLCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRpcCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmNvbmZpZy50ZW1wbGF0ZVxuXG4gICAgdGhpcy50aXAgPSBlbGVtZW50LmNoaWxkcmVuWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiBpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIGlmIChjb250ZW50LmpxdWVyeSkge1xuICAgICAgICBjb250ZW50ID0gY29udGVudFswXVxuICAgICAgfVxuXG4gICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmIChjb250ZW50LnBhcmVudE5vZGUgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudC50ZXh0Q29udGVudFxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcuYWxsb3dMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5fZWxlbWVudCkgOlxuICAgICAgICB0aGlzLmNvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgdXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KSB7XG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAnZW5kJ1xuICAgIH1cblxuICAgIGlmIChhdHRhY2htZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHJldHVybiAnc3RhcnQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnRcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICAgICAgRGF0YS5zZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsID0+IE51bWJlci5wYXJzZUludCh2YWwsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYWx0Qm91bmRhcnk6IHRydWUsXG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvbkNoYW5nZScsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25GaXJzdFVwZGF0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm9wdGlvbnMucGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLmNvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy5jb25maWcuY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnRhaW5lclxuICAgIH1cblxuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy50b2dnbGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2VudGVyKGV2ZW50KSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGl0bGUgfHwgb3JpZ2luYWxUaXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlIHx8ICcnKVxuICAgICAgaWYgKHRpdGxlICYmICF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0LmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9PVVRcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykuZm9yRWFjaChkYXRhQXR0ciA9PiB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cikpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuY29udGFpbmVyID09PSAnb2JqZWN0JyAmJiBjb25maWcuY29udGFpbmVyLmpxdWVyeSkge1xuICAgICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJbMF1cbiAgICB9XG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcuYWxsb3dMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpXG4gICAgICAgIC5mb3JFYWNoKHRDbGFzcyA9PiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHBvcHBlckRhdGFcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudGlwID0gc3RhdGUuZWxlbWVudHMucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQoc3RhdGUucGxhY2VtZW50KSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvb2x0aXAgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTkFNRSwgVG9vbHRpcClcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTMpOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBvZmZzZXQ6IFswLCA4XSxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgY29udGVudDogJycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG5cbiAgICAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RJVExFLCB0aXApLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KClcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQ09OVEVOVCwgdGlwKSwgY29udGVudClcblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWNvbnRlbnQnKSB8fCB0aGlzLmNvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpXG4gICAgICAgIC5mb3JFYWNoKHRDbGFzcyA9PiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgIERhdGEuc2V0KHRoaXMsIERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Qb3BvdmVyIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGEzKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRWxlbWVudCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiAxMCxcbiAgbWV0aG9kOiAnYXV0bycsXG4gIHRhcmdldDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJ251bWJlcicsXG4gIG1ldGhvZDogJ3N0cmluZycsXG4gIHRhcmdldDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0NST0xMID0gYHNjcm9sbCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgTUVUSE9EX09GRlNFVCA9ICdvZmZzZXQnXG5jb25zdCBNRVRIT0RfUE9TSVRJT04gPSAncG9zaXRpb24nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gdGhpcy5fZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9zZWxlY3RvciA9IGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX0xJU1RfSVRFTVN9LCAke3RoaXMuX2NvbmZpZy50YXJnZXR9IC4ke0NMQVNTX05BTUVfRFJPUERPV05fSVRFTX1gXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDBcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9TQ1JPTEwsICgpID0+IHRoaXMuX3Byb2Nlc3MoKSlcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5fcHJvY2VzcygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgP1xuICAgICAgTUVUSE9EX09GRlNFVCA6XG4gICAgICBNRVRIT0RfUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/XG4gICAgICBhdXRvTWV0aG9kIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTiA/XG4gICAgICB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6XG4gICAgICAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IpXG5cbiAgICB0YXJnZXRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0U2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRhcmdldFNlbGVjdG9yKSA6IG51bGxcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIE1hbmlwdWxhdG9yW29mZnNldE1ldGhvZF0odGFyZ2V0KS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9zZWxlY3RvciA9IG51bGxcbiAgICB0aGlzLl9vZmZzZXRzID0gbnVsbFxuICAgIHRoaXMuX3RhcmdldHMgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiBpc0VsZW1lbnQoY29uZmlnLnRhcmdldCkpIHtcbiAgICAgIGxldCB7IGlkIH0gPSBjb25maWcudGFyZ2V0XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gZ2V0VUlEKE5BTUUpXG4gICAgICAgIGNvbmZpZy50YXJnZXQuaWQgPSBpZFxuICAgICAgfVxuXG4gICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIF9wcm9jZXNzKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG4gICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy5fY29uZmlnLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuX2dldE9mZnNldEhlaWdodCgpXG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9vZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8IHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3Iuc3BsaXQoJywnKVxuICAgICAgLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn1bZGF0YS1icy10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCBsaW5rID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShxdWVyaWVzLmpvaW4oJywnKSlcblxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgbGluay5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKGxpbmssIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAuZm9yRWFjaChsaXN0R3JvdXAgPT4ge1xuICAgICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWApXG4gICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG5cbiAgICAgICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTkFWX0lURU1TKVxuICAgICAgICAgICAgLmZvckVhY2gobmF2SXRlbSA9PiB7XG4gICAgICAgICAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKG5hdkl0ZW0sIFNFTEVDVE9SX05BVl9MSU5LUylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICB9KVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IpXG4gICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKVxuICAgIC5mb3JFYWNoKHNweSA9PiBuZXcgU2Nyb2xsU3B5KHNweSwgTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoc3B5KSkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuU2Nyb2xsU3B5IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICByZWZsb3dcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VID0gJ2Ryb3Bkb3duLW1lbnUnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX1VMID0gJzpzY29wZSA+IGxpID4gLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEID0gJzpzY29wZSA+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICgodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHx8XG4gICAgICBpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG5cbiAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU0VMRUNUT1JfQUNUSVZFX1VMIDogU0VMRUNUT1JfQUNUSVZFXG4gICAgICBwcmV2aW91cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoaXRlbVNlbGVjdG9yLCBsaXN0RWxlbWVudClcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBwcmV2aW91cyA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAhPT0gbnVsbCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX2VsZW1lbnQsIGxpc3RFbGVtZW50KVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRV9VTCwgY29udGFpbmVyKSA6XG4gICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihjb250YWluZXIsIFNFTEVDVE9SX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiBhY3RpdmUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSlcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZShhY3RpdmUsICd0cmFuc2l0aW9uZW5kJywgY29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChhY3RpdmUsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQsIGFjdGl2ZS5wYXJlbnROb2RlKVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICBkcm9wZG93bkNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgcmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFKVxuICAgICAgICAgIC5mb3JFYWNoKGRyb3Bkb3duID0+IGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgVGFiKHRoaXMpXG4gIGRhdGEuc2hvdygpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVGFiIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMyk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cInRvYXN0XCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgY29tcGxldGUpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvYXN0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE5BTUUsIFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiLy9lc2xpbnRcbmltcG9ydCB7IERyb3Bkb3duLCBBY2NvcmRpb24gfSBmcm9tICdib290c3RyYXAnOyJdLCJzb3VyY2VSb290IjoiIn0=