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
exports.push([module.i, "body {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden; }\n\ncanvas {\n    background: #00534b; }\n\n.side-menu-wrapper {\n    background: #bbbbbb;\n    height: 96vh;\n    right: 0;\n    max-width: 300px;\n    min-width: 100px;\n    padding: 10px;\n    position: absolute;\n    overflow-y: scroll; }\n\n.game-field-wrapper {\n    overflow: hidden; }\n\nfooter {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    color: #ffffff; }\n\n.main-banner-cover {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.1);\n    width: 100vw;\n    height: 100vh;\n    z-index: 100; }\n\n* {\n    color: #221828; }\n\nlegend h3 {\n    margin: 0px; }\n\nlabel p {\n    font-size: 14px; }\n\ninput {\n    padding: 10px;\n    width: 91%;\n    border-radius: 7px;\n    border: 0px; }\n\n.side-instrumental-panel {\n    overflow-y: scroll;\n    max-height: 350px;\n    display: flex;\n    flex-wrap: wrap; }\n    .side-instrumental-panel li {\n        list-style: none; }\n    .side-instrumental-panel img {\n        padding: 10px;\n        display: block;\n        margin: 0 auto;\n        width: 54px; }\n\n.selected-item-preview {\n    position: absolute;\n    z-index: 100; }\n\n.inner-content {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    max-width: 70%;\n    min-height: 300px;\n    overflow-y: scroll;\n    right: 0;\n    float: right;\n    max-height: 90%; }\n    .inner-content hr {\n        color: #eaeaea; }\n    .inner-content .single-item-wrapper {\n        cursor: pointer;\n        padding: 5px; }\n    .inner-content .single-item-wrapper:hover {\n        background: #4d4263;\n        color: #fff; }\n        .inner-content .single-item-wrapper:hover h2 {\n            color: #ffffff; }\n\n.inner-description-fields-wrapper {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 20px; }\n    .inner-description-fields-wrapper .single-block-description {\n        color: #715184; }\n        .inner-description-fields-wrapper .single-block-description input {\n            background: #bbb; }\n\n.active-button {\n    background: #ff961e; }\n\n.side-panel-success {\n    color: #539700;\n    border: 1px solid #539700;\n    padding: 5px; }\n\n.side-panel-error {\n    color: #b10000;\n    border: 1px solid #b10000;\n    padding: 5px; }\n\n.block-description-wrapper {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap; }\n    .block-description-wrapper img {\n        max-width: 100%; }\n\n.single-block-description {\n    text-align: left;\n    padding: 5px;\n    width: 43%; }\n    .single-block-description textarea {\n        width: 100%;\n        padding: 5px;\n        margin-top: 10px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        border: 1px solid #dfdfdf;\n        background: #bbb; }\n\n.close-dialog {\n    color: #fff;\n    background: none;\n    padding: 20px;\n    border: none;\n    font-size: 29px;\n    position: absolute;\n    cursor: pointer; }\n\n.main-btn {\n    background: #ffb300;\n    border: navajowhite;\n    padding: 7px;\n    border-radius: 5px;\n    margin-top: 5px;\n    box-shadow: 1px 1px 5px #1547a64f;\n    cursor: pointer;\n    transition: .3s linear; }\n\n.main-btn:hover {\n    background: #ffedc3; }\n\n.main-btn:active {\n    background: #ff1e00; }\n\n.material-preview-wrapper {\n    width: 100%; }\n", ""]);
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
        this.blockRelativeXPos = 0;
        this.blockRelativeYPos = 0;
        this.width = data.width;
        this.height = data.height;
        this.index = data.index;
        this.details = (data.details) ? data.details : null;
        this.imageWidth = (data.imageWidth) ? data.imageWidth : data.width;
        this.imageHeight = (data.imageHeight) ? data.imageHeight : data.width;
        this.backgroundTexture = null;
        this.previewTexture = (data.previewTexture) ? data.previewTexture : false;
        this.sx = 0;
        this.sy = 0;
        this.picturesWidth = data.imageWidth;
        this.detectFrame = 0;
    }
    return BlockConstructor;
}());
exports.BlockConstructor = BlockConstructor;
BlockConstructor.prototype.renderBlockBox = initStartObject_1.renderBlockBox;
BlockConstructor.prototype.moveSingleBlock = blockInteractModule_1.moveSingleBlock;
BlockConstructor.prototype.elevatorMove = blocksFunctionality_1.elevatorMove;
BlockConstructor.prototype.blockAnimations = blocksFunctionality_1.blockAnimations;


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
    - destroy some blocks
    V- block information
        V - delete block
        V- preview
        V- information
        V- change data
            V- width
            V- height
            V- x
            V- y
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


V- add stairs
- add leaders
V- doors
    - doors access card
V- add horizontal elevator
V- add background texture and display it
    V- destroy/ change textures separately
    V- add texture animations
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
                            initStartObject_1.blockAnimationRender({ block: block });
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
    console.log(mainObject.selectedBlockPanelItem, "<<");
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
function blockAnimations(state) {
    if (state === void 0) { state = true; }
    this.detectFrame += 1;
    if (this.detectFrame % this.animationSteps == 0 && state) {
        // console.log(this)
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if (Math.round(this.sx) >= this.picturesWidth) {
            this.sx = 0;
        }
    }
    else if (this.backgroundTexture) {
        if (this.detectFrame % this.backgroundTexture.animationSteps == 0 && state) {
            // console.log(this)
            this.detectFrame = 0;
            this.backgroundTexture.sx += this.backgroundTexture.sWidth;
            if (Math.round(this.backgroundTexture.sx) >= this.backgroundTexture.picturesWidth) {
                this.backgroundTexture.sx = 0;
            }
        }
    }
    else if (this.details) {
        if (this.detectFrame % this.details.animationSteps == 0 && state) {
            //  console.log(this)
            this.detectFrame = 0;
            this.details.sx += this.details.sWidth;
            if (Math.round(this.details.sx) >= this.details.picturesWidth) {
                this.details.sx = 0;
            }
        }
    }
}
exports.blockAnimations = blockAnimations;
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
                    blockSize = 50, defaultWidth = (window.innerWidth / blockSize).toFixed(), defaultHeight = (window.innerHeight / blockSize).toFixed(), maxHorizontalBlocks = 300, maxVerticalBlocks = 200;
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
        //console.log()
        blockArray = blockArray.concat(new BlockConstructor(__assign({}, blockData)));
    }
    console.log(BlockConstructor, blockArray);
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
function blockAnimationRender(_a) {
    var block = _a.block;
    block.blockAnimations();
}
exports.blockAnimationRender = blockAnimationRender;


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
            innerText = "\n        <h1>Block size</h1>\n        <h3>Block width</h3>\n            <p>Size of block width in pixels</p>\n            <input type='number' min=\"1\" max=\"200\" id=" + ('width-property-' + currentDescriptionId) + " value=" + ((target.width) ? target.width : 0) + " />\n            <button data-target='save-width-btn' class=\"main-btn\">Save width</button>\n\n            <h3>Block height</h3>\n            <p>Size of block height in pixels</p>\n            <input type='number' min=\"1\" max=\"200\" id=" + ('height-property-' + currentDescriptionId) + " value=" + ((target.height) ? target.height : 0) + " />\n            <button data-target='save-height-btn' class=\"main-btn\">Save height</button>\n            ";
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-width-' + currentDescriptionId
            });
            blockPreviewImage['width'] = target.width;
            fileContainer.appendChild(itemData);
            innerText = "\n            <h1>Block Position</h1>\n            <h3>Block X</h3>\n            <p>X position of block</p>\n            <input type='number' min=\"0\" max=\"50\" id=" + ('x-pos-property-' + currentDescriptionId) + " value=" + ((target.blockRelativeXPos) ? target.blockRelativeXPos : 0) + " />\n            <button data-target='save-x-pos-btn' class=\"main-btn\">Save X Position</button>\n\n            <h3>Block Y</h3>\n            <p>Y position of block</p>\n            <input type='number' min=\"0\" max=\"50\" id=" + ('y-pos-property-' + currentDescriptionId) + " value=" + ((target.blockRelativeYPos) ? target.blockRelativeYPos : 0) + " />\n            <button data-target='save-y-pos-btn' class=\"main-btn\">Save Y Position</button>\n            ";
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-x-pos-' + currentDescriptionId
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
                innerText = "<h3>Tips</h3>\n            <p>A tips how to us this objects, it could be a part of some message, \"Use *  to start new line\"</p>\n            <textarea type='text' id=" + ('tips-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.tips) ? blockDetails.rules.tips : '') + "</textarea>\n            <button data-target='save-tips-btn' class=\"main-btn\">Save Tips</button> <hr>";
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
                                    case 'save-x-pos-btn': return [3 /*break*/, 5];
                                    case 'save-y-pos-btn': return [3 /*break*/, 7];
                                    case 'save-description-btn': return [3 /*break*/, 9];
                                    case 'save-tips-btn': return [3 /*break*/, 11];
                                    case 'save-success-text-btn': return [3 /*break*/, 13];
                                    case 'save-require-text-btn': return [3 /*break*/, 15];
                                    case 'save-require-btn': return [3 /*break*/, 17];
                                    case 'save-contain-btn': return [3 /*break*/, 19];
                                }
                                return [3 /*break*/, 21];
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
                                return [3 /*break*/, 22];
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
                                return [3 /*break*/, 22];
                            case 5: return [4 /*yield*/, changeDataInBlock({
                                    key: 'blockRelativeXPos',
                                    fieldSelector: '#' + 'x-pos-property-' + currentDescriptionId,
                                    target: target
                                })];
                            case 6:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                console.log(target);
                                return [3 /*break*/, 22];
                            case 7: return [4 /*yield*/, changeDataInBlock({
                                    key: 'blockRelativeYPos',
                                    fieldSelector: '#' + 'y-pos-property-' + currentDescriptionId,
                                    target: target
                                })];
                            case 8:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                console.log(target);
                                return [3 /*break*/, 22];
                            case 9: return [4 /*yield*/, changeDataInBlock({
                                    key: 'description',
                                    fieldSelector: '#' + 'description-field-' + currentDescriptionId,
                                    target: target.details
                                })];
                            case 10:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'description field' : ' save description field';
                                return [3 /*break*/, 22];
                            case 11: return [4 /*yield*/, changeDataInBlock({
                                    key: 'tips',
                                    fieldSelector: '#' + 'tips-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 12:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'tips field' : ' save tips field';
                                return [3 /*break*/, 22];
                            case 13: return [4 /*yield*/, changeDataInBlock({
                                    key: 'successText',
                                    fieldSelector: '#' + 'successText-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 14:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'description field' : ' save description field';
                                return [3 /*break*/, 22];
                            case 15: return [4 /*yield*/, changeDataInBlock({
                                    key: 'requireText',
                                    fieldSelector: '#' + 'requireText-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 16:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'require text field' : ' save require text field';
                                return [3 /*break*/, 22];
                            case 17: return [4 /*yield*/, changeDataInBlock({
                                    key: 'require',
                                    fieldSelector: '#' + 'require-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 18:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'require field' : ' save require field';
                                return [3 /*break*/, 22];
                            case 19: return [4 /*yield*/, changeDataInBlock({
                                    key: 'contain',
                                    fieldSelector: '#' + 'contain-field-' + currentDescriptionId,
                                    target: target.details.rules
                                })];
                            case 20:
                                fieldResults = _b.sent();
                                fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                return [3 /*break*/, 22];
                            case 21: return [2 /*return*/, false];
                            case 22:
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
    console.log(target);
    var itemBackgroundImage = (blockDetails['previewTexture']) ? blockDetails['previewTexture'] : blockDetails['texture']; // previewTexture
    itemBackgroundImage = (target.backgroundTexture && blockDetails['previewTexture']) ? target.backgroundTexture['previewTexture'] :
        (target.backgroundTexture) ? target.backgroundTexture.texture : blockDetails['texture'];
    var itemImage = (blockDetails['previewTexture']) ? blockDetails['previewTexture'] : blockDetails['texture'];
    var backgroundImage = (target.backgroundTexture) ? "<img width=\"50\" src=\"" + (globalVariables_1.__HOST + itemBackgroundImage) + "\" alt=\"" + target.backgroundTexture.id + "\">" : "";
    var innerText = "<div class=\"block-description-wrapper\">\n    <div class=\"material-preview-wrapper\">\n        <img id=\"block-preview-image\" width=\"200\" src=\"" + (globalVariables_1.__HOST + itemImage) + "\">\n    </div>\n\n    <ul><div id=\"block-alert-message\"></div>\n        <li>Name: " + blockDetails.id + "</li>\n        <li>Index: " + target.index + "</li>\n        <li>Type: " + ((blockDetails.type) ? blockDetails.type : '') + "</li>\n        <li>width: " + target.width + "</li>\n        <li>height: " + target.height + "</li>\n        <li>X: " + target.x + "</li>\n        <li>Y: " + target.y + "</li>\n\n    <p>" + ((target.backgroundTexture) ? "Background texture" : "") + "</p>\n    " + backgroundImage + "\n    </ul></div><hr>";
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
        var itemImage = (selectedBlockPanelItem['previewTexture']) ? selectedBlockPanelItem['previewTexture'] : selectedBlockPanelItem['texture'];
        showElement({ element: previewElement });
        previewElement['style'] = "margin-top: " + (event.clientY + 10) + "px; margin-left: " + (event.clientX + 10) + "px;";
        previewElement.innerHTML = "<img src=" + (globalVariable.__HOST + itemImage) + " >";
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
        var itemImage = (blockItem['previewTexture']) ? blockItem['previewTexture'] : blockItem['texture'];
        var obj = sidePanelActions_1.blockCreator({
            tag: 'div',
            styleClass: 'single-block-item',
            innerContent: "<img width=\"100%\" title=\"" + ((blockItem.details) ? blockItem.details.description : blockItem.description) + "\" src='" + (globalVariable.__HOST + itemImage) + "'>"
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
        var imgBackground, sx, sy;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!this.details)
                        return [2 /*return*/, false];
                    if (!this.backgroundTexture) return [3 /*break*/, 2];
                    imgBackground = new Image();
                    imgBackground.src = globalVariable.__HOST + this.backgroundTexture.texture;
                    sx = (this.backgroundTexture.sx) ? this.backgroundTexture.sx : 0;
                    sy = (this.backgroundTexture.sy) ? this.backgroundTexture.sy : 0;
                    return [4 /*yield*/, mainObject.ctx.drawImage(imgBackground, sx, sy, this.backgroundTexture.sWidth, this.backgroundTexture.sHeight, this.xMove, this.yMove, this.backgroundTexture.width, this.backgroundTexture.height)
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
        var img, sWidth, sHeight, sx, sy;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!this.details)
                        return [2 /*return*/, false
                            //mainObject.ctx.save(); // sWidth
                        ];
                    img = new Image();
                    img.src = globalVariable.__HOST + this.details.texture;
                    sWidth = (this.details.sWidth) ? this.details.sWidth : this.details.imageWidth;
                    sHeight = (this.details.sHeight) ? this.details.sHeight : this.details.imageHeight;
                    sx = (this.details.sx) ? this.details.sx : 0;
                    sy = (this.details.sy) ? this.details.sy : 0;
                    //.details.sx
                    return [4 /*yield*/, mainObject.ctx.drawImage(img, sx, sy, sWidth, sHeight, this.xMove + parseInt(this.blockRelativeXPos), this.yMove + parseInt(this.blockRelativeYPos), this.width, this.height)
                        // mainObject.ctx.restore()
                    ];
                case 1:
                    //.details.sx
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91aS92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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O0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9zZXJ2ZXIvcHVibGljL2xldmVsLWNyZWF0b3IvZGlzdC1zY3JpcHRzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDUzNGI7IH1cXG5cXG4uc2lkZS1tZW51LXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjYmJiYmJiO1xcbiAgICBoZWlnaHQ6IDk2dmg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi5nYW1lLWZpZWxkLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5tYWluLWJhbm5lci1jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcblxcbioge1xcbiAgICBjb2xvcjogIzIyMTgyODsgfVxcblxcbmxlZ2VuZCBoMyB7XFxuICAgIG1hcmdpbjogMHB4OyB9XFxuXFxubGFiZWwgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDkxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDBweDsgfVxcblxcbi5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgaW1nIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDU0cHg7IH1cXG5cXG4uc2VsZWN0ZWQtaXRlbS1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG5cXG4uaW5uZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWF4LWhlaWdodDogOTAlOyB9XFxuICAgIC5pbm5lci1jb250ZW50IGhyIHtcXG4gICAgICAgIGNvbG9yOiAjZWFlYWVhOyB9XFxuICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAuaW5uZXItY29udGVudCAuc2luZ2xlLWl0ZW0td3JhcHBlcjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0MjYzO1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyOmhvdmVyIGgyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7IH1cXG4gICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24ge1xcbiAgICAgICAgY29sb3I6ICM3MTUxODQ7IH1cXG4gICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIGlucHV0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiOyB9XFxuXFxuLmFjdGl2ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NjFlOyB9XFxuXFxuLnNpZGUtcGFuZWwtc3VjY2VzcyB7XFxuICAgIGNvbG9yOiAjNTM5NzAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTM5NzAwO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4uc2lkZS1wYW5lbC1lcnJvciB7XFxuICAgIGNvbG9yOiAjYjEwMDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjEwMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4uYmxvY2stZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAuYmxvY2stZGVzY3JpcHRpb24td3JhcHBlciBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDQzJTsgfVxcbiAgICAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHRleHRhcmVhIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiOyB9XFxuXFxuLmNsb3NlLWRpYWxvZyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjlweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubWFpbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZiMzAwO1xcbiAgICBib3JkZXI6IG5hdmFqb3doaXRlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMTU0N2E2NGY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjNzIGxpbmVhcjsgfVxcblxcbi5tYWluLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmVkYzM7IH1cXG5cXG4ubWFpbi1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMWUwMDsgfVxcblxcbi5tYXRlcmlhbC1wcmV2aWV3LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9tYWluLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgYmxvY2tJbnRlcmFjdE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrSW50ZXJhY3RNb2R1bGVcIik7XHJcbnZhciBibG9ja3NGdW5jdGlvbmFsaXR5XzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tzRnVuY3Rpb25hbGl0eVwiKTtcclxudmFyIEJsb2NrQ29uc3RydWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCbG9ja0NvbnN0cnVjdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMueE1vdmUgPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55TW92ZSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLmJsb2NrUmVsYXRpdmVYUG9zID0gMDtcclxuICAgICAgICB0aGlzLmJsb2NrUmVsYXRpdmVZUG9zID0gMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBkYXRhLmluZGV4O1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IChkYXRhLmRldGFpbHMpID8gZGF0YS5kZXRhaWxzIDogbnVsbDtcclxuICAgICAgICB0aGlzLmltYWdlV2lkdGggPSAoZGF0YS5pbWFnZVdpZHRoKSA/IGRhdGEuaW1hZ2VXaWR0aCA6IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IChkYXRhLmltYWdlSGVpZ2h0KSA/IGRhdGEuaW1hZ2VIZWlnaHQgOiBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlld1RleHR1cmUgPSAoZGF0YS5wcmV2aWV3VGV4dHVyZSkgPyBkYXRhLnByZXZpZXdUZXh0dXJlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgICAgdGhpcy5zeSA9IDA7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlc1dpZHRoID0gZGF0YS5pbWFnZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJsb2NrQ29uc3RydWN0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmxvY2tDb25zdHJ1Y3RvciA9IEJsb2NrQ29uc3RydWN0b3I7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlckJsb2NrQm94ID0gaW5pdFN0YXJ0T2JqZWN0XzEucmVuZGVyQmxvY2tCb3g7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLm1vdmVTaW5nbGVCbG9jayA9IGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5tb3ZlU2luZ2xlQmxvY2s7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLmVsZXZhdG9yTW92ZSA9IGJsb2Nrc0Z1bmN0aW9uYWxpdHlfMS5lbGV2YXRvck1vdmU7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLmJsb2NrQW5pbWF0aW9ucyA9IGJsb2Nrc0Z1bmN0aW9uYWxpdHlfMS5ibG9ja0FuaW1hdGlvbnM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdmlld18xID0gcmVxdWlyZShcIi4uL3VpL3ZpZXdcIik7XHJcbnZhciBNYWluR2FtZUNvbnN0cnVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWFpbkdhbWVDb25zdHJ1Y3RvcihfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy5tYXBNb3ZlU3BlZWQgPSBkYXRhLm1hcE1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLm1hcFdpZHRoID0gZGF0YS5tYXBXaWR0aDtcclxuICAgICAgICB0aGlzLm1hcEhlaWdodCA9IGRhdGEubWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWFwRGVmYXVsdFdpZHRoID0gZGF0YS5tYXBXaWR0aDtcclxuICAgICAgICB0aGlzLm1hcERlZmF1bHRIZWlnaHQgPSBkYXRhLm1hcEhlaWdodDtcclxuICAgICAgICB0aGlzLmFsbFJlZGFjdG9yQmxvY2sgPSBkYXRhLmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRGF0YWJhc2UgPSBkYXRhLmJhY2tncm91bmREYXRhYmFzZTtcclxuICAgICAgICB0aGlzLmJsb2NrRGF0YWJhc2UgPSAoZGF0YS5ibG9ja0RhdGFiYXNlKSA/IGRhdGEuYmxvY2tEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzRGF0YWJhc2UgPSAoZGF0YS5jaGFyYWN0ZXJzRGF0YWJhc2UpID8gZGF0YS5jaGFyYWN0ZXJzRGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlEYXRhYmFzZSA9IChkYXRhLmVuZW15RGF0YWJhc2UpID8gZGF0YS5lbmVteURhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGRhdGEuYmxvY2tTaXplO1xyXG4gICAgICAgIHRoaXMubWF4SG9yaXpvbnRhbEJsb2NrcyA9IGRhdGEubWF4SG9yaXpvbnRhbEJsb2NrcztcclxuICAgICAgICB0aGlzLm1heFZlcnRpY2FsQmxvY2tzID0gZGF0YS5tYXhWZXJ0aWNhbEJsb2NrcztcclxuICAgICAgICB0aGlzLmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taW5pTWFwQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFpbkdhbWVDb25zdHJ1Y3RvcjtcclxufSgpKTtcclxuZXhwb3J0cy5NYWluR2FtZUNvbnN0cnVjdG9yID0gTWFpbkdhbWVDb25zdHJ1Y3RvcjtcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuaW5pdFZpZXcgPSB2aWV3XzEuaW5pdFZpZXc7XHJcbk1haW5HYW1lQ29uc3RydWN0b3IucHJvdG90eXBlLmNsZWFyVmlldyA9IHZpZXdfMS5jbGVhclZpZXc7XHJcbk1haW5HYW1lQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlckl0ZW1zVG9TaWRlTGlzdCA9IHZpZXdfMS5yZW5kZXJJdGVtc1RvU2lkZUxpc3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi4vc2Fzcy9tYWluLnNhc3NcIik7XHJcbnZhciByZW5kZXJDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4vY29uc3RydWN0b3JzL3JlbmRlckNvbnN0cnVjdG9yXCIpO1xyXG52YXIgYmxvY2tDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4vY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3JcIik7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi91aS92aWV3XCIpO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi9yZWRhY3Rvci9pbml0U3RhcnRPYmplY3RcIik7XHJcbnZhciBzaWRlUGFuZWxBY3Rpb25zXzEgPSByZXF1aXJlKFwiLi9yZWRhY3Rvci9zaWRlUGFuZWxBY3Rpb25zXCIpO1xyXG4vKlxyXG5WLSBjcmVhdGUgbWFwIG5ldFxyXG4gICAgVi0gdmVydGljYWwgZGlyZWN0aW9uIG9mIGJsb2NrXHJcbiAgICAtIGRlc3Ryb3kgc29tZSBibG9ja3NcclxuICAgIFYtIGJsb2NrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgViAtIGRlbGV0ZSBibG9ja1xyXG4gICAgICAgIFYtIHByZXZpZXdcclxuICAgICAgICBWLSBpbmZvcm1hdGlvblxyXG4gICAgICAgIFYtIGNoYW5nZSBkYXRhXHJcbiAgICAgICAgICAgIFYtIHdpZHRoXHJcbiAgICAgICAgICAgIFYtIGhlaWdodFxyXG4gICAgICAgICAgICBWLSB4XHJcbiAgICAgICAgICAgIFYtIHlcclxuICAgICAgICAgICAgVi0gZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgVi0gcnVsZXJzXHJcbiAgICAgICAgICAgIC0gZWxldmF0b3Igc3BlZWRcclxuVi0gc2lkZSBwYW5lbFxyXG4gICAgVi0gbmV3IG1hcFxyXG4gICAgICAgIFYtIG1hcCBuYW1lXHJcbiAgICAgICAgVi0gc2F2ZSBtYXAgaW4ganNvblxyXG4gICAgICAgIFYtIGNoYW5nZSBtYXAgc2l6ZVxyXG4gICAgICAgIFYtIG92ZXJ3cml0ZSBtYXBcclxuICAgIFYtIGxvYWQgbWFwXHJcbiAgICBWLSBtaW5pbWFwXHJcbiAgICBWLSBkaWZmZXJlbnQgc2VjdGlvbnMgb2Ygb2JqZWN0c1xyXG4gICAgICAgIFYtIGJsb2NrXHJcbiAgICAgICAgVi0gY2hhcmFjdGVyc1xyXG4gICAgICAgIFYtIGVuZW15XHJcbiAgICAgICAgVi0gYmFja2dyb3VuZFxyXG5cclxuXHJcblYtIGFkZCBzdGFpcnNcclxuLSBhZGQgbGVhZGVyc1xyXG5WLSBkb29yc1xyXG4gICAgLSBkb29ycyBhY2Nlc3MgY2FyZFxyXG5WLSBhZGQgaG9yaXpvbnRhbCBlbGV2YXRvclxyXG5WLSBhZGQgYmFja2dyb3VuZCB0ZXh0dXJlIGFuZCBkaXNwbGF5IGl0XHJcbiAgICBWLSBkZXN0cm95LyBjaGFuZ2UgdGV4dHVyZXMgc2VwYXJhdGVseVxyXG4gICAgVi0gYWRkIHRleHR1cmUgYW5pbWF0aW9uc1xyXG4tIGFkZCBOUENcclxuICAgIC0gZGlhbG9nXHJcblxyXG5cclxuKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiByZWRhY3RvckVuZ2luZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pLCBfYSwgYmxvY2s7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmNsZWFyVmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwLCBfYSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBfYS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmxvY2suZWxldmF0b3JNb3ZlKCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0U3RhcnRPYmplY3RfMS5ibG9ja0FuaW1hdGlvblJlbmRlcih7IGJsb2NrOiBibG9jayB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrLnJlbmRlckJsb2NrQm94KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluT2JqZWN0LCBlbmdpbmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRTdGFydE9iamVjdF8xLmluaXRNYWluRW5naW5lKHsgTWFpbkdhbWVDb25zdHJ1Y3RvcjogcmVuZGVyQ29uc3RydWN0b3JfMS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmluaXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5yZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkYWN0b3JFbmdpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5tYXBNb3ZlQ29udHJvbGxlcnMoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5zYXZlTWFwKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEubG9hZE1hcCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLnNldE1hcFNpemUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuY3JlYXRlTmV3TWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS9wcmV2aWV3XCIpO1xyXG52YXIgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vcGFuZWxGb3JtUGFydEdlbmVyYXRvclwiKTtcclxuZnVuY3Rpb24gb3BlblJlZGFjdG9yV2luZG93KF9hKSB7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0gX2EuYmxvY2tEYXRhLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZWN0RmlsZXMsIGZpbGVDb250YWluZXIsIGNsb3NlRGlhbG9nLCBnZW5lcmF0ZWRBcmVhLCBhbGxCbG9ja3MsIGlubmVyRGVzY3JpcHRpb25BcmVhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgIWJsb2NrRGF0YS5kZXRhaWxzIHx8IG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZEFyZWEgPSBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdpbm5lci1kZXNjcmlwdGlvbi1hcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkQXJlYSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWRlc2NyaXB0aW9uLWFyZWFcIildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRGVzY3JpcHRpb25BcmVhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5sb2FkSW5uZXJEYXRhKHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5nZW5lcmF0ZUlucHV0KHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5vcGVuUmVkYWN0b3JXaW5kb3cgPSBvcGVuUmVkYWN0b3JXaW5kb3c7XHJcbmZ1bmN0aW9uIHBvc2l0aW9uUmVkdWNlcihfYSkge1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IF9hLmFsbEJsb2NrcztcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCbG9ja3NfMSA9IGFsbEJsb2NrczsgX2kgPCBhbGxCbG9ja3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBhbGxCbG9ja3NfMVtfaV07XHJcbiAgICAgICAgYmxvY2sueE1vdmUgPSBibG9jay54O1xyXG4gICAgICAgIGJsb2NrLnlNb3ZlID0gYmxvY2sueTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBvc2l0aW9uUmVkdWNlciA9IHBvc2l0aW9uUmVkdWNlcjtcclxuZnVuY3Rpb24gY2hhbmdlQmxvY2tBcnJheVNpemUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZm9ybURhdGEgPSBfYS5mb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtc2l6ZS1lcnJvcicpO1xyXG4gICAgdmFyIHdpZHRoU2V0ID0gZm9ybURhdGEuaG9yaXpvbnRhbEJsb2NrO1xyXG4gICAgdmFyIGhlaWdodFNldCA9IGZvcm1EYXRhLnZlcnRpY2FsQmxvY2s7XHJcbiAgICB2YXIgY3VycmVudFdpZHRoID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIHZlcnRpY2FsUmFuZ2UgPSBoZWlnaHRTZXQgLSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgdmFyIHZlcnRpY2FsQ29tcGVuc2F0aW9uID0gdmVydGljYWxSYW5nZTtcclxuICAgIHZhciBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBbXTtcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgLy9lcnJvckZpZWxkLmlubmVySFRNTCA9IGA8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPmA7XHJcbiAgICBwb3NpdGlvblJlZHVjZXIoeyBhbGxCbG9ja3M6IGFsbEJsb2NrcyB9KTtcclxuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdpZHRoU2V0OyBjb2wrKykge1xyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gPSAwOyBpdGVtIDwgaGVpZ2h0U2V0OyBpdGVtKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gKGNvbCA9PSAwKSA/IGl0ZW0gOiAoY29sICogY3VycmVudEhlaWdodCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgbmV3QmxvY2tzQXJyYXlJbmRleCA9IChjb2wgPT0gMCkgPyBpdGVtIDogKGNvbCAqIGhlaWdodFNldCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgb2xkQmxvY2tzQXJyYXlJbmRleCA9IChpdGVtIDwgY3VycmVudEhlaWdodCkgPyBhbGxCbG9ja3Nbcm93SW5kZXhdIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG9sZEJsb2Nrc0FycmF5SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9sZEJsb2Nrc0FycmF5SW5kZXguaW5kZXggPSBuZXdCbG9ja3NBcnJheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbmV3UmVidWlsZEJsb2NrTWFwID0gbmV3UmVidWlsZEJsb2NrTWFwLmNvbmNhdChvbGRCbG9ja3NBcnJheUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlYnVpbGRCbG9ja01hcCA9IG5ld1JlYnVpbGRCbG9ja01hcC5jb25jYXQoY3JlYXRlU2luZ2xlTWFwQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3Q6IG1haW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogbmV3QmxvY2tzQXJyYXlJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb2wgKiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBpdGVtICogbWFpbk9iamVjdC5ibG9ja1NpemUgLy8gKyBvbGRZUmFuZ2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcnRpY2FsQ29tcGVuc2F0aW9uICs9IHZlcnRpY2FsUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBtYWluT2JqZWN0Lm1hcFdpZHRoID0gd2lkdGhTZXQ7XHJcbiAgICBtYWluT2JqZWN0Lm1hcEhlaWdodCA9IGhlaWdodFNldDtcclxuICAgIG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jayA9IG5ld1JlYnVpbGRCbG9ja01hcDtcclxuICAgIHZhciBzaG93ID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrLmZpbmQoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uaW5kZXggPT0gMTAxMTsgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzaG93LCBcInNob3cgcmVzaXplXCIpO1xyXG4gICAgY29uc29sZS5sb2cobWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrWzBdKTtcclxufVxyXG5leHBvcnRzLmNoYW5nZUJsb2NrQXJyYXlTaXplID0gY2hhbmdlQmxvY2tBcnJheVNpemU7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZU1hcEJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yLCBpbmRleCA9IF9hLmluZGV4LCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0ge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgICB3aWR0aDogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogaW5kZXhcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpO1xyXG59XHJcbmZ1bmN0aW9uIG1pbmlNYXBwZXIoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHZhciBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25ZID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlID0gdHJ1ZTtcclxuICAgIHZhciBtYXBTaXplID0gNTAgLyAzO1xyXG4gICAgZmlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBuZXdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBtYXBTaXplV2lkdGggPSBtYWluT2JqZWN0Lm1hcFdpZHRoICogMztcclxuICAgIHZhciBtYXBTaXplSGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQgKiAzO1xyXG4gICAgbmV3TWFwWyd3aWR0aCddID0gbWFwU2l6ZVdpZHRoO1xyXG4gICAgbmV3TWFwWydoZWlnaHQnXSA9IG1hcFNpemVIZWlnaHQ7XHJcbiAgICB2YXIgbWluaU1hcEN0eCA9IG5ld01hcC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNYXApO1xyXG4gICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgY3R4OiBtaW5pTWFwQ3R4LFxyXG4gICAgICAgIGFsbEJsb2NrczogYWxsQmxvY2tzLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWTogY2FtZXJhUG9zaXRpb25ZLFxyXG4gICAgICAgIG1hcFNpemU6IG1hcFNpemUsXHJcbiAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgbWFwU2l6ZUhlaWdodDogbWFwU2l6ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddID09PSAnQ0FOVkFTJykge1xyXG4gICAgICAgICAgICB2YXIgcG9zWCA9IGV2ZW50WydjbGllbnRYJ10gLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXTtcclxuICAgICAgICAgICAgdmFyIHBvc1kgPSBldmVudFsnY2xpZW50WSddIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXTtcclxuICAgICAgICAgICAgc2V0TWFwQXNDbGljayh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHg6IHBvc1ggKiBtYXBTaXplLCB5OiBwb3NZICogbWFwU2l6ZSB9KTtcclxuICAgICAgICAgICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgICAgICAgICBjdHg6IG1pbmlNYXBDdHgsXHJcbiAgICAgICAgICAgICAgICBhbGxCbG9ja3M6IGFsbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25ZOiBjYW1lcmFQb3NpdGlvblksXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplOiBtYXBTaXplLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplSGVpZ2h0OiBtYXBTaXplSGVpZ2h0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5taW5pTWFwcGVyID0gbWluaU1hcHBlcjtcclxuZnVuY3Rpb24gbWFwT2JqZWN0RHJhdyhfYSkge1xyXG4gICAgdmFyIGN0eCA9IF9hLmN0eCwgYWxsQmxvY2tzID0gX2EuYWxsQmxvY2tzLCBjYW1lcmFQb3NpdGlvblkgPSBfYS5jYW1lcmFQb3NpdGlvblksIGNhbWVyYVBvc2l0aW9uWCA9IF9hLmNhbWVyYVBvc2l0aW9uWCwgbWFwU2l6ZSA9IF9hLm1hcFNpemUsIG1hcFNpemVXaWR0aCA9IF9hLm1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCA9IF9hLm1hcFNpemVIZWlnaHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIG1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxCbG9ja3MpO1xyXG4gICAgYWxsQmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAoaXRlbS5kZXRhaWxzLm1hcENvbG9yKSA/IGl0ZW0uZGV0YWlscy5tYXBDb2xvciA6IFwicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjsgLy9pdGVtLmRldGFpbHMubWFwQ29sb3IvL1wicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChpdGVtLngpID8gaXRlbS54IC8gbWFwU2l6ZSA6IDAsIChpdGVtLnlNb3ZlKSA/IGl0ZW0ueSAvIG1hcFNpemUgOiAwLCA1MCAvIG1hcFNpemUsIDUwIC8gbWFwU2l6ZSk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2N0eC5zYXZlKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgMSlcIjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5yZWN0KChjYW1lcmFQb3NpdGlvblggLyBtYXBTaXplKSAqIC0xLCAoY2FtZXJhUG9zaXRpb25ZIC8gbWFwU2l6ZSkgKiAtMSwgd2luZG93LmlubmVyV2lkdGggLyBtYXBTaXplLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyBtYXBTaXplKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vY3R4LnJlc3RvcmUoKVxyXG59XHJcbmZ1bmN0aW9uIHNldE1hcEFzQ2xpY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSB4ICsgYWxsQmxvY2tzWzBdLnhNb3ZlOyAvL01hdGgubWF4KGFsbEJsb2Nrc1swXS54TW92ZSwgeCkgLSBNYXRoLm1pbihhbGxCbG9ja3NbMF0ueE1vdmUsIHgpO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IHkgKyBhbGxCbG9ja3NbMF0ueU1vdmU7IC8vTWF0aC5tYXgoYWxsQmxvY2tzWzBdLnlNb3ZlLCB5KSAtIE1hdGgubWluKGFsbEJsb2Nrc1swXS55TW92ZSwgeSk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJsb2Nrc18yID0gYWxsQmxvY2tzOyBfaSA8IGFsbEJsb2Nrc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9jayA9IGFsbEJsb2Nrc18yW19pXTtcclxuICAgICAgICBibG9jay54TW92ZSAtPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWCk7XHJcbiAgICAgICAgYmxvY2sueU1vdmUgLT0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblkpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4vYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGNvbGxpc2lvbkRldGVjdG9yKF9hKSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gX2Eub2JqZWN0LCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICBpZiAoIW9iamVjdCB8fCAhdGFyZ2V0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRhcmdldC53aWR0aCA9IHBhcnNlSW50KHRhcmdldC53aWR0aCk7XHJcbiAgICB0YXJnZXQuaGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LmhlaWdodCk7XHJcbiAgICBvYmplY3Qud2lkdGggPSBwYXJzZUludChvYmplY3Qud2lkdGgpO1xyXG4gICAgb2JqZWN0LmhlaWdodCA9IHBhcnNlSW50KG9iamVjdC5oZWlnaHQpO1xyXG4gICAgdmFyIHhNaW4gPSBNYXRoLm1pbihvYmplY3QueE1vdmUsIHRhcmdldC54KTtcclxuICAgIHZhciB5TWluID0gTWF0aC5taW4ob2JqZWN0LnlNb3ZlLCB0YXJnZXQueSk7XHJcbiAgICB2YXIgeE1heCA9IE1hdGgubWF4KG9iamVjdC54TW92ZSArIG9iamVjdC53aWR0aCwgdGFyZ2V0LnggKyB0YXJnZXQud2lkdGgpO1xyXG4gICAgdmFyIHlNYXggPSBNYXRoLm1heChvYmplY3QueU1vdmUgKyBvYmplY3QuaGVpZ2h0LCB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQpO1xyXG4gICAgdmFyIHJlc1ggPSB4TWF4IC0geE1pbjtcclxuICAgIHZhciByZXNZID0geU1heCAtIHlNaW47XHJcbiAgICB2YXIgY29sbGlzaW9uID0gKHJlc1ggPiBvYmplY3Qud2lkdGggfHwgcmVzWSA+IG9iamVjdC5oZWlnaHQpID8gZmFsc2UgOiBcImNvbGxpc2lvblwiO1xyXG4gICAgaWYgKGNvbGxpc2lvbilcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmNvbGxpc2lvbkRldGVjdG9yID0gY29sbGlzaW9uRGV0ZWN0b3I7XHJcbmZ1bmN0aW9uIG1vdmVTaW5nbGVCbG9jayhfYSkge1xyXG4gICAgdmFyIHhNb3ZlVmFsdWUgPSBfYS54TW92ZVZhbHVlLCB5TW92ZVZhbHVlID0gX2EueU1vdmVWYWx1ZTtcclxuICAgIGlmICh4TW92ZVZhbHVlKVxyXG4gICAgICAgIHRoaXMueE1vdmUgKz0geE1vdmVWYWx1ZTtcclxuICAgIGlmICh5TW92ZVZhbHVlKVxyXG4gICAgICAgIHRoaXMueU1vdmUgKz0geU1vdmVWYWx1ZTtcclxufVxyXG5leHBvcnRzLm1vdmVTaW5nbGVCbG9jayA9IG1vdmVTaW5nbGVCbG9jaztcclxuZnVuY3Rpb24gbW92ZUFsbFNjZW5lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHhNb3ZlVmFsdWUgPSBfYS54TW92ZVZhbHVlLCB5TW92ZVZhbHVlID0gX2EueU1vdmVWYWx1ZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNpbmdsZUJsb2NrID0gX2JbX2ldO1xyXG4gICAgICAgIHNpbmdsZUJsb2NrLm1vdmVTaW5nbGVCbG9jayh7IHhNb3ZlVmFsdWU6IHhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWU6IHlNb3ZlVmFsdWUgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlQWxsU2NlbmUgPSBtb3ZlQWxsU2NlbmU7XHJcbmZ1bmN0aW9uIGNoYW5nZU9iamVjdE1vZGVsKF9hKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0LCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGlmICghbWFpbk9iamVjdCB8fCAhcmVzdWx0IHx8ICFtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlIHx8IG1haW5PYmplY3QuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjdXJyZW50QmxvY2sgPSBhbGxCbG9ja3NbcmVzdWx0LmluZGV4XTtcclxuICAgIGNvbnNvbGUubG9nKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgXCI8PFwiKTtcclxuICAgIGlmICghbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmRlc3Ryb3llcikge1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0udHlwZSA9PT0gXCJiYWNrZ3JvdW5kLXdhbGxcIiAmJiBjdXJyZW50QmxvY2suZGV0YWlscykge1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ud2lkdGggPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmhlaWdodCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueCA9IGN1cnJlbnRCbG9jay54O1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueSA9IGN1cnJlbnRCbG9jay55O1xyXG4gICAgICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueE1vdmUgPSBjdXJyZW50QmxvY2sueE1vdmU7XHJcbiAgICAgICAgICAgIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS55TW92ZSA9IGN1cnJlbnRCbG9jay55TW92ZTtcclxuICAgICAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS50eXBlID09PSBcImJhY2tncm91bmQtd2FsbFwiICYmICFjdXJyZW50QmxvY2suZGV0YWlscykge1xyXG4gICAgICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmRldGFpbHMgPSBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyID09PSAnZGVzdHJveWVyJykge1xyXG4gICAgICAgIGlmIChjdXJyZW50QmxvY2suZGV0YWlscyAmJiBjdXJyZW50QmxvY2suZGV0YWlscy52YWx1ZU9mTW92ZSkge1xyXG4gICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLnBvc2l0aW9uUmVkdWNlcih7IGFsbEJsb2NrczogYWxsQmxvY2tzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1haW5PYmplY3QuYmxvY2tTaXplKVxyXG4gICAgICAgIGN1cnJlbnRCbG9jay53aWR0aCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5oZWlnaHQgPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIgPT09ICdyZWRhY3RvckRlY29yYXRpb24nKSB7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNoYW5nZU9iamVjdE1vZGVsID0gY2hhbmdlT2JqZWN0TW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGVsZXZhdG9yTW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5kZXRhaWxzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0aGlzLmRldGFpbHMudHlwZSA9PT0gJ2VsZXZhdG9yJykge1xyXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZTtcclxuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5kZXRhaWxzLnZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudFZhbHVlKVxyXG4gICAgICAgIGlmICh0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnlNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIilcclxuICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPD0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnhNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yVmFsdWVPZk1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID49IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVsZXZhdG9yTW92ZSA9IGVsZXZhdG9yTW92ZTtcclxuLypcclxuXHJcblwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImNvbnN0cnVjdG9yVmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudERpcmVjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgIFwiY29uc3RydWN0b3JEaXJlY3Rpb25cIjogdHJ1ZSxcclxuIFwiaWRcIjogXCJlbGV2YXRvcl8xXCIsXHJcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFwiL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2VsZXZhdG9yLnBuZ1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFbGV2YXRvclwiLFxyXG4gICAgICAgIFwic3BlZWRcIjogNSxcclxuICAgICAgICBcIm1vdmVEaXJlY3Rpb25cIjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgIFwidmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImN1cnJlbnREaXJlY3Rpb25cIjogdHJ1ZSxcclxuICAgICAgICBcInR5cGVcIjogXCJlbGV2YXRvclwiLFxyXG4gICAgICAgIFwiY29sbGlzaW9uXCI6IHRydWVcclxuKi9cclxuZnVuY3Rpb24gYmxvY2tBbmltYXRpb25zKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkgeyBzdGF0ZSA9IHRydWU7IH1cclxuICAgIHRoaXMuZGV0ZWN0RnJhbWUgKz0gMTtcclxuICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5hbmltYXRpb25TdGVwcyA9PSAwICYmIHN0YXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuc1dpZHRoO1xyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHRoaXMuc3gpID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRUZXh0dXJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmJhY2tncm91bmRUZXh0dXJlLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3ggKz0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3gpID49IHRoaXMuYmFja2dyb3VuZFRleHR1cmUucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmRldGFpbHMpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuZGV0YWlscy5hbmltYXRpb25TdGVwcyA9PSAwICYmIHN0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnN4ICs9IHRoaXMuZGV0YWlscy5zV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHRoaXMuZGV0YWlscy5zeCkgPj0gdGhpcy5kZXRhaWxzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5zeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5ibG9ja0FuaW1hdGlvbnMgPSBibG9ja0FuaW1hdGlvbnM7XHJcbmZ1bmN0aW9uIHN0YWlyc01vdmUoKSB7XHJcbn1cclxuZXhwb3J0cy5zdGFpcnNNb3ZlID0gc3RhaXJzTW92ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIF9fSE9TVCA9ICdodHRwOi8vbG9jYWxob3N0OjMzMDAnO1xyXG5leHBvcnRzLl9fSE9TVCA9IF9fSE9TVDtcclxudmFyIF9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWJsb2Nrcyc7XHJcbmV4cG9ydHMuX19CTE9DS19DT05TVFJVQ1RPUl9VUkwgPSBfX0JMT0NLX0NPTlNUUlVDVE9SX1VSTDtcclxudmFyIF9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItYmFja2dyb3VuZC1ibG9ja3MnO1xyXG5leHBvcnRzLl9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkwgPSBfX0JMT0NLX0JBQ0tHUk9VTkRfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWNoYXJhY3RlcnMnO1xyXG5leHBvcnRzLl9fQ0hBUkFDVEVSX0NPTlNUUlVDVE9SX1VSTCA9IF9fQ0hBUkFDVEVSX0NPTlNUUlVDVE9SX1VSTDtcclxudmFyIF9fRU5FTVlfREVUQUlMU19VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItZ3JvdW5kLWVuZW15JztcclxudmFyIF9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWdyb3VuZC1lbmVteS1yZWRhY3Rvcic7XHJcbmV4cG9ydHMuX19FTkVNWV9DT05TVFJVQ1RPUl9VUkwgPSBfX0VORU1ZX0NPTlNUUlVDVE9SX1VSTDtcclxudmFyIF9fTUFQX0RBVEFfVVJMID0gJy9hcHAvZ2V0LWFsbC1tYXBzJztcclxuZXhwb3J0cy5fX01BUF9EQVRBX1VSTCA9IF9fTUFQX0RBVEFfVVJMO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG52YXIgdmlld18xID0gcmVxdWlyZShcIi4uL3VpL3ZpZXdcIik7XHJcbnZhciByZXF1ZXN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL3NlcnZlci1yZXF1ZXN0cy9yZXF1ZXN0c01vZHVsZVwiKTtcclxuZnVuY3Rpb24gaW5pdE1haW5FbmdpbmUoX2EpIHtcclxuICAgIHZhciBNYWluR2FtZUNvbnN0cnVjdG9yID0gX2EuTWFpbkdhbWVDb25zdHJ1Y3RvciwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1hcE5hbWUsIGJsb2NrU2l6ZSwgZGVmYXVsdFdpZHRoLCBkZWZhdWx0SGVpZ2h0LCBtYXhIb3Jpem9udGFsQmxvY2tzLCBtYXhWZXJ0aWNhbEJsb2NrcywgcmVkYWN0b3JEYXRhLCBfYjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBtYXBOYW1lID0gZG9jdW1lbnQuZm9ybXNbJ25ldy1tYXAnXS5uYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplID0gNTAsIGRlZmF1bHRXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIGJsb2NrU2l6ZSkudG9GaXhlZCgpLCBkZWZhdWx0SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIGJsb2NrU2l6ZSkudG9GaXhlZCgpLCBtYXhIb3Jpem9udGFsQmxvY2tzID0gMzAwLCBtYXhWZXJ0aWNhbEJsb2NrcyA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYXBTaXplVG9Gb3JtKHsgd2lkdGg6IGRlZmF1bHRXaWR0aCwgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBNb3ZlU3BlZWQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBXaWR0aDogZGVmYXVsdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBIZWlnaHQ6IGRlZmF1bHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERlZmF1bHRXaWR0aDogZGVmYXVsdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBEZWZhdWx0SGVpZ2h0OiBkZWZhdWx0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIb3Jpem9udGFsQmxvY2tzOiBtYXhIb3Jpem9udGFsQmxvY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhWZXJ0aWNhbEJsb2NrczogbWF4VmVydGljYWxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogYmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxSZWRhY3RvckJsb2NrOiBmaWxsQmxvY2tNYXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxCbG9ja3M6IGRlZmF1bHRXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQmxvY2s6IGRlZmF1bHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1NpemU6IGJsb2NrU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmJsb2NrRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0JMT0NLX0JBQ0tHUk9VTkRfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IuYmFja2dyb3VuZERhdGFiYXNlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IuY2hhcmFjdGVyc0RhdGFiYXNlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19FTkVNWV9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgKF9iLmVuZW15RGF0YWJhc2UgPSBfYy5zZW50KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkYWN0b3JEYXRhID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVkYWN0b3JEYXRhLmJhY2tncm91bmREYXRhYmFzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IE1haW5HYW1lQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIHJlZGFjdG9yRGF0YSkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5pbml0TWFpbkVuZ2luZSA9IGluaXRNYWluRW5naW5lO1xyXG5mdW5jdGlvbiBzZXRNYXBTaXplVG9Gb3JtKF9hKSB7XHJcbiAgICB2YXIgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbWFwLXNpemUnXTtcclxuICAgIGZvcm1bJ2hvcml6b250YWxCbG9jayddLnZhbHVlID0gd2lkdGg7XHJcbiAgICBmb3JtWyd2ZXJ0aWNhbEJsb2NrJ10udmFsdWUgPSBoZWlnaHQ7XHJcbn1cclxuZXhwb3J0cy5zZXRNYXBTaXplVG9Gb3JtID0gc2V0TWFwU2l6ZVRvRm9ybTtcclxuZnVuY3Rpb24gZmlsbEJsb2NrTWFwKF9hKSB7XHJcbiAgICB2YXIgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3IsIGhvcml6b250YWxCbG9ja3MgPSBfYS5ob3Jpem9udGFsQmxvY2tzLCB2ZXJ0aWNhbEJsb2NrID0gX2EudmVydGljYWxCbG9jaywgYmxvY2tTaXplID0gX2EuYmxvY2tTaXplO1xyXG4gICAgdmFyIGJsb2NrQXJyYXkgPSBbXTtcclxuICAgIHZhciBob3Jpem9udGFsRW5kcyA9IDA7XHJcbiAgICB2YXIgdmVydGljYWxFbmRzID0gMDtcclxuICAgIHZhciBibG9ja0RhdGEgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiBibG9ja1NpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBibG9ja1NpemUsXHJcbiAgICAgICAgaW5kZXg6IDBcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvcml6b250YWxCbG9ja3MgKiB2ZXJ0aWNhbEJsb2NrOyBpKyspIHtcclxuICAgICAgICBibG9ja0RhdGEueSA9IHZlcnRpY2FsRW5kcztcclxuICAgICAgICBibG9ja0RhdGEueCA9IGhvcml6b250YWxFbmRzO1xyXG4gICAgICAgIGJsb2NrRGF0YS5pbmRleCA9IGk7XHJcbiAgICAgICAgdmVydGljYWxFbmRzID0gKHZlcnRpY2FsRW5kcyA8ICgodmVydGljYWxCbG9jayAtIDEpICogYmxvY2tTaXplKSkgPyB2ZXJ0aWNhbEVuZHMgKyBibG9ja1NpemUgOiAwO1xyXG4gICAgICAgIGhvcml6b250YWxFbmRzID0gKHZlcnRpY2FsRW5kcyA9PSAwKSA/IGhvcml6b250YWxFbmRzICsgYmxvY2tTaXplIDogaG9yaXpvbnRhbEVuZHM7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygpXHJcbiAgICAgICAgYmxvY2tBcnJheSA9IGJsb2NrQXJyYXkuY29uY2F0KG5ldyBCbG9ja0NvbnN0cnVjdG9yKF9fYXNzaWduKHt9LCBibG9ja0RhdGEpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhCbG9ja0NvbnN0cnVjdG9yLCBibG9ja0FycmF5KTtcclxuICAgIHJldHVybiBibG9ja0FycmF5O1xyXG59XHJcbmV4cG9ydHMuZmlsbEJsb2NrTWFwID0gZmlsbEJsb2NrTWFwO1xyXG5mdW5jdGlvbiBiYWNrVG9PYmplY3QoX2EpIHtcclxuICAgIHZhciBkYXRhID0gX2EuZGF0YSwgY29uc3RydWN0b3IgPSBfYS5jb25zdHJ1Y3RvcjtcclxuICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yKTtcclxuICAgIHZhciBmaW5hbE9iamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShyZXMucHJvdG90eXBlKSwgZGF0YSk7XHJcbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XHJcbn1cclxuZXhwb3J0cy5iYWNrVG9PYmplY3QgPSBiYWNrVG9PYmplY3Q7XHJcbmZ1bmN0aW9uIHJlbmRlckJsb2NrQm94KF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy55TW92ZSA+IDAgLSAxMDAgJiYgdGhpcy54TW92ZSA+IDAgLSAxMDAgJiYgdGhpcy55TW92ZSA8IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMCAmJiB0aGlzLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggKyAxMDApKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRldGFpbHMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5jcmVhdGVGcmFtZS5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdmlld18xLmJhY2tncm91bmRSZW5kZXIuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2aWV3XzEuY3JlYXRlQmxvY2tQaWN0dXJlLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyQmxvY2tCb3ggPSByZW5kZXJCbG9ja0JveDtcclxuZnVuY3Rpb24gYmxvY2tBbmltYXRpb25SZW5kZXIoX2EpIHtcclxuICAgIHZhciBibG9jayA9IF9hLmJsb2NrO1xyXG4gICAgYmxvY2suYmxvY2tBbmltYXRpb25zKCk7XHJcbn1cclxuZXhwb3J0cy5ibG9ja0FuaW1hdGlvblJlbmRlciA9IGJsb2NrQW5pbWF0aW9uUmVuZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlc18xID0gcmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUlucHV0KF9hKSB7XHJcbiAgICB2YXIgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmxvY2tEZXRhaWxzLCBpbm5lclRleHQsIGl0ZW1EYXRhLCBjdXJyZW50RGVzY3JpcHRpb25JZCwgYmxvY2tBbGVydE1lc3NhZ2UsIGJsb2NrUHJldmlld0ltYWdlLCBsb2NhbFBpY3R1cmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBibG9ja0RldGFpbHMgPSB0YXJnZXQuZGV0YWlscztcclxuICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stYWxlcnQtbWVzc2FnZScpO1xyXG4gICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1wcmV2aWV3LWltYWdlJyk7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIFwiY29sbGlzaW9uXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0dXJlXCI6IFwiL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Jsb2NrLTMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpc0Rlc3Ryb3lcIjogZmFsc2VcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBCbG9ja3Mgc2V0dGluZ3MgJiBQYXJhbWV0ZXJzICA9PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMT5CbG9jayBzaXplPC9oMT5cXG4gICAgICAgIDxoMz5CbG9jayB3aWR0aDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayB3aWR0aCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjIwMFxcXCIgaWQ9XCIgKyAoJ3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LndpZHRoKSA/IHRhcmdldC53aWR0aCA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXdpZHRoLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIHdpZHRoPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIGhlaWdodDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayBoZWlnaHQgaW4gcGl4ZWxzPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMDBcXFwiIGlkPVwiICsgKCdoZWlnaHQtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuaGVpZ2h0KSA/IHRhcmdldC5oZWlnaHQgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1oZWlnaHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgaGVpZ2h0PC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Jsb2NrLXdpZHRoLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICBpbm5lclRleHQgPSBcIlxcbiAgICAgICAgICAgIDxoMT5CbG9jayBQb3NpdGlvbjwvaDE+XFxuICAgICAgICAgICAgPGgzPkJsb2NrIFg8L2gzPlxcbiAgICAgICAgICAgIDxwPlggcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjUwXFxcIiBpZD1cIiArICgneC1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuYmxvY2tSZWxhdGl2ZVhQb3MpID8gdGFyZ2V0LmJsb2NrUmVsYXRpdmVYUG9zIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUteC1wb3MtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgWCBQb3NpdGlvbjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgIDxoMz5CbG9jayBZPC9oMz5cXG4gICAgICAgICAgICA8cD5ZIHBvc2l0aW9uIG9mIGJsb2NrPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCI1MFxcXCIgaWQ9XCIgKyAoJ3ktcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LmJsb2NrUmVsYXRpdmVZUG9zKSA/IHRhcmdldC5ibG9ja1JlbGF0aXZlWVBvcyA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXktcG9zLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFkgUG9zaXRpb248L2J1dHRvbj5cXG4gICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgaWROYW1lOiAnYmxvY2steC1wb3MtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBEZXNjcmlwdGlvbiAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPkRlc2NyaXB0aW9uPC9oMz5cXG4gICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnZGVzY3JpcHRpb24tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArIGJsb2NrRGV0YWlscy5kZXNjcmlwdGlvbiArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtZGVzY3JpcHRpb24tYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgRGVzY3JpcHRpb248L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIHJ1bGVycyAmIHRpcHMgID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aXBzXHJcbiAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5UaXBzPC9oMz5cXG4gICAgICAgICAgICA8cD5BIHRpcHMgaG93IHRvIHVzIHRoaXMgb2JqZWN0cywgaXQgY291bGQgYmUgYSBwYXJ0IG9mIHNvbWUgbWVzc2FnZSwgXFxcIlVzZSAqICB0byBzdGFydCBuZXcgbGluZVxcXCI8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCd0aXBzLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy50aXBzKSA/IGJsb2NrRGV0YWlscy5ydWxlcy50aXBzIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtdGlwcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBUaXBzPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi10aXBzLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NUZXh0XHJcbiAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5TdWNjZXNzIFRleHQ8L2gzPlxcbiAgICAgICAgICAgIDxwPkRpc3BsYXkgYSBtZXNzYWdlIHdoZW4geW91IGRvIGV2ZXJ5dGhpbmcgd3JpdGU6IGNvbGxlY3QgZGF0ZS9rZXksIGJyaW5nIGRhdGEva2V5IDwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3N1Y2Nlc3NUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5zdWNjZXNzVGV4dCkgPyBibG9ja0RldGFpbHMucnVsZXMuc3VjY2Vzc1RleHQgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1zdWNjZXNzLXRleHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgVGV4dDwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tc3VjY2Vzc1RleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVxdWlyZVRleHRcclxuICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlJlcXVpcmUgVGV4dDwvaDM+XFxuICAgICAgICAgICAgPHA+RGlzcGxheSBhIG1lc3NhZ2UgZGVzY3JpYmUgc29tZSBSZXF1aXJlbWVudCBmb3IgdGhpcyBvYmplY3QgdG8gd29yazwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3JlcXVpcmVUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlVGV4dCkgPyBibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZVRleHQgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1yZXF1aXJlLXRleHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgUmVxdWlyZSBUZXh0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXF1aXJlXHJcbiAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5SZXF1aXJlIE9iamVjdDwvaDM+XFxuICAgICAgICAgICAgPHA+UmVxdWlyZSBtZXNzYWdlLCBkaXNwbGF5IG9iamVjdCBuZWVkcyBmb3IgdGhpcyBibG9jayB0byBldmVyeXRoaW5nIHdvcmsgZmluZTwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3JlcXVpcmUtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmUpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmUgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1yZXF1aXJlLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFJlcXVpcmUgT2JqZWN0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFBpY3R1cmUgPSAoYmxvY2tEZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+Q29udGFpbiBPYmplY3Q8L2gzPlxcbiAgICAgICAgICAgIDxwPk9iamVjdCBvciBkYXRhIGluc2lkZSB0aGlzIG9iamVjdCBwcmVzcyAnRScgYnV0dG9uIHRvIGNvbGxlY3QgXFxuIGV4aXQgIC0gc3BlY2lhbCBvYmplY3QgdG8gZmluaXNoIHRoZSBsZXZlbDwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLmNvbnRhaW4pID8gYmxvY2tEZXRhaWxzLnJ1bGVzLmNvbnRhaW4gOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGltZyB3aWR0aD1cXFwiMTAwXFxcIiBpZD1cIiArICgnY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyAoZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBsb2NhbFBpY3R1cmUpICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInByZXZpZXctY29udGFpbi1vYmplY3RcXFwiIGRhdGEtdGFyZ2V0PSdzZWxlY3QtcHJldmlldy1idG4nPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjb21wdXRlci1kYXRhLnBuZ1xcXCI+Q29tcHV0ZXIgZGF0YTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJyZWQtY2FyZC5wbmdcXFwiPlJlZCBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImJsdWUtY2FyZC5wbmdcXFwiPkJsdWUgY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJncmVlbi1jYXJkLnBuZ1xcXCI+R3JlZW4gY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ5ZWxsb3ctY2FyZC5wbmdcXFwiPlllbGxvdyBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInBvd2VyLWNlbGwucG5nXFxcIj5Qb3dlciBDZWxsPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1jb250YWluLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5pbm5lck9iamVjdCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMudHlwZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoYW5nZS1zaXplXHJcbiAgICAgICAgICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lLCBmaWVsZFJlc3VsdHMsIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS13aWR0aC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1oZWlnaHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUteC1wb3MtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUteS1wb3MtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtZGVzY3JpcHRpb24tYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtdGlwcy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtc3VjY2Vzcy10ZXh0LWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLXRleHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXJlcXVpcmUtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWNvbnRhaW4tYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnd2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAnd2lkdGgtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyMnICsgJ2hlaWdodC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdibG9ja1JlbGF0aXZlWFBvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICd4LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdibG9ja1JlbGF0aXZlWVBvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICd5LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICdkZXNjcmlwdGlvbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGlwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjJyArICd0aXBzLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3RpcHMgZmllbGQnIDogJyBzYXZlIHRpcHMgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc3VjY2Vzc1RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAnc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnZGVzY3JpcHRpb24gZmllbGQnIDogJyBzYXZlIGRlc2NyaXB0aW9uIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3JlcXVpcmVUZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyMnICsgJ3JlcXVpcmVUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3JlcXVpcmUgdGV4dCBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSB0ZXh0IGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3JlcXVpcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAncmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdyZXF1aXJlIGZpZWxkJyA6ICcgc2F2ZSByZXF1aXJlIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE5OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnIycgKyAnY29udGFpbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdjb250YWluIG9iamVjdCcgOiAnIHNhdmUgY29udGFpbiBvYmplY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjE6IHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IChmaWVsZFJlc3VsdHMpID8gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIiA+IFN1Y2Nlc3NmdWxseSBzYXZlZCAnXCIgKyBmaWVsZE5hbWUgKyBcIicgPC9wPlwiIDogXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1lcnJvclxcXCIgPlRoZXJlIGlzIGEgcHJvYmxlbSBpbiAnXCIgKyBmaWVsZE5hbWUgKyBcIicgaSBjYW4ndCBzYXZlPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgcmVxdWlyZWRQcmV2aWV3UGljLCBwaWMsIGxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QtcHJldmlldy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnb2JqZWN0UGljdHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcHJldmlldy1yZXF1aXJlLW9iamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUHJldmlld1BpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWMgPSAodGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIDogJ2NvbXB1dGVyLWRhdGEucG5nJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBwaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGljLCBsaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNbJ3NyYyddID0gbGluazsgLy9jb21wdXRlci1kYXRhLnBuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdlbmVyYXRlSW5wdXQgPSBnZW5lcmF0ZUlucHV0O1xyXG5mdW5jdGlvbiBjaGFuZ2VEYXRhSW5CbG9jayhfYSkge1xyXG4gICAgdmFyIGtleSA9IF9hLmtleSwgZmllbGRTZWxlY3RvciA9IF9hLmZpZWxkU2VsZWN0b3IsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmxvY2tBbGVydE1lc3NhZ2UsIGN1cnJlbnRGaWVsZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1hbGVydC1tZXNzYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWVsZFNlbGVjdG9yKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZWxkID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGaWVsZC52YWxpZGl0eS52YWxpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RmllbGQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJJbnZhbGlkIFZhbHVlIG9mIFwiICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IChjdXJyZW50RmllbGQudmFsdWUpID8gY3VycmVudEZpZWxkLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgKGN1cnJlbnRGaWVsZC52YWx1ZSAmJiB0YXJnZXRba2V5XSAmJiBrZXkgJiYgZmllbGRTZWxlY3RvcikgPyB0cnVlIDogZmFsc2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkSW5uZXJEYXRhKF9hKSB7XHJcbiAgICB2YXIgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHZhciBibG9ja0RldGFpbHMgPSB0YXJnZXQuZGV0YWlscztcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICB2YXIgaXRlbUJhY2tncm91bmRJbWFnZSA9IChibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10pID8gYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddIDogYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ107IC8vIHByZXZpZXdUZXh0dXJlXHJcbiAgICBpdGVtQmFja2dyb3VuZEltYWdlID0gKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSAmJiBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10pID8gdGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlWydwcmV2aWV3VGV4dHVyZSddIDpcclxuICAgICAgICAodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZS50ZXh0dXJlIDogYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ107XHJcbiAgICB2YXIgaXRlbUltYWdlID0gKGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSkgPyBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10gOiBibG9ja0RldGFpbHNbJ3RleHR1cmUnXTtcclxuICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2UgPSAodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IFwiPGltZyB3aWR0aD1cXFwiNTBcXFwiIHNyYz1cXFwiXCIgKyAoZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgaXRlbUJhY2tncm91bmRJbWFnZSkgKyBcIlxcXCIgYWx0PVxcXCJcIiArIHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZS5pZCArIFwiXFxcIj5cIiA6IFwiXCI7XHJcbiAgICB2YXIgaW5uZXJUZXh0ID0gXCI8ZGl2IGNsYXNzPVxcXCJibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWF0ZXJpYWwtcHJldmlldy13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxpbWcgaWQ9XFxcImJsb2NrLXByZXZpZXctaW1hZ2VcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIHNyYz1cXFwiXCIgKyAoZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgaXRlbUltYWdlKSArIFwiXFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDx1bD48ZGl2IGlkPVxcXCJibG9jay1hbGVydC1tZXNzYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgIDxsaT5OYW1lOiBcIiArIGJsb2NrRGV0YWlscy5pZCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5JbmRleDogXCIgKyB0YXJnZXQuaW5kZXggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+VHlwZTogXCIgKyAoKGJsb2NrRGV0YWlscy50eXBlKSA/IGJsb2NrRGV0YWlscy50eXBlIDogJycpICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPndpZHRoOiBcIiArIHRhcmdldC53aWR0aCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5oZWlnaHQ6IFwiICsgdGFyZ2V0LmhlaWdodCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5YOiBcIiArIHRhcmdldC54ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlk6IFwiICsgdGFyZ2V0LnkgKyBcIjwvbGk+XFxuXFxuICAgIDxwPlwiICsgKCh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gXCJCYWNrZ3JvdW5kIHRleHR1cmVcIiA6IFwiXCIpICsgXCI8L3A+XFxuICAgIFwiICsgYmFja2dyb3VuZEltYWdlICsgXCJcXG4gICAgPC91bD48L2Rpdj48aHI+XCI7XHJcbiAgICAvKlwiaW1hZ2VXaWR0aFwiOiAzNCxcclxuICAgIFwiaW1hZ2VIZWlnaHRcIjogNDUsXHJcbiAgICBcImFuaW1hdGlvblN0ZXBzXCI6IDEwLFxyXG4gICAgXCJudW1iZXJPZkl0ZW1zXCI6IDEsXHJcbiAgICBcIm51bWJlck9mVmVydGljYWxJdGVtc1wiOiAxLFxyXG4gICAgXCJwbGF5ZXJEaXJlY3Rpb25Ib3Jpem9udGFsXCI6IFwibGVmdFwiLFxyXG4gICAgXCJkZXRlY3RSYW5nZVwiOiA1NTAsXHJcbiAgICBcInNwZWVkXCI6IDEsKi9cclxuICAgIHZhciBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgaWROYW1lOiBudWxsXHJcbiAgICB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG59XHJcbmV4cG9ydHMubG9hZElubmVyRGF0YSA9IGxvYWRJbm5lckRhdGE7XHJcbmZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKF9hKSB7XHJcbiAgICB2YXIgdGFnbmFtZSA9IF9hLnRhZ25hbWUsIGNsYXNzTGlzdCA9IF9hLmNsYXNzTGlzdCwgaW5uZXJUZXh0ID0gX2EuaW5uZXJUZXh0LCBpZE5hbWUgPSBfYS5pZE5hbWU7XHJcbiAgICB2YXIgbmV3RG9jdW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG4gICAgbmV3RG9jdW1lbnQuY2xhc3NOYW1lID0gKGNsYXNzTGlzdCkgPyBjbGFzc0xpc3QgOiBmYWxzZTtcclxuICAgIG5ld0RvY3VtZW50LmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICAgIGlmIChpZE5hbWUpXHJcbiAgICAgICAgbmV3RG9jdW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWROYW1lKTtcclxuICAgIHJldHVybiBuZXdEb2N1bWVudDtcclxufVxyXG5leHBvcnRzLmVsZW1lbnRDcmVhdG9yID0gZWxlbWVudENyZWF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG52YXIgcmVxdWVzdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXItcmVxdWVzdHMvcmVxdWVzdHNNb2R1bGVcIik7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvcHJldmlld1wiKTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4vaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgYmxvY2tDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4uL2NvbnN0cnVjdG9ycy9ibG9ja0NvbnN0cnVjdG9yXCIpO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBzZXRNYXBTaXplKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbWFwLXNpemUnXTtcclxuICAgIHZhciBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1zaXplLWVycm9yJyk7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldC1tYXAtc2l6ZScpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhLCBfaSwgZm9ybV8xLCBmaWVsZCwgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBmb3JtXzEgPSBmb3JtOyBfaSA8IGZvcm1fMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZm9ybV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICYmIGZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICYmICFmaWVsZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSkgPCBwYXJzZUludChtYWluT2JqZWN0Lm1hcERlZmF1bHRXaWR0aCkgfHwgcGFyc2VJbnQoZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSkgPCBwYXJzZUludChtYWluT2JqZWN0Lm1hcERlZmF1bHRIZWlnaHQpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+TWFwIG1pbiBzaXplIGlzIFwiICsgbWFpbk9iamVjdC5tYXBEZWZhdWx0V2lkdGggKyBcIiB4IFwiICsgbWFpbk9iamVjdC5tYXBEZWZhdWx0SGVpZ2h0ICsgXCI8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZUludChmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10pID4gcGFyc2VJbnQobWFpbk9iamVjdC5tYXhIb3Jpem9udGFsQmxvY2tzKSB8fCBwYXJzZUludChmb3JtRGF0YVsndmVydGljYWxCbG9jayddKSA+IHBhcnNlSW50KG1haW5PYmplY3QubWF4VmVydGljYWxCbG9ja3MpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+TWFwIG1heCBzaXplIGlzIFwiICsgbWFpbk9iamVjdC5tYXhIb3Jpem9udGFsQmxvY2tzICsgXCIgeCBcIiArIG1haW5PYmplY3QubWF4VmVydGljYWxCbG9ja3MgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXJyb3JGaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPlwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmlubmVySFRNTCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5jaGFuZ2VCbG9ja0FycmF5U2l6ZSh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGZvcm1EYXRhOiBmb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIj5tYXAgc2l6ZSBzZXQgXCIgKyBmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10gKyBcIiB4IFwiICsgZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSArIFwiIGJsb2NrczwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2V0TWFwU2l6ZSA9IHNldE1hcFNpemU7XHJcbmZ1bmN0aW9uIGdldE1hcERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXBOYW1lLCByZXMsIGNvbnZlcnRUb09iamVjdCwgc2l6ZUZvcm07XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ10ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuYWxsTWFwT2JqZWN0cy5tYXAoZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdFN0YXJ0T2JqZWN0XzEuYmFja1RvT2JqZWN0KHsgZGF0YTogYmxvY2ssIGNvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRUb09iamVjdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBOYW1lLnZhbHVlID0gcmVzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5tYXBXaWR0aCA9IHJlcy5tYXBTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QubWFwSGVpZ2h0ID0gcmVzLm1hcFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0uaG9yaXpvbnRhbEJsb2NrLnZhbHVlID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybS52ZXJ0aWNhbEJsb2NrLnZhbHVlID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrID0gY29udmVydFRvT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTmV3TWFwKCkge1xyXG4gICAgdmFyIGNyZWF0ZU1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlTWFwXCIpO1xyXG4gICAgY3JlYXRlTWFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld01hcCA9IGNyZWF0ZU5ld01hcDtcclxuZnVuY3Rpb24gbG9hZE1hcChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcGVuQnV0dG9uLCBzZWxlY3RGaWxlcywgZmlsZUNvbnRhaW5lciwgY2xvc2VEaWFsb2c7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIG9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW5NYXBcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdEZpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtZmlsZXNcIik7XHJcbiAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgICAgICAgICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcEZpbGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19NQVBfREFUQV9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZpbGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQoeyBkaXNwbGF5RWxlbWVudDogZmlsZUNvbnRhaW5lciwgZGF0YTogbWFwRmlsZSwgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgc2VsZWN0RmlsZXM6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvYWRNYXAgPSBsb2FkTWFwO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQoX2EpIHtcclxuICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IF9hLmRpc3BsYXlFbGVtZW50LCBkYXRhID0gX2EuZGF0YSwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEZpbGVzID0gX2Euc2VsZWN0RmlsZXM7XHJcbiAgICBpZiAoIWRhdGEgfHwgIWRpc3BsYXlFbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIHZhciBpbm5lckZpbGUgPSBibG9ja0NyZWF0b3IoeyB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiAnc2luZ2xlLWl0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8aDI+XCIgKyBmaWxlLm5hbWUgKyBcIjwvaDI+XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbm5lckZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdldE1hcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBmaWxlLmxpbmsgKyAnLycgKyBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtYWluT2JqZWN0OiBtYWluT2JqZWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChpbm5lckZpbGUpO1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoZmlsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYmxvY2tDcmVhdG9yKF9hKSB7XHJcbiAgICB2YXIgdGFnID0gX2EudGFnLCBzdHlsZUNsYXNzID0gX2Euc3R5bGVDbGFzcywgaW5uZXJDb250ZW50ID0gX2EuaW5uZXJDb250ZW50O1xyXG4gICAgdmFyIG5ld0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgbmV3QmxvY2suY2xhc3NOYW1lID0gc3R5bGVDbGFzcztcclxuICAgIG5ld0Jsb2NrLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgIHJldHVybiBuZXdCbG9jaztcclxufVxyXG5leHBvcnRzLmJsb2NrQ3JlYXRvciA9IGJsb2NrQ3JlYXRvcjtcclxuZnVuY3Rpb24gc2F2ZU1hcChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb3JtLCBidXR0b24sIG1lc3NhZ2VGaWVsZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1tYXAtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLW1hcC1lcnJvcicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRGb3JtLCBzYXZlRGF0YSwgbWFwRmlsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm0gPSBnZXRGb3JtRGF0YSh7IGZvcm06IGZvcm0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRGb3JtKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Rm9ybVsnc3RhdHVzJ10gPT09ICdyZWplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLWVycm9yXFxcIj5GYWlsIHRvIHNhdmUgbWFwLCBjaGVjayBtYXAgTmFtZTwvcD4gXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ21hcFNpemUnXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1haW5PYmplY3QubWFwV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5tYXBIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVEYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydjcmVhdGluZ1RpbWUnXSA9IHNhdmVEYXRhLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydhbGxNYXBPYmplY3RzJ10gPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Rm9ybSwgJ3NhdmUnLCBtYWluT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLnBvc3REYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0Rm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZpbGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9IFwiPHA+U2F2ZSB0aW1lOiBcIiArIChzYXZlRGF0YS5nZXRIb3VycygpIC0gMSkgKyBcIiA6IFwiICsgc2F2ZURhdGEuZ2V0TWludXRlcygpICsgXCIgOiBcIiArIHNhdmVEYXRhLmdldFNlY29uZHMoKSArIFwiPC9wPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiICsgbWFwRmlsZS51cmwgKyBcIiBvbmNsaWNrPVxcXCIoZnVuY3Rpb24oKXsgd2luZG93Lm9wZW4oJ1wiICsgbWFwRmlsZS51cmwgKyBcIicpfSkoKVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPk9wZW4gaW4gbmV3IHdpbmRvdzwvYT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zYXZlTWFwID0gc2F2ZU1hcDtcclxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoX2EpIHtcclxuICAgIHZhciBmb3JtID0gX2EuZm9ybTtcclxuICAgIGlmICghZm9ybSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGZvcm1fMiA9IGZvcm07IF9pIDwgZm9ybV8yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmb3JtSXRlbXMgPSBmb3JtXzJbX2ldO1xyXG4gICAgICAgIGlmIChmb3JtSXRlbXMubmFtZSAmJiBmb3JtSXRlbXMudmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0W2Zvcm1JdGVtcy5uYW1lXSA9IGZvcm1JdGVtcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUl0ZW1zLm5hbWUgJiYgIWZvcm1JdGVtcy52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkluY29ycmVjdCBEYXRhXCIsIHN0YXR1czogXCJyZWplY3RcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZ2V0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdyZWplY3QnLCBtZXNzYWdlOiByZXMuc3RhdHVzVGV4dCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCI1MDAgTm8gc2VydmVyIGNvbm5lY3Rpb24hXCIsIHN0YXR1czogXCJlcnJvclwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXREYXRhID0gZ2V0RGF0YTtcclxuZnVuY3Rpb24gcG9zdERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogKG1ldGhvZCkgPyBtZXRob2QgOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcmVkYWN0b3IvZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxuZnVuY3Rpb24gcHJldmlld09mQmxvY2soX2EpIHtcclxuICAgIHZhciBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gX2Euc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQgPSBfYS5ldmVudDtcclxuICAgIHZhciBwcmV2aWV3RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZC1pdGVtJyk7XHJcbiAgICBpZiAoIXNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pXHJcbiAgICAgICAgaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBwcmV2aWV3RWxlbWVudCB9KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBpdGVtSW1hZ2UgPSAoc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsncHJldmlld1RleHR1cmUnXSkgPyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtWydwcmV2aWV3VGV4dHVyZSddIDogc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsndGV4dHVyZSddO1xyXG4gICAgICAgIHNob3dFbGVtZW50KHsgZWxlbWVudDogcHJldmlld0VsZW1lbnQgfSk7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnRbJ3N0eWxlJ10gPSBcIm1hcmdpbi10b3A6IFwiICsgKGV2ZW50LmNsaWVudFkgKyAxMCkgKyBcInB4OyBtYXJnaW4tbGVmdDogXCIgKyAoZXZlbnQuY2xpZW50WCArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCIgPlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucHJldmlld09mQmxvY2sgPSBwcmV2aWV3T2ZCbG9jaztcclxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG59XHJcbmV4cG9ydHMuaGlkZUVsZW1lbnQgPSBoaWRlRWxlbWVudDtcclxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IGJsb2NrJztcclxufVxyXG5leHBvcnRzLnNob3dFbGVtZW50ID0gc2hvd0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0ludGVyYWN0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tJbnRlcmFjdE1vZHVsZVwiKTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL3ByZXZpZXdcIik7XHJcbnZhciBzaWRlUGFuZWxBY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9uc1wiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3JlZGFjdG9yL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbmZ1bmN0aW9uIGluaXRWaWV3KCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWRhY3Rvci1maWVsZCcpO1xyXG4gICAgdGhpcy5jb250ZXh0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuY29udGV4dEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY29udGV4dFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY29udGV4dEhlaWdodDtcclxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbn1cclxuZXhwb3J0cy5pbml0VmlldyA9IGluaXRWaWV3O1xyXG5mdW5jdGlvbiBtYXBNb3ZlQ29udHJvbGxlcnMoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgeE1vdmVWYWx1ZSA9IDAsIHlNb3ZlVmFsdWUgPSAwO1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgODc6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2ODpcclxuICAgICAgICAgICAgICAgIHhNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZCAqIC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODM6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQgKiAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY1OlxyXG4gICAgICAgICAgICAgICAgeE1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzc6XHJcbiAgICAgICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yLm1pbmlNYXBwZXIoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5tb3ZlQWxsU2NlbmUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCB4TW92ZVZhbHVlOiB4TW92ZVZhbHVlLCB5TW92ZVZhbHVlOiB5TW92ZVZhbHVlIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jazsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddICE9ICdDQU5WQVMnKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5jb2xsaXNpb25EZXRlY3Rvcih7IG9iamVjdDogYmxvY2ssIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVcclxuICAgICAgICAgICAgICAgIH0gfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGJsb2NrLmluZGV4LCBcIiA8IEJsb2NrIGluZGV4XCIpXHJcbiAgICAgICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLm9wZW5SZWRhY3RvcldpbmRvdyh7IGJsb2NrRGF0YTogYmxvY2ssIG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBibG9ja0ludGVyYWN0TW9kdWxlXzEuY2hhbmdlT2JqZWN0TW9kZWwoeyByZXN1bHQ6IHJlc3VsdCwgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwcmV2aWV3XzEucHJldmlld09mQmxvY2soeyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtOiBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50OiBldmVudCB9KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgYnV0dG9uSWQgPSBldmVudC50YXJnZXRbJ2RhdGFzZXQnXS5idXR0b25JZDtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yQmxvY2tzJzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmJsb2NrRGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JEZWNvcmF0aW9uJzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmJhY2tncm91bmREYXRhYmFzZSwgc2VsZWN0SXRlbTogYnV0dG9uSWQgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JDaGFyYWN0ZXJzJzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmNoYXJhY3RlcnNEYXRhYmFzZSwgc2VsZWN0SXRlbTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckVuZW15JzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmVuZW15RGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5lbXknKSAgZW5lbXlEYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5tYXBNb3ZlQ29udHJvbGxlcnMgPSBtYXBNb3ZlQ29udHJvbGxlcnM7XHJcbmZ1bmN0aW9uIHJlbmRlckl0ZW1zVG9TaWRlTGlzdChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBkYXRhQmFzZSA9IF9hLmRhdGFCYXNlLCBzZWxlY3RJdGVtID0gX2Euc2VsZWN0SXRlbTtcclxuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwnKTtcclxuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGJsb2NrSXRlbSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYmxvY2tJdGVtKVxyXG4gICAgICAgIHZhciBpdGVtSW1hZ2UgPSAoYmxvY2tJdGVtWydwcmV2aWV3VGV4dHVyZSddKSA/IGJsb2NrSXRlbVsncHJldmlld1RleHR1cmUnXSA6IGJsb2NrSXRlbVsndGV4dHVyZSddO1xyXG4gICAgICAgIHZhciBvYmogPSBzaWRlUGFuZWxBY3Rpb25zXzEuYmxvY2tDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogJ3NpbmdsZS1ibG9jay1pdGVtJyxcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxpbWcgd2lkdGg9XFxcIjEwMCVcXFwiIHRpdGxlPVxcXCJcIiArICgoYmxvY2tJdGVtLmRldGFpbHMpID8gYmxvY2tJdGVtLmRldGFpbHMuZGVzY3JpcHRpb24gOiBibG9ja0l0ZW0uZGVzY3JpcHRpb24pICsgXCJcXFwiIHNyYz0nXCIgKyAoZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgaXRlbUltYWdlKSArIFwiJz5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBibG9ja0l0ZW06IGJsb2NrSXRlbSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQob2JqKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFCYXNlXzEgPSBkYXRhQmFzZTsgX2kgPCBkYXRhQmFzZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9ja0l0ZW0gPSBkYXRhQmFzZV8xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGJsb2NrSXRlbSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQucHJlcGVuZChjcmVhdGVEZXN0cm95QmxvY2soeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtIH0pKTtcclxufVxyXG5leHBvcnRzLnJlbmRlckl0ZW1zVG9TaWRlTGlzdCA9IHJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuZnVuY3Rpb24gc2lkZVBhbmVsSXRlbXNTZWxlY3RQcm9jZXNzKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGJsb2NrSXRlbSA9IF9hLmJsb2NrSXRlbTtcclxuICAgIGNvbnNvbGUubG9nKGJsb2NrSXRlbSk7XHJcbiAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtKSB7XHJcbiAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gKGJsb2NrSXRlbS5pZCAhPSBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uaWQpID8gYmxvY2tJdGVtIDogbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBibG9ja0l0ZW07XHJcbiAgICBwcmV2aWV3XzEucHJldmlld09mQmxvY2soeyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtOiBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50OiBldmVudCB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEZXN0cm95QmxvY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgc2VsZWN0SXRlbSA9IF9hLnNlbGVjdEl0ZW07XHJcbiAgICB2YXIgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvYmouY2xhc3NOYW1lID0gJ3NpbmdsZS1ibG9jay1pdGVtJztcclxuICAgIG9iai5pbm5lckhUTUwgPSBcIjxpbWcgdGl0bGU9XFxcIlwiICsgKChzZWxlY3RJdGVtID09PSBcInJlZGFjdG9yRGVjb3JhdGlvblwiKSA/ICdEZWxldGUgb25seSBiYWNrZ3JvdW5kJyA6ICdEZWxldGUgYmxvY2sgaXRlbScpICsgXCJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svZGVzdHJveS5wbmcnKSArIFwiJz5cIjtcclxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzdHJveWVyOiAoc2VsZWN0SXRlbSkgPyBzZWxlY3RJdGVtIDogJ2Rlc3Ryb3llcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Rlc3Ryb3kucG5nJ1xyXG4gICAgICAgICAgICB9IH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyVmlldygpIHtcclxuICAgIGlmICghdGhpcy5jdHgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29udGV4dFdpZHRoLCB0aGlzLmNvbnRleHRIZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJWaWV3ID0gY2xlYXJWaWV3O1xyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kUmVuZGVyKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZ0JhY2tncm91bmQsIHN4LCBzeTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0YWlscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYmFja2dyb3VuZFRleHR1cmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0JhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kLnNyYyA9IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIHRoaXMuYmFja2dyb3VuZFRleHR1cmUudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBzeCA9ICh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4KSA/IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3ggOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ID0gKHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3kpID8gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZ0JhY2tncm91bmQsIHN4LCBzeSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zV2lkdGgsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc0hlaWdodCwgdGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS53aWR0aCwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSlcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5iYWNrZ3JvdW5kUmVuZGVyID0gYmFja2dyb3VuZFJlbmRlcjtcclxuZnVuY3Rpb24gY3JlYXRlQmxvY2tQaWN0dXJlKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZywgc1dpZHRoLCBzSGVpZ2h0LCBzeCwgc3k7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYWluT2JqZWN0LmN0eC5zYXZlKCk7IC8vIHNXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmRldGFpbHMudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBzV2lkdGggPSAodGhpcy5kZXRhaWxzLnNXaWR0aCkgPyB0aGlzLmRldGFpbHMuc1dpZHRoIDogdGhpcy5kZXRhaWxzLmltYWdlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgc0hlaWdodCA9ICh0aGlzLmRldGFpbHMuc0hlaWdodCkgPyB0aGlzLmRldGFpbHMuc0hlaWdodCA6IHRoaXMuZGV0YWlscy5pbWFnZUhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzeCA9ICh0aGlzLmRldGFpbHMuc3gpID8gdGhpcy5kZXRhaWxzLnN4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzeSA9ICh0aGlzLmRldGFpbHMuc3kpID8gdGhpcy5kZXRhaWxzLnN5IDogMDtcclxuICAgICAgICAgICAgICAgICAgICAvLy5kZXRhaWxzLnN4XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHRoaXMueE1vdmUgKyBwYXJzZUludCh0aGlzLmJsb2NrUmVsYXRpdmVYUG9zKSwgdGhpcy55TW92ZSArIHBhcnNlSW50KHRoaXMuYmxvY2tSZWxhdGl2ZVlQb3MpLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFpbk9iamVjdC5jdHgucmVzdG9yZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAvLy5kZXRhaWxzLnN4XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVCbG9ja1BpY3R1cmUgPSBjcmVhdGVCbG9ja1BpY3R1cmU7XHJcbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBpZiAoIW1haW5PYmplY3QuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyMjUsIDI1NSwgMjU1LCAuMylcIjtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxUZXh0KHRoaXMuaW5kZXgsIHRoaXMueE1vdmUgKyA1LCB0aGlzLnlNb3ZlICsgMTUpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDE1MywyNTUsMC40KSc7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5iZWdpblBhdGgoKTtcclxuICAgIG1haW5PYmplY3QuY3R4LnJlY3QodGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlKCk7XHJcbiAgICAvL21haW5PYmplY3QuY3R4LnN0cm9rZSgpXHJcbn1cclxuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9