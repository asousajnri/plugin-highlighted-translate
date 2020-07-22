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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/background/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/background/index.js":
/*!************************************!*\
  !*** ./src/js/background/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_startStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startStorage */ \"./src/js/background/modules/startStorage.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nchrome.storage.sync.get(['plugin_hl-t'], function (response) {\n  var _response$plugin_hlT = response['plugin_hl-t'],\n      enable = _response$plugin_hlT.enable,\n      preffixCountry = _response$plugin_hlT.preffixCountry;\n\n  if (enable) {\n    chrome.browserAction.setIcon({\n      path: chrome.extension.getURL('icons/16-on.png')\n    });\n  } else {\n    chrome.browserAction.setIcon({\n      path: chrome.extension.getURL('icons/16.png')\n    });\n  }\n});\nchrome.browserAction.onClicked.addListener(function (tab) {\n  var tabId = tab.id;\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    var _response$plugin_hlT2 = response['plugin_hl-t'],\n        enable = _response$plugin_hlT2.enable,\n        preffixCountry = _response$plugin_hlT2.preffixCountry;\n    var pathURLFavicon = '';\n\n    if (enable) {\n      chrome.browserAction.setIcon({\n        path: chrome.extension.getURL('icons/16.png')\n      });\n      chrome.storage.sync.set({\n        'plugin_hl-t': _objectSpread(_objectSpread({}, response['plugin_hl-t']), {}, {\n          enable: false\n        })\n      });\n      chrome.tabs.query({\n        active: true,\n        currentWindow: true\n      }, function (tabs) {\n        chrome.tabs.sendMessage(tabs[0].id, {\n          enable: false\n        });\n      });\n    } else {\n      chrome.browserAction.setIcon({\n        path: chrome.extension.getURL('icons/16-on.png')\n      });\n      chrome.storage.sync.set({\n        'plugin_hl-t': _objectSpread(_objectSpread({}, response['plugin_hl-t']), {}, {\n          enable: true\n        })\n      });\n      chrome.tabs.query({\n        active: true,\n        currentWindow: true\n      }, function (tabs) {\n        chrome.tabs.sendMessage(tabs[0].id, {\n          enable: true\n        });\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/background/index.js?");

/***/ }),

/***/ "./src/js/background/modules/startStorage.js":
/*!***************************************************!*\
  !*** ./src/js/background/modules/startStorage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    if (!response['plugin_hl-t']) {\n      var initialStates = {\n        enable: false,\n        preffixCountry: 'pt'\n      };\n      chrome.storage.sync.set({\n        'plugin_hl-t': initialStates\n      });\n    }\n  });\n})());\n\n//# sourceURL=webpack:///./src/js/background/modules/startStorage.js?");

/***/ })

/******/ });