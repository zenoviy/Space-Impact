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
/******/ 	__webpack_require__.p = "/public/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./sass/main.sass":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./sass/main.sass ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\n.btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\nbody {\n    font-family: 'Roboto';\n    color: #ffffff;\n    background: #333;\n    margin: 0;\n    padding: 0;\n    -khtml-user-select: none;\n    user-select: none; }\n    body #preloader {\n        visibility: hidden;\n        width: 0px;\n        height: 0px; }\n\n.static-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100vw; }\n    .static-wrapper asside.menu-backgroud {\n        background: #2f2231; }\n    .static-wrapper asside {\n        z-index: 10; }\n        .static-wrapper asside .main-menu {\n            top: 10px; }\n            .static-wrapper asside .main-menu ul {\n                display: block;\n                top: 105px;\n                position: relative;\n                text-shadow: 0px 0px 6px rgba(92, 2, 108, 0.5);\n                text-transform: uppercase; }\n                .static-wrapper asside .main-menu ul li {\n                    min-width: 160px;\n                    padding: 10px;\n                    list-style: none; }\n                .static-wrapper asside .main-menu ul a {\n                    color: #EA6C00;\n                    text-decoration: none;\n                    font-size: 17px; }\n                .static-wrapper asside .main-menu ul a:active {\n                    color: red; }\n\n.content-wrapper {\n    width: 100%;\n    max-height: 100vh;\n    overflow-y: scroll;\n    z-index: 1100; }\n    .content-wrapper .menu-pages-wrapper {\n        background: #161325;\n        margin-top: -20px;\n        min-height: 100vh;\n        padding: 20px; }\n\n.content-wrapper::-webkit-scrollbar {\n    width: 12px; }\n\n.content-wrapper::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n    border-radius: 10px; }\n\n.content-wrapper::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(71, 6, 83, 0.8);\n    -webkit-box-shadow: inset 0 0 6px black; }\n\n.content-wrapper::-webkit-scrollbar-thumb:window-inactive {\n    background: rgba(255, 0, 0, 0.1); }\n\n.dialog-box {\n    position: absolute;\n    margin: 0 auto;\n    padding: 10px;\n    min-width: 100%;\n    min-height: 100vh;\n    position: fixed;\n    left: 0; }\n    .dialog-box .dialog-wrapper {\n        display: flex;\n        height: 100vh;\n        justify-content: center;\n        align-items: center; }\n        .dialog-box .dialog-wrapper .dialog-window {\n            background: #340054;\n            padding: 20px;\n            min-width: 300px;\n            min-height: 80px;\n            border-radius: 5px; }\n            .dialog-box .dialog-wrapper .dialog-window form input[type=\"text\"], .dialog-box .dialog-wrapper .dialog-window form input[type=\"email\"] {\n                width: 100%;\n                padding: 10px;\n                border-radius: 5px;\n                background: rgba(255, 255, 255, 0.3);\n                border: 0px;\n                color: white; }\n            .dialog-box .dialog-wrapper .dialog-window form label {\n                font-size: 12px;\n                color: #eee; }\n            .dialog-box .dialog-wrapper .dialog-window form .alert-message {\n                font-size: 12px; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message p {\n                    padding: 10px; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .reject-text {\n                    border: 1px solid red;\n                    color: red; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .warning-text {\n                    border: 1px solid yellow;\n                    color: yellow; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .success-text {\n                    border: 1px solid green;\n                    color: green; }\n            .dialog-box .dialog-wrapper .dialog-window div {\n                padding: 10px; }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n\n#wrapper section {\n    z-index: 5;\n    top: 0; }\n\n.gameBackground {\n    background: #000; }\n\n.game-fields {\n    position: absolute; }\n\n.game-field-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    align-items: center; }\n\n.hide-menu {\n    display: none; }\n\n.result-message-wrapper {\n    display: flex;\n    color: orange;\n    justify-content: center;\n    height: 80vh;\n    align-items: center; }\n    .result-message-wrapper p {\n        text-align: center;\n        font-size: 20px; }\n    .result-message-wrapper p:first-letter {\n        text-transform: uppercase; }\n\nul.show-result-area {\n    list-style: none; }\n    ul.show-result-area li {\n        padding: 10px; }\n        ul.show-result-area li .rate-number {\n            color: red;\n            flex-basis: 5%; }\n        ul.show-result-area li .item-name {\n            color: orange;\n            flex-basis: 60%; }\n        ul.show-result-area li .item-coin {\n            color: green;\n            flex-basis: 15%; }\n        ul.show-result-area li .item-points {\n            color: orange;\n            flex-basis: 15%; }\n        ul.show-result-area li .item-date {\n            font-size: 10px;\n            color: grey;\n            flex-basis: 5%; }\n        ul.show-result-area li p {\n            display: flex;\n            font-size: 14px;\n            color: #bdbdbd; }\n    ul.show-result-area li:nth-child(odd) {\n        background: #130517; }\n\n.load-screen-wrapper {\n    z-index: 1000; }\n    .load-screen-wrapper .load-circe-wrapper {\n        width: 100px;\n        height: 100px;\n        background-size: cover;\n        animation: load-circle-rotate 1s infinite steps(11, end); }\n    .load-screen-wrapper p {\n        text-align: center; }\n\n@keyframes load-circle-rotate {\n    0% {\n        transform: rotate(0deg); }\n    100% {\n        transform: rotate(360deg); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./sass/main.sass":
/*!************************!*\
  !*** ./sass/main.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader??ref--6-2!../node_modules/sass-loader/dist/cjs.js??ref--6-3!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./sass/main.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ai/regularEnemyAiModules.ts":
/*!*****************************************!*\
  !*** ./src/ai/regularEnemyAiModules.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var serverRequestModules_1 = __webpack_require__(/*! ../server/serverRequestModules */ "./src/server/serverRequestModules.ts");
function enemyShipLogicVertical(target, mainGameObject) {
    var maxPositionX = Math.max(target.x, this.x);
    var minPositionX = Math.min(target.x, this.x);
    var maxPositionY = Math.max(target.y - this.height / 2, this.y);
    var minPositionY = Math.min(target.y - this.height / 2, this.y);
    var distanceToTargetX = maxPositionX - minPositionX;
    var distanceToTargetY = maxPositionY - minPositionY;
    if (this.isMove && this.behavior) {
        switch (this.behavior) {
            case 'patrool':
                if (!this.direction) {
                    var dirrectionRandom = mainGameObject.gameRandomizer(2, 1);
                    this.direction = (dirrectionRandom == 1) ? "up" : "down";
                }
                patrool.call(this, mainGameObject);
                break;
            case 'find':
                strafe.call(this);
                break;
            case 'attack':
                attack.call(this, distanceToTargetY, distanceToTargetX, target);
                break;
            case 'comeEndFind':
                strafe.call(this);
                unitStop.call(this);
                break;
            default:
                strafe.call(this);
        }
    }
    function unitStop() {
        var screenData = mainGameObject.getScreenSize();
        if (this.x < screenData.width - this.width * 2) {
            this.speed = 0;
        }
    }
    function strafe() {
        if (this.spotDistance > distanceToTargetX || this.spotDistance > distanceToTargetY) {
            this.yFinal = target.y - this.height / 2;
            this.enemyVerticalMoveCalculation(distanceToTargetY);
            return true;
        }
    }
    function attack(distanceToTargetY, distanceToTargetX, target) {
        this.yFinal = target.y - this.height / 2;
        if (distanceToTargetX < 100)
            this.enemyVerticalMoveCalculation(distanceToTargetY);
    }
    function patrool(mainGameObject) {
        var screenData = mainGameObject.getScreenSize();
        var distanceToTargetY = Math.max(this.y, this.yFinal) - Math.min(this.y, this.yFinal);
        switch (this.direction) {
            case "up":
                this.yFinal = 0;
                if (this.y - this.height < this.yFinal) {
                    this.direction = "down";
                }
                break;
            case "down":
                this.yFinal = screenData.height;
                if (this.y + this.height > this.yFinal) {
                    this.direction = "up";
                }
                break;
            default:
                this.yFinal = screenData.height / 2;
        }
        this.enemyVerticalMoveCalculation(distanceToTargetY);
    }
}
exports.enemyShipLogicVertical = enemyShipLogicVertical;
function enemyVerticalMoveCalculation(distanceToTargetY) {
    var yAdj = distanceToTargetY / this.verticalSpeed;
    yAdj = (Math.sign(yAdj) > 0) ? yAdj : yAdj * -1;
    yAdj = (yAdj > this.verticalSpeed) ? this.verticalSpeed : yAdj;
    this.y = (this.y > this.yFinal) ? this.y - yAdj :
        (this.y < this.yFinal) ? this.y + yAdj : this.yFinal;
}
exports.enemyVerticalMoveCalculation = enemyVerticalMoveCalculation;
function spawnEnemyLogic(EnemyObject) {
    return __awaiter(this, void 0, void 0, function () {
        function enemySpawn() {
            return __awaiter(this, void 0, void 0, function () {
                var checkSpawnType, numberEnemyPerSpawn, i, enemyShip, enemyShipObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            checkSpawnType = this.gameRandomizer(levelData.enemyProbability);
                            if (!(checkSpawnType <= levelData.enemyRandomizerIndex)) return [3 /*break*/, 4];
                            numberEnemyPerSpawn = this.gameRandomizer(levelData.enemyMaxNumber);
                            i = numberEnemyPerSpawn;
                            _a.label = 1;
                        case 1:
                            if (!(i < levelData.enemyMaxNumber)) return [3 /*break*/, 4];
                            enemyShip = enemyData[this.gameRandomizer(enemyData.length)];
                            return [4 /*yield*/, this.createNewEnemy(enemyShip, EnemyObject)];
                        case 2:
                            enemyShipObject = _a.sent();
                            enemyShipObject.loadEnemyes();
                            this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        var gameData, levelData, enemyData, levelUserData, bossPresent, enemyShipObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameData = this.gameInitData.gameData, levelData = gameData.levelData, enemyData = gameData.enemyData, levelUserData = this.getLevelUserData(), bossPresent = (levelUserData.sourse.levelData.bossPresent) ? levelUserData.sourse.levelData.bossPresent : null;
                    if (!(!this.gameInitData.gameData.levelChange && !bossPresent)) return [3 /*break*/, 1];
                    enemySpawn.call(this);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, this.createNewEnemy(enemyData[0], EnemyObject)];
                case 2:
                    enemyShipObject = _a.sent();
                    if (this.gameInitData.allGameEnemies.length < 1 && !this.gameInitData.levelChange) {
                        enemyShipObject.loadEnemyes();
                        this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.spawnEnemyLogic = spawnEnemyLogic;
function createNewEnemy(enemyData, EnemyObject) {
    return __awaiter(this, void 0, void 0, function () {
        var x, y, shipDetails, behavior, extraObjects, _a, context;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    x = this.gameInitData.screen.width + 300, y = this.gameRandomizer(this.gameInitData.screen.height - 200, 100);
                    if (!enemyData.details) return [3 /*break*/, 4];
                    shipDetails = enemyData.details;
                    behavior = (shipDetails.behavior) ? shipDetails.behavior[this.gameRandomizer(shipDetails.behavior.length)] : null;
                    if (!(shipDetails.extraObjects)) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadExtraObject.call(this, shipDetails.extraObjects)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = false;
                    _b.label = 3;
                case 3:
                    extraObjects = _a;
                    context = this;
                    return [2 /*return*/, new EnemyObject({
                            x: x, y: y,
                            sx: shipDetails.sx, sy: shipDetails.sy,
                            sWidth: shipDetails.imageWidth / shipDetails.numberOfItems, sHeight: shipDetails.imageHeight,
                            picturesWidth: shipDetails.imageWidth, numberOfItems: shipDetails.numberOfItems,
                            width: shipDetails.width, height: shipDetails.height,
                            shipTexture: shipDetails.skinName,
                            speed: shipDetails.speed,
                            status: shipDetails.status, name: shipDetails.name,
                            bulletTypeNumber: shipDetails.bulletType, rapidFire: shipDetails.rapidFire, pointsPerUnit: shipDetails.pointsPerUnit,
                            healthPoint: shipDetails.healthPoint, animationSteps: shipDetails.animationSteps, damage: shipDetails.damage,
                            objectOwner: shipDetails.objectOwner, guns: (shipDetails.guns) ? shipDetails.guns : [], explosion: shipDetails.explosionAnimation,
                            numberOfVerticalItems: shipDetails.numberOfVerticalItems, isMove: shipDetails.isMove, isShoot: shipDetails.isShoot,
                            spotDistance: shipDetails.spotDistance, behavior: behavior, verticalSpeed: (shipDetails.verticalSpeed) ? shipDetails.verticalSpeed : null,
                            isBoss: (shipDetails.isBoss) ? shipDetails.isBoss : false, extraObjects: extraObjects // load coin element from server 
                        })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createNewEnemy = createNewEnemy;
function loadExtraObject(extraObjects) {
    return __awaiter(this, void 0, void 0, function () {
        var randomObject, loadProbability, numberOfElement, result, callObject, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    randomObject = extraObjects[this.gameRandomizer(extraObjects.length)], loadProbability = this.gameRandomizer(randomObject.randomuizer), numberOfElement = this.gameRandomizer(randomObject.maxNumber + 1);
                    result = [];
                    return [4 /*yield*/, serverRequestModules_1.getData({ url: process.env.HOST + "api/grapple-objects", method: "GET", data: null, headers: { 'grappleObject': randomObject.object } })];
                case 1:
                    callObject = _a.sent();
                    for (i = 0; i < numberOfElement; i++) {
                        result = result.concat(callObject);
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.loadExtraObject = loadExtraObject;
function gameRandomizer(maxNumber, minNumber) {
    if (minNumber === void 0) { minNumber = 0; }
    return Math.floor(Math.random() * maxNumber + minNumber);
}
exports.gameRandomizer = gameRandomizer;


/***/ }),

/***/ "./src/appMenu/appMenu.ts":
/*!********************************!*\
  !*** ./src/appMenu/appMenu.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pagesBuilder_1 = __webpack_require__(/*! ./pagesBuilder */ "./src/appMenu/pagesBuilder.ts");
var serverRequestModules_1 = __webpack_require__(/*! ../server/serverRequestModules */ "./src/server/serverRequestModules.ts");
var gameResultModule_1 = __webpack_require__(/*! ./gameResultModule */ "./src/appMenu/gameResultModule.ts");
var satartGame_1 = __webpack_require__(/*! ../engine/gameModules/satartGame */ "./src/engine/gameModules/satartGame.ts");
function show(el) {
    el.style.display = 'block';
}
exports.show = show;
function hide(el) {
    el.style.display = 'none';
}
exports.hide = hide;
function toggler(el) {
    (el.style.display == 'none') ? show(el) : hide(el);
}
exports.toggler = toggler;
function addClassList(el, classList) {
    el.classList.add(classList);
}
exports.addClassList = addClassList;
function removeClassList(el, classList) {
    if (!el.classList)
        return false;
    el.classList.remove(classList);
}
exports.removeClassList = removeClassList;
function appMenu(gameObject, dialogWindow) {
    var selectedMenuItem = null;
    var navigation = {
        showSelectedItem: function () {
            return { selectedMenuItem: selectedMenuItem };
        },
        menu: {
            constants: {
                sectionTemplate: '.section-template',
                contentContainer: '#wrapper',
                sideMenuWrapper: '#main-menu'
            },
            importSectionsToDOM: function () {
                var links = document.querySelectorAll('link[rel="import"]');
                Array.prototype.forEach.call(links, function (link) {
                    var template = link.import.querySelector(navigation.menu.constants.sectionTemplate);
                    var clone = document.importNode(template.content, true);
                    document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone);
                });
            },
            setMenuOnClickEvent: function () {
                var el = document.querySelector("#dialog-box");
                document.body.addEventListener('click', buttonActon);
                function buttonActon(event) {
                    if (event.target) {
                        if (event.target && event.target.dataset.section) {
                            navigation.menu.hideAllSections();
                            navigation.menu.showSection.call(this, event);
                        }
                        menuSelection(event);
                        switch (event.target.dataset.section) {
                            case 'game-results':
                                gameResultModule_1.showResultScreen();
                                break;
                            default:
                                false;
                        }
                        switch (event.target.dataset.buttonId) {
                            case 'game-results':
                                break;
                            case 'exit':
                                toggler(el);
                                dialogWindow({ textData: 'Exit the game?', rejectText: 'cancel', acceptText: 'ok' }, satartGame_1.exitTheGame, navigation);
                                break;
                            case 'close':
                                navigation.menu.hideAllSections();
                                selectedMenuItem = null;
                                break;
                            default:
                                false;
                        }
                    }
                }
                function menuSelection(event) {
                    if (event.target.parentElement.tagName == "LI") {
                        var menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                        for (var _i = 0, menuArea_1 = menuArea; _i < menuArea_1.length; _i++) {
                            var menuItem = menuArea_1[_i];
                            removeClassList(menuItem, "selected-items");
                        }
                        selectedMenuItem = (event.target.dataset.buttonId != "close" &&
                            event.target.dataset.buttonId != "cancel" &&
                            event.target.dataset.buttonId != "exit" &&
                            event.target.dataset) ? event.target.parentElement : selectedMenuItem;
                        addClassList(event.target.parentElement, "selected-items");
                    }
                }
            },
            showSection: function (event) {
                var sectionId = event.target.dataset.section;
                show(document.querySelector("#" + sectionId));
                var menuArea = Array.prototype.slice.call(document.querySelectorAll(".menu-wrapper"));
                for (var _i = 0, menuArea_2 = menuArea; _i < menuArea_2.length; _i++) {
                    var item = menuArea_2[_i];
                    addClassList(item, "menu-backgroud");
                }
                pagesBuilder_1.pageBuilder({ target: "#about-section-content", data: serverRequestModules_1.getLocalData({ fileName: 'about-page.json' }) });
            },
            hideAllSections: function () {
                var sectionNodes = Array.prototype.slice.call(document.querySelectorAll(this.constants.contentContainer + " section"));
                for (var _i = 0, sectionNodes_1 = sectionNodes; _i < sectionNodes_1.length; _i++) {
                    var item = sectionNodes_1[_i];
                    hide(item);
                }
                var menuBackgroundArea = Array.prototype.slice.call(document.querySelectorAll(".menu-wrapper"));
                for (var _a = 0, menuBackgroundArea_1 = menuBackgroundArea; _a < menuBackgroundArea_1.length; _a++) {
                    var item = menuBackgroundArea_1[_a];
                    removeClassList(item, "menu-backgroud");
                }
                var menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                for (var _b = 0, menuArea_3 = menuArea; _b < menuArea_3.length; _b++) {
                    var menuItem = menuArea_3[_b];
                    removeClassList(menuItem, "selected-items");
                }
            },
            init: function () {
                this.importSectionsToDOM();
                this.setMenuOnClickEvent();
                this.hideAllSections();
            }
        }
    };
    return navigation;
}
exports.appMenu = appMenu;
function hideShowMenu(mainMenu, navigationMenu, gameWin, gameStatus, gameUiPause) {
    if (!gameStatus || gameUiPause) {
        mainMenu.classList.remove("hide-menu");
    }
    else {
        mainMenu.classList.add("hide-menu");
        navigationMenu.hideAllSections();
    }
}
exports.hideShowMenu = hideShowMenu;
function dialogWindow(_a, callback, navigation) {
    var textData = _a.textData, rejectText = _a.rejectText, acceptText = _a.acceptText;
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    var windowElement = document.querySelector("#dialog-box");
    var dialogBody = document.querySelector('#dialog-body');
    dialogBody.innerHTML = "";
    function dialogButtonEvent(event) {
        var selectedMenuItem = (navigation) ? navigation.showSelectedItem() : false;
        switch (event.target.dataset.buttonId) {
            case 'ok':
                callback(event);
                break;
            case 'cancel':
                if (windowElement)
                    hide(windowElement);
                var menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                for (var _i = 0, menuArea_4 = menuArea; _i < menuArea_4.length; _i++) {
                    var menuItem = menuArea_4[_i];
                    removeClassList(menuItem, "selected-items");
                }
                if (selectedMenuItem.selectedMenuItem) {
                    addClassList(selectedMenuItem.selectedMenuItem, "selected-items");
                }
                break;
            case 'restart':
                callback.call.apply(callback, rest);
                if (windowElement)
                    hide(windowElement);
                break;
            default:
                false;
        }
    }
    if (windowElement)
        show(windowElement);
    var dialogData = [
        pagesBuilder_1.createElements({
            tagName: "div",
            styleClass: "accept-btn btn-main",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: acceptText,
            innerContent: "\n            <div class=\"dialog-text\">" + textData + "</div>\n            <div id=\"dialog-button-area\" class=\"dialog-btn-area\">\n            <button data-button-id=" + acceptText + " class=\"accept-btn btn-main\">" + acceptText + "</button>\n           <button data-button-id=\"cancel\" class=\"reject-btn btn-main\">cancel</button>\n       </div>",
            attributeName: 'data-button-id',
            attribute: acceptText,
            attributeName1: null,
            attribute1: null
        })
    ];
    for (var _b = 0, dialogData_1 = dialogData; _b < dialogData_1.length; _b++) {
        var item = dialogData_1[_b];
        dialogBody.appendChild(item);
    }
    var dialogButtonArea = document.querySelector('#dialog-button-area');
    dialogButtonArea.addEventListener('click', dialogButtonEvent);
}
exports.dialogWindow = dialogWindow;


/***/ }),

/***/ "./src/appMenu/gameResultModule.ts":
/*!*****************************************!*\
  !*** ./src/appMenu/gameResultModule.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var appMenu_1 = __webpack_require__(/*! ./appMenu */ "./src/appMenu/appMenu.ts");
var pagesBuilder_1 = __webpack_require__(/*! ./pagesBuilder */ "./src/appMenu/pagesBuilder.ts");
var serverRequestModules_1 = __webpack_require__(/*! ../server/serverRequestModules */ "./src/server/serverRequestModules.ts");
function showResultScreen() {
    return __awaiter(this, void 0, void 0, function () {
        var windowElement, gameData, index, _loop_1, _i, gameData_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    windowElement = document.querySelector('#show-result-area');
                    windowElement.innerHTML = "";
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: process.env.HOST + 'api/game-result',
                            method: 'GET',
                            data: null,
                            headers: null
                        })];
                case 1:
                    gameData = _a.sent();
                    if (gameData.hasOwnProperty('message')) {
                        windowElement.innerHTML = "<div class=\"result-message-wrapper\"><p>" + gameData.message + "</p></div>";
                        return [2 /*return*/, false];
                    }
                    index = 0;
                    _loop_1 = function (item) {
                        index += 1;
                        var time = new Date(item.time), year = time.getFullYear(), month = time.getUTCMonth() + 1, day = time.getDate();
                        var newElement = pagesBuilder_1.createElements({
                            tagName: "li",
                            styleClass: "winner-list",
                            inlineStyle: null,
                            pictureUrl: null,
                            linkUrl: null,
                            text: null,
                            innerContent: "<p class=\"single-item\"><span class=\"rate-number\">&nbsp; " + index + "</span>\n            name: &nbsp;<span class=\"item-name\"> " + item.userName + "</span>\n            coin: &nbsp;<span class=\"item-coin\"> " + item.gameCoins + "</span>\n            score: &nbsp;<span class=\"item-points\"> " + item.gamePoints + "</span>\n            <span class=\"item-date\"> " + year + "/" + month + "/" + day + "</span></p>",
                            attributeName: 'data-button-id',
                            attribute: item.id,
                            attributeName1: null,
                            attribute1: null
                        });
                        setTimeout(function () {
                            windowElement.appendChild(newElement);
                        }, index * 100);
                    };
                    //gameData = gameData.sort((a, b) => {return  a.gamePoints - b.gamePoints}).reverse();
                    for (_i = 0, gameData_1 = gameData; _i < gameData_1.length; _i++) {
                        item = gameData_1[_i];
                        _loop_1(item);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.showResultScreen = showResultScreen;
function initResultScreen(mainGameObject) {
    var windowElement = document.querySelector('#save-result-box');
    var formLoadArea = document.querySelector('#form-load-area');
    formLoadArea.innerHTML = "";
    appMenu_1.show(windowElement);
    var dialogData = [
        pagesBuilder_1.createElements({
            tagName: "form",
            styleClass: "accept-btn btn-main",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: "save result",
            innerContent: "\n                <p>Please fill newt fields to save your result</p>\n                <label for=\"name\">\n                    <p>Please enter you name</p>\n                    <input id=\"name\" maxlength=\"30\" minlength=\"3\" name=\"userName\" type=\"text\" require placeholder=\"Enter you name\">\n                </label>\n                <label for=\"mail\">\n                    <p>Please enter you email</p>\n                    <input id=\"mail\" name=\"userEmail\" type=\"email\" require placeholder=\"Enter you email address\">\n                </label>\n                <div id=\"alert-message\" class=\"alert-message\"></div>\n                <div id=\"dialog-bottom-area\" class=\"dialog-btn-area\">\n                    <button type=\"submit\" data-button-id=\"save-result\" class=\"accept-btn btn-main\">save</button>\n                    <button data-button-id=\"cancel\" class=\"reject-btn btn-main\">cancel</button>\n                </div>",
            attributeName: 'name',
            attribute: "save-result-form",
            attributeName1: null,
            attribute1: null
        }),
    ];
    for (var _i = 0, dialogData_1 = dialogData; _i < dialogData_1.length; _i++) {
        var item = dialogData_1[_i];
        formLoadArea.appendChild(item);
    }
    var form = document.forms['save-result-form'];
    document.querySelector('#dialog-bottom-area').addEventListener('click', dialogButtonEvent);
    form.addEventListener('submit', formAction);
    function dialogButtonEvent(event) {
        switch (event.target.dataset.buttonId) {
            case 'save-result':
                break;
            case 'cancel':
                formLoadArea.innerHTML = "";
                if (windowElement)
                    appMenu_1.hide(windowElement);
                break;
            default:
                false;
        }
    }
    function formAction(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formResult, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formResult = transferDataToObject(form, mainGameObject);
                        if (!formResult) return [3 /*break*/, 2];
                        return [4 /*yield*/, serverRequestModules_1.getData({
                                url: process.env.HOST + 'api/game-result',
                                method: 'POST',
                                data: formResult,
                                headers: null
                            })];
                    case 1:
                        res = _a.sent();
                        errorFormMessage({ message: res.message, status: res.status });
                        return [2 /*return*/];
                    case 2:
                        errorFormMessage({ message: "I cant send this, please check form again", status: "reject" });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function errorFormMessage(_a) {
        var message = _a.message, status = _a.status;
        var element = document.querySelector("#alert-message");
        var alertText = "";
        switch (status) {
            case "reject":
                alertText = "<p class=\"reject-text\">" + message + "</p>";
                break;
            case "warning":
                alertText = "<p class=\"warning-text\">" + message + "</p>";
                break;
            case "success":
                alertText = "<p class=\"success-text\">" + message + "</p>";
                form.reset();
                break;
            default:
                alertText = "";
        }
        element.innerHTML = alertText;
    }
}
exports.initResultScreen = initResultScreen;
function transferDataToObject(data, mainGameObject) {
    if (!data)
        throw Error("No data to transform");
    var obj = { userName: null, userEmail: null, gamePoints: null, gameCoins: null };
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (item.name && item.value) {
            obj[item.name] = item.value;
        }
        else if (item.name && !item.value) {
            return false;
        }
    }
    var gameData = mainGameObject.getLevelUserData();
    obj.gamePoints = gameData.points;
    obj.gameCoins = gameData.gameCoins;
    return obj;
}


/***/ }),

/***/ "./src/appMenu/pagesBuilder.ts":
/*!*************************************!*\
  !*** ./src/appMenu/pagesBuilder.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function pageBuilder(_a) {
    var target = _a.target, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        var _b, targetNode;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, !target];
                case 1:
                    _b = (_c.sent());
                    if (_b) return [3 /*break*/, 3];
                    return [4 /*yield*/, !data];
                case 2:
                    _b = (_c.sent());
                    _c.label = 3;
                case 3:
                    if (_b)
                        throw Error("cant fetch the data");
                    targetNode = document.querySelector(target);
                    targetNode.innerHTML = "";
                    data.then(function (data) {
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var item = data_1[_i];
                            var newObject = createElements({
                                tagName: item.tag,
                                styleClass: item.classlist,
                                inlineStyle: item.style,
                                pictureUrl: item.imageLink,
                                linkUrl: item.link,
                                text: item.innerText,
                                innerContent: item.html,
                                attributeName: null,
                                attribute: null, attributeName1: null,
                                attribute1: null
                            }, null);
                            targetNode.appendChild(newObject);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.pageBuilder = pageBuilder;
function createElements(_a) {
    var tagName = _a.tagName, styleClass = _a.styleClass, inlineStyle = _a.inlineStyle, pictureUrl = _a.pictureUrl, linkUrl = _a.linkUrl, text = _a.text, innerContent = _a.innerContent, attributeName = _a.attributeName, attribute = _a.attribute, attributeName1 = _a.attributeName1, attribute1 = _a.attribute1;
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var element = document.createElement(tagName);
    (styleClass) ? element.className = styleClass : false;
    (inlineStyle) ? element.style = inlineStyle : false;
    (tagName === "img" && pictureUrl) ? element.src = __dirname + pictureUrl : false;
    (text) ? element.innerText = text : false;
    (innerContent) ? element.innerHTML = innerContent : false;
    (attributeName && attribute) ? element.setAttribute(attributeName, attribute) : false;
    (attributeName1 && attribute1) ? element.setAttribute(attributeName1, attribute1) : false;
    return element;
}
exports.createElements = createElements;


/***/ }),

/***/ "./src/constructors/bulletConstructor.ts":
/*!***********************************************!*\
  !*** ./src/constructors/bulletConstructor.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bulletsModule_1 = __webpack_require__(/*! ../engine/bulletsModule */ "./src/engine/bulletsModule.ts");
var engineModules_1 = __webpack_require__(/*! ../engine/engineModules */ "./src/engine/engineModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var BulletConstruct = /** @class */ (function () {
    function BulletConstruct(x, y, bulletType, bulletTexture, objectOwner, bulletSpeed, width, height, damage, type, texture, sx, sy, sWidth, sHeight, explosion) {
        this.x = x;
        this.y = y;
        this.bulletType = bulletType;
        this.bulletTexture = bulletTexture;
        this.objectOwner = objectOwner;
        this.bulletSpeed = bulletSpeed;
        this.width = width;
        this.height = height;
        this.damage = damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
        this.type = type;
        this.img = new Image();
        this.texture = __dirname + texture;
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.explosion = explosion;
    }
    return BulletConstruct;
}());
exports.BulletConstruct = BulletConstruct;
BulletConstruct.prototype.createBullets = bulletsModule_1.createBullets;
BulletConstruct.prototype.initBullets = bulletsModule_1.initBullets;
BulletConstruct.prototype.moveBullets = bulletsModule_1.moveBullets;
BulletConstruct.prototype.getObjectPosition = engineModules_1.getObjectPosition;
BulletConstruct.prototype.takeDamage = enemiesModules_1.takeDamage;


/***/ }),

/***/ "./src/constructors/enemyConstructor.ts":
/*!**********************************************!*\
  !*** ./src/constructors/enemyConstructor.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var regularEnemyAiModules_1 = __webpack_require__(/*! ../ai/regularEnemyAiModules */ "./src/ai/regularEnemyAiModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var engine_1 = __webpack_require__(/*! ../engine */ "./src/engine/index.ts");
var EnemyObject = /** @class */ (function () {
    function EnemyObject(_a) {
        var data = __rest(_a, []);
        this.id = new Date().getTime();
        this.x = data.x;
        this.y = data.y;
        this.sx = data.sx;
        this.sy = data.sy;
        this.sWidth = data.sWidth;
        this.sHeight = data.sHeight;
        this.picturesWidth = data.picturesWidth;
        this.numberOfItems = data.numberOfItems;
        this.width = data.width;
        this.height = data.height;
        this.shipTexture = __dirname + data.shipTexture;
        this.speed = data.speed;
        this.status = data.status;
        this.name = data.name;
        this.bulletTypeNumber = data.bulletTypeNumber;
        this.rapidFire = data.rapidFire;
        this.pointsPerUnit = data.pointsPerUnit;
        this.healthPoint = data.healthPoint;
        this.animationSteps = data.animationSteps;
        this.damage = data.damage;
        this.guns = data.guns;
        this.detectFrame = 0;
        this.objectPresent = true;
        this.objectOwner = data.objectOwner;
        this.guns = data.guns;
        this.explosion = data.explosion;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.originalHealthPoint = data.healthPoint;
        this.isMove = data.isMove;
        this.isShoot = data.isShoot;
        this.verticalSpeed = (data.verticalSpeed) ? data.verticalSpeed : Math.floor(Math.random() * data.speed + 1);
        this.spotDistance = (data.isBoss) ? data.spotDistance : Math.floor(Math.random() * data.spotDistance);
        this.yFinal = 0;
        this.xFinal = 0;
        this.behavior = data.behavior;
        this.direction = null;
        this.isBoss = data.isBoss;
        this.extraObjects = data.extraObjects;
        /// load amount fo coins, ando coins object from server
    }
    return EnemyObject;
}());
exports.EnemyObject = EnemyObject;
EnemyObject.prototype.placeEnemyes = enemiesModules_1.placeEnemyes;
EnemyObject.prototype.moveEnemyes = enemiesModules_1.moveEnemyes;
EnemyObject.prototype.loadEnemyes = enemiesModules_1.loadEnemyes;
EnemyObject.prototype.shoot = enemiesModules_1.shoot;
EnemyObject.prototype.enemyAnimation = enemiesModules_1.enemyAnimation;
EnemyObject.prototype.getObjectPosition = engine_1.getObjectPosition;
EnemyObject.prototype.enemyDamageAnimation = enemiesModules_1.enemyDamageAnimation;
EnemyObject.prototype.enemyShipLogicVertical = regularEnemyAiModules_1.enemyShipLogicVertical;
EnemyObject.prototype.enemyVerticalMoveCalculation = regularEnemyAiModules_1.enemyVerticalMoveCalculation;
EnemyObject.prototype.takeDamage = enemiesModules_1.takeDamage;
EnemyObject.prototype.spawnCoin = enemiesModules_1.spawnCoin;


/***/ }),

/***/ "./src/constructors/gameGrappleObjects.ts":
/*!************************************************!*\
  !*** ./src/constructors/gameGrappleObjects.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameSideObjectConstructor_1 = __webpack_require__(/*! ./gameSideObjectConstructor */ "./src/constructors/gameSideObjectConstructor.ts");
var gameGrappleObjectsModule_1 = __webpack_require__(/*! ../engine/gameGrappleObjectsModule */ "./src/engine/gameGrappleObjectsModule.ts");
var GrappleObject = /** @class */ (function (_super) {
    __extends(GrappleObject, _super);
    function GrappleObject(_a) {
        var data = __rest(_a, []);
        var _this = _super.call(this, __assign({}, data)) || this;
        _this.isGrapple = data.isGrapple;
        _this.grapplePower = data.grapplePower;
        return _this;
    }
    return GrappleObject;
}(gameSideObjectConstructor_1.SideObject));
exports.GrappleObject = GrappleObject;
GrappleObject.prototype.addPlayerLife = gameGrappleObjectsModule_1.addPlayerLife;
GrappleObject.prototype.collectCoin = gameGrappleObjectsModule_1.collectCoin;


/***/ }),

/***/ "./src/constructors/gameSideObjectConstructor.ts":
/*!*******************************************************!*\
  !*** ./src/constructors/gameSideObjectConstructor.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enemyModules = __importStar(__webpack_require__(/*! ../enemies */ "./src/enemies/index.ts"));
var gameSideObjectsModule_1 = __webpack_require__(/*! ../engine/gameSideObjectsModule */ "./src/engine/gameSideObjectsModule.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var SideObject = /** @class */ (function () {
    function SideObject(_a) {
        var data = __rest(_a, []);
        this.x = data.x;
        this.y = data.y;
        this.sx = data.sx;
        this.sy = data.sy;
        this.sWidth = data.sWidth;
        this.sHeight = data.sHeight;
        this.width = data.width;
        this.height = data.height;
        this.img = new Image();
        this.texture = __dirname + data.texture;
        this.animationSteps = data.animationSteps;
        this.numberOfItems = data.numberOfItems;
        this.target = data.target;
        this.animationState = true;
        this.detectFrame = 0;
        this.objectPresent = true;
        this.speed = data.speed;
        this.picturesWidth = data.picturesWidth;
        this.damage = (data.damage) ? data.damage : null;
        this.objectOwner = (data.objectOwner) ? data.objectOwner : null;
        this.healthPoint = (data.healthPoint) ? data.healthPoint : null;
        this.isBackground = (data.isBackground) ? data.isBackground : null;
        this.explosion = (data.explosion) ? data.explosion : null;
        this.pointsPerUnit = (data.pointsPerUnit) ? data.pointsPerUnit : 0;
        this.extraObjects = (data.extraObjects) ? data.extraObjects : 0;
    }
    return SideObject;
}());
exports.SideObject = SideObject;
SideObject.prototype.enemyAnimation = enemyModules.enemyAnimation;
SideObject.prototype.placeEnemyes = enemyModules.placeEnemyes;
SideObject.prototype.fireAnimationEnded = gameSideObjectsModule_1.fireAnimationEnded;
SideObject.prototype.takeDamage = enemiesModules_1.takeDamage;
SideObject.prototype.mapObjectMove = gameSideObjectsModule_1.mapObjectMove;
SideObject.prototype.enemyDamageAnimation = enemiesModules_1.enemyDamageAnimation;
SideObject.prototype.spawnCoin = enemiesModules_1.spawnCoin;


/***/ }),

/***/ "./src/constructors/index.ts":
/*!***********************************!*\
  !*** ./src/constructors/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./mainGameComponent */ "./src/constructors/mainGameComponent.ts"));
__export(__webpack_require__(/*! ./levelConstructors */ "./src/constructors/levelConstructors.ts"));
__export(__webpack_require__(/*! ./enemyConstructor */ "./src/constructors/enemyConstructor.ts"));
__export(__webpack_require__(/*! ./userConstructor */ "./src/constructors/userConstructor.ts"));
__export(__webpack_require__(/*! ./bulletConstructor */ "./src/constructors/bulletConstructor.ts"));
__export(__webpack_require__(/*! ./gameSideObjectConstructor */ "./src/constructors/gameSideObjectConstructor.ts"));
__export(__webpack_require__(/*! ./gameGrappleObjects */ "./src/constructors/gameGrappleObjects.ts"));


/***/ }),

/***/ "./src/constructors/levelConstructors.ts":
/*!***********************************************!*\
  !*** ./src/constructors/levelConstructors.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engineModules_1 = __webpack_require__(/*! ../engine/engineModules */ "./src/engine/engineModules.ts");
var backgroundModule_1 = __webpack_require__(/*! ../engine/backgroundModule */ "./src/engine/backgroundModule.ts");
var GameBackground = /** @class */ (function () {
    function GameBackground(backgroundTexture, backgroundSpeed, screenData, ctx, partOfScreenStatus, extraMap, timeToExtraMapSeconds, timeToExtraMapMinutes) {
        this.x = 0;
        this.y = 0;
        this.backgroundTexture = backgroundTexture;
        this.backgroundSpeed = backgroundSpeed;
        this.screenData = screenData;
        this.ctx = ctx;
        this.x = (partOfScreenStatus) ? 0 : screenData.width;
        this.y = 0;
        this.img = new Image();
        this.extraMap = extraMap;
        this.timeToEressLevel = 4;
        this.warpObjects = [];
        this.timeToExtraMapSeconds = timeToExtraMapSeconds;
        this.timeToExtraMapMinutes = timeToExtraMapMinutes;
    }
    return GameBackground;
}());
exports.GameBackground = GameBackground;
GameBackground.prototype.updateMap = backgroundModule_1.updateMap;
GameBackground.prototype.warpEffect = engineModules_1.warpEffect;
GameBackground.prototype.changePartOfTexture = backgroundModule_1.changePartOfTexture;


/***/ }),

/***/ "./src/constructors/mainGameComponent.ts":
/*!***********************************************!*\
  !*** ./src/constructors/mainGameComponent.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import { viewModules } from '../view/displayModules';
var regularEnemyAiModules_1 = __webpack_require__(/*! ../ai/regularEnemyAiModules */ "./src/ai/regularEnemyAiModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var changeLevels_1 = __webpack_require__(/*! ../engine/gameModules/changeLevels */ "./src/engine/gameModules/changeLevels.ts");
var engineModules_1 = __webpack_require__(/*! ../engine/engineModules */ "./src/engine/engineModules.ts");
var playerShipModule_1 = __webpack_require__(/*! ../engine/playerShipModule */ "./src/engine/playerShipModule.ts");
var gameUiModules_1 = __webpack_require__(/*! ../ui/gameUiModules */ "./src/ui/gameUiModules.ts");
var satartGame_1 = __webpack_require__(/*! ../engine/gameModules/satartGame */ "./src/engine/gameModules/satartGame.ts");
var gameSideObjectsModule_1 = __webpack_require__(/*! ../engine/gameSideObjectsModule */ "./src/engine/gameSideObjectsModule.ts");
var gameGrappleObjectsModule_1 = __webpack_require__(/*! ../engine/gameGrappleObjectsModule */ "./src/engine/gameGrappleObjectsModule.ts");
var Game = /** @class */ (function () {
    function Game(gameInitData) {
        this.gameInitData = gameInitData;
    }
    Game.prototype.changeLevel = function (nextLevel) {
        this.gameInitData.gameData.currentLevel = nextLevel;
        return this.gameInitData.gameData.currentLevel;
    };
    Game.prototype.showGameInfo = function () {
        return {
            levelToChange: this.gameInitData.gameData.currentLevel,
            currentPoint: this.gameInitData.gameData.currentPoint,
            gameData: this.gameInitData.gameData,
            imageDirrection: __dirname + '/public/images/',
        };
    };
    Game.prototype.showLevelData = function () {
        return this.gameInitData.gameData.levelData;
    };
    Game.prototype.returnContext = function () {
        if (this.gameInitData.gameField &&
            this.gameInitData.gameActionField &&
            this.gameInitData.gameUIField) {
            return {
                gameField: this.gameInitData.gameField,
                gameActionField: this.gameInitData.ctxActionField,
                gameUIField: this.gameInitData.gameUIField,
            };
        }
        else {
            return null;
        }
    };
    return Game;
}());
exports.Game = Game;
Game.prototype.createContext = engineModules_1.createContext;
Game.prototype.initField = engineModules_1.initField;
Game.prototype.levelInit = engineModules_1.levelInit; // createContext initPlayerShip
Game.prototype.setGameFields = engineModules_1.setGameFields;
Game.prototype.warpEffect = engineModules_1.warpEffect; // warpEffect
Game.prototype.getScreenSize = engineModules_1.getScreenSize;
Game.prototype.getLevelUserData = engineModules_1.getLevelUserData;
Game.prototype.levelTimer = engineModules_1.levelTimer;
Game.prototype.getSecondMeasure = engineModules_1.getSecondMeasure;
Game.prototype.gameSecondsIncrease = engineModules_1.gameSecondsIncrease;
Game.prototype.initPlayerShip = playerShipModule_1.initPlayerShip;
//Game.prototype.placePlayerShip = placePlayerShip;
Game.prototype.deleteBullet = engineModules_1.deleteBullet;
Game.prototype.deleteObjects = engineModules_1.deleteObjects;
Game.prototype.delateSideObject = engineModules_1.delateSideObject;
Game.prototype.hitDetection = enemiesModules_1.hitDetection;
Game.prototype.collectPoints = engineModules_1.collectPoints;
Game.prototype.spawnEnemyLogic = regularEnemyAiModules_1.spawnEnemyLogic;
Game.prototype.createNewEnemy = regularEnemyAiModules_1.createNewEnemy;
Game.prototype.gameRandomizer = regularEnemyAiModules_1.gameRandomizer;
Game.prototype.uiController = gameUiModules_1.uiController;
Game.prototype.gameUiPause = gameUiModules_1.gameUiPause;
Game.prototype.gameUiMenu = gameUiModules_1.gameUiMenu;
Game.prototype.showMenuWindow = gameUiModules_1.showMenuWindow;
Game.prototype.showUiPopupWindow = gameUiModules_1.showUiPopupWindow;
Game.prototype.showStartWindow = gameUiModules_1.showStartWindow;
Game.prototype.showPauseWindow = gameUiModules_1.showPauseWindow;
Game.prototype.gameOverWindow = gameUiModules_1.gameOverWindow;
Game.prototype.gameWinWindow = gameUiModules_1.gameWinWindow;
Game.prototype.showGameStats = gameUiModules_1.showGameStats;
Game.prototype.initUiElements = gameUiModules_1.initUiElements;
Game.prototype.gameStart = satartGame_1.gameStart;
Game.prototype.backToStartScreen = satartGame_1.backToStartScreen;
Game.prototype.exitTheGame = satartGame_1.exitTheGame;
Game.prototype.nextLevelDataReload = changeLevels_1.nextLevelDataReload;
Game.prototype.changeLevelProcedure = engineModules_1.changeLevelProcedure;
Game.prototype.getRandomColor = engineModules_1.getRandomColor;
Game.prototype.mapRanomObjectSpawn = gameSideObjectsModule_1.mapRanomObjectSpawn;
Game.prototype.initGrappleObject = gameGrappleObjectsModule_1.initGrappleObject;


/***/ }),

/***/ "./src/constructors/userConstructor.ts":
/*!*********************************************!*\
  !*** ./src/constructors/userConstructor.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playerShipModule_1 = __webpack_require__(/*! ../engine/playerShipModule */ "./src/engine/playerShipModule.ts");
var engineModules_1 = __webpack_require__(/*! ../engine/engineModules */ "./src/engine/engineModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var PlayerShip = /** @class */ (function () {
    function PlayerShip(data, points, healthPoint, numberOflife, x, y, width, height, damage) {
        if (x === void 0) { x = 100; }
        if (y === void 0) { y = 100; }
        this.data = data;
        this.points = points;
        this.numberOflife = numberOflife;
        this.maxOfLife = numberOflife;
        this.healthPoint = healthPoint + data.armor;
        this.maxHealth = healthPoint + data.armor;
        this.x = x - (width / 2);
        this.y = y - (height / 2);
        this.xFinal = x;
        this.yFinal = y;
        this.collisionAllow = true;
        this.objectOwner = "player";
        this.width = width;
        this.height = height;
        this.xAdj = 0;
        this.speed = data.speed;
        this.explosion = data.explosion;
        this.damage = damage;
    }
    PlayerShip.prototype.getPlayerInformation = function () {
        return {
            health: this.healthPoint,
            maxHealthPoint: this.maxHealth
        };
    };
    return PlayerShip;
}());
exports.PlayerShip = PlayerShip;
PlayerShip.prototype.initPlayerShip = playerShipModule_1.initPlayerShip;
PlayerShip.prototype.movePlayerShip = playerShipModule_1.movePlayerShip;
PlayerShip.prototype.shipControl = playerShipModule_1.shipControl;
PlayerShip.prototype.moveShip = playerShipModule_1.moveShip;
PlayerShip.prototype.placeShip = playerShipModule_1.placeShip;
PlayerShip.prototype.setContext = playerShipModule_1.setContext;
PlayerShip.prototype.getObjectPosition = engineModules_1.getObjectPosition;
PlayerShip.prototype.takeDamage = enemiesModules_1.takeDamage;


/***/ }),

/***/ "./src/enemies/enemiesModules.ts":
/*!***************************************!*\
  !*** ./src/enemies/enemiesModules.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var displayModules_1 = __webpack_require__(/*! ../view/displayModules */ "./src/view/displayModules.ts");
var gameSideObjectsModule_1 = __webpack_require__(/*! ../engine/gameSideObjectsModule */ "./src/engine/gameSideObjectsModule.ts");
var gameGrappleObjectsModule_1 = __webpack_require__(/*! ../engine/gameGrappleObjectsModule */ "./src/engine/gameGrappleObjectsModule.ts");
var costructors = __importStar(__webpack_require__(/*! ../constructors */ "./src/constructors/index.ts"));
function placeEnemyes(mainGameObject) {
    displayModules_1.createImage(mainGameObject.gameInitData.ctxActionField, this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
}
exports.placeEnemyes = placeEnemyes;
function moveEnemyes(moveX, moveY) {
    if (moveY === void 0) { moveY = 0; }
    this.x -= this.speed;
    this.y -= moveY;
}
exports.moveEnemyes = moveEnemyes;
function loadEnemyes() {
    this.img = new Image();
    this.img.src = this.shipTexture;
}
exports.loadEnemyes = loadEnemyes;
function shoot(BulletConstructor, mainGameObject) {
    if (mainGameObject.gameInitData.gamePause || !this.isShoot)
        return false;
    //let randomShoot = mainGameObject.gameRandomizer( Math.pow(this.rapidFire, 2) );
    //let shootProbability = mainGameObject.gameRandomizer( this.rapidFire );
    var guns = this.guns;
    var _loop_1 = function (item) {
        if (1 > mainGameObject.gameRandomizer(item.fireRepead)) {
            var bullet_1 = new BulletConstructor(this_1.x, this_1.y + ((item.firePosition) ? item.firePosition : mainGameObject.gameRandomizer(this_1.height)), item.name, item.color, "enemy", item.speed + this_1.speed, item.width, item.height, item.damage, item.type, item.texture, item.sx, item.sy, item.sWidth, item.sHeight, item.explosionAnimation);
            bullet_1.img.src = bullet_1.texture;
            bullet_1.img.onload = function () {
                mainGameObject.gameInitData.allGameBullets = mainGameObject.gameInitData.allGameBullets.concat(bullet_1);
            };
        }
    };
    var this_1 = this;
    for (var _i = 0, guns_1 = guns; _i < guns_1.length; _i++) {
        var item = guns_1[_i];
        _loop_1(item);
    }
}
exports.shoot = shoot;
function enemyAnimation(state) {
    if (state === void 0) { state = true; }
    this.detectFrame += 1;
    if (this.detectFrame % this.animationSteps == 0 && state) {
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if (this.sx >= this.picturesWidth) {
            this.sx = 0;
        }
    }
}
exports.enemyAnimation = enemyAnimation;
function enemyDamageAnimation() {
    if (this.numberOfVerticalItems > 1) {
        var damageAnimationPoint_1 = this.originalHealthPoint / this.numberOfVerticalItems;
        var damagePoint = new Array(this.numberOfVerticalItems).fill(null);
        damagePoint = damagePoint.map(function (item, index) { return damageAnimationPoint_1 * (index + 1); }).sort(function (a, b) { return a - b; }).reverse();
        for (var i = 0; i < damagePoint.length; i++) {
            if (this.healthPoint < damagePoint[i] && this.healthPoint > damagePoint[i + 1] && damagePoint[i + 1]) {
                this.sy = this.sHeight * (i);
                break;
            }
            else if (!damagePoint[i + 1]) {
                this.sy = this.sHeight * (this.numberOfVerticalItems - 1);
            }
        }
    }
}
exports.enemyDamageAnimation = enemyDamageAnimation;
// complex enemy animation for damage
function takeDamage(damage, hitObject, mainGameObject, GrappleObject) {
    /* Bullet hit detection */
    if (this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "enemy" ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint') ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint') ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint') ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint')) {
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
        return this.objectPresent = false;
    }
    /* Game grapple object hit detection */
    if (this.objectOwner == "grappleObject" &&
        hitObject.objectOwner == "player" &&
        !hitObject.hasOwnProperty('bulletType')) {
        this.objectPresent = false;
        mainGameObject.gameInitData.grappleObjectOnScreen = false;
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
        this[this.grapplePower.methodName]({ allGameSideObjects: mainGameObject, playerShipData: hitObject, mainGameObject: mainGameObject });
    }
    /* Hit det dection collision */
    if (this.hasOwnProperty('healthPoint') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.hasOwnProperty('healthPoint') && this.objectOwner == "collide" && hitObject.objectOwner == "player" ||
        this.hasOwnProperty('healthPoint') && this.objectOwner == "collide" && hitObject.objectOwner == "enemy" ||
        this.hasOwnProperty('healthPoint') && this.objectOwner == "environment" && hitObject.objectOwner == "player" ||
        this.hasOwnProperty('healthPoint') && this.objectOwner == "environment" && hitObject.objectOwner == "enemy") {
        unitDamage.call(this, null, mainGameObject);
        this.enemyDamageAnimation();
        if (this.healthPoint <= 0) {
            this.objectPresent = false;
            gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
            /// load coins
            if (this.spawnCoin)
                this.spawnCoin(mainGameObject, costructors.GrappleObject);
            if (this.isBoss)
                bossEnemyDestruction();
        }
    }
    else if (this.hasOwnProperty('healthPoint') && this.objectOwner == "player" && hitObject.objectOwner == "enemy") {
        if (this.collisionAllow) {
            unitDamage.call(this, mainGameObject.getLevelUserData(), mainGameObject);
        }
    }
    else
        return false;
    function unitDamage(data, mainGameObject) {
        this.healthPoint -= damage;
        if (this.healthPoint <= 0) {
            if (data && data.life > 0) {
                data.sourse.playerObject.numberOflife -= 1;
                if (data.sourse.playerObject.numberOflife <= 0) {
                    mainGameObject.gameOverWindow();
                    mainGameObject.gameInitData.gameOver = true;
                    setTimeout(function () {
                        mainGameObject.backToStartScreen(costructors.PlayerShip);
                    }, 3000);
                }
                this.healthPoint = data.sourse.playerObject.maxHealth;
                return false;
            }
            mainGameObject.collectPoints(this.pointsPerUnit);
            return this.objectPresent = false;
        }
    }
    function bossEnemyDestruction() {
        mainGameObject.gameInitData.levelChange = true;
    }
}
exports.takeDamage = takeDamage;
function spawnCoin(mainGameObject, GrappleObject) {
    if (this.hasOwnProperty('extraObjects')) {
        for (var _i = 0, _a = this.extraObjects; _i < _a.length; _i++) {
            var coin = _a[_i];
            coin.x = this.x;
            coin.y = this.y;
            gameGrappleObjectsModule_1.loadGrabbleToSideObject.call(this, mainGameObject, coin, GrappleObject);
        }
    }
}
exports.spawnCoin = spawnCoin;
function hitDetection(object1, objectsArr, mainGameObject, GrappleObject) {
    var collision = null;
    for (var _i = 0, objectsArr_1 = objectsArr; _i < objectsArr_1.length; _i++) {
        var object2 = objectsArr_1[_i];
        var object1Position = object1.getObjectPosition.call(object1);
        var xMin = Math.max(object1Position.x, object2.x);
        var yMin = Math.max(object1Position.y, object2.y);
        var xMax = Math.min(object1Position.x + (object1.width || object1Position.width), object2.x + object2.width);
        var yMax = Math.min(object1Position.y + (object1.height || object1Position.height), object2.y + object2.height);
        var resX = xMax - xMin;
        var resY = yMax - yMin;
        collision = (Math.sign(resX) < 0 || Math.sign(resY) < 0) ? false : "collision";
        if (collision == "collision") {
            if (object1.takeDamage && object2.takeDamage) {
                object1.takeDamage((object2.damage) ? object2.damage : 0, object2, mainGameObject, GrappleObject);
                object2.takeDamage((object1.damage) ? object1.damage : 0, object1, mainGameObject, GrappleObject);
            }
            break;
        }
    }
    return (collision == "collision") ? object1 : false;
}
exports.hitDetection = hitDetection;


/***/ }),

/***/ "./src/enemies/index.ts":
/*!******************************!*\
  !*** ./src/enemies/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./enemiesModules */ "./src/enemies/enemiesModules.ts"));


/***/ }),

/***/ "./src/engine/appErrorListModule.ts":
/*!******************************************!*\
  !*** ./src/engine/appErrorListModule.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noData = 'There is no data', noObject = 'There is no Object';
exports.noData = noData;
exports.noObject = noObject;


/***/ }),

/***/ "./src/engine/backgroundModule.ts":
/*!****************************************!*\
  !*** ./src/engine/backgroundModule.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var displayModules_1 = __webpack_require__(/*! ../view/displayModules */ "./src/view/displayModules.ts");
function updateMap() {
    var backgroundObject = this;
    this.x -= this.backgroundSpeed;
    if (Math.sign(this.backgroundSpeed) > 0 && this.x + this.screenData.width < 0) {
        this.x = this.screenData.width;
    }
    else if (Math.sign(this.backgroundSpeed) < 0 && this.x > this.screenData.width) {
        this.x = 0 - this.screenData.width;
    }
    displayModules_1.createImage(backgroundObject.ctx, backgroundObject.img, backgroundObject.x, 0, backgroundObject.screenData.width + 2, backgroundObject.screenData.height);
}
exports.updateMap = updateMap;
function changePartOfTexture(mainGameObject, backgroundArray) {
    var levelData = mainGameObject.getLevelUserData();
    var screenData = mainGameObject.getScreenSize();
    if (levelData.minutes <= this.timeToExtraMapMinutes
        && levelData.seconds <= this.timeToExtraMapSeconds
        && this.extraMap && this.x >= screenData.width - 200) {
        var info = mainGameObject.showGameInfo();
        this.img.src = __dirname + this.extraMap;
    }
}
exports.changePartOfTexture = changePartOfTexture;


/***/ }),

/***/ "./src/engine/bulletsModule.ts":
/*!*************************************!*\
  !*** ./src/engine/bulletsModule.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var displayModules_1 = __webpack_require__(/*! ../view/displayModules */ "./src/view/displayModules.ts");
function createBullets(mainGameObject) {
    displayModules_1.createLaserBullet({
        source: this,
        objectOwner: this.objectOwner,
        ctx: mainGameObject.gameInitData.ctxActionField,
        x: this.x,
        y: this.y,
        color: this.bulletTexture,
        width: this.width,
        height: this.height,
        radius: 5,
        type: this.type,
        img: this.img,
        sx: this.sx, sy: this.sy, sWidth: this.sWidth, sHeight: this.sHeight
    });
}
exports.createBullets = createBullets;
function initBullets() {
}
exports.initBullets = initBullets;
function moveBullets(playerShipData, gameObject) {
    switch (this.type) {
        case "blaster":
            move.call(this);
            break;
        case "beam":
            beam.call(this);
            move.call(this);
            break;
        default:
            move.call(this);
    }
    function move() {
        if (this.objectOwner == "player")
            this.x += this.bulletSpeed;
        else
            this.x -= this.bulletSpeed;
    }
    function beam() {
        var screenData = gameObject.getScreenSize();
        if (this.x > 0) {
            this.width += this.bulletSpeed;
        }
        else if (this.width > 0) {
            this.x = 0;
            this.width -= this.bulletSpeed;
        }
    }
}
exports.moveBullets = moveBullets;


/***/ }),

/***/ "./src/engine/engineModules.ts":
/*!*************************************!*\
  !*** ./src/engine/engineModules.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var displayModules_1 = __webpack_require__(/*! ../view/displayModules */ "./src/view/displayModules.ts");
//import { levelConstructor } from '../constructors/levelConstructors';
function initField(screenWidth, screenHeight) {
    if (screenWidth === void 0) { screenWidth = window.innerWidth; }
    if (screenHeight === void 0) { screenHeight = window.innerHeight; }
    var gameField = [].concat(this.gameInitData.gameField, this.gameInitData.gameActionField, this.gameInitData.gameUIField);
    if (!gameField)
        throw Error('Error');
    for (var _i = 0, gameField_1 = gameField; _i < gameField_1.length; _i++) {
        var screen_1 = gameField_1[_i];
        screen_1 = Object.assign(screen_1, { width: screenWidth - 4, height: screenHeight - 4 });
    }
}
exports.initField = initField;
function setGameFields() {
    this.initField();
    this.createContext();
    this.initPlayerShip();
}
exports.setGameFields = setGameFields;
function warpEffect() {
    var screenSiz = this.getScreenSize();
    var ctx = this.gameInitData.ctx;
    var gameWarpObjects = this.gameInitData.warpObjects;
    this.getSecondMeasure(warpTimer, { timeToEressLevel: this.gameInitData.timeToEressLevel, ctx: ctx, screenSiz: this.getScreenSize() });
    this.gameInitData.warpObjects = (gameWarpObjects.length < 350) ? this.gameInitData.warpObjects.concat({
        x: screenSiz.width,
        y: this.gameRandomizer(screenSiz.height),
        height: this.gameRandomizer(20, 10),
        width: 10,
        speed: this.gameRandomizer(10, 5),
        background: this.getRandomColor(),
    }) : this.gameInitData.warpObjects;
    if (gameWarpObjects.length > 0) {
        for (var _i = 0, gameWarpObjects_1 = gameWarpObjects; _i < gameWarpObjects_1.length; _i++) {
            var warper = gameWarpObjects_1[_i];
            warper.x -= (warper.x > 0) ? warper.speed : 0;
            warper.width = (gameWarpObjects.length < 150) ? warper.width - warper.speed
                : (gameWarpObjects.length > 150 && gameWarpObjects.length < 350) ? warper.width + warper.speed : warper.width - warper.speed;
            ctx.fillStyle = warper.background;
            displayModules_1.draw(ctx, 'fillRect', warper.x, warper.y, warper.width, warper.height);
            ctx.fill();
        }
    }
    function warpTimer(levelData) {
        var leveChangeStatus = (this.gameInitData.timeToEressLevel >= 0) ? false : true;
        if (this.gameInitData.timeToEressLevel >= 0 && !leveChangeStatus)
            this.gameInitData.timeToEressLevel -= 1;
        if (this.gameInitData.timeToEressLevel < 0 && !leveChangeStatus)
            this.changeLevelProcedure();
    }
}
exports.warpEffect = warpEffect;
function levelInit(GameBackground, ctx, mainGameObject) {
    var gameData = this.showLevelData();
    var allBackgroundElements = gameData.levelBackgroundElements;
    mainGameObject.gameInitData.backScreenPause = false;
    for (var _i = 0, allBackgroundElements_1 = allBackgroundElements; _i < allBackgroundElements_1.length; _i++) {
        var mapObject = allBackgroundElements_1[_i];
        var mapItem = new GameBackground(mapObject.levelMap, mapObject.speed, this.gameInitData.screen, ctx, (this.gameInitData.mapBackgroundObjects.length % 2 == 0) ? true : null, (mapObject.extraMap) ? mapObject.extraMap : null, (mapObject.timeToExtraMapSeconds) ? mapObject.timeToExtraMapSeconds : null, (mapObject.timeToExtraMapMinutes) ? mapObject.timeToExtraMapMinutes : null);
        mainGameObject.gameInitData.mapBackgroundObjects = mainGameObject.gameInitData.mapBackgroundObjects.concat(mapItem);
        mapItem.img.src = __dirname + mapItem.backgroundTexture;
    }
}
exports.levelInit = levelInit;
function createContext() {
    this.gameInitData.ctx = this.gameInitData.gameField.getContext('2d');
    this.gameInitData.ctxActionField = this.gameInitData.gameActionField.getContext('2d');
    this.gameInitData.ctxUIField = this.gameInitData.gameUIField.getContext('2d');
}
exports.createContext = createContext;
function getScreenSize() {
    var width = this.gameInitData.screen.width, height = this.gameInitData.screen.height;
    return { width: width, height: height };
}
exports.getScreenSize = getScreenSize;
function changeLevelProcedure() {
    // animation for warp, http request for level and enemyes, 10 levels must be
    // some levels must contain boss at least 2 boss
    // last level is final titles the end save score
    var levelData = this.showGameInfo();
    var level = this.changeLevel(levelData.gameData.currentLevel + 1);
    if (level <= levelData.gameData.levelData.allLevels) {
        this.nextLevelDataReload(levelData);
    }
    else {
        this.gameInitData.gameWin = true;
    }
}
exports.changeLevelProcedure = changeLevelProcedure;
function levelTimer() {
    var data = this.getLevelUserData();
    if (!data.sourse.levelData.bossPresent) {
        var levelTime = data.sourse.levelData.levelDetails; // { levelMinutes: 3, levelSeconds: 43 }
        if (!this.gameInitData.levelChange)
            this.getSecondMeasure(levelTimeAction, data.sourse.levelData.levelDetails);
    }
    else {
        data.sourse.levelData.levelDetails.levelSeconds = null;
        data.sourse.levelData.levelDetails.levelMinutes = null;
    }
    function levelTimeAction(time) {
        if (time.levelSeconds <= 0) {
            if (time.levelMinutes == 0 && time.levelSeconds == 0) {
                time.levelSeconds = 0;
                this.gameInitData.levelChange = true;
            }
            time.levelMinutes = (time.levelMinutes > 0) ? time.levelMinutes - 1 : 0;
        }
        time.levelSeconds = (time.levelSeconds > 0) ? time.levelSeconds - 1 : (this.gameInitData.levelChange) ? 0 : 59;
    }
}
exports.levelTimer = levelTimer;
function getSecondMeasure(callback) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var gameSecond;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameSecond = 1000 / this.gameInitData.intervalCount;
                    if (!(this.gameInitData.gemeExtraSeconds % gameSecond == 0)) return [3 /*break*/, 4];
                    this.gameInitData.gemeExtraSeconds = 0;
                    return [4 /*yield*/, callback];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 3];
                    return [4 /*yield*/, callback.call.apply(callback, __spreadArrays([this], data))];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [2 /*return*/, gameSecond];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getSecondMeasure = getSecondMeasure;
function gameSecondsIncrease() {
    this.gameInitData.gemeExtraSeconds += 1;
}
exports.gameSecondsIncrease = gameSecondsIncrease;
function getLevelUserData() {
    var dataSourse = this.gameInitData.gameData;
    var levelTime = dataSourse.levelData.levelDetails;
    return {
        sourse: dataSourse,
        currentLevel: dataSourse.currentLevel,
        allLevels: dataSourse.levelData.allLevels,
        points: dataSourse.currentPoint,
        gameCoins: dataSourse.gameCoins,
        life: dataSourse.playerObject.numberOflife,
        minutes: levelTime.levelMinutes,
        seconds: levelTime.levelSeconds
    };
}
exports.getLevelUserData = getLevelUserData;
function deleteBullet(bullet) {
    if (bullet.x > this.gameInitData.screen.width
        || bullet.x < bullet.width * -1
        || !bullet.objectPresent) {
        var index = this.gameInitData.allGameBullets.indexOf(bullet);
        this.gameInitData.allGameBullets.splice(index, 1);
    }
}
exports.deleteBullet = deleteBullet;
function deleteObjects(object) {
    if (object.x + object.sWidth < 0 || !object.objectPresent) {
        var index = this.gameInitData.allGameEnemies.indexOf(object);
        this.gameInitData.allGameEnemies.splice(index, 1);
    }
}
exports.deleteObjects = deleteObjects;
function delateSideObject(object) {
    if (!object.objectPresent || object.x < 0 - object.width) {
        var index = this.gameInitData.allGameSideObjects.indexOf(object);
        this.gameInitData.allGameSideObjects.splice(index, 1);
    }
}
exports.delateSideObject = delateSideObject;
function collectPoints(point) {
    this.gameInitData.gameData.currentPoint += point;
}
exports.collectPoints = collectPoints;
function getObjectPosition() {
    var mainObject = this;
    var position = {
        x: mainObject.x,
        y: mainObject.y,
        width: mainObject.width,
        height: mainObject.height,
    };
    return position;
}
exports.getObjectPosition = getObjectPosition;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
exports.getRandomColor = getRandomColor;
function preloadImage(items) {
    var image = document.querySelector("#preloader");
    loopVertical(items);
    function loopVertical(object) {
        if (!object)
            return;
        for (var _i = 0, _a = Object.entries(object); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], val = _b[1];
            if (typeof object[key] === "object") {
                loopVertical(object[key]);
            }
            assignimage(key, val, image);
        }
    }
    function assignimage(key, val, image) {
        if (key == 'skinName' || key == 'texture' || key == 'levelMap') {
            if (val)
                image.src = __dirname + val;
        }
    }
}
exports.preloadImage = preloadImage;


/***/ }),

/***/ "./src/engine/gameGrappleObjectsModule.ts":
/*!************************************************!*\
  !*** ./src/engine/gameGrappleObjectsModule.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function loadGrabbleToSideObject(mainGameObject, target, GrappleObject) {
    return __awaiter(this, void 0, void 0, function () {
        var gameInfo, gameData, screenData, context, sideObject, objectData, grappleObject, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    gameInfo = mainGameObject.showGameInfo(), gameData = gameInfo.gameData, screenData = mainGameObject.getScreenSize();
                    context = mainGameObject;
                    sideObject = this;
                    objectData = {
                        x: (target.x) ? target.x + context.gameRandomizer(sideObject.width) : screenData.width + 100,
                        y: (target.y) ? target.y + context.gameRandomizer(sideObject.height) : context.gameRandomizer(screenData.height),
                        sx: 0,
                        sy: 0,
                        objectOwner: target.objectOwner,
                        sWidth: target.imageWidth / target.numberOfItems,
                        sHeight: target.imageHeight,
                        width: target.width,
                        height: target.height,
                        animationSteps: target.animationSteps,
                        target: null,
                        numberOfItems: target.numberOfItems,
                        texture: target.skinName,
                        speed: target.speed,
                        picturesWidth: target.imageWidth,
                        healthPoint: target.healthPoint,
                        damage: target.damage,
                        isBackground: null,
                        explosion: target.explosionAnimation,
                        pointsPerUnit: target.pointsPerUnit,
                        isGrapple: target.isGrapple,
                        grapplePower: target.grapplePower
                    };
                    grappleObject = new GrappleObject(__assign({}, objectData));
                    grappleObject.img.onload = function () {
                        mainGameObject.gameInitData.grappleObjectOnScreen = true;
                        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(grappleObject);
                    };
                    _a = grappleObject.img;
                    return [4 /*yield*/, grappleObject.texture];
                case 1:
                    _a.src = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadGrabbleToSideObject = loadGrabbleToSideObject;
function initGrappleObject(GrappleObject, playerShipData) {
    return __awaiter(this, void 0, void 0, function () {
        var gameInfo, gameData, levelData, grappleData, screenData, spawnProbability, randomObject;
        return __generator(this, function (_a) {
            if (this.gameInitData.grappleObjectOnScreen)
                return [2 /*return*/, false];
            gameInfo = this.showGameInfo(), gameData = gameInfo.gameData, levelData = gameData.levelData, grappleData = gameData.grappleObjects, screenData = this.getScreenSize();
            spawnProbability = this.gameRandomizer(levelData.grapleObjectProbability);
            if (spawnProbability < 1) {
                randomObject = grappleData[this.gameRandomizer(grappleData.length)];
                switch (randomObject.grapplePower.name) {
                    case "life":
                        if (playerShipData.numberOflife >= playerShipData.maxOfLife - 1)
                            return [2 /*return*/];
                        break;
                    default:
                        false;
                }
                loadGrabbleToSideObject(this, randomObject, GrappleObject);
            }
            return [2 /*return*/];
        });
    });
}
exports.initGrappleObject = initGrappleObject;
function addPlayerLife(_a) {
    var allGameSideObjects = _a.allGameSideObjects, playerShipData = _a.playerShipData, mainGameObject = _a.mainGameObject;
    playerShipData.numberOflife += this.grapplePower.value;
}
exports.addPlayerLife = addPlayerLife;
function collectCoin(_a) {
    var allGameSideObjects = _a.allGameSideObjects, playerShipData = _a.playerShipData, mainGameObject = _a.mainGameObject;
    var gameInfo = mainGameObject.showGameInfo(), gameData = gameInfo.gameData, levelData = gameData.levelData, grappleData = gameData.grappleObjects;
    gameData.gameCoins += this.grapplePower.value;
}
exports.collectCoin = collectCoin;


/***/ }),

/***/ "./src/engine/gameModules/changeLevels.ts":
/*!************************************************!*\
  !*** ./src/engine/gameModules/changeLevels.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var satartGame_1 = __webpack_require__(/*! ./satartGame */ "./src/engine/gameModules/satartGame.ts");
function nextLevelDataReload(levelData) {
    return __awaiter(this, void 0, void 0, function () {
        function horizontalVerticalSearch(mainObject) {
            for (var _i = 0, _a = Object.entries(mainObject); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (typeof mainObject[key] == 'object' && value != null && !mainObject[key].length) {
                    horizontalVerticalSearch(mainObject[key]);
                }
                assignValue.call(this, key, mainObject);
            }
        }
        function assignValue(incomeKey, mainData) {
            for (var _i = 0, _a = Object.entries(refreshLevel); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                if (key == incomeKey && val != null) {
                    this.gameInitData[key] = val;
                }
            }
        }
        var nextLevel, serverNewData, context, refreshLevel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nextLevel = levelData.gameData.currentLevel;
                    return [4 /*yield*/, satartGame_1.serverRequest({ level: nextLevel, shipConfiguration: 1 })];
                case 1:
                    serverNewData = _a.sent();
                    context = this;
                    refreshLevel = {
                        gameData: {
                            currentLevel: nextLevel,
                            currentPoint: context.gameInitData.gameData.currentPoint,
                            playerObject: context.gameInitData.gameData.playerObject,
                            gameCoins: context.gameInitData.gameData.gameCoins,
                            levelData: serverNewData.levelData,
                            levelObjects: serverNewData.levelObjects,
                            grappleObjects: serverNewData.grappleObjects,
                            gameSetings: context.gameInitData.gameData.gameSetings,
                            enemyData: serverNewData.enemyData,
                            controllers: context.gameInitData.gameData.controllers
                        },
                        enemyType: null,
                        allGameSideObjects: [],
                        allGameEnemies: [],
                        allGameBullets: [],
                        allGameMapOBjects: [],
                        mapBackgroundObjects: [],
                        gamePause: false,
                        gameUiPause: false,
                        backScreenPause: true,
                        gameOver: false,
                        grappleObjectOnScreen: false,
                        gemeExtraSeconds: 0,
                    };
                    setTimeout(function () {
                        context.gameInitData.warpObjects = [];
                        context.gameInitData.timeToEressLevel = 6;
                        context.gameInitData.levelChange = false;
                    }, 5000);
                    horizontalVerticalSearch.call(this, this.gameInitData);
                    return [2 /*return*/];
            }
        });
    });
}
exports.nextLevelDataReload = nextLevelDataReload;
function changeShip() {
}
function changeWeapon() {
}


/***/ }),

/***/ "./src/engine/gameModules/index.ts":
/*!*****************************************!*\
  !*** ./src/engine/gameModules/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./satartGame */ "./src/engine/gameModules/satartGame.ts"));
__export(__webpack_require__(/*! ./changeLevels */ "./src/engine/gameModules/changeLevels.ts"));


/***/ }),

/***/ "./src/engine/gameModules/satartGame.ts":
/*!**********************************************!*\
  !*** ./src/engine/gameModules/satartGame.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var serverRequestModules_1 = __webpack_require__(/*! ../../server/serverRequestModules */ "./src/server/serverRequestModules.ts");
var engineModules_1 = __webpack_require__(/*! ../engineModules */ "./src/engine/engineModules.ts");
var loadScreen_1 = __webpack_require__(/*! ../../ui/loadScreen */ "./src/ui/loadScreen.ts");
var remote = __webpack_require__(/*! electron */ "electron").remote;
function serverRequest(gameInformation) {
    return __awaiter(this, void 0, void 0, function () {
        var serverLocation, levelData, levelObjects, grappleObjects, gameSetings, userData, enemyData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("development", process.env.HOST);
                    serverLocation = {
                        host: process.env.HOST,
                        picturesDirection: __dirname + '/public/images/',
                        levelData: {
                            method: "GET",
                            url: "api/level-data"
                        },
                        levelObjects: {
                            method: "GET",
                            url: "api/level-objects"
                        },
                        grappleObjects: {
                            method: "GET",
                            url: "api/grapple-objects"
                        },
                        gameSetings: {
                            method: "GET",
                            url: "api/game-settings"
                        },
                        userShip: {
                            method: "GET",
                            url: "api/user-ship"
                        },
                        enemylData: {
                            method: "GET",
                            url: "api/enemy-ship"
                        }
                    };
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.levelData.url,
                            method: serverLocation.levelData.method,
                            data: null,
                            headers: { 'maplevel': gameInformation.level }
                        })];
                case 1:
                    levelData = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.levelObjects.url,
                            method: serverLocation.levelObjects.method,
                            data: null,
                            headers: { 'mapObject': levelData.levelOBjects }
                        })];
                case 2:
                    levelObjects = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.grappleObjects.url,
                            method: serverLocation.grappleObjects.method,
                            data: null,
                            headers: { 'grappleObject': levelData.grappleObject }
                        })];
                case 3:
                    grappleObjects = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.gameSetings.url,
                            method: serverLocation.gameSetings.method,
                            data: null,
                            headers: null
                        })];
                case 4:
                    gameSetings = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.userShip.url,
                            method: serverLocation.userShip.method,
                            data: null,
                            headers: { 'usership': gameInformation.shipConfiguration }
                        })];
                case 5:
                    userData = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.enemylData.url,
                            method: serverLocation.enemylData.method,
                            data: null,
                            headers: { 'ship-type-number': levelData.enemyType }
                        })];
                case 6:
                    enemyData = _a.sent();
                    engineModules_1.preloadImage(enemyData);
                    engineModules_1.preloadImage(levelData);
                    engineModules_1.preloadImage(levelObjects);
                    return [2 /*return*/, {
                            levelData: levelData,
                            levelObjects: levelObjects,
                            grappleObjects: grappleObjects,
                            gameSetings: gameSetings,
                            userData: userData,
                            enemyData: enemyData
                        }];
            }
        });
    });
}
exports.serverRequest = serverRequest;
function gameDataInit(PlayerShip) {
    return __awaiter(this, void 0, void 0, function () {
        var gameField, gameActionField, gameUIfield, level, shipType, shipLife, res, levelData, levelObjects, grappleObjects, gameSetings, userData, enemyData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loadScreen_1.loadWindow({ loadStatus: "load" });
                    gameField = document.querySelector('#gamefield'), gameActionField = document.querySelector('#gameObjectsfield'), gameUIfield = document.querySelector('#gameUifield');
                    level = 1, shipType = 1, shipLife = 5;
                    return [4 /*yield*/, serverRequest({ level: level, shipConfiguration: shipType })];
                case 1:
                    res = _a.sent();
                    levelData = res.levelData;
                    levelObjects = res.levelObjects;
                    grappleObjects = res.grappleObjects;
                    gameSetings = res.gameSetings;
                    userData = res.userData;
                    enemyData = res.enemyData;
                    if (levelData.status === "error" || levelObjects === "error" || grappleObjects === "error" ||
                        levelData.gameSetings === "error" || userData === "error" || enemyData === "error") {
                        loadScreen_1.loadWindow({ loadStatus: "serverError" });
                        return [2 /*return*/, null];
                    }
                    else {
                        loadScreen_1.loadWindow({ loadStatus: "success" });
                    }
                    return [2 /*return*/, { data: {
                                ctx: null,
                                gameField: (gameField) ? gameField : null,
                                gameActionField: (gameActionField) ? gameActionField : null,
                                gameUIField: (gameUIfield) ? gameUIfield : null,
                                gameData: {
                                    currentLevel: level,
                                    currentPoint: 0,
                                    gameCoins: 0,
                                    playerObject: new PlayerShip(userData, 0, 300, shipLife, 100, 100, userData.size.width, userData.size.height, userData.damage),
                                    levelData: levelData,
                                    levelObjects: levelObjects,
                                    grappleObjects: grappleObjects,
                                    gameSetings: gameSetings,
                                    enemyData: enemyData,
                                    controllers: null
                                },
                                screen: {
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                },
                                intervalCount: 20,
                                enemyType: null,
                                allGameSideObjects: [],
                                allGameEnemies: [],
                                allGameBullets: [],
                                allGameMapOBjects: [],
                                mapBackgroundObjects: [],
                                warpObjects: [],
                                timeToEressLevel: 6,
                                levelChange: false,
                                gamePause: false,
                                gameUiPause: false,
                                backScreenPause: true,
                                gameStatus: false,
                                gameOver: false,
                                gameWin: false,
                                grappleObjectOnScreen: false,
                                gemeExtraSeconds: 0,
                            }
                        }];
            }
        });
    });
}
exports.gameDataInit = gameDataInit;
function gameEngine(gameDataInit) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
exports.gameEngine = gameEngine;
function gameStart() {
    this.gameInitData.gameOver = false;
    this.gameInitData.gameStatus = true;
}
exports.gameStart = gameStart;
function backToStartScreen(PlayerShip) {
    return __awaiter(this, void 0, void 0, function () {
        var newInitdata, _i, _a, _b, key, value;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, gameDataInit(PlayerShip)];
                case 1:
                    newInitdata = _c.sent();
                    if (!newInitdata.data)
                        throw new Error("No 'newInitdata.data'");
                    for (_i = 0, _a = Object.entries(newInitdata.data); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        if (value !== null) {
                            this.gameInitData[key] = value;
                        }
                        ;
                    }
                    this.gameInitData.gameOver = false;
                    this.gameInitData.gameStatus = false;
                    return [2 /*return*/];
            }
        });
    });
}
exports.backToStartScreen = backToStartScreen;
function exitTheGame() {
    var w = remote.getCurrentWindow();
    w.close();
}
exports.exitTheGame = exitTheGame;


/***/ }),

/***/ "./src/engine/gameSideObjectsModule.ts":
/*!*********************************************!*\
  !*** ./src/engine/gameSideObjectsModule.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var regularEnemyAiModules_1 = __webpack_require__(/*! ../ai/regularEnemyAiModules */ "./src/ai/regularEnemyAiModules.ts");
function explosionFire(targetData, mainGameObject, hitObject, SideObject) {
    return __awaiter(this, void 0, void 0, function () {
        var hitX, targetX, adjust, compensation, explosionData, sideObject, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    hitX = hitObject.x + hitObject.width / 2, targetX = targetData.x + targetData.width / 2;
                    adjust = Math.max(hitX, targetX) - Math.min(hitX, targetX);
                    compensation = (hitObject.x > targetData.x) ? adjust : adjust / 2;
                    explosionData = {
                        x: targetData.x - targetData.explosion.width / 2,
                        y: (targetData.bulletType) ? targetData.y - targetData.explosion.width / 2 : targetData.y,
                        sx: 0,
                        sy: 0,
                        objectOwner: "explosion",
                        sWidth: targetData.explosion.imageWidth / targetData.explosion.numberOfItems,
                        sHeight: targetData.explosion.imageHeight,
                        width: targetData.explosion.width * 2,
                        height: targetData.explosion.width * 2,
                        animationSteps: targetData.explosion.animationSteps,
                        target: hitObject.objectOwner,
                        numberOfItems: targetData.explosion.imageWidth / targetData.explosion.numberOfItems,
                        texture: targetData.explosion.texture,
                        speed: hitObject.speed / 2,
                        picturesWidth: targetData.explosion.imageWidth
                    };
                    sideObject = new SideObject(__assign({}, explosionData));
                    sideObject.img.onload = function () {
                        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
                    };
                    _a = sideObject.img;
                    return [4 /*yield*/, sideObject.texture];
                case 1:
                    _a.src = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.explosionFire = explosionFire;
function fireAnimationEnded(allGameSideObjects) {
    this.detectFrame += 1;
    if (this.detectFrame % this.animationSteps == 0) {
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if (this.sx >= this.picturesWidth) {
            this.objectPresent = false;
            this.sx = 0;
        }
    }
    if (this.sx >= this.picturesWidth) {
        this.animationState = false;
    }
}
exports.fireAnimationEnded = fireAnimationEnded;
function mapObjectMove() {
    this.x -= (this.speed) ? this.speed : 3;
}
exports.mapObjectMove = mapObjectMove;
function mapRanomObjectSpawn(levelObjects, SideObject, allGameSideObjects) {
    return __awaiter(this, void 0, void 0, function () {
        function mapObjectSpawner(levelObjects, SideObject, allGameSideObjects) {
            return __awaiter(this, void 0, void 0, function () {
                var gameData, levelData, spawnProbability, screenData, levelObjectProps, yPosition, extraObjects, _a, explosionData, sideObject_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            gameData = this.showGameInfo().gameData;
                            levelData = gameData.levelData;
                            spawnProbability = this.gameRandomizer(levelData.objectProbability);
                            if (!(spawnProbability < levelData.objectMinTimeSpawn)) return [3 /*break*/, 4];
                            screenData = this.getScreenSize();
                            levelObjectProps = levelObjects[this.gameRandomizer(levelObjects.length)];
                            yPosition = (levelObjectProps.spawnDetails.position == "bottom" && typeof levelObjectProps.spawnDetails.position === "string") ? screenData.height - this.gameRandomizer(levelObjectProps.height)
                                : (levelObjectProps.spawnDetails.position == "top" && typeof levelObjectProps.spawnDetails.position === "string") ? this.gameRandomizer(levelObjectProps.height / 3)
                                    : (levelObjectProps.spawnDetails.position == "scene" && typeof levelObjectProps.spawnDetails.position === "string") ? this.gameRandomizer(levelObjectProps.height)
                                        : (typeof levelObjectProps.spawnDetails.position === "string") ? this.gameRandomizer(screenData.height)
                                            : levelObjectProps.spawnDetails.position;
                            if (!(levelObjectProps.extraObjects)) return [3 /*break*/, 2];
                            return [4 /*yield*/, regularEnemyAiModules_1.loadExtraObject.call(this, levelObjectProps.extraObjects)];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = false;
                            _b.label = 3;
                        case 3:
                            extraObjects = _a;
                            explosionData = {
                                x: screenData.width,
                                y: yPosition,
                                sx: 0,
                                sy: 0,
                                objectOwner: levelObjectProps.objectOwner,
                                sWidth: levelObjectProps.imageWidth / levelObjectProps.numberOfItems,
                                sHeight: levelObjectProps.imageHeight,
                                width: levelObjectProps.width,
                                height: levelObjectProps.height,
                                animationSteps: levelObjectProps.animationSteps,
                                target: null,
                                numberOfItems: levelObjectProps.numberOfItems,
                                texture: levelObjectProps.skinName,
                                speed: levelObjectProps.speed,
                                picturesWidth: levelObjectProps.imageWidth,
                                healthPoint: levelObjectProps.healthPoint,
                                damage: levelObjectProps.damage,
                                isBackground: levelObjectProps.isBackground,
                                explosion: levelObjectProps.explosionAnimation,
                                pointsPerUnit: levelObjectProps.pointsPerUnit,
                                extraObjects: extraObjects
                            };
                            sideObject_1 = new SideObject(__assign({}, explosionData));
                            sideObject_1.img.src = sideObject_1.texture;
                            sideObject_1.img.onload = function () {
                                _this.gameInitData.allGameSideObjects = _this.gameInitData.allGameSideObjects.concat(sideObject_1);
                            };
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            this.getSecondMeasure(mapObjectSpawner, levelObjects, SideObject, allGameSideObjects);
            return [2 /*return*/];
        });
    });
}
exports.mapRanomObjectSpawn = mapRanomObjectSpawn;


/***/ }),

/***/ "./src/engine/index.ts":
/*!*****************************!*\
  !*** ./src/engine/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./gameSideObjectsModule */ "./src/engine/gameSideObjectsModule.ts"));
__export(__webpack_require__(/*! ./playerShipModule */ "./src/engine/playerShipModule.ts"));
__export(__webpack_require__(/*! ./engineModules */ "./src/engine/engineModules.ts"));
__export(__webpack_require__(/*! ./bulletsModule */ "./src/engine/bulletsModule.ts"));
__export(__webpack_require__(/*! ./backgroundModule */ "./src/engine/backgroundModule.ts"));
__export(__webpack_require__(/*! ./appErrorListModule */ "./src/engine/appErrorListModule.ts"));
__export(__webpack_require__(/*! ./gameGrappleObjectsModule */ "./src/engine/gameGrappleObjectsModule.ts"));


/***/ }),

/***/ "./src/engine/playerShipModule.ts":
/*!****************************************!*\
  !*** ./src/engine/playerShipModule.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constructors = __importStar(__webpack_require__(/*! ../constructors/ */ "./src/constructors/index.ts"));
var view = __importStar(__webpack_require__(/*! ../view/ */ "./src/view/index.ts"));
function initPlayerShip(mainGameObject) {
    var _this = this;
    if (this.ctx) {
        var image = this.data.texture, imageLocation = mainGameObject.showGameInfo().imageDirrection;
        this.img = new Image();
        this.img.onload = function () {
            if (_this.placePlayerShip) {
                _this.placePlayerShip();
            }
            return _this.img;
        };
        this.img.src = imageLocation + image;
    }
}
exports.initPlayerShip = initPlayerShip;
function movePlayerShip() {
    if (this.img) {
        if (this.ctx && this.img) {
            view.createImage(this.ctx, this.img, this.x, this.y, this.width, this.height);
        }
    }
}
exports.movePlayerShip = movePlayerShip;
function shipControl(mainGameObject) {
    var _this = this;
    var controlKeys = mainGameObject.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown", function (e) {
        if (mainGameObject.gameInitData.gamePause)
            return false;
        if (controlKeys.down.some(function (o) { return e.keyCode == o; }))
            _this.moveShip({ xPos: 0, yPos: _this.data.speed });
        if (controlKeys.left.some(function (o) { return e.keyCode == o; }))
            _this.moveShip({ xPos: _this.data.speed * -1, yPos: 0 });
        if (controlKeys.right.some(function (o) { return e.keyCode == o; }))
            _this.moveShip({ xPos: _this.data.speed, yPos: 0 });
        if (controlKeys.up.some(function (o) { return e.keyCode == o; }))
            _this.moveShip({ xPos: 0, yPos: _this.data.speed * -1 });
    });
    document.addEventListener("mousemove", function (e) {
        if (mainGameObject.gameInitData.gamePause)
            return false;
        if (e.target.tagName === "CANVAS"
            && !mainGameObject.gameInitData.gamePause
            && mainGameObject.gameInitData.gameStatus) {
            var x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;
            _this.xFinal = ((x % _this.data.speed == 0) ? x : _this.data.speed * Math.floor(x / _this.data.speed)) - (_this.width / 2);
            _this.yFinal = ((y % _this.data.speed == 0) ? y : _this.data.speed * Math.floor(y / _this.data.speed)) - (_this.height / 2);
        }
    });
    document.addEventListener("click", function (e) {
        if (mainGameObject.gameInitData.gamePause)
            return false;
        var guns = _this.data.guns;
        var _loop_1 = function (item) {
            var bullet = new constructors.BulletConstruct(_this.x, _this.y + item.firePosition, item.name, item.color, "player", item.speed + _this.xAdj, item.width, item.height, item.damage, item.type, item.texture, item.sx, item.sy, item.sWidth, item.sHeight, item.explosionAnimation);
            bullet.img.src = bullet.texture;
            bullet.img.onload = function () {
                mainGameObject.gameInitData.allGameBullets = mainGameObject.gameInitData.allGameBullets.concat(bullet);
            };
        };
        for (var _i = 0, guns_1 = guns; _i < guns_1.length; _i++) {
            var item = guns_1[_i];
            _loop_1(item);
        }
    });
}
exports.shipControl = shipControl;
function setContext(context) {
    this.ctx = context;
}
exports.setContext = setContext;
function placeShip() {
    var xAdj = (this.xFinal - this.x) / this.data.speed;
    var yAdj = (this.yFinal - this.y) / this.data.speed;
    xAdj = (Math.sign(xAdj) > 0) ? xAdj : xAdj * -1;
    yAdj = (Math.sign(yAdj) > 0) ? yAdj : yAdj * -1;
    xAdj = (xAdj > this.data.minSpeed) ? this.data.minSpeed : xAdj;
    yAdj = (yAdj > this.data.minSpeed) ? this.data.minSpeed : yAdj;
    this.xAdj = (this.x > this.xFinal) ? 0 : xAdj;
    this.x = (this.x > this.xFinal) ? this.x - xAdj :
        (this.x < this.xFinal) ? this.x + xAdj : this.xFinal;
    this.y = (this.y > this.yFinal) ? this.y - yAdj :
        (this.y < this.yFinal) ? this.y + yAdj : this.yFinal;
}
exports.placeShip = placeShip;
function moveShip(_a) {
    var _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    this.x += xPos;
    this.y += yPos;
}
exports.moveShip = moveShip;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../sass/main.sass */ "./sass/main.sass");
var path = __webpack_require__(/*! path */ "path");
var gameDataModules = __importStar(__webpack_require__(/*! ./engine/gameModules */ "./src/engine/gameModules/index.ts"));
var constructors = __importStar(__webpack_require__(/*! ./constructors */ "./src/constructors/index.ts"));
var displayModules_1 = __webpack_require__(/*! ./view/displayModules */ "./src/view/displayModules.ts");
var appMenu_1 = __webpack_require__(/*! ./appMenu/appMenu */ "./src/appMenu/appMenu.ts");
(function init() {
    return __awaiter(this, void 0, void 0, function () {
        /*   game engin runing   */
        function gameInterval() {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, bullet, _b, _c, enemy, _d, _e, object, _f, _g, backgroundMap;
                return __generator(this, function (_h) {
                    if (gameObject.gameInitData.ctxUIField) {
                        displayModules_1.clearField(gameObject.gameInitData.ctxUIField, gameObject.gameInitData.screen.width, gameObject.gameInitData.screen.height);
                    }
                    if (gameObject.gameInitData.ctxActionField && !gameObject.gameInitData.gamePause) {
                        displayModules_1.clearField(gameObject.gameInitData.ctxActionField, gameObject.gameInitData.screen.width, gameObject.gameInitData.screen.height);
                    }
                    if (gameObject.gameInitData.backScreenPause) {
                        gameObject.levelInit(constructors.GameBackground, gameObject.gameInitData.ctx, gameObject);
                    }
                    if (!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus) {
                        if (gameObject.gameInitData.gameStatus) {
                            if (!gameObject.gameInitData.levelChange)
                                gameObject.spawnEnemyLogic(constructors.EnemyObject);
                            if (!gameObject.gameInitData.levelChange)
                                gameObject.initGrappleObject(constructors.GrappleObject, playerShipData);
                            if (gameObject.gameInitData.allGameBullets.length > 0) {
                                for (_i = 0, _a = gameObject.gameInitData.allGameBullets; _i < _a.length; _i++) {
                                    bullet = _a[_i];
                                    bullet.moveBullets(playerShipData, gameObject);
                                    bullet.createBullets(gameObject);
                                    gameObject.deleteBullet(bullet);
                                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject, constructors.GrappleObject);
                                    gameObject.hitDetection(playerShipData, [bullet], gameObject, constructors.GrappleObject);
                                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameSideObjects, gameObject, constructors.GrappleObject);
                                }
                            }
                            if (gameObject.gameInitData.allGameEnemies.length > 0) {
                                for (_b = 0, _c = gameObject.gameInitData.allGameEnemies; _b < _c.length; _b++) {
                                    enemy = _c[_b];
                                    enemy.placeEnemyes(gameObject);
                                    enemy.moveEnemyes();
                                    enemy.enemyShipLogicVertical({
                                        x: playerShipData.x,
                                        y: playerShipData.y
                                    }, gameObject);
                                    enemy.enemyAnimation(true);
                                    enemy.shoot(constructors.BulletConstruct, gameObject);
                                    gameObject.deleteObjects(enemy);
                                    gameObject.hitDetection(playerShipData, [enemy], gameObject, constructors.GrappleObject);
                                }
                            }
                            if (!gameObject.gameInitData.gameOver) {
                                playerShipData.placeShip();
                                playerShipData.movePlayerShip();
                            }
                            if (gameObject.gameInitData.allGameSideObjects.length > 0) {
                                for (_d = 0, _e = gameObject.gameInitData.allGameSideObjects; _d < _e.length; _d++) {
                                    object = _e[_d];
                                    object.placeEnemyes(gameObject);
                                    if (object.objectOwner == "explosion") {
                                        object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                                    }
                                    else {
                                        if (object.objectOwner == "enemy" ||
                                            object.objectOwner == "collide" ||
                                            object.objectOwner == "grappleObject") {
                                            gameObject.hitDetection(playerShipData, [object], gameObject, constructors.GrappleObject);
                                        }
                                        object.enemyAnimation();
                                    }
                                    object.mapObjectMove();
                                    gameObject.delateSideObject(object);
                                }
                            }
                            if (gameObject.gameInitData.gameData.levelObjects) {
                                gameObject.mapRanomObjectSpawn(gameObject.gameInitData.gameData.levelObjects, constructors.SideObject, gameObject.gameInitData.allGameSideObjects);
                            }
                            gameObject.gameSecondsIncrease();
                            gameObject.levelTimer();
                        }
                    }
                    if (!gameObject.gameInitData.backScreenPause || !gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus) {
                        if (!gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus) {
                            if (gameObject.gameInitData.ctx) {
                                displayModules_1.clearField(gameObject.gameInitData.ctx, gameObject.gameInitData.screen.width, gameObject.gameInitData.screen.height);
                            }
                            for (_f = 0, _g = gameObject.gameInitData.mapBackgroundObjects; _f < _g.length; _f++) {
                                backgroundMap = _g[_f];
                                backgroundMap.updateMap();
                                backgroundMap.changePartOfTexture(gameObject, gameObject.gameInitData.mapBackgroundObjects);
                            }
                            if (gameObject.gameInitData.levelChange)
                                gameObject.warpEffect();
                        }
                    }
                    ///   game UI load
                    if (!gameObject.gameInitData.gameStatus) {
                        gameObject.showStartWindow();
                    }
                    if (gameObject.gameInitData.gameStatus) {
                        gameObject.showGameStats();
                    }
                    if (gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus) {
                        gameObject.showPauseWindow();
                    }
                    if (gameObject.gameInitData.gameUiPause && gameObject.gameInitData.gameStatus) {
                        gameObject.showMenuWindow();
                        gameObject.showPauseWindow();
                    }
                    if (gameObject.gameInitData.gameOver) {
                        gameObject.gameOverWindow();
                    }
                    if (gameObject.gameInitData.gameWin && !gameObject.gameInitData.gameUiPause && !gameObject.gameInitData.gamePause) {
                        gameObject.gameWinWindow();
                    }
                    appMenu_1.hideShowMenu(mainMenu, navigation.menu, gameObject.gameInitData.gameWin, gameObject.gameInitData.gameStatus, gameObject.gameInitData.gameUiPause);
                    return [2 /*return*/];
                });
            });
        }
        var wrapper, mainMenu, gameState, navigation_1, gameObject, playerShipData, engine, contexts, navigation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (true)
                        process.env.HOST = 'http://localhost:3000/';
                    else {}
                    ;
                    wrapper = document.querySelector("#wrapper");
                    mainMenu = document.querySelector("#main-menu");
                    return [4 /*yield*/, gameDataModules.gameDataInit(constructors.PlayerShip)];
                case 1:
                    gameState = _a.sent();
                    if (!gameState) {
                        navigation_1 = appMenu_1.appMenu(gameObject, appMenu_1.dialogWindow);
                        navigation_1.menu.init();
                        throw new Error("There is no data in: gameState");
                    }
                    return [4 /*yield*/, new constructors.Game(gameState.data)];
                case 2:
                    gameObject = _a.sent();
                    playerShipData = gameObject.gameInitData.gameData.playerObject;
                    engine = setInterval(gameInterval, gameObject.gameInitData.intervalCount);
                    gameObject.uiController();
                    gameObject.setGameFields();
                    gameObject.getScreenSize();
                    contexts = gameObject.returnContext();
                    //  create context
                    playerShipData.ctx = contexts.gameActionField;
                    // ship move
                    playerShipData.initPlayerShip(gameObject);
                    playerShipData.shipControl(gameObject);
                    navigation = appMenu_1.appMenu(gameObject, appMenu_1.dialogWindow);
                    navigation.menu.init();
                    return [2 /*return*/];
            }
        });
    });
})();


/***/ }),

/***/ "./src/server/serverRequestModules.ts":
/*!********************************************!*\
  !*** ./src/server/serverRequestModules.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __webpack_require__(/*! fs */ "fs");
function getData(_a) {
    var url = _a.url, method = _a.method, data = _a.data, headers = _a.headers;
    var resultHeader = Object.assign({
        'Content-Type': 'application/json'
    }, headers || false);
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: resultHeader,
        body: (data) ? JSON.stringify(data) : null
    }).then(function (res) { return res.json(); })
        .then(function (data) { return data; })
        .catch(function (err) {
        console.log(err);
        if (err) {
            return { message: "500 No server connection!", status: "error" };
        }
    });
}
exports.getData = getData;
function getLocalData(_a) {
    var fileName = _a.fileName;
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_b) {
            if (!fileName)
                throw Error("no local files");
            res = new Promise(function (resolve, reject) {
                fs.readFile(__dirname + '/public/data/' + fileName, function (err, data) {
                    if (err)
                        throw Error(err);
                    var info = JSON.parse(data);
                    if (info)
                        resolve(info);
                    else
                        reject("got some problem here");
                });
            });
            return [2 /*return*/, res];
        });
    });
}
exports.getLocalData = getLocalData;
function postData(_a) {
    var url = _a.url, method = _a.method, data = _a.data, headers = _a.headers;
    var resultHeader = Object.assign({
        'Content-Type': 'application/json'
    }, headers || false);
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: resultHeader,
        body: (data) ? JSON.stringify(data) : null
    }).then(function (res) { return res.json(); })
        .then(function (data) { return data; });
}
exports.postData = postData;


/***/ }),

/***/ "./src/ui/gameUiModels/gameGameOverScreen.ts":
/*!***************************************************!*\
  !*** ./src/ui/gameUiModels/gameGameOverScreen.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
function gameOverScreen(data, ctx, width, height, pictureDirrection) {
    return data || [
        {
            name: "Pause text",
            text: "Game Over",
            description: "text for game over window",
            fontSize: "110px Arial",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 90,
                x: width / 2 - 250,
                y: height / 2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.gameOverScreen = gameOverScreen;


/***/ }),

/***/ "./src/ui/gameUiModels/gamePauseScreen.ts":
/*!************************************************!*\
  !*** ./src/ui/gameUiModels/gamePauseScreen.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
function gamePause(data, ctx, width, height, pictureDirrection) {
    return data || [
        {
            name: "Pause text",
            text: "Pause",
            description: "part of pause window",
            fontSize: "60px Arial",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 400,
                height: 90,
                x: width / 2 - 150,
                y: height / 2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.gamePause = gamePause;


/***/ }),

/***/ "./src/ui/gameUiModels/gameStatsScreen.ts":
/*!************************************************!*\
  !*** ./src/ui/gameUiModels/gameStatsScreen.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//  points   life, time to ends, level
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
function gameInformationScreen(extra, ctx, width, height, pictureDirrection, info) {
    return [
        {
            name: "lifePoint",
            text: "",
            number: info.life,
            step: [info.life].map(function (i) { return i * 50; }),
            description: "Game logotype",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 70,
                height: 70,
                sWidth: 500,
                sHeight: 500,
                x: 10,
                y: 20,
                background: new Image(),
                borderColor: false,
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            loadPicture: function () {
                this.propertyes.background.src = pictureDirrection + 'misc/ruby.png';
            },
            init: function (callback, data) {
                data = (data) ? data : this;
                var steps = Array(info.life).fill(0).map(function (o, i) { return i * 30; });
                var marginLeft = 30;
                for (var i = 0; i < this.number; i++) {
                    this.propertyes.x = (i == 0) ? marginLeft : 0 + steps[i] + ((i != 0) ? marginLeft : 0);
                    callback(data);
                }
            },
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "level",
            text: " " + ((info.currentLevel <= info.allLevels) ? 'Current Level ' + info.currentLevel + '/' + info.allLevels : 'finish game') + " ",
            description: "Game part the name",
            clicked: false,
            fontSize: "bold 16px Roboto",
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 0,
                x: 30,
                y: 70,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Time to end f level",
            text: (info.minutes || info.seconds) ? "Time to level end " + ((info.minutes - 10 >= 0) ? '' : 0) + info.minutes + ":" + ((info.seconds - 10 >= 0) ? '' : 0) + info.seconds : 'Boss level',
            description: "Game part the name",
            clicked: false,
            fontSize: "light 16px Roboto",
            propertyes: {
                ctx: ctx,
                width: 50,
                height: 0,
                x: width - 300,
                y: 30,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Game points",
            text: "score: " + info.points,
            description: "Game part the name",
            clicked: false,
            fontSize: "light 18px Roboto",
            propertyes: {
                ctx: ctx,
                width: -50,
                height: 0,
                x: width / 2,
                y: 70,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "coins",
            text: "",
            number: info.sourse.gameCoins,
            step: [info.life].map(function (i) { return i * 50; }),
            description: "Game logotype",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 100,
                height: 100,
                sWidth: 500,
                sHeight: 500,
                x: width / 2 - 50,
                y: 25,
                background: new Image(),
                borderColor: false,
                shadowColor: 'rgba(0, 0, 0, 0)',
                radius: null,
            },
            loadPicture: function () {
                this.propertyes.background.src = pictureDirrection + 'misc/grapple-objects/coin.png';
            },
            init: function (callback, data) {
                data = (data) ? data : this;
                var cointIndex = Math.floor(this.number / 5000), numberOfCoin = (cointIndex > 0 && cointIndex < 10) ? cointIndex : (cointIndex >= 10) ? 10 : 1;
                var steps = Array(numberOfCoin).fill(0).map(function (o, i) { return i * 5; });
                var marginLeft = this.propertyes.x;
                for (var i = 0; i < numberOfCoin; i++) {
                    this.propertyes.x = (i == 0) ? marginLeft : 0 + steps[i] + ((i != 0) ? marginLeft : 0);
                    callback(data);
                }
            },
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Game coins",
            text: "X" + info.sourse.gameCoins,
            description: "Game part the name",
            clicked: false,
            fontSize: "light 18px Roboto",
            propertyes: {
                ctx: ctx,
                width: -50,
                height: 0,
                x: width / 2,
                y: 20,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.gameInformationScreen = gameInformationScreen;


/***/ }),

/***/ "./src/ui/gameUiModels/gameUiLoadMenu.ts":
/*!***********************************************!*\
  !*** ./src/ui/gameUiModels/gameUiLoadMenu.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
function gameLoadMenu(data, ctx, width, height, pictureDirrection) {
    return data || [
        {
            name: "Start button",
            text: "Press Start to begin",
            description: "Main start game button in the main load screen",
            fontSize: "30px Arial",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 400,
                height: 90,
                x: width / 2 - 165,
                y: height / 2 + 150,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: true,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(37, 21, 54, 0)',
                textProperty: {
                    textColor: '#251536',
                    topPadding: 10,
                    rightPadding: 40,
                    bottomPadding: 10,
                    leftPadding: 40,
                },
                radius: 45,
            },
            action: function () {
                this.gameStart();
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Logotype",
            text: "",
            description: "Game logotype",
            clicked: false,
            shadowColor: 'rgba(37, 21, 54, 1)',
            propertyes: {
                ctx: ctx,
                width: 150,
                height: 150,
                sWidth: 1024,
                sHeight: 1024,
                x: width / 2 - 75,
                y: 90,
                background: new Image(),
                borderColor: false,
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: null,
            },
            loadPicture: function () {
                this.propertyes.background.src = pictureDirrection + 'misc/logo-1024x1024.png';
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Game name",
            text: "Space",
            description: "Game part the name",
            clicked: false,
            fontSize: "bold 100px Roboto",
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: -290,
                height: 0,
                x: width / 2,
                y: 370,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Game name",
            text: "Attack",
            description: "Game part the name",
            clicked: false,
            fontSize: "lighter 100px Roboto",
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 0,
                x: width / 2,
                y: 370,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(89, 0, 255, 1)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.gameLoadMenu = gameLoadMenu;


/***/ }),

/***/ "./src/ui/gameUiModels/gameUiSettingsMenu.ts":
/*!***************************************************!*\
  !*** ./src/ui/gameUiModels/gameUiSettingsMenu.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
var constructors = __importStar(__webpack_require__(/*! ../../constructors */ "./src/constructors/index.ts"));
var appMenu_1 = __webpack_require__(/*! ../../appMenu/appMenu */ "./src/appMenu/appMenu.ts");
function gameSettingsMenu(data, ctx, width, height) {
    return data || [
        {
            name: "menu background",
            text: "",
            description: "back part of menu ",
            fontSize: "30px Arial",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: width,
                height: 400,
                x: 0,
                y: 100,
                gradient: true,
                backGroundFinal: "#380240",
                topX: 0,
                topY: 0,
                bottomX: width,
                bottomY: 100,
                background: '#2F2231',
                isBorder: false,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: 5,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Button end game",
            text: "go to start",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: 200,
                height: 50,
                x: width / 2 - 150,
                y: height / 2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 0)',
                textProperty: {
                    textColor: '#251536',
                    topPadding: 7,
                    rightPadding: 50,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action: function () {
                appMenu_1.dialogWindow({ textData: 'restart the game?', rejectText: 'cancel', acceptText: 'restart' }, this.backToStartScreen, null, this, constructors.PlayerShip);
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Main game menu name",
            text: "Menu",
            description: "Text in main top",
            fontSize: "25px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 0)',
            propertyes: {
                ctx: ctx,
                width: -45,
                height: 0,
                x: width / 2,
                y: 150,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(255, 255, 255, 0)',
                radius: null,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.gameSettingsMenu = gameSettingsMenu;


/***/ }),

/***/ "./src/ui/gameUiModels/gameWinScreen.ts":
/*!**********************************************!*\
  !*** ./src/ui/gameUiModels/gameWinScreen.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
var constructors = __importStar(__webpack_require__(/*! ../../constructors */ "./src/constructors/index.ts"));
var appMenu_1 = __webpack_require__(/*! ../../appMenu/appMenu */ "./src/appMenu/appMenu.ts");
var gameResultModule_1 = __webpack_require__(/*! ../../appMenu/gameResultModule */ "./src/appMenu/gameResultModule.ts");
function gameWinScreen(data, ctx, width, height, pictureDirrection, info) {
    return data || [
        {
            name: "screen title",
            text: "YOU WIN ",
            description: "text for game over window",
            fontSize: " bold 120px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 90,
                x: width / 2 - 250,
                y: height / 2 - height / 4,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        },
        {
            name: "screen text",
            text: "Congratulation ",
            description: "text for game over window",
            fontSize: " bold 30px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 90,
                x: width / 2 - 250,
                y: height / 2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        },
        {
            name: "score",
            text: "You score is " + info.points,
            description: "text for game over window",
            fontSize: " bold 30px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 90,
                x: width / 2 - 250,
                y: height / 2,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Button end game",
            text: "Save results",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 300,
                height: 50,
                x: width / 2 + width / 3,
                y: height / 2 + 150,
                background: '#251536',
                isBorder: false,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(37, 21, 54, 1)',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
                    shadowColor: 'rgba(255, 255, 255, 0)',
                    topPadding: 7,
                    rightPadding: 100,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action: function () {
                gameResultModule_1.initResultScreen(this);
                this.gameUiMenu(this.gameInitData.gameUiPause);
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "Button end game",
            text: "go to start",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 200,
                height: 50,
                x: 20,
                y: height / 2 + 150,
                background: '#251536',
                isBorder: false,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(37, 21, 54, 1)',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
                    shadowColor: 'rgba(255, 255, 255, 0)',
                    topPadding: 7,
                    rightPadding: 100,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action: function () {
                appMenu_1.dialogWindow({ textData: 'restart the game?', rejectText: 'cancel', acceptText: 'restart' }, this.backToStartScreen, null, this, constructors.PlayerShip);
                this.gameUiMenu(this.gameInitData.gameUiPause);
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.gameWinScreen = gameWinScreen;


/***/ }),

/***/ "./src/ui/gameUiModels/uiModelMethods.ts":
/*!***********************************************!*\
  !*** ./src/ui/gameUiModels/uiModelMethods.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function init(callback, data) {
    data = (data) ? data : this;
    callback(data);
}
exports.init = init;
function getUIObjectPosition() {
    var context = this;
    return {
        x: context.propertyes.x,
        y: context.propertyes.y,
        width: context.propertyes.width,
        height: context.propertyes.height,
    };
}
exports.getUIObjectPosition = getUIObjectPosition;


/***/ }),

/***/ "./src/ui/gameUiModules.ts":
/*!*********************************!*\
  !*** ./src/ui/gameUiModules.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var displayModules_1 = __webpack_require__(/*! ../view/displayModules */ "./src/view/displayModules.ts");
var gameUiLoadMenu_1 = __webpack_require__(/*! ./gameUiModels/gameUiLoadMenu */ "./src/ui/gameUiModels/gameUiLoadMenu.ts");
var gameUiSettingsMenu_1 = __webpack_require__(/*! ./gameUiModels/gameUiSettingsMenu */ "./src/ui/gameUiModels/gameUiSettingsMenu.ts");
var gamePauseScreen_1 = __webpack_require__(/*! ./gameUiModels/gamePauseScreen */ "./src/ui/gameUiModels/gamePauseScreen.ts");
var gameStatsScreen_1 = __webpack_require__(/*! ./gameUiModels/gameStatsScreen */ "./src/ui/gameUiModels/gameStatsScreen.ts");
var gameGameOverScreen_1 = __webpack_require__(/*! ./gameUiModels/gameGameOverScreen */ "./src/ui/gameUiModels/gameGameOverScreen.ts");
var gameWinScreen_1 = __webpack_require__(/*! ./gameUiModels/gameWinScreen */ "./src/ui/gameUiModels/gameWinScreen.ts");
var uiElementModules_1 = __webpack_require__(/*! ../view/elements/uiElementModules */ "./src/view/elements/uiElementModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
function gameUiPause() {
    if (!this.gameInitData.gameUiPause && this.gameInitData.gameStatus)
        this.gameInitData.gamePause = !this.gameInitData.gamePause;
}
exports.gameUiPause = gameUiPause;
function gameUiMenu(gameUiPause) {
    this.gameInitData.gameUiPause = !this.gameInitData.gameUiPause;
    this.gameInitData.gamePause = (gameUiPause) ? false : true;
}
exports.gameUiMenu = gameUiMenu;
function uiController() {
    var _this = this;
    var controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    var gameObject = this;
    document.addEventListener("keydown", function (e) {
        if (controlKeys.escape.some(function (o) { return e.keyCode == o; }))
            gameObject.gameUiMenu(_this.gameInitData.gameUiPause);
        if (controlKeys.pause.some(function (o) { return e.keyCode == o; }))
            gameObject.gameUiPause();
    });
    document.addEventListener("click", function (e) {
        var data = _this.getLevelUserData();
        if (e.target.tagName === "CANVAS") {
            var x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;
            var elementsOnScreen = null;
            var ctx = _this.gameInitData.ctxUIField, screenSize = _this.getScreenSize();
            if (!_this.gameInitData.gameStatus) {
                elementsOnScreen = gameUiLoadMenu_1.gameLoadMenu(null, ctx, screenSize.width, screenSize.height, null);
                clickDetection.call(_this, elementsOnScreen);
            }
            if (_this.gameInitData.gameUiPause) {
                elementsOnScreen = gameUiSettingsMenu_1.gameSettingsMenu(null, ctx, screenSize.width, screenSize.height);
                clickDetection.call(_this, elementsOnScreen);
            }
            if (_this.gameInitData.gameWin) {
                elementsOnScreen = gameWinScreen_1.gameWinScreen(null, ctx, screenSize.width, screenSize.height, null, data);
                clickDetection.call(_this, elementsOnScreen);
            }
        }
        function clickDetection(elementsOnScreen) {
            for (var item in elementsOnScreen) {
                var res = enemiesModules_1.hitDetection(elementsOnScreen[item], [].concat({ x: x, y: y, width: 10, height: 10, name: "cursor" }), this, null);
                if (res && elementsOnScreen[item].action) {
                    elementsOnScreen[item].action.call(this, gameObject);
                    break;
                }
            }
        }
    });
}
exports.uiController = uiController;
function showUiPopupWindow() {
    displayModules_1.createWindow.call(this);
}
exports.showUiPopupWindow = showUiPopupWindow;
function showStartWindow() {
    var drawMethods = [
        displayModules_1.createRoundButton,
        uiElementModules_1.uiImage,
        uiElementModules_1.uiText,
        uiElementModules_1.uiText
    ];
    this.initUiElements(drawMethods, gameUiLoadMenu_1.gameLoadMenu);
}
exports.showStartWindow = showStartWindow;
function showMenuWindow() {
    var drawMethods = [
        displayModules_1.createShapeRoundBorder,
        displayModules_1.createRoundButton,
        uiElementModules_1.uiText
    ];
    this.initUiElements(drawMethods, gameUiSettingsMenu_1.gameSettingsMenu);
}
exports.showMenuWindow = showMenuWindow;
function showPauseWindow() {
    var drawMethods = [
        uiElementModules_1.uiText
    ];
    this.initUiElements(drawMethods, gamePauseScreen_1.gamePause);
}
exports.showPauseWindow = showPauseWindow;
function showGameStats() {
    var data = this.getLevelUserData();
    var drawMethods = [
        uiElementModules_1.uiImage,
        uiElementModules_1.uiText,
        uiElementModules_1.uiText,
        uiElementModules_1.uiText,
        uiElementModules_1.uiImage,
        uiElementModules_1.uiText
    ];
    this.initUiElements(drawMethods, gameStatsScreen_1.gameInformationScreen, data);
}
exports.showGameStats = showGameStats;
function gameOverWindow() {
    var drawMethods = [
        uiElementModules_1.uiText,
        uiElementModules_1.uiText,
        uiElementModules_1.uiText
    ];
    this.initUiElements(drawMethods, gameGameOverScreen_1.gameOverScreen);
}
exports.gameOverWindow = gameOverWindow;
function gameWinWindow() {
    var data = this.getLevelUserData();
    //console.log(data)
    var drawMethods = [
        uiElementModules_1.uiText,
        uiElementModules_1.uiText,
        uiElementModules_1.uiText,
        displayModules_1.createRoundButton,
        displayModules_1.createRoundButton,
        displayModules_1.createRoundButton
    ];
    this.initUiElements(drawMethods, gameWinScreen_1.gameWinScreen, data);
}
exports.gameWinWindow = gameWinWindow;
function initUiElements(drawMethods, callback) {
    var props = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        props[_i - 2] = arguments[_i];
    }
    var ctx = this.gameInitData.ctxUIField, screenSize = this.getScreenSize(), picDirection = this.showGameInfo().imageDirrection;
    var screenObjects = callback.apply(void 0, __spreadArrays([null, ctx, screenSize.width, screenSize.height, picDirection], props));
    for (var itemIndex = 0; itemIndex < screenObjects.length; itemIndex++) {
        if (screenObjects[itemIndex].hasOwnProperty('loadPicture'))
            screenObjects[itemIndex].loadPicture();
        screenObjects[itemIndex].init(drawMethods[itemIndex]);
    }
}
exports.initUiElements = initUiElements;


/***/ }),

/***/ "./src/ui/loadScreen.ts":
/*!******************************!*\
  !*** ./src/ui/loadScreen.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appMenu_1 = __webpack_require__(/*! ../appMenu/appMenu */ "./src/appMenu/appMenu.ts");
function loadWindow(_a) {
    var loadStatus = _a.loadStatus;
    var windowElement = document.querySelector('#load-screen');
    windowElement.innerHTML = "";
    switch (loadStatus) {
        case "load":
            appMenu_1.show(windowElement);
            windowElement.innerHTML = "<div class=\"load-circle-image load-circe-wrapper\"></div><p>Loading...</p>";
            break;
        case "serverError":
            windowElement.innerHTML = "<p>Fail to load data</p><button id=\"reload-page\" class=\"btn-orange btn-main\">Reload</button>";
            reloadPage("#reload-page");
            break;
        case "success":
            appMenu_1.hide(windowElement);
            break;
        default:
            false;
    }
    function reloadPage(selector) {
        var reloadButton = document.querySelector(selector);
        reloadButton.addEventListener("click", function () {
            document.location.reload();
        });
    }
}
exports.loadWindow = loadWindow;


/***/ }),

/***/ "./src/view/displayModules.ts":
/*!************************************!*\
  !*** ./src/view/displayModules.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var displayUiWindowModules_1 = __webpack_require__(/*! ./window/displayUiWindowModules */ "./src/view/window/displayUiWindowModules.ts");
exports.createWindow = displayUiWindowModules_1.createWindow;
exports.createShapeRoundBorder = displayUiWindowModules_1.createShapeRoundBorder;
exports.createRoundButton = displayUiWindowModules_1.createRoundButton;
var weaponsDisplayModule_1 = __webpack_require__(/*! ./weapons/weaponsDisplayModule */ "./src/view/weapons/weaponsDisplayModule.ts");
function draw(context, element) {
    var property = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        property[_i - 2] = arguments[_i];
    }
    context[element].apply(context, property);
}
exports.draw = draw;
function createLaserBullet(data) {
    if (!data.ctx)
        return new Error("no context");
    if (data.objectOwner == "player" && data.type == "blaster")
        weaponsDisplayModule_1.weapon1(data, draw);
    if (data.objectOwner == "enemy" && data.type == "blaster")
        weaponsDisplayModule_1.weapon1(data, draw);
    if (data.objectOwner == "enemy" && data.type == "beam")
        weaponsDisplayModule_1.weapon1(data, draw);
}
exports.createLaserBullet = createLaserBullet;
function createImage(ctx, pictureName) {
    var props = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        props[_i - 2] = arguments[_i];
    }
    draw.apply(void 0, __spreadArrays([ctx, 'drawImage', pictureName], props));
}
exports.createImage = createImage;
function clearField(ctx, width, height) {
    draw(ctx, 'clearRect', 0, 0, width, height);
}
exports.clearField = clearField;


/***/ }),

/***/ "./src/view/elements/index.ts":
/*!************************************!*\
  !*** ./src/view/elements/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./uiElementModules */ "./src/view/elements/uiElementModules.ts"));
__export(__webpack_require__(/*! ./warpElementDrow */ "./src/view/elements/warpElementDrow.ts"));


/***/ }),

/***/ "./src/view/elements/uiElementModules.ts":
/*!***********************************************!*\
  !*** ./src/view/elements/uiElementModules.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function uiImage(shapePropertyes) {
    var propertyes = shapePropertyes.propertyes;
    propertyes.ctx.shadowColor = propertyes.shadowColor;
    propertyes.ctx.shadowBlur = 8;
    propertyes.ctx.drawImage(propertyes.background, 0, 0, propertyes.sWidth, propertyes.sHeight, propertyes.x, propertyes.y, propertyes.width, propertyes.height);
}
exports.uiImage = uiImage;
function uiText(shapePropertyes) {
    var propertyes = shapePropertyes.propertyes;
    //propertyes.ctx.save();
    var textWidth = propertyes.ctx.measureText(shapePropertyes.text).width / 3.2;
    propertyes.ctx.shadowColor = propertyes.shadowColor;
    propertyes.ctx.shadowBlur = 8;
    propertyes.ctx.font = shapePropertyes.fontSize;
    propertyes.ctx.fillStyle = propertyes.borderColor;
    propertyes.ctx.fillText(shapePropertyes.text, propertyes.x + propertyes.width, propertyes.y + propertyes.height);
    //propertyes.ctx.save();
    //propertyes.ctx.translate(0,0);
    // propertyes.ctx.restore();
}
exports.uiText = uiText;
function uiRepeatImage(shapePropertyes) {
    var propertyes = shapePropertyes.propertyes;
    var pat = propertyes.ctx.createPattern(propertyes.background, 'repeat-x');
    propertyes.ctx.shadowColor = propertyes.shadowColor;
    propertyes.ctx.shadowBlur = 8;
    //propertyes.ctx.rect(propertyes.x, propertyes.x, propertyes.width, propertyes.height);
    propertyes.ctx.rect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);
    propertyes.ctx.fillStyle = pat;
    propertyes.ctx.fill();
}
exports.uiRepeatImage = uiRepeatImage;


/***/ }),

/***/ "./src/view/elements/warpElementDrow.ts":
/*!**********************************************!*\
  !*** ./src/view/elements/warpElementDrow.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function warpElement() {
    var ctx = null;
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
}
exports.warpElement = warpElement;


/***/ }),

/***/ "./src/view/index.ts":
/*!***************************!*\
  !*** ./src/view/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./displayModules */ "./src/view/displayModules.ts"));
__export(__webpack_require__(/*! ./elements/uiElementModules */ "./src/view/elements/uiElementModules.ts"));
__export(__webpack_require__(/*! ./elements */ "./src/view/elements/index.ts"));


/***/ }),

/***/ "./src/view/weapons/weaponsDisplayModule.ts":
/*!**************************************************!*\
  !*** ./src/view/weapons/weaponsDisplayModule.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function weapon1(data, draw) {
    draw(data.ctx, 'drawImage', data.img, data.sx, data.sy, data.sWidth, data.sHeight, data.x, data.y, data.width + 10, data.height + 10);
}
exports.weapon1 = weapon1;
function weapon1backward(data, draw) {
    draw(data.ctx, 'drawImage', data.img, 0, 0, data.width, data.height, data.x, data.y, data.width + 10, data.height + 10);
}
exports.weapon1backward = weapon1backward;


/***/ }),

/***/ "./src/view/window/displayUiWindowModules.ts":
/*!***************************************************!*\
  !*** ./src/view/window/displayUiWindowModules.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createWindow(ctx, propertyes) {
    var _a = this.getScreenSize(), width = _a.width, height = _a.height;
    ctx.fillRect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);
    ;
}
exports.createWindow = createWindow;
function createShapeRoundBorder(shapePropertyes) {
    var propertyes = shapePropertyes.propertyes;
    propertyes.ctx.fillStyle = propertyes.background;
    if (propertyes.gradient) {
        var gradient = propertyes.ctx.createLinearGradient(propertyes.topX, propertyes.topY, propertyes.bottomX, propertyes.bottomY);
        gradient.addColorStop(0, propertyes.background);
        gradient.addColorStop(1, propertyes.backGroundFinal);
        propertyes.ctx.fillStyle = gradient;
    }
    propertyes.ctx.shadowColor = propertyes.shadowColor;
    propertyes.ctx.shadowBlur = 8;
    propertyes.ctx.beginPath();
    propertyes.ctx.moveTo(propertyes.x + propertyes.radius, propertyes.y);
    propertyes.ctx.lineTo(propertyes.x + propertyes.width - propertyes.radius, propertyes.y);
    propertyes.ctx.quadraticCurveTo(propertyes.x + propertyes.width, propertyes.y, propertyes.x + propertyes.width, propertyes.y + propertyes.radius);
    propertyes.ctx.lineTo(propertyes.x + propertyes.width, propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.quadraticCurveTo(propertyes.x + propertyes.width, propertyes.y + propertyes.height, propertyes.x + propertyes.width - propertyes.radius, propertyes.y + propertyes.height);
    propertyes.ctx.lineTo(propertyes.x + propertyes.radius, propertyes.y + propertyes.height);
    propertyes.ctx.quadraticCurveTo(propertyes.x, propertyes.y + propertyes.height, propertyes.x, propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.lineTo(propertyes.x, propertyes.y + propertyes.radius);
    propertyes.ctx.quadraticCurveTo(propertyes.x, propertyes.y, propertyes.x + propertyes.radius, propertyes.y); /**/
    if (propertyes.isBorder) {
        propertyes.ctx.strokeStyle = propertyes.borderColor;
        propertyes.ctx.stroke();
    }
    propertyes.ctx.closePath();
    propertyes.ctx.fill();
}
exports.createShapeRoundBorder = createShapeRoundBorder;
function createRoundButton(shapePropertyes) {
    var propertyes = shapePropertyes.propertyes;
    var textWidth = propertyes.ctx.measureText(shapePropertyes.text).width / 3.2;
    var buttonWidth = propertyes.textProperty.leftPadding + textWidth + propertyes.textProperty.rightPadding;
    propertyes.ctx.shadowColor = propertyes.shadowColor;
    propertyes.ctx.shadowBlur = 8;
    propertyes.ctx.fillStyle = propertyes.background;
    propertyes.ctx.beginPath();
    propertyes.ctx.moveTo(propertyes.x + propertyes.radius, propertyes.y);
    propertyes.ctx.lineTo(propertyes.x + buttonWidth - propertyes.radius, propertyes.y);
    propertyes.ctx.quadraticCurveTo(propertyes.x + buttonWidth, propertyes.y, propertyes.x + buttonWidth, propertyes.y + propertyes.radius);
    propertyes.ctx.lineTo(propertyes.x + buttonWidth, propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.quadraticCurveTo(propertyes.x + buttonWidth, propertyes.y + propertyes.height, propertyes.x + buttonWidth - propertyes.radius, propertyes.y + propertyes.height);
    propertyes.ctx.lineTo(propertyes.x + propertyes.radius, propertyes.y + propertyes.height);
    propertyes.ctx.quadraticCurveTo(propertyes.x, propertyes.y + propertyes.height, propertyes.x, propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.lineTo(propertyes.x, propertyes.y + propertyes.radius);
    propertyes.ctx.quadraticCurveTo(propertyes.x, propertyes.y, propertyes.x + propertyes.radius, propertyes.y); /**/
    //propertyes.ctx.fillRect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);
    propertyes.ctx.closePath();
    propertyes.ctx.fill();
    if (propertyes.isBorder) {
        propertyes.ctx.strokeStyle = propertyes.borderColor;
        propertyes.ctx.lineWidth = propertyes.borderRadius;
        propertyes.ctx.stroke();
    }
    propertyes.ctx.font = shapePropertyes.fontSize;
    propertyes.ctx.fillStyle = propertyes.textProperty.textColor;
    propertyes.ctx.shadowColor = propertyes.textProperty.shadowColor;
    propertyes.ctx.shadowBlur = 8;
    propertyes.ctx.fillText(shapePropertyes.text, propertyes.x + propertyes.textProperty.leftPadding, propertyes.y + propertyes.height / 2 + propertyes.textProperty.topPadding);
}
exports.createRoundButton = createRoundButton;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ "electron":
/*!**************************************!*\
  !*** external "require('electron')" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('electron');

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvYWkvcmVndWxhckVuZW15QWlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBNZW51L2FwcE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE1lbnUvZ2FtZVJlc3VsdE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwTWVudS9wYWdlc0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9idWxsZXRDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2VuZW15Q29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lR3JhcHBsZU9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9sZXZlbENvbnN0cnVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL21haW5HYW1lQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvdXNlckNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYXBwRXJyb3JMaXN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYmFja2dyb3VuZE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2J1bGxldHNNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9lbmdpbmVNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvY2hhbmdlTGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVVpTG9hZE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lVWlTZXR0aW5nc01lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lV2luU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvdWlNb2RlbE1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2xvYWRTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvdWlFbGVtZW50TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9lbGVtZW50cy93YXJwRWxlbWVudERyb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvd2VhcG9ucy93ZWFwb25zRGlzcGxheU1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKCdlbGVjdHJvbicpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBLHFDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW1zIHtcXG4gICAgYmFja2dyb3VuZDogIzE2MTMyNTsgfVxcblxcbi5idG4tc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDsgfVxcblxcbi5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4OyB9XFxuXFxuLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW1zIHtcXG4gICAgYmFja2dyb3VuZDogIzE2MTMyNTsgfVxcblxcbi5idG4tc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDsgfVxcblxcbi5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4OyB9XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBib2R5ICNwcmVsb2FkZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMHB4OyB9XFxuXFxuLnN0YXRpYy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlLm1lbnUtYmFja2dyb3VkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZjIyMzE7IH1cXG4gICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSB7XFxuICAgICAgICB6LWluZGV4OiAxMDsgfVxcbiAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHtcXG4gICAgICAgICAgICB0b3A6IDEwcHg7IH1cXG4gICAgICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUgdWwge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSg5MiwgMiwgMTA4LCAwLjUpO1xcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAgICAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCBsaSB7XFxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIGEge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNFQTZDMDA7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7IH1cXG4gICAgICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIGE6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7IH1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHotaW5kZXg6IDExMDA7IH1cXG4gICAgLmNvbnRlbnQtd3JhcHBlciAubWVudS1wYWdlcy13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNjEzMjU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgcGFkZGluZzogMjBweDsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEycHg7IH1cXG5cXG4uY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDcxLCA2LCA4MywgMC44KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IGJsYWNrOyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMSk7IH1cXG5cXG4uZGlhbG9nLWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDsgfVxcbiAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0MDA1NDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlZWU7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSAuYWxlcnQtbWVzc2FnZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSAuYWxlcnQtbWVzc2FnZSBwIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gLmFsZXJ0LW1lc3NhZ2UgLnJlamVjdC10ZXh0IHtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gLmFsZXJ0LW1lc3NhZ2UgLndhcm5pbmctdGV4dCB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogeWVsbG93OyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIC5hbGVydC1tZXNzYWdlIC5zdWNjZXNzLXRleHQge1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZGl2IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDsgfVxcbiAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJ0bi1hcmVhIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYnRuLWFyZWEgYnV0dG9uLmFjY2VwdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRiYWU2MDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1idG4tYXJlYSBidXR0b24ucmVqZWN0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjkwMDRmO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpOyB9XFxuXFxuI3dyYXBwZXIgc2VjdGlvbiB7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogMDsgfVxcblxcbi5nYW1lQmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7IH1cXG5cXG4uZ2FtZS1maWVsZHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4uZ2FtZS1maWVsZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uaGlkZS1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5yZXN1bHQtbWVzc2FnZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAucmVzdWx0LW1lc3NhZ2Utd3JhcHBlciBwIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgICAucmVzdWx0LW1lc3NhZ2Utd3JhcHBlciBwOmZpcnN0LWxldHRlciB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxudWwuc2hvdy1yZXN1bHQtYXJlYSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5yYXRlLW51bWJlciB7XFxuICAgICAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA1JTsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSAuaXRlbS1uYW1lIHtcXG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSAuaXRlbS1jb2luIHtcXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgICAgICAgICAgZmxleC1iYXNpczogMTUlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLXBvaW50cyB7XFxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxNSU7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgLml0ZW0tZGF0ZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIHAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkOyB9XFxuICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzEzMDUxNzsgfVxcblxcbi5sb2FkLXNjcmVlbi13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMTAwMDsgfVxcbiAgICAubG9hZC1zY3JlZW4td3JhcHBlciAubG9hZC1jaXJjZS13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBsb2FkLWNpcmNsZS1yb3RhdGUgMXMgaW5maW5pdGUgc3RlcHMoMTEsIGVuZCk7IH1cXG4gICAgLmxvYWQtc2NyZWVuLXdyYXBwZXIgcCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWQtY2lyY2xlLXJvdGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL21haW4uc2Fzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBlbmVteVNoaXBMb2dpY1ZlcnRpY2FsKHRhcmdldCwgbWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBtYXhQb3NpdGlvblggPSBNYXRoLm1heCh0YXJnZXQueCwgdGhpcy54KTtcclxuICAgIHZhciBtaW5Qb3NpdGlvblggPSBNYXRoLm1pbih0YXJnZXQueCwgdGhpcy54KTtcclxuICAgIHZhciBtYXhQb3NpdGlvblkgPSBNYXRoLm1heCh0YXJnZXQueSAtIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy55KTtcclxuICAgIHZhciBtaW5Qb3NpdGlvblkgPSBNYXRoLm1pbih0YXJnZXQueSAtIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy55KTtcclxuICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0WCA9IG1heFBvc2l0aW9uWCAtIG1pblBvc2l0aW9uWDtcclxuICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0WSA9IG1heFBvc2l0aW9uWSAtIG1pblBvc2l0aW9uWTtcclxuICAgIGlmICh0aGlzLmlzTW92ZSAmJiB0aGlzLmJlaGF2aW9yKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmJlaGF2aW9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BhdHJvb2wnOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJyZWN0aW9uUmFuZG9tID0gbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIoMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAoZGlycmVjdGlvblJhbmRvbSA9PSAxKSA/IFwidXBcIiA6IFwiZG93blwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGF0cm9vbC5jYWxsKHRoaXMsIG1haW5HYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmaW5kJzpcclxuICAgICAgICAgICAgICAgIHN0cmFmZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F0dGFjayc6XHJcbiAgICAgICAgICAgICAgICBhdHRhY2suY2FsbCh0aGlzLCBkaXN0YW5jZVRvVGFyZ2V0WSwgZGlzdGFuY2VUb1RhcmdldFgsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY29tZUVuZEZpbmQnOlxyXG4gICAgICAgICAgICAgICAgc3RyYWZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB1bml0U3RvcC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdHJhZmUuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1bml0U3RvcCgpIHtcclxuICAgICAgICB2YXIgc2NyZWVuRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICBpZiAodGhpcy54IDwgc2NyZWVuRGF0YS53aWR0aCAtIHRoaXMud2lkdGggKiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0cmFmZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcG90RGlzdGFuY2UgPiBkaXN0YW5jZVRvVGFyZ2V0WCB8fCB0aGlzLnNwb3REaXN0YW5jZSA+IGRpc3RhbmNlVG9UYXJnZXRZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueUZpbmFsID0gdGFyZ2V0LnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0dGFjayhkaXN0YW5jZVRvVGFyZ2V0WSwgZGlzdGFuY2VUb1RhcmdldFgsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0gdGFyZ2V0LnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlVG9UYXJnZXRYIDwgMTAwKVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24oZGlzdGFuY2VUb1RhcmdldFkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGF0cm9vbChtYWluR2FtZU9iamVjdCkge1xyXG4gICAgICAgIHZhciBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0WSA9IE1hdGgubWF4KHRoaXMueSwgdGhpcy55RmluYWwpIC0gTWF0aC5taW4odGhpcy55LCB0aGlzLnlGaW5hbCk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueUZpbmFsID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgLSB0aGlzLmhlaWdodCA8IHRoaXMueUZpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy55RmluYWwgPSBzY3JlZW5EYXRhLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA+IHRoaXMueUZpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInVwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMueUZpbmFsID0gc2NyZWVuRGF0YS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24oZGlzdGFuY2VUb1RhcmdldFkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCA9IGVuZW15U2hpcExvZ2ljVmVydGljYWw7XHJcbmZ1bmN0aW9uIGVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24oZGlzdGFuY2VUb1RhcmdldFkpIHtcclxuICAgIHZhciB5QWRqID0gZGlzdGFuY2VUb1RhcmdldFkgLyB0aGlzLnZlcnRpY2FsU3BlZWQ7XHJcbiAgICB5QWRqID0gKE1hdGguc2lnbih5QWRqKSA+IDApID8geUFkaiA6IHlBZGogKiAtMTtcclxuICAgIHlBZGogPSAoeUFkaiA+IHRoaXMudmVydGljYWxTcGVlZCkgPyB0aGlzLnZlcnRpY2FsU3BlZWQgOiB5QWRqO1xyXG4gICAgdGhpcy55ID0gKHRoaXMueSA+IHRoaXMueUZpbmFsKSA/IHRoaXMueSAtIHlBZGogOlxyXG4gICAgICAgICh0aGlzLnkgPCB0aGlzLnlGaW5hbCkgPyB0aGlzLnkgKyB5QWRqIDogdGhpcy55RmluYWw7XHJcbn1cclxuZXhwb3J0cy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uID0gZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbjtcclxuZnVuY3Rpb24gc3Bhd25FbmVteUxvZ2ljKEVuZW15T2JqZWN0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZW5lbXlTcGF3bigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrU3Bhd25UeXBlLCBudW1iZXJFbmVteVBlclNwYXduLCBpLCBlbmVteVNoaXAsIGVuZW15U2hpcE9iamVjdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrU3Bhd25UeXBlID0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbERhdGEuZW5lbXlQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjaGVja1NwYXduVHlwZSA8PSBsZXZlbERhdGEuZW5lbXlSYW5kb21pemVySW5kZXgpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckVuZW15UGVyU3Bhd24gPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5lbmVteU1heE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbnVtYmVyRW5lbXlQZXJTcGF3bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA8IGxldmVsRGF0YS5lbmVteU1heE51bWJlcikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlTaGlwID0gZW5lbXlEYXRhW3RoaXMuZ2FtZVJhbmRvbWl6ZXIoZW5lbXlEYXRhLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVOZXdFbmVteShlbmVteVNoaXAsIEVuZW15T2JqZWN0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcE9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcE9iamVjdC5sb2FkRW5lbXllcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMgPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5jb25jYXQoZW5lbXlTaGlwT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdhbWVEYXRhLCBsZXZlbERhdGEsIGVuZW15RGF0YSwgbGV2ZWxVc2VyRGF0YSwgYm9zc1ByZXNlbnQsIGVuZW15U2hpcE9iamVjdDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLCBsZXZlbERhdGEgPSBnYW1lRGF0YS5sZXZlbERhdGEsIGVuZW15RGF0YSA9IGdhbWVEYXRhLmVuZW15RGF0YSwgbGV2ZWxVc2VyRGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpLCBib3NzUHJlc2VudCA9IChsZXZlbFVzZXJEYXRhLnNvdXJzZS5sZXZlbERhdGEuYm9zc1ByZXNlbnQpID8gbGV2ZWxVc2VyRGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmJvc3NQcmVzZW50IDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISghdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxDaGFuZ2UgJiYgIWJvc3NQcmVzZW50KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlTcGF3bi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZU5ld0VuZW15KGVuZW15RGF0YVswXSwgRW5lbXlPYmplY3QpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmxlbmd0aCA8IDEgJiYgIXRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcE9iamVjdC5sb2FkRW5lbXllcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcyA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmNvbmNhdChlbmVteVNoaXBPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zcGF3bkVuZW15TG9naWMgPSBzcGF3bkVuZW15TG9naWM7XHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0VuZW15KGVuZW15RGF0YSwgRW5lbXlPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgeCwgeSwgc2hpcERldGFpbHMsIGJlaGF2aW9yLCBleHRyYU9iamVjdHMsIF9hLCBjb250ZXh0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHggPSB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGggKyAzMDAsIHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQgLSAyMDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbmVteURhdGEuZGV0YWlscykgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcERldGFpbHMgPSBlbmVteURhdGEuZGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvciA9IChzaGlwRGV0YWlscy5iZWhhdmlvcikgPyBzaGlwRGV0YWlscy5iZWhhdmlvclt0aGlzLmdhbWVSYW5kb21pemVyKHNoaXBEZXRhaWxzLmJlaGF2aW9yLmxlbmd0aCldIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShzaGlwRGV0YWlscy5leHRyYU9iamVjdHMpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBsb2FkRXh0cmFPYmplY3QuY2FsbCh0aGlzLCBzaGlwRGV0YWlscy5leHRyYU9iamVjdHMpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBleHRyYU9iamVjdHMgPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IEVuZW15T2JqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHgsIHk6IHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeDogc2hpcERldGFpbHMuc3gsIHN5OiBzaGlwRGV0YWlscy5zeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNXaWR0aDogc2hpcERldGFpbHMuaW1hZ2VXaWR0aCAvIHNoaXBEZXRhaWxzLm51bWJlck9mSXRlbXMsIHNIZWlnaHQ6IHNoaXBEZXRhaWxzLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZXNXaWR0aDogc2hpcERldGFpbHMuaW1hZ2VXaWR0aCwgbnVtYmVyT2ZJdGVtczogc2hpcERldGFpbHMubnVtYmVyT2ZJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaGlwRGV0YWlscy53aWR0aCwgaGVpZ2h0OiBzaGlwRGV0YWlscy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwVGV4dHVyZTogc2hpcERldGFpbHMuc2tpbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogc2hpcERldGFpbHMuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHNoaXBEZXRhaWxzLnN0YXR1cywgbmFtZTogc2hpcERldGFpbHMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldFR5cGVOdW1iZXI6IHNoaXBEZXRhaWxzLmJ1bGxldFR5cGUsIHJhcGlkRmlyZTogc2hpcERldGFpbHMucmFwaWRGaXJlLCBwb2ludHNQZXJVbml0OiBzaGlwRGV0YWlscy5wb2ludHNQZXJVbml0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoUG9pbnQ6IHNoaXBEZXRhaWxzLmhlYWx0aFBvaW50LCBhbmltYXRpb25TdGVwczogc2hpcERldGFpbHMuYW5pbWF0aW9uU3RlcHMsIGRhbWFnZTogc2hpcERldGFpbHMuZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IHNoaXBEZXRhaWxzLm9iamVjdE93bmVyLCBndW5zOiAoc2hpcERldGFpbHMuZ3VucykgPyBzaGlwRGV0YWlscy5ndW5zIDogW10sIGV4cGxvc2lvbjogc2hpcERldGFpbHMuZXhwbG9zaW9uQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zOiBzaGlwRGV0YWlscy5udW1iZXJPZlZlcnRpY2FsSXRlbXMsIGlzTW92ZTogc2hpcERldGFpbHMuaXNNb3ZlLCBpc1Nob290OiBzaGlwRGV0YWlscy5pc1Nob290LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvdERpc3RhbmNlOiBzaGlwRGV0YWlscy5zcG90RGlzdGFuY2UsIGJlaGF2aW9yOiBiZWhhdmlvciwgdmVydGljYWxTcGVlZDogKHNoaXBEZXRhaWxzLnZlcnRpY2FsU3BlZWQpID8gc2hpcERldGFpbHMudmVydGljYWxTcGVlZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Jvc3M6IChzaGlwRGV0YWlscy5pc0Jvc3MpID8gc2hpcERldGFpbHMuaXNCb3NzIDogZmFsc2UsIGV4dHJhT2JqZWN0czogZXh0cmFPYmplY3RzIC8vIGxvYWQgY29pbiBlbGVtZW50IGZyb20gc2VydmVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVOZXdFbmVteSA9IGNyZWF0ZU5ld0VuZW15O1xyXG5mdW5jdGlvbiBsb2FkRXh0cmFPYmplY3QoZXh0cmFPYmplY3RzKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbU9iamVjdCwgbG9hZFByb2JhYmlsaXR5LCBudW1iZXJPZkVsZW1lbnQsIHJlc3VsdCwgY2FsbE9iamVjdCwgaTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21PYmplY3QgPSBleHRyYU9iamVjdHNbdGhpcy5nYW1lUmFuZG9taXplcihleHRyYU9iamVjdHMubGVuZ3RoKV0sIGxvYWRQcm9iYWJpbGl0eSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIocmFuZG9tT2JqZWN0LnJhbmRvbXVpemVyKSwgbnVtYmVyT2ZFbGVtZW50ID0gdGhpcy5nYW1lUmFuZG9taXplcihyYW5kb21PYmplY3QubWF4TnVtYmVyICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHsgdXJsOiBwcm9jZXNzLmVudi5IT1NUICsgXCJhcGkvZ3JhcHBsZS1vYmplY3RzXCIsIG1ldGhvZDogXCJHRVRcIiwgZGF0YTogbnVsbCwgaGVhZGVyczogeyAnZ3JhcHBsZU9iamVjdCc6IHJhbmRvbU9iamVjdC5vYmplY3QgfSB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbE9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjYWxsT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubG9hZEV4dHJhT2JqZWN0ID0gbG9hZEV4dHJhT2JqZWN0O1xyXG5mdW5jdGlvbiBnYW1lUmFuZG9taXplcihtYXhOdW1iZXIsIG1pbk51bWJlcikge1xyXG4gICAgaWYgKG1pbk51bWJlciA9PT0gdm9pZCAwKSB7IG1pbk51bWJlciA9IDA7IH1cclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhOdW1iZXIgKyBtaW5OdW1iZXIpO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVJhbmRvbWl6ZXIgPSBnYW1lUmFuZG9taXplcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBhZ2VzQnVpbGRlcl8xID0gcmVxdWlyZShcIi4vcGFnZXNCdWlsZGVyXCIpO1xyXG52YXIgc2VydmVyUmVxdWVzdE1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvc2VydmVyUmVxdWVzdE1vZHVsZXNcIik7XHJcbnZhciBnYW1lUmVzdWx0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi9nYW1lUmVzdWx0TW9kdWxlXCIpO1xyXG52YXIgc2F0YXJ0R2FtZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lXCIpO1xyXG5mdW5jdGlvbiBzaG93KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG5leHBvcnRzLnNob3cgPSBzaG93O1xyXG5mdW5jdGlvbiBoaWRlKGVsKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbmV4cG9ydHMuaGlkZSA9IGhpZGU7XHJcbmZ1bmN0aW9uIHRvZ2dsZXIoZWwpIHtcclxuICAgIChlbC5zdHlsZS5kaXNwbGF5ID09ICdub25lJykgPyBzaG93KGVsKSA6IGhpZGUoZWwpO1xyXG59XHJcbmV4cG9ydHMudG9nZ2xlciA9IHRvZ2dsZXI7XHJcbmZ1bmN0aW9uIGFkZENsYXNzTGlzdChlbCwgY2xhc3NMaXN0KSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XHJcbn1cclxuZXhwb3J0cy5hZGRDbGFzc0xpc3QgPSBhZGRDbGFzc0xpc3Q7XHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzTGlzdChlbCwgY2xhc3NMaXN0KSB7XHJcbiAgICBpZiAoIWVsLmNsYXNzTGlzdClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTGlzdCk7XHJcbn1cclxuZXhwb3J0cy5yZW1vdmVDbGFzc0xpc3QgPSByZW1vdmVDbGFzc0xpc3Q7XHJcbmZ1bmN0aW9uIGFwcE1lbnUoZ2FtZU9iamVjdCwgZGlhbG9nV2luZG93KSB7XHJcbiAgICB2YXIgc2VsZWN0ZWRNZW51SXRlbSA9IG51bGw7XHJcbiAgICB2YXIgbmF2aWdhdGlvbiA9IHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHNlbGVjdGVkTWVudUl0ZW06IHNlbGVjdGVkTWVudUl0ZW0gfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lbnU6IHtcclxuICAgICAgICAgICAgY29uc3RhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uVGVtcGxhdGU6ICcuc2VjdGlvbi10ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyOiAnI3dyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgc2lkZU1lbnVXcmFwcGVyOiAnI21haW4tbWVudSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1wb3J0U2VjdGlvbnNUb0RPTTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJpbXBvcnRcIl0nKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGlua3MsIGZ1bmN0aW9uIChsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gbGluay5pbXBvcnQucXVlcnlTZWxlY3RvcihuYXZpZ2F0aW9uLm1lbnUuY29uc3RhbnRzLnNlY3Rpb25UZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdmlnYXRpb24ubWVudS5jb25zdGFudHMuY29udGVudENvbnRhaW5lcikuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldE1lbnVPbkNsaWNrRXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLWJveFwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidXR0b25BY3Rvbik7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBidXR0b25BY3RvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuZGF0YXNldC5zZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaGlkZUFsbFNlY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuc2hvd1NlY3Rpb24uY2FsbCh0aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudVNlbGVjdGlvbihldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZ2FtZS1yZXN1bHRzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVzdWx0TW9kdWxlXzEuc2hvd1Jlc3VsdFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYW1lLXJlc3VsdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXhpdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlcihlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nV2luZG93KHsgdGV4dERhdGE6ICdFeGl0IHRoZSBnYW1lPycsIHJlamVjdFRleHQ6ICdjYW5jZWwnLCBhY2NlcHRUZXh0OiAnb2snIH0sIHNhdGFydEdhbWVfMS5leGl0VGhlR2FtZSwgbmF2aWdhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbG9zZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5tZW51LmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1lbnVTZWxlY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PSBcIkxJXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lbnVBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZC1pdGVtc1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbWVudUFyZWFfMSA9IG1lbnVBcmVhOyBfaSA8IG1lbnVBcmVhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzTGlzdChtZW51SXRlbSwgXCJzZWxlY3RlZC1pdGVtc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE1lbnVJdGVtID0gKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkICE9IFwiY2xvc2VcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQgIT0gXCJjYW5jZWxcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQgIT0gXCJleGl0XCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0KSA/IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50IDogc2VsZWN0ZWRNZW51SXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3NMaXN0KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1NlY3Rpb246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25JZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICBzaG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBzZWN0aW9uSWQpKTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS13cmFwcGVyXCIpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbWVudUFyZWFfMiA9IG1lbnVBcmVhOyBfaSA8IG1lbnVBcmVhXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtZW51QXJlYV8yW19pXTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzc0xpc3QoaXRlbSwgXCJtZW51LWJhY2tncm91ZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhZ2VzQnVpbGRlcl8xLnBhZ2VCdWlsZGVyKHsgdGFyZ2V0OiBcIiNhYm91dC1zZWN0aW9uLWNvbnRlbnRcIiwgZGF0YTogc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXRMb2NhbERhdGEoeyBmaWxlTmFtZTogJ2Fib3V0LXBhZ2UuanNvbicgfSkgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVBbGxTZWN0aW9uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25Ob2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25zdGFudHMuY29udGVudENvbnRhaW5lciArIFwiIHNlY3Rpb25cIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBzZWN0aW9uTm9kZXNfMSA9IHNlY3Rpb25Ob2RlczsgX2kgPCBzZWN0aW9uTm9kZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHNlY3Rpb25Ob2Rlc18xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVCYWNrZ3JvdW5kQXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS13cmFwcGVyXCIpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgbWVudUJhY2tncm91bmRBcmVhXzEgPSBtZW51QmFja2dyb3VuZEFyZWE7IF9hIDwgbWVudUJhY2tncm91bmRBcmVhXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtZW51QmFja2dyb3VuZEFyZWFfMVtfYV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KGl0ZW0sIFwibWVudS1iYWNrZ3JvdWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUFyZWEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkLWl0ZW1zXCIpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgbWVudUFyZWFfMyA9IG1lbnVBcmVhOyBfYiA8IG1lbnVBcmVhXzMubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lbnVJdGVtID0gbWVudUFyZWFfM1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KG1lbnVJdGVtLCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltcG9ydFNlY3Rpb25zVG9ET00oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWVudU9uQ2xpY2tFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcclxufVxyXG5leHBvcnRzLmFwcE1lbnUgPSBhcHBNZW51O1xyXG5mdW5jdGlvbiBoaWRlU2hvd01lbnUobWFpbk1lbnUsIG5hdmlnYXRpb25NZW51LCBnYW1lV2luLCBnYW1lU3RhdHVzLCBnYW1lVWlQYXVzZSkge1xyXG4gICAgaWYgKCFnYW1lU3RhdHVzIHx8IGdhbWVVaVBhdXNlKSB7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtbWVudVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlLW1lbnVcIik7XHJcbiAgICAgICAgbmF2aWdhdGlvbk1lbnUuaGlkZUFsbFNlY3Rpb25zKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5oaWRlU2hvd01lbnUgPSBoaWRlU2hvd01lbnU7XHJcbmZ1bmN0aW9uIGRpYWxvZ1dpbmRvdyhfYSwgY2FsbGJhY2ssIG5hdmlnYXRpb24pIHtcclxuICAgIHZhciB0ZXh0RGF0YSA9IF9hLnRleHREYXRhLCByZWplY3RUZXh0ID0gX2EucmVqZWN0VGV4dCwgYWNjZXB0VGV4dCA9IF9hLmFjY2VwdFRleHQ7XHJcbiAgICB2YXIgcmVzdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAzOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICByZXN0W19pIC0gM10gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIHdpbmRvd0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpYWxvZy1ib3hcIik7XHJcbiAgICB2YXIgZGlhbG9nQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYm9keScpO1xyXG4gICAgZGlhbG9nQm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZnVuY3Rpb24gZGlhbG9nQnV0dG9uRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRNZW51SXRlbSA9IChuYXZpZ2F0aW9uKSA/IG5hdmlnYXRpb24uc2hvd1NlbGVjdGVkSXRlbSgpIDogZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCkge1xyXG4gICAgICAgICAgICBjYXNlICdvayc6XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUFyZWEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkLWl0ZW1zXCIpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbWVudUFyZWFfNCA9IG1lbnVBcmVhOyBfaSA8IG1lbnVBcmVhXzQubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lbnVJdGVtID0gbWVudUFyZWFfNFtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KG1lbnVJdGVtLCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTWVudUl0ZW0uc2VsZWN0ZWRNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzTGlzdChzZWxlY3RlZE1lbnVJdGVtLnNlbGVjdGVkTWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVzdGFydCc6XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsLmFwcGx5KGNhbGxiYWNrLCByZXN0KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3aW5kb3dFbGVtZW50KVxyXG4gICAgICAgIHNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICB2YXIgZGlhbG9nRGF0YSA9IFtcclxuICAgICAgICBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwiYWNjZXB0LWJ0biBidG4tbWFpblwiLFxyXG4gICAgICAgICAgICBpbmxpbmVTdHlsZTogbnVsbCxcclxuICAgICAgICAgICAgcGljdHVyZVVybDogbnVsbCxcclxuICAgICAgICAgICAgbGlua1VybDogbnVsbCxcclxuICAgICAgICAgICAgdGV4dDogYWNjZXB0VGV4dCxcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRpYWxvZy10ZXh0XFxcIj5cIiArIHRleHREYXRhICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJkaWFsb2ctYnV0dG9uLWFyZWFcXFwiIGNsYXNzPVxcXCJkaWFsb2ctYnRuLWFyZWFcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1idXR0b24taWQ9XCIgKyBhY2NlcHRUZXh0ICsgXCIgY2xhc3M9XFxcImFjY2VwdC1idG4gYnRuLW1haW5cXFwiPlwiICsgYWNjZXB0VGV4dCArIFwiPC9idXR0b24+XFxuICAgICAgICAgICA8YnV0dG9uIGRhdGEtYnV0dG9uLWlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJyZWplY3QtYnRuIGJ0bi1tYWluXFxcIj5jYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgPC9kaXY+XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdkYXRhLWJ1dHRvbi1pZCcsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogYWNjZXB0VGV4dCxcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICB9KVxyXG4gICAgXTtcclxuICAgIGZvciAodmFyIF9iID0gMCwgZGlhbG9nRGF0YV8xID0gZGlhbG9nRGF0YTsgX2IgPCBkaWFsb2dEYXRhXzEubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBkaWFsb2dEYXRhXzFbX2JdO1xyXG4gICAgICAgIGRpYWxvZ0JvZHkuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZGlhbG9nQnV0dG9uQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnV0dG9uLWFyZWEnKTtcclxuICAgIGRpYWxvZ0J1dHRvbkFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaWFsb2dCdXR0b25FdmVudCk7XHJcbn1cclxuZXhwb3J0cy5kaWFsb2dXaW5kb3cgPSBkaWFsb2dXaW5kb3c7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYXBwTWVudV8xID0gcmVxdWlyZShcIi4vYXBwTWVudVwiKTtcclxudmFyIHBhZ2VzQnVpbGRlcl8xID0gcmVxdWlyZShcIi4vcGFnZXNCdWlsZGVyXCIpO1xyXG52YXIgc2VydmVyUmVxdWVzdE1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvc2VydmVyUmVxdWVzdE1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRTY3JlZW4oKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdpbmRvd0VsZW1lbnQsIGdhbWVEYXRhLCBpbmRleCwgX2xvb3BfMSwgX2ksIGdhbWVEYXRhXzEsIGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXJlc3VsdC1hcmVhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHByb2Nlc3MuZW52LkhPU1QgKyAnYXBpL2dhbWUtcmVzdWx0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVEYXRhLmhhc093blByb3BlcnR5KCdtZXNzYWdlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93RWxlbWVudC5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9XFxcInJlc3VsdC1tZXNzYWdlLXdyYXBwZXJcXFwiPjxwPlwiICsgZ2FtZURhdGEubWVzc2FnZSArIFwiPC9wPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lID0gbmV3IERhdGUoaXRlbS50aW1lKSwgeWVhciA9IHRpbWUuZ2V0RnVsbFllYXIoKSwgbW9udGggPSB0aW1lLmdldFVUQ01vbnRoKCkgKyAxLCBkYXkgPSB0aW1lLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiBcImxpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNsYXNzOiBcIndpbm5lci1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVVcmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8cCBjbGFzcz1cXFwic2luZ2xlLWl0ZW1cXFwiPjxzcGFuIGNsYXNzPVxcXCJyYXRlLW51bWJlclxcXCI+Jm5ic3A7IFwiICsgaW5kZXggKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICBuYW1lOiAmbmJzcDs8c3BhbiBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj4gXCIgKyBpdGVtLnVzZXJOYW1lICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgY29pbjogJm5ic3A7PHNwYW4gY2xhc3M9XFxcIml0ZW0tY29pblxcXCI+IFwiICsgaXRlbS5nYW1lQ29pbnMgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICBzY29yZTogJm5ic3A7PHNwYW4gY2xhc3M9XFxcIml0ZW0tcG9pbnRzXFxcIj4gXCIgKyBpdGVtLmdhbWVQb2ludHMgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1kYXRlXFxcIj4gXCIgKyB5ZWFyICsgXCIvXCIgKyBtb250aCArIFwiL1wiICsgZGF5ICsgXCI8L3NwYW4+PC9wPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ2RhdGEtYnV0dG9uLWlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvL2dhbWVEYXRhID0gZ2FtZURhdGEuc29ydCgoYSwgYikgPT4ge3JldHVybiAgYS5nYW1lUG9pbnRzIC0gYi5nYW1lUG9pbnRzfSkucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBnYW1lRGF0YV8xID0gZ2FtZURhdGE7IF9pIDwgZ2FtZURhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGdhbWVEYXRhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd1Jlc3VsdFNjcmVlbiA9IHNob3dSZXN1bHRTY3JlZW47XHJcbmZ1bmN0aW9uIGluaXRSZXN1bHRTY3JlZW4obWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciB3aW5kb3dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUtcmVzdWx0LWJveCcpO1xyXG4gICAgdmFyIGZvcm1Mb2FkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWxvYWQtYXJlYScpO1xyXG4gICAgZm9ybUxvYWRBcmVhLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBhcHBNZW51XzEuc2hvdyh3aW5kb3dFbGVtZW50KTtcclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJmb3JtXCIsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwiYWNjZXB0LWJ0biBidG4tbWFpblwiLFxyXG4gICAgICAgICAgICBpbmxpbmVTdHlsZTogbnVsbCxcclxuICAgICAgICAgICAgcGljdHVyZVVybDogbnVsbCxcclxuICAgICAgICAgICAgbGlua1VybDogbnVsbCxcclxuICAgICAgICAgICAgdGV4dDogXCJzYXZlIHJlc3VsdFwiLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXFxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBmaWxsIG5ld3QgZmllbGRzIHRvIHNhdmUgeW91ciByZXN1bHQ8L3A+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIGVudGVyIHlvdSBuYW1lPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuYW1lXFxcIiBtYXhsZW5ndGg9XFxcIjMwXFxcIiBtaW5sZW5ndGg9XFxcIjNcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3UgbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1haWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIGVudGVyIHlvdSBlbWFpbDwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibWFpbFxcXCIgbmFtZT1cXFwidXNlckVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgcmVxdWlyZSBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJhbGVydC1tZXNzYWdlXFxcIiBjbGFzcz1cXFwiYWxlcnQtbWVzc2FnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1ib3R0b20tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1idG4tYXJlYVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgZGF0YS1idXR0b24taWQ9XFxcInNhdmUtcmVzdWx0XFxcIiBjbGFzcz1cXFwiYWNjZXB0LWJ0biBidG4tbWFpblxcXCI+c2F2ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWJ1dHRvbi1pZD1cXFwiY2FuY2VsXFxcIiBjbGFzcz1cXFwicmVqZWN0LWJ0biBidG4tbWFpblxcXCI+Y2FuY2VsPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnbmFtZScsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJzYXZlLXJlc3VsdC1mb3JtXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgfSksXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkaWFsb2dEYXRhXzEgPSBkaWFsb2dEYXRhOyBfaSA8IGRpYWxvZ0RhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGRpYWxvZ0RhdGFfMVtfaV07XHJcbiAgICAgICAgZm9ybUxvYWRBcmVhLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snc2F2ZS1yZXN1bHQtZm9ybSddO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1ib3R0b20tYXJlYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlhbG9nQnV0dG9uRXZlbnQpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtQWN0aW9uKTtcclxuICAgIGZ1bmN0aW9uIGRpYWxvZ0J1dHRvbkV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCkge1xyXG4gICAgICAgICAgICBjYXNlICdzYXZlLXJlc3VsdCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcclxuICAgICAgICAgICAgICAgIGZvcm1Mb2FkQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwTWVudV8xLmhpZGUod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1BY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtUmVzdWx0LCByZXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1SZXN1bHQgPSB0cmFuc2ZlckRhdGFUb09iamVjdChmb3JtLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm9ybVJlc3VsdCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwcm9jZXNzLmVudi5IT1NUICsgJ2FwaS9nYW1lLXJlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybVJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRm9ybU1lc3NhZ2UoeyBtZXNzYWdlOiByZXMubWVzc2FnZSwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZvcm1NZXNzYWdlKHsgbWVzc2FnZTogXCJJIGNhbnQgc2VuZCB0aGlzLCBwbGVhc2UgY2hlY2sgZm9ybSBhZ2FpblwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlcnJvckZvcm1NZXNzYWdlKF9hKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBfYS5tZXNzYWdlLCBzdGF0dXMgPSBfYS5zdGF0dXM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsZXJ0LW1lc3NhZ2VcIik7XHJcbiAgICAgICAgdmFyIGFsZXJ0VGV4dCA9IFwiXCI7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlamVjdFwiOlxyXG4gICAgICAgICAgICAgICAgYWxlcnRUZXh0ID0gXCI8cCBjbGFzcz1cXFwicmVqZWN0LXRleHRcXFwiPlwiICsgbWVzc2FnZSArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJuaW5nXCI6XHJcbiAgICAgICAgICAgICAgICBhbGVydFRleHQgPSBcIjxwIGNsYXNzPVxcXCJ3YXJuaW5nLXRleHRcXFwiPlwiICsgbWVzc2FnZSArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgICAgICBhbGVydFRleHQgPSBcIjxwIGNsYXNzPVxcXCJzdWNjZXNzLXRleHRcXFwiPlwiICsgbWVzc2FnZSArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBhbGVydFRleHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGFsZXJ0VGV4dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRSZXN1bHRTY3JlZW4gPSBpbml0UmVzdWx0U2NyZWVuO1xyXG5mdW5jdGlvbiB0cmFuc2ZlckRhdGFUb09iamVjdChkYXRhLCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgaWYgKCFkYXRhKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwiTm8gZGF0YSB0byB0cmFuc2Zvcm1cIik7XHJcbiAgICB2YXIgb2JqID0geyB1c2VyTmFtZTogbnVsbCwgdXNlckVtYWlsOiBudWxsLCBnYW1lUG9pbnRzOiBudWxsLCBnYW1lQ29pbnM6IG51bGwgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgIGlmIChpdGVtLm5hbWUgJiYgaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSAmJiAhaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGdhbWVEYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgb2JqLmdhbWVQb2ludHMgPSBnYW1lRGF0YS5wb2ludHM7XHJcbiAgICBvYmouZ2FtZUNvaW5zID0gZ2FtZURhdGEuZ2FtZUNvaW5zO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gcGFnZUJ1aWxkZXIoX2EpIHtcclxuICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQsIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYiwgdGFyZ2V0Tm9kZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgIXRhcmdldF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSAoX2Muc2VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2IpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sICFkYXRhXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IChfYy5zZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiY2FudCBmZXRjaCB0aGUgZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVDbGFzczogaXRlbS5jbGFzc2xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGU6IGl0ZW0uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVVybDogaXRlbS5pbWFnZUxpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1VybDogaXRlbS5saW5rLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGVudDogaXRlbS5odG1sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBudWxsLCBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQobmV3T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5wYWdlQnVpbGRlciA9IHBhZ2VCdWlsZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50cyhfYSkge1xyXG4gICAgdmFyIHRhZ05hbWUgPSBfYS50YWdOYW1lLCBzdHlsZUNsYXNzID0gX2Euc3R5bGVDbGFzcywgaW5saW5lU3R5bGUgPSBfYS5pbmxpbmVTdHlsZSwgcGljdHVyZVVybCA9IF9hLnBpY3R1cmVVcmwsIGxpbmtVcmwgPSBfYS5saW5rVXJsLCB0ZXh0ID0gX2EudGV4dCwgaW5uZXJDb250ZW50ID0gX2EuaW5uZXJDb250ZW50LCBhdHRyaWJ1dGVOYW1lID0gX2EuYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlID0gX2EuYXR0cmlidXRlLCBhdHRyaWJ1dGVOYW1lMSA9IF9hLmF0dHJpYnV0ZU5hbWUxLCBhdHRyaWJ1dGUxID0gX2EuYXR0cmlidXRlMTtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICAoc3R5bGVDbGFzcykgPyBlbGVtZW50LmNsYXNzTmFtZSA9IHN0eWxlQ2xhc3MgOiBmYWxzZTtcclxuICAgIChpbmxpbmVTdHlsZSkgPyBlbGVtZW50LnN0eWxlID0gaW5saW5lU3R5bGUgOiBmYWxzZTtcclxuICAgICh0YWdOYW1lID09PSBcImltZ1wiICYmIHBpY3R1cmVVcmwpID8gZWxlbWVudC5zcmMgPSBfX2Rpcm5hbWUgKyBwaWN0dXJlVXJsIDogZmFsc2U7XHJcbiAgICAodGV4dCkgPyBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQgOiBmYWxzZTtcclxuICAgIChpbm5lckNvbnRlbnQpID8gZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQgOiBmYWxzZTtcclxuICAgIChhdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZSkgPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGUpIDogZmFsc2U7XHJcbiAgICAoYXR0cmlidXRlTmFtZTEgJiYgYXR0cmlidXRlMSkgPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lMSwgYXR0cmlidXRlMSkgOiBmYWxzZTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlRWxlbWVudHMgPSBjcmVhdGVFbGVtZW50cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1bGxldHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvYnVsbGV0c01vZHVsZVwiKTtcclxudmFyIGVuZ2luZU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIEJ1bGxldENvbnN0cnVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJ1bGxldENvbnN0cnVjdCh4LCB5LCBidWxsZXRUeXBlLCBidWxsZXRUZXh0dXJlLCBvYmplY3RPd25lciwgYnVsbGV0U3BlZWQsIHdpZHRoLCBoZWlnaHQsIGRhbWFnZSwgdHlwZSwgdGV4dHVyZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGV4cGxvc2lvbikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmJ1bGxldFR5cGUgPSBidWxsZXRUeXBlO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0VGV4dHVyZSA9IGJ1bGxldFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IG9iamVjdE93bmVyO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IF9fZGlybmFtZSArIHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5zeCA9IHN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBzeTtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IHNXaWR0aDtcclxuICAgICAgICB0aGlzLnNIZWlnaHQgPSBzSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gZXhwbG9zaW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJ1bGxldENvbnN0cnVjdDtcclxufSgpKTtcclxuZXhwb3J0cy5CdWxsZXRDb25zdHJ1Y3QgPSBCdWxsZXRDb25zdHJ1Y3Q7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuY3JlYXRlQnVsbGV0cyA9IGJ1bGxldHNNb2R1bGVfMS5jcmVhdGVCdWxsZXRzO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLmluaXRCdWxsZXRzID0gYnVsbGV0c01vZHVsZV8xLmluaXRCdWxsZXRzO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLm1vdmVCdWxsZXRzID0gYnVsbGV0c01vZHVsZV8xLm1vdmVCdWxsZXRzO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLmdldE9iamVjdFBvc2l0aW9uID0gZW5naW5lTW9kdWxlc18xLmdldE9iamVjdFBvc2l0aW9uO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVndWxhckVuZW15QWlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vYWkvcmVndWxhckVuZW15QWlNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgZW5naW5lXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lXCIpO1xyXG52YXIgRW5lbXlPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbmVteU9iamVjdChfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMueCA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5zeCA9IGRhdGEuc3g7XHJcbiAgICAgICAgdGhpcy5zeSA9IGRhdGEuc3k7XHJcbiAgICAgICAgdGhpcy5zV2lkdGggPSBkYXRhLnNXaWR0aDtcclxuICAgICAgICB0aGlzLnNIZWlnaHQgPSBkYXRhLnNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlc1dpZHRoID0gZGF0YS5waWN0dXJlc1dpZHRoO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcyA9IGRhdGEubnVtYmVyT2ZJdGVtcztcclxuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2hpcFRleHR1cmUgPSBfX2Rpcm5hbWUgKyBkYXRhLnNoaXBUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0VHlwZU51bWJlciA9IGRhdGEuYnVsbGV0VHlwZU51bWJlcjtcclxuICAgICAgICB0aGlzLnJhcGlkRmlyZSA9IGRhdGEucmFwaWRGaXJlO1xyXG4gICAgICAgIHRoaXMucG9pbnRzUGVyVW5pdCA9IGRhdGEucG9pbnRzUGVyVW5pdDtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gZGF0YS5oZWFsdGhQb2ludDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXBzID0gZGF0YS5hbmltYXRpb25TdGVwcztcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhdGEuZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuZ3VucyA9IGRhdGEuZ3VucztcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqZWN0T3duZXIgPSBkYXRhLm9iamVjdE93bmVyO1xyXG4gICAgICAgIHRoaXMuZ3VucyA9IGRhdGEuZ3VucztcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IGRhdGEuZXhwbG9zaW9uO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zID0gZGF0YS5udW1iZXJPZlZlcnRpY2FsSXRlbXM7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbEhlYWx0aFBvaW50ID0gZGF0YS5oZWFsdGhQb2ludDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGRhdGEuaXNNb3ZlO1xyXG4gICAgICAgIHRoaXMuaXNTaG9vdCA9IGRhdGEuaXNTaG9vdDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3BlZWQgPSAoZGF0YS52ZXJ0aWNhbFNwZWVkKSA/IGRhdGEudmVydGljYWxTcGVlZCA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEuc3BlZWQgKyAxKTtcclxuICAgICAgICB0aGlzLnNwb3REaXN0YW5jZSA9IChkYXRhLmlzQm9zcykgPyBkYXRhLnNwb3REaXN0YW5jZSA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEuc3BvdERpc3RhbmNlKTtcclxuICAgICAgICB0aGlzLnlGaW5hbCA9IDA7XHJcbiAgICAgICAgdGhpcy54RmluYWwgPSAwO1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IgPSBkYXRhLmJlaGF2aW9yO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzQm9zcyA9IGRhdGEuaXNCb3NzO1xyXG4gICAgICAgIHRoaXMuZXh0cmFPYmplY3RzID0gZGF0YS5leHRyYU9iamVjdHM7XHJcbiAgICAgICAgLy8vIGxvYWQgYW1vdW50IGZvIGNvaW5zLCBhbmRvIGNvaW5zIG9iamVjdCBmcm9tIHNlcnZlclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEVuZW15T2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLkVuZW15T2JqZWN0ID0gRW5lbXlPYmplY3Q7XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5wbGFjZUVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLnBsYWNlRW5lbXllcztcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLm1vdmVFbmVteWVzID0gZW5lbWllc01vZHVsZXNfMS5tb3ZlRW5lbXllcztcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmxvYWRFbmVteWVzID0gZW5lbWllc01vZHVsZXNfMS5sb2FkRW5lbXllcztcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnNob290ID0gZW5lbWllc01vZHVsZXNfMS5zaG9vdDtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15QW5pbWF0aW9uID0gZW5lbWllc01vZHVsZXNfMS5lbmVteUFuaW1hdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmdldE9iamVjdFBvc2l0aW9uID0gZW5naW5lXzEuZ2V0T2JqZWN0UG9zaXRpb247XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5lbmVteURhbWFnZUFuaW1hdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuZW5lbXlEYW1hZ2VBbmltYXRpb247XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5lbmVteVNoaXBMb2dpY1ZlcnRpY2FsID0gcmVndWxhckVuZW15QWlNb2R1bGVzXzEuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbDtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24gPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUudGFrZURhbWFnZSA9IGVuZW1pZXNNb2R1bGVzXzEudGFrZURhbWFnZTtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnNwYXduQ29pbiA9IGVuZW1pZXNNb2R1bGVzXzEuc3Bhd25Db2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdhbWVTaWRlT2JqZWN0Q29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuL2dhbWVTaWRlT2JqZWN0Q29uc3RydWN0b3JcIik7XHJcbnZhciBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgR3JhcHBsZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhHcmFwcGxlT2JqZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gR3JhcHBsZU9iamVjdChfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oe30sIGRhdGEpKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlzR3JhcHBsZSA9IGRhdGEuaXNHcmFwcGxlO1xyXG4gICAgICAgIF90aGlzLmdyYXBwbGVQb3dlciA9IGRhdGEuZ3JhcHBsZVBvd2VyO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBHcmFwcGxlT2JqZWN0O1xyXG59KGdhbWVTaWRlT2JqZWN0Q29uc3RydWN0b3JfMS5TaWRlT2JqZWN0KSk7XHJcbmV4cG9ydHMuR3JhcHBsZU9iamVjdCA9IEdyYXBwbGVPYmplY3Q7XHJcbkdyYXBwbGVPYmplY3QucHJvdG90eXBlLmFkZFBsYXllckxpZmUgPSBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMS5hZGRQbGF5ZXJMaWZlO1xyXG5HcmFwcGxlT2JqZWN0LnByb3RvdHlwZS5jb2xsZWN0Q29pbiA9IGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xLmNvbGxlY3RDb2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZW5lbXlNb2R1bGVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9lbmVtaWVzXCIpKTtcclxudmFyIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBTaWRlT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2lkZU9iamVjdChfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IGRhdGEuc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IGRhdGEuc0hlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gX19kaXJuYW1lICsgZGF0YS50ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcHMgPSBkYXRhLmFuaW1hdGlvblN0ZXBzO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcyA9IGRhdGEubnVtYmVyT2ZJdGVtcztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IGRhdGEudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlc1dpZHRoID0gZGF0YS5waWN0dXJlc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gKGRhdGEuZGFtYWdlKSA/IGRhdGEuZGFtYWdlIDogbnVsbDtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gKGRhdGEub2JqZWN0T3duZXIpID8gZGF0YS5vYmplY3RPd25lciA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IChkYXRhLmhlYWx0aFBvaW50KSA/IGRhdGEuaGVhbHRoUG9pbnQgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gKGRhdGEuaXNCYWNrZ3JvdW5kKSA/IGRhdGEuaXNCYWNrZ3JvdW5kIDogbnVsbDtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IChkYXRhLmV4cGxvc2lvbikgPyBkYXRhLmV4cGxvc2lvbiA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb2ludHNQZXJVbml0ID0gKGRhdGEucG9pbnRzUGVyVW5pdCkgPyBkYXRhLnBvaW50c1BlclVuaXQgOiAwO1xyXG4gICAgICAgIHRoaXMuZXh0cmFPYmplY3RzID0gKGRhdGEuZXh0cmFPYmplY3RzKSA/IGRhdGEuZXh0cmFPYmplY3RzIDogMDtcclxuICAgIH1cclxuICAgIHJldHVybiBTaWRlT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLlNpZGVPYmplY3QgPSBTaWRlT2JqZWN0O1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5lbmVteUFuaW1hdGlvbiA9IGVuZW15TW9kdWxlcy5lbmVteUFuaW1hdGlvbjtcclxuU2lkZU9iamVjdC5wcm90b3R5cGUucGxhY2VFbmVteWVzID0gZW5lbXlNb2R1bGVzLnBsYWNlRW5lbXllcztcclxuU2lkZU9iamVjdC5wcm90b3R5cGUuZmlyZUFuaW1hdGlvbkVuZGVkID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZmlyZUFuaW1hdGlvbkVuZGVkO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5tYXBPYmplY3RNb3ZlID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEubWFwT2JqZWN0TW92ZTtcclxuU2lkZU9iamVjdC5wcm90b3R5cGUuZW5lbXlEYW1hZ2VBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15RGFtYWdlQW5pbWF0aW9uO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5zcGF3bkNvaW4gPSBlbmVtaWVzTW9kdWxlc18xLnNwYXduQ29pbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21haW5HYW1lQ29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbGV2ZWxDb25zdHJ1Y3RvcnNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbmVteUNvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdXNlckNvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYnVsbGV0Q29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2FtZUdyYXBwbGVPYmplY3RzXCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVuZ2luZU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIGJhY2tncm91bmRNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvYmFja2dyb3VuZE1vZHVsZVwiKTtcclxudmFyIEdhbWVCYWNrZ3JvdW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZUJhY2tncm91bmQoYmFja2dyb3VuZFRleHR1cmUsIGJhY2tncm91bmRTcGVlZCwgc2NyZWVuRGF0YSwgY3R4LCBwYXJ0T2ZTY3JlZW5TdGF0dXMsIGV4dHJhTWFwLCB0aW1lVG9FeHRyYU1hcFNlY29uZHMsIHRpbWVUb0V4dHJhTWFwTWludXRlcykge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlID0gYmFja2dyb3VuZFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kU3BlZWQgPSBiYWNrZ3JvdW5kU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5EYXRhID0gc2NyZWVuRGF0YTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLnggPSAocGFydE9mU2NyZWVuU3RhdHVzKSA/IDAgOiBzY3JlZW5EYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmV4dHJhTWFwID0gZXh0cmFNYXA7XHJcbiAgICAgICAgdGhpcy50aW1lVG9FcmVzc0xldmVsID0gNDtcclxuICAgICAgICB0aGlzLndhcnBPYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy50aW1lVG9FeHRyYU1hcFNlY29uZHMgPSB0aW1lVG9FeHRyYU1hcFNlY29uZHM7XHJcbiAgICAgICAgdGhpcy50aW1lVG9FeHRyYU1hcE1pbnV0ZXMgPSB0aW1lVG9FeHRyYU1hcE1pbnV0ZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR2FtZUJhY2tncm91bmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2FtZUJhY2tncm91bmQgPSBHYW1lQmFja2dyb3VuZDtcclxuR2FtZUJhY2tncm91bmQucHJvdG90eXBlLnVwZGF0ZU1hcCA9IGJhY2tncm91bmRNb2R1bGVfMS51cGRhdGVNYXA7XHJcbkdhbWVCYWNrZ3JvdW5kLnByb3RvdHlwZS53YXJwRWZmZWN0ID0gZW5naW5lTW9kdWxlc18xLndhcnBFZmZlY3Q7XHJcbkdhbWVCYWNrZ3JvdW5kLnByb3RvdHlwZS5jaGFuZ2VQYXJ0T2ZUZXh0dXJlID0gYmFja2dyb3VuZE1vZHVsZV8xLmNoYW5nZVBhcnRPZlRleHR1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vaW1wb3J0IHsgdmlld01vZHVsZXMgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXlNb2R1bGVzJztcclxudmFyIHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2FpL3JlZ3VsYXJFbmVteUFpTW9kdWxlc1wiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIGNoYW5nZUxldmVsc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lTW9kdWxlcy9jaGFuZ2VMZXZlbHNcIik7XHJcbnZhciBlbmdpbmVNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBwbGF5ZXJTaGlwTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL3BsYXllclNoaXBNb2R1bGVcIik7XHJcbnZhciBnYW1lVWlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdWkvZ2FtZVVpTW9kdWxlc1wiKTtcclxudmFyIHNhdGFydEdhbWVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZU1vZHVsZXMvc2F0YXJ0R2FtZVwiKTtcclxudmFyIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWUoZ2FtZUluaXREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEgPSBnYW1lSW5pdERhdGE7XHJcbiAgICB9XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jaGFuZ2VMZXZlbCA9IGZ1bmN0aW9uIChuZXh0TGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWwgPSBuZXh0TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbDtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93R2FtZUluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGV2ZWxUb0NoYW5nZTogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50UG9pbnQ6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRQb2ludCxcclxuICAgICAgICAgICAgZ2FtZURhdGE6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLFxyXG4gICAgICAgICAgICBpbWFnZURpcnJlY3Rpb246IF9fZGlybmFtZSArICcvcHVibGljL2ltYWdlcy8nLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd0xldmVsRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxEYXRhO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJldHVybkNvbnRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmdhbWVGaWVsZCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQgJiZcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVJRmllbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGdhbWVGaWVsZDogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZ2FtZUFjdGlvbkZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCxcclxuICAgICAgICAgICAgICAgIGdhbWVVSUZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lID0gR2FtZTtcclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlQ29udGV4dCA9IGVuZ2luZU1vZHVsZXNfMS5jcmVhdGVDb250ZXh0O1xyXG5HYW1lLnByb3RvdHlwZS5pbml0RmllbGQgPSBlbmdpbmVNb2R1bGVzXzEuaW5pdEZpZWxkO1xyXG5HYW1lLnByb3RvdHlwZS5sZXZlbEluaXQgPSBlbmdpbmVNb2R1bGVzXzEubGV2ZWxJbml0OyAvLyBjcmVhdGVDb250ZXh0IGluaXRQbGF5ZXJTaGlwXHJcbkdhbWUucHJvdG90eXBlLnNldEdhbWVGaWVsZHMgPSBlbmdpbmVNb2R1bGVzXzEuc2V0R2FtZUZpZWxkcztcclxuR2FtZS5wcm90b3R5cGUud2FycEVmZmVjdCA9IGVuZ2luZU1vZHVsZXNfMS53YXJwRWZmZWN0OyAvLyB3YXJwRWZmZWN0XHJcbkdhbWUucHJvdG90eXBlLmdldFNjcmVlblNpemUgPSBlbmdpbmVNb2R1bGVzXzEuZ2V0U2NyZWVuU2l6ZTtcclxuR2FtZS5wcm90b3R5cGUuZ2V0TGV2ZWxVc2VyRGF0YSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRMZXZlbFVzZXJEYXRhO1xyXG5HYW1lLnByb3RvdHlwZS5sZXZlbFRpbWVyID0gZW5naW5lTW9kdWxlc18xLmxldmVsVGltZXI7XHJcbkdhbWUucHJvdG90eXBlLmdldFNlY29uZE1lYXN1cmUgPSBlbmdpbmVNb2R1bGVzXzEuZ2V0U2Vjb25kTWVhc3VyZTtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVNlY29uZHNJbmNyZWFzZSA9IGVuZ2luZU1vZHVsZXNfMS5nYW1lU2Vjb25kc0luY3JlYXNlO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0UGxheWVyU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5pbml0UGxheWVyU2hpcDtcclxuLy9HYW1lLnByb3RvdHlwZS5wbGFjZVBsYXllclNoaXAgPSBwbGFjZVBsYXllclNoaXA7XHJcbkdhbWUucHJvdG90eXBlLmRlbGV0ZUJ1bGxldCA9IGVuZ2luZU1vZHVsZXNfMS5kZWxldGVCdWxsZXQ7XHJcbkdhbWUucHJvdG90eXBlLmRlbGV0ZU9iamVjdHMgPSBlbmdpbmVNb2R1bGVzXzEuZGVsZXRlT2JqZWN0cztcclxuR2FtZS5wcm90b3R5cGUuZGVsYXRlU2lkZU9iamVjdCA9IGVuZ2luZU1vZHVsZXNfMS5kZWxhdGVTaWRlT2JqZWN0O1xyXG5HYW1lLnByb3RvdHlwZS5oaXREZXRlY3Rpb24gPSBlbmVtaWVzTW9kdWxlc18xLmhpdERldGVjdGlvbjtcclxuR2FtZS5wcm90b3R5cGUuY29sbGVjdFBvaW50cyA9IGVuZ2luZU1vZHVsZXNfMS5jb2xsZWN0UG9pbnRzO1xyXG5HYW1lLnByb3RvdHlwZS5zcGF3bkVuZW15TG9naWMgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5zcGF3bkVuZW15TG9naWM7XHJcbkdhbWUucHJvdG90eXBlLmNyZWF0ZU5ld0VuZW15ID0gcmVndWxhckVuZW15QWlNb2R1bGVzXzEuY3JlYXRlTmV3RW5lbXk7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVSYW5kb21pemVyID0gcmVndWxhckVuZW15QWlNb2R1bGVzXzEuZ2FtZVJhbmRvbWl6ZXI7XHJcbkdhbWUucHJvdG90eXBlLnVpQ29udHJvbGxlciA9IGdhbWVVaU1vZHVsZXNfMS51aUNvbnRyb2xsZXI7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVVaVBhdXNlID0gZ2FtZVVpTW9kdWxlc18xLmdhbWVVaVBhdXNlO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lVWlNZW51ID0gZ2FtZVVpTW9kdWxlc18xLmdhbWVVaU1lbnU7XHJcbkdhbWUucHJvdG90eXBlLnNob3dNZW51V2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dNZW51V2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93VWlQb3B1cFdpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5zaG93VWlQb3B1cFdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd1N0YXJ0V2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dTdGFydFdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd1BhdXNlV2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dQYXVzZVdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXJXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZU92ZXJXaW5kb3c7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVXaW5XaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVdpbldpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd0dhbWVTdGF0cyA9IGdhbWVVaU1vZHVsZXNfMS5zaG93R2FtZVN0YXRzO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0VWlFbGVtZW50cyA9IGdhbWVVaU1vZHVsZXNfMS5pbml0VWlFbGVtZW50cztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVN0YXJ0ID0gc2F0YXJ0R2FtZV8xLmdhbWVTdGFydDtcclxuR2FtZS5wcm90b3R5cGUuYmFja1RvU3RhcnRTY3JlZW4gPSBzYXRhcnRHYW1lXzEuYmFja1RvU3RhcnRTY3JlZW47XHJcbkdhbWUucHJvdG90eXBlLmV4aXRUaGVHYW1lID0gc2F0YXJ0R2FtZV8xLmV4aXRUaGVHYW1lO1xyXG5HYW1lLnByb3RvdHlwZS5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gY2hhbmdlTGV2ZWxzXzEubmV4dExldmVsRGF0YVJlbG9hZDtcclxuR2FtZS5wcm90b3R5cGUuY2hhbmdlTGV2ZWxQcm9jZWR1cmUgPSBlbmdpbmVNb2R1bGVzXzEuY2hhbmdlTGV2ZWxQcm9jZWR1cmU7XHJcbkdhbWUucHJvdG90eXBlLmdldFJhbmRvbUNvbG9yID0gZW5naW5lTW9kdWxlc18xLmdldFJhbmRvbUNvbG9yO1xyXG5HYW1lLnByb3RvdHlwZS5tYXBSYW5vbU9iamVjdFNwYXduID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEubWFwUmFub21PYmplY3RTcGF3bjtcclxuR2FtZS5wcm90b3R5cGUuaW5pdEdyYXBwbGVPYmplY3QgPSBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMS5pbml0R3JhcHBsZU9iamVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBsYXllclNoaXBNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvcGxheWVyU2hpcE1vZHVsZVwiKTtcclxudmFyIGVuZ2luZU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIFBsYXllclNoaXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJTaGlwKGRhdGEsIHBvaW50cywgaGVhbHRoUG9pbnQsIG51bWJlck9mbGlmZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgZGFtYWdlKSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMTAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMTAwOyB9XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcclxuICAgICAgICB0aGlzLm51bWJlck9mbGlmZSA9IG51bWJlck9mbGlmZTtcclxuICAgICAgICB0aGlzLm1heE9mTGlmZSA9IG51bWJlck9mbGlmZTtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gaGVhbHRoUG9pbnQgKyBkYXRhLmFybW9yO1xyXG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoUG9pbnQgKyBkYXRhLmFybW9yO1xyXG4gICAgICAgIHRoaXMueCA9IHggLSAod2lkdGggLyAyKTtcclxuICAgICAgICB0aGlzLnkgPSB5IC0gKGhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMueEZpbmFsID0geDtcclxuICAgICAgICB0aGlzLnlGaW5hbCA9IHk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25BbGxvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IFwicGxheWVyXCI7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueEFkaiA9IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24gPSBkYXRhLmV4cGxvc2lvbjtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuICAgIH1cclxuICAgIFBsYXllclNoaXAucHJvdG90eXBlLmdldFBsYXllckluZm9ybWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlYWx0aDogdGhpcy5oZWFsdGhQb2ludCxcclxuICAgICAgICAgICAgbWF4SGVhbHRoUG9pbnQ6IHRoaXMubWF4SGVhbHRoXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxheWVyU2hpcDtcclxufSgpKTtcclxuZXhwb3J0cy5QbGF5ZXJTaGlwID0gUGxheWVyU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUuaW5pdFBsYXllclNoaXAgPSBwbGF5ZXJTaGlwTW9kdWxlXzEuaW5pdFBsYXllclNoaXA7XHJcblBsYXllclNoaXAucHJvdG90eXBlLm1vdmVQbGF5ZXJTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLm1vdmVQbGF5ZXJTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5zaGlwQ29udHJvbCA9IHBsYXllclNoaXBNb2R1bGVfMS5zaGlwQ29udHJvbDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUubW92ZVNoaXAgPSBwbGF5ZXJTaGlwTW9kdWxlXzEubW92ZVNoaXA7XHJcblBsYXllclNoaXAucHJvdG90eXBlLnBsYWNlU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5wbGFjZVNoaXA7XHJcblBsYXllclNoaXAucHJvdG90eXBlLnNldENvbnRleHQgPSBwbGF5ZXJTaGlwTW9kdWxlXzEuc2V0Q29udGV4dDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUuZ2V0T2JqZWN0UG9zaXRpb24gPSBlbmdpbmVNb2R1bGVzXzEuZ2V0T2JqZWN0UG9zaXRpb247XHJcblBsYXllclNoaXAucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxudmFyIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgY29zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbnN0cnVjdG9yc1wiKSk7XHJcbmZ1bmN0aW9uIHBsYWNlRW5lbXllcyhtYWluR2FtZU9iamVjdCkge1xyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVJbWFnZShtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQsIHRoaXMuaW1nLCB0aGlzLnN4LCB0aGlzLnN5LCB0aGlzLnNXaWR0aCwgdGhpcy5zSGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMucGxhY2VFbmVteWVzID0gcGxhY2VFbmVteWVzO1xyXG5mdW5jdGlvbiBtb3ZlRW5lbXllcyhtb3ZlWCwgbW92ZVkpIHtcclxuICAgIGlmIChtb3ZlWSA9PT0gdm9pZCAwKSB7IG1vdmVZID0gMDsgfVxyXG4gICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB0aGlzLnkgLT0gbW92ZVk7XHJcbn1cclxuZXhwb3J0cy5tb3ZlRW5lbXllcyA9IG1vdmVFbmVteWVzO1xyXG5mdW5jdGlvbiBsb2FkRW5lbXllcygpIHtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnNoaXBUZXh0dXJlO1xyXG59XHJcbmV4cG9ydHMubG9hZEVuZW15ZXMgPSBsb2FkRW5lbXllcztcclxuZnVuY3Rpb24gc2hvb3QoQnVsbGV0Q29uc3RydWN0b3IsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhdGhpcy5pc1Nob290KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vbGV0IHJhbmRvbVNob290ID0gbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIoIE1hdGgucG93KHRoaXMucmFwaWRGaXJlLCAyKSApO1xyXG4gICAgLy9sZXQgc2hvb3RQcm9iYWJpbGl0eSA9IG1haW5HYW1lT2JqZWN0LmdhbWVSYW5kb21pemVyKCB0aGlzLnJhcGlkRmlyZSApO1xyXG4gICAgdmFyIGd1bnMgPSB0aGlzLmd1bnM7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKDEgPiBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplcihpdGVtLmZpcmVSZXBlYWQpKSB7XHJcbiAgICAgICAgICAgIHZhciBidWxsZXRfMSA9IG5ldyBCdWxsZXRDb25zdHJ1Y3Rvcih0aGlzXzEueCwgdGhpc18xLnkgKyAoKGl0ZW0uZmlyZVBvc2l0aW9uKSA/IGl0ZW0uZmlyZVBvc2l0aW9uIDogbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIodGhpc18xLmhlaWdodCkpLCBpdGVtLm5hbWUsIGl0ZW0uY29sb3IsIFwiZW5lbXlcIiwgaXRlbS5zcGVlZCArIHRoaXNfMS5zcGVlZCwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQsIGl0ZW0uZGFtYWdlLCBpdGVtLnR5cGUsIGl0ZW0udGV4dHVyZSwgaXRlbS5zeCwgaXRlbS5zeSwgaXRlbS5zV2lkdGgsIGl0ZW0uc0hlaWdodCwgaXRlbS5leHBsb3Npb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBidWxsZXRfMS5pbWcuc3JjID0gYnVsbGV0XzEudGV4dHVyZTtcclxuICAgICAgICAgICAgYnVsbGV0XzEuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5jb25jYXQoYnVsbGV0XzEpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgdGhpc18xID0gdGhpcztcclxuICAgIGZvciAodmFyIF9pID0gMCwgZ3Vuc18xID0gZ3VuczsgX2kgPCBndW5zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBndW5zXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zaG9vdCA9IHNob290O1xyXG5mdW5jdGlvbiBlbmVteUFuaW1hdGlvbihzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSB0cnVlOyB9XHJcbiAgICB0aGlzLmRldGVjdEZyYW1lICs9IDE7XHJcbiAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ggPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVuZW15QW5pbWF0aW9uID0gZW5lbXlBbmltYXRpb247XHJcbmZ1bmN0aW9uIGVuZW15RGFtYWdlQW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zID4gMSkge1xyXG4gICAgICAgIHZhciBkYW1hZ2VBbmltYXRpb25Qb2ludF8xID0gdGhpcy5vcmlnaW5hbEhlYWx0aFBvaW50IC8gdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXM7XHJcbiAgICAgICAgdmFyIGRhbWFnZVBvaW50ID0gbmV3IEFycmF5KHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zKS5maWxsKG51bGwpO1xyXG4gICAgICAgIGRhbWFnZVBvaW50ID0gZGFtYWdlUG9pbnQubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkgeyByZXR1cm4gZGFtYWdlQW5pbWF0aW9uUG9pbnRfMSAqIChpbmRleCArIDEpOyB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSkucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGFtYWdlUG9pbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoUG9pbnQgPCBkYW1hZ2VQb2ludFtpXSAmJiB0aGlzLmhlYWx0aFBvaW50ID4gZGFtYWdlUG9pbnRbaSArIDFdICYmIGRhbWFnZVBvaW50W2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeSA9IHRoaXMuc0hlaWdodCAqIChpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFkYW1hZ2VQb2ludFtpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3kgPSB0aGlzLnNIZWlnaHQgKiAodGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVuZW15RGFtYWdlQW5pbWF0aW9uID0gZW5lbXlEYW1hZ2VBbmltYXRpb247XHJcbi8vIGNvbXBsZXggZW5lbXkgYW5pbWF0aW9uIGZvciBkYW1hZ2VcclxuZnVuY3Rpb24gdGFrZURhbWFnZShkYW1hZ2UsIGhpdE9iamVjdCwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIC8qIEJ1bGxldCBoaXQgZGV0ZWN0aW9uICovXHJcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcInBsYXllclwiIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpKSB7XHJcbiAgICAgICAgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZXhwbG9zaW9uRmlyZSh0aGlzLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBjb3N0cnVjdG9ycy5TaWRlT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKiBHYW1lIGdyYXBwbGUgb2JqZWN0IGhpdCBkZXRlY3Rpb24gKi9cclxuICAgIGlmICh0aGlzLm9iamVjdE93bmVyID09IFwiZ3JhcHBsZU9iamVjdFwiICYmXHJcbiAgICAgICAgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiZcclxuICAgICAgICAhaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykpIHtcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ3JhcHBsZU9iamVjdE9uU2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZXhwbG9zaW9uRmlyZSh0aGlzLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBjb3N0cnVjdG9ycy5TaWRlT2JqZWN0KTtcclxuICAgICAgICB0aGlzW3RoaXMuZ3JhcHBsZVBvd2VyLm1ldGhvZE5hbWVdKHsgYWxsR2FtZVNpZGVPYmplY3RzOiBtYWluR2FtZU9iamVjdCwgcGxheWVyU2hpcERhdGE6IGhpdE9iamVjdCwgbWFpbkdhbWVPYmplY3Q6IG1haW5HYW1lT2JqZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgLyogSGl0IGRldCBkZWN0aW9uIGNvbGxpc2lvbiAqL1xyXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW5lbXlcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIpIHtcclxuICAgICAgICB1bml0RGFtYWdlLmNhbGwodGhpcywgbnVsbCwgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlEYW1hZ2VBbmltYXRpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhQb2ludCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5leHBsb3Npb25GaXJlKHRoaXMsIG1haW5HYW1lT2JqZWN0LCBoaXRPYmplY3QsIGNvc3RydWN0b3JzLlNpZGVPYmplY3QpO1xyXG4gICAgICAgICAgICAvLy8gbG9hZCBjb2luc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGF3bkNvaW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduQ29pbihtYWluR2FtZU9iamVjdCwgY29zdHJ1Y3RvcnMuR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQm9zcylcclxuICAgICAgICAgICAgICAgIGJvc3NFbmVteURlc3RydWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW5lbXlcIikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkFsbG93KSB7XHJcbiAgICAgICAgICAgIHVuaXREYW1hZ2UuY2FsbCh0aGlzLCBtYWluR2FtZU9iamVjdC5nZXRMZXZlbFVzZXJEYXRhKCksIG1haW5HYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gdW5pdERhbWFnZShkYXRhLCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgLT0gZGFtYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50IDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5saWZlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zb3Vyc2UucGxheWVyT2JqZWN0Lm51bWJlck9mbGlmZSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc291cnNlLnBsYXllck9iamVjdC5udW1iZXJPZmxpZmUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVPdmVyV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuYmFja1RvU3RhcnRTY3JlZW4oY29zdHJ1Y3RvcnMuUGxheWVyU2hpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gZGF0YS5zb3Vyc2UucGxheWVyT2JqZWN0Lm1heEhlYWx0aDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluR2FtZU9iamVjdC5jb2xsZWN0UG9pbnRzKHRoaXMucG9pbnRzUGVyVW5pdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBib3NzRW5lbXlEZXN0cnVjdGlvbigpIHtcclxuICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudGFrZURhbWFnZSA9IHRha2VEYW1hZ2U7XHJcbmZ1bmN0aW9uIHNwYXduQ29pbihtYWluR2FtZU9iamVjdCwgR3JhcHBsZU9iamVjdCkge1xyXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ2V4dHJhT2JqZWN0cycpKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZXh0cmFPYmplY3RzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgY29pbiA9IF9hW19pXTtcclxuICAgICAgICAgICAgY29pbi54ID0gdGhpcy54O1xyXG4gICAgICAgICAgICBjb2luLnkgPSB0aGlzLnk7XHJcbiAgICAgICAgICAgIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xLmxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0LmNhbGwodGhpcywgbWFpbkdhbWVPYmplY3QsIGNvaW4sIEdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNwYXduQ29pbiA9IHNwYXduQ29pbjtcclxuZnVuY3Rpb24gaGl0RGV0ZWN0aW9uKG9iamVjdDEsIG9iamVjdHNBcnIsIG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KSB7XHJcbiAgICB2YXIgY29sbGlzaW9uID0gbnVsbDtcclxuICAgIGZvciAodmFyIF9pID0gMCwgb2JqZWN0c0Fycl8xID0gb2JqZWN0c0FycjsgX2kgPCBvYmplY3RzQXJyXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIG9iamVjdDIgPSBvYmplY3RzQXJyXzFbX2ldO1xyXG4gICAgICAgIHZhciBvYmplY3QxUG9zaXRpb24gPSBvYmplY3QxLmdldE9iamVjdFBvc2l0aW9uLmNhbGwob2JqZWN0MSk7XHJcbiAgICAgICAgdmFyIHhNaW4gPSBNYXRoLm1heChvYmplY3QxUG9zaXRpb24ueCwgb2JqZWN0Mi54KTtcclxuICAgICAgICB2YXIgeU1pbiA9IE1hdGgubWF4KG9iamVjdDFQb3NpdGlvbi55LCBvYmplY3QyLnkpO1xyXG4gICAgICAgIHZhciB4TWF4ID0gTWF0aC5taW4ob2JqZWN0MVBvc2l0aW9uLnggKyAob2JqZWN0MS53aWR0aCB8fCBvYmplY3QxUG9zaXRpb24ud2lkdGgpLCBvYmplY3QyLnggKyBvYmplY3QyLndpZHRoKTtcclxuICAgICAgICB2YXIgeU1heCA9IE1hdGgubWluKG9iamVjdDFQb3NpdGlvbi55ICsgKG9iamVjdDEuaGVpZ2h0IHx8IG9iamVjdDFQb3NpdGlvbi5oZWlnaHQpLCBvYmplY3QyLnkgKyBvYmplY3QyLmhlaWdodCk7XHJcbiAgICAgICAgdmFyIHJlc1ggPSB4TWF4IC0geE1pbjtcclxuICAgICAgICB2YXIgcmVzWSA9IHlNYXggLSB5TWluO1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IChNYXRoLnNpZ24ocmVzWCkgPCAwIHx8IE1hdGguc2lnbihyZXNZKSA8IDApID8gZmFsc2UgOiBcImNvbGxpc2lvblwiO1xyXG4gICAgICAgIGlmIChjb2xsaXNpb24gPT0gXCJjb2xsaXNpb25cIikge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0MS50YWtlRGFtYWdlICYmIG9iamVjdDIudGFrZURhbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0MS50YWtlRGFtYWdlKChvYmplY3QyLmRhbWFnZSkgPyBvYmplY3QyLmRhbWFnZSA6IDAsIG9iamVjdDIsIG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIG9iamVjdDIudGFrZURhbWFnZSgob2JqZWN0MS5kYW1hZ2UpID8gb2JqZWN0MS5kYW1hZ2UgOiAwLCBvYmplY3QxLCBtYWluR2FtZU9iamVjdCwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChjb2xsaXNpb24gPT0gXCJjb2xsaXNpb25cIikgPyBvYmplY3QxIDogZmFsc2U7XHJcbn1cclxuZXhwb3J0cy5oaXREZXRlY3Rpb24gPSBoaXREZXRlY3Rpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbmVtaWVzTW9kdWxlc1wiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBub0RhdGEgPSAnVGhlcmUgaXMgbm8gZGF0YScsIG5vT2JqZWN0ID0gJ1RoZXJlIGlzIG5vIE9iamVjdCc7XHJcbmV4cG9ydHMubm9EYXRhID0gbm9EYXRhO1xyXG5leHBvcnRzLm5vT2JqZWN0ID0gbm9PYmplY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIHVwZGF0ZU1hcCgpIHtcclxuICAgIHZhciBiYWNrZ3JvdW5kT2JqZWN0ID0gdGhpcztcclxuICAgIHRoaXMueCAtPSB0aGlzLmJhY2tncm91bmRTcGVlZDtcclxuICAgIGlmIChNYXRoLnNpZ24odGhpcy5iYWNrZ3JvdW5kU3BlZWQpID4gMCAmJiB0aGlzLnggKyB0aGlzLnNjcmVlbkRhdGEud2lkdGggPCAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5zY3JlZW5EYXRhLndpZHRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoTWF0aC5zaWduKHRoaXMuYmFja2dyb3VuZFNwZWVkKSA8IDAgJiYgdGhpcy54ID4gdGhpcy5zY3JlZW5EYXRhLndpZHRoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMCAtIHRoaXMuc2NyZWVuRGF0YS53aWR0aDtcclxuICAgIH1cclxuICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlSW1hZ2UoYmFja2dyb3VuZE9iamVjdC5jdHgsIGJhY2tncm91bmRPYmplY3QuaW1nLCBiYWNrZ3JvdW5kT2JqZWN0LngsIDAsIGJhY2tncm91bmRPYmplY3Quc2NyZWVuRGF0YS53aWR0aCArIDIsIGJhY2tncm91bmRPYmplY3Quc2NyZWVuRGF0YS5oZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMudXBkYXRlTWFwID0gdXBkYXRlTWFwO1xyXG5mdW5jdGlvbiBjaGFuZ2VQYXJ0T2ZUZXh0dXJlKG1haW5HYW1lT2JqZWN0LCBiYWNrZ3JvdW5kQXJyYXkpIHtcclxuICAgIHZhciBsZXZlbERhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICB2YXIgc2NyZWVuRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgIGlmIChsZXZlbERhdGEubWludXRlcyA8PSB0aGlzLnRpbWVUb0V4dHJhTWFwTWludXRlc1xyXG4gICAgICAgICYmIGxldmVsRGF0YS5zZWNvbmRzIDw9IHRoaXMudGltZVRvRXh0cmFNYXBTZWNvbmRzXHJcbiAgICAgICAgJiYgdGhpcy5leHRyYU1hcCAmJiB0aGlzLnggPj0gc2NyZWVuRGF0YS53aWR0aCAtIDIwMCkge1xyXG4gICAgICAgIHZhciBpbmZvID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gX19kaXJuYW1lICsgdGhpcy5leHRyYU1hcDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNoYW5nZVBhcnRPZlRleHR1cmUgPSBjaGFuZ2VQYXJ0T2ZUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBjcmVhdGVCdWxsZXRzKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUxhc2VyQnVsbGV0KHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMsXHJcbiAgICAgICAgb2JqZWN0T3duZXI6IHRoaXMub2JqZWN0T3duZXIsXHJcbiAgICAgICAgY3R4OiBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQsXHJcbiAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgIHk6IHRoaXMueSxcclxuICAgICAgICBjb2xvcjogdGhpcy5idWxsZXRUZXh0dXJlLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgcmFkaXVzOiA1LFxyXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICBpbWc6IHRoaXMuaW1nLFxyXG4gICAgICAgIHN4OiB0aGlzLnN4LCBzeTogdGhpcy5zeSwgc1dpZHRoOiB0aGlzLnNXaWR0aCwgc0hlaWdodDogdGhpcy5zSGVpZ2h0XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUJ1bGxldHMgPSBjcmVhdGVCdWxsZXRzO1xyXG5mdW5jdGlvbiBpbml0QnVsbGV0cygpIHtcclxufVxyXG5leHBvcnRzLmluaXRCdWxsZXRzID0gaW5pdEJ1bGxldHM7XHJcbmZ1bmN0aW9uIG1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJibGFzdGVyXCI6XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJlYW1cIjpcclxuICAgICAgICAgICAgYmVhbS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJlYW0oKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBnYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICBpZiAodGhpcy54ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHRoaXMuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggLT0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlQnVsbGV0cyA9IG1vdmVCdWxsZXRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbi8vaW1wb3J0IHsgbGV2ZWxDb25zdHJ1Y3RvciB9IGZyb20gJy4uL2NvbnN0cnVjdG9ycy9sZXZlbENvbnN0cnVjdG9ycyc7XHJcbmZ1bmN0aW9uIGluaXRGaWVsZChzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KSB7XHJcbiAgICBpZiAoc2NyZWVuV2lkdGggPT09IHZvaWQgMCkgeyBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyB9XHJcbiAgICBpZiAoc2NyZWVuSGVpZ2h0ID09PSB2b2lkIDApIHsgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyB9XHJcbiAgICB2YXIgZ2FtZUZpZWxkID0gW10uY29uY2F0KHRoaXMuZ2FtZUluaXREYXRhLmdhbWVGaWVsZCwgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUFjdGlvbkZpZWxkLCB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCk7XHJcbiAgICBpZiAoIWdhbWVGaWVsZClcclxuICAgICAgICB0aHJvdyBFcnJvcignRXJyb3InKTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZ2FtZUZpZWxkXzEgPSBnYW1lRmllbGQ7IF9pIDwgZ2FtZUZpZWxkXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbl8xID0gZ2FtZUZpZWxkXzFbX2ldO1xyXG4gICAgICAgIHNjcmVlbl8xID0gT2JqZWN0LmFzc2lnbihzY3JlZW5fMSwgeyB3aWR0aDogc2NyZWVuV2lkdGggLSA0LCBoZWlnaHQ6IHNjcmVlbkhlaWdodCAtIDQgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbml0RmllbGQgPSBpbml0RmllbGQ7XHJcbmZ1bmN0aW9uIHNldEdhbWVGaWVsZHMoKSB7XHJcbiAgICB0aGlzLmluaXRGaWVsZCgpO1xyXG4gICAgdGhpcy5jcmVhdGVDb250ZXh0KCk7XHJcbiAgICB0aGlzLmluaXRQbGF5ZXJTaGlwKCk7XHJcbn1cclxuZXhwb3J0cy5zZXRHYW1lRmllbGRzID0gc2V0R2FtZUZpZWxkcztcclxuZnVuY3Rpb24gd2FycEVmZmVjdCgpIHtcclxuICAgIHZhciBzY3JlZW5TaXogPSB0aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgIHZhciBjdHggPSB0aGlzLmdhbWVJbml0RGF0YS5jdHg7XHJcbiAgICB2YXIgZ2FtZVdhcnBPYmplY3RzID0gdGhpcy5nYW1lSW5pdERhdGEud2FycE9iamVjdHM7XHJcbiAgICB0aGlzLmdldFNlY29uZE1lYXN1cmUod2FycFRpbWVyLCB7IHRpbWVUb0VyZXNzTGV2ZWw6IHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwsIGN0eDogY3R4LCBzY3JlZW5TaXo6IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpIH0pO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEud2FycE9iamVjdHMgPSAoZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDM1MCkgPyB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cy5jb25jYXQoe1xyXG4gICAgICAgIHg6IHNjcmVlblNpei53aWR0aCxcclxuICAgICAgICB5OiB0aGlzLmdhbWVSYW5kb21pemVyKHNjcmVlblNpei5oZWlnaHQpLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5nYW1lUmFuZG9taXplcigyMCwgMTApLFxyXG4gICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICBzcGVlZDogdGhpcy5nYW1lUmFuZG9taXplcigxMCwgNSksXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhpcy5nZXRSYW5kb21Db2xvcigpLFxyXG4gICAgfSkgOiB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cztcclxuICAgIGlmIChnYW1lV2FycE9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZ2FtZVdhcnBPYmplY3RzXzEgPSBnYW1lV2FycE9iamVjdHM7IF9pIDwgZ2FtZVdhcnBPYmplY3RzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXJwZXIgPSBnYW1lV2FycE9iamVjdHNfMVtfaV07XHJcbiAgICAgICAgICAgIHdhcnBlci54IC09ICh3YXJwZXIueCA+IDApID8gd2FycGVyLnNwZWVkIDogMDtcclxuICAgICAgICAgICAgd2FycGVyLndpZHRoID0gKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPCAxNTApID8gd2FycGVyLndpZHRoIC0gd2FycGVyLnNwZWVkXHJcbiAgICAgICAgICAgICAgICA6IChnYW1lV2FycE9iamVjdHMubGVuZ3RoID4gMTUwICYmIGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPCAzNTApID8gd2FycGVyLndpZHRoICsgd2FycGVyLnNwZWVkIDogd2FycGVyLndpZHRoIC0gd2FycGVyLnNwZWVkO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gd2FycGVyLmJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuZHJhdyhjdHgsICdmaWxsUmVjdCcsIHdhcnBlci54LCB3YXJwZXIueSwgd2FycGVyLndpZHRoLCB3YXJwZXIuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXJwVGltZXIobGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgdmFyIGxldmVDaGFuZ2VTdGF0dXMgPSAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA+PSAwKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA+PSAwICYmICFsZXZlQ2hhbmdlU3RhdHVzKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsIC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwgPCAwICYmICFsZXZlQ2hhbmdlU3RhdHVzKVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxldmVsUHJvY2VkdXJlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy53YXJwRWZmZWN0ID0gd2FycEVmZmVjdDtcclxuZnVuY3Rpb24gbGV2ZWxJbml0KEdhbWVCYWNrZ3JvdW5kLCBjdHgsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgZ2FtZURhdGEgPSB0aGlzLnNob3dMZXZlbERhdGEoKTtcclxuICAgIHZhciBhbGxCYWNrZ3JvdW5kRWxlbWVudHMgPSBnYW1lRGF0YS5sZXZlbEJhY2tncm91bmRFbGVtZW50cztcclxuICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQmFja2dyb3VuZEVsZW1lbnRzXzEgPSBhbGxCYWNrZ3JvdW5kRWxlbWVudHM7IF9pIDwgYWxsQmFja2dyb3VuZEVsZW1lbnRzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIG1hcE9iamVjdCA9IGFsbEJhY2tncm91bmRFbGVtZW50c18xW19pXTtcclxuICAgICAgICB2YXIgbWFwSXRlbSA9IG5ldyBHYW1lQmFja2dyb3VuZChtYXBPYmplY3QubGV2ZWxNYXAsIG1hcE9iamVjdC5zcGVlZCwgdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLCBjdHgsICh0aGlzLmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0cy5sZW5ndGggJSAyID09IDApID8gdHJ1ZSA6IG51bGwsIChtYXBPYmplY3QuZXh0cmFNYXApID8gbWFwT2JqZWN0LmV4dHJhTWFwIDogbnVsbCwgKG1hcE9iamVjdC50aW1lVG9FeHRyYU1hcFNlY29uZHMpID8gbWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwU2Vjb25kcyA6IG51bGwsIChtYXBPYmplY3QudGltZVRvRXh0cmFNYXBNaW51dGVzKSA/IG1hcE9iamVjdC50aW1lVG9FeHRyYU1hcE1pbnV0ZXMgOiBudWxsKTtcclxuICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEubWFwQmFja2dyb3VuZE9iamVjdHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEubWFwQmFja2dyb3VuZE9iamVjdHMuY29uY2F0KG1hcEl0ZW0pO1xyXG4gICAgICAgIG1hcEl0ZW0uaW1nLnNyYyA9IF9fZGlybmFtZSArIG1hcEl0ZW0uYmFja2dyb3VuZFRleHR1cmU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sZXZlbEluaXQgPSBsZXZlbEluaXQ7XHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoKSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5jdHggPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRmllbGQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUFjdGlvbkZpZWxkLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVJRmllbGQuZ2V0Q29udGV4dCgnMmQnKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xyXG5mdW5jdGlvbiBnZXRTY3JlZW5TaXplKCkge1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoLCBoZWlnaHQgPSB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4uaGVpZ2h0O1xyXG4gICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xyXG59XHJcbmV4cG9ydHMuZ2V0U2NyZWVuU2l6ZSA9IGdldFNjcmVlblNpemU7XHJcbmZ1bmN0aW9uIGNoYW5nZUxldmVsUHJvY2VkdXJlKCkge1xyXG4gICAgLy8gYW5pbWF0aW9uIGZvciB3YXJwLCBodHRwIHJlcXVlc3QgZm9yIGxldmVsIGFuZCBlbmVteWVzLCAxMCBsZXZlbHMgbXVzdCBiZVxyXG4gICAgLy8gc29tZSBsZXZlbHMgbXVzdCBjb250YWluIGJvc3MgYXQgbGVhc3QgMiBib3NzXHJcbiAgICAvLyBsYXN0IGxldmVsIGlzIGZpbmFsIHRpdGxlcyB0aGUgZW5kIHNhdmUgc2NvcmVcclxuICAgIHZhciBsZXZlbERhdGEgPSB0aGlzLnNob3dHYW1lSW5mbygpO1xyXG4gICAgdmFyIGxldmVsID0gdGhpcy5jaGFuZ2VMZXZlbChsZXZlbERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsICsgMSk7XHJcbiAgICBpZiAobGV2ZWwgPD0gbGV2ZWxEYXRhLmdhbWVEYXRhLmxldmVsRGF0YS5hbGxMZXZlbHMpIHtcclxuICAgICAgICB0aGlzLm5leHRMZXZlbERhdGFSZWxvYWQobGV2ZWxEYXRhKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVXaW4gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY2hhbmdlTGV2ZWxQcm9jZWR1cmUgPSBjaGFuZ2VMZXZlbFByb2NlZHVyZTtcclxuZnVuY3Rpb24gbGV2ZWxUaW1lcigpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICBpZiAoIWRhdGEuc291cnNlLmxldmVsRGF0YS5ib3NzUHJlc2VudCkge1xyXG4gICAgICAgIHZhciBsZXZlbFRpbWUgPSBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzOyAvLyB7IGxldmVsTWludXRlczogMywgbGV2ZWxTZWNvbmRzOiA0MyB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWNvbmRNZWFzdXJlKGxldmVsVGltZUFjdGlvbiwgZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmxldmVsRGV0YWlscyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzLmxldmVsU2Vjb25kcyA9IG51bGw7XHJcbiAgICAgICAgZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmxldmVsRGV0YWlscy5sZXZlbE1pbnV0ZXMgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGV2ZWxUaW1lQWN0aW9uKHRpbWUpIHtcclxuICAgICAgICBpZiAodGltZS5sZXZlbFNlY29uZHMgPD0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGltZS5sZXZlbE1pbnV0ZXMgPT0gMCAmJiB0aW1lLmxldmVsU2Vjb25kcyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lLmxldmVsU2Vjb25kcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGltZS5sZXZlbE1pbnV0ZXMgPSAodGltZS5sZXZlbE1pbnV0ZXMgPiAwKSA/IHRpbWUubGV2ZWxNaW51dGVzIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWUubGV2ZWxTZWNvbmRzID0gKHRpbWUubGV2ZWxTZWNvbmRzID4gMCkgPyB0aW1lLmxldmVsU2Vjb25kcyAtIDEgOiAodGhpcy5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UpID8gMCA6IDU5O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubGV2ZWxUaW1lciA9IGxldmVsVGltZXI7XHJcbmZ1bmN0aW9uIGdldFNlY29uZE1lYXN1cmUoY2FsbGJhY2spIHtcclxuICAgIHZhciBkYXRhID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGRhdGFbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdhbWVTZWNvbmQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNlY29uZCA9IDEwMDAgLyB0aGlzLmdhbWVJbml0RGF0YS5pbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZ2FtZUluaXREYXRhLmdlbWVFeHRyYVNlY29uZHMgJSBnYW1lU2Vjb25kID09IDApKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nZW1lRXh0cmFTZWNvbmRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjYWxsYmFja107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYS5zZW50KCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNhbGxiYWNrLmNhbGwuYXBwbHkoY2FsbGJhY2ssIF9fc3ByZWFkQXJyYXlzKFt0aGlzXSwgZGF0YSkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBnYW1lU2Vjb25kXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldFNlY29uZE1lYXN1cmUgPSBnZXRTZWNvbmRNZWFzdXJlO1xyXG5mdW5jdGlvbiBnYW1lU2Vjb25kc0luY3JlYXNlKCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2VtZUV4dHJhU2Vjb25kcyArPSAxO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVNlY29uZHNJbmNyZWFzZSA9IGdhbWVTZWNvbmRzSW5jcmVhc2U7XHJcbmZ1bmN0aW9uIGdldExldmVsVXNlckRhdGEoKSB7XHJcbiAgICB2YXIgZGF0YVNvdXJzZSA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhO1xyXG4gICAgdmFyIGxldmVsVGltZSA9IGRhdGFTb3Vyc2UubGV2ZWxEYXRhLmxldmVsRGV0YWlscztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc291cnNlOiBkYXRhU291cnNlLFxyXG4gICAgICAgIGN1cnJlbnRMZXZlbDogZGF0YVNvdXJzZS5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgYWxsTGV2ZWxzOiBkYXRhU291cnNlLmxldmVsRGF0YS5hbGxMZXZlbHMsXHJcbiAgICAgICAgcG9pbnRzOiBkYXRhU291cnNlLmN1cnJlbnRQb2ludCxcclxuICAgICAgICBnYW1lQ29pbnM6IGRhdGFTb3Vyc2UuZ2FtZUNvaW5zLFxyXG4gICAgICAgIGxpZmU6IGRhdGFTb3Vyc2UucGxheWVyT2JqZWN0Lm51bWJlck9mbGlmZSxcclxuICAgICAgICBtaW51dGVzOiBsZXZlbFRpbWUubGV2ZWxNaW51dGVzLFxyXG4gICAgICAgIHNlY29uZHM6IGxldmVsVGltZS5sZXZlbFNlY29uZHNcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5nZXRMZXZlbFVzZXJEYXRhID0gZ2V0TGV2ZWxVc2VyRGF0YTtcclxuZnVuY3Rpb24gZGVsZXRlQnVsbGV0KGJ1bGxldCkge1xyXG4gICAgaWYgKGJ1bGxldC54ID4gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoXHJcbiAgICAgICAgfHwgYnVsbGV0LnggPCBidWxsZXQud2lkdGggKiAtMVxyXG4gICAgICAgIHx8ICFidWxsZXQub2JqZWN0UHJlc2VudCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLmluZGV4T2YoYnVsbGV0KTtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVsZXRlQnVsbGV0ID0gZGVsZXRlQnVsbGV0O1xyXG5mdW5jdGlvbiBkZWxldGVPYmplY3RzKG9iamVjdCkge1xyXG4gICAgaWYgKG9iamVjdC54ICsgb2JqZWN0LnNXaWR0aCA8IDAgfHwgIW9iamVjdC5vYmplY3RQcmVzZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWxldGVPYmplY3RzID0gZGVsZXRlT2JqZWN0cztcclxuZnVuY3Rpb24gZGVsYXRlU2lkZU9iamVjdChvYmplY3QpIHtcclxuICAgIGlmICghb2JqZWN0Lm9iamVjdFByZXNlbnQgfHwgb2JqZWN0LnggPCAwIC0gb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlbGF0ZVNpZGVPYmplY3QgPSBkZWxhdGVTaWRlT2JqZWN0O1xyXG5mdW5jdGlvbiBjb2xsZWN0UG9pbnRzKHBvaW50KSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50UG9pbnQgKz0gcG9pbnQ7XHJcbn1cclxuZXhwb3J0cy5jb2xsZWN0UG9pbnRzID0gY29sbGVjdFBvaW50cztcclxuZnVuY3Rpb24gZ2V0T2JqZWN0UG9zaXRpb24oKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IHRoaXM7XHJcbiAgICB2YXIgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogbWFpbk9iamVjdC54LFxyXG4gICAgICAgIHk6IG1haW5PYmplY3QueSxcclxuICAgICAgICB3aWR0aDogbWFpbk9iamVjdC53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG1haW5PYmplY3QuaGVpZ2h0LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxufVxyXG5leHBvcnRzLmdldE9iamVjdFBvc2l0aW9uID0gZ2V0T2JqZWN0UG9zaXRpb247XHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XHJcbiAgICB2YXIgY29sb3IgPSAnIyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxufVxyXG5leHBvcnRzLmdldFJhbmRvbUNvbG9yID0gZ2V0UmFuZG9tQ29sb3I7XHJcbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShpdGVtcykge1xyXG4gICAgdmFyIGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcbiAgICBsb29wVmVydGljYWwoaXRlbXMpO1xyXG4gICAgZnVuY3Rpb24gbG9vcFZlcnRpY2FsKG9iamVjdCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbCA9IF9iWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wVmVydGljYWwob2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFzc2lnbmltYWdlKGtleSwgdmFsLCBpbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXNzaWduaW1hZ2Uoa2V5LCB2YWwsIGltYWdlKSB7XHJcbiAgICAgICAgaWYgKGtleSA9PSAnc2tpbk5hbWUnIHx8IGtleSA9PSAndGV4dHVyZScgfHwga2V5ID09ICdsZXZlbE1hcCcpIHtcclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IF9fZGlybmFtZSArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wcmVsb2FkSW1hZ2UgPSBwcmVsb2FkSW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0KG1haW5HYW1lT2JqZWN0LCB0YXJnZXQsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZUluZm8sIGdhbWVEYXRhLCBzY3JlZW5EYXRhLCBjb250ZXh0LCBzaWRlT2JqZWN0LCBvYmplY3REYXRhLCBncmFwcGxlT2JqZWN0LCBfYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW5mbyA9IG1haW5HYW1lT2JqZWN0LnNob3dHYW1lSW5mbygpLCBnYW1lRGF0YSA9IGdhbWVJbmZvLmdhbWVEYXRhLCBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBtYWluR2FtZU9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAodGFyZ2V0LngpID8gdGFyZ2V0LnggKyBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNpZGVPYmplY3Qud2lkdGgpIDogc2NyZWVuRGF0YS53aWR0aCArIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogKHRhcmdldC55KSA/IHRhcmdldC55ICsgY29udGV4dC5nYW1lUmFuZG9taXplcihzaWRlT2JqZWN0LmhlaWdodCkgOiBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNjcmVlbkRhdGEuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogdGFyZ2V0Lm9iamVjdE93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHRhcmdldC5pbWFnZVdpZHRoIC8gdGFyZ2V0Lm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNIZWlnaHQ6IHRhcmdldC5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldC53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXQuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwczogdGFyZ2V0LmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mSXRlbXM6IHRhcmdldC5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB0YXJnZXQuc2tpbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB0YXJnZXQuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IHRhcmdldC5pbWFnZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogdGFyZ2V0LmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2U6IHRhcmdldC5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQmFja2dyb3VuZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uOiB0YXJnZXQuZXhwbG9zaW9uQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNQZXJVbml0OiB0YXJnZXQucG9pbnRzUGVyVW5pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmFwcGxlOiB0YXJnZXQuaXNHcmFwcGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlUG93ZXI6IHRhcmdldC5ncmFwcGxlUG93ZXJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3QgPSBuZXcgR3JhcHBsZU9iamVjdChfX2Fzc2lnbih7fSwgb2JqZWN0RGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3QuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmNvbmNhdChncmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gZ3JhcHBsZU9iamVjdC5pbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ3JhcHBsZU9iamVjdC50ZXh0dXJlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zcmMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0ID0gbG9hZEdyYWJibGVUb1NpZGVPYmplY3Q7XHJcbmZ1bmN0aW9uIGluaXRHcmFwcGxlT2JqZWN0KEdyYXBwbGVPYmplY3QsIHBsYXllclNoaXBEYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdhbWVJbmZvLCBnYW1lRGF0YSwgbGV2ZWxEYXRhLCBncmFwcGxlRGF0YSwgc2NyZWVuRGF0YSwgc3Bhd25Qcm9iYWJpbGl0eSwgcmFuZG9tT2JqZWN0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIGdhbWVJbmZvID0gdGhpcy5zaG93R2FtZUluZm8oKSwgZ2FtZURhdGEgPSBnYW1lSW5mby5nYW1lRGF0YSwgbGV2ZWxEYXRhID0gZ2FtZURhdGEubGV2ZWxEYXRhLCBncmFwcGxlRGF0YSA9IGdhbWVEYXRhLmdyYXBwbGVPYmplY3RzLCBzY3JlZW5EYXRhID0gdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgIHNwYXduUHJvYmFiaWxpdHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5ncmFwbGVPYmplY3RQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgIGlmIChzcGF3blByb2JhYmlsaXR5IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tT2JqZWN0ID0gZ3JhcHBsZURhdGFbdGhpcy5nYW1lUmFuZG9taXplcihncmFwcGxlRGF0YS5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tT2JqZWN0LmdyYXBwbGVQb3dlci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxpZmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclNoaXBEYXRhLm51bWJlck9mbGlmZSA+PSBwbGF5ZXJTaGlwRGF0YS5tYXhPZkxpZmUgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0KHRoaXMsIHJhbmRvbU9iamVjdCwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5pbml0R3JhcHBsZU9iamVjdCA9IGluaXRHcmFwcGxlT2JqZWN0O1xyXG5mdW5jdGlvbiBhZGRQbGF5ZXJMaWZlKF9hKSB7XHJcbiAgICB2YXIgYWxsR2FtZVNpZGVPYmplY3RzID0gX2EuYWxsR2FtZVNpZGVPYmplY3RzLCBwbGF5ZXJTaGlwRGF0YSA9IF9hLnBsYXllclNoaXBEYXRhLCBtYWluR2FtZU9iamVjdCA9IF9hLm1haW5HYW1lT2JqZWN0O1xyXG4gICAgcGxheWVyU2hpcERhdGEubnVtYmVyT2ZsaWZlICs9IHRoaXMuZ3JhcHBsZVBvd2VyLnZhbHVlO1xyXG59XHJcbmV4cG9ydHMuYWRkUGxheWVyTGlmZSA9IGFkZFBsYXllckxpZmU7XHJcbmZ1bmN0aW9uIGNvbGxlY3RDb2luKF9hKSB7XHJcbiAgICB2YXIgYWxsR2FtZVNpZGVPYmplY3RzID0gX2EuYWxsR2FtZVNpZGVPYmplY3RzLCBwbGF5ZXJTaGlwRGF0YSA9IF9hLnBsYXllclNoaXBEYXRhLCBtYWluR2FtZU9iamVjdCA9IF9hLm1haW5HYW1lT2JqZWN0O1xyXG4gICAgdmFyIGdhbWVJbmZvID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCksIGdhbWVEYXRhID0gZ2FtZUluZm8uZ2FtZURhdGEsIGxldmVsRGF0YSA9IGdhbWVEYXRhLmxldmVsRGF0YSwgZ3JhcHBsZURhdGEgPSBnYW1lRGF0YS5ncmFwcGxlT2JqZWN0cztcclxuICAgIGdhbWVEYXRhLmdhbWVDb2lucyArPSB0aGlzLmdyYXBwbGVQb3dlci52YWx1ZTtcclxufVxyXG5leHBvcnRzLmNvbGxlY3RDb2luID0gY29sbGVjdENvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2F0YXJ0R2FtZV8xID0gcmVxdWlyZShcIi4vc2F0YXJ0R2FtZVwiKTtcclxuZnVuY3Rpb24gbmV4dExldmVsRGF0YVJlbG9hZChsZXZlbERhdGEpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBob3Jpem9udGFsVmVydGljYWxTZWFyY2gobWFpbk9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWFpbk9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYWluT2JqZWN0W2tleV0gPT0gJ29iamVjdCcgJiYgdmFsdWUgIT0gbnVsbCAmJiAhbWFpbk9iamVjdFtrZXldLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxWZXJ0aWNhbFNlYXJjaChtYWluT2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXNzaWduVmFsdWUuY2FsbCh0aGlzLCBrZXksIG1haW5PYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFzc2lnblZhbHVlKGluY29tZUtleSwgbWFpbkRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKHJlZnJlc2hMZXZlbCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWwgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaW5jb21lS2V5ICYmIHZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGFba2V5XSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV4dExldmVsLCBzZXJ2ZXJOZXdEYXRhLCBjb250ZXh0LCByZWZyZXNoTGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExldmVsID0gbGV2ZWxEYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzYXRhcnRHYW1lXzEuc2VydmVyUmVxdWVzdCh7IGxldmVsOiBuZXh0TGV2ZWwsIHNoaXBDb25maWd1cmF0aW9uOiAxIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJOZXdEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hMZXZlbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbDogbmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvaW50OiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50UG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPYmplY3Q6IGNvbnRleHQuZ2FtZUluaXREYXRhLmdhbWVEYXRhLnBsYXllck9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb2luczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZUNvaW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiBzZXJ2ZXJOZXdEYXRhLmxldmVsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czogc2VydmVyTmV3RGF0YS5sZXZlbE9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czogc2VydmVyTmV3RGF0YS5ncmFwcGxlT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogc2VydmVyTmV3RGF0YS5lbmVteURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY29udHJvbGxlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lU2lkZU9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lRW5lbWllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVCdWxsZXRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZU1hcE9CamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBCYWNrZ3JvdW5kT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVaVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja1NjcmVlblBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RPblNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbWVFeHRyYVNlY29uZHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEud2FycE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFZlcnRpY2FsU2VhcmNoLmNhbGwodGhpcywgdGhpcy5nYW1lSW5pdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gbmV4dExldmVsRGF0YVJlbG9hZDtcclxuZnVuY3Rpb24gY2hhbmdlU2hpcCgpIHtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VXZWFwb24oKSB7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NhdGFydEdhbWVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jaGFuZ2VMZXZlbHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBsb2FkU2NyZWVuXzEgPSByZXF1aXJlKFwiLi4vLi4vdWkvbG9hZFNjcmVlblwiKTtcclxudmFyIHJlbW90ZSA9IHJlcXVpcmUoJ2VsZWN0cm9uJykucmVtb3RlO1xyXG5mdW5jdGlvbiBzZXJ2ZXJSZXF1ZXN0KGdhbWVJbmZvcm1hdGlvbikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZXJ2ZXJMb2NhdGlvbiwgbGV2ZWxEYXRhLCBsZXZlbE9iamVjdHMsIGdyYXBwbGVPYmplY3RzLCBnYW1lU2V0aW5ncywgdXNlckRhdGEsIGVuZW15RGF0YTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgcHJvY2Vzcy5lbnYuSE9TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkhPU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzRGlyZWN0aW9uOiBfX2Rpcm5hbWUgKyAnL3B1YmxpYy9pbWFnZXMvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2xldmVsLWRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvbGV2ZWwtb2JqZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2dyYXBwbGUtb2JqZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2dhbWUtc2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2hpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS91c2VyLXNoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteWxEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2VuZW15LXNoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24ubGV2ZWxEYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24ubGV2ZWxEYXRhLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdtYXBsZXZlbCc6IGdhbWVJbmZvcm1hdGlvbi5sZXZlbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmxldmVsT2JqZWN0cy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmxldmVsT2JqZWN0cy5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnbWFwT2JqZWN0JzogbGV2ZWxEYXRhLmxldmVsT0JqZWN0cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmdyYXBwbGVPYmplY3RzLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24uZ3JhcHBsZU9iamVjdHMubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2dyYXBwbGVPYmplY3QnOiBsZXZlbERhdGEuZ3JhcHBsZU9iamVjdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0cyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24uZ2FtZVNldGluZ3MudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi5nYW1lU2V0aW5ncy5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3MgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLnVzZXJTaGlwLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24udXNlclNoaXAubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3VzZXJzaGlwJzogZ2FtZUluZm9ybWF0aW9uLnNoaXBDb25maWd1cmF0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5lbmVteWxEYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24uZW5lbXlsRGF0YS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnc2hpcC10eXBlLW51bWJlcic6IGxldmVsRGF0YS5lbmVteVR5cGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZU1vZHVsZXNfMS5wcmVsb2FkSW1hZ2UoZW5lbXlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmVNb2R1bGVzXzEucHJlbG9hZEltYWdlKGxldmVsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lTW9kdWxlc18xLnByZWxvYWRJbWFnZShsZXZlbE9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGE6IGxldmVsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czogbGV2ZWxPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHM6IGdyYXBwbGVPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3M6IGdhbWVTZXRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGE6IHVzZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhOiBlbmVteURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2VydmVyUmVxdWVzdCA9IHNlcnZlclJlcXVlc3Q7XHJcbmZ1bmN0aW9uIGdhbWVEYXRhSW5pdChQbGF5ZXJTaGlwKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdhbWVGaWVsZCwgZ2FtZUFjdGlvbkZpZWxkLCBnYW1lVUlmaWVsZCwgbGV2ZWwsIHNoaXBUeXBlLCBzaGlwTGlmZSwgcmVzLCBsZXZlbERhdGEsIGxldmVsT2JqZWN0cywgZ3JhcHBsZU9iamVjdHMsIGdhbWVTZXRpbmdzLCB1c2VyRGF0YSwgZW5lbXlEYXRhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRTY3JlZW5fMS5sb2FkV2luZG93KHsgbG9hZFN0YXR1czogXCJsb2FkXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVmaWVsZCcpLCBnYW1lQWN0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU9iamVjdHNmaWVsZCcpLCBnYW1lVUlmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lVWlmaWVsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gMSwgc2hpcFR5cGUgPSAxLCBzaGlwTGlmZSA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdCh7IGxldmVsOiBsZXZlbCwgc2hpcENvbmZpZ3VyYXRpb246IHNoaXBUeXBlIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhID0gcmVzLmxldmVsRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHMgPSByZXMubGV2ZWxPYmplY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzID0gcmVzLmdyYXBwbGVPYmplY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzID0gcmVzLmdhbWVTZXRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gcmVzLnVzZXJEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YSA9IHJlcy5lbmVteURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsRGF0YS5zdGF0dXMgPT09IFwiZXJyb3JcIiB8fCBsZXZlbE9iamVjdHMgPT09IFwiZXJyb3JcIiB8fCBncmFwcGxlT2JqZWN0cyA9PT0gXCJlcnJvclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YS5nYW1lU2V0aW5ncyA9PT0gXCJlcnJvclwiIHx8IHVzZXJEYXRhID09PSBcImVycm9yXCIgfHwgZW5lbXlEYXRhID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFNjcmVlbl8xLmxvYWRXaW5kb3coeyBsb2FkU3RhdHVzOiBcInNlcnZlckVycm9yXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRTY3JlZW5fMS5sb2FkV2luZG93KHsgbG9hZFN0YXR1czogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUZpZWxkOiAoZ2FtZUZpZWxkKSA/IGdhbWVGaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUFjdGlvbkZpZWxkOiAoZ2FtZUFjdGlvbkZpZWxkKSA/IGdhbWVBY3Rpb25GaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVVJRmllbGQ6IChnYW1lVUlmaWVsZCkgPyBnYW1lVUlmaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExldmVsOiBsZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvaW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lQ29pbnM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllck9iamVjdDogbmV3IFBsYXllclNoaXAodXNlckRhdGEsIDAsIDMwMCwgc2hpcExpZmUsIDEwMCwgMTAwLCB1c2VyRGF0YS5zaXplLndpZHRoLCB1c2VyRGF0YS5zaXplLmhlaWdodCwgdXNlckRhdGEuZGFtYWdlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiBsZXZlbERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czogbGV2ZWxPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czogZ3JhcHBsZU9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBnYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhOiBlbmVteURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxDb3VudDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVTaWRlT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZUVuZW1pZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVCdWxsZXRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lTWFwT0JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwQmFja2dyb3VuZE9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnBPYmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lVG9FcmVzc0xldmVsOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUGF1c2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVaVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrU2NyZWVuUGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVXaW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RPblNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VtZUV4dHJhU2Vjb25kczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2FtZURhdGFJbml0ID0gZ2FtZURhdGFJbml0O1xyXG5mdW5jdGlvbiBnYW1lRW5naW5lKGdhbWVEYXRhSW5pdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nYW1lRW5naW5lID0gZ2FtZUVuZ2luZTtcclxuZnVuY3Rpb24gZ2FtZVN0YXJ0KCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMgPSB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVN0YXJ0ID0gZ2FtZVN0YXJ0O1xyXG5mdW5jdGlvbiBiYWNrVG9TdGFydFNjcmVlbihQbGF5ZXJTaGlwKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5ld0luaXRkYXRhLCBfaSwgX2EsIF9iLCBrZXksIHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnYW1lRGF0YUluaXQoUGxheWVyU2hpcCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luaXRkYXRhID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3SW5pdGRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gJ25ld0luaXRkYXRhLmRhdGEnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG5ld0luaXRkYXRhLmRhdGEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmJhY2tUb1N0YXJ0U2NyZWVuID0gYmFja1RvU3RhcnRTY3JlZW47XHJcbmZ1bmN0aW9uIGV4aXRUaGVHYW1lKCkge1xyXG4gICAgdmFyIHcgPSByZW1vdGUuZ2V0Q3VycmVudFdpbmRvdygpO1xyXG4gICAgdy5jbG9zZSgpO1xyXG59XHJcbmV4cG9ydHMuZXhpdFRoZUdhbWUgPSBleGl0VGhlR2FtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2FpL3JlZ3VsYXJFbmVteUFpTW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gZXhwbG9zaW9uRmlyZSh0YXJnZXREYXRhLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBTaWRlT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhpdFgsIHRhcmdldFgsIGFkanVzdCwgY29tcGVuc2F0aW9uLCBleHBsb3Npb25EYXRhLCBzaWRlT2JqZWN0LCBfYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoaXRYID0gaGl0T2JqZWN0LnggKyBoaXRPYmplY3Qud2lkdGggLyAyLCB0YXJnZXRYID0gdGFyZ2V0RGF0YS54ICsgdGFyZ2V0RGF0YS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0ID0gTWF0aC5tYXgoaGl0WCwgdGFyZ2V0WCkgLSBNYXRoLm1pbihoaXRYLCB0YXJnZXRYKTtcclxuICAgICAgICAgICAgICAgICAgICBjb21wZW5zYXRpb24gPSAoaGl0T2JqZWN0LnggPiB0YXJnZXREYXRhLngpID8gYWRqdXN0IDogYWRqdXN0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBleHBsb3Npb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0YXJnZXREYXRhLnggLSB0YXJnZXREYXRhLmV4cGxvc2lvbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6ICh0YXJnZXREYXRhLmJ1bGxldFR5cGUpID8gdGFyZ2V0RGF0YS55IC0gdGFyZ2V0RGF0YS5leHBsb3Npb24ud2lkdGggLyAyIDogdGFyZ2V0RGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE93bmVyOiBcImV4cGxvc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHRhcmdldERhdGEuZXhwbG9zaW9uLmltYWdlV2lkdGggLyB0YXJnZXREYXRhLmV4cGxvc2lvbi5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzSGVpZ2h0OiB0YXJnZXREYXRhLmV4cGxvc2lvbi5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldERhdGEuZXhwbG9zaW9uLndpZHRoICogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXREYXRhLmV4cGxvc2lvbi53aWR0aCAqIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBzOiB0YXJnZXREYXRhLmV4cGxvc2lvbi5hbmltYXRpb25TdGVwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBoaXRPYmplY3Qub2JqZWN0T3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mSXRlbXM6IHRhcmdldERhdGEuZXhwbG9zaW9uLmltYWdlV2lkdGggLyB0YXJnZXREYXRhLmV4cGxvc2lvbi5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB0YXJnZXREYXRhLmV4cGxvc2lvbi50ZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogaGl0T2JqZWN0LnNwZWVkIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZXNXaWR0aDogdGFyZ2V0RGF0YS5leHBsb3Npb24uaW1hZ2VXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdCA9IG5ldyBTaWRlT2JqZWN0KF9fYXNzaWduKHt9LCBleHBsb3Npb25EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdC5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5jb25jYXQoc2lkZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IHNpZGVPYmplY3QuaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNpZGVPYmplY3QudGV4dHVyZV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc3JjID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5leHBsb3Npb25GaXJlID0gZXhwbG9zaW9uRmlyZTtcclxuZnVuY3Rpb24gZmlyZUFuaW1hdGlvbkVuZGVkKGFsbEdhbWVTaWRlT2JqZWN0cykge1xyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDApIHtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuc1dpZHRoO1xyXG4gICAgICAgIGlmICh0aGlzLnN4ID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3ggPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZmlyZUFuaW1hdGlvbkVuZGVkID0gZmlyZUFuaW1hdGlvbkVuZGVkO1xyXG5mdW5jdGlvbiBtYXBPYmplY3RNb3ZlKCkge1xyXG4gICAgdGhpcy54IC09ICh0aGlzLnNwZWVkKSA/IHRoaXMuc3BlZWQgOiAzO1xyXG59XHJcbmV4cG9ydHMubWFwT2JqZWN0TW92ZSA9IG1hcE9iamVjdE1vdmU7XHJcbmZ1bmN0aW9uIG1hcFJhbm9tT2JqZWN0U3Bhd24obGV2ZWxPYmplY3RzLCBTaWRlT2JqZWN0LCBhbGxHYW1lU2lkZU9iamVjdHMpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBtYXBPYmplY3RTcGF3bmVyKGxldmVsT2JqZWN0cywgU2lkZU9iamVjdCwgYWxsR2FtZVNpZGVPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYW1lRGF0YSwgbGV2ZWxEYXRhLCBzcGF3blByb2JhYmlsaXR5LCBzY3JlZW5EYXRhLCBsZXZlbE9iamVjdFByb3BzLCB5UG9zaXRpb24sIGV4dHJhT2JqZWN0cywgX2EsIGV4cGxvc2lvbkRhdGEsIHNpZGVPYmplY3RfMTtcclxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IHRoaXMuc2hvd0dhbWVJbmZvKCkuZ2FtZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGEgPSBnYW1lRGF0YS5sZXZlbERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGF3blByb2JhYmlsaXR5ID0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbERhdGEub2JqZWN0UHJvYmFiaWxpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoc3Bhd25Qcm9iYWJpbGl0eSA8IGxldmVsRGF0YS5vYmplY3RNaW5UaW1lU3Bhd24pKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbkRhdGEgPSB0aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0UHJvcHMgPSBsZXZlbE9iamVjdHNbdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbE9iamVjdHMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5UG9zaXRpb24gPSAobGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT0gXCJib3R0b21cIiAmJiB0eXBlb2YgbGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT09IFwic3RyaW5nXCIpID8gc2NyZWVuRGF0YS5oZWlnaHQgLSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09IFwidG9wXCIgJiYgdHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RQcm9wcy5oZWlnaHQgLyAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PSBcInNjZW5lXCIgJiYgdHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RQcm9wcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgbGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT09IFwic3RyaW5nXCIpID8gdGhpcy5nYW1lUmFuZG9taXplcihzY3JlZW5EYXRhLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobGV2ZWxPYmplY3RQcm9wcy5leHRyYU9iamVjdHMpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLmxvYWRFeHRyYU9iamVjdC5jYWxsKHRoaXMsIGxldmVsT2JqZWN0UHJvcHMuZXh0cmFPYmplY3RzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhT2JqZWN0cyA9IF9hO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzY3JlZW5EYXRhLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHlQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogbGV2ZWxPYmplY3RQcm9wcy5vYmplY3RPd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IGxldmVsT2JqZWN0UHJvcHMuaW1hZ2VXaWR0aCAvIGxldmVsT2JqZWN0UHJvcHMubnVtYmVyT2ZJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzSGVpZ2h0OiBsZXZlbE9iamVjdFByb3BzLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsZXZlbE9iamVjdFByb3BzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbGV2ZWxPYmplY3RQcm9wcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcHM6IGxldmVsT2JqZWN0UHJvcHMuYW5pbWF0aW9uU3RlcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mSXRlbXM6IGxldmVsT2JqZWN0UHJvcHMubnVtYmVyT2ZJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBsZXZlbE9iamVjdFByb3BzLnNraW5OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiBsZXZlbE9iamVjdFByb3BzLnNwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IGxldmVsT2JqZWN0UHJvcHMuaW1hZ2VXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogbGV2ZWxPYmplY3RQcm9wcy5oZWFsdGhQb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2U6IGxldmVsT2JqZWN0UHJvcHMuZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmFja2dyb3VuZDogbGV2ZWxPYmplY3RQcm9wcy5pc0JhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uOiBsZXZlbE9iamVjdFByb3BzLmV4cGxvc2lvbkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNQZXJVbml0OiBsZXZlbE9iamVjdFByb3BzLnBvaW50c1BlclVuaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFPYmplY3RzOiBleHRyYU9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0XzEgPSBuZXcgU2lkZU9iamVjdChfX2Fzc2lnbih7fSwgZXhwbG9zaW9uRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdF8xLmltZy5zcmMgPSBzaWRlT2JqZWN0XzEudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3RfMS5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBfdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmNvbmNhdChzaWRlT2JqZWN0XzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2Vjb25kTWVhc3VyZShtYXBPYmplY3RTcGF3bmVyLCBsZXZlbE9iamVjdHMsIFNpZGVPYmplY3QsIGFsbEdhbWVTaWRlT2JqZWN0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWFwUmFub21PYmplY3RTcGF3biA9IG1hcFJhbm9tT2JqZWN0U3Bhd247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wbGF5ZXJTaGlwTW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZW5naW5lTW9kdWxlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2J1bGxldHNNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9iYWNrZ3JvdW5kTW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXBwRXJyb3JMaXN0TW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29uc3RydWN0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9jb25zdHJ1Y3RvcnMvXCIpKTtcclxudmFyIHZpZXcgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3ZpZXcvXCIpKTtcclxuZnVuY3Rpb24gaW5pdFBsYXllclNoaXAobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy5jdHgpIHtcclxuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhdGEudGV4dHVyZSwgaW1hZ2VMb2NhdGlvbiA9IG1haW5HYW1lT2JqZWN0LnNob3dHYW1lSW5mbygpLmltYWdlRGlycmVjdGlvbjtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnBsYWNlUGxheWVyU2hpcCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGxhY2VQbGF5ZXJTaGlwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmltZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IGltYWdlTG9jYXRpb24gKyBpbWFnZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRQbGF5ZXJTaGlwID0gaW5pdFBsYXllclNoaXA7XHJcbmZ1bmN0aW9uIG1vdmVQbGF5ZXJTaGlwKCkge1xyXG4gICAgaWYgKHRoaXMuaW1nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3R4ICYmIHRoaXMuaW1nKSB7XHJcbiAgICAgICAgICAgIHZpZXcuY3JlYXRlSW1hZ2UodGhpcy5jdHgsIHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLm1vdmVQbGF5ZXJTaGlwID0gbW92ZVBsYXllclNoaXA7XHJcbmZ1bmN0aW9uIHNoaXBDb250cm9sKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGNvbnRyb2xLZXlzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmdhbWVTZXRpbmdzLmtleUNvbnRyb2xzO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5kb3duLnNvbWUoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIGUua2V5Q29kZSA9PSBvOyB9KSlcclxuICAgICAgICAgICAgX3RoaXMubW92ZVNoaXAoeyB4UG9zOiAwLCB5UG9zOiBfdGhpcy5kYXRhLnNwZWVkIH0pO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5sZWZ0LnNvbWUoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIGUua2V5Q29kZSA9PSBvOyB9KSlcclxuICAgICAgICAgICAgX3RoaXMubW92ZVNoaXAoeyB4UG9zOiBfdGhpcy5kYXRhLnNwZWVkICogLTEsIHlQb3M6IDAgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLnJpZ2h0LnNvbWUoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIGUua2V5Q29kZSA9PSBvOyB9KSlcclxuICAgICAgICAgICAgX3RoaXMubW92ZVNoaXAoeyB4UG9zOiBfdGhpcy5kYXRhLnNwZWVkLCB5UG9zOiAwIH0pO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy51cC5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIF90aGlzLm1vdmVTaGlwKHsgeFBvczogMCwgeVBvczogX3RoaXMuZGF0YS5zcGVlZCAqIC0xIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJDQU5WQVNcIlxyXG4gICAgICAgICAgICAmJiAhbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZVxyXG4gICAgICAgICAgICAmJiBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IGUuY2xpZW50WCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsIHkgPSBlLmNsaWVudFkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIF90aGlzLnhGaW5hbCA9ICgoeCAlIF90aGlzLmRhdGEuc3BlZWQgPT0gMCkgPyB4IDogX3RoaXMuZGF0YS5zcGVlZCAqIE1hdGguZmxvb3IoeCAvIF90aGlzLmRhdGEuc3BlZWQpKSAtIChfdGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICBfdGhpcy55RmluYWwgPSAoKHkgJSBfdGhpcy5kYXRhLnNwZWVkID09IDApID8geSA6IF90aGlzLmRhdGEuc3BlZWQgKiBNYXRoLmZsb29yKHkgLyBfdGhpcy5kYXRhLnNwZWVkKSkgLSAoX3RoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBndW5zID0gX3RoaXMuZGF0YS5ndW5zO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGJ1bGxldCA9IG5ldyBjb25zdHJ1Y3RvcnMuQnVsbGV0Q29uc3RydWN0KF90aGlzLngsIF90aGlzLnkgKyBpdGVtLmZpcmVQb3NpdGlvbiwgaXRlbS5uYW1lLCBpdGVtLmNvbG9yLCBcInBsYXllclwiLCBpdGVtLnNwZWVkICsgX3RoaXMueEFkaiwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQsIGl0ZW0uZGFtYWdlLCBpdGVtLnR5cGUsIGl0ZW0udGV4dHVyZSwgaXRlbS5zeCwgaXRlbS5zeSwgaXRlbS5zV2lkdGgsIGl0ZW0uc0hlaWdodCwgaXRlbS5leHBsb3Npb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBidWxsZXQuaW1nLnNyYyA9IGJ1bGxldC50ZXh0dXJlO1xyXG4gICAgICAgICAgICBidWxsZXQuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5jb25jYXQoYnVsbGV0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZ3Vuc18xID0gZ3VuczsgX2kgPCBndW5zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ3Vuc18xW19pXTtcclxuICAgICAgICAgICAgX2xvb3BfMShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNoaXBDb250cm9sID0gc2hpcENvbnRyb2w7XHJcbmZ1bmN0aW9uIHNldENvbnRleHQoY29udGV4dCkge1xyXG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xyXG59XHJcbmV4cG9ydHMuc2V0Q29udGV4dCA9IHNldENvbnRleHQ7XHJcbmZ1bmN0aW9uIHBsYWNlU2hpcCgpIHtcclxuICAgIHZhciB4QWRqID0gKHRoaXMueEZpbmFsIC0gdGhpcy54KSAvIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgIHZhciB5QWRqID0gKHRoaXMueUZpbmFsIC0gdGhpcy55KSAvIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgIHhBZGogPSAoTWF0aC5zaWduKHhBZGopID4gMCkgPyB4QWRqIDogeEFkaiAqIC0xO1xyXG4gICAgeUFkaiA9IChNYXRoLnNpZ24oeUFkaikgPiAwKSA/IHlBZGogOiB5QWRqICogLTE7XHJcbiAgICB4QWRqID0gKHhBZGogPiB0aGlzLmRhdGEubWluU3BlZWQpID8gdGhpcy5kYXRhLm1pblNwZWVkIDogeEFkajtcclxuICAgIHlBZGogPSAoeUFkaiA+IHRoaXMuZGF0YS5taW5TcGVlZCkgPyB0aGlzLmRhdGEubWluU3BlZWQgOiB5QWRqO1xyXG4gICAgdGhpcy54QWRqID0gKHRoaXMueCA+IHRoaXMueEZpbmFsKSA/IDAgOiB4QWRqO1xyXG4gICAgdGhpcy54ID0gKHRoaXMueCA+IHRoaXMueEZpbmFsKSA/IHRoaXMueCAtIHhBZGogOlxyXG4gICAgICAgICh0aGlzLnggPCB0aGlzLnhGaW5hbCkgPyB0aGlzLnggKyB4QWRqIDogdGhpcy54RmluYWw7XHJcbiAgICB0aGlzLnkgPSAodGhpcy55ID4gdGhpcy55RmluYWwpID8gdGhpcy55IC0geUFkaiA6XHJcbiAgICAgICAgKHRoaXMueSA8IHRoaXMueUZpbmFsKSA/IHRoaXMueSArIHlBZGogOiB0aGlzLnlGaW5hbDtcclxufVxyXG5leHBvcnRzLnBsYWNlU2hpcCA9IHBsYWNlU2hpcDtcclxuZnVuY3Rpb24gbW92ZVNoaXAoX2EpIHtcclxuICAgIHZhciBfYiA9IF9hLnhQb3MsIHhQb3MgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IF9hLnlQb3MsIHlQb3MgPSBfYyA9PT0gdm9pZCAwID8gMCA6IF9jO1xyXG4gICAgdGhpcy54ICs9IHhQb3M7XHJcbiAgICB0aGlzLnkgKz0geVBvcztcclxufVxyXG5leHBvcnRzLm1vdmVTaGlwID0gbW92ZVNoaXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuLi9zYXNzL21haW4uc2Fzc1wiKTtcclxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbnZhciBnYW1lRGF0YU1vZHVsZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZW5naW5lL2dhbWVNb2R1bGVzXCIpKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnNcIikpO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbihmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qICAgZ2FtZSBlbmdpbiBydW5pbmcgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdhbWVJbnRlcnZhbCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pLCBfYSwgYnVsbGV0LCBfYiwgX2MsIGVuZW15LCBfZCwgX2UsIG9iamVjdCwgX2YsIF9nLCBiYWNrZ3JvdW5kTWFwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQgJiYgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNsZWFyRmllbGQoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5sZXZlbEluaXQoY29uc3RydWN0b3JzLkdhbWVCYWNrZ3JvdW5kLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSAmJiBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc3Bhd25FbmVteUxvZ2ljKGNvbnN0cnVjdG9ycy5FbmVteU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaW5pdEdyYXBwbGVPYmplY3QoY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QsIHBsYXllclNoaXBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldCA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0Lm1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmNyZWF0ZUJ1bGxldHMoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZGVsZXRlQnVsbGV0KGJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaGl0RGV0ZWN0aW9uKGJ1bGxldCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMsIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24ocGxheWVyU2hpcERhdGEsIFtidWxsZXRdLCBnYW1lT2JqZWN0LCBjb25zdHJ1Y3RvcnMuR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaGl0RGV0ZWN0aW9uKGJ1bGxldCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLCBnYW1lT2JqZWN0LCBjb25zdHJ1Y3RvcnMuR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9iID0gMCwgX2MgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkgPSBfY1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZUVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwbGF5ZXJTaGlwRGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcGxheWVyU2hpcERhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnNob290KGNvbnN0cnVjdG9ycy5CdWxsZXRDb25zdHJ1Y3QsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlbGV0ZU9iamVjdHMoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW2VuZW15XSwgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5wbGFjZVNoaXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5tb3ZlUGxheWVyU2hpcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfZCA9IDAsIF9lID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBfZVtfZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5wbGFjZUVuZW15ZXMoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJleHBsb3Npb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZpcmVBbmltYXRpb25FbmRlZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJncmFwcGxlT2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW29iamVjdF0sIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5lbmVteUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5tYXBPYmplY3RNb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZGVsYXRlU2lkZU9iamVjdChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbE9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0Lm1hcFJhbm9tT2JqZWN0U3Bhd24oZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxPYmplY3RzLCBjb25zdHJ1Y3RvcnMuU2lkZU9iamVjdCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVNlY29uZHNJbmNyZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5sZXZlbFRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UgfHwgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9mID0gMCwgX2cgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0czsgX2YgPCBfZy5sZW5ndGg7IF9mKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTWFwID0gX2dbX2ZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRNYXAudXBkYXRlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZE1hcC5jaGFuZ2VQYXJ0T2ZUZXh0dXJlKGdhbWVPYmplY3QsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LndhcnBFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLy8gICBnYW1lIFVJIGxvYWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93U3RhcnRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93R2FtZVN0YXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dQYXVzZVdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dNZW51V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd1BhdXNlV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVPdmVyV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lV2luICYmICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSAmJiAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVdpbldpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhcHBNZW51XzEuaGlkZVNob3dNZW51KG1haW5NZW51LCBuYXZpZ2F0aW9uLm1lbnUsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVXaW4sIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3cmFwcGVyLCBtYWluTWVudSwgZ2FtZVN0YXRlLCBuYXZpZ2F0aW9uXzEsIGdhbWVPYmplY3QsIHBsYXllclNoaXBEYXRhLCBlbmdpbmUsIGNvbnRleHRzLCBuYXZpZ2F0aW9uO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuSE9TVCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LkhPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwicHJvZHVjdGlvbiBtb2RlIGNoZWNrIEhPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2FtZURhdGFNb2R1bGVzLmdhbWVEYXRhSW5pdChjb25zdHJ1Y3RvcnMuUGxheWVyU2hpcCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uXzEgPSBhcHBNZW51XzEuYXBwTWVudShnYW1lT2JqZWN0LCBhcHBNZW51XzEuZGlhbG9nV2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbl8xLm1lbnUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBkYXRhIGluOiBnYW1lU3RhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5ldyBjb25zdHJ1Y3RvcnMuR2FtZShnYW1lU3RhdGUuZGF0YSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5wbGF5ZXJPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gc2V0SW50ZXJ2YWwoZ2FtZUludGVydmFsLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5pbnRlcnZhbENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnVpQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2V0R2FtZUZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gZ2FtZU9iamVjdC5yZXR1cm5Db250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNyZWF0ZSBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEuY3R4ID0gY29udGV4dHMuZ2FtZUFjdGlvbkZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNoaXAgbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLmluaXRQbGF5ZXJTaGlwKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLnNoaXBDb250cm9sKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24gPSBhcHBNZW51XzEuYXBwTWVudShnYW1lT2JqZWN0LCBhcHBNZW51XzEuZGlhbG9nV2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5mdW5jdGlvbiBnZXREYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgaGVhZGVyczogcmVzdWx0SGVhZGVyLFxyXG4gICAgICAgIGJvZHk6IChkYXRhKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiNTAwIE5vIHNlcnZlciBjb25uZWN0aW9uIVwiLCBzdGF0dXM6IFwiZXJyb3JcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0RGF0YSA9IGdldERhdGE7XHJcbmZ1bmN0aW9uIGdldExvY2FsRGF0YShfYSkge1xyXG4gICAgdmFyIGZpbGVOYW1lID0gX2EuZmlsZU5hbWU7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZU5hbWUpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIm5vIGxvY2FsIGZpbGVzXCIpO1xyXG4gICAgICAgICAgICByZXMgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBmcy5yZWFkRmlsZShfX2Rpcm5hbWUgKyAnL3B1YmxpYy9kYXRhLycgKyBmaWxlTmFtZSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiZ290IHNvbWUgcHJvYmxlbSBoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0TG9jYWxEYXRhID0gZ2V0TG9jYWxEYXRhO1xyXG5mdW5jdGlvbiBwb3N0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lT3ZlclNjcmVlbihkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBhdXNlIHRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJHYW1lIE92ZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMTBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyIC0gNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lT3ZlclNjcmVlbiA9IGdhbWVPdmVyU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lUGF1c2UoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJQYXVzZSB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUGF1c2VcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicGFydCBvZiBwYXVzZSB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiNjBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDE1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVQYXVzZSA9IGdhbWVQYXVzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8gIHBvaW50cyAgIGxpZmUsIHRpbWUgdG8gZW5kcywgbGV2ZWxcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZUluZm9ybWF0aW9uU2NyZWVuKGV4dHJhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uLCBpbmZvKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJsaWZlUG9pbnRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgbnVtYmVyOiBpbmZvLmxpZmUsXHJcbiAgICAgICAgICAgIHN0ZXA6IFtpbmZvLmxpZmVdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAqIDUwOyB9KSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBsb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzSGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB4OiAxMCxcclxuICAgICAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9ydWJ5LnBuZyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IChkYXRhKSA/IGRhdGEgOiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gQXJyYXkoaW5mby5saWZlKS5maWxsKDApLm1hcChmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gaSAqIDMwOyB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gMzA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMueCA9IChpID09IDApID8gbWFyZ2luTGVmdCA6IDAgKyBzdGVwc1tpXSArICgoaSAhPSAwKSA/IG1hcmdpbkxlZnQgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJsZXZlbFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiBcIiArICgoaW5mby5jdXJyZW50TGV2ZWwgPD0gaW5mby5hbGxMZXZlbHMpID8gJ0N1cnJlbnQgTGV2ZWwgJyArIGluZm8uY3VycmVudExldmVsICsgJy8nICsgaW5mby5hbGxMZXZlbHMgOiAnZmluaXNoIGdhbWUnKSArIFwiIFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImJvbGQgMTZweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IDMwLFxyXG4gICAgICAgICAgICAgICAgeTogNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGltZSB0byBlbmQgZiBsZXZlbFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiAoaW5mby5taW51dGVzIHx8IGluZm8uc2Vjb25kcykgPyBcIlRpbWUgdG8gbGV2ZWwgZW5kIFwiICsgKChpbmZvLm1pbnV0ZXMgLSAxMCA+PSAwKSA/ICcnIDogMCkgKyBpbmZvLm1pbnV0ZXMgKyBcIjpcIiArICgoaW5mby5zZWNvbmRzIC0gMTAgPj0gMCkgPyAnJyA6IDApICsgaW5mby5zZWNvbmRzIDogJ0Jvc3MgbGV2ZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0IDE2cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLSAzMDAsXHJcbiAgICAgICAgICAgICAgICB5OiAzMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHYW1lIHBvaW50c1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNjb3JlOiBcIiArIGluZm8ucG9pbnRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0IDE4cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC01MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNvaW5zXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogaW5mby5zb3Vyc2UuZ2FtZUNvaW5zLFxyXG4gICAgICAgICAgICBzdGVwOiBbaW5mby5saWZlXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkgKiA1MDsgfSksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgbG9nb3R5cGVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzSGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSA1MCxcclxuICAgICAgICAgICAgICAgIHk6IDI1LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9ncmFwcGxlLW9iamVjdHMvY29pbi5wbmcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2FsbGJhY2ssIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSAoZGF0YSkgPyBkYXRhIDogdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBjb2ludEluZGV4ID0gTWF0aC5mbG9vcih0aGlzLm51bWJlciAvIDUwMDApLCBudW1iZXJPZkNvaW4gPSAoY29pbnRJbmRleCA+IDAgJiYgY29pbnRJbmRleCA8IDEwKSA/IGNvaW50SW5kZXggOiAoY29pbnRJbmRleCA+PSAxMCkgPyAxMCA6IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBBcnJheShudW1iZXJPZkNvaW4pLmZpbGwoMCkubWFwKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiBpICogNTsgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IHRoaXMucHJvcGVydHllcy54O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkNvaW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHllcy54ID0gKGkgPT0gMCkgPyBtYXJnaW5MZWZ0IDogMCArIHN0ZXBzW2ldICsgKChpICE9IDApID8gbWFyZ2luTGVmdCA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgY29pbnNcIixcclxuICAgICAgICAgICAgdGV4dDogXCJYXCIgKyBpbmZvLnNvdXJzZS5nYW1lQ29pbnMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHQgMThweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLTUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZUluZm9ybWF0aW9uU2NyZWVuID0gZ2FtZUluZm9ybWF0aW9uU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lTG9hZE1lbnUoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJTdGFydCBidXR0b25cIixcclxuICAgICAgICAgICAgdGV4dDogXCJQcmVzcyBTdGFydCB0byBiZWdpblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNYWluIHN0YXJ0IGdhbWUgYnV0dG9uIGluIHRoZSBtYWluIGxvYWQgc2NyZWVuXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHggQXJpYWxcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAxNjUsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDApJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0UGFkZGluZzogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDQwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxvZ290eXBlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgbG9nb3R5cGVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgc0hlaWdodDogMTAyNCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDc1LFxyXG4gICAgICAgICAgICAgICAgeTogOTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRQaWN0dXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMuYmFja2dyb3VuZC5zcmMgPSBwaWN0dXJlRGlycmVjdGlvbiArICdtaXNjL2xvZ28tMTAyNHgxMDI0LnBuZyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHYW1lIG5hbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJTcGFjZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImJvbGQgMTAwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC0yOTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAzNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR2FtZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQXR0YWNrXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHRlciAxMDBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDM3MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSg4OSwgMCwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lTG9hZE1lbnUgPSBnYW1lTG9hZE1lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vY29uc3RydWN0b3JzXCIpKTtcclxudmFyIGFwcE1lbnVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbmZ1bmN0aW9uIGdhbWVTZXR0aW5nc01lbnUoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm1lbnUgYmFja2dyb3VuZFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJiYWNrIHBhcnQgb2YgbWVudSBcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBncmFkaWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tHcm91bmRGaW5hbDogXCIjMzgwMjQwXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BYOiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wWTogMCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tWTogMTAwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyRjIyMzEnLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCdXR0b24gZW5kIGdhbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJnbyB0byBzdGFydFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJiYWNrIHRvIHN0YXJ0IHNjcmVlblwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDE1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgICAgICAgICAgdGV4dFByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogNyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5kaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ3Jlc3RhcnQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdyZXN0YXJ0JyB9LCB0aGlzLmJhY2tUb1N0YXJ0U2NyZWVuLCBudWxsLCB0aGlzLCBjb25zdHJ1Y3RvcnMuUGxheWVyU2hpcCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJNYWluIGdhbWUgbWVudSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXh0IGluIG1haW4gdG9wXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtNDUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVNldHRpbmdzTWVudSA9IGdhbWVTZXR0aW5nc01lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vY29uc3RydWN0b3JzXCIpKTtcclxudmFyIGFwcE1lbnVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbnZhciBnYW1lUmVzdWx0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXBwTWVudS9nYW1lUmVzdWx0TW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBnYW1lV2luU2NyZWVuKGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24sIGluZm8pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2NyZWVuIHRpdGxlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiWU9VIFdJTiBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIgYm9sZCAxMjBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIGhlaWdodCAvIDQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNjcmVlbiB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQ29uZ3JhdHVsYXRpb24gXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInRleHQgZm9yIGdhbWUgb3ZlciB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiIGJvbGQgMzBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzY29yZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIllvdSBzY29yZSBpcyBcIiArIGluZm8ucG9pbnRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIiBib2xkIDMwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCdXR0b24gZW5kIGdhbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJTYXZlIHJlc3VsdHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgKyB3aWR0aCAvIDMsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZVJlc3VsdE1vZHVsZV8xLmluaXRSZXN1bHRTY3JlZW4odGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVVaU1lbnUodGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dG9uIGVuZCBnYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiZ28gdG8gc3RhcnRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiAyMCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogNyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuZGlhbG9nV2luZG93KHsgdGV4dERhdGE6ICdyZXN0YXJ0IHRoZSBnYW1lPycsIHJlamVjdFRleHQ6ICdjYW5jZWwnLCBhY2NlcHRUZXh0OiAncmVzdGFydCcgfSwgdGhpcy5iYWNrVG9TdGFydFNjcmVlbiwgbnVsbCwgdGhpcywgY29uc3RydWN0b3JzLlBsYXllclNoaXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lVWlNZW51KHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVXaW5TY3JlZW4gPSBnYW1lV2luU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbml0KGNhbGxiYWNrLCBkYXRhKSB7XHJcbiAgICBkYXRhID0gKGRhdGEpID8gZGF0YSA6IHRoaXM7XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxufVxyXG5leHBvcnRzLmluaXQgPSBpbml0O1xyXG5mdW5jdGlvbiBnZXRVSU9iamVjdFBvc2l0aW9uKCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBjb250ZXh0LnByb3BlcnR5ZXMueCxcclxuICAgICAgICB5OiBjb250ZXh0LnByb3BlcnR5ZXMueSxcclxuICAgICAgICB3aWR0aDogY29udGV4dC5wcm9wZXJ0eWVzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogY29udGV4dC5wcm9wZXJ0eWVzLmhlaWdodCxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5nZXRVSU9iamVjdFBvc2l0aW9uID0gZ2V0VUlPYmplY3RQb3NpdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbnZhciBnYW1lVWlMb2FkTWVudV8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVVaUxvYWRNZW51XCIpO1xyXG52YXIgZ2FtZVVpU2V0dGluZ3NNZW51XzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVVpU2V0dGluZ3NNZW51XCIpO1xyXG52YXIgZ2FtZVBhdXNlU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuXCIpO1xyXG52YXIgZ2FtZVN0YXRzU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuXCIpO1xyXG52YXIgZ2FtZUdhbWVPdmVyU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuXCIpO1xyXG52YXIgZ2FtZVdpblNjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVXaW5TY3JlZW5cIik7XHJcbnZhciB1aUVsZW1lbnRNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9lbGVtZW50cy91aUVsZW1lbnRNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBnYW1lVWlQYXVzZSgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cylcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpUGF1c2UgPSBnYW1lVWlQYXVzZTtcclxuZnVuY3Rpb24gZ2FtZVVpTWVudShnYW1lVWlQYXVzZSkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2U7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAoZ2FtZVVpUGF1c2UpID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpTWVudSA9IGdhbWVVaU1lbnU7XHJcbmZ1bmN0aW9uIHVpQ29udHJvbGxlcigpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgY29udHJvbEtleXMgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncy5rZXlDb250cm9scztcclxuICAgIHZhciBnYW1lT2JqZWN0ID0gdGhpcztcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmVzY2FwZS5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVVpTWVudShfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5wYXVzZS5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVVpUGF1c2UoKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiQ0FOVkFTXCIpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBlLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudHNPblNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBjdHggPSBfdGhpcy5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCwgc2NyZWVuU2l6ZSA9IF90aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbiA9IGdhbWVVaUxvYWRNZW51XzEuZ2FtZUxvYWRNZW51KG51bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tEZXRlY3Rpb24uY2FsbChfdGhpcywgZWxlbWVudHNPblNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbiA9IGdhbWVVaVNldHRpbmdzTWVudV8xLmdhbWVTZXR0aW5nc01lbnUobnVsbCwgY3R4LCBzY3JlZW5TaXplLndpZHRoLCBzY3JlZW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0RldGVjdGlvbi5jYWxsKF90aGlzLCBlbGVtZW50c09uU2NyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVXaW4pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lV2luU2NyZWVuXzEuZ2FtZVdpblNjcmVlbihudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBudWxsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRGV0ZWN0aW9uLmNhbGwoX3RoaXMsIGVsZW1lbnRzT25TY3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrRGV0ZWN0aW9uKGVsZW1lbnRzT25TY3JlZW4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBlbGVtZW50c09uU2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gZW5lbWllc01vZHVsZXNfMS5oaXREZXRlY3Rpb24oZWxlbWVudHNPblNjcmVlbltpdGVtXSwgW10uY29uY2F0KHsgeDogeCwgeTogeSwgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBuYW1lOiBcImN1cnNvclwiIH0pLCB0aGlzLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgZWxlbWVudHNPblNjcmVlbltpdGVtXS5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c09uU2NyZWVuW2l0ZW1dLmFjdGlvbi5jYWxsKHRoaXMsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy51aUNvbnRyb2xsZXIgPSB1aUNvbnRyb2xsZXI7XHJcbmZ1bmN0aW9uIHNob3dVaVBvcHVwV2luZG93KCkge1xyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVXaW5kb3cuY2FsbCh0aGlzKTtcclxufVxyXG5leHBvcnRzLnNob3dVaVBvcHVwV2luZG93ID0gc2hvd1VpUG9wdXBXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dTdGFydFdpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aUltYWdlLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVVaUxvYWRNZW51XzEuZ2FtZUxvYWRNZW51KTtcclxufVxyXG5leHBvcnRzLnNob3dTdGFydFdpbmRvdyA9IHNob3dTdGFydFdpbmRvdztcclxuZnVuY3Rpb24gc2hvd01lbnVXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyLFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVVaVNldHRpbmdzTWVudV8xLmdhbWVTZXR0aW5nc01lbnUpO1xyXG59XHJcbmV4cG9ydHMuc2hvd01lbnVXaW5kb3cgPSBzaG93TWVudVdpbmRvdztcclxuZnVuY3Rpb24gc2hvd1BhdXNlV2luZG93KCkge1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lUGF1c2VTY3JlZW5fMS5nYW1lUGF1c2UpO1xyXG59XHJcbmV4cG9ydHMuc2hvd1BhdXNlV2luZG93ID0gc2hvd1BhdXNlV2luZG93O1xyXG5mdW5jdGlvbiBzaG93R2FtZVN0YXRzKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0XHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVN0YXRzU2NyZWVuXzEuZ2FtZUluZm9ybWF0aW9uU2NyZWVuLCBkYXRhKTtcclxufVxyXG5leHBvcnRzLnNob3dHYW1lU3RhdHMgPSBzaG93R2FtZVN0YXRzO1xyXG5mdW5jdGlvbiBnYW1lT3ZlcldpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVHYW1lT3ZlclNjcmVlbl8xLmdhbWVPdmVyU2NyZWVuKTtcclxufVxyXG5leHBvcnRzLmdhbWVPdmVyV2luZG93ID0gZ2FtZU92ZXJXaW5kb3c7XHJcbmZ1bmN0aW9uIGdhbWVXaW5XaW5kb3coKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbixcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVdpblNjcmVlbl8xLmdhbWVXaW5TY3JlZW4sIGRhdGEpO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVdpbldpbmRvdyA9IGdhbWVXaW5XaW5kb3c7XHJcbmZ1bmN0aW9uIGluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQsIHNjcmVlblNpemUgPSB0aGlzLmdldFNjcmVlblNpemUoKSwgcGljRGlyZWN0aW9uID0gdGhpcy5zaG93R2FtZUluZm8oKS5pbWFnZURpcnJlY3Rpb247XHJcbiAgICB2YXIgc2NyZWVuT2JqZWN0cyA9IGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW251bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQsIHBpY0RpcmVjdGlvbl0sIHByb3BzKSk7XHJcbiAgICBmb3IgKHZhciBpdGVtSW5kZXggPSAwOyBpdGVtSW5kZXggPCBzY3JlZW5PYmplY3RzLmxlbmd0aDsgaXRlbUluZGV4KyspIHtcclxuICAgICAgICBpZiAoc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmhhc093blByb3BlcnR5KCdsb2FkUGljdHVyZScpKVxyXG4gICAgICAgICAgICBzY3JlZW5PYmplY3RzW2l0ZW1JbmRleF0ubG9hZFBpY3R1cmUoKTtcclxuICAgICAgICBzY3JlZW5PYmplY3RzW2l0ZW1JbmRleF0uaW5pdChkcmF3TWV0aG9kc1tpdGVtSW5kZXhdKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRVaUVsZW1lbnRzID0gaW5pdFVpRWxlbWVudHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG5mdW5jdGlvbiBsb2FkV2luZG93KF9hKSB7XHJcbiAgICB2YXIgbG9hZFN0YXR1cyA9IF9hLmxvYWRTdGF0dXM7XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkLXNjcmVlbicpO1xyXG4gICAgd2luZG93RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc3dpdGNoIChsb2FkU3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImxvYWRcIjpcclxuICAgICAgICAgICAgYXBwTWVudV8xLnNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkLWNpcmNsZS1pbWFnZSBsb2FkLWNpcmNlLXdyYXBwZXJcXFwiPjwvZGl2PjxwPkxvYWRpbmcuLi48L3A+XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzZXJ2ZXJFcnJvclwiOlxyXG4gICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiPHA+RmFpbCB0byBsb2FkIGRhdGE8L3A+PGJ1dHRvbiBpZD1cXFwicmVsb2FkLXBhZ2VcXFwiIGNsYXNzPVxcXCJidG4tb3JhbmdlIGJ0bi1tYWluXFxcIj5SZWxvYWQ8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgcmVsb2FkUGFnZShcIiNyZWxvYWQtcGFnZVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgYXBwTWVudV8xLmhpZGUod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVsb2FkUGFnZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciByZWxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICByZWxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sb2FkV2luZG93ID0gbG9hZFdpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlc1wiKTtcclxuZXhwb3J0cy5jcmVhdGVXaW5kb3cgPSBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEuY3JlYXRlV2luZG93O1xyXG5leHBvcnRzLmNyZWF0ZVNoYXBlUm91bmRCb3JkZXIgPSBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEuY3JlYXRlU2hhcGVSb3VuZEJvcmRlcjtcclxuZXhwb3J0cy5jcmVhdGVSb3VuZEJ1dHRvbiA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbjtcclxudmFyIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEgPSByZXF1aXJlKFwiLi93ZWFwb25zL3dlYXBvbnNEaXNwbGF5TW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBkcmF3KGNvbnRleHQsIGVsZW1lbnQpIHtcclxuICAgIHZhciBwcm9wZXJ0eSA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwcm9wZXJ0eVtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGNvbnRleHRbZWxlbWVudF0uYXBwbHkoY29udGV4dCwgcHJvcGVydHkpO1xyXG59XHJcbmV4cG9ydHMuZHJhdyA9IGRyYXc7XHJcbmZ1bmN0aW9uIGNyZWF0ZUxhc2VyQnVsbGV0KGRhdGEpIHtcclxuICAgIGlmICghZGF0YS5jdHgpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIm5vIGNvbnRleHRcIik7XHJcbiAgICBpZiAoZGF0YS5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGRhdGEudHlwZSA9PSBcImJsYXN0ZXJcIilcclxuICAgICAgICB3ZWFwb25zRGlzcGxheU1vZHVsZV8xLndlYXBvbjEoZGF0YSwgZHJhdyk7XHJcbiAgICBpZiAoZGF0YS5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgZGF0YS50eXBlID09IFwiYmxhc3RlclwiKVxyXG4gICAgICAgIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEud2VhcG9uMShkYXRhLCBkcmF3KTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBkYXRhLnR5cGUgPT0gXCJiZWFtXCIpXHJcbiAgICAgICAgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMS53ZWFwb24xKGRhdGEsIGRyYXcpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlTGFzZXJCdWxsZXQgPSBjcmVhdGVMYXNlckJ1bGxldDtcclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY3R4LCBwaWN0dXJlTmFtZSkge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgZHJhdy5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFtjdHgsICdkcmF3SW1hZ2UnLCBwaWN0dXJlTmFtZV0sIHByb3BzKSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xyXG5mdW5jdGlvbiBjbGVhckZpZWxkKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgZHJhdyhjdHgsICdjbGVhclJlY3QnLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLmNsZWFyRmllbGQgPSBjbGVhckZpZWxkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdWlFbGVtZW50TW9kdWxlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dhcnBFbGVtZW50RHJvd1wiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHVpSW1hZ2Uoc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5kcmF3SW1hZ2UocHJvcGVydHllcy5iYWNrZ3JvdW5kLCAwLCAwLCBwcm9wZXJ0eWVzLnNXaWR0aCwgcHJvcGVydHllcy5zSGVpZ2h0LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMudWlJbWFnZSA9IHVpSW1hZ2U7XHJcbmZ1bmN0aW9uIHVpVGV4dChzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnNhdmUoKTtcclxuICAgIHZhciB0ZXh0V2lkdGggPSBwcm9wZXJ0eWVzLmN0eC5tZWFzdXJlVGV4dChzaGFwZVByb3BlcnR5ZXMudGV4dCkud2lkdGggLyAzLjI7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZvbnQgPSBzaGFwZVByb3BlcnR5ZXMuZm9udFNpemU7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLmJvcmRlckNvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQsIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIC8vcHJvcGVydHllcy5jdHguc2F2ZSgpO1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC50cmFuc2xhdGUoMCwwKTtcclxuICAgIC8vIHByb3BlcnR5ZXMuY3R4LnJlc3RvcmUoKTtcclxufVxyXG5leHBvcnRzLnVpVGV4dCA9IHVpVGV4dDtcclxuZnVuY3Rpb24gdWlSZXBlYXRJbWFnZShzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICB2YXIgcGF0ID0gcHJvcGVydHllcy5jdHguY3JlYXRlUGF0dGVybihwcm9wZXJ0eWVzLmJhY2tncm91bmQsICdyZXBlYXQteCcpO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHBhdDtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGwoKTtcclxufVxyXG5leHBvcnRzLnVpUmVwZWF0SW1hZ2UgPSB1aVJlcGVhdEltYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiB3YXJwRWxlbWVudCgpIHtcclxuICAgIHZhciBjdHggPSBudWxsO1xyXG4gICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDE3MCwgMCk7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwibWFnZW50YVwiKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjAuNVwiLCBcImJsdWVcIik7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIxLjBcIiwgXCJyZWRcIik7XHJcbn1cclxuZXhwb3J0cy53YXJwRWxlbWVudCA9IHdhcnBFbGVtZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlzcGxheU1vZHVsZXNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGVtZW50cy91aUVsZW1lbnRNb2R1bGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWxlbWVudHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiB3ZWFwb24xKGRhdGEsIGRyYXcpIHtcclxuICAgIGRyYXcoZGF0YS5jdHgsICdkcmF3SW1hZ2UnLCBkYXRhLmltZywgZGF0YS5zeCwgZGF0YS5zeSwgZGF0YS5zV2lkdGgsIGRhdGEuc0hlaWdodCwgZGF0YS54LCBkYXRhLnksIGRhdGEud2lkdGggKyAxMCwgZGF0YS5oZWlnaHQgKyAxMCk7XHJcbn1cclxuZXhwb3J0cy53ZWFwb24xID0gd2VhcG9uMTtcclxuZnVuY3Rpb24gd2VhcG9uMWJhY2t3YXJkKGRhdGEsIGRyYXcpIHtcclxuICAgIGRyYXcoZGF0YS5jdHgsICdkcmF3SW1hZ2UnLCBkYXRhLmltZywgMCwgMCwgZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQsIGRhdGEueCwgZGF0YS55LCBkYXRhLndpZHRoICsgMTAsIGRhdGEuaGVpZ2h0ICsgMTApO1xyXG59XHJcbmV4cG9ydHMud2VhcG9uMWJhY2t3YXJkID0gd2VhcG9uMWJhY2t3YXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coY3R4LCBwcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgX2EgPSB0aGlzLmdldFNjcmVlblNpemUoKSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgY3R4LmZpbGxSZWN0KHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICA7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVXaW5kb3cgPSBjcmVhdGVXaW5kb3c7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlUm91bmRCb3JkZXIoc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcHJvcGVydHllcy5iYWNrZ3JvdW5kO1xyXG4gICAgaWYgKHByb3BlcnR5ZXMuZ3JhZGllbnQpIHtcclxuICAgICAgICB2YXIgZ3JhZGllbnQgPSBwcm9wZXJ0eWVzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChwcm9wZXJ0eWVzLnRvcFgsIHByb3BlcnR5ZXMudG9wWSwgcHJvcGVydHllcy5ib3R0b21YLCBwcm9wZXJ0eWVzLmJvdHRvbVkpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBwcm9wZXJ0eWVzLmJhY2tncm91bmQpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBwcm9wZXJ0eWVzLmJhY2tHcm91bmRGaW5hbCk7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubW92ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGggLSBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLSBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7IC8qKi9cclxuICAgIGlmIChwcm9wZXJ0eWVzLmlzQm9yZGVyKSB7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlU3R5bGUgPSBwcm9wZXJ0eWVzLmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvcGVydHllcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsKCk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyID0gY3JlYXRlU2hhcGVSb3VuZEJvcmRlcjtcclxuZnVuY3Rpb24gY3JlYXRlUm91bmRCdXR0b24oc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgdmFyIHRleHRXaWR0aCA9IHByb3BlcnR5ZXMuY3R4Lm1lYXN1cmVUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0KS53aWR0aCAvIDMuMjtcclxuICAgIHZhciBidXR0b25XaWR0aCA9IHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LmxlZnRQYWRkaW5nICsgdGV4dFdpZHRoICsgcHJvcGVydHllcy50ZXh0UHJvcGVydHkucmlnaHRQYWRkaW5nO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLmJhY2tncm91bmQ7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4Lm1vdmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCwgcHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpOyAvKiovXHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LmZpbGxSZWN0KHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGwoKTtcclxuICAgIGlmIChwcm9wZXJ0eWVzLmlzQm9yZGVyKSB7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlU3R5bGUgPSBwcm9wZXJ0eWVzLmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVXaWR0aCA9IHByb3BlcnR5ZXMuYm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvcGVydHllcy5jdHguZm9udCA9IHNoYXBlUHJvcGVydHllcy5mb250U2l6ZTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LnRleHRDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy50ZXh0UHJvcGVydHkuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5sZWZ0UGFkZGluZywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLyAyICsgcHJvcGVydHllcy50ZXh0UHJvcGVydHkudG9wUGFkZGluZyk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVSb3VuZEJ1dHRvbiA9IGNyZWF0ZVJvdW5kQnV0dG9uO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9