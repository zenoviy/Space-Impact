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
/******/ 	__webpack_require__.p = "../server/public/level-creator/dist-scripts";
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
exports.push([module.i, "body {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden; }\n\ncanvas {\n    background: #00534b; }\n\n.side-menu-wrapper {\n    background: #bbbbbb;\n    height: 96vh;\n    right: 0;\n    max-width: 300px;\n    min-width: 100px;\n    padding: 10px;\n    position: absolute;\n    overflow-y: scroll; }\n\n.game-field-wrapper {\n    overflow: hidden; }\n\nfooter {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    color: #ffffff; }\n\n.main-banner-cover {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.5);\n    width: 100vw;\n    height: 100vh;\n    z-index: 100; }\n\n* {\n    color: #221828; }\n\nlegend h3 {\n    margin: 0px; }\n\nlabel p {\n    font-size: 14px; }\n\ninput {\n    padding: 10px;\n    width: 91%;\n    border-radius: 7px;\n    border: 0px; }\n\n.side-instrumental-panel {\n    overflow-y: scroll;\n    max-height: 350px;\n    display: flex;\n    flex-wrap: wrap; }\n    .side-instrumental-panel li {\n        list-style: none; }\n    .side-instrumental-panel img {\n        padding: 10px;\n        display: block;\n        margin: 0 auto;\n        width: 54px; }\n\n.selected-item-preview {\n    position: absolute;\n    z-index: 100; }\n\n.inner-content {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    max-width: 70%;\n    min-height: 300px;\n    overflow-y: scroll;\n    right: 0;\n    position: absolute;\n    max-height: 90%; }\n    .inner-content hr {\n        color: #eaeaea; }\n    .inner-content .single-item-wrapper {\n        cursor: pointer;\n        padding: 5px; }\n    .inner-content .single-item-wrapper:hover {\n        background: #4d4263;\n        color: #fff; }\n        .inner-content .single-item-wrapper:hover h2 {\n            color: #ffffff; }\n\n.inner-description-fields-wrapper {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px; }\n    .inner-description-fields-wrapper .single-block-description {\n        color: #715184; }\n        .inner-description-fields-wrapper .single-block-description input {\n            background: #bbb; }\n\n.active-button {\n    background: #ff961e; }\n\n.side-panel-success {\n    color: #539700;\n    border: 1px solid #539700;\n    padding: 5px; }\n\n.side-panel-error {\n    color: #b10000;\n    border: 1px solid #b10000;\n    padding: 5px; }\n\n.block-description-wrapper {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap; }\n    .block-description-wrapper img {\n        max-width: 100%; }\n\n.single-block-description {\n    text-align: left;\n    padding: 5px; }\n    .single-block-description textarea {\n        width: 100%;\n        padding: 5px;\n        margin-top: 10px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        border: 1px solid #dfdfdf;\n        background: #bbb; }\n\n.close-dialog {\n    color: #fff;\n    background: none;\n    padding: 20px;\n    border: none;\n    font-size: 29px;\n    position: absolute;\n    cursor: pointer; }\n\n.main-btn {\n    background: #ffb300;\n    border: navajowhite;\n    padding: 7px;\n    border-radius: 5px;\n    margin-top: 5px;\n    box-shadow: 1px 1px 5px #1547a64f;\n    cursor: pointer;\n    transition: .3s linear; }\n\n.main-btn:hover {\n    background: #ffedc3; }\n\n.main-btn:active {\n    background: #ff1e00; }\n", ""]);
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



module.exports = content.locals || {};

/***/ }),

/***/ "./src/constructors/blockConstructor.ts":
/*!**********************************************!*\
  !*** ./src/constructors/blockConstructor.ts ***!
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
var initStartObject_1 = __webpack_require__(/*! ../redactor/initStartObject */ "./src/redactor/initStartObject.ts");
var blockInteractModule_1 = __webpack_require__(/*! ../redactor/blockInteractModule */ "./src/redactor/blockInteractModule.ts");
var blocksFunctionality_1 = __webpack_require__(/*! ../redactor/blocksFunctionality */ "./src/redactor/blocksFunctionality.ts");
var BlockConstructor = /** @class */ (function () {
    function BlockConstructor(_a) {
        var data = __rest(_a, []);
        this.x = data.x;
        this.y = data.y;
        this.xMove = data.x;
        this.yMove = data.y;
        this.width = data.width;
        this.height = data.height;
        this.index = data.index;
        this.details = (data.details) ? data.details : null;
        this.imageWidth = (data.imageWidth) ? data.imageWidth : data.width;
        this.imageHeight = (data.imageHeight) ? data.imageHeight : data.width;
        this.backgroundTexture = null;
    }
    return BlockConstructor;
}());
exports.BlockConstructor = BlockConstructor;
BlockConstructor.prototype.renderBlockBox = initStartObject_1.renderBlockBox;
BlockConstructor.prototype.moveSingleBlock = blockInteractModule_1.moveSingleBlock;
BlockConstructor.prototype.elevatorMove = blocksFunctionality_1.elevatorMove;


/***/ }),

/***/ "./src/constructors/renderConstructor.ts":
/*!***********************************************!*\
  !*** ./src/constructors/renderConstructor.ts ***!
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
var view_1 = __webpack_require__(/*! ../ui/view */ "./src/ui/view.ts");
var MainGameConstructor = /** @class */ (function () {
    function MainGameConstructor(_a) {
        var data = __rest(_a, []);
        this.mapMoveSpeed = data.mapMoveSpeed;
        this.mapWidth = data.mapWidth;
        this.mapHeight = data.mapHeight;
        this.mapDefaultWidth = data.mapWidth;
        this.mapDefaultHeight = data.mapHeight;
        this.allRedactorBlock = data.allRedactorBlock;
        this.backgroundDatabase = data.backgroundDatabase;
        this.blockDatabase = (data.blockDatabase) ? data.blockDatabase : null;
        this.charactersDatabase = (data.charactersDatabase) ? data.charactersDatabase : null;
        this.enemyDatabase = (data.enemyDatabase) ? data.enemyDatabase : null;
        this.blockSize = data.blockSize;
        this.maxHorizontalBlocks = data.maxHorizontalBlocks;
        this.maxVerticalBlocks = data.maxVerticalBlocks;
        this.activeDescriptionFields = false;
        this.miniMapActive = false;
    }
    return MainGameConstructor;
}());
exports.MainGameConstructor = MainGameConstructor;
MainGameConstructor.prototype.initView = view_1.initView;
MainGameConstructor.prototype.clearView = view_1.clearView;
MainGameConstructor.prototype.renderItemsToSideList = view_1.renderItemsToSideList;


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
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../sass/main.sass */ "./sass/main.sass");
var renderConstructor_1 = __webpack_require__(/*! ./constructors/renderConstructor */ "./src/constructors/renderConstructor.ts");
var blockConstructor_1 = __webpack_require__(/*! ./constructors/blockConstructor */ "./src/constructors/blockConstructor.ts");
var view_1 = __webpack_require__(/*! ./ui/view */ "./src/ui/view.ts");
var initStartObject_1 = __webpack_require__(/*! ./redactor/initStartObject */ "./src/redactor/initStartObject.ts");
var sidePanelActions_1 = __webpack_require__(/*! ./redactor/sidePanelActions */ "./src/redactor/sidePanelActions.ts");
/*
V- create map net
    V- vertical direction of block
    V- block information
        V - delete block
        V- preview
        V- information
        V- change data
            V- width
            V- height
            - x
            - y
            V- description
            V- rulers
            - elevator speed
V- side panel
    V- new map
        V- map name
        V- save map in json
        V- change map size
        V- overwrite map
    V- load map
    V- minimap
    V- different sections of objects
        V- block
        V- characters
        V- enemy
        V- background


- add stairs
- add leaders
V- add horizontal elevator
V- add background texture and display it
    V- destroy/ change textures separately
    - add texture animations
- add NPC
    - dialog


*/
(function () {
    return __awaiter(this, void 0, void 0, function () {
        function redactorEngine() {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, block;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            mainObject.clearView();
                            _i = 0, _a = mainObject.allRedactorBlock;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            block = _a[_i];
                            return [4 /*yield*/, block.elevatorMove()];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, block.renderBlockBox({ mainObject: mainObject })];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        var mainObject, engine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initStartObject_1.initMainEngine({ MainGameConstructor: renderConstructor_1.MainGameConstructor, BlockConstructor: blockConstructor_1.BlockConstructor })];
                case 1:
                    mainObject = _a.sent();
                    mainObject.initView();
                    mainObject.renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.blockDatabase });
                    engine = setInterval(function () {
                        redactorEngine();
                    }, 60);
                    //console.log(mainObject)
                    view_1.mapMoveControllers({ mainObject: mainObject });
                    sidePanelActions_1.saveMap({ mainObject: mainObject });
                    sidePanelActions_1.loadMap({ mainObject: mainObject });
                    sidePanelActions_1.setMapSize({ mainObject: mainObject, BlockConstructor: blockConstructor_1.BlockConstructor });
                    sidePanelActions_1.createNewMap();
                    return [2 /*return*/];
            }
        });
    });
})();


/***/ }),

/***/ "./src/redactor/blockDataRedactorModule.ts":
/*!*************************************************!*\
  !*** ./src/redactor/blockDataRedactorModule.ts ***!
  \*************************************************/
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
var preview_1 = __webpack_require__(/*! ../ui/preview */ "./src/ui/preview.ts");
var panelFormPartGenerator_1 = __webpack_require__(/*! ./panelFormPartGenerator */ "./src/redactor/panelFormPartGenerator.ts");
function openRedactorWindow(_a) {
    var blockData = _a.blockData, mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        var selectFiles, fileContainer, closeDialog, generatedArea, allBlocks, innerDescriptionArea;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (mainObject.selectedBlockPanelItem || !blockData.details || mainObject.miniMapActive)
                        return [2 /*return*/, false];
                    selectFiles = document.querySelector("#select-files");
                    fileContainer = document.querySelector("#inner-content");
                    closeDialog = document.querySelector("#closeDialog");
                    generatedArea = panelFormPartGenerator_1.elementCreator({
                        tagname: 'div',
                        classList: 'inner-description-fields-wrapper',
                        innerText: '',
                        idName: 'inner-description-area'
                    });
                    allBlocks = mainObject.allRedactorBlock;
                    mainObject.activeDescriptionFields = true;
                    fileContainer.innerHTML = '';
                    preview_1.showElement({ element: selectFiles });
                    return [4 /*yield*/, fileContainer.appendChild(generatedArea)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, document.querySelector("#inner-description-area")];
                case 2:
                    innerDescriptionArea = _b.sent();
                    panelFormPartGenerator_1.loadInnerData({ fileContainer: innerDescriptionArea, target: blockData });
                    panelFormPartGenerator_1.generateInput({ fileContainer: innerDescriptionArea, target: blockData });
                    closeDialog.addEventListener('click', function () {
                        mainObject.activeDescriptionFields = false;
                        preview_1.hideElement({ element: selectFiles });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.openRedactorWindow = openRedactorWindow;
function positionReducer(_a) {
    var allBlocks = _a.allBlocks;
    var oldXRange = allBlocks[0].xMove;
    var oldYRange = allBlocks[0].yMove;
    for (var _i = 0, allBlocks_1 = allBlocks; _i < allBlocks_1.length; _i++) {
        var block = allBlocks_1[_i];
        block.xMove = block.x;
        block.yMove = block.y;
    }
}
exports.positionReducer = positionReducer;
function changeBlockArraySize(_a) {
    var mainObject = _a.mainObject, formData = _a.formData, BlockConstructor = _a.BlockConstructor;
    var errorField = document.querySelector('#map-size-error');
    var widthSet = formData.horizontalBlock;
    var heightSet = formData.verticalBlock;
    var currentWidth = mainObject.mapWidth;
    var currentHeight = mainObject.mapHeight;
    var allBlocks = mainObject.allRedactorBlock;
    var verticalRange = heightSet - currentHeight;
    var verticalCompensation = verticalRange;
    var newRebuildBlockMap = [];
    var oldXRange = allBlocks[0].xMove;
    var oldYRange = allBlocks[0].yMove;
    //errorField.innerHTML = `<p class='side-panel-error'>Please wait map is build...</p>`;
    positionReducer({ allBlocks: allBlocks });
    for (var col = 0; col < widthSet; col++) {
        for (var item = 0; item < heightSet; item++) {
            var rowIndex = (col == 0) ? item : (col * currentHeight) + item;
            var newBlocksArrayIndex = (col == 0) ? item : (col * heightSet) + item;
            var oldBlocksArrayIndex = (item < currentHeight) ? allBlocks[rowIndex] : null;
            if (oldBlocksArrayIndex) {
                oldBlocksArrayIndex.index = newBlocksArrayIndex;
                newRebuildBlockMap = newRebuildBlockMap.concat(oldBlocksArrayIndex);
            }
            else {
                newRebuildBlockMap = newRebuildBlockMap.concat(createSingleMapBlock({
                    mainObject: mainObject,
                    BlockConstructor: BlockConstructor,
                    index: newBlocksArrayIndex,
                    x: col * mainObject.blockSize,
                    y: item * mainObject.blockSize // + oldYRange
                }));
                //console.log(col)
            }
        }
        verticalCompensation += verticalRange;
    }
    mainObject.mapWidth = widthSet;
    mainObject.mapHeight = heightSet;
    mainObject.allRedactorBlock = newRebuildBlockMap;
    var show = mainObject.allRedactorBlock.find(function (o) { return o.index == 1011; });
    console.log(show, "show resize");
    console.log(mainObject.allRedactorBlock[0]);
}
exports.changeBlockArraySize = changeBlockArraySize;
function createSingleMapBlock(_a) {
    var mainObject = _a.mainObject, BlockConstructor = _a.BlockConstructor, index = _a.index, x = _a.x, y = _a.y;
    var blockData = {
        x: x,
        y: y,
        width: mainObject.blockSize,
        height: mainObject.blockSize,
        index: index
    };
    return new BlockConstructor(__assign({}, blockData));
}
function miniMapper(_a) {
    var mainObject = _a.mainObject;
    var selectFiles = document.querySelector("#select-files");
    var fileContainer = document.querySelector("#inner-content");
    var closeDialog = document.querySelector("#closeDialog");
    var allBlocks = mainObject.allRedactorBlock;
    var cameraPositionX = allBlocks[0].xMove;
    var cameraPositionY = allBlocks[0].yMove;
    mainObject.miniMapActive = true;
    var mapSize = 50 / 3;
    fileContainer.innerHTML = '';
    var newMap = document.createElement('canvas');
    var mapSizeWidth = mainObject.mapWidth * 3;
    var mapSizeHeight = mainObject.mapHeight * 3;
    newMap['width'] = mapSizeWidth;
    newMap['height'] = mapSizeHeight;
    var miniMapCtx = newMap.getContext('2d');
    fileContainer.appendChild(newMap);
    mapObjectDraw({
        ctx: miniMapCtx,
        allBlocks: allBlocks,
        cameraPositionX: cameraPositionX,
        cameraPositionY: cameraPositionY,
        mapSize: mapSize,
        mapSizeWidth: mapSizeWidth,
        mapSizeHeight: mapSizeHeight
    });
    preview_1.showElement({ element: selectFiles });
    fileContainer.addEventListener('click', function (event) {
        var allBlocks = mainObject.allRedactorBlock;
        var cameraPositionX = allBlocks[0].xMove;
        var cameraPositionY = allBlocks[0].yMove;
        if (event.target['nodeName'] === 'CANVAS') {
            var posX = event['clientX'] - event.target['offsetLeft'];
            var posY = event['clientY'] - event.target['offsetTop'];
            setMapAsClick({ mainObject: mainObject, x: posX * mapSize, y: posY * mapSize });
            mapObjectDraw({
                ctx: miniMapCtx,
                allBlocks: allBlocks,
                cameraPositionX: cameraPositionX,
                cameraPositionY: cameraPositionY,
                mapSize: mapSize,
                mapSizeWidth: mapSizeWidth,
                mapSizeHeight: mapSizeHeight,
            });
        }
    });
    closeDialog.addEventListener('click', function () {
        mainObject.miniMapActive = false;
        preview_1.hideElement({ element: selectFiles });
    });
}
exports.miniMapper = miniMapper;
function mapObjectDraw(_a) {
    var ctx = _a.ctx, allBlocks = _a.allBlocks, cameraPositionY = _a.cameraPositionY, cameraPositionX = _a.cameraPositionX, mapSize = _a.mapSize, mapSizeWidth = _a.mapSizeWidth, mapSizeHeight = _a.mapSizeHeight;
    ctx.clearRect(0, 0, mapSizeWidth, mapSizeHeight);
    console.log(allBlocks);
    allBlocks.forEach(function (item) {
        if (item.details) {
            ctx.save();
            ctx.fillStyle = (item.details.mapColor) ? item.details.mapColor : "rgba(225, 169, 0, 1)"; //item.details.mapColor//"rgba(225, 169, 0, 1)";
            ctx.fillRect((item.x) ? item.x / mapSize : 0, (item.yMove) ? item.y / mapSize : 0, 50 / mapSize, 50 / mapSize);
            ctx.restore();
        }
    });
    //ctx.save();
    ctx.strokeStyle = "rgba(225, 255, 255, 1)";
    ctx.beginPath();
    ctx.rect((cameraPositionX / mapSize) * -1, (cameraPositionY / mapSize) * -1, window.innerWidth / mapSize, window.innerHeight / mapSize);
    ctx.stroke();
    //ctx.restore()
}
function setMapAsClick(_a) {
    var mainObject = _a.mainObject, x = _a.x, y = _a.y;
    var allBlocks = mainObject.allRedactorBlock;
    var cameraPositionX = x + allBlocks[0].xMove; //Math.max(allBlocks[0].xMove, x) - Math.min(allBlocks[0].xMove, x);
    var cameraPositionY = y + allBlocks[0].yMove; //Math.max(allBlocks[0].yMove, y) - Math.min(allBlocks[0].yMove, y);
    for (var _i = 0, allBlocks_2 = allBlocks; _i < allBlocks_2.length; _i++) {
        var block = allBlocks_2[_i];
        block.xMove -= Math.floor(cameraPositionX);
        block.yMove -= Math.floor(cameraPositionY);
    }
}


/***/ }),

/***/ "./src/redactor/blockInteractModule.ts":
/*!*********************************************!*\
  !*** ./src/redactor/blockInteractModule.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blockDataRedactorModule_1 = __webpack_require__(/*! ./blockDataRedactorModule */ "./src/redactor/blockDataRedactorModule.ts");
function collisionDetector(_a) {
    var object = _a.object, target = _a.target;
    if (!object || !target)
        return false;
    target.width = parseInt(target.width);
    target.height = parseInt(target.height);
    object.width = parseInt(object.width);
    object.height = parseInt(object.height);
    var xMin = Math.min(object.xMove, target.x);
    var yMin = Math.min(object.yMove, target.y);
    var xMax = Math.max(object.xMove + object.width, target.x + target.width);
    var yMax = Math.max(object.yMove + object.height, target.y + target.height);
    var resX = xMax - xMin;
    var resY = yMax - yMin;
    var collision = (resX > object.width || resY > object.height) ? false : "collision";
    if (collision)
        return object;
    else
        return false;
}
exports.collisionDetector = collisionDetector;
function moveSingleBlock(_a) {
    var xMoveValue = _a.xMoveValue, yMoveValue = _a.yMoveValue;
    if (xMoveValue)
        this.xMove += xMoveValue;
    if (yMoveValue)
        this.yMove += yMoveValue;
}
exports.moveSingleBlock = moveSingleBlock;
function moveAllScene(_a) {
    var mainObject = _a.mainObject, xMoveValue = _a.xMoveValue, yMoveValue = _a.yMoveValue;
    for (var _i = 0, _b = mainObject.allRedactorBlock; _i < _b.length; _i++) {
        var singleBlock = _b[_i];
        singleBlock.moveSingleBlock({ xMoveValue: xMoveValue, yMoveValue: yMoveValue });
    }
}
exports.moveAllScene = moveAllScene;
function changeObjectModel(_a) {
    var result = _a.result, mainObject = _a.mainObject;
    if (!mainObject || !result || !mainObject.selectedBlockPanelItem || mainObject.miniMapActive || mainObject.activeDescriptionFields)
        return false;
    var allBlocks = mainObject.allRedactorBlock;
    var currentBlock = allBlocks[result.index];
    if (!mainObject.selectedBlockPanelItem.destroyer) {
        if (mainObject.selectedBlockPanelItem.type === "background-wall" && currentBlock.details) {
            mainObject.selectedBlockPanelItem.width = mainObject.blockSize;
            mainObject.selectedBlockPanelItem.height = mainObject.blockSize;
            mainObject.selectedBlockPanelItem.x = currentBlock.x;
            mainObject.selectedBlockPanelItem.y = currentBlock.y;
            mainObject.selectedBlockPanelItem.xMove = currentBlock.xMove;
            mainObject.selectedBlockPanelItem.yMove = currentBlock.yMove;
            currentBlock.backgroundTexture = mainObject.selectedBlockPanelItem;
            return false;
        }
        else if (mainObject.selectedBlockPanelItem.type === "background-wall" && !currentBlock.details) {
            currentBlock.details = mainObject.selectedBlockPanelItem;
        }
        currentBlock.details = mainObject.selectedBlockPanelItem;
    }
    else if (mainObject.selectedBlockPanelItem.destroyer === 'destroyer') {
        if (currentBlock.details && currentBlock.details.valueOfMove) {
            blockDataRedactorModule_1.positionReducer({ allBlocks: allBlocks });
        }
        //console.log(mainObject.blockSize)
        currentBlock.width = mainObject.blockSize;
        currentBlock.height = mainObject.blockSize;
        currentBlock.details = null;
        currentBlock.backgroundTexture = null;
    }
    else if (mainObject.selectedBlockPanelItem.destroyer === 'redactorDecoration') {
        currentBlock.backgroundTexture = null;
    }
}
exports.changeObjectModel = changeObjectModel;


/***/ }),

/***/ "./src/redactor/blocksFunctionality.ts":
/*!*********************************************!*\
  !*** ./src/redactor/blocksFunctionality.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function elevatorMove() {
    if (!this.details)
        return false;
    if (this.details.type === 'elevator') {
        var currentValue = this.details.constructorValueOfMove;
        var defaultValue = this.details.valueOfMove;
        //console.log(currentValue)
        if (this.details.constructorDirection) {
            if (this.details.moveDirection === "vertical")
                this.yMove += this.details.speed;
            if (this.details.moveDirection === "horizontal")
                this.xMove += this.details.speed;
            this.details.constructorValueOfMove -= this.details.speed;
            if (currentValue <= 0)
                this.details.constructorDirection = false;
        }
        else if (!this.details.constructorDirection) {
            //this.yMove -= this.details.speed;
            if (this.details.moveDirection === "vertical")
                this.yMove -= this.details.speed;
            if (this.details.moveDirection === "horizontal")
                this.xMove -= this.details.speed;
            this.details.constructorValueOfMove += this.details.speed;
            if (currentValue >= defaultValue) {
                this.details.constructorDirection = true;
            }
        }
    }
}
exports.elevatorMove = elevatorMove;
/*

"currentValueOfMove": 100,
        "constructorValueOfMove": 100,
        "currentDirection": true,
        "constructorDirection": true,
 "id": "elevator_1",
        "texture": "/level-creator/assets/charactersObjects/elevator.png",
        "description": "Elevator",
        "speed": 5,
        "moveDirection": "vertical",
        "valueOfMove": 100,
        "currentValueOfMove": 100,
        "currentDirection": true,
        "type": "elevator",
        "collision": true
*/
function stairsMove() {
}
exports.stairsMove = stairsMove;


/***/ }),

/***/ "./src/redactor/globalVariables.ts":
/*!*****************************************!*\
  !*** ./src/redactor/globalVariables.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __HOST = 'http://localhost:3300';
exports.__HOST = __HOST;
var __BLOCK_CONSTRUCTOR_URL = '/api/get-constructor-blocks';
exports.__BLOCK_CONSTRUCTOR_URL = __BLOCK_CONSTRUCTOR_URL;
var __BLOCK_BACKGROUND_CONSTRUCTOR_URL = '/api/get-constructor-background-blocks';
exports.__BLOCK_BACKGROUND_CONSTRUCTOR_URL = __BLOCK_BACKGROUND_CONSTRUCTOR_URL;
var __CHARACTER_CONSTRUCTOR_URL = '/api/get-constructor-characters';
exports.__CHARACTER_CONSTRUCTOR_URL = __CHARACTER_CONSTRUCTOR_URL;
var __ENEMY_DETAILS_URL = '/api/get-constructor-ground-enemy';
var __ENEMY_CONSTRUCTOR_URL = '/api/get-constructor-ground-enemy-redactor';
exports.__ENEMY_CONSTRUCTOR_URL = __ENEMY_CONSTRUCTOR_URL;
var __MAP_DATA_URL = '/app/get-all-maps';
exports.__MAP_DATA_URL = __MAP_DATA_URL;


/***/ }),

/***/ "./src/redactor/initStartObject.ts":
/*!*****************************************!*\
  !*** ./src/redactor/initStartObject.ts ***!
  \*****************************************/
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
var globalVariable = __importStar(__webpack_require__(/*! ./globalVariables */ "./src/redactor/globalVariables.ts"));
var view_1 = __webpack_require__(/*! ../ui/view */ "./src/ui/view.ts");
var requestsModule_1 = __webpack_require__(/*! ../server-requests/requestsModule */ "./src/server-requests/requestsModule.ts");
function initMainEngine(_a) {
    var MainGameConstructor = _a.MainGameConstructor, BlockConstructor = _a.BlockConstructor;
    return __awaiter(this, void 0, void 0, function () {
        var mapName, blockSize, defaultWidth, defaultHeight, maxHorizontalBlocks, maxVerticalBlocks, redactorData, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    mapName = document.forms['new-map'].name.value = '';
                    blockSize = 50, defaultWidth = (window.innerWidth / blockSize).toFixed(), defaultHeight = (window.innerHeight / blockSize).toFixed(), maxHorizontalBlocks = 200, maxVerticalBlocks = 150;
                    setMapSizeToForm({ width: defaultWidth, height: defaultHeight });
                    _b = {
                        mapMoveSpeed: 20,
                        mapWidth: defaultWidth,
                        mapHeight: defaultHeight,
                        mapDefaultWidth: defaultWidth,
                        mapDefaultHeight: defaultHeight,
                        maxHorizontalBlocks: maxHorizontalBlocks,
                        maxVerticalBlocks: maxVerticalBlocks,
                        blockSize: blockSize,
                        allRedactorBlock: fillBlockMap({
                            BlockConstructor: BlockConstructor,
                            horizontalBlocks: defaultWidth,
                            verticalBlock: defaultHeight,
                            blockSize: blockSize
                        })
                    };
                    return [4 /*yield*/, requestsModule_1.getData({ url: globalVariable.__HOST + globalVariable.__BLOCK_CONSTRUCTOR_URL,
                            method: 'GET', data: null, headers: null })];
                case 1:
                    _b.blockDatabase = _c.sent();
                    return [4 /*yield*/, requestsModule_1.getData({ url: globalVariable.__HOST + globalVariable.__BLOCK_BACKGROUND_CONSTRUCTOR_URL,
                            method: 'GET', data: null, headers: null })];
                case 2:
                    _b.backgroundDatabase = _c.sent();
                    return [4 /*yield*/, requestsModule_1.getData({ url: globalVariable.__HOST + globalVariable.__CHARACTER_CONSTRUCTOR_URL,
                            method: 'GET', data: null, headers: null })];
                case 3:
                    _b.charactersDatabase = _c.sent();
                    return [4 /*yield*/, requestsModule_1.getData({ url: globalVariable.__HOST + globalVariable.__ENEMY_CONSTRUCTOR_URL,
                            method: 'GET', data: null, headers: null })];
                case 4: return [4 /*yield*/, (_b.enemyDatabase = _c.sent(),
                        _b)];
                case 5:
                    redactorData = _c.sent();
                    //console.log(redactorData.backgroundDatabase)
                    return [2 /*return*/, new MainGameConstructor(__assign({}, redactorData))];
            }
        });
    });
}
exports.initMainEngine = initMainEngine;
function setMapSizeToForm(_a) {
    var width = _a.width, height = _a.height;
    var form = document.forms['map-size'];
    form['horizontalBlock'].value = width;
    form['verticalBlock'].value = height;
}
exports.setMapSizeToForm = setMapSizeToForm;
function fillBlockMap(_a) {
    var BlockConstructor = _a.BlockConstructor, horizontalBlocks = _a.horizontalBlocks, verticalBlock = _a.verticalBlock, blockSize = _a.blockSize;
    var blockArray = [];
    var horizontalEnds = 0;
    var verticalEnds = 0;
    var blockData = {
        x: 0,
        y: 0,
        width: blockSize,
        height: blockSize,
        index: 0
    };
    for (var i = 0; i < horizontalBlocks * verticalBlock; i++) {
        blockData.y = verticalEnds;
        blockData.x = horizontalEnds;
        blockData.index = i;
        verticalEnds = (verticalEnds < ((verticalBlock - 1) * blockSize)) ? verticalEnds + blockSize : 0;
        horizontalEnds = (verticalEnds == 0) ? horizontalEnds + blockSize : horizontalEnds;
        blockArray = blockArray.concat(new BlockConstructor(__assign({}, blockData)));
    }
    return blockArray;
}
exports.fillBlockMap = fillBlockMap;
function backToObject(_a) {
    var data = _a.data, constructor = _a.constructor;
    var res = Object.create(constructor);
    var finalObject = Object.assign(Object.create(res.prototype), data);
    return finalObject;
}
exports.backToObject = backToObject;
function renderBlockBox(_a) {
    var mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(this.yMove > 0 - 100 && this.xMove > 0 - 100 && this.yMove < window.innerHeight + 100 && this.xMove < window.innerWidth + 100)) return [3 /*break*/, 4];
                    if (!!this.details) return [3 /*break*/, 1];
                    view_1.createFrame.call(this, { mainObject: mainObject });
                    return [3 /*break*/, 4];
                case 1: return [4 /*yield*/, view_1.backgroundRender.call(this, { mainObject: mainObject })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, view_1.createBlockPicture.call(this, { mainObject: mainObject })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.renderBlockBox = renderBlockBox;


/***/ }),

/***/ "./src/redactor/panelFormPartGenerator.ts":
/*!************************************************!*\
  !*** ./src/redactor/panelFormPartGenerator.ts ***!
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
var globalVariables_1 = __webpack_require__(/*! ./globalVariables */ "./src/redactor/globalVariables.ts");
function generateInput(_a) {
    var fileContainer = _a.fileContainer, target = _a.target;
    return __awaiter(this, void 0, void 0, function () {
        var blockDetails, innerText, itemData, currentDescriptionId, blockAlertMessage, blockPreviewImage, localPicture;
        return __generator(this, function (_b) {
            blockDetails = target.details;
            currentDescriptionId = new Date().getTime();
            blockAlertMessage = document.querySelector('#block-alert-message');
            blockPreviewImage = document.querySelector('#block-preview-image');
            /*
            "collision": true,
                    "texture": "/level-creator/assets/block/block-3.png",
                    "isDestroy": false
            */
            /*  ==============================    Blocks settings & Parameters  ===================== */
            innerText = "\n        <h1>Block size</h1>\n        <h3>Block width</h3>\n            <p>Size of block width in pixels</p>\n            <input type='number' min=\"1\" max=\"200\" id=" + ('width-property-' + currentDescriptionId) + " value=" + ((target.width) ? target.width : 0) + " />\n            <button data-target='save-width-btn' class=\"main-btn\">Save width</button>";
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-width-' + currentDescriptionId
            });
            blockPreviewImage['width'] = target.width;
            fileContainer.appendChild(itemData);
            innerText = "\n        <h3>Block height</h3>\n            <p>Size of block height in pixels</p>\n            <input type='number' min=\"1\" max=\"200\" id=" + ('height-property-' + currentDescriptionId) + " value=" + ((target.height) ? target.height : 0) + " />\n            <button data-target='save-height-btn' class=\"main-btn\">Save height</button>";
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-height-' + currentDescriptionId
            });
            blockPreviewImage['height'] = target.height;
            fileContainer.appendChild(itemData);
            /*  ==============================    Description  ===================== */
            if (blockDetails.description) {
                innerText = "<h3>Description</h3>\n        <textarea type='text' id=" + ('description-field-' + currentDescriptionId) + " >" + blockDetails.description + "</textarea>\n        <button data-target='save-description-btn' class=\"main-btn\">Save Description</button> <hr>";
                itemData = elementCreator({
                    tagname: "div",
                    classList: 'single-block-description',
                    innerText: innerText,
                    idName: 'description-' + currentDescriptionId
                });
                fileContainer.appendChild(itemData);
            }
            /*  ==============================    rulers & tips  ===================== */
            if (blockDetails.rules) {
                // tips
                innerText = "<h3>Tips</h3>\n            <p>A tips how to us this objects, it could be a part of some message</p>\n            <textarea type='text' id=" + ('tips-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.tips) ? blockDetails.rules.tips : '') + "</textarea>\n            <button data-target='save-tips-btn' class=\"main-btn\">Save Tips</button> <hr>";
                itemData = elementCreator({
                    tagname: "div",
                    classList: 'single-block-description',
                    innerText: innerText,
                    idName: 'description-tips-' + currentDescriptionId
                });
                fileContainer.appendChild(itemData);
                // successText
                innerText = "<h3>Success Text</h3>\n            <p>Display a message when you do everything write: collect date/key, bring data/key </p>\n            <textarea type='text' id=" + ('successText-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.successText) ? blockDetails.rules.successText : '') + "</textarea>\n            <button data-target='save-success-text-btn' class=\"main-btn\">Save Text</button> <hr>";
                itemData = elementCreator({
                    tagname: "div",
                    classList: 'single-block-description',
                    innerText: innerText,
                    idName: 'description-successText-' + currentDescriptionId
                });
                fileContainer.appendChild(itemData);
                // requireText
                innerText = "<h3>Require Text</h3>\n            <p>Display a message describe some Requirement for this object to work</p>\n            <textarea type='text' id=" + ('requireText-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.requireText) ? blockDetails.rules.requireText : '') + "</textarea>\n            <button data-target='save-require-text-btn' class=\"main-btn\">Save Require Text</button> <hr>";
                itemData = elementCreator({
                    tagname: "div",
                    classList: 'single-block-description',
                    innerText: innerText,
                    idName: 'description-requireText-' + currentDescriptionId
                });
                fileContainer.appendChild(itemData);
                // require
                innerText = "<h3>Require Object</h3>\n            <p>Require message, display object needs for this block to everything work fine</p>\n            <textarea type='text' id=" + ('require-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.require) ? blockDetails.rules.require : '') + "</textarea>\n            <button data-target='save-require-btn' class=\"main-btn\">Save Require Object</button> <hr>";
                itemData = elementCreator({
                    tagname: "div",
                    classList: 'single-block-description',
                    innerText: innerText,
                    idName: 'description-requireText-' + currentDescriptionId
                });
                fileContainer.appendChild(itemData);
                localPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : 'computer-data.png';
                innerText = "<h3>Contain Object</h3>\n            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level</p>\n            <textarea type='text' id=" + ('contain-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.contain) ? blockDetails.rules.contain : '') + "</textarea>\n            <img width=\"100\" id=" + ('contain-picture-' + currentDescriptionId) + "\n            src=\"" + (globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + localPicture) + "\">\n            <select id=\"preview-contain-object\" data-target='select-preview-btn'>\n                <option value=\"computer-data.png\">Computer data</option>\n                <option value=\"red-card.png\">Red card</option>\n                <option value=\"blue-card.png\">Blue card</option>\n                <option value=\"green-card.png\">Green card</option>\n                <option value=\"yellow-card.png\">Yellow card</option>\n                <option value=\"power-cell.png\">Power Cell</option>\n            </select>\n            <button data-target='save-contain-btn' class=\"main-btn\">Save</button> <hr>";
                itemData = elementCreator({
                    tagname: "div",
                    classList: 'single-block-description',
                    innerText: innerText,
                    idName: 'description-requireText-' + currentDescriptionId
                });
                fileContainer.appendChild(itemData);
            }
            if (blockDetails.innerObject) {
            }
            if (blockDetails.type) {
            }
            // change-size
            fileContainer.addEventListener('click', function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var fieldName, fieldResults, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                fieldName = '';
                                _a = event.target.dataset.target;
                                switch (_a) {
                                    case 'save-width-btn': return [3 /*break*/, 1];
                                    case 'save-height-btn': return [3 /*break*/, 3];
                                    case 'save-description-btn': return [3 /*break*/, 5];
                                    case 'save-tips-btn': return [3 /*break*/, 7];
                                    case 'save-success-text-btn': return [3 /*break*/, 9];
                                    case 'save-require-text-btn': return [3 /*break*/, 11];
                                    case 'save-require-btn': return [3 /*break*/, 13];
                                    case 'save-contain-btn': return [3 /*break*/, 15];
                                }
                                return [3 /*break*/, 17];
                            case 1: return [4 /*yield*/, changeDataInBlock({
                                    key: 'width',
                                    fieldSelector: '#' + 'width-property-' + currentDescriptionId,
                                    target: target
                                })];
                            case 2:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                blockPreviewImage['width'] = target.width;
                                blockPreviewImage['height'] = target.height;
                                return [3 /*break*/, 18];
                            case 3: return [4 /*yield*/, changeDataInBlock({
                                    key: 'height',
                                    fieldSelector: '#' + 'height-property-' + currentDescriptionId,
                                    target: target
                                })];
                            case 4:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                blockPreviewImage['width'] = target.width;
                                blockPreviewImage['height'] = target.height;
                                return [3 /*break*/, 18];
                            case 5: return [4 /*yield*/, changeDataInBlock({
                                    key: 'description',
                                    fieldSelector: '#' + 'description-field-' + currentDescriptionId,
                                    target: target.details
                                })];
                            case 6:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'description field' : ' save description field';
                                return [3 /*break*/, 18];
                            case 7: return [4 /*yield*/, changeDataInBlock({
                                    key: 'tips',
                                    fieldSelector: '#' + 'tips-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 8:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'tips field' : ' save tips field';
                                return [3 /*break*/, 18];
                            case 9: return [4 /*yield*/, changeDataInBlock({
                                    key: 'successText',
                                    fieldSelector: '#' + 'successText-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 10:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'description field' : ' save description field';
                                return [3 /*break*/, 18];
                            case 11: return [4 /*yield*/, changeDataInBlock({
                                    key: 'requireText',
                                    fieldSelector: '#' + 'requireText-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 12:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'require text field' : ' save require text field';
                                return [3 /*break*/, 18];
                            case 13: return [4 /*yield*/, changeDataInBlock({
                                    key: 'require',
                                    fieldSelector: '#' + 'require-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 14:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'require field' : ' save require field';
                                return [3 /*break*/, 18];
                            case 15: return [4 /*yield*/, changeDataInBlock({
                                    key: 'contain',
                                    fieldSelector: '#' + 'contain-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 16:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                return [3 /*break*/, 18];
                            case 17: return [2 /*return*/, false];
                            case 18:
                                blockAlertMessage.innerHTML = (fieldResults) ? "<p class=\"side-panel-success\" > Successfully saved '" + fieldName + "' </p>" : "<p class=\"side-panel-error\" >There is a problem in '" + fieldName + "' i can't save</p>";
                                return [2 /*return*/];
                        }
                    });
                });
            });
            fileContainer.addEventListener('change', function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, requiredPreviewPic, pic, link;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = event.target.dataset.target;
                                switch (_a) {
                                    case 'select-preview-btn': return [3 /*break*/, 1];
                                }
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, changeDataInBlock({
                                    key: 'objectPicture',
                                    fieldSelector: '#preview-require-object',
                                    target: target.details.rules
                                })];
                            case 2:
                                _b.sent();
                                return [3 /*break*/, 4];
                            case 3: return [2 /*return*/, false];
                            case 4:
                                requiredPreviewPic = document.querySelector('#contain-picture-' + currentDescriptionId);
                                pic = (target.details.rules.objectPicture) ? target.details.rules.objectPicture : 'computer-data.png';
                                link = globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + pic;
                                console.log(pic, link);
                                requiredPreviewPic['src'] = link; //computer-data.png
                                return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.generateInput = generateInput;
function changeDataInBlock(_a) {
    var key = _a.key, fieldSelector = _a.fieldSelector, target = _a.target;
    return __awaiter(this, void 0, void 0, function () {
        var blockAlertMessage, currentField;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    blockAlertMessage = document.querySelector('#block-alert-message');
                    return [4 /*yield*/, document.querySelector(fieldSelector)];
                case 1:
                    currentField = _b.sent();
                    console.log(currentField.validity.valid);
                    if (!currentField.validity.valid) {
                        blockAlertMessage.innerHTML = "Invalid Value of " + key;
                        return [2 /*return*/, false];
                    }
                    target[key] = (currentField.value) ? currentField.value : null;
                    return [2 /*return*/, (currentField.value && target[key] && key && fieldSelector) ? true : false];
            }
        });
    });
}
function loadInnerData(_a) {
    var fileContainer = _a.fileContainer, target = _a.target;
    var blockDetails = target.details;
    var backgroundImage = (target.backgroundTexture) ? "<img width=\"50\" src=\"" + (globalVariables_1.__HOST + target.backgroundTexture.texture) + "\" alt=\"" + target.backgroundTexture.id + "\">" : "";
    var innerText = "<div class=\"block-description-wrapper\">\n    <img id=\"block-preview-image\" width=\"200\" src=\"" + (globalVariables_1.__HOST + blockDetails.texture) + "\">\n    <div id=\"block-alert-message\"></div>\n    <ul>\n        <li>Name: " + blockDetails.id + "</li>\n        <li>Index: " + target.index + "</li>\n        <li>Type: " + ((blockDetails.type) ? blockDetails.type : '') + "</li>\n        <li>width: " + target.width + "</li>\n        <li>height: " + target.height + "</li>\n        <li>X: " + target.x + "</li>\n        <li>Y: " + target.y + "</li>\n\n    <p>" + ((target.backgroundTexture) ? "Background texture" : "") + "</p>\n    " + backgroundImage + "\n    </ul></div><hr>";
    /*"imageWidth": 34,
    "imageHeight": 45,
    "animationSteps": 10,
    "numberOfItems": 1,
    "numberOfVerticalItems": 1,
    "playerDirectionHorizontal": "left",
    "detectRange": 550,
    "speed": 1,*/
    var itemData = elementCreator({
        tagname: "div",
        classList: 'single-block-description',
        innerText: innerText,
        idName: null
    });
    fileContainer.appendChild(itemData);
}
exports.loadInnerData = loadInnerData;
function elementCreator(_a) {
    var tagname = _a.tagname, classList = _a.classList, innerText = _a.innerText, idName = _a.idName;
    var newDocument = document.createElement(tagname);
    newDocument.className = (classList) ? classList : false;
    newDocument.innerHTML = innerText;
    if (idName)
        newDocument.setAttribute("id", idName);
    return newDocument;
}
exports.elementCreator = elementCreator;


/***/ }),

/***/ "./src/redactor/sidePanelActions.ts":
/*!******************************************!*\
  !*** ./src/redactor/sidePanelActions.ts ***!
  \******************************************/
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
var globalVariable = __importStar(__webpack_require__(/*! ./globalVariables */ "./src/redactor/globalVariables.ts"));
var requestsModule_1 = __webpack_require__(/*! ../server-requests/requestsModule */ "./src/server-requests/requestsModule.ts");
var preview_1 = __webpack_require__(/*! ../ui/preview */ "./src/ui/preview.ts");
var initStartObject_1 = __webpack_require__(/*! ./initStartObject */ "./src/redactor/initStartObject.ts");
var blockConstructor_1 = __webpack_require__(/*! ../constructors/blockConstructor */ "./src/constructors/blockConstructor.ts");
var blockDataRedactorModule_1 = __webpack_require__(/*! ./blockDataRedactorModule */ "./src/redactor/blockDataRedactorModule.ts");
function setMapSize(_a) {
    var mainObject = _a.mainObject, BlockConstructor = _a.BlockConstructor;
    var form = document.forms['map-size'];
    var errorField = document.querySelector('#map-size-error');
    var button = document.querySelector('#set-map-size');
    button.addEventListener('click', function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData, _i, form_1, field, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        formData = {};
                        for (_i = 0, form_1 = form; _i < form_1.length; _i++) {
                            field = form_1[_i];
                            if (field.name && field.value) {
                                formData[field.name] = field.value;
                            }
                            if (field.name && !field.value)
                                return [2 /*return*/, false];
                        }
                        if (!(parseInt(formData['horizontalBlock']) < parseInt(mainObject.mapDefaultWidth) || parseInt(formData['verticalBlock']) < parseInt(mainObject.mapDefaultHeight))) return [3 /*break*/, 1];
                        errorField.innerHTML = "<p class='side-panel-error'>Map min size is " + mainObject.mapDefaultWidth + " x " + mainObject.mapDefaultHeight + "</p>";
                        return [2 /*return*/, false];
                    case 1:
                        if (!(parseInt(formData['horizontalBlock']) > parseInt(mainObject.maxHorizontalBlocks) || parseInt(formData['verticalBlock']) > parseInt(mainObject.maxVerticalBlocks))) return [3 /*break*/, 2];
                        errorField.innerHTML = "<p class='side-panel-error'>Map max size is " + mainObject.maxHorizontalBlocks + " x " + mainObject.maxVerticalBlocks + "</p>";
                        return [2 /*return*/, false];
                    case 2:
                        _a = errorField;
                        return [4 /*yield*/, "<p class='side-panel-error'>Please wait map is build...</p>"];
                    case 3:
                        _a.innerHTML = _b.sent();
                        return [4 /*yield*/, blockDataRedactorModule_1.changeBlockArraySize({ mainObject: mainObject, formData: formData, BlockConstructor: BlockConstructor })];
                    case 4:
                        _b.sent();
                        errorField.innerHTML = "<p class=\"side-panel-success\">map size set " + formData['horizontalBlock'] + " x " + formData['verticalBlock'] + " blocks</p>";
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    });
}
exports.setMapSize = setMapSize;
function getMapData(_a) {
    var url = _a.url, mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        var mapName, res, convertToObject, sizeForm;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mapName = document.forms['new-map'].name;
                    return [4 /*yield*/, requestsModule_1.getData({
                            url: url,
                            method: 'GET',
                            data: null,
                            headers: null
                        })];
                case 1:
                    res = _b.sent();
                    return [4 /*yield*/, res.allMapObjects.map(function (block) {
                            return initStartObject_1.backToObject({ data: block, constructor: blockConstructor_1.BlockConstructor });
                        })];
                case 2:
                    convertToObject = _b.sent();
                    mapName.value = res.name;
                    mainObject.mapWidth = res.mapSize.width;
                    mainObject.mapHeight = res.mapSize.height;
                    sizeForm = document.forms['map-size'];
                    sizeForm.horizontalBlock.value = mainObject.mapWidth;
                    sizeForm.verticalBlock.value = mainObject.mapHeight;
                    mainObject.allRedactorBlock = convertToObject;
                    return [2 /*return*/];
            }
        });
    });
}
function createNewMap() {
    var createMap = document.querySelector("#createMap");
    createMap.addEventListener('click', function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                location.reload();
                return [2 /*return*/];
            });
        });
    });
}
exports.createNewMap = createNewMap;
function loadMap(_a) {
    var mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        var openButton, selectFiles, fileContainer, closeDialog;
        var _this = this;
        return __generator(this, function (_b) {
            openButton = document.querySelector("#openMap");
            selectFiles = document.querySelector("#select-files");
            fileContainer = document.querySelector("#inner-content");
            closeDialog = document.querySelector("#closeDialog");
            openButton.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                var mapFile;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            preview_1.showElement({ element: selectFiles });
                            return [4 /*yield*/, requestsModule_1.getData({ url: globalVariable.__HOST + globalVariable.__MAP_DATA_URL,
                                    method: 'GET',
                                    data: null,
                                    headers: null
                                })];
                        case 1:
                            mapFile = _a.sent();
                            generateContent({ displayElement: fileContainer, data: mapFile, mainObject: mainObject, selectFiles: selectFiles });
                            return [2 /*return*/];
                    }
                });
            }); });
            closeDialog.addEventListener('click', function () {
                preview_1.hideElement({ element: selectFiles });
            });
            return [2 /*return*/];
        });
    });
}
exports.loadMap = loadMap;
function generateContent(_a) {
    var displayElement = _a.displayElement, data = _a.data, mainObject = _a.mainObject, selectFiles = _a.selectFiles;
    if (!data || !displayElement)
        return false;
    displayElement.innerHTML = '';
    var _loop_1 = function (file) {
        var innerFile = blockCreator({ tag: 'div',
            styleClass: 'single-item-wrapper',
            innerContent: "<h2>" + file.name + "</h2>"
        });
        innerFile.addEventListener('click', function () {
            getMapData({
                url: file.link + '/' + file.name,
                mainObject: mainObject
            });
            preview_1.hideElement({ element: selectFiles });
        });
        displayElement.appendChild(innerFile);
    };
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var file = data_1[_i];
        _loop_1(file);
    }
}
function blockCreator(_a) {
    var tag = _a.tag, styleClass = _a.styleClass, innerContent = _a.innerContent;
    var newBlock = document.createElement(tag);
    newBlock.className = styleClass;
    newBlock.innerHTML = innerContent;
    return newBlock;
}
exports.blockCreator = blockCreator;
function saveMap(_a) {
    var mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        var form, button, messageField;
        return __generator(this, function (_b) {
            form = document.forms['new-map'];
            button = document.querySelector('#save-map-button');
            messageField = document.querySelector('#save-map-error');
            messageField.innerHTML = '';
            button.addEventListener('click', function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var resultForm, saveData, mapFile;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                event.preventDefault();
                                resultForm = getFormData({ form: form });
                                if (!resultForm) return [3 /*break*/, 2];
                                if (resultForm['status'] === 'reject') {
                                    messageField.innerHTML = "<p class=\"side-panel-error\">Fail to save map, check map Name</p> ";
                                    return [2 /*return*/, false];
                                }
                                resultForm['mapSize'] = {
                                    width: mainObject.mapWidth,
                                    height: mainObject.mapHeight
                                };
                                saveData = new Date();
                                resultForm['creatingTime'] = saveData.getTime();
                                resultForm['allMapObjects'] = mainObject.allRedactorBlock;
                                console.log(resultForm, 'save', mainObject);
                                return [4 /*yield*/, requestsModule_1.postData({ url: globalVariable.__HOST + globalVariable.__BLOCK_CONSTRUCTOR_URL,
                                        method: 'POST',
                                        data: resultForm,
                                        headers: null })];
                            case 1:
                                mapFile = _a.sent();
                                if (mapFile) {
                                    messageField.innerHTML = "<p>Save time: " + (saveData.getHours() - 1) + " : " + saveData.getMinutes() + " : " + saveData.getSeconds() + "</p>\n                <a href=" + mapFile.url + " onclick=\"(function(){ window.open('" + mapFile.url + "')})()\" target=\"_blank\">Open in new window</a>";
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.saveMap = saveMap;
function getFormData(_a) {
    var form = _a.form;
    if (!form)
        return false;
    var object = {};
    for (var _i = 0, form_2 = form; _i < form_2.length; _i++) {
        var formItems = form_2[_i];
        if (formItems.name && formItems.value) {
            object[formItems.name] = formItems.value;
        }
        else if (formItems.name && !formItems.value) {
            return { message: "Incorrect Data", status: "reject" };
        }
    }
    return object;
}


/***/ }),

/***/ "./src/server-requests/requestsModule.ts":
/*!***********************************************!*\
  !*** ./src/server-requests/requestsModule.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    }).then(function (res) {
        if (res.status != 200) {
            return { status: 'reject', message: res.statusText };
        }
        return res.json();
    })
        .then(function (data) { return data; })
        .catch(function (error) {
        console.log(error);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        if (error) {
            return { message: "500 No server connection!", status: "error" };
        }
    });
}
exports.getData = getData;
function postData(_a) {
    var url = _a.url, method = _a.method, data = _a.data, headers = _a.headers;
    var resultHeader = Object.assign({
        'Content-Type': 'application/json'
    }, headers || false);
    return fetch(url, {
        method: (method) ? method : 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: resultHeader,
        body: (data) ? JSON.stringify(data) : null
    }).then(function (res) {
        return res.json();
    })
        .then(function (data) { return data; });
}
exports.postData = postData;


/***/ }),

/***/ "./src/ui/preview.ts":
/*!***************************!*\
  !*** ./src/ui/preview.ts ***!
  \***************************/
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
var globalVariable = __importStar(__webpack_require__(/*! ../redactor/globalVariables */ "./src/redactor/globalVariables.ts"));
function previewOfBlock(_a) {
    var selectedBlockPanelItem = _a.selectedBlockPanelItem, event = _a.event;
    var previewElement = document.querySelector('#selected-item');
    if (!selectedBlockPanelItem)
        hideElement({ element: previewElement });
    else {
        showElement({ element: previewElement });
        previewElement['style'] = "margin-top: " + (event.clientY + 10) + "px; margin-left: " + (event.clientX + 10) + "px;";
        previewElement.innerHTML = "<img src=" + (globalVariable.__HOST + selectedBlockPanelItem.texture) + " >";
    }
}
exports.previewOfBlock = previewOfBlock;
function hideElement(_a) {
    var element = _a.element;
    if (!element)
        return false;
    element.style = 'display: none';
}
exports.hideElement = hideElement;
function showElement(_a) {
    var element = _a.element;
    if (!element)
        return false;
    element.style = 'display: block';
}
exports.showElement = showElement;


/***/ }),

/***/ "./src/ui/view.ts":
/*!************************!*\
  !*** ./src/ui/view.ts ***!
  \************************/
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
var blockInteractModule_1 = __webpack_require__(/*! ../redactor/blockInteractModule */ "./src/redactor/blockInteractModule.ts");
var preview_1 = __webpack_require__(/*! ./preview */ "./src/ui/preview.ts");
var sidePanelActions_1 = __webpack_require__(/*! ../redactor/sidePanelActions */ "./src/redactor/sidePanelActions.ts");
var blockDataRedactorModule_1 = __webpack_require__(/*! ../redactor/blockDataRedactorModule */ "./src/redactor/blockDataRedactorModule.ts");
var blockDataRedactorModule_2 = __webpack_require__(/*! ../redactor/blockDataRedactorModule */ "./src/redactor/blockDataRedactorModule.ts");
var globalVariable = __importStar(__webpack_require__(/*! ../redactor/globalVariables */ "./src/redactor/globalVariables.ts"));
function initView() {
    var canvas = document.querySelector('#redactor-field');
    this.contextWidth = window.innerWidth;
    this.contextHeight = window.innerHeight;
    canvas.width = this.contextWidth;
    canvas.height = this.contextHeight;
    this.ctx = canvas.getContext('2d');
}
exports.initView = initView;
function mapMoveControllers(_a) {
    var mainObject = _a.mainObject;
    document.addEventListener('keydown', function (event) {
        var xMoveValue = 0, yMoveValue = 0;
        if (mainObject.activeDescriptionFields)
            return false;
        switch (event.keyCode) {
            case 87:
                yMoveValue = mainObject.mapMoveSpeed;
                break;
            case 68:
                xMoveValue = mainObject.mapMoveSpeed * -1;
                break;
            case 83:
                yMoveValue = mainObject.mapMoveSpeed * -1;
                break;
            case 65:
                xMoveValue = mainObject.mapMoveSpeed;
                break;
            case 77:
                blockDataRedactorModule_2.miniMapper({ mainObject: mainObject });
                break;
            default:
                return false;
        }
        blockInteractModule_1.moveAllScene({ mainObject: mainObject, xMoveValue: xMoveValue, yMoveValue: yMoveValue });
    });
    document.addEventListener('click', function (event) {
        event.preventDefault();
        var result = null;
        for (var _i = 0, _a = mainObject.allRedactorBlock; _i < _a.length; _i++) {
            var block = _a[_i];
            if (event.target['nodeName'] != 'CANVAS')
                continue;
            result = blockInteractModule_1.collisionDetector({ object: block, target: {
                    x: event.clientX - event.target['offsetLeft'],
                    y: event.clientY - event.target['offsetTop'],
                    width: 5,
                    height: 5
                } });
            if (result) {
                //console.log( block.index, " < Block index")
                blockDataRedactorModule_1.openRedactorWindow({ blockData: block, mainObject: mainObject });
                blockInteractModule_1.changeObjectModel({ result: result, mainObject: mainObject });
                break;
            }
        }
    });
    document.addEventListener('mousemove', function (event) {
        preview_1.previewOfBlock({ selectedBlockPanelItem: mainObject.selectedBlockPanelItem, event: event });
    });
    document.addEventListener('click', function (event) {
        var buttonId = event.target['dataset'].buttonId;
        switch (buttonId) {
            case 'redactorBlocks':
                renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.blockDatabase, selectItem: null });
                break;
            case 'redactorDecoration':
                renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.backgroundDatabase, selectItem: buttonId });
                break;
            case 'redactorCharacters':
                renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.charactersDatabase, selectItem: null });
                break;
            case 'redactorEnemy':
                renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.enemyDatabase, selectItem: null });
                // console.log('enemy')  enemyDatabase
                break;
            default:
                return false;
        }
    });
}
exports.mapMoveControllers = mapMoveControllers;
function renderItemsToSideList(_a) {
    var mainObject = _a.mainObject, dataBase = _a.dataBase, selectItem = _a.selectItem;
    var target = document.querySelector('#side-instrumental-panel');
    target.innerHTML = '';
    var _loop_1 = function (blockItem) {
        //console.log(blockItem)
        var obj = sidePanelActions_1.blockCreator({
            tag: 'div',
            styleClass: 'single-block-item',
            innerContent: "<img width=\"100%\" title=\"" + ((blockItem.details) ? blockItem.details.description : blockItem.description) + "\" src='" + (globalVariable.__HOST + blockItem['texture']) + "'>"
        });
        obj.addEventListener('click', function (event) {
            sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: blockItem });
        });
        target.appendChild(obj);
    };
    for (var _i = 0, dataBase_1 = dataBase; _i < dataBase_1.length; _i++) {
        var blockItem = dataBase_1[_i];
        _loop_1(blockItem);
    }
    target.prepend(createDestroyBlock({ mainObject: mainObject, selectItem: selectItem }));
}
exports.renderItemsToSideList = renderItemsToSideList;
function sidePanelItemsSelectProcess(_a) {
    var mainObject = _a.mainObject, blockItem = _a.blockItem;
    console.log(blockItem);
    if (mainObject.selectedBlockPanelItem) {
        mainObject.selectedBlockPanelItem = (blockItem.id != mainObject.selectedBlockPanelItem.id) ? blockItem : null;
    }
    else
        mainObject.selectedBlockPanelItem = blockItem;
    preview_1.previewOfBlock({ selectedBlockPanelItem: mainObject.selectedBlockPanelItem, event: event });
}
function createDestroyBlock(_a) {
    var mainObject = _a.mainObject, selectItem = _a.selectItem;
    var obj = document.createElement('div');
    obj.className = 'single-block-item';
    obj.innerHTML = "<img title=\"" + ((selectItem === "redactorDecoration") ? 'Delete only background' : 'Delete block item') + "\" width=\"100%\" src='" + (globalVariable.__HOST + '/level-creator/assets/block/destroy.png') + "'>";
    obj.addEventListener('click', function (event) {
        sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: {
                id: 'destroyer',
                destroyer: (selectItem) ? selectItem : 'destroyer',
                texture: '/level-creator/assets/block/destroy.png'
            } });
    });
    return obj;
}
function clearView() {
    if (!this.ctx)
        return false;
    this.ctx.clearRect(0, 0, this.contextWidth, this.contextHeight);
}
exports.clearView = clearView;
function backgroundRender(_a) {
    var mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        var imgBackground;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!this.details)
                        return [2 /*return*/, false];
                    if (!this.backgroundTexture) return [3 /*break*/, 2];
                    imgBackground = new Image();
                    imgBackground.src = globalVariable.__HOST + this.backgroundTexture.texture;
                    return [4 /*yield*/, mainObject.ctx.drawImage(imgBackground, 0, 0, this.backgroundTexture.imageWidth, this.backgroundTexture.imageHeight, this.xMove, this.yMove, this.backgroundTexture.width, this.backgroundTexture.height)
                        //console.log(this.backgroundTexture)
                    ];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.backgroundRender = backgroundRender;
function createBlockPicture(_a) {
    var mainObject = _a.mainObject;
    return __awaiter(this, void 0, void 0, function () {
        var img;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!this.details)
                        return [2 /*return*/, false
                            //mainObject.ctx.save();
                        ];
                    img = new Image();
                    img.src = globalVariable.__HOST + this.details.texture;
                    return [4 /*yield*/, mainObject.ctx.drawImage(img, 0, 0, this.details.imageWidth, this.details.imageHeight, this.xMove, this.yMove, this.width, this.height)
                        // mainObject.ctx.restore()
                    ];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createBlockPicture = createBlockPicture;
function createFrame(_a) {
    var mainObject = _a.mainObject;
    if (!mainObject.ctx)
        return false;
    mainObject.ctx.fillStyle = "rgba(225, 255, 255, .3)";
    mainObject.ctx.fillText(this.index, this.xMove + 5, this.yMove + 15);
    mainObject.ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    mainObject.ctx.beginPath();
    mainObject.ctx.rect(this.xMove, this.yMove, this.width, this.height);
    mainObject.ctx.stroke();
    //mainObject.ctx.stroke()
}
exports.createFrame = createFrame;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91aS92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9zZXJ2ZXIvcHVibGljL2xldmVsLWNyZWF0b3IvZGlzdC1zY3JpcHRzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDUzNGI7IH1cXG5cXG4uc2lkZS1tZW51LXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjYmJiYmJiO1xcbiAgICBoZWlnaHQ6IDk2dmg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi5nYW1lLWZpZWxkLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5tYWluLWJhbm5lci1jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcblxcbioge1xcbiAgICBjb2xvcjogIzIyMTgyODsgfVxcblxcbmxlZ2VuZCBoMyB7XFxuICAgIG1hcmdpbjogMHB4OyB9XFxuXFxubGFiZWwgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDkxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDBweDsgfVxcblxcbi5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgaW1nIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDU0cHg7IH1cXG5cXG4uc2VsZWN0ZWQtaXRlbS1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG5cXG4uaW5uZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWF4LWhlaWdodDogOTAlOyB9XFxuICAgIC5pbm5lci1jb250ZW50IGhyIHtcXG4gICAgICAgIGNvbG9yOiAjZWFlYWVhOyB9XFxuICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAuaW5uZXItY29udGVudCAuc2luZ2xlLWl0ZW0td3JhcHBlcjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0MjYzO1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyOmhvdmVyIGgyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBncmlkLWdhcDogMjBweDsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBjb2xvcjogIzcxNTE4NDsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gaW5wdXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7IH1cXG5cXG4uYWN0aXZlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk2MWU7IH1cXG5cXG4uc2lkZS1wYW5lbC1zdWNjZXNzIHtcXG4gICAgY29sb3I6ICM1Mzk3MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Mzk3MDA7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbi5zaWRlLXBhbmVsLWVycm9yIHtcXG4gICAgY29sb3I6ICNiMTAwMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMTAwMDA7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbi5ibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAgIC5ibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuICAgIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gdGV4dGFyZWEge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiYmI7IH1cXG5cXG4uY2xvc2UtZGlhbG9nIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyOXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5tYWluLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmIzMDA7XFxuICAgIGJvcmRlcjogbmF2YWpvd2hpdGU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMxNTQ3YTY0ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyOyB9XFxuXFxuLm1haW4tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZWRjMzsgfVxcblxcbi5tYWluLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYxZTAwOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL21haW4uc2Fzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9pbml0U3RhcnRPYmplY3RcIik7XHJcbnZhciBibG9ja0ludGVyYWN0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tJbnRlcmFjdE1vZHVsZVwiKTtcclxudmFyIGJsb2Nrc0Z1bmN0aW9uYWxpdHlfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5XCIpO1xyXG52YXIgQmxvY2tDb25zdHJ1Y3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJsb2NrQ29uc3RydWN0b3IoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMueCA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy54TW92ZSA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnlNb3ZlID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGRhdGEuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gKGRhdGEuZGV0YWlscykgPyBkYXRhLmRldGFpbHMgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IChkYXRhLmltYWdlV2lkdGgpID8gZGF0YS5pbWFnZVdpZHRoIDogZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gKGRhdGEuaW1hZ2VIZWlnaHQpID8gZGF0YS5pbWFnZUhlaWdodCA6IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQmxvY2tDb25zdHJ1Y3RvcjtcclxufSgpKTtcclxuZXhwb3J0cy5CbG9ja0NvbnN0cnVjdG9yID0gQmxvY2tDb25zdHJ1Y3RvcjtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyQmxvY2tCb3ggPSBpbml0U3RhcnRPYmplY3RfMS5yZW5kZXJCbG9ja0JveDtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUubW92ZVNpbmdsZUJsb2NrID0gYmxvY2tJbnRlcmFjdE1vZHVsZV8xLm1vdmVTaW5nbGVCbG9jaztcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZWxldmF0b3JNb3ZlID0gYmxvY2tzRnVuY3Rpb25hbGl0eV8xLmVsZXZhdG9yTW92ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYWluR2FtZUNvbnN0cnVjdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLm1hcE1vdmVTcGVlZCA9IGRhdGEubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMubWFwV2lkdGggPSBkYXRhLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwSGVpZ2h0ID0gZGF0YS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tYXBEZWZhdWx0V2lkdGggPSBkYXRhLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwRGVmYXVsdEhlaWdodCA9IGRhdGEubWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYWxsUmVkYWN0b3JCbG9jayA9IGRhdGEuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICB0aGlzLmJhY2tncm91bmREYXRhYmFzZSA9IGRhdGEuYmFja2dyb3VuZERhdGFiYXNlO1xyXG4gICAgICAgIHRoaXMuYmxvY2tEYXRhYmFzZSA9IChkYXRhLmJsb2NrRGF0YWJhc2UpID8gZGF0YS5ibG9ja0RhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnNEYXRhYmFzZSA9IChkYXRhLmNoYXJhY3RlcnNEYXRhYmFzZSkgPyBkYXRhLmNoYXJhY3RlcnNEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbmVteURhdGFiYXNlID0gKGRhdGEuZW5lbXlEYXRhYmFzZSkgPyBkYXRhLmVuZW15RGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gZGF0YS5ibG9ja1NpemU7XHJcbiAgICAgICAgdGhpcy5tYXhIb3Jpem9udGFsQmxvY2tzID0gZGF0YS5tYXhIb3Jpem9udGFsQmxvY2tzO1xyXG4gICAgICAgIHRoaXMubWF4VmVydGljYWxCbG9ja3MgPSBkYXRhLm1heFZlcnRpY2FsQmxvY2tzO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1pbmlNYXBBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYWluR2FtZUNvbnN0cnVjdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLk1haW5HYW1lQ29uc3RydWN0b3IgPSBNYWluR2FtZUNvbnN0cnVjdG9yO1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5pbml0VmlldyA9IHZpZXdfMS5pbml0VmlldztcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY2xlYXJWaWV3ID0gdmlld18xLmNsZWFyVmlldztcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVySXRlbXNUb1NpZGVMaXN0ID0gdmlld18xLnJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuLi9zYXNzL21haW4uc2Fzc1wiKTtcclxudmFyIHJlbmRlckNvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnMvcmVuZGVyQ29uc3RydWN0b3JcIik7XHJcbnZhciBibG9ja0NvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnMvYmxvY2tDb25zdHJ1Y3RvclwiKTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuL3VpL3ZpZXdcIik7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIHNpZGVQYW5lbEFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuL3JlZGFjdG9yL3NpZGVQYW5lbEFjdGlvbnNcIik7XHJcbi8qXHJcblYtIGNyZWF0ZSBtYXAgbmV0XHJcbiAgICBWLSB2ZXJ0aWNhbCBkaXJlY3Rpb24gb2YgYmxvY2tcclxuICAgIFYtIGJsb2NrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgViAtIGRlbGV0ZSBibG9ja1xyXG4gICAgICAgIFYtIHByZXZpZXdcclxuICAgICAgICBWLSBpbmZvcm1hdGlvblxyXG4gICAgICAgIFYtIGNoYW5nZSBkYXRhXHJcbiAgICAgICAgICAgIFYtIHdpZHRoXHJcbiAgICAgICAgICAgIFYtIGhlaWdodFxyXG4gICAgICAgICAgICAtIHhcclxuICAgICAgICAgICAgLSB5XHJcbiAgICAgICAgICAgIFYtIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIFYtIHJ1bGVyc1xyXG4gICAgICAgICAgICAtIGVsZXZhdG9yIHNwZWVkXHJcblYtIHNpZGUgcGFuZWxcclxuICAgIFYtIG5ldyBtYXBcclxuICAgICAgICBWLSBtYXAgbmFtZVxyXG4gICAgICAgIFYtIHNhdmUgbWFwIGluIGpzb25cclxuICAgICAgICBWLSBjaGFuZ2UgbWFwIHNpemVcclxuICAgICAgICBWLSBvdmVyd3JpdGUgbWFwXHJcbiAgICBWLSBsb2FkIG1hcFxyXG4gICAgVi0gbWluaW1hcFxyXG4gICAgVi0gZGlmZmVyZW50IHNlY3Rpb25zIG9mIG9iamVjdHNcclxuICAgICAgICBWLSBibG9ja1xyXG4gICAgICAgIFYtIGNoYXJhY3RlcnNcclxuICAgICAgICBWLSBlbmVteVxyXG4gICAgICAgIFYtIGJhY2tncm91bmRcclxuXHJcblxyXG4tIGFkZCBzdGFpcnNcclxuLSBhZGQgbGVhZGVyc1xyXG5WLSBhZGQgaG9yaXpvbnRhbCBlbGV2YXRvclxyXG5WLSBhZGQgYmFja2dyb3VuZCB0ZXh0dXJlIGFuZCBkaXNwbGF5IGl0XHJcbiAgICBWLSBkZXN0cm95LyBjaGFuZ2UgdGV4dHVyZXMgc2VwYXJhdGVseVxyXG4gICAgLSBhZGQgdGV4dHVyZSBhbmltYXRpb25zXHJcbi0gYWRkIE5QQ1xyXG4gICAgLSBkaWFsb2dcclxuXHJcblxyXG4qL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlZGFjdG9yRW5naW5lKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2ksIF9hLCBibG9jaztcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuY2xlYXJWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDAsIF9hID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9hLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9jay5lbGV2YXRvck1vdmUoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrLnJlbmRlckJsb2NrQm94KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluT2JqZWN0LCBlbmdpbmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRTdGFydE9iamVjdF8xLmluaXRNYWluRW5naW5lKHsgTWFpbkdhbWVDb25zdHJ1Y3RvcjogcmVuZGVyQ29uc3RydWN0b3JfMS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmluaXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5yZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkYWN0b3JFbmdpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5tYXBNb3ZlQ29udHJvbGxlcnMoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5zYXZlTWFwKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEubG9hZE1hcCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLnNldE1hcFNpemUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuY3JlYXRlTmV3TWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS9wcmV2aWV3XCIpO1xyXG52YXIgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vcGFuZWxGb3JtUGFydEdlbmVyYXRvclwiKTtcclxuZnVuY3Rpb24gb3BlblJlZGFjdG9yV2luZG93KF9hKSB7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0gX2EuYmxvY2tEYXRhLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZWN0RmlsZXMsIGZpbGVDb250YWluZXIsIGNsb3NlRGlhbG9nLCBnZW5lcmF0ZWRBcmVhLCBhbGxCbG9ja3MsIGlubmVyRGVzY3JpcHRpb25BcmVhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgIWJsb2NrRGF0YS5kZXRhaWxzIHx8IG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZEFyZWEgPSBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdpbm5lci1kZXNjcmlwdGlvbi1hcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkQXJlYSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWRlc2NyaXB0aW9uLWFyZWFcIildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRGVzY3JpcHRpb25BcmVhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5sb2FkSW5uZXJEYXRhKHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5nZW5lcmF0ZUlucHV0KHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5vcGVuUmVkYWN0b3JXaW5kb3cgPSBvcGVuUmVkYWN0b3JXaW5kb3c7XHJcbmZ1bmN0aW9uIHBvc2l0aW9uUmVkdWNlcihfYSkge1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IF9hLmFsbEJsb2NrcztcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCbG9ja3NfMSA9IGFsbEJsb2NrczsgX2kgPCBhbGxCbG9ja3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBhbGxCbG9ja3NfMVtfaV07XHJcbiAgICAgICAgYmxvY2sueE1vdmUgPSBibG9jay54O1xyXG4gICAgICAgIGJsb2NrLnlNb3ZlID0gYmxvY2sueTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBvc2l0aW9uUmVkdWNlciA9IHBvc2l0aW9uUmVkdWNlcjtcclxuZnVuY3Rpb24gY2hhbmdlQmxvY2tBcnJheVNpemUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZm9ybURhdGEgPSBfYS5mb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtc2l6ZS1lcnJvcicpO1xyXG4gICAgdmFyIHdpZHRoU2V0ID0gZm9ybURhdGEuaG9yaXpvbnRhbEJsb2NrO1xyXG4gICAgdmFyIGhlaWdodFNldCA9IGZvcm1EYXRhLnZlcnRpY2FsQmxvY2s7XHJcbiAgICB2YXIgY3VycmVudFdpZHRoID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIHZlcnRpY2FsUmFuZ2UgPSBoZWlnaHRTZXQgLSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgdmFyIHZlcnRpY2FsQ29tcGVuc2F0aW9uID0gdmVydGljYWxSYW5nZTtcclxuICAgIHZhciBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBbXTtcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgLy9lcnJvckZpZWxkLmlubmVySFRNTCA9IGA8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPmA7XHJcbiAgICBwb3NpdGlvblJlZHVjZXIoeyBhbGxCbG9ja3M6IGFsbEJsb2NrcyB9KTtcclxuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdpZHRoU2V0OyBjb2wrKykge1xyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gPSAwOyBpdGVtIDwgaGVpZ2h0U2V0OyBpdGVtKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gKGNvbCA9PSAwKSA/IGl0ZW0gOiAoY29sICogY3VycmVudEhlaWdodCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgbmV3QmxvY2tzQXJyYXlJbmRleCA9IChjb2wgPT0gMCkgPyBpdGVtIDogKGNvbCAqIGhlaWdodFNldCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgb2xkQmxvY2tzQXJyYXlJbmRleCA9IChpdGVtIDwgY3VycmVudEhlaWdodCkgPyBhbGxCbG9ja3Nbcm93SW5kZXhdIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG9sZEJsb2Nrc0FycmF5SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9sZEJsb2Nrc0FycmF5SW5kZXguaW5kZXggPSBuZXdCbG9ja3NBcnJheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbmV3UmVidWlsZEJsb2NrTWFwID0gbmV3UmVidWlsZEJsb2NrTWFwLmNvbmNhdChvbGRCbG9ja3NBcnJheUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlYnVpbGRCbG9ja01hcCA9IG5ld1JlYnVpbGRCbG9ja01hcC5jb25jYXQoY3JlYXRlU2luZ2xlTWFwQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3Q6IG1haW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogbmV3QmxvY2tzQXJyYXlJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb2wgKiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBpdGVtICogbWFpbk9iamVjdC5ibG9ja1NpemUgLy8gKyBvbGRZUmFuZ2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcnRpY2FsQ29tcGVuc2F0aW9uICs9IHZlcnRpY2FsUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBtYWluT2JqZWN0Lm1hcFdpZHRoID0gd2lkdGhTZXQ7XHJcbiAgICBtYWluT2JqZWN0Lm1hcEhlaWdodCA9IGhlaWdodFNldDtcclxuICAgIG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jayA9IG5ld1JlYnVpbGRCbG9ja01hcDtcclxuICAgIHZhciBzaG93ID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrLmZpbmQoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uaW5kZXggPT0gMTAxMTsgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzaG93LCBcInNob3cgcmVzaXplXCIpO1xyXG4gICAgY29uc29sZS5sb2cobWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrWzBdKTtcclxufVxyXG5leHBvcnRzLmNoYW5nZUJsb2NrQXJyYXlTaXplID0gY2hhbmdlQmxvY2tBcnJheVNpemU7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZU1hcEJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yLCBpbmRleCA9IF9hLmluZGV4LCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0ge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgICB3aWR0aDogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogaW5kZXhcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpO1xyXG59XHJcbmZ1bmN0aW9uIG1pbmlNYXBwZXIoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHZhciBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25ZID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlID0gdHJ1ZTtcclxuICAgIHZhciBtYXBTaXplID0gNTAgLyAzO1xyXG4gICAgZmlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBuZXdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBtYXBTaXplV2lkdGggPSBtYWluT2JqZWN0Lm1hcFdpZHRoICogMztcclxuICAgIHZhciBtYXBTaXplSGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQgKiAzO1xyXG4gICAgbmV3TWFwWyd3aWR0aCddID0gbWFwU2l6ZVdpZHRoO1xyXG4gICAgbmV3TWFwWydoZWlnaHQnXSA9IG1hcFNpemVIZWlnaHQ7XHJcbiAgICB2YXIgbWluaU1hcEN0eCA9IG5ld01hcC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNYXApO1xyXG4gICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgY3R4OiBtaW5pTWFwQ3R4LFxyXG4gICAgICAgIGFsbEJsb2NrczogYWxsQmxvY2tzLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWTogY2FtZXJhUG9zaXRpb25ZLFxyXG4gICAgICAgIG1hcFNpemU6IG1hcFNpemUsXHJcbiAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgbWFwU2l6ZUhlaWdodDogbWFwU2l6ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddID09PSAnQ0FOVkFTJykge1xyXG4gICAgICAgICAgICB2YXIgcG9zWCA9IGV2ZW50WydjbGllbnRYJ10gLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXTtcclxuICAgICAgICAgICAgdmFyIHBvc1kgPSBldmVudFsnY2xpZW50WSddIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXTtcclxuICAgICAgICAgICAgc2V0TWFwQXNDbGljayh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHg6IHBvc1ggKiBtYXBTaXplLCB5OiBwb3NZICogbWFwU2l6ZSB9KTtcclxuICAgICAgICAgICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgICAgICAgICBjdHg6IG1pbmlNYXBDdHgsXHJcbiAgICAgICAgICAgICAgICBhbGxCbG9ja3M6IGFsbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25ZOiBjYW1lcmFQb3NpdGlvblksXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplOiBtYXBTaXplLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplSGVpZ2h0OiBtYXBTaXplSGVpZ2h0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5taW5pTWFwcGVyID0gbWluaU1hcHBlcjtcclxuZnVuY3Rpb24gbWFwT2JqZWN0RHJhdyhfYSkge1xyXG4gICAgdmFyIGN0eCA9IF9hLmN0eCwgYWxsQmxvY2tzID0gX2EuYWxsQmxvY2tzLCBjYW1lcmFQb3NpdGlvblkgPSBfYS5jYW1lcmFQb3NpdGlvblksIGNhbWVyYVBvc2l0aW9uWCA9IF9hLmNhbWVyYVBvc2l0aW9uWCwgbWFwU2l6ZSA9IF9hLm1hcFNpemUsIG1hcFNpemVXaWR0aCA9IF9hLm1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCA9IF9hLm1hcFNpemVIZWlnaHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIG1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxCbG9ja3MpO1xyXG4gICAgYWxsQmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAoaXRlbS5kZXRhaWxzLm1hcENvbG9yKSA/IGl0ZW0uZGV0YWlscy5tYXBDb2xvciA6IFwicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjsgLy9pdGVtLmRldGFpbHMubWFwQ29sb3IvL1wicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChpdGVtLngpID8gaXRlbS54IC8gbWFwU2l6ZSA6IDAsIChpdGVtLnlNb3ZlKSA/IGl0ZW0ueSAvIG1hcFNpemUgOiAwLCA1MCAvIG1hcFNpemUsIDUwIC8gbWFwU2l6ZSk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2N0eC5zYXZlKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgMSlcIjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5yZWN0KChjYW1lcmFQb3NpdGlvblggLyBtYXBTaXplKSAqIC0xLCAoY2FtZXJhUG9zaXRpb25ZIC8gbWFwU2l6ZSkgKiAtMSwgd2luZG93LmlubmVyV2lkdGggLyBtYXBTaXplLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyBtYXBTaXplKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vY3R4LnJlc3RvcmUoKVxyXG59XHJcbmZ1bmN0aW9uIHNldE1hcEFzQ2xpY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSB4ICsgYWxsQmxvY2tzWzBdLnhNb3ZlOyAvL01hdGgubWF4KGFsbEJsb2Nrc1swXS54TW92ZSwgeCkgLSBNYXRoLm1pbihhbGxCbG9ja3NbMF0ueE1vdmUsIHgpO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IHkgKyBhbGxCbG9ja3NbMF0ueU1vdmU7IC8vTWF0aC5tYXgoYWxsQmxvY2tzWzBdLnlNb3ZlLCB5KSAtIE1hdGgubWluKGFsbEJsb2Nrc1swXS55TW92ZSwgeSk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJsb2Nrc18yID0gYWxsQmxvY2tzOyBfaSA8IGFsbEJsb2Nrc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9jayA9IGFsbEJsb2Nrc18yW19pXTtcclxuICAgICAgICBibG9jay54TW92ZSAtPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWCk7XHJcbiAgICAgICAgYmxvY2sueU1vdmUgLT0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblkpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4vYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGNvbGxpc2lvbkRldGVjdG9yKF9hKSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gX2Eub2JqZWN0LCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICBpZiAoIW9iamVjdCB8fCAhdGFyZ2V0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRhcmdldC53aWR0aCA9IHBhcnNlSW50KHRhcmdldC53aWR0aCk7XHJcbiAgICB0YXJnZXQuaGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LmhlaWdodCk7XHJcbiAgICBvYmplY3Qud2lkdGggPSBwYXJzZUludChvYmplY3Qud2lkdGgpO1xyXG4gICAgb2JqZWN0LmhlaWdodCA9IHBhcnNlSW50KG9iamVjdC5oZWlnaHQpO1xyXG4gICAgdmFyIHhNaW4gPSBNYXRoLm1pbihvYmplY3QueE1vdmUsIHRhcmdldC54KTtcclxuICAgIHZhciB5TWluID0gTWF0aC5taW4ob2JqZWN0LnlNb3ZlLCB0YXJnZXQueSk7XHJcbiAgICB2YXIgeE1heCA9IE1hdGgubWF4KG9iamVjdC54TW92ZSArIG9iamVjdC53aWR0aCwgdGFyZ2V0LnggKyB0YXJnZXQud2lkdGgpO1xyXG4gICAgdmFyIHlNYXggPSBNYXRoLm1heChvYmplY3QueU1vdmUgKyBvYmplY3QuaGVpZ2h0LCB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQpO1xyXG4gICAgdmFyIHJlc1ggPSB4TWF4IC0geE1pbjtcclxuICAgIHZhciByZXNZID0geU1heCAtIHlNaW47XHJcbiAgICB2YXIgY29sbGlzaW9uID0gKHJlc1ggPiBvYmplY3Qud2lkdGggfHwgcmVzWSA+IG9iamVjdC5oZWlnaHQpID8gZmFsc2UgOiBcImNvbGxpc2lvblwiO1xyXG4gICAgaWYgKGNvbGxpc2lvbilcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmNvbGxpc2lvbkRldGVjdG9yID0gY29sbGlzaW9uRGV0ZWN0b3I7XHJcbmZ1bmN0aW9uIG1vdmVTaW5nbGVCbG9jayhfYSkge1xyXG4gICAgdmFyIHhNb3ZlVmFsdWUgPSBfYS54TW92ZVZhbHVlLCB5TW92ZVZhbHVlID0gX2EueU1vdmVWYWx1ZTtcclxuICAgIGlmICh4TW92ZVZhbHVlKVxyXG4gICAgICAgIHRoaXMueE1vdmUgKz0geE1vdmVWYWx1ZTtcclxuICAgIGlmICh5TW92ZVZhbHVlKVxyXG4gICAgICAgIHRoaXMueU1vdmUgKz0geU1vdmVWYWx1ZTtcclxufVxyXG5leHBvcnRzLm1vdmVTaW5nbGVCbG9jayA9IG1vdmVTaW5nbGVCbG9jaztcclxuZnVuY3Rpb24gbW92ZUFsbFNjZW5lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHhNb3ZlVmFsdWUgPSBfYS54TW92ZVZhbHVlLCB5TW92ZVZhbHVlID0gX2EueU1vdmVWYWx1ZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNpbmdsZUJsb2NrID0gX2JbX2ldO1xyXG4gICAgICAgIHNpbmdsZUJsb2NrLm1vdmVTaW5nbGVCbG9jayh7IHhNb3ZlVmFsdWU6IHhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWU6IHlNb3ZlVmFsdWUgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlQWxsU2NlbmUgPSBtb3ZlQWxsU2NlbmU7XHJcbmZ1bmN0aW9uIGNoYW5nZU9iamVjdE1vZGVsKF9hKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0LCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGlmICghbWFpbk9iamVjdCB8fCAhcmVzdWx0IHx8ICFtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlIHx8IG1haW5PYmplY3QuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjdXJyZW50QmxvY2sgPSBhbGxCbG9ja3NbcmVzdWx0LmluZGV4XTtcclxuICAgIGlmICghbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmRlc3Ryb3llcikge1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0udHlwZSA9PT0gXCJiYWNrZ3JvdW5kLXdhbGxcIiAmJiBjdXJyZW50QmxvY2suZGV0YWlscykge1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ud2lkdGggPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmhlaWdodCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueCA9IGN1cnJlbnRCbG9jay54O1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueSA9IGN1cnJlbnRCbG9jay55O1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueE1vdmUgPSBjdXJyZW50QmxvY2sueE1vdmU7XHJcbiAgICAgICAgICAgIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS55TW92ZSA9IGN1cnJlbnRCbG9jay55TW92ZTtcclxuICAgICAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS50eXBlID09PSBcImJhY2tncm91bmQtd2FsbFwiICYmICFjdXJyZW50QmxvY2suZGV0YWlscykge1xyXG4gICAgICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmRldGFpbHMgPSBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyID09PSAnZGVzdHJveWVyJykge1xyXG4gICAgICAgIGlmIChjdXJyZW50QmxvY2suZGV0YWlscyAmJiBjdXJyZW50QmxvY2suZGV0YWlscy52YWx1ZU9mTW92ZSkge1xyXG4gICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLnBvc2l0aW9uUmVkdWNlcih7IGFsbEJsb2NrczogYWxsQmxvY2tzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1haW5PYmplY3QuYmxvY2tTaXplKVxyXG4gICAgICAgIGN1cnJlbnRCbG9jay53aWR0aCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5oZWlnaHQgPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIgPT09ICdyZWRhY3RvckRlY29yYXRpb24nKSB7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNoYW5nZU9iamVjdE1vZGVsID0gY2hhbmdlT2JqZWN0TW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGVsZXZhdG9yTW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5kZXRhaWxzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0aGlzLmRldGFpbHMudHlwZSA9PT0gJ2VsZXZhdG9yJykge1xyXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZTtcclxuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5kZXRhaWxzLnZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudFZhbHVlKVxyXG4gICAgICAgIGlmICh0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnlNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIilcclxuICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPD0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnhNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yVmFsdWVPZk1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID49IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVsZXZhdG9yTW92ZSA9IGVsZXZhdG9yTW92ZTtcclxuLypcclxuXHJcblwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImNvbnN0cnVjdG9yVmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudERpcmVjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgIFwiY29uc3RydWN0b3JEaXJlY3Rpb25cIjogdHJ1ZSxcclxuIFwiaWRcIjogXCJlbGV2YXRvcl8xXCIsXHJcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFwiL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2VsZXZhdG9yLnBuZ1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFbGV2YXRvclwiLFxyXG4gICAgICAgIFwic3BlZWRcIjogNSxcclxuICAgICAgICBcIm1vdmVEaXJlY3Rpb25cIjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgIFwidmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImN1cnJlbnREaXJlY3Rpb25cIjogdHJ1ZSxcclxuICAgICAgICBcInR5cGVcIjogXCJlbGV2YXRvclwiLFxyXG4gICAgICAgIFwiY29sbGlzaW9uXCI6IHRydWVcclxuKi9cclxuZnVuY3Rpb24gc3RhaXJzTW92ZSgpIHtcclxufVxyXG5leHBvcnRzLnN0YWlyc01vdmUgPSBzdGFpcnNNb3ZlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX19IT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMwMCc7XHJcbmV4cG9ydHMuX19IT1NUID0gX19IT1NUO1xyXG52YXIgX19CTE9DS19DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItYmxvY2tzJztcclxuZXhwb3J0cy5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1iYWNrZ3JvdW5kLWJsb2Nrcyc7XHJcbmV4cG9ydHMuX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItY2hhcmFjdGVycyc7XHJcbmV4cG9ydHMuX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMID0gX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19FTkVNWV9ERVRBSUxTX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ncm91bmQtZW5lbXknO1xyXG52YXIgX19FTkVNWV9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItZ3JvdW5kLWVuZW15LXJlZGFjdG9yJztcclxuZXhwb3J0cy5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCA9IF9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19NQVBfREFUQV9VUkwgPSAnL2FwcC9nZXQtYWxsLW1hcHMnO1xyXG5leHBvcnRzLl9fTUFQX0RBVEFfVVJMID0gX19NQVBfREFUQV9VUkw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIHJlcXVlc3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBpbml0TWFpbkVuZ2luZShfYSkge1xyXG4gICAgdmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSBfYS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFwTmFtZSwgYmxvY2tTaXplLCBkZWZhdWx0V2lkdGgsIGRlZmF1bHRIZWlnaHQsIG1heEhvcml6b250YWxCbG9ja3MsIG1heFZlcnRpY2FsQmxvY2tzLCByZWRhY3RvckRhdGEsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUgPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddLm5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NpemUgPSA1MCwgZGVmYXVsdFdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIGRlZmF1bHRIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIG1heEhvcml6b250YWxCbG9ja3MgPSAyMDAsIG1heFZlcnRpY2FsQmxvY2tzID0gMTUwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hcFNpemVUb0Zvcm0oeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcE1vdmVTcGVlZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEhlaWdodDogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGVmYXVsdFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERlZmF1bHRIZWlnaHQ6IGRlZmF1bHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhvcml6b250YWxCbG9ja3M6IG1heEhvcml6b250YWxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZlcnRpY2FsQmxvY2tzOiBtYXhWZXJ0aWNhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBibG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlZGFjdG9yQmxvY2s6IGZpbGxCbG9ja01hcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEJsb2NrczogZGVmYXVsdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxCbG9jazogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogYmxvY2tTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IuYmxvY2tEYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYi5iYWNrZ3JvdW5kRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5jaGFyYWN0ZXJzRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2IuZW5lbXlEYXRhYmFzZSA9IF9jLnNlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICByZWRhY3RvckRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZWRhY3RvckRhdGEuYmFja2dyb3VuZERhdGFiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgTWFpbkdhbWVDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgcmVkYWN0b3JEYXRhKSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmluaXRNYWluRW5naW5lID0gaW5pdE1haW5FbmdpbmU7XHJcbmZ1bmN0aW9uIHNldE1hcFNpemVUb0Zvcm0oX2EpIHtcclxuICAgIHZhciB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgZm9ybVsnaG9yaXpvbnRhbEJsb2NrJ10udmFsdWUgPSB3aWR0aDtcclxuICAgIGZvcm1bJ3ZlcnRpY2FsQmxvY2snXS52YWx1ZSA9IGhlaWdodDtcclxufVxyXG5leHBvcnRzLnNldE1hcFNpemVUb0Zvcm0gPSBzZXRNYXBTaXplVG9Gb3JtO1xyXG5mdW5jdGlvbiBmaWxsQmxvY2tNYXAoX2EpIHtcclxuICAgIHZhciBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvciwgaG9yaXpvbnRhbEJsb2NrcyA9IF9hLmhvcml6b250YWxCbG9ja3MsIHZlcnRpY2FsQmxvY2sgPSBfYS52ZXJ0aWNhbEJsb2NrLCBibG9ja1NpemUgPSBfYS5ibG9ja1NpemU7XHJcbiAgICB2YXIgYmxvY2tBcnJheSA9IFtdO1xyXG4gICAgdmFyIGhvcml6b250YWxFbmRzID0gMDtcclxuICAgIHZhciB2ZXJ0aWNhbEVuZHMgPSAwO1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IGJsb2NrU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IGJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogMFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9yaXpvbnRhbEJsb2NrcyAqIHZlcnRpY2FsQmxvY2s7IGkrKykge1xyXG4gICAgICAgIGJsb2NrRGF0YS55ID0gdmVydGljYWxFbmRzO1xyXG4gICAgICAgIGJsb2NrRGF0YS54ID0gaG9yaXpvbnRhbEVuZHM7XHJcbiAgICAgICAgYmxvY2tEYXRhLmluZGV4ID0gaTtcclxuICAgICAgICB2ZXJ0aWNhbEVuZHMgPSAodmVydGljYWxFbmRzIDwgKCh2ZXJ0aWNhbEJsb2NrIC0gMSkgKiBibG9ja1NpemUpKSA/IHZlcnRpY2FsRW5kcyArIGJsb2NrU2l6ZSA6IDA7XHJcbiAgICAgICAgaG9yaXpvbnRhbEVuZHMgPSAodmVydGljYWxFbmRzID09IDApID8gaG9yaXpvbnRhbEVuZHMgKyBibG9ja1NpemUgOiBob3Jpem9udGFsRW5kcztcclxuICAgICAgICBibG9ja0FycmF5ID0gYmxvY2tBcnJheS5jb25jYXQobmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBibG9ja0FycmF5O1xyXG59XHJcbmV4cG9ydHMuZmlsbEJsb2NrTWFwID0gZmlsbEJsb2NrTWFwO1xyXG5mdW5jdGlvbiBiYWNrVG9PYmplY3QoX2EpIHtcclxuICAgIHZhciBkYXRhID0gX2EuZGF0YSwgY29uc3RydWN0b3IgPSBfYS5jb25zdHJ1Y3RvcjtcclxuICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yKTtcclxuICAgIHZhciBmaW5hbE9iamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShyZXMucHJvdG90eXBlKSwgZGF0YSk7XHJcbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XHJcbn1cclxuZXhwb3J0cy5iYWNrVG9PYmplY3QgPSBiYWNrVG9PYmplY3Q7XHJcbmZ1bmN0aW9uIHJlbmRlckJsb2NrQm94KF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy55TW92ZSA+IDAgLSAxMDAgJiYgdGhpcy54TW92ZSA+IDAgLSAxMDAgJiYgdGhpcy55TW92ZSA8IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMCAmJiB0aGlzLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggKyAxMDApKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRldGFpbHMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5jcmVhdGVGcmFtZS5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdmlld18xLmJhY2tncm91bmRSZW5kZXIuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2aWV3XzEuY3JlYXRlQmxvY2tQaWN0dXJlLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyQmxvY2tCb3ggPSByZW5kZXJCbG9ja0JveDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZXNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGVJbnB1dChfYSkge1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyLCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrRGV0YWlscywgaW5uZXJUZXh0LCBpdGVtRGF0YSwgY3VycmVudERlc2NyaXB0aW9uSWQsIGJsb2NrQWxlcnRNZXNzYWdlLCBibG9ja1ByZXZpZXdJbWFnZSwgbG9jYWxQaWN0dXJlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgYmxvY2tEZXRhaWxzID0gdGFyZ2V0LmRldGFpbHM7XHJcbiAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWFsZXJ0LW1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stcHJldmlldy1pbWFnZScpO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBcImNvbGxpc2lvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dHVyZVwiOiBcIi9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9ibG9jay9ibG9jay0zLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaXNEZXN0cm95XCI6IGZhbHNlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgQmxvY2tzIHNldHRpbmdzICYgUGFyYW1ldGVycyAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiXFxuICAgICAgICA8aDE+QmxvY2sgc2l6ZTwvaDE+XFxuICAgICAgICA8aDM+QmxvY2sgd2lkdGg8L2gzPlxcbiAgICAgICAgICAgIDxwPlNpemUgb2YgYmxvY2sgd2lkdGggaW4gcGl4ZWxzPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMDBcXFwiIGlkPVwiICsgKCd3aWR0aC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC53aWR0aCkgPyB0YXJnZXQud2lkdGggOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS13aWR0aC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSB3aWR0aDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay13aWR0aC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMz5CbG9jayBoZWlnaHQ8L2gzPlxcbiAgICAgICAgICAgIDxwPlNpemUgb2YgYmxvY2sgaGVpZ2h0IGluIHBpeGVsczwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBtaW49XFxcIjFcXFwiIG1heD1cXFwiMjAwXFxcIiBpZD1cIiArICgnaGVpZ2h0LXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LmhlaWdodCkgPyB0YXJnZXQuaGVpZ2h0IDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtaGVpZ2h0LWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIGhlaWdodDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay1oZWlnaHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBEZXNjcmlwdGlvbiAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPkRlc2NyaXB0aW9uPC9oMz5cXG4gICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnZGVzY3JpcHRpb24tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArIGJsb2NrRGV0YWlscy5kZXNjcmlwdGlvbiArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtZGVzY3JpcHRpb24tYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgRGVzY3JpcHRpb248L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIHJ1bGVycyAmIHRpcHMgID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aXBzXHJcbiAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5UaXBzPC9oMz5cXG4gICAgICAgICAgICA8cD5BIHRpcHMgaG93IHRvIHVzIHRoaXMgb2JqZWN0cywgaXQgY291bGQgYmUgYSBwYXJ0IG9mIHNvbWUgbWVzc2FnZTwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3RpcHMtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS10aXBzLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFRpcHM8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXRpcHMtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gc3VjY2Vzc1RleHRcclxuICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlN1Y2Nlc3MgVGV4dDwvaDM+XFxuICAgICAgICAgICAgPHA+RGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiB5b3UgZG8gZXZlcnl0aGluZyB3cml0ZTogY29sbGVjdCBkYXRlL2tleSwgYnJpbmcgZGF0YS9rZXkgPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnN1Y2Nlc3NUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5zdWNjZXNzVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBUZXh0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1zdWNjZXNzVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXF1aXJlVGV4dFxyXG4gICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+UmVxdWlyZSBUZXh0PC9oMz5cXG4gICAgICAgICAgICA8cD5EaXNwbGF5IGEgbWVzc2FnZSBkZXNjcmliZSBzb21lIFJlcXVpcmVtZW50IGZvciB0aGlzIG9iamVjdCB0byB3b3JrPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmVUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIFRleHQ8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVcclxuICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlJlcXVpcmUgT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5SZXF1aXJlIG1lc3NhZ2UsIGRpc3BsYXkgb2JqZWN0IG5lZWRzIGZvciB0aGlzIGJsb2NrIHRvIGV2ZXJ5dGhpbmcgd29yayBmaW5lPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZSkgPyBibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZSA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgUmVxdWlyZSBPYmplY3Q8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsUGljdHVyZSA9IChibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyBibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5Db250YWluIE9iamVjdDwvaDM+XFxuICAgICAgICAgICAgPHA+T2JqZWN0IG9yIGRhdGEgaW5zaWRlIHRoaXMgb2JqZWN0IHByZXNzICdFJyBidXR0b24gdG8gY29sbGVjdCBcXG4gZXhpdCAgLSBzcGVjaWFsIG9iamVjdCB0byBmaW5pc2ggdGhlIGxldmVsPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnY29udGFpbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMuY29udGFpbikgPyBibG9ja0RldGFpbHMucnVsZXMuY29udGFpbiA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8aW1nIHdpZHRoPVxcXCIxMDBcXFwiIGlkPVwiICsgKCdjb250YWluLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2lubmVyLW9iamVjdHMvJyArIGxvY2FsUGljdHVyZSkgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwicHJldmlldy1jb250YWluLW9iamVjdFxcXCIgZGF0YS10YXJnZXQ9J3NlbGVjdC1wcmV2aWV3LWJ0bic+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImNvbXB1dGVyLWRhdGEucG5nXFxcIj5Db21wdXRlciBkYXRhPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInJlZC1jYXJkLnBuZ1xcXCI+UmVkIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYmx1ZS1jYXJkLnBuZ1xcXCI+Qmx1ZSBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImdyZWVuLWNhcmQucG5nXFxcIj5HcmVlbiBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInllbGxvdy1jYXJkLnBuZ1xcXCI+WWVsbG93IGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicG93ZXItY2VsbC5wbmdcXFwiPlBvd2VyIENlbGw8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWNvbnRhaW4tYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmU8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLmlubmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy50eXBlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hhbmdlLXNpemVcclxuICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkUmVzdWx0cywgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXdpZHRoLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWhlaWdodC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1kZXNjcmlwdGlvbi1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS10aXBzLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLXRleHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXJlcXVpcmUtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWNvbnRhaW4tYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnd2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAnd2lkdGgtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxOF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyMnICsgJ2hlaWdodC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICdkZXNjcmlwdGlvbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2Rlc2NyaXB0aW9uIGZpZWxkJyA6ICcgc2F2ZSBkZXNjcmlwdGlvbiBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMThdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3RpcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAndGlwcy1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3RpcHMgZmllbGQnIDogJyBzYXZlIHRpcHMgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzdWNjZXNzVGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICdzdWNjZXNzVGV4dC1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAncmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAncmVxdWlyZSB0ZXh0IGZpZWxkJyA6ICcgc2F2ZSByZXF1aXJlIHRleHQgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICdyZXF1aXJlLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3JlcXVpcmUgZmllbGQnIDogJyBzYXZlIHJlcXVpcmUgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnY29udGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICdjb250YWluLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2NvbnRhaW4gb2JqZWN0JyA6ICcgc2F2ZSBjb250YWluIG9iamVjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMThdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gKGZpZWxkUmVzdWx0cykgPyBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLXN1Y2Nlc3NcXFwiID4gU3VjY2Vzc2Z1bGx5IHNhdmVkICdcIiArIGZpZWxkTmFtZSArIFwiJyA8L3A+XCIgOiBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLWVycm9yXFxcIiA+VGhlcmUgaXMgYSBwcm9ibGVtIGluICdcIiArIGZpZWxkTmFtZSArIFwiJyBpIGNhbid0IHNhdmU8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCByZXF1aXJlZFByZXZpZXdQaWMsIHBpYywgbGluaztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdC1wcmV2aWV3LWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdvYmplY3RQaWN0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNwcmV2aWV3LXJlcXVpcmUtb2JqZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpYyA9ICh0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsgPSBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2lubmVyLW9iamVjdHMvJyArIHBpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaWMsIGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUHJldmlld1BpY1snc3JjJ10gPSBsaW5rOyAvL2NvbXB1dGVyLWRhdGEucG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2VuZXJhdGVJbnB1dCA9IGdlbmVyYXRlSW5wdXQ7XHJcbmZ1bmN0aW9uIGNoYW5nZURhdGFJbkJsb2NrKF9hKSB7XHJcbiAgICB2YXIga2V5ID0gX2Eua2V5LCBmaWVsZFNlbGVjdG9yID0gX2EuZmllbGRTZWxlY3RvciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBibG9ja0FsZXJ0TWVzc2FnZSwgY3VycmVudEZpZWxkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWFsZXJ0LW1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpZWxkU2VsZWN0b3IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEZpZWxkLnZhbGlkaXR5LnZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWVsZC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBcIkludmFsaWQgVmFsdWUgb2YgXCIgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gKGN1cnJlbnRGaWVsZC52YWx1ZSkgPyBjdXJyZW50RmllbGQudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoY3VycmVudEZpZWxkLnZhbHVlICYmIHRhcmdldFtrZXldICYmIGtleSAmJiBmaWVsZFNlbGVjdG9yKSA/IHRydWUgOiBmYWxzZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbm5lckRhdGEoX2EpIHtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgdmFyIGJsb2NrRGV0YWlscyA9IHRhcmdldC5kZXRhaWxzO1xyXG4gICAgdmFyIGJhY2tncm91bmRJbWFnZSA9ICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gXCI8aW1nIHdpZHRoPVxcXCI1MFxcXCIgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUudGV4dHVyZSkgKyBcIlxcXCIgYWx0PVxcXCJcIiArIHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZS5pZCArIFwiXFxcIj5cIiA6IFwiXCI7XHJcbiAgICB2YXIgaW5uZXJUZXh0ID0gXCI8ZGl2IGNsYXNzPVxcXCJibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyXFxcIj5cXG4gICAgPGltZyBpZD1cXFwiYmxvY2stcHJldmlldy1pbWFnZVxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBibG9ja0RldGFpbHMudGV4dHVyZSkgKyBcIlxcXCI+XFxuICAgIDxkaXYgaWQ9XFxcImJsb2NrLWFsZXJ0LW1lc3NhZ2VcXFwiPjwvZGl2PlxcbiAgICA8dWw+XFxuICAgICAgICA8bGk+TmFtZTogXCIgKyBibG9ja0RldGFpbHMuaWQgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+SW5kZXg6IFwiICsgdGFyZ2V0LmluZGV4ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlR5cGU6IFwiICsgKChibG9ja0RldGFpbHMudHlwZSkgPyBibG9ja0RldGFpbHMudHlwZSA6ICcnKSArIFwiPC9saT5cXG4gICAgICAgIDxsaT53aWR0aDogXCIgKyB0YXJnZXQud2lkdGggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+aGVpZ2h0OiBcIiArIHRhcmdldC5oZWlnaHQgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+WDogXCIgKyB0YXJnZXQueCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5ZOiBcIiArIHRhcmdldC55ICsgXCI8L2xpPlxcblxcbiAgICA8cD5cIiArICgodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IFwiQmFja2dyb3VuZCB0ZXh0dXJlXCIgOiBcIlwiKSArIFwiPC9wPlxcbiAgICBcIiArIGJhY2tncm91bmRJbWFnZSArIFwiXFxuICAgIDwvdWw+PC9kaXY+PGhyPlwiO1xyXG4gICAgLypcImltYWdlV2lkdGhcIjogMzQsXHJcbiAgICBcImltYWdlSGVpZ2h0XCI6IDQ1LFxyXG4gICAgXCJhbmltYXRpb25TdGVwc1wiOiAxMCxcclxuICAgIFwibnVtYmVyT2ZJdGVtc1wiOiAxLFxyXG4gICAgXCJudW1iZXJPZlZlcnRpY2FsSXRlbXNcIjogMSxcclxuICAgIFwicGxheWVyRGlyZWN0aW9uSG9yaXpvbnRhbFwiOiBcImxlZnRcIixcclxuICAgIFwiZGV0ZWN0UmFuZ2VcIjogNTUwLFxyXG4gICAgXCJzcGVlZFwiOiAxLCovXHJcbiAgICB2YXIgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgIGlkTmFtZTogbnVsbFxyXG4gICAgfSk7XHJcbiAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxufVxyXG5leHBvcnRzLmxvYWRJbm5lckRhdGEgPSBsb2FkSW5uZXJEYXRhO1xyXG5mdW5jdGlvbiBlbGVtZW50Q3JlYXRvcihfYSkge1xyXG4gICAgdmFyIHRhZ25hbWUgPSBfYS50YWduYW1lLCBjbGFzc0xpc3QgPSBfYS5jbGFzc0xpc3QsIGlubmVyVGV4dCA9IF9hLmlubmVyVGV4dCwgaWROYW1lID0gX2EuaWROYW1lO1xyXG4gICAgdmFyIG5ld0RvY3VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWduYW1lKTtcclxuICAgIG5ld0RvY3VtZW50LmNsYXNzTmFtZSA9IChjbGFzc0xpc3QpID8gY2xhc3NMaXN0IDogZmFsc2U7XHJcbiAgICBuZXdEb2N1bWVudC5pbm5lckhUTUwgPSBpbm5lclRleHQ7XHJcbiAgICBpZiAoaWROYW1lKVxyXG4gICAgICAgIG5ld0RvY3VtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkTmFtZSk7XHJcbiAgICByZXR1cm4gbmV3RG9jdW1lbnQ7XHJcbn1cclxuZXhwb3J0cy5lbGVtZW50Q3JlYXRvciA9IGVsZW1lbnRDcmVhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxudmFyIHJlcXVlc3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlXCIpO1xyXG52YXIgcHJldmlld18xID0gcmVxdWlyZShcIi4uL3VpL3ByZXZpZXdcIik7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIGJsb2NrQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuLi9jb25zdHJ1Y3RvcnMvYmxvY2tDb25zdHJ1Y3RvclwiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi9ibG9ja0RhdGFSZWRhY3Rvck1vZHVsZVwiKTtcclxuZnVuY3Rpb24gc2V0TWFwU2l6ZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtc2l6ZS1lcnJvcicpO1xyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXQtbWFwLXNpemUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSwgX2ksIGZvcm1fMSwgZmllbGQsIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgZm9ybV8xID0gZm9ybTsgX2kgPCBmb3JtXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm1fMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQubmFtZSAmJiBmaWVsZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQubmFtZSAmJiAhZmllbGQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZUludChmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10pIDwgcGFyc2VJbnQobWFpbk9iamVjdC5tYXBEZWZhdWx0V2lkdGgpIHx8IHBhcnNlSW50KGZvcm1EYXRhWyd2ZXJ0aWNhbEJsb2NrJ10pIDwgcGFyc2VJbnQobWFpbk9iamVjdC5tYXBEZWZhdWx0SGVpZ2h0KSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPk1hcCBtaW4gc2l6ZSBpcyBcIiArIG1haW5PYmplY3QubWFwRGVmYXVsdFdpZHRoICsgXCIgeCBcIiArIG1haW5PYmplY3QubWFwRGVmYXVsdEhlaWdodCArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoZm9ybURhdGFbJ2hvcml6b250YWxCbG9jayddKSA+IHBhcnNlSW50KG1haW5PYmplY3QubWF4SG9yaXpvbnRhbEJsb2NrcykgfHwgcGFyc2VJbnQoZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSkgPiBwYXJzZUludChtYWluT2JqZWN0Lm1heFZlcnRpY2FsQmxvY2tzKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPk1hcCBtYXggc2l6ZSBpcyBcIiArIG1haW5PYmplY3QubWF4SG9yaXpvbnRhbEJsb2NrcyArIFwiIHggXCIgKyBtYWluT2JqZWN0Lm1heFZlcnRpY2FsQmxvY2tzICsgXCI8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGVycm9yRmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFwiPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPlBsZWFzZSB3YWl0IG1hcCBpcyBidWlsZC4uLjwvcD5cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5pbm5lckhUTUwgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEuY2hhbmdlQmxvY2tBcnJheVNpemUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBmb3JtRGF0YTogZm9ybURhdGEsIEJsb2NrQ29uc3RydWN0b3I6IEJsb2NrQ29uc3RydWN0b3IgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9XFxcInNpZGUtcGFuZWwtc3VjY2Vzc1xcXCI+bWFwIHNpemUgc2V0IFwiICsgZm9ybURhdGFbJ2hvcml6b250YWxCbG9jayddICsgXCIgeCBcIiArIGZvcm1EYXRhWyd2ZXJ0aWNhbEJsb2NrJ10gKyBcIiBibG9ja3M8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNldE1hcFNpemUgPSBzZXRNYXBTaXplO1xyXG5mdW5jdGlvbiBnZXRNYXBEYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFwTmFtZSwgcmVzLCBjb252ZXJ0VG9PYmplY3QsIHNpemVGb3JtO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUgPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmFsbE1hcE9iamVjdHMubWFwKGZ1bmN0aW9uIChibG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXRTdGFydE9iamVjdF8xLmJhY2tUb09iamVjdCh7IGRhdGE6IGJsb2NrLCBjb25zdHJ1Y3RvcjogYmxvY2tDb25zdHJ1Y3Rvcl8xLkJsb2NrQ29uc3RydWN0b3IgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0VG9PYmplY3QgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZS52YWx1ZSA9IHJlcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QubWFwV2lkdGggPSByZXMubWFwU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0Lm1hcEhlaWdodCA9IHJlcy5tYXBTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtLmhvcml6b250YWxCbG9jay52YWx1ZSA9IG1haW5PYmplY3QubWFwV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0udmVydGljYWxCbG9jay52YWx1ZSA9IG1haW5PYmplY3QubWFwSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jayA9IGNvbnZlcnRUb09iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld01hcCgpIHtcclxuICAgIHZhciBjcmVhdGVNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZU1hcFwiKTtcclxuICAgIGNyZWF0ZU1hcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVOZXdNYXAgPSBjcmVhdGVOZXdNYXA7XHJcbmZ1bmN0aW9uIGxvYWRNYXAoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3BlbkJ1dHRvbiwgc2VsZWN0RmlsZXMsIGZpbGVDb250YWluZXIsIGNsb3NlRGlhbG9nO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuTWFwXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgICAgICAgICBmaWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1jb250ZW50XCIpO1xyXG4gICAgICAgICAgICBjbG9zZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VEaWFsb2dcIik7XHJcbiAgICAgICAgICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXBGaWxlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld18xLnNob3dFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fTUFQX0RBVEFfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBGaWxlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDb250ZW50KHsgZGlzcGxheUVsZW1lbnQ6IGZpbGVDb250YWluZXIsIGRhdGE6IG1hcEZpbGUsIG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHNlbGVjdEZpbGVzOiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgICAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkTWFwID0gbG9hZE1hcDtcclxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KF9hKSB7XHJcbiAgICB2YXIgZGlzcGxheUVsZW1lbnQgPSBfYS5kaXNwbGF5RWxlbWVudCwgZGF0YSA9IF9hLmRhdGEsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBzZWxlY3RGaWxlcyA9IF9hLnNlbGVjdEZpbGVzO1xyXG4gICAgaWYgKCFkYXRhIHx8ICFkaXNwbGF5RWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICB2YXIgaW5uZXJGaWxlID0gYmxvY2tDcmVhdG9yKHsgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogJ3NpbmdsZS1pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiPGgyPlwiICsgZmlsZS5uYW1lICsgXCI8L2gyPlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5uZXJGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnZXRNYXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIHVybDogZmlsZS5saW5rICsgJy8nICsgZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbWFpbk9iamVjdDogbWFpbk9iamVjdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGxheUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJGaWxlKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFfMSA9IGRhdGE7IF9pIDwgZGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmaWxlID0gZGF0YV8xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGZpbGUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJsb2NrQ3JlYXRvcihfYSkge1xyXG4gICAgdmFyIHRhZyA9IF9hLnRhZywgc3R5bGVDbGFzcyA9IF9hLnN0eWxlQ2xhc3MsIGlubmVyQ29udGVudCA9IF9hLmlubmVyQ29udGVudDtcclxuICAgIHZhciBuZXdCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIG5ld0Jsb2NrLmNsYXNzTmFtZSA9IHN0eWxlQ2xhc3M7XHJcbiAgICBuZXdCbG9jay5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICByZXR1cm4gbmV3QmxvY2s7XHJcbn1cclxuZXhwb3J0cy5ibG9ja0NyZWF0b3IgPSBibG9ja0NyZWF0b3I7XHJcbmZ1bmN0aW9uIHNhdmVNYXAoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZm9ybSwgYnV0dG9uLCBtZXNzYWdlRmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ25ldy1tYXAnXTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUtbWFwLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1tYXAtZXJyb3InKTtcclxuICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0Rm9ybSwgc2F2ZURhdGEsIG1hcEZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtID0gZ2V0Rm9ybURhdGEoeyBmb3JtOiBmb3JtIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Rm9ybSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdEZvcm1bJ3N0YXR1cyddID09PSAncmVqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1lcnJvclxcXCI+RmFpbCB0byBzYXZlIG1hcCwgY2hlY2sgbWFwIE5hbWU8L3A+IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydtYXBTaXplJ10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYWluT2JqZWN0Lm1hcFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1haW5PYmplY3QubWFwSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlRGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybVsnY3JlYXRpbmdUaW1lJ10gPSBzYXZlRGF0YS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybVsnYWxsTWFwT2JqZWN0cyddID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdEZvcm0sICdzYXZlJywgbWFpbk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5wb3N0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19CTE9DS19DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdEZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBGaWxlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSBcIjxwPlNhdmUgdGltZTogXCIgKyAoc2F2ZURhdGEuZ2V0SG91cnMoKSAtIDEpICsgXCIgOiBcIiArIHNhdmVEYXRhLmdldE1pbnV0ZXMoKSArIFwiIDogXCIgKyBzYXZlRGF0YS5nZXRTZWNvbmRzKCkgKyBcIjwvcD5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiArIG1hcEZpbGUudXJsICsgXCIgb25jbGljaz1cXFwiKGZ1bmN0aW9uKCl7IHdpbmRvdy5vcGVuKCdcIiArIG1hcEZpbGUudXJsICsgXCInKX0pKClcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5PcGVuIGluIG5ldyB3aW5kb3c8L2E+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2F2ZU1hcCA9IHNhdmVNYXA7XHJcbmZ1bmN0aW9uIGdldEZvcm1EYXRhKF9hKSB7XHJcbiAgICB2YXIgZm9ybSA9IF9hLmZvcm07XHJcbiAgICBpZiAoIWZvcm0pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBmb3JtXzIgPSBmb3JtOyBfaSA8IGZvcm1fMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZm9ybUl0ZW1zID0gZm9ybV8yW19pXTtcclxuICAgICAgICBpZiAoZm9ybUl0ZW1zLm5hbWUgJiYgZm9ybUl0ZW1zLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtmb3JtSXRlbXMubmFtZV0gPSBmb3JtSXRlbXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1JdGVtcy5uYW1lICYmICFmb3JtSXRlbXMudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJJbmNvcnJlY3QgRGF0YVwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGdldERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBoZWFkZXJzOiByZXN1bHRIZWFkZXIsXHJcbiAgICAgICAgYm9keTogKGRhdGEpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAncmVqZWN0JywgbWVzc2FnZTogcmVzLnN0YXR1c1RleHQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiNTAwIE5vIHNlcnZlciBjb25uZWN0aW9uIVwiLCBzdGF0dXM6IFwiZXJyb3JcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0RGF0YSA9IGdldERhdGE7XHJcbmZ1bmN0aW9uIHBvc3REYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IChtZXRob2QpID8gbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcclxuICAgICAgICBoZWFkZXJzOiByZXN1bHRIZWFkZXIsXHJcbiAgICAgICAgYm9keTogKGRhdGEpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pO1xyXG59XHJcbmV4cG9ydHMucG9zdERhdGEgPSBwb3N0RGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3JlZGFjdG9yL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbmZ1bmN0aW9uIHByZXZpZXdPZkJsb2NrKF9hKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IF9hLnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50ID0gX2EuZXZlbnQ7XHJcbiAgICB2YXIgcHJldmlld0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0ZWQtaXRlbScpO1xyXG4gICAgaWYgKCFzZWxlY3RlZEJsb2NrUGFuZWxJdGVtKVxyXG4gICAgICAgIGhpZGVFbGVtZW50KHsgZWxlbWVudDogcHJldmlld0VsZW1lbnQgfSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzaG93RWxlbWVudCh7IGVsZW1lbnQ6IHByZXZpZXdFbGVtZW50IH0pO1xyXG4gICAgICAgIHByZXZpZXdFbGVtZW50WydzdHlsZSddID0gXCJtYXJnaW4tdG9wOiBcIiArIChldmVudC5jbGllbnRZICsgMTApICsgXCJweDsgbWFyZ2luLWxlZnQ6IFwiICsgKGV2ZW50LmNsaWVudFggKyAxMCkgKyBcInB4O1wiO1xyXG4gICAgICAgIHByZXZpZXdFbGVtZW50LmlubmVySFRNTCA9IFwiPGltZyBzcmM9XCIgKyAoZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS50ZXh0dXJlKSArIFwiID5cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnByZXZpZXdPZkJsb2NrID0gcHJldmlld09mQmxvY2s7XHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KF9hKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQ7XHJcbiAgICBpZiAoIWVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxlbWVudC5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcclxufVxyXG5leHBvcnRzLmhpZGVFbGVtZW50ID0gaGlkZUVsZW1lbnQ7XHJcbmZ1bmN0aW9uIHNob3dFbGVtZW50KF9hKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQ7XHJcbiAgICBpZiAoIWVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxlbWVudC5zdHlsZSA9ICdkaXNwbGF5OiBibG9jayc7XHJcbn1cclxuZXhwb3J0cy5zaG93RWxlbWVudCA9IHNob3dFbGVtZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYmxvY2tJbnRlcmFjdE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrSW50ZXJhY3RNb2R1bGVcIik7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi9wcmV2aWV3XCIpO1xyXG52YXIgc2lkZVBhbmVsQWN0aW9uc18xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL3NpZGVQYW5lbEFjdGlvbnNcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMiA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja0RhdGFSZWRhY3Rvck1vZHVsZVwiKTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG5mdW5jdGlvbiBpbml0VmlldygpIHtcclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVkYWN0b3ItZmllbGQnKTtcclxuICAgIHRoaXMuY29udGV4dFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB0aGlzLmNvbnRleHRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmNvbnRleHRXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNvbnRleHRIZWlnaHQ7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG59XHJcbmV4cG9ydHMuaW5pdFZpZXcgPSBpbml0VmlldztcclxuZnVuY3Rpb24gbWFwTW92ZUNvbnRyb2xsZXJzKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHhNb3ZlVmFsdWUgPSAwLCB5TW92ZVZhbHVlID0gMDtcclxuICAgICAgICBpZiAobWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDg3OlxyXG4gICAgICAgICAgICAgICAgeU1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjg6XHJcbiAgICAgICAgICAgICAgICB4TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQgKiAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDgzOlxyXG4gICAgICAgICAgICAgICAgeU1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkICogLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2NTpcclxuICAgICAgICAgICAgICAgIHhNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc3OlxyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMi5taW5pTWFwcGVyKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBibG9ja0ludGVyYWN0TW9kdWxlXzEubW92ZUFsbFNjZW5lKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgeE1vdmVWYWx1ZTogeE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZTogeU1vdmVWYWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9IF9hW19pXTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsnbm9kZU5hbWUnXSAhPSAnQ0FOVkFTJylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBibG9ja0ludGVyYWN0TW9kdWxlXzEuY29sbGlzaW9uRGV0ZWN0b3IoeyBvYmplY3Q6IGJsb2NrLCB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRMZWZ0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0VG9wJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1XHJcbiAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBibG9jay5pbmRleCwgXCIgPCBCbG9jayBpbmRleFwiKVxyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5vcGVuUmVkYWN0b3JXaW5kb3coeyBibG9ja0RhdGE6IGJsb2NrLCBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tJbnRlcmFjdE1vZHVsZV8xLmNoYW5nZU9iamVjdE1vZGVsKHsgcmVzdWx0OiByZXN1bHQsIG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcHJldmlld18xLnByZXZpZXdPZkJsb2NrKHsgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTogbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbklkID0gZXZlbnQudGFyZ2V0WydkYXRhc2V0J10uYnV0dG9uSWQ7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b25JZCkge1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckJsb2Nrcyc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yRGVjb3JhdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5iYWNrZ3JvdW5kRGF0YWJhc2UsIHNlbGVjdEl0ZW06IGJ1dHRvbklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yQ2hhcmFjdGVycyc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5jaGFyYWN0ZXJzRGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JFbmVteSc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5lbmVteURhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZW15JykgIGVuZW15RGF0YWJhc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWFwTW92ZUNvbnRyb2xsZXJzID0gbWFwTW92ZUNvbnRyb2xsZXJzO1xyXG5mdW5jdGlvbiByZW5kZXJJdGVtc1RvU2lkZUxpc3QoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZGF0YUJhc2UgPSBfYS5kYXRhQmFzZSwgc2VsZWN0SXRlbSA9IF9hLnNlbGVjdEl0ZW07XHJcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtaW5zdHJ1bWVudGFsLXBhbmVsJyk7XHJcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChibG9ja0l0ZW0pIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJsb2NrSXRlbSlcclxuICAgICAgICB2YXIgb2JqID0gc2lkZVBhbmVsQWN0aW9uc18xLmJsb2NrQ3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6ICdzaW5nbGUtYmxvY2staXRlbScsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8aW1nIHdpZHRoPVxcXCIxMDAlXFxcIiB0aXRsZT1cXFwiXCIgKyAoKGJsb2NrSXRlbS5kZXRhaWxzKSA/IGJsb2NrSXRlbS5kZXRhaWxzLmRlc2NyaXB0aW9uIDogYmxvY2tJdGVtLmRlc2NyaXB0aW9uKSArIFwiXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGJsb2NrSXRlbVsndGV4dHVyZSddKSArIFwiJz5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBibG9ja0l0ZW06IGJsb2NrSXRlbSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQob2JqKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFCYXNlXzEgPSBkYXRhQmFzZTsgX2kgPCBkYXRhQmFzZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9ja0l0ZW0gPSBkYXRhQmFzZV8xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGJsb2NrSXRlbSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQucHJlcGVuZChjcmVhdGVEZXN0cm95QmxvY2soeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtIH0pKTtcclxufVxyXG5leHBvcnRzLnJlbmRlckl0ZW1zVG9TaWRlTGlzdCA9IHJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuZnVuY3Rpb24gc2lkZVBhbmVsSXRlbXNTZWxlY3RQcm9jZXNzKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGJsb2NrSXRlbSA9IF9hLmJsb2NrSXRlbTtcclxuICAgIGNvbnNvbGUubG9nKGJsb2NrSXRlbSk7XHJcbiAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtKSB7XHJcbiAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gKGJsb2NrSXRlbS5pZCAhPSBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uaWQpID8gYmxvY2tJdGVtIDogbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBibG9ja0l0ZW07XHJcbiAgICBwcmV2aWV3XzEucHJldmlld09mQmxvY2soeyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtOiBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50OiBldmVudCB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEZXN0cm95QmxvY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgc2VsZWN0SXRlbSA9IF9hLnNlbGVjdEl0ZW07XHJcbiAgICB2YXIgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvYmouY2xhc3NOYW1lID0gJ3NpbmdsZS1ibG9jay1pdGVtJztcclxuICAgIG9iai5pbm5lckhUTUwgPSBcIjxpbWcgdGl0bGU9XFxcIlwiICsgKChzZWxlY3RJdGVtID09PSBcInJlZGFjdG9yRGVjb3JhdGlvblwiKSA/ICdEZWxldGUgb25seSBiYWNrZ3JvdW5kJyA6ICdEZWxldGUgYmxvY2sgaXRlbScpICsgXCJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svZGVzdHJveS5wbmcnKSArIFwiJz5cIjtcclxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzdHJveWVyOiAoc2VsZWN0SXRlbSkgPyBzZWxlY3RJdGVtIDogJ2Rlc3Ryb3llcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Rlc3Ryb3kucG5nJ1xyXG4gICAgICAgICAgICB9IH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyVmlldygpIHtcclxuICAgIGlmICghdGhpcy5jdHgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29udGV4dFdpZHRoLCB0aGlzLmNvbnRleHRIZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJWaWV3ID0gY2xlYXJWaWV3O1xyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kUmVuZGVyKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZ0JhY2tncm91bmQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRUZXh0dXJlKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQmFja2dyb3VuZC5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZ0JhY2tncm91bmQsIDAsIDAsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuaW1hZ2VXaWR0aCwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5pbWFnZUhlaWdodCwgdGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS53aWR0aCwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSlcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5iYWNrZ3JvdW5kUmVuZGVyID0gYmFja2dyb3VuZFJlbmRlcjtcclxuZnVuY3Rpb24gY3JlYXRlQmxvY2tQaWN0dXJlKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0YWlscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21haW5PYmplY3QuY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgdGhpcy5kZXRhaWxzLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgdGhpcy5kZXRhaWxzLmltYWdlV2lkdGgsIHRoaXMuZGV0YWlscy5pbWFnZUhlaWdodCwgdGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5PYmplY3QuY3R4LnJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVCbG9ja1BpY3R1cmUgPSBjcmVhdGVCbG9ja1BpY3R1cmU7XHJcbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBpZiAoIW1haW5PYmplY3QuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyMjUsIDI1NSwgMjU1LCAuMylcIjtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxUZXh0KHRoaXMuaW5kZXgsIHRoaXMueE1vdmUgKyA1LCB0aGlzLnlNb3ZlICsgMTUpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDE1MywyNTUsMC40KSc7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5iZWdpblBhdGgoKTtcclxuICAgIG1haW5PYmplY3QuY3R4LnJlY3QodGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlKCk7XHJcbiAgICAvL21haW5PYmplY3QuY3R4LnN0cm9rZSgpXHJcbn1cclxuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9