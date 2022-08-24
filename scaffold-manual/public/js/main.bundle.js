/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n\n\nfunction rollingDice() {\n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomMinMax)(1, 6);\n}\n\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.testRepeat)(() => {\n  console.log(rollingDice());\n}, 100);\n\n\n//# sourceURL=webpack://scaffold-manual/./src/index.js?");

/***/ }),

/***/ "./src/utils/getRandom.js":
/*!********************************!*\
  !*** ./src/utils/getRandom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"getRandomMinMax\": () => (/* binding */ getRandomMinMax)\n/* harmony export */ });\n/* harmony import */ var _throwError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throwError */ \"./src/utils/throwError.js\");\n\n\nfunction getRandom(n) {\n  return Math.round(Math.random() * n);\n}\n\nconst getRandomMinMax = (min = 0, max = 100) => {\n  if (min >= max) (0,_throwError__WEBPACK_IMPORTED_MODULE_0__.throwError)('min 값이 max 값보다 크거나 같습니다.');\n  return getRandom(max - min) + min;\n};\n\n\n//# sourceURL=webpack://scaffold-manual/./src/utils/getRandom.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* reexport safe */ _getRandom__WEBPACK_IMPORTED_MODULE_0__.getRandom),\n/* harmony export */   \"getRandomMinMax\": () => (/* reexport safe */ _getRandom__WEBPACK_IMPORTED_MODULE_0__.getRandomMinMax),\n/* harmony export */   \"testRepeat\": () => (/* reexport safe */ _testRepeat__WEBPACK_IMPORTED_MODULE_2__.testRepeat),\n/* harmony export */   \"throwError\": () => (/* reexport safe */ _throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)\n/* harmony export */ });\n/* harmony import */ var _getRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandom */ \"./src/utils/getRandom.js\");\n/* harmony import */ var _throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throwError */ \"./src/utils/throwError.js\");\n/* harmony import */ var _testRepeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testRepeat */ \"./src/utils/testRepeat.js\");\n\n\n\n\n\n//# sourceURL=webpack://scaffold-manual/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/testRepeat.js":
/*!*********************************!*\
  !*** ./src/utils/testRepeat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testRepeat\": () => (/* binding */ testRepeat)\n/* harmony export */ });\nfunction testRepeat(callback, count = 10) {\n  while (count--) callback();\n}\n\n\n//# sourceURL=webpack://scaffold-manual/./src/utils/testRepeat.js?");

/***/ }),

/***/ "./src/utils/throwError.js":
/*!*********************************!*\
  !*** ./src/utils/throwError.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throwError\": () => (/* binding */ throwError)\n/* harmony export */ });\nfunction throwError(message) {\n  throw new Error(message);\n}\n\n\n//# sourceURL=webpack://scaffold-manual/./src/utils/throwError.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;