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
exports.push([module.i, "body {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden; }\n\ncanvas {\n    background: #00534b; }\n\n.side-menu-wrapper {\n    background: #bbbbbb;\n    height: 96vh;\n    right: 0;\n    max-width: 300px;\n    min-width: 100px;\n    padding: 10px;\n    position: absolute;\n    overflow-y: scroll; }\n\n.game-field-wrapper {\n    overflow: hidden; }\n\nfooter {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    color: #ffffff; }\n\n.main-banner-cover {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.1);\n    width: 100vw;\n    height: 100vh;\n    z-index: 100; }\n\n* {\n    color: #221828;\n    font-family: 'Roboto', sans-serif; }\n\nlegend h3 {\n    margin: 0px; }\n\nlabel p {\n    font-size: 14px; }\n\ninput {\n    padding: 10px;\n    width: 91%;\n    border-radius: 7px;\n    border: 0px; }\n\n.side-instrumental-panel {\n    overflow-y: scroll;\n    max-height: 350px;\n    display: flex;\n    flex-wrap: wrap; }\n    .side-instrumental-panel li {\n        list-style: none; }\n    .side-instrumental-panel img {\n        padding: 10px;\n        display: block;\n        margin: 0 auto;\n        width: 54px; }\n\n.selected-item-preview {\n    position: absolute;\n    z-index: 100; }\n    .selected-item-preview img {\n        width: 60px; }\n\n.inner-content {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    max-width: 70%;\n    min-height: 300px;\n    overflow-y: scroll;\n    right: 0;\n    float: right;\n    max-height: 90%; }\n    .inner-content hr {\n        color: #eaeaea; }\n    .inner-content .single-item-wrapper {\n        cursor: pointer;\n        padding: 5px; }\n    .inner-content .single-item-wrapper:hover {\n        background: #4d4263;\n        color: #fff; }\n        .inner-content .single-item-wrapper:hover h2 {\n            color: #ffffff; }\n\n.inner-description-fields-wrapper {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 20px; }\n    .inner-description-fields-wrapper .single-block-description {\n        color: #715184; }\n        .inner-description-fields-wrapper .single-block-description input {\n            background: #bbb; }\n        .inner-description-fields-wrapper .single-block-description span {\n            border-radius: 10px;\n            background: #3a61bd;\n            padding: 5px;\n            margin-top: 5px;\n            position: relative;\n            display: inline-block;\n            font-size: 12px;\n            color: #ffffff; }\n        .inner-description-fields-wrapper .single-block-description .button-reject {\n            background: #ad0000;\n            color: #fffff; }\n            .inner-description-fields-wrapper .single-block-description .button-reject textarea {\n                background: #1c1722;\n                color: #ffffff; }\n    .inner-description-fields-wrapper .question-wrapper {\n        background: #eaeaea;\n        padding: 5px;\n        overflow: auto;\n        display: flex; }\n        .inner-description-fields-wrapper .question-wrapper p {\n            font-size: 11px;\n            font-weight: 900; }\n    .inner-description-fields-wrapper .requirement-item-wrapper {\n        display: flex; }\n\n.active-button {\n    background: #ff961e; }\n\n.right-side-button {\n    float: right; }\n\n.side-panel-success {\n    color: #539700;\n    border: 1px solid #539700;\n    padding: 5px; }\n\n.side-panel-error {\n    color: #b10000;\n    border: 1px solid #b10000;\n    padding: 5px; }\n\n.block-description-wrapper {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap; }\n    .block-description-wrapper img {\n        max-width: 100%; }\n\n.single-block-description {\n    text-align: left;\n    padding: 5px;\n    width: 46%; }\n    .single-block-description textarea {\n        width: 96%;\n        padding: 5px;\n        margin-top: 10px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        border: 1px solid #dfdfdf;\n        background: #bbb; }\n\n.all-others-dialogs {\n    background: #826d6d;\n    padding: 5px;\n    border-radius: 5px;\n    color: #ffffff; }\n    .all-others-dialogs h4 {\n        color: #ffffff; }\n    .all-others-dialogs button {\n        background: none;\n        border: 0px;\n        cursor: pointer; }\n\n.related-id-field {\n    width: 50px;\n    width: 29px;\n    margin: 24px; }\n\n.close-dialog {\n    color: #fff;\n    background: none;\n    padding: 20px;\n    border: none;\n    font-size: 29px;\n    position: absolute;\n    cursor: pointer; }\n\n.main-btn {\n    background: #ffb300;\n    border: navajowhite;\n    padding: 7px;\n    border-radius: 5px;\n    margin-top: 5px;\n    box-shadow: 1px 1px 5px #1547a64f;\n    cursor: pointer;\n    transition: .3s linear; }\n\n.main-btn:hover {\n    background: #ffedc3; }\n\n.main-btn:active {\n    background: #ff1e00; }\n\n.material-preview-wrapper {\n    width: 100%; }\n\n.button-reject {\n    background: #ad0000;\n    color: #fffff; }\n\n.destroy-block-wrapper {\n    position: fixed;\n    right: 31px; }\n", ""]);
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
        this.defaultMapX = data.x;
        this.defaultMapY = data.y;
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
    V- destroy some blocks
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
            V- elevator speed
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
        V- dynamic spawn


V- add stairs
V- add leaders
V- doors
   V - doors access card
V- add horizontal elevator
V- add background texture and display it
    V- destroy/ change textures separately
    V- add texture animations
V- add NPC
   V - dialog
        - 7 - 8 levels
            - start base base
                - find ship
            - command center
                - get importend data
                - urn on defence system
            - desert archeological excavations
                - find ancient artifact
            - sky city
                - talk with commander and scientist
                - get importend data
            - moon base
                - fixed transportation gate center
                - rescue facility personal
            - venus
                - save platform
                - repare station
                - activete defence system
                - recharge you ship
            - mars
                - activate tracking system
                - trace of enemy
                - activate transpotrt system

            - Jupiter ?
                - 0G
                - spaceStation Io


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
                            if (!(_i < _a.length)) return [3 /*break*/, 7];
                            block = _a[_i];
                            if (!(block.xMove > 0 - 100 && block.xMove < window.innerWidth + 100 && block.yMove > 0 - 100 && block.yMove < window.innerHeight + 100)) return [3 /*break*/, 5];
                            return [4 /*yield*/, block.renderBlockBox({ mainObject: mainObject })];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, block.elevatorMove()];
                        case 3:
                            _b.sent();
                            return [4 /*yield*/, initStartObject_1.blockAnimationRender({ block: block })];
                        case 4:
                            _b.sent();
                            return [3 /*break*/, 6];
                        case 5: return [3 /*break*/, 6];
                        case 6:
                            _i++;
                            return [3 /*break*/, 1];
                        case 7: return [2 /*return*/];
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
                    }, 50);
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
    //console.log(mainObject.selectedBlockPanelItem, "<<", currentBlock)
    var selectedBlockPanelItem = Object.assign({}, mainObject.selectedBlockPanelItem);
    //console.log( mainObject.selectedBlockPanelItem, selectedBlockPanelItem, currentBlock )
    // console.log(mainObject.selectedBlockPanelItem, "|")
    if (!mainObject.selectedBlockPanelItem.destroyer) {
        if (mainObject.selectedBlockPanelItem.type === "background-wall" && currentBlock.details) {
            selectedBlockPanelItem.width = mainObject.blockSize;
            selectedBlockPanelItem.height = mainObject.blockSize;
            selectedBlockPanelItem.x = currentBlock.x;
            selectedBlockPanelItem.y = currentBlock.y;
            selectedBlockPanelItem.xMove = currentBlock.xMove;
            selectedBlockPanelItem.yMove = currentBlock.yMove;
            currentBlock.backgroundTexture = selectedBlockPanelItem;
            return false;
        }
        currentBlock.details = selectedBlockPanelItem;
        //console.log(selectedBlockPanelItem)
    }
    else if (mainObject.selectedBlockPanelItem.destroyer === 'destroyer') {
        if (currentBlock.details && currentBlock.details.valueOfMove) {
            blockDataRedactorModule_1.positionReducer({ allBlocks: allBlocks });
        }
        currentBlock.width = mainObject.blockSize;
        currentBlock.height = mainObject.blockSize;
        currentBlock.details = null;
        currentBlock.backgroundTexture = null;
    }
    else if (mainObject.selectedBlockPanelItem.destroyer === 'redactorDecoration') {
        currentBlock.backgroundTexture = null;
        if (!currentBlock.backgroundTexture && currentBlock.details.type === 'background-wall') {
            currentBlock.details = null;
        }
    }
    // console.log(mainObject.selectedBlockPanelItem, "||")
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
function elevatorMove() {
    return __awaiter(this, void 0, void 0, function () {
        var currentValue, defaultValue;
        return __generator(this, function (_a) {
            if (!this.details)
                return [2 /*return*/, false];
            if (this.details.type === 'elevator') {
                currentValue = this.details.constructorValueOfMove;
                defaultValue = this.details.valueOfMove;
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
                        // console.log(this, currentValue, defaultValue, "<<<<")
                    }
                }
            }
            return [2 /*return*/];
        });
    });
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

/***/ "./src/redactor/dialogFormModule.ts":
/*!******************************************!*\
  !*** ./src/redactor/dialogFormModule.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var panelFormPartGenerator_1 = __webpack_require__(/*! ./panelFormPartGenerator */ "./src/redactor/panelFormPartGenerator.ts");
var globalVariables_1 = __webpack_require__(/*! ./globalVariables */ "./src/redactor/globalVariables.ts");
// =============  Dialog  ============//
function createDialogFields() {
    var dialog = document.createElement('form');
}
function createOtherDialog(_a) {
    var allDialogs = _a.allDialogs;
    return __awaiter(this, void 0, void 0, function () {
        var dialogForm, finalDialogBlocks, allInnerButtonObjects, id, _i, allDialogs_1, dialog, questionItems, blockData_1, blockData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!allDialogs)
                        return [2 /*return*/, false];
                    dialogForm = document.createElement('form');
                    finalDialogBlocks = "";
                    allInnerButtonObjects = [];
                    id = 0;
                    for (_i = 0, allDialogs_1 = allDialogs; _i < allDialogs_1.length; _i++) {
                        dialog = allDialogs_1[_i];
                        questionItems = loadQuestionsSection({ questionBase: dialog.questions, currentId: id });
                        finalDialogBlocks += "<div id=\"dialog-block-wrapper-" + id + "\" class=\"dialog-block-wrapper\">\n            <h4>Dialog ID: " + dialog.id + "\n            <input id=\"dialog-id-field-" + id + "\" type=\"number\" value=\"" + dialog.id + "\">\n            <button id=\"remove-dialog-" + id + "\" >\n                    <span class=\"button-reject\">delete dialog</span>\n                </button>\n            </h4>\n            <div class=\"requirement-item-wrapper\">\n                <lable>\n                    <p>Dialog actions <span>\"none\"</span>  <span>\"give_object\"</span> <span>\"require_object\"</span></p>\n                    <input id=\"dialog-action-" + id + "\" type=\"text\" placeholder=\"dialog actions\" value=\"" + dialog.action + "\">\n                </lable>\n                <lable>\n                    <p>Number of require objects to activate dialog</p>\n                    <input id=\"number-of-elements-" + id + "\" type=\"number\" placeholder=\"number of require elements\" value=\"" + ((dialog.numberOfRequireItems) ? dialog.numberOfRequireItems : "") + "\">\n                </lable>\n            </div>\n\n            <p>Dialog main text</p>\n            <textarea id=\"dialog-block-" + id + "\" name=\"\">" + dialog.text + "</textarea>\n                <div id=\"\">" + ((questionItems) ? questionItems.questions : '') + "</div>\n                <button id=\"add-new-question-" + id + "\">\n                    <span>+ Add question</span>\n                </button>\n            <hr>\n        </div>";
                        blockData_1 = Object.assign({}, {
                            id: id,
                            dialogBlockWrapper: "dialog-block-wrapper-" + id,
                            textAreaSelector: "dialog-block-" + id,
                            dialogIdField: "dialog-id-field-" + id,
                            addDialog: null,
                            addNewQuestion: "add-new-question-" + id,
                            removeDialog: "remove-dialog-" + id,
                            dialogActionField: "dialog-action-" + id,
                            numberOfElements: "number-of-elements-" + id,
                            test: "test",
                            lastBlockId: allDialogs.length - 1,
                            questionsData: (questionItems) ? questionItems.allInnerQuestionsButtonObjects : null
                        });
                        allInnerButtonObjects = allInnerButtonObjects.concat(blockData_1);
                        id += 1;
                    }
                    finalDialogBlocks += "<button id=\"add-dialog-" + id + "\" >\n        <span> + New dialog</span>\n    </button>";
                    blockData = Object.assign({}, {
                        id: id,
                        dialogBlockWrapper: "dialog-block-wrapper-" + id,
                        textAreaSelector: "dialog-block-" + id,
                        dialogIdField: "dialog-id-field-" + id,
                        addDialog: "add-dialog-" + id,
                        addNewQuestion: null,
                        removeDialog: null,
                        lastBlockId: allDialogs.length - 1,
                        questionsData: null
                    });
                    allInnerButtonObjects = allInnerButtonObjects.concat(blockData);
                    dialogForm.innerHTML = finalDialogBlocks;
                    return [4 /*yield*/, { dialogForm: dialogForm, allInnerButtonObjects: allInnerButtonObjects }];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.createOtherDialog = createOtherDialog;
function loadQuestionsSection(_a) {
    var questionBase = _a.questionBase, currentId = _a.currentId;
    if (!questionBase)
        return false;
    var allQuestionsBlock = '';
    var allInnerQuestionsButtonObjects = [];
    var questionsId = 0;
    for (var _i = 0, questionBase_1 = questionBase; _i < questionBase_1.length; _i++) {
        var question = questionBase_1[_i];
        allQuestionsBlock += "<div class=\"question-wrapper\" id=\"single-questionBase-block-" + currentId + "-" + questionsId + "\">\n        <p>Related Id dialog</p>\n            <input id=\"related-question-id-" + currentId + "-" + questionsId + "\" type=\"number\" value=\"" + question.id + "\" class=\"related-id-field\">\n            <textarea id='question-text-" + currentId + "-" + questionsId + "'>" + question.text + "</textarea>\n            <button id=\"remove-question-" + currentId + "-" + questionsId + "\" class=\"right-side-button\">\n                <span class=\"button-reject\">- remove-question</span>\n            </button>\n        </div>";
        var blockData = Object.assign({}, {
            dialogId: currentId,
            questionId: questionsId,
            relatedQuestionId: "related-question-id-" + currentId + "-" + questionsId,
            questionWrapper: "single-questionBase-block-" + currentId + "-" + questionsId,
            textAreaSelector: "question-text-" + currentId + "-" + questionsId,
            removeQuestion: "remove-question-" + currentId + "-" + questionsId
        });
        allInnerQuestionsButtonObjects = allInnerQuestionsButtonObjects.concat(blockData);
        questionsId += 1;
    }
    return { questions: allQuestionsBlock, allInnerQuestionsButtonObjects: allInnerQuestionsButtonObjects };
}
//  add new elements
function dialogAnswerButton(_a) {
    var allInnerButtonObjects = _a.allInnerButtonObjects, allOthersDialogs = _a.allOthersDialogs, blockDetails = _a.blockDetails, currentDescriptionId = _a.currentDescriptionId, fileContainer = _a.fileContainer, itemData = _a.itemData;
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, _i, allInnerButtonObjects_1, button;
        return __generator(this, function (_b) {
            if (!allInnerButtonObjects)
                return [2 /*return*/, false];
            _loop_1 = function (button) {
                var addNewQuestion = (button.addNewQuestion) ? document.querySelector('#' + button.addNewQuestion) : null;
                var removeDialog = (button.removeDialog) ? document.querySelector('#' + button.removeDialog) : null;
                var addDialog = (button.addDialog) ? document.querySelector('#' + button.addDialog) : null;
                var dialogActionField = (button.dialogActionField) ? document.querySelector('#' + button.dialogActionField) : null;
                var dialogIdField = (button.dialogIdField) ? document.querySelector('#' + button.dialogIdField) : null;
                var numberOfElements = (button.numberOfElements) ? document.querySelector('#' + button.numberOfElements) : null;
                var textAreaSelector = (button.textAreaSelector) ? document.querySelector('#' + button.textAreaSelector) : null;
                if (addNewQuestion) {
                    addNewQuestion.addEventListener('click', function () {
                        var newDialogBlock = {
                            id: button.lastBlockId + 1,
                            text: "New dialog"
                        };
                        blockDetails.dialog.dialogAnswers[button.id].questions = blockDetails.dialog.dialogAnswers[button.id].questions.concat(newDialogBlock);
                        itemData.parentNode.removeChild(itemData);
                        //dialog.questions
                        createDialogForm({
                            blockDetails: blockDetails,
                            currentDescriptionId: currentDescriptionId,
                            fileContainer: fileContainer
                        });
                    });
                }
                if (removeDialog) {
                    removeDialog.addEventListener('click', function () {
                        blockDetails.dialog.dialogAnswers.splice(button.id, 1);
                        itemData.parentNode.removeChild(itemData);
                        createDialogForm({
                            blockDetails: blockDetails,
                            currentDescriptionId: currentDescriptionId,
                            fileContainer: fileContainer
                        });
                    });
                }
                if (addDialog) {
                    addDialog.addEventListener('click', function () {
                        var newDialogBlock = {
                            id: button.lastBlockId + 1,
                            text: "New field",
                            action: "none",
                            questions: []
                        };
                        blockDetails.dialog.dialogAnswers = blockDetails.dialog.dialogAnswers.concat(newDialogBlock);
                        itemData.parentNode.removeChild(itemData);
                        createDialogForm({
                            blockDetails: blockDetails,
                            currentDescriptionId: currentDescriptionId,
                            fileContainer: fileContainer
                        });
                    });
                }
                if (textAreaSelector) {
                    textAreaSelector.addEventListener('change', function () {
                        blockDetails.dialog.dialogAnswers[button.id].text = this.value;
                    });
                }
                if (dialogActionField) {
                    dialogActionField.addEventListener('change', function () {
                        blockDetails.dialog.dialogAnswers[button.id].action = this.value;
                    });
                }
                if (dialogIdField) {
                    dialogIdField.addEventListener('change', function () {
                        blockDetails.dialog.dialogAnswers[button.id].id = this.value;
                    });
                }
                if (button.numberOfElements) {
                    console.log(button);
                }
                if (numberOfElements) {
                    numberOfElements.addEventListener('change', function () {
                        blockDetails.dialog.dialogAnswers[button.id].numberOfRequireItems = this.value;
                    });
                }
                /// save text
                //console.log(button.questionsData)
                if (button.questionsData) {
                    removeQuestions({
                        questionsData: button.questionsData,
                        allInnerButtonObjects: allInnerButtonObjects,
                        allOthersDialogs: allOthersDialogs,
                        blockDetails: blockDetails,
                        currentDescriptionId: currentDescriptionId,
                        fileContainer: fileContainer,
                        itemData: itemData
                    });
                }
            };
            for (_i = 0, allInnerButtonObjects_1 = allInnerButtonObjects; _i < allInnerButtonObjects_1.length; _i++) {
                button = allInnerButtonObjects_1[_i];
                _loop_1(button);
            }
            return [2 /*return*/];
        });
    });
}
exports.dialogAnswerButton = dialogAnswerButton;
function removeQuestions(_a) {
    var questionsData = _a.questionsData, allInnerButtonObjects = _a.allInnerButtonObjects, allOthersDialogs = _a.allOthersDialogs, blockDetails = _a.blockDetails, currentDescriptionId = _a.currentDescriptionId, fileContainer = _a.fileContainer, itemData = _a.itemData;
    var _loop_2 = function (answer) {
        var removeButton = document.querySelector("#" + answer.removeQuestion);
        var textAreaSelector = document.querySelector("#" + answer.textAreaSelector);
        var relatedQuestionId = document.querySelector("#" + answer.relatedQuestionId);
        removeButton.addEventListener('click', function () {
            blockDetails.dialog.dialogAnswers[answer.dialogId].questions.splice(answer.questionId, 1);
            itemData.parentNode.removeChild(itemData);
            createDialogForm({
                blockDetails: blockDetails,
                currentDescriptionId: currentDescriptionId,
                fileContainer: fileContainer
            });
        });
        if (textAreaSelector) {
            textAreaSelector.addEventListener('change', function () {
                blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].text = this.value;
            });
        }
        if (relatedQuestionId) {
            relatedQuestionId.addEventListener('change', function () {
                console.log(blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].id, '|||');
                //console.log(blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].id, this.value)
                blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].id = this.value;
            });
        }
    };
    for (var _i = 0, questionsData_1 = questionsData; _i < questionsData_1.length; _i++) {
        var answer = questionsData_1[_i];
        _loop_2(answer);
    }
}
function createDialogForm(_a) {
    var blockDetails = _a.blockDetails, currentDescriptionId = _a.currentDescriptionId, fileContainer = _a.fileContainer;
    return __awaiter(this, void 0, void 0, function () {
        var facePicture, innerText, itemData, allOthersDialogs, mainDialogWrapper, otherDialogs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    facePicture = (blockDetails.dialog.default.facePictureAbsolute) ? blockDetails.dialog.default.facePictureAbsolute : globalVariables_1.__HOST + blockDetails.dialog.default.facePicture;
                    innerText = "<div id=\"main-dialog-wrapper\">\n            <h3>Dialog</h3>\n            <p>Create Person dialog</p>\n            <div>" + ((blockDetails.dialog.default.facePictureAbsolute) ? 'Picture is set' : 'You must save the picture first') + "</div>\n            <img width=\"100\" id=" + ('dialog-face-picture-' + currentDescriptionId) + "\n            src=\"" + facePicture + "\">\n\n            <select id=\"preview-dialog-face\" data-target='preview-dialog-face'>\n                <option value=\"face-1.png\" selected=\"selected\">professor</option>\n                <option value=\"face-3.png\">old man</option>\n                <option value=\"face-4.png\">man 1</option>\n                <option value=\"face-7.png\">man 2</option>\n                <option value=\"face-8.png\">Officer</option>\n                <option value=\"face-2.png\">Soldier</option>\n                <option value=\"face-5.png\">Robot red</option>\n                <option value=\"face-6.png\">Yellow red</option>\n            </select>\n\n            <input id=\"npc-name\" type=\"text\" value=\"" + ((blockDetails.dialog.default.name) ?
                        blockDetails.dialog.default.name :
                        'NPC name') + "\" placeholder=\"" + ((blockDetails.dialog.default.name) ? blockDetails.dialog.default.name : 'NPC name') + "\">\n            <button data-target='save-dialog-btn' class=\"main-btn\">Save name and picture</button> <hr></div>\n            <div class=\"all-others-dialogs\" id=\"all-others-dialogs\"></div>\n            ";
                    itemData = panelFormPartGenerator_1.elementCreator({
                        tagname: "div",
                        classList: 'single-block-description',
                        innerText: innerText,
                        idName: 'description-requireText-' + currentDescriptionId
                    });
                    fileContainer.appendChild(itemData);
                    allOthersDialogs = document.querySelector("#all-others-dialogs");
                    mainDialogWrapper = document.querySelector("#main-dialog-wrapper");
                    return [4 /*yield*/, createOtherDialog({ allDialogs: blockDetails.dialog.dialogAnswers })];
                case 1:
                    otherDialogs = _b.sent();
                    if (!otherDialogs) return [3 /*break*/, 4];
                    return [4 /*yield*/, allOthersDialogs.appendChild(otherDialogs.dialogForm)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, dialogAnswerButton({
                            allInnerButtonObjects: otherDialogs.allInnerButtonObjects,
                            allOthersDialogs: allOthersDialogs,
                            blockDetails: blockDetails,
                            currentDescriptionId: currentDescriptionId,
                            fileContainer: fileContainer,
                            itemData: itemData
                        })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createDialogForm = createDialogForm;


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
    //console.log(BlockConstructor, blockArray)
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
    if (this.yMove > 0 - 100 && this.xMove > 0 - 100 && this.yMove < window.innerHeight + 100 && this.xMove < window.innerWidth + 100) {
        block.blockAnimations();
    }
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
var dialogFormModule_1 = __webpack_require__(/*! ./dialogFormModule */ "./src/redactor/dialogFormModule.ts");
function generateInput(_a) {
    var fileContainer = _a.fileContainer, target = _a.target;
    return __awaiter(this, void 0, void 0, function () {
        var blockDetails, innerText, itemData, currentDescriptionId, blockAlertMessage, blockPreviewImage, localPicture, mainPicture;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
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
                    innerText = "\n            <h1>Block Position</h1>\n            <h3>Block X</h3>\n            <p>X position of block</p>\n            <input type='number' min=\"-50\" max=\"50\" id=" + ('x-pos-property-' + currentDescriptionId) + " value=" + ((target.blockRelativeXPos) ? target.blockRelativeXPos : 0) + " />\n            <button data-target='save-x-pos-btn' class=\"main-btn\">Save X Position</button>\n\n            <h3>Block Y</h3>\n            <p>Y position of block</p>\n            <input type='number' min=\"-50\" max=\"50\" id=" + ('y-pos-property-' + currentDescriptionId) + " value=" + ((target.blockRelativeYPos) ? target.blockRelativeYPos : 0) + " />\n            <button data-target='save-y-pos-btn' class=\"main-btn\">Save Y Position</button>\n            ";
                    itemData = elementCreator({
                        tagname: "div",
                        classList: 'single-block-description',
                        innerText: innerText,
                        idName: 'block-x-pos-' + currentDescriptionId
                    });
                    blockPreviewImage['height'] = target.height;
                    fileContainer.appendChild(itemData);
                    console.log(blockDetails);
                    if (blockDetails.type === 'elevator') {
                        innerText = "\n        <h1>Elevator range</h1>\n        <input id=\"elevator-range-" + currentDescriptionId + "\" type=\"number\" min=\"100\" value=" + blockDetails.valueOfMove + ">\n        <button data-target='save-elevator-range-btn' class=\"main-btn\">Save Elevator Range</button>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: ''
                        });
                        fileContainer.appendChild(itemData);
                    }
                    /*
                    "valueOfMove": 150,
                        "currentValueOfMove": 150,
                        "constructorValueOfMove": 150,
                    */
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
                        innerText = "<h3>Require Object</h3>\n            <p>Require message, display object needs for this block to everything work fine \n            <span>computer_data</span>\n            <span>blue_card</span>\n            <span>green_card</span>\n            <span>yellow_card</span>\n            <span>red_card</span>\n            <span>power_cell</span>\n            <span>enemy_helmet</span>\n            <span>enemy_details</span>\n            <span>med_kit</span>\n            <span>laptop_with_data</span>\n            <span>tools_case</span>\n            </p>\n            <textarea type='text' id=" + ('require-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.require) ? blockDetails.rules.require : '') + "</textarea>\n            <button data-target='save-require-btn' class=\"main-btn\">Save Require Object</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'description-requireText-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                        localPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : 'computer-data.png';
                        mainPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + localPicture;
                        innerText = "<h3>Contain Object</h3>\n            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level\n            <span>computer_data</span>\n            <span>blue_card</span>\n            <span>green_card</span>\n            <span>yellow_card</span>\n            <span>red_card</span>\n            <span>exit</span>  exit  - end the level\n            <span>power_cell</span>\n            <span>enemy_helmet</span>\n            <span>enemy_details</span>\n            <span>med_kit</span>\n            <span>laptop_with_data</span>\n            <span>tools_case</span>\n            </p>\n\n            <textarea type='text' id=" + ('contain-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.contain) ? blockDetails.rules.contain : '') + "</textarea>\n            <img width=\"100\" id=" + ('contain-picture-' + currentDescriptionId) + "\n            src=\"" + mainPicture + "\">\n            <select id=\"preview-contain-object\" data-target='select-preview-btn'>\n                <option value=\"computer-data.png\">Computer data</option>\n                <option value=\"red-card.png\">Red card</option>\n                <option value=\"blue-card.png\">Blue card</option>\n                <option value=\"green-card.png\">Green card</option>\n                <option value=\"yellow-card.png\">Yellow card</option>\n                <option value=\"power-cell.png\">Power Cell</option>\n                <option value=\"med-kit.png\">Med kit</option>\n                <option value=\"laptop.png\">Laptop case</option>\n                <option value=\"tools-case.png\">Tools case</option>\n                <option value=\"Enemy-head.png\">Enemy helmet A</option>\n                <option value=\"enemy-details.png\">Enemy detail 1</option>\n            </select>\n            <button data-target='save-contain-btn' class=\"main-btn\">Save</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'description-requireText-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                    }
                    if (!blockDetails.dialog) return [3 /*break*/, 2];
                    return [4 /*yield*/, dialogFormModule_1.createDialogForm({ blockDetails: blockDetails, currentDescriptionId: currentDescriptionId, fileContainer: fileContainer })];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
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
                                            case 'save-elevator-range-btn': return [3 /*break*/, 1];
                                            case 'save-width-btn': return [3 /*break*/, 3];
                                            case 'save-height-btn': return [3 /*break*/, 5];
                                            case 'save-x-pos-btn': return [3 /*break*/, 7];
                                            case 'save-y-pos-btn': return [3 /*break*/, 9];
                                            case 'save-description-btn': return [3 /*break*/, 11];
                                            case 'save-tips-btn': return [3 /*break*/, 13];
                                            case 'save-success-text-btn': return [3 /*break*/, 15];
                                            case 'save-require-text-btn': return [3 /*break*/, 17];
                                            case 'save-require-btn': return [3 /*break*/, 19];
                                            case 'save-contain-btn': return [3 /*break*/, 21];
                                            case 'save-dialog-btn': return [3 /*break*/, 23];
                                        }
                                        return [3 /*break*/, 26];
                                    case 1: return [4 /*yield*/, changeDataInBlock({
                                            key: 'valueOfMove',
                                            fieldSelector: '#elevator-range-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 2:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        blockPreviewImage['width'] = target.width;
                                        blockPreviewImage['height'] = target.height;
                                        return [3 /*break*/, 27];
                                    case 3: return [4 /*yield*/, changeDataInBlock({
                                            key: 'width',
                                            fieldSelector: '#width-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 4:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        blockPreviewImage['width'] = target.width;
                                        blockPreviewImage['height'] = target.height;
                                        return [3 /*break*/, 27];
                                    case 5: return [4 /*yield*/, changeDataInBlock({
                                            key: 'height',
                                            fieldSelector: '#height-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 6:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        blockPreviewImage['width'] = target.width;
                                        blockPreviewImage['height'] = target.height;
                                        return [3 /*break*/, 27];
                                    case 7: return [4 /*yield*/, changeDataInBlock({
                                            key: 'blockRelativeXPos',
                                            fieldSelector: '#x-pos-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 8:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        console.log(target);
                                        return [3 /*break*/, 27];
                                    case 9: return [4 /*yield*/, changeDataInBlock({
                                            key: 'blockRelativeYPos',
                                            fieldSelector: '#y-pos-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 10:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        console.log(target);
                                        return [3 /*break*/, 27];
                                    case 11: return [4 /*yield*/, changeDataInBlock({
                                            key: 'description',
                                            fieldSelector: '#description-field-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 12:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'description field' : ' save description field';
                                        return [3 /*break*/, 27];
                                    case 13: return [4 /*yield*/, changeDataInBlock({
                                            key: 'tips',
                                            fieldSelector: '#tips-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 14:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'tips field' : ' save tips field';
                                        return [3 /*break*/, 27];
                                    case 15: return [4 /*yield*/, changeDataInBlock({
                                            key: 'successText',
                                            fieldSelector: '#successText-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 16:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'description field' : ' save description field';
                                        return [3 /*break*/, 27];
                                    case 17: return [4 /*yield*/, changeDataInBlock({
                                            key: 'requireText',
                                            fieldSelector: '#requireText-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 18:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'require text field' : ' save require text field';
                                        return [3 /*break*/, 27];
                                    case 19: return [4 /*yield*/, changeDataInBlock({
                                            key: 'require',
                                            fieldSelector: '#require-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 20:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'require field' : ' save require field';
                                        return [3 /*break*/, 27];
                                    case 21: return [4 /*yield*/, changeDataInBlock({
                                            key: 'contain',
                                            fieldSelector: '#contain-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 22:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        return [3 /*break*/, 27];
                                    case 23:
                                        console.log('Save');
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'contain',
                                                fieldSelector: '#contain-field-' + currentDescriptionId,
                                                target: target.details.dialog.default
                                            })];
                                    case 24:
                                        fieldResults = _b.sent();
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'name',
                                                fieldSelector: '#npc-name',
                                                target: target.details.dialog.default
                                            })
                                            /*fieldResults = await changeDataInBlock({
                                                key: 'text',
                                                fieldSelector: '#default-dialog-text',
                                                target: target.details.dialog.default
                                            })*/
                                        ];
                                    case 25:
                                        fieldResults = _b.sent();
                                        /*fieldResults = await changeDataInBlock({
                                            key: 'text',
                                            fieldSelector: '#default-dialog-text',
                                            target: target.details.dialog.default
                                        })*/
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        _b.label = 26;
                                    case 26: return [2 /*return*/, false];
                                    case 27:
                                        blockAlertMessage.innerHTML = (fieldResults) ? "<p class=\"side-panel-success\" > Successfully saved '" + fieldName + "' </p>" : "<p class=\"side-panel-error\" >There is a problem in '" + fieldName + "' i can't save</p>";
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    fileContainer.addEventListener('click', function (event) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _a, dataCheck_1, requiredPreviewPic_1, pic_1, link_1, _b, dataFace, faceLink, _c, picture, dataCheck, requiredPreviewPic, pic, link, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        _a = event.target.dataset.target;
                                        switch (_a) {
                                            case 'select-preview-btn': return [3 /*break*/, 1];
                                            case 'preview-dialog-face': return [3 /*break*/, 4];
                                        }
                                        return [3 /*break*/, 6];
                                    case 1: return [4 /*yield*/, changeDataInBlock({
                                            key: 'objectPicture',
                                            fieldSelector: '#preview-require-object',
                                            target: target.details.rules
                                        })];
                                    case 2:
                                        _e.sent();
                                        dataCheck_1 = document.querySelector('#preview-contain-object')['value'];
                                        requiredPreviewPic_1 = document.querySelector('#contain-picture-' + currentDescriptionId);
                                        pic_1 = (target.details.rules.objectPicture) ? target.details.rules.objectPicture : 'computer-data.png';
                                        link_1 = globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + dataCheck_1;
                                        //target.details.rules.objectPicture = link;
                                        _b = target.details.rules;
                                        return [4 /*yield*/, createBase64EncodingPicture({ pictureLink: link_1, targetObject: target.details.rules.objectPicture })];
                                    case 3:
                                        //target.details.rules.objectPicture = link;
                                        _b.objectPicture = _e.sent();
                                        requiredPreviewPic_1['src'] = target.details.rules.objectPicture; // link; //computer-data.png
                                        return [3 /*break*/, 7];
                                    case 4:
                                        dataFace = document.querySelector('#preview-dialog-face')['value'];
                                        faceLink = globalVariables_1.__HOST + '/level-creator/assets/enemyObject/avatar/' + dataFace;
                                        _c = blockDetails.dialog.default;
                                        return [4 /*yield*/, createBase64EncodingPicture({ pictureLink: faceLink, targetObject: blockDetails.dialog.default.facePictureAbsolute })];
                                    case 5:
                                        _c.facePictureAbsolute = _e.sent();
                                        picture = document.querySelector('#dialog-face-picture-' + currentDescriptionId);
                                        picture['src'] = blockDetails.dialog.default.facePictureAbsolute;
                                        return [3 /*break*/, 7];
                                    case 6: return [2 /*return*/, false];
                                    case 7:
                                        dataCheck = document.querySelector('#preview-contain-object')['value'];
                                        requiredPreviewPic = document.querySelector('#contain-picture-' + currentDescriptionId);
                                        pic = (target.details.rules.objectPicture) ? target.details.rules.objectPicture : 'computer-data.png';
                                        link = globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + dataCheck;
                                        _d = target.details.rules;
                                        return [4 /*yield*/, createBase64EncodingPicture({ pictureLink: link, targetObject: target.details.rules.objectPicture })];
                                    case 8:
                                        _d.objectPicture = _e.sent();
                                        //console.log(target)
                                        requiredPreviewPic['src'] = target.details.rules.objectPicture; //computer-data.png
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.generateInput = generateInput;
function createBase64EncodingPicture(_a) {
    var pictureLink = _a.pictureLink, targetObject = _a.targetObject;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            if (!pictureLink)
                return [2 /*return*/, false];
            return [2 /*return*/, new Promise(function (response, reject) {
                    var _this = this;
                    var canvas = document.createElement('canvas');
                    canvas.width = 59;
                    canvas.height = 58;
                    var ctx = canvas.getContext('2d');
                    var img = new Image();
                    img.src = pictureLink;
                    img.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                        var dataURL, getPictureBase, pictureBaseUrl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
                                    return [4 /*yield*/, canvas.toDataURL()];
                                case 1:
                                    dataURL = _a.sent();
                                    getPictureBase = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                                    pictureBaseUrl = 'data:image/png;base64,' + getPictureBase;
                                    //console.log(pictureBaseUrl)
                                    targetObject = pictureBaseUrl;
                                    return [2 /*return*/, response(targetObject)];
                            }
                        });
                    }); };
                }).then(function (response) {
                    //console.log(response)
                    return response;
                }, function (reject) {
                    console.error('Cant rebase');
                })];
        });
    });
}
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
                    if (!currentField)
                        return [2 /*return*/, false];
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
    var itemBackgroundImage = (blockDetails['previewTexture']) ? blockDetails['previewTexture'] : blockDetails['texture']; // previewTexture
    itemBackgroundImage = (target.backgroundTexture && blockDetails['previewTexture']) ? target.backgroundTexture['previewTexture'] :
        (target.backgroundTexture) ? target.backgroundTexture.texture : blockDetails['texture'];
    var itemImage = (blockDetails['previewTexture']) ? blockDetails['previewTexture'] : blockDetails['texture'];
    console.log(target.backgroundTexture, blockDetails['previewTexture'], blockDetails['texture'], itemBackgroundImage);
    var backgroundImage = (target.backgroundTexture) ? "<img width=\"50\" src=\"" + (globalVariables_1.__HOST + itemBackgroundImage) + "\" alt=\"" + target.backgroundTexture.id + "\">" : "";
    var innerText = "<div class=\"block-description-wrapper\">\n    <div class=\"material-preview-wrapper\">\n        <img id=\"block-preview-image\" width=\"200\" src=\"" + (globalVariables_1.__HOST + itemImage) + "\">\n    </div>\n\n    <ul><div id=\"block-alert-message\"></div>\n        <li>Name: " + blockDetails.id + "</li>\n        <li>Index: " + target.index + "</li>\n        <li>Type: " + ((blockDetails.type) ? blockDetails.type : '') + "</li>\n        <li>width: " + target.width + "</li>\n        <li>height: " + target.height + "</li>\n        <li>X: " + target.x + "</li>\n        <li>Y: " + target.y + "</li>\n\n    <p>" + ((target.backgroundTexture) ? "Background texture" : "") + "</p>\n    " + backgroundImage + "\n    </ul></div><hr>";
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
        var copyOfBlockData = Object.assign({}, blockItem);
        var itemImage = (copyOfBlockData['previewTexture']) ? copyOfBlockData['previewTexture'] : copyOfBlockData['texture'];
        var obj = sidePanelActions_1.blockCreator({
            tag: 'div',
            styleClass: 'single-block-item',
            innerContent: "<img width=\"100%\" title=\"" + ((copyOfBlockData.details) ? copyOfBlockData.details.description : copyOfBlockData.description) + "\" src='" + (globalVariable.__HOST + itemImage) + "'>"
        });
        obj.addEventListener('click', function (event) {
            sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: copyOfBlockData });
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
    //console.log(blockItem)
    var copyOfblockItem = Object.assign({}, blockItem);
    if (mainObject.selectedBlockPanelItem) {
        mainObject.selectedBlockPanelItem = (copyOfblockItem.id != mainObject.selectedBlockPanelItem.id) ? copyOfblockItem : null;
    }
    else
        mainObject.selectedBlockPanelItem = copyOfblockItem;
    preview_1.previewOfBlock({ selectedBlockPanelItem: mainObject.selectedBlockPanelItem, event: event });
}
function createDestroyBlock(_a) {
    var mainObject = _a.mainObject, selectItem = _a.selectItem;
    var obj = document.createElement('div');
    obj.className = 'single-block-item destroy-block-wrapper';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9kaWFsb2dGb3JtTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91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QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVHQUF1RztBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL3NlcnZlci9wdWJsaWMvbGV2ZWwtY3JlYXRvci9kaXN0LXNjcmlwdHNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuY2FudmFzIHtcXG4gICAgYmFja2dyb3VuZDogIzAwNTM0YjsgfVxcblxcbi5zaWRlLW1lbnUtd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6ICNiYmJiYmI7XFxuICAgIGhlaWdodDogOTZ2aDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuXFxuLmdhbWUtZmllbGQtd3JhcHBlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3R0b206IDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLm1haW4tYmFubmVyLWNvdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogMTAwOyB9XFxuXFxuKiB7XFxuICAgIGNvbG9yOiAjMjIxODI4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IH1cXG5cXG5sZWdlbmQgaDMge1xcbiAgICBtYXJnaW46IDBweDsgfVxcblxcbmxhYmVsIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA5MSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiAwcHg7IH1cXG5cXG4uc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gICAgLnNpZGUtaW5zdHJ1bWVudGFsLXBhbmVsIGxpIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gICAgLnNpZGUtaW5zdHJ1bWVudGFsLXBhbmVsIGltZyB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiA1NHB4OyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW0tcHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTAwOyB9XFxuICAgIC5zZWxlY3RlZC1pdGVtLXByZXZpZXcgaW1nIHtcXG4gICAgICAgIHdpZHRoOiA2MHB4OyB9XFxuXFxuLmlubmVyLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTsgfVxcbiAgICAuaW5uZXItY29udGVudCBociB7XFxuICAgICAgICBjb2xvcjogI2VhZWFlYTsgfVxcbiAgICAuaW5uZXItY29udGVudCAuc2luZ2xlLWl0ZW0td3JhcHBlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXI6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzRkNDI2MztcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAuaW5uZXItY29udGVudCAuc2luZ2xlLWl0ZW0td3JhcHBlcjpob3ZlciBoMiB7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cXG5cXG4uaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtZ2FwOiAyMHB4OyB9XFxuICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGNvbG9yOiAjNzE1MTg0OyB9XFxuICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiBpbnB1dCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiYjsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gc3BhbiB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2E2MWJkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cXG4gICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIC5idXR0b24tcmVqZWN0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWQwMDAwO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmY7IH1cXG4gICAgICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiAuYnV0dG9uLXJlamVjdCB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYzE3MjI7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAucXVlc3Rpb24td3JhcHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnF1ZXN0aW9uLXdyYXBwZXIgcCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG4gICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5yZXF1aXJlbWVudC1pdGVtLXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcblxcbi5hY3RpdmUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmOTYxZTsgfVxcblxcbi5yaWdodC1zaWRlLWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcblxcbi5zaWRlLXBhbmVsLXN1Y2Nlc3Mge1xcbiAgICBjb2xvcjogIzUzOTcwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUzOTcwMDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXFxuLnNpZGUtcGFuZWwtZXJyb3Ige1xcbiAgICBjb2xvcjogI2IxMDAwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IxMDAwMDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXFxuLmJsb2NrLWRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gICAgLmJsb2NrLWRlc2NyaXB0aW9uLXdyYXBwZXIgaW1nIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTsgfVxcblxcbi5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA0NiU7IH1cXG4gICAgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogOTYlO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiOyB9XFxuXFxuLmFsbC1vdGhlcnMtZGlhbG9ncyB7XFxuICAgIGJhY2tncm91bmQ6ICM4MjZkNmQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuYWxsLW90aGVycy1kaWFsb2dzIGg0IHtcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgIC5hbGwtb3RoZXJzLWRpYWxvZ3MgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yZWxhdGVkLWlkLWZpZWxkIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHdpZHRoOiAyOXB4O1xcbiAgICBtYXJnaW46IDI0cHg7IH1cXG5cXG4uY2xvc2UtZGlhbG9nIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyOXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5tYWluLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmIzMDA7XFxuICAgIGJvcmRlcjogbmF2YWpvd2hpdGU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMxNTQ3YTY0ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyOyB9XFxuXFxuLm1haW4tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZWRjMzsgfVxcblxcbi5tYWluLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYxZTAwOyB9XFxuXFxuLm1hdGVyaWFsLXByZXZpZXctd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJ1dHRvbi1yZWplY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjYWQwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmOyB9XFxuXFxuLmRlc3Ryb3ktYmxvY2std3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDMxcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4vbWFpbi5zYXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIGJsb2NrSW50ZXJhY3RNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlXCIpO1xyXG52YXIgYmxvY2tzRnVuY3Rpb25hbGl0eV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2Nrc0Z1bmN0aW9uYWxpdHlcIik7XHJcbnZhciBCbG9ja0NvbnN0cnVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmxvY2tDb25zdHJ1Y3RvcihfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRNYXBYID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdE1hcFkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy54TW92ZSA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnlNb3ZlID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuYmxvY2tSZWxhdGl2ZVhQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMuYmxvY2tSZWxhdGl2ZVlQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGRhdGEuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gKGRhdGEuZGV0YWlscykgPyBkYXRhLmRldGFpbHMgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IChkYXRhLmltYWdlV2lkdGgpID8gZGF0YS5pbWFnZVdpZHRoIDogZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gKGRhdGEuaW1hZ2VIZWlnaHQpID8gZGF0YS5pbWFnZUhlaWdodCA6IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VGV4dHVyZSA9IChkYXRhLnByZXZpZXdUZXh0dXJlKSA/IGRhdGEucHJldmlld1RleHR1cmUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB0aGlzLnN5ID0gMDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLmltYWdlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQmxvY2tDb25zdHJ1Y3RvcjtcclxufSgpKTtcclxuZXhwb3J0cy5CbG9ja0NvbnN0cnVjdG9yID0gQmxvY2tDb25zdHJ1Y3RvcjtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyQmxvY2tCb3ggPSBpbml0U3RhcnRPYmplY3RfMS5yZW5kZXJCbG9ja0JveDtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUubW92ZVNpbmdsZUJsb2NrID0gYmxvY2tJbnRlcmFjdE1vZHVsZV8xLm1vdmVTaW5nbGVCbG9jaztcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZWxldmF0b3JNb3ZlID0gYmxvY2tzRnVuY3Rpb25hbGl0eV8xLmVsZXZhdG9yTW92ZTtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuYmxvY2tBbmltYXRpb25zID0gYmxvY2tzRnVuY3Rpb25hbGl0eV8xLmJsb2NrQW5pbWF0aW9ucztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYWluR2FtZUNvbnN0cnVjdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLm1hcE1vdmVTcGVlZCA9IGRhdGEubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMubWFwV2lkdGggPSBkYXRhLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwSGVpZ2h0ID0gZGF0YS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tYXBEZWZhdWx0V2lkdGggPSBkYXRhLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwRGVmYXVsdEhlaWdodCA9IGRhdGEubWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYWxsUmVkYWN0b3JCbG9jayA9IGRhdGEuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICB0aGlzLmJhY2tncm91bmREYXRhYmFzZSA9IGRhdGEuYmFja2dyb3VuZERhdGFiYXNlO1xyXG4gICAgICAgIHRoaXMuYmxvY2tEYXRhYmFzZSA9IChkYXRhLmJsb2NrRGF0YWJhc2UpID8gZGF0YS5ibG9ja0RhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnNEYXRhYmFzZSA9IChkYXRhLmNoYXJhY3RlcnNEYXRhYmFzZSkgPyBkYXRhLmNoYXJhY3RlcnNEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbmVteURhdGFiYXNlID0gKGRhdGEuZW5lbXlEYXRhYmFzZSkgPyBkYXRhLmVuZW15RGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gZGF0YS5ibG9ja1NpemU7XHJcbiAgICAgICAgdGhpcy5tYXhIb3Jpem9udGFsQmxvY2tzID0gZGF0YS5tYXhIb3Jpem9udGFsQmxvY2tzO1xyXG4gICAgICAgIHRoaXMubWF4VmVydGljYWxCbG9ja3MgPSBkYXRhLm1heFZlcnRpY2FsQmxvY2tzO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1pbmlNYXBBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYWluR2FtZUNvbnN0cnVjdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLk1haW5HYW1lQ29uc3RydWN0b3IgPSBNYWluR2FtZUNvbnN0cnVjdG9yO1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5pbml0VmlldyA9IHZpZXdfMS5pbml0VmlldztcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY2xlYXJWaWV3ID0gdmlld18xLmNsZWFyVmlldztcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVySXRlbXNUb1NpZGVMaXN0ID0gdmlld18xLnJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuLi9zYXNzL21haW4uc2Fzc1wiKTtcclxudmFyIHJlbmRlckNvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnMvcmVuZGVyQ29uc3RydWN0b3JcIik7XHJcbnZhciBibG9ja0NvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnMvYmxvY2tDb25zdHJ1Y3RvclwiKTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuL3VpL3ZpZXdcIik7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIHNpZGVQYW5lbEFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuL3JlZGFjdG9yL3NpZGVQYW5lbEFjdGlvbnNcIik7XHJcbi8qXHJcblYtIGNyZWF0ZSBtYXAgbmV0XHJcbiAgICBWLSB2ZXJ0aWNhbCBkaXJlY3Rpb24gb2YgYmxvY2tcclxuICAgIFYtIGRlc3Ryb3kgc29tZSBibG9ja3NcclxuICAgIFYtIGJsb2NrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgViAtIGRlbGV0ZSBibG9ja1xyXG4gICAgICAgIFYtIHByZXZpZXdcclxuICAgICAgICBWLSBpbmZvcm1hdGlvblxyXG4gICAgICAgIFYtIGNoYW5nZSBkYXRhXHJcbiAgICAgICAgICAgIFYtIHdpZHRoXHJcbiAgICAgICAgICAgIFYtIGhlaWdodFxyXG4gICAgICAgICAgICBWLSB4XHJcbiAgICAgICAgICAgIFYtIHlcclxuICAgICAgICAgICAgVi0gZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgVi0gcnVsZXJzXHJcbiAgICAgICAgICAgIFYtIGVsZXZhdG9yIHNwZWVkXHJcblYtIHNpZGUgcGFuZWxcclxuICAgIFYtIG5ldyBtYXBcclxuICAgICAgICBWLSBtYXAgbmFtZVxyXG4gICAgICAgIFYtIHNhdmUgbWFwIGluIGpzb25cclxuICAgICAgICBWLSBjaGFuZ2UgbWFwIHNpemVcclxuICAgICAgICBWLSBvdmVyd3JpdGUgbWFwXHJcbiAgICBWLSBsb2FkIG1hcFxyXG4gICAgVi0gbWluaW1hcFxyXG4gICAgVi0gZGlmZmVyZW50IHNlY3Rpb25zIG9mIG9iamVjdHNcclxuICAgICAgICBWLSBibG9ja1xyXG4gICAgICAgIFYtIGNoYXJhY3RlcnNcclxuICAgICAgICBWLSBlbmVteVxyXG4gICAgICAgIFYtIGJhY2tncm91bmRcclxuICAgICAgICBWLSBkeW5hbWljIHNwYXduXHJcblxyXG5cclxuVi0gYWRkIHN0YWlyc1xyXG5WLSBhZGQgbGVhZGVyc1xyXG5WLSBkb29yc1xyXG4gICBWIC0gZG9vcnMgYWNjZXNzIGNhcmRcclxuVi0gYWRkIGhvcml6b250YWwgZWxldmF0b3JcclxuVi0gYWRkIGJhY2tncm91bmQgdGV4dHVyZSBhbmQgZGlzcGxheSBpdFxyXG4gICAgVi0gZGVzdHJveS8gY2hhbmdlIHRleHR1cmVzIHNlcGFyYXRlbHlcclxuICAgIFYtIGFkZCB0ZXh0dXJlIGFuaW1hdGlvbnNcclxuVi0gYWRkIE5QQ1xyXG4gICBWIC0gZGlhbG9nXHJcbiAgICAgICAgLSA3IC0gOCBsZXZlbHNcclxuICAgICAgICAgICAgLSBzdGFydCBiYXNlIGJhc2VcclxuICAgICAgICAgICAgICAgIC0gZmluZCBzaGlwXHJcbiAgICAgICAgICAgIC0gY29tbWFuZCBjZW50ZXJcclxuICAgICAgICAgICAgICAgIC0gZ2V0IGltcG9ydGVuZCBkYXRhXHJcbiAgICAgICAgICAgICAgICAtIHVybiBvbiBkZWZlbmNlIHN5c3RlbVxyXG4gICAgICAgICAgICAtIGRlc2VydCBhcmNoZW9sb2dpY2FsIGV4Y2F2YXRpb25zXHJcbiAgICAgICAgICAgICAgICAtIGZpbmQgYW5jaWVudCBhcnRpZmFjdFxyXG4gICAgICAgICAgICAtIHNreSBjaXR5XHJcbiAgICAgICAgICAgICAgICAtIHRhbGsgd2l0aCBjb21tYW5kZXIgYW5kIHNjaWVudGlzdFxyXG4gICAgICAgICAgICAgICAgLSBnZXQgaW1wb3J0ZW5kIGRhdGFcclxuICAgICAgICAgICAgLSBtb29uIGJhc2VcclxuICAgICAgICAgICAgICAgIC0gZml4ZWQgdHJhbnNwb3J0YXRpb24gZ2F0ZSBjZW50ZXJcclxuICAgICAgICAgICAgICAgIC0gcmVzY3VlIGZhY2lsaXR5IHBlcnNvbmFsXHJcbiAgICAgICAgICAgIC0gdmVudXNcclxuICAgICAgICAgICAgICAgIC0gc2F2ZSBwbGF0Zm9ybVxyXG4gICAgICAgICAgICAgICAgLSByZXBhcmUgc3RhdGlvblxyXG4gICAgICAgICAgICAgICAgLSBhY3RpdmV0ZSBkZWZlbmNlIHN5c3RlbVxyXG4gICAgICAgICAgICAgICAgLSByZWNoYXJnZSB5b3Ugc2hpcFxyXG4gICAgICAgICAgICAtIG1hcnNcclxuICAgICAgICAgICAgICAgIC0gYWN0aXZhdGUgdHJhY2tpbmcgc3lzdGVtXHJcbiAgICAgICAgICAgICAgICAtIHRyYWNlIG9mIGVuZW15XHJcbiAgICAgICAgICAgICAgICAtIGFjdGl2YXRlIHRyYW5zcG90cnQgc3lzdGVtXHJcblxyXG4gICAgICAgICAgICAtIEp1cGl0ZXIgP1xyXG4gICAgICAgICAgICAgICAgLSAwR1xyXG4gICAgICAgICAgICAgICAgLSBzcGFjZVN0YXRpb24gSW9cclxuXHJcblxyXG4qL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlZGFjdG9yRW5naW5lKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2ksIF9hLCBibG9jaztcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuY2xlYXJWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDAsIF9hID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9hLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShibG9jay54TW92ZSA+IDAgLSAxMDAgJiYgYmxvY2sueE1vdmUgPCB3aW5kb3cuaW5uZXJXaWR0aCArIDEwMCAmJiBibG9jay55TW92ZSA+IDAgLSAxMDAgJiYgYmxvY2sueU1vdmUgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDApKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrLnJlbmRlckJsb2NrQm94KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrLmVsZXZhdG9yTW92ZSgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdFN0YXJ0T2JqZWN0XzEuYmxvY2tBbmltYXRpb25SZW5kZXIoeyBibG9jazogYmxvY2sgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluT2JqZWN0LCBlbmdpbmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRTdGFydE9iamVjdF8xLmluaXRNYWluRW5naW5lKHsgTWFpbkdhbWVDb25zdHJ1Y3RvcjogcmVuZGVyQ29uc3RydWN0b3JfMS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmluaXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5yZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkYWN0b3JFbmdpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5tYXBNb3ZlQ29udHJvbGxlcnMoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5zYXZlTWFwKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEubG9hZE1hcCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLnNldE1hcFNpemUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuY3JlYXRlTmV3TWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS9wcmV2aWV3XCIpO1xyXG52YXIgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vcGFuZWxGb3JtUGFydEdlbmVyYXRvclwiKTtcclxuZnVuY3Rpb24gb3BlblJlZGFjdG9yV2luZG93KF9hKSB7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0gX2EuYmxvY2tEYXRhLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZWN0RmlsZXMsIGZpbGVDb250YWluZXIsIGNsb3NlRGlhbG9nLCBnZW5lcmF0ZWRBcmVhLCBhbGxCbG9ja3MsIGlubmVyRGVzY3JpcHRpb25BcmVhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgIWJsb2NrRGF0YS5kZXRhaWxzIHx8IG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZEFyZWEgPSBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdpbm5lci1kZXNjcmlwdGlvbi1hcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkQXJlYSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWRlc2NyaXB0aW9uLWFyZWFcIildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRGVzY3JpcHRpb25BcmVhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5sb2FkSW5uZXJEYXRhKHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5nZW5lcmF0ZUlucHV0KHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5vcGVuUmVkYWN0b3JXaW5kb3cgPSBvcGVuUmVkYWN0b3JXaW5kb3c7XHJcbmZ1bmN0aW9uIHBvc2l0aW9uUmVkdWNlcihfYSkge1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IF9hLmFsbEJsb2NrcztcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCbG9ja3NfMSA9IGFsbEJsb2NrczsgX2kgPCBhbGxCbG9ja3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBhbGxCbG9ja3NfMVtfaV07XHJcbiAgICAgICAgYmxvY2sueE1vdmUgPSBibG9jay54O1xyXG4gICAgICAgIGJsb2NrLnlNb3ZlID0gYmxvY2sueTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBvc2l0aW9uUmVkdWNlciA9IHBvc2l0aW9uUmVkdWNlcjtcclxuZnVuY3Rpb24gY2hhbmdlQmxvY2tBcnJheVNpemUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZm9ybURhdGEgPSBfYS5mb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtc2l6ZS1lcnJvcicpO1xyXG4gICAgdmFyIHdpZHRoU2V0ID0gZm9ybURhdGEuaG9yaXpvbnRhbEJsb2NrO1xyXG4gICAgdmFyIGhlaWdodFNldCA9IGZvcm1EYXRhLnZlcnRpY2FsQmxvY2s7XHJcbiAgICB2YXIgY3VycmVudFdpZHRoID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIHZlcnRpY2FsUmFuZ2UgPSBoZWlnaHRTZXQgLSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgdmFyIHZlcnRpY2FsQ29tcGVuc2F0aW9uID0gdmVydGljYWxSYW5nZTtcclxuICAgIHZhciBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBbXTtcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgLy9lcnJvckZpZWxkLmlubmVySFRNTCA9IGA8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPmA7XHJcbiAgICBwb3NpdGlvblJlZHVjZXIoeyBhbGxCbG9ja3M6IGFsbEJsb2NrcyB9KTtcclxuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdpZHRoU2V0OyBjb2wrKykge1xyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gPSAwOyBpdGVtIDwgaGVpZ2h0U2V0OyBpdGVtKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gKGNvbCA9PSAwKSA/IGl0ZW0gOiAoY29sICogY3VycmVudEhlaWdodCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgbmV3QmxvY2tzQXJyYXlJbmRleCA9IChjb2wgPT0gMCkgPyBpdGVtIDogKGNvbCAqIGhlaWdodFNldCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgb2xkQmxvY2tzQXJyYXlJbmRleCA9IChpdGVtIDwgY3VycmVudEhlaWdodCkgPyBhbGxCbG9ja3Nbcm93SW5kZXhdIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG9sZEJsb2Nrc0FycmF5SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9sZEJsb2Nrc0FycmF5SW5kZXguaW5kZXggPSBuZXdCbG9ja3NBcnJheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbmV3UmVidWlsZEJsb2NrTWFwID0gbmV3UmVidWlsZEJsb2NrTWFwLmNvbmNhdChvbGRCbG9ja3NBcnJheUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlYnVpbGRCbG9ja01hcCA9IG5ld1JlYnVpbGRCbG9ja01hcC5jb25jYXQoY3JlYXRlU2luZ2xlTWFwQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3Q6IG1haW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogbmV3QmxvY2tzQXJyYXlJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb2wgKiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBpdGVtICogbWFpbk9iamVjdC5ibG9ja1NpemUgLy8gKyBvbGRZUmFuZ2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcnRpY2FsQ29tcGVuc2F0aW9uICs9IHZlcnRpY2FsUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBtYWluT2JqZWN0Lm1hcFdpZHRoID0gd2lkdGhTZXQ7XHJcbiAgICBtYWluT2JqZWN0Lm1hcEhlaWdodCA9IGhlaWdodFNldDtcclxuICAgIG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jayA9IG5ld1JlYnVpbGRCbG9ja01hcDtcclxuICAgIHZhciBzaG93ID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrLmZpbmQoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uaW5kZXggPT0gMTAxMTsgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzaG93LCBcInNob3cgcmVzaXplXCIpO1xyXG4gICAgY29uc29sZS5sb2cobWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrWzBdKTtcclxufVxyXG5leHBvcnRzLmNoYW5nZUJsb2NrQXJyYXlTaXplID0gY2hhbmdlQmxvY2tBcnJheVNpemU7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZU1hcEJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yLCBpbmRleCA9IF9hLmluZGV4LCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0ge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgICB3aWR0aDogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogaW5kZXhcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpO1xyXG59XHJcbmZ1bmN0aW9uIG1pbmlNYXBwZXIoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHZhciBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25ZID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlID0gdHJ1ZTtcclxuICAgIHZhciBtYXBTaXplID0gNTAgLyAzO1xyXG4gICAgZmlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBuZXdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBtYXBTaXplV2lkdGggPSBtYWluT2JqZWN0Lm1hcFdpZHRoICogMztcclxuICAgIHZhciBtYXBTaXplSGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQgKiAzO1xyXG4gICAgbmV3TWFwWyd3aWR0aCddID0gbWFwU2l6ZVdpZHRoO1xyXG4gICAgbmV3TWFwWydoZWlnaHQnXSA9IG1hcFNpemVIZWlnaHQ7XHJcbiAgICB2YXIgbWluaU1hcEN0eCA9IG5ld01hcC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNYXApO1xyXG4gICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgY3R4OiBtaW5pTWFwQ3R4LFxyXG4gICAgICAgIGFsbEJsb2NrczogYWxsQmxvY2tzLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWTogY2FtZXJhUG9zaXRpb25ZLFxyXG4gICAgICAgIG1hcFNpemU6IG1hcFNpemUsXHJcbiAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgbWFwU2l6ZUhlaWdodDogbWFwU2l6ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddID09PSAnQ0FOVkFTJykge1xyXG4gICAgICAgICAgICB2YXIgcG9zWCA9IGV2ZW50WydjbGllbnRYJ10gLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXTtcclxuICAgICAgICAgICAgdmFyIHBvc1kgPSBldmVudFsnY2xpZW50WSddIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXTtcclxuICAgICAgICAgICAgc2V0TWFwQXNDbGljayh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHg6IHBvc1ggKiBtYXBTaXplLCB5OiBwb3NZICogbWFwU2l6ZSB9KTtcclxuICAgICAgICAgICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgICAgICAgICBjdHg6IG1pbmlNYXBDdHgsXHJcbiAgICAgICAgICAgICAgICBhbGxCbG9ja3M6IGFsbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25ZOiBjYW1lcmFQb3NpdGlvblksXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplOiBtYXBTaXplLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplSGVpZ2h0OiBtYXBTaXplSGVpZ2h0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5taW5pTWFwcGVyID0gbWluaU1hcHBlcjtcclxuZnVuY3Rpb24gbWFwT2JqZWN0RHJhdyhfYSkge1xyXG4gICAgdmFyIGN0eCA9IF9hLmN0eCwgYWxsQmxvY2tzID0gX2EuYWxsQmxvY2tzLCBjYW1lcmFQb3NpdGlvblkgPSBfYS5jYW1lcmFQb3NpdGlvblksIGNhbWVyYVBvc2l0aW9uWCA9IF9hLmNhbWVyYVBvc2l0aW9uWCwgbWFwU2l6ZSA9IF9hLm1hcFNpemUsIG1hcFNpemVXaWR0aCA9IF9hLm1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCA9IF9hLm1hcFNpemVIZWlnaHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIG1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxCbG9ja3MpO1xyXG4gICAgYWxsQmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAoaXRlbS5kZXRhaWxzLm1hcENvbG9yKSA/IGl0ZW0uZGV0YWlscy5tYXBDb2xvciA6IFwicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjsgLy9pdGVtLmRldGFpbHMubWFwQ29sb3IvL1wicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChpdGVtLngpID8gaXRlbS54IC8gbWFwU2l6ZSA6IDAsIChpdGVtLnlNb3ZlKSA/IGl0ZW0ueSAvIG1hcFNpemUgOiAwLCA1MCAvIG1hcFNpemUsIDUwIC8gbWFwU2l6ZSk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2N0eC5zYXZlKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgMSlcIjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5yZWN0KChjYW1lcmFQb3NpdGlvblggLyBtYXBTaXplKSAqIC0xLCAoY2FtZXJhUG9zaXRpb25ZIC8gbWFwU2l6ZSkgKiAtMSwgd2luZG93LmlubmVyV2lkdGggLyBtYXBTaXplLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyBtYXBTaXplKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vY3R4LnJlc3RvcmUoKVxyXG59XHJcbmZ1bmN0aW9uIHNldE1hcEFzQ2xpY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSB4ICsgYWxsQmxvY2tzWzBdLnhNb3ZlOyAvL01hdGgubWF4KGFsbEJsb2Nrc1swXS54TW92ZSwgeCkgLSBNYXRoLm1pbihhbGxCbG9ja3NbMF0ueE1vdmUsIHgpO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IHkgKyBhbGxCbG9ja3NbMF0ueU1vdmU7IC8vTWF0aC5tYXgoYWxsQmxvY2tzWzBdLnlNb3ZlLCB5KSAtIE1hdGgubWluKGFsbEJsb2Nrc1swXS55TW92ZSwgeSk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJsb2Nrc18yID0gYWxsQmxvY2tzOyBfaSA8IGFsbEJsb2Nrc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9jayA9IGFsbEJsb2Nrc18yW19pXTtcclxuICAgICAgICBibG9jay54TW92ZSAtPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWCk7XHJcbiAgICAgICAgYmxvY2sueU1vdmUgLT0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblkpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4vYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGNvbGxpc2lvbkRldGVjdG9yKF9hKSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gX2Eub2JqZWN0LCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICBpZiAoIW9iamVjdCB8fCAhdGFyZ2V0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRhcmdldC53aWR0aCA9IHBhcnNlSW50KHRhcmdldC53aWR0aCk7XHJcbiAgICB0YXJnZXQuaGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LmhlaWdodCk7XHJcbiAgICBvYmplY3Qud2lkdGggPSBwYXJzZUludChvYmplY3Qud2lkdGgpO1xyXG4gICAgb2JqZWN0LmhlaWdodCA9IHBhcnNlSW50KG9iamVjdC5oZWlnaHQpO1xyXG4gICAgdmFyIHhNaW4gPSBNYXRoLm1pbihvYmplY3QueE1vdmUsIHRhcmdldC54KTtcclxuICAgIHZhciB5TWluID0gTWF0aC5taW4ob2JqZWN0LnlNb3ZlLCB0YXJnZXQueSk7XHJcbiAgICB2YXIgeE1heCA9IE1hdGgubWF4KG9iamVjdC54TW92ZSArIG9iamVjdC53aWR0aCwgdGFyZ2V0LnggKyB0YXJnZXQud2lkdGgpO1xyXG4gICAgdmFyIHlNYXggPSBNYXRoLm1heChvYmplY3QueU1vdmUgKyBvYmplY3QuaGVpZ2h0LCB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQpO1xyXG4gICAgdmFyIHJlc1ggPSB4TWF4IC0geE1pbjtcclxuICAgIHZhciByZXNZID0geU1heCAtIHlNaW47XHJcbiAgICB2YXIgY29sbGlzaW9uID0gKHJlc1ggPiBvYmplY3Qud2lkdGggfHwgcmVzWSA+IG9iamVjdC5oZWlnaHQpID8gZmFsc2UgOiBcImNvbGxpc2lvblwiO1xyXG4gICAgaWYgKGNvbGxpc2lvbilcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmNvbGxpc2lvbkRldGVjdG9yID0gY29sbGlzaW9uRGV0ZWN0b3I7XHJcbmZ1bmN0aW9uIG1vdmVTaW5nbGVCbG9jayhfYSkge1xyXG4gICAgdmFyIHhNb3ZlVmFsdWUgPSBfYS54TW92ZVZhbHVlLCB5TW92ZVZhbHVlID0gX2EueU1vdmVWYWx1ZTtcclxuICAgIGlmICh4TW92ZVZhbHVlKVxyXG4gICAgICAgIHRoaXMueE1vdmUgKz0geE1vdmVWYWx1ZTtcclxuICAgIGlmICh5TW92ZVZhbHVlKVxyXG4gICAgICAgIHRoaXMueU1vdmUgKz0geU1vdmVWYWx1ZTtcclxufVxyXG5leHBvcnRzLm1vdmVTaW5nbGVCbG9jayA9IG1vdmVTaW5nbGVCbG9jaztcclxuZnVuY3Rpb24gbW92ZUFsbFNjZW5lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHhNb3ZlVmFsdWUgPSBfYS54TW92ZVZhbHVlLCB5TW92ZVZhbHVlID0gX2EueU1vdmVWYWx1ZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNpbmdsZUJsb2NrID0gX2JbX2ldO1xyXG4gICAgICAgIHNpbmdsZUJsb2NrLm1vdmVTaW5nbGVCbG9jayh7IHhNb3ZlVmFsdWU6IHhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWU6IHlNb3ZlVmFsdWUgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlQWxsU2NlbmUgPSBtb3ZlQWxsU2NlbmU7XHJcbmZ1bmN0aW9uIGNoYW5nZU9iamVjdE1vZGVsKF9hKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0LCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGlmICghbWFpbk9iamVjdCB8fCAhcmVzdWx0IHx8ICFtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlIHx8IG1haW5PYmplY3QuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjdXJyZW50QmxvY2sgPSBhbGxCbG9ja3NbcmVzdWx0LmluZGV4XTtcclxuICAgIC8vY29uc29sZS5sb2cobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBcIjw8XCIsIGN1cnJlbnRCbG9jaylcclxuICAgIHZhciBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtKTtcclxuICAgIC8vY29uc29sZS5sb2coIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgY3VycmVudEJsb2NrIClcclxuICAgIC8vIGNvbnNvbGUubG9nKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgXCJ8XCIpXHJcbiAgICBpZiAoIW1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIpIHtcclxuICAgICAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnR5cGUgPT09IFwiYmFja2dyb3VuZC13YWxsXCIgJiYgY3VycmVudEJsb2NrLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS53aWR0aCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmhlaWdodCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnggPSBjdXJyZW50QmxvY2sueDtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS55ID0gY3VycmVudEJsb2NrLnk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueE1vdmUgPSBjdXJyZW50QmxvY2sueE1vdmU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueU1vdmUgPSBjdXJyZW50QmxvY2sueU1vdmU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jay5iYWNrZ3JvdW5kVGV4dHVyZSA9IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW07XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmRldGFpbHMgPSBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIgPT09ICdkZXN0cm95ZXInKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCbG9jay5kZXRhaWxzICYmIGN1cnJlbnRCbG9jay5kZXRhaWxzLnZhbHVlT2ZNb3ZlKSB7XHJcbiAgICAgICAgICAgIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEucG9zaXRpb25SZWR1Y2VyKHsgYWxsQmxvY2tzOiBhbGxCbG9ja3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRCbG9jay53aWR0aCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5oZWlnaHQgPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIgPT09ICdyZWRhY3RvckRlY29yYXRpb24nKSB7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICBpZiAoIWN1cnJlbnRCbG9jay5iYWNrZ3JvdW5kVGV4dHVyZSAmJiBjdXJyZW50QmxvY2suZGV0YWlscy50eXBlID09PSAnYmFja2dyb3VuZC13YWxsJykge1xyXG4gICAgICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBcInx8XCIpXHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VPYmplY3RNb2RlbCA9IGNoYW5nZU9iamVjdE1vZGVsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZWxldmF0b3JNb3ZlKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUsIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy50eXBlID09PSAnZWxldmF0b3InKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMuZGV0YWlscy52YWx1ZU9mTW92ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLm1vdmVEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnhNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMueU1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLm1vdmVEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnhNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JWYWx1ZU9mTW92ZSArPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA+PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcywgY3VycmVudFZhbHVlLCBkZWZhdWx0VmFsdWUsIFwiPDw8PFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmVsZXZhdG9yTW92ZSA9IGVsZXZhdG9yTW92ZTtcclxuLypcclxuXHJcblwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImNvbnN0cnVjdG9yVmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudERpcmVjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgIFwiY29uc3RydWN0b3JEaXJlY3Rpb25cIjogdHJ1ZSxcclxuIFwiaWRcIjogXCJlbGV2YXRvcl8xXCIsXHJcbiAgICAgICAgXCJ0ZXh0dXJlXCI6IFwiL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2VsZXZhdG9yLnBuZ1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFbGV2YXRvclwiLFxyXG4gICAgICAgIFwic3BlZWRcIjogNSxcclxuICAgICAgICBcIm1vdmVEaXJlY3Rpb25cIjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgIFwidmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImN1cnJlbnREaXJlY3Rpb25cIjogdHJ1ZSxcclxuICAgICAgICBcInR5cGVcIjogXCJlbGV2YXRvclwiLFxyXG4gICAgICAgIFwiY29sbGlzaW9uXCI6IHRydWVcclxuKi9cclxuZnVuY3Rpb24gYmxvY2tBbmltYXRpb25zKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkgeyBzdGF0ZSA9IHRydWU7IH1cclxuICAgIHRoaXMuZGV0ZWN0RnJhbWUgKz0gMTtcclxuICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5hbmltYXRpb25TdGVwcyA9PSAwICYmIHN0YXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuc1dpZHRoO1xyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHRoaXMuc3gpID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRUZXh0dXJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmJhY2tncm91bmRUZXh0dXJlLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3ggKz0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3gpID49IHRoaXMuYmFja2dyb3VuZFRleHR1cmUucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmRldGFpbHMpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuZGV0YWlscy5hbmltYXRpb25TdGVwcyA9PSAwICYmIHN0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnN4ICs9IHRoaXMuZGV0YWlscy5zV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHRoaXMuZGV0YWlscy5zeCkgPj0gdGhpcy5kZXRhaWxzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5zeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5ibG9ja0FuaW1hdGlvbnMgPSBibG9ja0FuaW1hdGlvbnM7XHJcbmZ1bmN0aW9uIHN0YWlyc01vdmUoKSB7XHJcbn1cclxuZXhwb3J0cy5zdGFpcnNNb3ZlID0gc3RhaXJzTW92ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9wYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXCIpO1xyXG52YXIgZ2xvYmFsVmFyaWFibGVzXzEgPSByZXF1aXJlKFwiLi9nbG9iYWxWYXJpYWJsZXNcIik7XHJcbi8vID09PT09PT09PT09PT0gIERpYWxvZyAgPT09PT09PT09PT09Ly9cclxuZnVuY3Rpb24gY3JlYXRlRGlhbG9nRmllbGRzKCkge1xyXG4gICAgdmFyIGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVPdGhlckRpYWxvZyhfYSkge1xyXG4gICAgdmFyIGFsbERpYWxvZ3MgPSBfYS5hbGxEaWFsb2dzO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaWFsb2dGb3JtLCBmaW5hbERpYWxvZ0Jsb2NrcywgYWxsSW5uZXJCdXR0b25PYmplY3RzLCBpZCwgX2ksIGFsbERpYWxvZ3NfMSwgZGlhbG9nLCBxdWVzdGlvbkl0ZW1zLCBibG9ja0RhdGFfMSwgYmxvY2tEYXRhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsRGlhbG9ncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGlhbG9nQmxvY2tzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGFsbERpYWxvZ3NfMSA9IGFsbERpYWxvZ3M7IF9pIDwgYWxsRGlhbG9nc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cgPSBhbGxEaWFsb2dzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkl0ZW1zID0gbG9hZFF1ZXN0aW9uc1NlY3Rpb24oeyBxdWVzdGlvbkJhc2U6IGRpYWxvZy5xdWVzdGlvbnMsIGN1cnJlbnRJZDogaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsRGlhbG9nQmxvY2tzICs9IFwiPGRpdiBpZD1cXFwiZGlhbG9nLWJsb2NrLXdyYXBwZXItXCIgKyBpZCArIFwiXFxcIiBjbGFzcz1cXFwiZGlhbG9nLWJsb2NrLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgIDxoND5EaWFsb2cgSUQ6IFwiICsgZGlhbG9nLmlkICsgXCJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImRpYWxvZy1pZC1maWVsZC1cIiArIGlkICsgXCJcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgdmFsdWU9XFxcIlwiICsgZGlhbG9nLmlkICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInJlbW92ZS1kaWFsb2ctXCIgKyBpZCArIFwiXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYnV0dG9uLXJlamVjdFxcXCI+ZGVsZXRlIGRpYWxvZzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXF1aXJlbWVudC1pdGVtLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8cD5EaWFsb2cgYWN0aW9ucyA8c3Bhbj5cXFwibm9uZVxcXCI8L3NwYW4+ICA8c3Bhbj5cXFwiZ2l2ZV9vYmplY3RcXFwiPC9zcGFuPiA8c3Bhbj5cXFwicmVxdWlyZV9vYmplY3RcXFwiPC9zcGFuPjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZGlhbG9nLWFjdGlvbi1cIiArIGlkICsgXCJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJkaWFsb2cgYWN0aW9uc1xcXCIgdmFsdWU9XFxcIlwiICsgZGlhbG9nLmFjdGlvbiArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJsZT5cXG4gICAgICAgICAgICAgICAgPGxhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+TnVtYmVyIG9mIHJlcXVpcmUgb2JqZWN0cyB0byBhY3RpdmF0ZSBkaWFsb2c8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm51bWJlci1vZi1lbGVtZW50cy1cIiArIGlkICsgXCJcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIm51bWJlciBvZiByZXF1aXJlIGVsZW1lbnRzXFxcIiB2YWx1ZT1cXFwiXCIgKyAoKGRpYWxvZy5udW1iZXJPZlJlcXVpcmVJdGVtcykgPyBkaWFsb2cubnVtYmVyT2ZSZXF1aXJlSXRlbXMgOiBcIlwiKSArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJsZT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8cD5EaWFsb2cgbWFpbiB0ZXh0PC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwiZGlhbG9nLWJsb2NrLVwiICsgaWQgKyBcIlxcXCIgbmFtZT1cXFwiXFxcIj5cIiArIGRpYWxvZy50ZXh0ICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJcXFwiPlwiICsgKChxdWVzdGlvbkl0ZW1zKSA/IHF1ZXN0aW9uSXRlbXMucXVlc3Rpb25zIDogJycpICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkLW5ldy1xdWVzdGlvbi1cIiArIGlkICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+KyBBZGQgcXVlc3Rpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxocj5cXG4gICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RhdGFfMSA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Jsb2NrV3JhcHBlcjogXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3RvcjogXCJkaWFsb2ctYmxvY2stXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0lkRmllbGQ6IFwiZGlhbG9nLWlkLWZpZWxkLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGREaWFsb2c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGROZXdRdWVzdGlvbjogXCJhZGQtbmV3LXF1ZXN0aW9uLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVEaWFsb2c6IFwicmVtb3ZlLWRpYWxvZy1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQWN0aW9uRmllbGQ6IFwiZGlhbG9nLWFjdGlvbi1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50czogXCJudW1iZXItb2YtZWxlbWVudHMtXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IFwidGVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrSWQ6IGFsbERpYWxvZ3MubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uc0RhdGE6IChxdWVzdGlvbkl0ZW1zKSA/IHF1ZXN0aW9uSXRlbXMuYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gYWxsSW5uZXJCdXR0b25PYmplY3RzLmNvbmNhdChibG9ja0RhdGFfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGlhbG9nQmxvY2tzICs9IFwiPGJ1dHRvbiBpZD1cXFwiYWRkLWRpYWxvZy1cIiArIGlkICsgXCJcXFwiID5cXG4gICAgICAgIDxzcGFuPiArIE5ldyBkaWFsb2c8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCbG9ja1dyYXBwZXI6IFwiZGlhbG9nLWJsb2NrLXdyYXBwZXItXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3RvcjogXCJkaWFsb2ctYmxvY2stXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nSWRGaWVsZDogXCJkaWFsb2ctaWQtZmllbGQtXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRGlhbG9nOiBcImFkZC1kaWFsb2ctXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3UXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZURpYWxvZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrSWQ6IGFsbERpYWxvZ3MubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IGFsbElubmVyQnV0dG9uT2JqZWN0cy5jb25jYXQoYmxvY2tEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dGb3JtLmlubmVySFRNTCA9IGZpbmFsRGlhbG9nQmxvY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHsgZGlhbG9nRm9ybTogZGlhbG9nRm9ybSwgYWxsSW5uZXJCdXR0b25PYmplY3RzOiBhbGxJbm5lckJ1dHRvbk9iamVjdHMgfV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYi5zZW50KCldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU90aGVyRGlhbG9nID0gY3JlYXRlT3RoZXJEaWFsb2c7XHJcbmZ1bmN0aW9uIGxvYWRRdWVzdGlvbnNTZWN0aW9uKF9hKSB7XHJcbiAgICB2YXIgcXVlc3Rpb25CYXNlID0gX2EucXVlc3Rpb25CYXNlLCBjdXJyZW50SWQgPSBfYS5jdXJyZW50SWQ7XHJcbiAgICBpZiAoIXF1ZXN0aW9uQmFzZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgYWxsUXVlc3Rpb25zQmxvY2sgPSAnJztcclxuICAgIHZhciBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgPSBbXTtcclxuICAgIHZhciBxdWVzdGlvbnNJZCA9IDA7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHF1ZXN0aW9uQmFzZV8xID0gcXVlc3Rpb25CYXNlOyBfaSA8IHF1ZXN0aW9uQmFzZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHF1ZXN0aW9uQmFzZV8xW19pXTtcclxuICAgICAgICBhbGxRdWVzdGlvbnNCbG9jayArPSBcIjxkaXYgY2xhc3M9XFxcInF1ZXN0aW9uLXdyYXBwZXJcXFwiIGlkPVxcXCJzaW5nbGUtcXVlc3Rpb25CYXNlLWJsb2NrLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiXFxcIj5cXG4gICAgICAgIDxwPlJlbGF0ZWQgSWQgZGlhbG9nPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicmVsYXRlZC1xdWVzdGlvbi1pZC1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiXCIgKyBxdWVzdGlvbi5pZCArIFwiXFxcIiBjbGFzcz1cXFwicmVsYXRlZC1pZC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPSdxdWVzdGlvbi10ZXh0LVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiJz5cIiArIHF1ZXN0aW9uLnRleHQgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwicmVtb3ZlLXF1ZXN0aW9uLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiXFxcIiBjbGFzcz1cXFwicmlnaHQtc2lkZS1idXR0b25cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYnV0dG9uLXJlamVjdFxcXCI+LSByZW1vdmUtcXVlc3Rpb248L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICB2YXIgYmxvY2tEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgICAgICBkaWFsb2dJZDogY3VycmVudElkLFxyXG4gICAgICAgICAgICBxdWVzdGlvbklkOiBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgcmVsYXRlZFF1ZXN0aW9uSWQ6IFwicmVsYXRlZC1xdWVzdGlvbi1pZC1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uV3JhcHBlcjogXCJzaW5nbGUtcXVlc3Rpb25CYXNlLWJsb2NrLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3RvcjogXCJxdWVzdGlvbi10ZXh0LVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgcmVtb3ZlUXVlc3Rpb246IFwicmVtb3ZlLXF1ZXN0aW9uLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyA9IGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cy5jb25jYXQoYmxvY2tEYXRhKTtcclxuICAgICAgICBxdWVzdGlvbnNJZCArPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcXVlc3Rpb25zOiBhbGxRdWVzdGlvbnNCbG9jaywgYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzOiBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgfTtcclxufVxyXG4vLyAgYWRkIG5ldyBlbGVtZW50c1xyXG5mdW5jdGlvbiBkaWFsb2dBbnN3ZXJCdXR0b24oX2EpIHtcclxuICAgIHZhciBhbGxJbm5lckJ1dHRvbk9iamVjdHMgPSBfYS5hbGxJbm5lckJ1dHRvbk9iamVjdHMsIGFsbE90aGVyc0RpYWxvZ3MgPSBfYS5hbGxPdGhlcnNEaWFsb2dzLCBibG9ja0RldGFpbHMgPSBfYS5ibG9ja0RldGFpbHMsIGN1cnJlbnREZXNjcmlwdGlvbklkID0gX2EuY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyLCBpdGVtRGF0YSA9IF9hLml0ZW1EYXRhO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfbG9vcF8xLCBfaSwgYWxsSW5uZXJCdXR0b25PYmplY3RzXzEsIGJ1dHRvbjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGlmICghYWxsSW5uZXJCdXR0b25PYmplY3RzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGROZXdRdWVzdGlvbiA9IChidXR0b24uYWRkTmV3UXVlc3Rpb24pID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uYWRkTmV3UXVlc3Rpb24pIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVEaWFsb2cgPSAoYnV0dG9uLnJlbW92ZURpYWxvZykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5yZW1vdmVEaWFsb2cpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBhZGREaWFsb2cgPSAoYnV0dG9uLmFkZERpYWxvZykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5hZGREaWFsb2cpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dBY3Rpb25GaWVsZCA9IChidXR0b24uZGlhbG9nQWN0aW9uRmllbGQpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uZGlhbG9nQWN0aW9uRmllbGQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dJZEZpZWxkID0gKGJ1dHRvbi5kaWFsb2dJZEZpZWxkKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmRpYWxvZ0lkRmllbGQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzID0gKGJ1dHRvbi5udW1iZXJPZkVsZW1lbnRzKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLm51bWJlck9mRWxlbWVudHMpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0QXJlYVNlbGVjdG9yID0gKGJ1dHRvbi50ZXh0QXJlYVNlbGVjdG9yKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLnRleHRBcmVhU2VsZWN0b3IpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChhZGROZXdRdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5ld1F1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGlhbG9nQmxvY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnV0dG9uLmxhc3RCbG9ja0lkICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLnF1ZXN0aW9ucyA9IGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLnF1ZXN0aW9ucy5jb25jYXQobmV3RGlhbG9nQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaWFsb2cucXVlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZURpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzLnNwbGljZShidXR0b24uaWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlhbG9nRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGlhbG9nQmxvY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnV0dG9uLmxhc3RCbG9ja0lkICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IGZpZWxkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMgPSBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMuY29uY2F0KG5ld0RpYWxvZ0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRleHRBcmVhU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0udGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nQWN0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dBY3Rpb25GaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLmFjdGlvbiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nSWRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0lkRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5pZCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLm51bWJlck9mRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0ubnVtYmVyT2ZSZXF1aXJlSXRlbXMgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8vIHNhdmUgdGV4dFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhidXR0b24ucXVlc3Rpb25zRGF0YSlcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24ucXVlc3Rpb25zRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVF1ZXN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uc0RhdGE6IGJ1dHRvbi5xdWVzdGlvbnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHM6IGFsbElubmVyQnV0dG9uT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsT3RoZXJzRGlhbG9nczogYWxsT3RoZXJzRGlhbG9ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAoX2kgPSAwLCBhbGxJbm5lckJ1dHRvbk9iamVjdHNfMSA9IGFsbElubmVyQnV0dG9uT2JqZWN0czsgX2kgPCBhbGxJbm5lckJ1dHRvbk9iamVjdHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiA9IGFsbElubmVyQnV0dG9uT2JqZWN0c18xW19pXTtcclxuICAgICAgICAgICAgICAgIF9sb29wXzEoYnV0dG9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmRpYWxvZ0Fuc3dlckJ1dHRvbiA9IGRpYWxvZ0Fuc3dlckJ1dHRvbjtcclxuZnVuY3Rpb24gcmVtb3ZlUXVlc3Rpb25zKF9hKSB7XHJcbiAgICB2YXIgcXVlc3Rpb25zRGF0YSA9IF9hLnF1ZXN0aW9uc0RhdGEsIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IF9hLmFsbElubmVyQnV0dG9uT2JqZWN0cywgYWxsT3RoZXJzRGlhbG9ncyA9IF9hLmFsbE90aGVyc0RpYWxvZ3MsIGJsb2NrRGV0YWlscyA9IF9hLmJsb2NrRGV0YWlscywgY3VycmVudERlc2NyaXB0aW9uSWQgPSBfYS5jdXJyZW50RGVzY3JpcHRpb25JZCwgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIGl0ZW1EYXRhID0gX2EuaXRlbURhdGE7XHJcbiAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChhbnN3ZXIpIHtcclxuICAgICAgICB2YXIgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGFuc3dlci5yZW1vdmVRdWVzdGlvbik7XHJcbiAgICAgICAgdmFyIHRleHRBcmVhU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgYW5zd2VyLnRleHRBcmVhU2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciByZWxhdGVkUXVlc3Rpb25JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBhbnN3ZXIucmVsYXRlZFF1ZXN0aW9uSWQpO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zLnNwbGljZShhbnN3ZXIucXVlc3Rpb25JZCwgMSk7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGV4dEFyZWFTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1thbnN3ZXIuZGlhbG9nSWRdLnF1ZXN0aW9uc1thbnN3ZXIucXVlc3Rpb25JZF0udGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRlZFF1ZXN0aW9uSWQpIHtcclxuICAgICAgICAgICAgcmVsYXRlZFF1ZXN0aW9uSWQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS5pZCwgJ3x8fCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkLCB0aGlzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS5pZCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHF1ZXN0aW9uc0RhdGFfMSA9IHF1ZXN0aW9uc0RhdGE7IF9pIDwgcXVlc3Rpb25zRGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBxdWVzdGlvbnNEYXRhXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzIoYW5zd2VyKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dGb3JtKF9hKSB7XHJcbiAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2EuYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZCA9IF9hLmN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lcjtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmFjZVBpY3R1cmUsIGlubmVyVGV4dCwgaXRlbURhdGEsIGFsbE90aGVyc0RpYWxvZ3MsIG1haW5EaWFsb2dXcmFwcGVyLCBvdGhlckRpYWxvZ3M7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZVBpY3R1cmUgPSAoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUpID8gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUgOiBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8ZGl2IGlkPVxcXCJtYWluLWRpYWxvZy13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICA8aDM+RGlhbG9nPC9oMz5cXG4gICAgICAgICAgICA8cD5DcmVhdGUgUGVyc29uIGRpYWxvZzwvcD5cXG4gICAgICAgICAgICA8ZGl2PlwiICsgKChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSkgPyAnUGljdHVyZSBpcyBzZXQnIDogJ1lvdSBtdXN0IHNhdmUgdGhlIHBpY3R1cmUgZmlyc3QnKSArIFwiPC9kaXY+XFxuICAgICAgICAgICAgPGltZyB3aWR0aD1cXFwiMTAwXFxcIiBpZD1cIiArICgnZGlhbG9nLWZhY2UtcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCJcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgZmFjZVBpY3R1cmUgKyBcIlxcXCI+XFxuXFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwicHJldmlldy1kaWFsb2ctZmFjZVxcXCIgZGF0YS10YXJnZXQ9J3ByZXZpZXctZGlhbG9nLWZhY2UnPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTEucG5nXFxcIiBzZWxlY3RlZD1cXFwic2VsZWN0ZWRcXFwiPnByb2Zlc3Nvcjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTMucG5nXFxcIj5vbGQgbWFuPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNC5wbmdcXFwiPm1hbiAxPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNy5wbmdcXFwiPm1hbiAyPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtOC5wbmdcXFwiPk9mZmljZXI8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS0yLnBuZ1xcXCI+U29sZGllcjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTUucG5nXFxcIj5Sb2JvdCByZWQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS02LnBuZ1xcXCI+WWVsbG93IHJlZDwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcblxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibnBjLW5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArICgoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTlBDIG5hbWUnKSArIFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwiXCIgKyAoKGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5uYW1lKSA/IGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5uYW1lIDogJ05QQyBuYW1lJykgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1kaWFsb2ctYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgbmFtZSBhbmQgcGljdHVyZTwvYnV0dG9uPiA8aHI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxsLW90aGVycy1kaWFsb2dzXFxcIiBpZD1cXFwiYWxsLW90aGVycy1kaWFsb2dzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtb3RoZXJzLWRpYWxvZ3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkRpYWxvZ1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGlhbG9nLXdyYXBwZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3JlYXRlT3RoZXJEaWFsb2coeyBhbGxEaWFsb2dzOiBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyRGlhbG9ncyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW90aGVyRGlhbG9ncykgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYWxsT3RoZXJzRGlhbG9ncy5hcHBlbmRDaGlsZChvdGhlckRpYWxvZ3MuZGlhbG9nRm9ybSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaWFsb2dBbnN3ZXJCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzOiBvdGhlckRpYWxvZ3MuYWxsSW5uZXJCdXR0b25PYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsT3RoZXJzRGlhbG9nczogYWxsT3RoZXJzRGlhbG9ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZURpYWxvZ0Zvcm0gPSBjcmVhdGVEaWFsb2dGb3JtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX19IT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMwMCc7XHJcbmV4cG9ydHMuX19IT1NUID0gX19IT1NUO1xyXG52YXIgX19CTE9DS19DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItYmxvY2tzJztcclxuZXhwb3J0cy5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1iYWNrZ3JvdW5kLWJsb2Nrcyc7XHJcbmV4cG9ydHMuX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItY2hhcmFjdGVycyc7XHJcbmV4cG9ydHMuX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMID0gX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19FTkVNWV9ERVRBSUxTX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ncm91bmQtZW5lbXknO1xyXG52YXIgX19FTkVNWV9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItZ3JvdW5kLWVuZW15LXJlZGFjdG9yJztcclxuZXhwb3J0cy5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCA9IF9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19NQVBfREFUQV9VUkwgPSAnL2FwcC9nZXQtYWxsLW1hcHMnO1xyXG5leHBvcnRzLl9fTUFQX0RBVEFfVVJMID0gX19NQVBfREFUQV9VUkw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIHJlcXVlc3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBpbml0TWFpbkVuZ2luZShfYSkge1xyXG4gICAgdmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSBfYS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFwTmFtZSwgYmxvY2tTaXplLCBkZWZhdWx0V2lkdGgsIGRlZmF1bHRIZWlnaHQsIG1heEhvcml6b250YWxCbG9ja3MsIG1heFZlcnRpY2FsQmxvY2tzLCByZWRhY3RvckRhdGEsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUgPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddLm5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NpemUgPSA1MCwgZGVmYXVsdFdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIGRlZmF1bHRIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIG1heEhvcml6b250YWxCbG9ja3MgPSAzMDAsIG1heFZlcnRpY2FsQmxvY2tzID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hcFNpemVUb0Zvcm0oeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcE1vdmVTcGVlZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEhlaWdodDogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGVmYXVsdFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERlZmF1bHRIZWlnaHQ6IGRlZmF1bHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhvcml6b250YWxCbG9ja3M6IG1heEhvcml6b250YWxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZlcnRpY2FsQmxvY2tzOiBtYXhWZXJ0aWNhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBibG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlZGFjdG9yQmxvY2s6IGZpbGxCbG9ja01hcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEJsb2NrczogZGVmYXVsdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxCbG9jazogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogYmxvY2tTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IuYmxvY2tEYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYi5iYWNrZ3JvdW5kRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5jaGFyYWN0ZXJzRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2IuZW5lbXlEYXRhYmFzZSA9IF9jLnNlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICByZWRhY3RvckRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZWRhY3RvckRhdGEuYmFja2dyb3VuZERhdGFiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgTWFpbkdhbWVDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgcmVkYWN0b3JEYXRhKSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmluaXRNYWluRW5naW5lID0gaW5pdE1haW5FbmdpbmU7XHJcbmZ1bmN0aW9uIHNldE1hcFNpemVUb0Zvcm0oX2EpIHtcclxuICAgIHZhciB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgZm9ybVsnaG9yaXpvbnRhbEJsb2NrJ10udmFsdWUgPSB3aWR0aDtcclxuICAgIGZvcm1bJ3ZlcnRpY2FsQmxvY2snXS52YWx1ZSA9IGhlaWdodDtcclxufVxyXG5leHBvcnRzLnNldE1hcFNpemVUb0Zvcm0gPSBzZXRNYXBTaXplVG9Gb3JtO1xyXG5mdW5jdGlvbiBmaWxsQmxvY2tNYXAoX2EpIHtcclxuICAgIHZhciBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvciwgaG9yaXpvbnRhbEJsb2NrcyA9IF9hLmhvcml6b250YWxCbG9ja3MsIHZlcnRpY2FsQmxvY2sgPSBfYS52ZXJ0aWNhbEJsb2NrLCBibG9ja1NpemUgPSBfYS5ibG9ja1NpemU7XHJcbiAgICB2YXIgYmxvY2tBcnJheSA9IFtdO1xyXG4gICAgdmFyIGhvcml6b250YWxFbmRzID0gMDtcclxuICAgIHZhciB2ZXJ0aWNhbEVuZHMgPSAwO1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IGJsb2NrU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IGJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogMFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9yaXpvbnRhbEJsb2NrcyAqIHZlcnRpY2FsQmxvY2s7IGkrKykge1xyXG4gICAgICAgIGJsb2NrRGF0YS55ID0gdmVydGljYWxFbmRzO1xyXG4gICAgICAgIGJsb2NrRGF0YS54ID0gaG9yaXpvbnRhbEVuZHM7XHJcbiAgICAgICAgYmxvY2tEYXRhLmluZGV4ID0gaTtcclxuICAgICAgICB2ZXJ0aWNhbEVuZHMgPSAodmVydGljYWxFbmRzIDwgKCh2ZXJ0aWNhbEJsb2NrIC0gMSkgKiBibG9ja1NpemUpKSA/IHZlcnRpY2FsRW5kcyArIGJsb2NrU2l6ZSA6IDA7XHJcbiAgICAgICAgaG9yaXpvbnRhbEVuZHMgPSAodmVydGljYWxFbmRzID09IDApID8gaG9yaXpvbnRhbEVuZHMgKyBibG9ja1NpemUgOiBob3Jpem9udGFsRW5kcztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKClcclxuICAgICAgICBibG9ja0FycmF5ID0gYmxvY2tBcnJheS5jb25jYXQobmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpKTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coQmxvY2tDb25zdHJ1Y3RvciwgYmxvY2tBcnJheSlcclxuICAgIHJldHVybiBibG9ja0FycmF5O1xyXG59XHJcbmV4cG9ydHMuZmlsbEJsb2NrTWFwID0gZmlsbEJsb2NrTWFwO1xyXG5mdW5jdGlvbiBiYWNrVG9PYmplY3QoX2EpIHtcclxuICAgIHZhciBkYXRhID0gX2EuZGF0YSwgY29uc3RydWN0b3IgPSBfYS5jb25zdHJ1Y3RvcjtcclxuICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yKTtcclxuICAgIHZhciBmaW5hbE9iamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShyZXMucHJvdG90eXBlKSwgZGF0YSk7XHJcbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XHJcbn1cclxuZXhwb3J0cy5iYWNrVG9PYmplY3QgPSBiYWNrVG9PYmplY3Q7XHJcbmZ1bmN0aW9uIHJlbmRlckJsb2NrQm94KF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy55TW92ZSA+IDAgLSAxMDAgJiYgdGhpcy54TW92ZSA+IDAgLSAxMDAgJiYgdGhpcy55TW92ZSA8IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMCAmJiB0aGlzLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggKyAxMDApKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRldGFpbHMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5jcmVhdGVGcmFtZS5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdmlld18xLmJhY2tncm91bmRSZW5kZXIuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2aWV3XzEuY3JlYXRlQmxvY2tQaWN0dXJlLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyQmxvY2tCb3ggPSByZW5kZXJCbG9ja0JveDtcclxuZnVuY3Rpb24gYmxvY2tBbmltYXRpb25SZW5kZXIoX2EpIHtcclxuICAgIHZhciBibG9jayA9IF9hLmJsb2NrO1xyXG4gICAgaWYgKHRoaXMueU1vdmUgPiAwIC0gMTAwICYmIHRoaXMueE1vdmUgPiAwIC0gMTAwICYmIHRoaXMueU1vdmUgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDAgJiYgdGhpcy54TW92ZSA8IHdpbmRvdy5pbm5lcldpZHRoICsgMTAwKSB7XHJcbiAgICAgICAgYmxvY2suYmxvY2tBbmltYXRpb25zKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5ibG9ja0FuaW1hdGlvblJlbmRlciA9IGJsb2NrQW5pbWF0aW9uUmVuZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlc18xID0gcmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpO1xyXG52YXIgZGlhbG9nRm9ybU1vZHVsZV8xID0gcmVxdWlyZShcIi4vZGlhbG9nRm9ybU1vZHVsZVwiKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGVJbnB1dChfYSkge1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyLCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrRGV0YWlscywgaW5uZXJUZXh0LCBpdGVtRGF0YSwgY3VycmVudERlc2NyaXB0aW9uSWQsIGJsb2NrQWxlcnRNZXNzYWdlLCBibG9ja1ByZXZpZXdJbWFnZSwgbG9jYWxQaWN0dXJlLCBtYWluUGljdHVyZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMgPSB0YXJnZXQuZGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWFsZXJ0LW1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1wcmV2aWV3LWltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBcImNvbGxpc2lvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0dXJlXCI6IFwiL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Jsb2NrLTMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzRGVzdHJveVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBCbG9ja3Mgc2V0dGluZ3MgJiBQYXJhbWV0ZXJzICA9PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIlxcbiAgICAgICAgPGgxPkJsb2NrIHNpemU8L2gxPlxcbiAgICAgICAgPGgzPkJsb2NrIHdpZHRoPC9oMz5cXG4gICAgICAgICAgICA8cD5TaXplIG9mIGJsb2NrIHdpZHRoIGluIHBpeGVsczwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBtaW49XFxcIjFcXFwiIG1heD1cXFwiMjAwXFxcIiBpZD1cIiArICgnd2lkdGgtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQud2lkdGgpID8gdGFyZ2V0LndpZHRoIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtd2lkdGgtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgd2lkdGg8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8aDM+QmxvY2sgaGVpZ2h0PC9oMz5cXG4gICAgICAgICAgICA8cD5TaXplIG9mIGJsb2NrIGhlaWdodCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjIwMFxcXCIgaWQ9XCIgKyAoJ2hlaWdodC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5oZWlnaHQpID8gdGFyZ2V0LmhlaWdodCA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWhlaWdodC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBoZWlnaHQ8L2J1dHRvbj5cXG4gICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Jsb2NrLXdpZHRoLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiXFxuICAgICAgICAgICAgPGgxPkJsb2NrIFBvc2l0aW9uPC9oMT5cXG4gICAgICAgICAgICA8aDM+QmxvY2sgWDwvaDM+XFxuICAgICAgICAgICAgPHA+WCBwb3NpdGlvbiBvZiBibG9jazwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBtaW49XFxcIi01MFxcXCIgbWF4PVxcXCI1MFxcXCIgaWQ9XCIgKyAoJ3gtcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LmJsb2NrUmVsYXRpdmVYUG9zKSA/IHRhcmdldC5ibG9ja1JlbGF0aXZlWFBvcyA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXgtcG9zLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFggUG9zaXRpb248L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8aDM+QmxvY2sgWTwvaDM+XFxuICAgICAgICAgICAgPHA+WSBwb3NpdGlvbiBvZiBibG9jazwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBtaW49XFxcIi01MFxcXCIgbWF4PVxcXCI1MFxcXCIgaWQ9XCIgKyAoJ3ktcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LmJsb2NrUmVsYXRpdmVZUG9zKSA/IHRhcmdldC5ibG9ja1JlbGF0aXZlWVBvcyA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXktcG9zLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFkgUG9zaXRpb248L2J1dHRvbj5cXG4gICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Jsb2NrLXgtcG9zLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvY2tEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnR5cGUgPT09ICdlbGV2YXRvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMT5FbGV2YXRvciByYW5nZTwvaDE+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImVsZXZhdG9yLXJhbmdlLVwiICsgY3VycmVudERlc2NyaXB0aW9uSWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjEwMFxcXCIgdmFsdWU9XCIgKyBibG9ja0RldGFpbHMudmFsdWVPZk1vdmUgKyBcIj5cXG4gICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtZWxldmF0b3ItcmFuZ2UtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgRWxldmF0b3IgUmFuZ2U8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZU9mTW92ZVwiOiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudFZhbHVlT2ZNb3ZlXCI6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlXCI6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgRGVzY3JpcHRpb24gID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+RGVzY3JpcHRpb248L2gzPlxcbiAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdkZXNjcmlwdGlvbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgYmxvY2tEZXRhaWxzLmRlc2NyaXB0aW9uICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1kZXNjcmlwdGlvbi1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBEZXNjcmlwdGlvbjwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgcnVsZXJzICYgdGlwcyAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5ydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlRpcHM8L2gzPlxcbiAgICAgICAgICAgIDxwPkEgdGlwcyBob3cgdG8gdXMgdGhpcyBvYmplY3RzLCBpdCBjb3VsZCBiZSBhIHBhcnQgb2Ygc29tZSBtZXNzYWdlLCBcXFwiVXNlICogIHRvIHN0YXJ0IG5ldyBsaW5lXFxcIjwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3RpcHMtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS10aXBzLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFRpcHM8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi10aXBzLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlN1Y2Nlc3MgVGV4dDwvaDM+XFxuICAgICAgICAgICAgPHA+RGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiB5b3UgZG8gZXZlcnl0aGluZyB3cml0ZTogY29sbGVjdCBkYXRlL2tleSwgYnJpbmcgZGF0YS9rZXkgPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnN1Y2Nlc3NUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5zdWNjZXNzVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBUZXh0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tc3VjY2Vzc1RleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+UmVxdWlyZSBUZXh0PC9oMz5cXG4gICAgICAgICAgICA8cD5EaXNwbGF5IGEgbWVzc2FnZSBkZXNjcmliZSBzb21lIFJlcXVpcmVtZW50IGZvciB0aGlzIG9iamVjdCB0byB3b3JrPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmVUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIFRleHQ8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlJlcXVpcmUgT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5SZXF1aXJlIG1lc3NhZ2UsIGRpc3BsYXkgb2JqZWN0IG5lZWRzIGZvciB0aGlzIGJsb2NrIHRvIGV2ZXJ5dGhpbmcgd29yayBmaW5lIFxcbiAgICAgICAgICAgIDxzcGFuPmNvbXB1dGVyX2RhdGE8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+Ymx1ZV9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmdyZWVuX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+eWVsbG93X2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cmVkX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cG93ZXJfY2VsbDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbmVteV9oZWxtZXQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+ZW5lbXlfZGV0YWlsczwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5tZWRfa2l0PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmxhcHRvcF93aXRoX2RhdGE8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+dG9vbHNfY2FzZTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdyZXF1aXJlLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtcmVxdWlyZS1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIE9iamVjdDwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUGljdHVyZSA9IChibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyBibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5QaWN0dXJlID0gKGJsb2NrRGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIDogZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBsb2NhbFBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPkNvbnRhaW4gT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5PYmplY3Qgb3IgZGF0YSBpbnNpZGUgdGhpcyBvYmplY3QgcHJlc3MgJ0UnIGJ1dHRvbiB0byBjb2xsZWN0IFxcbiBleGl0ICAtIHNwZWNpYWwgb2JqZWN0IHRvIGZpbmlzaCB0aGUgbGV2ZWxcXG4gICAgICAgICAgICA8c3Bhbj5jb21wdXRlcl9kYXRhPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmJsdWVfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5ncmVlbl9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnllbGxvd19jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnJlZF9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmV4aXQ8L3NwYW4+ICBleGl0ICAtIGVuZCB0aGUgbGV2ZWxcXG4gICAgICAgICAgICA8c3Bhbj5wb3dlcl9jZWxsPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmVuZW15X2hlbG1ldDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbmVteV9kZXRhaWxzPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPm1lZF9raXQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+bGFwdG9wX3dpdGhfZGF0YTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj50b29sc19jYXNlPC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLmNvbnRhaW4pID8gYmxvY2tEZXRhaWxzLnJ1bGVzLmNvbnRhaW4gOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGltZyB3aWR0aD1cXFwiMTAwXFxcIiBpZD1cIiArICgnY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBtYWluUGljdHVyZSArIFwiXFxcIj5cXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJwcmV2aWV3LWNvbnRhaW4tb2JqZWN0XFxcIiBkYXRhLXRhcmdldD0nc2VsZWN0LXByZXZpZXctYnRuJz5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY29tcHV0ZXItZGF0YS5wbmdcXFwiPkNvbXB1dGVyIGRhdGE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicmVkLWNhcmQucG5nXFxcIj5SZWQgY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJibHVlLWNhcmQucG5nXFxcIj5CbHVlIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZ3JlZW4tY2FyZC5wbmdcXFwiPkdyZWVuIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwieWVsbG93LWNhcmQucG5nXFxcIj5ZZWxsb3cgY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJwb3dlci1jZWxsLnBuZ1xcXCI+UG93ZXIgQ2VsbDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJtZWQta2l0LnBuZ1xcXCI+TWVkIGtpdDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJsYXB0b3AucG5nXFxcIj5MYXB0b3AgY2FzZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ0b29scy1jYXNlLnBuZ1xcXCI+VG9vbHMgY2FzZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJFbmVteS1oZWFkLnBuZ1xcXCI+RW5lbXkgaGVsbWV0IEE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZW5lbXktZGV0YWlscy5wbmdcXFwiPkVuZW15IGRldGFpbCAxPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1jb250YWluLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tcmVxdWlyZVRleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFibG9ja0RldGFpbHMuZGlhbG9nKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaWFsb2dGb3JtTW9kdWxlXzEuY3JlYXRlRGlhbG9nRm9ybSh7IGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXIgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5pbm5lck9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlLXNpemVcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkUmVzdWx0cywgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtZWxldmF0b3ItcmFuZ2UtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS13aWR0aC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWhlaWdodC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXgtcG9zLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUteS1wb3MtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1kZXNjcmlwdGlvbi1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS10aXBzLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLXRleHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtcmVxdWlyZS1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1jb250YWluLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDIxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWRpYWxvZy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAyM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3ZhbHVlT2ZNb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2VsZXZhdG9yLXJhbmdlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3dpZHRoIGlzIHNldCcgOiAnIHNhdmUgd2lkdGggZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd3aWR0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyN3aWR0aC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2hlaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNoZWlnaHQtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3dpZHRoIGlzIHNldCcgOiAnIHNhdmUgd2lkdGggZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdibG9ja1JlbGF0aXZlWFBvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyN4LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdibG9ja1JlbGF0aXZlWVBvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyN5LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3dpZHRoIGlzIHNldCcgOiAnIHNhdmUgd2lkdGggZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2Rlc2NyaXB0aW9uLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGlwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyN0aXBzLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd0aXBzIGZpZWxkJyA6ICcgc2F2ZSB0aXBzIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3N1Y2Nlc3NUZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3N1Y2Nlc3NUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3JlcXVpcmUgdGV4dCBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSB0ZXh0IGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3JlcXVpcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAncmVxdWlyZSBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2NvbnRhaW4gb2JqZWN0JyA6ICcgc2F2ZSBjb250YWluIG9iamVjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNjb250YWluLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5kaWFsb2cuZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjbnBjLW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmZpZWxkUmVzdWx0cyA9IGF3YWl0IGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjZGVmYXVsdC1kaWFsb2ctdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypmaWVsZFJlc3VsdHMgPSBhd2FpdCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNkZWZhdWx0LWRpYWxvZy10ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdjb250YWluIG9iamVjdCcgOiAnIHNhdmUgY29udGFpbiBvYmplY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IChmaWVsZFJlc3VsdHMpID8gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIiA+IFN1Y2Nlc3NmdWxseSBzYXZlZCAnXCIgKyBmaWVsZE5hbWUgKyBcIicgPC9wPlwiIDogXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1lcnJvclxcXCIgPlRoZXJlIGlzIGEgcHJvYmxlbSBpbiAnXCIgKyBmaWVsZE5hbWUgKyBcIicgaSBjYW4ndCBzYXZlPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgZGF0YUNoZWNrXzEsIHJlcXVpcmVkUHJldmlld1BpY18xLCBwaWNfMSwgbGlua18xLCBfYiwgZGF0YUZhY2UsIGZhY2VMaW5rLCBfYywgcGljdHVyZSwgZGF0YUNoZWNrLCByZXF1aXJlZFByZXZpZXdQaWMsIHBpYywgbGluaywgX2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QtcHJldmlldy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmV2aWV3LWRpYWxvZy1mYWNlJzogcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnb2JqZWN0UGljdHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNwcmV2aWV3LXJlcXVpcmUtb2JqZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDaGVja18xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY29udGFpbi1vYmplY3QnKVsndmFsdWUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUHJldmlld1BpY18xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljXzEgPSAodGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIDogJ2NvbXB1dGVyLWRhdGEucG5nJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtfMSA9IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvaW5uZXItb2JqZWN0cy8nICsgZGF0YUNoZWNrXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgPSBsaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSB0YXJnZXQuZGV0YWlscy5ydWxlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyZWF0ZUJhc2U2NEVuY29kaW5nUGljdHVyZSh7IHBpY3R1cmVMaW5rOiBsaW5rXzEsIHRhcmdldE9iamVjdDogdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA9IGxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5vYmplY3RQaWN0dXJlID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljXzFbJ3NyYyddID0gdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZTsgLy8gbGluazsgLy9jb21wdXRlci1kYXRhLnBuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctZGlhbG9nLWZhY2UnKVsndmFsdWUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VMaW5rID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9lbmVteU9iamVjdC9hdmF0YXIvJyArIGRhdGFGYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjcmVhdGVCYXNlNjRFbmNvZGluZ1BpY3R1cmUoeyBwaWN0dXJlTGluazogZmFjZUxpbmssIHRhcmdldE9iamVjdDogYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5mYWNlUGljdHVyZUFic29sdXRlID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctZmFjZS1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlWydzcmMnXSA9IGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZUFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY29udGFpbi1vYmplY3QnKVsndmFsdWUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUHJldmlld1BpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpYyA9ICh0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluayA9IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvaW5uZXItb2JqZWN0cy8nICsgZGF0YUNoZWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2QgPSB0YXJnZXQuZGV0YWlscy5ydWxlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyZWF0ZUJhc2U2NEVuY29kaW5nUGljdHVyZSh7IHBpY3R1cmVMaW5rOiBsaW5rLCB0YXJnZXRPYmplY3Q6IHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZC5vYmplY3RQaWN0dXJlID0gX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNbJ3NyYyddID0gdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZTsgLy9jb21wdXRlci1kYXRhLnBuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2VuZXJhdGVJbnB1dCA9IGdlbmVyYXRlSW5wdXQ7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2U2NEVuY29kaW5nUGljdHVyZShfYSkge1xyXG4gICAgdmFyIHBpY3R1cmVMaW5rID0gX2EucGljdHVyZUxpbmssIHRhcmdldE9iamVjdCA9IF9hLnRhcmdldE9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGlmICghcGljdHVyZUxpbmspXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc3BvbnNlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSA1OTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNTg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gcGljdHVyZUxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFVUkwsIGdldFBpY3R1cmVCYXNlLCBwaWN0dXJlQmFzZVVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2FudmFzLnRvRGF0YVVSTCgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkwgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBpY3R1cmVCYXNlID0gZGF0YVVSTC5yZXBsYWNlKC9eZGF0YTppbWFnZVxcLyhwbmd8anBnKTtiYXNlNjQsLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVCYXNlVXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgZ2V0UGljdHVyZUJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGljdHVyZUJhc2VVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE9iamVjdCA9IHBpY3R1cmVCYXNlVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UodGFyZ2V0T2JqZWN0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9O1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW50IHJlYmFzZScpO1xyXG4gICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlRGF0YUluQmxvY2soX2EpIHtcclxuICAgIHZhciBrZXkgPSBfYS5rZXksIGZpZWxkU2VsZWN0b3IgPSBfYS5maWVsZFNlbGVjdG9yLCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrQWxlcnRNZXNzYWdlLCBjdXJyZW50RmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stYWxlcnQtbWVzc2FnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmllbGRTZWxlY3RvcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWVsZCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWVsZC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBcIkludmFsaWQgVmFsdWUgb2YgXCIgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gKGN1cnJlbnRGaWVsZC52YWx1ZSkgPyBjdXJyZW50RmllbGQudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoY3VycmVudEZpZWxkLnZhbHVlICYmIHRhcmdldFtrZXldICYmIGtleSAmJiBmaWVsZFNlbGVjdG9yKSA/IHRydWUgOiBmYWxzZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbm5lckRhdGEoX2EpIHtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgdmFyIGJsb2NrRGV0YWlscyA9IHRhcmdldC5kZXRhaWxzO1xyXG4gICAgdmFyIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UgPSAoYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddKSA/IGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSA6IGJsb2NrRGV0YWlsc1sndGV4dHVyZSddOyAvLyBwcmV2aWV3VGV4dHVyZVxyXG4gICAgaXRlbUJhY2tncm91bmRJbWFnZSA9ICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUgJiYgYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddKSA/IHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZVsncHJldmlld1RleHR1cmUnXSA6XHJcbiAgICAgICAgKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSkgPyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUudGV4dHVyZSA6IGJsb2NrRGV0YWlsc1sndGV4dHVyZSddO1xyXG4gICAgdmFyIGl0ZW1JbWFnZSA9IChibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10pID8gYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddIDogYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ107XHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUsIGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSwgYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ10sIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgdmFyIGJhY2tncm91bmRJbWFnZSA9ICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gXCI8aW1nIHdpZHRoPVxcXCI1MFxcXCIgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBpdGVtQmFja2dyb3VuZEltYWdlKSArIFwiXFxcIiBhbHQ9XFxcIlwiICsgdGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlLmlkICsgXCJcXFwiPlwiIDogXCJcIjtcclxuICAgIHZhciBpbm5lclRleHQgPSBcIjxkaXYgY2xhc3M9XFxcImJsb2NrLWRlc2NyaXB0aW9uLXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYXRlcmlhbC1wcmV2aWV3LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGltZyBpZD1cXFwiYmxvY2stcHJldmlldy1pbWFnZVxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCJcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPHVsPjxkaXYgaWQ9XFxcImJsb2NrLWFsZXJ0LW1lc3NhZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgPGxpPk5hbWU6IFwiICsgYmxvY2tEZXRhaWxzLmlkICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPkluZGV4OiBcIiArIHRhcmdldC5pbmRleCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5UeXBlOiBcIiArICgoYmxvY2tEZXRhaWxzLnR5cGUpID8gYmxvY2tEZXRhaWxzLnR5cGUgOiAnJykgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+d2lkdGg6IFwiICsgdGFyZ2V0LndpZHRoICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPmhlaWdodDogXCIgKyB0YXJnZXQuaGVpZ2h0ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlg6IFwiICsgdGFyZ2V0LnggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+WTogXCIgKyB0YXJnZXQueSArIFwiPC9saT5cXG5cXG4gICAgPHA+XCIgKyAoKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSkgPyBcIkJhY2tncm91bmQgdGV4dHVyZVwiIDogXCJcIikgKyBcIjwvcD5cXG4gICAgXCIgKyBiYWNrZ3JvdW5kSW1hZ2UgKyBcIlxcbiAgICA8L3VsPjwvZGl2Pjxocj5cIjtcclxuICAgIHZhciBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgaWROYW1lOiBudWxsXHJcbiAgICB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG59XHJcbmV4cG9ydHMubG9hZElubmVyRGF0YSA9IGxvYWRJbm5lckRhdGE7XHJcbmZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKF9hKSB7XHJcbiAgICB2YXIgdGFnbmFtZSA9IF9hLnRhZ25hbWUsIGNsYXNzTGlzdCA9IF9hLmNsYXNzTGlzdCwgaW5uZXJUZXh0ID0gX2EuaW5uZXJUZXh0LCBpZE5hbWUgPSBfYS5pZE5hbWU7XHJcbiAgICB2YXIgbmV3RG9jdW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG4gICAgbmV3RG9jdW1lbnQuY2xhc3NOYW1lID0gKGNsYXNzTGlzdCkgPyBjbGFzc0xpc3QgOiBmYWxzZTtcclxuICAgIG5ld0RvY3VtZW50LmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICAgIGlmIChpZE5hbWUpXHJcbiAgICAgICAgbmV3RG9jdW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWROYW1lKTtcclxuICAgIHJldHVybiBuZXdEb2N1bWVudDtcclxufVxyXG5leHBvcnRzLmVsZW1lbnRDcmVhdG9yID0gZWxlbWVudENyZWF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG52YXIgcmVxdWVzdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXItcmVxdWVzdHMvcmVxdWVzdHNNb2R1bGVcIik7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvcHJldmlld1wiKTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4vaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgYmxvY2tDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4uL2NvbnN0cnVjdG9ycy9ibG9ja0NvbnN0cnVjdG9yXCIpO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBzZXRNYXBTaXplKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbWFwLXNpemUnXTtcclxuICAgIHZhciBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1zaXplLWVycm9yJyk7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldC1tYXAtc2l6ZScpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhLCBfaSwgZm9ybV8xLCBmaWVsZCwgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBmb3JtXzEgPSBmb3JtOyBfaSA8IGZvcm1fMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZm9ybV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICYmIGZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICYmICFmaWVsZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSkgPCBwYXJzZUludChtYWluT2JqZWN0Lm1hcERlZmF1bHRXaWR0aCkgfHwgcGFyc2VJbnQoZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSkgPCBwYXJzZUludChtYWluT2JqZWN0Lm1hcERlZmF1bHRIZWlnaHQpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+TWFwIG1pbiBzaXplIGlzIFwiICsgbWFpbk9iamVjdC5tYXBEZWZhdWx0V2lkdGggKyBcIiB4IFwiICsgbWFpbk9iamVjdC5tYXBEZWZhdWx0SGVpZ2h0ICsgXCI8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZUludChmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10pID4gcGFyc2VJbnQobWFpbk9iamVjdC5tYXhIb3Jpem9udGFsQmxvY2tzKSB8fCBwYXJzZUludChmb3JtRGF0YVsndmVydGljYWxCbG9jayddKSA+IHBhcnNlSW50KG1haW5PYmplY3QubWF4VmVydGljYWxCbG9ja3MpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+TWFwIG1heCBzaXplIGlzIFwiICsgbWFpbk9iamVjdC5tYXhIb3Jpem9udGFsQmxvY2tzICsgXCIgeCBcIiArIG1haW5PYmplY3QubWF4VmVydGljYWxCbG9ja3MgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXJyb3JGaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPlwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmlubmVySFRNTCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5jaGFuZ2VCbG9ja0FycmF5U2l6ZSh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGZvcm1EYXRhOiBmb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIj5tYXAgc2l6ZSBzZXQgXCIgKyBmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10gKyBcIiB4IFwiICsgZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSArIFwiIGJsb2NrczwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2V0TWFwU2l6ZSA9IHNldE1hcFNpemU7XHJcbmZ1bmN0aW9uIGdldE1hcERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXBOYW1lLCByZXMsIGNvbnZlcnRUb09iamVjdCwgc2l6ZUZvcm07XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ10ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuYWxsTWFwT2JqZWN0cy5tYXAoZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdFN0YXJ0T2JqZWN0XzEuYmFja1RvT2JqZWN0KHsgZGF0YTogYmxvY2ssIGNvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRUb09iamVjdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBOYW1lLnZhbHVlID0gcmVzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5tYXBXaWR0aCA9IHJlcy5tYXBTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QubWFwSGVpZ2h0ID0gcmVzLm1hcFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0uaG9yaXpvbnRhbEJsb2NrLnZhbHVlID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybS52ZXJ0aWNhbEJsb2NrLnZhbHVlID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrID0gY29udmVydFRvT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTmV3TWFwKCkge1xyXG4gICAgdmFyIGNyZWF0ZU1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlTWFwXCIpO1xyXG4gICAgY3JlYXRlTWFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld01hcCA9IGNyZWF0ZU5ld01hcDtcclxuZnVuY3Rpb24gbG9hZE1hcChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcGVuQnV0dG9uLCBzZWxlY3RGaWxlcywgZmlsZUNvbnRhaW5lciwgY2xvc2VEaWFsb2c7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIG9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW5NYXBcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdEZpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtZmlsZXNcIik7XHJcbiAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgICAgICAgICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcEZpbGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19NQVBfREFUQV9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZpbGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQoeyBkaXNwbGF5RWxlbWVudDogZmlsZUNvbnRhaW5lciwgZGF0YTogbWFwRmlsZSwgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgc2VsZWN0RmlsZXM6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvYWRNYXAgPSBsb2FkTWFwO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQoX2EpIHtcclxuICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IF9hLmRpc3BsYXlFbGVtZW50LCBkYXRhID0gX2EuZGF0YSwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEZpbGVzID0gX2Euc2VsZWN0RmlsZXM7XHJcbiAgICBpZiAoIWRhdGEgfHwgIWRpc3BsYXlFbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIHZhciBpbm5lckZpbGUgPSBibG9ja0NyZWF0b3IoeyB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiAnc2luZ2xlLWl0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8aDI+XCIgKyBmaWxlLm5hbWUgKyBcIjwvaDI+XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbm5lckZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdldE1hcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBmaWxlLmxpbmsgKyAnLycgKyBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtYWluT2JqZWN0OiBtYWluT2JqZWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChpbm5lckZpbGUpO1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoZmlsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYmxvY2tDcmVhdG9yKF9hKSB7XHJcbiAgICB2YXIgdGFnID0gX2EudGFnLCBzdHlsZUNsYXNzID0gX2Euc3R5bGVDbGFzcywgaW5uZXJDb250ZW50ID0gX2EuaW5uZXJDb250ZW50O1xyXG4gICAgdmFyIG5ld0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgbmV3QmxvY2suY2xhc3NOYW1lID0gc3R5bGVDbGFzcztcclxuICAgIG5ld0Jsb2NrLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgIHJldHVybiBuZXdCbG9jaztcclxufVxyXG5leHBvcnRzLmJsb2NrQ3JlYXRvciA9IGJsb2NrQ3JlYXRvcjtcclxuZnVuY3Rpb24gc2F2ZU1hcChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb3JtLCBidXR0b24sIG1lc3NhZ2VGaWVsZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1tYXAtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLW1hcC1lcnJvcicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRGb3JtLCBzYXZlRGF0YSwgbWFwRmlsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm0gPSBnZXRGb3JtRGF0YSh7IGZvcm06IGZvcm0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRGb3JtKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Rm9ybVsnc3RhdHVzJ10gPT09ICdyZWplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLWVycm9yXFxcIj5GYWlsIHRvIHNhdmUgbWFwLCBjaGVjayBtYXAgTmFtZTwvcD4gXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ21hcFNpemUnXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1haW5PYmplY3QubWFwV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5tYXBIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVEYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydjcmVhdGluZ1RpbWUnXSA9IHNhdmVEYXRhLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydhbGxNYXBPYmplY3RzJ10gPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Rm9ybSwgJ3NhdmUnLCBtYWluT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLnBvc3REYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0Rm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZpbGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9IFwiPHA+U2F2ZSB0aW1lOiBcIiArIChzYXZlRGF0YS5nZXRIb3VycygpIC0gMSkgKyBcIiA6IFwiICsgc2F2ZURhdGEuZ2V0TWludXRlcygpICsgXCIgOiBcIiArIHNhdmVEYXRhLmdldFNlY29uZHMoKSArIFwiPC9wPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiICsgbWFwRmlsZS51cmwgKyBcIiBvbmNsaWNrPVxcXCIoZnVuY3Rpb24oKXsgd2luZG93Lm9wZW4oJ1wiICsgbWFwRmlsZS51cmwgKyBcIicpfSkoKVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPk9wZW4gaW4gbmV3IHdpbmRvdzwvYT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zYXZlTWFwID0gc2F2ZU1hcDtcclxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoX2EpIHtcclxuICAgIHZhciBmb3JtID0gX2EuZm9ybTtcclxuICAgIGlmICghZm9ybSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGZvcm1fMiA9IGZvcm07IF9pIDwgZm9ybV8yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmb3JtSXRlbXMgPSBmb3JtXzJbX2ldO1xyXG4gICAgICAgIGlmIChmb3JtSXRlbXMubmFtZSAmJiBmb3JtSXRlbXMudmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0W2Zvcm1JdGVtcy5uYW1lXSA9IGZvcm1JdGVtcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUl0ZW1zLm5hbWUgJiYgIWZvcm1JdGVtcy52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkluY29ycmVjdCBEYXRhXCIsIHN0YXR1czogXCJyZWplY3RcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZ2V0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdyZWplY3QnLCBtZXNzYWdlOiByZXMuc3RhdHVzVGV4dCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCI1MDAgTm8gc2VydmVyIGNvbm5lY3Rpb24hXCIsIHN0YXR1czogXCJlcnJvclwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXREYXRhID0gZ2V0RGF0YTtcclxuZnVuY3Rpb24gcG9zdERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogKG1ldGhvZCkgPyBtZXRob2QgOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcmVkYWN0b3IvZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxuZnVuY3Rpb24gcHJldmlld09mQmxvY2soX2EpIHtcclxuICAgIHZhciBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gX2Euc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQgPSBfYS5ldmVudDtcclxuICAgIHZhciBwcmV2aWV3RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZC1pdGVtJyk7XHJcbiAgICBpZiAoIXNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pXHJcbiAgICAgICAgaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBwcmV2aWV3RWxlbWVudCB9KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBpdGVtSW1hZ2UgPSAoc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsncHJldmlld1RleHR1cmUnXSkgPyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtWydwcmV2aWV3VGV4dHVyZSddIDogc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsndGV4dHVyZSddO1xyXG4gICAgICAgIHNob3dFbGVtZW50KHsgZWxlbWVudDogcHJldmlld0VsZW1lbnQgfSk7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnRbJ3N0eWxlJ10gPSBcIm1hcmdpbi10b3A6IFwiICsgKGV2ZW50LmNsaWVudFkgKyAxMCkgKyBcInB4OyBtYXJnaW4tbGVmdDogXCIgKyAoZXZlbnQuY2xpZW50WCArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCIgPlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucHJldmlld09mQmxvY2sgPSBwcmV2aWV3T2ZCbG9jaztcclxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG59XHJcbmV4cG9ydHMuaGlkZUVsZW1lbnQgPSBoaWRlRWxlbWVudDtcclxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IGJsb2NrJztcclxufVxyXG5leHBvcnRzLnNob3dFbGVtZW50ID0gc2hvd0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0ludGVyYWN0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tJbnRlcmFjdE1vZHVsZVwiKTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL3ByZXZpZXdcIik7XHJcbnZhciBzaWRlUGFuZWxBY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9uc1wiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3JlZGFjdG9yL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbmZ1bmN0aW9uIGluaXRWaWV3KCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWRhY3Rvci1maWVsZCcpO1xyXG4gICAgdGhpcy5jb250ZXh0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuY29udGV4dEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY29udGV4dFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY29udGV4dEhlaWdodDtcclxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbn1cclxuZXhwb3J0cy5pbml0VmlldyA9IGluaXRWaWV3O1xyXG5mdW5jdGlvbiBtYXBNb3ZlQ29udHJvbGxlcnMoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgeE1vdmVWYWx1ZSA9IDAsIHlNb3ZlVmFsdWUgPSAwO1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgODc6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2ODpcclxuICAgICAgICAgICAgICAgIHhNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZCAqIC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODM6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQgKiAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY1OlxyXG4gICAgICAgICAgICAgICAgeE1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzc6XHJcbiAgICAgICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yLm1pbmlNYXBwZXIoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5tb3ZlQWxsU2NlbmUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCB4TW92ZVZhbHVlOiB4TW92ZVZhbHVlLCB5TW92ZVZhbHVlOiB5TW92ZVZhbHVlIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jazsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddICE9ICdDQU5WQVMnKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5jb2xsaXNpb25EZXRlY3Rvcih7IG9iamVjdDogYmxvY2ssIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVcclxuICAgICAgICAgICAgICAgIH0gfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEub3BlblJlZGFjdG9yV2luZG93KHsgYmxvY2tEYXRhOiBibG9jaywgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgIGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5jaGFuZ2VPYmplY3RNb2RlbCh7IHJlc3VsdDogcmVzdWx0LCBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHByZXZpZXdfMS5wcmV2aWV3T2ZCbG9jayh7IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW06IG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBidXR0b25JZCA9IGV2ZW50LnRhcmdldFsnZGF0YXNldCddLmJ1dHRvbklkO1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JCbG9ja3MnOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuYmxvY2tEYXRhYmFzZSwgc2VsZWN0SXRlbTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckRlY29yYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuYmFja2dyb3VuZERhdGFiYXNlLCBzZWxlY3RJdGVtOiBidXR0b25JZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckNoYXJhY3RlcnMnOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuY2hhcmFjdGVyc0RhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yRW5lbXknOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuZW5lbXlEYXRhYmFzZSwgc2VsZWN0SXRlbTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmVteScpICBlbmVteURhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLm1hcE1vdmVDb250cm9sbGVycyA9IG1hcE1vdmVDb250cm9sbGVycztcclxuZnVuY3Rpb24gcmVuZGVySXRlbXNUb1NpZGVMaXN0KF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGRhdGFCYXNlID0gX2EuZGF0YUJhc2UsIHNlbGVjdEl0ZW0gPSBfYS5zZWxlY3RJdGVtO1xyXG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLWluc3RydW1lbnRhbC1wYW5lbCcpO1xyXG4gICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoYmxvY2tJdGVtKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhibG9ja0l0ZW0pXHJcbiAgICAgICAgdmFyIGNvcHlPZkJsb2NrRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGJsb2NrSXRlbSk7XHJcbiAgICAgICAgdmFyIGl0ZW1JbWFnZSA9IChjb3B5T2ZCbG9ja0RhdGFbJ3ByZXZpZXdUZXh0dXJlJ10pID8gY29weU9mQmxvY2tEYXRhWydwcmV2aWV3VGV4dHVyZSddIDogY29weU9mQmxvY2tEYXRhWyd0ZXh0dXJlJ107XHJcbiAgICAgICAgdmFyIG9iaiA9IHNpZGVQYW5lbEFjdGlvbnNfMS5ibG9ja0NyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiAnc2luZ2xlLWJsb2NrLWl0ZW0nLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiPGltZyB3aWR0aD1cXFwiMTAwJVxcXCIgdGl0bGU9XFxcIlwiICsgKChjb3B5T2ZCbG9ja0RhdGEuZGV0YWlscykgPyBjb3B5T2ZCbG9ja0RhdGEuZGV0YWlscy5kZXNjcmlwdGlvbiA6IGNvcHlPZkJsb2NrRGF0YS5kZXNjcmlwdGlvbikgKyBcIlxcXCIgc3JjPSdcIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCInPlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbTogY29weU9mQmxvY2tEYXRhIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChvYmopO1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YUJhc2VfMSA9IGRhdGFCYXNlOyBfaSA8IGRhdGFCYXNlXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrSXRlbSA9IGRhdGFCYXNlXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoYmxvY2tJdGVtKTtcclxuICAgIH1cclxuICAgIHRhcmdldC5wcmVwZW5kKGNyZWF0ZURlc3Ryb3lCbG9jayh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHNlbGVjdEl0ZW06IHNlbGVjdEl0ZW0gfSkpO1xyXG59XHJcbmV4cG9ydHMucmVuZGVySXRlbXNUb1NpZGVMaXN0ID0gcmVuZGVySXRlbXNUb1NpZGVMaXN0O1xyXG5mdW5jdGlvbiBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgYmxvY2tJdGVtID0gX2EuYmxvY2tJdGVtO1xyXG4gICAgLy9jb25zb2xlLmxvZyhibG9ja0l0ZW0pXHJcbiAgICB2YXIgY29weU9mYmxvY2tJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgYmxvY2tJdGVtKTtcclxuICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pIHtcclxuICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSAoY29weU9mYmxvY2tJdGVtLmlkICE9IG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5pZCkgPyBjb3B5T2ZibG9ja0l0ZW0gOiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IGNvcHlPZmJsb2NrSXRlbTtcclxuICAgIHByZXZpZXdfMS5wcmV2aWV3T2ZCbG9jayh7IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW06IG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQ6IGV2ZW50IH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURlc3Ryb3lCbG9jayhfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBzZWxlY3RJdGVtID0gX2Euc2VsZWN0SXRlbTtcclxuICAgIHZhciBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9iai5jbGFzc05hbWUgPSAnc2luZ2xlLWJsb2NrLWl0ZW0gZGVzdHJveS1ibG9jay13cmFwcGVyJztcclxuICAgIG9iai5pbm5lckhUTUwgPSBcIjxpbWcgdGl0bGU9XFxcIlwiICsgKChzZWxlY3RJdGVtID09PSBcInJlZGFjdG9yRGVjb3JhdGlvblwiKSA/ICdEZWxldGUgb25seSBiYWNrZ3JvdW5kJyA6ICdEZWxldGUgYmxvY2sgaXRlbScpICsgXCJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svZGVzdHJveS5wbmcnKSArIFwiJz5cIjtcclxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzdHJveWVyOiAoc2VsZWN0SXRlbSkgPyBzZWxlY3RJdGVtIDogJ2Rlc3Ryb3llcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Rlc3Ryb3kucG5nJ1xyXG4gICAgICAgICAgICB9IH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyVmlldygpIHtcclxuICAgIGlmICghdGhpcy5jdHgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29udGV4dFdpZHRoLCB0aGlzLmNvbnRleHRIZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJWaWV3ID0gY2xlYXJWaWV3O1xyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kUmVuZGVyKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZ0JhY2tncm91bmQsIHN4LCBzeTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0YWlscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYmFja2dyb3VuZFRleHR1cmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0JhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kLnNyYyA9IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIHRoaXMuYmFja2dyb3VuZFRleHR1cmUudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBzeCA9ICh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4KSA/IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3ggOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ID0gKHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3kpID8gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZ0JhY2tncm91bmQsIHN4LCBzeSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zV2lkdGgsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc0hlaWdodCwgdGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS53aWR0aCwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSlcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5iYWNrZ3JvdW5kUmVuZGVyID0gYmFja2dyb3VuZFJlbmRlcjtcclxuZnVuY3Rpb24gY3JlYXRlQmxvY2tQaWN0dXJlKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZywgc1dpZHRoLCBzSGVpZ2h0LCBzeCwgc3k7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYWluT2JqZWN0LmN0eC5zYXZlKCk7IC8vIHNXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmRldGFpbHMudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBzV2lkdGggPSAodGhpcy5kZXRhaWxzLnNXaWR0aCkgPyB0aGlzLmRldGFpbHMuc1dpZHRoIDogdGhpcy5kZXRhaWxzLmltYWdlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgc0hlaWdodCA9ICh0aGlzLmRldGFpbHMuc0hlaWdodCkgPyB0aGlzLmRldGFpbHMuc0hlaWdodCA6IHRoaXMuZGV0YWlscy5pbWFnZUhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzeCA9ICh0aGlzLmRldGFpbHMuc3gpID8gdGhpcy5kZXRhaWxzLnN4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzeSA9ICh0aGlzLmRldGFpbHMuc3kpID8gdGhpcy5kZXRhaWxzLnN5IDogMDtcclxuICAgICAgICAgICAgICAgICAgICAvLy5kZXRhaWxzLnN4XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHRoaXMueE1vdmUgKyBwYXJzZUludCh0aGlzLmJsb2NrUmVsYXRpdmVYUG9zKSwgdGhpcy55TW92ZSArIHBhcnNlSW50KHRoaXMuYmxvY2tSZWxhdGl2ZVlQb3MpLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFpbk9iamVjdC5jdHgucmVzdG9yZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAvLy5kZXRhaWxzLnN4XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVCbG9ja1BpY3R1cmUgPSBjcmVhdGVCbG9ja1BpY3R1cmU7XHJcbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBpZiAoIW1haW5PYmplY3QuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyMjUsIDI1NSwgMjU1LCAuMylcIjtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxUZXh0KHRoaXMuaW5kZXgsIHRoaXMueE1vdmUgKyA1LCB0aGlzLnlNb3ZlICsgMTUpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDE1MywyNTUsMC40KSc7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5iZWdpblBhdGgoKTtcclxuICAgIG1haW5PYmplY3QuY3R4LnJlY3QodGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlKCk7XHJcbiAgICAvL21haW5PYmplY3QuY3R4LnN0cm9rZSgpXHJcbn1cclxuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9