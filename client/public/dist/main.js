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
exports.push([module.i, ".btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\n.btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\nbody {\n    font-family: 'Roboto';\n    color: #ffffff;\n    background: #333;\n    margin: 0;\n    padding: 0;\n    -khtml-user-select: none;\n    user-select: none; }\n    body #preloader {\n        visibility: hidden;\n        width: 0px;\n        height: 0px; }\n\n.static-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100vw; }\n    .static-wrapper asside.menu-backgroud {\n        background: #2f2231; }\n    .static-wrapper asside {\n        z-index: 10; }\n        .static-wrapper asside .main-menu {\n            top: 10px; }\n            .static-wrapper asside .main-menu ul {\n                display: block;\n                top: 105px;\n                position: relative;\n                text-shadow: 0px 0px 6px rgba(92, 2, 108, 0.5);\n                text-transform: uppercase; }\n                .static-wrapper asside .main-menu ul li {\n                    min-width: 160px;\n                    padding: 10px;\n                    list-style: none; }\n                .static-wrapper asside .main-menu ul a {\n                    color: #EA6C00;\n                    text-decoration: none;\n                    font-size: 17px; }\n                .static-wrapper asside .main-menu ul a:active {\n                    color: red; }\n\n.content-wrapper {\n    width: 100%;\n    max-height: 100vh;\n    overflow-y: scroll;\n    z-index: 1100; }\n    .content-wrapper .menu-pages-wrapper {\n        background: #161325;\n        margin-top: -20px;\n        min-height: 100vh;\n        padding: 20px; }\n\n.content-wrapper::-webkit-scrollbar {\n    width: 12px; }\n\n.content-wrapper::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n    border-radius: 10px; }\n\n.content-wrapper::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(71, 6, 83, 0.8);\n    -webkit-box-shadow: inset 0 0 6px black; }\n\n.content-wrapper::-webkit-scrollbar-thumb:window-inactive {\n    background: rgba(255, 0, 0, 0.1); }\n\n.dialog-box {\n    position: absolute;\n    margin: 0 auto;\n    padding: 10px;\n    min-width: 100%;\n    min-height: 100vh;\n    position: fixed;\n    left: 0; }\n    .dialog-box .dialog-wrapper {\n        display: flex;\n        height: 100vh;\n        justify-content: center;\n        align-items: center; }\n        .dialog-box .dialog-wrapper .dialog-window {\n            background: #340054;\n            padding: 20px;\n            min-width: 300px;\n            min-height: 80px;\n            border-radius: 5px; }\n            .dialog-box .dialog-wrapper .dialog-window form input[type=\"text\"], .dialog-box .dialog-wrapper .dialog-window form input[type=\"email\"], .dialog-box .dialog-wrapper .dialog-window form input[type=\"password\"] {\n                width: 100%;\n                padding: 10px;\n                border-radius: 5px;\n                background: rgba(255, 255, 255, 0.3);\n                border: 0px;\n                color: white; }\n            .dialog-box .dialog-wrapper .dialog-window form label {\n                font-size: 12px;\n                color: #eee; }\n            .dialog-box .dialog-wrapper .dialog-window form .alert-message {\n                font-size: 12px; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message p {\n                    padding: 10px; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .reject-text {\n                    border: 1px solid red;\n                    color: red; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .warning-text {\n                    border: 1px solid yellow;\n                    color: yellow; }\n                .dialog-box .dialog-wrapper .dialog-window form .alert-message .success-text {\n                    border: 1px solid green;\n                    color: green; }\n            .dialog-box .dialog-wrapper .dialog-window div {\n                padding: 10px; }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-bottom-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-bottom-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-bottom-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n\n#wrapper section {\n    z-index: 5;\n    top: 0; }\n\n.gameBackground {\n    background: #000; }\n\n.game-fields {\n    position: absolute; }\n\n.game-field-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    align-items: center; }\n\n.hide-menu {\n    display: none; }\n\n.result-message-wrapper {\n    display: flex;\n    color: orange;\n    justify-content: center;\n    height: 80vh;\n    align-items: center; }\n    .result-message-wrapper p {\n        text-align: center;\n        font-size: 20px; }\n    .result-message-wrapper p:first-letter {\n        text-transform: uppercase; }\n\nul.show-result-area {\n    list-style: none; }\n    ul.show-result-area li {\n        padding: 10px; }\n        ul.show-result-area li .rate-number {\n            color: red;\n            flex-basis: 5%; }\n        ul.show-result-area li .item-name {\n            color: orange;\n            flex-basis: 60%; }\n        ul.show-result-area li .item-coin {\n            color: green;\n            flex-basis: 15%; }\n        ul.show-result-area li .item-points {\n            color: orange;\n            flex-basis: 15%; }\n        ul.show-result-area li .item-date {\n            font-size: 10px;\n            color: grey;\n            flex-basis: 5%; }\n        ul.show-result-area li p {\n            display: flex;\n            font-size: 14px;\n            color: #bdbdbd; }\n    ul.show-result-area li:nth-child(odd) {\n        background: #130517; }\n\n.load-screen-wrapper {\n    z-index: 1000; }\n    .load-screen-wrapper .load-circe-wrapper {\n        width: 100px;\n        height: 100px;\n        background-size: cover;\n        animation: load-circle-rotate 1s infinite steps(11, end); }\n    .load-screen-wrapper p {\n        text-align: center; }\n\n@keyframes load-circle-rotate {\n    0% {\n        transform: rotate(0deg); }\n    100% {\n        transform: rotate(360deg); } }\n\n.btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #EA6C00; }\n\n.btn-orange {\n    background: #EA6C00;\n    padding: 10px;\n    margin: 0 auto;\n    display: block;\n    min-width: 250px; }\n\n.menu-screen .settings-slider {\n    margin: 0 auto;\n    width: 50%;\n    -webkit-appearance: none;\n    height: 25px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    transition: opacity .2s; }\n\n.menu-screen .settings-slider:hover {\n    opacity: 1; }\n\n.menu-screen .settings-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    background: #4CAF50;\n    cursor: pointer;\n    border-radius: 50%; }\n\n.menu-screen .settings-slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    background: #4CAF50;\n    cursor: pointer;\n    border-radius: 50%; }\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px; }\n    .switch input {\n        opacity: 0;\n        width: 0;\n        height: 0; }\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s; }\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s; }\n\ninput:checked + .slider {\n    background-color: #2196F3; }\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px); }\n\n.slider.round {\n    border-radius: 34px; }\n\n.slider.round:before {\n    border-radius: 50%; }\n", ""]);
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
                            speed: shipDetails.speed, isShot: shipDetails.isShot,
                            status: shipDetails.status, name: shipDetails.name,
                            bulletTypeNumber: shipDetails.bulletType, rapidFire: shipDetails.rapidFire, pointsPerUnit: shipDetails.pointsPerUnit,
                            healthPoint: shipDetails.healthPoint, animationSteps: shipDetails.animationSteps, damage: shipDetails.damage,
                            objectOwner: shipDetails.objectOwner, guns: (shipDetails.guns) ? shipDetails.guns : [], explosion: shipDetails.explosionAnimation,
                            numberOfVerticalItems: shipDetails.numberOfVerticalItems, isMove: shipDetails.isMove, isShoot: shipDetails.isShoot,
                            spotDistance: shipDetails.spotDistance, behavior: behavior, verticalSpeed: (shipDetails.verticalSpeed) ? shipDetails.verticalSpeed : null,
                            isBoss: (shipDetails.isBoss) ? shipDetails.isBoss : false, extraObjects: extraObjects, collideExplosionAnimation: shipDetails.collideExplosionAnimation // load coin element from server 
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

/***/ "./src/appMenu/menuSettings.ts":
/*!*************************************!*\
  !*** ./src/appMenu/menuSettings.ts ***!
  \*************************************/
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
var serverRequestModules_1 = __webpack_require__(/*! ../server/serverRequestModules */ "./src/server/serverRequestModules.ts");
function gameSettingsMenu(_a) {
    var data = __rest(_a, []);
    var settingsMenu = {
        volumeDisplay: document.querySelector('#volume-display'),
        soundLevel: document.querySelector('#soundLevel'),
        volumeEffectDisplay: document.querySelector('#volume-effect-display'),
        soundEffectLevel: document.querySelector('#soundEffect'),
        soundOnSwitcher: document.querySelector('#soundOn'),
    };
    settingsMenu.volumeDisplay.innerHTML = (data.soundLevel) ? data.soundLevel : "";
    settingsMenu.soundLevel['value'] = (data.soundLevel) ? data.soundLevel : 0;
    settingsMenu.volumeEffectDisplay.innerHTML = (data.soundEffect) ? data.soundEffect : "";
    settingsMenu.soundEffectLevel['value'] = (data.soundEffect) ? data.soundEffect : 0;
    settingsMenu.soundOnSwitcher['checked'] = data.soundOn;
    process.env.MAIN_GAME_SOUND_ON = data.soundOn.toString();
    process.env.MAIN_GAME_SOUND = data.soundLevel.toString();
    process.env.MAIN_GAME_SOUND_EFFECTS = data.soundEffect.toString();
}
exports.gameSettingsMenu = gameSettingsMenu;
function gameSettingsMenuInit() {
    var menuSettingsForm = document.querySelector('#menu-settings-form');
    var context = this;
    var gameData = this.showGameInfo();
    var settingsData = gameData.settings;
    var data = {
        soundLevel: settingsData.soundLevel,
        soundEffect: settingsData.soundEffect,
        soundOn: settingsData.soundOn,
        autoshoot: settingsData.autoshoot,
        fullScreen: settingsData.fullScreen,
        keyControls: settingsData.keyControls,
        screenResolution: settingsData.screenResolution,
        screenVariaton: settingsData.screenVariaton
    };
    gameSettingsMenu(data);
    menuSettingsForm.addEventListener('change', function (event) {
        event.preventDefault();
        var data = transformMenuData(this);
        gameSettingsMenu(data);
        gameData.gameData.levelSounds.changeVolume({ volume: process.env.MAIN_GAME_SOUND });
        gameData.gameData.levelSounds.turnSoundOff({ value: data.soundOn });
    });
    menuSettingsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var menuData = transformMenuData(this);
        var settingsResult = replaceData({ newData: menuData, settingsData: data });
        serverRequestModules_1.writeLocalData({ fileName: 'game-settings.json', data: JSON.stringify(settingsResult) });
    });
}
exports.gameSettingsMenuInit = gameSettingsMenuInit;
function replaceData(_a) {
    var newData = _a.newData, settingsData = _a.settingsData;
    for (var _i = 0, _b = Object.entries(newData); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], value = _c[1];
        if (key && value || key && typeof value === "boolean") {
            settingsData[key] = value;
        }
    }
    return settingsData;
}
function transformMenuData(data) {
    if (!data)
        throw Error("No data to transform");
    var obj = { soundLevel: null, soundOn: null, soundEffect: null };
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (item.name && item.value) {
            (item.value === "on") ? obj[item.name] = item.checked : obj[item.name] = item.value;
        }
    }
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
        this.sound = (data.sound) ? data.sound : null;
        //this.picturesWidth = data.picturesWidth;
    }
    return BulletConstruct;
}());
exports.BulletConstruct = BulletConstruct;
/*
"sound": {
                        "levelSound": "/public/sound/weapons/Laser_Shoot7.mp3",
                        "soundLoop": false
                    }
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
        this.isShot = data.isShot;
        this.verticalSpeed = (data.verticalSpeed) ? data.verticalSpeed : Math.floor(Math.random() * data.speed + 1);
        this.spotDistance = (data.isBoss) ? data.spotDistance : Math.floor(Math.random() * data.spotDistance);
        this.yFinal = 0;
        this.xFinal = 0;
        this.behavior = data.behavior;
        this.direction = null;
        this.isBoss = data.isBoss;
        this.extraObjects = data.extraObjects;
        this.collideExplosionAnimation = data.collideExplosionAnimation;
        /// load amount fo coins, ando coins object from server
    }
    return EnemyObject;
}());
exports.EnemyObject = EnemyObject;
EnemyObject.prototype.placeEnemyes = enemiesModules_1.placeEnemyes;
EnemyObject.prototype.moveEnemyes = enemiesModules_1.moveEnemyes;
EnemyObject.prototype.loadEnemyes = enemiesModules_1.loadEnemyes;
EnemyObject.prototype.shot = enemiesModules_1.shot;
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
        this.collideExplosionAnimation = data.collideExplosionAnimation;
        this.sound = (data.sound) ? data.sound : null;
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
__export(__webpack_require__(/*! ./soundConstructor */ "./src/constructors/soundConstructor.ts"));


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
var menuSettings_1 = __webpack_require__(/*! ../appMenu/menuSettings */ "./src/appMenu/menuSettings.ts");
var soundModules_1 = __webpack_require__(/*! ../engine/soundModules */ "./src/engine/soundModules.ts");
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
            settings: this.gameInitData.gameData.gameSetings,
            levelSounds: this.gameInitData.gameData.levelSounds,
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
Game.prototype.levelChangeWindow = gameUiModules_1.levelChangeWindow;
Game.prototype.gameOverWindow = gameUiModules_1.gameOverWindow;
Game.prototype.gameWinWindow = gameUiModules_1.gameWinWindow;
Game.prototype.showGameStats = gameUiModules_1.showGameStats;
Game.prototype.initUiElements = gameUiModules_1.initUiElements;
Game.prototype.mapSoundChanger = satartGame_1.mapSoundChanger;
Game.prototype.gameStart = satartGame_1.gameStart;
Game.prototype.backToStartScreen = satartGame_1.backToStartScreen;
Game.prototype.exitTheGame = satartGame_1.exitTheGame;
Game.prototype.nextLevelDataReload = changeLevels_1.nextLevelDataReload;
Game.prototype.changeLevelProcedure = engineModules_1.changeLevelProcedure;
Game.prototype.getRandomColor = engineModules_1.getRandomColor;
Game.prototype.mapRanomObjectSpawn = gameSideObjectsModule_1.mapRanomObjectSpawn;
Game.prototype.initGrappleObject = gameGrappleObjectsModule_1.initGrappleObject;
Game.prototype.gameSettingsMenuInit = menuSettings_1.gameSettingsMenuInit;
Game.prototype.createSound = soundModules_1.createSound;


/***/ }),

/***/ "./src/constructors/soundConstructor.ts":
/*!**********************************************!*\
  !*** ./src/constructors/soundConstructor.ts ***!
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
var soundModules_1 = __webpack_require__(/*! ../engine/soundModules */ "./src/engine/soundModules.ts");
var SoundCreator = /** @class */ (function () {
    function SoundCreator(_a) {
        var data = __rest(_a, []);
        this.soundObject = new Audio();
        this.soundUrl = __dirname + data.soundUrl;
        this.soundLoop = data.soundLoop;
        this.soundOn = data.soundOn;
        this.volume = process.env.MAIN_GAME_SOUND;
        this.defaultUrl = (data.defaultUrl) ? data.defaultUrl : null;
    }
    return SoundCreator;
}());
exports.SoundCreator = SoundCreator;
SoundCreator.prototype.changeVolume = soundModules_1.changeVolume;
SoundCreator.prototype.changeTrack = soundModules_1.changeTrack;
SoundCreator.prototype.initSound = soundModules_1.initSound;
SoundCreator.prototype.soundPlay = soundModules_1.soundPlay;
SoundCreator.prototype.soundPause = soundModules_1.soundPause;
SoundCreator.prototype.makeLoop = soundModules_1.makeLoop;
SoundCreator.prototype.turnSoundOff = soundModules_1.turnSoundOff;


/***/ }),

/***/ "./src/constructors/userConstructor.ts":
/*!*********************************************!*\
  !*** ./src/constructors/userConstructor.ts ***!
  \*********************************************/
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
var playerShipModule_1 = __webpack_require__(/*! ../engine/playerShipModule */ "./src/engine/playerShipModule.ts");
var engineModules_1 = __webpack_require__(/*! ../engine/engineModules */ "./src/engine/engineModules.ts");
var enemiesModules_1 = __webpack_require__(/*! ../enemies/enemiesModules */ "./src/enemies/enemiesModules.ts");
var PlayerShip = /** @class */ (function () {
    function PlayerShip(_a) {
        var data = __rest(_a, []);
        this.data = data.data;
        this.points = data.points;
        this.numberOflife = data.numberOflife;
        this.maxOfLife = data.numberOflife;
        this.healthPoint = data.healthPoint + data.armor;
        this.maxHealth = data.healthPoint + data.armor;
        this.x = data.x - (data.width / 2);
        this.y = data.y - (data.height / 2);
        this.xFinal = data.x;
        this.yFinal = data.y;
        this.collisionAllow = true;
        this.objectOwner = "player";
        this.width = data.width;
        this.height = data.height;
        this.xAdj = 0;
        this.speed = data.speed;
        this.explosion = data.explosion;
        this.damage = data.damage;
        this.sx = data.sx;
        this.sy = data.sy;
        this.picturesWidth = data.picturesWidth;
        this.imageHeight = data.imageHeight;
        this.sWidth = data.sWidth;
        this.sHeight = data.sHeight;
        this.animationSteps = data.animationSteps;
        this.numberOfItems = data.numberOfItems;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.detectFrame = 0;
        this.collideExplosionAnimation = data.collideExplosionAnimation;
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
PlayerShip.prototype.shipControl = playerShipModule_1.shipControl;
PlayerShip.prototype.moveShip = playerShipModule_1.moveShip;
PlayerShip.prototype.placeShip = playerShipModule_1.placeShip;
PlayerShip.prototype.setContext = playerShipModule_1.setContext;
PlayerShip.prototype.getObjectPosition = engineModules_1.getObjectPosition;
PlayerShip.prototype.takeDamage = enemiesModules_1.takeDamage;
PlayerShip.prototype.enemyAnimation = enemiesModules_1.enemyAnimation;
PlayerShip.prototype.placeEnemyes = enemiesModules_1.placeEnemyes;


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
var costructors = __importStar(__webpack_require__(/*! ../constructors/index */ "./src/constructors/index.ts"));
var displayModules_1 = __webpack_require__(/*! ../view/displayModules */ "./src/view/displayModules.ts");
var gameSideObjectsModule_1 = __webpack_require__(/*! ../engine/gameSideObjectsModule */ "./src/engine/gameSideObjectsModule.ts");
var gameGrappleObjectsModule_1 = __webpack_require__(/*! ../engine/gameGrappleObjectsModule */ "./src/engine/gameGrappleObjectsModule.ts");
var soundModules_1 = __webpack_require__(/*! ../engine/soundModules */ "./src/engine/soundModules.ts");
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
function shot(BulletConstruct, mainGameObject, SoundCreator) {
    if (mainGameObject.gameInitData.gamePause || !this.isShot)
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
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems,
                sound: item.sound
            });
            bullet_1.img.src = bullet_1.texture;
            //console.log("enemy shoot")
            var soundProps = {
                soundUrl: bullet_1.sound.levelSound,
                soundLoop: bullet_1.sound.soundLoop,
            };
            bullet_1.sound.soundObject = soundModules_1.initSoundObject({ SoundCreator: SoundCreator, mainGameObject: mainGameObject, soundProps: soundProps });
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
exports.shot = shot;
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
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "explosion");
        this.objectPresent = false;
        return;
    }
    /* Game grapple object hit detection */
    if (this.objectPresent && this.objectOwner == "grappleObject" &&
        hitObject.objectOwner == "player" &&
        !hitObject.hasOwnProperty('bulletType')) {
        this.objectPresent = false;
        mainGameObject.gameInitData.grappleObjectOnScreen = false;
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "explosion");
        this[this.grapplePower.methodName]({ allGameSideObjects: mainGameObject, playerShipData: hitObject, mainGameObject: mainGameObject });
    }
    /* Hit det dection collision */
    if (this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "collide" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "collide" && hitObject.objectOwner == "enemy" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "enemy" && hitObject.objectOwner == "collide" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "environment" && hitObject.objectOwner == "player" ||
        this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "environment" && hitObject.objectOwner == "enemy") {
        unitDamage.call(this, null, mainGameObject);
        this.enemyDamageAnimation();
        if (this.healthPoint <= 0) {
            this.objectPresent = false;
            //collideExplosionAnimation
            gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "collideExplosionAnimation");
            gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "explosion");
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
        if (this.gameInitData.timeToEressLevel < 0 && !leveChangeStatus) {
            //console.log('change music')
            this.gameInitData.levelWindowDescription = true;
            this.changeLevelProcedure();
            //this.mapSoundChanger({soundStatus:'regular_level'})
        }
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
        this.gameInitData.levelWindowDescription = false;
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
    var letters = '0123456789ABCDEF'; // '0123456789ABCDEF'  '6789ABC';
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
                        grapplePower: target.grapplePower,
                        sound: target.sound
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
                            levelSounds: context.gameInitData.gameData.levelSounds,
                            preloadData: context.gameInitData.gameData.preloadData,
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
                        context.gameInitData.levelWindowDescription = false;
                    }, 5000);
                    horizontalVerticalSearch.call(this, this.gameInitData);
                    this.mapSoundChanger({ soundStatus: 'regular_level' });
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
        var serverLocation, levelData, levelObjects, grappleObjects, preloadData, gameSetings, userData, enemyData;
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
                    return [4 /*yield*/, serverRequestModules_1.getLocalData({ fileName: 'preloadData.json' })];
                case 4:
                    preloadData = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getLocalData({ fileName: 'game-settings.json' })];
                case 5:
                    gameSetings = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.userShip.url,
                            method: serverLocation.userShip.method,
                            data: null,
                            headers: { 'usership': gameInformation.shipConfiguration }
                        })];
                case 6:
                    userData = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.enemylData.url,
                            method: serverLocation.enemylData.method,
                            data: null,
                            headers: { 'ship-type-number': levelData.enemyType }
                        })];
                case 7:
                    enemyData = _a.sent();
                    engineModules_1.preloadImage(enemyData);
                    engineModules_1.preloadImage(levelData);
                    engineModules_1.preloadImage(levelObjects);
                    return [2 /*return*/, {
                            levelData: levelData,
                            levelObjects: levelObjects,
                            grappleObjects: grappleObjects,
                            preloadData: preloadData,
                            gameSetings: gameSetings,
                            userData: userData,
                            enemyData: enemyData
                        }];
            }
        });
    });
}
exports.serverRequest = serverRequest;
function gameDataInit(PlayerShip, soundObject) {
    return __awaiter(this, void 0, void 0, function () {
        var gameField, gameActionField, gameUIfield, level, shipType, shipLife, res, levelData, levelObjects, grappleObjects, preloadData, gameSetings, userData, enemyData, shipData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loadScreen_1.loadWindow({ loadStatus: "load" });
                    gameField = document.querySelector('#gamefield'), gameActionField = document.querySelector('#gameObjectsfield'), gameUIfield = document.querySelector('#gameUifield');
                    level = 2, shipType = 1, shipLife = 5;
                    return [4 /*yield*/, serverRequest({ level: level, shipConfiguration: shipType })];
                case 1:
                    res = _a.sent();
                    levelData = res.levelData;
                    levelObjects = res.levelObjects;
                    grappleObjects = res.grappleObjects;
                    preloadData = res.preloadData;
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
                    shipData = {
                        data: userData,
                        points: 0,
                        numberOflife: shipLife,
                        maxOfLife: shipLife,
                        healthPoint: 300,
                        armor: userData.armor,
                        x: 0,
                        y: 0,
                        xFinal: userData.x,
                        yFinal: userData.y,
                        collisionAllow: true,
                        objectOwner: "player",
                        width: userData.width,
                        height: userData.height,
                        xAdj: 0, speed: userData.speed,
                        explosion: userData.explosionAnimation,
                        damage: userData.damage,
                        sx: userData.sx, sy: userData.sy, picturesWidth: userData.imageWidth,
                        imageHeight: userData.imageHeight,
                        sWidth: userData.sWidth, sHeight: userData.sHeight,
                        animationSteps: userData.animationSteps,
                        numberOfItems: userData.numberOfItems,
                        numberOfVerticalItems: userData.numberOfVerticalItems,
                        collideExplosionAnimation: userData.collideExplosionAnimation
                    };
                    return [2 /*return*/, { data: {
                                ctx: null,
                                gameField: (gameField) ? gameField : null,
                                gameActionField: (gameActionField) ? gameActionField : null,
                                gameUIField: (gameUIfield) ? gameUIfield : null,
                                gameData: {
                                    currentLevel: level,
                                    currentPoint: 0,
                                    gameCoins: 0,
                                    playerObject: new PlayerShip(shipData),
                                    levelData: levelData,
                                    levelObjects: levelObjects,
                                    grappleObjects: grappleObjects,
                                    levelSounds: (soundObject) ? soundObject : null,
                                    preloadData: preloadData,
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
                                levelWindowDescription: false,
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
    this.mapSoundChanger({ soundStatus: 'regular_level' });
    this.gameInitData.gameOver = false;
    this.gameInitData.gameStatus = true;
}
exports.gameStart = gameStart;
function mapSoundChanger(_a) {
    var soundStatus = _a.soundStatus;
    var gameData = this.showGameInfo().gameData;
    var mapSound = gameData.levelData.levelSound;
    var gameSoundObject = gameData.levelSounds;
    switch (soundStatus) {
        case 'start_screen':
            mapSound = gameData.preloadData.startSound;
            break;
        case 'regular_level':
            mapSound = gameData.levelData.levelSound;
            break;
        default:
            mapSound;
    }
    console.log("level musicchange", soundStatus, gameData.levelData);
    gameSoundObject.changeTrack({ url: mapSound });
    gameSoundObject.soundPlay();
}
exports.mapSoundChanger = mapSoundChanger;
function backToStartScreen(PlayerShip) {
    return __awaiter(this, void 0, void 0, function () {
        var soundObject, newInitdata, _i, _a, _b, key, value;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    soundObject = this.showGameInfo().gameData.levelSounds;
                    return [4 /*yield*/, gameDataInit(PlayerShip, soundObject)];
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
                    this.mapSoundChanger({ soundStatus: 'start_screen' });
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var regularEnemyAiModules_1 = __webpack_require__(/*! ../ai/regularEnemyAiModules */ "./src/ai/regularEnemyAiModules.ts");
var constructors = __importStar(__webpack_require__(/*! ../constructors/ */ "./src/constructors/index.ts"));
var soundModules_1 = __webpack_require__(/*! ./soundModules */ "./src/engine/soundModules.ts");
function explosionFire(targetData, mainGameObject, hitObject, SideObject, explosion) {
    var hitX = hitObject.x + hitObject.width / 2, targetX = targetData.x + targetData.width / 2;
    var adjust = Math.max(hitX, targetX) - Math.min(hitX, targetX);
    var explosionData = {
        x: targetData.x - targetData[explosion].width / 2,
        y: (targetData.bulletType || targetData[explosion].central) ? targetData.y - targetData[explosion].width / 2 : targetData.y,
        sx: 0,
        sy: 0,
        objectOwner: "explosion",
        sWidth: targetData[explosion].imageWidth / targetData[explosion].numberOfItems,
        sHeight: targetData[explosion].imageHeight,
        width: targetData[explosion].width * 2,
        height: targetData[explosion].width * 2,
        animationSteps: targetData[explosion].animationSteps,
        target: hitObject.objectOwner,
        numberOfItems: targetData[explosion].imageWidth / targetData[explosion].numberOfItems,
        texture: targetData[explosion].texture,
        speed: hitObject.speed / 2,
        picturesWidth: targetData[explosion].imageWidth,
        sound: targetData[explosion].sound
    };
    var sideObject = new SideObject(__assign({}, explosionData));
    var soundProps = {
        soundUrl: sideObject.sound.levelSound,
        soundLoop: sideObject.sound.soundLoop,
    };
    sideObject.sound.soundObject = soundModules_1.initSoundObject({ SoundCreator: constructors.SoundCreator, mainGameObject: mainGameObject, soundProps: soundProps });
    sideObject.img.onload = function () {
        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
    };
    sideObject.img.src = sideObject.texture;
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
                var gameData, levelData, spawnProbability, context, screenData, levelObjectProps, yPosition, extraObjects, _a, extraObjectObjectsData, sideObject_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            gameData = this.showGameInfo().gameData;
                            levelData = gameData.levelData;
                            spawnProbability = this.gameRandomizer(levelData.objectProbability);
                            context = this;
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
                            extraObjectObjectsData = {
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
                                extraObjects: extraObjects,
                                collideExplosionAnimation: (levelObjectProps.collideExplosionAnimation) ? levelObjectProps.collideExplosionAnimation : null,
                                sound: levelObjectProps.sound
                            };
                            sideObject_1 = new SideObject(__assign({}, extraObjectObjectsData));
                            sideObject_1.img.onload = function () {
                                context.gameInitData.allGameSideObjects = context.gameInitData.allGameSideObjects.concat(sideObject_1);
                            };
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
var soundModules_1 = __webpack_require__(/*! ./soundModules */ "./src/engine/soundModules.ts");
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
        if (mainGameObject.gameInitData.gamePause || !mainGameObject.gameInitData.gameStatus)
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
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems,
                sound: item.sound
            });
            var soundProps = {
                soundUrl: bullet.sound.levelSound,
                soundLoop: bullet.sound.soundLoop,
            };
            //console.log("Player shoot sound", process.env.MAIN_GAME_SOUND_ON)
            bullet.sound.soundObject = soundModules_1.initSoundObject({ SoundCreator: constructors.SoundCreator, mainGameObject: mainGameObject, soundProps: soundProps });
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

/***/ "./src/engine/soundModules.ts":
/*!************************************!*\
  !*** ./src/engine/soundModules.ts ***!
  \************************************/
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
function createSound(SoundCreator) {
    return __awaiter(this, void 0, void 0, function () {
        var gameData, pageSettings, soundProps, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    gameData = this.showGameInfo().gameData;
                    pageSettings = gameData.gameSetings;
                    _a = {};
                    return [4 /*yield*/, gameData.preloadData.startSound];
                case 1:
                    soundProps = (_a.soundUrl = _b.sent(),
                        _a.soundLoop = true,
                        _a.volume = pageSettings.soundLevel,
                        _a);
                    process.env.MAIN_GAME_SOUND = pageSettings.soundLevel.toString();
                    console.log("preload sound");
                    this.gameInitData.gameData.levelSounds = initSoundObject({ SoundCreator: SoundCreator, mainGameObject: this, soundProps: soundProps });
                    return [2 /*return*/, gameData.levelSounds];
            }
        });
    });
}
exports.createSound = createSound;
function initSoundObject(_a) {
    var SoundCreator = _a.SoundCreator, mainGameObject = _a.mainGameObject, soundProps = _a.soundProps;
    var gameData = mainGameObject.showGameInfo().gameData;
    var pageSettings = gameData.gameSetings;
    var data = {
        soundUrl: soundProps.soundUrl,
        soundLoop: soundProps.soundLoop,
        soundOn: pageSettings.soundOn,
        volume: soundProps.volume
    };
    var sound = new SoundCreator(data);
    sound.initSound({ levelSound: soundProps.soundUrl, volume: data.volume });
    return sound;
}
exports.initSoundObject = initSoundObject;
function changeVolume(_a) {
    var volume = _a.volume;
    this.volume = (volume) ? volume : process.env.MAIN_GAME_SOUND_EFFECTS;
    this.soundObject.volume = (process.env.MAIN_GAME_SOUND_ON === 'true') ? this.volume / 1000 : 0;
}
exports.changeVolume = changeVolume;
function changeTrack(_a) {
    var url = _a.url;
    this.soundObject.src = __dirname + url;
    //console.log(__dirname + url, __dirname)
}
exports.changeTrack = changeTrack;
function soundPlay() {
    this.soundObject.play();
}
exports.soundPlay = soundPlay;
function soundPause() {
    this.soundObject.pause();
}
exports.soundPause = soundPause;
function makeLoop() {
    this.soundObject.loop = this.soundLoop;
}
exports.makeLoop = makeLoop;
function turnSoundOff(_a) {
    var value = _a.value;
    this.soundOn = value;
    this.changeVolume({ volume: this.volume });
}
exports.turnSoundOff = turnSoundOff;
function initSound(_a) {
    var levelSound = _a.levelSound, volume = _a.volume;
    this.changeVolume({ volume: volume });
    this.changeTrack({ url: levelSound });
    this.soundPlay();
    this.makeLoop();
}
exports.initSound = initSound;


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
                                    enemy.shot(constructors.BulletConstruct, gameObject, constructors.SoundCreator);
                                    gameObject.deleteObjects(enemy);
                                    gameObject.hitDetection(playerShipData, [enemy], gameObject, constructors.GrappleObject);
                                }
                            }
                            if (!gameObject.gameInitData.gameOver) {
                                playerShipData.placeShip();
                                playerShipData.placeEnemyes(gameObject);
                                playerShipData.enemyAnimation();
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
                            if (gameObject.gameInitData.levelChange) {
                                //gameObject.levelChangeWindow()
                                gameObject.warpEffect();
                            }
                            if (gameObject.gameInitData.levelWindowDescription) {
                                gameObject.levelChangeWindow();
                            }
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
        var wrapper, mainMenu, gameState, navigation_1, gameObject, playerShipData, navigation, engine, contexts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    process.env.MAIN_GAME_SOUND = '';
                    process.env.MAIN_GAME_SOUND_EFFECTS = '';
                    process.env.MAIN_GAME_SOUND_ON = '';
                    process.env.GAME_STATUS = '';
                    if (true)
                        process.env.HOST = 'http://localhost:3000/';
                    else {}
                    ;
                    wrapper = document.querySelector("#wrapper");
                    mainMenu = document.querySelector("#main-menu");
                    return [4 /*yield*/, gameDataModules.gameDataInit(constructors.PlayerShip, null)];
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
                    navigation = appMenu_1.appMenu(gameObject, appMenu_1.dialogWindow);
                    navigation.menu.init();
                    gameObject.gameSettingsMenuInit();
                    gameObject.createSound(constructors.SoundCreator);
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
                    console.log(info);
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
function writeLocalData(_a) {
    var fileName = _a.fileName, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            if (!fileName)
                throw Error("no local files");
            console.log(1, __dirname, fs, fileName);
            fs.writeFile(__dirname + '/public/data/' + fileName, data, function (err) {
                console.error(err);
                if (err)
                    throw err;
            });
            return [2 /*return*/];
        });
    });
}
exports.writeLocalData = writeLocalData;
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

/***/ "./src/ui/gameUiModels/levelChangeScreen.ts":
/*!**************************************************!*\
  !*** ./src/ui/gameUiModels/levelChangeScreen.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uiModelMethods_1 = __webpack_require__(/*! ./uiModelMethods */ "./src/ui/gameUiModels/uiModelMethods.ts");
function levelChangeScreen(data, ctx, width, height, pictureDirrection, info) {
    var levelData = info.sourse.levelData;
    return data || [
        {
            name: "Screen name",
            text: "Warp to the next level",
            description: "text for game over window",
            fontSize: "30px Roboto",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 50,
                x: width / 2 - 250,
                y: height / 3 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, .4)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        },
        {
            name: "wrap heade",
            text: "" + levelData.description.name,
            description: "text for game over window",
            fontSize: "100px Roboto",
            clicked: false,
            propertyes: {
                ctx: ctx,
                width: 0,
                height: 50,
                x: width / 2 - 250,
                y: height / 2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, .4)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }, {
            name: "rwarp description",
            text: "" + levelData.description.description,
            description: "text for game over window",
            fontSize: "20px Roboto",
            clicked: false,
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
                shadowColor: 'rgba(0, 0, 0, .4)',
                radius: 45,
            },
            init: uiModelMethods_1.init,
            getObjectPosition: uiModelMethods_1.getUIObjectPosition
        }
    ];
}
exports.levelChangeScreen = levelChangeScreen;


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
var levelChangeScreen_1 = __webpack_require__(/*! ./gameUiModels/levelChangeScreen */ "./src/ui/gameUiModels/levelChangeScreen.ts");
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
    var gameData = this.showGameInfo();
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
function levelChangeWindow() {
    var data = this.getLevelUserData();
    var drawMethods = [
        uiElementModules_1.uiText,
        uiElementModules_1.uiText,
        uiElementModules_1.uiText
    ];
    this.initUiElements(drawMethods, levelChangeScreen_1.levelChangeScreen, data);
}
exports.levelChangeWindow = levelChangeWindow;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvYWkvcmVndWxhckVuZW15QWlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBNZW51L2FwcE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE1lbnUvZ2FtZVJlc3VsdE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwTWVudS9tZW51U2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE1lbnUvcGFnZXNCdWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvYnVsbGV0Q29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9lbmVteUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvZ2FtZUdyYXBwbGVPYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvbGV2ZWxDb25zdHJ1Y3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9tYWluR2FtZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL3NvdW5kQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy91c2VyQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW1pZXMvZW5lbWllc01vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW1pZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9hcHBFcnJvckxpc3RNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9iYWNrZ3JvdW5kTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYnVsbGV0c01vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2VuZ2luZU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lTW9kdWxlcy9jaGFuZ2VMZXZlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lTW9kdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVNb2R1bGVzL3NhdGFydEdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lU2lkZU9iamVjdHNNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3BsYXllclNoaXBNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zb3VuZE1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyUmVxdWVzdE1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lR2FtZU92ZXJTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lUGF1c2VTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lU3RhdHNTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lVWlMb2FkTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2FtZVVpTW9kZWxzL2dhbWVVaVNldHRpbmdzTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2FtZVVpTW9kZWxzL2dhbWVXaW5TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9sZXZlbENoYW5nZVNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2FtZVVpTW9kZWxzL3VpTW9kZWxNZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9sb2FkU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2VsZW1lbnRzL3VpRWxlbWVudE1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvd2VhcG9ucy93ZWFwb25zRGlzcGxheU1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKCdlbGVjdHJvbicpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztR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Yiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0hBQWdIO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdIQUFnSDtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idG4tbWFpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zZWxlY3RlZC1pdGVtcyB7XFxuICAgIGJhY2tncm91bmQ6ICMxNjEzMjU7IH1cXG5cXG4uYnRuLXN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA5MCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNFQTZDMDA7IH1cXG5cXG4uYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6ICNFQTZDMDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWluLXdpZHRoOiAyNTBweDsgfVxcblxcbi5idG4tbWFpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zZWxlY3RlZC1pdGVtcyB7XFxuICAgIGJhY2tncm91bmQ6ICMxNjEzMjU7IH1cXG5cXG4uYnRuLXN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA5MCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNFQTZDMDA7IH1cXG5cXG4uYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6ICNFQTZDMDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWluLXdpZHRoOiAyNTBweDsgfVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgYm9keSAjcHJlbG9hZGVyIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDBweDsgfVxcblxcbi5zdGF0aWMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7IH1cXG4gICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZS5tZW51LWJhY2tncm91ZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmYyMjMxOyB9XFxuICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUge1xcbiAgICAgICAgei1pbmRleDogMTA7IH1cXG4gICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB7XFxuICAgICAgICAgICAgdG9wOiAxMHB4OyB9XFxuICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoOTIsIDIsIDEwOCwgMC41KTtcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgICAgICAgICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgICAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCBhIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRUE2QzAwO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4OyB9XFxuICAgICAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCBhOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICB6LWluZGV4OiAxMTAwOyB9XFxuICAgIC5jb250ZW50LXdyYXBwZXIgLm1lbnUtcGFnZXMtd3JhcHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTYxMzI1O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4uY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMnB4OyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg3MSwgNiwgODMsIDAuOCk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCBibGFjazsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjEpOyB9XFxuXFxuLmRpYWxvZy1ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7IH1cXG4gICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDAwNTQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLCAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gbGFiZWwge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlOyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gLmFsZXJ0LW1lc3NhZ2Uge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGZvcm0gLmFsZXJ0LW1lc3NhZ2UgcCB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIC5hbGVydC1tZXNzYWdlIC5yZWplY3QtdGV4dCB7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBmb3JtIC5hbGVydC1tZXNzYWdlIC53YXJuaW5nLXRleHQge1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHllbGxvdzsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgZm9ybSAuYWxlcnQtbWVzc2FnZSAuc3VjY2Vzcy10ZXh0IHtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuOyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGRpdiB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1idG4tYXJlYSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJ0bi1hcmVhIGJ1dHRvbi5hY2NlcHQtYnRuIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0YmFlNjA7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYnRuLWFyZWEgYnV0dG9uLnJlamVjdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2I5MDA0ZjtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTsgfVxcbiAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJvdHRvbS1hcmVhIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYm90dG9tLWFyZWEgYnV0dG9uLmFjY2VwdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRiYWU2MDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1ib3R0b20tYXJlYSBidXR0b24ucmVqZWN0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjkwMDRmO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpOyB9XFxuXFxuI3dyYXBwZXIgc2VjdGlvbiB7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogMDsgfVxcblxcbi5nYW1lQmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7IH1cXG5cXG4uZ2FtZS1maWVsZHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4uZ2FtZS1maWVsZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uaGlkZS1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5yZXN1bHQtbWVzc2FnZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAucmVzdWx0LW1lc3NhZ2Utd3JhcHBlciBwIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgICAucmVzdWx0LW1lc3NhZ2Utd3JhcHBlciBwOmZpcnN0LWxldHRlciB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxudWwuc2hvdy1yZXN1bHQtYXJlYSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5yYXRlLW51bWJlciB7XFxuICAgICAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA1JTsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSAuaXRlbS1uYW1lIHtcXG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSAuaXRlbS1jb2luIHtcXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgICAgICAgICAgZmxleC1iYXNpczogMTUlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLXBvaW50cyB7XFxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxNSU7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgLml0ZW0tZGF0ZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIHAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkOyB9XFxuICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzEzMDUxNzsgfVxcblxcbi5sb2FkLXNjcmVlbi13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMTAwMDsgfVxcbiAgICAubG9hZC1zY3JlZW4td3JhcHBlciAubG9hZC1jaXJjZS13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBsb2FkLWNpcmNsZS1yb3RhdGUgMXMgaW5maW5pdGUgc3RlcHMoMTEsIGVuZCk7IH1cXG4gICAgLmxvYWQtc2NyZWVuLXdyYXBwZXIgcCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWQtY2lyY2xlLXJvdGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW1zIHtcXG4gICAgYmFja2dyb3VuZDogIzE2MTMyNTsgfVxcblxcbi5idG4tc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDsgfVxcblxcbi5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogI0VBNkMwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4OyB9XFxuXFxuLm1lbnUtc2NyZWVuIC5zZXR0aW5ncy1zbGlkZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzOyB9XFxuXFxuLm1lbnUtc2NyZWVuIC5zZXR0aW5ncy1zbGlkZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuXFxuLm1lbnUtc2NyZWVuIC5zZXR0aW5ncy1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblxcbi5tZW51LXNjcmVlbiAuc2V0dGluZ3Mtc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7IH1cXG4gICAgLnN3aXRjaCBpbnB1dCB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7IH1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40czsgfVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7IH1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7IH1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7IH1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpOyB9XFxuXFxuLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7IH1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9tYWluLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCh0YXJnZXQsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgbWF4UG9zaXRpb25YID0gTWF0aC5tYXgodGFyZ2V0LngsIHRoaXMueCk7XHJcbiAgICB2YXIgbWluUG9zaXRpb25YID0gTWF0aC5taW4odGFyZ2V0LngsIHRoaXMueCk7XHJcbiAgICB2YXIgbWF4UG9zaXRpb25ZID0gTWF0aC5tYXgodGFyZ2V0LnkgLSB0aGlzLmhlaWdodCAvIDIsIHRoaXMueSk7XHJcbiAgICB2YXIgbWluUG9zaXRpb25ZID0gTWF0aC5taW4odGFyZ2V0LnkgLSB0aGlzLmhlaWdodCAvIDIsIHRoaXMueSk7XHJcbiAgICB2YXIgZGlzdGFuY2VUb1RhcmdldFggPSBtYXhQb3NpdGlvblggLSBtaW5Qb3NpdGlvblg7XHJcbiAgICB2YXIgZGlzdGFuY2VUb1RhcmdldFkgPSBtYXhQb3NpdGlvblkgLSBtaW5Qb3NpdGlvblk7XHJcbiAgICBpZiAodGhpcy5pc01vdmUgJiYgdGhpcy5iZWhhdmlvcikge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5iZWhhdmlvcikge1xyXG4gICAgICAgICAgICBjYXNlICdwYXRyb29sJzpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlycmVjdGlvblJhbmRvbSA9IG1haW5HYW1lT2JqZWN0LmdhbWVSYW5kb21pemVyKDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gKGRpcnJlY3Rpb25SYW5kb20gPT0gMSkgPyBcInVwXCIgOiBcImRvd25cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhdHJvb2wuY2FsbCh0aGlzLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmluZCc6XHJcbiAgICAgICAgICAgICAgICBzdHJhZmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhdHRhY2snOlxyXG4gICAgICAgICAgICAgICAgYXR0YWNrLmNhbGwodGhpcywgZGlzdGFuY2VUb1RhcmdldFksIGRpc3RhbmNlVG9UYXJnZXRYLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NvbWVFbmRGaW5kJzpcclxuICAgICAgICAgICAgICAgIHN0cmFmZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdW5pdFN0b3AuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3RyYWZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5pdFN0b3AoKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHNjcmVlbkRhdGEud2lkdGggLSB0aGlzLndpZHRoICogMikge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdHJhZmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BvdERpc3RhbmNlID4gZGlzdGFuY2VUb1RhcmdldFggfHwgdGhpcy5zcG90RGlzdGFuY2UgPiBkaXN0YW5jZVRvVGFyZ2V0WSkge1xyXG4gICAgICAgICAgICB0aGlzLnlGaW5hbCA9IHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24oZGlzdGFuY2VUb1RhcmdldFkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdHRhY2soZGlzdGFuY2VUb1RhcmdldFksIGRpc3RhbmNlVG9UYXJnZXRYLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnlGaW5hbCA9IHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZVRvVGFyZ2V0WCA8IDEwMClcclxuICAgICAgICAgICAgdGhpcy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhdHJvb2wobWFpbkdhbWVPYmplY3QpIHtcclxuICAgICAgICB2YXIgc2NyZWVuRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldFkgPSBNYXRoLm1heCh0aGlzLnksIHRoaXMueUZpbmFsKSAtIE1hdGgubWluKHRoaXMueSwgdGhpcy55RmluYWwpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlGaW5hbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55IC0gdGhpcy5oZWlnaHQgPCB0aGlzLnlGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueUZpbmFsID0gc2NyZWVuRGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPiB0aGlzLnlGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlGaW5hbCA9IHNjcmVlbkRhdGEuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVuZW15U2hpcExvZ2ljVmVydGljYWwgPSBlbmVteVNoaXBMb2dpY1ZlcnRpY2FsO1xyXG5mdW5jdGlvbiBlbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKSB7XHJcbiAgICB2YXIgeUFkaiA9IGRpc3RhbmNlVG9UYXJnZXRZIC8gdGhpcy52ZXJ0aWNhbFNwZWVkO1xyXG4gICAgeUFkaiA9IChNYXRoLnNpZ24oeUFkaikgPiAwKSA/IHlBZGogOiB5QWRqICogLTE7XHJcbiAgICB5QWRqID0gKHlBZGogPiB0aGlzLnZlcnRpY2FsU3BlZWQpID8gdGhpcy52ZXJ0aWNhbFNwZWVkIDogeUFkajtcclxuICAgIHRoaXMueSA9ICh0aGlzLnkgPiB0aGlzLnlGaW5hbCkgPyB0aGlzLnkgLSB5QWRqIDpcclxuICAgICAgICAodGhpcy55IDwgdGhpcy55RmluYWwpID8gdGhpcy55ICsgeUFkaiA6IHRoaXMueUZpbmFsO1xyXG59XHJcbmV4cG9ydHMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbiA9IGVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb247XHJcbmZ1bmN0aW9uIHNwYXduRW5lbXlMb2dpYyhFbmVteU9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGVuZW15U3Bhd24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVja1NwYXduVHlwZSwgbnVtYmVyRW5lbXlQZXJTcGF3biwgaSwgZW5lbXlTaGlwLCBlbmVteVNoaXBPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1NwYXduVHlwZSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxEYXRhLmVuZW15UHJvYmFiaWxpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY2hlY2tTcGF3blR5cGUgPD0gbGV2ZWxEYXRhLmVuZW15UmFuZG9taXplckluZGV4KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJFbmVteVBlclNwYXduID0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbERhdGEuZW5lbXlNYXhOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG51bWJlckVuZW15UGVyU3Bhd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBsZXZlbERhdGEuZW5lbXlNYXhOdW1iZXIpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcCA9IGVuZW15RGF0YVt0aGlzLmdhbWVSYW5kb21pemVyKGVuZW15RGF0YS5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTmV3RW5lbXkoZW5lbXlTaGlwLCBFbmVteU9iamVjdCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QubG9hZEVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuY29uY2F0KGVuZW15U2hpcE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnYW1lRGF0YSwgbGV2ZWxEYXRhLCBlbmVteURhdGEsIGxldmVsVXNlckRhdGEsIGJvc3NQcmVzZW50LCBlbmVteVNoaXBPYmplY3Q7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YSwgbGV2ZWxEYXRhID0gZ2FtZURhdGEubGV2ZWxEYXRhLCBlbmVteURhdGEgPSBnYW1lRGF0YS5lbmVteURhdGEsIGxldmVsVXNlckRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKSwgYm9zc1ByZXNlbnQgPSAobGV2ZWxVc2VyRGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmJvc3NQcmVzZW50KSA/IGxldmVsVXNlckRhdGEuc291cnNlLmxldmVsRGF0YS5ib3NzUHJlc2VudCA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmxldmVsQ2hhbmdlICYmICFib3NzUHJlc2VudCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15U3Bhd24uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVOZXdFbmVteShlbmVteURhdGFbMF0sIEVuZW15T2JqZWN0KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlTaGlwT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5sZW5ndGggPCAxICYmICF0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QubG9hZEVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMgPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5jb25jYXQoZW5lbXlTaGlwT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc3Bhd25FbmVteUxvZ2ljID0gc3Bhd25FbmVteUxvZ2ljO1xyXG5mdW5jdGlvbiBjcmVhdGVOZXdFbmVteShlbmVteURhdGEsIEVuZW15T2JqZWN0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHgsIHksIHNoaXBEZXRhaWxzLCBiZWhhdmlvciwgZXh0cmFPYmplY3RzLCBfYSwgY29udGV4dDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB4ID0gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoICsgMzAwLCB5ID0gdGhpcy5nYW1lUmFuZG9taXplcih0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4uaGVpZ2h0IC0gMjAwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZW5lbXlEYXRhLmRldGFpbHMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBEZXRhaWxzID0gZW5lbXlEYXRhLmRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAoc2hpcERldGFpbHMuYmVoYXZpb3IpID8gc2hpcERldGFpbHMuYmVoYXZpb3JbdGhpcy5nYW1lUmFuZG9taXplcihzaGlwRGV0YWlscy5iZWhhdmlvci5sZW5ndGgpXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoc2hpcERldGFpbHMuZXh0cmFPYmplY3RzKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbG9hZEV4dHJhT2JqZWN0LmNhbGwodGhpcywgc2hpcERldGFpbHMuZXh0cmFPYmplY3RzKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFPYmplY3RzID0gX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBFbmVteU9iamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB4LCB5OiB5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g6IHNoaXBEZXRhaWxzLnN4LCBzeTogc2hpcERldGFpbHMuc3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHNoaXBEZXRhaWxzLmltYWdlV2lkdGggLyBzaGlwRGV0YWlscy5udW1iZXJPZkl0ZW1zLCBzSGVpZ2h0OiBzaGlwRGV0YWlscy5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IHNoaXBEZXRhaWxzLmltYWdlV2lkdGgsIG51bWJlck9mSXRlbXM6IHNoaXBEZXRhaWxzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2hpcERldGFpbHMud2lkdGgsIGhlaWdodDogc2hpcERldGFpbHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFRleHR1cmU6IHNoaXBEZXRhaWxzLnNraW5OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IHNoaXBEZXRhaWxzLnNwZWVkLCBpc1Nob3Q6IHNoaXBEZXRhaWxzLmlzU2hvdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc2hpcERldGFpbHMuc3RhdHVzLCBuYW1lOiBzaGlwRGV0YWlscy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0VHlwZU51bWJlcjogc2hpcERldGFpbHMuYnVsbGV0VHlwZSwgcmFwaWRGaXJlOiBzaGlwRGV0YWlscy5yYXBpZEZpcmUsIHBvaW50c1BlclVuaXQ6IHNoaXBEZXRhaWxzLnBvaW50c1BlclVuaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogc2hpcERldGFpbHMuaGVhbHRoUG9pbnQsIGFuaW1hdGlvblN0ZXBzOiBzaGlwRGV0YWlscy5hbmltYXRpb25TdGVwcywgZGFtYWdlOiBzaGlwRGV0YWlscy5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogc2hpcERldGFpbHMub2JqZWN0T3duZXIsIGd1bnM6IChzaGlwRGV0YWlscy5ndW5zKSA/IHNoaXBEZXRhaWxzLmd1bnMgOiBbXSwgZXhwbG9zaW9uOiBzaGlwRGV0YWlscy5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IHNoaXBEZXRhaWxzLm51bWJlck9mVmVydGljYWxJdGVtcywgaXNNb3ZlOiBzaGlwRGV0YWlscy5pc01vdmUsIGlzU2hvb3Q6IHNoaXBEZXRhaWxzLmlzU2hvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG90RGlzdGFuY2U6IHNoaXBEZXRhaWxzLnNwb3REaXN0YW5jZSwgYmVoYXZpb3I6IGJlaGF2aW9yLCB2ZXJ0aWNhbFNwZWVkOiAoc2hpcERldGFpbHMudmVydGljYWxTcGVlZCkgPyBzaGlwRGV0YWlscy52ZXJ0aWNhbFNwZWVkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQm9zczogKHNoaXBEZXRhaWxzLmlzQm9zcykgPyBzaGlwRGV0YWlscy5pc0Jvc3MgOiBmYWxzZSwgZXh0cmFPYmplY3RzOiBleHRyYU9iamVjdHMsIGNvbGxpZGVFeHBsb3Npb25BbmltYXRpb246IHNoaXBEZXRhaWxzLmNvbGxpZGVFeHBsb3Npb25BbmltYXRpb24gLy8gbG9hZCBjb2luIGVsZW1lbnQgZnJvbSBzZXJ2ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld0VuZW15ID0gY3JlYXRlTmV3RW5lbXk7XHJcbmZ1bmN0aW9uIGxvYWRFeHRyYU9iamVjdChleHRyYU9iamVjdHMpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmFuZG9tT2JqZWN0LCBsb2FkUHJvYmFiaWxpdHksIG51bWJlck9mRWxlbWVudCwgcmVzdWx0LCBjYWxsT2JqZWN0LCBpO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbU9iamVjdCA9IGV4dHJhT2JqZWN0c1t0aGlzLmdhbWVSYW5kb21pemVyKGV4dHJhT2JqZWN0cy5sZW5ndGgpXSwgbG9hZFByb2JhYmlsaXR5ID0gdGhpcy5nYW1lUmFuZG9taXplcihyYW5kb21PYmplY3QucmFuZG9tdWl6ZXIpLCBudW1iZXJPZkVsZW1lbnQgPSB0aGlzLmdhbWVSYW5kb21pemVyKHJhbmRvbU9iamVjdC5tYXhOdW1iZXIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoeyB1cmw6IHByb2Nlc3MuZW52LkhPU1QgKyBcImFwaS9ncmFwcGxlLW9iamVjdHNcIiwgbWV0aG9kOiBcIkdFVFwiLCBkYXRhOiBudWxsLCBoZWFkZXJzOiB7ICdncmFwcGxlT2JqZWN0JzogcmFuZG9tT2JqZWN0Lm9iamVjdCB9IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYWxsT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNhbGxPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkRXh0cmFPYmplY3QgPSBsb2FkRXh0cmFPYmplY3Q7XHJcbmZ1bmN0aW9uIGdhbWVSYW5kb21pemVyKG1heE51bWJlciwgbWluTnVtYmVyKSB7XHJcbiAgICBpZiAobWluTnVtYmVyID09PSB2b2lkIDApIHsgbWluTnVtYmVyID0gMDsgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bWJlciArIG1pbk51bWJlcik7XHJcbn1cclxuZXhwb3J0cy5nYW1lUmFuZG9taXplciA9IGdhbWVSYW5kb21pemVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxudmFyIGdhbWVSZXN1bHRNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2dhbWVSZXN1bHRNb2R1bGVcIik7XHJcbnZhciBzYXRhcnRHYW1lXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVNb2R1bGVzL3NhdGFydEdhbWVcIik7XHJcbmZ1bmN0aW9uIHNob3coZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbmV4cG9ydHMuc2hvdyA9IHNob3c7XHJcbmZ1bmN0aW9uIGhpZGUoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZXhwb3J0cy5oaWRlID0gaGlkZTtcclxuZnVuY3Rpb24gdG9nZ2xlcihlbCkge1xyXG4gICAgKGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSA/IHNob3coZWwpIDogaGlkZShlbCk7XHJcbn1cclxuZXhwb3J0cy50b2dnbGVyID0gdG9nZ2xlcjtcclxuZnVuY3Rpb24gYWRkQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLmFkZENsYXNzTGlzdCA9IGFkZENsYXNzTGlzdDtcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGlmICghZWwuY2xhc3NMaXN0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLnJlbW92ZUNsYXNzTGlzdCA9IHJlbW92ZUNsYXNzTGlzdDtcclxuZnVuY3Rpb24gYXBwTWVudShnYW1lT2JqZWN0LCBkaWFsb2dXaW5kb3cpIHtcclxuICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gbnVsbDtcclxuICAgIHZhciBuYXZpZ2F0aW9uID0ge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWRNZW51SXRlbTogc2VsZWN0ZWRNZW51SXRlbSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25UZW1wbGF0ZTogJy5zZWN0aW9uLXRlbXBsYXRlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXI6ICcjd3JhcHBlcicsXHJcbiAgICAgICAgICAgICAgICBzaWRlTWVudVdyYXBwZXI6ICcjbWFpbi1tZW51J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbXBvcnRTZWN0aW9uc1RvRE9NOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImltcG9ydFwiXScpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKG5hdmlnYXRpb24ubWVudS5jb25zdGFudHMuc2VjdGlvblRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2aWdhdGlvbi5tZW51LmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyKS5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0TWVudU9uQ2xpY2tFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkFjdG9uKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJ1dHRvbkFjdG9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5kYXRhc2V0LnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5zaG93U2VjdGlvbi5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2VsZWN0aW9uKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuZGF0YXNldC5zZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYW1lLXJlc3VsdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHRNb2R1bGVfMS5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2dhbWUtcmVzdWx0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdleGl0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVyKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ0V4aXQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdvaycgfSwgc2F0YXJ0R2FtZV8xLmV4aXRUaGVHYW1lLCBuYXZpZ2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaGlkZUFsbFNlY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWVudVNlbGVjdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09IFwiTElcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUFyZWEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkLWl0ZW1zXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8xID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVBcmVhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KG1lbnVJdGVtLCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQgIT0gXCJjbG9zZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImNhbmNlbFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImV4aXRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQpID8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBzZWxlY3RlZE1lbnVJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzc0xpc3QoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQsIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93U2VjdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbklkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIHNob3coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHNlY3Rpb25JZCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8yID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVBcmVhXzJbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzTGlzdChpdGVtLCBcIm1lbnUtYmFja2dyb3VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFnZXNCdWlsZGVyXzEucGFnZUJ1aWxkZXIoeyB0YXJnZXQ6IFwiI2Fib3V0LXNlY3Rpb24tY29udGVudFwiLCBkYXRhOiBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldExvY2FsRGF0YSh7IGZpbGVOYW1lOiAnYWJvdXQtcGFnZS5qc29uJyB9KSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUFsbFNlY3Rpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbk5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyICsgXCIgc2VjdGlvblwiKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlY3Rpb25Ob2Rlc18xID0gc2VjdGlvbk5vZGVzOyBfaSA8IHNlY3Rpb25Ob2Rlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VjdGlvbk5vZGVzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUJhY2tncm91bmRBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBtZW51QmFja2dyb3VuZEFyZWFfMSA9IG1lbnVCYWNrZ3JvdW5kQXJlYTsgX2EgPCBtZW51QmFja2dyb3VuZEFyZWFfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVCYWNrZ3JvdW5kQXJlYV8xW19hXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QoaXRlbSwgXCJtZW51LWJhY2tncm91ZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBtZW51QXJlYV8zID0gbWVudUFyZWE7IF9iIDwgbWVudUFyZWFfMy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV8zW19iXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0U2VjdGlvbnNUb0RPTSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZW51T25DbGlja0V2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xyXG59XHJcbmV4cG9ydHMuYXBwTWVudSA9IGFwcE1lbnU7XHJcbmZ1bmN0aW9uIGhpZGVTaG93TWVudShtYWluTWVudSwgbmF2aWdhdGlvbk1lbnUsIGdhbWVXaW4sIGdhbWVTdGF0dXMsIGdhbWVVaVBhdXNlKSB7XHJcbiAgICBpZiAoIWdhbWVTdGF0dXMgfHwgZ2FtZVVpUGF1c2UpIHtcclxuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1tZW51XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGUtbWVudVwiKTtcclxuICAgICAgICBuYXZpZ2F0aW9uTWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmhpZGVTaG93TWVudSA9IGhpZGVTaG93TWVudTtcclxuZnVuY3Rpb24gZGlhbG9nV2luZG93KF9hLCBjYWxsYmFjaywgbmF2aWdhdGlvbikge1xyXG4gICAgdmFyIHRleHREYXRhID0gX2EudGV4dERhdGEsIHJlamVjdFRleHQgPSBfYS5yZWplY3RUZXh0LCBhY2NlcHRUZXh0ID0gX2EuYWNjZXB0VGV4dDtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLWJveFwiKTtcclxuICAgIHZhciBkaWFsb2dCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1ib2R5Jyk7XHJcbiAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gKG5hdmlnYXRpb24pID8gbmF2aWdhdGlvbi5zaG93U2VsZWN0ZWRJdGVtKCkgOiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29rJzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV80ID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfNC5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV80W19pXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRNZW51SXRlbS5zZWxlY3RlZE1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3NMaXN0KHNlbGVjdGVkTWVudUl0ZW0uc2VsZWN0ZWRNZW51SXRlbSwgXCJzZWxlY3RlZC1pdGVtc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZXN0YXJ0JzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwuYXBwbHkoY2FsbGJhY2ssIHJlc3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgc2hvdyh3aW5kb3dFbGVtZW50KTtcclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogXCJhY2NlcHQtYnRuIGJ0bi1tYWluXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLXRleHRcXFwiPlwiICsgdGV4dERhdGEgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1idXR0b24tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1idG4tYXJlYVxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWJ1dHRvbi1pZD1cIiArIGFjY2VwdFRleHQgKyBcIiBjbGFzcz1cXFwiYWNjZXB0LWJ0biBidG4tbWFpblxcXCI+XCIgKyBhY2NlcHRUZXh0ICsgXCI8L2J1dHRvbj5cXG4gICAgICAgICAgIDxidXR0b24gZGF0YS1idXR0b24taWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcInJlamVjdC1idG4gYnRuLW1haW5cXFwiPmNhbmNlbDwvYnV0dG9uPlxcbiAgICAgICA8L2Rpdj5cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ2RhdGEtYnV0dG9uLWlkJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2IgPSAwLCBkaWFsb2dEYXRhXzEgPSBkaWFsb2dEYXRhOyBfYiA8IGRpYWxvZ0RhdGFfMS5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGRpYWxvZ0RhdGFfMVtfYl07XHJcbiAgICAgICAgZGlhbG9nQm9keS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBkaWFsb2dCdXR0b25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idXR0b24tYXJlYScpO1xyXG4gICAgZGlhbG9nQnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpYWxvZ0J1dHRvbkV2ZW50KTtcclxufVxyXG5leHBvcnRzLmRpYWxvZ1dpbmRvdyA9IGRpYWxvZ1dpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51XCIpO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gc2hvd1Jlc3VsdFNjcmVlbigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd2luZG93RWxlbWVudCwgZ2FtZURhdGEsIGluZGV4LCBfbG9vcF8xLCBfaSwgZ2FtZURhdGFfMSwgaXRlbTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcmVzdWx0LWFyZWEnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZURhdGEuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1lc3NhZ2Utd3JhcHBlclxcXCI+PHA+XCIgKyBnYW1lRGF0YS5tZXNzYWdlICsgXCI8L3A+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfbG9vcF8xID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShpdGVtLnRpbWUpLCB5ZWFyID0gdGltZS5nZXRGdWxsWWVhcigpLCBtb250aCA9IHRpbWUuZ2V0VVRDTW9udGgoKSArIDEsIGRheSA9IHRpbWUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IFwibGlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwid2lubmVyLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxwIGNsYXNzPVxcXCJzaW5nbGUtaXRlbVxcXCI+PHNwYW4gY2xhc3M9XFxcInJhdGUtbnVtYmVyXFxcIj5cIiArIGluZGV4ICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+bmFtZTo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpdGVtLW5hbWVcXFwiPiBcIiArIGl0ZW0udXNlck5hbWUgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5jb2luOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIml0ZW0tY29pblxcXCI+IFwiICsgaXRlbS5nYW1lQ29pbnMgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5zY29yZTo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpdGVtLXBvaW50c1xcXCI+IFwiICsgaXRlbS5nYW1lUG9pbnRzICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tZGF0ZVxcXCI+IFwiICsgeWVhciArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIGRheSArIFwiPC9zcGFuPjwvcD5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdkYXRhLWJ1dHRvbi1pZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93RWxlbWVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGdhbWVEYXRhXzEgPSBnYW1lRGF0YTsgX2kgPCBnYW1lRGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gZ2FtZURhdGFfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaG93UmVzdWx0U2NyZWVuID0gc2hvd1Jlc3VsdFNjcmVlbjtcclxuZnVuY3Rpb24gaW5pdFJlc3VsdFNjcmVlbihtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIHdpbmRvd0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1yZXN1bHQtYm94Jyk7XHJcbiAgICB2YXIgZm9ybUJ0blN3aXRjaGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idG4tc3dpdGNoZXItYXJlYVwiKTtcclxuICAgIHZhciBmb3JtTG9hZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2FkLWFyZWEnKTtcclxuICAgIGZvcm1Mb2FkQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9ybUJ0blN3aXRjaGVyQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgYXBwTWVudV8xLnNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICB2YXIgYnV0dG9uU3dpdGNoZXIgPSBbXHJcbiAgICAgICAgcGFnZXNCdWlsZGVyXzEuY3JlYXRlRWxlbWVudHMoe1xyXG4gICAgICAgICAgICB0YWdOYW1lOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiBcImFjY2VwdC1idG4gYnRuLW1haW5cIixcclxuICAgICAgICAgICAgaW5saW5lU3R5bGU6IG51bGwsXHJcbiAgICAgICAgICAgIHBpY3R1cmVVcmw6IG51bGwsXHJcbiAgICAgICAgICAgIGxpbmtVcmw6IG51bGwsXHJcbiAgICAgICAgICAgIHRleHQ6IFwidXBkYXRlIHBsYXllclwiLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZGF0YS1idG4taWRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBcInVwZGF0ZS1wbGF5ZXJcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICB9KSxcclxuICAgICAgICBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwiYWNjZXB0LWJ0biBidG4tbWFpbiBzZWxlY3RlZC1mb3JtXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIm5ldyBwbGF5ZXJcIixcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImRhdGEtYnRuLWlkXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJuZXctcGxheWVyXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGJ1dHRvblN3aXRjaGVyXzEgPSBidXR0b25Td2l0Y2hlcjsgX2kgPCBidXR0b25Td2l0Y2hlcl8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gYnV0dG9uU3dpdGNoZXJfMVtfaV07XHJcbiAgICAgICAgZm9ybUJ0blN3aXRjaGVyQXJlYS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJmb3JtXCIsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNhdmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCJcXG4gICAgICAgICAgICAgICAgPGgxPkNyZWF0ZSBuZXcgcGxheWVyPC9oMT5cXG4gICAgICAgICAgICAgICAgPHA+UGxlYXNlIGZpbGwgdGhlIGZpZWxkcyB0byBzYXZlIHlvdXIgcmVzdWx0PC9wPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3UgbmFtZTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmFtZVxcXCIgbWF4bGVuZ3RoPVxcXCIzMFxcXCIgbWlubGVuZ3RoPVxcXCIzXFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdSBuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWFpbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgZW50ZXIgeW91IGVtYWlsPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYWlsXFxcIiBuYW1lPVxcXCJ1c2VyRW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGUgcGFzc3dvcmQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJ1c2VyUGFzc3dvcmRcXFwiIG1heGxlbmd0aD1cXFwiMjBcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3UgZW1haWwgYWRkcmVzc1xcXCI+XFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZGlhbG9nLWJvdHRvbS1hcmVhXFxcIiBjbGFzcz1cXFwiZGlhbG9nLWJvdHRvbS1hcmVhXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBkYXRhLWJ1dHRvbi1pZD1cXFwic2F2ZS1yZXN1bHRcXFwiIGNsYXNzPVxcXCJhY2NlcHQtYnRuIGJ0bi1tYWluXFxcIj5zYXZlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtYnV0dG9uLWlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJyZWplY3QtYnRuIGJ0bi1tYWluXFxcIj5jYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBcInNhdmUtcmVzdWx0LWZvcm1cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICB9KSxcclxuICAgICAgICBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiZm9ybVwiLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiBcIlwiLFxyXG4gICAgICAgICAgICBpbmxpbmVTdHlsZTogXCJkaXNwbGF5OiBub25lO1wiLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNhdmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCJcXG4gICAgICAgICAgICAgICAgICAgIDxoMT5VcGRhdGUgcGxheWVyPC9oMT5cXG4gICAgICAgICAgICAgICAgICAgIDxwPkVudGVyIGVtYWlsIGFuZCBwYXNzd29yZDwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1haWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3UgZW1haWw8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYWlsXFxcIiBuYW1lPVxcXCJ1c2VyRW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGUgcGFzc3dvcmQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwidXNlclBhc3N3b3JkXFxcIiBtYXhsZW5ndGg9XFxcIjIwXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IGVtYWlsIGFkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1ib3R0b20tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1ib3R0b20tYXJlYVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGRhdGEtYnV0dG9uLWlkPVxcXCJzYXZlLXJlc3VsdFxcXCIgY2xhc3M9XFxcImFjY2VwdC1idG4gYnRuLW1haW5cXFwiPnNhdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtYnV0dG9uLWlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJyZWplY3QtYnRuIGJ0bi1tYWluXFxcIj5jYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnbmFtZScsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJyZXdyaXRlLXJlc3VsdC1mb3JtXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfYSA9IDAsIGRpYWxvZ0RhdGFfMSA9IGRpYWxvZ0RhdGE7IF9hIDwgZGlhbG9nRGF0YV8xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZGlhbG9nRGF0YV8xW19hXTtcclxuICAgICAgICBmb3JtTG9hZEFyZWEuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydzYXZlLXJlc3VsdC1mb3JtJ107XHJcbiAgICB2YXIgcmV3cml0ZUZvcm0gPSBkb2N1bWVudC5mb3Jtc1sncmV3cml0ZS1yZXN1bHQtZm9ybSddO1xyXG4gICAgdmFyIGZvcm1CdG5BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpYWxvZy1ib3R0b20tYXJlYScpO1xyXG4gICAgZm9ybUJ0blN3aXRjaGVyQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1Td2l0Y2hlcik7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1CdG5BcmVhLCBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlhbG9nQnV0dG9uRXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1BY3Rpb25Xcml0ZSk7XHJcbiAgICByZXdyaXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtQWN0aW9uVXBkYXRlKTtcclxuICAgIGZ1bmN0aW9uIGZvcm1Td2l0Y2hlcihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnRuSWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5ldy1wbGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5oaWRlKHJld3JpdGVGb3JtKTtcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5zaG93KGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgYXBwTWVudV8xLmFkZENsYXNzTGlzdChldmVudC50YXJnZXQsIFwic2VsZWN0ZWQtZm9ybVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBkYXRlLXBsYXllclwiOlxyXG4gICAgICAgICAgICAgICAgYXBwTWVudV8xLmhpZGUoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuc2hvdyhyZXdyaXRlRm9ybSk7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuYWRkQ2xhc3NMaXN0KGV2ZW50LnRhcmdldCwgXCJzZWxlY3RlZC1mb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhbmNlbCc6XHJcbiAgICAgICAgICAgICAgICBmb3JtTG9hZEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5oaWRlKHdpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWN0aW9uV3JpdGUoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtUmVzdWx0LCByZXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1SZXN1bHQgPSB0cmFuc2ZlckRhdGFUb09iamVjdCh0aGlzLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm9ybVJlc3VsdCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwcm9jZXNzLmVudi5IT1NUICsgJ2FwaS9nYW1lLXJlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybVJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRm9ybU1lc3NhZ2UoeyBtZXNzYWdlOiByZXMubWVzc2FnZSwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZvcm1NZXNzYWdlKHsgbWVzc2FnZTogXCJJIGNhbnQgc2VuZCB0aGlzLCBwbGVhc2UgY2hlY2sgZm9ybSBhZ2FpblwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWN0aW9uVXBkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybVJlc3VsdCwgcmVzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtUmVzdWx0ID0gdHJhbnNmZXJEYXRhVG9PYmplY3QodGhpcywgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcm1SZXN1bHQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybVJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRm9ybU1lc3NhZ2UoeyBtZXNzYWdlOiByZXMubWVzc2FnZSwgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZvcm1NZXNzYWdlKHsgbWVzc2FnZTogXCJJIGNhbnQgc2VuZCB0aGlzLCBwbGVhc2UgY2hlY2sgZm9ybSBhZ2FpblwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlcnJvckZvcm1NZXNzYWdlKF9hKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBfYS5tZXNzYWdlLCBzdGF0dXMgPSBfYS5zdGF0dXM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGVydC1tZXNzYWdlXCIpO1xyXG4gICAgICAgIHZhciBhbGVydFRleHQgPSBcIlwiO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWplY3RcIjpcclxuICAgICAgICAgICAgICAgIGFsZXJ0VGV4dCA9IFwiPHAgY2xhc3M9XFxcInJlamVjdC10ZXh0XFxcIj5cIiArIG1lc3NhZ2UgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2FybmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgYWxlcnRUZXh0ID0gXCI8cCBjbGFzcz1cXFwid2FybmluZy10ZXh0XFxcIj5cIiArIG1lc3NhZ2UgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICAgICAgICAgICAgYWxlcnRUZXh0ID0gXCI8cCBjbGFzcz1cXFwic3VjY2Vzcy10ZXh0XFxcIj5cIiArIG1lc3NhZ2UgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIHJld3JpdGVGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGFsZXJ0VGV4dCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBhbGVydFRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbml0UmVzdWx0U2NyZWVuID0gaW5pdFJlc3VsdFNjcmVlbjtcclxuZnVuY3Rpb24gdHJhbnNmZXJEYXRhVG9PYmplY3QoZGF0YSwgbWFpbkdhbWVPYmplY3QpIHtcclxuICAgIGlmICghZGF0YSlcclxuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIGRhdGEgdG8gdHJhbnNmb3JtXCIpO1xyXG4gICAgdmFyIG9iaiA9IHsgdXNlck5hbWU6IG51bGwsIHVzZXJFbWFpbDogbnVsbCwgZ2FtZVBvaW50czogbnVsbCwgZ2FtZUNvaW5zOiBudWxsLCB1c2VyUGFzc3dvcmQ6IG51bGwgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgIGlmIChpdGVtLm5hbWUgJiYgaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSAmJiAhaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGdhbWVEYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgb2JqLmdhbWVQb2ludHMgPSBnYW1lRGF0YS5wb2ludHM7XHJcbiAgICBvYmouZ2FtZUNvaW5zID0gZ2FtZURhdGEuZ2FtZUNvaW5zO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBnYW1lU2V0dGluZ3NNZW51KF9hKSB7XHJcbiAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgdmFyIHNldHRpbmdzTWVudSA9IHtcclxuICAgICAgICB2b2x1bWVEaXNwbGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdm9sdW1lLWRpc3BsYXknKSxcclxuICAgICAgICBzb3VuZExldmVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRMZXZlbCcpLFxyXG4gICAgICAgIHZvbHVtZUVmZmVjdERpc3BsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2b2x1bWUtZWZmZWN0LWRpc3BsYXknKSxcclxuICAgICAgICBzb3VuZEVmZmVjdExldmVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRFZmZlY3QnKSxcclxuICAgICAgICBzb3VuZE9uU3dpdGNoZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZE9uJyksXHJcbiAgICB9O1xyXG4gICAgc2V0dGluZ3NNZW51LnZvbHVtZURpc3BsYXkuaW5uZXJIVE1MID0gKGRhdGEuc291bmRMZXZlbCkgPyBkYXRhLnNvdW5kTGV2ZWwgOiBcIlwiO1xyXG4gICAgc2V0dGluZ3NNZW51LnNvdW5kTGV2ZWxbJ3ZhbHVlJ10gPSAoZGF0YS5zb3VuZExldmVsKSA/IGRhdGEuc291bmRMZXZlbCA6IDA7XHJcbiAgICBzZXR0aW5nc01lbnUudm9sdW1lRWZmZWN0RGlzcGxheS5pbm5lckhUTUwgPSAoZGF0YS5zb3VuZEVmZmVjdCkgPyBkYXRhLnNvdW5kRWZmZWN0IDogXCJcIjtcclxuICAgIHNldHRpbmdzTWVudS5zb3VuZEVmZmVjdExldmVsWyd2YWx1ZSddID0gKGRhdGEuc291bmRFZmZlY3QpID8gZGF0YS5zb3VuZEVmZmVjdCA6IDA7XHJcbiAgICBzZXR0aW5nc01lbnUuc291bmRPblN3aXRjaGVyWydjaGVja2VkJ10gPSBkYXRhLnNvdW5kT247XHJcbiAgICBwcm9jZXNzLmVudi5NQUlOX0dBTUVfU09VTkRfT04gPSBkYXRhLnNvdW5kT24udG9TdHJpbmcoKTtcclxuICAgIHByb2Nlc3MuZW52Lk1BSU5fR0FNRV9TT1VORCA9IGRhdGEuc291bmRMZXZlbC50b1N0cmluZygpO1xyXG4gICAgcHJvY2Vzcy5lbnYuTUFJTl9HQU1FX1NPVU5EX0VGRkVDVFMgPSBkYXRhLnNvdW5kRWZmZWN0LnRvU3RyaW5nKCk7XHJcbn1cclxuZXhwb3J0cy5nYW1lU2V0dGluZ3NNZW51ID0gZ2FtZVNldHRpbmdzTWVudTtcclxuZnVuY3Rpb24gZ2FtZVNldHRpbmdzTWVudUluaXQoKSB7XHJcbiAgICB2YXIgbWVudVNldHRpbmdzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXNldHRpbmdzLWZvcm0nKTtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHZhciBnYW1lRGF0YSA9IHRoaXMuc2hvd0dhbWVJbmZvKCk7XHJcbiAgICB2YXIgc2V0dGluZ3NEYXRhID0gZ2FtZURhdGEuc2V0dGluZ3M7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBzb3VuZExldmVsOiBzZXR0aW5nc0RhdGEuc291bmRMZXZlbCxcclxuICAgICAgICBzb3VuZEVmZmVjdDogc2V0dGluZ3NEYXRhLnNvdW5kRWZmZWN0LFxyXG4gICAgICAgIHNvdW5kT246IHNldHRpbmdzRGF0YS5zb3VuZE9uLFxyXG4gICAgICAgIGF1dG9zaG9vdDogc2V0dGluZ3NEYXRhLmF1dG9zaG9vdCxcclxuICAgICAgICBmdWxsU2NyZWVuOiBzZXR0aW5nc0RhdGEuZnVsbFNjcmVlbixcclxuICAgICAgICBrZXlDb250cm9sczogc2V0dGluZ3NEYXRhLmtleUNvbnRyb2xzLFxyXG4gICAgICAgIHNjcmVlblJlc29sdXRpb246IHNldHRpbmdzRGF0YS5zY3JlZW5SZXNvbHV0aW9uLFxyXG4gICAgICAgIHNjcmVlblZhcmlhdG9uOiBzZXR0aW5nc0RhdGEuc2NyZWVuVmFyaWF0b25cclxuICAgIH07XHJcbiAgICBnYW1lU2V0dGluZ3NNZW51KGRhdGEpO1xyXG4gICAgbWVudVNldHRpbmdzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBkYXRhID0gdHJhbnNmb3JtTWVudURhdGEodGhpcyk7XHJcbiAgICAgICAgZ2FtZVNldHRpbmdzTWVudShkYXRhKTtcclxuICAgICAgICBnYW1lRGF0YS5nYW1lRGF0YS5sZXZlbFNvdW5kcy5jaGFuZ2VWb2x1bWUoeyB2b2x1bWU6IHByb2Nlc3MuZW52Lk1BSU5fR0FNRV9TT1VORCB9KTtcclxuICAgICAgICBnYW1lRGF0YS5nYW1lRGF0YS5sZXZlbFNvdW5kcy50dXJuU291bmRPZmYoeyB2YWx1ZTogZGF0YS5zb3VuZE9uIH0pO1xyXG4gICAgfSk7XHJcbiAgICBtZW51U2V0dGluZ3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG1lbnVEYXRhID0gdHJhbnNmb3JtTWVudURhdGEodGhpcyk7XHJcbiAgICAgICAgdmFyIHNldHRpbmdzUmVzdWx0ID0gcmVwbGFjZURhdGEoeyBuZXdEYXRhOiBtZW51RGF0YSwgc2V0dGluZ3NEYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEud3JpdGVMb2NhbERhdGEoeyBmaWxlTmFtZTogJ2dhbWUtc2V0dGluZ3MuanNvbicsIGRhdGE6IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzUmVzdWx0KSB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVNldHRpbmdzTWVudUluaXQgPSBnYW1lU2V0dGluZ3NNZW51SW5pdDtcclxuZnVuY3Rpb24gcmVwbGFjZURhdGEoX2EpIHtcclxuICAgIHZhciBuZXdEYXRhID0gX2EubmV3RGF0YSwgc2V0dGluZ3NEYXRhID0gX2Euc2V0dGluZ3NEYXRhO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYiA9IE9iamVjdC5lbnRyaWVzKG5ld0RhdGEpOyBfaSA8IF9iLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYyA9IF9iW19pXSwga2V5ID0gX2NbMF0sIHZhbHVlID0gX2NbMV07XHJcbiAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSB8fCBrZXkgJiYgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBzZXR0aW5nc0RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzZXR0aW5nc0RhdGE7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNmb3JtTWVudURhdGEoZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwiTm8gZGF0YSB0byB0cmFuc2Zvcm1cIik7XHJcbiAgICB2YXIgb2JqID0geyBzb3VuZExldmVsOiBudWxsLCBzb3VuZE9uOiBudWxsLCBzb3VuZEVmZmVjdDogbnVsbCB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGRhdGFfMVtfaV07XHJcbiAgICAgICAgaWYgKGl0ZW0ubmFtZSAmJiBpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIChpdGVtLnZhbHVlID09PSBcIm9uXCIpID8gb2JqW2l0ZW0ubmFtZV0gPSBpdGVtLmNoZWNrZWQgOiBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gcGFnZUJ1aWxkZXIoX2EpIHtcclxuICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQsIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYiwgdGFyZ2V0Tm9kZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgIXRhcmdldF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSAoX2Muc2VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2IpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sICFkYXRhXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IChfYy5zZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiY2FudCBmZXRjaCB0aGUgZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVDbGFzczogaXRlbS5jbGFzc2xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGU6IGl0ZW0uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVVybDogaXRlbS5pbWFnZUxpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1VybDogaXRlbS5saW5rLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGVudDogaXRlbS5odG1sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBudWxsLCBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQobmV3T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5wYWdlQnVpbGRlciA9IHBhZ2VCdWlsZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50cyhfYSkge1xyXG4gICAgdmFyIHRhZ05hbWUgPSBfYS50YWdOYW1lLCBzdHlsZUNsYXNzID0gX2Euc3R5bGVDbGFzcywgaW5saW5lU3R5bGUgPSBfYS5pbmxpbmVTdHlsZSwgcGljdHVyZVVybCA9IF9hLnBpY3R1cmVVcmwsIGxpbmtVcmwgPSBfYS5saW5rVXJsLCB0ZXh0ID0gX2EudGV4dCwgaW5uZXJDb250ZW50ID0gX2EuaW5uZXJDb250ZW50LCBhdHRyaWJ1dGVOYW1lID0gX2EuYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlID0gX2EuYXR0cmlidXRlLCBhdHRyaWJ1dGVOYW1lMSA9IF9hLmF0dHJpYnV0ZU5hbWUxLCBhdHRyaWJ1dGUxID0gX2EuYXR0cmlidXRlMTtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICAoc3R5bGVDbGFzcykgPyBlbGVtZW50LmNsYXNzTmFtZSA9IHN0eWxlQ2xhc3MgOiBmYWxzZTtcclxuICAgIChpbmxpbmVTdHlsZSkgPyBlbGVtZW50LnN0eWxlID0gaW5saW5lU3R5bGUgOiBmYWxzZTtcclxuICAgICh0YWdOYW1lID09PSBcImltZ1wiICYmIHBpY3R1cmVVcmwpID8gZWxlbWVudC5zcmMgPSBfX2Rpcm5hbWUgKyBwaWN0dXJlVXJsIDogZmFsc2U7XHJcbiAgICAodGV4dCkgPyBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQgOiBmYWxzZTtcclxuICAgIChpbm5lckNvbnRlbnQpID8gZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQgOiBmYWxzZTtcclxuICAgIChhdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZSkgPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGUpIDogZmFsc2U7XHJcbiAgICAoYXR0cmlidXRlTmFtZTEgJiYgYXR0cmlidXRlMSkgPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lMSwgYXR0cmlidXRlMSkgOiBmYWxzZTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlRWxlbWVudHMgPSBjcmVhdGVFbGVtZW50cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBidWxsZXRzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2J1bGxldHNNb2R1bGVcIik7XHJcbnZhciBlbmdpbmVNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBCdWxsZXRDb25zdHJ1Y3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCdWxsZXRDb25zdHJ1Y3QoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMueCA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRUeXBlID0gZGF0YS5idWxsZXRUeXBlO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0VGV4dHVyZSA9IGRhdGEuYnVsbGV0VGV4dHVyZTtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gZGF0YS5vYmplY3RPd25lcjtcclxuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gZGF0YS5idWxsZXRTcGVlZDtcclxuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGF0YS5kYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gZGF0YS50eXBlO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gX19kaXJuYW1lICsgZGF0YS50ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuc3ggPSBkYXRhLnN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBkYXRhLnN5O1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gZGF0YS5leHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5waWN0dXJlc1dpZHRoID0gZGF0YS5pbWFnZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBkYXRhLmltYWdlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcHMgPSBkYXRhLmFuaW1hdGlvblN0ZXBzO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcyA9IGRhdGEubnVtYmVyT2ZJdGVtcztcclxuICAgICAgICB0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcyA9IGRhdGEubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc1dpZHRoID0gZGF0YS5zV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zSGVpZ2h0ID0gZGF0YS5zSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc291bmQgPSAoZGF0YS5zb3VuZCkgPyBkYXRhLnNvdW5kIDogbnVsbDtcclxuICAgICAgICAvL3RoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEucGljdHVyZXNXaWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBCdWxsZXRDb25zdHJ1Y3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQnVsbGV0Q29uc3RydWN0ID0gQnVsbGV0Q29uc3RydWN0O1xyXG4vKlxyXG5cInNvdW5kXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZXZlbFNvdW5kXCI6IFwiL3B1YmxpYy9zb3VuZC93ZWFwb25zL0xhc2VyX1Nob290Ny5tcDNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzb3VuZExvb3BcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovXHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuY3JlYXRlQnVsbGV0cyA9IGJ1bGxldHNNb2R1bGVfMS5jcmVhdGVCdWxsZXRzO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLmluaXRCdWxsZXRzID0gYnVsbGV0c01vZHVsZV8xLmluaXRCdWxsZXRzO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLm1vdmVCdWxsZXRzID0gYnVsbGV0c01vZHVsZV8xLm1vdmVCdWxsZXRzO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLmdldE9iamVjdFBvc2l0aW9uID0gZW5naW5lTW9kdWxlc18xLmdldE9iamVjdFBvc2l0aW9uO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuZW5lbXlBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15QW5pbWF0aW9uO1xyXG5CdWxsZXRDb25zdHJ1Y3QucHJvdG90eXBlLnBsYWNlRW5lbXllcyA9IGVuZW1pZXNNb2R1bGVzXzEucGxhY2VFbmVteWVzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2FpL3JlZ3VsYXJFbmVteUFpTW9kdWxlc1wiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIGVuZ2luZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZVwiKTtcclxudmFyIEVuZW15T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRW5lbXlPYmplY3QoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuc3ggPSBkYXRhLnN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBkYXRhLnN5O1xyXG4gICAgICAgIHRoaXMuc1dpZHRoID0gZGF0YS5zV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zSGVpZ2h0ID0gZGF0YS5zSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEucGljdHVyZXNXaWR0aDtcclxuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXMgPSBkYXRhLm51bWJlck9mSXRlbXM7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNoaXBUZXh0dXJlID0gX19kaXJuYW1lICsgZGF0YS5zaGlwVGV4dHVyZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLmJ1bGxldFR5cGVOdW1iZXIgPSBkYXRhLmJ1bGxldFR5cGVOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5yYXBpZEZpcmUgPSBkYXRhLnJhcGlkRmlyZTtcclxuICAgICAgICB0aGlzLnBvaW50c1BlclVuaXQgPSBkYXRhLnBvaW50c1BlclVuaXQ7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IGRhdGEuaGVhbHRoUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwcyA9IGRhdGEuYW5pbWF0aW9uU3RlcHM7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYXRhLmRhbWFnZTtcclxuICAgICAgICB0aGlzLmd1bnMgPSBkYXRhLmd1bnM7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gZGF0YS5vYmplY3RPd25lcjtcclxuICAgICAgICB0aGlzLmd1bnMgPSBkYXRhLmd1bnM7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24gPSBkYXRhLmV4cGxvc2lvbjtcclxuICAgICAgICB0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcyA9IGRhdGEubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxIZWFsdGhQb2ludCA9IGRhdGEuaGVhbHRoUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSBkYXRhLmlzTW92ZTtcclxuICAgICAgICB0aGlzLmlzU2hvdCA9IGRhdGEuaXNTaG90O1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTcGVlZCA9IChkYXRhLnZlcnRpY2FsU3BlZWQpID8gZGF0YS52ZXJ0aWNhbFNwZWVkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcGVlZCArIDEpO1xyXG4gICAgICAgIHRoaXMuc3BvdERpc3RhbmNlID0gKGRhdGEuaXNCb3NzKSA/IGRhdGEuc3BvdERpc3RhbmNlIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcG90RGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0gMDtcclxuICAgICAgICB0aGlzLnhGaW5hbCA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IGRhdGEuYmVoYXZpb3I7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNCb3NzID0gZGF0YS5pc0Jvc3M7XHJcbiAgICAgICAgdGhpcy5leHRyYU9iamVjdHMgPSBkYXRhLmV4dHJhT2JqZWN0cztcclxuICAgICAgICB0aGlzLmNvbGxpZGVFeHBsb3Npb25BbmltYXRpb24gPSBkYXRhLmNvbGxpZGVFeHBsb3Npb25BbmltYXRpb247XHJcbiAgICAgICAgLy8vIGxvYWQgYW1vdW50IGZvIGNvaW5zLCBhbmRvIGNvaW5zIG9iamVjdCBmcm9tIHNlcnZlclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEVuZW15T2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLkVuZW15T2JqZWN0ID0gRW5lbXlPYmplY3Q7XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5wbGFjZUVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLnBsYWNlRW5lbXllcztcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLm1vdmVFbmVteWVzID0gZW5lbWllc01vZHVsZXNfMS5tb3ZlRW5lbXllcztcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmxvYWRFbmVteWVzID0gZW5lbWllc01vZHVsZXNfMS5sb2FkRW5lbXllcztcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnNob3QgPSBlbmVtaWVzTW9kdWxlc18xLnNob3Q7XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5lbmVteUFuaW1hdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuZW5lbXlBbmltYXRpb247XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5nZXRPYmplY3RQb3NpdGlvbiA9IGVuZ2luZV8xLmdldE9iamVjdFBvc2l0aW9uO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlEYW1hZ2VBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15RGFtYWdlQW5pbWF0aW9uO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLmVuZW15U2hpcExvZ2ljVmVydGljYWw7XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uID0gcmVndWxhckVuZW15QWlNb2R1bGVzXzEuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS5zcGF3bkNvaW4gPSBlbmVtaWVzTW9kdWxlc18xLnNwYXduQ29pbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yXCIpO1xyXG52YXIgZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVHcmFwcGxlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIEdyYXBwbGVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoR3JhcHBsZU9iamVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEdyYXBwbGVPYmplY3QoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKHt9LCBkYXRhKSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pc0dyYXBwbGUgPSBkYXRhLmlzR3JhcHBsZTtcclxuICAgICAgICBfdGhpcy5ncmFwcGxlUG93ZXIgPSBkYXRhLmdyYXBwbGVQb3dlcjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR3JhcHBsZU9iamVjdDtcclxufShnYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yXzEuU2lkZU9iamVjdCkpO1xyXG5leHBvcnRzLkdyYXBwbGVPYmplY3QgPSBHcmFwcGxlT2JqZWN0O1xyXG5HcmFwcGxlT2JqZWN0LnByb3RvdHlwZS5hZGRQbGF5ZXJMaWZlID0gZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEuYWRkUGxheWVyTGlmZTtcclxuR3JhcHBsZU9iamVjdC5wcm90b3R5cGUuY29sbGVjdENvaW4gPSBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMS5jb2xsZWN0Q29pbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVuZW15TW9kdWxlcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vZW5lbWllc1wiKSk7XHJcbnZhciBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgU2lkZU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNpZGVPYmplY3QoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMueCA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5zeCA9IGRhdGEuc3g7XHJcbiAgICAgICAgdGhpcy5zeSA9IGRhdGEuc3k7XHJcbiAgICAgICAgdGhpcy5zV2lkdGggPSBkYXRhLnNXaWR0aDtcclxuICAgICAgICB0aGlzLnNIZWlnaHQgPSBkYXRhLnNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IF9fZGlybmFtZSArIGRhdGEudGV4dHVyZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXBzID0gZGF0YS5hbmltYXRpb25TdGVwcztcclxuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXMgPSBkYXRhLm51bWJlck9mSXRlbXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkYXRhLnRhcmdldDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gICAgICAgIHRoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEucGljdHVyZXNXaWR0aDtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IChkYXRhLmRhbWFnZSkgPyBkYXRhLmRhbWFnZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IChkYXRhLm9iamVjdE93bmVyKSA/IGRhdGEub2JqZWN0T3duZXIgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSAoZGF0YS5oZWFsdGhQb2ludCkgPyBkYXRhLmhlYWx0aFBvaW50IDogbnVsbDtcclxuICAgICAgICB0aGlzLmlzQmFja2dyb3VuZCA9IChkYXRhLmlzQmFja2dyb3VuZCkgPyBkYXRhLmlzQmFja2dyb3VuZCA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24gPSAoZGF0YS5leHBsb3Npb24pID8gZGF0YS5leHBsb3Npb24gOiBudWxsO1xyXG4gICAgICAgIHRoaXMucG9pbnRzUGVyVW5pdCA9IChkYXRhLnBvaW50c1BlclVuaXQpID8gZGF0YS5wb2ludHNQZXJVbml0IDogMDtcclxuICAgICAgICB0aGlzLmV4dHJhT2JqZWN0cyA9IChkYXRhLmV4dHJhT2JqZWN0cykgPyBkYXRhLmV4dHJhT2JqZWN0cyA6IDA7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlRXhwbG9zaW9uQW5pbWF0aW9uID0gZGF0YS5jb2xsaWRlRXhwbG9zaW9uQW5pbWF0aW9uO1xyXG4gICAgICAgIHRoaXMuc291bmQgPSAoZGF0YS5zb3VuZCkgPyBkYXRhLnNvdW5kIDogbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBTaWRlT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLlNpZGVPYmplY3QgPSBTaWRlT2JqZWN0O1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5lbmVteUFuaW1hdGlvbiA9IGVuZW15TW9kdWxlcy5lbmVteUFuaW1hdGlvbjtcclxuU2lkZU9iamVjdC5wcm90b3R5cGUucGxhY2VFbmVteWVzID0gZW5lbXlNb2R1bGVzLnBsYWNlRW5lbXllcztcclxuU2lkZU9iamVjdC5wcm90b3R5cGUuZmlyZUFuaW1hdGlvbkVuZGVkID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZmlyZUFuaW1hdGlvbkVuZGVkO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5tYXBPYmplY3RNb3ZlID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEubWFwT2JqZWN0TW92ZTtcclxuU2lkZU9iamVjdC5wcm90b3R5cGUuZW5lbXlEYW1hZ2VBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15RGFtYWdlQW5pbWF0aW9uO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5zcGF3bkNvaW4gPSBlbmVtaWVzTW9kdWxlc18xLnNwYXduQ29pbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21haW5HYW1lQ29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbGV2ZWxDb25zdHJ1Y3RvcnNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbmVteUNvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdXNlckNvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYnVsbGV0Q29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2FtZUdyYXBwbGVPYmplY3RzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc291bmRDb25zdHJ1Y3RvclwiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbmdpbmVNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBiYWNrZ3JvdW5kTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2JhY2tncm91bmRNb2R1bGVcIik7XHJcbnZhciBHYW1lQmFja2dyb3VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVCYWNrZ3JvdW5kKGJhY2tncm91bmRUZXh0dXJlLCBiYWNrZ3JvdW5kU3BlZWQsIHNjcmVlbkRhdGEsIGN0eCwgcGFydE9mU2NyZWVuU3RhdHVzLCBleHRyYU1hcCwgdGltZVRvRXh0cmFNYXBTZWNvbmRzLCB0aW1lVG9FeHRyYU1hcE1pbnV0ZXMpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSA9IGJhY2tncm91bmRUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFNwZWVkID0gYmFja2dyb3VuZFNwZWVkO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuRGF0YSA9IHNjcmVlbkRhdGE7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy54ID0gKHBhcnRPZlNjcmVlblN0YXR1cykgPyAwIDogc2NyZWVuRGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5leHRyYU1hcCA9IGV4dHJhTWFwO1xyXG4gICAgICAgIHRoaXMudGltZVRvRXJlc3NMZXZlbCA9IDQ7XHJcbiAgICAgICAgdGhpcy53YXJwT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGltZVRvRXh0cmFNYXBTZWNvbmRzID0gdGltZVRvRXh0cmFNYXBTZWNvbmRzO1xyXG4gICAgICAgIHRoaXMudGltZVRvRXh0cmFNYXBNaW51dGVzID0gdGltZVRvRXh0cmFNYXBNaW51dGVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdhbWVCYWNrZ3JvdW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWVCYWNrZ3JvdW5kID0gR2FtZUJhY2tncm91bmQ7XHJcbkdhbWVCYWNrZ3JvdW5kLnByb3RvdHlwZS51cGRhdGVNYXAgPSBiYWNrZ3JvdW5kTW9kdWxlXzEudXBkYXRlTWFwO1xyXG5HYW1lQmFja2dyb3VuZC5wcm90b3R5cGUud2FycEVmZmVjdCA9IGVuZ2luZU1vZHVsZXNfMS53YXJwRWZmZWN0O1xyXG5HYW1lQmFja2dyb3VuZC5wcm90b3R5cGUuY2hhbmdlUGFydE9mVGV4dHVyZSA9IGJhY2tncm91bmRNb2R1bGVfMS5jaGFuZ2VQYXJ0T2ZUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL2ltcG9ydCB7IHZpZXdNb2R1bGVzIH0gZnJvbSAnLi4vdmlldy9kaXNwbGF5TW9kdWxlcyc7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBjaGFuZ2VMZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZU1vZHVsZXMvY2hhbmdlTGV2ZWxzXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgcGxheWVyU2hpcE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlXCIpO1xyXG52YXIgZ2FtZVVpTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3VpL2dhbWVVaU1vZHVsZXNcIik7XHJcbnZhciBzYXRhcnRHYW1lXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVNb2R1bGVzL3NhdGFydEdhbWVcIik7XHJcbnZhciBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVHcmFwcGxlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIG1lbnVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL2FwcE1lbnUvbWVudVNldHRpbmdzXCIpO1xyXG52YXIgc291bmRNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL3NvdW5kTW9kdWxlc1wiKTtcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKGdhbWVJbml0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhID0gZ2FtZUluaXREYXRhO1xyXG4gICAgfVxyXG4gICAgR2FtZS5wcm90b3R5cGUuY2hhbmdlTGV2ZWwgPSBmdW5jdGlvbiAobmV4dExldmVsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsID0gbmV4dExldmVsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWw7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd0dhbWVJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxldmVsVG9DaGFuZ2U6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudFBvaW50OiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50UG9pbnQsXHJcbiAgICAgICAgICAgIGdhbWVEYXRhOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmdhbWVTZXRpbmdzLFxyXG4gICAgICAgICAgICBsZXZlbFNvdW5kczogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxTb3VuZHMsXHJcbiAgICAgICAgICAgIGltYWdlRGlycmVjdGlvbjogX19kaXJuYW1lICsgJy9wdWJsaWMvaW1hZ2VzLycsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93TGV2ZWxEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbERhdGE7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmV0dXJuQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVBY3Rpb25GaWVsZCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRmllbGQsXHJcbiAgICAgICAgICAgICAgICBnYW1lQWN0aW9uRmllbGQ6IHRoaXMuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZ2FtZVVJRmllbGQ6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWUgPSBHYW1lO1xyXG5HYW1lLnByb3RvdHlwZS5jcmVhdGVDb250ZXh0ID0gZW5naW5lTW9kdWxlc18xLmNyZWF0ZUNvbnRleHQ7XHJcbkdhbWUucHJvdG90eXBlLmluaXRGaWVsZCA9IGVuZ2luZU1vZHVsZXNfMS5pbml0RmllbGQ7XHJcbkdhbWUucHJvdG90eXBlLmxldmVsSW5pdCA9IGVuZ2luZU1vZHVsZXNfMS5sZXZlbEluaXQ7IC8vIGNyZWF0ZUNvbnRleHQgaW5pdFBsYXllclNoaXBcclxuR2FtZS5wcm90b3R5cGUuc2V0R2FtZUZpZWxkcyA9IGVuZ2luZU1vZHVsZXNfMS5zZXRHYW1lRmllbGRzO1xyXG5HYW1lLnByb3RvdHlwZS53YXJwRWZmZWN0ID0gZW5naW5lTW9kdWxlc18xLndhcnBFZmZlY3Q7IC8vIHdhcnBFZmZlY3RcclxuR2FtZS5wcm90b3R5cGUuZ2V0U2NyZWVuU2l6ZSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRTY3JlZW5TaXplO1xyXG5HYW1lLnByb3RvdHlwZS5nZXRMZXZlbFVzZXJEYXRhID0gZW5naW5lTW9kdWxlc18xLmdldExldmVsVXNlckRhdGE7XHJcbkdhbWUucHJvdG90eXBlLmxldmVsVGltZXIgPSBlbmdpbmVNb2R1bGVzXzEubGV2ZWxUaW1lcjtcclxuR2FtZS5wcm90b3R5cGUuZ2V0U2Vjb25kTWVhc3VyZSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRTZWNvbmRNZWFzdXJlO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lU2Vjb25kc0luY3JlYXNlID0gZW5naW5lTW9kdWxlc18xLmdhbWVTZWNvbmRzSW5jcmVhc2U7XHJcbkdhbWUucHJvdG90eXBlLmluaXRQbGF5ZXJTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLmluaXRQbGF5ZXJTaGlwO1xyXG4vL0dhbWUucHJvdG90eXBlLnBsYWNlUGxheWVyU2hpcCA9IHBsYWNlUGxheWVyU2hpcDtcclxuR2FtZS5wcm90b3R5cGUuZGVsZXRlQnVsbGV0ID0gZW5naW5lTW9kdWxlc18xLmRlbGV0ZUJ1bGxldDtcclxuR2FtZS5wcm90b3R5cGUuZGVsZXRlT2JqZWN0cyA9IGVuZ2luZU1vZHVsZXNfMS5kZWxldGVPYmplY3RzO1xyXG5HYW1lLnByb3RvdHlwZS5kZWxhdGVTaWRlT2JqZWN0ID0gZW5naW5lTW9kdWxlc18xLmRlbGF0ZVNpZGVPYmplY3Q7XHJcbkdhbWUucHJvdG90eXBlLmhpdERldGVjdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuaGl0RGV0ZWN0aW9uO1xyXG5HYW1lLnByb3RvdHlwZS5jb2xsZWN0UG9pbnRzID0gZW5naW5lTW9kdWxlc18xLmNvbGxlY3RQb2ludHM7XHJcbkdhbWUucHJvdG90eXBlLnNwYXduRW5lbXlMb2dpYyA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLnNwYXduRW5lbXlMb2dpYztcclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlTmV3RW5lbXkgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5jcmVhdGVOZXdFbmVteTtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVJhbmRvbWl6ZXIgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5nYW1lUmFuZG9taXplcjtcclxuR2FtZS5wcm90b3R5cGUudWlDb250cm9sbGVyID0gZ2FtZVVpTW9kdWxlc18xLnVpQ29udHJvbGxlcjtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVVpUGF1c2UgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVVpUGF1c2U7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVVaU1lbnUgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVVpTWVudTtcclxuR2FtZS5wcm90b3R5cGUuc2hvd01lbnVXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd01lbnVXaW5kb3c7XHJcbkdhbWUucHJvdG90eXBlLnNob3dVaVBvcHVwV2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dVaVBvcHVwV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93U3RhcnRXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd1N0YXJ0V2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93UGF1c2VXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd1BhdXNlV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5sZXZlbENoYW5nZVdpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5sZXZlbENoYW5nZVdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXJXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZU92ZXJXaW5kb3c7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVXaW5XaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVdpbldpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd0dhbWVTdGF0cyA9IGdhbWVVaU1vZHVsZXNfMS5zaG93R2FtZVN0YXRzO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0VWlFbGVtZW50cyA9IGdhbWVVaU1vZHVsZXNfMS5pbml0VWlFbGVtZW50cztcclxuR2FtZS5wcm90b3R5cGUubWFwU291bmRDaGFuZ2VyID0gc2F0YXJ0R2FtZV8xLm1hcFNvdW5kQ2hhbmdlcjtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVN0YXJ0ID0gc2F0YXJ0R2FtZV8xLmdhbWVTdGFydDtcclxuR2FtZS5wcm90b3R5cGUuYmFja1RvU3RhcnRTY3JlZW4gPSBzYXRhcnRHYW1lXzEuYmFja1RvU3RhcnRTY3JlZW47XHJcbkdhbWUucHJvdG90eXBlLmV4aXRUaGVHYW1lID0gc2F0YXJ0R2FtZV8xLmV4aXRUaGVHYW1lO1xyXG5HYW1lLnByb3RvdHlwZS5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gY2hhbmdlTGV2ZWxzXzEubmV4dExldmVsRGF0YVJlbG9hZDtcclxuR2FtZS5wcm90b3R5cGUuY2hhbmdlTGV2ZWxQcm9jZWR1cmUgPSBlbmdpbmVNb2R1bGVzXzEuY2hhbmdlTGV2ZWxQcm9jZWR1cmU7XHJcbkdhbWUucHJvdG90eXBlLmdldFJhbmRvbUNvbG9yID0gZW5naW5lTW9kdWxlc18xLmdldFJhbmRvbUNvbG9yO1xyXG5HYW1lLnByb3RvdHlwZS5tYXBSYW5vbU9iamVjdFNwYXduID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEubWFwUmFub21PYmplY3RTcGF3bjtcclxuR2FtZS5wcm90b3R5cGUuaW5pdEdyYXBwbGVPYmplY3QgPSBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMS5pbml0R3JhcHBsZU9iamVjdDtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVNldHRpbmdzTWVudUluaXQgPSBtZW51U2V0dGluZ3NfMS5nYW1lU2V0dGluZ3NNZW51SW5pdDtcclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlU291bmQgPSBzb3VuZE1vZHVsZXNfMS5jcmVhdGVTb3VuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzb3VuZE1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvc291bmRNb2R1bGVzXCIpO1xyXG52YXIgU291bmRDcmVhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU291bmRDcmVhdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnNvdW5kT2JqZWN0ID0gbmV3IEF1ZGlvKCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZFVybCA9IF9fZGlybmFtZSArIGRhdGEuc291bmRVcmw7XHJcbiAgICAgICAgdGhpcy5zb3VuZExvb3AgPSBkYXRhLnNvdW5kTG9vcDtcclxuICAgICAgICB0aGlzLnNvdW5kT24gPSBkYXRhLnNvdW5kT247XHJcbiAgICAgICAgdGhpcy52b2x1bWUgPSBwcm9jZXNzLmVudi5NQUlOX0dBTUVfU09VTkQ7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0VXJsID0gKGRhdGEuZGVmYXVsdFVybCkgPyBkYXRhLmRlZmF1bHRVcmwgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNvdW5kQ3JlYXRvcjtcclxufSgpKTtcclxuZXhwb3J0cy5Tb3VuZENyZWF0b3IgPSBTb3VuZENyZWF0b3I7XHJcblNvdW5kQ3JlYXRvci5wcm90b3R5cGUuY2hhbmdlVm9sdW1lID0gc291bmRNb2R1bGVzXzEuY2hhbmdlVm9sdW1lO1xyXG5Tb3VuZENyZWF0b3IucHJvdG90eXBlLmNoYW5nZVRyYWNrID0gc291bmRNb2R1bGVzXzEuY2hhbmdlVHJhY2s7XHJcblNvdW5kQ3JlYXRvci5wcm90b3R5cGUuaW5pdFNvdW5kID0gc291bmRNb2R1bGVzXzEuaW5pdFNvdW5kO1xyXG5Tb3VuZENyZWF0b3IucHJvdG90eXBlLnNvdW5kUGxheSA9IHNvdW5kTW9kdWxlc18xLnNvdW5kUGxheTtcclxuU291bmRDcmVhdG9yLnByb3RvdHlwZS5zb3VuZFBhdXNlID0gc291bmRNb2R1bGVzXzEuc291bmRQYXVzZTtcclxuU291bmRDcmVhdG9yLnByb3RvdHlwZS5tYWtlTG9vcCA9IHNvdW5kTW9kdWxlc18xLm1ha2VMb29wO1xyXG5Tb3VuZENyZWF0b3IucHJvdG90eXBlLnR1cm5Tb3VuZE9mZiA9IHNvdW5kTW9kdWxlc18xLnR1cm5Tb3VuZE9mZjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBwbGF5ZXJTaGlwTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL3BsYXllclNoaXBNb2R1bGVcIik7XHJcbnZhciBlbmdpbmVNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBQbGF5ZXJTaGlwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxheWVyU2hpcChfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gZGF0YS5wb2ludHM7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZmxpZmUgPSBkYXRhLm51bWJlck9mbGlmZTtcclxuICAgICAgICB0aGlzLm1heE9mTGlmZSA9IGRhdGEubnVtYmVyT2ZsaWZlO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50ICsgZGF0YS5hcm1vcjtcclxuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGRhdGEuaGVhbHRoUG9pbnQgKyBkYXRhLmFybW9yO1xyXG4gICAgICAgIHRoaXMueCA9IGRhdGEueCAtIChkYXRhLndpZHRoIC8gMik7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55IC0gKGRhdGEuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy54RmluYWwgPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55RmluYWwgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25BbGxvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IFwicGxheWVyXCI7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLnhBZGogPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gZGF0YS5leHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYXRhLmRhbWFnZTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGRhdGEuaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zV2lkdGggPSBkYXRhLnNXaWR0aDtcclxuICAgICAgICB0aGlzLnNIZWlnaHQgPSBkYXRhLnNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwcyA9IGRhdGEuYW5pbWF0aW9uU3RlcHM7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gZGF0YS5udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zID0gZGF0YS5udW1iZXJPZlZlcnRpY2FsSXRlbXM7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlRXhwbG9zaW9uQW5pbWF0aW9uID0gZGF0YS5jb2xsaWRlRXhwbG9zaW9uQW5pbWF0aW9uO1xyXG4gICAgfVxyXG4gICAgUGxheWVyU2hpcC5wcm90b3R5cGUuZ2V0UGxheWVySW5mb3JtYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICBtYXhIZWFsdGhQb2ludDogdGhpcy5tYXhIZWFsdGhcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXJTaGlwO1xyXG59KCkpO1xyXG5leHBvcnRzLlBsYXllclNoaXAgPSBQbGF5ZXJTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5pbml0UGxheWVyU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5pbml0UGxheWVyU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUuc2hpcENvbnRyb2wgPSBwbGF5ZXJTaGlwTW9kdWxlXzEuc2hpcENvbnRyb2w7XHJcblBsYXllclNoaXAucHJvdG90eXBlLm1vdmVTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLm1vdmVTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5wbGFjZVNoaXAgPSBwbGF5ZXJTaGlwTW9kdWxlXzEucGxhY2VTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gcGxheWVyU2hpcE1vZHVsZV8xLnNldENvbnRleHQ7XHJcblBsYXllclNoaXAucHJvdG90eXBlLmdldE9iamVjdFBvc2l0aW9uID0gZW5naW5lTW9kdWxlc18xLmdldE9iamVjdFBvc2l0aW9uO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5lbmVteUFuaW1hdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuZW5lbXlBbmltYXRpb247XHJcblBsYXllclNoaXAucHJvdG90eXBlLnBsYWNlRW5lbXllcyA9IGVuZW1pZXNNb2R1bGVzXzEucGxhY2VFbmVteWVzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb3N0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vY29uc3RydWN0b3JzL2luZGV4XCIpKTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxudmFyIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBnYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgc291bmRNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL3NvdW5kTW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gcGxhY2VFbmVteWVzKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUltYWdlKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCwgdGhpcy5pbWcsIHRoaXMuc3gsIHRoaXMuc3ksIHRoaXMuc1dpZHRoLCB0aGlzLnNIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy5wbGFjZUVuZW15ZXMgPSBwbGFjZUVuZW15ZXM7XHJcbmZ1bmN0aW9uIG1vdmVFbmVteWVzKG1vdmVYLCBtb3ZlWSkge1xyXG4gICAgaWYgKG1vdmVZID09PSB2b2lkIDApIHsgbW92ZVkgPSAwOyB9XHJcbiAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIHRoaXMueSAtPSBtb3ZlWTtcclxufVxyXG5leHBvcnRzLm1vdmVFbmVteWVzID0gbW92ZUVuZW15ZXM7XHJcbmZ1bmN0aW9uIGxvYWRFbmVteWVzKCkge1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuc2hpcFRleHR1cmU7XHJcbn1cclxuZXhwb3J0cy5sb2FkRW5lbXllcyA9IGxvYWRFbmVteWVzO1xyXG5mdW5jdGlvbiBzaG90KEJ1bGxldENvbnN0cnVjdCwgbWFpbkdhbWVPYmplY3QsIFNvdW5kQ3JlYXRvcikge1xyXG4gICAgaWYgKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgfHwgIXRoaXMuaXNTaG90KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBndW5zID0gdGhpcy5ndW5zO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmICgxID4gbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIoaXRlbS5maXJlUmVwZWFkKSkge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXNfMTtcclxuICAgICAgICAgICAgdmFyIGJ1bGxldF8xID0gbmV3IEJ1bGxldENvbnN0cnVjdCh7XHJcbiAgICAgICAgICAgICAgICB4OiBjb250ZXh0LngsIHk6IGNvbnRleHQueSArICgoaXRlbS5maXJlUG9zaXRpb24pID8gaXRlbS5maXJlUG9zaXRpb24gOiBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplcihjb250ZXh0LmhlaWdodCkpLFxyXG4gICAgICAgICAgICAgICAgYnVsbGV0VHlwZTogaXRlbS5uYW1lLCBidWxsZXRUZXh0dXJlOiBpdGVtLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IFwiZW5lbXlcIiwgYnVsbGV0U3BlZWQ6IGl0ZW0uc3BlZWQgKyB0aGlzXzEuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaXRlbS53aWR0aCwgaGVpZ2h0OiBpdGVtLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRhbWFnZTogaXRlbS5kYW1hZ2UsIHR5cGU6IGl0ZW0udHlwZSwgdGV4dHVyZTogaXRlbS50ZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgc3g6IGl0ZW0uc3gsIHN5OiBpdGVtLnN5LCBzV2lkdGg6IGl0ZW0uc1dpZHRoLCBzSGVpZ2h0OiBpdGVtLnNIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBleHBsb3Npb246IGl0ZW0uZXhwbG9zaW9uQW5pbWF0aW9uLCBpbWFnZVdpZHRoOiBpdGVtLmltYWdlV2lkdGgsIGltYWdlSGVpZ2h0OiBpdGVtLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcHM6IGl0ZW0uYW5pbWF0aW9uU3RlcHMsIG51bWJlck9mSXRlbXM6IGl0ZW0ubnVtYmVyT2ZJdGVtcywgbnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zOiBpdGVtLm51bWJlck9mVmVydGljYWxJdGVtcyxcclxuICAgICAgICAgICAgICAgIHNvdW5kOiBpdGVtLnNvdW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBidWxsZXRfMS5pbWcuc3JjID0gYnVsbGV0XzEudGV4dHVyZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVuZW15IHNob290XCIpXHJcbiAgICAgICAgICAgIHZhciBzb3VuZFByb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgc291bmRVcmw6IGJ1bGxldF8xLnNvdW5kLmxldmVsU291bmQsXHJcbiAgICAgICAgICAgICAgICBzb3VuZExvb3A6IGJ1bGxldF8xLnNvdW5kLnNvdW5kTG9vcCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnVsbGV0XzEuc291bmQuc291bmRPYmplY3QgPSBzb3VuZE1vZHVsZXNfMS5pbml0U291bmRPYmplY3QoeyBTb3VuZENyZWF0b3I6IFNvdW5kQ3JlYXRvciwgbWFpbkdhbWVPYmplY3Q6IG1haW5HYW1lT2JqZWN0LCBzb3VuZFByb3BzOiBzb3VuZFByb3BzIH0pO1xyXG4gICAgICAgICAgICBidWxsZXRfMS5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLmNvbmNhdChidWxsZXRfMSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBndW5zXzEgPSBndW5zOyBfaSA8IGd1bnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGd1bnNfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShpdGVtKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNob3QgPSBzaG90O1xyXG5mdW5jdGlvbiBlbmVteUFuaW1hdGlvbihzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSB0cnVlOyB9XHJcbiAgICB0aGlzLmRldGVjdEZyYW1lICs9IDE7XHJcbiAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ggPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVuZW15QW5pbWF0aW9uID0gZW5lbXlBbmltYXRpb247XHJcbmZ1bmN0aW9uIGVuZW15RGFtYWdlQW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zID4gMSkge1xyXG4gICAgICAgIHZhciBkYW1hZ2VBbmltYXRpb25Qb2ludF8xID0gdGhpcy5vcmlnaW5hbEhlYWx0aFBvaW50IC8gdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXM7XHJcbiAgICAgICAgdmFyIGRhbWFnZVBvaW50ID0gbmV3IEFycmF5KHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zKS5maWxsKG51bGwpO1xyXG4gICAgICAgIGRhbWFnZVBvaW50ID0gZGFtYWdlUG9pbnQubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkgeyByZXR1cm4gZGFtYWdlQW5pbWF0aW9uUG9pbnRfMSAqIChpbmRleCArIDEpOyB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSkucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGFtYWdlUG9pbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoUG9pbnQgPCBkYW1hZ2VQb2ludFtpXSAmJiB0aGlzLmhlYWx0aFBvaW50ID4gZGFtYWdlUG9pbnRbaSArIDFdICYmIGRhbWFnZVBvaW50W2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeSA9IHRoaXMuc0hlaWdodCAqIChpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFkYW1hZ2VQb2ludFtpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3kgPSB0aGlzLnNIZWlnaHQgKiAodGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVuZW15RGFtYWdlQW5pbWF0aW9uID0gZW5lbXlEYW1hZ2VBbmltYXRpb247XHJcbi8vIGNvbXBsZXggZW5lbXkgYW5pbWF0aW9uIGZvciBkYW1hZ2VcclxuZnVuY3Rpb24gdGFrZURhbWFnZShkYW1hZ2UsIGhpdE9iamVjdCwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIC8qIEJ1bGxldCBoaXQgZGV0ZWN0aW9uICovXHJcbiAgICBpZiAodGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCAmJiB0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCAmJiB0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW52aXJvbm1lbnRcIiAmJiBoaXRPYmplY3QuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpIHx8XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpKSB7XHJcbiAgICAgICAgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZXhwbG9zaW9uRmlyZSh0aGlzLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBjb3N0cnVjdG9ycy5TaWRlT2JqZWN0LCBcImV4cGxvc2lvblwiKTtcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvKiBHYW1lIGdyYXBwbGUgb2JqZWN0IGhpdCBkZXRlY3Rpb24gKi9cclxuICAgIGlmICh0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImdyYXBwbGVPYmplY3RcIiAmJlxyXG4gICAgICAgIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmXHJcbiAgICAgICAgIWhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbiA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xLmV4cGxvc2lvbkZpcmUodGhpcywgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgY29zdHJ1Y3RvcnMuU2lkZU9iamVjdCwgXCJleHBsb3Npb25cIik7XHJcbiAgICAgICAgdGhpc1t0aGlzLmdyYXBwbGVQb3dlci5tZXRob2ROYW1lXSh7IGFsbEdhbWVTaWRlT2JqZWN0czogbWFpbkdhbWVPYmplY3QsIHBsYXllclNoaXBEYXRhOiBoaXRPYmplY3QsIG1haW5HYW1lT2JqZWN0OiBtYWluR2FtZU9iamVjdCB9KTtcclxuICAgIH1cclxuICAgIC8qIEhpdCBkZXQgZGVjdGlvbiBjb2xsaXNpb24gKi9cclxuICAgIGlmICh0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCAmJiB0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgfHxcclxuICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW52aXJvbm1lbnRcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCAmJiB0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIpIHtcclxuICAgICAgICB1bml0RGFtYWdlLmNhbGwodGhpcywgbnVsbCwgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlEYW1hZ2VBbmltYXRpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhQb2ludCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL2NvbGxpZGVFeHBsb3Npb25BbmltYXRpb25cclxuICAgICAgICAgICAgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZXhwbG9zaW9uRmlyZSh0aGlzLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBjb3N0cnVjdG9ycy5TaWRlT2JqZWN0LCBcImNvbGxpZGVFeHBsb3Npb25BbmltYXRpb25cIik7XHJcbiAgICAgICAgICAgIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xLmV4cGxvc2lvbkZpcmUodGhpcywgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgY29zdHJ1Y3RvcnMuU2lkZU9iamVjdCwgXCJleHBsb3Npb25cIik7XHJcbiAgICAgICAgICAgIC8vLyBsb2FkIGNvaW5zXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwYXduQ29pbilcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Db2luKG1haW5HYW1lT2JqZWN0LCBjb3N0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb3NzKVxyXG4gICAgICAgICAgICAgICAgYm9zc0VuZW15RGVzdHJ1Y3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uQWxsb3cpIHtcclxuICAgICAgICAgICAgdW5pdERhbWFnZS5jYWxsKHRoaXMsIG1haW5HYW1lT2JqZWN0LmdldExldmVsVXNlckRhdGEoKSwgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiB1bml0RGFtYWdlKGRhdGEsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoUG9pbnQgPD0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxpZmUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNvdXJzZS5wbGF5ZXJPYmplY3QubnVtYmVyT2ZsaWZlIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zb3Vyc2UucGxheWVyT2JqZWN0Lm51bWJlck9mbGlmZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZU92ZXJXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5iYWNrVG9TdGFydFNjcmVlbihjb3N0cnVjdG9ycy5QbGF5ZXJTaGlwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBkYXRhLnNvdXJzZS5wbGF5ZXJPYmplY3QubWF4SGVhbHRoO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmNvbGxlY3RQb2ludHModGhpcy5wb2ludHNQZXJVbml0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJvc3NFbmVteURlc3RydWN0aW9uKCkge1xyXG4gICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy50YWtlRGFtYWdlID0gdGFrZURhbWFnZTtcclxuZnVuY3Rpb24gc3Bhd25Db2luKG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KSB7XHJcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnZXh0cmFPYmplY3RzJykpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5leHRyYU9iamVjdHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2luID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBjb2luLnggPSB0aGlzLng7XHJcbiAgICAgICAgICAgIGNvaW4ueSA9IHRoaXMueTtcclxuICAgICAgICAgICAgZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEubG9hZEdyYWJibGVUb1NpZGVPYmplY3QuY2FsbCh0aGlzLCBtYWluR2FtZU9iamVjdCwgY29pbiwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3Bhd25Db2luID0gc3Bhd25Db2luO1xyXG5mdW5jdGlvbiBoaXREZXRlY3Rpb24ob2JqZWN0MSwgb2JqZWN0c0FyciwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIHZhciBjb2xsaXNpb24gPSBudWxsO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBvYmplY3RzQXJyXzEgPSBvYmplY3RzQXJyOyBfaSA8IG9iamVjdHNBcnJfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgb2JqZWN0MiA9IG9iamVjdHNBcnJfMVtfaV07XHJcbiAgICAgICAgdmFyIG9iamVjdDFQb3NpdGlvbiA9IG9iamVjdDEuZ2V0T2JqZWN0UG9zaXRpb24uY2FsbChvYmplY3QxKTtcclxuICAgICAgICB2YXIgeE1pbiA9IE1hdGgubWF4KG9iamVjdDFQb3NpdGlvbi54LCBvYmplY3QyLngpO1xyXG4gICAgICAgIHZhciB5TWluID0gTWF0aC5tYXgob2JqZWN0MVBvc2l0aW9uLnksIG9iamVjdDIueSk7XHJcbiAgICAgICAgdmFyIHhNYXggPSBNYXRoLm1pbihvYmplY3QxUG9zaXRpb24ueCArIChvYmplY3QxLndpZHRoIHx8IG9iamVjdDFQb3NpdGlvbi53aWR0aCksIG9iamVjdDIueCArIG9iamVjdDIud2lkdGgpO1xyXG4gICAgICAgIHZhciB5TWF4ID0gTWF0aC5taW4ob2JqZWN0MVBvc2l0aW9uLnkgKyAob2JqZWN0MS5oZWlnaHQgfHwgb2JqZWN0MVBvc2l0aW9uLmhlaWdodCksIG9iamVjdDIueSArIG9iamVjdDIuaGVpZ2h0KTtcclxuICAgICAgICB2YXIgcmVzWCA9IHhNYXggLSB4TWluO1xyXG4gICAgICAgIHZhciByZXNZID0geU1heCAtIHlNaW47XHJcbiAgICAgICAgY29sbGlzaW9uID0gKE1hdGguc2lnbihyZXNYKSA8IDAgfHwgTWF0aC5zaWduKHJlc1kpIDwgMCkgPyBmYWxzZSA6IFwiY29sbGlzaW9uXCI7XHJcbiAgICAgICAgaWYgKGNvbGxpc2lvbiA9PSBcImNvbGxpc2lvblwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QxLnRha2VEYW1hZ2UgJiYgb2JqZWN0Mi50YWtlRGFtYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QxLnRha2VEYW1hZ2UoKG9iamVjdDIuZGFtYWdlKSA/IG9iamVjdDIuZGFtYWdlIDogMCwgb2JqZWN0MiwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Mi50YWtlRGFtYWdlKChvYmplY3QxLmRhbWFnZSkgPyBvYmplY3QxLmRhbWFnZSA6IDAsIG9iamVjdDEsIG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGNvbGxpc2lvbiA9PSBcImNvbGxpc2lvblwiKSA/IG9iamVjdDEgOiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmhpdERldGVjdGlvbiA9IGhpdERldGVjdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VuZW1pZXNNb2R1bGVzXCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5vRGF0YSA9ICdUaGVyZSBpcyBubyBkYXRhJywgbm9PYmplY3QgPSAnVGhlcmUgaXMgbm8gT2JqZWN0JztcclxuZXhwb3J0cy5ub0RhdGEgPSBub0RhdGE7XHJcbmV4cG9ydHMubm9PYmplY3QgPSBub09iamVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gdXBkYXRlTWFwKCkge1xyXG4gICAgdmFyIGJhY2tncm91bmRPYmplY3QgPSB0aGlzO1xyXG4gICAgdGhpcy54IC09IHRoaXMuYmFja2dyb3VuZFNwZWVkO1xyXG4gICAgaWYgKE1hdGguc2lnbih0aGlzLmJhY2tncm91bmRTcGVlZCkgPiAwICYmIHRoaXMueCArIHRoaXMuc2NyZWVuRGF0YS53aWR0aCA8IDApIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnNjcmVlbkRhdGEud2lkdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChNYXRoLnNpZ24odGhpcy5iYWNrZ3JvdW5kU3BlZWQpIDwgMCAmJiB0aGlzLnggPiB0aGlzLnNjcmVlbkRhdGEud2lkdGgpIHtcclxuICAgICAgICB0aGlzLnggPSAwIC0gdGhpcy5zY3JlZW5EYXRhLndpZHRoO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVJbWFnZShiYWNrZ3JvdW5kT2JqZWN0LmN0eCwgYmFja2dyb3VuZE9iamVjdC5pbWcsIGJhY2tncm91bmRPYmplY3QueCwgMCwgYmFja2dyb3VuZE9iamVjdC5zY3JlZW5EYXRhLndpZHRoICsgMiwgYmFja2dyb3VuZE9iamVjdC5zY3JlZW5EYXRhLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy51cGRhdGVNYXAgPSB1cGRhdGVNYXA7XHJcbmZ1bmN0aW9uIGNoYW5nZVBhcnRPZlRleHR1cmUobWFpbkdhbWVPYmplY3QsIGJhY2tncm91bmRBcnJheSkge1xyXG4gICAgdmFyIGxldmVsRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIHZhciBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgaWYgKGxldmVsRGF0YS5taW51dGVzIDw9IHRoaXMudGltZVRvRXh0cmFNYXBNaW51dGVzXHJcbiAgICAgICAgJiYgbGV2ZWxEYXRhLnNlY29uZHMgPD0gdGhpcy50aW1lVG9FeHRyYU1hcFNlY29uZHNcclxuICAgICAgICAmJiB0aGlzLmV4dHJhTWFwICYmIHRoaXMueCA+PSBzY3JlZW5EYXRhLndpZHRoIC0gMjAwKSB7XHJcbiAgICAgICAgdmFyIGluZm8gPSBtYWluR2FtZU9iamVjdC5zaG93R2FtZUluZm8oKTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBfX2Rpcm5hbWUgKyB0aGlzLmV4dHJhTWFwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY2hhbmdlUGFydE9mVGV4dHVyZSA9IGNoYW5nZVBhcnRPZlRleHR1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1bGxldHMobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlTGFzZXJCdWxsZXQoe1xyXG4gICAgICAgIHNvdXJjZTogdGhpcyxcclxuICAgICAgICBvYmplY3RPd25lcjogdGhpcy5vYmplY3RPd25lcixcclxuICAgICAgICBjdHg6IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCxcclxuICAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLmJ1bGxldFRleHR1cmUsXHJcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICByYWRpdXM6IDUsXHJcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgIGltZzogdGhpcy5pbWcsXHJcbiAgICAgICAgc3g6IHRoaXMuc3gsIHN5OiB0aGlzLnN5LCBzV2lkdGg6IHRoaXMuc1dpZHRoLCBzSGVpZ2h0OiB0aGlzLnNIZWlnaHQsXHJcbiAgICAgICAgaW1hZ2VXaWR0aDogdGhpcy5pbWFnZVdpZHRoLCBpbWFnZUhlaWdodDogdGhpcy5pbWFnZUhlaWdodCwgYW5pbWF0aW9uU3RlcHM6IHRoaXMuYW5pbWF0aW9uU3RlcHMsXHJcbiAgICAgICAgbnVtYmVyT2ZJdGVtczogdGhpcy5udW1iZXJPZkl0ZW1zLCBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUJ1bGxldHMgPSBjcmVhdGVCdWxsZXRzO1xyXG5mdW5jdGlvbiBpbml0QnVsbGV0cygpIHtcclxufVxyXG5leHBvcnRzLmluaXRCdWxsZXRzID0gaW5pdEJ1bGxldHM7XHJcbmZ1bmN0aW9uIG1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJibGFzdGVyXCI6XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJlYW1cIjpcclxuICAgICAgICAgICAgYmVhbS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJlYW0oKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBnYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICBpZiAodGhpcy54ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHRoaXMuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggLT0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlQnVsbGV0cyA9IG1vdmVCdWxsZXRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbi8vaW1wb3J0IHsgbGV2ZWxDb25zdHJ1Y3RvciB9IGZyb20gJy4uL2NvbnN0cnVjdG9ycy9sZXZlbENvbnN0cnVjdG9ycyc7XHJcbmZ1bmN0aW9uIGluaXRGaWVsZChzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KSB7XHJcbiAgICBpZiAoc2NyZWVuV2lkdGggPT09IHZvaWQgMCkgeyBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyB9XHJcbiAgICBpZiAoc2NyZWVuSGVpZ2h0ID09PSB2b2lkIDApIHsgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyB9XHJcbiAgICB2YXIgZ2FtZUZpZWxkID0gW10uY29uY2F0KHRoaXMuZ2FtZUluaXREYXRhLmdhbWVGaWVsZCwgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUFjdGlvbkZpZWxkLCB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCk7XHJcbiAgICBpZiAoIWdhbWVGaWVsZClcclxuICAgICAgICB0aHJvdyBFcnJvcignRXJyb3InKTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZ2FtZUZpZWxkXzEgPSBnYW1lRmllbGQ7IF9pIDwgZ2FtZUZpZWxkXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbl8xID0gZ2FtZUZpZWxkXzFbX2ldO1xyXG4gICAgICAgIHNjcmVlbl8xID0gT2JqZWN0LmFzc2lnbihzY3JlZW5fMSwgeyB3aWR0aDogc2NyZWVuV2lkdGggLSA0LCBoZWlnaHQ6IHNjcmVlbkhlaWdodCAtIDQgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbml0RmllbGQgPSBpbml0RmllbGQ7XHJcbmZ1bmN0aW9uIHNldEdhbWVGaWVsZHMoKSB7XHJcbiAgICB0aGlzLmluaXRGaWVsZCgpO1xyXG4gICAgdGhpcy5jcmVhdGVDb250ZXh0KCk7XHJcbiAgICB0aGlzLmluaXRQbGF5ZXJTaGlwKCk7XHJcbn1cclxuZXhwb3J0cy5zZXRHYW1lRmllbGRzID0gc2V0R2FtZUZpZWxkcztcclxuZnVuY3Rpb24gd2FycEVmZmVjdCgpIHtcclxuICAgIHZhciBzY3JlZW5TaXogPSB0aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgIHZhciBjdHggPSB0aGlzLmdhbWVJbml0RGF0YS5jdHg7XHJcbiAgICB2YXIgZ2FtZVdhcnBPYmplY3RzID0gdGhpcy5nYW1lSW5pdERhdGEud2FycE9iamVjdHM7XHJcbiAgICB0aGlzLmdldFNlY29uZE1lYXN1cmUod2FycFRpbWVyLCB7IHRpbWVUb0VyZXNzTGV2ZWw6IHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwsIGN0eDogY3R4LCBzY3JlZW5TaXo6IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpIH0pO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEud2FycE9iamVjdHMgPSAoZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDM1MCkgPyB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cy5jb25jYXQoe1xyXG4gICAgICAgIHg6IHNjcmVlblNpei53aWR0aCxcclxuICAgICAgICB5OiB0aGlzLmdhbWVSYW5kb21pemVyKHNjcmVlblNpei5oZWlnaHQpLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5nYW1lUmFuZG9taXplcigyMCwgMTApLFxyXG4gICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICBzcGVlZDogdGhpcy5nYW1lUmFuZG9taXplcigxMCwgNSksXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhpcy5nZXRSYW5kb21Db2xvcigpLFxyXG4gICAgfSkgOiB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cztcclxuICAgIGlmIChnYW1lV2FycE9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZ2FtZVdhcnBPYmplY3RzXzEgPSBnYW1lV2FycE9iamVjdHM7IF9pIDwgZ2FtZVdhcnBPYmplY3RzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXJwZXIgPSBnYW1lV2FycE9iamVjdHNfMVtfaV07XHJcbiAgICAgICAgICAgIHdhcnBlci54IC09ICh3YXJwZXIueCA+IDApID8gd2FycGVyLnNwZWVkIDogMDtcclxuICAgICAgICAgICAgd2FycGVyLndpZHRoID0gKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPCAxNTApID8gd2FycGVyLndpZHRoIC0gd2FycGVyLnNwZWVkXHJcbiAgICAgICAgICAgICAgICA6IChnYW1lV2FycE9iamVjdHMubGVuZ3RoID4gMTUwICYmIGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPCAzNTApID8gd2FycGVyLndpZHRoICsgd2FycGVyLnNwZWVkIDogd2FycGVyLndpZHRoIC0gd2FycGVyLnNwZWVkO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gd2FycGVyLmJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuZHJhdyhjdHgsICdmaWxsUmVjdCcsIHdhcnBlci54LCB3YXJwZXIueSwgd2FycGVyLndpZHRoLCB3YXJwZXIuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXJwVGltZXIobGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgdmFyIGxldmVDaGFuZ2VTdGF0dXMgPSAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA+PSAwKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA+PSAwICYmICFsZXZlQ2hhbmdlU3RhdHVzKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsIC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwgPCAwICYmICFsZXZlQ2hhbmdlU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoYW5nZSBtdXNpYycpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmxldmVsV2luZG93RGVzY3JpcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxldmVsUHJvY2VkdXJlKCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5tYXBTb3VuZENoYW5nZXIoe3NvdW5kU3RhdHVzOidyZWd1bGFyX2xldmVsJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMud2FycEVmZmVjdCA9IHdhcnBFZmZlY3Q7XHJcbmZ1bmN0aW9uIGxldmVsSW5pdChHYW1lQmFja2dyb3VuZCwgY3R4LCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIGdhbWVEYXRhID0gdGhpcy5zaG93TGV2ZWxEYXRhKCk7XHJcbiAgICB2YXIgYWxsQmFja2dyb3VuZEVsZW1lbnRzID0gZ2FtZURhdGEubGV2ZWxCYWNrZ3JvdW5kRWxlbWVudHM7XHJcbiAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYmFja1NjcmVlblBhdXNlID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJhY2tncm91bmRFbGVtZW50c18xID0gYWxsQmFja2dyb3VuZEVsZW1lbnRzOyBfaSA8IGFsbEJhY2tncm91bmRFbGVtZW50c18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBtYXBPYmplY3QgPSBhbGxCYWNrZ3JvdW5kRWxlbWVudHNfMVtfaV07XHJcbiAgICAgICAgdmFyIG1hcEl0ZW0gPSBuZXcgR2FtZUJhY2tncm91bmQobWFwT2JqZWN0LmxldmVsTWFwLCBtYXBPYmplY3Quc3BlZWQsIHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbiwgY3R4LCAodGhpcy5nYW1lSW5pdERhdGEubWFwQmFja2dyb3VuZE9iamVjdHMubGVuZ3RoICUgMiA9PSAwKSA/IHRydWUgOiBudWxsLCAobWFwT2JqZWN0LmV4dHJhTWFwKSA/IG1hcE9iamVjdC5leHRyYU1hcCA6IG51bGwsIChtYXBPYmplY3QudGltZVRvRXh0cmFNYXBTZWNvbmRzKSA/IG1hcE9iamVjdC50aW1lVG9FeHRyYU1hcFNlY29uZHMgOiBudWxsLCAobWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwTWludXRlcykgPyBtYXBPYmplY3QudGltZVRvRXh0cmFNYXBNaW51dGVzIDogbnVsbCk7XHJcbiAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzLmNvbmNhdChtYXBJdGVtKTtcclxuICAgICAgICBtYXBJdGVtLmltZy5zcmMgPSBfX2Rpcm5hbWUgKyBtYXBJdGVtLmJhY2tncm91bmRUZXh0dXJlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubGV2ZWxJbml0ID0gbGV2ZWxJbml0O1xyXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuY3R4ID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVBY3Rpb25GaWVsZC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkLmdldENvbnRleHQoJzJkJyk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcclxuZnVuY3Rpb24gZ2V0U2NyZWVuU2l6ZSgpIHtcclxuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgaGVpZ2h0ID0gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodDtcclxuICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxyXG5leHBvcnRzLmdldFNjcmVlblNpemUgPSBnZXRTY3JlZW5TaXplO1xyXG5mdW5jdGlvbiBjaGFuZ2VMZXZlbFByb2NlZHVyZSgpIHtcclxuICAgIC8vIGFuaW1hdGlvbiBmb3Igd2FycCwgaHR0cCByZXF1ZXN0IGZvciBsZXZlbCBhbmQgZW5lbXllcywgMTAgbGV2ZWxzIG11c3QgYmVcclxuICAgIC8vIHNvbWUgbGV2ZWxzIG11c3QgY29udGFpbiBib3NzIGF0IGxlYXN0IDIgYm9zc1xyXG4gICAgLy8gbGFzdCBsZXZlbCBpcyBmaW5hbCB0aXRsZXMgdGhlIGVuZCBzYXZlIHNjb3JlXHJcbiAgICB2YXIgbGV2ZWxEYXRhID0gdGhpcy5zaG93R2FtZUluZm8oKTtcclxuICAgIHZhciBsZXZlbCA9IHRoaXMuY2hhbmdlTGV2ZWwobGV2ZWxEYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbCArIDEpO1xyXG4gICAgaWYgKGxldmVsIDw9IGxldmVsRGF0YS5nYW1lRGF0YS5sZXZlbERhdGEuYWxsTGV2ZWxzKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWxEYXRhUmVsb2FkKGxldmVsRGF0YSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lV2luID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5sZXZlbFdpbmRvd0Rlc2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VMZXZlbFByb2NlZHVyZSA9IGNoYW5nZUxldmVsUHJvY2VkdXJlO1xyXG5mdW5jdGlvbiBsZXZlbFRpbWVyKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIGlmICghZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmJvc3NQcmVzZW50KSB7XHJcbiAgICAgICAgdmFyIGxldmVsVGltZSA9IGRhdGEuc291cnNlLmxldmVsRGF0YS5sZXZlbERldGFpbHM7IC8vIHsgbGV2ZWxNaW51dGVzOiAzLCBsZXZlbFNlY29uZHM6IDQzIH1cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLmdldFNlY29uZE1lYXN1cmUobGV2ZWxUaW1lQWN0aW9uLCBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRhdGEuc291cnNlLmxldmVsRGF0YS5sZXZlbERldGFpbHMubGV2ZWxTZWNvbmRzID0gbnVsbDtcclxuICAgICAgICBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzLmxldmVsTWludXRlcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsZXZlbFRpbWVBY3Rpb24odGltZSkge1xyXG4gICAgICAgIGlmICh0aW1lLmxldmVsU2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lLmxldmVsTWludXRlcyA9PSAwICYmIHRpbWUubGV2ZWxTZWNvbmRzID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRpbWUubGV2ZWxTZWNvbmRzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lLmxldmVsTWludXRlcyA9ICh0aW1lLmxldmVsTWludXRlcyA+IDApID8gdGltZS5sZXZlbE1pbnV0ZXMgLSAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZS5sZXZlbFNlY29uZHMgPSAodGltZS5sZXZlbFNlY29uZHMgPiAwKSA/IHRpbWUubGV2ZWxTZWNvbmRzIC0gMSA6ICh0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSkgPyAwIDogNTk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sZXZlbFRpbWVyID0gbGV2ZWxUaW1lcjtcclxuZnVuY3Rpb24gZ2V0U2Vjb25kTWVhc3VyZShjYWxsYmFjaykge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZVNlY29uZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU2Vjb25kID0gMTAwMCAvIHRoaXMuZ2FtZUluaXREYXRhLmludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5nYW1lSW5pdERhdGEuZ2VtZUV4dHJhU2Vjb25kcyAlIGdhbWVTZWNvbmQgPT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdlbWVFeHRyYVNlY29uZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNhbGxiYWNrXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9hLnNlbnQoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2FsbGJhY2suY2FsbC5hcHBseShjYWxsYmFjaywgX19zcHJlYWRBcnJheXMoW3RoaXNdLCBkYXRhKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdhbWVTZWNvbmRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0U2Vjb25kTWVhc3VyZSA9IGdldFNlY29uZE1lYXN1cmU7XHJcbmZ1bmN0aW9uIGdhbWVTZWNvbmRzSW5jcmVhc2UoKSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nZW1lRXh0cmFTZWNvbmRzICs9IDE7XHJcbn1cclxuZXhwb3J0cy5nYW1lU2Vjb25kc0luY3JlYXNlID0gZ2FtZVNlY29uZHNJbmNyZWFzZTtcclxuZnVuY3Rpb24gZ2V0TGV2ZWxVc2VyRGF0YSgpIHtcclxuICAgIHZhciBkYXRhU291cnNlID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGE7XHJcbiAgICB2YXIgbGV2ZWxUaW1lID0gZGF0YVNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzb3Vyc2U6IGRhdGFTb3Vyc2UsXHJcbiAgICAgICAgY3VycmVudExldmVsOiBkYXRhU291cnNlLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICBhbGxMZXZlbHM6IGRhdGFTb3Vyc2UubGV2ZWxEYXRhLmFsbExldmVscyxcclxuICAgICAgICBwb2ludHM6IGRhdGFTb3Vyc2UuY3VycmVudFBvaW50LFxyXG4gICAgICAgIGdhbWVDb2luczogZGF0YVNvdXJzZS5nYW1lQ29pbnMsXHJcbiAgICAgICAgbGlmZTogZGF0YVNvdXJzZS5wbGF5ZXJPYmplY3QubnVtYmVyT2ZsaWZlLFxyXG4gICAgICAgIG1pbnV0ZXM6IGxldmVsVGltZS5sZXZlbE1pbnV0ZXMsXHJcbiAgICAgICAgc2Vjb25kczogbGV2ZWxUaW1lLmxldmVsU2Vjb25kc1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmdldExldmVsVXNlckRhdGEgPSBnZXRMZXZlbFVzZXJEYXRhO1xyXG5mdW5jdGlvbiBkZWxldGVCdWxsZXQoYnVsbGV0KSB7XHJcbiAgICBpZiAoYnVsbGV0LnggPiB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGhcclxuICAgICAgICB8fCBidWxsZXQueCA8IGJ1bGxldC53aWR0aCAqIC0xXHJcbiAgICAgICAgfHwgIWJ1bGxldC5vYmplY3RQcmVzZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMuaW5kZXhPZihidWxsZXQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWxldGVCdWxsZXQgPSBkZWxldGVCdWxsZXQ7XHJcbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdHMob2JqZWN0KSB7XHJcbiAgICBpZiAob2JqZWN0LnggKyBvYmplY3Quc1dpZHRoIDwgMCB8fCAhb2JqZWN0Lm9iamVjdFByZXNlbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlbGV0ZU9iamVjdHMgPSBkZWxldGVPYmplY3RzO1xyXG5mdW5jdGlvbiBkZWxhdGVTaWRlT2JqZWN0KG9iamVjdCkge1xyXG4gICAgaWYgKCFvYmplY3Qub2JqZWN0UHJlc2VudCB8fCBvYmplY3QueCA8IDAgLSBvYmplY3Qud2lkdGgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVsYXRlU2lkZU9iamVjdCA9IGRlbGF0ZVNpZGVPYmplY3Q7XHJcbmZ1bmN0aW9uIGNvbGxlY3RQb2ludHMocG9pbnQpIHtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRQb2ludCArPSBwb2ludDtcclxufVxyXG5leHBvcnRzLmNvbGxlY3RQb2ludHMgPSBjb2xsZWN0UG9pbnRzO1xyXG5mdW5jdGlvbiBnZXRPYmplY3RQb3NpdGlvbigpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gdGhpcztcclxuICAgIHZhciBwb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiBtYWluT2JqZWN0LngsXHJcbiAgICAgICAgeTogbWFpbk9iamVjdC55LFxyXG4gICAgICAgIHdpZHRoOiBtYWluT2JqZWN0LndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5oZWlnaHQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG59XHJcbmV4cG9ydHMuZ2V0T2JqZWN0UG9zaXRpb24gPSBnZXRPYmplY3RQb3NpdGlvbjtcclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XHJcbiAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJzsgLy8gJzAxMjM0NTY3ODlBQkNERUYnICAnNjc4OUFCQyc7XHJcbiAgICB2YXIgY29sb3IgPSAnIyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxufVxyXG5leHBvcnRzLmdldFJhbmRvbUNvbG9yID0gZ2V0UmFuZG9tQ29sb3I7XHJcbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShpdGVtcykge1xyXG4gICAgdmFyIGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcbiAgICBsb29wVmVydGljYWwoaXRlbXMpO1xyXG4gICAgZnVuY3Rpb24gbG9vcFZlcnRpY2FsKG9iamVjdCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbCA9IF9iWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wVmVydGljYWwob2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFzc2lnbmltYWdlKGtleSwgdmFsLCBpbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXNzaWduaW1hZ2Uoa2V5LCB2YWwsIGltYWdlKSB7XHJcbiAgICAgICAgaWYgKGtleSA9PSAnc2tpbk5hbWUnIHx8IGtleSA9PSAndGV4dHVyZScgfHwga2V5ID09ICdsZXZlbE1hcCcpIHtcclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IF9fZGlybmFtZSArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wcmVsb2FkSW1hZ2UgPSBwcmVsb2FkSW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0KG1haW5HYW1lT2JqZWN0LCB0YXJnZXQsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZUluZm8sIGdhbWVEYXRhLCBzY3JlZW5EYXRhLCBjb250ZXh0LCBzaWRlT2JqZWN0LCBvYmplY3REYXRhLCBncmFwcGxlT2JqZWN0LCBfYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW5mbyA9IG1haW5HYW1lT2JqZWN0LnNob3dHYW1lSW5mbygpLCBnYW1lRGF0YSA9IGdhbWVJbmZvLmdhbWVEYXRhLCBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBtYWluR2FtZU9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAodGFyZ2V0LngpID8gdGFyZ2V0LnggKyBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNpZGVPYmplY3Qud2lkdGgpIDogc2NyZWVuRGF0YS53aWR0aCArIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogKHRhcmdldC55KSA/IHRhcmdldC55ICsgY29udGV4dC5nYW1lUmFuZG9taXplcihzaWRlT2JqZWN0LmhlaWdodCkgOiBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNjcmVlbkRhdGEuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogdGFyZ2V0Lm9iamVjdE93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHRhcmdldC5pbWFnZVdpZHRoIC8gdGFyZ2V0Lm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNIZWlnaHQ6IHRhcmdldC5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldC53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXQuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwczogdGFyZ2V0LmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mSXRlbXM6IHRhcmdldC5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB0YXJnZXQuc2tpbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB0YXJnZXQuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IHRhcmdldC5pbWFnZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogdGFyZ2V0LmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2U6IHRhcmdldC5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQmFja2dyb3VuZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uOiB0YXJnZXQuZXhwbG9zaW9uQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNQZXJVbml0OiB0YXJnZXQucG9pbnRzUGVyVW5pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmFwcGxlOiB0YXJnZXQuaXNHcmFwcGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlUG93ZXI6IHRhcmdldC5ncmFwcGxlUG93ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kOiB0YXJnZXQuc291bmRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3QgPSBuZXcgR3JhcHBsZU9iamVjdChfX2Fzc2lnbih7fSwgb2JqZWN0RGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3QuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmNvbmNhdChncmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gZ3JhcHBsZU9iamVjdC5pbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ3JhcHBsZU9iamVjdC50ZXh0dXJlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zcmMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0ID0gbG9hZEdyYWJibGVUb1NpZGVPYmplY3Q7XHJcbmZ1bmN0aW9uIGluaXRHcmFwcGxlT2JqZWN0KEdyYXBwbGVPYmplY3QsIHBsYXllclNoaXBEYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdhbWVJbmZvLCBnYW1lRGF0YSwgbGV2ZWxEYXRhLCBncmFwcGxlRGF0YSwgc2NyZWVuRGF0YSwgc3Bhd25Qcm9iYWJpbGl0eSwgcmFuZG9tT2JqZWN0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIGdhbWVJbmZvID0gdGhpcy5zaG93R2FtZUluZm8oKSwgZ2FtZURhdGEgPSBnYW1lSW5mby5nYW1lRGF0YSwgbGV2ZWxEYXRhID0gZ2FtZURhdGEubGV2ZWxEYXRhLCBncmFwcGxlRGF0YSA9IGdhbWVEYXRhLmdyYXBwbGVPYmplY3RzLCBzY3JlZW5EYXRhID0gdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgIHNwYXduUHJvYmFiaWxpdHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5ncmFwbGVPYmplY3RQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgIGlmIChzcGF3blByb2JhYmlsaXR5IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tT2JqZWN0ID0gZ3JhcHBsZURhdGFbdGhpcy5nYW1lUmFuZG9taXplcihncmFwcGxlRGF0YS5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tT2JqZWN0LmdyYXBwbGVQb3dlci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxpZmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclNoaXBEYXRhLm51bWJlck9mbGlmZSA+PSBwbGF5ZXJTaGlwRGF0YS5tYXhPZkxpZmUgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0KHRoaXMsIHJhbmRvbU9iamVjdCwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5pbml0R3JhcHBsZU9iamVjdCA9IGluaXRHcmFwcGxlT2JqZWN0O1xyXG5mdW5jdGlvbiBhZGRQbGF5ZXJMaWZlKF9hKSB7XHJcbiAgICB2YXIgYWxsR2FtZVNpZGVPYmplY3RzID0gX2EuYWxsR2FtZVNpZGVPYmplY3RzLCBwbGF5ZXJTaGlwRGF0YSA9IF9hLnBsYXllclNoaXBEYXRhLCBtYWluR2FtZU9iamVjdCA9IF9hLm1haW5HYW1lT2JqZWN0O1xyXG4gICAgcGxheWVyU2hpcERhdGEubnVtYmVyT2ZsaWZlICs9IHRoaXMuZ3JhcHBsZVBvd2VyLnZhbHVlO1xyXG59XHJcbmV4cG9ydHMuYWRkUGxheWVyTGlmZSA9IGFkZFBsYXllckxpZmU7XHJcbmZ1bmN0aW9uIGNvbGxlY3RDb2luKF9hKSB7XHJcbiAgICB2YXIgYWxsR2FtZVNpZGVPYmplY3RzID0gX2EuYWxsR2FtZVNpZGVPYmplY3RzLCBwbGF5ZXJTaGlwRGF0YSA9IF9hLnBsYXllclNoaXBEYXRhLCBtYWluR2FtZU9iamVjdCA9IF9hLm1haW5HYW1lT2JqZWN0O1xyXG4gICAgdmFyIGdhbWVJbmZvID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCksIGdhbWVEYXRhID0gZ2FtZUluZm8uZ2FtZURhdGEsIGxldmVsRGF0YSA9IGdhbWVEYXRhLmxldmVsRGF0YSwgZ3JhcHBsZURhdGEgPSBnYW1lRGF0YS5ncmFwcGxlT2JqZWN0cztcclxuICAgIGdhbWVEYXRhLmdhbWVDb2lucyArPSB0aGlzLmdyYXBwbGVQb3dlci52YWx1ZTtcclxufVxyXG5leHBvcnRzLmNvbGxlY3RDb2luID0gY29sbGVjdENvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2F0YXJ0R2FtZV8xID0gcmVxdWlyZShcIi4vc2F0YXJ0R2FtZVwiKTtcclxuZnVuY3Rpb24gbmV4dExldmVsRGF0YVJlbG9hZChsZXZlbERhdGEpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBob3Jpem9udGFsVmVydGljYWxTZWFyY2gobWFpbk9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWFpbk9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYWluT2JqZWN0W2tleV0gPT0gJ29iamVjdCcgJiYgdmFsdWUgIT0gbnVsbCAmJiAhbWFpbk9iamVjdFtrZXldLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxWZXJ0aWNhbFNlYXJjaChtYWluT2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXNzaWduVmFsdWUuY2FsbCh0aGlzLCBrZXksIG1haW5PYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFzc2lnblZhbHVlKGluY29tZUtleSwgbWFpbkRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKHJlZnJlc2hMZXZlbCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWwgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaW5jb21lS2V5ICYmIHZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGFba2V5XSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV4dExldmVsLCBzZXJ2ZXJOZXdEYXRhLCBjb250ZXh0LCByZWZyZXNoTGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExldmVsID0gbGV2ZWxEYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzYXRhcnRHYW1lXzEuc2VydmVyUmVxdWVzdCh7IGxldmVsOiBuZXh0TGV2ZWwsIHNoaXBDb25maWd1cmF0aW9uOiAxIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJOZXdEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hMZXZlbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbDogbmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvaW50OiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50UG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPYmplY3Q6IGNvbnRleHQuZ2FtZUluaXREYXRhLmdhbWVEYXRhLnBsYXllck9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb2luczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZUNvaW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiBzZXJ2ZXJOZXdEYXRhLmxldmVsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czogc2VydmVyTmV3RGF0YS5sZXZlbE9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czogc2VydmVyTmV3RGF0YS5ncmFwcGxlT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsU291bmRzOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbFNvdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWREYXRhOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5wcmVsb2FkRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogc2VydmVyTmV3RGF0YS5lbmVteURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY29udHJvbGxlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lU2lkZU9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lRW5lbWllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVCdWxsZXRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZU1hcE9CamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBCYWNrZ3JvdW5kT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVaVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja1NjcmVlblBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RPblNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbWVFeHRyYVNlY29uZHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEud2FycE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2FtZUluaXREYXRhLmxldmVsV2luZG93RGVzY3JpcHRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsVmVydGljYWxTZWFyY2guY2FsbCh0aGlzLCB0aGlzLmdhbWVJbml0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBTb3VuZENoYW5nZXIoeyBzb3VuZFN0YXR1czogJ3JlZ3VsYXJfbGV2ZWwnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gbmV4dExldmVsRGF0YVJlbG9hZDtcclxuZnVuY3Rpb24gY2hhbmdlU2hpcCgpIHtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VXZWFwb24oKSB7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NhdGFydEdhbWVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jaGFuZ2VMZXZlbHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBsb2FkU2NyZWVuXzEgPSByZXF1aXJlKFwiLi4vLi4vdWkvbG9hZFNjcmVlblwiKTtcclxudmFyIHJlbW90ZSA9IHJlcXVpcmUoJ2VsZWN0cm9uJykucmVtb3RlO1xyXG5mdW5jdGlvbiBzZXJ2ZXJSZXF1ZXN0KGdhbWVJbmZvcm1hdGlvbikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZXJ2ZXJMb2NhdGlvbiwgbGV2ZWxEYXRhLCBsZXZlbE9iamVjdHMsIGdyYXBwbGVPYmplY3RzLCBwcmVsb2FkRGF0YSwgZ2FtZVNldGluZ3MsIHVzZXJEYXRhLCBlbmVteURhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYsIHByb2Nlc3MuZW52LkhPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5IT1NULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc0RpcmVjdGlvbjogX19kaXJuYW1lICsgJy9wdWJsaWMvaW1hZ2VzLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9sZXZlbC1kYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2xldmVsLW9iamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9ncmFwcGxlLW9iamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9nYW1lLXNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNoaXA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvdXNlci1zaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlsRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9lbmVteS1zaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmxldmVsRGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmxldmVsRGF0YS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnbWFwbGV2ZWwnOiBnYW1lSW5mb3JtYXRpb24ubGV2ZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5sZXZlbE9iamVjdHMudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi5sZXZlbE9iamVjdHMubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ21hcE9iamVjdCc6IGxldmVsRGF0YS5sZXZlbE9CamVjdHMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5ncmFwcGxlT2JqZWN0cy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmdyYXBwbGVPYmplY3RzLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdncmFwcGxlT2JqZWN0JzogbGV2ZWxEYXRhLmdyYXBwbGVPYmplY3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXRMb2NhbERhdGEoeyBmaWxlTmFtZTogJ3ByZWxvYWREYXRhLmpzb24nIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldExvY2FsRGF0YSh7IGZpbGVOYW1lOiAnZ2FtZS1zZXR0aW5ncy5qc29uJyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3MgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLnVzZXJTaGlwLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24udXNlclNoaXAubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3VzZXJzaGlwJzogZ2FtZUluZm9ybWF0aW9uLnNoaXBDb25maWd1cmF0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5lbmVteWxEYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24uZW5lbXlsRGF0YS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnc2hpcC10eXBlLW51bWJlcic6IGxldmVsRGF0YS5lbmVteVR5cGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZU1vZHVsZXNfMS5wcmVsb2FkSW1hZ2UoZW5lbXlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmVNb2R1bGVzXzEucHJlbG9hZEltYWdlKGxldmVsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lTW9kdWxlc18xLnByZWxvYWRJbWFnZShsZXZlbE9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGE6IGxldmVsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czogbGV2ZWxPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHM6IGdyYXBwbGVPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZERhdGE6IHByZWxvYWREYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3M6IGdhbWVTZXRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGE6IHVzZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhOiBlbmVteURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2VydmVyUmVxdWVzdCA9IHNlcnZlclJlcXVlc3Q7XHJcbmZ1bmN0aW9uIGdhbWVEYXRhSW5pdChQbGF5ZXJTaGlwLCBzb3VuZE9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBnYW1lRmllbGQsIGdhbWVBY3Rpb25GaWVsZCwgZ2FtZVVJZmllbGQsIGxldmVsLCBzaGlwVHlwZSwgc2hpcExpZmUsIHJlcywgbGV2ZWxEYXRhLCBsZXZlbE9iamVjdHMsIGdyYXBwbGVPYmplY3RzLCBwcmVsb2FkRGF0YSwgZ2FtZVNldGluZ3MsIHVzZXJEYXRhLCBlbmVteURhdGEsIHNoaXBEYXRhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRTY3JlZW5fMS5sb2FkV2luZG93KHsgbG9hZFN0YXR1czogXCJsb2FkXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVmaWVsZCcpLCBnYW1lQWN0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU9iamVjdHNmaWVsZCcpLCBnYW1lVUlmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lVWlmaWVsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gMiwgc2hpcFR5cGUgPSAxLCBzaGlwTGlmZSA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdCh7IGxldmVsOiBsZXZlbCwgc2hpcENvbmZpZ3VyYXRpb246IHNoaXBUeXBlIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhID0gcmVzLmxldmVsRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHMgPSByZXMubGV2ZWxPYmplY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzID0gcmVzLmdyYXBwbGVPYmplY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWREYXRhID0gcmVzLnByZWxvYWREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzID0gcmVzLmdhbWVTZXRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gcmVzLnVzZXJEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YSA9IHJlcy5lbmVteURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsRGF0YS5zdGF0dXMgPT09IFwiZXJyb3JcIiB8fCBsZXZlbE9iamVjdHMgPT09IFwiZXJyb3JcIiB8fCBncmFwcGxlT2JqZWN0cyA9PT0gXCJlcnJvclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YS5nYW1lU2V0aW5ncyA9PT0gXCJlcnJvclwiIHx8IHVzZXJEYXRhID09PSBcImVycm9yXCIgfHwgZW5lbXlEYXRhID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFNjcmVlbl8xLmxvYWRXaW5kb3coeyBsb2FkU3RhdHVzOiBcInNlcnZlckVycm9yXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRTY3JlZW5fMS5sb2FkV2luZG93KHsgbG9hZFN0YXR1czogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB1c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZmxpZmU6IHNoaXBMaWZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhPZkxpZmU6IHNoaXBMaWZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcm1vcjogdXNlckRhdGEuYXJtb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhGaW5hbDogdXNlckRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeUZpbmFsOiB1c2VyRGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BbGxvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IFwicGxheWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB1c2VyRGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB1c2VyRGF0YS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBZGo6IDAsIHNwZWVkOiB1c2VyRGF0YS5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uOiB1c2VyRGF0YS5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZTogdXNlckRhdGEuZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeDogdXNlckRhdGEuc3gsIHN5OiB1c2VyRGF0YS5zeSwgcGljdHVyZXNXaWR0aDogdXNlckRhdGEuaW1hZ2VXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IHVzZXJEYXRhLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHVzZXJEYXRhLnNXaWR0aCwgc0hlaWdodDogdXNlckRhdGEuc0hlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcHM6IHVzZXJEYXRhLmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkl0ZW1zOiB1c2VyRGF0YS5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IHVzZXJEYXRhLm51bWJlck9mVmVydGljYWxJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZUV4cGxvc2lvbkFuaW1hdGlvbjogdXNlckRhdGEuY29sbGlkZUV4cGxvc2lvbkFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRmllbGQ6IChnYW1lRmllbGQpID8gZ2FtZUZpZWxkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lQWN0aW9uRmllbGQ6IChnYW1lQWN0aW9uRmllbGQpID8gZ2FtZUFjdGlvbkZpZWxkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lVUlGaWVsZDogKGdhbWVVSWZpZWxkKSA/IGdhbWVVSWZpZWxkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWw6IGxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9pbnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb2luczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT2JqZWN0OiBuZXcgUGxheWVyU2hpcChzaGlwRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IGxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHM6IGdyYXBwbGVPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbFNvdW5kczogKHNvdW5kT2JqZWN0KSA/IHNvdW5kT2JqZWN0IDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZERhdGE6IHByZWxvYWREYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5nczogZ2FtZVNldGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogZW5lbXlEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsQ291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lU2lkZU9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVFbmVtaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lQnVsbGV0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZU1hcE9CamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEJhY2tncm91bmRPYmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJwT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVRvRXJlc3NMZXZlbDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lVWlQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja1NjcmVlblBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lV2luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbFdpbmRvd0Rlc2NyaXB0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0T25TY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbWVFeHRyYVNlY29uZHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdhbWVEYXRhSW5pdCA9IGdhbWVEYXRhSW5pdDtcclxuZnVuY3Rpb24gZ2FtZUVuZ2luZShnYW1lRGF0YUluaXQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2FtZUVuZ2luZSA9IGdhbWVFbmdpbmU7XHJcbmZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcclxuICAgIHRoaXMubWFwU291bmRDaGFuZ2VyKHsgc291bmRTdGF0dXM6ICdyZWd1bGFyX2xldmVsJyB9KTtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzID0gdHJ1ZTtcclxufVxyXG5leHBvcnRzLmdhbWVTdGFydCA9IGdhbWVTdGFydDtcclxuZnVuY3Rpb24gbWFwU291bmRDaGFuZ2VyKF9hKSB7XHJcbiAgICB2YXIgc291bmRTdGF0dXMgPSBfYS5zb3VuZFN0YXR1cztcclxuICAgIHZhciBnYW1lRGF0YSA9IHRoaXMuc2hvd0dhbWVJbmZvKCkuZ2FtZURhdGE7XHJcbiAgICB2YXIgbWFwU291bmQgPSBnYW1lRGF0YS5sZXZlbERhdGEubGV2ZWxTb3VuZDtcclxuICAgIHZhciBnYW1lU291bmRPYmplY3QgPSBnYW1lRGF0YS5sZXZlbFNvdW5kcztcclxuICAgIHN3aXRjaCAoc291bmRTdGF0dXMpIHtcclxuICAgICAgICBjYXNlICdzdGFydF9zY3JlZW4nOlxyXG4gICAgICAgICAgICBtYXBTb3VuZCA9IGdhbWVEYXRhLnByZWxvYWREYXRhLnN0YXJ0U291bmQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlZ3VsYXJfbGV2ZWwnOlxyXG4gICAgICAgICAgICBtYXBTb3VuZCA9IGdhbWVEYXRhLmxldmVsRGF0YS5sZXZlbFNvdW5kO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBtYXBTb3VuZDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgbXVzaWNjaGFuZ2VcIiwgc291bmRTdGF0dXMsIGdhbWVEYXRhLmxldmVsRGF0YSk7XHJcbiAgICBnYW1lU291bmRPYmplY3QuY2hhbmdlVHJhY2soeyB1cmw6IG1hcFNvdW5kIH0pO1xyXG4gICAgZ2FtZVNvdW5kT2JqZWN0LnNvdW5kUGxheSgpO1xyXG59XHJcbmV4cG9ydHMubWFwU291bmRDaGFuZ2VyID0gbWFwU291bmRDaGFuZ2VyO1xyXG5mdW5jdGlvbiBiYWNrVG9TdGFydFNjcmVlbihQbGF5ZXJTaGlwKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNvdW5kT2JqZWN0LCBuZXdJbml0ZGF0YSwgX2ksIF9hLCBfYiwga2V5LCB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZE9iamVjdCA9IHRoaXMuc2hvd0dhbWVJbmZvKCkuZ2FtZURhdGEubGV2ZWxTb3VuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2FtZURhdGFJbml0KFBsYXllclNoaXAsIHNvdW5kT2JqZWN0KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5pdGRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdJbml0ZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyAnbmV3SW5pdGRhdGEuZGF0YSdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobmV3SW5pdGRhdGEuZGF0YSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFNvdW5kQ2hhbmdlcih7IHNvdW5kU3RhdHVzOiAnc3RhcnRfc2NyZWVuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYmFja1RvU3RhcnRTY3JlZW4gPSBiYWNrVG9TdGFydFNjcmVlbjtcclxuZnVuY3Rpb24gZXhpdFRoZUdhbWUoKSB7XHJcbiAgICB2YXIgdyA9IHJlbW90ZS5nZXRDdXJyZW50V2luZG93KCk7XHJcbiAgICB3LmNsb3NlKCk7XHJcbn1cclxuZXhwb3J0cy5leGl0VGhlR2FtZSA9IGV4aXRUaGVHYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbnN0cnVjdG9ycy9cIikpO1xyXG52YXIgc291bmRNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi9zb3VuZE1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIGV4cGxvc2lvbkZpcmUodGFyZ2V0RGF0YSwgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgU2lkZU9iamVjdCwgZXhwbG9zaW9uKSB7XHJcbiAgICB2YXIgaGl0WCA9IGhpdE9iamVjdC54ICsgaGl0T2JqZWN0LndpZHRoIC8gMiwgdGFyZ2V0WCA9IHRhcmdldERhdGEueCArIHRhcmdldERhdGEud2lkdGggLyAyO1xyXG4gICAgdmFyIGFkanVzdCA9IE1hdGgubWF4KGhpdFgsIHRhcmdldFgpIC0gTWF0aC5taW4oaGl0WCwgdGFyZ2V0WCk7XHJcbiAgICB2YXIgZXhwbG9zaW9uRGF0YSA9IHtcclxuICAgICAgICB4OiB0YXJnZXREYXRhLnggLSB0YXJnZXREYXRhW2V4cGxvc2lvbl0ud2lkdGggLyAyLFxyXG4gICAgICAgIHk6ICh0YXJnZXREYXRhLmJ1bGxldFR5cGUgfHwgdGFyZ2V0RGF0YVtleHBsb3Npb25dLmNlbnRyYWwpID8gdGFyZ2V0RGF0YS55IC0gdGFyZ2V0RGF0YVtleHBsb3Npb25dLndpZHRoIC8gMiA6IHRhcmdldERhdGEueSxcclxuICAgICAgICBzeDogMCxcclxuICAgICAgICBzeTogMCxcclxuICAgICAgICBvYmplY3RPd25lcjogXCJleHBsb3Npb25cIixcclxuICAgICAgICBzV2lkdGg6IHRhcmdldERhdGFbZXhwbG9zaW9uXS5pbWFnZVdpZHRoIC8gdGFyZ2V0RGF0YVtleHBsb3Npb25dLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgc0hlaWdodDogdGFyZ2V0RGF0YVtleHBsb3Npb25dLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOiB0YXJnZXREYXRhW2V4cGxvc2lvbl0ud2lkdGggKiAyLFxyXG4gICAgICAgIGhlaWdodDogdGFyZ2V0RGF0YVtleHBsb3Npb25dLndpZHRoICogMixcclxuICAgICAgICBhbmltYXRpb25TdGVwczogdGFyZ2V0RGF0YVtleHBsb3Npb25dLmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgIHRhcmdldDogaGl0T2JqZWN0Lm9iamVjdE93bmVyLFxyXG4gICAgICAgIG51bWJlck9mSXRlbXM6IHRhcmdldERhdGFbZXhwbG9zaW9uXS5pbWFnZVdpZHRoIC8gdGFyZ2V0RGF0YVtleHBsb3Npb25dLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgdGV4dHVyZTogdGFyZ2V0RGF0YVtleHBsb3Npb25dLnRleHR1cmUsXHJcbiAgICAgICAgc3BlZWQ6IGhpdE9iamVjdC5zcGVlZCAvIDIsXHJcbiAgICAgICAgcGljdHVyZXNXaWR0aDogdGFyZ2V0RGF0YVtleHBsb3Npb25dLmltYWdlV2lkdGgsXHJcbiAgICAgICAgc291bmQ6IHRhcmdldERhdGFbZXhwbG9zaW9uXS5zb3VuZFxyXG4gICAgfTtcclxuICAgIHZhciBzaWRlT2JqZWN0ID0gbmV3IFNpZGVPYmplY3QoX19hc3NpZ24oe30sIGV4cGxvc2lvbkRhdGEpKTtcclxuICAgIHZhciBzb3VuZFByb3BzID0ge1xyXG4gICAgICAgIHNvdW5kVXJsOiBzaWRlT2JqZWN0LnNvdW5kLmxldmVsU291bmQsXHJcbiAgICAgICAgc291bmRMb29wOiBzaWRlT2JqZWN0LnNvdW5kLnNvdW5kTG9vcCxcclxuICAgIH07XHJcbiAgICBzaWRlT2JqZWN0LnNvdW5kLnNvdW5kT2JqZWN0ID0gc291bmRNb2R1bGVzXzEuaW5pdFNvdW5kT2JqZWN0KHsgU291bmRDcmVhdG9yOiBjb25zdHJ1Y3RvcnMuU291bmRDcmVhdG9yLCBtYWluR2FtZU9iamVjdDogbWFpbkdhbWVPYmplY3QsIHNvdW5kUHJvcHM6IHNvdW5kUHJvcHMgfSk7XHJcbiAgICBzaWRlT2JqZWN0LmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuY29uY2F0KHNpZGVPYmplY3QpO1xyXG4gICAgfTtcclxuICAgIHNpZGVPYmplY3QuaW1nLnNyYyA9IHNpZGVPYmplY3QudGV4dHVyZTtcclxufVxyXG5leHBvcnRzLmV4cGxvc2lvbkZpcmUgPSBleHBsb3Npb25GaXJlO1xyXG5mdW5jdGlvbiBmaXJlQW5pbWF0aW9uRW5kZWQoYWxsR2FtZVNpZGVPYmplY3RzKSB7XHJcbiAgICB0aGlzLmRldGVjdEZyYW1lICs9IDE7XHJcbiAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYW5pbWF0aW9uU3RlcHMgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ggPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zeCA+PSB0aGlzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5maXJlQW5pbWF0aW9uRW5kZWQgPSBmaXJlQW5pbWF0aW9uRW5kZWQ7XHJcbmZ1bmN0aW9uIG1hcE9iamVjdE1vdmUoKSB7XHJcbiAgICB0aGlzLnggLT0gKHRoaXMuc3BlZWQpID8gdGhpcy5zcGVlZCA6IDM7XHJcbn1cclxuZXhwb3J0cy5tYXBPYmplY3RNb3ZlID0gbWFwT2JqZWN0TW92ZTtcclxuZnVuY3Rpb24gbWFwUmFub21PYmplY3RTcGF3bihsZXZlbE9iamVjdHMsIFNpZGVPYmplY3QsIGFsbEdhbWVTaWRlT2JqZWN0cykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hcE9iamVjdFNwYXduZXIobGV2ZWxPYmplY3RzLCBTaWRlT2JqZWN0LCBhbGxHYW1lU2lkZU9iamVjdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhbWVEYXRhLCBsZXZlbERhdGEsIHNwYXduUHJvYmFiaWxpdHksIGNvbnRleHQsIHNjcmVlbkRhdGEsIGxldmVsT2JqZWN0UHJvcHMsIHlQb3NpdGlvbiwgZXh0cmFPYmplY3RzLCBfYSwgZXh0cmFPYmplY3RPYmplY3RzRGF0YSwgc2lkZU9iamVjdF8xO1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhID0gdGhpcy5zaG93R2FtZUluZm8oKS5nYW1lRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YSA9IGdhbWVEYXRhLmxldmVsRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduUHJvYmFiaWxpdHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5vYmplY3RQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHNwYXduUHJvYmFiaWxpdHkgPCBsZXZlbERhdGEub2JqZWN0TWluVGltZVNwYXduKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5EYXRhID0gdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdFByb3BzID0gbGV2ZWxPYmplY3RzW3RoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uID0gKGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09IFwiYm90dG9tXCIgJiYgdHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHNjcmVlbkRhdGEuaGVpZ2h0IC0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbE9iamVjdFByb3BzLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PSBcInRvcFwiICYmIHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0IC8gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAobGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT0gXCJzY2VuZVwiICYmIHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHRoaXMuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuRGF0YS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGxldmVsT2JqZWN0UHJvcHMuZXh0cmFPYmplY3RzKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5sb2FkRXh0cmFPYmplY3QuY2FsbCh0aGlzLCBsZXZlbE9iamVjdFByb3BzLmV4dHJhT2JqZWN0cyldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYU9iamVjdHMgPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhT2JqZWN0T2JqZWN0c0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2NyZWVuRGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB5UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IGxldmVsT2JqZWN0UHJvcHMub2JqZWN0T3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1dpZHRoOiBsZXZlbE9iamVjdFByb3BzLmltYWdlV2lkdGggLyBsZXZlbE9iamVjdFByb3BzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0hlaWdodDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGV2ZWxPYmplY3RQcm9wcy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBzOiBsZXZlbE9iamVjdFByb3BzLmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkl0ZW1zOiBsZXZlbE9iamVjdFByb3BzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogbGV2ZWxPYmplY3RQcm9wcy5za2luTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogbGV2ZWxPYmplY3RQcm9wcy5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc1dpZHRoOiBsZXZlbE9iamVjdFByb3BzLmltYWdlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoUG9pbnQ6IGxldmVsT2JqZWN0UHJvcHMuaGVhbHRoUG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlOiBsZXZlbE9iamVjdFByb3BzLmRhbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JhY2tncm91bmQ6IGxldmVsT2JqZWN0UHJvcHMuaXNCYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbjogbGV2ZWxPYmplY3RQcm9wcy5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzUGVyVW5pdDogbGV2ZWxPYmplY3RQcm9wcy5wb2ludHNQZXJVbml0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhT2JqZWN0czogZXh0cmFPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVFeHBsb3Npb25BbmltYXRpb246IChsZXZlbE9iamVjdFByb3BzLmNvbGxpZGVFeHBsb3Npb25BbmltYXRpb24pID8gbGV2ZWxPYmplY3RQcm9wcy5jb2xsaWRlRXhwbG9zaW9uQW5pbWF0aW9uIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZDogbGV2ZWxPYmplY3RQcm9wcy5zb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3RfMSA9IG5ldyBTaWRlT2JqZWN0KF9fYXNzaWduKHt9LCBleHRyYU9iamVjdE9iamVjdHNEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0XzEuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBjb250ZXh0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuY29uY2F0KHNpZGVPYmplY3RfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdF8xLmltZy5zcmMgPSBzaWRlT2JqZWN0XzEudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3RfMS5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBfdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmNvbmNhdChzaWRlT2JqZWN0XzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2Vjb25kTWVhc3VyZShtYXBPYmplY3RTcGF3bmVyLCBsZXZlbE9iamVjdHMsIFNpZGVPYmplY3QsIGFsbEdhbWVTaWRlT2JqZWN0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWFwUmFub21PYmplY3RTcGF3biA9IG1hcFJhbm9tT2JqZWN0U3Bhd247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wbGF5ZXJTaGlwTW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZW5naW5lTW9kdWxlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2J1bGxldHNNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9iYWNrZ3JvdW5kTW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXBwRXJyb3JMaXN0TW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29uc3RydWN0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9jb25zdHJ1Y3RvcnMvXCIpKTtcclxudmFyIHNvdW5kTW9kdWxlc18xID0gcmVxdWlyZShcIi4vc291bmRNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBpbml0UGxheWVyU2hpcChtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLmN0eCkge1xyXG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGF0YS50ZXh0dXJlLCBpbWFnZUxvY2F0aW9uID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCkuaW1hZ2VEaXJyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucGxhY2VQbGF5ZXJTaGlwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wbGFjZVBsYXllclNoaXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaW1nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gaW1hZ2VMb2NhdGlvbiArIGltYWdlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW5pdFBsYXllclNoaXAgPSBpbml0UGxheWVyU2hpcDtcclxuZnVuY3Rpb24gc2hpcENvbnRyb2wobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgY29udHJvbEtleXMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZVNldGluZ3Mua2V5Q29udHJvbHM7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmRvd24uc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IDAsIHlQb3M6IF90aGlzLmRhdGEuc3BlZWQgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmxlZnQuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IF90aGlzLmRhdGEuc3BlZWQgKiAtMSwgeVBvczogMCB9KTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMucmlnaHQuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IF90aGlzLmRhdGEuc3BlZWQsIHlQb3M6IDAgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLnVwLnNvbWUoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIGUua2V5Q29kZSA9PSBvOyB9KSlcclxuICAgICAgICAgICAgX3RoaXMubW92ZVNoaXAoeyB4UG9zOiAwLCB5UG9zOiBfdGhpcy5kYXRhLnNwZWVkICogLTEgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIkNBTlZBU1wiXHJcbiAgICAgICAgICAgICYmICFtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlXHJcbiAgICAgICAgICAgICYmIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgeSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgX3RoaXMueEZpbmFsID0gKCh4ICUgX3RoaXMuZGF0YS5zcGVlZCA9PSAwKSA/IHggOiBfdGhpcy5kYXRhLnNwZWVkICogTWF0aC5mbG9vcih4IC8gX3RoaXMuZGF0YS5zcGVlZCkpIC0gKF90aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIF90aGlzLnlGaW5hbCA9ICgoeSAlIF90aGlzLmRhdGEuc3BlZWQgPT0gMCkgPyB5IDogX3RoaXMuZGF0YS5zcGVlZCAqIE1hdGguZmxvb3IoeSAvIF90aGlzLmRhdGEuc3BlZWQpKSAtIChfdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlIHx8ICFtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBndW5zID0gX3RoaXMuZGF0YS5ndW5zO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBfdGhpcztcclxuICAgICAgICAgICAgdmFyIGJ1bGxldCA9IG5ldyBjb25zdHJ1Y3RvcnMuQnVsbGV0Q29uc3RydWN0KHtcclxuICAgICAgICAgICAgICAgIHg6IGNvbnRleHQueCwgeTogY29udGV4dC55ICsgaXRlbS5maXJlUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBidWxsZXRUeXBlOiBpdGVtLm5hbWUsIGJ1bGxldFRleHR1cmU6IGl0ZW0uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogXCJwbGF5ZXJcIiwgYnVsbGV0U3BlZWQ6IGl0ZW0uc3BlZWQgKyBjb250ZXh0LnhBZGosXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaXRlbS53aWR0aCwgaGVpZ2h0OiBpdGVtLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRhbWFnZTogaXRlbS5kYW1hZ2UsIHR5cGU6IGl0ZW0udHlwZSwgdGV4dHVyZTogaXRlbS50ZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgc3g6IGl0ZW0uc3gsIHN5OiBpdGVtLnN5LCBzV2lkdGg6IGl0ZW0uc1dpZHRoLCBzSGVpZ2h0OiBpdGVtLnNIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBleHBsb3Npb246IGl0ZW0uZXhwbG9zaW9uQW5pbWF0aW9uLCBpbWFnZVdpZHRoOiBpdGVtLmltYWdlV2lkdGgsIGltYWdlSGVpZ2h0OiBpdGVtLmltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcHM6IGl0ZW0uYW5pbWF0aW9uU3RlcHMsIG51bWJlck9mSXRlbXM6IGl0ZW0ubnVtYmVyT2ZJdGVtcywgbnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zOiBpdGVtLm51bWJlck9mVmVydGljYWxJdGVtcyxcclxuICAgICAgICAgICAgICAgIHNvdW5kOiBpdGVtLnNvdW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgc291bmRQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgIHNvdW5kVXJsOiBidWxsZXQuc291bmQubGV2ZWxTb3VuZCxcclxuICAgICAgICAgICAgICAgIHNvdW5kTG9vcDogYnVsbGV0LnNvdW5kLnNvdW5kTG9vcCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBsYXllciBzaG9vdCBzb3VuZFwiLCBwcm9jZXNzLmVudi5NQUlOX0dBTUVfU09VTkRfT04pXHJcbiAgICAgICAgICAgIGJ1bGxldC5zb3VuZC5zb3VuZE9iamVjdCA9IHNvdW5kTW9kdWxlc18xLmluaXRTb3VuZE9iamVjdCh7IFNvdW5kQ3JlYXRvcjogY29uc3RydWN0b3JzLlNvdW5kQ3JlYXRvciwgbWFpbkdhbWVPYmplY3Q6IG1haW5HYW1lT2JqZWN0LCBzb3VuZFByb3BzOiBzb3VuZFByb3BzIH0pO1xyXG4gICAgICAgICAgICBidWxsZXQuaW1nLnNyYyA9IGJ1bGxldC50ZXh0dXJlO1xyXG4gICAgICAgICAgICBidWxsZXQuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5jb25jYXQoYnVsbGV0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZ3Vuc18xID0gZ3VuczsgX2kgPCBndW5zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ3Vuc18xW19pXTtcclxuICAgICAgICAgICAgX2xvb3BfMShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNoaXBDb250cm9sID0gc2hpcENvbnRyb2w7XHJcbmZ1bmN0aW9uIHNldENvbnRleHQoY29udGV4dCkge1xyXG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xyXG59XHJcbmV4cG9ydHMuc2V0Q29udGV4dCA9IHNldENvbnRleHQ7XHJcbmZ1bmN0aW9uIHBsYWNlU2hpcCgpIHtcclxuICAgIHZhciB4QWRqID0gKHRoaXMueEZpbmFsIC0gdGhpcy54KSAvIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgIHZhciB5QWRqID0gKHRoaXMueUZpbmFsIC0gdGhpcy55KSAvIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgIHhBZGogPSAoTWF0aC5zaWduKHhBZGopID4gMCkgPyB4QWRqIDogeEFkaiAqIC0xO1xyXG4gICAgeUFkaiA9IChNYXRoLnNpZ24oeUFkaikgPiAwKSA/IHlBZGogOiB5QWRqICogLTE7XHJcbiAgICB4QWRqID0gKHhBZGogPiB0aGlzLmRhdGEubWluU3BlZWQpID8gdGhpcy5kYXRhLm1pblNwZWVkIDogeEFkajtcclxuICAgIHlBZGogPSAoeUFkaiA+IHRoaXMuZGF0YS5taW5TcGVlZCkgPyB0aGlzLmRhdGEubWluU3BlZWQgOiB5QWRqO1xyXG4gICAgdGhpcy54QWRqID0gKHRoaXMueCA+IHRoaXMueEZpbmFsKSA/IDAgOiB4QWRqO1xyXG4gICAgdGhpcy54ID0gKHRoaXMueCA+IHRoaXMueEZpbmFsKSA/IHRoaXMueCAtIHhBZGogOlxyXG4gICAgICAgICh0aGlzLnggPCB0aGlzLnhGaW5hbCkgPyB0aGlzLnggKyB4QWRqIDogdGhpcy54RmluYWw7XHJcbiAgICB0aGlzLnkgPSAodGhpcy55ID4gdGhpcy55RmluYWwpID8gdGhpcy55IC0geUFkaiA6XHJcbiAgICAgICAgKHRoaXMueSA8IHRoaXMueUZpbmFsKSA/IHRoaXMueSArIHlBZGogOiB0aGlzLnlGaW5hbDtcclxufVxyXG5leHBvcnRzLnBsYWNlU2hpcCA9IHBsYWNlU2hpcDtcclxuZnVuY3Rpb24gbW92ZVNoaXAoX2EpIHtcclxuICAgIHZhciBfYiA9IF9hLnhQb3MsIHhQb3MgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IF9hLnlQb3MsIHlQb3MgPSBfYyA9PT0gdm9pZCAwID8gMCA6IF9jO1xyXG4gICAgdGhpcy54ICs9IHhQb3M7XHJcbiAgICB0aGlzLnkgKz0geVBvcztcclxufVxyXG5leHBvcnRzLm1vdmVTaGlwID0gbW92ZVNoaXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBjcmVhdGVTb3VuZChTb3VuZENyZWF0b3IpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZURhdGEsIHBhZ2VTZXR0aW5ncywgc291bmRQcm9wcywgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEgPSB0aGlzLnNob3dHYW1lSW5mbygpLmdhbWVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTZXR0aW5ncyA9IGdhbWVEYXRhLmdhbWVTZXRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2FtZURhdGEucHJlbG9hZERhdGEuc3RhcnRTb3VuZF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmRQcm9wcyA9IChfYS5zb3VuZFVybCA9IF9iLnNlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc291bmRMb29wID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Eudm9sdW1lID0gcGFnZVNldHRpbmdzLnNvdW5kTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5NQUlOX0dBTUVfU09VTkQgPSBwYWdlU2V0dGluZ3Muc291bmRMZXZlbC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlbG9hZCBzb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbFNvdW5kcyA9IGluaXRTb3VuZE9iamVjdCh7IFNvdW5kQ3JlYXRvcjogU291bmRDcmVhdG9yLCBtYWluR2FtZU9iamVjdDogdGhpcywgc291bmRQcm9wczogc291bmRQcm9wcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2FtZURhdGEubGV2ZWxTb3VuZHNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVNvdW5kID0gY3JlYXRlU291bmQ7XHJcbmZ1bmN0aW9uIGluaXRTb3VuZE9iamVjdChfYSkge1xyXG4gICAgdmFyIFNvdW5kQ3JlYXRvciA9IF9hLlNvdW5kQ3JlYXRvciwgbWFpbkdhbWVPYmplY3QgPSBfYS5tYWluR2FtZU9iamVjdCwgc291bmRQcm9wcyA9IF9hLnNvdW5kUHJvcHM7XHJcbiAgICB2YXIgZ2FtZURhdGEgPSBtYWluR2FtZU9iamVjdC5zaG93R2FtZUluZm8oKS5nYW1lRGF0YTtcclxuICAgIHZhciBwYWdlU2V0dGluZ3MgPSBnYW1lRGF0YS5nYW1lU2V0aW5ncztcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHNvdW5kVXJsOiBzb3VuZFByb3BzLnNvdW5kVXJsLFxyXG4gICAgICAgIHNvdW5kTG9vcDogc291bmRQcm9wcy5zb3VuZExvb3AsXHJcbiAgICAgICAgc291bmRPbjogcGFnZVNldHRpbmdzLnNvdW5kT24sXHJcbiAgICAgICAgdm9sdW1lOiBzb3VuZFByb3BzLnZvbHVtZVxyXG4gICAgfTtcclxuICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZENyZWF0b3IoZGF0YSk7XHJcbiAgICBzb3VuZC5pbml0U291bmQoeyBsZXZlbFNvdW5kOiBzb3VuZFByb3BzLnNvdW5kVXJsLCB2b2x1bWU6IGRhdGEudm9sdW1lIH0pO1xyXG4gICAgcmV0dXJuIHNvdW5kO1xyXG59XHJcbmV4cG9ydHMuaW5pdFNvdW5kT2JqZWN0ID0gaW5pdFNvdW5kT2JqZWN0O1xyXG5mdW5jdGlvbiBjaGFuZ2VWb2x1bWUoX2EpIHtcclxuICAgIHZhciB2b2x1bWUgPSBfYS52b2x1bWU7XHJcbiAgICB0aGlzLnZvbHVtZSA9ICh2b2x1bWUpID8gdm9sdW1lIDogcHJvY2Vzcy5lbnYuTUFJTl9HQU1FX1NPVU5EX0VGRkVDVFM7XHJcbiAgICB0aGlzLnNvdW5kT2JqZWN0LnZvbHVtZSA9IChwcm9jZXNzLmVudi5NQUlOX0dBTUVfU09VTkRfT04gPT09ICd0cnVlJykgPyB0aGlzLnZvbHVtZSAvIDEwMDAgOiAwO1xyXG59XHJcbmV4cG9ydHMuY2hhbmdlVm9sdW1lID0gY2hhbmdlVm9sdW1lO1xyXG5mdW5jdGlvbiBjaGFuZ2VUcmFjayhfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybDtcclxuICAgIHRoaXMuc291bmRPYmplY3Quc3JjID0gX19kaXJuYW1lICsgdXJsO1xyXG4gICAgLy9jb25zb2xlLmxvZyhfX2Rpcm5hbWUgKyB1cmwsIF9fZGlybmFtZSlcclxufVxyXG5leHBvcnRzLmNoYW5nZVRyYWNrID0gY2hhbmdlVHJhY2s7XHJcbmZ1bmN0aW9uIHNvdW5kUGxheSgpIHtcclxuICAgIHRoaXMuc291bmRPYmplY3QucGxheSgpO1xyXG59XHJcbmV4cG9ydHMuc291bmRQbGF5ID0gc291bmRQbGF5O1xyXG5mdW5jdGlvbiBzb3VuZFBhdXNlKCkge1xyXG4gICAgdGhpcy5zb3VuZE9iamVjdC5wYXVzZSgpO1xyXG59XHJcbmV4cG9ydHMuc291bmRQYXVzZSA9IHNvdW5kUGF1c2U7XHJcbmZ1bmN0aW9uIG1ha2VMb29wKCkge1xyXG4gICAgdGhpcy5zb3VuZE9iamVjdC5sb29wID0gdGhpcy5zb3VuZExvb3A7XHJcbn1cclxuZXhwb3J0cy5tYWtlTG9vcCA9IG1ha2VMb29wO1xyXG5mdW5jdGlvbiB0dXJuU291bmRPZmYoX2EpIHtcclxuICAgIHZhciB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgdGhpcy5zb3VuZE9uID0gdmFsdWU7XHJcbiAgICB0aGlzLmNoYW5nZVZvbHVtZSh7IHZvbHVtZTogdGhpcy52b2x1bWUgfSk7XHJcbn1cclxuZXhwb3J0cy50dXJuU291bmRPZmYgPSB0dXJuU291bmRPZmY7XHJcbmZ1bmN0aW9uIGluaXRTb3VuZChfYSkge1xyXG4gICAgdmFyIGxldmVsU291bmQgPSBfYS5sZXZlbFNvdW5kLCB2b2x1bWUgPSBfYS52b2x1bWU7XHJcbiAgICB0aGlzLmNoYW5nZVZvbHVtZSh7IHZvbHVtZTogdm9sdW1lIH0pO1xyXG4gICAgdGhpcy5jaGFuZ2VUcmFjayh7IHVybDogbGV2ZWxTb3VuZCB9KTtcclxuICAgIHRoaXMuc291bmRQbGF5KCk7XHJcbiAgICB0aGlzLm1ha2VMb29wKCk7XHJcbn1cclxuZXhwb3J0cy5pbml0U291bmQgPSBpbml0U291bmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuLi9zYXNzL21haW4uc2Fzc1wiKTtcclxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbnZhciBnYW1lRGF0YU1vZHVsZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZW5naW5lL2dhbWVNb2R1bGVzXCIpKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnNcIikpO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbihmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qICAgZ2FtZSBlbmdpbiBydW5pbmcgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdhbWVJbnRlcnZhbCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pLCBfYSwgYnVsbGV0LCBfYiwgX2MsIGVuZW15LCBfZCwgX2UsIG9iamVjdCwgX2YsIF9nLCBiYWNrZ3JvdW5kTWFwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQgJiYgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNsZWFyRmllbGQoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5sZXZlbEluaXQoY29uc3RydWN0b3JzLkdhbWVCYWNrZ3JvdW5kLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSAmJiBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc3Bhd25FbmVteUxvZ2ljKGNvbnN0cnVjdG9ycy5FbmVteU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaW5pdEdyYXBwbGVPYmplY3QoY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QsIHBsYXllclNoaXBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldCA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0Lm1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5kZWxldGVCdWxsZXQoYnVsbGV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24oYnVsbGV0LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcywgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW2J1bGxldF0sIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24oYnVsbGV0LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMsIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmVuZW15QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9iID0gMCwgX2MgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkgPSBfY1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZUVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwbGF5ZXJTaGlwRGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcGxheWVyU2hpcERhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnNob3QoY29uc3RydWN0b3JzLkJ1bGxldENvbnN0cnVjdCwgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLlNvdW5kQ3JlYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZGVsZXRlT2JqZWN0cyhlbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaGl0RGV0ZWN0aW9uKHBsYXllclNoaXBEYXRhLCBbZW5lbXldLCBnYW1lT2JqZWN0LCBjb25zdHJ1Y3RvcnMuR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLnBsYWNlU2hpcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5lbmVteUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfZCA9IDAsIF9lID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBfZVtfZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5wbGFjZUVuZW15ZXMoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJleHBsb3Npb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZpcmVBbmltYXRpb25FbmRlZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJncmFwcGxlT2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW29iamVjdF0sIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5lbmVteUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5tYXBPYmplY3RNb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZGVsYXRlU2lkZU9iamVjdChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbE9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0Lm1hcFJhbm9tT2JqZWN0U3Bhd24oZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxPYmplY3RzLCBjb25zdHJ1Y3RvcnMuU2lkZU9iamVjdCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVNlY29uZHNJbmNyZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5sZXZlbFRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UgfHwgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9mID0gMCwgX2cgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0czsgX2YgPCBfZy5sZW5ndGg7IF9mKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTWFwID0gX2dbX2ZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRNYXAudXBkYXRlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZE1hcC5jaGFuZ2VQYXJ0T2ZUZXh0dXJlKGdhbWVPYmplY3QsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2FtZU9iamVjdC5sZXZlbENoYW5nZVdpbmRvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC53YXJwRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEubGV2ZWxXaW5kb3dEZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QubGV2ZWxDaGFuZ2VXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLy8gICBnYW1lIFVJIGxvYWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93U3RhcnRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93R2FtZVN0YXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dQYXVzZVdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dNZW51V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd1BhdXNlV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVPdmVyV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lV2luICYmICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSAmJiAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVdpbldpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhcHBNZW51XzEuaGlkZVNob3dNZW51KG1haW5NZW51LCBuYXZpZ2F0aW9uLm1lbnUsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVXaW4sIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3cmFwcGVyLCBtYWluTWVudSwgZ2FtZVN0YXRlLCBuYXZpZ2F0aW9uXzEsIGdhbWVPYmplY3QsIHBsYXllclNoaXBEYXRhLCBuYXZpZ2F0aW9uLCBlbmdpbmUsIGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk1BSU5fR0FNRV9TT1VORCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk1BSU5fR0FNRV9TT1VORF9FRkZFQ1RTID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTUFJTl9HQU1FX1NPVU5EX09OID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuR0FNRV9TVEFUVVMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LkhPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5IT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInByb2R1Y3Rpb24gbW9kZSBjaGVjayBIT1NUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1tZW51XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdhbWVEYXRhTW9kdWxlcy5nYW1lRGF0YUluaXQoY29uc3RydWN0b3JzLlBsYXllclNoaXAsIG51bGwpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbl8xID0gYXBwTWVudV8xLmFwcE1lbnUoZ2FtZU9iamVjdCwgYXBwTWVudV8xLmRpYWxvZ1dpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25fMS5tZW51LmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gZGF0YSBpbjogZ2FtZVN0YXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZXcgY29uc3RydWN0b3JzLkdhbWUoZ2FtZVN0YXRlLmRhdGEpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEucGxheWVyT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24gPSBhcHBNZW51XzEuYXBwTWVudShnYW1lT2JqZWN0LCBhcHBNZW51XzEuZGlhbG9nV2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVNldHRpbmdzTWVudUluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmNyZWF0ZVNvdW5kKGNvbnN0cnVjdG9ycy5Tb3VuZENyZWF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSA9IHNldEludGVydmFsKGdhbWVJbnRlcnZhbCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuaW50ZXJ2YWxDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC51aUNvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNldEdhbWVGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0cyA9IGdhbWVPYmplY3QucmV0dXJuQ29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBjcmVhdGUgY29udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLmN0eCA9IGNvbnRleHRzLmdhbWVBY3Rpb25GaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzaGlwIG1vdmVcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5pbml0UGxheWVyU2hpcChnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5zaGlwQ29udHJvbChnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxuZnVuY3Rpb24gZ2V0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIjUwMCBObyBzZXJ2ZXIgY29ubmVjdGlvbiFcIiwgc3RhdHVzOiBcImVycm9yXCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldERhdGEgPSBnZXREYXRhO1xyXG5mdW5jdGlvbiBnZXRMb2NhbERhdGEoX2EpIHtcclxuICAgIHZhciBmaWxlTmFtZSA9IF9hLmZpbGVOYW1lO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXM7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJubyBsb2NhbCBmaWxlc1wiKTtcclxuICAgICAgICAgICAgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZnMucmVhZEZpbGUoX19kaXJuYW1lICsgJy9wdWJsaWMvZGF0YS8nICsgZmlsZU5hbWUsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcImdvdCBzb21lIHByb2JsZW0gaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldExvY2FsRGF0YSA9IGdldExvY2FsRGF0YTtcclxuZnVuY3Rpb24gd3JpdGVMb2NhbERhdGEoX2EpIHtcclxuICAgIHZhciBmaWxlTmFtZSA9IF9hLmZpbGVOYW1lLCBkYXRhID0gX2EuZGF0YTtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZU5hbWUpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIm5vIGxvY2FsIGZpbGVzXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygxLCBfX2Rpcm5hbWUsIGZzLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZShfX2Rpcm5hbWUgKyAnL3B1YmxpYy9kYXRhLycgKyBmaWxlTmFtZSwgZGF0YSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLndyaXRlTG9jYWxEYXRhID0gd3JpdGVMb2NhbERhdGE7XHJcbmZ1bmN0aW9uIHBvc3REYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXHJcbiAgICAgICAgaGVhZGVyczogcmVzdWx0SGVhZGVyLFxyXG4gICAgICAgIGJvZHk6IChkYXRhKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KTtcclxufVxyXG5leHBvcnRzLnBvc3REYXRhID0gcG9zdERhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbmZ1bmN0aW9uIGdhbWVPdmVyU2NyZWVuKGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUGF1c2UgdGV4dFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkdhbWUgT3ZlclwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjExMHB4IEFyaWFsXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgLSA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVPdmVyU2NyZWVuID0gZ2FtZU92ZXJTY3JlZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbmZ1bmN0aW9uIGdhbWVQYXVzZShkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBhdXNlIHRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJQYXVzZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJwYXJ0IG9mIHBhdXNlIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCI2MHB4IEFyaWFsXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMTUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiArIDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVBhdXNlID0gZ2FtZVBhdXNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyAgcG9pbnRzICAgbGlmZSwgdGltZSB0byBlbmRzLCBsZXZlbFxyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lSW5mb3JtYXRpb25TY3JlZW4oZXh0cmEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24sIGluZm8pIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImxpZmVQb2ludFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBudW1iZXI6IGluZm8ubGlmZSxcclxuICAgICAgICAgICAgc3RlcDogW2luZm8ubGlmZV0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICogNTA7IH0pLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIGxvZ290eXBlXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzAsXHJcbiAgICAgICAgICAgICAgICBzV2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNIZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHg6IDEwLFxyXG4gICAgICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRQaWN0dXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMuYmFja2dyb3VuZC5zcmMgPSBwaWN0dXJlRGlycmVjdGlvbiArICdtaXNjL3J1YnkucG5nJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNhbGxiYWNrLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gKGRhdGEpID8gZGF0YSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBBcnJheShpbmZvLmxpZmUpLmZpbGwoMCkubWFwKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiBpICogMzA7IH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSAzMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHllcy54ID0gKGkgPT0gMCkgPyBtYXJnaW5MZWZ0IDogMCArIHN0ZXBzW2ldICsgKChpICE9IDApID8gbWFyZ2luTGVmdCA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcImxldmVsXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiIFwiICsgKChpbmZvLmN1cnJlbnRMZXZlbCA8PSBpbmZvLmFsbExldmVscykgPyAnQ3VycmVudCBMZXZlbCAnICsgaW5mby5jdXJyZW50TGV2ZWwgKyAnLycgKyBpbmZvLmFsbExldmVscyA6ICdmaW5pc2ggZ2FtZScpICsgXCIgXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiYm9sZCAxNnB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogMzAsXHJcbiAgICAgICAgICAgICAgICB5OiA3MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJUaW1lIHRvIGVuZCBmIGxldmVsXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IChpbmZvLm1pbnV0ZXMgfHwgaW5mby5zZWNvbmRzKSA/IFwiVGltZSB0byBsZXZlbCBlbmQgXCIgKyAoKGluZm8ubWludXRlcyAtIDEwID49IDApID8gJycgOiAwKSArIGluZm8ubWludXRlcyArIFwiOlwiICsgKChpbmZvLnNlY29uZHMgLSAxMCA+PSAwKSA/ICcnIDogMCkgKyBpbmZvLnNlY29uZHMgOiAnQm9zcyBsZXZlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHQgMTZweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAtIDMwMCxcclxuICAgICAgICAgICAgICAgIHk6IDMwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgcG9pbnRzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwic2NvcmU6IFwiICsgaW5mby5wb2ludHMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHQgMThweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLTUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY29pbnNcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgbnVtYmVyOiBpbmZvLnNvdXJzZS5nYW1lQ29pbnMsXHJcbiAgICAgICAgICAgIHN0ZXA6IFtpbmZvLmxpZmVdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAqIDUwOyB9KSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBsb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBzV2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNIZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDUwLFxyXG4gICAgICAgICAgICAgICAgeTogMjUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRQaWN0dXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMuYmFja2dyb3VuZC5zcmMgPSBwaWN0dXJlRGlycmVjdGlvbiArICdtaXNjL2dyYXBwbGUtb2JqZWN0cy9jb2luLnBuZyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IChkYXRhKSA/IGRhdGEgOiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvaW50SW5kZXggPSBNYXRoLmZsb29yKHRoaXMubnVtYmVyIC8gNTAwMCksIG51bWJlck9mQ29pbiA9IChjb2ludEluZGV4ID4gMCAmJiBjb2ludEluZGV4IDwgMTApID8gY29pbnRJbmRleCA6IChjb2ludEluZGV4ID49IDEwKSA/IDEwIDogMTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IEFycmF5KG51bWJlck9mQ29pbikuZmlsbCgwKS5tYXAoZnVuY3Rpb24gKG8sIGkpIHsgcmV0dXJuIGkgKiA1OyB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gdGhpcy5wcm9wZXJ0eWVzLng7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQ29pbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLnggPSAoaSA9PSAwKSA/IG1hcmdpbkxlZnQgOiAwICsgc3RlcHNbaV0gKyAoKGkgIT0gMCkgPyBtYXJnaW5MZWZ0IDogMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR2FtZSBjb2luc1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlhcIiArIGluZm8uc291cnNlLmdhbWVDb2lucyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJsaWdodCAxOHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lSW5mb3JtYXRpb25TY3JlZW4gPSBnYW1lSW5mb3JtYXRpb25TY3JlZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbmZ1bmN0aW9uIGdhbWVMb2FkTWVudShkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlN0YXJ0IGJ1dHRvblwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlByZXNzIFN0YXJ0IHRvIGJlZ2luXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1haW4gc3RhcnQgZ2FtZSBidXR0b24gaW4gdGhlIG1haW4gbG9hZCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDE2NSxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMCknLFxyXG4gICAgICAgICAgICAgICAgdGV4dFByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGFydCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTG9nb3R5cGVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBsb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXHJcbiAgICAgICAgICAgICAgICBzV2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICBzSGVpZ2h0OiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gNzUsXHJcbiAgICAgICAgICAgICAgICB5OiA5MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZFBpY3R1cmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHllcy5iYWNrZ3JvdW5kLnNyYyA9IHBpY3R1cmVEaXJyZWN0aW9uICsgJ21pc2MvbG9nby0xMDI0eDEwMjQucG5nJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgbmFtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlNwYWNlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiYm9sZCAxMDBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLTI5MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDM3MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHYW1lIG5hbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJBdHRhY2tcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJsaWdodGVyIDEwMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogMzcwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDg5LCAwLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVMb2FkTWVudSA9IGdhbWVMb2FkTWVudTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG52YXIgY29uc3RydWN0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi8uLi9jb25zdHJ1Y3RvcnNcIikpO1xyXG52YXIgYXBwTWVudV8xID0gcmVxdWlyZShcIi4uLy4uL2FwcE1lbnUvYXBwTWVudVwiKTtcclxuZnVuY3Rpb24gZ2FtZVNldHRpbmdzTWVudShkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibWVudSBiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJhY2sgcGFydCBvZiBtZW51IFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4IEFyaWFsXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgICAgIGdyYWRpZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja0dyb3VuZEZpbmFsOiBcIiMzODAyNDBcIixcclxuICAgICAgICAgICAgICAgIHRvcFg6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3BZOiAwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tWDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3R0b21ZOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzJGMjIzMScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJ1dHRvbiBlbmQgZ2FtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcImdvIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJhY2sgdG8gc3RhcnQgc2NyZWVuXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMTUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiArIDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgICAgICB0b3BQYWRkaW5nOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0UGFkZGluZzogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYXBwTWVudV8xLmRpYWxvZ1dpbmRvdyh7IHRleHREYXRhOiAncmVzdGFydCB0aGUgZ2FtZT8nLCByZWplY3RUZXh0OiAnY2FuY2VsJywgYWNjZXB0VGV4dDogJ3Jlc3RhcnQnIH0sIHRoaXMuYmFja1RvU3RhcnRTY3JlZW4sIG51bGwsIHRoaXMsIGNvbnN0cnVjdG9ycy5QbGF5ZXJTaGlwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk1haW4gZ2FtZSBtZW51IG5hbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRleHQgaW4gbWFpbiB0b3BcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC00NSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDE1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lU2V0dGluZ3NNZW51ID0gZ2FtZVNldHRpbmdzTWVudTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG52YXIgY29uc3RydWN0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi8uLi9jb25zdHJ1Y3RvcnNcIikpO1xyXG52YXIgYXBwTWVudV8xID0gcmVxdWlyZShcIi4uLy4uL2FwcE1lbnUvYXBwTWVudVwiKTtcclxudmFyIGdhbWVSZXN1bHRNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcHBNZW51L2dhbWVSZXN1bHRNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGdhbWVXaW5TY3JlZW4oZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbiwgaW5mbykge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzY3JlZW4gdGl0bGVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJZT1UgV0lOIFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIiBib2xkIDEyMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyIC0gaGVpZ2h0IC8gNCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2NyZWVuIHRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJDb25ncmF0dWxhdGlvbiBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIgYm9sZCAzMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyIC0gNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNjb3JlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiWW91IHNjb3JlIGlzIFwiICsgaW5mby5wb2ludHMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInRleHQgZm9yIGdhbWUgb3ZlciB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiIGJvbGQgMzBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJ1dHRvbiBlbmQgZ2FtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlNhdmUgcmVzdWx0c1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJiYWNrIHRvIHN0YXJ0IHNjcmVlblwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiArIHdpZHRoIC8gMyxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogNyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lUmVzdWx0TW9kdWxlXzEuaW5pdFJlc3VsdFNjcmVlbih0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVVpTWVudSh0aGlzLmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCdXR0b24gZW5kIGdhbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJnbyB0byBzdGFydFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJiYWNrIHRvIHN0YXJ0IHNjcmVlblwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgICAgIHg6IDIwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiArIDE1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgdGV4dFByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyxcclxuICAgICAgICAgICAgICAgICAgICB0b3BQYWRkaW5nOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0UGFkZGluZzogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5kaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ3Jlc3RhcnQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdyZXN0YXJ0JyB9LCB0aGlzLmJhY2tUb1N0YXJ0U2NyZWVuLCBudWxsLCB0aGlzLCBjb25zdHJ1Y3RvcnMuUGxheWVyU2hpcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVVaU1lbnUodGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVdpblNjcmVlbiA9IGdhbWVXaW5TY3JlZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbmZ1bmN0aW9uIGxldmVsQ2hhbmdlU2NyZWVuKGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24sIGluZm8pIHtcclxuICAgIHZhciBsZXZlbERhdGEgPSBpbmZvLnNvdXJzZS5sZXZlbERhdGE7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNjcmVlbiBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiV2FycCB0byB0aGUgbmV4dCBsZXZlbFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDMgLSA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjQpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIndyYXAgaGVhZGVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIiArIGxldmVsRGF0YS5kZXNjcmlwdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyIC0gNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIC40KScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicndhcnAgZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIiArIGxldmVsRGF0YS5kZXNjcmlwdGlvbi5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAuNCknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmxldmVsQ2hhbmdlU2NyZWVuID0gbGV2ZWxDaGFuZ2VTY3JlZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGluaXQoY2FsbGJhY2ssIGRhdGEpIHtcclxuICAgIGRhdGEgPSAoZGF0YSkgPyBkYXRhIDogdGhpcztcclxuICAgIGNhbGxiYWNrKGRhdGEpO1xyXG59XHJcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XHJcbmZ1bmN0aW9uIGdldFVJT2JqZWN0UG9zaXRpb24oKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IGNvbnRleHQucHJvcGVydHllcy54LFxyXG4gICAgICAgIHk6IGNvbnRleHQucHJvcGVydHllcy55LFxyXG4gICAgICAgIHdpZHRoOiBjb250ZXh0LnByb3BlcnR5ZXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBjb250ZXh0LnByb3BlcnR5ZXMuaGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmdldFVJT2JqZWN0UG9zaXRpb24gPSBnZXRVSU9iamVjdFBvc2l0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxudmFyIGdhbWVVaUxvYWRNZW51XzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVVpTG9hZE1lbnVcIik7XHJcbnZhciBnYW1lVWlTZXR0aW5nc01lbnVfMSA9IHJlcXVpcmUoXCIuL2dhbWVVaU1vZGVscy9nYW1lVWlTZXR0aW5nc01lbnVcIik7XHJcbnZhciBnYW1lUGF1c2VTY3JlZW5fMSA9IHJlcXVpcmUoXCIuL2dhbWVVaU1vZGVscy9nYW1lUGF1c2VTY3JlZW5cIik7XHJcbnZhciBnYW1lU3RhdHNTY3JlZW5fMSA9IHJlcXVpcmUoXCIuL2dhbWVVaU1vZGVscy9nYW1lU3RhdHNTY3JlZW5cIik7XHJcbnZhciBnYW1lR2FtZU92ZXJTY3JlZW5fMSA9IHJlcXVpcmUoXCIuL2dhbWVVaU1vZGVscy9nYW1lR2FtZU92ZXJTY3JlZW5cIik7XHJcbnZhciBnYW1lV2luU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVdpblNjcmVlblwiKTtcclxudmFyIHVpRWxlbWVudE1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2VsZW1lbnRzL3VpRWxlbWVudE1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBsZXZlbENoYW5nZVNjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2xldmVsQ2hhbmdlU2NyZWVuXCIpO1xyXG5mdW5jdGlvbiBnYW1lVWlQYXVzZSgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cylcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpUGF1c2UgPSBnYW1lVWlQYXVzZTtcclxuZnVuY3Rpb24gZ2FtZVVpTWVudShnYW1lVWlQYXVzZSkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2U7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAoZ2FtZVVpUGF1c2UpID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpTWVudSA9IGdhbWVVaU1lbnU7XHJcbmZ1bmN0aW9uIHVpQ29udHJvbGxlcigpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZ2FtZURhdGEgPSB0aGlzLnNob3dHYW1lSW5mbygpO1xyXG4gICAgdmFyIGNvbnRyb2xLZXlzID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZVNldGluZ3Mua2V5Q29udHJvbHM7XHJcbiAgICB2YXIgZ2FtZU9iamVjdCA9IHRoaXM7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5lc2NhcGUuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVVaU1lbnUoX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMucGF1c2Uuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVVaVBhdXNlKCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3RoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIkNBTlZBU1wiKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgeSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzT25TY3JlZW4gPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgY3R4ID0gX3RoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQsIHNjcmVlblNpemUgPSBfdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lVWlMb2FkTWVudV8xLmdhbWVMb2FkTWVudShudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRGV0ZWN0aW9uLmNhbGwoX3RoaXMsIGVsZW1lbnRzT25TY3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lVWlTZXR0aW5nc01lbnVfMS5nYW1lU2V0dGluZ3NNZW51KG51bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tEZXRlY3Rpb24uY2FsbChfdGhpcywgZWxlbWVudHNPblNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmdhbWVJbml0RGF0YS5nYW1lV2luKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c09uU2NyZWVuID0gZ2FtZVdpblNjcmVlbl8xLmdhbWVXaW5TY3JlZW4obnVsbCwgY3R4LCBzY3JlZW5TaXplLndpZHRoLCBzY3JlZW5TaXplLmhlaWdodCwgbnVsbCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0RldGVjdGlvbi5jYWxsKF90aGlzLCBlbGVtZW50c09uU2NyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjbGlja0RldGVjdGlvbihlbGVtZW50c09uU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gaW4gZWxlbWVudHNPblNjcmVlbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IGVuZW1pZXNNb2R1bGVzXzEuaGl0RGV0ZWN0aW9uKGVsZW1lbnRzT25TY3JlZW5baXRlbV0sIFtdLmNvbmNhdCh7IHg6IHgsIHk6IHksIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbmFtZTogXCJjdXJzb3JcIiB9KSwgdGhpcywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIGVsZW1lbnRzT25TY3JlZW5baXRlbV0uYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbltpdGVtXS5hY3Rpb24uY2FsbCh0aGlzLCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMudWlDb250cm9sbGVyID0gdWlDb250cm9sbGVyO1xyXG5mdW5jdGlvbiBzaG93VWlQb3B1cFdpbmRvdygpIHtcclxuICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlV2luZG93LmNhbGwodGhpcyk7XHJcbn1cclxuZXhwb3J0cy5zaG93VWlQb3B1cFdpbmRvdyA9IHNob3dVaVBvcHVwV2luZG93O1xyXG5mdW5jdGlvbiBzaG93U3RhcnRXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbixcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lVWlMb2FkTWVudV8xLmdhbWVMb2FkTWVudSk7XHJcbn1cclxuZXhwb3J0cy5zaG93U3RhcnRXaW5kb3cgPSBzaG93U3RhcnRXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dNZW51V2luZG93KCkge1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlU2hhcGVSb3VuZEJvcmRlcixcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lVWlTZXR0aW5nc01lbnVfMS5nYW1lU2V0dGluZ3NNZW51KTtcclxufVxyXG5leHBvcnRzLnNob3dNZW51V2luZG93ID0gc2hvd01lbnVXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dQYXVzZVdpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0XHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVBhdXNlU2NyZWVuXzEuZ2FtZVBhdXNlKTtcclxufVxyXG5leHBvcnRzLnNob3dQYXVzZVdpbmRvdyA9IHNob3dQYXVzZVdpbmRvdztcclxuZnVuY3Rpb24gc2hvd0dhbWVTdGF0cygpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpSW1hZ2UsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpSW1hZ2UsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVTdGF0c1NjcmVlbl8xLmdhbWVJbmZvcm1hdGlvblNjcmVlbiwgZGF0YSk7XHJcbn1cclxuZXhwb3J0cy5zaG93R2FtZVN0YXRzID0gc2hvd0dhbWVTdGF0cztcclxuZnVuY3Rpb24gbGV2ZWxDaGFuZ2VXaW5kb3coKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0XHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgbGV2ZWxDaGFuZ2VTY3JlZW5fMS5sZXZlbENoYW5nZVNjcmVlbiwgZGF0YSk7XHJcbn1cclxuZXhwb3J0cy5sZXZlbENoYW5nZVdpbmRvdyA9IGxldmVsQ2hhbmdlV2luZG93O1xyXG5mdW5jdGlvbiBnYW1lT3ZlcldpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVHYW1lT3ZlclNjcmVlbl8xLmdhbWVPdmVyU2NyZWVuKTtcclxufVxyXG5leHBvcnRzLmdhbWVPdmVyV2luZG93ID0gZ2FtZU92ZXJXaW5kb3c7XHJcbmZ1bmN0aW9uIGdhbWVXaW5XaW5kb3coKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbixcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVdpblNjcmVlbl8xLmdhbWVXaW5TY3JlZW4sIGRhdGEpO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVdpbldpbmRvdyA9IGdhbWVXaW5XaW5kb3c7XHJcbmZ1bmN0aW9uIGluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQsIHNjcmVlblNpemUgPSB0aGlzLmdldFNjcmVlblNpemUoKSwgcGljRGlyZWN0aW9uID0gdGhpcy5zaG93R2FtZUluZm8oKS5pbWFnZURpcnJlY3Rpb247XHJcbiAgICB2YXIgc2NyZWVuT2JqZWN0cyA9IGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW251bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQsIHBpY0RpcmVjdGlvbl0sIHByb3BzKSk7XHJcbiAgICBmb3IgKHZhciBpdGVtSW5kZXggPSAwOyBpdGVtSW5kZXggPCBzY3JlZW5PYmplY3RzLmxlbmd0aDsgaXRlbUluZGV4KyspIHtcclxuICAgICAgICBpZiAoc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmhhc093blByb3BlcnR5KCdsb2FkUGljdHVyZScpKVxyXG4gICAgICAgICAgICBzY3JlZW5PYmplY3RzW2l0ZW1JbmRleF0ubG9hZFBpY3R1cmUoKTtcclxuICAgICAgICBzY3JlZW5PYmplY3RzW2l0ZW1JbmRleF0uaW5pdChkcmF3TWV0aG9kc1tpdGVtSW5kZXhdKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRVaUVsZW1lbnRzID0gaW5pdFVpRWxlbWVudHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG5mdW5jdGlvbiBsb2FkV2luZG93KF9hKSB7XHJcbiAgICB2YXIgbG9hZFN0YXR1cyA9IF9hLmxvYWRTdGF0dXM7XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkLXNjcmVlbicpO1xyXG4gICAgd2luZG93RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc3dpdGNoIChsb2FkU3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImxvYWRcIjpcclxuICAgICAgICAgICAgYXBwTWVudV8xLnNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkLWNpcmNsZS1pbWFnZSBsb2FkLWNpcmNlLXdyYXBwZXJcXFwiPjwvZGl2PjxwPkxvYWRpbmcuLi48L3A+XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzZXJ2ZXJFcnJvclwiOlxyXG4gICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiPHA+RmFpbCB0byBsb2FkIGRhdGE8L3A+PGJ1dHRvbiBpZD1cXFwicmVsb2FkLXBhZ2VcXFwiIGNsYXNzPVxcXCJidG4tb3JhbmdlIGJ0bi1tYWluXFxcIj5SZWxvYWQ8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgcmVsb2FkUGFnZShcIiNyZWxvYWQtcGFnZVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgYXBwTWVudV8xLmhpZGUod2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVsb2FkUGFnZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciByZWxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICByZWxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sb2FkV2luZG93ID0gbG9hZFdpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlc1wiKTtcclxuZXhwb3J0cy5jcmVhdGVXaW5kb3cgPSBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEuY3JlYXRlV2luZG93O1xyXG5leHBvcnRzLmNyZWF0ZVNoYXBlUm91bmRCb3JkZXIgPSBkaXNwbGF5VWlXaW5kb3dNb2R1bGVzXzEuY3JlYXRlU2hhcGVSb3VuZEJvcmRlcjtcclxuZXhwb3J0cy5jcmVhdGVSb3VuZEJ1dHRvbiA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbjtcclxudmFyIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEgPSByZXF1aXJlKFwiLi93ZWFwb25zL3dlYXBvbnNEaXNwbGF5TW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBkcmF3KGNvbnRleHQsIGVsZW1lbnQpIHtcclxuICAgIHZhciBwcm9wZXJ0eSA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwcm9wZXJ0eVtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGNvbnRleHRbZWxlbWVudF0uYXBwbHkoY29udGV4dCwgcHJvcGVydHkpO1xyXG59XHJcbmV4cG9ydHMuZHJhdyA9IGRyYXc7XHJcbmZ1bmN0aW9uIGNyZWF0ZUxhc2VyQnVsbGV0KGRhdGEpIHtcclxuICAgIGlmICghZGF0YS5jdHgpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIm5vIGNvbnRleHRcIik7XHJcbiAgICBpZiAoZGF0YS5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGRhdGEudHlwZSA9PSBcImJsYXN0ZXJcIilcclxuICAgICAgICB3ZWFwb25zRGlzcGxheU1vZHVsZV8xLndlYXBvbjEoZGF0YSwgZHJhdyk7XHJcbiAgICBpZiAoZGF0YS5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgZGF0YS50eXBlID09IFwiYmxhc3RlclwiKVxyXG4gICAgICAgIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEud2VhcG9uMShkYXRhLCBkcmF3KTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBkYXRhLnR5cGUgPT0gXCJiZWFtXCIpXHJcbiAgICAgICAgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMS53ZWFwb24xKGRhdGEsIGRyYXcpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlTGFzZXJCdWxsZXQgPSBjcmVhdGVMYXNlckJ1bGxldDtcclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY3R4LCBwaWN0dXJlTmFtZSkge1xyXG4gICAgdmFyIHByb3BzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgZHJhdy5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFtjdHgsICdkcmF3SW1hZ2UnLCBwaWN0dXJlTmFtZV0sIHByb3BzKSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xyXG5mdW5jdGlvbiBjbGVhckZpZWxkKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgZHJhdyhjdHgsICdjbGVhclJlY3QnLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLmNsZWFyRmllbGQgPSBjbGVhckZpZWxkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiB1aUltYWdlKHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguZHJhd0ltYWdlKHByb3BlcnR5ZXMuYmFja2dyb3VuZCwgMCwgMCwgcHJvcGVydHllcy5zV2lkdGgsIHByb3BlcnR5ZXMuc0hlaWdodCwgcHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLnVpSW1hZ2UgPSB1aUltYWdlO1xyXG5mdW5jdGlvbiB1aVRleHQoc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC5zYXZlKCk7XHJcbiAgICB2YXIgdGV4dFdpZHRoID0gcHJvcGVydHllcy5jdHgubWVhc3VyZVRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQpLndpZHRoIC8gMy4yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5mb250ID0gc2hhcGVQcm9wZXJ0eWVzLmZvbnRTaXplO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcHJvcGVydHllcy5ib3JkZXJDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnNhdmUoKTtcclxuICAgIC8vcHJvcGVydHllcy5jdHgudHJhbnNsYXRlKDAsMCk7XHJcbiAgICAvLyBwcm9wZXJ0eWVzLmN0eC5yZXN0b3JlKCk7XHJcbn1cclxuZXhwb3J0cy51aVRleHQgPSB1aVRleHQ7XHJcbmZ1bmN0aW9uIHVpUmVwZWF0SW1hZ2Uoc2hhcGVQcm9wZXJ0eWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHllcyA9IHNoYXBlUHJvcGVydHllcy5wcm9wZXJ0eWVzO1xyXG4gICAgdmFyIHBhdCA9IHByb3BlcnR5ZXMuY3R4LmNyZWF0ZVBhdHRlcm4ocHJvcGVydHllcy5iYWNrZ3JvdW5kLCAncmVwZWF0LXgnKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC5yZWN0KHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5yZWN0KHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwYXQ7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsKCk7XHJcbn1cclxuZXhwb3J0cy51aVJlcGVhdEltYWdlID0gdWlSZXBlYXRJbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gd2VhcG9uMShkYXRhLCBkcmF3KSB7XHJcbiAgICBkcmF3KGRhdGEuY3R4LCAnZHJhd0ltYWdlJywgZGF0YS5pbWcsIGRhdGEuc3gsIGRhdGEuc3ksIGRhdGEuc1dpZHRoLCBkYXRhLnNIZWlnaHQsIGRhdGEueCwgZGF0YS55LCBkYXRhLndpZHRoICsgMTAsIGRhdGEuaGVpZ2h0ICsgMTApO1xyXG59XHJcbmV4cG9ydHMud2VhcG9uMSA9IHdlYXBvbjE7XHJcbmZ1bmN0aW9uIHdlYXBvbjFiYWNrd2FyZChkYXRhLCBkcmF3KSB7XHJcbiAgICBkcmF3KGRhdGEuY3R4LCAnZHJhd0ltYWdlJywgZGF0YS5pbWcsIGRhdGEuc3gsIGRhdGEuc3ksIGRhdGEud2lkdGgsIGRhdGEuaGVpZ2h0LCBkYXRhLngsIGRhdGEueSwgZGF0YS53aWR0aCArIDEwLCBkYXRhLmhlaWdodCArIDEwKTtcclxufVxyXG5leHBvcnRzLndlYXBvbjFiYWNrd2FyZCA9IHdlYXBvbjFiYWNrd2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gY3JlYXRlV2luZG93KGN0eCwgcHJvcGVydHllcykge1xyXG4gICAgdmFyIF9hID0gdGhpcy5nZXRTY3JlZW5TaXplKCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIGN0eC5maWxsUmVjdChwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlV2luZG93ID0gY3JlYXRlV2luZG93O1xyXG5mdW5jdGlvbiBjcmVhdGVTaGFwZVJvdW5kQm9yZGVyKHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMuYmFja2dyb3VuZDtcclxuICAgIGlmIChwcm9wZXJ0eWVzLmdyYWRpZW50KSB7XHJcbiAgICAgICAgdmFyIGdyYWRpZW50ID0gcHJvcGVydHllcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQocHJvcGVydHllcy50b3BYLCBwcm9wZXJ0eWVzLnRvcFksIHByb3BlcnR5ZXMuYm90dG9tWCwgcHJvcGVydHllcy5ib3R0b21ZKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgcHJvcGVydHllcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgcHJvcGVydHllcy5iYWNrR3JvdW5kRmluYWwpO1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgfVxyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4Lm1vdmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCwgcHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpOyAvKiovXHJcbiAgICBpZiAocHJvcGVydHllcy5pc0JvcmRlcikge1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LnN0cm9rZVN0eWxlID0gcHJvcGVydHllcy5ib3JkZXJDb2xvcjtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICAgIHByb3BlcnR5ZXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbCgpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlU2hhcGVSb3VuZEJvcmRlciA9IGNyZWF0ZVNoYXBlUm91bmRCb3JkZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdW5kQnV0dG9uKHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIHZhciB0ZXh0V2lkdGggPSBwcm9wZXJ0eWVzLmN0eC5tZWFzdXJlVGV4dChzaGFwZVByb3BlcnR5ZXMudGV4dCkud2lkdGggLyAzLjI7XHJcbiAgICB2YXIgYnV0dG9uV2lkdGggPSBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5sZWZ0UGFkZGluZyArIHRleHRXaWR0aCArIHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LnJpZ2h0UGFkZGluZztcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcHJvcGVydHllcy5iYWNrZ3JvdW5kO1xyXG4gICAgcHJvcGVydHllcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5tb3ZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGggLSBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGgsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLSBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCwgcHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGggLSBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLSBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTsgLyoqL1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC5maWxsUmVjdChwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsKCk7XHJcbiAgICBpZiAocHJvcGVydHllcy5pc0JvcmRlcikge1xyXG4gICAgICAgIHByb3BlcnR5ZXMuY3R4LnN0cm9rZVN0eWxlID0gcHJvcGVydHllcy5ib3JkZXJDb2xvcjtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5saW5lV2lkdGggPSBwcm9wZXJ0eWVzLmJvcmRlclJhZGl1cztcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICAgIHByb3BlcnR5ZXMuY3R4LmZvbnQgPSBzaGFwZVByb3BlcnR5ZXMuZm9udFNpemU7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS50ZXh0Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LnNoYWRvd0NvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Qmx1ciA9IDg7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsVGV4dChzaGFwZVByb3BlcnR5ZXMudGV4dCwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy50ZXh0UHJvcGVydHkubGVmdFBhZGRpbmcsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC8gMiArIHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LnRvcFBhZGRpbmcpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlUm91bmRCdXR0b24gPSBjcmVhdGVSb3VuZEJ1dHRvbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdlbGVjdHJvbicpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==