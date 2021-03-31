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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var siteNavigation = document.getElementById('site-navigation'); // Return early if the navigation don't exist.

  if (!siteNavigation) {
    return;
  }

  var button = siteNavigation.getElementsByTagName('button')[0]; // Return early if the button don't exist.

  if ('undefined' === typeof button) {
    return;
  }

  var menu = siteNavigation.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  if (!menu.classList.contains('nav-menu')) {
    menu.classList.add('nav-menu');
  } // Toggle the .toggled class and the aria-expanded value each time the button is clicked.


  button.addEventListener('click', function () {
    siteNavigation.classList.toggle('toggled');

    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
    } else {
      button.setAttribute('aria-expanded', 'true');
    }
  }); // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.

  document.addEventListener('click', function (event) {
    var isClickInside = siteNavigation.contains(event.target);

    if (!isClickInside) {
      siteNavigation.classList.remove('toggled');
      button.setAttribute('aria-expanded', 'false');
    }
  }); // Get all the link elements within the menu.

  var links = menu.getElementsByTagName('a'); // Get all the link elements with children within the menu.

  var linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a'); // Toggle focus each time a menu link is focused or blurred.

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('focus', toggleFocus, true);
      link.addEventListener('blur', toggleFocus, true);
    } // Toggle focus each time a menu link with children receive a touch event.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(linksWithChildren),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _link = _step2.value;

      _link.addEventListener('touchstart', toggleFocus, false);
    }
    /**
     * Sets or removes .focus class on an element.
     */

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  function toggleFocus() {
    if (event.type === 'focus' || event.type === 'blur') {
      var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

      while (!self.classList.contains('nav-menu')) {
        // On li elements toggle the class .focus.
        if ('li' === self.tagName.toLowerCase()) {
          self.classList.toggle('focus');
        }

        self = self.parentNode;
      }
    }

    if (event.type === 'touchstart') {
      var menuItem = this.parentNode;
      event.preventDefault();

      var _iterator3 = _createForOfIteratorHelper(menuItem.parentNode.children),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var link = _step3.value;

          if (menuItem !== link) {
            link.classList.remove('focus');
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      menuItem.classList.toggle('focus');
    }
  }
})();

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./src/js/navigation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! C:\Users\HP\Local Sites\paymobtech\app\public\wp-content\themes\paymob\src\js\navigation.js */"./src/js/navigation.js");
=======
module.exports = __webpack_require__(/*! C:\Users\HP\vagrant-local\www\wordpress-one\public_html\wp-content\themes\paymob\src\js\navigation.js */"./src/js/navigation.js");
>>>>>>> 1c91379382e840918960576f86a41967e69d3718


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsic2l0ZU5hdmlnYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtZW51Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJpc0NsaWNrSW5zaWRlIiwidGFyZ2V0IiwicmVtb3ZlIiwibGlua3MiLCJsaW5rc1dpdGhDaGlsZHJlbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwidG9nZ2xlRm9jdXMiLCJ0eXBlIiwic2VsZiIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudE5vZGUiLCJtZW51SXRlbSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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Q0FBQ1MsSUFBTixLQUFlLE9BQWYsSUFBMEJULEtBQUssQ0FBQ1MsSUFBTixLQUFlLE1BQTlDLEVBQXVEO0FBQ3RELFVBQUlDLElBQUksR0FBRyxJQUFYLENBRHNELENBRXREOztBQUNBLGFBQVEsQ0FBRUEsSUFBSSxDQUFDakIsU0FBTCxDQUFlQyxRQUFmLENBQXlCLFVBQXpCLENBQVYsRUFBa0Q7QUFDakQ7QUFDQSxZQUFLLFNBQVNnQixJQUFJLENBQUNDLE9BQUwsQ0FBYUMsV0FBYixFQUFkLEVBQTJDO0FBQzFDRixjQUFJLENBQUNqQixTQUFMLENBQWVJLE1BQWYsQ0FBdUIsT0FBdkI7QUFDQTs7QUFDRGEsWUFBSSxHQUFHQSxJQUFJLENBQUNHLFVBQVo7QUFDQTtBQUNEOztBQUVELFFBQUtiLEtBQUssQ0FBQ1MsSUFBTixLQUFlLFlBQXBCLEVBQW1DO0FBQ2xDLFVBQU1LLFFBQVEsR0FBRyxLQUFLRCxVQUF0QjtBQUNBYixXQUFLLENBQUNlLGNBQU47O0FBRmtDLGtEQUdkRCxRQUFRLENBQUNELFVBQVQsQ0FBb0JHLFFBSE47QUFBQTs7QUFBQTtBQUdsQywrREFBbUQ7QUFBQSxjQUF2Q1QsSUFBdUM7O0FBQ2xELGNBQUtPLFFBQVEsS0FBS1AsSUFBbEIsRUFBeUI7QUFDeEJBLGdCQUFJLENBQUNkLFNBQUwsQ0FBZVUsTUFBZixDQUF1QixPQUF2QjtBQUNBO0FBQ0Q7QUFQaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRbENXLGNBQVEsQ0FBQ3JCLFNBQVQsQ0FBbUJJLE1BQW5CLENBQTJCLE9BQTNCO0FBQ0E7QUFDRDtBQUNELENBNUZDLEdBQUYsQyIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLyoqXHJcbiAqIEZpbGUgbmF2aWdhdGlvbi5qcy5cclxuICpcclxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcclxuICogbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBkcm9wZG93biBtZW51cy5cclxuICovXHJcbiggZnVuY3Rpb24oKSB7XHJcblx0Y29uc3Qgc2l0ZU5hdmlnYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NpdGUtbmF2aWdhdGlvbicgKTtcclxuXHJcblx0Ly8gUmV0dXJuIGVhcmx5IGlmIHRoZSBuYXZpZ2F0aW9uIGRvbid0IGV4aXN0LlxyXG5cdGlmICggISBzaXRlTmF2aWdhdGlvbiApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGJ1dHRvbiA9IHNpdGVOYXZpZ2F0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYnV0dG9uJyApWyAwIF07XHJcblxyXG5cdC8vIFJldHVybiBlYXJseSBpZiB0aGUgYnV0dG9uIGRvbid0IGV4aXN0LlxyXG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBidXR0b24gKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZW51ID0gc2l0ZU5hdmlnYXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoICd1bCcgKVsgMCBdO1xyXG5cclxuXHQvLyBIaWRlIG1lbnUgdG9nZ2xlIGJ1dHRvbiBpZiBtZW51IGlzIGVtcHR5IGFuZCByZXR1cm4gZWFybHkuXHJcblx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG1lbnUgKSB7XHJcblx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggISBtZW51LmNsYXNzTGlzdC5jb250YWlucyggJ25hdi1tZW51JyApICkge1xyXG5cdFx0bWVudS5jbGFzc0xpc3QuYWRkKCAnbmF2LW1lbnUnICk7XHJcblx0fVxyXG5cclxuXHQvLyBUb2dnbGUgdGhlIC50b2dnbGVkIGNsYXNzIGFuZCB0aGUgYXJpYS1leHBhbmRlZCB2YWx1ZSBlYWNoIHRpbWUgdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHNpdGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoICd0b2dnbGVkJyApO1xyXG5cclxuXHRcdGlmICggYnV0dG9uLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgPT09ICd0cnVlJyApIHtcclxuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0Ly8gUmVtb3ZlIHRoZSAudG9nZ2xlZCBjbGFzcyBhbmQgc2V0IGFyaWEtZXhwYW5kZWQgdG8gZmFsc2Ugd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgbmF2aWdhdGlvbi5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblx0XHRjb25zdCBpc0NsaWNrSW5zaWRlID0gc2l0ZU5hdmlnYXRpb24uY29udGFpbnMoIGV2ZW50LnRhcmdldCApO1xyXG5cclxuXHRcdGlmICggISBpc0NsaWNrSW5zaWRlICkge1xyXG5cdFx0XHRzaXRlTmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCAndG9nZ2xlZCcgKTtcclxuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHQvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cclxuXHRjb25zdCBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdhJyApO1xyXG5cclxuXHQvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGggY2hpbGRyZW4gd2l0aGluIHRoZSBtZW51LlxyXG5cdGNvbnN0IGxpbmtzV2l0aENoaWxkcmVuID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnICk7XHJcblxyXG5cdC8vIFRvZ2dsZSBmb2N1cyBlYWNoIHRpbWUgYSBtZW51IGxpbmsgaXMgZm9jdXNlZCBvciBibHVycmVkLlxyXG5cdGZvciAoIGNvbnN0IGxpbmsgb2YgbGlua3MgKSB7XHJcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1cycsIHRvZ2dsZUZvY3VzLCB0cnVlICk7XHJcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcclxuXHR9XHJcblxyXG5cdC8vIFRvZ2dsZSBmb2N1cyBlYWNoIHRpbWUgYSBtZW51IGxpbmsgd2l0aCBjaGlsZHJlbiByZWNlaXZlIGEgdG91Y2ggZXZlbnQuXHJcblx0Zm9yICggY29uc3QgbGluayBvZiBsaW5rc1dpdGhDaGlsZHJlbiApIHtcclxuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b2dnbGVGb2N1cywgZmFsc2UgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgb3IgcmVtb3ZlcyAuZm9jdXMgY2xhc3Mgb24gYW4gZWxlbWVudC5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB0b2dnbGVGb2N1cygpIHtcclxuXHRcdGlmICggZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJyB8fCBldmVudC50eXBlID09PSAnYmx1cicgKSB7XHJcblx0XHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdFx0Ly8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxyXG5cdFx0XHR3aGlsZSAoICEgc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoICduYXYtbWVudScgKSApIHtcclxuXHRcdFx0XHQvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cclxuXHRcdFx0XHRpZiAoICdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpICkge1xyXG5cdFx0XHRcdFx0c2VsZi5jbGFzc0xpc3QudG9nZ2xlKCAnZm9jdXMnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNlbGYgPSBzZWxmLnBhcmVudE5vZGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyApIHtcclxuXHRcdFx0Y29uc3QgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGZvciAoIGNvbnN0IGxpbmsgb2YgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbiApIHtcclxuXHRcdFx0XHRpZiAoIG1lbnVJdGVtICE9PSBsaW5rICkge1xyXG5cdFx0XHRcdFx0bGluay5jbGFzc0xpc3QucmVtb3ZlKCAnZm9jdXMnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoICdmb2N1cycgKTtcclxuXHRcdH1cclxuXHR9XHJcbn0oKSApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9