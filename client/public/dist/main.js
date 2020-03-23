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
exports.push([module.i, ".btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\n.btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\nbody {\n    font-family: 'Roboto';\n    color: #ffffff;\n    background: #333;\n    margin: 0;\n    padding: 0;\n    -khtml-user-select: none;\n    user-select: none; }\n    body #preloader {\n        visibility: hidden;\n        width: 0px;\n        height: 0px; }\n\n.static-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100vw; }\n    .static-wrapper asside.menu-backgroud {\n        background: #2f2231; }\n    .static-wrapper asside {\n        z-index: 10; }\n        .static-wrapper asside .main-menu {\n            top: 10px; }\n            .static-wrapper asside .main-menu ul {\n                display: block;\n                top: 105px;\n                position: relative;\n                text-shadow: 0px 0px 6px rgba(92, 2, 108, 0.5);\n                text-transform: uppercase; }\n                .static-wrapper asside .main-menu ul li {\n                    min-width: 160px;\n                    padding: 10px;\n                    list-style: none; }\n                .static-wrapper asside .main-menu ul a {\n                    color: #EA6C00;\n                    text-decoration: none;\n                    font-size: 17px; }\n                .static-wrapper asside .main-menu ul a:active {\n                    color: red; }\n\n.content-wrapper {\n    width: 100%;\n    max-height: 100vh;\n    overflow-y: scroll;\n    z-index: 1100; }\n    .content-wrapper .menu-pages-wrapper {\n        background: #161325;\n        margin-top: -20px;\n        min-height: 100vh;\n        padding: 20px; }\n\n.content-wrapper::-webkit-scrollbar {\n    width: 12px; }\n\n.content-wrapper::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n    border-radius: 10px; }\n\n.content-wrapper::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(71, 6, 83, 0.8);\n    -webkit-box-shadow: inset 0 0 6px black; }\n\n.content-wrapper::-webkit-scrollbar-thumb:window-inactive {\n    background: rgba(255, 0, 0, 0.1); }\n\n.dialog-box {\n    position: absolute;\n    margin: 0 auto;\n    padding: 10px;\n    min-width: 100%;\n    min-height: 100vh;\n    position: fixed;\n    left: 0; }\n    .dialog-box .dialog-wrapper {\n        display: flex;\n        height: 100vh;\n        justify-content: center;\n        align-items: center; }\n        .dialog-box .dialog-wrapper .dialog-window {\n            background: #340054;\n            padding: 20px;\n            min-width: 300px;\n            min-height: 80px;\n            border-radius: 5px; }\n            .dialog-box .dialog-wrapper .dialog-window form input[type=\"text\"], .dialog-box .dialog-wrapper .dialog-window form input[type=\"email\"], .dialog-box .dialog-wrapper .dialog-window form input[type=\"password\"] {\n                width: 100%;\n                padding: 10px;\n                border-radius: 5px;\n                background: rgba(255, 255, 255, 0.3);\n                border: 0px;\n                color: white; }\n            .dialog-box .dialog-wrapper .dialog-window form label {\n                font-size: 12px;\n                color: #eee; }\n            .dialog-box .dialog-wrapper .dialog-window form .alert-message {\n                font-size: 12px; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message p {\n                    padding: 10px; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .reject-text {\n                    border: 1px solid red;\n                    color: red; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .warning-text {\n                    border: 1px solid yellow;\n                    color: yellow; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .success-text {\n                    border: 1px solid green;\n                    color: green; }\n            .dialog-box .dialog-wrapper .dialog-window div {\n                padding: 10px; }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-bottom-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-bottom-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-bottom-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n\n#wrapper section {\n    z-index: 5;\n    top: 0; }\n\n.gameBackground {\n    background: #000; }\n\n.game-fields {\n    position: absolute; }\n\n.game-field-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    align-items: center; }\n\n.hide-menu {\n    display: none; }\n\n.result-message-wrapper {\n    display: flex;\n    color: orange;\n    justify-content: center;\n    height: 80vh;\n    align-items: center; }\n    .result-message-wrapper p {\n        text-align: center;\n        font-size: 20px; }\n    .result-message-wrapper p:first-letter {\n        text-transform: uppercase; }\n\nul.show-result-area {\n    list-style: none; }\n    ul.show-result-area li {\n        padding: 10px; }\n        ul.show-result-area li .rate-number {\n            color: red;\n            flex-basis: 5%; }\n        ul.show-result-area li .item-name {\n            color: orange;\n            flex-basis: 60%; }\n        ul.show-result-area li .item-coin {\n            color: green;\n            flex-basis: 15%; }\n        ul.show-result-area li .item-points {\n            color: orange;\n            flex-basis: 15%; }\n        ul.show-result-area li .item-date {\n            font-size: 10px;\n            color: grey;\n            flex-basis: 5%; }\n        ul.show-result-area li p {\n            display: flex;\n            font-size: 14px;\n            color: #bdbdbd; }\n    ul.show-result-area li:nth-child(odd) {\n        background: #130517; }\n\n.load-screen-wrapper {\n    z-index: 1000; }\n    .load-screen-wrapper .load-circe-wrapper {\n        width: 100px;\n        height: 100px;\n        background-size: cover;\n        animation: load-circle-rotate 1s infinite steps(11, end); }\n    .load-screen-wrapper p {\n        text-align: center; }\n\n@keyframes load-circle-rotate {\n    0% {\n        transform: rotate(0deg); }\n    100% {\n        transform: rotate(360deg); } }\n", ""]);
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
                            innerContent: "<p class=\"single-item\"><span class=\"rate-number\">" + index + "</span>\n            <span>name:</span> <span class=\"item-name\"> " + item.userName + "</span>\n            <span>coin:</span> <span class=\"item-coin\"> " + item.gameCoins + "</span>\n            <span>score:</span> <span class=\"item-points\"> " + item.gamePoints + "</span>\n            <span class=\"item-date\"> " + year + "/" + month + "/" + day + "</span></p>",
                            attributeName: 'data-button-id',
                            attribute: item.id,
                            attributeName1: null,
                            attribute1: null
                        });
                        setTimeout(function () {
                            windowElement.appendChild(newElement);
                        }, index * 100);
                    };
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
    var formBtnSwitcherArea = document.querySelector("#form-btn-switcher-area");
    var formLoadArea = document.querySelector('#form-load-area');
    formLoadArea.innerHTML = "";
    formBtnSwitcherArea.innerHTML = "";
    appMenu_1.show(windowElement);
    var buttonSwitcher = [
        pagesBuilder_1.createElements({
            tagName: "button",
            styleClass: "accept-btn btn-main",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: "update player",
            innerContent: "",
            attributeName: "data-btn-id",
            attribute: "update-player",
            attributeName1: null,
            attribute1: null
        }),
        pagesBuilder_1.createElements({
            tagName: "button",
            styleClass: "accept-btn btn-main selected-form",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: "new player",
            innerContent: "",
            attributeName: "data-btn-id",
            attribute: "new-player",
            attributeName1: null,
            attribute1: null
        })
    ];
    for (var _i = 0, buttonSwitcher_1 = buttonSwitcher; _i < buttonSwitcher_1.length; _i++) {
        var item = buttonSwitcher_1[_i];
        formBtnSwitcherArea.appendChild(item);
    }
    var dialogData = [
        pagesBuilder_1.createElements({
            tagName: "form",
            styleClass: "",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: "save result",
            innerContent: "\n                <h1>Create new player</h1>\n                <p>Please fill the fields to save your result</p>\n                <label for=\"name\">\n                    <p>Please enter you name</p>\n                    <input id=\"name\" maxlength=\"30\" minlength=\"3\" name=\"userName\" type=\"text\" required placeholder=\"Enter you name\">\n                </label>\n                <label for=\"mail\">\n                    <p>Please enter you email</p>\n                    <input id=\"mail\" name=\"userEmail\" type=\"email\" required placeholder=\"Enter you email address\">\n                </label>\n                <label for=\"password\">\n                    <p>Create password</p>\n                    <input id=\"password\" name=\"userPassword\" maxlength=\"20\" minlength=\"4\" type=\"password\" required placeholder=\"Enter you email address\">\n                </label>\n                <div id=\"alert-message\" class=\"alert-message\"></div>\n                <div id=\"dialog-bottom-area\" class=\"dialog-bottom-area\">\n                    <button type=\"submit\" data-button-id=\"save-result\" class=\"accept-btn btn-main\">save</button>\n                    <button data-button-id=\"cancel\" class=\"reject-btn btn-main\">cancel</button>\n                </div>",
            attributeName: 'name',
            attribute: "save-result-form",
            attributeName1: null,
            attribute1: null
        }),
        pagesBuilder_1.createElements({
            tagName: "form",
            styleClass: "",
            inlineStyle: "display: none;",
            pictureUrl: null,
            linkUrl: null,
            text: "save result",
            innerContent: "\n                    <h1>Update player</h1>\n                    <p>Enter email and password</p>\n                    <label for=\"mail\">\n                        <p>Please enter you email</p>\n                        <input id=\"mail\" name=\"userEmail\" type=\"email\" required placeholder=\"Enter you email address\">\n                    </label>\n                    <label for=\"password\">\n                        <p>Create password</p>\n                        <input id=\"password\" name=\"userPassword\" maxlength=\"20\" minlength=\"4\" type=\"password\" required placeholder=\"Enter you email address\">\n                    </label>\n                    <div id=\"alert-message\" class=\"alert-message\"></div>\n                    <div id=\"dialog-bottom-area\" class=\"dialog-bottom-area\">\n                        <button type=\"submit\" data-button-id=\"save-result\" class=\"accept-btn btn-main\">save</button>\n                        <button data-button-id=\"cancel\" class=\"reject-btn btn-main\">cancel</button>\n                    </div>",
            attributeName: 'name',
            attribute: "rewrite-result-form",
            attributeName1: null,
            attribute1: null
        })
    ];
    for (var _a = 0, dialogData_1 = dialogData; _a < dialogData_1.length; _a++) {
        var item = dialogData_1[_a];
        formLoadArea.appendChild(item);
    }
    var form = document.forms['save-result-form'];
    var rewriteForm = document.forms['rewrite-result-form'];
    var formBtnArea = document.querySelectorAll('.dialog-bottom-area');
    formBtnSwitcherArea.addEventListener('click', formSwitcher);
    Array.prototype.forEach.call(formBtnArea, function (button) {
        button.addEventListener('click', dialogButtonEvent);
    });
    form.addEventListener('submit', formActionWrite);
    rewriteForm.addEventListener('submit', formActionUpdate);
    function formSwitcher(event) {
        switch (event.target.dataset.btnId) {
            case "new-player":
                appMenu_1.hide(rewriteForm);
                appMenu_1.show(form);
                appMenu_1.addClassList(event.target, "selected-form");
                break;
            case "update-player":
                appMenu_1.hide(form);
                appMenu_1.show(rewriteForm);
                appMenu_1.addClassList(event.target, "selected-form");
                break;
            default:
                false;
        }
    }
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
    function formActionWrite(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formResult, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formResult = transferDataToObject(this, mainGameObject);
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
    function formActionUpdate(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formResult, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formResult = transferDataToObject(this, mainGameObject);
                        if (!formResult) return [3 /*break*/, 2];
                        return [4 /*yield*/, serverRequestModules_1.getData({
                                url: process.env.HOST + 'api/game-result',
                                method: 'PUT',
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
        var elements = document.querySelectorAll(".alert-message");
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
                rewriteForm.reset();
                break;
            default:
                alertText = "";
        }
        console.log(elements);
        Array.prototype.forEach.call(elements, function (el) {
            el.innerHTML = alertText;
        });
    }
}
exports.initResultScreen = initResultScreen;
function transferDataToObject(data, mainGameObject) {
    if (!data)
        throw Error("No data to transform");
    var obj = { userName: null, userEmail: null, gamePoints: null, gameCoins: null, userPassword: null };
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
var bulletsModule_1 = __webpack_require__(/*! ../engine/bulletsModule */ "./src/engine/bulletsModule.ts");
var engineModules_1 = __webpack_require__(/*! ../engine/engineModules */ "./src/engine/engineModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var BulletConstruct = /** @class */ (function () {
    function BulletConstruct(_a) {
        var data = __rest(_a, []);
        this.x = data.x;
        this.y = data.y;
        this.bulletType = data.bulletType;
        this.bulletTexture = data.bulletTexture;
        this.objectOwner = data.objectOwner;
        this.bulletSpeed = data.bulletSpeed;
        this.width = data.width;
        this.height = data.height;
        this.damage = data.damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
        this.type = data.type;
        this.img = new Image();
        this.texture = __dirname + data.texture;
        this.sx = data.sx;
        this.sy = data.sy;
        this.explosion = data.explosion;
        this.picturesWidth = data.imageWidth;
        this.imageHeight = data.imageHeight;
        this.animationSteps = data.animationSteps;
        this.numberOfItems = data.numberOfItems;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.detectFrame = 0;
        this.sWidth = data.sWidth;
        this.sHeight = data.sHeight;
        //this.picturesWidth = data.picturesWidth;
    }
    return BulletConstruct;
}());
exports.BulletConstruct = BulletConstruct;
/*
this.img,
        this.sx, this.sy,
        this.sWidth, this.sHeight,
        this.x, this.y,
        this.width,this.height


this.sx = data.sx; this.sy = data.sy;
            this.sWidth = data.sWidth; this.sHeight = data.sHeight;
            this.picturesWidth = data.picturesWidth; this.numberOfItems = data.numberOfItems;
"imageWidth": 3587,
"imageHeight":109,
                "animationSteps": 5,
                "numberOfItems": 12,
                "numberOfVerticalItems": 1,
            */
BulletConstruct.prototype.createBullets = bulletsModule_1.createBullets;
BulletConstruct.prototype.initBullets = bulletsModule_1.initBullets;
BulletConstruct.prototype.moveBullets = bulletsModule_1.moveBullets;
BulletConstruct.prototype.getObjectPosition = engineModules_1.getObjectPosition;
BulletConstruct.prototype.takeDamage = enemiesModules_1.takeDamage;
BulletConstruct.prototype.enemyAnimation = enemiesModules_1.enemyAnimation;
BulletConstruct.prototype.placeEnemyes = enemiesModules_1.placeEnemyes;


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
function shoot(BulletConstruct, mainGameObject) {
    if (mainGameObject.gameInitData.gamePause || !this.isShoot)
        return false;
    var guns = this.guns;
    var _loop_1 = function (item) {
        if (1 > mainGameObject.gameRandomizer(item.fireRepead)) {
            var context = this_1;
            var bullet_1 = new BulletConstruct({
                x: context.x, y: context.y + ((item.firePosition) ? item.firePosition : mainGameObject.gameRandomizer(context.height)),
                bulletType: item.name, bulletTexture: item.color,
                objectOwner: "enemy", bulletSpeed: item.speed + this_1.speed,
                width: item.width, height: item.height,
                damage: item.damage, type: item.type, texture: item.texture,
                sx: item.sx, sy: item.sy, sWidth: item.sWidth, sHeight: item.sHeight,
                explosion: item.explosionAnimation, imageWidth: item.imageWidth, imageHeight: item.imageHeight,
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems
            });
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
    if (this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "enemy" ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint') ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint') ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint') ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint')) {
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
        this.objectPresent = false;
        return;
    }
    /* Game grapple object hit detection */
    if (this.objectPresent && this.objectOwner == "grappleObject" &&
        hitObject.objectOwner == "player" &&
        !hitObject.hasOwnProperty('bulletType')) {
        this.objectPresent = false;
        mainGameObject.gameInitData.grappleObjectOnScreen = false;
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
        this[this.grapplePower.methodName]({ allGameSideObjects: mainGameObject, playerShipData: hitObject, mainGameObject: mainGameObject });
    }
    /* Hit det dection collision */
    if (this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "collide" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "collide" && hitObject.objectOwner == "enemy" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "environment" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "environment" && hitObject.objectOwner == "enemy") {
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
        sx: this.sx, sy: this.sy, sWidth: this.sWidth, sHeight: this.sHeight,
        imageWidth: this.imageWidth, imageHeight: this.imageHeight, animationSteps: this.animationSteps,
        numberOfItems: this.numberOfItems, numberOfVerticalItems: this.numberOfVerticalItems
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
            var context = _this;
            var bullet = new constructors.BulletConstruct({
                x: context.x, y: context.y + item.firePosition,
                bulletType: item.name, bulletTexture: item.color,
                objectOwner: "player", bulletSpeed: item.speed + context.xAdj,
                width: item.width, height: item.height,
                damage: item.damage, type: item.type, texture: item.texture,
                sx: item.sx, sy: item.sy, sWidth: item.sWidth, sHeight: item.sHeight,
                explosion: item.explosionAnimation, imageWidth: item.imageWidth, imageHeight: item.imageHeight,
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems
                /**/
            });
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
                                    bullet.placeEnemyes(gameObject);
                                    bullet.moveBullets(playerShipData, gameObject);
                                    gameObject.deleteBullet(bullet);
                                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject, constructors.GrappleObject);
                                    gameObject.hitDetection(playerShipData, [bullet], gameObject, constructors.GrappleObject);
                                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameSideObjects, gameObject, constructors.GrappleObject);
                                    bullet.enemyAnimation();
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
    draw(data.ctx, 'drawImage', data.img, data.sx, data.sy, data.width, data.height, data.x, data.y, data.width + 10, data.height + 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvYWkvcmVndWxhckVuZW15QWlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBNZW51L2FwcE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE1lbnUvZ2FtZVJlc3VsdE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwTWVudS9wYWdlc0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9idWxsZXRDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2VuZW15Q29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lR3JhcHBsZU9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9sZXZlbENvbnN0cnVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL21haW5HYW1lQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvdXNlckNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYXBwRXJyb3JMaXN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYmFja2dyb3VuZE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2J1bGxldHNNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9lbmdpbmVNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvY2hhbmdlTGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVVpTG9hZE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lVWlTZXR0aW5nc01lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lV2luU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvdWlNb2RlbE1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2xvYWRTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvdWlFbGVtZW50TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9lbGVtZW50cy93YXJwRWxlbWVudERyb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvd2VhcG9ucy93ZWFwb25zRGlzcGxheU1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKCdlbGVjdHJvbicpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0hBQWdIO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBLHFDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW1zIHtcXG4gICAgYmFja2dyb3VuZDogIzE2MTMyNTsgfVxcblxcbi5idG4tc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDsgfVxcblxcbi5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4OyB9XFxuXFxuLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW1zIHtcXG4gICAgYmFja2dyb3VuZDogIzE2MTMyNTsgfVxcblxcbi5idG4tc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDsgfVxcblxcbi5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4OyB9XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBib2R5ICNwcmVsb2FkZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMHB4OyB9XFxuXFxuLnN0YXRpYy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlLm1lbnUtYmFja2dyb3VkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZjIyMzE7IH1cXG4gICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSB7XFxuICAgICAgICB6LWluZGV4OiAxMDsgfVxcbiAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHtcXG4gICAgICAgICAgICB0b3A6IDEwcHg7IH1cXG4gICAgICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUgdWwge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSg5MiwgMiwgMTA4LCAwLjUpO1xcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAgICAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCBsaSB7XFxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIGEge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNFQTZDMDA7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7IH1cXG4gICAgICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIGE6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7IH1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHotaW5kZXg6IDExMDA7IH1cXG4gICAgLmNvbnRlbnQtd3JhcHBlciAubWVudS1wYWdlcy13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNjEzMjU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgcGFkZGluZzogMjBweDsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEycHg7IH1cXG5cXG4uY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDcxLCA2LCA4MywgMC44KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IGJsYWNrOyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMSk7IH1cXG5cXG4uZGlhbG9nLWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDsgfVxcbiAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0MDA1NDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIGlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlZWU7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSAuYWxlcnQtbWVzc2FnZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSAuYWxlcnQtbWVzc2FnZSBwIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gLmFsZXJ0LW1lc3NhZ2UgLnJlamVjdC10ZXh0IHtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gLmFsZXJ0LW1lc3NhZ2UgLndhcm5pbmctdGV4dCB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogeWVsbG93OyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIC5hbGVydC1tZXNzYWdlIC5zdWNjZXNzLXRleHQge1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZGl2IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDsgfVxcbiAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJ0bi1hcmVhIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYnRuLWFyZWEgYnV0dG9uLmFjY2VwdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRiYWU2MDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1idG4tYXJlYSBidXR0b24ucmVqZWN0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjkwMDRmO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpOyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYm90dG9tLWFyZWEge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1ib3R0b20tYXJlYSBidXR0b24uYWNjZXB0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGJhZTYwO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpOyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJvdHRvbS1hcmVhIGJ1dHRvbi5yZWplY3QtYnRuIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiOTAwNGY7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7IH1cXG5cXG4jd3JhcHBlciBzZWN0aW9uIHtcXG4gICAgei1pbmRleDogNTtcXG4gICAgdG9wOiAwOyB9XFxuXFxuLmdhbWVCYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDsgfVxcblxcbi5nYW1lLWZpZWxkcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5nYW1lLWZpZWxkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5oaWRlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnJlc3VsdC1tZXNzYWdlLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5yZXN1bHQtbWVzc2FnZS13cmFwcGVyIHAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAgIC5yZXN1bHQtbWVzc2FnZS13cmFwcGVyIHA6Zmlyc3QtbGV0dGVyIHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG51bC5zaG93LXJlc3VsdC1hcmVhIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgLnJhdGUtbnVtYmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLW5hbWUge1xcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgICAgICAgICAgZmxleC1iYXNpczogNjAlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLWNvaW4ge1xcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxNSU7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgLml0ZW0tcG9pbnRzIHtcXG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDE1JTsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSAuaXRlbS1kYXRlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICAgICAgZmxleC1iYXNpczogNSU7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgcCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7IH1cXG4gICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaTpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTMwNTE3OyB9XFxuXFxuLmxvYWQtc2NyZWVuLXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAxMDAwOyB9XFxuICAgIC5sb2FkLXNjcmVlbi13cmFwcGVyIC5sb2FkLWNpcmNlLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBhbmltYXRpb246IGxvYWQtY2lyY2xlLXJvdGF0ZSAxcyBpbmZpbml0ZSBzdGVwcygxMSwgZW5kKTsgfVxcbiAgICAubG9hZC1zY3JlZW4td3JhcHBlciBwIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbkBrZXlmcmFtZXMgbG9hZC1jaXJjbGUtcm90YXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4vbWFpbi5zYXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2VydmVyUmVxdWVzdE1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvc2VydmVyUmVxdWVzdE1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIGVuZW15U2hpcExvZ2ljVmVydGljYWwodGFyZ2V0LCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIG1heFBvc2l0aW9uWCA9IE1hdGgubWF4KHRhcmdldC54LCB0aGlzLngpO1xyXG4gICAgdmFyIG1pblBvc2l0aW9uWCA9IE1hdGgubWluKHRhcmdldC54LCB0aGlzLngpO1xyXG4gICAgdmFyIG1heFBvc2l0aW9uWSA9IE1hdGgubWF4KHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnkpO1xyXG4gICAgdmFyIG1pblBvc2l0aW9uWSA9IE1hdGgubWluKHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnkpO1xyXG4gICAgdmFyIGRpc3RhbmNlVG9UYXJnZXRYID0gbWF4UG9zaXRpb25YIC0gbWluUG9zaXRpb25YO1xyXG4gICAgdmFyIGRpc3RhbmNlVG9UYXJnZXRZID0gbWF4UG9zaXRpb25ZIC0gbWluUG9zaXRpb25ZO1xyXG4gICAgaWYgKHRoaXMuaXNNb3ZlICYmIHRoaXMuYmVoYXZpb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgY2FzZSAncGF0cm9vbCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcnJlY3Rpb25SYW5kb20gPSBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplcigyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IChkaXJyZWN0aW9uUmFuZG9tID09IDEpID8gXCJ1cFwiIDogXCJkb3duXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXRyb29sLmNhbGwodGhpcywgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpbmQnOlxyXG4gICAgICAgICAgICAgICAgc3RyYWZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYXR0YWNrJzpcclxuICAgICAgICAgICAgICAgIGF0dGFjay5jYWxsKHRoaXMsIGRpc3RhbmNlVG9UYXJnZXRZLCBkaXN0YW5jZVRvVGFyZ2V0WCwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb21lRW5kRmluZCc6XHJcbiAgICAgICAgICAgICAgICBzdHJhZmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHVuaXRTdG9wLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN0cmFmZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVuaXRTdG9wKCkge1xyXG4gICAgICAgIHZhciBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnggPCBzY3JlZW5EYXRhLndpZHRoIC0gdGhpcy53aWR0aCAqIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RyYWZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwb3REaXN0YW5jZSA+IGRpc3RhbmNlVG9UYXJnZXRYIHx8IHRoaXMuc3BvdERpc3RhbmNlID4gZGlzdGFuY2VUb1RhcmdldFkpIHtcclxuICAgICAgICAgICAgdGhpcy55RmluYWwgPSB0YXJnZXQueSAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXR0YWNrKGRpc3RhbmNlVG9UYXJnZXRZLCBkaXN0YW5jZVRvVGFyZ2V0WCwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy55RmluYWwgPSB0YXJnZXQueSAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICBpZiAoZGlzdGFuY2VUb1RhcmdldFggPCAxMDApXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXRyb29sKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXRZID0gTWF0aC5tYXgodGhpcy55LCB0aGlzLnlGaW5hbCkgLSBNYXRoLm1pbih0aGlzLnksIHRoaXMueUZpbmFsKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy55RmluYWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSAtIHRoaXMuaGVpZ2h0IDwgdGhpcy55RmluYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlGaW5hbCA9IHNjcmVlbkRhdGEuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy55RmluYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwidXBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy55RmluYWwgPSBzY3JlZW5EYXRhLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lbmVteVNoaXBMb2dpY1ZlcnRpY2FsID0gZW5lbXlTaGlwTG9naWNWZXJ0aWNhbDtcclxuZnVuY3Rpb24gZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSkge1xyXG4gICAgdmFyIHlBZGogPSBkaXN0YW5jZVRvVGFyZ2V0WSAvIHRoaXMudmVydGljYWxTcGVlZDtcclxuICAgIHlBZGogPSAoTWF0aC5zaWduKHlBZGopID4gMCkgPyB5QWRqIDogeUFkaiAqIC0xO1xyXG4gICAgeUFkaiA9ICh5QWRqID4gdGhpcy52ZXJ0aWNhbFNwZWVkKSA/IHRoaXMudmVydGljYWxTcGVlZCA6IHlBZGo7XHJcbiAgICB0aGlzLnkgPSAodGhpcy55ID4gdGhpcy55RmluYWwpID8gdGhpcy55IC0geUFkaiA6XHJcbiAgICAgICAgKHRoaXMueSA8IHRoaXMueUZpbmFsKSA/IHRoaXMueSArIHlBZGogOiB0aGlzLnlGaW5hbDtcclxufVxyXG5leHBvcnRzLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24gPSBlbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uO1xyXG5mdW5jdGlvbiBzcGF3bkVuZW15TG9naWMoRW5lbXlPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBlbmVteVNwYXduKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tTcGF3blR5cGUsIG51bWJlckVuZW15UGVyU3Bhd24sIGksIGVuZW15U2hpcCwgZW5lbXlTaGlwT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tTcGF3blR5cGUgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5lbmVteVByb2JhYmlsaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGNoZWNrU3Bhd25UeXBlIDw9IGxldmVsRGF0YS5lbmVteVJhbmRvbWl6ZXJJbmRleCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyRW5lbXlQZXJTcGF3biA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxEYXRhLmVuZW15TWF4TnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBudW1iZXJFbmVteVBlclNwYXduO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpIDwgbGV2ZWxEYXRhLmVuZW15TWF4TnVtYmVyKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXAgPSBlbmVteURhdGFbdGhpcy5nYW1lUmFuZG9taXplcihlbmVteURhdGEubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZU5ld0VuZW15KGVuZW15U2hpcCwgRW5lbXlPYmplY3QpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlTaGlwT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlTaGlwT2JqZWN0LmxvYWRFbmVteWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcyA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmNvbmNhdChlbmVteVNoaXBPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZ2FtZURhdGEsIGxldmVsRGF0YSwgZW5lbXlEYXRhLCBsZXZlbFVzZXJEYXRhLCBib3NzUHJlc2VudCwgZW5lbXlTaGlwT2JqZWN0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEsIGxldmVsRGF0YSA9IGdhbWVEYXRhLmxldmVsRGF0YSwgZW5lbXlEYXRhID0gZ2FtZURhdGEuZW5lbXlEYXRhLCBsZXZlbFVzZXJEYXRhID0gdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCksIGJvc3NQcmVzZW50ID0gKGxldmVsVXNlckRhdGEuc291cnNlLmxldmVsRGF0YS5ib3NzUHJlc2VudCkgPyBsZXZlbFVzZXJEYXRhLnNvdXJzZS5sZXZlbERhdGEuYm9zc1ByZXNlbnQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKCF0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbENoYW5nZSAmJiAhYm9zc1ByZXNlbnQpKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteVNwYXduLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTmV3RW5lbXkoZW5lbXlEYXRhWzBdLCBFbmVteU9iamVjdCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcE9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMubGVuZ3RoIDwgMSAmJiAhdGhpcy5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlTaGlwT2JqZWN0LmxvYWRFbmVteWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuY29uY2F0KGVuZW15U2hpcE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNwYXduRW5lbXlMb2dpYyA9IHNwYXduRW5lbXlMb2dpYztcclxuZnVuY3Rpb24gY3JlYXRlTmV3RW5lbXkoZW5lbXlEYXRhLCBFbmVteU9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB4LCB5LCBzaGlwRGV0YWlscywgYmVoYXZpb3IsIGV4dHJhT2JqZWN0cywgX2EsIGNvbnRleHQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCArIDMwMCwgeSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIodGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCAtIDIwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15RGF0YS5kZXRhaWxzKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwRGV0YWlscyA9IGVuZW15RGF0YS5kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gKHNoaXBEZXRhaWxzLmJlaGF2aW9yKSA/IHNoaXBEZXRhaWxzLmJlaGF2aW9yW3RoaXMuZ2FtZVJhbmRvbWl6ZXIoc2hpcERldGFpbHMuYmVoYXZpb3IubGVuZ3RoKV0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHNoaXBEZXRhaWxzLmV4dHJhT2JqZWN0cykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxvYWRFeHRyYU9iamVjdC5jYWxsKHRoaXMsIHNoaXBEZXRhaWxzLmV4dHJhT2JqZWN0cyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhT2JqZWN0cyA9IF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgRW5lbXlPYmplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogeCwgeTogeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4OiBzaGlwRGV0YWlscy5zeCwgc3k6IHNoaXBEZXRhaWxzLnN5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc1dpZHRoOiBzaGlwRGV0YWlscy5pbWFnZVdpZHRoIC8gc2hpcERldGFpbHMubnVtYmVyT2ZJdGVtcywgc0hlaWdodDogc2hpcERldGFpbHMuaW1hZ2VIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc1dpZHRoOiBzaGlwRGV0YWlscy5pbWFnZVdpZHRoLCBudW1iZXJPZkl0ZW1zOiBzaGlwRGV0YWlscy5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNoaXBEZXRhaWxzLndpZHRoLCBoZWlnaHQ6IHNoaXBEZXRhaWxzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUZXh0dXJlOiBzaGlwRGV0YWlscy5za2luTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiBzaGlwRGV0YWlscy5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc2hpcERldGFpbHMuc3RhdHVzLCBuYW1lOiBzaGlwRGV0YWlscy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0VHlwZU51bWJlcjogc2hpcERldGFpbHMuYnVsbGV0VHlwZSwgcmFwaWRGaXJlOiBzaGlwRGV0YWlscy5yYXBpZEZpcmUsIHBvaW50c1BlclVuaXQ6IHNoaXBEZXRhaWxzLnBvaW50c1BlclVuaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogc2hpcERldGFpbHMuaGVhbHRoUG9pbnQsIGFuaW1hdGlvblN0ZXBzOiBzaGlwRGV0YWlscy5hbmltYXRpb25TdGVwcywgZGFtYWdlOiBzaGlwRGV0YWlscy5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogc2hpcERldGFpbHMub2JqZWN0T3duZXIsIGd1bnM6IChzaGlwRGV0YWlscy5ndW5zKSA/IHNoaXBEZXRhaWxzLmd1bnMgOiBbXSwgZXhwbG9zaW9uOiBzaGlwRGV0YWlscy5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IHNoaXBEZXRhaWxzLm51bWJlck9mVmVydGljYWxJdGVtcywgaXNNb3ZlOiBzaGlwRGV0YWlscy5pc01vdmUsIGlzU2hvb3Q6IHNoaXBEZXRhaWxzLmlzU2hvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG90RGlzdGFuY2U6IHNoaXBEZXRhaWxzLnNwb3REaXN0YW5jZSwgYmVoYXZpb3I6IGJlaGF2aW9yLCB2ZXJ0aWNhbFNwZWVkOiAoc2hpcERldGFpbHMudmVydGljYWxTcGVlZCkgPyBzaGlwRGV0YWlscy52ZXJ0aWNhbFNwZWVkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQm9zczogKHNoaXBEZXRhaWxzLmlzQm9zcykgPyBzaGlwRGV0YWlscy5pc0Jvc3MgOiBmYWxzZSwgZXh0cmFPYmplY3RzOiBleHRyYU9iamVjdHMgLy8gbG9hZCBjb2luIGVsZW1lbnQgZnJvbSBzZXJ2ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld0VuZW15ID0gY3JlYXRlTmV3RW5lbXk7XHJcbmZ1bmN0aW9uIGxvYWRFeHRyYU9iamVjdChleHRyYU9iamVjdHMpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmFuZG9tT2JqZWN0LCBsb2FkUHJvYmFiaWxpdHksIG51bWJlck9mRWxlbWVudCwgcmVzdWx0LCBjYWxsT2JqZWN0LCBpO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbU9iamVjdCA9IGV4dHJhT2JqZWN0c1t0aGlzLmdhbWVSYW5kb21pemVyKGV4dHJhT2JqZWN0cy5sZW5ndGgpXSwgbG9hZFByb2JhYmlsaXR5ID0gdGhpcy5nYW1lUmFuZG9taXplcihyYW5kb21PYmplY3QucmFuZG9tdWl6ZXIpLCBudW1iZXJPZkVsZW1lbnQgPSB0aGlzLmdhbWVSYW5kb21pemVyKHJhbmRvbU9iamVjdC5tYXhOdW1iZXIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoeyB1cmw6IHByb2Nlc3MuZW52LkhPU1QgKyBcImFwaS9ncmFwcGxlLW9iamVjdHNcIiwgbWV0aG9kOiBcIkdFVFwiLCBkYXRhOiBudWxsLCBoZWFkZXJzOiB7ICdncmFwcGxlT2JqZWN0JzogcmFuZG9tT2JqZWN0Lm9iamVjdCB9IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYWxsT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNhbGxPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkRXh0cmFPYmplY3QgPSBsb2FkRXh0cmFPYmplY3Q7XHJcbmZ1bmN0aW9uIGdhbWVSYW5kb21pemVyKG1heE51bWJlciwgbWluTnVtYmVyKSB7XHJcbiAgICBpZiAobWluTnVtYmVyID09PSB2b2lkIDApIHsgbWluTnVtYmVyID0gMDsgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bWJlciArIG1pbk51bWJlcik7XHJcbn1cclxuZXhwb3J0cy5nYW1lUmFuZG9taXplciA9IGdhbWVSYW5kb21pemVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxudmFyIGdhbWVSZXN1bHRNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2dhbWVSZXN1bHRNb2R1bGVcIik7XHJcbnZhciBzYXRhcnRHYW1lXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVNb2R1bGVzL3NhdGFydEdhbWVcIik7XHJcbmZ1bmN0aW9uIHNob3coZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbmV4cG9ydHMuc2hvdyA9IHNob3c7XHJcbmZ1bmN0aW9uIGhpZGUoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZXhwb3J0cy5oaWRlID0gaGlkZTtcclxuZnVuY3Rpb24gdG9nZ2xlcihlbCkge1xyXG4gICAgKGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSA/IHNob3coZWwpIDogaGlkZShlbCk7XHJcbn1cclxuZXhwb3J0cy50b2dnbGVyID0gdG9nZ2xlcjtcclxuZnVuY3Rpb24gYWRkQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLmFkZENsYXNzTGlzdCA9IGFkZENsYXNzTGlzdDtcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGlmICghZWwuY2xhc3NMaXN0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLnJlbW92ZUNsYXNzTGlzdCA9IHJlbW92ZUNsYXNzTGlzdDtcclxuZnVuY3Rpb24gYXBwTWVudShnYW1lT2JqZWN0LCBkaWFsb2dXaW5kb3cpIHtcclxuICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gbnVsbDtcclxuICAgIHZhciBuYXZpZ2F0aW9uID0ge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWRNZW51SXRlbTogc2VsZWN0ZWRNZW51SXRlbSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25UZW1wbGF0ZTogJy5zZWN0aW9uLXRlbXBsYXRlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXI6ICcjd3JhcHBlcicsXHJcbiAgICAgICAgICAgICAgICBzaWRlTWVudVdyYXBwZXI6ICcjbWFpbi1tZW51J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbXBvcnRTZWN0aW9uc1RvRE9NOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImltcG9ydFwiXScpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKG5hdmlnYXRpb24ubWVudS5jb25zdGFudHMuc2VjdGlvblRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2aWdhdGlvbi5tZW51LmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyKS5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0TWVudU9uQ2xpY2tFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkFjdG9uKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJ1dHRvbkFjdG9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5kYXRhc2V0LnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5zaG93U2VjdGlvbi5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2VsZWN0aW9uKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuZGF0YXNldC5zZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYW1lLXJlc3VsdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHRNb2R1bGVfMS5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2dhbWUtcmVzdWx0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdleGl0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVyKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ0V4aXQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdvaycgfSwgc2F0YXJ0R2FtZV8xLmV4aXRUaGVHYW1lLCBuYXZpZ2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaGlkZUFsbFNlY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWVudVNlbGVjdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09IFwiTElcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUFyZWEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkLWl0ZW1zXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8xID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVBcmVhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KG1lbnVJdGVtLCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQgIT0gXCJjbG9zZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImNhbmNlbFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImV4aXRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQpID8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBzZWxlY3RlZE1lbnVJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzc0xpc3QoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQsIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93U2VjdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbklkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIHNob3coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHNlY3Rpb25JZCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8yID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVBcmVhXzJbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzTGlzdChpdGVtLCBcIm1lbnUtYmFja2dyb3VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFnZXNCdWlsZGVyXzEucGFnZUJ1aWxkZXIoeyB0YXJnZXQ6IFwiI2Fib3V0LXNlY3Rpb24tY29udGVudFwiLCBkYXRhOiBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldExvY2FsRGF0YSh7IGZpbGVOYW1lOiAnYWJvdXQtcGFnZS5qc29uJyB9KSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUFsbFNlY3Rpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbk5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyICsgXCIgc2VjdGlvblwiKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlY3Rpb25Ob2Rlc18xID0gc2VjdGlvbk5vZGVzOyBfaSA8IHNlY3Rpb25Ob2Rlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VjdGlvbk5vZGVzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUJhY2tncm91bmRBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBtZW51QmFja2dyb3VuZEFyZWFfMSA9IG1lbnVCYWNrZ3JvdW5kQXJlYTsgX2EgPCBtZW51QmFja2dyb3VuZEFyZWFfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVCYWNrZ3JvdW5kQXJlYV8xW19hXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QoaXRlbSwgXCJtZW51LWJhY2tncm91ZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBtZW51QXJlYV8zID0gbWVudUFyZWE7IF9iIDwgbWVudUFyZWFfMy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV8zW19iXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0U2VjdGlvbnNUb0RPTSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZW51T25DbGlja0V2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xyXG59XHJcbmV4cG9ydHMuYXBwTWVudSA9IGFwcE1lbnU7XHJcbmZ1bmN0aW9uIGhpZGVTaG93TWVudShtYWluTWVudSwgbmF2aWdhdGlvbk1lbnUsIGdhbWVXaW4sIGdhbWVTdGF0dXMsIGdhbWVVaVBhdXNlKSB7XHJcbiAgICBpZiAoIWdhbWVTdGF0dXMgfHwgZ2FtZVVpUGF1c2UpIHtcclxuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1tZW51XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGUtbWVudVwiKTtcclxuICAgICAgICBuYXZpZ2F0aW9uTWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmhpZGVTaG93TWVudSA9IGhpZGVTaG93TWVudTtcclxuZnVuY3Rpb24gZGlhbG9nV2luZG93KF9hLCBjYWxsYmFjaywgbmF2aWdhdGlvbikge1xyXG4gICAgdmFyIHRleHREYXRhID0gX2EudGV4dERhdGEsIHJlamVjdFRleHQgPSBfYS5yZWplY3RUZXh0LCBhY2NlcHRUZXh0ID0gX2EuYWNjZXB0VGV4dDtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLWJveFwiKTtcclxuICAgIHZhciBkaWFsb2dCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1ib2R5Jyk7XHJcbiAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gKG5hdmlnYXRpb24pID8gbmF2aWdhdGlvbi5zaG93U2VsZWN0ZWRJdGVtKCkgOiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29rJzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV80ID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfNC5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV80W19pXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRNZW51SXRlbS5zZWxlY3RlZE1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3NMaXN0KHNlbGVjdGVkTWVudUl0ZW0uc2VsZWN0ZWRNZW51SXRlbSwgXCJzZWxlY3RlZC1pdGVtc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZXN0YXJ0JzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwuYXBwbHkoY2FsbGJhY2ssIHJlc3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgc2hvdyh3aW5kb3dFbGVtZW50KTtcclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogXCJhY2NlcHQtYnRuIGJ0bi1tYWluXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLXRleHRcXFwiPlwiICsgdGV4dERhdGEgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1idXR0b24tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1idG4tYXJlYVxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWJ1dHRvbi1pZD1cIiArIGFjY2VwdFRleHQgKyBcIiBjbGFzcz1cXFwiYWNjZXB0LWJ0biBidG4tbWFpblxcXCI+XCIgKyBhY2NlcHRUZXh0ICsgXCI8L2J1dHRvbj5cXG4gICAgICAgICAgIDxidXR0b24gZGF0YS1idXR0b24taWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcInJlamVjdC1idG4gYnRuLW1haW5cXFwiPmNhbmNlbDwvYnV0dG9uPlxcbiAgICAgICA8L2Rpdj5cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ2RhdGEtYnV0dG9uLWlkJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2IgPSAwLCBkaWFsb2dEYXRhXzEgPSBkaWFsb2dEYXRhOyBfYiA8IGRpYWxvZ0RhdGFfMS5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGRpYWxvZ0RhdGFfMVtfYl07XHJcbiAgICAgICAgZGlhbG9nQm9keS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBkaWFsb2dCdXR0b25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idXR0b24tYXJlYScpO1xyXG4gICAgZGlhbG9nQnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpYWxvZ0J1dHRvbkV2ZW50KTtcclxufVxyXG5leHBvcnRzLmRpYWxvZ1dpbmRvdyA9IGRpYWxvZ1dpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51XCIpO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gc2hvd1Jlc3VsdFNjcmVlbigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd2luZG93RWxlbWVudCwgZ2FtZURhdGEsIGluZGV4LCBfbG9vcF8xLCBfaSwgZ2FtZURhdGFfMSwgaXRlbTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcmVzdWx0LWFyZWEnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZURhdGEuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1lc3NhZ2Utd3JhcHBlclxcXCI+PHA+XCIgKyBnYW1lRGF0YS5tZXNzYWdlICsgXCI8L3A+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfbG9vcF8xID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShpdGVtLnRpbWUpLCB5ZWFyID0gdGltZS5nZXRGdWxsWWVhcigpLCBtb250aCA9IHRpbWUuZ2V0VVRDTW9udGgoKSArIDEsIGRheSA9IHRpbWUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IFwibGlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwid2lubmVyLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxwIGNsYXNzPVxcXCJzaW5nbGUtaXRlbVxcXCI+PHNwYW4gY2xhc3M9XFxcInJhdGUtbnVtYmVyXFxcIj5cIiArIGluZGV4ICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+bmFtZTo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpdGVtLW5hbWVcXFwiPiBcIiArIGl0ZW0udXNlck5hbWUgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5jb2luOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIml0ZW0tY29pblxcXCI+IFwiICsgaXRlbS5nYW1lQ29pbnMgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5zY29yZTo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpdGVtLXBvaW50c1xcXCI+IFwiICsgaXRlbS5nYW1lUG9pbnRzICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tZGF0ZVxcXCI+IFwiICsgeWVhciArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIGRheSArIFwiPC9zcGFuPjwvcD5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdkYXRhLWJ1dHRvbi1pZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93RWxlbWVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGdhbWVEYXRhXzEgPSBnYW1lRGF0YTsgX2kgPCBnYW1lRGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gZ2FtZURhdGFfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaG93UmVzdWx0U2NyZWVuID0gc2hvd1Jlc3VsdFNjcmVlbjtcclxuZnVuY3Rpb24gaW5pdFJlc3VsdFNjcmVlbihtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIHdpbmRvd0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1yZXN1bHQtYm94Jyk7XHJcbiAgICB2YXIgZm9ybUJ0blN3aXRjaGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idG4tc3dpdGNoZXItYXJlYVwiKTtcclxuICAgIHZhciBmb3JtTG9hZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2FkLWFyZWEnKTtcclxuICAgIGZvcm1Mb2FkQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9ybUJ0blN3aXRjaGVyQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgYXBwTWVudV8xLnNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICB2YXIgYnV0dG9uU3dpdGNoZXIgPSBbXHJcbiAgICAgICAgcGFnZXNCdWlsZGVyXzEuY3JlYXRlRWxlbWVudHMoe1xyXG4gICAgICAgICAgICB0YWdOYW1lOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiBcImFjY2VwdC1idG4gYnRuLW1haW5cIixcclxuICAgICAgICAgICAgaW5saW5lU3R5bGU6IG51bGwsXHJcbiAgICAgICAgICAgIHBpY3R1cmVVcmw6IG51bGwsXHJcbiAgICAgICAgICAgIGxpbmtVcmw6IG51bGwsXHJcbiAgICAgICAgICAgIHRleHQ6IFwidXBkYXRlIHBsYXllclwiLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZGF0YS1idG4taWRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBcInVwZGF0ZS1wbGF5ZXJcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICB9KSxcclxuICAgICAgICBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwiYWNjZXB0LWJ0biBidG4tbWFpbiBzZWxlY3RlZC1mb3JtXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIm5ldyBwbGF5ZXJcIixcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImRhdGEtYnRuLWlkXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJuZXctcGxheWVyXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGJ1dHRvblN3aXRjaGVyXzEgPSBidXR0b25Td2l0Y2hlcjsgX2kgPCBidXR0b25Td2l0Y2hlcl8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gYnV0dG9uU3dpdGNoZXJfMVtfaV07XHJcbiAgICAgICAgZm9ybUJ0blN3aXRjaGVyQXJlYS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJmb3JtXCIsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNhdmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCJcXG4gICAgICAgICAgICAgICAgPGgxPkNyZWF0ZSBuZXcgcGxheWVyPC9oMT5cXG4gICAgICAgICAgICAgICAgPHA+UGxlYXNlIGZpbGwgdGhlIGZpZWxkcyB0byBzYXZlIHlvdXIgcmVzdWx0PC9wPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3UgbmFtZTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmFtZVxcXCIgbWF4bGVuZ3RoPVxcXCIzMFxcXCIgbWlubGVuZ3RoPVxcXCIzXFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdSBuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFpbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgZW50ZXIgeW91IGVtYWlsPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYWlsXFxcIiBuYW1lPVxcXCJ1c2VyRW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGUgcGFzc3dvcmQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJ1c2VyUGFzc3dvcmRcXFwiIG1heGxlbmd0aD1cXFwiMjBcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3UgZW1haWwgYWRkcmVzc1xcXCI+XFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZGlhbG9nLWJvdHRvbS1hcmVhXFxcIiBjbGFzcz1cXFwiZGlhbG9nLWJvdHRvbS1hcmVhXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBkYXRhLWJ1dHRvbi1pZD1cXFwic2F2ZS1yZXN1bHRcXFwiIGNsYXNzPVxcXCJhY2NlcHQtYnRuIGJ0bi1tYWluXFxcIj5zYXZlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtYnV0dG9uLWlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJyZWplY3QtYnRuIGJ0bi1tYWluXFxcIj5jYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBcInNhdmUtcmVzdWx0LWZvcm1cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICB9KSxcclxuICAgICAgICBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiZm9ybVwiLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiBcIlwiLFxyXG4gICAgICAgICAgICBpbmxpbmVTdHlsZTogXCJkaXNwbGF5OiBub25lO1wiLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNhdmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCJcXG4gICAgICAgICAgICAgICAgICAgIDxoMT5VcGRhdGUgcGxheWVyPC9oMT5cXG4gICAgICAgICAgICAgICAgICAgIDxwPkVudGVyIGVtYWlsIGFuZCBwYXNzd29yZDwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1haWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3UgZW1haWw8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYWlsXFxcIiBuYW1lPVxcXCJ1c2VyRW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGUgcGFzc3dvcmQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwidXNlclBhc3N3b3JkXFxcIiBtYXhsZW5ndGg9XFxcIjIwXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1ib3R0b20tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1ib3R0b20tYXJlYVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGRhdGEtYnV0dG9uLWlkPVxcXCJzYXZlLXJlc3VsdFxcXCIgY2xhc3M9XFxcImFjY2VwdC1idG4gYnRuLW1haW5cXFwiPnNhdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtYnV0dG9uLWlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJyZWplY3QtYnRuIGJ0bi1tYWluXFxcIj5jYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnbmFtZScsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJyZXdyaXRlLXJlc3VsdC1mb3JtXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfYSA9IDAsIGRpYWxvZ0RhdGFfMSA9IGRpYWxvZ0RhdGE7IF9hIDwgZGlhbG9nRGF0YV8xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZGlhbG9nRGF0YV8xW19hXTtcclxuICAgICAgICBmb3JtTG9hZEFyZWEuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydzYXZlLXJlc3VsdC1mb3JtJ107XHJcbiAgICB2YXIgcmV3cml0ZUZvcm0gPSBkb2N1bWVudC5mb3Jtc1sncmV3cml0ZS1yZXN1bHQtZm9ybSddO1xyXG4gICAgdmFyIGZvcm1CdG5BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpYWxvZy1ib3R0b20tYXJlYScpO1xyXG4gICAgZm9ybUJ0blN3aXRjaGVyQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1Td2l0Y2hlcik7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1CdG5BcmVhLCBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlhbG9nQnV0dG9uRXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1BY3Rpb25Xcml0ZSk7XHJcbiAgICByZXdyaXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtQWN0aW9uVXBkYXRlKTtcclxuICAgIGZ1bmN0aW9uIGZvcm1Td2l0Y2hlcihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnRuSWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5ldy1wbGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5oaWRlKHJld3JpdGVGb3JtKTtcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5zaG93KGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgYXBwTWVudV8xLmFkZENsYXNzTGlzdChldmVudC50YXJnZXQsIFwic2VsZWN0ZWQtZm9ybVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBkYXRlLXBsYXllclwiOlxyXG4gICAgICAgICAgICAgICAgYXBwTWVudV8xLmhpZGUoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuc2hvdyhyZXdyaXRlRm9ybSk7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuYWRkQ2xhc3NMaXN0KGV2ZW50LnRhcmdldCwgXCJzZWxlY3RlZC1mb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhbmNlbCc6XHJcbiAgICAgICAgICAgICAgICBmb3JtTG9hZEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5oaWRlKHdpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWN0aW9uV3JpdGUoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtUmVzdWx0LCByZXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1SZXN1bHQgPSB0cmFuc2ZlckRhdGFUb09iamVjdCh0aGlzLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm9ybVJlc3VsdCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwcm9jZXNzLmVudi5IT1NUICsgJ2FwaS9nYW1lLXJlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybVJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRm9ybU1lc3NhZ2UoeyBtZXNzYWdlOiByZXMubWVzc2FnZSwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZvcm1NZXNzYWdlKHsgbWVzc2FnZTogXCJJIGNhbnQgc2VuZCB0aGlzLCBwbGVhc2UgY2hlY2sgZm9ybSBhZ2FpblwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWN0aW9uVXBkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybVJlc3VsdCwgcmVzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtUmVzdWx0ID0gdHJhbnNmZXJEYXRhVG9PYmplY3QodGhpcywgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcm1SZXN1bHQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybVJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRm9ybU1lc3NhZ2UoeyBtZXNzYWdlOiByZXMubWVzc2FnZSwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZvcm1NZXNzYWdlKHsgbWVzc2FnZTogXCJJIGNhbnQgc2VuZCB0aGlzLCBwbGVhc2UgY2hlY2sgZm9ybSBhZ2FpblwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlcnJvckZvcm1NZXNzYWdlKF9hKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBfYS5tZXNzYWdlLCBzdGF0dXMgPSBfYS5zdGF0dXM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGVydC1tZXNzYWdlXCIpO1xyXG4gICAgICAgIHZhciBhbGVydFRleHQgPSBcIlwiO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWplY3RcIjpcclxuICAgICAgICAgICAgICAgIGFsZXJ0VGV4dCA9IFwiPHAgY2xhc3M9XFxcInJlamVjdC10ZXh0XFxcIj5cIiArIG1lc3NhZ2UgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2FybmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgYWxlcnRUZXh0ID0gXCI8cCBjbGFzcz1cXFwid2FybmluZy10ZXh0XFxcIj5cIiArIG1lc3NhZ2UgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICAgICAgICAgICAgYWxlcnRUZXh0ID0gXCI8cCBjbGFzcz1cXFwic3VjY2Vzcy10ZXh0XFxcIj5cIiArIG1lc3NhZ2UgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIHJld3JpdGVGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGFsZXJ0VGV4dCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRzKTtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gYWxlcnRUZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW5pdFJlc3VsdFNjcmVlbiA9IGluaXRSZXN1bHRTY3JlZW47XHJcbmZ1bmN0aW9uIHRyYW5zZmVyRGF0YVRvT2JqZWN0KGRhdGEsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBkYXRhIHRvIHRyYW5zZm9ybVwiKTtcclxuICAgIHZhciBvYmogPSB7IHVzZXJOYW1lOiBudWxsLCB1c2VyRW1haWw6IG51bGwsIGdhbWVQb2ludHM6IG51bGwsIGdhbWVDb2luczogbnVsbCwgdXNlclBhc3N3b3JkOiBudWxsIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFfMSA9IGRhdGE7IF9pIDwgZGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZGF0YV8xW19pXTtcclxuICAgICAgICBpZiAoaXRlbS5uYW1lICYmIGl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpdGVtLm5hbWUgJiYgIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBnYW1lRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIG9iai5nYW1lUG9pbnRzID0gZ2FtZURhdGEucG9pbnRzO1xyXG4gICAgb2JqLmdhbWVDb2lucyA9IGdhbWVEYXRhLmdhbWVDb2lucztcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHBhZ2VCdWlsZGVyKF9hKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gX2EudGFyZ2V0LCBkYXRhID0gX2EuZGF0YTtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2IsIHRhcmdldE5vZGU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sICF0YXJnZXRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gKF9jLnNlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9iKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCAhZGF0YV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSAoX2Muc2VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9iKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImNhbnQgZmV0Y2ggdGhlIGRhdGFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGRhdGFfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3T2JqZWN0ID0gY3JlYXRlRWxlbWVudHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IGl0ZW0udGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M6IGl0ZW0uY2xhc3NsaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlOiBpdGVtLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVVcmw6IGl0ZW0uaW1hZ2VMaW5rLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IGl0ZW0ubGluayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckNvbnRlbnQ6IGl0ZW0uaHRtbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogbnVsbCwgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKG5ld09iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucGFnZUJ1aWxkZXIgPSBwYWdlQnVpbGRlcjtcclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudHMoX2EpIHtcclxuICAgIHZhciB0YWdOYW1lID0gX2EudGFnTmFtZSwgc3R5bGVDbGFzcyA9IF9hLnN0eWxlQ2xhc3MsIGlubGluZVN0eWxlID0gX2EuaW5saW5lU3R5bGUsIHBpY3R1cmVVcmwgPSBfYS5waWN0dXJlVXJsLCBsaW5rVXJsID0gX2EubGlua1VybCwgdGV4dCA9IF9hLnRleHQsIGlubmVyQ29udGVudCA9IF9hLmlubmVyQ29udGVudCwgYXR0cmlidXRlTmFtZSA9IF9hLmF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZSA9IF9hLmF0dHJpYnV0ZSwgYXR0cmlidXRlTmFtZTEgPSBfYS5hdHRyaWJ1dGVOYW1lMSwgYXR0cmlidXRlMSA9IF9hLmF0dHJpYnV0ZTE7XHJcbiAgICB2YXIgcmVzdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICByZXN0W19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgKHN0eWxlQ2xhc3MpID8gZWxlbWVudC5jbGFzc05hbWUgPSBzdHlsZUNsYXNzIDogZmFsc2U7XHJcbiAgICAoaW5saW5lU3R5bGUpID8gZWxlbWVudC5zdHlsZSA9IGlubGluZVN0eWxlIDogZmFsc2U7XHJcbiAgICAodGFnTmFtZSA9PT0gXCJpbWdcIiAmJiBwaWN0dXJlVXJsKSA/IGVsZW1lbnQuc3JjID0gX19kaXJuYW1lICsgcGljdHVyZVVybCA6IGZhbHNlO1xyXG4gICAgKHRleHQpID8gZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0IDogZmFsc2U7XHJcbiAgICAoaW5uZXJDb250ZW50KSA/IGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50IDogZmFsc2U7XHJcbiAgICAoYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGUpID8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlKSA6IGZhbHNlO1xyXG4gICAgKGF0dHJpYnV0ZU5hbWUxICYmIGF0dHJpYnV0ZTEpID8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTEsIGF0dHJpYnV0ZTEpIDogZmFsc2U7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUVsZW1lbnRzID0gY3JlYXRlRWxlbWVudHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYnVsbGV0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9idWxsZXRzTW9kdWxlXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgQnVsbGV0Q29uc3RydWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnVsbGV0Q29uc3RydWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuYnVsbGV0VHlwZSA9IGRhdGEuYnVsbGV0VHlwZTtcclxuICAgICAgICB0aGlzLmJ1bGxldFRleHR1cmUgPSBkYXRhLmJ1bGxldFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IGRhdGEub2JqZWN0T3duZXI7XHJcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGRhdGEuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhdGEuZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IF9fZGlybmFtZSArIGRhdGEudGV4dHVyZTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IGRhdGEuZXhwbG9zaW9uO1xyXG4gICAgICAgIHRoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEuaW1hZ2VXaWR0aDtcclxuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gZGF0YS5pbWFnZUhlaWdodDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXBzID0gZGF0YS5hbmltYXRpb25TdGVwcztcclxuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXMgPSBkYXRhLm51bWJlck9mSXRlbXM7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgPSBkYXRhLm51bWJlck9mVmVydGljYWxJdGVtcztcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IGRhdGEuc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IGRhdGEuc0hlaWdodDtcclxuICAgICAgICAvL3RoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEucGljdHVyZXNXaWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBCdWxsZXRDb25zdHJ1Y3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQnVsbGV0Q29uc3RydWN0ID0gQnVsbGV0Q29uc3RydWN0O1xyXG4vKlxyXG50aGlzLmltZyxcclxuICAgICAgICB0aGlzLnN4LCB0aGlzLnN5LFxyXG4gICAgICAgIHRoaXMuc1dpZHRoLCB0aGlzLnNIZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LCB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCx0aGlzLmhlaWdodFxyXG5cclxuXHJcbnRoaXMuc3ggPSBkYXRhLnN4OyB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICAgICAgdGhpcy5zV2lkdGggPSBkYXRhLnNXaWR0aDsgdGhpcy5zSGVpZ2h0ID0gZGF0YS5zSGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7IHRoaXMubnVtYmVyT2ZJdGVtcyA9IGRhdGEubnVtYmVyT2ZJdGVtcztcclxuXCJpbWFnZVdpZHRoXCI6IDM1ODcsXHJcblwiaW1hZ2VIZWlnaHRcIjoxMDksXHJcbiAgICAgICAgICAgICAgICBcImFuaW1hdGlvblN0ZXBzXCI6IDUsXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlck9mSXRlbXNcIjogMTIsXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlck9mVmVydGljYWxJdGVtc1wiOiAxLFxyXG4gICAgICAgICAgICAqL1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLmNyZWF0ZUJ1bGxldHMgPSBidWxsZXRzTW9kdWxlXzEuY3JlYXRlQnVsbGV0cztcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS5pbml0QnVsbGV0cyA9IGJ1bGxldHNNb2R1bGVfMS5pbml0QnVsbGV0cztcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS5tb3ZlQnVsbGV0cyA9IGJ1bGxldHNNb2R1bGVfMS5tb3ZlQnVsbGV0cztcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS5nZXRPYmplY3RQb3NpdGlvbiA9IGVuZ2luZU1vZHVsZXNfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLmVuZW15QW5pbWF0aW9uID0gZW5lbWllc01vZHVsZXNfMS5lbmVteUFuaW1hdGlvbjtcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS5wbGFjZUVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLnBsYWNlRW5lbXllcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBlbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmVcIik7XHJcbnZhciBFbmVteU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVuZW15T2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IGRhdGEuc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IGRhdGEuc0hlaWdodDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gZGF0YS5udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zaGlwVGV4dHVyZSA9IF9fZGlybmFtZSArIGRhdGEuc2hpcFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5idWxsZXRUeXBlTnVtYmVyID0gZGF0YS5idWxsZXRUeXBlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMucmFwaWRGaXJlID0gZGF0YS5yYXBpZEZpcmU7XHJcbiAgICAgICAgdGhpcy5wb2ludHNQZXJVbml0ID0gZGF0YS5wb2ludHNQZXJVbml0O1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcHMgPSBkYXRhLmFuaW1hdGlvblN0ZXBzO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGF0YS5kYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5ndW5zID0gZGF0YS5ndW5zO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IGRhdGEub2JqZWN0T3duZXI7XHJcbiAgICAgICAgdGhpcy5ndW5zID0gZGF0YS5ndW5zO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gZGF0YS5leHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgPSBkYXRhLm51bWJlck9mVmVydGljYWxJdGVtcztcclxuICAgICAgICB0aGlzLm9yaWdpbmFsSGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50O1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZGF0YS5pc01vdmU7XHJcbiAgICAgICAgdGhpcy5pc1Nob290ID0gZGF0YS5pc1Nob290O1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTcGVlZCA9IChkYXRhLnZlcnRpY2FsU3BlZWQpID8gZGF0YS52ZXJ0aWNhbFNwZWVkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcGVlZCArIDEpO1xyXG4gICAgICAgIHRoaXMuc3BvdERpc3RhbmNlID0gKGRhdGEuaXNCb3NzKSA/IGRhdGEuc3BvdERpc3RhbmNlIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcG90RGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0gMDtcclxuICAgICAgICB0aGlzLnhGaW5hbCA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IGRhdGEuYmVoYXZpb3I7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNCb3NzID0gZGF0YS5pc0Jvc3M7XHJcbiAgICAgICAgdGhpcy5leHRyYU9iamVjdHMgPSBkYXRhLmV4dHJhT2JqZWN0cztcclxuICAgICAgICAvLy8gbG9hZCBhbW91bnQgZm8gY29pbnMsIGFuZG8gY29pbnMgb2JqZWN0IGZyb20gc2VydmVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW5lbXlPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW5lbXlPYmplY3QgPSBFbmVteU9iamVjdDtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnBsYWNlRW5lbXllcyA9IGVuZW1pZXNNb2R1bGVzXzEucGxhY2VFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUubW92ZUVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLm1vdmVFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUubG9hZEVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLmxvYWRFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuc2hvb3QgPSBlbmVtaWVzTW9kdWxlc18xLnNob290O1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15QW5pbWF0aW9uO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZ2V0T2JqZWN0UG9zaXRpb24gPSBlbmdpbmVfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15RGFtYWdlQW5pbWF0aW9uID0gZW5lbWllc01vZHVsZXNfMS5lbmVteURhbWFnZUFuaW1hdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15U2hpcExvZ2ljVmVydGljYWwgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5lbmVteVNoaXBMb2dpY1ZlcnRpY2FsO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbiA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb247XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuc3Bhd25Db2luID0gZW5lbWllc01vZHVsZXNfMS5zcGF3bkNvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4vZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3RvclwiKTtcclxudmFyIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBHcmFwcGxlT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdyYXBwbGVPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHcmFwcGxlT2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbih7fSwgZGF0YSkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaXNHcmFwcGxlID0gZGF0YS5pc0dyYXBwbGU7XHJcbiAgICAgICAgX3RoaXMuZ3JhcHBsZVBvd2VyID0gZGF0YS5ncmFwcGxlUG93ZXI7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdyYXBwbGVPYmplY3Q7XHJcbn0oZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3Rvcl8xLlNpZGVPYmplY3QpKTtcclxuZXhwb3J0cy5HcmFwcGxlT2JqZWN0ID0gR3JhcHBsZU9iamVjdDtcclxuR3JhcHBsZU9iamVjdC5wcm90b3R5cGUuYWRkUGxheWVyTGlmZSA9IGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xLmFkZFBsYXllckxpZmU7XHJcbkdyYXBwbGVPYmplY3QucHJvdG90eXBlLmNvbGxlY3RDb2luID0gZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEuY29sbGVjdENvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbmVteU1vZHVsZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2VuZW1pZXNcIikpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIFNpZGVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaWRlT2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuc3ggPSBkYXRhLnN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBkYXRhLnN5O1xyXG4gICAgICAgIHRoaXMuc1dpZHRoID0gZGF0YS5zV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zSGVpZ2h0ID0gZGF0YS5zSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBfX2Rpcm5hbWUgKyBkYXRhLnRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwcyA9IGRhdGEuYW5pbWF0aW9uU3RlcHM7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gZGF0YS5udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZGF0YS50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAoZGF0YS5kYW1hZ2UpID8gZGF0YS5kYW1hZ2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqZWN0T3duZXIgPSAoZGF0YS5vYmplY3RPd25lcikgPyBkYXRhLm9iamVjdE93bmVyIDogbnVsbDtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gKGRhdGEuaGVhbHRoUG9pbnQpID8gZGF0YS5oZWFsdGhQb2ludCA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSAoZGF0YS5pc0JhY2tncm91bmQpID8gZGF0YS5pc0JhY2tncm91bmQgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gKGRhdGEuZXhwbG9zaW9uKSA/IGRhdGEuZXhwbG9zaW9uIDogbnVsbDtcclxuICAgICAgICB0aGlzLnBvaW50c1BlclVuaXQgPSAoZGF0YS5wb2ludHNQZXJVbml0KSA/IGRhdGEucG9pbnRzUGVyVW5pdCA6IDA7XHJcbiAgICAgICAgdGhpcy5leHRyYU9iamVjdHMgPSAoZGF0YS5leHRyYU9iamVjdHMpID8gZGF0YS5leHRyYU9iamVjdHMgOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNpZGVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2lkZU9iamVjdCA9IFNpZGVPYmplY3Q7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLmVuZW15QW5pbWF0aW9uID0gZW5lbXlNb2R1bGVzLmVuZW15QW5pbWF0aW9uO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5wbGFjZUVuZW15ZXMgPSBlbmVteU1vZHVsZXMucGxhY2VFbmVteWVzO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5maXJlQW5pbWF0aW9uRW5kZWQgPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5maXJlQW5pbWF0aW9uRW5kZWQ7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLm1hcE9iamVjdE1vdmUgPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5tYXBPYmplY3RNb3ZlO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5lbmVteURhbWFnZUFuaW1hdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuZW5lbXlEYW1hZ2VBbmltYXRpb247XHJcblNpZGVPYmplY3QucHJvdG90eXBlLnNwYXduQ29pbiA9IGVuZW1pZXNNb2R1bGVzXzEuc3Bhd25Db2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWFpbkdhbWVDb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sZXZlbENvbnN0cnVjdG9yc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VuZW15Q29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi91c2VyQ29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9idWxsZXRDb25zdHJ1Y3RvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhbWVTaWRlT2JqZWN0Q29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lR3JhcHBsZU9iamVjdHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgYmFja2dyb3VuZE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9iYWNrZ3JvdW5kTW9kdWxlXCIpO1xyXG52YXIgR2FtZUJhY2tncm91bmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lQmFja2dyb3VuZChiYWNrZ3JvdW5kVGV4dHVyZSwgYmFja2dyb3VuZFNwZWVkLCBzY3JlZW5EYXRhLCBjdHgsIHBhcnRPZlNjcmVlblN0YXR1cywgZXh0cmFNYXAsIHRpbWVUb0V4dHJhTWFwU2Vjb25kcywgdGltZVRvRXh0cmFNYXBNaW51dGVzKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUgPSBiYWNrZ3JvdW5kVGV4dHVyZTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRTcGVlZCA9IGJhY2tncm91bmRTcGVlZDtcclxuICAgICAgICB0aGlzLnNjcmVlbkRhdGEgPSBzY3JlZW5EYXRhO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMueCA9IChwYXJ0T2ZTY3JlZW5TdGF0dXMpID8gMCA6IHNjcmVlbkRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuZXh0cmFNYXAgPSBleHRyYU1hcDtcclxuICAgICAgICB0aGlzLnRpbWVUb0VyZXNzTGV2ZWwgPSA0O1xyXG4gICAgICAgIHRoaXMud2FycE9iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRpbWVUb0V4dHJhTWFwU2Vjb25kcyA9IHRpbWVUb0V4dHJhTWFwU2Vjb25kcztcclxuICAgICAgICB0aGlzLnRpbWVUb0V4dHJhTWFwTWludXRlcyA9IHRpbWVUb0V4dHJhTWFwTWludXRlcztcclxuICAgIH1cclxuICAgIHJldHVybiBHYW1lQmFja2dyb3VuZDtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lQmFja2dyb3VuZCA9IEdhbWVCYWNrZ3JvdW5kO1xyXG5HYW1lQmFja2dyb3VuZC5wcm90b3R5cGUudXBkYXRlTWFwID0gYmFja2dyb3VuZE1vZHVsZV8xLnVwZGF0ZU1hcDtcclxuR2FtZUJhY2tncm91bmQucHJvdG90eXBlLndhcnBFZmZlY3QgPSBlbmdpbmVNb2R1bGVzXzEud2FycEVmZmVjdDtcclxuR2FtZUJhY2tncm91bmQucHJvdG90eXBlLmNoYW5nZVBhcnRPZlRleHR1cmUgPSBiYWNrZ3JvdW5kTW9kdWxlXzEuY2hhbmdlUGFydE9mVGV4dHVyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9pbXBvcnQgeyB2aWV3TW9kdWxlcyB9IGZyb20gJy4uL3ZpZXcvZGlzcGxheU1vZHVsZXMnO1xyXG52YXIgcmVndWxhckVuZW15QWlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vYWkvcmVndWxhckVuZW15QWlNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgY2hhbmdlTGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVNb2R1bGVzL2NoYW5nZUxldmVsc1wiKTtcclxudmFyIGVuZ2luZU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIHBsYXllclNoaXBNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvcGxheWVyU2hpcE1vZHVsZVwiKTtcclxudmFyIGdhbWVVaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi91aS9nYW1lVWlNb2R1bGVzXCIpO1xyXG52YXIgc2F0YXJ0R2FtZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lXCIpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShnYW1lSW5pdERhdGEpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YSA9IGdhbWVJbml0RGF0YTtcclxuICAgIH1cclxuICAgIEdhbWUucHJvdG90eXBlLmNoYW5nZUxldmVsID0gZnVuY3Rpb24gKG5leHRMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbCA9IG5leHRMZXZlbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dHYW1lSW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZXZlbFRvQ2hhbmdlOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQb2ludDogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudFBvaW50LFxyXG4gICAgICAgICAgICBnYW1lRGF0YTogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEsXHJcbiAgICAgICAgICAgIGltYWdlRGlycmVjdGlvbjogX19kaXJuYW1lICsgJy9wdWJsaWMvaW1hZ2VzLycsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93TGV2ZWxEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbERhdGE7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmV0dXJuQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVBY3Rpb25GaWVsZCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRmllbGQsXHJcbiAgICAgICAgICAgICAgICBnYW1lQWN0aW9uRmllbGQ6IHRoaXMuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZ2FtZVVJRmllbGQ6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWUgPSBHYW1lO1xyXG5HYW1lLnByb3RvdHlwZS5jcmVhdGVDb250ZXh0ID0gZW5naW5lTW9kdWxlc18xLmNyZWF0ZUNvbnRleHQ7XHJcbkdhbWUucHJvdG90eXBlLmluaXRGaWVsZCA9IGVuZ2luZU1vZHVsZXNfMS5pbml0RmllbGQ7XHJcbkdhbWUucHJvdG90eXBlLmxldmVsSW5pdCA9IGVuZ2luZU1vZHVsZXNfMS5sZXZlbEluaXQ7IC8vIGNyZWF0ZUNvbnRleHQgaW5pdFBsYXllclNoaXBcclxuR2FtZS5wcm90b3R5cGUuc2V0R2FtZUZpZWxkcyA9IGVuZ2luZU1vZHVsZXNfMS5zZXRHYW1lRmllbGRzO1xyXG5HYW1lLnByb3RvdHlwZS53YXJwRWZmZWN0ID0gZW5naW5lTW9kdWxlc18xLndhcnBFZmZlY3Q7IC8vIHdhcnBFZmZlY3RcclxuR2FtZS5wcm90b3R5cGUuZ2V0U2NyZWVuU2l6ZSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRTY3JlZW5TaXplO1xyXG5HYW1lLnByb3RvdHlwZS5nZXRMZXZlbFVzZXJEYXRhID0gZW5naW5lTW9kdWxlc18xLmdldExldmVsVXNlckRhdGE7XHJcbkdhbWUucHJvdG90eXBlLmxldmVsVGltZXIgPSBlbmdpbmVNb2R1bGVzXzEubGV2ZWxUaW1lcjtcclxuR2FtZS5wcm90b3R5cGUuZ2V0U2Vjb25kTWVhc3VyZSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRTZWNvbmRNZWFzdXJlO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lU2Vjb25kc0luY3JlYXNlID0gZW5naW5lTW9kdWxlc18xLmdhbWVTZWNvbmRzSW5jcmVhc2U7XHJcbkdhbWUucHJvdG90eXBlLmluaXRQbGF5ZXJTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLmluaXRQbGF5ZXJTaGlwO1xyXG4vL0dhbWUucHJvdG90eXBlLnBsYWNlUGxheWVyU2hpcCA9IHBsYWNlUGxheWVyU2hpcDtcclxuR2FtZS5wcm90b3R5cGUuZGVsZXRlQnVsbGV0ID0gZW5naW5lTW9kdWxlc18xLmRlbGV0ZUJ1bGxldDtcclxuR2FtZS5wcm90b3R5cGUuZGVsZXRlT2JqZWN0cyA9IGVuZ2luZU1vZHVsZXNfMS5kZWxldGVPYmplY3RzO1xyXG5HYW1lLnByb3RvdHlwZS5kZWxhdGVTaWRlT2JqZWN0ID0gZW5naW5lTW9kdWxlc18xLmRlbGF0ZVNpZGVPYmplY3Q7XHJcbkdhbWUucHJvdG90eXBlLmhpdERldGVjdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuaGl0RGV0ZWN0aW9uO1xyXG5HYW1lLnByb3RvdHlwZS5jb2xsZWN0UG9pbnRzID0gZW5naW5lTW9kdWxlc18xLmNvbGxlY3RQb2ludHM7XHJcbkdhbWUucHJvdG90eXBlLnNwYXduRW5lbXlMb2dpYyA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLnNwYXduRW5lbXlMb2dpYztcclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlTmV3RW5lbXkgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5jcmVhdGVOZXdFbmVteTtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVJhbmRvbWl6ZXIgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5nYW1lUmFuZG9taXplcjtcclxuR2FtZS5wcm90b3R5cGUudWlDb250cm9sbGVyID0gZ2FtZVVpTW9kdWxlc18xLnVpQ29udHJvbGxlcjtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVVpUGF1c2UgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVVpUGF1c2U7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVVaU1lbnUgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVVpTWVudTtcclxuR2FtZS5wcm90b3R5cGUuc2hvd01lbnVXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd01lbnVXaW5kb3c7XHJcbkdhbWUucHJvdG90eXBlLnNob3dVaVBvcHVwV2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dVaVBvcHVwV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93U3RhcnRXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd1N0YXJ0V2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93UGF1c2VXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd1BhdXNlV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlcldpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5nYW1lT3ZlcldpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVdpbldpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5nYW1lV2luV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93R2FtZVN0YXRzID0gZ2FtZVVpTW9kdWxlc18xLnNob3dHYW1lU3RhdHM7XHJcbkdhbWUucHJvdG90eXBlLmluaXRVaUVsZW1lbnRzID0gZ2FtZVVpTW9kdWxlc18xLmluaXRVaUVsZW1lbnRzO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lU3RhcnQgPSBzYXRhcnRHYW1lXzEuZ2FtZVN0YXJ0O1xyXG5HYW1lLnByb3RvdHlwZS5iYWNrVG9TdGFydFNjcmVlbiA9IHNhdGFydEdhbWVfMS5iYWNrVG9TdGFydFNjcmVlbjtcclxuR2FtZS5wcm90b3R5cGUuZXhpdFRoZUdhbWUgPSBzYXRhcnRHYW1lXzEuZXhpdFRoZUdhbWU7XHJcbkdhbWUucHJvdG90eXBlLm5leHRMZXZlbERhdGFSZWxvYWQgPSBjaGFuZ2VMZXZlbHNfMS5uZXh0TGV2ZWxEYXRhUmVsb2FkO1xyXG5HYW1lLnByb3RvdHlwZS5jaGFuZ2VMZXZlbFByb2NlZHVyZSA9IGVuZ2luZU1vZHVsZXNfMS5jaGFuZ2VMZXZlbFByb2NlZHVyZTtcclxuR2FtZS5wcm90b3R5cGUuZ2V0UmFuZG9tQ29sb3IgPSBlbmdpbmVNb2R1bGVzXzEuZ2V0UmFuZG9tQ29sb3I7XHJcbkdhbWUucHJvdG90eXBlLm1hcFJhbm9tT2JqZWN0U3Bhd24gPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5tYXBSYW5vbU9iamVjdFNwYXduO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0R3JhcHBsZU9iamVjdCA9IGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xLmluaXRHcmFwcGxlT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGxheWVyU2hpcE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgUGxheWVyU2hpcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXllclNoaXAoZGF0YSwgcG9pbnRzLCBoZWFsdGhQb2ludCwgbnVtYmVyT2ZsaWZlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBkYW1hZ2UpIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAxMDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAxMDA7IH1cclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZsaWZlID0gbnVtYmVyT2ZsaWZlO1xyXG4gICAgICAgIHRoaXMubWF4T2ZMaWZlID0gbnVtYmVyT2ZsaWZlO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBoZWFsdGhQb2ludCArIGRhdGEuYXJtb3I7XHJcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGhQb2ludCArIGRhdGEuYXJtb3I7XHJcbiAgICAgICAgdGhpcy54ID0geCAtICh3aWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMueSA9IHkgLSAoaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy54RmluYWwgPSB4O1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0geTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbkFsbG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gXCJwbGF5ZXJcIjtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy54QWRqID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IGRhdGEuZXhwbG9zaW9uO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xyXG4gICAgfVxyXG4gICAgUGxheWVyU2hpcC5wcm90b3R5cGUuZ2V0UGxheWVySW5mb3JtYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICBtYXhIZWFsdGhQb2ludDogdGhpcy5tYXhIZWFsdGhcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXJTaGlwO1xyXG59KCkpO1xyXG5leHBvcnRzLlBsYXllclNoaXAgPSBQbGF5ZXJTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5pbml0UGxheWVyU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5pbml0UGxheWVyU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUubW92ZVBsYXllclNoaXAgPSBwbGF5ZXJTaGlwTW9kdWxlXzEubW92ZVBsYXllclNoaXA7XHJcblBsYXllclNoaXAucHJvdG90eXBlLnNoaXBDb250cm9sID0gcGxheWVyU2hpcE1vZHVsZV8xLnNoaXBDb250cm9sO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5tb3ZlU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5tb3ZlU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUucGxhY2VTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLnBsYWNlU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUuc2V0Q29udGV4dCA9IHBsYXllclNoaXBNb2R1bGVfMS5zZXRDb250ZXh0O1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5nZXRPYmplY3RQb3NpdGlvbiA9IGVuZ2luZU1vZHVsZXNfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUudGFrZURhbWFnZSA9IGVuZW1pZXNNb2R1bGVzXzEudGFrZURhbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBjb3N0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vY29uc3RydWN0b3JzXCIpKTtcclxuZnVuY3Rpb24gcGxhY2VFbmVteWVzKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUltYWdlKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCwgdGhpcy5pbWcsIHRoaXMuc3gsIHRoaXMuc3ksIHRoaXMuc1dpZHRoLCB0aGlzLnNIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy5wbGFjZUVuZW15ZXMgPSBwbGFjZUVuZW15ZXM7XHJcbmZ1bmN0aW9uIG1vdmVFbmVteWVzKG1vdmVYLCBtb3ZlWSkge1xyXG4gICAgaWYgKG1vdmVZID09PSB2b2lkIDApIHsgbW92ZVkgPSAwOyB9XHJcbiAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIHRoaXMueSAtPSBtb3ZlWTtcclxufVxyXG5leHBvcnRzLm1vdmVFbmVteWVzID0gbW92ZUVuZW15ZXM7XHJcbmZ1bmN0aW9uIGxvYWRFbmVteWVzKCkge1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuc2hpcFRleHR1cmU7XHJcbn1cclxuZXhwb3J0cy5sb2FkRW5lbXllcyA9IGxvYWRFbmVteWVzO1xyXG5mdW5jdGlvbiBzaG9vdChCdWxsZXRDb25zdHJ1Y3QsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhdGhpcy5pc1Nob290KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBndW5zID0gdGhpcy5ndW5zO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmICgxID4gbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIoaXRlbS5maXJlUmVwZWFkKSkge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXNfMTtcclxuICAgICAgICAgICAgdmFyIGJ1bGxldF8xID0gbmV3IEJ1bGxldENvbnN0cnVjdCh7XHJcbiAgICAgICAgICAgICAgICB4OiBjb250ZXh0LngsIHk6IGNvbnRleHQueSArICgoaXRlbS5maXJlUG9zaXRpb24pID8gaXRlbS5maXJlUG9zaXRpb24gOiBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplcihjb250ZXh0LmhlaWdodCkpLFxyXG4gICAgICAgICAgICAgICAgYnVsbGV0VHlwZTogaXRlbS5uYW1lLCBidWxsZXRUZXh0dXJlOiBpdGVtLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IFwiZW5lbXlcIiwgYnVsbGV0U3BlZWQ6IGl0ZW0uc3BlZWQgKyB0aGlzXzEuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaXRlbS53aWR0aCwgaGVpZ2h0OiBpdGVtLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRhbWFnZTogaXRlbS5kYW1hZ2UsIHR5cGU6IGl0ZW0udHlwZSwgdGV4dHVyZTogaXRlbS50ZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgc3g6IGl0ZW0uc3gsIHN5OiBpdGVtLnN5LCBzV2lkdGg6IGl0ZW0uc1dpZHRoLCBzSGVpZ2h0OiBpdGVtLnNIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBleHBsb3Npb246IGl0ZW0uZXhwbG9zaW9uQW5pbWF0aW9uLCBpbWFnZVdpZHRoOiBpdGVtLmltYWdlV2lkdGgsIGltYWdlSGVpZ2h0OiBpdGVtLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcHM6IGl0ZW0uYW5pbWF0aW9uU3RlcHMsIG51bWJlck9mSXRlbXM6IGl0ZW0ubnVtYmVyT2ZJdGVtcywgbnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zOiBpdGVtLm51bWJlck9mVmVydGljYWxJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnVsbGV0XzEuaW1nLnNyYyA9IGJ1bGxldF8xLnRleHR1cmU7XHJcbiAgICAgICAgICAgIGJ1bGxldF8xLmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMuY29uY2F0KGJ1bGxldF8xKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHRoaXNfMSA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGd1bnNfMSA9IGd1bnM7IF9pIDwgZ3Vuc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZ3Vuc18xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc2hvb3QgPSBzaG9vdDtcclxuZnVuY3Rpb24gZW5lbXlBbmltYXRpb24oc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gdHJ1ZTsgfVxyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuc1dpZHRoO1xyXG4gICAgICAgIGlmICh0aGlzLnN4ID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lbmVteUFuaW1hdGlvbiA9IGVuZW15QW5pbWF0aW9uO1xyXG5mdW5jdGlvbiBlbmVteURhbWFnZUFuaW1hdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcyA+IDEpIHtcclxuICAgICAgICB2YXIgZGFtYWdlQW5pbWF0aW9uUG9pbnRfMSA9IHRoaXMub3JpZ2luYWxIZWFsdGhQb2ludCAvIHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zO1xyXG4gICAgICAgIHZhciBkYW1hZ2VQb2ludCA9IG5ldyBBcnJheSh0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcykuZmlsbChudWxsKTtcclxuICAgICAgICBkYW1hZ2VQb2ludCA9IGRhbWFnZVBvaW50Lm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHsgcmV0dXJuIGRhbWFnZUFuaW1hdGlvblBvaW50XzEgKiAoaW5kZXggKyAxKTsgfSkuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhbWFnZVBvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50IDwgZGFtYWdlUG9pbnRbaV0gJiYgdGhpcy5oZWFsdGhQb2ludCA+IGRhbWFnZVBvaW50W2kgKyAxXSAmJiBkYW1hZ2VQb2ludFtpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3kgPSB0aGlzLnNIZWlnaHQgKiAoaSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghZGFtYWdlUG9pbnRbaSArIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5ID0gdGhpcy5zSGVpZ2h0ICogKHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lbmVteURhbWFnZUFuaW1hdGlvbiA9IGVuZW15RGFtYWdlQW5pbWF0aW9uO1xyXG4vLyBjb21wbGV4IGVuZW15IGFuaW1hdGlvbiBmb3IgZGFtYWdlXHJcbmZ1bmN0aW9uIHRha2VEYW1hZ2UoZGFtYWdlLCBoaXRPYmplY3QsIG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KSB7XHJcbiAgICAvKiBCdWxsZXQgaGl0IGRldGVjdGlvbiAqL1xyXG4gICAgaWYgKHRoaXMub2JqZWN0UHJlc2VudCAmJiB0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW52aXJvbm1lbnRcIiAmJiBoaXRPYmplY3QuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpIHx8XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCAmJiB0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSkge1xyXG4gICAgICAgIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xLmV4cGxvc2lvbkZpcmUodGhpcywgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgY29zdHJ1Y3RvcnMuU2lkZU9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLyogR2FtZSBncmFwcGxlIG9iamVjdCBoaXQgZGV0ZWN0aW9uICovXHJcbiAgICBpZiAodGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJncmFwcGxlT2JqZWN0XCIgJiZcclxuICAgICAgICBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJlxyXG4gICAgICAgICFoaXRPYmplY3QuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5ncmFwcGxlT2JqZWN0T25TY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5leHBsb3Npb25GaXJlKHRoaXMsIG1haW5HYW1lT2JqZWN0LCBoaXRPYmplY3QsIGNvc3RydWN0b3JzLlNpZGVPYmplY3QpO1xyXG4gICAgICAgIHRoaXNbdGhpcy5ncmFwcGxlUG93ZXIubWV0aG9kTmFtZV0oeyBhbGxHYW1lU2lkZU9iamVjdHM6IG1haW5HYW1lT2JqZWN0LCBwbGF5ZXJTaGlwRGF0YTogaGl0T2JqZWN0LCBtYWluR2FtZU9iamVjdDogbWFpbkdhbWVPYmplY3QgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBIaXQgZGV0IGRlY3Rpb24gY29sbGlzaW9uICovXHJcbiAgICBpZiAodGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcInBsYXllclwiIHx8XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImNvbGxpZGVcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW52aXJvbm1lbnRcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgdW5pdERhbWFnZS5jYWxsKHRoaXMsIG51bGwsIG1haW5HYW1lT2JqZWN0KTtcclxuICAgICAgICB0aGlzLmVuZW15RGFtYWdlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoUG9pbnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZXhwbG9zaW9uRmlyZSh0aGlzLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBjb3N0cnVjdG9ycy5TaWRlT2JqZWN0KTtcclxuICAgICAgICAgICAgLy8vIGxvYWQgY29pbnNcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3Bhd25Db2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkNvaW4obWFpbkdhbWVPYmplY3QsIGNvc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jvc3MpXHJcbiAgICAgICAgICAgICAgICBib3NzRW5lbXlEZXN0cnVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25BbGxvdykge1xyXG4gICAgICAgICAgICB1bml0RGFtYWdlLmNhbGwodGhpcywgbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGZ1bmN0aW9uIHVuaXREYW1hZ2UoZGF0YSwgbWFpbkdhbWVPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50IC09IGRhbWFnZTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhQb2ludCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGlmZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuc291cnNlLnBsYXllck9iamVjdC5udW1iZXJPZmxpZmUgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnNvdXJzZS5wbGF5ZXJPYmplY3QubnVtYmVyT2ZsaWZlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lT3ZlcldpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmJhY2tUb1N0YXJ0U2NyZWVuKGNvc3RydWN0b3JzLlBsYXllclNoaXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IGRhdGEuc291cnNlLnBsYXllck9iamVjdC5tYXhIZWFsdGg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuY29sbGVjdFBvaW50cyh0aGlzLnBvaW50c1BlclVuaXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYm9zc0VuZW15RGVzdHJ1Y3Rpb24oKSB7XHJcbiAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VEYW1hZ2UgPSB0YWtlRGFtYWdlO1xyXG5mdW5jdGlvbiBzcGF3bkNvaW4obWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdleHRyYU9iamVjdHMnKSkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmV4dHJhT2JqZWN0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvaW4gPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGNvaW4ueCA9IHRoaXMueDtcclxuICAgICAgICAgICAgY29pbi55ID0gdGhpcy55O1xyXG4gICAgICAgICAgICBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMS5sb2FkR3JhYmJsZVRvU2lkZU9iamVjdC5jYWxsKHRoaXMsIG1haW5HYW1lT2JqZWN0LCBjb2luLCBHcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zcGF3bkNvaW4gPSBzcGF3bkNvaW47XHJcbmZ1bmN0aW9uIGhpdERldGVjdGlvbihvYmplY3QxLCBvYmplY3RzQXJyLCBtYWluR2FtZU9iamVjdCwgR3JhcHBsZU9iamVjdCkge1xyXG4gICAgdmFyIGNvbGxpc2lvbiA9IG51bGw7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIG9iamVjdHNBcnJfMSA9IG9iamVjdHNBcnI7IF9pIDwgb2JqZWN0c0Fycl8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBvYmplY3QyID0gb2JqZWN0c0Fycl8xW19pXTtcclxuICAgICAgICB2YXIgb2JqZWN0MVBvc2l0aW9uID0gb2JqZWN0MS5nZXRPYmplY3RQb3NpdGlvbi5jYWxsKG9iamVjdDEpO1xyXG4gICAgICAgIHZhciB4TWluID0gTWF0aC5tYXgob2JqZWN0MVBvc2l0aW9uLngsIG9iamVjdDIueCk7XHJcbiAgICAgICAgdmFyIHlNaW4gPSBNYXRoLm1heChvYmplY3QxUG9zaXRpb24ueSwgb2JqZWN0Mi55KTtcclxuICAgICAgICB2YXIgeE1heCA9IE1hdGgubWluKG9iamVjdDFQb3NpdGlvbi54ICsgKG9iamVjdDEud2lkdGggfHwgb2JqZWN0MVBvc2l0aW9uLndpZHRoKSwgb2JqZWN0Mi54ICsgb2JqZWN0Mi53aWR0aCk7XHJcbiAgICAgICAgdmFyIHlNYXggPSBNYXRoLm1pbihvYmplY3QxUG9zaXRpb24ueSArIChvYmplY3QxLmhlaWdodCB8fCBvYmplY3QxUG9zaXRpb24uaGVpZ2h0KSwgb2JqZWN0Mi55ICsgb2JqZWN0Mi5oZWlnaHQpO1xyXG4gICAgICAgIHZhciByZXNYID0geE1heCAtIHhNaW47XHJcbiAgICAgICAgdmFyIHJlc1kgPSB5TWF4IC0geU1pbjtcclxuICAgICAgICBjb2xsaXNpb24gPSAoTWF0aC5zaWduKHJlc1gpIDwgMCB8fCBNYXRoLnNpZ24ocmVzWSkgPCAwKSA/IGZhbHNlIDogXCJjb2xsaXNpb25cIjtcclxuICAgICAgICBpZiAoY29sbGlzaW9uID09IFwiY29sbGlzaW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdDEudGFrZURhbWFnZSAmJiBvYmplY3QyLnRha2VEYW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDEudGFrZURhbWFnZSgob2JqZWN0Mi5kYW1hZ2UpID8gb2JqZWN0Mi5kYW1hZ2UgOiAwLCBvYmplY3QyLCBtYWluR2FtZU9iamVjdCwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QyLnRha2VEYW1hZ2UoKG9iamVjdDEuZGFtYWdlKSA/IG9iamVjdDEuZGFtYWdlIDogMCwgb2JqZWN0MSwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoY29sbGlzaW9uID09IFwiY29sbGlzaW9uXCIpID8gb2JqZWN0MSA6IGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaGl0RGV0ZWN0aW9uID0gaGl0RGV0ZWN0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZW5lbWllc01vZHVsZXNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9EYXRhID0gJ1RoZXJlIGlzIG5vIGRhdGEnLCBub09iamVjdCA9ICdUaGVyZSBpcyBubyBPYmplY3QnO1xyXG5leHBvcnRzLm5vRGF0YSA9IG5vRGF0YTtcclxuZXhwb3J0cy5ub09iamVjdCA9IG5vT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiB1cGRhdGVNYXAoKSB7XHJcbiAgICB2YXIgYmFja2dyb3VuZE9iamVjdCA9IHRoaXM7XHJcbiAgICB0aGlzLnggLT0gdGhpcy5iYWNrZ3JvdW5kU3BlZWQ7XHJcbiAgICBpZiAoTWF0aC5zaWduKHRoaXMuYmFja2dyb3VuZFNwZWVkKSA+IDAgJiYgdGhpcy54ICsgdGhpcy5zY3JlZW5EYXRhLndpZHRoIDwgMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuc2NyZWVuRGF0YS53aWR0aDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKE1hdGguc2lnbih0aGlzLmJhY2tncm91bmRTcGVlZCkgPCAwICYmIHRoaXMueCA+IHRoaXMuc2NyZWVuRGF0YS53aWR0aCkge1xyXG4gICAgICAgIHRoaXMueCA9IDAgLSB0aGlzLnNjcmVlbkRhdGEud2lkdGg7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUltYWdlKGJhY2tncm91bmRPYmplY3QuY3R4LCBiYWNrZ3JvdW5kT2JqZWN0LmltZywgYmFja2dyb3VuZE9iamVjdC54LCAwLCBiYWNrZ3JvdW5kT2JqZWN0LnNjcmVlbkRhdGEud2lkdGggKyAyLCBiYWNrZ3JvdW5kT2JqZWN0LnNjcmVlbkRhdGEuaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLnVwZGF0ZU1hcCA9IHVwZGF0ZU1hcDtcclxuZnVuY3Rpb24gY2hhbmdlUGFydE9mVGV4dHVyZShtYWluR2FtZU9iamVjdCwgYmFja2dyb3VuZEFycmF5KSB7XHJcbiAgICB2YXIgbGV2ZWxEYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgdmFyIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICBpZiAobGV2ZWxEYXRhLm1pbnV0ZXMgPD0gdGhpcy50aW1lVG9FeHRyYU1hcE1pbnV0ZXNcclxuICAgICAgICAmJiBsZXZlbERhdGEuc2Vjb25kcyA8PSB0aGlzLnRpbWVUb0V4dHJhTWFwU2Vjb25kc1xyXG4gICAgICAgICYmIHRoaXMuZXh0cmFNYXAgJiYgdGhpcy54ID49IHNjcmVlbkRhdGEud2lkdGggLSAyMDApIHtcclxuICAgICAgICB2YXIgaW5mbyA9IG1haW5HYW1lT2JqZWN0LnNob3dHYW1lSW5mbygpO1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IF9fZGlybmFtZSArIHRoaXMuZXh0cmFNYXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VQYXJ0T2ZUZXh0dXJlID0gY2hhbmdlUGFydE9mVGV4dHVyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gY3JlYXRlQnVsbGV0cyhtYWluR2FtZU9iamVjdCkge1xyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVMYXNlckJ1bGxldCh7XHJcbiAgICAgICAgc291cmNlOiB0aGlzLFxyXG4gICAgICAgIG9iamVjdE93bmVyOiB0aGlzLm9iamVjdE93bmVyLFxyXG4gICAgICAgIGN0eDogbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkLFxyXG4gICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgY29sb3I6IHRoaXMuYnVsbGV0VGV4dHVyZSxcclxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHJhZGl1czogNSxcclxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgaW1nOiB0aGlzLmltZyxcclxuICAgICAgICBzeDogdGhpcy5zeCwgc3k6IHRoaXMuc3ksIHNXaWR0aDogdGhpcy5zV2lkdGgsIHNIZWlnaHQ6IHRoaXMuc0hlaWdodCxcclxuICAgICAgICBpbWFnZVdpZHRoOiB0aGlzLmltYWdlV2lkdGgsIGltYWdlSGVpZ2h0OiB0aGlzLmltYWdlSGVpZ2h0LCBhbmltYXRpb25TdGVwczogdGhpcy5hbmltYXRpb25TdGVwcyxcclxuICAgICAgICBudW1iZXJPZkl0ZW1zOiB0aGlzLm51bWJlck9mSXRlbXMsIG51bWJlck9mVmVydGljYWxJdGVtczogdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXNcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQnVsbGV0cyA9IGNyZWF0ZUJ1bGxldHM7XHJcbmZ1bmN0aW9uIGluaXRCdWxsZXRzKCkge1xyXG59XHJcbmV4cG9ydHMuaW5pdEJ1bGxldHMgPSBpbml0QnVsbGV0cztcclxuZnVuY3Rpb24gbW92ZUJ1bGxldHMocGxheWVyU2hpcERhdGEsIGdhbWVPYmplY3QpIHtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImJsYXN0ZXJcIjpcclxuICAgICAgICAgICAgbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYmVhbVwiOlxyXG4gICAgICAgICAgICBiZWFtLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RPd25lciA9PSBcInBsYXllclwiKVxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLmJ1bGxldFNwZWVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmVhbSgpIHtcclxuICAgICAgICB2YXIgc2NyZWVuRGF0YSA9IGdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggKz0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy53aWR0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCAtPSB0aGlzLmJ1bGxldFNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLm1vdmVCdWxsZXRzID0gbW92ZUJ1bGxldHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxuLy9pbXBvcnQgeyBsZXZlbENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vY29uc3RydWN0b3JzL2xldmVsQ29uc3RydWN0b3JzJztcclxuZnVuY3Rpb24gaW5pdEZpZWxkKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpIHtcclxuICAgIGlmIChzY3JlZW5XaWR0aCA9PT0gdm9pZCAwKSB7IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7IH1cclxuICAgIGlmIChzY3JlZW5IZWlnaHQgPT09IHZvaWQgMCkgeyBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IH1cclxuICAgIHZhciBnYW1lRmllbGQgPSBbXS5jb25jYXQodGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLCB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQsIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkKTtcclxuICAgIGlmICghZ2FtZUZpZWxkKVxyXG4gICAgICAgIHRocm93IEVycm9yKCdFcnJvcicpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBnYW1lRmllbGRfMSA9IGdhbWVGaWVsZDsgX2kgPCBnYW1lRmllbGRfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2NyZWVuXzEgPSBnYW1lRmllbGRfMVtfaV07XHJcbiAgICAgICAgc2NyZWVuXzEgPSBPYmplY3QuYXNzaWduKHNjcmVlbl8xLCB7IHdpZHRoOiBzY3JlZW5XaWR0aCAtIDQsIGhlaWdodDogc2NyZWVuSGVpZ2h0IC0gNCB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRGaWVsZCA9IGluaXRGaWVsZDtcclxuZnVuY3Rpb24gc2V0R2FtZUZpZWxkcygpIHtcclxuICAgIHRoaXMuaW5pdEZpZWxkKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRleHQoKTtcclxuICAgIHRoaXMuaW5pdFBsYXllclNoaXAoKTtcclxufVxyXG5leHBvcnRzLnNldEdhbWVGaWVsZHMgPSBzZXRHYW1lRmllbGRzO1xyXG5mdW5jdGlvbiB3YXJwRWZmZWN0KCkge1xyXG4gICAgdmFyIHNjcmVlblNpeiA9IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgdmFyIGN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmN0eDtcclxuICAgIHZhciBnYW1lV2FycE9iamVjdHMgPSB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cztcclxuICAgIHRoaXMuZ2V0U2Vjb25kTWVhc3VyZSh3YXJwVGltZXIsIHsgdGltZVRvRXJlc3NMZXZlbDogdGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCwgY3R4OiBjdHgsIHNjcmVlblNpejogdGhpcy5nZXRTY3JlZW5TaXplKCkgfSk7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cyA9IChnYW1lV2FycE9iamVjdHMubGVuZ3RoIDwgMzUwKSA/IHRoaXMuZ2FtZUluaXREYXRhLndhcnBPYmplY3RzLmNvbmNhdCh7XHJcbiAgICAgICAgeDogc2NyZWVuU2l6LndpZHRoLFxyXG4gICAgICAgIHk6IHRoaXMuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuU2l6LmhlaWdodCksXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWVSYW5kb21pemVyKDIwLCAxMCksXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIHNwZWVkOiB0aGlzLmdhbWVSYW5kb21pemVyKDEwLCA1KSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmdldFJhbmRvbUNvbG9yKCksXHJcbiAgICB9KSA6IHRoaXMuZ2FtZUluaXREYXRhLndhcnBPYmplY3RzO1xyXG4gICAgaWYgKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBnYW1lV2FycE9iamVjdHNfMSA9IGdhbWVXYXJwT2JqZWN0czsgX2kgPCBnYW1lV2FycE9iamVjdHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHdhcnBlciA9IGdhbWVXYXJwT2JqZWN0c18xW19pXTtcclxuICAgICAgICAgICAgd2FycGVyLnggLT0gKHdhcnBlci54ID4gMCkgPyB3YXJwZXIuc3BlZWQgOiAwO1xyXG4gICAgICAgICAgICB3YXJwZXIud2lkdGggPSAoZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDE1MCkgPyB3YXJwZXIud2lkdGggLSB3YXJwZXIuc3BlZWRcclxuICAgICAgICAgICAgICAgIDogKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPiAxNTAgJiYgZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDM1MCkgPyB3YXJwZXIud2lkdGggKyB3YXJwZXIuc3BlZWQgOiB3YXJwZXIud2lkdGggLSB3YXJwZXIuc3BlZWQ7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB3YXJwZXIuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5kcmF3KGN0eCwgJ2ZpbGxSZWN0Jywgd2FycGVyLngsIHdhcnBlci55LCB3YXJwZXIud2lkdGgsIHdhcnBlci5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhcnBUaW1lcihsZXZlbERhdGEpIHtcclxuICAgICAgICB2YXIgbGV2ZUNoYW5nZVN0YXR1cyA9ICh0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID49IDApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID49IDAgJiYgIWxldmVDaGFuZ2VTdGF0dXMpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA8IDAgJiYgIWxldmVDaGFuZ2VTdGF0dXMpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGV2ZWxQcm9jZWR1cmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLndhcnBFZmZlY3QgPSB3YXJwRWZmZWN0O1xyXG5mdW5jdGlvbiBsZXZlbEluaXQoR2FtZUJhY2tncm91bmQsIGN0eCwgbWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBnYW1lRGF0YSA9IHRoaXMuc2hvd0xldmVsRGF0YSgpO1xyXG4gICAgdmFyIGFsbEJhY2tncm91bmRFbGVtZW50cyA9IGdhbWVEYXRhLmxldmVsQmFja2dyb3VuZEVsZW1lbnRzO1xyXG4gICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmJhY2tTY3JlZW5QYXVzZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCYWNrZ3JvdW5kRWxlbWVudHNfMSA9IGFsbEJhY2tncm91bmRFbGVtZW50czsgX2kgPCBhbGxCYWNrZ3JvdW5kRWxlbWVudHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgbWFwT2JqZWN0ID0gYWxsQmFja2dyb3VuZEVsZW1lbnRzXzFbX2ldO1xyXG4gICAgICAgIHZhciBtYXBJdGVtID0gbmV3IEdhbWVCYWNrZ3JvdW5kKG1hcE9iamVjdC5sZXZlbE1hcCwgbWFwT2JqZWN0LnNwZWVkLCB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4sIGN0eCwgKHRoaXMuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzLmxlbmd0aCAlIDIgPT0gMCkgPyB0cnVlIDogbnVsbCwgKG1hcE9iamVjdC5leHRyYU1hcCkgPyBtYXBPYmplY3QuZXh0cmFNYXAgOiBudWxsLCAobWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwU2Vjb25kcykgPyBtYXBPYmplY3QudGltZVRvRXh0cmFNYXBTZWNvbmRzIDogbnVsbCwgKG1hcE9iamVjdC50aW1lVG9FeHRyYU1hcE1pbnV0ZXMpID8gbWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwTWludXRlcyA6IG51bGwpO1xyXG4gICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0cy5jb25jYXQobWFwSXRlbSk7XHJcbiAgICAgICAgbWFwSXRlbS5pbWcuc3JjID0gX19kaXJuYW1lICsgbWFwSXRlbS5iYWNrZ3JvdW5kVGV4dHVyZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmxldmVsSW5pdCA9IGxldmVsSW5pdDtcclxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dCgpIHtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVGaWVsZC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZC5nZXRDb250ZXh0KCcyZCcpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XHJcbmZ1bmN0aW9uIGdldFNjcmVlblNpemUoKSB7XHJcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGhlaWdodCA9IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQ7XHJcbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbn1cclxuZXhwb3J0cy5nZXRTY3JlZW5TaXplID0gZ2V0U2NyZWVuU2l6ZTtcclxuZnVuY3Rpb24gY2hhbmdlTGV2ZWxQcm9jZWR1cmUoKSB7XHJcbiAgICAvLyBhbmltYXRpb24gZm9yIHdhcnAsIGh0dHAgcmVxdWVzdCBmb3IgbGV2ZWwgYW5kIGVuZW15ZXMsIDEwIGxldmVscyBtdXN0IGJlXHJcbiAgICAvLyBzb21lIGxldmVscyBtdXN0IGNvbnRhaW4gYm9zcyBhdCBsZWFzdCAyIGJvc3NcclxuICAgIC8vIGxhc3QgbGV2ZWwgaXMgZmluYWwgdGl0bGVzIHRoZSBlbmQgc2F2ZSBzY29yZVxyXG4gICAgdmFyIGxldmVsRGF0YSA9IHRoaXMuc2hvd0dhbWVJbmZvKCk7XHJcbiAgICB2YXIgbGV2ZWwgPSB0aGlzLmNoYW5nZUxldmVsKGxldmVsRGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWwgKyAxKTtcclxuICAgIGlmIChsZXZlbCA8PSBsZXZlbERhdGEuZ2FtZURhdGEubGV2ZWxEYXRhLmFsbExldmVscykge1xyXG4gICAgICAgIHRoaXMubmV4dExldmVsRGF0YVJlbG9hZChsZXZlbERhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVdpbiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VMZXZlbFByb2NlZHVyZSA9IGNoYW5nZUxldmVsUHJvY2VkdXJlO1xyXG5mdW5jdGlvbiBsZXZlbFRpbWVyKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIGlmICghZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmJvc3NQcmVzZW50KSB7XHJcbiAgICAgICAgdmFyIGxldmVsVGltZSA9IGRhdGEuc291cnNlLmxldmVsRGF0YS5sZXZlbERldGFpbHM7IC8vIHsgbGV2ZWxNaW51dGVzOiAzLCBsZXZlbFNlY29uZHM6IDQzIH1cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLmdldFNlY29uZE1lYXN1cmUobGV2ZWxUaW1lQWN0aW9uLCBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRhdGEuc291cnNlLmxldmVsRGF0YS5sZXZlbERldGFpbHMubGV2ZWxTZWNvbmRzID0gbnVsbDtcclxuICAgICAgICBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzLmxldmVsTWludXRlcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsZXZlbFRpbWVBY3Rpb24odGltZSkge1xyXG4gICAgICAgIGlmICh0aW1lLmxldmVsU2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lLmxldmVsTWludXRlcyA9PSAwICYmIHRpbWUubGV2ZWxTZWNvbmRzID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRpbWUubGV2ZWxTZWNvbmRzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lLmxldmVsTWludXRlcyA9ICh0aW1lLmxldmVsTWludXRlcyA+IDApID8gdGltZS5sZXZlbE1pbnV0ZXMgLSAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZS5sZXZlbFNlY29uZHMgPSAodGltZS5sZXZlbFNlY29uZHMgPiAwKSA/IHRpbWUubGV2ZWxTZWNvbmRzIC0gMSA6ICh0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSkgPyAwIDogNTk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sZXZlbFRpbWVyID0gbGV2ZWxUaW1lcjtcclxuZnVuY3Rpb24gZ2V0U2Vjb25kTWVhc3VyZShjYWxsYmFjaykge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZVNlY29uZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU2Vjb25kID0gMTAwMCAvIHRoaXMuZ2FtZUluaXREYXRhLmludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5nYW1lSW5pdERhdGEuZ2VtZUV4dHJhU2Vjb25kcyAlIGdhbWVTZWNvbmQgPT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdlbWVFeHRyYVNlY29uZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNhbGxiYWNrXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9hLnNlbnQoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2FsbGJhY2suY2FsbC5hcHBseShjYWxsYmFjaywgX19zcHJlYWRBcnJheXMoW3RoaXNdLCBkYXRhKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdhbWVTZWNvbmRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0U2Vjb25kTWVhc3VyZSA9IGdldFNlY29uZE1lYXN1cmU7XHJcbmZ1bmN0aW9uIGdhbWVTZWNvbmRzSW5jcmVhc2UoKSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nZW1lRXh0cmFTZWNvbmRzICs9IDE7XHJcbn1cclxuZXhwb3J0cy5nYW1lU2Vjb25kc0luY3JlYXNlID0gZ2FtZVNlY29uZHNJbmNyZWFzZTtcclxuZnVuY3Rpb24gZ2V0TGV2ZWxVc2VyRGF0YSgpIHtcclxuICAgIHZhciBkYXRhU291cnNlID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGE7XHJcbiAgICB2YXIgbGV2ZWxUaW1lID0gZGF0YVNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzb3Vyc2U6IGRhdGFTb3Vyc2UsXHJcbiAgICAgICAgY3VycmVudExldmVsOiBkYXRhU291cnNlLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICBhbGxMZXZlbHM6IGRhdGFTb3Vyc2UubGV2ZWxEYXRhLmFsbExldmVscyxcclxuICAgICAgICBwb2ludHM6IGRhdGFTb3Vyc2UuY3VycmVudFBvaW50LFxyXG4gICAgICAgIGdhbWVDb2luczogZGF0YVNvdXJzZS5nYW1lQ29pbnMsXHJcbiAgICAgICAgbGlmZTogZGF0YVNvdXJzZS5wbGF5ZXJPYmplY3QubnVtYmVyT2ZsaWZlLFxyXG4gICAgICAgIG1pbnV0ZXM6IGxldmVsVGltZS5sZXZlbE1pbnV0ZXMsXHJcbiAgICAgICAgc2Vjb25kczogbGV2ZWxUaW1lLmxldmVsU2Vjb25kc1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmdldExldmVsVXNlckRhdGEgPSBnZXRMZXZlbFVzZXJEYXRhO1xyXG5mdW5jdGlvbiBkZWxldGVCdWxsZXQoYnVsbGV0KSB7XHJcbiAgICBpZiAoYnVsbGV0LnggPiB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGhcclxuICAgICAgICB8fCBidWxsZXQueCA8IGJ1bGxldC53aWR0aCAqIC0xXHJcbiAgICAgICAgfHwgIWJ1bGxldC5vYmplY3RQcmVzZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMuaW5kZXhPZihidWxsZXQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWxldGVCdWxsZXQgPSBkZWxldGVCdWxsZXQ7XHJcbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdHMob2JqZWN0KSB7XHJcbiAgICBpZiAob2JqZWN0LnggKyBvYmplY3Quc1dpZHRoIDwgMCB8fCAhb2JqZWN0Lm9iamVjdFByZXNlbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlbGV0ZU9iamVjdHMgPSBkZWxldGVPYmplY3RzO1xyXG5mdW5jdGlvbiBkZWxhdGVTaWRlT2JqZWN0KG9iamVjdCkge1xyXG4gICAgaWYgKCFvYmplY3Qub2JqZWN0UHJlc2VudCB8fCBvYmplY3QueCA8IDAgLSBvYmplY3Qud2lkdGgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVsYXRlU2lkZU9iamVjdCA9IGRlbGF0ZVNpZGVPYmplY3Q7XHJcbmZ1bmN0aW9uIGNvbGxlY3RQb2ludHMocG9pbnQpIHtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRQb2ludCArPSBwb2ludDtcclxufVxyXG5leHBvcnRzLmNvbGxlY3RQb2ludHMgPSBjb2xsZWN0UG9pbnRzO1xyXG5mdW5jdGlvbiBnZXRPYmplY3RQb3NpdGlvbigpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gdGhpcztcclxuICAgIHZhciBwb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiBtYWluT2JqZWN0LngsXHJcbiAgICAgICAgeTogbWFpbk9iamVjdC55LFxyXG4gICAgICAgIHdpZHRoOiBtYWluT2JqZWN0LndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5oZWlnaHQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG59XHJcbmV4cG9ydHMuZ2V0T2JqZWN0UG9zaXRpb24gPSBnZXRPYmplY3RQb3NpdGlvbjtcclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XHJcbiAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcclxuICAgIHZhciBjb2xvciA9ICcjJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG59XHJcbmV4cG9ydHMuZ2V0UmFuZG9tQ29sb3IgPSBnZXRSYW5kb21Db2xvcjtcclxuZnVuY3Rpb24gcHJlbG9hZEltYWdlKGl0ZW1zKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuICAgIGxvb3BWZXJ0aWNhbChpdGVtcyk7XHJcbiAgICBmdW5jdGlvbiBsb29wVmVydGljYWwob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3QpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMob2JqZWN0KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsID0gX2JbMV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxvb3BWZXJ0aWNhbChvYmplY3Rba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXNzaWduaW1hZ2Uoa2V5LCB2YWwsIGltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhc3NpZ25pbWFnZShrZXksIHZhbCwgaW1hZ2UpIHtcclxuICAgICAgICBpZiAoa2V5ID09ICdza2luTmFtZScgfHwga2V5ID09ICd0ZXh0dXJlJyB8fCBrZXkgPT0gJ2xldmVsTWFwJykge1xyXG4gICAgICAgICAgICBpZiAodmFsKVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gX19kaXJuYW1lICsgdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLnByZWxvYWRJbWFnZSA9IHByZWxvYWRJbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gbG9hZEdyYWJibGVUb1NpZGVPYmplY3QobWFpbkdhbWVPYmplY3QsIHRhcmdldCwgR3JhcHBsZU9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBnYW1lSW5mbywgZ2FtZURhdGEsIHNjcmVlbkRhdGEsIGNvbnRleHQsIHNpZGVPYmplY3QsIG9iamVjdERhdGEsIGdyYXBwbGVPYmplY3QsIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbmZvID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCksIGdhbWVEYXRhID0gZ2FtZUluZm8uZ2FtZURhdGEsIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IG1haW5HYW1lT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6ICh0YXJnZXQueCkgPyB0YXJnZXQueCArIGNvbnRleHQuZ2FtZVJhbmRvbWl6ZXIoc2lkZU9iamVjdC53aWR0aCkgOiBzY3JlZW5EYXRhLndpZHRoICsgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAodGFyZ2V0LnkpID8gdGFyZ2V0LnkgKyBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNpZGVPYmplY3QuaGVpZ2h0KSA6IGNvbnRleHQuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuRGF0YS5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE93bmVyOiB0YXJnZXQub2JqZWN0T3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNXaWR0aDogdGFyZ2V0LmltYWdlV2lkdGggLyB0YXJnZXQubnVtYmVyT2ZJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc0hlaWdodDogdGFyZ2V0LmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGFyZ2V0LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBzOiB0YXJnZXQuYW5pbWF0aW9uU3RlcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZJdGVtczogdGFyZ2V0Lm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IHRhcmdldC5za2luTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IHRhcmdldC5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZXNXaWR0aDogdGFyZ2V0LmltYWdlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWx0aFBvaW50OiB0YXJnZXQuaGVhbHRoUG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZTogdGFyZ2V0LmRhbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNCYWNrZ3JvdW5kOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBsb3Npb246IHRhcmdldC5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1BlclVuaXQ6IHRhcmdldC5wb2ludHNQZXJVbml0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyYXBwbGU6IHRhcmdldC5pc0dyYXBwbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVQb3dlcjogdGFyZ2V0LmdyYXBwbGVQb3dlclxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdCA9IG5ldyBHcmFwcGxlT2JqZWN0KF9fYXNzaWduKHt9LCBvYmplY3REYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdC5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ3JhcHBsZU9iamVjdE9uU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuY29uY2F0KGdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBncmFwcGxlT2JqZWN0LmltZztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBncmFwcGxlT2JqZWN0LnRleHR1cmVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNyYyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubG9hZEdyYWJibGVUb1NpZGVPYmplY3QgPSBsb2FkR3JhYmJsZVRvU2lkZU9iamVjdDtcclxuZnVuY3Rpb24gaW5pdEdyYXBwbGVPYmplY3QoR3JhcHBsZU9iamVjdCwgcGxheWVyU2hpcERhdGEpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZUluZm8sIGdhbWVEYXRhLCBsZXZlbERhdGEsIGdyYXBwbGVEYXRhLCBzY3JlZW5EYXRhLCBzcGF3blByb2JhYmlsaXR5LCByYW5kb21PYmplY3Q7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEuZ3JhcHBsZU9iamVjdE9uU2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgZ2FtZUluZm8gPSB0aGlzLnNob3dHYW1lSW5mbygpLCBnYW1lRGF0YSA9IGdhbWVJbmZvLmdhbWVEYXRhLCBsZXZlbERhdGEgPSBnYW1lRGF0YS5sZXZlbERhdGEsIGdyYXBwbGVEYXRhID0gZ2FtZURhdGEuZ3JhcHBsZU9iamVjdHMsIHNjcmVlbkRhdGEgPSB0aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgc3Bhd25Qcm9iYWJpbGl0eSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxEYXRhLmdyYXBsZU9iamVjdFByb2JhYmlsaXR5KTtcclxuICAgICAgICAgICAgaWYgKHNwYXduUHJvYmFiaWxpdHkgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21PYmplY3QgPSBncmFwcGxlRGF0YVt0aGlzLmdhbWVSYW5kb21pemVyKGdyYXBwbGVEYXRhLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyYW5kb21PYmplY3QuZ3JhcHBsZVBvd2VyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGlmZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU2hpcERhdGEubnVtYmVyT2ZsaWZlID49IHBsYXllclNoaXBEYXRhLm1heE9mTGlmZSAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9hZEdyYWJibGVUb1NpZGVPYmplY3QodGhpcywgcmFuZG9tT2JqZWN0LCBHcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmluaXRHcmFwcGxlT2JqZWN0ID0gaW5pdEdyYXBwbGVPYmplY3Q7XHJcbmZ1bmN0aW9uIGFkZFBsYXllckxpZmUoX2EpIHtcclxuICAgIHZhciBhbGxHYW1lU2lkZU9iamVjdHMgPSBfYS5hbGxHYW1lU2lkZU9iamVjdHMsIHBsYXllclNoaXBEYXRhID0gX2EucGxheWVyU2hpcERhdGEsIG1haW5HYW1lT2JqZWN0ID0gX2EubWFpbkdhbWVPYmplY3Q7XHJcbiAgICBwbGF5ZXJTaGlwRGF0YS5udW1iZXJPZmxpZmUgKz0gdGhpcy5ncmFwcGxlUG93ZXIudmFsdWU7XHJcbn1cclxuZXhwb3J0cy5hZGRQbGF5ZXJMaWZlID0gYWRkUGxheWVyTGlmZTtcclxuZnVuY3Rpb24gY29sbGVjdENvaW4oX2EpIHtcclxuICAgIHZhciBhbGxHYW1lU2lkZU9iamVjdHMgPSBfYS5hbGxHYW1lU2lkZU9iamVjdHMsIHBsYXllclNoaXBEYXRhID0gX2EucGxheWVyU2hpcERhdGEsIG1haW5HYW1lT2JqZWN0ID0gX2EubWFpbkdhbWVPYmplY3Q7XHJcbiAgICB2YXIgZ2FtZUluZm8gPSBtYWluR2FtZU9iamVjdC5zaG93R2FtZUluZm8oKSwgZ2FtZURhdGEgPSBnYW1lSW5mby5nYW1lRGF0YSwgbGV2ZWxEYXRhID0gZ2FtZURhdGEubGV2ZWxEYXRhLCBncmFwcGxlRGF0YSA9IGdhbWVEYXRhLmdyYXBwbGVPYmplY3RzO1xyXG4gICAgZ2FtZURhdGEuZ2FtZUNvaW5zICs9IHRoaXMuZ3JhcHBsZVBvd2VyLnZhbHVlO1xyXG59XHJcbmV4cG9ydHMuY29sbGVjdENvaW4gPSBjb2xsZWN0Q29pbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzYXRhcnRHYW1lXzEgPSByZXF1aXJlKFwiLi9zYXRhcnRHYW1lXCIpO1xyXG5mdW5jdGlvbiBuZXh0TGV2ZWxEYXRhUmVsb2FkKGxldmVsRGF0YSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhvcml6b250YWxWZXJ0aWNhbFNlYXJjaChtYWluT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhtYWluT2JqZWN0KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1haW5PYmplY3Rba2V5XSA9PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPSBudWxsICYmICFtYWluT2JqZWN0W2tleV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFZlcnRpY2FsU2VhcmNoKG1haW5PYmplY3Rba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25WYWx1ZS5jYWxsKHRoaXMsIGtleSwgbWFpbk9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gYXNzaWduVmFsdWUoaW5jb21lS2V5LCBtYWluRGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMocmVmcmVzaExldmVsKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbCA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBpbmNvbWVLZXkgJiYgdmFsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YVtrZXldID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuZXh0TGV2ZWwsIHNlcnZlck5ld0RhdGEsIGNvbnRleHQsIHJlZnJlc2hMZXZlbDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBuZXh0TGV2ZWwgPSBsZXZlbERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNhdGFydEdhbWVfMS5zZXJ2ZXJSZXF1ZXN0KHsgbGV2ZWw6IG5leHRMZXZlbCwgc2hpcENvbmZpZ3VyYXRpb246IDEgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlck5ld0RhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaExldmVsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExldmVsOiBuZXh0TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9pbnQ6IGNvbnRleHQuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRQb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllck9iamVjdDogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEucGxheWVyT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUNvaW5zOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lQ29pbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGE6IHNlcnZlck5ld0RhdGEubGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzOiBzZXJ2ZXJOZXdEYXRhLmxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzOiBzZXJ2ZXJOZXdEYXRhLmdyYXBwbGVPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3M6IGNvbnRleHQuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmdhbWVTZXRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhOiBzZXJ2ZXJOZXdEYXRhLmVuZW15RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jb250cm9sbGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVTaWRlT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVFbmVtaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZUJ1bGxldHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lTWFwT0JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEJhY2tncm91bmRPYmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVVpUGF1c2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrU2NyZWVuUGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdE9uU2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VtZUV4dHJhU2Vjb25kczogMCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID0gNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsVmVydGljYWxTZWFyY2guY2FsbCh0aGlzLCB0aGlzLmdhbWVJbml0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLm5leHRMZXZlbERhdGFSZWxvYWQgPSBuZXh0TGV2ZWxEYXRhUmVsb2FkO1xyXG5mdW5jdGlvbiBjaGFuZ2VTaGlwKCkge1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVdlYXBvbigpIHtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2F0YXJ0R2FtZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NoYW5nZUxldmVsc1wiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2VydmVyUmVxdWVzdE1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvc2VydmVyUmVxdWVzdE1vZHVsZXNcIik7XHJcbnZhciBlbmdpbmVNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIGxvYWRTY3JlZW5fMSA9IHJlcXVpcmUoXCIuLi8uLi91aS9sb2FkU2NyZWVuXCIpO1xyXG52YXIgcmVtb3RlID0gcmVxdWlyZSgnZWxlY3Ryb24nKS5yZW1vdGU7XHJcbmZ1bmN0aW9uIHNlcnZlclJlcXVlc3QoZ2FtZUluZm9ybWF0aW9uKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlcnZlckxvY2F0aW9uLCBsZXZlbERhdGEsIGxldmVsT2JqZWN0cywgZ3JhcHBsZU9iamVjdHMsIGdhbWVTZXRpbmdzLCB1c2VyRGF0YSwgZW5lbXlEYXRhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WLCBwcm9jZXNzLmVudi5IT1NUKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuSE9TVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZXNEaXJlY3Rpb246IF9fZGlybmFtZSArICcvcHVibGljL2ltYWdlcy8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvbGV2ZWwtZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9sZXZlbC1vYmplY3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvZ3JhcHBsZS1vYmplY3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvZ2FtZS1zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTaGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL3VzZXItc2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15bERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvZW5lbXktc2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5sZXZlbERhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi5sZXZlbERhdGEubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ21hcGxldmVsJzogZ2FtZUluZm9ybWF0aW9uLmxldmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24ubGV2ZWxPYmplY3RzLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24ubGV2ZWxPYmplY3RzLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdtYXBPYmplY3QnOiBsZXZlbERhdGEubGV2ZWxPQmplY3RzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0cyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24uZ3JhcHBsZU9iamVjdHMudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi5ncmFwcGxlT2JqZWN0cy5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnZ3JhcHBsZU9iamVjdCc6IGxldmVsRGF0YS5ncmFwcGxlT2JqZWN0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5nYW1lU2V0aW5ncy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmdhbWVTZXRpbmdzLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5ncyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24udXNlclNoaXAudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi51c2VyU2hpcC5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAndXNlcnNoaXAnOiBnYW1lSW5mb3JtYXRpb24uc2hpcENvbmZpZ3VyYXRpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmVuZW15bERhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi5lbmVteWxEYXRhLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdzaGlwLXR5cGUtbnVtYmVyJzogbGV2ZWxEYXRhLmVuZW15VHlwZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICBlbmVteURhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lTW9kdWxlc18xLnByZWxvYWRJbWFnZShlbmVteURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZU1vZHVsZXNfMS5wcmVsb2FkSW1hZ2UobGV2ZWxEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmVNb2R1bGVzXzEucHJlbG9hZEltYWdlKGxldmVsT2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzOiBsZXZlbE9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czogZ3JhcHBsZU9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5nczogZ2FtZVNldGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YTogdXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteURhdGE6IGVuZW15RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zZXJ2ZXJSZXF1ZXN0ID0gc2VydmVyUmVxdWVzdDtcclxuZnVuY3Rpb24gZ2FtZURhdGFJbml0KFBsYXllclNoaXApIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZUZpZWxkLCBnYW1lQWN0aW9uRmllbGQsIGdhbWVVSWZpZWxkLCBsZXZlbCwgc2hpcFR5cGUsIHNoaXBMaWZlLCByZXMsIGxldmVsRGF0YSwgbGV2ZWxPYmplY3RzLCBncmFwcGxlT2JqZWN0cywgZ2FtZVNldGluZ3MsIHVzZXJEYXRhLCBlbmVteURhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFNjcmVlbl8xLmxvYWRXaW5kb3coeyBsb2FkU3RhdHVzOiBcImxvYWRcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWZpZWxkJyksIGdhbWVBY3Rpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT2JqZWN0c2ZpZWxkJyksIGdhbWVVSWZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVVaWZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSAxLCBzaGlwVHlwZSA9IDEsIHNoaXBMaWZlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0KHsgbGV2ZWw6IGxldmVsLCBzaGlwQ29uZmlndXJhdGlvbjogc2hpcFR5cGUgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGEgPSByZXMubGV2ZWxEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0cyA9IHJlcy5sZXZlbE9iamVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHMgPSByZXMuZ3JhcHBsZU9iamVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3MgPSByZXMuZ2FtZVNldGluZ3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEgPSByZXMudXNlckRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhID0gcmVzLmVuZW15RGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWxEYXRhLnN0YXR1cyA9PT0gXCJlcnJvclwiIHx8IGxldmVsT2JqZWN0cyA9PT0gXCJlcnJvclwiIHx8IGdyYXBwbGVPYmplY3RzID09PSBcImVycm9yXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhLmdhbWVTZXRpbmdzID09PSBcImVycm9yXCIgfHwgdXNlckRhdGEgPT09IFwiZXJyb3JcIiB8fCBlbmVteURhdGEgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkU2NyZWVuXzEubG9hZFdpbmRvdyh7IGxvYWRTdGF0dXM6IFwic2VydmVyRXJyb3JcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFNjcmVlbl8xLmxvYWRXaW5kb3coeyBsb2FkU3RhdHVzOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRmllbGQ6IChnYW1lRmllbGQpID8gZ2FtZUZpZWxkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lQWN0aW9uRmllbGQ6IChnYW1lQWN0aW9uRmllbGQpID8gZ2FtZUFjdGlvbkZpZWxkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lVUlGaWVsZDogKGdhbWVVSWZpZWxkKSA/IGdhbWVVSWZpZWxkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWw6IGxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9pbnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb2luczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT2JqZWN0OiBuZXcgUGxheWVyU2hpcCh1c2VyRGF0YSwgMCwgMzAwLCBzaGlwTGlmZSwgMTAwLCAxMDAsIHVzZXJEYXRhLnNpemUud2lkdGgsIHVzZXJEYXRhLnNpemUuaGVpZ2h0LCB1c2VyRGF0YS5kYW1hZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGE6IGxldmVsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzOiBsZXZlbE9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzOiBncmFwcGxlT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3M6IGdhbWVTZXRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteURhdGE6IGVuZW15RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbENvdW50OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZVNpZGVPYmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lRW5lbWllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZUJ1bGxldHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVNYXBPQmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBCYWNrZ3JvdW5kT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycE9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVUb0VyZXNzTGV2ZWw6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVVpUGF1c2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tTY3JlZW5QYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdpbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdE9uU2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW1lRXh0cmFTZWNvbmRzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nYW1lRGF0YUluaXQgPSBnYW1lRGF0YUluaXQ7XHJcbmZ1bmN0aW9uIGdhbWVFbmdpbmUoZ2FtZURhdGFJbml0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdhbWVFbmdpbmUgPSBnYW1lRW5naW5lO1xyXG5mdW5jdGlvbiBnYW1lU3RhcnQoKSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cyA9IHRydWU7XHJcbn1cclxuZXhwb3J0cy5nYW1lU3RhcnQgPSBnYW1lU3RhcnQ7XHJcbmZ1bmN0aW9uIGJhY2tUb1N0YXJ0U2NyZWVuKFBsYXllclNoaXApIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmV3SW5pdGRhdGEsIF9pLCBfYSwgX2IsIGtleSwgdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdhbWVEYXRhSW5pdChQbGF5ZXJTaGlwKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5pdGRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdJbml0ZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyAnbmV3SW5pdGRhdGEuZGF0YSdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobmV3SW5pdGRhdGEuZGF0YSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYmFja1RvU3RhcnRTY3JlZW4gPSBiYWNrVG9TdGFydFNjcmVlbjtcclxuZnVuY3Rpb24gZXhpdFRoZUdhbWUoKSB7XHJcbiAgICB2YXIgdyA9IHJlbW90ZS5nZXRDdXJyZW50V2luZG93KCk7XHJcbiAgICB3LmNsb3NlKCk7XHJcbn1cclxuZXhwb3J0cy5leGl0VGhlR2FtZSA9IGV4aXRUaGVHYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVndWxhckVuZW15QWlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vYWkvcmVndWxhckVuZW15QWlNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBleHBsb3Npb25GaXJlKHRhcmdldERhdGEsIG1haW5HYW1lT2JqZWN0LCBoaXRPYmplY3QsIFNpZGVPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGl0WCwgdGFyZ2V0WCwgYWRqdXN0LCBjb21wZW5zYXRpb24sIGV4cGxvc2lvbkRhdGEsIHNpZGVPYmplY3QsIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGhpdFggPSBoaXRPYmplY3QueCArIGhpdE9iamVjdC53aWR0aCAvIDIsIHRhcmdldFggPSB0YXJnZXREYXRhLnggKyB0YXJnZXREYXRhLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3QgPSBNYXRoLm1heChoaXRYLCB0YXJnZXRYKSAtIE1hdGgubWluKGhpdFgsIHRhcmdldFgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBlbnNhdGlvbiA9IChoaXRPYmplY3QueCA+IHRhcmdldERhdGEueCkgPyBhZGp1c3QgOiBhZGp1c3QgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbkRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRhcmdldERhdGEueCAtIHRhcmdldERhdGEuZXhwbG9zaW9uLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogKHRhcmdldERhdGEuYnVsbGV0VHlwZSkgPyB0YXJnZXREYXRhLnkgLSB0YXJnZXREYXRhLmV4cGxvc2lvbi53aWR0aCAvIDIgOiB0YXJnZXREYXRhLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IFwiZXhwbG9zaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNXaWR0aDogdGFyZ2V0RGF0YS5leHBsb3Npb24uaW1hZ2VXaWR0aCAvIHRhcmdldERhdGEuZXhwbG9zaW9uLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNIZWlnaHQ6IHRhcmdldERhdGEuZXhwbG9zaW9uLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGFyZ2V0RGF0YS5leHBsb3Npb24ud2lkdGggKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldERhdGEuZXhwbG9zaW9uLndpZHRoICogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcHM6IHRhcmdldERhdGEuZXhwbG9zaW9uLmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGhpdE9iamVjdC5vYmplY3RPd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZJdGVtczogdGFyZ2V0RGF0YS5leHBsb3Npb24uaW1hZ2VXaWR0aCAvIHRhcmdldERhdGEuZXhwbG9zaW9uLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IHRhcmdldERhdGEuZXhwbG9zaW9uLnRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiBoaXRPYmplY3Quc3BlZWQgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc1dpZHRoOiB0YXJnZXREYXRhLmV4cGxvc2lvbi5pbWFnZVdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0ID0gbmV3IFNpZGVPYmplY3QoX19hc3NpZ24oe30sIGV4cGxvc2lvbkRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0LmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmNvbmNhdChzaWRlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gc2lkZU9iamVjdC5pbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2lkZU9iamVjdC50ZXh0dXJlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zcmMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmV4cGxvc2lvbkZpcmUgPSBleHBsb3Npb25GaXJlO1xyXG5mdW5jdGlvbiBmaXJlQW5pbWF0aW9uRW5kZWQoYWxsR2FtZVNpZGVPYmplY3RzKSB7XHJcbiAgICB0aGlzLmRldGVjdEZyYW1lICs9IDE7XHJcbiAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYW5pbWF0aW9uU3RlcHMgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ggPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zeCA+PSB0aGlzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5maXJlQW5pbWF0aW9uRW5kZWQgPSBmaXJlQW5pbWF0aW9uRW5kZWQ7XHJcbmZ1bmN0aW9uIG1hcE9iamVjdE1vdmUoKSB7XHJcbiAgICB0aGlzLnggLT0gKHRoaXMuc3BlZWQpID8gdGhpcy5zcGVlZCA6IDM7XHJcbn1cclxuZXhwb3J0cy5tYXBPYmplY3RNb3ZlID0gbWFwT2JqZWN0TW92ZTtcclxuZnVuY3Rpb24gbWFwUmFub21PYmplY3RTcGF3bihsZXZlbE9iamVjdHMsIFNpZGVPYmplY3QsIGFsbEdhbWVTaWRlT2JqZWN0cykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hcE9iamVjdFNwYXduZXIobGV2ZWxPYmplY3RzLCBTaWRlT2JqZWN0LCBhbGxHYW1lU2lkZU9iamVjdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhbWVEYXRhLCBsZXZlbERhdGEsIHNwYXduUHJvYmFiaWxpdHksIHNjcmVlbkRhdGEsIGxldmVsT2JqZWN0UHJvcHMsIHlQb3NpdGlvbiwgZXh0cmFPYmplY3RzLCBfYSwgZXhwbG9zaW9uRGF0YSwgc2lkZU9iamVjdF8xO1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhID0gdGhpcy5zaG93R2FtZUluZm8oKS5nYW1lRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YSA9IGdhbWVEYXRhLmxldmVsRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduUHJvYmFiaWxpdHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5vYmplY3RQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShzcGF3blByb2JhYmlsaXR5IDwgbGV2ZWxEYXRhLm9iamVjdE1pblRpbWVTcGF3bikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuRGF0YSA9IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RQcm9wcyA9IGxldmVsT2JqZWN0c1t0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsT2JqZWN0cy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiA9IChsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PSBcImJvdHRvbVwiICYmIHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIikgPyBzY3JlZW5EYXRhLmhlaWdodCAtIHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RQcm9wcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAobGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT0gXCJ0b3BcIiAmJiB0eXBlb2YgbGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT09IFwic3RyaW5nXCIpID8gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbE9iamVjdFByb3BzLmhlaWdodCAvIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09IFwic2NlbmVcIiAmJiB0eXBlb2YgbGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT09IFwic3RyaW5nXCIpID8gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbE9iamVjdFByb3BzLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLmdhbWVSYW5kb21pemVyKHNjcmVlbkRhdGEuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShsZXZlbE9iamVjdFByb3BzLmV4dHJhT2JqZWN0cykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVndWxhckVuZW15QWlNb2R1bGVzXzEubG9hZEV4dHJhT2JqZWN0LmNhbGwodGhpcywgbGV2ZWxPYmplY3RQcm9wcy5leHRyYU9iamVjdHMpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFPYmplY3RzID0gX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb3Npb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNjcmVlbkRhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogeVBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE93bmVyOiBsZXZlbE9iamVjdFByb3BzLm9iamVjdE93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNXaWR0aDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZVdpZHRoIC8gbGV2ZWxPYmplY3RQcm9wcy5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNIZWlnaHQ6IGxldmVsT2JqZWN0UHJvcHMuaW1hZ2VIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxldmVsT2JqZWN0UHJvcHMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBsZXZlbE9iamVjdFByb3BzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwczogbGV2ZWxPYmplY3RQcm9wcy5hbmltYXRpb25TdGVwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZJdGVtczogbGV2ZWxPYmplY3RQcm9wcy5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IGxldmVsT2JqZWN0UHJvcHMuc2tpbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IGxldmVsT2JqZWN0UHJvcHMuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZXNXaWR0aDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWx0aFBvaW50OiBsZXZlbE9iamVjdFByb3BzLmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZTogbGV2ZWxPYmplY3RQcm9wcy5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCYWNrZ3JvdW5kOiBsZXZlbE9iamVjdFByb3BzLmlzQmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb3Npb246IGxldmVsT2JqZWN0UHJvcHMuZXhwbG9zaW9uQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1BlclVuaXQ6IGxldmVsT2JqZWN0UHJvcHMucG9pbnRzUGVyVW5pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYU9iamVjdHM6IGV4dHJhT2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3RfMSA9IG5ldyBTaWRlT2JqZWN0KF9fYXNzaWduKHt9LCBleHBsb3Npb25EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0XzEuaW1nLnNyYyA9IHNpZGVPYmplY3RfMS50ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdF8xLmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyA9IF90aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuY29uY2F0KHNpZGVPYmplY3RfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWNvbmRNZWFzdXJlKG1hcE9iamVjdFNwYXduZXIsIGxldmVsT2JqZWN0cywgU2lkZU9iamVjdCwgYWxsR2FtZVNpZGVPYmplY3RzKTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5tYXBSYW5vbU9iamVjdFNwYXduID0gbWFwUmFub21PYmplY3RTcGF3bjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BsYXllclNoaXBNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbmdpbmVNb2R1bGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYnVsbGV0c01vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2JhY2tncm91bmRNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hcHBFcnJvckxpc3RNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbnN0cnVjdG9ycy9cIikpO1xyXG52YXIgdmlldyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vdmlldy9cIikpO1xyXG5mdW5jdGlvbiBpbml0UGxheWVyU2hpcChtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLmN0eCkge1xyXG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGF0YS50ZXh0dXJlLCBpbWFnZUxvY2F0aW9uID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCkuaW1hZ2VEaXJyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucGxhY2VQbGF5ZXJTaGlwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wbGFjZVBsYXllclNoaXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaW1nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gaW1hZ2VMb2NhdGlvbiArIGltYWdlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW5pdFBsYXllclNoaXAgPSBpbml0UGxheWVyU2hpcDtcclxuZnVuY3Rpb24gbW92ZVBsYXllclNoaXAoKSB7XHJcbiAgICBpZiAodGhpcy5pbWcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdHggJiYgdGhpcy5pbWcpIHtcclxuICAgICAgICAgICAgdmlldy5jcmVhdGVJbWFnZSh0aGlzLmN0eCwgdGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubW92ZVBsYXllclNoaXAgPSBtb3ZlUGxheWVyU2hpcDtcclxuZnVuY3Rpb24gc2hpcENvbnRyb2wobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgY29udHJvbEtleXMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZVNldGluZ3Mua2V5Q29udHJvbHM7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmRvd24uc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IDAsIHlQb3M6IF90aGlzLmRhdGEuc3BlZWQgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmxlZnQuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IF90aGlzLmRhdGEuc3BlZWQgKiAtMSwgeVBvczogMCB9KTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMucmlnaHQuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IF90aGlzLmRhdGEuc3BlZWQsIHlQb3M6IDAgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLnVwLnNvbWUoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIGUua2V5Q29kZSA9PSBvOyB9KSlcclxuICAgICAgICAgICAgX3RoaXMubW92ZVNoaXAoeyB4UG9zOiAwLCB5UG9zOiBfdGhpcy5kYXRhLnNwZWVkICogLTEgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIkNBTlZBU1wiXHJcbiAgICAgICAgICAgICYmICFtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlXHJcbiAgICAgICAgICAgICYmIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgeSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgX3RoaXMueEZpbmFsID0gKCh4ICUgX3RoaXMuZGF0YS5zcGVlZCA9PSAwKSA/IHggOiBfdGhpcy5kYXRhLnNwZWVkICogTWF0aC5mbG9vcih4IC8gX3RoaXMuZGF0YS5zcGVlZCkpIC0gKF90aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIF90aGlzLnlGaW5hbCA9ICgoeSAlIF90aGlzLmRhdGEuc3BlZWQgPT0gMCkgPyB5IDogX3RoaXMuZGF0YS5zcGVlZCAqIE1hdGguZmxvb3IoeSAvIF90aGlzLmRhdGEuc3BlZWQpKSAtIChfdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGd1bnMgPSBfdGhpcy5kYXRhLmd1bnM7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IF90aGlzO1xyXG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gbmV3IGNvbnN0cnVjdG9ycy5CdWxsZXRDb25zdHJ1Y3Qoe1xyXG4gICAgICAgICAgICAgICAgeDogY29udGV4dC54LCB5OiBjb250ZXh0LnkgKyBpdGVtLmZpcmVQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIGJ1bGxldFR5cGU6IGl0ZW0ubmFtZSwgYnVsbGV0VGV4dHVyZTogaXRlbS5jb2xvcixcclxuICAgICAgICAgICAgICAgIG9iamVjdE93bmVyOiBcInBsYXllclwiLCBidWxsZXRTcGVlZDogaXRlbS5zcGVlZCArIGNvbnRleHQueEFkaixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBpdGVtLndpZHRoLCBoZWlnaHQ6IGl0ZW0uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZGFtYWdlOiBpdGVtLmRhbWFnZSwgdHlwZTogaXRlbS50eXBlLCB0ZXh0dXJlOiBpdGVtLnRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBzeDogaXRlbS5zeCwgc3k6IGl0ZW0uc3ksIHNXaWR0aDogaXRlbS5zV2lkdGgsIHNIZWlnaHQ6IGl0ZW0uc0hlaWdodCxcclxuICAgICAgICAgICAgICAgIGV4cGxvc2lvbjogaXRlbS5leHBsb3Npb25BbmltYXRpb24sIGltYWdlV2lkdGg6IGl0ZW0uaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQ6IGl0ZW0uaW1hZ2VIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwczogaXRlbS5hbmltYXRpb25TdGVwcywgbnVtYmVyT2ZJdGVtczogaXRlbS5udW1iZXJPZkl0ZW1zLCBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IGl0ZW0ubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAvKiovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBidWxsZXQuaW1nLnNyYyA9IGJ1bGxldC50ZXh0dXJlO1xyXG4gICAgICAgICAgICBidWxsZXQuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5jb25jYXQoYnVsbGV0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZ3Vuc18xID0gZ3VuczsgX2kgPCBndW5zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ3Vuc18xW19pXTtcclxuICAgICAgICAgICAgX2xvb3BfMShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNoaXBDb250cm9sID0gc2hpcENvbnRyb2w7XHJcbmZ1bmN0aW9uIHNldENvbnRleHQoY29udGV4dCkge1xyXG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xyXG59XHJcbmV4cG9ydHMuc2V0Q29udGV4dCA9IHNldENvbnRleHQ7XHJcbmZ1bmN0aW9uIHBsYWNlU2hpcCgpIHtcclxuICAgIHZhciB4QWRqID0gKHRoaXMueEZpbmFsIC0gdGhpcy54KSAvIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgIHZhciB5QWRqID0gKHRoaXMueUZpbmFsIC0gdGhpcy55KSAvIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgIHhBZGogPSAoTWF0aC5zaWduKHhBZGopID4gMCkgPyB4QWRqIDogeEFkaiAqIC0xO1xyXG4gICAgeUFkaiA9IChNYXRoLnNpZ24oeUFkaikgPiAwKSA/IHlBZGogOiB5QWRqICogLTE7XHJcbiAgICB4QWRqID0gKHhBZGogPiB0aGlzLmRhdGEubWluU3BlZWQpID8gdGhpcy5kYXRhLm1pblNwZWVkIDogeEFkajtcclxuICAgIHlBZGogPSAoeUFkaiA+IHRoaXMuZGF0YS5taW5TcGVlZCkgPyB0aGlzLmRhdGEubWluU3BlZWQgOiB5QWRqO1xyXG4gICAgdGhpcy54QWRqID0gKHRoaXMueCA+IHRoaXMueEZpbmFsKSA/IDAgOiB4QWRqO1xyXG4gICAgdGhpcy54ID0gKHRoaXMueCA+IHRoaXMueEZpbmFsKSA/IHRoaXMueCAtIHhBZGogOlxyXG4gICAgICAgICh0aGlzLnggPCB0aGlzLnhGaW5hbCkgPyB0aGlzLnggKyB4QWRqIDogdGhpcy54RmluYWw7XHJcbiAgICB0aGlzLnkgPSAodGhpcy55ID4gdGhpcy55RmluYWwpID8gdGhpcy55IC0geUFkaiA6XHJcbiAgICAgICAgKHRoaXMueSA8IHRoaXMueUZpbmFsKSA/IHRoaXMueSArIHlBZGogOiB0aGlzLnlGaW5hbDtcclxufVxyXG5leHBvcnRzLnBsYWNlU2hpcCA9IHBsYWNlU2hpcDtcclxuZnVuY3Rpb24gbW92ZVNoaXAoX2EpIHtcclxuICAgIHZhciBfYiA9IF9hLnhQb3MsIHhQb3MgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IF9hLnlQb3MsIHlQb3MgPSBfYyA9PT0gdm9pZCAwID8gMCA6IF9jO1xyXG4gICAgdGhpcy54ICs9IHhQb3M7XHJcbiAgICB0aGlzLnkgKz0geVBvcztcclxufVxyXG5leHBvcnRzLm1vdmVTaGlwID0gbW92ZVNoaXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuLi9zYXNzL21haW4uc2Fzc1wiKTtcclxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbnZhciBnYW1lRGF0YU1vZHVsZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZW5naW5lL2dhbWVNb2R1bGVzXCIpKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnNcIikpO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbihmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qICAgZ2FtZSBlbmdpbiBydW5pbmcgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdhbWVJbnRlcnZhbCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pLCBfYSwgYnVsbGV0LCBfYiwgX2MsIGVuZW15LCBfZCwgX2UsIG9iamVjdCwgX2YsIF9nLCBiYWNrZ3JvdW5kTWFwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQgJiYgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNsZWFyRmllbGQoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5sZXZlbEluaXQoY29uc3RydWN0b3JzLkdhbWVCYWNrZ3JvdW5kLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSAmJiBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc3Bhd25FbmVteUxvZ2ljKGNvbnN0cnVjdG9ycy5FbmVteU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaW5pdEdyYXBwbGVPYmplY3QoY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QsIHBsYXllclNoaXBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldCA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0Lm1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5kZWxldGVCdWxsZXQoYnVsbGV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24oYnVsbGV0LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcywgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW2J1bGxldF0sIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24oYnVsbGV0LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMsIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmVuZW15QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9iID0gMCwgX2MgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkgPSBfY1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZUVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwbGF5ZXJTaGlwRGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcGxheWVyU2hpcERhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnNob290KGNvbnN0cnVjdG9ycy5CdWxsZXRDb25zdHJ1Y3QsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlbGV0ZU9iamVjdHMoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW2VuZW15XSwgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5wbGFjZVNoaXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5tb3ZlUGxheWVyU2hpcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfZCA9IDAsIF9lID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBfZVtfZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5wbGFjZUVuZW15ZXMoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJleHBsb3Npb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZpcmVBbmltYXRpb25FbmRlZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJncmFwcGxlT2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW29iamVjdF0sIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5lbmVteUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5tYXBPYmplY3RNb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZGVsYXRlU2lkZU9iamVjdChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbE9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0Lm1hcFJhbm9tT2JqZWN0U3Bhd24oZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxPYmplY3RzLCBjb25zdHJ1Y3RvcnMuU2lkZU9iamVjdCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVNlY29uZHNJbmNyZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5sZXZlbFRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UgfHwgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9mID0gMCwgX2cgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0czsgX2YgPCBfZy5sZW5ndGg7IF9mKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTWFwID0gX2dbX2ZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRNYXAudXBkYXRlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZE1hcC5jaGFuZ2VQYXJ0T2ZUZXh0dXJlKGdhbWVPYmplY3QsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LndhcnBFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLy8gICBnYW1lIFVJIGxvYWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93U3RhcnRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93R2FtZVN0YXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dQYXVzZVdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dNZW51V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd1BhdXNlV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVPdmVyV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lV2luICYmICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSAmJiAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVdpbldpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhcHBNZW51XzEuaGlkZVNob3dNZW51KG1haW5NZW51LCBuYXZpZ2F0aW9uLm1lbnUsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVXaW4sIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3cmFwcGVyLCBtYWluTWVudSwgZ2FtZVN0YXRlLCBuYXZpZ2F0aW9uXzEsIGdhbWVPYmplY3QsIHBsYXllclNoaXBEYXRhLCBlbmdpbmUsIGNvbnRleHRzLCBuYXZpZ2F0aW9uO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuSE9TVCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LkhPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwicHJvZHVjdGlvbiBtb2RlIGNoZWNrIEhPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2FtZURhdGFNb2R1bGVzLmdhbWVEYXRhSW5pdChjb25zdHJ1Y3RvcnMuUGxheWVyU2hpcCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uXzEgPSBhcHBNZW51XzEuYXBwTWVudShnYW1lT2JqZWN0LCBhcHBNZW51XzEuZGlhbG9nV2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbl8xLm1lbnUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBkYXRhIGluOiBnYW1lU3RhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5ldyBjb25zdHJ1Y3RvcnMuR2FtZShnYW1lU3RhdGUuZGF0YSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5wbGF5ZXJPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gc2V0SW50ZXJ2YWwoZ2FtZUludGVydmFsLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5pbnRlcnZhbENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnVpQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2V0R2FtZUZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gZ2FtZU9iamVjdC5yZXR1cm5Db250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNyZWF0ZSBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEuY3R4ID0gY29udGV4dHMuZ2FtZUFjdGlvbkZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNoaXAgbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLmluaXRQbGF5ZXJTaGlwKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLnNoaXBDb250cm9sKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24gPSBhcHBNZW51XzEuYXBwTWVudShnYW1lT2JqZWN0LCBhcHBNZW51XzEuZGlhbG9nV2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5mdW5jdGlvbiBnZXREYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgaGVhZGVyczogcmVzdWx0SGVhZGVyLFxyXG4gICAgICAgIGJvZHk6IChkYXRhKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiNTAwIE5vIHNlcnZlciBjb25uZWN0aW9uIVwiLCBzdGF0dXM6IFwiZXJyb3JcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0RGF0YSA9IGdldERhdGE7XHJcbmZ1bmN0aW9uIGdldExvY2FsRGF0YShfYSkge1xyXG4gICAgdmFyIGZpbGVOYW1lID0gX2EuZmlsZU5hbWU7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZU5hbWUpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIm5vIGxvY2FsIGZpbGVzXCIpO1xyXG4gICAgICAgICAgICByZXMgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBmcy5yZWFkRmlsZShfX2Rpcm5hbWUgKyAnL3B1YmxpYy9kYXRhLycgKyBmaWxlTmFtZSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiZ290IHNvbWUgcHJvYmxlbSBoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0TG9jYWxEYXRhID0gZ2V0TG9jYWxEYXRhO1xyXG5mdW5jdGlvbiBwb3N0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lT3ZlclNjcmVlbihkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBhdXNlIHRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJHYW1lIE92ZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMTBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyIC0gNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lT3ZlclNjcmVlbiA9IGdhbWVPdmVyU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lUGF1c2UoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJQYXVzZSB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUGF1c2VcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicGFydCBvZiBwYXVzZSB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiNjBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDE1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVQYXVzZSA9IGdhbWVQYXVzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8gIHBvaW50cyAgIGxpZmUsIHRpbWUgdG8gZW5kcywgbGV2ZWxcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZUluZm9ybWF0aW9uU2NyZWVuKGV4dHJhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uLCBpbmZvKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJsaWZlUG9pbnRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgbnVtYmVyOiBpbmZvLmxpZmUsXHJcbiAgICAgICAgICAgIHN0ZXA6IFtpbmZvLmxpZmVdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAqIDUwOyB9KSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBsb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzSGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB4OiAxMCxcclxuICAgICAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9ydWJ5LnBuZyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IChkYXRhKSA/IGRhdGEgOiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gQXJyYXkoaW5mby5saWZlKS5maWxsKDApLm1hcChmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gaSAqIDMwOyB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gMzA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMueCA9IChpID09IDApID8gbWFyZ2luTGVmdCA6IDAgKyBzdGVwc1tpXSArICgoaSAhPSAwKSA/IG1hcmdpbkxlZnQgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJsZXZlbFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiBcIiArICgoaW5mby5jdXJyZW50TGV2ZWwgPD0gaW5mby5hbGxMZXZlbHMpID8gJ0N1cnJlbnQgTGV2ZWwgJyArIGluZm8uY3VycmVudExldmVsICsgJy8nICsgaW5mby5hbGxMZXZlbHMgOiAnZmluaXNoIGdhbWUnKSArIFwiIFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImJvbGQgMTZweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IDMwLFxyXG4gICAgICAgICAgICAgICAgeTogNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGltZSB0byBlbmQgZiBsZXZlbFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiAoaW5mby5taW51dGVzIHx8IGluZm8uc2Vjb25kcykgPyBcIlRpbWUgdG8gbGV2ZWwgZW5kIFwiICsgKChpbmZvLm1pbnV0ZXMgLSAxMCA+PSAwKSA/ICcnIDogMCkgKyBpbmZvLm1pbnV0ZXMgKyBcIjpcIiArICgoaW5mby5zZWNvbmRzIC0gMTAgPj0gMCkgPyAnJyA6IDApICsgaW5mby5zZWNvbmRzIDogJ0Jvc3MgbGV2ZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0IDE2cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLSAzMDAsXHJcbiAgICAgICAgICAgICAgICB5OiAzMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHYW1lIHBvaW50c1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNjb3JlOiBcIiArIGluZm8ucG9pbnRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0IDE4cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC01MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNvaW5zXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogaW5mby5zb3Vyc2UuZ2FtZUNvaW5zLFxyXG4gICAgICAgICAgICBzdGVwOiBbaW5mby5saWZlXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkgKiA1MDsgfSksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgbG9nb3R5cGVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzSGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSA1MCxcclxuICAgICAgICAgICAgICAgIHk6IDI1LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9ncmFwcGxlLW9iamVjdHMvY29pbi5wbmcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2FsbGJhY2ssIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSAoZGF0YSkgPyBkYXRhIDogdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBjb2ludEluZGV4ID0gTWF0aC5mbG9vcih0aGlzLm51bWJlciAvIDUwMDApLCBudW1iZXJPZkNvaW4gPSAoY29pbnRJbmRleCA+IDAgJiYgY29pbnRJbmRleCA8IDEwKSA/IGNvaW50SW5kZXggOiAoY29pbnRJbmRleCA+PSAxMCkgPyAxMCA6IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBBcnJheShudW1iZXJPZkNvaW4pLmZpbGwoMCkubWFwKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiBpICogNTsgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IHRoaXMucHJvcGVydHllcy54O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkNvaW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHllcy54ID0gKGkgPT0gMCkgPyBtYXJnaW5MZWZ0IDogMCArIHN0ZXBzW2ldICsgKChpICE9IDApID8gbWFyZ2luTGVmdCA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgY29pbnNcIixcclxuICAgICAgICAgICAgdGV4dDogXCJYXCIgKyBpbmZvLnNvdXJzZS5nYW1lQ29pbnMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHQgMThweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLTUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZUluZm9ybWF0aW9uU2NyZWVuID0gZ2FtZUluZm9ybWF0aW9uU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lTG9hZE1lbnUoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJTdGFydCBidXR0b25cIixcclxuICAgICAgICAgICAgdGV4dDogXCJQcmVzcyBTdGFydCB0byBiZWdpblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNYWluIHN0YXJ0IGdhbWUgYnV0dG9uIGluIHRoZSBtYWluIGxvYWQgc2NyZWVuXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHggQXJpYWxcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAxNjUsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDApJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0UGFkZGluZzogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDQwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxvZ290eXBlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgbG9nb3R5cGVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgc0hlaWdodDogMTAyNCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDc1LFxyXG4gICAgICAgICAgICAgICAgeTogOTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRQaWN0dXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMuYmFja2dyb3VuZC5zcmMgPSBwaWN0dXJlRGlycmVjdGlvbiArICdtaXNjL2xvZ28tMTAyNHgxMDI0LnBuZyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHYW1lIG5hbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJTcGFjZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImJvbGQgMTAwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC0yOTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAzNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR2FtZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQXR0YWNrXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHRlciAxMDBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDM3MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSg4OSwgMCwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lTG9hZE1lbnUgPSBnYW1lTG9hZE1lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vY29uc3RydWN0b3JzXCIpKTtcclxudmFyIGFwcE1lbnVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbmZ1bmN0aW9uIGdhbWVTZXR0aW5nc01lbnUoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm1lbnUgYmFja2dyb3VuZFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJiYWNrIHBhcnQgb2YgbWVudSBcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBncmFkaWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tHcm91bmRGaW5hbDogXCIjMzgwMjQwXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BYOiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wWTogMCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tWTogMTAwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyRjIyMzEnLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCdXR0b24gZW5kIGdhbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJnbyB0byBzdGFydFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJiYWNrIHRvIHN0YXJ0IHNjcmVlblwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDE1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgICAgICAgICAgdGV4dFByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogNyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5kaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ3Jlc3RhcnQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdyZXN0YXJ0JyB9LCB0aGlzLmJhY2tUb1N0YXJ0U2NyZWVuLCBudWxsLCB0aGlzLCBjb25zdHJ1Y3RvcnMuUGxheWVyU2hpcCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJNYWluIGdhbWUgbWVudSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXh0IGluIG1haW4gdG9wXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtNDUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVNldHRpbmdzTWVudSA9IGdhbWVTZXR0aW5nc01lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vY29uc3RydWN0b3JzXCIpKTtcclxudmFyIGFwcE1lbnVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbnZhciBnYW1lUmVzdWx0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXBwTWVudS9nYW1lUmVzdWx0TW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBnYW1lV2luU2NyZWVuKGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24sIGluZm8pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2NyZWVuIHRpdGxlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiWU9VIFdJTiBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIgYm9sZCAxMjBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIGhlaWdodCAvIDQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNjcmVlbiB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQ29uZ3JhdHVsYXRpb24gXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInRleHQgZm9yIGdhbWUgb3ZlciB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiIGJvbGQgMzBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzY29yZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIllvdSBzY29yZSBpcyBcIiArIGluZm8ucG9pbnRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIiBib2xkIDMwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCdXR0b24gZW5kIGdhbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJTYXZlIHJlc3VsdHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgKyB3aWR0aCAvIDMsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZVJlc3VsdE1vZHVsZV8xLmluaXRSZXN1bHRTY3JlZW4odGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVVaU1lbnUodGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dG9uIGVuZCBnYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiZ28gdG8gc3RhcnRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiAyMCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogNyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuZGlhbG9nV2luZG93KHsgdGV4dERhdGE6ICdyZXN0YXJ0IHRoZSBnYW1lPycsIHJlamVjdFRleHQ6ICdjYW5jZWwnLCBhY2NlcHRUZXh0OiAncmVzdGFydCcgfSwgdGhpcy5iYWNrVG9TdGFydFNjcmVlbiwgbnVsbCwgdGhpcywgY29uc3RydWN0b3JzLlBsYXllclNoaXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lVWlNZW51KHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVXaW5TY3JlZW4gPSBnYW1lV2luU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbml0KGNhbGxiYWNrLCBkYXRhKSB7XHJcbiAgICBkYXRhID0gKGRhdGEpID8gZGF0YSA6IHRoaXM7XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxufVxyXG5leHBvcnRzLmluaXQgPSBpbml0O1xyXG5mdW5jdGlvbiBnZXRVSU9iamVjdFBvc2l0aW9uKCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBjb250ZXh0LnByb3BlcnR5ZXMueCxcclxuICAgICAgICB5OiBjb250ZXh0LnByb3BlcnR5ZXMueSxcclxuICAgICAgICB3aWR0aDogY29udGV4dC5wcm9wZXJ0eWVzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogY29udGV4dC5wcm9wZXJ0eWVzLmhlaWdodCxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5nZXRVSU9iamVjdFBvc2l0aW9uID0gZ2V0VUlPYmplY3RQb3NpdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbnZhciBnYW1lVWlMb2FkTWVudV8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVVaUxvYWRNZW51XCIpO1xyXG52YXIgZ2FtZVVpU2V0dGluZ3NNZW51XzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVVpU2V0dGluZ3NNZW51XCIpO1xyXG52YXIgZ2FtZVBhdXNlU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuXCIpO1xyXG52YXIgZ2FtZVN0YXRzU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuXCIpO1xyXG52YXIgZ2FtZUdhbWVPdmVyU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuXCIpO1xyXG52YXIgZ2FtZVdpblNjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVXaW5TY3JlZW5cIik7XHJcbnZhciB1aUVsZW1lbnRNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9lbGVtZW50cy91aUVsZW1lbnRNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBnYW1lVWlQYXVzZSgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cylcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpUGF1c2UgPSBnYW1lVWlQYXVzZTtcclxuZnVuY3Rpb24gZ2FtZVVpTWVudShnYW1lVWlQYXVzZSkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2U7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAoZ2FtZVVpUGF1c2UpID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpTWVudSA9IGdhbWVVaU1lbnU7XHJcbmZ1bmN0aW9uIHVpQ29udHJvbGxlcigpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgY29udHJvbEtleXMgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncy5rZXlDb250cm9scztcclxuICAgIHZhciBnYW1lT2JqZWN0ID0gdGhpcztcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmVzY2FwZS5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVVpTWVudShfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5wYXVzZS5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVVpUGF1c2UoKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiQ0FOVkFTXCIpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBlLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudHNPblNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBjdHggPSBfdGhpcy5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCwgc2NyZWVuU2l6ZSA9IF90aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbiA9IGdhbWVVaUxvYWRNZW51XzEuZ2FtZUxvYWRNZW51KG51bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tEZXRlY3Rpb24uY2FsbChfdGhpcywgZWxlbWVudHNPblNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbiA9IGdhbWVVaVNldHRpbmdzTWVudV8xLmdhbWVTZXR0aW5nc01lbnUobnVsbCwgY3R4LCBzY3JlZW5TaXplLndpZHRoLCBzY3JlZW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0RldGVjdGlvbi5jYWxsKF90aGlzLCBlbGVtZW50c09uU2NyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVXaW4pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lV2luU2NyZWVuXzEuZ2FtZVdpblNjcmVlbihudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBudWxsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRGV0ZWN0aW9uLmNhbGwoX3RoaXMsIGVsZW1lbnRzT25TY3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrRGV0ZWN0aW9uKGVsZW1lbnRzT25TY3JlZW4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBlbGVtZW50c09uU2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gZW5lbWllc01vZHVsZXNfMS5oaXREZXRlY3Rpb24oZWxlbWVudHNPblNjcmVlbltpdGVtXSwgW10uY29uY2F0KHsgeDogeCwgeTogeSwgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBuYW1lOiBcImN1cnNvclwiIH0pLCB0aGlzLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgZWxlbWVudHNPblNjcmVlbltpdGVtXS5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c09uU2NyZWVuW2l0ZW1dLmFjdGlvbi5jYWxsKHRoaXMsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy51aUNvbnRyb2xsZXIgPSB1aUNvbnRyb2xsZXI7XHJcbmZ1bmN0aW9uIHNob3dVaVBvcHVwV2luZG93KCkge1xyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVXaW5kb3cuY2FsbCh0aGlzKTtcclxufVxyXG5leHBvcnRzLnNob3dVaVBvcHVwV2luZG93ID0gc2hvd1VpUG9wdXBXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dTdGFydFdpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aUltYWdlLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVVaUxvYWRNZW51XzEuZ2FtZUxvYWRNZW51KTtcclxufVxyXG5leHBvcnRzLnNob3dTdGFydFdpbmRvdyA9IHNob3dTdGFydFdpbmRvdztcclxuZnVuY3Rpb24gc2hvd01lbnVXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyLFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVVaVNldHRpbmdzTWVudV8xLmdhbWVTZXR0aW5nc01lbnUpO1xyXG59XHJcbmV4cG9ydHMuc2hvd01lbnVXaW5kb3cgPSBzaG93TWVudVdpbmRvdztcclxuZnVuY3Rpb24gc2hvd1BhdXNlV2luZG93KCkge1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lUGF1c2VTY3JlZW5fMS5nYW1lUGF1c2UpO1xyXG59XHJcbmV4cG9ydHMuc2hvd1BhdXNlV2luZG93ID0gc2hvd1BhdXNlV2luZG93O1xyXG5mdW5jdGlvbiBzaG93R2FtZVN0YXRzKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0XHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVN0YXRzU2NyZWVuXzEuZ2FtZUluZm9ybWF0aW9uU2NyZWVuLCBkYXRhKTtcclxufVxyXG5leHBvcnRzLnNob3dHYW1lU3RhdHMgPSBzaG93R2FtZVN0YXRzO1xyXG5mdW5jdGlvbiBnYW1lT3ZlcldpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVHYW1lT3ZlclNjcmVlbl8xLmdhbWVPdmVyU2NyZWVuKTtcclxufVxyXG5leHBvcnRzLmdhbWVPdmVyV2luZG93ID0gZ2FtZU92ZXJXaW5kb3c7XHJcbmZ1bmN0aW9uIGdhbWVXaW5XaW5kb3coKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbixcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVdpblNjcmVlbl8xLmdhbWVXaW5TY3JlZW4sIGRhdGEpO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVdpbldpbmRvdyA9IGdhbWVXaW5XaW5kb3c7XHJcbmZ1bmN0aW9uIGluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQsIHNjcmVlblNpemUgPSB0aGlzLmdldFNjcmVlblNpemUoKSwgcGljRGlyZWN0aW9uID0gdGhpcy5zaG93R2FtZUluZm8oKS5pbWFnZURpcnJlY3Rpb247XHJcbiAgICB2YXIgc2NyZWVuT2JqZWN0cyA9IGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW251bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQsIHBpY0RpcmVjdGlvbl0sIHByb3BzKSk7XHJcbiAgICBmb3IgKHZhciBpdGVtSW5kZXggPSAwOyBpdGVtSW5kZXggPCBzY3JlZW5PYmplY3RzLmxlbmd0aDsgaXRlbUluZGV4KyspIHtcclxuICAgICAgICBpZiAoc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmhhc093blByb3BlcnR5KCdsb2FkUGljdHVyZScpKVxyXG4gICAgICAgICAgICBzY3JlZW5PYmplY3RzW2l0ZW1JbmRleF0ubG9hZFBpY3R1cmUoKTtcclxuICAgICAgICBzY3JlZW5PYmplY3RzW2l0ZW1JbmRleF0uaW5pdChkcmF3TWV0aG9kc1tpdGVtSW5kZXhdKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRVaUVsZW1lbnRzID0gaW5pdFVpRWxlbWVudHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG5mdW5jdGlvbiBsb2FkV2luZG93KF9hKSB7XHJcbiAgICB2YXIgbG9hZFN0YXR1cyA9IF9hLmxvYWRTdGF0dXM7XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkLXNjcmVlbicpO1xyXG4gICAgd2luZG93RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc3dpdGNoIChsb2FkU3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImxvYWRcIjpcclxuICAgICAgICAgICAgYXBwTWVudV8xLnNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkLWNpcmNsZS1pbWFnZSBsb2FkLWNpcmNlLXdyYXBwZXJcXFwiPjwvZGl2PjxwPkxvYWRpbmcuLi48L3A+XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzZXJ2ZXJFcnJvclwiOlxyXG4gICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiPHA+RmFpbCB0byBsb2FkIGRhdGE8L3A+PGJ1dHRvbiBpZD1cXFwicmVsb2FkLXBhZ2VcXFwiIGNsYXNzPVxcXCJidG4tb3JhbmdlIGJ0bi1tYWluXFxcIj5SZWxvYWQ8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgcmVsb2FkUGFnZShcIiNyZWxvYWQtcGFnZVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgYXBwTWVudV8xLmhpZGUod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVsb2FkUGFnZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciByZWxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICByZWxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sb2FkV2luZG93ID0gbG9hZFdpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlc1wiKTtcclxuZXhwb3J0cy5jcmVhdGVXaW5kb3cgPSBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEuY3JlYXRlV2luZG93O1xyXG5leHBvcnRzLmNyZWF0ZVNoYXBlUm91bmRCb3JkZXIgPSBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEuY3JlYXRlU2hhcGVSb3VuZEJvcmRlcjtcclxuZXhwb3J0cy5jcmVhdGVSb3VuZEJ1dHRvbiA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbjtcclxudmFyIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEgPSByZXF1aXJlKFwiLi93ZWFwb25zL3dlYXBvbnNEaXNwbGF5TW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBkcmF3KGNvbnRleHQsIGVsZW1lbnQpIHtcclxuICAgIHZhciBwcm9wZXJ0eSA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwcm9wZXJ0eVtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGNvbnRleHRbZWxlbWVudF0uYXBwbHkoY29udGV4dCwgcHJvcGVydHkpO1xyXG59XHJcbmV4cG9ydHMuZHJhdyA9IGRyYXc7XHJcbmZ1bmN0aW9uIGNyZWF0ZUxhc2VyQnVsbGV0KGRhdGEpIHtcclxuICAgIGlmICghZGF0YS5jdHgpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIm5vIGNvbnRleHRcIik7XHJcbiAgICBpZiAoZGF0YS5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGRhdGEudHlwZSA9PSBcImJsYXN0ZXJcIilcclxuICAgICAgICB3ZWFwb25zRGlzcGxheU1vZHVsZV8xLndlYXBvbjEoZGF0YSwgZHJhdyk7XHJcbiAgICBpZiAoZGF0YS5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgZGF0YS50eXBlID09IFwiYmxhc3RlclwiKVxyXG4gICAgICAgIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEud2VhcG9uMShkYXRhLCBkcmF3KTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBkYXRhLnR5cGUgPT0gXCJiZWFtXCIpXHJcbiAgICAgICAgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMS53ZWFwb24xKGRhdGEsIGRyYXcpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlTGFzZXJCdWxsZXQgPSBjcmVhdGVMYXNlckJ1bGxldDtcclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY3R4LCBwaWN0dXJlTmFtZSkge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgZHJhdy5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFtjdHgsICdkcmF3SW1hZ2UnLCBwaWN0dXJlTmFtZV0sIHByb3BzKSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xyXG5mdW5jdGlvbiBjbGVhckZpZWxkKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgZHJhdyhjdHgsICdjbGVhclJlY3QnLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLmNsZWFyRmllbGQgPSBjbGVhckZpZWxkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdWlFbGVtZW50TW9kdWxlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dhcnBFbGVtZW50RHJvd1wiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHVpSW1hZ2Uoc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5kcmF3SW1hZ2UocHJvcGVydHllcy5iYWNrZ3JvdW5kLCAwLCAwLCBwcm9wZXJ0eWVzLnNXaWR0aCwgcHJvcGVydHllcy5zSGVpZ2h0LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMudWlJbWFnZSA9IHVpSW1hZ2U7XHJcbmZ1bmN0aW9uIHVpVGV4dChzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnNhdmUoKTtcclxuICAgIHZhciB0ZXh0V2lkdGggPSBwcm9wZXJ0eWVzLmN0eC5tZWFzdXJlVGV4dChzaGFwZVByb3BlcnR5ZXMudGV4dCkud2lkdGggLyAzLjI7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZvbnQgPSBzaGFwZVByb3BlcnR5ZXMuZm9udFNpemU7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLmJvcmRlckNvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQsIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIC8vcHJvcGVydHllcy5jdHguc2F2ZSgpO1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC50cmFuc2xhdGUoMCwwKTtcclxuICAgIC8vIHByb3BlcnR5ZXMuY3R4LnJlc3RvcmUoKTtcclxufVxyXG5leHBvcnRzLnVpVGV4dCA9IHVpVGV4dDtcclxuZnVuY3Rpb24gdWlSZXBlYXRJbWFnZShzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICB2YXIgcGF0ID0gcHJvcGVydHllcy5jdHguY3JlYXRlUGF0dGVybihwcm9wZXJ0eWVzLmJhY2tncm91bmQsICdyZXBlYXQteCcpO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHBhdDtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGwoKTtcclxufVxyXG5leHBvcnRzLnVpUmVwZWF0SW1hZ2UgPSB1aVJlcGVhdEltYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiB3YXJwRWxlbWVudCgpIHtcclxuICAgIHZhciBjdHggPSBudWxsO1xyXG4gICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDE3MCwgMCk7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwibWFnZW50YVwiKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjAuNVwiLCBcImJsdWVcIik7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIxLjBcIiwgXCJyZWRcIik7XHJcbn1cclxuZXhwb3J0cy53YXJwRWxlbWVudCA9IHdhcnBFbGVtZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlzcGxheU1vZHVsZXNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGVtZW50cy91aUVsZW1lbnRNb2R1bGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWxlbWVudHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiB3ZWFwb24xKGRhdGEsIGRyYXcpIHtcclxuICAgIGRyYXcoZGF0YS5jdHgsICdkcmF3SW1hZ2UnLCBkYXRhLmltZywgZGF0YS5zeCwgZGF0YS5zeSwgZGF0YS5zV2lkdGgsIGRhdGEuc0hlaWdodCwgZGF0YS54LCBkYXRhLnksIGRhdGEud2lkdGggKyAxMCwgZGF0YS5oZWlnaHQgKyAxMCk7XHJcbn1cclxuZXhwb3J0cy53ZWFwb24xID0gd2VhcG9uMTtcclxuZnVuY3Rpb24gd2VhcG9uMWJhY2t3YXJkKGRhdGEsIGRyYXcpIHtcclxuICAgIGRyYXcoZGF0YS5jdHgsICdkcmF3SW1hZ2UnLCBkYXRhLmltZywgZGF0YS5zeCwgZGF0YS5zeSwgZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQsIGRhdGEueCwgZGF0YS55LCBkYXRhLndpZHRoICsgMTAsIGRhdGEuaGVpZ2h0ICsgMTApO1xyXG59XHJcbmV4cG9ydHMud2VhcG9uMWJhY2t3YXJkID0gd2VhcG9uMWJhY2t3YXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coY3R4LCBwcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgX2EgPSB0aGlzLmdldFNjcmVlblNpemUoKSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgY3R4LmZpbGxSZWN0KHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICA7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVXaW5kb3cgPSBjcmVhdGVXaW5kb3c7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlUm91bmRCb3JkZXIoc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcHJvcGVydHllcy5iYWNrZ3JvdW5kO1xyXG4gICAgaWYgKHByb3BlcnR5ZXMuZ3JhZGllbnQpIHtcclxuICAgICAgICB2YXIgZ3JhZGllbnQgPSBwcm9wZXJ0eWVzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChwcm9wZXJ0eWVzLnRvcFgsIHByb3BlcnR5ZXMudG9wWSwgcHJvcGVydHllcy5ib3R0b21YLCBwcm9wZXJ0eWVzLmJvdHRvbVkpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBwcm9wZXJ0eWVzLmJhY2tncm91bmQpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBwcm9wZXJ0eWVzLmJhY2tHcm91bmRGaW5hbCk7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubW92ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGggLSBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLSBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7IC8qKi9cclxuICAgIGlmIChwcm9wZXJ0eWVzLmlzQm9yZGVyKSB7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlU3R5bGUgPSBwcm9wZXJ0eWVzLmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvcGVydHllcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsKCk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyID0gY3JlYXRlU2hhcGVSb3VuZEJvcmRlcjtcclxuZnVuY3Rpb24gY3JlYXRlUm91bmRCdXR0b24oc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgdmFyIHRleHRXaWR0aCA9IHByb3BlcnR5ZXMuY3R4Lm1lYXN1cmVUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0KS53aWR0aCAvIDMuMjtcclxuICAgIHZhciBidXR0b25XaWR0aCA9IHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LmxlZnRQYWRkaW5nICsgdGV4dFdpZHRoICsgcHJvcGVydHllcy50ZXh0UHJvcGVydHkucmlnaHRQYWRkaW5nO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLmJhY2tncm91bmQ7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4Lm1vdmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCwgcHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpOyAvKiovXHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LmZpbGxSZWN0KHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGwoKTtcclxuICAgIGlmIChwcm9wZXJ0eWVzLmlzQm9yZGVyKSB7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlU3R5bGUgPSBwcm9wZXJ0eWVzLmJvcmRlckNvbG9yO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVXaWR0aCA9IHByb3BlcnR5ZXMuYm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvcGVydHllcy5jdHguZm9udCA9IHNoYXBlUHJvcGVydHllcy5mb250U2l6ZTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LnRleHRDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy50ZXh0UHJvcGVydHkuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5sZWZ0UGFkZGluZywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLyAyICsgcHJvcGVydHllcy50ZXh0UHJvcGVydHkudG9wUGFkZGluZyk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVSb3VuZEJ1dHRvbiA9IGNyZWF0ZVJvdW5kQnV0dG9uO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9