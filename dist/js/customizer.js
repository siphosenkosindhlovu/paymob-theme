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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/customizer.js":
/*!******************************!*\
  !*** ./src/js/customizer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global wp, jQuery */

/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  // Site title and description.
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color.

  wp.customize('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-description').css({
          clip: 'rect(1px, 1px, 1px, 1px)',
          position: 'absolute'
        });
      } else {
        $('.site-title, .site-description').css({
          clip: 'auto',
          position: 'relative'
        });
        $('.site-title a, .site-description').css({
          color: to
        });
      }
    });
  });
})(jQuery);

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi ./src/js/customizer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! C:\Users\HP\Local Sites\paymobtech\app\public\wp-content\themes\paymob\src\js\customizer.js */"./src/js/customizer.js");
=======
module.exports = __webpack_require__(/*! C:\Users\HP\vagrant-local\www\wordpress-one\public_html\wp-content\themes\paymob\src\js\customizer.js */"./src/js/customizer.js");
>>>>>>> 1c91379382e840918960576f86a41967e69d3718


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbWl6ZXIuanMiXSwibmFtZXMiOlsiJCIsIndwIiwiY3VzdG9taXplIiwidmFsdWUiLCJiaW5kIiwidG8iLCJ0ZXh0IiwiY3NzIiwiY2xpcCIsInBvc2l0aW9uIiwiY29sb3IiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7Ozs7OztBQVFFLFdBQVVBLENBQVYsRUFBYztBQUNmO0FBQ0FDLElBQUUsQ0FBQ0MsU0FBSCxDQUFjLFVBQWQsRUFBMEIsVUFBVUMsS0FBVixFQUFrQjtBQUMzQ0EsU0FBSyxDQUFDQyxJQUFOLENBQVksVUFBVUMsRUFBVixFQUFlO0FBQzFCTCxPQUFDLENBQUUsZUFBRixDQUFELENBQXFCTSxJQUFyQixDQUEyQkQsRUFBM0I7QUFDQSxLQUZEO0FBR0EsR0FKRDtBQUtBSixJQUFFLENBQUNDLFNBQUgsQ0FBYyxpQkFBZCxFQUFpQyxVQUFVQyxLQUFWLEVBQWtCO0FBQ2xEQSxTQUFLLENBQUNDLElBQU4sQ0FBWSxVQUFVQyxFQUFWLEVBQWU7QUFDMUJMLE9BQUMsQ0FBRSxtQkFBRixDQUFELENBQXlCTSxJQUF6QixDQUErQkQsRUFBL0I7QUFDQSxLQUZEO0FBR0EsR0FKRCxFQVBlLENBYWY7O0FBQ0FKLElBQUUsQ0FBQ0MsU0FBSCxDQUFjLGtCQUFkLEVBQWtDLFVBQVVDLEtBQVYsRUFBa0I7QUFDbkRBLFNBQUssQ0FBQ0MsSUFBTixDQUFZLFVBQVVDLEVBQVYsRUFBZTtBQUMxQixVQUFLLFlBQVlBLEVBQWpCLEVBQXNCO0FBQ3JCTCxTQUFDLENBQUUsZ0NBQUYsQ0FBRCxDQUFzQ08sR0FBdEMsQ0FBMkM7QUFDMUNDLGNBQUksRUFBRSwwQkFEb0M7QUFFMUNDLGtCQUFRLEVBQUU7QUFGZ0MsU0FBM0M7QUFJQSxPQUxELE1BS087QUFDTlQsU0FBQyxDQUFFLGdDQUFGLENBQUQsQ0FBc0NPLEdBQXRDLENBQTJDO0FBQzFDQyxjQUFJLEVBQUUsTUFEb0M7QUFFMUNDLGtCQUFRLEVBQUU7QUFGZ0MsU0FBM0M7QUFJQVQsU0FBQyxDQUFFLGtDQUFGLENBQUQsQ0FBd0NPLEdBQXhDLENBQTZDO0FBQzVDRyxlQUFLLEVBQUVMO0FBRHFDLFNBQTdDO0FBR0E7QUFDRCxLQWZEO0FBZ0JBLEdBakJEO0FBa0JBLENBaENDLEVBZ0NDTSxNQWhDRCxDQUFGLEMiLCJmaWxlIjoiY3VzdG9taXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8qIGdsb2JhbCB3cCwgalF1ZXJ5ICovXHJcbi8qKlxyXG4gKiBGaWxlIGN1c3RvbWl6ZXIuanMuXHJcbiAqXHJcbiAqIFRoZW1lIEN1c3RvbWl6ZXIgZW5oYW5jZW1lbnRzIGZvciBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2UuXHJcbiAqXHJcbiAqIENvbnRhaW5zIGhhbmRsZXJzIHRvIG1ha2UgVGhlbWUgQ3VzdG9taXplciBwcmV2aWV3IHJlbG9hZCBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LlxyXG4gKi9cclxuXHJcbiggZnVuY3Rpb24oICQgKSB7XHJcblx0Ly8gU2l0ZSB0aXRsZSBhbmQgZGVzY3JpcHRpb24uXHJcblx0d3AuY3VzdG9taXplKCAnYmxvZ25hbWUnLCBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHR2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XHJcblx0XHRcdCQoICcuc2l0ZS10aXRsZSBhJyApLnRleHQoIHRvICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cdHdwLmN1c3RvbWl6ZSggJ2Jsb2dkZXNjcmlwdGlvbicsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcclxuXHRcdFx0JCggJy5zaXRlLWRlc2NyaXB0aW9uJyApLnRleHQoIHRvICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHQvLyBIZWFkZXIgdGV4dCBjb2xvci5cclxuXHR3cC5jdXN0b21pemUoICdoZWFkZXJfdGV4dGNvbG9yJywgZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xyXG5cdFx0XHRpZiAoICdibGFuaycgPT09IHRvICkge1xyXG5cdFx0XHRcdCQoICcuc2l0ZS10aXRsZSwgLnNpdGUtZGVzY3JpcHRpb24nICkuY3NzKCB7XHJcblx0XHRcdFx0XHRjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCAnLnNpdGUtdGl0bGUsIC5zaXRlLWRlc2NyaXB0aW9uJyApLmNzcygge1xyXG5cdFx0XHRcdFx0Y2xpcDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdCQoICcuc2l0ZS10aXRsZSBhLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0byxcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0oIGpRdWVyeSApICk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=