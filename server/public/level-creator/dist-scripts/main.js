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
exports.push([module.i, "body {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden; }\n\ncanvas {\n    background: #00534b; }\n\n.side-menu-wrapper {\n    background: #bbbbbb;\n    height: 96vh;\n    right: 0;\n    max-width: 300px;\n    min-width: 100px;\n    padding: 10px;\n    position: absolute;\n    overflow-y: scroll; }\n\n.game-field-wrapper {\n    overflow: hidden; }\n\nfooter {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    color: #ffffff; }\n\n.main-banner-cover {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.1);\n    width: 100vw;\n    height: 100vh;\n    z-index: 100; }\n\n* {\n    color: #221828;\n    font-family: 'Roboto', sans-serif; }\n\nlegend h3 {\n    margin: 0px; }\n\nlabel p {\n    font-size: 14px; }\n\ninput {\n    padding: 10px;\n    width: 91%;\n    border-radius: 7px;\n    border: 0px; }\n\n.side-instrumental-panel {\n    overflow-y: scroll;\n    max-height: 350px;\n    display: flex;\n    flex-wrap: wrap; }\n    .side-instrumental-panel li {\n        list-style: none; }\n    .side-instrumental-panel img {\n        padding: 10px;\n        display: block;\n        margin: 0 auto;\n        width: 54px; }\n\n.selected-item-preview {\n    position: absolute;\n    z-index: 100; }\n    .selected-item-preview img {\n        width: 60px; }\n\n.inner-content {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    max-width: 70%;\n    min-height: 300px;\n    overflow-y: scroll;\n    right: 0;\n    float: right;\n    max-height: 90%; }\n    .inner-content hr {\n        color: #eaeaea; }\n    .inner-content .single-item-wrapper {\n        cursor: pointer;\n        padding: 5px; }\n    .inner-content .single-item-wrapper:hover {\n        background: #4d4263;\n        color: #fff; }\n        .inner-content .single-item-wrapper:hover h2 {\n            color: #ffffff; }\n\n.inner-description-fields-wrapper {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 20px; }\n    .inner-description-fields-wrapper .single-block-description {\n        color: #715184; }\n        .inner-description-fields-wrapper .single-block-description input {\n            background: #bbb; }\n        .inner-description-fields-wrapper .single-block-description span {\n            border-radius: 10px;\n            background: #3a61bd;\n            padding: 5px;\n            margin-top: 5px;\n            position: relative;\n            display: inline-block;\n            font-size: 12px;\n            color: #ffffff; }\n        .inner-description-fields-wrapper .single-block-description .button-reject {\n            background: #ad0000;\n            color: #fffff; }\n            .inner-description-fields-wrapper .single-block-description .button-reject textarea {\n                background: #1c1722;\n                color: #ffffff; }\n    .inner-description-fields-wrapper .question-wrapper {\n        background: #eaeaea;\n        padding: 5px;\n        overflow: auto;\n        display: flex; }\n        .inner-description-fields-wrapper .question-wrapper p {\n            font-size: 11px;\n            font-weight: 900; }\n    .inner-description-fields-wrapper .requirement-item-wrapper {\n        display: flex; }\n\n.active-button {\n    background: #ff961e; }\n\n.right-side-button {\n    float: right; }\n\n.side-panel-success {\n    color: #539700;\n    border: 1px solid #539700;\n    padding: 5px; }\n\n.side-panel-error {\n    color: #b10000;\n    border: 1px solid #b10000;\n    padding: 5px; }\n\n.block-description-wrapper {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap; }\n    .block-description-wrapper img {\n        max-width: 100%; }\n\n.single-block-description {\n    text-align: left;\n    padding: 5px;\n    width: 46%; }\n    .single-block-description textarea {\n        width: 96%;\n        padding: 5px;\n        margin-top: 10px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        border: 1px solid #dfdfdf;\n        background: #bbb; }\n\n.all-others-dialogs {\n    background: #826d6d;\n    padding: 5px;\n    border-radius: 5px;\n    color: #ffffff; }\n    .all-others-dialogs h4 {\n        color: #ffffff; }\n    .all-others-dialogs button {\n        background: none;\n        border: 0px;\n        cursor: pointer; }\n\n.related-id-field {\n    width: 50px;\n    width: 29px;\n    margin: 24px; }\n\n.close-dialog {\n    color: #fff;\n    background: none;\n    padding: 20px;\n    border: none;\n    font-size: 29px;\n    position: absolute;\n    cursor: pointer; }\n\n.main-btn {\n    background: #ffb300;\n    border: navajowhite;\n    padding: 7px;\n    border-radius: 5px;\n    margin-top: 5px;\n    box-shadow: 1px 1px 5px #1547a64f;\n    cursor: pointer;\n    transition: .3s linear; }\n\n.main-btn:hover {\n    background: #ffedc3; }\n\n.main-btn:active {\n    background: #ff1e00; }\n\n.material-preview-wrapper {\n    width: 100%; }\n\n.button-reject {\n    background: #ad0000;\n    color: #fffff; }\n", ""]);
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
            - elevator speed
            - direction
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
                            if (!(block.xMove > 0 && block.xMove < window.innerWidth || block.yMove > 0 && block.yMove < window.innerHeight)) return [3 /*break*/, 5];
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
                        innerText = "<h3>Contain Object</h3>\n            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level\n            <span>computer_data</span>\n            <span>blue_card</span>\n            <span>green_card</span>\n            <span>yellow_card</span>\n            <span>red_card</span>\n            <span>exit</span>  exit  - end the level\n            <span>power_cell</span>\n            <span>enemy_helmet</span>\n            <span>enemy_details</span>\n            <span>med_kit</span>\n            <span>laptop_with_data</span>\n            <span>tools_case</span>\n            </p>\n            \n            <textarea type='text' id=" + ('contain-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.contain) ? blockDetails.rules.contain : '') + "</textarea>\n            <img width=\"100\" id=" + ('contain-picture-' + currentDescriptionId) + "\n            src=\"" + mainPicture + "\">\n            <select id=\"preview-contain-object\" data-target='select-preview-btn'>\n                <option value=\"computer-data.png\">Computer data</option>\n                <option value=\"red-card.png\">Red card</option>\n                <option value=\"blue-card.png\">Blue card</option>\n                <option value=\"green-card.png\">Green card</option>\n                <option value=\"yellow-card.png\">Yellow card</option>\n                <option value=\"power-cell.png\">Power Cell</option>\n                <option value=\"med-kit.png\">Med kit</option>\n                <option value=\"laptop.png\">Laptop case</option>\n                <option value=\"tools-case.png\">Tools case</option>\n                <option value=\"Enemy-head.png\">Enemy helmet A</option>\n                <option value=\"enemy-details.png\">Enemy detail 1</option>\n            </select>\n            <button data-target='save-contain-btn' class=\"main-btn\">Save</button> <hr>";
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
                                            case 'save-dialog-btn': return [3 /*break*/, 21];
                                        }
                                        return [3 /*break*/, 24];
                                    case 1: return [4 /*yield*/, changeDataInBlock({
                                            key: 'width',
                                            fieldSelector: '#width-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 2:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        blockPreviewImage['width'] = target.width;
                                        blockPreviewImage['height'] = target.height;
                                        return [3 /*break*/, 25];
                                    case 3: return [4 /*yield*/, changeDataInBlock({
                                            key: 'height',
                                            fieldSelector: '#height-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 4:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        blockPreviewImage['width'] = target.width;
                                        blockPreviewImage['height'] = target.height;
                                        return [3 /*break*/, 25];
                                    case 5: return [4 /*yield*/, changeDataInBlock({
                                            key: 'blockRelativeXPos',
                                            fieldSelector: '#x-pos-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 6:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        console.log(target);
                                        return [3 /*break*/, 25];
                                    case 7: return [4 /*yield*/, changeDataInBlock({
                                            key: 'blockRelativeYPos',
                                            fieldSelector: '#y-pos-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 8:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        console.log(target);
                                        return [3 /*break*/, 25];
                                    case 9: return [4 /*yield*/, changeDataInBlock({
                                            key: 'description',
                                            fieldSelector: '#description-field-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 10:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'description field' : ' save description field';
                                        return [3 /*break*/, 25];
                                    case 11: return [4 /*yield*/, changeDataInBlock({
                                            key: 'tips',
                                            fieldSelector: '#tips-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 12:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'tips field' : ' save tips field';
                                        return [3 /*break*/, 25];
                                    case 13: return [4 /*yield*/, changeDataInBlock({
                                            key: 'successText',
                                            fieldSelector: '#successText-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 14:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'description field' : ' save description field';
                                        return [3 /*break*/, 25];
                                    case 15: return [4 /*yield*/, changeDataInBlock({
                                            key: 'requireText',
                                            fieldSelector: '#requireText-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 16:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'require text field' : ' save require text field';
                                        return [3 /*break*/, 25];
                                    case 17: return [4 /*yield*/, changeDataInBlock({
                                            key: 'require',
                                            fieldSelector: '#require-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 18:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'require field' : ' save require field';
                                        return [3 /*break*/, 25];
                                    case 19: return [4 /*yield*/, changeDataInBlock({
                                            key: 'contain',
                                            fieldSelector: '#contain-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 20:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        return [3 /*break*/, 25];
                                    case 21:
                                        console.log('Save');
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'contain',
                                                fieldSelector: '#contain-field-' + currentDescriptionId,
                                                target: target.details.dialog.default
                                            })];
                                    case 22:
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
                                    case 23:
                                        fieldResults = _b.sent();
                                        /*fieldResults = await changeDataInBlock({
                                            key: 'text',
                                            fieldSelector: '#default-dialog-text',
                                            target: target.details.dialog.default
                                        })*/
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        _b.label = 24;
                                    case 24: return [2 /*return*/, false];
                                    case 25:
                                        blockAlertMessage.innerHTML = (fieldResults) ? "<p class=\"side-panel-success\" > Successfully saved '" + fieldName + "' </p>" : "<p class=\"side-panel-error\" >There is a problem in '" + fieldName + "' i can't save</p>";
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    fileContainer.addEventListener('click', function (event) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _a, dataCheck_1, requiredPreviewPic_1, pic_1, link_1, dataFace, picture, dataCheck, requiredPreviewPic, pic, link;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = event.target.dataset.target;
                                        switch (_a) {
                                            case 'select-preview-btn': return [3 /*break*/, 1];
                                            case 'preview-dialog-face': return [3 /*break*/, 3];
                                        }
                                        return [3 /*break*/, 4];
                                    case 1: return [4 /*yield*/, changeDataInBlock({
                                            key: 'objectPicture',
                                            fieldSelector: '#preview-require-object',
                                            target: target.details.rules
                                        })];
                                    case 2:
                                        _b.sent();
                                        dataCheck_1 = document.querySelector('#preview-contain-object')['value'];
                                        requiredPreviewPic_1 = document.querySelector('#contain-picture-' + currentDescriptionId);
                                        pic_1 = (target.details.rules.objectPicture) ? target.details.rules.objectPicture : 'computer-data.png';
                                        link_1 = globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + dataCheck_1;
                                        target.details.rules.objectPicture = link_1;
                                        console.log(target);
                                        requiredPreviewPic_1['src'] = link_1; //computer-data.png
                                        return [3 /*break*/, 5];
                                    case 3:
                                        dataFace = document.querySelector('#preview-dialog-face')['value'];
                                        blockDetails.dialog.default.facePictureAbsolute = globalVariables_1.__HOST + '/level-creator/assets/enemyObject/avatar/' + dataFace;
                                        picture = document.querySelector('#dialog-face-picture-' + currentDescriptionId);
                                        picture['src'] = blockDetails.dialog.default.facePictureAbsolute;
                                        return [3 /*break*/, 5];
                                    case 4: return [2 /*return*/, false];
                                    case 5:
                                        dataCheck = document.querySelector('#preview-contain-object')['value'];
                                        requiredPreviewPic = document.querySelector('#contain-picture-' + currentDescriptionId);
                                        pic = (target.details.rules.objectPicture) ? target.details.rules.objectPicture : 'computer-data.png';
                                        link = globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + dataCheck;
                                        target.details.rules.objectPicture = link;
                                        console.log(target);
                                        requiredPreviewPic['src'] = link; //computer-data.png
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
            //let copyOfblock = Object.assign({}, block)
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
    console.log(dataBase);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9kaWFsb2dGb3JtTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJB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Q0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9zZXJ2ZXIvcHVibGljL2xldmVsLWNyZWF0b3IvZGlzdC1zY3JpcHRzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDUzNGI7IH1cXG5cXG4uc2lkZS1tZW51LXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjYmJiYmJiO1xcbiAgICBoZWlnaHQ6IDk2dmg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi5nYW1lLWZpZWxkLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5tYWluLWJhbm5lci1jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcblxcbioge1xcbiAgICBjb2xvcjogIzIyMTgyODtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyB9XFxuXFxubGVnZW5kIGgzIHtcXG4gICAgbWFyZ2luOiAwcHg7IH1cXG5cXG5sYWJlbCBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTElO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMHB4OyB9XFxuXFxuLnNpZGUtaW5zdHJ1bWVudGFsLXBhbmVsIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAgIC5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCBsaSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgIC5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCBpbWcge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB3aWR0aDogNTRweDsgfVxcblxcbi5zZWxlY3RlZC1pdGVtLXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcbiAgICAuc2VsZWN0ZWQtaXRlbS1wcmV2aWV3IGltZyB7XFxuICAgICAgICB3aWR0aDogNjBweDsgfVxcblxcbi5pbm5lci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICByaWdodDogMDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgaHIge1xcbiAgICAgICAgY29sb3I6ICNlYWVhZWE7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZDQyNjM7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXI6aG92ZXIgaDIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWdhcDogMjBweDsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBjb2xvcjogIzcxNTE4NDsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gaW5wdXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7IH1cXG4gICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHNwYW4ge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNhNjFiZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiAuYnV0dG9uLXJlamVjdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2FkMDAwMDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmOyB9XFxuICAgICAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gLmJ1dHRvbi1yZWplY3QgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWMxNzIyO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnF1ZXN0aW9uLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5xdWVzdGlvbi13cmFwcGVyIHAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAucmVxdWlyZW1lbnQtaXRlbS13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uYWN0aXZlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk2MWU7IH1cXG5cXG4ucmlnaHQtc2lkZS1idXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uc2lkZS1wYW5lbC1zdWNjZXNzIHtcXG4gICAgY29sb3I6ICM1Mzk3MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Mzk3MDA7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbi5zaWRlLXBhbmVsLWVycm9yIHtcXG4gICAgY29sb3I6ICNiMTAwMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMTAwMDA7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbi5ibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAgIC5ibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNDYlOyB9XFxuICAgIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gdGV4dGFyZWEge1xcbiAgICAgICAgd2lkdGg6IDk2JTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2JiYjsgfVxcblxcbi5hbGwtb3RoZXJzLWRpYWxvZ3Mge1xcbiAgICBiYWNrZ3JvdW5kOiAjODI2ZDZkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7IH1cXG4gICAgLmFsbC1vdGhlcnMtZGlhbG9ncyBoNCB7XFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuYWxsLW90aGVycy1kaWFsb2dzIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ucmVsYXRlZC1pZC1maWVsZCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgbWFyZ2luOiAyNHB4OyB9XFxuXFxuLmNsb3NlLWRpYWxvZyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjlweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubWFpbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZiMzAwO1xcbiAgICBib3JkZXI6IG5hdmFqb3doaXRlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMTU0N2E2NGY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjNzIGxpbmVhcjsgfVxcblxcbi5tYWluLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmVkYzM7IH1cXG5cXG4ubWFpbi1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMWUwMDsgfVxcblxcbi5tYXRlcmlhbC1wcmV2aWV3LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblxcbi5idXR0b24tcmVqZWN0IHtcXG4gICAgYmFja2dyb3VuZDogI2FkMDAwMDtcXG4gICAgY29sb3I6ICNmZmZmZjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9tYWluLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgYmxvY2tJbnRlcmFjdE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrSW50ZXJhY3RNb2R1bGVcIik7XHJcbnZhciBibG9ja3NGdW5jdGlvbmFsaXR5XzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tzRnVuY3Rpb25hbGl0eVwiKTtcclxudmFyIEJsb2NrQ29uc3RydWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCbG9ja0NvbnN0cnVjdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdE1hcFggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TWFwWSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnhNb3ZlID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueU1vdmUgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5ibG9ja1JlbGF0aXZlWFBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1JlbGF0aXZlWVBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gZGF0YS5pbmRleDtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSAoZGF0YS5kZXRhaWxzKSA/IGRhdGEuZGV0YWlscyA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gKGRhdGEuaW1hZ2VXaWR0aCkgPyBkYXRhLmltYWdlV2lkdGggOiBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSAoZGF0YS5pbWFnZUhlaWdodCkgPyBkYXRhLmltYWdlSGVpZ2h0IDogZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpZXdUZXh0dXJlID0gKGRhdGEucHJldmlld1RleHR1cmUpID8gZGF0YS5wcmV2aWV3VGV4dHVyZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIHRoaXMuc3kgPSAwO1xyXG4gICAgICAgIHRoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEuaW1hZ2VXaWR0aDtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBCbG9ja0NvbnN0cnVjdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkJsb2NrQ29uc3RydWN0b3IgPSBCbG9ja0NvbnN0cnVjdG9yO1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW5kZXJCbG9ja0JveCA9IGluaXRTdGFydE9iamVjdF8xLnJlbmRlckJsb2NrQm94O1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5tb3ZlU2luZ2xlQmxvY2sgPSBibG9ja0ludGVyYWN0TW9kdWxlXzEubW92ZVNpbmdsZUJsb2NrO1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5lbGV2YXRvck1vdmUgPSBibG9ja3NGdW5jdGlvbmFsaXR5XzEuZWxldmF0b3JNb3ZlO1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5ibG9ja0FuaW1hdGlvbnMgPSBibG9ja3NGdW5jdGlvbmFsaXR5XzEuYmxvY2tBbmltYXRpb25zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS92aWV3XCIpO1xyXG52YXIgTWFpbkdhbWVDb25zdHJ1Y3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1haW5HYW1lQ29uc3RydWN0b3IoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMubWFwTW92ZVNwZWVkID0gZGF0YS5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5tYXBXaWR0aCA9IGRhdGEubWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5tYXBIZWlnaHQgPSBkYXRhLm1hcEhlaWdodDtcclxuICAgICAgICB0aGlzLm1hcERlZmF1bHRXaWR0aCA9IGRhdGEubWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5tYXBEZWZhdWx0SGVpZ2h0ID0gZGF0YS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hbGxSZWRhY3RvckJsb2NrID0gZGF0YS5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZERhdGFiYXNlID0gZGF0YS5iYWNrZ3JvdW5kRGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy5ibG9ja0RhdGFiYXNlID0gKGRhdGEuYmxvY2tEYXRhYmFzZSkgPyBkYXRhLmJsb2NrRGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyc0RhdGFiYXNlID0gKGRhdGEuY2hhcmFjdGVyc0RhdGFiYXNlKSA/IGRhdGEuY2hhcmFjdGVyc0RhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmVuZW15RGF0YWJhc2UgPSAoZGF0YS5lbmVteURhdGFiYXNlKSA/IGRhdGEuZW5lbXlEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBkYXRhLmJsb2NrU2l6ZTtcclxuICAgICAgICB0aGlzLm1heEhvcml6b250YWxCbG9ja3MgPSBkYXRhLm1heEhvcml6b250YWxCbG9ja3M7XHJcbiAgICAgICAgdGhpcy5tYXhWZXJ0aWNhbEJsb2NrcyA9IGRhdGEubWF4VmVydGljYWxCbG9ja3M7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluaU1hcEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1haW5HYW1lQ29uc3RydWN0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWFpbkdhbWVDb25zdHJ1Y3RvciA9IE1haW5HYW1lQ29uc3RydWN0b3I7XHJcbk1haW5HYW1lQ29uc3RydWN0b3IucHJvdG90eXBlLmluaXRWaWV3ID0gdmlld18xLmluaXRWaWV3O1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jbGVhclZpZXcgPSB2aWV3XzEuY2xlYXJWaWV3O1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW5kZXJJdGVtc1RvU2lkZUxpc3QgPSB2aWV3XzEucmVuZGVySXRlbXNUb1NpZGVMaXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4uL3Nhc3MvbWFpbi5zYXNzXCIpO1xyXG52YXIgcmVuZGVyQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3RvclwiKTtcclxudmFyIGJsb2NrQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdG9ycy9ibG9ja0NvbnN0cnVjdG9yXCIpO1xyXG52YXIgdmlld18xID0gcmVxdWlyZShcIi4vdWkvdmlld1wiKTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4vcmVkYWN0b3IvaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgc2lkZVBhbmVsQWN0aW9uc18xID0gcmVxdWlyZShcIi4vcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9uc1wiKTtcclxuLypcclxuVi0gY3JlYXRlIG1hcCBuZXRcclxuICAgIFYtIHZlcnRpY2FsIGRpcmVjdGlvbiBvZiBibG9ja1xyXG4gICAgVi0gZGVzdHJveSBzb21lIGJsb2Nrc1xyXG4gICAgVi0gYmxvY2sgaW5mb3JtYXRpb25cclxuICAgICAgICBWIC0gZGVsZXRlIGJsb2NrXHJcbiAgICAgICAgVi0gcHJldmlld1xyXG4gICAgICAgIFYtIGluZm9ybWF0aW9uXHJcbiAgICAgICAgVi0gY2hhbmdlIGRhdGFcclxuICAgICAgICAgICAgVi0gd2lkdGhcclxuICAgICAgICAgICAgVi0gaGVpZ2h0XHJcbiAgICAgICAgICAgIFYtIHhcclxuICAgICAgICAgICAgVi0geVxyXG4gICAgICAgICAgICBWLSBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBWLSBydWxlcnNcclxuICAgICAgICAgICAgLSBlbGV2YXRvciBzcGVlZFxyXG4gICAgICAgICAgICAtIGRpcmVjdGlvblxyXG5WLSBzaWRlIHBhbmVsXHJcbiAgICBWLSBuZXcgbWFwXHJcbiAgICAgICAgVi0gbWFwIG5hbWVcclxuICAgICAgICBWLSBzYXZlIG1hcCBpbiBqc29uXHJcbiAgICAgICAgVi0gY2hhbmdlIG1hcCBzaXplXHJcbiAgICAgICAgVi0gb3ZlcndyaXRlIG1hcFxyXG4gICAgVi0gbG9hZCBtYXBcclxuICAgIFYtIG1pbmltYXBcclxuICAgIFYtIGRpZmZlcmVudCBzZWN0aW9ucyBvZiBvYmplY3RzXHJcbiAgICAgICAgVi0gYmxvY2tcclxuICAgICAgICBWLSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgVi0gZW5lbXlcclxuICAgICAgICBWLSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgVi0gZHluYW1pYyBzcGF3blxyXG5cclxuXHJcblYtIGFkZCBzdGFpcnNcclxuVi0gYWRkIGxlYWRlcnNcclxuVi0gZG9vcnNcclxuICAgViAtIGRvb3JzIGFjY2VzcyBjYXJkXHJcblYtIGFkZCBob3Jpem9udGFsIGVsZXZhdG9yXHJcblYtIGFkZCBiYWNrZ3JvdW5kIHRleHR1cmUgYW5kIGRpc3BsYXkgaXRcclxuICAgIFYtIGRlc3Ryb3kvIGNoYW5nZSB0ZXh0dXJlcyBzZXBhcmF0ZWx5XHJcbiAgICBWLSBhZGQgdGV4dHVyZSBhbmltYXRpb25zXHJcblYtIGFkZCBOUENcclxuICAgViAtIGRpYWxvZ1xyXG4gICAgICAgIC0gNyAtIDggbGV2ZWxzXHJcbiAgICAgICAgICAgIC0gc3RhcnQgYmFzZSBiYXNlXHJcbiAgICAgICAgICAgICAgICAtIGZpbmQgc2hpcFxyXG4gICAgICAgICAgICAtIGNvbW1hbmQgY2VudGVyXHJcbiAgICAgICAgICAgICAgICAtIGdldCBpbXBvcnRlbmQgZGF0YVxyXG4gICAgICAgICAgICAgICAgLSB1cm4gb24gZGVmZW5jZSBzeXN0ZW1cclxuICAgICAgICAgICAgLSBkZXNlcnQgYXJjaGVvbG9naWNhbCBleGNhdmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgLSBmaW5kIGFuY2llbnQgYXJ0aWZhY3RcclxuICAgICAgICAgICAgLSBza3kgY2l0eVxyXG4gICAgICAgICAgICAgICAgLSB0YWxrIHdpdGggY29tbWFuZGVyIGFuZCBzY2llbnRpc3RcclxuICAgICAgICAgICAgICAgIC0gZ2V0IGltcG9ydGVuZCBkYXRhXHJcbiAgICAgICAgICAgIC0gbW9vbiBiYXNlXHJcbiAgICAgICAgICAgICAgICAtIGZpeGVkIHRyYW5zcG9ydGF0aW9uIGdhdGUgY2VudGVyXHJcbiAgICAgICAgICAgICAgICAtIHJlc2N1ZSBmYWNpbGl0eSBwZXJzb25hbFxyXG4gICAgICAgICAgICAtIHZlbnVzXHJcbiAgICAgICAgICAgICAgICAtIHNhdmUgcGxhdGZvcm1cclxuICAgICAgICAgICAgICAgIC0gcmVwYXJlIHN0YXRpb25cclxuICAgICAgICAgICAgICAgIC0gYWN0aXZldGUgZGVmZW5jZSBzeXN0ZW1cclxuICAgICAgICAgICAgICAgIC0gcmVjaGFyZ2UgeW91IHNoaXBcclxuICAgICAgICAgICAgLSBtYXJzXHJcbiAgICAgICAgICAgICAgICAtIGFjdGl2YXRlIHRyYWNraW5nIHN5c3RlbVxyXG4gICAgICAgICAgICAgICAgLSB0cmFjZSBvZiBlbmVteVxyXG4gICAgICAgICAgICAgICAgLSBhY3RpdmF0ZSB0cmFuc3BvdHJ0IHN5c3RlbVxyXG5cclxuICAgICAgICAgICAgLSBKdXBpdGVyID9cclxuICAgICAgICAgICAgICAgIC0gMEdcclxuICAgICAgICAgICAgICAgIC0gc3BhY2VTdGF0aW9uIElvXHJcblxyXG5cclxuKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiByZWRhY3RvckVuZ2luZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pLCBfYSwgYmxvY2s7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmNsZWFyVmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwLCBfYSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBfYS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYmxvY2sueE1vdmUgPiAwICYmIGJsb2NrLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggfHwgYmxvY2sueU1vdmUgPiAwICYmIGJsb2NrLnlNb3ZlIDwgd2luZG93LmlubmVySGVpZ2h0KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9jay5yZW5kZXJCbG9ja0JveCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9jay5lbGV2YXRvck1vdmUoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRTdGFydE9iamVjdF8xLmJsb2NrQW5pbWF0aW9uUmVuZGVyKHsgYmxvY2s6IGJsb2NrIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWFpbk9iamVjdCwgZW5naW5lO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0U3RhcnRPYmplY3RfMS5pbml0TWFpbkVuZ2luZSh7IE1haW5HYW1lQ29uc3RydWN0b3I6IHJlbmRlckNvbnN0cnVjdG9yXzEuTWFpbkdhbWVDb25zdHJ1Y3RvciwgQmxvY2tDb25zdHJ1Y3RvcjogYmxvY2tDb25zdHJ1Y3Rvcl8xLkJsb2NrQ29uc3RydWN0b3IgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5pbml0VmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QucmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuYmxvY2tEYXRhYmFzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGFjdG9yRW5naW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWFpbk9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICB2aWV3XzEubWFwTW92ZUNvbnRyb2xsZXJzKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuc2F2ZU1hcCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLmxvYWRNYXAoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5zZXRNYXBTaXplKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgQmxvY2tDb25zdHJ1Y3RvcjogYmxvY2tDb25zdHJ1Y3Rvcl8xLkJsb2NrQ29uc3RydWN0b3IgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLmNyZWF0ZU5ld01hcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvcHJldmlld1wiKTtcclxudmFyIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL3BhbmVsRm9ybVBhcnRHZW5lcmF0b3JcIik7XHJcbmZ1bmN0aW9uIG9wZW5SZWRhY3RvcldpbmRvdyhfYSkge1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IF9hLmJsb2NrRGF0YSwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdEZpbGVzLCBmaWxlQ29udGFpbmVyLCBjbG9zZURpYWxvZywgZ2VuZXJhdGVkQXJlYSwgYWxsQmxvY2tzLCBpbm5lckRlc2NyaXB0aW9uQXJlYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtIHx8ICFibG9ja0RhdGEuZGV0YWlscyB8fCBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0RmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1maWxlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1jb250ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWRBcmVhID0gcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2lubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnaW5uZXItZGVzY3JpcHRpb24tYXJlYSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlZEFyZWEpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1kZXNjcmlwdGlvbi1hcmVhXCIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckRlc2NyaXB0aW9uQXJlYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEubG9hZElubmVyRGF0YSh7IGZpbGVDb250YWluZXI6IGlubmVyRGVzY3JpcHRpb25BcmVhLCB0YXJnZXQ6IGJsb2NrRGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEuZ2VuZXJhdGVJbnB1dCh7IGZpbGVDb250YWluZXI6IGlubmVyRGVzY3JpcHRpb25BcmVhLCB0YXJnZXQ6IGJsb2NrRGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMub3BlblJlZGFjdG9yV2luZG93ID0gb3BlblJlZGFjdG9yV2luZG93O1xyXG5mdW5jdGlvbiBwb3NpdGlvblJlZHVjZXIoX2EpIHtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBfYS5hbGxCbG9ja3M7XHJcbiAgICB2YXIgb2xkWFJhbmdlID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgdmFyIG9sZFlSYW5nZSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQmxvY2tzXzEgPSBhbGxCbG9ja3M7IF9pIDwgYWxsQmxvY2tzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrID0gYWxsQmxvY2tzXzFbX2ldO1xyXG4gICAgICAgIGJsb2NrLnhNb3ZlID0gYmxvY2sueDtcclxuICAgICAgICBibG9jay55TW92ZSA9IGJsb2NrLnk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wb3NpdGlvblJlZHVjZXIgPSBwb3NpdGlvblJlZHVjZXI7XHJcbmZ1bmN0aW9uIGNoYW5nZUJsb2NrQXJyYXlTaXplKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGZvcm1EYXRhID0gX2EuZm9ybURhdGEsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgdmFyIGVycm9yRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLXNpemUtZXJyb3InKTtcclxuICAgIHZhciB3aWR0aFNldCA9IGZvcm1EYXRhLmhvcml6b250YWxCbG9jaztcclxuICAgIHZhciBoZWlnaHRTZXQgPSBmb3JtRGF0YS52ZXJ0aWNhbEJsb2NrO1xyXG4gICAgdmFyIGN1cnJlbnRXaWR0aCA9IG1haW5PYmplY3QubWFwV2lkdGg7XHJcbiAgICB2YXIgY3VycmVudEhlaWdodCA9IG1haW5PYmplY3QubWFwSGVpZ2h0O1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciB2ZXJ0aWNhbFJhbmdlID0gaGVpZ2h0U2V0IC0gY3VycmVudEhlaWdodDtcclxuICAgIHZhciB2ZXJ0aWNhbENvbXBlbnNhdGlvbiA9IHZlcnRpY2FsUmFuZ2U7XHJcbiAgICB2YXIgbmV3UmVidWlsZEJsb2NrTWFwID0gW107XHJcbiAgICB2YXIgb2xkWFJhbmdlID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgdmFyIG9sZFlSYW5nZSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgIC8vZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPlBsZWFzZSB3YWl0IG1hcCBpcyBidWlsZC4uLjwvcD5gO1xyXG4gICAgcG9zaXRpb25SZWR1Y2VyKHsgYWxsQmxvY2tzOiBhbGxCbG9ja3MgfSk7XHJcbiAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB3aWR0aFNldDsgY29sKyspIHtcclxuICAgICAgICBmb3IgKHZhciBpdGVtID0gMDsgaXRlbSA8IGhlaWdodFNldDsgaXRlbSsrKSB7XHJcbiAgICAgICAgICAgIHZhciByb3dJbmRleCA9IChjb2wgPT0gMCkgPyBpdGVtIDogKGNvbCAqIGN1cnJlbnRIZWlnaHQpICsgaXRlbTtcclxuICAgICAgICAgICAgdmFyIG5ld0Jsb2Nrc0FycmF5SW5kZXggPSAoY29sID09IDApID8gaXRlbSA6IChjb2wgKiBoZWlnaHRTZXQpICsgaXRlbTtcclxuICAgICAgICAgICAgdmFyIG9sZEJsb2Nrc0FycmF5SW5kZXggPSAoaXRlbSA8IGN1cnJlbnRIZWlnaHQpID8gYWxsQmxvY2tzW3Jvd0luZGV4XSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChvbGRCbG9ja3NBcnJheUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvbGRCbG9ja3NBcnJheUluZGV4LmluZGV4ID0gbmV3QmxvY2tzQXJyYXlJbmRleDtcclxuICAgICAgICAgICAgICAgIG5ld1JlYnVpbGRCbG9ja01hcCA9IG5ld1JlYnVpbGRCbG9ja01hcC5jb25jYXQob2xkQmxvY2tzQXJyYXlJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBuZXdSZWJ1aWxkQmxvY2tNYXAuY29uY2F0KGNyZWF0ZVNpbmdsZU1hcEJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0OiBtYWluT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIEJsb2NrQ29uc3RydWN0b3I6IEJsb2NrQ29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5ld0Jsb2Nrc0FycmF5SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29sICogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogaXRlbSAqIG1haW5PYmplY3QuYmxvY2tTaXplIC8vICsgb2xkWVJhbmdlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2ZXJ0aWNhbENvbXBlbnNhdGlvbiArPSB2ZXJ0aWNhbFJhbmdlO1xyXG4gICAgfVxyXG4gICAgbWFpbk9iamVjdC5tYXBXaWR0aCA9IHdpZHRoU2V0O1xyXG4gICAgbWFpbk9iamVjdC5tYXBIZWlnaHQgPSBoZWlnaHRTZXQ7XHJcbiAgICBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2sgPSBuZXdSZWJ1aWxkQmxvY2tNYXA7XHJcbiAgICB2YXIgc2hvdyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jay5maW5kKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLmluZGV4ID09IDEwMTE7IH0pO1xyXG4gICAgY29uc29sZS5sb2coc2hvdywgXCJzaG93IHJlc2l6ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9ja1swXSk7XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VCbG9ja0FycmF5U2l6ZSA9IGNoYW5nZUJsb2NrQXJyYXlTaXplO1xyXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVNYXBCbG9jayhfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvciwgaW5kZXggPSBfYS5pbmRleCwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IHtcclxuICAgICAgICB4OiB4LFxyXG4gICAgICAgIHk6IHksXHJcbiAgICAgICAgd2lkdGg6IG1haW5PYmplY3QuYmxvY2tTaXplLFxyXG4gICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ldyBCbG9ja0NvbnN0cnVjdG9yKF9fYXNzaWduKHt9LCBibG9ja0RhdGEpKTtcclxufVxyXG5mdW5jdGlvbiBtaW5pTWFwcGVyKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICB2YXIgc2VsZWN0RmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1maWxlc1wiKTtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1jb250ZW50XCIpO1xyXG4gICAgdmFyIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25YID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgIG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSA9IHRydWU7XHJcbiAgICB2YXIgbWFwU2l6ZSA9IDUwIC8gMztcclxuICAgIGZpbGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgbmV3TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgbWFwU2l6ZVdpZHRoID0gbWFpbk9iamVjdC5tYXBXaWR0aCAqIDM7XHJcbiAgICB2YXIgbWFwU2l6ZUhlaWdodCA9IG1haW5PYmplY3QubWFwSGVpZ2h0ICogMztcclxuICAgIG5ld01hcFsnd2lkdGgnXSA9IG1hcFNpemVXaWR0aDtcclxuICAgIG5ld01hcFsnaGVpZ2h0J10gPSBtYXBTaXplSGVpZ2h0O1xyXG4gICAgdmFyIG1pbmlNYXBDdHggPSBuZXdNYXAuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TWFwKTtcclxuICAgIG1hcE9iamVjdERyYXcoe1xyXG4gICAgICAgIGN0eDogbWluaU1hcEN0eCxcclxuICAgICAgICBhbGxCbG9ja3M6IGFsbEJsb2NrcyxcclxuICAgICAgICBjYW1lcmFQb3NpdGlvblg6IGNhbWVyYVBvc2l0aW9uWCxcclxuICAgICAgICBjYW1lcmFQb3NpdGlvblk6IGNhbWVyYVBvc2l0aW9uWSxcclxuICAgICAgICBtYXBTaXplOiBtYXBTaXplLFxyXG4gICAgICAgIG1hcFNpemVXaWR0aDogbWFwU2l6ZVdpZHRoLFxyXG4gICAgICAgIG1hcFNpemVIZWlnaHQ6IG1hcFNpemVIZWlnaHRcclxuICAgIH0pO1xyXG4gICAgcHJldmlld18xLnNob3dFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICB2YXIgY2FtZXJhUG9zaXRpb25YID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvblkgPSBhbGxCbG9ja3NbMF0ueU1vdmU7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsnbm9kZU5hbWUnXSA9PT0gJ0NBTlZBUycpIHtcclxuICAgICAgICAgICAgdmFyIHBvc1ggPSBldmVudFsnY2xpZW50WCddIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRMZWZ0J107XHJcbiAgICAgICAgICAgIHZhciBwb3NZID0gZXZlbnRbJ2NsaWVudFknXSAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0VG9wJ107XHJcbiAgICAgICAgICAgIHNldE1hcEFzQ2xpY2soeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCB4OiBwb3NYICogbWFwU2l6ZSwgeTogcG9zWSAqIG1hcFNpemUgfSk7XHJcbiAgICAgICAgICAgIG1hcE9iamVjdERyYXcoe1xyXG4gICAgICAgICAgICAgICAgY3R4OiBtaW5pTWFwQ3R4LFxyXG4gICAgICAgICAgICAgICAgYWxsQmxvY2tzOiBhbGxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3NpdGlvblg6IGNhbWVyYVBvc2l0aW9uWCxcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uWTogY2FtZXJhUG9zaXRpb25ZLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZTogbWFwU2l6ZSxcclxuICAgICAgICAgICAgICAgIG1hcFNpemVXaWR0aDogbWFwU2l6ZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZUhlaWdodDogbWFwU2l6ZUhlaWdodCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWluaU1hcHBlciA9IG1pbmlNYXBwZXI7XHJcbmZ1bmN0aW9uIG1hcE9iamVjdERyYXcoX2EpIHtcclxuICAgIHZhciBjdHggPSBfYS5jdHgsIGFsbEJsb2NrcyA9IF9hLmFsbEJsb2NrcywgY2FtZXJhUG9zaXRpb25ZID0gX2EuY2FtZXJhUG9zaXRpb25ZLCBjYW1lcmFQb3NpdGlvblggPSBfYS5jYW1lcmFQb3NpdGlvblgsIG1hcFNpemUgPSBfYS5tYXBTaXplLCBtYXBTaXplV2lkdGggPSBfYS5tYXBTaXplV2lkdGgsIG1hcFNpemVIZWlnaHQgPSBfYS5tYXBTaXplSGVpZ2h0O1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBtYXBTaXplV2lkdGgsIG1hcFNpemVIZWlnaHQpO1xyXG4gICAgY29uc29sZS5sb2coYWxsQmxvY2tzKTtcclxuICAgIGFsbEJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGV0YWlscykge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gKGl0ZW0uZGV0YWlscy5tYXBDb2xvcikgPyBpdGVtLmRldGFpbHMubWFwQ29sb3IgOiBcInJnYmEoMjI1LCAxNjksIDAsIDEpXCI7IC8vaXRlbS5kZXRhaWxzLm1hcENvbG9yLy9cInJnYmEoMjI1LCAxNjksIDAsIDEpXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgoaXRlbS54KSA/IGl0ZW0ueCAvIG1hcFNpemUgOiAwLCAoaXRlbS55TW92ZSkgPyBpdGVtLnkgLyBtYXBTaXplIDogMCwgNTAgLyBtYXBTaXplLCA1MCAvIG1hcFNpemUpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9jdHguc2F2ZSgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIyNSwgMjU1LCAyNTUsIDEpXCI7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgucmVjdCgoY2FtZXJhUG9zaXRpb25YIC8gbWFwU2l6ZSkgKiAtMSwgKGNhbWVyYVBvc2l0aW9uWSAvIG1hcFNpemUpICogLTEsIHdpbmRvdy5pbm5lcldpZHRoIC8gbWFwU2l6ZSwgd2luZG93LmlubmVySGVpZ2h0IC8gbWFwU2l6ZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAvL2N0eC5yZXN0b3JlKClcclxufVxyXG5mdW5jdGlvbiBzZXRNYXBBc0NsaWNrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25YID0geCArIGFsbEJsb2Nrc1swXS54TW92ZTsgLy9NYXRoLm1heChhbGxCbG9ja3NbMF0ueE1vdmUsIHgpIC0gTWF0aC5taW4oYWxsQmxvY2tzWzBdLnhNb3ZlLCB4KTtcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblkgPSB5ICsgYWxsQmxvY2tzWzBdLnlNb3ZlOyAvL01hdGgubWF4KGFsbEJsb2Nrc1swXS55TW92ZSwgeSkgLSBNYXRoLm1pbihhbGxCbG9ja3NbMF0ueU1vdmUsIHkpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCbG9ja3NfMiA9IGFsbEJsb2NrczsgX2kgPCBhbGxCbG9ja3NfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBhbGxCbG9ja3NfMltfaV07XHJcbiAgICAgICAgYmxvY2sueE1vdmUgLT0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblgpO1xyXG4gICAgICAgIGJsb2NrLnlNb3ZlIC09IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25ZKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBjb2xsaXNpb25EZXRlY3RvcihfYSkge1xyXG4gICAgdmFyIG9iamVjdCA9IF9hLm9iamVjdCwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgaWYgKCFvYmplY3QgfHwgIXRhcmdldClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB0YXJnZXQud2lkdGggPSBwYXJzZUludCh0YXJnZXQud2lkdGgpO1xyXG4gICAgdGFyZ2V0LmhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5oZWlnaHQpO1xyXG4gICAgb2JqZWN0LndpZHRoID0gcGFyc2VJbnQob2JqZWN0LndpZHRoKTtcclxuICAgIG9iamVjdC5oZWlnaHQgPSBwYXJzZUludChvYmplY3QuaGVpZ2h0KTtcclxuICAgIHZhciB4TWluID0gTWF0aC5taW4ob2JqZWN0LnhNb3ZlLCB0YXJnZXQueCk7XHJcbiAgICB2YXIgeU1pbiA9IE1hdGgubWluKG9iamVjdC55TW92ZSwgdGFyZ2V0LnkpO1xyXG4gICAgdmFyIHhNYXggPSBNYXRoLm1heChvYmplY3QueE1vdmUgKyBvYmplY3Qud2lkdGgsIHRhcmdldC54ICsgdGFyZ2V0LndpZHRoKTtcclxuICAgIHZhciB5TWF4ID0gTWF0aC5tYXgob2JqZWN0LnlNb3ZlICsgb2JqZWN0LmhlaWdodCwgdGFyZ2V0LnkgKyB0YXJnZXQuaGVpZ2h0KTtcclxuICAgIHZhciByZXNYID0geE1heCAtIHhNaW47XHJcbiAgICB2YXIgcmVzWSA9IHlNYXggLSB5TWluO1xyXG4gICAgdmFyIGNvbGxpc2lvbiA9IChyZXNYID4gb2JqZWN0LndpZHRoIHx8IHJlc1kgPiBvYmplY3QuaGVpZ2h0KSA/IGZhbHNlIDogXCJjb2xsaXNpb25cIjtcclxuICAgIGlmIChjb2xsaXNpb24pXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0cy5jb2xsaXNpb25EZXRlY3RvciA9IGNvbGxpc2lvbkRldGVjdG9yO1xyXG5mdW5jdGlvbiBtb3ZlU2luZ2xlQmxvY2soX2EpIHtcclxuICAgIHZhciB4TW92ZVZhbHVlID0gX2EueE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZSA9IF9hLnlNb3ZlVmFsdWU7XHJcbiAgICBpZiAoeE1vdmVWYWx1ZSlcclxuICAgICAgICB0aGlzLnhNb3ZlICs9IHhNb3ZlVmFsdWU7XHJcbiAgICBpZiAoeU1vdmVWYWx1ZSlcclxuICAgICAgICB0aGlzLnlNb3ZlICs9IHlNb3ZlVmFsdWU7XHJcbn1cclxuZXhwb3J0cy5tb3ZlU2luZ2xlQmxvY2sgPSBtb3ZlU2luZ2xlQmxvY2s7XHJcbmZ1bmN0aW9uIG1vdmVBbGxTY2VuZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCB4TW92ZVZhbHVlID0gX2EueE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZSA9IF9hLnlNb3ZlVmFsdWU7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrOyBfaSA8IF9iLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBzaW5nbGVCbG9jayA9IF9iW19pXTtcclxuICAgICAgICBzaW5nbGVCbG9jay5tb3ZlU2luZ2xlQmxvY2soeyB4TW92ZVZhbHVlOiB4TW92ZVZhbHVlLCB5TW92ZVZhbHVlOiB5TW92ZVZhbHVlIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubW92ZUFsbFNjZW5lID0gbW92ZUFsbFNjZW5lO1xyXG5mdW5jdGlvbiBjaGFuZ2VPYmplY3RNb2RlbChfYSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IF9hLnJlc3VsdCwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBpZiAoIW1haW5PYmplY3QgfHwgIXJlc3VsdCB8fCAhbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtIHx8IG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSB8fCBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgY3VycmVudEJsb2NrID0gYWxsQmxvY2tzW3Jlc3VsdC5pbmRleF07XHJcbiAgICAvL2NvbnNvbGUubG9nKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgXCI8PFwiLCBjdXJyZW50QmxvY2spXHJcbiAgICB2YXIgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGN1cnJlbnRCbG9jayApXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIFwifFwiKVxyXG4gICAgaWYgKCFtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyKSB7XHJcbiAgICAgICAgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS50eXBlID09PSBcImJhY2tncm91bmQtd2FsbFwiICYmIGN1cnJlbnRCbG9jay5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ud2lkdGggPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5oZWlnaHQgPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS54ID0gY3VycmVudEJsb2NrLng7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueSA9IGN1cnJlbnRCbG9jay55O1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnhNb3ZlID0gY3VycmVudEJsb2NrLnhNb3ZlO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnlNb3ZlID0gY3VycmVudEJsb2NrLnlNb3ZlO1xyXG4gICAgICAgICAgICBjdXJyZW50QmxvY2suYmFja2dyb3VuZFRleHR1cmUgPSBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRCbG9jay5kZXRhaWxzID0gc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyID09PSAnZGVzdHJveWVyJykge1xyXG4gICAgICAgIGlmIChjdXJyZW50QmxvY2suZGV0YWlscyAmJiBjdXJyZW50QmxvY2suZGV0YWlscy52YWx1ZU9mTW92ZSkge1xyXG4gICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLnBvc2l0aW9uUmVkdWNlcih7IGFsbEJsb2NrczogYWxsQmxvY2tzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50QmxvY2sud2lkdGggPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICBjdXJyZW50QmxvY2suaGVpZ2h0ID0gbWFpbk9iamVjdC5ibG9ja1NpemU7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmRldGFpbHMgPSBudWxsO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5iYWNrZ3JvdW5kVGV4dHVyZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyID09PSAncmVkYWN0b3JEZWNvcmF0aW9uJykge1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5iYWNrZ3JvdW5kVGV4dHVyZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIFwifHxcIilcclxufVxyXG5leHBvcnRzLmNoYW5nZU9iamVjdE1vZGVsID0gY2hhbmdlT2JqZWN0TW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBlbGV2YXRvck1vdmUoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSwgZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLnR5cGUgPT09ICdlbGV2YXRvcicpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5kZXRhaWxzLnZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueU1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueU1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID49IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLCBjdXJyZW50VmFsdWUsIGRlZmF1bHRWYWx1ZSwgXCI8PDw8XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZWxldmF0b3JNb3ZlID0gZWxldmF0b3JNb3ZlO1xyXG4vKlxyXG5cclxuXCJjdXJyZW50VmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY29uc3RydWN0b3JWYWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50RGlyZWN0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgXCJjb25zdHJ1Y3RvckRpcmVjdGlvblwiOiB0cnVlLFxyXG4gXCJpZFwiOiBcImVsZXZhdG9yXzFcIixcclxuICAgICAgICBcInRleHR1cmVcIjogXCIvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvZWxldmF0b3IucG5nXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZXZhdG9yXCIsXHJcbiAgICAgICAgXCJzcGVlZFwiOiA1LFxyXG4gICAgICAgIFwibW92ZURpcmVjdGlvblwiOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgXCJ2YWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50VmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudERpcmVjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgIFwidHlwZVwiOiBcImVsZXZhdG9yXCIsXHJcbiAgICAgICAgXCJjb2xsaXNpb25cIjogdHJ1ZVxyXG4qL1xyXG5mdW5jdGlvbiBibG9ja0FuaW1hdGlvbnMoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gdHJ1ZTsgfVxyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5zeCkgPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZFRleHR1cmUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCArPSB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnNXaWR0aDtcclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCkgPj0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZGV0YWlscykge1xyXG4gICAgICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5kZXRhaWxzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuc3ggKz0gdGhpcy5kZXRhaWxzLnNXaWR0aDtcclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5kZXRhaWxzLnN4KSA+PSB0aGlzLmRldGFpbHMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnN4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmJsb2NrQW5pbWF0aW9ucyA9IGJsb2NrQW5pbWF0aW9ucztcclxuZnVuY3Rpb24gc3RhaXJzTW92ZSgpIHtcclxufVxyXG5leHBvcnRzLnN0YWlyc01vdmUgPSBzdGFpcnNNb3ZlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL3BhbmVsRm9ybVBhcnRHZW5lcmF0b3JcIik7XHJcbnZhciBnbG9iYWxWYXJpYWJsZXNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKTtcclxuLy8gPT09PT09PT09PT09PSAgRGlhbG9nICA9PT09PT09PT09PT0vL1xyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dGaWVsZHMoKSB7XHJcbiAgICB2YXIgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU90aGVyRGlhbG9nKF9hKSB7XHJcbiAgICB2YXIgYWxsRGlhbG9ncyA9IF9hLmFsbERpYWxvZ3M7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpYWxvZ0Zvcm0sIGZpbmFsRGlhbG9nQmxvY2tzLCBhbGxJbm5lckJ1dHRvbk9iamVjdHMsIGlkLCBfaSwgYWxsRGlhbG9nc18xLCBkaWFsb2csIHF1ZXN0aW9uSXRlbXMsIGJsb2NrRGF0YV8xLCBibG9ja0RhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxEaWFsb2dzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgYWxsRGlhbG9nc18xID0gYWxsRGlhbG9nczsgX2kgPCBhbGxEaWFsb2dzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IGFsbERpYWxvZ3NfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSXRlbXMgPSBsb2FkUXVlc3Rpb25zU2VjdGlvbih7IHF1ZXN0aW9uQmFzZTogZGlhbG9nLnF1ZXN0aW9ucywgY3VycmVudElkOiBpZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgKz0gXCI8ZGl2IGlkPVxcXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkICsgXCJcXFwiIGNsYXNzPVxcXCJkaWFsb2ctYmxvY2std3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgPGg0PkRpYWxvZyBJRDogXCIgKyBkaWFsb2cuaWQgKyBcIlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZGlhbG9nLWlkLWZpZWxkLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiXCIgKyBkaWFsb2cuaWQgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwicmVtb3ZlLWRpYWxvZy1cIiArIGlkICsgXCJcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJidXR0b24tcmVqZWN0XFxcIj5kZWxldGUgZGlhbG9nPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlcXVpcmVtZW50LWl0ZW0td3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJsZT5cXG4gICAgICAgICAgICAgICAgICAgIDxwPkRpYWxvZyBhY3Rpb25zIDxzcGFuPlxcXCJub25lXFxcIjwvc3Bhbj4gIDxzcGFuPlxcXCJnaXZlX29iamVjdFxcXCI8L3NwYW4+IDxzcGFuPlxcXCJyZXF1aXJlX29iamVjdFxcXCI8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJkaWFsb2ctYWN0aW9uLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcImRpYWxvZyBhY3Rpb25zXFxcIiB2YWx1ZT1cXFwiXCIgKyBkaWFsb2cuYWN0aW9uICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmxlPlxcbiAgICAgICAgICAgICAgICA8bGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8cD5OdW1iZXIgb2YgcmVxdWlyZSBvYmplY3RzIHRvIGFjdGl2YXRlIGRpYWxvZzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibnVtYmVyLW9mLWVsZW1lbnRzLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwibnVtYmVyIG9mIHJlcXVpcmUgZWxlbWVudHNcXFwiIHZhbHVlPVxcXCJcIiArICgoZGlhbG9nLm51bWJlck9mUmVxdWlyZUl0ZW1zKSA/IGRpYWxvZy5udW1iZXJPZlJlcXVpcmVJdGVtcyA6IFwiXCIpICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmxlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxwPkRpYWxvZyBtYWluIHRleHQ8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJkaWFsb2ctYmxvY2stXCIgKyBpZCArIFwiXFxcIiBuYW1lPVxcXCJcXFwiPlwiICsgZGlhbG9nLnRleHQgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIlxcXCI+XCIgKyAoKHF1ZXN0aW9uSXRlbXMpID8gcXVlc3Rpb25JdGVtcy5xdWVzdGlvbnMgOiAnJykgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJhZGQtbmV3LXF1ZXN0aW9uLVwiICsgaWQgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rIEFkZCBxdWVzdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YV8xID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQmxvY2tXcmFwcGVyOiBcImRpYWxvZy1ibG9jay13cmFwcGVyLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yOiBcImRpYWxvZy1ibG9jay1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nSWRGaWVsZDogXCJkaWFsb2ctaWQtZmllbGQtXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZERpYWxvZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ld1F1ZXN0aW9uOiBcImFkZC1uZXctcXVlc3Rpb24tXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZURpYWxvZzogXCJyZW1vdmUtZGlhbG9nLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dBY3Rpb25GaWVsZDogXCJkaWFsb2ctYWN0aW9uLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiBcIm51bWJlci1vZi1lbGVtZW50cy1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdDogXCJ0ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2tJZDogYWxsRGlhbG9ncy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogKHF1ZXN0aW9uSXRlbXMpID8gcXVlc3Rpb25JdGVtcy5hbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHMgPSBhbGxJbm5lckJ1dHRvbk9iamVjdHMuY29uY2F0KGJsb2NrRGF0YV8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgKz0gXCI8YnV0dG9uIGlkPVxcXCJhZGQtZGlhbG9nLVwiICsgaWQgKyBcIlxcXCIgPlxcbiAgICAgICAgPHNwYW4+ICsgTmV3IGRpYWxvZzwvc3Bhbj5cXG4gICAgPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Jsb2NrV3JhcHBlcjogXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yOiBcImRpYWxvZy1ibG9jay1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dJZEZpZWxkOiBcImRpYWxvZy1pZC1maWVsZC1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGREaWFsb2c6IFwiYWRkLWRpYWxvZy1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROZXdRdWVzdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGlhbG9nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2tJZDogYWxsRGlhbG9ncy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnNEYXRhOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gYWxsSW5uZXJCdXR0b25PYmplY3RzLmNvbmNhdChibG9ja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvcm0uaW5uZXJIVE1MID0gZmluYWxEaWFsb2dCbG9ja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgeyBkaWFsb2dGb3JtOiBkaWFsb2dGb3JtLCBhbGxJbm5lckJ1dHRvbk9iamVjdHM6IGFsbElubmVyQnV0dG9uT2JqZWN0cyB9XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9iLnNlbnQoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlT3RoZXJEaWFsb2cgPSBjcmVhdGVPdGhlckRpYWxvZztcclxuZnVuY3Rpb24gbG9hZFF1ZXN0aW9uc1NlY3Rpb24oX2EpIHtcclxuICAgIHZhciBxdWVzdGlvbkJhc2UgPSBfYS5xdWVzdGlvbkJhc2UsIGN1cnJlbnRJZCA9IF9hLmN1cnJlbnRJZDtcclxuICAgIGlmICghcXVlc3Rpb25CYXNlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBhbGxRdWVzdGlvbnNCbG9jayA9ICcnO1xyXG4gICAgdmFyIGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyA9IFtdO1xyXG4gICAgdmFyIHF1ZXN0aW9uc0lkID0gMDtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcXVlc3Rpb25CYXNlXzEgPSBxdWVzdGlvbkJhc2U7IF9pIDwgcXVlc3Rpb25CYXNlXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gcXVlc3Rpb25CYXNlXzFbX2ldO1xyXG4gICAgICAgIGFsbFF1ZXN0aW9uc0Jsb2NrICs9IFwiPGRpdiBjbGFzcz1cXFwicXVlc3Rpb24td3JhcHBlclxcXCIgaWQ9XFxcInNpbmdsZS1xdWVzdGlvbkJhc2UtYmxvY2stXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCJcXFwiPlxcbiAgICAgICAgPHA+UmVsYXRlZCBJZCBkaWFsb2c8L3A+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJyZWxhdGVkLXF1ZXN0aW9uLWlkLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlPVxcXCJcIiArIHF1ZXN0aW9uLmlkICsgXCJcXFwiIGNsYXNzPVxcXCJyZWxhdGVkLWlkLWZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9J3F1ZXN0aW9uLXRleHQtXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCInPlwiICsgcXVlc3Rpb24udGV4dCArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJyZW1vdmUtcXVlc3Rpb24tXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCJcXFwiIGNsYXNzPVxcXCJyaWdodC1zaWRlLWJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJidXR0b24tcmVqZWN0XFxcIj4tIHJlbW92ZS1xdWVzdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgIHZhciBibG9ja0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB7XHJcbiAgICAgICAgICAgIGRpYWxvZ0lkOiBjdXJyZW50SWQsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSWQ6IHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICByZWxhdGVkUXVlc3Rpb25JZDogXCJyZWxhdGVkLXF1ZXN0aW9uLWlkLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgcXVlc3Rpb25XcmFwcGVyOiBcInNpbmdsZS1xdWVzdGlvbkJhc2UtYmxvY2stXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yOiBcInF1ZXN0aW9uLXRleHQtXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICByZW1vdmVRdWVzdGlvbjogXCJyZW1vdmUtcXVlc3Rpb24tXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzID0gYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzLmNvbmNhdChibG9ja0RhdGEpO1xyXG4gICAgICAgIHF1ZXN0aW9uc0lkICs9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBxdWVzdGlvbnM6IGFsbFF1ZXN0aW9uc0Jsb2NrLCBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHM6IGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyB9O1xyXG59XHJcbi8vICBhZGQgbmV3IGVsZW1lbnRzXHJcbmZ1bmN0aW9uIGRpYWxvZ0Fuc3dlckJ1dHRvbihfYSkge1xyXG4gICAgdmFyIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IF9hLmFsbElubmVyQnV0dG9uT2JqZWN0cywgYWxsT3RoZXJzRGlhbG9ncyA9IF9hLmFsbE90aGVyc0RpYWxvZ3MsIGJsb2NrRGV0YWlscyA9IF9hLmJsb2NrRGV0YWlscywgY3VycmVudERlc2NyaXB0aW9uSWQgPSBfYS5jdXJyZW50RGVzY3JpcHRpb25JZCwgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIGl0ZW1EYXRhID0gX2EuaXRlbURhdGE7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9sb29wXzEsIF9pLCBhbGxJbm5lckJ1dHRvbk9iamVjdHNfMSwgYnV0dG9uO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgaWYgKCFhbGxJbm5lckJ1dHRvbk9iamVjdHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICBfbG9vcF8xID0gZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZE5ld1F1ZXN0aW9uID0gKGJ1dHRvbi5hZGROZXdRdWVzdGlvbikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5hZGROZXdRdWVzdGlvbikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZURpYWxvZyA9IChidXR0b24ucmVtb3ZlRGlhbG9nKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLnJlbW92ZURpYWxvZykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZERpYWxvZyA9IChidXR0b24uYWRkRGlhbG9nKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmFkZERpYWxvZykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0FjdGlvbkZpZWxkID0gKGJ1dHRvbi5kaWFsb2dBY3Rpb25GaWVsZCkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5kaWFsb2dBY3Rpb25GaWVsZCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0lkRmllbGQgPSAoYnV0dG9uLmRpYWxvZ0lkRmllbGQpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uZGlhbG9nSWRGaWVsZCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHMgPSAoYnV0dG9uLm51bWJlck9mRWxlbWVudHMpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24ubnVtYmVyT2ZFbGVtZW50cykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRBcmVhU2VsZWN0b3IgPSAoYnV0dG9uLnRleHRBcmVhU2VsZWN0b3IpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24udGV4dEFyZWFTZWxlY3RvcikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkZE5ld1F1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTmV3UXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdEaWFsb2dCbG9jayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBidXR0b24ubGFzdEJsb2NrSWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0ucXVlc3Rpb25zID0gYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0ucXVlc3Rpb25zLmNvbmNhdChuZXdEaWFsb2dCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2RpYWxvZy5xdWVzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlhbG9nRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMuc3BsaWNlKGJ1dHRvbi5pZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZGREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGREaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdEaWFsb2dCbG9jayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBidXR0b24ubGFzdEJsb2NrSWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgZmllbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2VycyA9IGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vycy5jb25jYXQobmV3RGlhbG9nQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlhbG9nRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dEFyZWFTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS50ZXh0ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dBY3Rpb25GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0FjdGlvbkZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0uYWN0aW9uID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dJZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nSWRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLmlkID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24ubnVtYmVyT2ZFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mRWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5udW1iZXJPZlJlcXVpcmVJdGVtcyA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLy8gc2F2ZSB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJ1dHRvbi5xdWVzdGlvbnNEYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5xdWVzdGlvbnNEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUXVlc3Rpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogYnV0dG9uLnF1ZXN0aW9uc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0czogYWxsSW5uZXJCdXR0b25PYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzOiBhbGxPdGhlcnNEaWFsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YTogaXRlbURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChfaSA9IDAsIGFsbElubmVyQnV0dG9uT2JqZWN0c18xID0gYWxsSW5uZXJCdXR0b25PYmplY3RzOyBfaSA8IGFsbElubmVyQnV0dG9uT2JqZWN0c18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uID0gYWxsSW5uZXJCdXR0b25PYmplY3RzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShidXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGlhbG9nQW5zd2VyQnV0dG9uID0gZGlhbG9nQW5zd2VyQnV0dG9uO1xyXG5mdW5jdGlvbiByZW1vdmVRdWVzdGlvbnMoX2EpIHtcclxuICAgIHZhciBxdWVzdGlvbnNEYXRhID0gX2EucXVlc3Rpb25zRGF0YSwgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gX2EuYWxsSW5uZXJCdXR0b25PYmplY3RzLCBhbGxPdGhlcnNEaWFsb2dzID0gX2EuYWxsT3RoZXJzRGlhbG9ncywgYmxvY2tEZXRhaWxzID0gX2EuYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZCA9IF9hLmN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgaXRlbURhdGEgPSBfYS5pdGVtRGF0YTtcclxuICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGFuc3dlcikge1xyXG4gICAgICAgIHZhciByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgYW5zd2VyLnJlbW92ZVF1ZXN0aW9uKTtcclxuICAgICAgICB2YXIgdGV4dEFyZWFTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBhbnN3ZXIudGV4dEFyZWFTZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIHJlbGF0ZWRRdWVzdGlvbklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGFuc3dlci5yZWxhdGVkUXVlc3Rpb25JZCk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnMuc3BsaWNlKGFuc3dlci5xdWVzdGlvbklkLCAxKTtcclxuICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZXh0QXJlYVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS50ZXh0ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGVkUXVlc3Rpb25JZCkge1xyXG4gICAgICAgICAgICByZWxhdGVkUXVlc3Rpb25JZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkLCAnfHx8Jyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1thbnN3ZXIuZGlhbG9nSWRdLnF1ZXN0aW9uc1thbnN3ZXIucXVlc3Rpb25JZF0uaWQsIHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcXVlc3Rpb25zRGF0YV8xID0gcXVlc3Rpb25zRGF0YTsgX2kgPCBxdWVzdGlvbnNEYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHF1ZXN0aW9uc0RhdGFfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMihhbnN3ZXIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZ0Zvcm0oX2EpIHtcclxuICAgIHZhciBibG9ja0RldGFpbHMgPSBfYS5ibG9ja0RldGFpbHMsIGN1cnJlbnREZXNjcmlwdGlvbklkID0gX2EuY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmYWNlUGljdHVyZSwgaW5uZXJUZXh0LCBpdGVtRGF0YSwgYWxsT3RoZXJzRGlhbG9ncywgbWFpbkRpYWxvZ1dyYXBwZXIsIG90aGVyRGlhbG9ncztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBmYWNlUGljdHVyZSA9IChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSkgPyBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSA6IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxkaXYgaWQ9XFxcIm1haW4tZGlhbG9nLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgIDxoMz5EaWFsb2c8L2gzPlxcbiAgICAgICAgICAgIDxwPkNyZWF0ZSBQZXJzb24gZGlhbG9nPC9wPlxcbiAgICAgICAgICAgIDxkaXY+XCIgKyAoKGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZUFic29sdXRlKSA/ICdQaWN0dXJlIGlzIHNldCcgOiAnWW91IG11c3Qgc2F2ZSB0aGUgcGljdHVyZSBmaXJzdCcpICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICA8aW1nIHdpZHRoPVxcXCIxMDBcXFwiIGlkPVwiICsgKCdkaWFsb2ctZmFjZS1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBmYWNlUGljdHVyZSArIFwiXFxcIj5cXG5cXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJwcmV2aWV3LWRpYWxvZy1mYWNlXFxcIiBkYXRhLXRhcmdldD0ncHJldmlldy1kaWFsb2ctZmFjZSc+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMS5wbmdcXFwiIHNlbGVjdGVkPVxcXCJzZWxlY3RlZFxcXCI+cHJvZmVzc29yPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMy5wbmdcXFwiPm9sZCBtYW48L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS00LnBuZ1xcXCI+bWFuIDE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS03LnBuZ1xcXCI+bWFuIDI8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS04LnBuZ1xcXCI+T2ZmaWNlcjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTIucG5nXFxcIj5Tb2xkaWVyPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNS5wbmdcXFwiPlJvYm90IHJlZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTYucG5nXFxcIj5ZZWxsb3cgcmVkPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJucGMtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgKChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQubmFtZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQubmFtZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOUEMgbmFtZScpICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIiArICgoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUpID8gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUgOiAnTlBDIG5hbWUnKSArIFwiXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWRpYWxvZy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBuYW1lIGFuZCBwaWN0dXJlPC9idXR0b24+IDxocj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGwtb3RoZXJzLWRpYWxvZ3NcXFwiIGlkPVxcXCJhbGwtb3RoZXJzLWRpYWxvZ3NcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbE90aGVyc0RpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1vdGhlcnMtZGlhbG9nc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluRGlhbG9nV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaWFsb2ctd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjcmVhdGVPdGhlckRpYWxvZyh7IGFsbERpYWxvZ3M6IGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2VycyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJEaWFsb2dzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3RoZXJEaWFsb2dzKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhbGxPdGhlcnNEaWFsb2dzLmFwcGVuZENoaWxkKG90aGVyRGlhbG9ncy5kaWFsb2dGb3JtKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRpYWxvZ0Fuc3dlckJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHM6IG90aGVyRGlhbG9ncy5hbGxJbm5lckJ1dHRvbk9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzOiBhbGxPdGhlcnNEaWFsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlRGlhbG9nRm9ybSA9IGNyZWF0ZURpYWxvZ0Zvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBfX0hPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDozMzAwJztcclxuZXhwb3J0cy5fX0hPU1QgPSBfX0hPU1Q7XHJcbnZhciBfX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ibG9ja3MnO1xyXG5leHBvcnRzLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMID0gX19CTE9DS19DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0JMT0NLX0JBQ0tHUk9VTkRfQ09OU1RSVUNUT1JfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWJhY2tncm91bmQtYmxvY2tzJztcclxuZXhwb3J0cy5fX0JMT0NLX0JBQ0tHUk9VTkRfQ09OU1RSVUNUT1JfVVJMID0gX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTDtcclxudmFyIF9fQ0hBUkFDVEVSX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1jaGFyYWN0ZXJzJztcclxuZXhwb3J0cy5fX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwgPSBfX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0VORU1ZX0RFVEFJTFNfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWdyb3VuZC1lbmVteSc7XHJcbnZhciBfX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ncm91bmQtZW5lbXktcmVkYWN0b3InO1xyXG5leHBvcnRzLl9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMID0gX19FTkVNWV9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX01BUF9EQVRBX1VSTCA9ICcvYXBwL2dldC1hbGwtbWFwcyc7XHJcbmV4cG9ydHMuX19NQVBfREFUQV9VUkwgPSBfX01BUF9EQVRBX1VSTDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS92aWV3XCIpO1xyXG52YXIgcmVxdWVzdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXItcmVxdWVzdHMvcmVxdWVzdHNNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGluaXRNYWluRW5naW5lKF9hKSB7XHJcbiAgICB2YXIgTWFpbkdhbWVDb25zdHJ1Y3RvciA9IF9hLk1haW5HYW1lQ29uc3RydWN0b3IsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXBOYW1lLCBibG9ja1NpemUsIGRlZmF1bHRXaWR0aCwgZGVmYXVsdEhlaWdodCwgbWF4SG9yaXpvbnRhbEJsb2NrcywgbWF4VmVydGljYWxCbG9ja3MsIHJlZGFjdG9yRGF0YSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ10ubmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZSA9IDUwLCBkZWZhdWx0V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLyBibG9ja1NpemUpLnRvRml4ZWQoKSwgZGVmYXVsdEhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyBibG9ja1NpemUpLnRvRml4ZWQoKSwgbWF4SG9yaXpvbnRhbEJsb2NrcyA9IDMwMCwgbWF4VmVydGljYWxCbG9ja3MgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFwU2l6ZVRvRm9ybSh7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwTW92ZVNwZWVkOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwV2lkdGg6IGRlZmF1bHRXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwSGVpZ2h0OiBkZWZhdWx0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBEZWZhdWx0V2lkdGg6IGRlZmF1bHRXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGVmYXVsdEhlaWdodDogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SG9yaXpvbnRhbEJsb2NrczogbWF4SG9yaXpvbnRhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmVydGljYWxCbG9ja3M6IG1heFZlcnRpY2FsQmxvY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1NpemU6IGJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVkYWN0b3JCbG9jazogZmlsbEJsb2NrTWFwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2NrQ29uc3RydWN0b3I6IEJsb2NrQ29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQmxvY2tzOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEJsb2NrOiBkZWZhdWx0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBibG9ja1NpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19CTE9DS19DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5ibG9ja0RhdGFiYXNlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmJhY2tncm91bmREYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQ0hBUkFDVEVSX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmNoYXJhY3RlcnNEYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbNCAvKnlpZWxkKi8sIChfYi5lbmVteURhdGFiYXNlID0gX2Muc2VudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZGFjdG9yRGF0YSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlZGFjdG9yRGF0YS5iYWNrZ3JvdW5kRGF0YWJhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBNYWluR2FtZUNvbnN0cnVjdG9yKF9fYXNzaWduKHt9LCByZWRhY3RvckRhdGEpKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuaW5pdE1haW5FbmdpbmUgPSBpbml0TWFpbkVuZ2luZTtcclxuZnVuY3Rpb24gc2V0TWFwU2l6ZVRvRm9ybShfYSkge1xyXG4gICAgdmFyIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICBmb3JtWydob3Jpem9udGFsQmxvY2snXS52YWx1ZSA9IHdpZHRoO1xyXG4gICAgZm9ybVsndmVydGljYWxCbG9jayddLnZhbHVlID0gaGVpZ2h0O1xyXG59XHJcbmV4cG9ydHMuc2V0TWFwU2l6ZVRvRm9ybSA9IHNldE1hcFNpemVUb0Zvcm07XHJcbmZ1bmN0aW9uIGZpbGxCbG9ja01hcChfYSkge1xyXG4gICAgdmFyIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yLCBob3Jpem9udGFsQmxvY2tzID0gX2EuaG9yaXpvbnRhbEJsb2NrcywgdmVydGljYWxCbG9jayA9IF9hLnZlcnRpY2FsQmxvY2ssIGJsb2NrU2l6ZSA9IF9hLmJsb2NrU2l6ZTtcclxuICAgIHZhciBibG9ja0FycmF5ID0gW107XHJcbiAgICB2YXIgaG9yaXpvbnRhbEVuZHMgPSAwO1xyXG4gICAgdmFyIHZlcnRpY2FsRW5kcyA9IDA7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogYmxvY2tTaXplLFxyXG4gICAgICAgIGhlaWdodDogYmxvY2tTaXplLFxyXG4gICAgICAgIGluZGV4OiAwXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob3Jpem9udGFsQmxvY2tzICogdmVydGljYWxCbG9jazsgaSsrKSB7XHJcbiAgICAgICAgYmxvY2tEYXRhLnkgPSB2ZXJ0aWNhbEVuZHM7XHJcbiAgICAgICAgYmxvY2tEYXRhLnggPSBob3Jpem9udGFsRW5kcztcclxuICAgICAgICBibG9ja0RhdGEuaW5kZXggPSBpO1xyXG4gICAgICAgIHZlcnRpY2FsRW5kcyA9ICh2ZXJ0aWNhbEVuZHMgPCAoKHZlcnRpY2FsQmxvY2sgLSAxKSAqIGJsb2NrU2l6ZSkpID8gdmVydGljYWxFbmRzICsgYmxvY2tTaXplIDogMDtcclxuICAgICAgICBob3Jpem9udGFsRW5kcyA9ICh2ZXJ0aWNhbEVuZHMgPT0gMCkgPyBob3Jpem9udGFsRW5kcyArIGJsb2NrU2l6ZSA6IGhvcml6b250YWxFbmRzO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgICAgIGJsb2NrQXJyYXkgPSBibG9ja0FycmF5LmNvbmNhdChuZXcgQmxvY2tDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgYmxvY2tEYXRhKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coQmxvY2tDb25zdHJ1Y3RvciwgYmxvY2tBcnJheSk7XHJcbiAgICByZXR1cm4gYmxvY2tBcnJheTtcclxufVxyXG5leHBvcnRzLmZpbGxCbG9ja01hcCA9IGZpbGxCbG9ja01hcDtcclxuZnVuY3Rpb24gYmFja1RvT2JqZWN0KF9hKSB7XHJcbiAgICB2YXIgZGF0YSA9IF9hLmRhdGEsIGNvbnN0cnVjdG9yID0gX2EuY29uc3RydWN0b3I7XHJcbiAgICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3Rvcik7XHJcbiAgICB2YXIgZmluYWxPYmplY3QgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocmVzLnByb3RvdHlwZSksIGRhdGEpO1xyXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xyXG59XHJcbmV4cG9ydHMuYmFja1RvT2JqZWN0ID0gYmFja1RvT2JqZWN0O1xyXG5mdW5jdGlvbiByZW5kZXJCbG9ja0JveChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMueU1vdmUgPiAwIC0gMTAwICYmIHRoaXMueE1vdmUgPiAwIC0gMTAwICYmIHRoaXMueU1vdmUgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDAgJiYgdGhpcy54TW92ZSA8IHdpbmRvdy5pbm5lcldpZHRoICsgMTAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kZXRhaWxzKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3XzEuY3JlYXRlRnJhbWUuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIHZpZXdfMS5iYWNrZ3JvdW5kUmVuZGVyLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdmlld18xLmNyZWF0ZUJsb2NrUGljdHVyZS5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnJlbmRlckJsb2NrQm94ID0gcmVuZGVyQmxvY2tCb3g7XHJcbmZ1bmN0aW9uIGJsb2NrQW5pbWF0aW9uUmVuZGVyKF9hKSB7XHJcbiAgICB2YXIgYmxvY2sgPSBfYS5ibG9jaztcclxuICAgIGJsb2NrLmJsb2NrQW5pbWF0aW9ucygpO1xyXG59XHJcbmV4cG9ydHMuYmxvY2tBbmltYXRpb25SZW5kZXIgPSBibG9ja0FuaW1hdGlvblJlbmRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZXNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKTtcclxudmFyIGRpYWxvZ0Zvcm1Nb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2RpYWxvZ0Zvcm1Nb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlSW5wdXQoX2EpIHtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBibG9ja0RldGFpbHMsIGlubmVyVGV4dCwgaXRlbURhdGEsIGN1cnJlbnREZXNjcmlwdGlvbklkLCBibG9ja0FsZXJ0TWVzc2FnZSwgYmxvY2tQcmV2aWV3SW1hZ2UsIGxvY2FsUGljdHVyZSwgbWFpblBpY3R1cmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzID0gdGFyZ2V0LmRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1hbGVydC1tZXNzYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stcHJldmlldy1pbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xsaXNpb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dHVyZVwiOiBcIi9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9ibG9jay9ibG9jay0zLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc0Rlc3Ryb3lcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgQmxvY2tzIHNldHRpbmdzICYgUGFyYW1ldGVycyAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMT5CbG9jayBzaXplPC9oMT5cXG4gICAgICAgIDxoMz5CbG9jayB3aWR0aDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayB3aWR0aCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjIwMFxcXCIgaWQ9XCIgKyAoJ3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LndpZHRoKSA/IHRhcmdldC53aWR0aCA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXdpZHRoLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIHdpZHRoPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIGhlaWdodDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayBoZWlnaHQgaW4gcGl4ZWxzPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMDBcXFwiIGlkPVwiICsgKCdoZWlnaHQtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuaGVpZ2h0KSA/IHRhcmdldC5oZWlnaHQgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1oZWlnaHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgaGVpZ2h0PC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay13aWR0aC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIlxcbiAgICAgICAgICAgIDxoMT5CbG9jayBQb3NpdGlvbjwvaDE+XFxuICAgICAgICAgICAgPGgzPkJsb2NrIFg8L2gzPlxcbiAgICAgICAgICAgIDxwPlggcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCItNTBcXFwiIG1heD1cXFwiNTBcXFwiIGlkPVwiICsgKCd4LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5ibG9ja1JlbGF0aXZlWFBvcykgPyB0YXJnZXQuYmxvY2tSZWxhdGl2ZVhQb3MgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS14LXBvcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBYIFBvc2l0aW9uPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIFk8L2gzPlxcbiAgICAgICAgICAgIDxwPlkgcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCItNTBcXFwiIG1heD1cXFwiNTBcXFwiIGlkPVwiICsgKCd5LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5ibG9ja1JlbGF0aXZlWVBvcykgPyB0YXJnZXQuYmxvY2tSZWxhdGl2ZVlQb3MgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS15LXBvcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBZIFBvc2l0aW9uPC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay14LXBvcy0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgRGVzY3JpcHRpb24gID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+RGVzY3JpcHRpb248L2gzPlxcbiAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdkZXNjcmlwdGlvbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgYmxvY2tEZXRhaWxzLmRlc2NyaXB0aW9uICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1kZXNjcmlwdGlvbi1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBEZXNjcmlwdGlvbjwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgcnVsZXJzICYgdGlwcyAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5ydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlRpcHM8L2gzPlxcbiAgICAgICAgICAgIDxwPkEgdGlwcyBob3cgdG8gdXMgdGhpcyBvYmplY3RzLCBpdCBjb3VsZCBiZSBhIHBhcnQgb2Ygc29tZSBtZXNzYWdlLCBcXFwiVXNlICogIHRvIHN0YXJ0IG5ldyBsaW5lXFxcIjwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3RpcHMtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS10aXBzLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFRpcHM8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi10aXBzLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlN1Y2Nlc3MgVGV4dDwvaDM+XFxuICAgICAgICAgICAgPHA+RGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiB5b3UgZG8gZXZlcnl0aGluZyB3cml0ZTogY29sbGVjdCBkYXRlL2tleSwgYnJpbmcgZGF0YS9rZXkgPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnN1Y2Nlc3NUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5zdWNjZXNzVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBUZXh0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tc3VjY2Vzc1RleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+UmVxdWlyZSBUZXh0PC9oMz5cXG4gICAgICAgICAgICA8cD5EaXNwbGF5IGEgbWVzc2FnZSBkZXNjcmliZSBzb21lIFJlcXVpcmVtZW50IGZvciB0aGlzIG9iamVjdCB0byB3b3JrPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmVUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIFRleHQ8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlJlcXVpcmUgT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5SZXF1aXJlIG1lc3NhZ2UsIGRpc3BsYXkgb2JqZWN0IG5lZWRzIGZvciB0aGlzIGJsb2NrIHRvIGV2ZXJ5dGhpbmcgd29yayBmaW5lIFxcbiAgICAgICAgICAgIDxzcGFuPmNvbXB1dGVyX2RhdGE8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+Ymx1ZV9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmdyZWVuX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+eWVsbG93X2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cmVkX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cG93ZXJfY2VsbDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbmVteV9oZWxtZXQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+ZW5lbXlfZGV0YWlsczwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5tZWRfa2l0PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmxhcHRvcF93aXRoX2RhdGE8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+dG9vbHNfY2FzZTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdyZXF1aXJlLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtcmVxdWlyZS1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIE9iamVjdDwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUGljdHVyZSA9IChibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyBibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5QaWN0dXJlID0gKGJsb2NrRGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIDogZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBsb2NhbFBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPkNvbnRhaW4gT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5PYmplY3Qgb3IgZGF0YSBpbnNpZGUgdGhpcyBvYmplY3QgcHJlc3MgJ0UnIGJ1dHRvbiB0byBjb2xsZWN0IFxcbiBleGl0ICAtIHNwZWNpYWwgb2JqZWN0IHRvIGZpbmlzaCB0aGUgbGV2ZWxcXG4gICAgICAgICAgICA8c3Bhbj5jb21wdXRlcl9kYXRhPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmJsdWVfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5ncmVlbl9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnllbGxvd19jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnJlZF9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmV4aXQ8L3NwYW4+ICBleGl0ICAtIGVuZCB0aGUgbGV2ZWxcXG4gICAgICAgICAgICA8c3Bhbj5wb3dlcl9jZWxsPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmVuZW15X2hlbG1ldDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbmVteV9kZXRhaWxzPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPm1lZF9raXQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+bGFwdG9wX3dpdGhfZGF0YTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj50b29sc19jYXNlPC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLmNvbnRhaW4pID8gYmxvY2tEZXRhaWxzLnJ1bGVzLmNvbnRhaW4gOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGltZyB3aWR0aD1cXFwiMTAwXFxcIiBpZD1cIiArICgnY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBtYWluUGljdHVyZSArIFwiXFxcIj5cXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJwcmV2aWV3LWNvbnRhaW4tb2JqZWN0XFxcIiBkYXRhLXRhcmdldD0nc2VsZWN0LXByZXZpZXctYnRuJz5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY29tcHV0ZXItZGF0YS5wbmdcXFwiPkNvbXB1dGVyIGRhdGE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicmVkLWNhcmQucG5nXFxcIj5SZWQgY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJibHVlLWNhcmQucG5nXFxcIj5CbHVlIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZ3JlZW4tY2FyZC5wbmdcXFwiPkdyZWVuIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwieWVsbG93LWNhcmQucG5nXFxcIj5ZZWxsb3cgY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJwb3dlci1jZWxsLnBuZ1xcXCI+UG93ZXIgQ2VsbDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJtZWQta2l0LnBuZ1xcXCI+TWVkIGtpdDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJsYXB0b3AucG5nXFxcIj5MYXB0b3AgY2FzZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ0b29scy1jYXNlLnBuZ1xcXCI+VG9vbHMgY2FzZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJFbmVteS1oZWFkLnBuZ1xcXCI+RW5lbXkgaGVsbWV0IEE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZW5lbXktZGV0YWlscy5wbmdcXFwiPkVuZW15IGRldGFpbCAxPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1jb250YWluLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tcmVxdWlyZVRleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFibG9ja0RldGFpbHMuZGlhbG9nKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaWFsb2dGb3JtTW9kdWxlXzEuY3JlYXRlRGlhbG9nRm9ybSh7IGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXIgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5pbm5lck9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlLXNpemVcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkUmVzdWx0cywgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtd2lkdGgtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1oZWlnaHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS14LXBvcy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXktcG9zLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtZGVzY3JpcHRpb24tYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS10aXBzLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLXRleHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtcmVxdWlyZS1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1jb250YWluLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWRpYWxvZy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAyMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3dpZHRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2hlaWdodC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Jsb2NrUmVsYXRpdmVYUG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3gtcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Jsb2NrUmVsYXRpdmVZUG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3ktcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2Rlc2NyaXB0aW9uLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGlwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyN0aXBzLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd0aXBzIGZpZWxkJyA6ICcgc2F2ZSB0aXBzIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3N1Y2Nlc3NUZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3N1Y2Nlc3NUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3JlcXVpcmUgdGV4dCBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSB0ZXh0IGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3JlcXVpcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAncmVxdWlyZSBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2NvbnRhaW4gb2JqZWN0JyA6ICcgc2F2ZSBjb250YWluIG9iamVjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNjb250YWluLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5kaWFsb2cuZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjbnBjLW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmZpZWxkUmVzdWx0cyA9IGF3YWl0IGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjZGVmYXVsdC1kaWFsb2ctdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypmaWVsZFJlc3VsdHMgPSBhd2FpdCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNkZWZhdWx0LWRpYWxvZy10ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdjb250YWluIG9iamVjdCcgOiAnIHNhdmUgY29udGFpbiBvYmplY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IChmaWVsZFJlc3VsdHMpID8gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIiA+IFN1Y2Nlc3NmdWxseSBzYXZlZCAnXCIgKyBmaWVsZE5hbWUgKyBcIicgPC9wPlwiIDogXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1lcnJvclxcXCIgPlRoZXJlIGlzIGEgcHJvYmxlbSBpbiAnXCIgKyBmaWVsZE5hbWUgKyBcIicgaSBjYW4ndCBzYXZlPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgZGF0YUNoZWNrXzEsIHJlcXVpcmVkUHJldmlld1BpY18xLCBwaWNfMSwgbGlua18xLCBkYXRhRmFjZSwgcGljdHVyZSwgZGF0YUNoZWNrLCByZXF1aXJlZFByZXZpZXdQaWMsIHBpYywgbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdC1wcmV2aWV3LWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXZpZXctZGlhbG9nLWZhY2UnOiByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdvYmplY3RQaWN0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3ByZXZpZXctcmVxdWlyZS1vYmplY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoZWNrXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jb250YWluLW9iamVjdCcpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNfMSA9ICh0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua18xID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBkYXRhQ2hlY2tfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgPSBsaW5rXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljXzFbJ3NyYyddID0gbGlua18xOyAvL2NvbXB1dGVyLWRhdGEucG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1kaWFsb2ctZmFjZScpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUgPSBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2VuZW15T2JqZWN0L2F2YXRhci8nICsgZGF0YUZhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1mYWNlLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVbJ3NyYyddID0gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jb250YWluLW9iamVjdCcpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljID0gKHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBkYXRhQ2hlY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlID0gbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNbJ3NyYyddID0gbGluazsgLy9jb21wdXRlci1kYXRhLnBuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2VuZXJhdGVJbnB1dCA9IGdlbmVyYXRlSW5wdXQ7XHJcbmZ1bmN0aW9uIGNoYW5nZURhdGFJbkJsb2NrKF9hKSB7XHJcbiAgICB2YXIga2V5ID0gX2Eua2V5LCBmaWVsZFNlbGVjdG9yID0gX2EuZmllbGRTZWxlY3RvciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBibG9ja0FsZXJ0TWVzc2FnZSwgY3VycmVudEZpZWxkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWFsZXJ0LW1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpZWxkU2VsZWN0b3IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RmllbGQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJJbnZhbGlkIFZhbHVlIG9mIFwiICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IChjdXJyZW50RmllbGQudmFsdWUpID8gY3VycmVudEZpZWxkLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgKGN1cnJlbnRGaWVsZC52YWx1ZSAmJiB0YXJnZXRba2V5XSAmJiBrZXkgJiYgZmllbGRTZWxlY3RvcikgPyB0cnVlIDogZmFsc2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkSW5uZXJEYXRhKF9hKSB7XHJcbiAgICB2YXIgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHZhciBibG9ja0RldGFpbHMgPSB0YXJnZXQuZGV0YWlscztcclxuICAgIHZhciBpdGVtQmFja2dyb3VuZEltYWdlID0gKGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSkgPyBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10gOiBibG9ja0RldGFpbHNbJ3RleHR1cmUnXTsgLy8gcHJldmlld1RleHR1cmVcclxuICAgIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UgPSAodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlICYmIGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSkgPyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmVbJ3ByZXZpZXdUZXh0dXJlJ10gOlxyXG4gICAgICAgICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gdGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlLnRleHR1cmUgOiBibG9ja0RldGFpbHNbJ3RleHR1cmUnXTtcclxuICAgIHZhciBpdGVtSW1hZ2UgPSAoYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddKSA/IGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSA6IGJsb2NrRGV0YWlsc1sndGV4dHVyZSddO1xyXG4gICAgY29uc29sZS5sb2codGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlLCBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10sIGJsb2NrRGV0YWlsc1sndGV4dHVyZSddLCBpdGVtQmFja2dyb3VuZEltYWdlKTtcclxuICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2UgPSAodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IFwiPGltZyB3aWR0aD1cXFwiNTBcXFwiIHNyYz1cXFwiXCIgKyAoZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgaXRlbUJhY2tncm91bmRJbWFnZSkgKyBcIlxcXCIgYWx0PVxcXCJcIiArIHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZS5pZCArIFwiXFxcIj5cIiA6IFwiXCI7XHJcbiAgICB2YXIgaW5uZXJUZXh0ID0gXCI8ZGl2IGNsYXNzPVxcXCJibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWF0ZXJpYWwtcHJldmlldy13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxpbWcgaWQ9XFxcImJsb2NrLXByZXZpZXctaW1hZ2VcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIHNyYz1cXFwiXCIgKyAoZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgaXRlbUltYWdlKSArIFwiXFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDx1bD48ZGl2IGlkPVxcXCJibG9jay1hbGVydC1tZXNzYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgIDxsaT5OYW1lOiBcIiArIGJsb2NrRGV0YWlscy5pZCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5JbmRleDogXCIgKyB0YXJnZXQuaW5kZXggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+VHlwZTogXCIgKyAoKGJsb2NrRGV0YWlscy50eXBlKSA/IGJsb2NrRGV0YWlscy50eXBlIDogJycpICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPndpZHRoOiBcIiArIHRhcmdldC53aWR0aCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5oZWlnaHQ6IFwiICsgdGFyZ2V0LmhlaWdodCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5YOiBcIiArIHRhcmdldC54ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlk6IFwiICsgdGFyZ2V0LnkgKyBcIjwvbGk+XFxuXFxuICAgIDxwPlwiICsgKCh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gXCJCYWNrZ3JvdW5kIHRleHR1cmVcIiA6IFwiXCIpICsgXCI8L3A+XFxuICAgIFwiICsgYmFja2dyb3VuZEltYWdlICsgXCJcXG4gICAgPC91bD48L2Rpdj48aHI+XCI7XHJcbiAgICB2YXIgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgIGlkTmFtZTogbnVsbFxyXG4gICAgfSk7XHJcbiAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxufVxyXG5leHBvcnRzLmxvYWRJbm5lckRhdGEgPSBsb2FkSW5uZXJEYXRhO1xyXG5mdW5jdGlvbiBlbGVtZW50Q3JlYXRvcihfYSkge1xyXG4gICAgdmFyIHRhZ25hbWUgPSBfYS50YWduYW1lLCBjbGFzc0xpc3QgPSBfYS5jbGFzc0xpc3QsIGlubmVyVGV4dCA9IF9hLmlubmVyVGV4dCwgaWROYW1lID0gX2EuaWROYW1lO1xyXG4gICAgdmFyIG5ld0RvY3VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWduYW1lKTtcclxuICAgIG5ld0RvY3VtZW50LmNsYXNzTmFtZSA9IChjbGFzc0xpc3QpID8gY2xhc3NMaXN0IDogZmFsc2U7XHJcbiAgICBuZXdEb2N1bWVudC5pbm5lckhUTUwgPSBpbm5lclRleHQ7XHJcbiAgICBpZiAoaWROYW1lKVxyXG4gICAgICAgIG5ld0RvY3VtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkTmFtZSk7XHJcbiAgICByZXR1cm4gbmV3RG9jdW1lbnQ7XHJcbn1cclxuZXhwb3J0cy5lbGVtZW50Q3JlYXRvciA9IGVsZW1lbnRDcmVhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxudmFyIHJlcXVlc3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlXCIpO1xyXG52YXIgcHJldmlld18xID0gcmVxdWlyZShcIi4uL3VpL3ByZXZpZXdcIik7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIGJsb2NrQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuLi9jb25zdHJ1Y3RvcnMvYmxvY2tDb25zdHJ1Y3RvclwiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi9ibG9ja0RhdGFSZWRhY3Rvck1vZHVsZVwiKTtcclxuZnVuY3Rpb24gc2V0TWFwU2l6ZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtc2l6ZS1lcnJvcicpO1xyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXQtbWFwLXNpemUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSwgX2ksIGZvcm1fMSwgZmllbGQsIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgZm9ybV8xID0gZm9ybTsgX2kgPCBmb3JtXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm1fMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQubmFtZSAmJiBmaWVsZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQubmFtZSAmJiAhZmllbGQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZUludChmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10pIDwgcGFyc2VJbnQobWFpbk9iamVjdC5tYXBEZWZhdWx0V2lkdGgpIHx8IHBhcnNlSW50KGZvcm1EYXRhWyd2ZXJ0aWNhbEJsb2NrJ10pIDwgcGFyc2VJbnQobWFpbk9iamVjdC5tYXBEZWZhdWx0SGVpZ2h0KSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPk1hcCBtaW4gc2l6ZSBpcyBcIiArIG1haW5PYmplY3QubWFwRGVmYXVsdFdpZHRoICsgXCIgeCBcIiArIG1haW5PYmplY3QubWFwRGVmYXVsdEhlaWdodCArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoZm9ybURhdGFbJ2hvcml6b250YWxCbG9jayddKSA+IHBhcnNlSW50KG1haW5PYmplY3QubWF4SG9yaXpvbnRhbEJsb2NrcykgfHwgcGFyc2VJbnQoZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSkgPiBwYXJzZUludChtYWluT2JqZWN0Lm1heFZlcnRpY2FsQmxvY2tzKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPk1hcCBtYXggc2l6ZSBpcyBcIiArIG1haW5PYmplY3QubWF4SG9yaXpvbnRhbEJsb2NrcyArIFwiIHggXCIgKyBtYWluT2JqZWN0Lm1heFZlcnRpY2FsQmxvY2tzICsgXCI8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGVycm9yRmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFwiPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPlBsZWFzZSB3YWl0IG1hcCBpcyBidWlsZC4uLjwvcD5cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5pbm5lckhUTUwgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEuY2hhbmdlQmxvY2tBcnJheVNpemUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBmb3JtRGF0YTogZm9ybURhdGEsIEJsb2NrQ29uc3RydWN0b3I6IEJsb2NrQ29uc3RydWN0b3IgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9XFxcInNpZGUtcGFuZWwtc3VjY2Vzc1xcXCI+bWFwIHNpemUgc2V0IFwiICsgZm9ybURhdGFbJ2hvcml6b250YWxCbG9jayddICsgXCIgeCBcIiArIGZvcm1EYXRhWyd2ZXJ0aWNhbEJsb2NrJ10gKyBcIiBibG9ja3M8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNldE1hcFNpemUgPSBzZXRNYXBTaXplO1xyXG5mdW5jdGlvbiBnZXRNYXBEYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFwTmFtZSwgcmVzLCBjb252ZXJ0VG9PYmplY3QsIHNpemVGb3JtO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUgPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmFsbE1hcE9iamVjdHMubWFwKGZ1bmN0aW9uIChibG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXRTdGFydE9iamVjdF8xLmJhY2tUb09iamVjdCh7IGRhdGE6IGJsb2NrLCBjb25zdHJ1Y3RvcjogYmxvY2tDb25zdHJ1Y3Rvcl8xLkJsb2NrQ29uc3RydWN0b3IgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0VG9PYmplY3QgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZS52YWx1ZSA9IHJlcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QubWFwV2lkdGggPSByZXMubWFwU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0Lm1hcEhlaWdodCA9IHJlcy5tYXBTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtLmhvcml6b250YWxCbG9jay52YWx1ZSA9IG1haW5PYmplY3QubWFwV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0udmVydGljYWxCbG9jay52YWx1ZSA9IG1haW5PYmplY3QubWFwSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jayA9IGNvbnZlcnRUb09iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld01hcCgpIHtcclxuICAgIHZhciBjcmVhdGVNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZU1hcFwiKTtcclxuICAgIGNyZWF0ZU1hcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVOZXdNYXAgPSBjcmVhdGVOZXdNYXA7XHJcbmZ1bmN0aW9uIGxvYWRNYXAoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3BlbkJ1dHRvbiwgc2VsZWN0RmlsZXMsIGZpbGVDb250YWluZXIsIGNsb3NlRGlhbG9nO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuTWFwXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgICAgICAgICBmaWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1jb250ZW50XCIpO1xyXG4gICAgICAgICAgICBjbG9zZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VEaWFsb2dcIik7XHJcbiAgICAgICAgICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXBGaWxlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld18xLnNob3dFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fTUFQX0RBVEFfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBGaWxlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDb250ZW50KHsgZGlzcGxheUVsZW1lbnQ6IGZpbGVDb250YWluZXIsIGRhdGE6IG1hcEZpbGUsIG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHNlbGVjdEZpbGVzOiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgICAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkTWFwID0gbG9hZE1hcDtcclxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KF9hKSB7XHJcbiAgICB2YXIgZGlzcGxheUVsZW1lbnQgPSBfYS5kaXNwbGF5RWxlbWVudCwgZGF0YSA9IF9hLmRhdGEsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBzZWxlY3RGaWxlcyA9IF9hLnNlbGVjdEZpbGVzO1xyXG4gICAgaWYgKCFkYXRhIHx8ICFkaXNwbGF5RWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICB2YXIgaW5uZXJGaWxlID0gYmxvY2tDcmVhdG9yKHsgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogJ3NpbmdsZS1pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiPGgyPlwiICsgZmlsZS5uYW1lICsgXCI8L2gyPlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5uZXJGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnZXRNYXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIHVybDogZmlsZS5saW5rICsgJy8nICsgZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbWFpbk9iamVjdDogbWFpbk9iamVjdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGxheUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJGaWxlKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFfMSA9IGRhdGE7IF9pIDwgZGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmaWxlID0gZGF0YV8xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGZpbGUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJsb2NrQ3JlYXRvcihfYSkge1xyXG4gICAgdmFyIHRhZyA9IF9hLnRhZywgc3R5bGVDbGFzcyA9IF9hLnN0eWxlQ2xhc3MsIGlubmVyQ29udGVudCA9IF9hLmlubmVyQ29udGVudDtcclxuICAgIHZhciBuZXdCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIG5ld0Jsb2NrLmNsYXNzTmFtZSA9IHN0eWxlQ2xhc3M7XHJcbiAgICBuZXdCbG9jay5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICByZXR1cm4gbmV3QmxvY2s7XHJcbn1cclxuZXhwb3J0cy5ibG9ja0NyZWF0b3IgPSBibG9ja0NyZWF0b3I7XHJcbmZ1bmN0aW9uIHNhdmVNYXAoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZm9ybSwgYnV0dG9uLCBtZXNzYWdlRmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ25ldy1tYXAnXTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUtbWFwLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1tYXAtZXJyb3InKTtcclxuICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0Rm9ybSwgc2F2ZURhdGEsIG1hcEZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtID0gZ2V0Rm9ybURhdGEoeyBmb3JtOiBmb3JtIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Rm9ybSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdEZvcm1bJ3N0YXR1cyddID09PSAncmVqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1lcnJvclxcXCI+RmFpbCB0byBzYXZlIG1hcCwgY2hlY2sgbWFwIE5hbWU8L3A+IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydtYXBTaXplJ10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYWluT2JqZWN0Lm1hcFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1haW5PYmplY3QubWFwSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlRGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybVsnY3JlYXRpbmdUaW1lJ10gPSBzYXZlRGF0YS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybVsnYWxsTWFwT2JqZWN0cyddID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdEZvcm0sICdzYXZlJywgbWFpbk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5wb3N0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19CTE9DS19DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdEZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBGaWxlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSBcIjxwPlNhdmUgdGltZTogXCIgKyAoc2F2ZURhdGEuZ2V0SG91cnMoKSAtIDEpICsgXCIgOiBcIiArIHNhdmVEYXRhLmdldE1pbnV0ZXMoKSArIFwiIDogXCIgKyBzYXZlRGF0YS5nZXRTZWNvbmRzKCkgKyBcIjwvcD5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiArIG1hcEZpbGUudXJsICsgXCIgb25jbGljaz1cXFwiKGZ1bmN0aW9uKCl7IHdpbmRvdy5vcGVuKCdcIiArIG1hcEZpbGUudXJsICsgXCInKX0pKClcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5PcGVuIGluIG5ldyB3aW5kb3c8L2E+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2F2ZU1hcCA9IHNhdmVNYXA7XHJcbmZ1bmN0aW9uIGdldEZvcm1EYXRhKF9hKSB7XHJcbiAgICB2YXIgZm9ybSA9IF9hLmZvcm07XHJcbiAgICBpZiAoIWZvcm0pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBmb3JtXzIgPSBmb3JtOyBfaSA8IGZvcm1fMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZm9ybUl0ZW1zID0gZm9ybV8yW19pXTtcclxuICAgICAgICBpZiAoZm9ybUl0ZW1zLm5hbWUgJiYgZm9ybUl0ZW1zLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtmb3JtSXRlbXMubmFtZV0gPSBmb3JtSXRlbXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1JdGVtcy5uYW1lICYmICFmb3JtSXRlbXMudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJJbmNvcnJlY3QgRGF0YVwiLCBzdGF0dXM6IFwicmVqZWN0XCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGdldERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBoZWFkZXJzOiByZXN1bHRIZWFkZXIsXHJcbiAgICAgICAgYm9keTogKGRhdGEpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAncmVqZWN0JywgbWVzc2FnZTogcmVzLnN0YXR1c1RleHQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiNTAwIE5vIHNlcnZlciBjb25uZWN0aW9uIVwiLCBzdGF0dXM6IFwiZXJyb3JcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2V0RGF0YSA9IGdldERhdGE7XHJcbmZ1bmN0aW9uIHBvc3REYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IChtZXRob2QpID8gbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcclxuICAgICAgICBoZWFkZXJzOiByZXN1bHRIZWFkZXIsXHJcbiAgICAgICAgYm9keTogKGRhdGEpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pO1xyXG59XHJcbmV4cG9ydHMucG9zdERhdGEgPSBwb3N0RGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3JlZGFjdG9yL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbmZ1bmN0aW9uIHByZXZpZXdPZkJsb2NrKF9hKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IF9hLnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50ID0gX2EuZXZlbnQ7XHJcbiAgICB2YXIgcHJldmlld0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0ZWQtaXRlbScpO1xyXG4gICAgaWYgKCFzZWxlY3RlZEJsb2NrUGFuZWxJdGVtKVxyXG4gICAgICAgIGhpZGVFbGVtZW50KHsgZWxlbWVudDogcHJldmlld0VsZW1lbnQgfSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgaXRlbUltYWdlID0gKHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW1bJ3ByZXZpZXdUZXh0dXJlJ10pID8gc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsncHJldmlld1RleHR1cmUnXSA6IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW1bJ3RleHR1cmUnXTtcclxuICAgICAgICBzaG93RWxlbWVudCh7IGVsZW1lbnQ6IHByZXZpZXdFbGVtZW50IH0pO1xyXG4gICAgICAgIHByZXZpZXdFbGVtZW50WydzdHlsZSddID0gXCJtYXJnaW4tdG9wOiBcIiArIChldmVudC5jbGllbnRZICsgMTApICsgXCJweDsgbWFyZ2luLWxlZnQ6IFwiICsgKGV2ZW50LmNsaWVudFggKyAxMCkgKyBcInB4O1wiO1xyXG4gICAgICAgIHByZXZpZXdFbGVtZW50LmlubmVySFRNTCA9IFwiPGltZyBzcmM9XCIgKyAoZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgaXRlbUltYWdlKSArIFwiID5cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnByZXZpZXdPZkJsb2NrID0gcHJldmlld09mQmxvY2s7XHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KF9hKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQ7XHJcbiAgICBpZiAoIWVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxlbWVudC5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcclxufVxyXG5leHBvcnRzLmhpZGVFbGVtZW50ID0gaGlkZUVsZW1lbnQ7XHJcbmZ1bmN0aW9uIHNob3dFbGVtZW50KF9hKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQ7XHJcbiAgICBpZiAoIWVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxlbWVudC5zdHlsZSA9ICdkaXNwbGF5OiBibG9jayc7XHJcbn1cclxuZXhwb3J0cy5zaG93RWxlbWVudCA9IHNob3dFbGVtZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYmxvY2tJbnRlcmFjdE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrSW50ZXJhY3RNb2R1bGVcIik7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi9wcmV2aWV3XCIpO1xyXG52YXIgc2lkZVBhbmVsQWN0aW9uc18xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL3NpZGVQYW5lbEFjdGlvbnNcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMiA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja0RhdGFSZWRhY3Rvck1vZHVsZVwiKTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG5mdW5jdGlvbiBpbml0VmlldygpIHtcclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVkYWN0b3ItZmllbGQnKTtcclxuICAgIHRoaXMuY29udGV4dFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB0aGlzLmNvbnRleHRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmNvbnRleHRXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNvbnRleHRIZWlnaHQ7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG59XHJcbmV4cG9ydHMuaW5pdFZpZXcgPSBpbml0VmlldztcclxuZnVuY3Rpb24gbWFwTW92ZUNvbnRyb2xsZXJzKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHhNb3ZlVmFsdWUgPSAwLCB5TW92ZVZhbHVlID0gMDtcclxuICAgICAgICBpZiAobWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDg3OlxyXG4gICAgICAgICAgICAgICAgeU1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjg6XHJcbiAgICAgICAgICAgICAgICB4TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQgKiAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDgzOlxyXG4gICAgICAgICAgICAgICAgeU1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkICogLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2NTpcclxuICAgICAgICAgICAgICAgIHhNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc3OlxyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMi5taW5pTWFwcGVyKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBibG9ja0ludGVyYWN0TW9kdWxlXzEubW92ZUFsbFNjZW5lKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgeE1vdmVWYWx1ZTogeE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZTogeU1vdmVWYWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9IF9hW19pXTtcclxuICAgICAgICAgICAgLy9sZXQgY29weU9mYmxvY2sgPSBPYmplY3QuYXNzaWduKHt9LCBibG9jaylcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsnbm9kZU5hbWUnXSAhPSAnQ0FOVkFTJylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBibG9ja0ludGVyYWN0TW9kdWxlXzEuY29sbGlzaW9uRGV0ZWN0b3IoeyBvYmplY3Q6IGJsb2NrLCB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRMZWZ0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0VG9wJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1XHJcbiAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBibG9jay5pbmRleCwgXCIgPCBCbG9jayBpbmRleFwiKVxyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5vcGVuUmVkYWN0b3JXaW5kb3coeyBibG9ja0RhdGE6IGJsb2NrLCBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tJbnRlcmFjdE1vZHVsZV8xLmNoYW5nZU9iamVjdE1vZGVsKHsgcmVzdWx0OiByZXN1bHQsIG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcHJldmlld18xLnByZXZpZXdPZkJsb2NrKHsgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTogbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbklkID0gZXZlbnQudGFyZ2V0WydkYXRhc2V0J10uYnV0dG9uSWQ7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b25JZCkge1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckJsb2Nrcyc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yRGVjb3JhdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5iYWNrZ3JvdW5kRGF0YWJhc2UsIHNlbGVjdEl0ZW06IGJ1dHRvbklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yQ2hhcmFjdGVycyc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5jaGFyYWN0ZXJzRGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JFbmVteSc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5lbmVteURhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZW15JykgIGVuZW15RGF0YWJhc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWFwTW92ZUNvbnRyb2xsZXJzID0gbWFwTW92ZUNvbnRyb2xsZXJzO1xyXG5mdW5jdGlvbiByZW5kZXJJdGVtc1RvU2lkZUxpc3QoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZGF0YUJhc2UgPSBfYS5kYXRhQmFzZSwgc2VsZWN0SXRlbSA9IF9hLnNlbGVjdEl0ZW07XHJcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtaW5zdHJ1bWVudGFsLXBhbmVsJyk7XHJcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhQmFzZSk7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChibG9ja0l0ZW0pIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJsb2NrSXRlbSlcclxuICAgICAgICB2YXIgY29weU9mQmxvY2tEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgYmxvY2tJdGVtKTtcclxuICAgICAgICB2YXIgaXRlbUltYWdlID0gKGNvcHlPZkJsb2NrRGF0YVsncHJldmlld1RleHR1cmUnXSkgPyBjb3B5T2ZCbG9ja0RhdGFbJ3ByZXZpZXdUZXh0dXJlJ10gOiBjb3B5T2ZCbG9ja0RhdGFbJ3RleHR1cmUnXTtcclxuICAgICAgICB2YXIgb2JqID0gc2lkZVBhbmVsQWN0aW9uc18xLmJsb2NrQ3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6ICdzaW5nbGUtYmxvY2staXRlbScsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8aW1nIHdpZHRoPVxcXCIxMDAlXFxcIiB0aXRsZT1cXFwiXCIgKyAoKGNvcHlPZkJsb2NrRGF0YS5kZXRhaWxzKSA/IGNvcHlPZkJsb2NrRGF0YS5kZXRhaWxzLmRlc2NyaXB0aW9uIDogY29weU9mQmxvY2tEYXRhLmRlc2NyaXB0aW9uKSArIFwiXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGl0ZW1JbWFnZSkgKyBcIic+XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc2lkZVBhbmVsSXRlbXNTZWxlY3RQcm9jZXNzKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgYmxvY2tJdGVtOiBjb3B5T2ZCbG9ja0RhdGEgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG9iaik7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhQmFzZV8xID0gZGF0YUJhc2U7IF9pIDwgZGF0YUJhc2VfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2tJdGVtID0gZGF0YUJhc2VfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShibG9ja0l0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0LnByZXBlbmQoY3JlYXRlRGVzdHJveUJsb2NrKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgc2VsZWN0SXRlbTogc2VsZWN0SXRlbSB9KSk7XHJcbn1cclxuZXhwb3J0cy5yZW5kZXJJdGVtc1RvU2lkZUxpc3QgPSByZW5kZXJJdGVtc1RvU2lkZUxpc3Q7XHJcbmZ1bmN0aW9uIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2VzcyhfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBibG9ja0l0ZW0gPSBfYS5ibG9ja0l0ZW07XHJcbiAgICAvL2NvbnNvbGUubG9nKGJsb2NrSXRlbSlcclxuICAgIHZhciBjb3B5T2ZibG9ja0l0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBibG9ja0l0ZW0pO1xyXG4gICAgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSkge1xyXG4gICAgICAgIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IChjb3B5T2ZibG9ja0l0ZW0uaWQgIT0gbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmlkKSA/IGNvcHlPZmJsb2NrSXRlbSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gY29weU9mYmxvY2tJdGVtO1xyXG4gICAgcHJldmlld18xLnByZXZpZXdPZkJsb2NrKHsgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTogbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBldmVudDogZXZlbnQgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGVzdHJveUJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEl0ZW0gPSBfYS5zZWxlY3RJdGVtO1xyXG4gICAgdmFyIG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2JqLmNsYXNzTmFtZSA9ICdzaW5nbGUtYmxvY2staXRlbSc7XHJcbiAgICBvYmouaW5uZXJIVE1MID0gXCI8aW1nIHRpdGxlPVxcXCJcIiArICgoc2VsZWN0SXRlbSA9PT0gXCJyZWRhY3RvckRlY29yYXRpb25cIikgPyAnRGVsZXRlIG9ubHkgYmFja2dyb3VuZCcgOiAnRGVsZXRlIGJsb2NrIGl0ZW0nKSArIFwiXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgc3JjPSdcIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Rlc3Ryb3kucG5nJykgKyBcIic+XCI7XHJcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBibG9ja0l0ZW06IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZGVzdHJveWVyJyxcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3llcjogKHNlbGVjdEl0ZW0pID8gc2VsZWN0SXRlbSA6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9ibG9jay9kZXN0cm95LnBuZydcclxuICAgICAgICAgICAgfSB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBjbGVhclZpZXcoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHRXaWR0aCwgdGhpcy5jb250ZXh0SGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLmNsZWFyVmlldyA9IGNsZWFyVmlldztcclxuZnVuY3Rpb24gYmFja2dyb3VuZFJlbmRlcihfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWdCYWNrZ3JvdW5kLCBzeCwgc3k7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRUZXh0dXJlKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQmFja2dyb3VuZC5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCkgPyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzeSA9ICh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN5KSA/IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3kgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5PYmplY3QuY3R4LmRyYXdJbWFnZShpbWdCYWNrZ3JvdW5kLCBzeCwgc3ksIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc1dpZHRoLCB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnNIZWlnaHQsIHRoaXMueE1vdmUsIHRoaXMueU1vdmUsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUud2lkdGgsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZFRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYmFja2dyb3VuZFJlbmRlciA9IGJhY2tncm91bmRSZW5kZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrUGljdHVyZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWcsIHNXaWR0aCwgc0hlaWdodCwgc3gsIHN5O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFpbk9iamVjdC5jdHguc2F2ZSgpOyAvLyBzV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgdGhpcy5kZXRhaWxzLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgc1dpZHRoID0gKHRoaXMuZGV0YWlscy5zV2lkdGgpID8gdGhpcy5kZXRhaWxzLnNXaWR0aCA6IHRoaXMuZGV0YWlscy5pbWFnZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNIZWlnaHQgPSAodGhpcy5kZXRhaWxzLnNIZWlnaHQpID8gdGhpcy5kZXRhaWxzLnNIZWlnaHQgOiB0aGlzLmRldGFpbHMuaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAodGhpcy5kZXRhaWxzLnN4KSA/IHRoaXMuZGV0YWlscy5zeCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3kgPSAodGhpcy5kZXRhaWxzLnN5KSA/IHRoaXMuZGV0YWlscy5zeSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uZGV0YWlscy5zeFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5PYmplY3QuY3R4LmRyYXdJbWFnZShpbWcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB0aGlzLnhNb3ZlICsgcGFyc2VJbnQodGhpcy5ibG9ja1JlbGF0aXZlWFBvcyksIHRoaXMueU1vdmUgKyBwYXJzZUludCh0aGlzLmJsb2NrUmVsYXRpdmVZUG9zKSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5PYmplY3QuY3R4LnJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uZGV0YWlscy5zeFxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQmxvY2tQaWN0dXJlID0gY3JlYXRlQmxvY2tQaWN0dXJlO1xyXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgaWYgKCFtYWluT2JqZWN0LmN0eClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgLjMpXCI7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5maWxsVGV4dCh0aGlzLmluZGV4LCB0aGlzLnhNb3ZlICsgNSwgdGhpcy55TW92ZSArIDE1KTtcclxuICAgIG1haW5PYmplY3QuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwxNTMsMjU1LDAuNCknO1xyXG4gICAgbWFpbk9iamVjdC5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5yZWN0KHRoaXMueE1vdmUsIHRoaXMueU1vdmUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIG1haW5PYmplY3QuY3R4LnN0cm9rZSgpO1xyXG4gICAgLy9tYWluT2JqZWN0LmN0eC5zdHJva2UoKVxyXG59XHJcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==