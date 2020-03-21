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
exports.push([module.i, ".btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #ea6c00; }\n\n.btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer;\n    background: #ea6c00; }\n\nbody {\n    font-family: 'Roboto';\n    color: #ffffff;\n    background: #333;\n    margin: 0;\n    padding: 0;\n    -khtml-user-select: none;\n    user-select: none; }\n    body #preloader {\n        visibility: hidden;\n        width: 0px;\n        height: 0px; }\n\n.static-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100vw; }\n    .static-wrapper asside.menu-backgroud {\n        background: #2f2231; }\n    .static-wrapper asside {\n        z-index: 10; }\n        .static-wrapper asside .main-menu {\n            top: 10px; }\n            .static-wrapper asside .main-menu ul {\n                display: block;\n                top: 105px;\n                position: relative;\n                text-transform: uppercase; }\n                .static-wrapper asside .main-menu ul li {\n                    min-width: 160px;\n                    padding: 10px;\n                    list-style: none; }\n                .static-wrapper asside .main-menu ul a {\n                    color: #ffc800;\n                    text-decoration: none;\n                    font-size: 17px; }\n                .static-wrapper asside .main-menu ul a:active {\n                    color: red; }\n\n.content-wrapper {\n    width: 100%;\n    max-height: 100vh;\n    overflow-y: scroll; }\n    .content-wrapper .menu-pages-wrapper {\n        background: #161325;\n        margin-top: -20px;\n        min-height: 100vh;\n        padding: 20px; }\n\n.content-wrapper::-webkit-scrollbar {\n    width: 12px; }\n\n.content-wrapper::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n    border-radius: 10px; }\n\n.content-wrapper::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(71, 6, 83, 0.8);\n    -webkit-box-shadow: inset 0 0 6px black; }\n\n.content-wrapper::-webkit-scrollbar-thumb:window-inactive {\n    background: rgba(255, 0, 0, 0.1); }\n\n.dialog-box {\n    position: absolute;\n    margin: 0 auto;\n    padding: 10px;\n    min-width: 100%;\n    min-height: 100vh;\n    position: fixed;\n    left: 0; }\n    .dialog-box .dialog-wrapper {\n        display: flex;\n        height: 100vh;\n        justify-content: center;\n        align-items: center; }\n        .dialog-box .dialog-wrapper .dialog-window {\n            background: #340054;\n            padding: 20px;\n            min-width: 300px;\n            min-height: 80px;\n            border-radius: 5px; }\n            .dialog-box .dialog-wrapper .dialog-window div {\n                padding: 10px; }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n\n#wrapper section {\n    z-index: 5;\n    top: 0; }\n\n.gameBackground {\n    background: #000; }\n\n.game-fields {\n    position: absolute; }\n\n.game-field-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    align-items: center; }\n\n.hide-menu {\n    display: none; }\n\nul.show-result-area {\n    list-style: none; }\n    ul.show-result-area li {\n        padding: 10px; }\n        ul.show-result-area li .rate-number {\n            color: red; }\n        ul.show-result-area li .item-name {\n            color: orange; }\n        ul.show-result-area li .item-points {\n            color: green; }\n        ul.show-result-area li .item-date {\n            font-size: 10px;\n            color: grey; }\n        ul.show-result-area li p {\n            display: flex;\n            justify-content: space-evenly; }\n    ul.show-result-area li:nth-child(odd) {\n        background: #130517; }\n", ""]);
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
        var gameData, levelData, enemyData, levelUserData, bosPresent, enemyShipObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameData = this.gameInitData.gameData, levelData = gameData.levelData, enemyData = gameData.enemyData, levelUserData = this.getLevelUserData(), bosPresent = (levelUserData.sourse.levelData.bosPresents) ? levelUserData.sourse.levelData.bosPresents : null;
                    if (!(!this.gameInitData.gameData.levelChange && !bosPresent)) return [3 /*break*/, 1];
                    enemySpawn.call(this);
                    return [3 /*break*/, 3];
                case 1:
                    if (!(this.gameInitData.allGameEnemies.length == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.createNewEnemy(enemyData[0], EnemyObject)];
                case 2:
                    enemyShipObject = _a.sent();
                    enemyShipObject.loadEnemyes();
                    this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
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
                                dialogWindow({ textData: 'Exit the game?', rejectText: 'cancel', acceptText: 'ok' }, gameObject.exitTheGame, navigation);
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
                //dialogWindow({textData: 'Exit the game?', rejectText: 'cancel', acceptText: 'ok'}, gameObject.exitTheGame, navigation)
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
        var windowElement, gameData, index, _i, gameData_1, item, time, year, month, day, newElement;
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
                        windowElement.innerHTML = gameData.message;
                        return [2 /*return*/, false];
                    }
                    index = 0;
                    for (_i = 0, gameData_1 = gameData; _i < gameData_1.length; _i++) {
                        item = gameData_1[_i];
                        index += 1;
                        time = new Date(item.time), year = time.getFullYear(), month = time.getUTCMonth() + 1, day = time.getDate();
                        newElement = pagesBuilder_1.createElements({
                            tagName: "li",
                            styleClass: "winner-list",
                            inlineStyle: null,
                            pictureUrl: null,
                            linkUrl: null,
                            text: null,
                            innerContent: "<p class=\"single-item\"><span class=\"rate-number\">" + index + "</span>\n            name:<span class=\"item-name\">" + item.userName + "</span>\n            points:<span class=\"item-points\"> " + item.gamePoints + "</span> <span class=\"item-date\"> " + year + "/" + month + "/" + day + "</span></p>",
                            attributeName: 'data-button-id',
                            attribute: item.id,
                            attributeName1: null,
                            attribute1: null
                        });
                        windowElement.appendChild(newElement);
                    }
                    console.log(gameData);
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
            innerContent: "\n                <label for=\"\">\n                    <p>Please enter you name</p>\n                    <input maxlength=\"30\" minlength=\"3\" name=\"userName\" type=\"text\" require placeholder=\"Enter you name\">\n                </label>\n                <label for=\"\">\n                    <p>Please enter you email</p>\n                    <input name=\"userEmail\" type=\"email\" require placeholder=\"Enter you name\">\n                </label>\n\n                <div id=\"dialog-bottom-area\" class=\"dialog-btn-area\">\n                    <button type=\"submit\" data-button-id=\"save-result\" class=\"accept-btn btn-main\">save</button>\n                    <button data-button-id=\"cancel\" class=\"reject-btn btn-main\">cancel</button>\n                </div>",
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
                        console.log("submit", formResult, res);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
}
exports.initResultScreen = initResultScreen;
function transferDataToObject(data, mainGameObject) {
    if (!data)
        throw Error("No data to transform");
    var obj = { userName: null, userEmail: null, gamePoints: null };
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
    if (!data.sourse.levelData.bosPresents) {
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
                    gameField = document.querySelector('#gamefield'), gameActionField = document.querySelector('#gameObjectsfield'), gameUIfield = document.querySelector('#gameUifield');
                    level = 4, shipType = 1, shipLife = 5;
                    return [4 /*yield*/, serverRequest({ level: level, shipConfiguration: shipType })];
                case 1:
                    res = _a.sent();
                    levelData = res.levelData;
                    levelObjects = res.levelObjects;
                    grappleObjects = res.grappleObjects;
                    gameSetings = res.gameSetings;
                    userData = res.userData;
                    enemyData = res.enemyData;
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
        var wrapper, mainMenu, gameState, gameObject, playerShipData, engine, contexts, navigation;
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
        .then(function (data) { return data; });
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
                        reject("got some poblem here");
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
            text: "Current Level " + info.currentLevel + "/" + info.allLevels + " ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvYWkvcmVndWxhckVuZW15QWlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBNZW51L2FwcE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE1lbnUvZ2FtZVJlc3VsdE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwTWVudS9wYWdlc0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9idWxsZXRDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2VuZW15Q29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lR3JhcHBsZU9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9sZXZlbENvbnN0cnVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL21haW5HYW1lQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvdXNlckNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYXBwRXJyb3JMaXN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYmFja2dyb3VuZE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2J1bGxldHNNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9lbmdpbmVNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvY2hhbmdlTGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVVpTG9hZE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lVWlTZXR0aW5nc01lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lV2luU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvdWlNb2RlbE1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvdWlFbGVtZW50TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9lbGVtZW50cy93YXJwRWxlbWVudERyb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvd2VhcG9ucy93ZWFwb25zRGlzcGxheU1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKCdlbGVjdHJvbicpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsS0FBSztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUE4QyxjQUFjO0FBQzVELFNBQVMsbUJBQU8sQ0FBQyxzREFBa0I7QUFDbkMsU0FBUyxtQkFBTyxDQUFDLDRFQUE2QjtBQUM5QyxTQUFTLG1CQUFPLENBQUMsZ0RBQVk7Ozs7Ozs7Ozs7Ozs7QUNQaEI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0hBQWdIO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdIQUFnSDtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idG4tbWFpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uc2VsZWN0ZWQtaXRlbXMge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTYxMzI1OyB9XFxuXFxuLmJ0bi1zdGlja3kge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogOTAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWE2YzAwOyB9XFxuXFxuLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5zZWxlY3RlZC1pdGVtcyB7XFxuICAgIGJhY2tncm91bmQ6ICMxNjEzMjU7IH1cXG5cXG4uYnRuLXN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA5MCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNlYTZjMDA7IH1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgIGJvZHkgI3ByZWxvYWRlciB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICB3aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAwcHg7IH1cXG5cXG4uc3RhdGljLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUubWVudS1iYWNrZ3JvdWQge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzJmMjIzMTsgfVxcbiAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIHtcXG4gICAgICAgIHotaW5kZXg6IDEwOyB9XFxuICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUge1xcbiAgICAgICAgICAgIHRvcDogMTBweDsgfVxcbiAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICB0b3A6IDEwNXB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gICAgICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIGxpIHtcXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICAgICAgICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUgdWwgYSB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmYzgwMDtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDsgfVxcbiAgICAgICAgICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUgdWwgYTphY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDsgfVxcblxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcbiAgICAuY29udGVudC13cmFwcGVyIC5tZW51LXBhZ2VzLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzE2MTMyNTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTJweDsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG5cXG4uY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzEsIDYsIDgzLCAwLjgpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggYmxhY2s7IH1cXG5cXG4uY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp3aW5kb3ctaW5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTsgfVxcblxcbi5kaWFsb2ctYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwOyB9XFxuICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQwMDU0O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyBkaXYge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYnRuLWFyZWEge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcbiAgICAgICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1idG4tYXJlYSBidXR0b24uYWNjZXB0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGJhZTYwO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpOyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJ0bi1hcmVhIGJ1dHRvbi5yZWplY3QtYnRuIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiOTAwNGY7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7IH1cXG5cXG4jd3JhcHBlciBzZWN0aW9uIHtcXG4gICAgei1pbmRleDogNTtcXG4gICAgdG9wOiAwOyB9XFxuXFxuLmdhbWVCYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDsgfVxcblxcbi5nYW1lLWZpZWxkcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5nYW1lLWZpZWxkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5oaWRlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxudWwuc2hvdy1yZXN1bHQtYXJlYSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5yYXRlLW51bWJlciB7XFxuICAgICAgICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSAuaXRlbS1uYW1lIHtcXG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLXBvaW50cyB7XFxuICAgICAgICAgICAgY29sb3I6IGdyZWVuOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLWRhdGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICBjb2xvcjogZ3JleTsgfVxcbiAgICAgICAgdWwuc2hvdy1yZXN1bHQtYXJlYSBsaSBwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzEzMDUxNzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9tYWluLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCh0YXJnZXQsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgbWF4UG9zaXRpb25YID0gTWF0aC5tYXgodGFyZ2V0LngsIHRoaXMueCk7XHJcbiAgICB2YXIgbWluUG9zaXRpb25YID0gTWF0aC5taW4odGFyZ2V0LngsIHRoaXMueCk7XHJcbiAgICB2YXIgbWF4UG9zaXRpb25ZID0gTWF0aC5tYXgodGFyZ2V0LnkgLSB0aGlzLmhlaWdodCAvIDIsIHRoaXMueSk7XHJcbiAgICB2YXIgbWluUG9zaXRpb25ZID0gTWF0aC5taW4odGFyZ2V0LnkgLSB0aGlzLmhlaWdodCAvIDIsIHRoaXMueSk7XHJcbiAgICB2YXIgZGlzdGFuY2VUb1RhcmdldFggPSBtYXhQb3NpdGlvblggLSBtaW5Qb3NpdGlvblg7XHJcbiAgICB2YXIgZGlzdGFuY2VUb1RhcmdldFkgPSBtYXhQb3NpdGlvblkgLSBtaW5Qb3NpdGlvblk7XHJcbiAgICBpZiAodGhpcy5pc01vdmUgJiYgdGhpcy5iZWhhdmlvcikge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5iZWhhdmlvcikge1xyXG4gICAgICAgICAgICBjYXNlICdwYXRyb29sJzpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlycmVjdGlvblJhbmRvbSA9IG1haW5HYW1lT2JqZWN0LmdhbWVSYW5kb21pemVyKDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gKGRpcnJlY3Rpb25SYW5kb20gPT0gMSkgPyBcInVwXCIgOiBcImRvd25cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhdHJvb2wuY2FsbCh0aGlzLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmluZCc6XHJcbiAgICAgICAgICAgICAgICBzdHJhZmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhdHRhY2snOlxyXG4gICAgICAgICAgICAgICAgYXR0YWNrLmNhbGwodGhpcywgZGlzdGFuY2VUb1RhcmdldFksIGRpc3RhbmNlVG9UYXJnZXRYLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NvbWVFbmRGaW5kJzpcclxuICAgICAgICAgICAgICAgIHN0cmFmZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdW5pdFN0b3AuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3RyYWZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5pdFN0b3AoKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHNjcmVlbkRhdGEud2lkdGggLSB0aGlzLndpZHRoICogMikge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdHJhZmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BvdERpc3RhbmNlID4gZGlzdGFuY2VUb1RhcmdldFggfHwgdGhpcy5zcG90RGlzdGFuY2UgPiBkaXN0YW5jZVRvVGFyZ2V0WSkge1xyXG4gICAgICAgICAgICB0aGlzLnlGaW5hbCA9IHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24oZGlzdGFuY2VUb1RhcmdldFkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdHRhY2soZGlzdGFuY2VUb1RhcmdldFksIGRpc3RhbmNlVG9UYXJnZXRYLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnlGaW5hbCA9IHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZVRvVGFyZ2V0WCA8IDEwMClcclxuICAgICAgICAgICAgdGhpcy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhdHJvb2wobWFpbkdhbWVPYmplY3QpIHtcclxuICAgICAgICB2YXIgc2NyZWVuRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldFkgPSBNYXRoLm1heCh0aGlzLnksIHRoaXMueUZpbmFsKSAtIE1hdGgubWluKHRoaXMueSwgdGhpcy55RmluYWwpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlGaW5hbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55IC0gdGhpcy5oZWlnaHQgPCB0aGlzLnlGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueUZpbmFsID0gc2NyZWVuRGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPiB0aGlzLnlGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlGaW5hbCA9IHNjcmVlbkRhdGEuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVuZW15U2hpcExvZ2ljVmVydGljYWwgPSBlbmVteVNoaXBMb2dpY1ZlcnRpY2FsO1xyXG5mdW5jdGlvbiBlbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKSB7XHJcbiAgICB2YXIgeUFkaiA9IGRpc3RhbmNlVG9UYXJnZXRZIC8gdGhpcy52ZXJ0aWNhbFNwZWVkO1xyXG4gICAgeUFkaiA9IChNYXRoLnNpZ24oeUFkaikgPiAwKSA/IHlBZGogOiB5QWRqICogLTE7XHJcbiAgICB5QWRqID0gKHlBZGogPiB0aGlzLnZlcnRpY2FsU3BlZWQpID8gdGhpcy52ZXJ0aWNhbFNwZWVkIDogeUFkajtcclxuICAgIHRoaXMueSA9ICh0aGlzLnkgPiB0aGlzLnlGaW5hbCkgPyB0aGlzLnkgLSB5QWRqIDpcclxuICAgICAgICAodGhpcy55IDwgdGhpcy55RmluYWwpID8gdGhpcy55ICsgeUFkaiA6IHRoaXMueUZpbmFsO1xyXG59XHJcbmV4cG9ydHMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbiA9IGVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb247XHJcbmZ1bmN0aW9uIHNwYXduRW5lbXlMb2dpYyhFbmVteU9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGVuZW15U3Bhd24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVja1NwYXduVHlwZSwgbnVtYmVyRW5lbXlQZXJTcGF3biwgaSwgZW5lbXlTaGlwLCBlbmVteVNoaXBPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1NwYXduVHlwZSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxEYXRhLmVuZW15UHJvYmFiaWxpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY2hlY2tTcGF3blR5cGUgPD0gbGV2ZWxEYXRhLmVuZW15UmFuZG9taXplckluZGV4KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJFbmVteVBlclNwYXduID0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbERhdGEuZW5lbXlNYXhOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG51bWJlckVuZW15UGVyU3Bhd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBsZXZlbERhdGEuZW5lbXlNYXhOdW1iZXIpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcCA9IGVuZW15RGF0YVt0aGlzLmdhbWVSYW5kb21pemVyKGVuZW15RGF0YS5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTmV3RW5lbXkoZW5lbXlTaGlwLCBFbmVteU9iamVjdCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QubG9hZEVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuY29uY2F0KGVuZW15U2hpcE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnYW1lRGF0YSwgbGV2ZWxEYXRhLCBlbmVteURhdGEsIGxldmVsVXNlckRhdGEsIGJvc1ByZXNlbnQsIGVuZW15U2hpcE9iamVjdDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLCBsZXZlbERhdGEgPSBnYW1lRGF0YS5sZXZlbERhdGEsIGVuZW15RGF0YSA9IGdhbWVEYXRhLmVuZW15RGF0YSwgbGV2ZWxVc2VyRGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpLCBib3NQcmVzZW50ID0gKGxldmVsVXNlckRhdGEuc291cnNlLmxldmVsRGF0YS5ib3NQcmVzZW50cykgPyBsZXZlbFVzZXJEYXRhLnNvdXJzZS5sZXZlbERhdGEuYm9zUHJlc2VudHMgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKCF0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbENoYW5nZSAmJiAhYm9zUHJlc2VudCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15U3Bhd24uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5sZW5ndGggPT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTmV3RW5lbXkoZW5lbXlEYXRhWzBdLCBFbmVteU9iamVjdCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcE9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QubG9hZEVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcyA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmNvbmNhdChlbmVteVNoaXBPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNwYXduRW5lbXlMb2dpYyA9IHNwYXduRW5lbXlMb2dpYztcclxuZnVuY3Rpb24gY3JlYXRlTmV3RW5lbXkoZW5lbXlEYXRhLCBFbmVteU9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB4LCB5LCBzaGlwRGV0YWlscywgYmVoYXZpb3IsIGV4dHJhT2JqZWN0cywgX2EsIGNvbnRleHQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCArIDMwMCwgeSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIodGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCAtIDIwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15RGF0YS5kZXRhaWxzKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwRGV0YWlscyA9IGVuZW15RGF0YS5kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gKHNoaXBEZXRhaWxzLmJlaGF2aW9yKSA/IHNoaXBEZXRhaWxzLmJlaGF2aW9yW3RoaXMuZ2FtZVJhbmRvbWl6ZXIoc2hpcERldGFpbHMuYmVoYXZpb3IubGVuZ3RoKV0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHNoaXBEZXRhaWxzLmV4dHJhT2JqZWN0cykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxvYWRFeHRyYU9iamVjdC5jYWxsKHRoaXMsIHNoaXBEZXRhaWxzLmV4dHJhT2JqZWN0cyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhT2JqZWN0cyA9IF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgRW5lbXlPYmplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogeCwgeTogeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4OiBzaGlwRGV0YWlscy5zeCwgc3k6IHNoaXBEZXRhaWxzLnN5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc1dpZHRoOiBzaGlwRGV0YWlscy5pbWFnZVdpZHRoIC8gc2hpcERldGFpbHMubnVtYmVyT2ZJdGVtcywgc0hlaWdodDogc2hpcERldGFpbHMuaW1hZ2VIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc1dpZHRoOiBzaGlwRGV0YWlscy5pbWFnZVdpZHRoLCBudW1iZXJPZkl0ZW1zOiBzaGlwRGV0YWlscy5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNoaXBEZXRhaWxzLndpZHRoLCBoZWlnaHQ6IHNoaXBEZXRhaWxzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUZXh0dXJlOiBzaGlwRGV0YWlscy5za2luTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiBzaGlwRGV0YWlscy5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc2hpcERldGFpbHMuc3RhdHVzLCBuYW1lOiBzaGlwRGV0YWlscy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0VHlwZU51bWJlcjogc2hpcERldGFpbHMuYnVsbGV0VHlwZSwgcmFwaWRGaXJlOiBzaGlwRGV0YWlscy5yYXBpZEZpcmUsIHBvaW50c1BlclVuaXQ6IHNoaXBEZXRhaWxzLnBvaW50c1BlclVuaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogc2hpcERldGFpbHMuaGVhbHRoUG9pbnQsIGFuaW1hdGlvblN0ZXBzOiBzaGlwRGV0YWlscy5hbmltYXRpb25TdGVwcywgZGFtYWdlOiBzaGlwRGV0YWlscy5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogc2hpcERldGFpbHMub2JqZWN0T3duZXIsIGd1bnM6IChzaGlwRGV0YWlscy5ndW5zKSA/IHNoaXBEZXRhaWxzLmd1bnMgOiBbXSwgZXhwbG9zaW9uOiBzaGlwRGV0YWlscy5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IHNoaXBEZXRhaWxzLm51bWJlck9mVmVydGljYWxJdGVtcywgaXNNb3ZlOiBzaGlwRGV0YWlscy5pc01vdmUsIGlzU2hvb3Q6IHNoaXBEZXRhaWxzLmlzU2hvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG90RGlzdGFuY2U6IHNoaXBEZXRhaWxzLnNwb3REaXN0YW5jZSwgYmVoYXZpb3I6IGJlaGF2aW9yLCB2ZXJ0aWNhbFNwZWVkOiAoc2hpcERldGFpbHMudmVydGljYWxTcGVlZCkgPyBzaGlwRGV0YWlscy52ZXJ0aWNhbFNwZWVkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQm9zczogKHNoaXBEZXRhaWxzLmlzQm9zcykgPyBzaGlwRGV0YWlscy5pc0Jvc3MgOiBmYWxzZSwgZXh0cmFPYmplY3RzOiBleHRyYU9iamVjdHMgLy8gbG9hZCBjb2luIGVsZW1lbnQgZnJvbSBzZXJ2ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld0VuZW15ID0gY3JlYXRlTmV3RW5lbXk7XHJcbmZ1bmN0aW9uIGxvYWRFeHRyYU9iamVjdChleHRyYU9iamVjdHMpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmFuZG9tT2JqZWN0LCBsb2FkUHJvYmFiaWxpdHksIG51bWJlck9mRWxlbWVudCwgcmVzdWx0LCBjYWxsT2JqZWN0LCBpO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbU9iamVjdCA9IGV4dHJhT2JqZWN0c1t0aGlzLmdhbWVSYW5kb21pemVyKGV4dHJhT2JqZWN0cy5sZW5ndGgpXSwgbG9hZFByb2JhYmlsaXR5ID0gdGhpcy5nYW1lUmFuZG9taXplcihyYW5kb21PYmplY3QucmFuZG9tdWl6ZXIpLCBudW1iZXJPZkVsZW1lbnQgPSB0aGlzLmdhbWVSYW5kb21pemVyKHJhbmRvbU9iamVjdC5tYXhOdW1iZXIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoeyB1cmw6IHByb2Nlc3MuZW52LkhPU1QgKyBcImFwaS9ncmFwcGxlLW9iamVjdHNcIiwgbWV0aG9kOiBcIkdFVFwiLCBkYXRhOiBudWxsLCBoZWFkZXJzOiB7ICdncmFwcGxlT2JqZWN0JzogcmFuZG9tT2JqZWN0Lm9iamVjdCB9IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYWxsT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNhbGxPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkRXh0cmFPYmplY3QgPSBsb2FkRXh0cmFPYmplY3Q7XHJcbmZ1bmN0aW9uIGdhbWVSYW5kb21pemVyKG1heE51bWJlciwgbWluTnVtYmVyKSB7XHJcbiAgICBpZiAobWluTnVtYmVyID09PSB2b2lkIDApIHsgbWluTnVtYmVyID0gMDsgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bWJlciArIG1pbk51bWJlcik7XHJcbn1cclxuZXhwb3J0cy5nYW1lUmFuZG9taXplciA9IGdhbWVSYW5kb21pemVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxudmFyIGdhbWVSZXN1bHRNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2dhbWVSZXN1bHRNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIHNob3coZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbmV4cG9ydHMuc2hvdyA9IHNob3c7XHJcbmZ1bmN0aW9uIGhpZGUoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZXhwb3J0cy5oaWRlID0gaGlkZTtcclxuZnVuY3Rpb24gdG9nZ2xlcihlbCkge1xyXG4gICAgKGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSA/IHNob3coZWwpIDogaGlkZShlbCk7XHJcbn1cclxuZXhwb3J0cy50b2dnbGVyID0gdG9nZ2xlcjtcclxuZnVuY3Rpb24gYWRkQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLmFkZENsYXNzTGlzdCA9IGFkZENsYXNzTGlzdDtcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGlmICghZWwuY2xhc3NMaXN0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLnJlbW92ZUNsYXNzTGlzdCA9IHJlbW92ZUNsYXNzTGlzdDtcclxuZnVuY3Rpb24gYXBwTWVudShnYW1lT2JqZWN0LCBkaWFsb2dXaW5kb3cpIHtcclxuICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gbnVsbDtcclxuICAgIHZhciBuYXZpZ2F0aW9uID0ge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWRNZW51SXRlbTogc2VsZWN0ZWRNZW51SXRlbSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25UZW1wbGF0ZTogJy5zZWN0aW9uLXRlbXBsYXRlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXI6ICcjd3JhcHBlcicsXHJcbiAgICAgICAgICAgICAgICBzaWRlTWVudVdyYXBwZXI6ICcjbWFpbi1tZW51J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbXBvcnRTZWN0aW9uc1RvRE9NOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImltcG9ydFwiXScpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKG5hdmlnYXRpb24ubWVudS5jb25zdGFudHMuc2VjdGlvblRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2aWdhdGlvbi5tZW51LmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyKS5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0TWVudU9uQ2xpY2tFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkFjdG9uKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJ1dHRvbkFjdG9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5kYXRhc2V0LnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5zaG93U2VjdGlvbi5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2VsZWN0aW9uKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuZGF0YXNldC5zZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYW1lLXJlc3VsdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHRNb2R1bGVfMS5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2dhbWUtcmVzdWx0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdleGl0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVyKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ0V4aXQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdvaycgfSwgZ2FtZU9iamVjdC5leGl0VGhlR2FtZSwgbmF2aWdhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbG9zZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5tZW51LmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vZGlhbG9nV2luZG93KHt0ZXh0RGF0YTogJ0V4aXQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdvayd9LCBnYW1lT2JqZWN0LmV4aXRUaGVHYW1lLCBuYXZpZ2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWVudVNlbGVjdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09IFwiTElcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUFyZWEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkLWl0ZW1zXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8xID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVBcmVhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KG1lbnVJdGVtLCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQgIT0gXCJjbG9zZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImNhbmNlbFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImV4aXRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQpID8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBzZWxlY3RlZE1lbnVJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzc0xpc3QoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQsIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93U2VjdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbklkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIHNob3coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHNlY3Rpb25JZCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8yID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVBcmVhXzJbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzTGlzdChpdGVtLCBcIm1lbnUtYmFja2dyb3VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFnZXNCdWlsZGVyXzEucGFnZUJ1aWxkZXIoeyB0YXJnZXQ6IFwiI2Fib3V0LXNlY3Rpb24tY29udGVudFwiLCBkYXRhOiBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldExvY2FsRGF0YSh7IGZpbGVOYW1lOiAnYWJvdXQtcGFnZS5qc29uJyB9KSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUFsbFNlY3Rpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbk5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyICsgXCIgc2VjdGlvblwiKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlY3Rpb25Ob2Rlc18xID0gc2VjdGlvbk5vZGVzOyBfaSA8IHNlY3Rpb25Ob2Rlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VjdGlvbk5vZGVzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUJhY2tncm91bmRBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBtZW51QmFja2dyb3VuZEFyZWFfMSA9IG1lbnVCYWNrZ3JvdW5kQXJlYTsgX2EgPCBtZW51QmFja2dyb3VuZEFyZWFfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVCYWNrZ3JvdW5kQXJlYV8xW19hXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QoaXRlbSwgXCJtZW51LWJhY2tncm91ZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBtZW51QXJlYV8zID0gbWVudUFyZWE7IF9iIDwgbWVudUFyZWFfMy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV8zW19iXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0U2VjdGlvbnNUb0RPTSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZW51T25DbGlja0V2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xyXG59XHJcbmV4cG9ydHMuYXBwTWVudSA9IGFwcE1lbnU7XHJcbmZ1bmN0aW9uIGhpZGVTaG93TWVudShtYWluTWVudSwgbmF2aWdhdGlvbk1lbnUsIGdhbWVXaW4sIGdhbWVTdGF0dXMsIGdhbWVVaVBhdXNlKSB7XHJcbiAgICBpZiAoIWdhbWVTdGF0dXMgfHwgZ2FtZVVpUGF1c2UpIHtcclxuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1tZW51XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGUtbWVudVwiKTtcclxuICAgICAgICBuYXZpZ2F0aW9uTWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmhpZGVTaG93TWVudSA9IGhpZGVTaG93TWVudTtcclxuZnVuY3Rpb24gZGlhbG9nV2luZG93KF9hLCBjYWxsYmFjaywgbmF2aWdhdGlvbikge1xyXG4gICAgdmFyIHRleHREYXRhID0gX2EudGV4dERhdGEsIHJlamVjdFRleHQgPSBfYS5yZWplY3RUZXh0LCBhY2NlcHRUZXh0ID0gX2EuYWNjZXB0VGV4dDtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLWJveFwiKTtcclxuICAgIHZhciBkaWFsb2dCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1ib2R5Jyk7XHJcbiAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gKG5hdmlnYXRpb24pID8gbmF2aWdhdGlvbi5zaG93U2VsZWN0ZWRJdGVtKCkgOiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29rJzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV80ID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfNC5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV80W19pXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRNZW51SXRlbS5zZWxlY3RlZE1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3NMaXN0KHNlbGVjdGVkTWVudUl0ZW0uc2VsZWN0ZWRNZW51SXRlbSwgXCJzZWxlY3RlZC1pdGVtc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZXN0YXJ0JzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwuYXBwbHkoY2FsbGJhY2ssIHJlc3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgc2hvdyh3aW5kb3dFbGVtZW50KTtcclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogXCJhY2NlcHQtYnRuIGJ0bi1tYWluXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLXRleHRcXFwiPlwiICsgdGV4dERhdGEgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1idXR0b24tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1idG4tYXJlYVxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWJ1dHRvbi1pZD1cIiArIGFjY2VwdFRleHQgKyBcIiBjbGFzcz1cXFwiYWNjZXB0LWJ0biBidG4tbWFpblxcXCI+XCIgKyBhY2NlcHRUZXh0ICsgXCI8L2J1dHRvbj5cXG4gICAgICAgICAgIDxidXR0b24gZGF0YS1idXR0b24taWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcInJlamVjdC1idG4gYnRuLW1haW5cXFwiPmNhbmNlbDwvYnV0dG9uPlxcbiAgICAgICA8L2Rpdj5cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ2RhdGEtYnV0dG9uLWlkJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2IgPSAwLCBkaWFsb2dEYXRhXzEgPSBkaWFsb2dEYXRhOyBfYiA8IGRpYWxvZ0RhdGFfMS5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGRpYWxvZ0RhdGFfMVtfYl07XHJcbiAgICAgICAgZGlhbG9nQm9keS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBkaWFsb2dCdXR0b25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idXR0b24tYXJlYScpO1xyXG4gICAgZGlhbG9nQnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpYWxvZ0J1dHRvbkV2ZW50KTtcclxufVxyXG5leHBvcnRzLmRpYWxvZ1dpbmRvdyA9IGRpYWxvZ1dpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51XCIpO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gc2hvd1Jlc3VsdFNjcmVlbigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd2luZG93RWxlbWVudCwgZ2FtZURhdGEsIGluZGV4LCBfaSwgZ2FtZURhdGFfMSwgaXRlbSwgdGltZSwgeWVhciwgbW9udGgsIGRheSwgbmV3RWxlbWVudDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcmVzdWx0LWFyZWEnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZURhdGEuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IGdhbWVEYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgZ2FtZURhdGFfMSA9IGdhbWVEYXRhOyBfaSA8IGdhbWVEYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBnYW1lRGF0YV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IG5ldyBEYXRlKGl0ZW0udGltZSksIHllYXIgPSB0aW1lLmdldEZ1bGxZZWFyKCksIG1vbnRoID0gdGltZS5nZXRVVENNb250aCgpICsgMSwgZGF5ID0gdGltZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiBcImxpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNsYXNzOiBcIndpbm5lci1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVVcmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8cCBjbGFzcz1cXFwic2luZ2xlLWl0ZW1cXFwiPjxzcGFuIGNsYXNzPVxcXCJyYXRlLW51bWJlclxcXCI+XCIgKyBpbmRleCArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgIG5hbWU6PHNwYW4gY2xhc3M9XFxcIml0ZW0tbmFtZVxcXCI+XCIgKyBpdGVtLnVzZXJOYW1lICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgcG9pbnRzOjxzcGFuIGNsYXNzPVxcXCJpdGVtLXBvaW50c1xcXCI+IFwiICsgaXRlbS5nYW1lUG9pbnRzICsgXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpdGVtLWRhdGVcXFwiPiBcIiArIHllYXIgKyBcIi9cIiArIG1vbnRoICsgXCIvXCIgKyBkYXkgKyBcIjwvc3Bhbj48L3A+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnZGF0YS1idXR0b24taWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUxOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNob3dSZXN1bHRTY3JlZW4gPSBzaG93UmVzdWx0U2NyZWVuO1xyXG5mdW5jdGlvbiBpbml0UmVzdWx0U2NyZWVuKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLXJlc3VsdC1ib3gnKTtcclxuICAgIHZhciBmb3JtTG9hZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2FkLWFyZWEnKTtcclxuICAgIGZvcm1Mb2FkQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgYXBwTWVudV8xLnNob3cod2luZG93RWxlbWVudCk7XHJcbiAgICB2YXIgZGlhbG9nRGF0YSA9IFtcclxuICAgICAgICBwYWdlc0J1aWxkZXJfMS5jcmVhdGVFbGVtZW50cyh7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IFwiZm9ybVwiLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiBcImFjY2VwdC1idG4gYnRuLW1haW5cIixcclxuICAgICAgICAgICAgaW5saW5lU3R5bGU6IG51bGwsXHJcbiAgICAgICAgICAgIHBpY3R1cmVVcmw6IG51bGwsXHJcbiAgICAgICAgICAgIGxpbmtVcmw6IG51bGwsXHJcbiAgICAgICAgICAgIHRleHQ6IFwic2F2ZSByZXN1bHRcIixcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIGVudGVyIHlvdSBuYW1lPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1heGxlbmd0aD1cXFwiMzBcXFwiIG1pbmxlbmd0aD1cXFwiM1xcXCIgbmFtZT1cXFwidXNlck5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHJlcXVpcmUgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdSBuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3UgZW1haWw8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwidXNlckVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgcmVxdWlyZSBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91IG5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJkaWFsb2ctYm90dG9tLWFyZWFcXFwiIGNsYXNzPVxcXCJkaWFsb2ctYnRuLWFyZWFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGRhdGEtYnV0dG9uLWlkPVxcXCJzYXZlLXJlc3VsdFxcXCIgY2xhc3M9XFxcImFjY2VwdC1idG4gYnRuLW1haW5cXFwiPnNhdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1idXR0b24taWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcInJlamVjdC1idG4gYnRuLW1haW5cXFwiPmNhbmNlbDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IFwic2F2ZS1yZXN1bHQtZm9ybVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgIH0pLFxyXG4gICAgXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGlhbG9nRGF0YV8xID0gZGlhbG9nRGF0YTsgX2kgPCBkaWFsb2dEYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBkaWFsb2dEYXRhXzFbX2ldO1xyXG4gICAgICAgIGZvcm1Mb2FkQXJlYS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ3NhdmUtcmVzdWx0LWZvcm0nXTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYm90dG9tLWFyZWEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpYWxvZ0J1dHRvbkV2ZW50KTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybUFjdGlvbik7XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhbmNlbCc6XHJcbiAgICAgICAgICAgICAgICBmb3JtTG9hZEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5oaWRlKHdpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybVJlc3VsdCwgcmVzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtUmVzdWx0ID0gdHJhbnNmZXJEYXRhVG9PYmplY3QoZm9ybSwgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcm1SZXN1bHQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1SZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiLCBmb3JtUmVzdWx0LCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW5pdFJlc3VsdFNjcmVlbiA9IGluaXRSZXN1bHRTY3JlZW47XHJcbmZ1bmN0aW9uIHRyYW5zZmVyRGF0YVRvT2JqZWN0KGRhdGEsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBkYXRhIHRvIHRyYW5zZm9ybVwiKTtcclxuICAgIHZhciBvYmogPSB7IHVzZXJOYW1lOiBudWxsLCB1c2VyRW1haWw6IG51bGwsIGdhbWVQb2ludHM6IG51bGwgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgIGlmIChpdGVtLm5hbWUgJiYgaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSAmJiAhaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGdhbWVEYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgb2JqLmdhbWVQb2ludHMgPSBnYW1lRGF0YS5wb2ludHM7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBwYWdlQnVpbGRlcihfYSkge1xyXG4gICAgdmFyIHRhcmdldCA9IF9hLnRhcmdldCwgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9iLCB0YXJnZXROb2RlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCAhdGFyZ2V0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IChfYy5zZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYikgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgIWRhdGFdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gKF9jLnNlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJjYW50IGZldGNoIHRoZSBkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFfMSA9IGRhdGE7IF9pIDwgZGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09iamVjdCA9IGNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiBpdGVtLnRhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNsYXNzOiBpdGVtLmNsYXNzbGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZTogaXRlbS5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlVXJsOiBpdGVtLmltYWdlTGluayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiBpdGVtLmxpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZW50OiBpdGVtLmh0bWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChuZXdPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnBhZ2VCdWlsZGVyID0gcGFnZUJ1aWxkZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzKF9hKSB7XHJcbiAgICB2YXIgdGFnTmFtZSA9IF9hLnRhZ05hbWUsIHN0eWxlQ2xhc3MgPSBfYS5zdHlsZUNsYXNzLCBpbmxpbmVTdHlsZSA9IF9hLmlubGluZVN0eWxlLCBwaWN0dXJlVXJsID0gX2EucGljdHVyZVVybCwgbGlua1VybCA9IF9hLmxpbmtVcmwsIHRleHQgPSBfYS50ZXh0LCBpbm5lckNvbnRlbnQgPSBfYS5pbm5lckNvbnRlbnQsIGF0dHJpYnV0ZU5hbWUgPSBfYS5hdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGUgPSBfYS5hdHRyaWJ1dGUsIGF0dHJpYnV0ZU5hbWUxID0gX2EuYXR0cmlidXRlTmFtZTEsIGF0dHJpYnV0ZTEgPSBfYS5hdHRyaWJ1dGUxO1xyXG4gICAgdmFyIHJlc3QgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIChzdHlsZUNsYXNzKSA/IGVsZW1lbnQuY2xhc3NOYW1lID0gc3R5bGVDbGFzcyA6IGZhbHNlO1xyXG4gICAgKGlubGluZVN0eWxlKSA/IGVsZW1lbnQuc3R5bGUgPSBpbmxpbmVTdHlsZSA6IGZhbHNlO1xyXG4gICAgKHRhZ05hbWUgPT09IFwiaW1nXCIgJiYgcGljdHVyZVVybCkgPyBlbGVtZW50LnNyYyA9IF9fZGlybmFtZSArIHBpY3R1cmVVcmwgOiBmYWxzZTtcclxuICAgICh0ZXh0KSA/IGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dCA6IGZhbHNlO1xyXG4gICAgKGlubmVyQ29udGVudCkgPyBlbGVtZW50LmlubmVySFRNTCA9IGlubmVyQ29udGVudCA6IGZhbHNlO1xyXG4gICAgKGF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlKSA/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZSkgOiBmYWxzZTtcclxuICAgIChhdHRyaWJ1dGVOYW1lMSAmJiBhdHRyaWJ1dGUxKSA/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUxLCBhdHRyaWJ1dGUxKSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVFbGVtZW50cyA9IGNyZWF0ZUVsZW1lbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYnVsbGV0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9idWxsZXRzTW9kdWxlXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgQnVsbGV0Q29uc3RydWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnVsbGV0Q29uc3RydWN0KHgsIHksIGJ1bGxldFR5cGUsIGJ1bGxldFRleHR1cmUsIG9iamVjdE93bmVyLCBidWxsZXRTcGVlZCwgd2lkdGgsIGhlaWdodCwgZGFtYWdlLCB0eXBlLCB0ZXh0dXJlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXhwbG9zaW9uKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYnVsbGV0VHlwZSA9IGJ1bGxldFR5cGU7XHJcbiAgICAgICAgdGhpcy5idWxsZXRUZXh0dXJlID0gYnVsbGV0VGV4dHVyZTtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gb2JqZWN0T3duZXI7XHJcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gX19kaXJuYW1lICsgdGV4dHVyZTtcclxuICAgICAgICB0aGlzLnN4ID0gc3g7XHJcbiAgICAgICAgdGhpcy5zeSA9IHN5O1xyXG4gICAgICAgIHRoaXMuc1dpZHRoID0gc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IHNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24gPSBleHBsb3Npb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQnVsbGV0Q29uc3RydWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLkJ1bGxldENvbnN0cnVjdCA9IEJ1bGxldENvbnN0cnVjdDtcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS5jcmVhdGVCdWxsZXRzID0gYnVsbGV0c01vZHVsZV8xLmNyZWF0ZUJ1bGxldHM7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuaW5pdEJ1bGxldHMgPSBidWxsZXRzTW9kdWxlXzEuaW5pdEJ1bGxldHM7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUubW92ZUJ1bGxldHMgPSBidWxsZXRzTW9kdWxlXzEubW92ZUJ1bGxldHM7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuZ2V0T2JqZWN0UG9zaXRpb24gPSBlbmdpbmVNb2R1bGVzXzEuZ2V0T2JqZWN0UG9zaXRpb247XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUudGFrZURhbWFnZSA9IGVuZW1pZXNNb2R1bGVzXzEudGFrZURhbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBlbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmVcIik7XHJcbnZhciBFbmVteU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVuZW15T2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IGRhdGEuc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IGRhdGEuc0hlaWdodDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gZGF0YS5udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zaGlwVGV4dHVyZSA9IF9fZGlybmFtZSArIGRhdGEuc2hpcFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5idWxsZXRUeXBlTnVtYmVyID0gZGF0YS5idWxsZXRUeXBlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMucmFwaWRGaXJlID0gZGF0YS5yYXBpZEZpcmU7XHJcbiAgICAgICAgdGhpcy5wb2ludHNQZXJVbml0ID0gZGF0YS5wb2ludHNQZXJVbml0O1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcHMgPSBkYXRhLmFuaW1hdGlvblN0ZXBzO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGF0YS5kYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5ndW5zID0gZGF0YS5ndW5zO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IGRhdGEub2JqZWN0T3duZXI7XHJcbiAgICAgICAgdGhpcy5ndW5zID0gZGF0YS5ndW5zO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gZGF0YS5leHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgPSBkYXRhLm51bWJlck9mVmVydGljYWxJdGVtcztcclxuICAgICAgICB0aGlzLm9yaWdpbmFsSGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50O1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZGF0YS5pc01vdmU7XHJcbiAgICAgICAgdGhpcy5pc1Nob290ID0gZGF0YS5pc1Nob290O1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTcGVlZCA9IChkYXRhLnZlcnRpY2FsU3BlZWQpID8gZGF0YS52ZXJ0aWNhbFNwZWVkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcGVlZCArIDEpO1xyXG4gICAgICAgIHRoaXMuc3BvdERpc3RhbmNlID0gKGRhdGEuaXNCb3NzKSA/IGRhdGEuc3BvdERpc3RhbmNlIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcG90RGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0gMDtcclxuICAgICAgICB0aGlzLnhGaW5hbCA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IGRhdGEuYmVoYXZpb3I7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNCb3NzID0gZGF0YS5pc0Jvc3M7XHJcbiAgICAgICAgdGhpcy5leHRyYU9iamVjdHMgPSBkYXRhLmV4dHJhT2JqZWN0cztcclxuICAgICAgICAvLy8gbG9hZCBhbW91bnQgZm8gY29pbnMsIGFuZG8gY29pbnMgb2JqZWN0IGZyb20gc2VydmVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW5lbXlPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW5lbXlPYmplY3QgPSBFbmVteU9iamVjdDtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnBsYWNlRW5lbXllcyA9IGVuZW1pZXNNb2R1bGVzXzEucGxhY2VFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUubW92ZUVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLm1vdmVFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUubG9hZEVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLmxvYWRFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuc2hvb3QgPSBlbmVtaWVzTW9kdWxlc18xLnNob290O1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15QW5pbWF0aW9uO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZ2V0T2JqZWN0UG9zaXRpb24gPSBlbmdpbmVfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15RGFtYWdlQW5pbWF0aW9uID0gZW5lbWllc01vZHVsZXNfMS5lbmVteURhbWFnZUFuaW1hdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15U2hpcExvZ2ljVmVydGljYWwgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5lbmVteVNoaXBMb2dpY1ZlcnRpY2FsO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbiA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb247XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuc3Bhd25Db2luID0gZW5lbWllc01vZHVsZXNfMS5zcGF3bkNvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4vZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3RvclwiKTtcclxudmFyIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBHcmFwcGxlT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdyYXBwbGVPYmplY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHcmFwcGxlT2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbih7fSwgZGF0YSkpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaXNHcmFwcGxlID0gZGF0YS5pc0dyYXBwbGU7XHJcbiAgICAgICAgX3RoaXMuZ3JhcHBsZVBvd2VyID0gZGF0YS5ncmFwcGxlUG93ZXI7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdyYXBwbGVPYmplY3Q7XHJcbn0oZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3Rvcl8xLlNpZGVPYmplY3QpKTtcclxuZXhwb3J0cy5HcmFwcGxlT2JqZWN0ID0gR3JhcHBsZU9iamVjdDtcclxuR3JhcHBsZU9iamVjdC5wcm90b3R5cGUuYWRkUGxheWVyTGlmZSA9IGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xLmFkZFBsYXllckxpZmU7XHJcbkdyYXBwbGVPYmplY3QucHJvdG90eXBlLmNvbGxlY3RDb2luID0gZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEuY29sbGVjdENvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbmVteU1vZHVsZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2VuZW1pZXNcIikpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIFNpZGVPYmplY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaWRlT2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuc3ggPSBkYXRhLnN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBkYXRhLnN5O1xyXG4gICAgICAgIHRoaXMuc1dpZHRoID0gZGF0YS5zV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zSGVpZ2h0ID0gZGF0YS5zSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBfX2Rpcm5hbWUgKyBkYXRhLnRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwcyA9IGRhdGEuYW5pbWF0aW9uU3RlcHM7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gZGF0YS5udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZGF0YS50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAoZGF0YS5kYW1hZ2UpID8gZGF0YS5kYW1hZ2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqZWN0T3duZXIgPSAoZGF0YS5vYmplY3RPd25lcikgPyBkYXRhLm9iamVjdE93bmVyIDogbnVsbDtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gKGRhdGEuaGVhbHRoUG9pbnQpID8gZGF0YS5oZWFsdGhQb2ludCA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSAoZGF0YS5pc0JhY2tncm91bmQpID8gZGF0YS5pc0JhY2tncm91bmQgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gKGRhdGEuZXhwbG9zaW9uKSA/IGRhdGEuZXhwbG9zaW9uIDogbnVsbDtcclxuICAgICAgICB0aGlzLnBvaW50c1BlclVuaXQgPSAoZGF0YS5wb2ludHNQZXJVbml0KSA/IGRhdGEucG9pbnRzUGVyVW5pdCA6IDA7XHJcbiAgICAgICAgdGhpcy5leHRyYU9iamVjdHMgPSAoZGF0YS5leHRyYU9iamVjdHMpID8gZGF0YS5leHRyYU9iamVjdHMgOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNpZGVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2lkZU9iamVjdCA9IFNpZGVPYmplY3Q7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLmVuZW15QW5pbWF0aW9uID0gZW5lbXlNb2R1bGVzLmVuZW15QW5pbWF0aW9uO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5wbGFjZUVuZW15ZXMgPSBlbmVteU1vZHVsZXMucGxhY2VFbmVteWVzO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5maXJlQW5pbWF0aW9uRW5kZWQgPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5maXJlQW5pbWF0aW9uRW5kZWQ7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLm1hcE9iamVjdE1vdmUgPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5tYXBPYmplY3RNb3ZlO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5lbmVteURhbWFnZUFuaW1hdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuZW5lbXlEYW1hZ2VBbmltYXRpb247XHJcblNpZGVPYmplY3QucHJvdG90eXBlLnNwYXduQ29pbiA9IGVuZW1pZXNNb2R1bGVzXzEuc3Bhd25Db2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWFpbkdhbWVDb21wb25lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sZXZlbENvbnN0cnVjdG9yc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VuZW15Q29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi91c2VyQ29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9idWxsZXRDb25zdHJ1Y3RvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhbWVTaWRlT2JqZWN0Q29uc3RydWN0b3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9nYW1lR3JhcHBsZU9iamVjdHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgYmFja2dyb3VuZE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9iYWNrZ3JvdW5kTW9kdWxlXCIpO1xyXG52YXIgR2FtZUJhY2tncm91bmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lQmFja2dyb3VuZChiYWNrZ3JvdW5kVGV4dHVyZSwgYmFja2dyb3VuZFNwZWVkLCBzY3JlZW5EYXRhLCBjdHgsIHBhcnRPZlNjcmVlblN0YXR1cywgZXh0cmFNYXAsIHRpbWVUb0V4dHJhTWFwU2Vjb25kcywgdGltZVRvRXh0cmFNYXBNaW51dGVzKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUgPSBiYWNrZ3JvdW5kVGV4dHVyZTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRTcGVlZCA9IGJhY2tncm91bmRTcGVlZDtcclxuICAgICAgICB0aGlzLnNjcmVlbkRhdGEgPSBzY3JlZW5EYXRhO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMueCA9IChwYXJ0T2ZTY3JlZW5TdGF0dXMpID8gMCA6IHNjcmVlbkRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuZXh0cmFNYXAgPSBleHRyYU1hcDtcclxuICAgICAgICB0aGlzLnRpbWVUb0VyZXNzTGV2ZWwgPSA0O1xyXG4gICAgICAgIHRoaXMud2FycE9iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRpbWVUb0V4dHJhTWFwU2Vjb25kcyA9IHRpbWVUb0V4dHJhTWFwU2Vjb25kcztcclxuICAgICAgICB0aGlzLnRpbWVUb0V4dHJhTWFwTWludXRlcyA9IHRpbWVUb0V4dHJhTWFwTWludXRlcztcclxuICAgIH1cclxuICAgIHJldHVybiBHYW1lQmFja2dyb3VuZDtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lQmFja2dyb3VuZCA9IEdhbWVCYWNrZ3JvdW5kO1xyXG5HYW1lQmFja2dyb3VuZC5wcm90b3R5cGUudXBkYXRlTWFwID0gYmFja2dyb3VuZE1vZHVsZV8xLnVwZGF0ZU1hcDtcclxuR2FtZUJhY2tncm91bmQucHJvdG90eXBlLndhcnBFZmZlY3QgPSBlbmdpbmVNb2R1bGVzXzEud2FycEVmZmVjdDtcclxuR2FtZUJhY2tncm91bmQucHJvdG90eXBlLmNoYW5nZVBhcnRPZlRleHR1cmUgPSBiYWNrZ3JvdW5kTW9kdWxlXzEuY2hhbmdlUGFydE9mVGV4dHVyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy9pbXBvcnQgeyB2aWV3TW9kdWxlcyB9IGZyb20gJy4uL3ZpZXcvZGlzcGxheU1vZHVsZXMnO1xyXG52YXIgcmVndWxhckVuZW15QWlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vYWkvcmVndWxhckVuZW15QWlNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgY2hhbmdlTGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVNb2R1bGVzL2NoYW5nZUxldmVsc1wiKTtcclxudmFyIGVuZ2luZU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIHBsYXllclNoaXBNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvcGxheWVyU2hpcE1vZHVsZVwiKTtcclxudmFyIGdhbWVVaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi91aS9nYW1lVWlNb2R1bGVzXCIpO1xyXG52YXIgc2F0YXJ0R2FtZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lXCIpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShnYW1lSW5pdERhdGEpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YSA9IGdhbWVJbml0RGF0YTtcclxuICAgIH1cclxuICAgIEdhbWUucHJvdG90eXBlLmNoYW5nZUxldmVsID0gZnVuY3Rpb24gKG5leHRMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbCA9IG5leHRMZXZlbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNob3dHYW1lSW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZXZlbFRvQ2hhbmdlOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQb2ludDogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudFBvaW50LFxyXG4gICAgICAgICAgICBnYW1lRGF0YTogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEsXHJcbiAgICAgICAgICAgIGltYWdlRGlycmVjdGlvbjogX19kaXJuYW1lICsgJy9wdWJsaWMvaW1hZ2VzLycsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93TGV2ZWxEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbERhdGE7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmV0dXJuQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVBY3Rpb25GaWVsZCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRmllbGQsXHJcbiAgICAgICAgICAgICAgICBnYW1lQWN0aW9uRmllbGQ6IHRoaXMuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZ2FtZVVJRmllbGQ6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWUgPSBHYW1lO1xyXG5HYW1lLnByb3RvdHlwZS5jcmVhdGVDb250ZXh0ID0gZW5naW5lTW9kdWxlc18xLmNyZWF0ZUNvbnRleHQ7XHJcbkdhbWUucHJvdG90eXBlLmluaXRGaWVsZCA9IGVuZ2luZU1vZHVsZXNfMS5pbml0RmllbGQ7XHJcbkdhbWUucHJvdG90eXBlLmxldmVsSW5pdCA9IGVuZ2luZU1vZHVsZXNfMS5sZXZlbEluaXQ7IC8vIGNyZWF0ZUNvbnRleHQgaW5pdFBsYXllclNoaXBcclxuR2FtZS5wcm90b3R5cGUuc2V0R2FtZUZpZWxkcyA9IGVuZ2luZU1vZHVsZXNfMS5zZXRHYW1lRmllbGRzO1xyXG5HYW1lLnByb3RvdHlwZS53YXJwRWZmZWN0ID0gZW5naW5lTW9kdWxlc18xLndhcnBFZmZlY3Q7IC8vIHdhcnBFZmZlY3RcclxuR2FtZS5wcm90b3R5cGUuZ2V0U2NyZWVuU2l6ZSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRTY3JlZW5TaXplO1xyXG5HYW1lLnByb3RvdHlwZS5nZXRMZXZlbFVzZXJEYXRhID0gZW5naW5lTW9kdWxlc18xLmdldExldmVsVXNlckRhdGE7XHJcbkdhbWUucHJvdG90eXBlLmxldmVsVGltZXIgPSBlbmdpbmVNb2R1bGVzXzEubGV2ZWxUaW1lcjtcclxuR2FtZS5wcm90b3R5cGUuZ2V0U2Vjb25kTWVhc3VyZSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRTZWNvbmRNZWFzdXJlO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lU2Vjb25kc0luY3JlYXNlID0gZW5naW5lTW9kdWxlc18xLmdhbWVTZWNvbmRzSW5jcmVhc2U7XHJcbkdhbWUucHJvdG90eXBlLmluaXRQbGF5ZXJTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLmluaXRQbGF5ZXJTaGlwO1xyXG4vL0dhbWUucHJvdG90eXBlLnBsYWNlUGxheWVyU2hpcCA9IHBsYWNlUGxheWVyU2hpcDtcclxuR2FtZS5wcm90b3R5cGUuZGVsZXRlQnVsbGV0ID0gZW5naW5lTW9kdWxlc18xLmRlbGV0ZUJ1bGxldDtcclxuR2FtZS5wcm90b3R5cGUuZGVsZXRlT2JqZWN0cyA9IGVuZ2luZU1vZHVsZXNfMS5kZWxldGVPYmplY3RzO1xyXG5HYW1lLnByb3RvdHlwZS5kZWxhdGVTaWRlT2JqZWN0ID0gZW5naW5lTW9kdWxlc18xLmRlbGF0ZVNpZGVPYmplY3Q7XHJcbkdhbWUucHJvdG90eXBlLmhpdERldGVjdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuaGl0RGV0ZWN0aW9uO1xyXG5HYW1lLnByb3RvdHlwZS5jb2xsZWN0UG9pbnRzID0gZW5naW5lTW9kdWxlc18xLmNvbGxlY3RQb2ludHM7XHJcbkdhbWUucHJvdG90eXBlLnNwYXduRW5lbXlMb2dpYyA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLnNwYXduRW5lbXlMb2dpYztcclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlTmV3RW5lbXkgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5jcmVhdGVOZXdFbmVteTtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVJhbmRvbWl6ZXIgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5nYW1lUmFuZG9taXplcjtcclxuR2FtZS5wcm90b3R5cGUudWlDb250cm9sbGVyID0gZ2FtZVVpTW9kdWxlc18xLnVpQ29udHJvbGxlcjtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVVpUGF1c2UgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVVpUGF1c2U7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVVaU1lbnUgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVVpTWVudTtcclxuR2FtZS5wcm90b3R5cGUuc2hvd01lbnVXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd01lbnVXaW5kb3c7XHJcbkdhbWUucHJvdG90eXBlLnNob3dVaVBvcHVwV2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dVaVBvcHVwV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93U3RhcnRXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd1N0YXJ0V2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93UGF1c2VXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuc2hvd1BhdXNlV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlcldpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5nYW1lT3ZlcldpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVdpbldpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5nYW1lV2luV2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93R2FtZVN0YXRzID0gZ2FtZVVpTW9kdWxlc18xLnNob3dHYW1lU3RhdHM7XHJcbkdhbWUucHJvdG90eXBlLmluaXRVaUVsZW1lbnRzID0gZ2FtZVVpTW9kdWxlc18xLmluaXRVaUVsZW1lbnRzO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lU3RhcnQgPSBzYXRhcnRHYW1lXzEuZ2FtZVN0YXJ0O1xyXG5HYW1lLnByb3RvdHlwZS5iYWNrVG9TdGFydFNjcmVlbiA9IHNhdGFydEdhbWVfMS5iYWNrVG9TdGFydFNjcmVlbjtcclxuR2FtZS5wcm90b3R5cGUuZXhpdFRoZUdhbWUgPSBzYXRhcnRHYW1lXzEuZXhpdFRoZUdhbWU7XHJcbkdhbWUucHJvdG90eXBlLm5leHRMZXZlbERhdGFSZWxvYWQgPSBjaGFuZ2VMZXZlbHNfMS5uZXh0TGV2ZWxEYXRhUmVsb2FkO1xyXG5HYW1lLnByb3RvdHlwZS5jaGFuZ2VMZXZlbFByb2NlZHVyZSA9IGVuZ2luZU1vZHVsZXNfMS5jaGFuZ2VMZXZlbFByb2NlZHVyZTtcclxuR2FtZS5wcm90b3R5cGUuZ2V0UmFuZG9tQ29sb3IgPSBlbmdpbmVNb2R1bGVzXzEuZ2V0UmFuZG9tQ29sb3I7XHJcbkdhbWUucHJvdG90eXBlLm1hcFJhbm9tT2JqZWN0U3Bhd24gPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5tYXBSYW5vbU9iamVjdFNwYXduO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0R3JhcHBsZU9iamVjdCA9IGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xLmluaXRHcmFwcGxlT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGxheWVyU2hpcE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgUGxheWVyU2hpcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXllclNoaXAoZGF0YSwgcG9pbnRzLCBoZWFsdGhQb2ludCwgbnVtYmVyT2ZsaWZlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBkYW1hZ2UpIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAxMDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAxMDA7IH1cclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZsaWZlID0gbnVtYmVyT2ZsaWZlO1xyXG4gICAgICAgIHRoaXMubWF4T2ZMaWZlID0gbnVtYmVyT2ZsaWZlO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBoZWFsdGhQb2ludCArIGRhdGEuYXJtb3I7XHJcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGhQb2ludCArIGRhdGEuYXJtb3I7XHJcbiAgICAgICAgdGhpcy54ID0geCAtICh3aWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMueSA9IHkgLSAoaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy54RmluYWwgPSB4O1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0geTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbkFsbG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gXCJwbGF5ZXJcIjtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy54QWRqID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IGRhdGEuZXhwbG9zaW9uO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xyXG4gICAgfVxyXG4gICAgUGxheWVyU2hpcC5wcm90b3R5cGUuZ2V0UGxheWVySW5mb3JtYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICBtYXhIZWFsdGhQb2ludDogdGhpcy5tYXhIZWFsdGhcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXJTaGlwO1xyXG59KCkpO1xyXG5leHBvcnRzLlBsYXllclNoaXAgPSBQbGF5ZXJTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5pbml0UGxheWVyU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5pbml0UGxheWVyU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUubW92ZVBsYXllclNoaXAgPSBwbGF5ZXJTaGlwTW9kdWxlXzEubW92ZVBsYXllclNoaXA7XHJcblBsYXllclNoaXAucHJvdG90eXBlLnNoaXBDb250cm9sID0gcGxheWVyU2hpcE1vZHVsZV8xLnNoaXBDb250cm9sO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5tb3ZlU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5tb3ZlU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUucGxhY2VTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLnBsYWNlU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUuc2V0Q29udGV4dCA9IHBsYXllclNoaXBNb2R1bGVfMS5zZXRDb250ZXh0O1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5nZXRPYmplY3RQb3NpdGlvbiA9IGVuZ2luZU1vZHVsZXNfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUudGFrZURhbWFnZSA9IGVuZW1pZXNNb2R1bGVzXzEudGFrZURhbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGdhbWVHcmFwcGxlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lR3JhcHBsZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBjb3N0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vY29uc3RydWN0b3JzXCIpKTtcclxuZnVuY3Rpb24gcGxhY2VFbmVteWVzKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUltYWdlKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCwgdGhpcy5pbWcsIHRoaXMuc3gsIHRoaXMuc3ksIHRoaXMuc1dpZHRoLCB0aGlzLnNIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy5wbGFjZUVuZW15ZXMgPSBwbGFjZUVuZW15ZXM7XHJcbmZ1bmN0aW9uIG1vdmVFbmVteWVzKG1vdmVYLCBtb3ZlWSkge1xyXG4gICAgaWYgKG1vdmVZID09PSB2b2lkIDApIHsgbW92ZVkgPSAwOyB9XHJcbiAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIHRoaXMueSAtPSBtb3ZlWTtcclxufVxyXG5leHBvcnRzLm1vdmVFbmVteWVzID0gbW92ZUVuZW15ZXM7XHJcbmZ1bmN0aW9uIGxvYWRFbmVteWVzKCkge1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuc2hpcFRleHR1cmU7XHJcbn1cclxuZXhwb3J0cy5sb2FkRW5lbXllcyA9IGxvYWRFbmVteWVzO1xyXG5mdW5jdGlvbiBzaG9vdChCdWxsZXRDb25zdHJ1Y3RvciwgbWFpbkdhbWVPYmplY3QpIHtcclxuICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlIHx8ICF0aGlzLmlzU2hvb3QpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy9sZXQgcmFuZG9tU2hvb3QgPSBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplciggTWF0aC5wb3codGhpcy5yYXBpZEZpcmUsIDIpICk7XHJcbiAgICAvL2xldCBzaG9vdFByb2JhYmlsaXR5ID0gbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIoIHRoaXMucmFwaWRGaXJlICk7XHJcbiAgICB2YXIgZ3VucyA9IHRoaXMuZ3VucztcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoMSA+IG1haW5HYW1lT2JqZWN0LmdhbWVSYW5kb21pemVyKGl0ZW0uZmlyZVJlcGVhZCkpIHtcclxuICAgICAgICAgICAgdmFyIGJ1bGxldF8xID0gbmV3IEJ1bGxldENvbnN0cnVjdG9yKHRoaXNfMS54LCB0aGlzXzEueSArICgoaXRlbS5maXJlUG9zaXRpb24pID8gaXRlbS5maXJlUG9zaXRpb24gOiBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplcih0aGlzXzEuaGVpZ2h0KSksIGl0ZW0ubmFtZSwgaXRlbS5jb2xvciwgXCJlbmVteVwiLCBpdGVtLnNwZWVkICsgdGhpc18xLnNwZWVkLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCwgaXRlbS5kYW1hZ2UsIGl0ZW0udHlwZSwgaXRlbS50ZXh0dXJlLCBpdGVtLnN4LCBpdGVtLnN5LCBpdGVtLnNXaWR0aCwgaXRlbS5zSGVpZ2h0LCBpdGVtLmV4cGxvc2lvbkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGJ1bGxldF8xLmltZy5zcmMgPSBidWxsZXRfMS50ZXh0dXJlO1xyXG4gICAgICAgICAgICBidWxsZXRfMS5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLmNvbmNhdChidWxsZXRfMSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBndW5zXzEgPSBndW5zOyBfaSA8IGd1bnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGd1bnNfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShpdGVtKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNob290ID0gc2hvb3Q7XHJcbmZ1bmN0aW9uIGVuZW15QW5pbWF0aW9uKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkgeyBzdGF0ZSA9IHRydWU7IH1cclxuICAgIHRoaXMuZGV0ZWN0RnJhbWUgKz0gMTtcclxuICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5hbmltYXRpb25TdGVwcyA9PSAwICYmIHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zeCArPSB0aGlzLnNXaWR0aDtcclxuICAgICAgICBpZiAodGhpcy5zeCA+PSB0aGlzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZW5lbXlBbmltYXRpb24gPSBlbmVteUFuaW1hdGlvbjtcclxuZnVuY3Rpb24gZW5lbXlEYW1hZ2VBbmltYXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgPiAxKSB7XHJcbiAgICAgICAgdmFyIGRhbWFnZUFuaW1hdGlvblBvaW50XzEgPSB0aGlzLm9yaWdpbmFsSGVhbHRoUG9pbnQgLyB0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcztcclxuICAgICAgICB2YXIgZGFtYWdlUG9pbnQgPSBuZXcgQXJyYXkodGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMpLmZpbGwobnVsbCk7XHJcbiAgICAgICAgZGFtYWdlUG9pbnQgPSBkYW1hZ2VQb2ludC5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7IHJldHVybiBkYW1hZ2VBbmltYXRpb25Qb2ludF8xICogKGluZGV4ICsgMSk7IH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYW1hZ2VQb2ludC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGhQb2ludCA8IGRhbWFnZVBvaW50W2ldICYmIHRoaXMuaGVhbHRoUG9pbnQgPiBkYW1hZ2VQb2ludFtpICsgMV0gJiYgZGFtYWdlUG9pbnRbaSArIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5ID0gdGhpcy5zSGVpZ2h0ICogKGkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWRhbWFnZVBvaW50W2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeSA9IHRoaXMuc0hlaWdodCAqICh0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcyAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZW5lbXlEYW1hZ2VBbmltYXRpb24gPSBlbmVteURhbWFnZUFuaW1hdGlvbjtcclxuLy8gY29tcGxleCBlbmVteSBhbmltYXRpb24gZm9yIGRhbWFnZVxyXG5mdW5jdGlvbiB0YWtlRGFtYWdlKGRhbWFnZSwgaGl0T2JqZWN0LCBtYWluR2FtZU9iamVjdCwgR3JhcHBsZU9iamVjdCkge1xyXG4gICAgLyogQnVsbGV0IGhpdCBkZXRlY3Rpb24gKi9cclxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVuZW15XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwicGxheWVyXCIgfHxcclxuICAgICAgICB0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVuZW15XCIgfHxcclxuICAgICAgICB0aGlzLmhhc093blByb3BlcnR5KCdidWxsZXRUeXBlJykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcInBsYXllclwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcImNvbGxpZGVcIiAmJiBoaXRPYmplY3QuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykpIHtcclxuICAgICAgICBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5leHBsb3Npb25GaXJlKHRoaXMsIG1haW5HYW1lT2JqZWN0LCBoaXRPYmplY3QsIGNvc3RydWN0b3JzLlNpZGVPYmplY3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qIEdhbWUgZ3JhcHBsZSBvYmplY3QgaGl0IGRldGVjdGlvbiAqL1xyXG4gICAgaWYgKHRoaXMub2JqZWN0T3duZXIgPT0gXCJncmFwcGxlT2JqZWN0XCIgJiZcclxuICAgICAgICBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJlxyXG4gICAgICAgICFoaXRPYmplY3QuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5ncmFwcGxlT2JqZWN0T25TY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5leHBsb3Npb25GaXJlKHRoaXMsIG1haW5HYW1lT2JqZWN0LCBoaXRPYmplY3QsIGNvc3RydWN0b3JzLlNpZGVPYmplY3QpO1xyXG4gICAgICAgIHRoaXNbdGhpcy5ncmFwcGxlUG93ZXIubWV0aG9kTmFtZV0oeyBhbGxHYW1lU2lkZU9iamVjdHM6IG1haW5HYW1lT2JqZWN0LCBwbGF5ZXJTaGlwRGF0YTogaGl0T2JqZWN0LCBtYWluR2FtZU9iamVjdDogbWFpbkdhbWVPYmplY3QgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBIaXQgZGV0IGRlY3Rpb24gY29sbGlzaW9uICovXHJcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImNvbGxpZGVcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImNvbGxpZGVcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW52aXJvbm1lbnRcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW5lbXlcIikge1xyXG4gICAgICAgIHVuaXREYW1hZ2UuY2FsbCh0aGlzLCBudWxsLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5lbmVteURhbWFnZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xLmV4cGxvc2lvbkZpcmUodGhpcywgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgY29zdHJ1Y3RvcnMuU2lkZU9iamVjdCk7XHJcbiAgICAgICAgICAgIC8vLyBsb2FkIGNvaW5zXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwYXduQ29pbilcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Db2luKG1haW5HYW1lT2JqZWN0LCBjb3N0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb3NzKVxyXG4gICAgICAgICAgICAgICAgYm9zc0VuZW15RGVzdHJ1Y3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uQWxsb3cpIHtcclxuICAgICAgICAgICAgdW5pdERhbWFnZS5jYWxsKHRoaXMsIG1haW5HYW1lT2JqZWN0LmdldExldmVsVXNlckRhdGEoKSwgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiB1bml0RGFtYWdlKGRhdGEsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoUG9pbnQgPD0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxpZmUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNvdXJzZS5wbGF5ZXJPYmplY3QubnVtYmVyT2ZsaWZlIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zb3Vyc2UucGxheWVyT2JqZWN0Lm51bWJlck9mbGlmZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZU92ZXJXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5iYWNrVG9TdGFydFNjcmVlbihjb3N0cnVjdG9ycy5QbGF5ZXJTaGlwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBkYXRhLnNvdXJzZS5wbGF5ZXJPYmplY3QubWF4SGVhbHRoO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmNvbGxlY3RQb2ludHModGhpcy5wb2ludHNQZXJVbml0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0UHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJvc3NFbmVteURlc3RydWN0aW9uKCkge1xyXG4gICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy50YWtlRGFtYWdlID0gdGFrZURhbWFnZTtcclxuZnVuY3Rpb24gc3Bhd25Db2luKG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KSB7XHJcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnZXh0cmFPYmplY3RzJykpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5leHRyYU9iamVjdHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2luID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBjb2luLnggPSB0aGlzLng7XHJcbiAgICAgICAgICAgIGNvaW4ueSA9IHRoaXMueTtcclxuICAgICAgICAgICAgZ2FtZUdyYXBwbGVPYmplY3RzTW9kdWxlXzEubG9hZEdyYWJibGVUb1NpZGVPYmplY3QuY2FsbCh0aGlzLCBtYWluR2FtZU9iamVjdCwgY29pbiwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3Bhd25Db2luID0gc3Bhd25Db2luO1xyXG5mdW5jdGlvbiBoaXREZXRlY3Rpb24ob2JqZWN0MSwgb2JqZWN0c0FyciwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIHZhciBjb2xsaXNpb24gPSBudWxsO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBvYmplY3RzQXJyXzEgPSBvYmplY3RzQXJyOyBfaSA8IG9iamVjdHNBcnJfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgb2JqZWN0MiA9IG9iamVjdHNBcnJfMVtfaV07XHJcbiAgICAgICAgdmFyIG9iamVjdDFQb3NpdGlvbiA9IG9iamVjdDEuZ2V0T2JqZWN0UG9zaXRpb24uY2FsbChvYmplY3QxKTtcclxuICAgICAgICB2YXIgeE1pbiA9IE1hdGgubWF4KG9iamVjdDFQb3NpdGlvbi54LCBvYmplY3QyLngpO1xyXG4gICAgICAgIHZhciB5TWluID0gTWF0aC5tYXgob2JqZWN0MVBvc2l0aW9uLnksIG9iamVjdDIueSk7XHJcbiAgICAgICAgdmFyIHhNYXggPSBNYXRoLm1pbihvYmplY3QxUG9zaXRpb24ueCArIChvYmplY3QxLndpZHRoIHx8IG9iamVjdDFQb3NpdGlvbi53aWR0aCksIG9iamVjdDIueCArIG9iamVjdDIud2lkdGgpO1xyXG4gICAgICAgIHZhciB5TWF4ID0gTWF0aC5taW4ob2JqZWN0MVBvc2l0aW9uLnkgKyAob2JqZWN0MS5oZWlnaHQgfHwgb2JqZWN0MVBvc2l0aW9uLmhlaWdodCksIG9iamVjdDIueSArIG9iamVjdDIuaGVpZ2h0KTtcclxuICAgICAgICB2YXIgcmVzWCA9IHhNYXggLSB4TWluO1xyXG4gICAgICAgIHZhciByZXNZID0geU1heCAtIHlNaW47XHJcbiAgICAgICAgY29sbGlzaW9uID0gKE1hdGguc2lnbihyZXNYKSA8IDAgfHwgTWF0aC5zaWduKHJlc1kpIDwgMCkgPyBmYWxzZSA6IFwiY29sbGlzaW9uXCI7XHJcbiAgICAgICAgaWYgKGNvbGxpc2lvbiA9PSBcImNvbGxpc2lvblwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QxLnRha2VEYW1hZ2UgJiYgb2JqZWN0Mi50YWtlRGFtYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QxLnRha2VEYW1hZ2UoKG9iamVjdDIuZGFtYWdlKSA/IG9iamVjdDIuZGFtYWdlIDogMCwgb2JqZWN0MiwgbWFpbkdhbWVPYmplY3QsIEdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Mi50YWtlRGFtYWdlKChvYmplY3QxLmRhbWFnZSkgPyBvYmplY3QxLmRhbWFnZSA6IDAsIG9iamVjdDEsIG1haW5HYW1lT2JqZWN0LCBHcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGNvbGxpc2lvbiA9PSBcImNvbGxpc2lvblwiKSA/IG9iamVjdDEgOiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmhpdERldGVjdGlvbiA9IGhpdERldGVjdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VuZW1pZXNNb2R1bGVzXCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5vRGF0YSA9ICdUaGVyZSBpcyBubyBkYXRhJywgbm9PYmplY3QgPSAnVGhlcmUgaXMgbm8gT2JqZWN0JztcclxuZXhwb3J0cy5ub0RhdGEgPSBub0RhdGE7XHJcbmV4cG9ydHMubm9PYmplY3QgPSBub09iamVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gdXBkYXRlTWFwKCkge1xyXG4gICAgdmFyIGJhY2tncm91bmRPYmplY3QgPSB0aGlzO1xyXG4gICAgdGhpcy54IC09IHRoaXMuYmFja2dyb3VuZFNwZWVkO1xyXG4gICAgaWYgKE1hdGguc2lnbih0aGlzLmJhY2tncm91bmRTcGVlZCkgPiAwICYmIHRoaXMueCArIHRoaXMuc2NyZWVuRGF0YS53aWR0aCA8IDApIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnNjcmVlbkRhdGEud2lkdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChNYXRoLnNpZ24odGhpcy5iYWNrZ3JvdW5kU3BlZWQpIDwgMCAmJiB0aGlzLnggPiB0aGlzLnNjcmVlbkRhdGEud2lkdGgpIHtcclxuICAgICAgICB0aGlzLnggPSAwIC0gdGhpcy5zY3JlZW5EYXRhLndpZHRoO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVJbWFnZShiYWNrZ3JvdW5kT2JqZWN0LmN0eCwgYmFja2dyb3VuZE9iamVjdC5pbWcsIGJhY2tncm91bmRPYmplY3QueCwgMCwgYmFja2dyb3VuZE9iamVjdC5zY3JlZW5EYXRhLndpZHRoICsgMiwgYmFja2dyb3VuZE9iamVjdC5zY3JlZW5EYXRhLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy51cGRhdGVNYXAgPSB1cGRhdGVNYXA7XHJcbmZ1bmN0aW9uIGNoYW5nZVBhcnRPZlRleHR1cmUobWFpbkdhbWVPYmplY3QsIGJhY2tncm91bmRBcnJheSkge1xyXG4gICAgdmFyIGxldmVsRGF0YSA9IG1haW5HYW1lT2JqZWN0LmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIHZhciBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgaWYgKGxldmVsRGF0YS5taW51dGVzIDw9IHRoaXMudGltZVRvRXh0cmFNYXBNaW51dGVzXHJcbiAgICAgICAgJiYgbGV2ZWxEYXRhLnNlY29uZHMgPD0gdGhpcy50aW1lVG9FeHRyYU1hcFNlY29uZHNcclxuICAgICAgICAmJiB0aGlzLmV4dHJhTWFwICYmIHRoaXMueCA+PSBzY3JlZW5EYXRhLndpZHRoIC0gMjAwKSB7XHJcbiAgICAgICAgdmFyIGluZm8gPSBtYWluR2FtZU9iamVjdC5zaG93R2FtZUluZm8oKTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBfX2Rpcm5hbWUgKyB0aGlzLmV4dHJhTWFwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY2hhbmdlUGFydE9mVGV4dHVyZSA9IGNoYW5nZVBhcnRPZlRleHR1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1bGxldHMobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlTGFzZXJCdWxsZXQoe1xyXG4gICAgICAgIHNvdXJjZTogdGhpcyxcclxuICAgICAgICBvYmplY3RPd25lcjogdGhpcy5vYmplY3RPd25lcixcclxuICAgICAgICBjdHg6IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCxcclxuICAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLmJ1bGxldFRleHR1cmUsXHJcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICByYWRpdXM6IDUsXHJcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgIGltZzogdGhpcy5pbWcsXHJcbiAgICAgICAgc3g6IHRoaXMuc3gsIHN5OiB0aGlzLnN5LCBzV2lkdGg6IHRoaXMuc1dpZHRoLCBzSGVpZ2h0OiB0aGlzLnNIZWlnaHRcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQnVsbGV0cyA9IGNyZWF0ZUJ1bGxldHM7XHJcbmZ1bmN0aW9uIGluaXRCdWxsZXRzKCkge1xyXG59XHJcbmV4cG9ydHMuaW5pdEJ1bGxldHMgPSBpbml0QnVsbGV0cztcclxuZnVuY3Rpb24gbW92ZUJ1bGxldHMocGxheWVyU2hpcERhdGEsIGdhbWVPYmplY3QpIHtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImJsYXN0ZXJcIjpcclxuICAgICAgICAgICAgbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYmVhbVwiOlxyXG4gICAgICAgICAgICBiZWFtLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RPd25lciA9PSBcInBsYXllclwiKVxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLmJ1bGxldFNwZWVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmVhbSgpIHtcclxuICAgICAgICB2YXIgc2NyZWVuRGF0YSA9IGdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggKz0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy53aWR0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCAtPSB0aGlzLmJ1bGxldFNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLm1vdmVCdWxsZXRzID0gbW92ZUJ1bGxldHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxuLy9pbXBvcnQgeyBsZXZlbENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vY29uc3RydWN0b3JzL2xldmVsQ29uc3RydWN0b3JzJztcclxuZnVuY3Rpb24gaW5pdEZpZWxkKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpIHtcclxuICAgIGlmIChzY3JlZW5XaWR0aCA9PT0gdm9pZCAwKSB7IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7IH1cclxuICAgIGlmIChzY3JlZW5IZWlnaHQgPT09IHZvaWQgMCkgeyBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IH1cclxuICAgIHZhciBnYW1lRmllbGQgPSBbXS5jb25jYXQodGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLCB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQsIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkKTtcclxuICAgIGlmICghZ2FtZUZpZWxkKVxyXG4gICAgICAgIHRocm93IEVycm9yKCdFcnJvcicpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBnYW1lRmllbGRfMSA9IGdhbWVGaWVsZDsgX2kgPCBnYW1lRmllbGRfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2NyZWVuXzEgPSBnYW1lRmllbGRfMVtfaV07XHJcbiAgICAgICAgc2NyZWVuXzEgPSBPYmplY3QuYXNzaWduKHNjcmVlbl8xLCB7IHdpZHRoOiBzY3JlZW5XaWR0aCAtIDQsIGhlaWdodDogc2NyZWVuSGVpZ2h0IC0gNCB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRGaWVsZCA9IGluaXRGaWVsZDtcclxuZnVuY3Rpb24gc2V0R2FtZUZpZWxkcygpIHtcclxuICAgIHRoaXMuaW5pdEZpZWxkKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRleHQoKTtcclxuICAgIHRoaXMuaW5pdFBsYXllclNoaXAoKTtcclxufVxyXG5leHBvcnRzLnNldEdhbWVGaWVsZHMgPSBzZXRHYW1lRmllbGRzO1xyXG5mdW5jdGlvbiB3YXJwRWZmZWN0KCkge1xyXG4gICAgdmFyIHNjcmVlblNpeiA9IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgdmFyIGN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmN0eDtcclxuICAgIHZhciBnYW1lV2FycE9iamVjdHMgPSB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cztcclxuICAgIHRoaXMuZ2V0U2Vjb25kTWVhc3VyZSh3YXJwVGltZXIsIHsgdGltZVRvRXJlc3NMZXZlbDogdGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCwgY3R4OiBjdHgsIHNjcmVlblNpejogdGhpcy5nZXRTY3JlZW5TaXplKCkgfSk7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cyA9IChnYW1lV2FycE9iamVjdHMubGVuZ3RoIDwgMzUwKSA/IHRoaXMuZ2FtZUluaXREYXRhLndhcnBPYmplY3RzLmNvbmNhdCh7XHJcbiAgICAgICAgeDogc2NyZWVuU2l6LndpZHRoLFxyXG4gICAgICAgIHk6IHRoaXMuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuU2l6LmhlaWdodCksXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWVSYW5kb21pemVyKDIwLCAxMCksXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIHNwZWVkOiB0aGlzLmdhbWVSYW5kb21pemVyKDEwLCA1KSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmdldFJhbmRvbUNvbG9yKCksXHJcbiAgICB9KSA6IHRoaXMuZ2FtZUluaXREYXRhLndhcnBPYmplY3RzO1xyXG4gICAgaWYgKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBnYW1lV2FycE9iamVjdHNfMSA9IGdhbWVXYXJwT2JqZWN0czsgX2kgPCBnYW1lV2FycE9iamVjdHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHdhcnBlciA9IGdhbWVXYXJwT2JqZWN0c18xW19pXTtcclxuICAgICAgICAgICAgd2FycGVyLnggLT0gKHdhcnBlci54ID4gMCkgPyB3YXJwZXIuc3BlZWQgOiAwO1xyXG4gICAgICAgICAgICB3YXJwZXIud2lkdGggPSAoZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDE1MCkgPyB3YXJwZXIud2lkdGggLSB3YXJwZXIuc3BlZWRcclxuICAgICAgICAgICAgICAgIDogKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPiAxNTAgJiYgZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDM1MCkgPyB3YXJwZXIud2lkdGggKyB3YXJwZXIuc3BlZWQgOiB3YXJwZXIud2lkdGggLSB3YXJwZXIuc3BlZWQ7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB3YXJwZXIuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5kcmF3KGN0eCwgJ2ZpbGxSZWN0Jywgd2FycGVyLngsIHdhcnBlci55LCB3YXJwZXIud2lkdGgsIHdhcnBlci5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhcnBUaW1lcihsZXZlbERhdGEpIHtcclxuICAgICAgICB2YXIgbGV2ZUNoYW5nZVN0YXR1cyA9ICh0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID49IDApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID49IDAgJiYgIWxldmVDaGFuZ2VTdGF0dXMpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA8IDAgJiYgIWxldmVDaGFuZ2VTdGF0dXMpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGV2ZWxQcm9jZWR1cmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLndhcnBFZmZlY3QgPSB3YXJwRWZmZWN0O1xyXG5mdW5jdGlvbiBsZXZlbEluaXQoR2FtZUJhY2tncm91bmQsIGN0eCwgbWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBnYW1lRGF0YSA9IHRoaXMuc2hvd0xldmVsRGF0YSgpO1xyXG4gICAgdmFyIGFsbEJhY2tncm91bmRFbGVtZW50cyA9IGdhbWVEYXRhLmxldmVsQmFja2dyb3VuZEVsZW1lbnRzO1xyXG4gICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmJhY2tTY3JlZW5QYXVzZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCYWNrZ3JvdW5kRWxlbWVudHNfMSA9IGFsbEJhY2tncm91bmRFbGVtZW50czsgX2kgPCBhbGxCYWNrZ3JvdW5kRWxlbWVudHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgbWFwT2JqZWN0ID0gYWxsQmFja2dyb3VuZEVsZW1lbnRzXzFbX2ldO1xyXG4gICAgICAgIHZhciBtYXBJdGVtID0gbmV3IEdhbWVCYWNrZ3JvdW5kKG1hcE9iamVjdC5sZXZlbE1hcCwgbWFwT2JqZWN0LnNwZWVkLCB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4sIGN0eCwgKHRoaXMuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzLmxlbmd0aCAlIDIgPT0gMCkgPyB0cnVlIDogbnVsbCwgKG1hcE9iamVjdC5leHRyYU1hcCkgPyBtYXBPYmplY3QuZXh0cmFNYXAgOiBudWxsLCAobWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwU2Vjb25kcykgPyBtYXBPYmplY3QudGltZVRvRXh0cmFNYXBTZWNvbmRzIDogbnVsbCwgKG1hcE9iamVjdC50aW1lVG9FeHRyYU1hcE1pbnV0ZXMpID8gbWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwTWludXRlcyA6IG51bGwpO1xyXG4gICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0cy5jb25jYXQobWFwSXRlbSk7XHJcbiAgICAgICAgbWFwSXRlbS5pbWcuc3JjID0gX19kaXJuYW1lICsgbWFwSXRlbS5iYWNrZ3JvdW5kVGV4dHVyZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmxldmVsSW5pdCA9IGxldmVsSW5pdDtcclxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dCgpIHtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVGaWVsZC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZC5nZXRDb250ZXh0KCcyZCcpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XHJcbmZ1bmN0aW9uIGdldFNjcmVlblNpemUoKSB7XHJcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGhlaWdodCA9IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQ7XHJcbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbn1cclxuZXhwb3J0cy5nZXRTY3JlZW5TaXplID0gZ2V0U2NyZWVuU2l6ZTtcclxuZnVuY3Rpb24gY2hhbmdlTGV2ZWxQcm9jZWR1cmUoKSB7XHJcbiAgICAvLyBhbmltYXRpb24gZm9yIHdhcnAsIGh0dHAgcmVxdWVzdCBmb3IgbGV2ZWwgYW5kIGVuZW15ZXMsIDEwIGxldmVscyBtdXN0IGJlXHJcbiAgICAvLyBzb21lIGxldmVscyBtdXN0IGNvbnRhaW4gYm9zcyBhdCBsZWFzdCAyIGJvc3NcclxuICAgIC8vIGxhc3QgbGV2ZWwgaXMgZmluYWwgdGl0bGVzIHRoZSBlbmQgc2F2ZSBzY29yZVxyXG4gICAgdmFyIGxldmVsRGF0YSA9IHRoaXMuc2hvd0dhbWVJbmZvKCk7XHJcbiAgICB2YXIgbGV2ZWwgPSB0aGlzLmNoYW5nZUxldmVsKGxldmVsRGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWwgKyAxKTtcclxuICAgIGlmIChsZXZlbCA8PSBsZXZlbERhdGEuZ2FtZURhdGEubGV2ZWxEYXRhLmFsbExldmVscykge1xyXG4gICAgICAgIHRoaXMubmV4dExldmVsRGF0YVJlbG9hZChsZXZlbERhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVdpbiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VMZXZlbFByb2NlZHVyZSA9IGNoYW5nZUxldmVsUHJvY2VkdXJlO1xyXG5mdW5jdGlvbiBsZXZlbFRpbWVyKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIGlmICghZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmJvc1ByZXNlbnRzKSB7XHJcbiAgICAgICAgdmFyIGxldmVsVGltZSA9IGRhdGEuc291cnNlLmxldmVsRGF0YS5sZXZlbERldGFpbHM7IC8vIHsgbGV2ZWxNaW51dGVzOiAzLCBsZXZlbFNlY29uZHM6IDQzIH1cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLmdldFNlY29uZE1lYXN1cmUobGV2ZWxUaW1lQWN0aW9uLCBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRhdGEuc291cnNlLmxldmVsRGF0YS5sZXZlbERldGFpbHMubGV2ZWxTZWNvbmRzID0gbnVsbDtcclxuICAgICAgICBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzLmxldmVsTWludXRlcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsZXZlbFRpbWVBY3Rpb24odGltZSkge1xyXG4gICAgICAgIGlmICh0aW1lLmxldmVsU2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lLmxldmVsTWludXRlcyA9PSAwICYmIHRpbWUubGV2ZWxTZWNvbmRzID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRpbWUubGV2ZWxTZWNvbmRzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lLmxldmVsTWludXRlcyA9ICh0aW1lLmxldmVsTWludXRlcyA+IDApID8gdGltZS5sZXZlbE1pbnV0ZXMgLSAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZS5sZXZlbFNlY29uZHMgPSAodGltZS5sZXZlbFNlY29uZHMgPiAwKSA/IHRpbWUubGV2ZWxTZWNvbmRzIC0gMSA6ICh0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSkgPyAwIDogNTk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5sZXZlbFRpbWVyID0gbGV2ZWxUaW1lcjtcclxuZnVuY3Rpb24gZ2V0U2Vjb25kTWVhc3VyZShjYWxsYmFjaykge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZVNlY29uZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU2Vjb25kID0gMTAwMCAvIHRoaXMuZ2FtZUluaXREYXRhLmludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5nYW1lSW5pdERhdGEuZ2VtZUV4dHJhU2Vjb25kcyAlIGdhbWVTZWNvbmQgPT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdlbWVFeHRyYVNlY29uZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNhbGxiYWNrXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9hLnNlbnQoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2FsbGJhY2suY2FsbC5hcHBseShjYWxsYmFjaywgX19zcHJlYWRBcnJheXMoW3RoaXNdLCBkYXRhKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdhbWVTZWNvbmRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0U2Vjb25kTWVhc3VyZSA9IGdldFNlY29uZE1lYXN1cmU7XHJcbmZ1bmN0aW9uIGdhbWVTZWNvbmRzSW5jcmVhc2UoKSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nZW1lRXh0cmFTZWNvbmRzICs9IDE7XHJcbn1cclxuZXhwb3J0cy5nYW1lU2Vjb25kc0luY3JlYXNlID0gZ2FtZVNlY29uZHNJbmNyZWFzZTtcclxuZnVuY3Rpb24gZ2V0TGV2ZWxVc2VyRGF0YSgpIHtcclxuICAgIHZhciBkYXRhU291cnNlID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGE7XHJcbiAgICB2YXIgbGV2ZWxUaW1lID0gZGF0YVNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzb3Vyc2U6IGRhdGFTb3Vyc2UsXHJcbiAgICAgICAgY3VycmVudExldmVsOiBkYXRhU291cnNlLmN1cnJlbnRMZXZlbCxcclxuICAgICAgICBhbGxMZXZlbHM6IGRhdGFTb3Vyc2UubGV2ZWxEYXRhLmFsbExldmVscyxcclxuICAgICAgICBwb2ludHM6IGRhdGFTb3Vyc2UuY3VycmVudFBvaW50LFxyXG4gICAgICAgIGxpZmU6IGRhdGFTb3Vyc2UucGxheWVyT2JqZWN0Lm51bWJlck9mbGlmZSxcclxuICAgICAgICBtaW51dGVzOiBsZXZlbFRpbWUubGV2ZWxNaW51dGVzLFxyXG4gICAgICAgIHNlY29uZHM6IGxldmVsVGltZS5sZXZlbFNlY29uZHNcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5nZXRMZXZlbFVzZXJEYXRhID0gZ2V0TGV2ZWxVc2VyRGF0YTtcclxuZnVuY3Rpb24gZGVsZXRlQnVsbGV0KGJ1bGxldCkge1xyXG4gICAgaWYgKGJ1bGxldC54ID4gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoXHJcbiAgICAgICAgfHwgYnVsbGV0LnggPCBidWxsZXQud2lkdGggKiAtMVxyXG4gICAgICAgIHx8ICFidWxsZXQub2JqZWN0UHJlc2VudCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLmluZGV4T2YoYnVsbGV0KTtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVsZXRlQnVsbGV0ID0gZGVsZXRlQnVsbGV0O1xyXG5mdW5jdGlvbiBkZWxldGVPYmplY3RzKG9iamVjdCkge1xyXG4gICAgaWYgKG9iamVjdC54ICsgb2JqZWN0LnNXaWR0aCA8IDAgfHwgIW9iamVjdC5vYmplY3RQcmVzZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWxldGVPYmplY3RzID0gZGVsZXRlT2JqZWN0cztcclxuZnVuY3Rpb24gZGVsYXRlU2lkZU9iamVjdChvYmplY3QpIHtcclxuICAgIGlmICghb2JqZWN0Lm9iamVjdFByZXNlbnQgfHwgb2JqZWN0LnggPCAwIC0gb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlbGF0ZVNpZGVPYmplY3QgPSBkZWxhdGVTaWRlT2JqZWN0O1xyXG5mdW5jdGlvbiBjb2xsZWN0UG9pbnRzKHBvaW50KSB7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50UG9pbnQgKz0gcG9pbnQ7XHJcbn1cclxuZXhwb3J0cy5jb2xsZWN0UG9pbnRzID0gY29sbGVjdFBvaW50cztcclxuZnVuY3Rpb24gZ2V0T2JqZWN0UG9zaXRpb24oKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IHRoaXM7XHJcbiAgICB2YXIgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogbWFpbk9iamVjdC54LFxyXG4gICAgICAgIHk6IG1haW5PYmplY3QueSxcclxuICAgICAgICB3aWR0aDogbWFpbk9iamVjdC53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG1haW5PYmplY3QuaGVpZ2h0LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxufVxyXG5leHBvcnRzLmdldE9iamVjdFBvc2l0aW9uID0gZ2V0T2JqZWN0UG9zaXRpb247XHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XHJcbiAgICB2YXIgY29sb3IgPSAnIyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxufVxyXG5leHBvcnRzLmdldFJhbmRvbUNvbG9yID0gZ2V0UmFuZG9tQ29sb3I7XHJcbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShpdGVtcykge1xyXG4gICAgdmFyIGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcbiAgICBsb29wVmVydGljYWwoaXRlbXMpO1xyXG4gICAgZnVuY3Rpb24gbG9vcFZlcnRpY2FsKG9iamVjdCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbCA9IF9iWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wVmVydGljYWwob2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFzc2lnbmltYWdlKGtleSwgdmFsLCBpbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXNzaWduaW1hZ2Uoa2V5LCB2YWwsIGltYWdlKSB7XHJcbiAgICAgICAgaWYgKGtleSA9PSAnc2tpbk5hbWUnIHx8IGtleSA9PSAndGV4dHVyZScgfHwga2V5ID09ICdsZXZlbE1hcCcpIHtcclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IF9fZGlybmFtZSArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wcmVsb2FkSW1hZ2UgPSBwcmVsb2FkSW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0KG1haW5HYW1lT2JqZWN0LCB0YXJnZXQsIEdyYXBwbGVPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZUluZm8sIGdhbWVEYXRhLCBzY3JlZW5EYXRhLCBjb250ZXh0LCBzaWRlT2JqZWN0LCBvYmplY3REYXRhLCBncmFwcGxlT2JqZWN0LCBfYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW5mbyA9IG1haW5HYW1lT2JqZWN0LnNob3dHYW1lSW5mbygpLCBnYW1lRGF0YSA9IGdhbWVJbmZvLmdhbWVEYXRhLCBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBtYWluR2FtZU9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAodGFyZ2V0LngpID8gdGFyZ2V0LnggKyBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNpZGVPYmplY3Qud2lkdGgpIDogc2NyZWVuRGF0YS53aWR0aCArIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogKHRhcmdldC55KSA/IHRhcmdldC55ICsgY29udGV4dC5nYW1lUmFuZG9taXplcihzaWRlT2JqZWN0LmhlaWdodCkgOiBjb250ZXh0LmdhbWVSYW5kb21pemVyKHNjcmVlbkRhdGEuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogdGFyZ2V0Lm9iamVjdE93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHRhcmdldC5pbWFnZVdpZHRoIC8gdGFyZ2V0Lm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNIZWlnaHQ6IHRhcmdldC5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldC53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXQuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwczogdGFyZ2V0LmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mSXRlbXM6IHRhcmdldC5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB0YXJnZXQuc2tpbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB0YXJnZXQuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IHRhcmdldC5pbWFnZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhQb2ludDogdGFyZ2V0LmhlYWx0aFBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2U6IHRhcmdldC5kYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQmFja2dyb3VuZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uOiB0YXJnZXQuZXhwbG9zaW9uQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNQZXJVbml0OiB0YXJnZXQucG9pbnRzUGVyVW5pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmFwcGxlOiB0YXJnZXQuaXNHcmFwcGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlUG93ZXI6IHRhcmdldC5ncmFwcGxlUG93ZXJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3QgPSBuZXcgR3JhcHBsZU9iamVjdChfX2Fzc2lnbih7fSwgb2JqZWN0RGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3QuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmNvbmNhdChncmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gZ3JhcHBsZU9iamVjdC5pbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ3JhcHBsZU9iamVjdC50ZXh0dXJlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zcmMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0ID0gbG9hZEdyYWJibGVUb1NpZGVPYmplY3Q7XHJcbmZ1bmN0aW9uIGluaXRHcmFwcGxlT2JqZWN0KEdyYXBwbGVPYmplY3QsIHBsYXllclNoaXBEYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdhbWVJbmZvLCBnYW1lRGF0YSwgbGV2ZWxEYXRhLCBncmFwcGxlRGF0YSwgc2NyZWVuRGF0YSwgc3Bhd25Qcm9iYWJpbGl0eSwgcmFuZG9tT2JqZWN0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmdyYXBwbGVPYmplY3RPblNjcmVlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIGdhbWVJbmZvID0gdGhpcy5zaG93R2FtZUluZm8oKSwgZ2FtZURhdGEgPSBnYW1lSW5mby5nYW1lRGF0YSwgbGV2ZWxEYXRhID0gZ2FtZURhdGEubGV2ZWxEYXRhLCBncmFwcGxlRGF0YSA9IGdhbWVEYXRhLmdyYXBwbGVPYmplY3RzLCBzY3JlZW5EYXRhID0gdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgIHNwYXduUHJvYmFiaWxpdHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5ncmFwbGVPYmplY3RQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgIGlmIChzcGF3blByb2JhYmlsaXR5IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tT2JqZWN0ID0gZ3JhcHBsZURhdGFbdGhpcy5nYW1lUmFuZG9taXplcihncmFwcGxlRGF0YS5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tT2JqZWN0LmdyYXBwbGVQb3dlci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxpZmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclNoaXBEYXRhLm51bWJlck9mbGlmZSA+PSBwbGF5ZXJTaGlwRGF0YS5tYXhPZkxpZmUgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvYWRHcmFiYmxlVG9TaWRlT2JqZWN0KHRoaXMsIHJhbmRvbU9iamVjdCwgR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5pbml0R3JhcHBsZU9iamVjdCA9IGluaXRHcmFwcGxlT2JqZWN0O1xyXG5mdW5jdGlvbiBhZGRQbGF5ZXJMaWZlKF9hKSB7XHJcbiAgICB2YXIgYWxsR2FtZVNpZGVPYmplY3RzID0gX2EuYWxsR2FtZVNpZGVPYmplY3RzLCBwbGF5ZXJTaGlwRGF0YSA9IF9hLnBsYXllclNoaXBEYXRhLCBtYWluR2FtZU9iamVjdCA9IF9hLm1haW5HYW1lT2JqZWN0O1xyXG4gICAgcGxheWVyU2hpcERhdGEubnVtYmVyT2ZsaWZlICs9IHRoaXMuZ3JhcHBsZVBvd2VyLnZhbHVlO1xyXG59XHJcbmV4cG9ydHMuYWRkUGxheWVyTGlmZSA9IGFkZFBsYXllckxpZmU7XHJcbmZ1bmN0aW9uIGNvbGxlY3RDb2luKF9hKSB7XHJcbiAgICB2YXIgYWxsR2FtZVNpZGVPYmplY3RzID0gX2EuYWxsR2FtZVNpZGVPYmplY3RzLCBwbGF5ZXJTaGlwRGF0YSA9IF9hLnBsYXllclNoaXBEYXRhLCBtYWluR2FtZU9iamVjdCA9IF9hLm1haW5HYW1lT2JqZWN0O1xyXG4gICAgdmFyIGdhbWVJbmZvID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCksIGdhbWVEYXRhID0gZ2FtZUluZm8uZ2FtZURhdGEsIGxldmVsRGF0YSA9IGdhbWVEYXRhLmxldmVsRGF0YSwgZ3JhcHBsZURhdGEgPSBnYW1lRGF0YS5ncmFwcGxlT2JqZWN0cztcclxuICAgIGdhbWVEYXRhLmdhbWVDb2lucyArPSB0aGlzLmdyYXBwbGVQb3dlci52YWx1ZTtcclxufVxyXG5leHBvcnRzLmNvbGxlY3RDb2luID0gY29sbGVjdENvaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2F0YXJ0R2FtZV8xID0gcmVxdWlyZShcIi4vc2F0YXJ0R2FtZVwiKTtcclxuZnVuY3Rpb24gbmV4dExldmVsRGF0YVJlbG9hZChsZXZlbERhdGEpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBob3Jpem9udGFsVmVydGljYWxTZWFyY2gobWFpbk9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWFpbk9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYWluT2JqZWN0W2tleV0gPT0gJ29iamVjdCcgJiYgdmFsdWUgIT0gbnVsbCAmJiAhbWFpbk9iamVjdFtrZXldLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxWZXJ0aWNhbFNlYXJjaChtYWluT2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXNzaWduVmFsdWUuY2FsbCh0aGlzLCBrZXksIG1haW5PYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFzc2lnblZhbHVlKGluY29tZUtleSwgbWFpbkRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKHJlZnJlc2hMZXZlbCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWwgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaW5jb21lS2V5ICYmIHZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGFba2V5XSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV4dExldmVsLCBzZXJ2ZXJOZXdEYXRhLCBjb250ZXh0LCByZWZyZXNoTGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExldmVsID0gbGV2ZWxEYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzYXRhcnRHYW1lXzEuc2VydmVyUmVxdWVzdCh7IGxldmVsOiBuZXh0TGV2ZWwsIHNoaXBDb25maWd1cmF0aW9uOiAxIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJOZXdEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hMZXZlbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbDogbmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvaW50OiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50UG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPYmplY3Q6IGNvbnRleHQuZ2FtZUluaXREYXRhLmdhbWVEYXRhLnBsYXllck9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb2luczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZUNvaW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiBzZXJ2ZXJOZXdEYXRhLmxldmVsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0czogc2VydmVyTmV3RGF0YS5sZXZlbE9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czogc2VydmVyTmV3RGF0YS5ncmFwcGxlT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogc2VydmVyTmV3RGF0YS5lbmVteURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY29udHJvbGxlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lU2lkZU9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lRW5lbWllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVCdWxsZXRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZU1hcE9CamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBCYWNrZ3JvdW5kT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVaVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja1NjcmVlblBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RPblNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbWVFeHRyYVNlY29uZHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEud2FycE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFZlcnRpY2FsU2VhcmNoLmNhbGwodGhpcywgdGhpcy5nYW1lSW5pdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gbmV4dExldmVsRGF0YVJlbG9hZDtcclxuZnVuY3Rpb24gY2hhbmdlU2hpcCgpIHtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VXZWFwb24oKSB7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NhdGFydEdhbWVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jaGFuZ2VMZXZlbHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciByZW1vdGUgPSByZXF1aXJlKCdlbGVjdHJvbicpLnJlbW90ZTtcclxuZnVuY3Rpb24gc2VydmVyUmVxdWVzdChnYW1lSW5mb3JtYXRpb24pIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VydmVyTG9jYXRpb24sIGxldmVsRGF0YSwgbGV2ZWxPYmplY3RzLCBncmFwcGxlT2JqZWN0cywgZ2FtZVNldGluZ3MsIHVzZXJEYXRhLCBlbmVteURhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYsIHByb2Nlc3MuZW52LkhPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5IT1NULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc0RpcmVjdGlvbjogX19kaXJuYW1lICsgJy9wdWJsaWMvaW1hZ2VzLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9sZXZlbC1kYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2xldmVsLW9iamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9ncmFwcGxlLW9iamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9nYW1lLXNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNoaXA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvdXNlci1zaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlsRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS9lbmVteS1zaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmxldmVsRGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmxldmVsRGF0YS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnbWFwbGV2ZWwnOiBnYW1lSW5mb3JtYXRpb24ubGV2ZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5sZXZlbE9iamVjdHMudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzZXJ2ZXJMb2NhdGlvbi5sZXZlbE9iamVjdHMubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ21hcE9iamVjdCc6IGxldmVsRGF0YS5sZXZlbE9CamVjdHMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi5ncmFwcGxlT2JqZWN0cy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmdyYXBwbGVPYmplY3RzLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdncmFwcGxlT2JqZWN0JzogbGV2ZWxEYXRhLmdyYXBwbGVPYmplY3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmdhbWVTZXRpbmdzLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24uZ2FtZVNldGluZ3MubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi51c2VyU2hpcC51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLnVzZXJTaGlwLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICd1c2Vyc2hpcCc6IGdhbWVJbmZvcm1hdGlvbi5zaGlwQ29uZmlndXJhdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24uZW5lbXlsRGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmVuZW15bERhdGEubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3NoaXAtdHlwZS1udW1iZXInOiBsZXZlbERhdGEuZW5lbXlUeXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmVNb2R1bGVzXzEucHJlbG9hZEltYWdlKGVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lTW9kdWxlc18xLnByZWxvYWRJbWFnZShsZXZlbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZU1vZHVsZXNfMS5wcmVsb2FkSW1hZ2UobGV2ZWxPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiBsZXZlbERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IGxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBwbGVPYmplY3RzOiBncmFwcGxlT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBnYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhOiB1c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogZW5lbXlEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNlcnZlclJlcXVlc3QgPSBzZXJ2ZXJSZXF1ZXN0O1xyXG5mdW5jdGlvbiBnYW1lRGF0YUluaXQoUGxheWVyU2hpcCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBnYW1lRmllbGQsIGdhbWVBY3Rpb25GaWVsZCwgZ2FtZVVJZmllbGQsIGxldmVsLCBzaGlwVHlwZSwgc2hpcExpZmUsIHJlcywgbGV2ZWxEYXRhLCBsZXZlbE9iamVjdHMsIGdyYXBwbGVPYmplY3RzLCBnYW1lU2V0aW5ncywgdXNlckRhdGEsIGVuZW15RGF0YTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWZpZWxkJyksIGdhbWVBY3Rpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT2JqZWN0c2ZpZWxkJyksIGdhbWVVSWZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVVaWZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSA0LCBzaGlwVHlwZSA9IDEsIHNoaXBMaWZlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0KHsgbGV2ZWw6IGxldmVsLCBzaGlwQ29uZmlndXJhdGlvbjogc2hpcFR5cGUgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGEgPSByZXMubGV2ZWxEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsT2JqZWN0cyA9IHJlcy5sZXZlbE9iamVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHMgPSByZXMuZ3JhcHBsZU9iamVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3MgPSByZXMuZ2FtZVNldGluZ3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEgPSByZXMudXNlckRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlEYXRhID0gcmVzLmVuZW15RGF0YTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVGaWVsZDogKGdhbWVGaWVsZCkgPyBnYW1lRmllbGQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVBY3Rpb25GaWVsZDogKGdhbWVBY3Rpb25GaWVsZCkgPyBnYW1lQWN0aW9uRmllbGQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVSUZpZWxkOiAoZ2FtZVVJZmllbGQpID8gZ2FtZVVJZmllbGQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbDogbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb2ludDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUNvaW5zOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPYmplY3Q6IG5ldyBQbGF5ZXJTaGlwKHVzZXJEYXRhLCAwLCAzMDAsIHNoaXBMaWZlLCAxMDAsIDEwMCwgdXNlckRhdGEuc2l6ZS53aWR0aCwgdXNlckRhdGEuc2l6ZS5oZWlnaHQsIHVzZXJEYXRhLmRhbWFnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IGxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcHBsZU9iamVjdHM6IGdyYXBwbGVPYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5nczogZ2FtZVNldGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogZW5lbXlEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsQ291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lU2lkZU9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVFbmVtaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lQnVsbGV0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZU1hcE9CamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEJhY2tncm91bmRPYmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJwT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVRvRXJlc3NMZXZlbDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lVWlQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja1NjcmVlblBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lV2luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwcGxlT2JqZWN0T25TY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbWVFeHRyYVNlY29uZHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdhbWVEYXRhSW5pdCA9IGdhbWVEYXRhSW5pdDtcclxuZnVuY3Rpb24gZ2FtZUVuZ2luZShnYW1lRGF0YUluaXQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2FtZUVuZ2luZSA9IGdhbWVFbmdpbmU7XHJcbmZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzID0gdHJ1ZTtcclxufVxyXG5leHBvcnRzLmdhbWVTdGFydCA9IGdhbWVTdGFydDtcclxuZnVuY3Rpb24gYmFja1RvU3RhcnRTY3JlZW4oUGxheWVyU2hpcCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdJbml0ZGF0YSwgX2ksIF9hLCBfYiwga2V5LCB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2FtZURhdGFJbml0KFBsYXllclNoaXApXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbml0ZGF0YSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhuZXdJbml0ZGF0YS5kYXRhKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5iYWNrVG9TdGFydFNjcmVlbiA9IGJhY2tUb1N0YXJ0U2NyZWVuO1xyXG5mdW5jdGlvbiBleGl0VGhlR2FtZSgpIHtcclxuICAgIHZhciB3ID0gcmVtb3RlLmdldEN1cnJlbnRXaW5kb3coKTtcclxuICAgIHcuY2xvc2UoKTtcclxufVxyXG5leHBvcnRzLmV4aXRUaGVHYW1lID0gZXhpdFRoZUdhbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbmZ1bmN0aW9uIGV4cGxvc2lvbkZpcmUodGFyZ2V0RGF0YSwgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgU2lkZU9iamVjdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoaXRYLCB0YXJnZXRYLCBhZGp1c3QsIGNvbXBlbnNhdGlvbiwgZXhwbG9zaW9uRGF0YSwgc2lkZU9iamVjdCwgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0WCA9IGhpdE9iamVjdC54ICsgaGl0T2JqZWN0LndpZHRoIC8gMiwgdGFyZ2V0WCA9IHRhcmdldERhdGEueCArIHRhcmdldERhdGEud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdCA9IE1hdGgubWF4KGhpdFgsIHRhcmdldFgpIC0gTWF0aC5taW4oaGl0WCwgdGFyZ2V0WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGVuc2F0aW9uID0gKGhpdE9iamVjdC54ID4gdGFyZ2V0RGF0YS54KSA/IGFkanVzdCA6IGFkanVzdCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGFyZ2V0RGF0YS54IC0gdGFyZ2V0RGF0YS5leHBsb3Npb24ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAodGFyZ2V0RGF0YS5idWxsZXRUeXBlKSA/IHRhcmdldERhdGEueSAtIHRhcmdldERhdGEuZXhwbG9zaW9uLndpZHRoIC8gMiA6IHRhcmdldERhdGEueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogXCJleHBsb3Npb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc1dpZHRoOiB0YXJnZXREYXRhLmV4cGxvc2lvbi5pbWFnZVdpZHRoIC8gdGFyZ2V0RGF0YS5leHBsb3Npb24ubnVtYmVyT2ZJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc0hlaWdodDogdGFyZ2V0RGF0YS5leHBsb3Npb24uaW1hZ2VIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0YXJnZXREYXRhLmV4cGxvc2lvbi53aWR0aCAqIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0RGF0YS5leHBsb3Npb24ud2lkdGggKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwczogdGFyZ2V0RGF0YS5leHBsb3Npb24uYW5pbWF0aW9uU3RlcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogaGl0T2JqZWN0Lm9iamVjdE93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkl0ZW1zOiB0YXJnZXREYXRhLmV4cGxvc2lvbi5pbWFnZVdpZHRoIC8gdGFyZ2V0RGF0YS5leHBsb3Npb24ubnVtYmVyT2ZJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogdGFyZ2V0RGF0YS5leHBsb3Npb24udGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IGhpdE9iamVjdC5zcGVlZCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IHRhcmdldERhdGEuZXhwbG9zaW9uLmltYWdlV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3QgPSBuZXcgU2lkZU9iamVjdChfX2Fzc2lnbih7fSwgZXhwbG9zaW9uRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3QuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuY29uY2F0KHNpZGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBzaWRlT2JqZWN0LmltZztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzaWRlT2JqZWN0LnRleHR1cmVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNyYyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZXhwbG9zaW9uRmlyZSA9IGV4cGxvc2lvbkZpcmU7XHJcbmZ1bmN0aW9uIGZpcmVBbmltYXRpb25FbmRlZChhbGxHYW1lU2lkZU9iamVjdHMpIHtcclxuICAgIHRoaXMuZGV0ZWN0RnJhbWUgKz0gMTtcclxuICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5hbmltYXRpb25TdGVwcyA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zeCArPSB0aGlzLnNXaWR0aDtcclxuICAgICAgICBpZiAodGhpcy5zeCA+PSB0aGlzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN4ID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmZpcmVBbmltYXRpb25FbmRlZCA9IGZpcmVBbmltYXRpb25FbmRlZDtcclxuZnVuY3Rpb24gbWFwT2JqZWN0TW92ZSgpIHtcclxuICAgIHRoaXMueCAtPSAodGhpcy5zcGVlZCkgPyB0aGlzLnNwZWVkIDogMztcclxufVxyXG5leHBvcnRzLm1hcE9iamVjdE1vdmUgPSBtYXBPYmplY3RNb3ZlO1xyXG5mdW5jdGlvbiBtYXBSYW5vbU9iamVjdFNwYXduKGxldmVsT2JqZWN0cywgU2lkZU9iamVjdCwgYWxsR2FtZVNpZGVPYmplY3RzKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gbWFwT2JqZWN0U3Bhd25lcihsZXZlbE9iamVjdHMsIFNpZGVPYmplY3QsIGFsbEdhbWVTaWRlT2JqZWN0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2FtZURhdGEsIGxldmVsRGF0YSwgc3Bhd25Qcm9iYWJpbGl0eSwgc2NyZWVuRGF0YSwgbGV2ZWxPYmplY3RQcm9wcywgeVBvc2l0aW9uLCBleHRyYU9iamVjdHMsIF9hLCBleHBsb3Npb25EYXRhLCBzaWRlT2JqZWN0XzE7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEgPSB0aGlzLnNob3dHYW1lSW5mbygpLmdhbWVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhID0gZ2FtZURhdGEubGV2ZWxEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25Qcm9iYWJpbGl0eSA9IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxEYXRhLm9iamVjdFByb2JhYmlsaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHNwYXduUHJvYmFiaWxpdHkgPCBsZXZlbERhdGEub2JqZWN0TWluVGltZVNwYXduKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5EYXRhID0gdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdFByb3BzID0gbGV2ZWxPYmplY3RzW3RoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uID0gKGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09IFwiYm90dG9tXCIgJiYgdHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHNjcmVlbkRhdGEuaGVpZ2h0IC0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbE9iamVjdFByb3BzLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PSBcInRvcFwiICYmIHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0IC8gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAobGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb24gPT0gXCJzY2VuZVwiICYmIHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHRoaXMuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuRGF0YS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGxldmVsT2JqZWN0UHJvcHMuZXh0cmFPYmplY3RzKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5sb2FkRXh0cmFPYmplY3QuY2FsbCh0aGlzLCBsZXZlbE9iamVjdFByb3BzLmV4dHJhT2JqZWN0cyldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYU9iamVjdHMgPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbkRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2NyZWVuRGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB5UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0T3duZXI6IGxldmVsT2JqZWN0UHJvcHMub2JqZWN0T3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1dpZHRoOiBsZXZlbE9iamVjdFByb3BzLmltYWdlV2lkdGggLyBsZXZlbE9iamVjdFByb3BzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc0hlaWdodDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGV2ZWxPYmplY3RQcm9wcy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxldmVsT2JqZWN0UHJvcHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBzOiBsZXZlbE9iamVjdFByb3BzLmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkl0ZW1zOiBsZXZlbE9iamVjdFByb3BzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogbGV2ZWxPYmplY3RQcm9wcy5za2luTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogbGV2ZWxPYmplY3RQcm9wcy5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlc1dpZHRoOiBsZXZlbE9iamVjdFByb3BzLmltYWdlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoUG9pbnQ6IGxldmVsT2JqZWN0UHJvcHMuaGVhbHRoUG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlOiBsZXZlbE9iamVjdFByb3BzLmRhbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JhY2tncm91bmQ6IGxldmVsT2JqZWN0UHJvcHMuaXNCYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbjogbGV2ZWxPYmplY3RQcm9wcy5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzUGVyVW5pdDogbGV2ZWxPYmplY3RQcm9wcy5wb2ludHNQZXJVbml0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhT2JqZWN0czogZXh0cmFPYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdF8xID0gbmV3IFNpZGVPYmplY3QoX19hc3NpZ24oe30sIGV4cGxvc2lvbkRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVPYmplY3RfMS5pbWcuc3JjID0gc2lkZU9iamVjdF8xLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlT2JqZWN0XzEuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzID0gX3RoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5jb25jYXQoc2lkZU9iamVjdF8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlY29uZE1lYXN1cmUobWFwT2JqZWN0U3Bhd25lciwgbGV2ZWxPYmplY3RzLCBTaWRlT2JqZWN0LCBhbGxHYW1lU2lkZU9iamVjdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLm1hcFJhbm9tT2JqZWN0U3Bhd24gPSBtYXBSYW5vbU9iamVjdFNwYXduO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2FtZVNpZGVPYmplY3RzTW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGxheWVyU2hpcE1vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VuZ2luZU1vZHVsZXNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9idWxsZXRzTW9kdWxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYmFja2dyb3VuZE1vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2FwcEVycm9yTGlzdE1vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhbWVHcmFwcGxlT2JqZWN0c01vZHVsZVwiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vY29uc3RydWN0b3JzL1wiKSk7XHJcbnZhciB2aWV3ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi92aWV3L1wiKSk7XHJcbmZ1bmN0aW9uIGluaXRQbGF5ZXJTaGlwKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuY3R4KSB7XHJcbiAgICAgICAgdmFyIGltYWdlID0gdGhpcy5kYXRhLnRleHR1cmUsIGltYWdlTG9jYXRpb24gPSBtYWluR2FtZU9iamVjdC5zaG93R2FtZUluZm8oKS5pbWFnZURpcnJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wbGFjZVBsYXllclNoaXApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBsYWNlUGxheWVyU2hpcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5pbWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBpbWFnZUxvY2F0aW9uICsgaW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbml0UGxheWVyU2hpcCA9IGluaXRQbGF5ZXJTaGlwO1xyXG5mdW5jdGlvbiBtb3ZlUGxheWVyU2hpcCgpIHtcclxuICAgIGlmICh0aGlzLmltZykge1xyXG4gICAgICAgIGlmICh0aGlzLmN0eCAmJiB0aGlzLmltZykge1xyXG4gICAgICAgICAgICB2aWV3LmNyZWF0ZUltYWdlKHRoaXMuY3R4LCB0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlUGxheWVyU2hpcCA9IG1vdmVQbGF5ZXJTaGlwO1xyXG5mdW5jdGlvbiBzaGlwQ29udHJvbChtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBjb250cm9sS2V5cyA9IG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncy5rZXlDb250cm9scztcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMuZG93bi5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIF90aGlzLm1vdmVTaGlwKHsgeFBvczogMCwgeVBvczogX3RoaXMuZGF0YS5zcGVlZCB9KTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMubGVmdC5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIF90aGlzLm1vdmVTaGlwKHsgeFBvczogX3RoaXMuZGF0YS5zcGVlZCAqIC0xLCB5UG9zOiAwIH0pO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5yaWdodC5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIF90aGlzLm1vdmVTaGlwKHsgeFBvczogX3RoaXMuZGF0YS5zcGVlZCwgeVBvczogMCB9KTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMudXAuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IDAsIHlQb3M6IF90aGlzLmRhdGEuc3BlZWQgKiAtMSB9KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiQ0FOVkFTXCJcclxuICAgICAgICAgICAgJiYgIW1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2VcclxuICAgICAgICAgICAgJiYgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBlLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBfdGhpcy54RmluYWwgPSAoKHggJSBfdGhpcy5kYXRhLnNwZWVkID09IDApID8geCA6IF90aGlzLmRhdGEuc3BlZWQgKiBNYXRoLmZsb29yKHggLyBfdGhpcy5kYXRhLnNwZWVkKSkgLSAoX3RoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgX3RoaXMueUZpbmFsID0gKCh5ICUgX3RoaXMuZGF0YS5zcGVlZCA9PSAwKSA/IHkgOiBfdGhpcy5kYXRhLnNwZWVkICogTWF0aC5mbG9vcih5IC8gX3RoaXMuZGF0YS5zcGVlZCkpIC0gKF90aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZ3VucyA9IF90aGlzLmRhdGEuZ3VucztcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSBuZXcgY29uc3RydWN0b3JzLkJ1bGxldENvbnN0cnVjdChfdGhpcy54LCBfdGhpcy55ICsgaXRlbS5maXJlUG9zaXRpb24sIGl0ZW0ubmFtZSwgaXRlbS5jb2xvciwgXCJwbGF5ZXJcIiwgaXRlbS5zcGVlZCArIF90aGlzLnhBZGosIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0LCBpdGVtLmRhbWFnZSwgaXRlbS50eXBlLCBpdGVtLnRleHR1cmUsIGl0ZW0uc3gsIGl0ZW0uc3ksIGl0ZW0uc1dpZHRoLCBpdGVtLnNIZWlnaHQsIGl0ZW0uZXhwbG9zaW9uQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgYnVsbGV0LmltZy5zcmMgPSBidWxsZXQudGV4dHVyZTtcclxuICAgICAgICAgICAgYnVsbGV0LmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMuY29uY2F0KGJ1bGxldCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGd1bnNfMSA9IGd1bnM7IF9pIDwgZ3Vuc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGd1bnNfMVtfaV07XHJcbiAgICAgICAgICAgIF9sb29wXzEoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaGlwQ29udHJvbCA9IHNoaXBDb250cm9sO1xyXG5mdW5jdGlvbiBzZXRDb250ZXh0KGNvbnRleHQpIHtcclxuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcclxufVxyXG5leHBvcnRzLnNldENvbnRleHQgPSBzZXRDb250ZXh0O1xyXG5mdW5jdGlvbiBwbGFjZVNoaXAoKSB7XHJcbiAgICB2YXIgeEFkaiA9ICh0aGlzLnhGaW5hbCAtIHRoaXMueCkgLyB0aGlzLmRhdGEuc3BlZWQ7XHJcbiAgICB2YXIgeUFkaiA9ICh0aGlzLnlGaW5hbCAtIHRoaXMueSkgLyB0aGlzLmRhdGEuc3BlZWQ7XHJcbiAgICB4QWRqID0gKE1hdGguc2lnbih4QWRqKSA+IDApID8geEFkaiA6IHhBZGogKiAtMTtcclxuICAgIHlBZGogPSAoTWF0aC5zaWduKHlBZGopID4gMCkgPyB5QWRqIDogeUFkaiAqIC0xO1xyXG4gICAgeEFkaiA9ICh4QWRqID4gdGhpcy5kYXRhLm1pblNwZWVkKSA/IHRoaXMuZGF0YS5taW5TcGVlZCA6IHhBZGo7XHJcbiAgICB5QWRqID0gKHlBZGogPiB0aGlzLmRhdGEubWluU3BlZWQpID8gdGhpcy5kYXRhLm1pblNwZWVkIDogeUFkajtcclxuICAgIHRoaXMueEFkaiA9ICh0aGlzLnggPiB0aGlzLnhGaW5hbCkgPyAwIDogeEFkajtcclxuICAgIHRoaXMueCA9ICh0aGlzLnggPiB0aGlzLnhGaW5hbCkgPyB0aGlzLnggLSB4QWRqIDpcclxuICAgICAgICAodGhpcy54IDwgdGhpcy54RmluYWwpID8gdGhpcy54ICsgeEFkaiA6IHRoaXMueEZpbmFsO1xyXG4gICAgdGhpcy55ID0gKHRoaXMueSA+IHRoaXMueUZpbmFsKSA/IHRoaXMueSAtIHlBZGogOlxyXG4gICAgICAgICh0aGlzLnkgPCB0aGlzLnlGaW5hbCkgPyB0aGlzLnkgKyB5QWRqIDogdGhpcy55RmluYWw7XHJcbn1cclxuZXhwb3J0cy5wbGFjZVNoaXAgPSBwbGFjZVNoaXA7XHJcbmZ1bmN0aW9uIG1vdmVTaGlwKF9hKSB7XHJcbiAgICB2YXIgX2IgPSBfYS54UG9zLCB4UG9zID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgX2MgPSBfYS55UG9zLCB5UG9zID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYztcclxuICAgIHRoaXMueCArPSB4UG9zO1xyXG4gICAgdGhpcy55ICs9IHlQb3M7XHJcbn1cclxuZXhwb3J0cy5tb3ZlU2hpcCA9IG1vdmVTaGlwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi4vc2Fzcy9tYWluLnNhc3NcIik7XHJcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgZ2FtZURhdGFNb2R1bGVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2VuZ2luZS9nYW1lTW9kdWxlc1wiKSk7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vY29uc3RydWN0b3JzXCIpKTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG52YXIgYXBwTWVudV8xID0gcmVxdWlyZShcIi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG4oZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKiAgIGdhbWUgZW5naW4gcnVuaW5nICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnYW1lSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfaSwgX2EsIGJ1bGxldCwgX2IsIF9jLCBlbmVteSwgX2QsIF9lLCBvYmplY3QsIF9mLCBfZywgYmFja2dyb3VuZE1hcDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNsZWFyRmllbGQoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4uaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkICYmICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jbGVhckZpZWxkKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYmFja1NjcmVlblBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QubGV2ZWxJbml0KGNvbnN0cnVjdG9ycy5HYW1lQmFja2dyb3VuZCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4LCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgJiYgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNwYXduRW5lbXlMb2dpYyhjb25zdHJ1Y3RvcnMuRW5lbXlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmluaXRHcmFwcGxlT2JqZWN0KGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0LCBwbGF5ZXJTaGlwRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfYSA9IGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5tb3ZlQnVsbGV0cyhwbGF5ZXJTaGlwRGF0YSwgZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5jcmVhdGVCdWxsZXRzKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlbGV0ZUJ1bGxldChidWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihidWxsZXQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLCBnYW1lT2JqZWN0LCBjb25zdHJ1Y3RvcnMuR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaGl0RGV0ZWN0aW9uKHBsYXllclNoaXBEYXRhLCBbYnVsbGV0XSwgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihidWxsZXQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cywgZ2FtZU9iamVjdCwgY29uc3RydWN0b3JzLkdyYXBwbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfYiA9IDAsIF9jID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15ID0gX2NbX2JdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5wbGFjZUVuZW15ZXMoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Lm1vdmVFbmVteWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmVuZW15U2hpcExvZ2ljVmVydGljYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcGxheWVyU2hpcERhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHBsYXllclNoaXBEYXRhLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmVuZW15QW5pbWF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5zaG9vdChjb25zdHJ1Y3RvcnMuQnVsbGV0Q29uc3RydWN0LCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5kZWxldGVPYmplY3RzKGVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24ocGxheWVyU2hpcERhdGEsIFtlbmVteV0sIGdhbWVPYmplY3QsIGNvbnN0cnVjdG9ycy5HcmFwcGxlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEucGxhY2VTaGlwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEubW92ZVBsYXllclNoaXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2QgPSAwLCBfZSA9IGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0czsgX2QgPCBfZS5sZW5ndGg7IF9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0ID0gX2VbX2RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucGxhY2VFbmVteWVzKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdE93bmVyID09IFwiZXhwbG9zaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5maXJlQW5pbWF0aW9uRW5kZWQoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9iamVjdE93bmVyID09IFwiZ3JhcHBsZU9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5oaXREZXRlY3Rpb24ocGxheWVyU2hpcERhdGEsIFtvYmplY3RdLCBnYW1lT2JqZWN0LCBjb25zdHJ1Y3RvcnMuR3JhcHBsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZW5lbXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QubWFwT2JqZWN0TW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlbGF0ZVNpZGVPYmplY3Qob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxPYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5tYXBSYW5vbU9iamVjdFNwYXduKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmxldmVsT2JqZWN0cywgY29uc3RydWN0b3JzLlNpZGVPYmplY3QsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVTZWNvbmRzSW5jcmVhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QubGV2ZWxUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYmFja1NjcmVlblBhdXNlIHx8ICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgfHwgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgfHwgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNsZWFyRmllbGQoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4ud2lkdGgsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfZiA9IDAsIF9nID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEubWFwQmFja2dyb3VuZE9iamVjdHM7IF9mIDwgX2cubGVuZ3RoOyBfZisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZE1hcCA9IF9nW19mXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTWFwLnVwZGF0ZU1hcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRNYXAuY2hhbmdlUGFydE9mVGV4dHVyZShnYW1lT2JqZWN0LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5tYXBCYWNrZ3JvdW5kT2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC53YXJwRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vICAgZ2FtZSBVSSBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd1N0YXJ0V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd0dhbWVTdGF0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlICYmIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93UGF1c2VXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlICYmIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93TWVudVdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dQYXVzZVdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5nYW1lT3ZlcldpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVdpbiAmJiAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVXaW5XaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwTWVudV8xLmhpZGVTaG93TWVudShtYWluTWVudSwgbmF2aWdhdGlvbi5tZW51LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lV2luLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd3JhcHBlciwgbWFpbk1lbnUsIGdhbWVTdGF0ZSwgZ2FtZU9iamVjdCwgcGxheWVyU2hpcERhdGEsIGVuZ2luZSwgY29udGV4dHMsIG5hdmlnYXRpb247XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5IT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuSE9TVCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJwcm9kdWN0aW9uIG1vZGUgY2hlY2sgSE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBwZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tbWVudVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnYW1lRGF0YU1vZHVsZXMuZ2FtZURhdGFJbml0KGNvbnN0cnVjdG9ycy5QbGF5ZXJTaGlwKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5ldyBjb25zdHJ1Y3RvcnMuR2FtZShnYW1lU3RhdGUuZGF0YSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5wbGF5ZXJPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gc2V0SW50ZXJ2YWwoZ2FtZUludGVydmFsLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5pbnRlcnZhbENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnVpQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2V0R2FtZUZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gZ2FtZU9iamVjdC5yZXR1cm5Db250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNyZWF0ZSBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcERhdGEuY3R4ID0gY29udGV4dHMuZ2FtZUFjdGlvbkZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNoaXAgbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLmluaXRQbGF5ZXJTaGlwKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLnNoaXBDb250cm9sKGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24gPSBhcHBNZW51XzEuYXBwTWVudShnYW1lT2JqZWN0LCBhcHBNZW51XzEuZGlhbG9nV2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLm1lbnUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5mdW5jdGlvbiBnZXREYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgaGVhZGVyczogcmVzdWx0SGVhZGVyLFxyXG4gICAgICAgIGJvZHk6IChkYXRhKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KTtcclxufVxyXG5leHBvcnRzLmdldERhdGEgPSBnZXREYXRhO1xyXG5mdW5jdGlvbiBnZXRMb2NhbERhdGEoX2EpIHtcclxuICAgIHZhciBmaWxlTmFtZSA9IF9hLmZpbGVOYW1lO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXM7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJubyBsb2NhbCBmaWxlc1wiKTtcclxuICAgICAgICAgICAgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZnMucmVhZEZpbGUoX19kaXJuYW1lICsgJy9wdWJsaWMvZGF0YS8nICsgZmlsZU5hbWUsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcImdvdCBzb21lIHBvYmxlbSBoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0TG9jYWxEYXRhID0gZ2V0TG9jYWxEYXRhO1xyXG5mdW5jdGlvbiBwb3N0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lT3ZlclNjcmVlbihkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBhdXNlIHRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJHYW1lIE92ZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMTBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyIC0gNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lT3ZlclNjcmVlbiA9IGdhbWVPdmVyU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlNb2RlbE1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL3VpTW9kZWxNZXRob2RzXCIpO1xyXG5mdW5jdGlvbiBnYW1lUGF1c2UoZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJQYXVzZSB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUGF1c2VcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicGFydCBvZiBwYXVzZSB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiNjBweCBBcmlhbFwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDE1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVQYXVzZSA9IGdhbWVQYXVzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8gIHBvaW50cyAgIGxpZmUsIHRpbWUgdG8gZW5kcywgbGV2ZWxcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZUluZm9ybWF0aW9uU2NyZWVuKGV4dHJhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uLCBpbmZvKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJsaWZlUG9pbnRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgbnVtYmVyOiBpbmZvLmxpZmUsXHJcbiAgICAgICAgICAgIHN0ZXA6IFtpbmZvLmxpZmVdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAqIDUwOyB9KSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBsb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwLFxyXG4gICAgICAgICAgICAgICAgc1dpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzSGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB4OiAxMCxcclxuICAgICAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9ydWJ5LnBuZyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IChkYXRhKSA/IGRhdGEgOiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gQXJyYXkoaW5mby5saWZlKS5maWxsKDApLm1hcChmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gaSAqIDMwOyB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gMzA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMueCA9IChpID09IDApID8gbWFyZ2luTGVmdCA6IDAgKyBzdGVwc1tpXSArICgoaSAhPSAwKSA/IG1hcmdpbkxlZnQgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJsZXZlbFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkN1cnJlbnQgTGV2ZWwgXCIgKyBpbmZvLmN1cnJlbnRMZXZlbCArIFwiL1wiICsgaW5mby5hbGxMZXZlbHMgKyBcIiBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJib2xkIDE2cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiAzMCxcclxuICAgICAgICAgICAgICAgIHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlRpbWUgdG8gZW5kIGYgbGV2ZWxcIixcclxuICAgICAgICAgICAgdGV4dDogKGluZm8ubWludXRlcyB8fCBpbmZvLnNlY29uZHMpID8gXCJUaW1lIHRvIGxldmVsIGVuZCBcIiArICgoaW5mby5taW51dGVzIC0gMTAgPj0gMCkgPyAnJyA6IDApICsgaW5mby5taW51dGVzICsgXCI6XCIgKyAoKGluZm8uc2Vjb25kcyAtIDEwID49IDApID8gJycgOiAwKSArIGluZm8uc2Vjb25kcyA6ICdCb3NzIGxldmVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJsaWdodCAxNnB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC0gMzAwLFxyXG4gICAgICAgICAgICAgICAgeTogMzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR2FtZSBwb2ludHNcIixcclxuICAgICAgICAgICAgdGV4dDogXCJzY29yZTogXCIgKyBpbmZvLnBvaW50cyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJsaWdodCAxOHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiA3MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjb2luc1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBudW1iZXI6IGluZm8uc291cnNlLmdhbWVDb2lucyxcclxuICAgICAgICAgICAgc3RlcDogW2luZm8ubGlmZV0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICogNTA7IH0pLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIGxvZ290eXBlXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgIHNXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc0hlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gNTAsXHJcbiAgICAgICAgICAgICAgICB5OiAyNSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZFBpY3R1cmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHllcy5iYWNrZ3JvdW5kLnNyYyA9IHBpY3R1cmVEaXJyZWN0aW9uICsgJ21pc2MvZ3JhcHBsZS1vYmplY3RzL2NvaW4ucG5nJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNhbGxiYWNrLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gKGRhdGEpID8gZGF0YSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29pbnRJbmRleCA9IE1hdGguZmxvb3IodGhpcy5udW1iZXIgLyA1MDAwKSwgbnVtYmVyT2ZDb2luID0gKGNvaW50SW5kZXggPiAwICYmIGNvaW50SW5kZXggPCAxMCkgPyBjb2ludEluZGV4IDogKGNvaW50SW5kZXggPj0gMTApID8gMTAgOiAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gQXJyYXkobnVtYmVyT2ZDb2luKS5maWxsKDApLm1hcChmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gaSAqIDU7IH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSB0aGlzLnByb3BlcnR5ZXMueDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZDb2luOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5ZXMueCA9IChpID09IDApID8gbWFyZ2luTGVmdCA6IDAgKyBzdGVwc1tpXSArICgoaSAhPSAwKSA/IG1hcmdpbkxlZnQgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHYW1lIGNvaW5zXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiWFwiICsgaW5mby5zb3Vyc2UuZ2FtZUNvaW5zLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0IDE4cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC01MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVJbmZvcm1hdGlvblNjcmVlbiA9IGdhbWVJbmZvcm1hdGlvblNjcmVlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZUxvYWRNZW51KGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3RhcnQgYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUHJlc3MgU3RhcnQgdG8gYmVnaW5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWFpbiBzdGFydCBnYW1lIGJ1dHRvbiBpbiB0aGUgbWFpbiBsb2FkIHNjcmVlblwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4IEFyaWFsXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMTY1LFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiArIDE1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAwKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgICAgICB0b3BQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nOiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIGxvZ290eXBlXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIHNXaWR0aDogMTAyNCxcclxuICAgICAgICAgICAgICAgIHNIZWlnaHQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSA3NSxcclxuICAgICAgICAgICAgICAgIHk6IDkwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9sb2dvLTEwMjR4MTAyNC5wbmcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR2FtZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU3BhY2VcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJib2xkIDEwMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtMjkwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogMzcwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgbmFtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkF0dGFja1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0ZXIgMTAwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAzNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoODksIDAsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZUxvYWRNZW51ID0gZ2FtZUxvYWRNZW51O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uLy4uL2NvbnN0cnVjdG9yc1wiKSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi4vLi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG5mdW5jdGlvbiBnYW1lU2V0dGluZ3NNZW51KGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJtZW51IGJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayBwYXJ0IG9mIG1lbnUgXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHggQXJpYWxcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAwLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrR3JvdW5kRmluYWw6IFwiIzM4MDI0MFwiLFxyXG4gICAgICAgICAgICAgICAgdG9wWDogMCxcclxuICAgICAgICAgICAgICAgIHRvcFk6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b21YOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVk6IDEwMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMkYyMjMxJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dG9uIGVuZCBnYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiZ28gdG8gc3RhcnRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAxNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuZGlhbG9nV2luZG93KHsgdGV4dERhdGE6ICdyZXN0YXJ0IHRoZSBnYW1lPycsIHJlamVjdFRleHQ6ICdjYW5jZWwnLCBhY2NlcHRUZXh0OiAncmVzdGFydCcgfSwgdGhpcy5iYWNrVG9TdGFydFNjcmVlbiwgbnVsbCwgdGhpcywgY29uc3RydWN0b3JzLlBsYXllclNoaXApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWFpbiBnYW1lIG1lbnUgbmFtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk1lbnVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGV4dCBpbiBtYWluIHRvcFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLTQ1LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVTZXR0aW5nc01lbnUgPSBnYW1lU2V0dGluZ3NNZW51O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uLy4uL2NvbnN0cnVjdG9yc1wiKSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi4vLi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG52YXIgZ2FtZVJlc3VsdE1vZHVsZV8xID0gcmVxdWlyZShcIi4uLy4uL2FwcE1lbnUvZ2FtZVJlc3VsdE1vZHVsZVwiKTtcclxuZnVuY3Rpb24gZ2FtZVdpblNjcmVlbihkYXRhLCBjdHgsIHdpZHRoLCBoZWlnaHQsIHBpY3R1cmVEaXJyZWN0aW9uLCBpbmZvKSB7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNjcmVlbiB0aXRsZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIllPVSBXSU4gXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInRleHQgZm9yIGdhbWUgb3ZlciB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiIGJvbGQgMTIwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgLSBoZWlnaHQgLyA0LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzY3JlZW4gdGV4dFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkNvbmdyYXR1bGF0aW9uIFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIiBib2xkIDMwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgLSA1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2NvcmVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJZb3Ugc2NvcmUgaXMgXCIgKyBpbmZvLnBvaW50cyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIgYm9sZCAzMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAyNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dG9uIGVuZCBnYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU2F2ZSByZXN1bHRzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJhY2sgdG8gc3RhcnQgc2NyZWVuXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyICsgd2lkdGggLyAzLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiArIDE1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgdGV4dFByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyxcclxuICAgICAgICAgICAgICAgICAgICB0b3BQYWRkaW5nOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0UGFkZGluZzogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVSZXN1bHRNb2R1bGVfMS5pbml0UmVzdWx0U2NyZWVuKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lVWlNZW51KHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJ1dHRvbiBlbmQgZ2FtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcImdvIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJhY2sgdG8gc3RhcnQgc2NyZWVuXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYXBwTWVudV8xLmRpYWxvZ1dpbmRvdyh7IHRleHREYXRhOiAncmVzdGFydCB0aGUgZ2FtZT8nLCByZWplY3RUZXh0OiAnY2FuY2VsJywgYWNjZXB0VGV4dDogJ3Jlc3RhcnQnIH0sIHRoaXMuYmFja1RvU3RhcnRTY3JlZW4sIG51bGwsIHRoaXMsIGNvbnN0cnVjdG9ycy5QbGF5ZXJTaGlwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVVpTWVudSh0aGlzLmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lV2luU2NyZWVuID0gZ2FtZVdpblNjcmVlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaW5pdChjYWxsYmFjaywgZGF0YSkge1xyXG4gICAgZGF0YSA9IChkYXRhKSA/IGRhdGEgOiB0aGlzO1xyXG4gICAgY2FsbGJhY2soZGF0YSk7XHJcbn1cclxuZXhwb3J0cy5pbml0ID0gaW5pdDtcclxuZnVuY3Rpb24gZ2V0VUlPYmplY3RQb3NpdGlvbigpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogY29udGV4dC5wcm9wZXJ0eWVzLngsXHJcbiAgICAgICAgeTogY29udGV4dC5wcm9wZXJ0eWVzLnksXHJcbiAgICAgICAgd2lkdGg6IGNvbnRleHQucHJvcGVydHllcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGNvbnRleHQucHJvcGVydHllcy5oZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZ2V0VUlPYmplY3RQb3NpdGlvbiA9IGdldFVJT2JqZWN0UG9zaXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG52YXIgZ2FtZVVpTG9hZE1lbnVfMSA9IHJlcXVpcmUoXCIuL2dhbWVVaU1vZGVscy9nYW1lVWlMb2FkTWVudVwiKTtcclxudmFyIGdhbWVVaVNldHRpbmdzTWVudV8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVVaVNldHRpbmdzTWVudVwiKTtcclxudmFyIGdhbWVQYXVzZVNjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVQYXVzZVNjcmVlblwiKTtcclxudmFyIGdhbWVTdGF0c1NjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVTdGF0c1NjcmVlblwiKTtcclxudmFyIGdhbWVHYW1lT3ZlclNjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVHYW1lT3ZlclNjcmVlblwiKTtcclxudmFyIGdhbWVXaW5TY3JlZW5fMSA9IHJlcXVpcmUoXCIuL2dhbWVVaU1vZGVscy9nYW1lV2luU2NyZWVuXCIpO1xyXG52YXIgdWlFbGVtZW50TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZWxlbWVudHMvdWlFbGVtZW50TW9kdWxlc1wiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gZ2FtZVVpUGF1c2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlICYmIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpXHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlID0gIXRoaXMuZ2FtZUluaXREYXRhLmdhbWVQYXVzZTtcclxufVxyXG5leHBvcnRzLmdhbWVVaVBhdXNlID0gZ2FtZVVpUGF1c2U7XHJcbmZ1bmN0aW9uIGdhbWVVaU1lbnUoZ2FtZVVpUGF1c2UpIHtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlID0gIXRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlID0gKGdhbWVVaVBhdXNlKSA/IGZhbHNlIDogdHJ1ZTtcclxufVxyXG5leHBvcnRzLmdhbWVVaU1lbnUgPSBnYW1lVWlNZW51O1xyXG5mdW5jdGlvbiB1aUNvbnRyb2xsZXIoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIGNvbnRyb2xLZXlzID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZVNldGluZ3Mua2V5Q29udHJvbHM7XHJcbiAgICB2YXIgZ2FtZU9iamVjdCA9IHRoaXM7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5lc2NhcGUuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVVaU1lbnUoX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMucGF1c2Uuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmdhbWVVaVBhdXNlKCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3RoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIkNBTlZBU1wiKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgeSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzT25TY3JlZW4gPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgY3R4ID0gX3RoaXMuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQsIHNjcmVlblNpemUgPSBfdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lVWlMb2FkTWVudV8xLmdhbWVMb2FkTWVudShudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRGV0ZWN0aW9uLmNhbGwoX3RoaXMsIGVsZW1lbnRzT25TY3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lVWlTZXR0aW5nc01lbnVfMS5nYW1lU2V0dGluZ3NNZW51KG51bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tEZXRlY3Rpb24uY2FsbChfdGhpcywgZWxlbWVudHNPblNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmdhbWVJbml0RGF0YS5nYW1lV2luKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c09uU2NyZWVuID0gZ2FtZVdpblNjcmVlbl8xLmdhbWVXaW5TY3JlZW4obnVsbCwgY3R4LCBzY3JlZW5TaXplLndpZHRoLCBzY3JlZW5TaXplLmhlaWdodCwgbnVsbCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0RldGVjdGlvbi5jYWxsKF90aGlzLCBlbGVtZW50c09uU2NyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjbGlja0RldGVjdGlvbihlbGVtZW50c09uU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gaW4gZWxlbWVudHNPblNjcmVlbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IGVuZW1pZXNNb2R1bGVzXzEuaGl0RGV0ZWN0aW9uKGVsZW1lbnRzT25TY3JlZW5baXRlbV0sIFtdLmNvbmNhdCh7IHg6IHgsIHk6IHksIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbmFtZTogXCJjdXJzb3JcIiB9KSwgdGhpcywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIGVsZW1lbnRzT25TY3JlZW5baXRlbV0uYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbltpdGVtXS5hY3Rpb24uY2FsbCh0aGlzLCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMudWlDb250cm9sbGVyID0gdWlDb250cm9sbGVyO1xyXG5mdW5jdGlvbiBzaG93VWlQb3B1cFdpbmRvdygpIHtcclxuICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlV2luZG93LmNhbGwodGhpcyk7XHJcbn1cclxuZXhwb3J0cy5zaG93VWlQb3B1cFdpbmRvdyA9IHNob3dVaVBvcHVwV2luZG93O1xyXG5mdW5jdGlvbiBzaG93U3RhcnRXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvbixcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lVWlMb2FkTWVudV8xLmdhbWVMb2FkTWVudSk7XHJcbn1cclxuZXhwb3J0cy5zaG93U3RhcnRXaW5kb3cgPSBzaG93U3RhcnRXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dNZW51V2luZG93KCkge1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlU2hhcGVSb3VuZEJvcmRlcixcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lVWlTZXR0aW5nc01lbnVfMS5nYW1lU2V0dGluZ3NNZW51KTtcclxufVxyXG5leHBvcnRzLnNob3dNZW51V2luZG93ID0gc2hvd01lbnVXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dQYXVzZVdpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0XHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgZ2FtZVBhdXNlU2NyZWVuXzEuZ2FtZVBhdXNlKTtcclxufVxyXG5leHBvcnRzLnNob3dQYXVzZVdpbmRvdyA9IHNob3dQYXVzZVdpbmRvdztcclxuZnVuY3Rpb24gc2hvd0dhbWVTdGF0cygpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpSW1hZ2UsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpSW1hZ2UsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVTdGF0c1NjcmVlbl8xLmdhbWVJbmZvcm1hdGlvblNjcmVlbiwgZGF0YSk7XHJcbn1cclxuZXhwb3J0cy5zaG93R2FtZVN0YXRzID0gc2hvd0dhbWVTdGF0cztcclxuZnVuY3Rpb24gZ2FtZU92ZXJXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lR2FtZU92ZXJTY3JlZW5fMS5nYW1lT3ZlclNjcmVlbik7XHJcbn1cclxuZXhwb3J0cy5nYW1lT3ZlcldpbmRvdyA9IGdhbWVPdmVyV2luZG93O1xyXG5mdW5jdGlvbiBnYW1lV2luV2luZG93KCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIC8vY29uc29sZS5sb2coZGF0YSlcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvblxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVXaW5TY3JlZW5fMS5nYW1lV2luU2NyZWVuLCBkYXRhKTtcclxufVxyXG5leHBvcnRzLmdhbWVXaW5XaW5kb3cgPSBnYW1lV2luV2luZG93O1xyXG5mdW5jdGlvbiBpbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgY2FsbGJhY2spIHtcclxuICAgIHZhciBwcm9wcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwcm9wc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBjdHggPSB0aGlzLmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkLCBzY3JlZW5TaXplID0gdGhpcy5nZXRTY3JlZW5TaXplKCksIHBpY0RpcmVjdGlvbiA9IHRoaXMuc2hvd0dhbWVJbmZvKCkuaW1hZ2VEaXJyZWN0aW9uO1xyXG4gICAgdmFyIHNjcmVlbk9iamVjdHMgPSBjYWxsYmFjay5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFtudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBwaWNEaXJlY3Rpb25dLCBwcm9wcykpO1xyXG4gICAgZm9yICh2YXIgaXRlbUluZGV4ID0gMDsgaXRlbUluZGV4IDwgc2NyZWVuT2JqZWN0cy5sZW5ndGg7IGl0ZW1JbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKHNjcmVlbk9iamVjdHNbaXRlbUluZGV4XS5oYXNPd25Qcm9wZXJ0eSgnbG9hZFBpY3R1cmUnKSlcclxuICAgICAgICAgICAgc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmxvYWRQaWN0dXJlKCk7XHJcbiAgICAgICAgc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmluaXQoZHJhd01ldGhvZHNbaXRlbUluZGV4XSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbml0VWlFbGVtZW50cyA9IGluaXRVaUVsZW1lbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuL3dpbmRvdy9kaXNwbGF5VWlXaW5kb3dNb2R1bGVzXCIpO1xyXG5leHBvcnRzLmNyZWF0ZVdpbmRvdyA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVXaW5kb3c7XHJcbmV4cG9ydHMuY3JlYXRlU2hhcGVSb3VuZEJvcmRlciA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyO1xyXG5leHBvcnRzLmNyZWF0ZVJvdW5kQnV0dG9uID0gZGlzcGxheVVpV2luZG93TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uO1xyXG52YXIgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL3dlYXBvbnMvd2VhcG9uc0Rpc3BsYXlNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGRyYXcoY29udGV4dCwgZWxlbWVudCkge1xyXG4gICAgdmFyIHByb3BlcnR5ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BlcnR5W19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29udGV4dFtlbGVtZW50XS5hcHBseShjb250ZXh0LCBwcm9wZXJ0eSk7XHJcbn1cclxuZXhwb3J0cy5kcmF3ID0gZHJhdztcclxuZnVuY3Rpb24gY3JlYXRlTGFzZXJCdWxsZXQoZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhLmN0eClcclxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwibm8gY29udGV4dFwiKTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgZGF0YS50eXBlID09IFwiYmxhc3RlclwiKVxyXG4gICAgICAgIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEud2VhcG9uMShkYXRhLCBkcmF3KTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBkYXRhLnR5cGUgPT0gXCJibGFzdGVyXCIpXHJcbiAgICAgICAgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMS53ZWFwb24xKGRhdGEsIGRyYXcpO1xyXG4gICAgaWYgKGRhdGEub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGRhdGEudHlwZSA9PSBcImJlYW1cIilcclxuICAgICAgICB3ZWFwb25zRGlzcGxheU1vZHVsZV8xLndlYXBvbjEoZGF0YSwgZHJhdyk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVMYXNlckJ1bGxldCA9IGNyZWF0ZUxhc2VyQnVsbGV0O1xyXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShjdHgsIHBpY3R1cmVOYW1lKSB7XHJcbiAgICB2YXIgcHJvcHMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcHJvcHNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBkcmF3LmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW2N0eCwgJ2RyYXdJbWFnZScsIHBpY3R1cmVOYW1lXSwgcHJvcHMpKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUltYWdlID0gY3JlYXRlSW1hZ2U7XHJcbmZ1bmN0aW9uIGNsZWFyRmllbGQoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBkcmF3KGN0eCwgJ2NsZWFyUmVjdCcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJGaWVsZCA9IGNsZWFyRmllbGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi91aUVsZW1lbnRNb2R1bGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vd2FycEVsZW1lbnREcm93XCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gdWlJbWFnZShzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmRyYXdJbWFnZShwcm9wZXJ0eWVzLmJhY2tncm91bmQsIDAsIDAsIHByb3BlcnR5ZXMuc1dpZHRoLCBwcm9wZXJ0eWVzLnNIZWlnaHQsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy51aUltYWdlID0gdWlJbWFnZTtcclxuZnVuY3Rpb24gdWlUZXh0KHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIC8vcHJvcGVydHllcy5jdHguc2F2ZSgpO1xyXG4gICAgdmFyIHRleHRXaWR0aCA9IHByb3BlcnR5ZXMuY3R4Lm1lYXN1cmVUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0KS53aWR0aCAvIDMuMjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguZm9udCA9IHNoYXBlUHJvcGVydHllcy5mb250U2l6ZTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMuYm9yZGVyQ29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsVGV4dChzaGFwZVByb3BlcnR5ZXMudGV4dCwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC5zYXZlKCk7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnRyYW5zbGF0ZSgwLDApO1xyXG4gICAgLy8gcHJvcGVydHllcy5jdHgucmVzdG9yZSgpO1xyXG59XHJcbmV4cG9ydHMudWlUZXh0ID0gdWlUZXh0O1xyXG5mdW5jdGlvbiB1aVJlcGVhdEltYWdlKHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIHZhciBwYXQgPSBwcm9wZXJ0eWVzLmN0eC5jcmVhdGVQYXR0ZXJuKHByb3BlcnR5ZXMuYmFja2dyb3VuZCwgJ3JlcGVhdC14Jyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIC8vcHJvcGVydHllcy5jdHgucmVjdChwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucmVjdChwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcGF0O1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbCgpO1xyXG59XHJcbmV4cG9ydHMudWlSZXBlYXRJbWFnZSA9IHVpUmVwZWF0SW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHdhcnBFbGVtZW50KCkge1xyXG4gICAgdmFyIGN0eCA9IG51bGw7XHJcbiAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMTcwLCAwKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjBcIiwgXCJtYWdlbnRhXCIpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiYmx1ZVwiKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjEuMFwiLCBcInJlZFwiKTtcclxufVxyXG5leHBvcnRzLndhcnBFbGVtZW50ID0gd2FycEVsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kaXNwbGF5TW9kdWxlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VsZW1lbnRzL3VpRWxlbWVudE1vZHVsZXNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGVtZW50c1wiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHdlYXBvbjEoZGF0YSwgZHJhdykge1xyXG4gICAgZHJhdyhkYXRhLmN0eCwgJ2RyYXdJbWFnZScsIGRhdGEuaW1nLCBkYXRhLnN4LCBkYXRhLnN5LCBkYXRhLnNXaWR0aCwgZGF0YS5zSGVpZ2h0LCBkYXRhLngsIGRhdGEueSwgZGF0YS53aWR0aCArIDEwLCBkYXRhLmhlaWdodCArIDEwKTtcclxufVxyXG5leHBvcnRzLndlYXBvbjEgPSB3ZWFwb24xO1xyXG5mdW5jdGlvbiB3ZWFwb24xYmFja3dhcmQoZGF0YSwgZHJhdykge1xyXG4gICAgZHJhdyhkYXRhLmN0eCwgJ2RyYXdJbWFnZScsIGRhdGEuaW1nLCAwLCAwLCBkYXRhLndpZHRoLCBkYXRhLmhlaWdodCwgZGF0YS54LCBkYXRhLnksIGRhdGEud2lkdGggKyAxMCwgZGF0YS5oZWlnaHQgKyAxMCk7XHJcbn1cclxuZXhwb3J0cy53ZWFwb24xYmFja3dhcmQgPSB3ZWFwb24xYmFja3dhcmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdyhjdHgsIHByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBfYSA9IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICBjdHguZmlsbFJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIDtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVdpbmRvdyA9IGNyZWF0ZVdpbmRvdztcclxuZnVuY3Rpb24gY3JlYXRlU2hhcGVSb3VuZEJvcmRlcihzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLmJhY2tncm91bmQ7XHJcbiAgICBpZiAocHJvcGVydHllcy5ncmFkaWVudCkge1xyXG4gICAgICAgIHZhciBncmFkaWVudCA9IHByb3BlcnR5ZXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHByb3BlcnR5ZXMudG9wWCwgcHJvcGVydHllcy50b3BZLCBwcm9wZXJ0eWVzLmJvdHRvbVgsIHByb3BlcnR5ZXMuYm90dG9tWSk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHByb3BlcnR5ZXMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHByb3BlcnR5ZXMuYmFja0dyb3VuZEZpbmFsKTtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgIH1cclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5tb3ZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGggLSBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLSBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTsgLyoqL1xyXG4gICAgaWYgKHByb3BlcnR5ZXMuaXNCb3JkZXIpIHtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5zdHJva2VTdHlsZSA9IHByb3BlcnR5ZXMuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGwoKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVNoYXBlUm91bmRCb3JkZXIgPSBjcmVhdGVTaGFwZVJvdW5kQm9yZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVSb3VuZEJ1dHRvbihzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICB2YXIgdGV4dFdpZHRoID0gcHJvcGVydHllcy5jdHgubWVhc3VyZVRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQpLndpZHRoIC8gMy4yO1xyXG4gICAgdmFyIGJ1dHRvbldpZHRoID0gcHJvcGVydHllcy50ZXh0UHJvcGVydHkubGVmdFBhZGRpbmcgKyB0ZXh0V2lkdGggKyBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5yaWdodFBhZGRpbmc7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMuYmFja2dyb3VuZDtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubW92ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7IC8qKi9cclxuICAgIC8vcHJvcGVydHllcy5jdHguZmlsbFJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbCgpO1xyXG4gICAgaWYgKHByb3BlcnR5ZXMuaXNCb3JkZXIpIHtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5zdHJva2VTdHlsZSA9IHByb3BlcnR5ZXMuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHgubGluZVdpZHRoID0gcHJvcGVydHllcy5ib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5mb250ID0gc2hhcGVQcm9wZXJ0eWVzLmZvbnRTaXplO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcHJvcGVydHllcy50ZXh0UHJvcGVydHkudGV4dENvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQsIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LmxlZnRQYWRkaW5nLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAvIDIgKyBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS50b3BQYWRkaW5nKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVJvdW5kQnV0dG9uID0gY3JlYXRlUm91bmRCdXR0b247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZWxlY3Ryb24nKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=