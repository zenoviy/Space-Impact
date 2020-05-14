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
exports.push([module.i, "body {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden; }\n\ncanvas {\n    background: #00534b; }\n\n.side-menu-wrapper {\n    background: #bbbbbb;\n    height: 96vh;\n    right: 0;\n    max-width: 300px;\n    min-width: 100px;\n    padding: 10px;\n    position: absolute;\n    overflow-y: scroll; }\n\n.game-field-wrapper {\n    overflow: hidden; }\n\nfooter {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    color: #ffffff; }\n\n.main-banner-cover {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.1);\n    width: 100vw;\n    height: 100vh;\n    z-index: 100; }\n\n* {\n    color: #221828;\n    font-family: 'Roboto', sans-serif; }\n\nlegend h3 {\n    margin: 0px; }\n\nlabel p {\n    font-size: 14px; }\n\ninput {\n    padding: 10px;\n    width: 91%;\n    border-radius: 7px;\n    border: 0px; }\n\n.side-instrumental-panel {\n    overflow-y: scroll;\n    max-height: 350px;\n    display: flex;\n    flex-wrap: wrap; }\n    .side-instrumental-panel li {\n        list-style: none; }\n    .side-instrumental-panel img {\n        padding: 10px;\n        display: block;\n        margin: 0 auto;\n        width: 54px; }\n\n.selected-item-preview {\n    position: absolute;\n    z-index: 100; }\n    .selected-item-preview img {\n        width: 60px; }\n\n.inner-content {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    max-width: 70%;\n    min-height: 300px;\n    overflow-y: scroll;\n    right: 0;\n    float: right;\n    max-height: 90%; }\n    .inner-content hr {\n        color: #eaeaea; }\n    .inner-content .single-item-wrapper {\n        cursor: pointer;\n        padding: 5px; }\n    .inner-content .single-item-wrapper:hover {\n        background: #4d4263;\n        color: #fff; }\n        .inner-content .single-item-wrapper:hover h2 {\n            color: #ffffff; }\n\n.inner-description-fields-wrapper {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 20px; }\n    .inner-description-fields-wrapper .single-block-description {\n        color: #715184; }\n        .inner-description-fields-wrapper .single-block-description input {\n            background: #bbb; }\n        .inner-description-fields-wrapper .single-block-description span {\n            border-radius: 10px;\n            background: #3a61bd;\n            padding: 5px;\n            margin-top: 5px;\n            position: relative;\n            display: inline-block;\n            font-size: 12px;\n            color: #ffffff; }\n        .inner-description-fields-wrapper .single-block-description .button-reject {\n            background: #ad0000;\n            color: #fffff; }\n            .inner-description-fields-wrapper .single-block-description .button-reject textarea {\n                background: #1c1722;\n                color: #ffffff; }\n    .inner-description-fields-wrapper .question-wrapper {\n        background: #eaeaea;\n        padding: 5px;\n        overflow: auto; }\n\n.active-button {\n    background: #ff961e; }\n\n.right-side-button {\n    float: right; }\n\n.side-panel-success {\n    color: #539700;\n    border: 1px solid #539700;\n    padding: 5px; }\n\n.side-panel-error {\n    color: #b10000;\n    border: 1px solid #b10000;\n    padding: 5px; }\n\n.block-description-wrapper {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap; }\n    .block-description-wrapper img {\n        max-width: 100%; }\n\n.single-block-description {\n    text-align: left;\n    padding: 5px;\n    width: 46%; }\n    .single-block-description textarea {\n        width: 96%;\n        padding: 5px;\n        margin-top: 10px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        border: 1px solid #dfdfdf;\n        background: #bbb; }\n\n.all-others-dialogs {\n    background: #826d6d;\n    padding: 5px;\n    border-radius: 5px;\n    color: #ffffff; }\n    .all-others-dialogs h4 {\n        color: #ffffff; }\n    .all-others-dialogs button {\n        background: none;\n        border: 0px;\n        cursor: pointer; }\n\n.related-id-field {\n    width: 50px; }\n\n.close-dialog {\n    color: #fff;\n    background: none;\n    padding: 20px;\n    border: none;\n    font-size: 29px;\n    position: absolute;\n    cursor: pointer; }\n\n.main-btn {\n    background: #ffb300;\n    border: navajowhite;\n    padding: 7px;\n    border-radius: 5px;\n    margin-top: 5px;\n    box-shadow: 1px 1px 5px #1547a64f;\n    cursor: pointer;\n    transition: .3s linear; }\n\n.main-btn:hover {\n    background: #ffedc3; }\n\n.main-btn:active {\n    background: #ff1e00; }\n\n.material-preview-wrapper {\n    width: 100%; }\n\n.button-reject {\n    background: #ad0000;\n    color: #fffff; }\n", ""]);
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


V- add stairs
V- add leaders
V- doors
   V - doors access card
V- add horizontal elevator
V- add background texture and display it
    V- destroy/ change textures separately
    V- add texture animations
V- add NPC
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
                        finalDialogBlocks += "<div id=\"dialog-block-wrapper-" + id + "\" class=\"dialog-block-wrapper\">\n            <h4>Dialog ID: " + dialog.id + "\n            <input id=\"dialog-id-field-" + id + "\" type=\"number\" value=\"" + dialog.id + "\">   \n            <button id=\"remove-dialog-" + id + "\" >\n                    <span class=\"button-reject\">delete dialog</span>\n                </button>\n            </h4>\n            <p>Dialog actions <span>\"none\"</span>  <span>\"give_object\"</span></p>\n            <input id=\"dialog-action-" + id + "\" type=\"text\" placeholder=\"dialog actions\" value=\"" + dialog.action + "\">\n            <textarea id=\"dialog-block-" + id + "\" name=\"\">" + dialog.text + "</textarea>\n                <div id=\"\">" + ((questionItems) ? questionItems.questions : '') + "</div>\n                <button id=\"add-new-question-" + id + "\">\n                    <span>+ Add question</span>\n                </button>\n            <hr>\n        </div>";
                        blockData_1 = Object.assign({}, {
                            id: id,
                            dialogBlockWrapper: "dialog-block-wrapper-" + id,
                            textAreaSelector: "dialog-block-" + id,
                            dialogIdField: "dialog-id-field-" + id,
                            addDialog: null,
                            addNewQuestion: "add-new-question-" + id,
                            removeDialog: "remove-dialog-" + id,
                            dialogActionField: "dialog-action-" + id,
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
                        innerText = "<h3>Require Object</h3>\n            <p>Require message, display object needs for this block to everything work fine <span>computer_data\n            </span><span>blue_card</span><span>green_card</span> <span>yellow_card</span> <span>red_card</span></p>\n            <textarea type='text' id=" + ('require-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.require) ? blockDetails.rules.require : '') + "</textarea>\n            <button data-target='save-require-btn' class=\"main-btn\">Save Require Object</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'description-requireText-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                        localPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : 'computer-data.png';
                        mainPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + localPicture;
                        innerText = "<h3>Contain Object</h3>\n            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level\n            <span>computer_data</span><span>blue_card</span><span>green_card</span> <span>yellow_card</span> <span>red_card</span> <span>exit</span>  exit  - end the level</p>\n            <textarea type='text' id=" + ('contain-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.contain) ? blockDetails.rules.contain : '') + "</textarea>\n            <img width=\"100\" id=" + ('contain-picture-' + currentDescriptionId) + "\n            src=\"" + mainPicture + "\">\n            <select id=\"preview-contain-object\" data-target='select-preview-btn'>\n                <option value=\"computer-data.png\">Computer data</option>\n                <option value=\"red-card.png\">Red card</option>\n                <option value=\"blue-card.png\">Blue card</option>\n                <option value=\"green-card.png\">Green card</option>\n                <option value=\"yellow-card.png\">Yellow card</option>\n                <option value=\"power-cell.png\">Power Cell</option>\n            </select>\n            <button data-target='save-contain-btn' class=\"main-btn\">Save</button> <hr>";
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
    //console.log(blockItem)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9kaWFsb2dGb3JtTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91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QkFBTyxDQUFDLDhEQUFvQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVHQUF1RztBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwWmE7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyw0REFBbUI7QUFDN0QsdUJBQXVCLG1CQUFPLENBQUMsa0ZBQW1DO0FBQ2xFLGdCQUFnQixtQkFBTyxDQUFDLDBDQUFlO0FBQ3ZDLHdCQUF3QixtQkFBTyxDQUFDLDREQUFtQjtBQUNuRCx5QkFBeUIsbUJBQU8sQ0FBQyxnRkFBa0M7QUFDbkUsZ0NBQWdDLG1CQUFPLENBQUMsNEVBQTJCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvQkFBb0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsaUZBQWlGO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsZ0VBQWdFO0FBQ25JLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHVCQUF1QjtBQUMxRSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2Q0FBNkMsaUdBQWlHO0FBQzlJO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFLEVBQUU7QUFDakI7QUFDQSx1Q0FBdUMsdUJBQXVCO0FBQzlELGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLG1DQUFtQyx1QkFBdUI7QUFDMUQsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxxUEFBcVAsb0NBQW9DO0FBQ3pSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDalJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixhQUFhLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLCtCQUErQixhQUFhLEVBQUU7QUFDOUM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsc0VBQTZCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyw4RUFBOEUsNkNBQTZDO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDRCQUE0QixtQkFBTyxDQUFDLDhFQUFpQztBQUNyRSxnQkFBZ0IsbUJBQU8sQ0FBQyxzQ0FBVztBQUNuQyx5QkFBeUIsbUJBQU8sQ0FBQyx3RUFBOEI7QUFDL0QsZ0NBQWdDLG1CQUFPLENBQUMsc0ZBQXFDO0FBQzdFLGdDQUFnQyxtQkFBTyxDQUFDLHNGQUFxQztBQUM3RSxrQ0FBa0MsbUJBQU8sQ0FBQyxzRUFBNkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx5QkFBeUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMseUVBQXlFO0FBQ3JILEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0E7QUFDQSw4REFBOEQsMkNBQTJDO0FBQ3pHLHlEQUF5RCx5Q0FBeUM7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLDBFQUEwRTtBQUM1RyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0VBQStFO0FBQ3RIO0FBQ0E7QUFDQSx1Q0FBdUMsd0ZBQXdGO0FBQy9IO0FBQ0E7QUFDQSx1Q0FBdUMsb0ZBQW9GO0FBQzNIO0FBQ0E7QUFDQSx1Q0FBdUMsK0VBQStFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5Q0FBeUMsK0NBQStDO0FBQ3hGLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaURBQWlEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBFQUEwRTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi4vc2VydmVyL3B1YmxpYy9sZXZlbC1jcmVhdG9yL2Rpc3Qtc2NyaXB0c1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5jYW52YXMge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA1MzRiOyB9XFxuXFxuLnNpZGUtbWVudS13cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2JiYmJiYjtcXG4gICAgaGVpZ2h0OiA5NnZoO1xcbiAgICByaWdodDogMDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG5cXG4uZ2FtZS1maWVsZC13cmFwcGVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7IH1cXG5cXG4ubWFpbi1iYW5uZXItY292ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG5cXG4qIHtcXG4gICAgY29sb3I6ICMyMjE4Mjg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgfVxcblxcbmxlZ2VuZCBoMyB7XFxuICAgIG1hcmdpbjogMHB4OyB9XFxuXFxubGFiZWwgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDkxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDBweDsgfVxcblxcbi5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgaW1nIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDU0cHg7IH1cXG5cXG4uc2VsZWN0ZWQtaXRlbS1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG4gICAgLnNlbGVjdGVkLWl0ZW0tcHJldmlldyBpbWcge1xcbiAgICAgICAgd2lkdGg6IDYwcHg7IH1cXG5cXG4uaW5uZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWF4LWhlaWdodDogOTAlOyB9XFxuICAgIC5pbm5lci1jb250ZW50IGhyIHtcXG4gICAgICAgIGNvbG9yOiAjZWFlYWVhOyB9XFxuICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAuaW5uZXItY29udGVudCAuc2luZ2xlLWl0ZW0td3JhcHBlcjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0MjYzO1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyOmhvdmVyIGgyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7IH1cXG4gICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24ge1xcbiAgICAgICAgY29sb3I6ICM3MTUxODQ7IH1cXG4gICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIGlucHV0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiOyB9XFxuICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiBzcGFuIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYTYxYmQ7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gLmJ1dHRvbi1yZWplY3Qge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhZDAwMDA7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZjsgfVxcbiAgICAgICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIC5idXR0b24tcmVqZWN0IHRleHRhcmVhIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFjMTcyMjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cXG4gICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5xdWVzdGlvbi13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5hY3RpdmUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmOTYxZTsgfVxcblxcbi5yaWdodC1zaWRlLWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcblxcbi5zaWRlLXBhbmVsLXN1Y2Nlc3Mge1xcbiAgICBjb2xvcjogIzUzOTcwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUzOTcwMDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXFxuLnNpZGUtcGFuZWwtZXJyb3Ige1xcbiAgICBjb2xvcjogI2IxMDAwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IxMDAwMDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXFxuLmJsb2NrLWRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gICAgLmJsb2NrLWRlc2NyaXB0aW9uLXdyYXBwZXIgaW1nIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTsgfVxcblxcbi5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA0NiU7IH1cXG4gICAgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogOTYlO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiOyB9XFxuXFxuLmFsbC1vdGhlcnMtZGlhbG9ncyB7XFxuICAgIGJhY2tncm91bmQ6ICM4MjZkNmQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuYWxsLW90aGVycy1kaWFsb2dzIGg0IHtcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgIC5hbGwtb3RoZXJzLWRpYWxvZ3MgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yZWxhdGVkLWlkLWZpZWxkIHtcXG4gICAgd2lkdGg6IDUwcHg7IH1cXG5cXG4uY2xvc2UtZGlhbG9nIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyOXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5tYWluLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmIzMDA7XFxuICAgIGJvcmRlcjogbmF2YWpvd2hpdGU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMxNTQ3YTY0ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyOyB9XFxuXFxuLm1haW4tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZWRjMzsgfVxcblxcbi5tYWluLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYxZTAwOyB9XFxuXFxuLm1hdGVyaWFsLXByZXZpZXctd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJ1dHRvbi1yZWplY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjYWQwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL21haW4uc2Fzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9pbml0U3RhcnRPYmplY3RcIik7XHJcbnZhciBibG9ja0ludGVyYWN0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tJbnRlcmFjdE1vZHVsZVwiKTtcclxudmFyIGJsb2Nrc0Z1bmN0aW9uYWxpdHlfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5XCIpO1xyXG52YXIgQmxvY2tDb25zdHJ1Y3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJsb2NrQ29uc3RydWN0b3IoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMueCA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TWFwWCA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLmRlZmF1bHRNYXBZID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMueE1vdmUgPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55TW92ZSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLmJsb2NrUmVsYXRpdmVYUG9zID0gMDtcclxuICAgICAgICB0aGlzLmJsb2NrUmVsYXRpdmVZUG9zID0gMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBkYXRhLmluZGV4O1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IChkYXRhLmRldGFpbHMpID8gZGF0YS5kZXRhaWxzIDogbnVsbDtcclxuICAgICAgICB0aGlzLmltYWdlV2lkdGggPSAoZGF0YS5pbWFnZVdpZHRoKSA/IGRhdGEuaW1hZ2VXaWR0aCA6IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IChkYXRhLmltYWdlSGVpZ2h0KSA/IGRhdGEuaW1hZ2VIZWlnaHQgOiBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlld1RleHR1cmUgPSAoZGF0YS5wcmV2aWV3VGV4dHVyZSkgPyBkYXRhLnByZXZpZXdUZXh0dXJlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgICAgdGhpcy5zeSA9IDA7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlc1dpZHRoID0gZGF0YS5pbWFnZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJsb2NrQ29uc3RydWN0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmxvY2tDb25zdHJ1Y3RvciA9IEJsb2NrQ29uc3RydWN0b3I7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlckJsb2NrQm94ID0gaW5pdFN0YXJ0T2JqZWN0XzEucmVuZGVyQmxvY2tCb3g7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLm1vdmVTaW5nbGVCbG9jayA9IGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5tb3ZlU2luZ2xlQmxvY2s7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLmVsZXZhdG9yTW92ZSA9IGJsb2Nrc0Z1bmN0aW9uYWxpdHlfMS5lbGV2YXRvck1vdmU7XHJcbkJsb2NrQ29uc3RydWN0b3IucHJvdG90eXBlLmJsb2NrQW5pbWF0aW9ucyA9IGJsb2Nrc0Z1bmN0aW9uYWxpdHlfMS5ibG9ja0FuaW1hdGlvbnM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdmlld18xID0gcmVxdWlyZShcIi4uL3VpL3ZpZXdcIik7XHJcbnZhciBNYWluR2FtZUNvbnN0cnVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWFpbkdhbWVDb25zdHJ1Y3RvcihfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy5tYXBNb3ZlU3BlZWQgPSBkYXRhLm1hcE1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLm1hcFdpZHRoID0gZGF0YS5tYXBXaWR0aDtcclxuICAgICAgICB0aGlzLm1hcEhlaWdodCA9IGRhdGEubWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWFwRGVmYXVsdFdpZHRoID0gZGF0YS5tYXBXaWR0aDtcclxuICAgICAgICB0aGlzLm1hcERlZmF1bHRIZWlnaHQgPSBkYXRhLm1hcEhlaWdodDtcclxuICAgICAgICB0aGlzLmFsbFJlZGFjdG9yQmxvY2sgPSBkYXRhLmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRGF0YWJhc2UgPSBkYXRhLmJhY2tncm91bmREYXRhYmFzZTtcclxuICAgICAgICB0aGlzLmJsb2NrRGF0YWJhc2UgPSAoZGF0YS5ibG9ja0RhdGFiYXNlKSA/IGRhdGEuYmxvY2tEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzRGF0YWJhc2UgPSAoZGF0YS5jaGFyYWN0ZXJzRGF0YWJhc2UpID8gZGF0YS5jaGFyYWN0ZXJzRGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuZW5lbXlEYXRhYmFzZSA9IChkYXRhLmVuZW15RGF0YWJhc2UpID8gZGF0YS5lbmVteURhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGRhdGEuYmxvY2tTaXplO1xyXG4gICAgICAgIHRoaXMubWF4SG9yaXpvbnRhbEJsb2NrcyA9IGRhdGEubWF4SG9yaXpvbnRhbEJsb2NrcztcclxuICAgICAgICB0aGlzLm1heFZlcnRpY2FsQmxvY2tzID0gZGF0YS5tYXhWZXJ0aWNhbEJsb2NrcztcclxuICAgICAgICB0aGlzLmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taW5pTWFwQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFpbkdhbWVDb25zdHJ1Y3RvcjtcclxufSgpKTtcclxuZXhwb3J0cy5NYWluR2FtZUNvbnN0cnVjdG9yID0gTWFpbkdhbWVDb25zdHJ1Y3RvcjtcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuaW5pdFZpZXcgPSB2aWV3XzEuaW5pdFZpZXc7XHJcbk1haW5HYW1lQ29uc3RydWN0b3IucHJvdG90eXBlLmNsZWFyVmlldyA9IHZpZXdfMS5jbGVhclZpZXc7XHJcbk1haW5HYW1lQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlckl0ZW1zVG9TaWRlTGlzdCA9IHZpZXdfMS5yZW5kZXJJdGVtc1RvU2lkZUxpc3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi4vc2Fzcy9tYWluLnNhc3NcIik7XHJcbnZhciByZW5kZXJDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4vY29uc3RydWN0b3JzL3JlbmRlckNvbnN0cnVjdG9yXCIpO1xyXG52YXIgYmxvY2tDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4vY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3JcIik7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi91aS92aWV3XCIpO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi9yZWRhY3Rvci9pbml0U3RhcnRPYmplY3RcIik7XHJcbnZhciBzaWRlUGFuZWxBY3Rpb25zXzEgPSByZXF1aXJlKFwiLi9yZWRhY3Rvci9zaWRlUGFuZWxBY3Rpb25zXCIpO1xyXG4vKlxyXG5WLSBjcmVhdGUgbWFwIG5ldFxyXG4gICAgVi0gdmVydGljYWwgZGlyZWN0aW9uIG9mIGJsb2NrXHJcbiAgICAtIGRlc3Ryb3kgc29tZSBibG9ja3NcclxuICAgIFYtIGJsb2NrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgViAtIGRlbGV0ZSBibG9ja1xyXG4gICAgICAgIFYtIHByZXZpZXdcclxuICAgICAgICBWLSBpbmZvcm1hdGlvblxyXG4gICAgICAgIFYtIGNoYW5nZSBkYXRhXHJcbiAgICAgICAgICAgIFYtIHdpZHRoXHJcbiAgICAgICAgICAgIFYtIGhlaWdodFxyXG4gICAgICAgICAgICBWLSB4XHJcbiAgICAgICAgICAgIFYtIHlcclxuICAgICAgICAgICAgVi0gZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgVi0gcnVsZXJzXHJcbiAgICAgICAgICAgIC0gZWxldmF0b3Igc3BlZWRcclxuICAgICAgICAgICAgLSBkaXJlY3Rpb25cclxuVi0gc2lkZSBwYW5lbFxyXG4gICAgVi0gbmV3IG1hcFxyXG4gICAgICAgIFYtIG1hcCBuYW1lXHJcbiAgICAgICAgVi0gc2F2ZSBtYXAgaW4ganNvblxyXG4gICAgICAgIFYtIGNoYW5nZSBtYXAgc2l6ZVxyXG4gICAgICAgIFYtIG92ZXJ3cml0ZSBtYXBcclxuICAgIFYtIGxvYWQgbWFwXHJcbiAgICBWLSBtaW5pbWFwXHJcbiAgICBWLSBkaWZmZXJlbnQgc2VjdGlvbnMgb2Ygb2JqZWN0c1xyXG4gICAgICAgIFYtIGJsb2NrXHJcbiAgICAgICAgVi0gY2hhcmFjdGVyc1xyXG4gICAgICAgIFYtIGVuZW15XHJcbiAgICAgICAgVi0gYmFja2dyb3VuZFxyXG5cclxuXHJcblYtIGFkZCBzdGFpcnNcclxuVi0gYWRkIGxlYWRlcnNcclxuVi0gZG9vcnNcclxuICAgViAtIGRvb3JzIGFjY2VzcyBjYXJkXHJcblYtIGFkZCBob3Jpem9udGFsIGVsZXZhdG9yXHJcblYtIGFkZCBiYWNrZ3JvdW5kIHRleHR1cmUgYW5kIGRpc3BsYXkgaXRcclxuICAgIFYtIGRlc3Ryb3kvIGNoYW5nZSB0ZXh0dXJlcyBzZXBhcmF0ZWx5XHJcbiAgICBWLSBhZGQgdGV4dHVyZSBhbmltYXRpb25zXHJcblYtIGFkZCBOUENcclxuICAgIC0gZGlhbG9nXHJcblxyXG5cclxuKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiByZWRhY3RvckVuZ2luZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pLCBfYSwgYmxvY2s7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmNsZWFyVmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwLCBfYSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBfYS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYmxvY2sueE1vdmUgPiAwICYmIGJsb2NrLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggfHwgYmxvY2sueU1vdmUgPiAwICYmIGJsb2NrLnlNb3ZlIDwgd2luZG93LmlubmVySGVpZ2h0KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9jay5yZW5kZXJCbG9ja0JveCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9jay5lbGV2YXRvck1vdmUoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRTdGFydE9iamVjdF8xLmJsb2NrQW5pbWF0aW9uUmVuZGVyKHsgYmxvY2s6IGJsb2NrIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWFpbk9iamVjdCwgZW5naW5lO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0U3RhcnRPYmplY3RfMS5pbml0TWFpbkVuZ2luZSh7IE1haW5HYW1lQ29uc3RydWN0b3I6IHJlbmRlckNvbnN0cnVjdG9yXzEuTWFpbkdhbWVDb25zdHJ1Y3RvciwgQmxvY2tDb25zdHJ1Y3RvcjogYmxvY2tDb25zdHJ1Y3Rvcl8xLkJsb2NrQ29uc3RydWN0b3IgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5pbml0VmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QucmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuYmxvY2tEYXRhYmFzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGFjdG9yRW5naW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWFpbk9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICB2aWV3XzEubWFwTW92ZUNvbnRyb2xsZXJzKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuc2F2ZU1hcCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLmxvYWRNYXAoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5zZXRNYXBTaXplKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgQmxvY2tDb25zdHJ1Y3RvcjogYmxvY2tDb25zdHJ1Y3Rvcl8xLkJsb2NrQ29uc3RydWN0b3IgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLmNyZWF0ZU5ld01hcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvcHJldmlld1wiKTtcclxudmFyIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL3BhbmVsRm9ybVBhcnRHZW5lcmF0b3JcIik7XHJcbmZ1bmN0aW9uIG9wZW5SZWRhY3RvcldpbmRvdyhfYSkge1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IF9hLmJsb2NrRGF0YSwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdEZpbGVzLCBmaWxlQ29udGFpbmVyLCBjbG9zZURpYWxvZywgZ2VuZXJhdGVkQXJlYSwgYWxsQmxvY2tzLCBpbm5lckRlc2NyaXB0aW9uQXJlYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtIHx8ICFibG9ja0RhdGEuZGV0YWlscyB8fCBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0RmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1maWxlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1jb250ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWRBcmVhID0gcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2lubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnaW5uZXItZGVzY3JpcHRpb24tYXJlYSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlZEFyZWEpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1kZXNjcmlwdGlvbi1hcmVhXCIpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckRlc2NyaXB0aW9uQXJlYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEubG9hZElubmVyRGF0YSh7IGZpbGVDb250YWluZXI6IGlubmVyRGVzY3JpcHRpb25BcmVhLCB0YXJnZXQ6IGJsb2NrRGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEuZ2VuZXJhdGVJbnB1dCh7IGZpbGVDb250YWluZXI6IGlubmVyRGVzY3JpcHRpb25BcmVhLCB0YXJnZXQ6IGJsb2NrRGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMub3BlblJlZGFjdG9yV2luZG93ID0gb3BlblJlZGFjdG9yV2luZG93O1xyXG5mdW5jdGlvbiBwb3NpdGlvblJlZHVjZXIoX2EpIHtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBfYS5hbGxCbG9ja3M7XHJcbiAgICB2YXIgb2xkWFJhbmdlID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgdmFyIG9sZFlSYW5nZSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQmxvY2tzXzEgPSBhbGxCbG9ja3M7IF9pIDwgYWxsQmxvY2tzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrID0gYWxsQmxvY2tzXzFbX2ldO1xyXG4gICAgICAgIGJsb2NrLnhNb3ZlID0gYmxvY2sueDtcclxuICAgICAgICBibG9jay55TW92ZSA9IGJsb2NrLnk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wb3NpdGlvblJlZHVjZXIgPSBwb3NpdGlvblJlZHVjZXI7XHJcbmZ1bmN0aW9uIGNoYW5nZUJsb2NrQXJyYXlTaXplKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGZvcm1EYXRhID0gX2EuZm9ybURhdGEsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgdmFyIGVycm9yRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLXNpemUtZXJyb3InKTtcclxuICAgIHZhciB3aWR0aFNldCA9IGZvcm1EYXRhLmhvcml6b250YWxCbG9jaztcclxuICAgIHZhciBoZWlnaHRTZXQgPSBmb3JtRGF0YS52ZXJ0aWNhbEJsb2NrO1xyXG4gICAgdmFyIGN1cnJlbnRXaWR0aCA9IG1haW5PYmplY3QubWFwV2lkdGg7XHJcbiAgICB2YXIgY3VycmVudEhlaWdodCA9IG1haW5PYmplY3QubWFwSGVpZ2h0O1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciB2ZXJ0aWNhbFJhbmdlID0gaGVpZ2h0U2V0IC0gY3VycmVudEhlaWdodDtcclxuICAgIHZhciB2ZXJ0aWNhbENvbXBlbnNhdGlvbiA9IHZlcnRpY2FsUmFuZ2U7XHJcbiAgICB2YXIgbmV3UmVidWlsZEJsb2NrTWFwID0gW107XHJcbiAgICB2YXIgb2xkWFJhbmdlID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgdmFyIG9sZFlSYW5nZSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgIC8vZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J3NpZGUtcGFuZWwtZXJyb3InPlBsZWFzZSB3YWl0IG1hcCBpcyBidWlsZC4uLjwvcD5gO1xyXG4gICAgcG9zaXRpb25SZWR1Y2VyKHsgYWxsQmxvY2tzOiBhbGxCbG9ja3MgfSk7XHJcbiAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB3aWR0aFNldDsgY29sKyspIHtcclxuICAgICAgICBmb3IgKHZhciBpdGVtID0gMDsgaXRlbSA8IGhlaWdodFNldDsgaXRlbSsrKSB7XHJcbiAgICAgICAgICAgIHZhciByb3dJbmRleCA9IChjb2wgPT0gMCkgPyBpdGVtIDogKGNvbCAqIGN1cnJlbnRIZWlnaHQpICsgaXRlbTtcclxuICAgICAgICAgICAgdmFyIG5ld0Jsb2Nrc0FycmF5SW5kZXggPSAoY29sID09IDApID8gaXRlbSA6IChjb2wgKiBoZWlnaHRTZXQpICsgaXRlbTtcclxuICAgICAgICAgICAgdmFyIG9sZEJsb2Nrc0FycmF5SW5kZXggPSAoaXRlbSA8IGN1cnJlbnRIZWlnaHQpID8gYWxsQmxvY2tzW3Jvd0luZGV4XSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChvbGRCbG9ja3NBcnJheUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvbGRCbG9ja3NBcnJheUluZGV4LmluZGV4ID0gbmV3QmxvY2tzQXJyYXlJbmRleDtcclxuICAgICAgICAgICAgICAgIG5ld1JlYnVpbGRCbG9ja01hcCA9IG5ld1JlYnVpbGRCbG9ja01hcC5jb25jYXQob2xkQmxvY2tzQXJyYXlJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBuZXdSZWJ1aWxkQmxvY2tNYXAuY29uY2F0KGNyZWF0ZVNpbmdsZU1hcEJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0OiBtYWluT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIEJsb2NrQ29uc3RydWN0b3I6IEJsb2NrQ29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5ld0Jsb2Nrc0FycmF5SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY29sICogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogaXRlbSAqIG1haW5PYmplY3QuYmxvY2tTaXplIC8vICsgb2xkWVJhbmdlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2ZXJ0aWNhbENvbXBlbnNhdGlvbiArPSB2ZXJ0aWNhbFJhbmdlO1xyXG4gICAgfVxyXG4gICAgbWFpbk9iamVjdC5tYXBXaWR0aCA9IHdpZHRoU2V0O1xyXG4gICAgbWFpbk9iamVjdC5tYXBIZWlnaHQgPSBoZWlnaHRTZXQ7XHJcbiAgICBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2sgPSBuZXdSZWJ1aWxkQmxvY2tNYXA7XHJcbiAgICB2YXIgc2hvdyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jay5maW5kKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLmluZGV4ID09IDEwMTE7IH0pO1xyXG4gICAgY29uc29sZS5sb2coc2hvdywgXCJzaG93IHJlc2l6ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9ja1swXSk7XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VCbG9ja0FycmF5U2l6ZSA9IGNoYW5nZUJsb2NrQXJyYXlTaXplO1xyXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVNYXBCbG9jayhfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvciwgaW5kZXggPSBfYS5pbmRleCwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IHtcclxuICAgICAgICB4OiB4LFxyXG4gICAgICAgIHk6IHksXHJcbiAgICAgICAgd2lkdGg6IG1haW5PYmplY3QuYmxvY2tTaXplLFxyXG4gICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ldyBCbG9ja0NvbnN0cnVjdG9yKF9fYXNzaWduKHt9LCBibG9ja0RhdGEpKTtcclxufVxyXG5mdW5jdGlvbiBtaW5pTWFwcGVyKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICB2YXIgc2VsZWN0RmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1maWxlc1wiKTtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbm5lci1jb250ZW50XCIpO1xyXG4gICAgdmFyIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25YID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgIG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSA9IHRydWU7XHJcbiAgICB2YXIgbWFwU2l6ZSA9IDUwIC8gMztcclxuICAgIGZpbGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgbmV3TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgbWFwU2l6ZVdpZHRoID0gbWFpbk9iamVjdC5tYXBXaWR0aCAqIDM7XHJcbiAgICB2YXIgbWFwU2l6ZUhlaWdodCA9IG1haW5PYmplY3QubWFwSGVpZ2h0ICogMztcclxuICAgIG5ld01hcFsnd2lkdGgnXSA9IG1hcFNpemVXaWR0aDtcclxuICAgIG5ld01hcFsnaGVpZ2h0J10gPSBtYXBTaXplSGVpZ2h0O1xyXG4gICAgdmFyIG1pbmlNYXBDdHggPSBuZXdNYXAuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TWFwKTtcclxuICAgIG1hcE9iamVjdERyYXcoe1xyXG4gICAgICAgIGN0eDogbWluaU1hcEN0eCxcclxuICAgICAgICBhbGxCbG9ja3M6IGFsbEJsb2NrcyxcclxuICAgICAgICBjYW1lcmFQb3NpdGlvblg6IGNhbWVyYVBvc2l0aW9uWCxcclxuICAgICAgICBjYW1lcmFQb3NpdGlvblk6IGNhbWVyYVBvc2l0aW9uWSxcclxuICAgICAgICBtYXBTaXplOiBtYXBTaXplLFxyXG4gICAgICAgIG1hcFNpemVXaWR0aDogbWFwU2l6ZVdpZHRoLFxyXG4gICAgICAgIG1hcFNpemVIZWlnaHQ6IG1hcFNpemVIZWlnaHRcclxuICAgIH0pO1xyXG4gICAgcHJldmlld18xLnNob3dFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICB2YXIgY2FtZXJhUG9zaXRpb25YID0gYWxsQmxvY2tzWzBdLnhNb3ZlO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvblkgPSBhbGxCbG9ja3NbMF0ueU1vdmU7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsnbm9kZU5hbWUnXSA9PT0gJ0NBTlZBUycpIHtcclxuICAgICAgICAgICAgdmFyIHBvc1ggPSBldmVudFsnY2xpZW50WCddIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRMZWZ0J107XHJcbiAgICAgICAgICAgIHZhciBwb3NZID0gZXZlbnRbJ2NsaWVudFknXSAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0VG9wJ107XHJcbiAgICAgICAgICAgIHNldE1hcEFzQ2xpY2soeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCB4OiBwb3NYICogbWFwU2l6ZSwgeTogcG9zWSAqIG1hcFNpemUgfSk7XHJcbiAgICAgICAgICAgIG1hcE9iamVjdERyYXcoe1xyXG4gICAgICAgICAgICAgICAgY3R4OiBtaW5pTWFwQ3R4LFxyXG4gICAgICAgICAgICAgICAgYWxsQmxvY2tzOiBhbGxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3NpdGlvblg6IGNhbWVyYVBvc2l0aW9uWCxcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uWTogY2FtZXJhUG9zaXRpb25ZLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZTogbWFwU2l6ZSxcclxuICAgICAgICAgICAgICAgIG1hcFNpemVXaWR0aDogbWFwU2l6ZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZUhlaWdodDogbWFwU2l6ZUhlaWdodCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWluaU1hcHBlciA9IG1pbmlNYXBwZXI7XHJcbmZ1bmN0aW9uIG1hcE9iamVjdERyYXcoX2EpIHtcclxuICAgIHZhciBjdHggPSBfYS5jdHgsIGFsbEJsb2NrcyA9IF9hLmFsbEJsb2NrcywgY2FtZXJhUG9zaXRpb25ZID0gX2EuY2FtZXJhUG9zaXRpb25ZLCBjYW1lcmFQb3NpdGlvblggPSBfYS5jYW1lcmFQb3NpdGlvblgsIG1hcFNpemUgPSBfYS5tYXBTaXplLCBtYXBTaXplV2lkdGggPSBfYS5tYXBTaXplV2lkdGgsIG1hcFNpemVIZWlnaHQgPSBfYS5tYXBTaXplSGVpZ2h0O1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBtYXBTaXplV2lkdGgsIG1hcFNpemVIZWlnaHQpO1xyXG4gICAgY29uc29sZS5sb2coYWxsQmxvY2tzKTtcclxuICAgIGFsbEJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGV0YWlscykge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gKGl0ZW0uZGV0YWlscy5tYXBDb2xvcikgPyBpdGVtLmRldGFpbHMubWFwQ29sb3IgOiBcInJnYmEoMjI1LCAxNjksIDAsIDEpXCI7IC8vaXRlbS5kZXRhaWxzLm1hcENvbG9yLy9cInJnYmEoMjI1LCAxNjksIDAsIDEpXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgoaXRlbS54KSA/IGl0ZW0ueCAvIG1hcFNpemUgOiAwLCAoaXRlbS55TW92ZSkgPyBpdGVtLnkgLyBtYXBTaXplIDogMCwgNTAgLyBtYXBTaXplLCA1MCAvIG1hcFNpemUpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9jdHguc2F2ZSgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDIyNSwgMjU1LCAyNTUsIDEpXCI7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgucmVjdCgoY2FtZXJhUG9zaXRpb25YIC8gbWFwU2l6ZSkgKiAtMSwgKGNhbWVyYVBvc2l0aW9uWSAvIG1hcFNpemUpICogLTEsIHdpbmRvdy5pbm5lcldpZHRoIC8gbWFwU2l6ZSwgd2luZG93LmlubmVySGVpZ2h0IC8gbWFwU2l6ZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAvL2N0eC5yZXN0b3JlKClcclxufVxyXG5mdW5jdGlvbiBzZXRNYXBBc0NsaWNrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25YID0geCArIGFsbEJsb2Nrc1swXS54TW92ZTsgLy9NYXRoLm1heChhbGxCbG9ja3NbMF0ueE1vdmUsIHgpIC0gTWF0aC5taW4oYWxsQmxvY2tzWzBdLnhNb3ZlLCB4KTtcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblkgPSB5ICsgYWxsQmxvY2tzWzBdLnlNb3ZlOyAvL01hdGgubWF4KGFsbEJsb2Nrc1swXS55TW92ZSwgeSkgLSBNYXRoLm1pbihhbGxCbG9ja3NbMF0ueU1vdmUsIHkpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCbG9ja3NfMiA9IGFsbEJsb2NrczsgX2kgPCBhbGxCbG9ja3NfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBhbGxCbG9ja3NfMltfaV07XHJcbiAgICAgICAgYmxvY2sueE1vdmUgLT0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblgpO1xyXG4gICAgICAgIGJsb2NrLnlNb3ZlIC09IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25ZKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBjb2xsaXNpb25EZXRlY3RvcihfYSkge1xyXG4gICAgdmFyIG9iamVjdCA9IF9hLm9iamVjdCwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgaWYgKCFvYmplY3QgfHwgIXRhcmdldClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB0YXJnZXQud2lkdGggPSBwYXJzZUludCh0YXJnZXQud2lkdGgpO1xyXG4gICAgdGFyZ2V0LmhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5oZWlnaHQpO1xyXG4gICAgb2JqZWN0LndpZHRoID0gcGFyc2VJbnQob2JqZWN0LndpZHRoKTtcclxuICAgIG9iamVjdC5oZWlnaHQgPSBwYXJzZUludChvYmplY3QuaGVpZ2h0KTtcclxuICAgIHZhciB4TWluID0gTWF0aC5taW4ob2JqZWN0LnhNb3ZlLCB0YXJnZXQueCk7XHJcbiAgICB2YXIgeU1pbiA9IE1hdGgubWluKG9iamVjdC55TW92ZSwgdGFyZ2V0LnkpO1xyXG4gICAgdmFyIHhNYXggPSBNYXRoLm1heChvYmplY3QueE1vdmUgKyBvYmplY3Qud2lkdGgsIHRhcmdldC54ICsgdGFyZ2V0LndpZHRoKTtcclxuICAgIHZhciB5TWF4ID0gTWF0aC5tYXgob2JqZWN0LnlNb3ZlICsgb2JqZWN0LmhlaWdodCwgdGFyZ2V0LnkgKyB0YXJnZXQuaGVpZ2h0KTtcclxuICAgIHZhciByZXNYID0geE1heCAtIHhNaW47XHJcbiAgICB2YXIgcmVzWSA9IHlNYXggLSB5TWluO1xyXG4gICAgdmFyIGNvbGxpc2lvbiA9IChyZXNYID4gb2JqZWN0LndpZHRoIHx8IHJlc1kgPiBvYmplY3QuaGVpZ2h0KSA/IGZhbHNlIDogXCJjb2xsaXNpb25cIjtcclxuICAgIGlmIChjb2xsaXNpb24pXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0cy5jb2xsaXNpb25EZXRlY3RvciA9IGNvbGxpc2lvbkRldGVjdG9yO1xyXG5mdW5jdGlvbiBtb3ZlU2luZ2xlQmxvY2soX2EpIHtcclxuICAgIHZhciB4TW92ZVZhbHVlID0gX2EueE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZSA9IF9hLnlNb3ZlVmFsdWU7XHJcbiAgICBpZiAoeE1vdmVWYWx1ZSlcclxuICAgICAgICB0aGlzLnhNb3ZlICs9IHhNb3ZlVmFsdWU7XHJcbiAgICBpZiAoeU1vdmVWYWx1ZSlcclxuICAgICAgICB0aGlzLnlNb3ZlICs9IHlNb3ZlVmFsdWU7XHJcbn1cclxuZXhwb3J0cy5tb3ZlU2luZ2xlQmxvY2sgPSBtb3ZlU2luZ2xlQmxvY2s7XHJcbmZ1bmN0aW9uIG1vdmVBbGxTY2VuZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCB4TW92ZVZhbHVlID0gX2EueE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZSA9IF9hLnlNb3ZlVmFsdWU7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrOyBfaSA8IF9iLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBzaW5nbGVCbG9jayA9IF9iW19pXTtcclxuICAgICAgICBzaW5nbGVCbG9jay5tb3ZlU2luZ2xlQmxvY2soeyB4TW92ZVZhbHVlOiB4TW92ZVZhbHVlLCB5TW92ZVZhbHVlOiB5TW92ZVZhbHVlIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubW92ZUFsbFNjZW5lID0gbW92ZUFsbFNjZW5lO1xyXG5mdW5jdGlvbiBjaGFuZ2VPYmplY3RNb2RlbChfYSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IF9hLnJlc3VsdCwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBpZiAoIW1haW5PYmplY3QgfHwgIXJlc3VsdCB8fCAhbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtIHx8IG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSB8fCBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgY3VycmVudEJsb2NrID0gYWxsQmxvY2tzW3Jlc3VsdC5pbmRleF07XHJcbiAgICAvL2NvbnNvbGUubG9nKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgXCI8PFwiLCBjdXJyZW50QmxvY2spXHJcbiAgICB2YXIgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSk7XHJcbiAgICBpZiAoIW1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIpIHtcclxuICAgICAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnR5cGUgPT09IFwiYmFja2dyb3VuZC13YWxsXCIgJiYgY3VycmVudEJsb2NrLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS53aWR0aCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmhlaWdodCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnggPSBjdXJyZW50QmxvY2sueDtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS55ID0gY3VycmVudEJsb2NrLnk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueE1vdmUgPSBjdXJyZW50QmxvY2sueE1vdmU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueU1vdmUgPSBjdXJyZW50QmxvY2sueU1vdmU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jay5iYWNrZ3JvdW5kVGV4dHVyZSA9IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW07XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmRldGFpbHMgPSBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIgPT09ICdkZXN0cm95ZXInKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCbG9jay5kZXRhaWxzICYmIGN1cnJlbnRCbG9jay5kZXRhaWxzLnZhbHVlT2ZNb3ZlKSB7XHJcbiAgICAgICAgICAgIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEucG9zaXRpb25SZWR1Y2VyKHsgYWxsQmxvY2tzOiBhbGxCbG9ja3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobWFpbk9iamVjdC5ibG9ja1NpemUpXHJcbiAgICAgICAgY3VycmVudEJsb2NrLndpZHRoID0gbWFpbk9iamVjdC5ibG9ja1NpemU7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmhlaWdodCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5kZXRhaWxzID0gbnVsbDtcclxuICAgICAgICBjdXJyZW50QmxvY2suYmFja2dyb3VuZFRleHR1cmUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmRlc3Ryb3llciA9PT0gJ3JlZGFjdG9yRGVjb3JhdGlvbicpIHtcclxuICAgICAgICBjdXJyZW50QmxvY2suYmFja2dyb3VuZFRleHR1cmUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY2hhbmdlT2JqZWN0TW9kZWwgPSBjaGFuZ2VPYmplY3RNb2RlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGVsZXZhdG9yTW92ZSgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudFZhbHVlLCBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV0YWlscylcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMudHlwZSA9PT0gJ2VsZXZhdG9yJykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yVmFsdWVPZk1vdmU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmRldGFpbHMudmFsdWVPZk1vdmU7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLm1vdmVEaXJlY3Rpb24gPT09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55TW92ZSArPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54TW92ZSArPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yVmFsdWVPZk1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPD0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnlNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLm1vdmVEaXJlY3Rpb24gPT09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yVmFsdWVPZk1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPj0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMsIGN1cnJlbnRWYWx1ZSwgZGVmYXVsdFZhbHVlLCBcIjw8PDxcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5lbGV2YXRvck1vdmUgPSBlbGV2YXRvck1vdmU7XHJcbi8qXHJcblxyXG5cImN1cnJlbnRWYWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImN1cnJlbnREaXJlY3Rpb25cIjogdHJ1ZSxcclxuICAgICAgICBcImNvbnN0cnVjdG9yRGlyZWN0aW9uXCI6IHRydWUsXHJcbiBcImlkXCI6IFwiZWxldmF0b3JfMVwiLFxyXG4gICAgICAgIFwidGV4dHVyZVwiOiBcIi9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9lbGV2YXRvci5wbmdcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRWxldmF0b3JcIixcclxuICAgICAgICBcInNwZWVkXCI6IDUsXHJcbiAgICAgICAgXCJtb3ZlRGlyZWN0aW9uXCI6IFwidmVydGljYWxcIixcclxuICAgICAgICBcInZhbHVlT2ZNb3ZlXCI6IDEwMCxcclxuICAgICAgICBcImN1cnJlbnRWYWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50RGlyZWN0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiZWxldmF0b3JcIixcclxuICAgICAgICBcImNvbGxpc2lvblwiOiB0cnVlXHJcbiovXHJcbmZ1bmN0aW9uIGJsb2NrQW5pbWF0aW9ucyhzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSB0cnVlOyB9XHJcbiAgICB0aGlzLmRldGVjdEZyYW1lICs9IDE7XHJcbiAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zeCArPSB0aGlzLnNXaWR0aDtcclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh0aGlzLnN4KSA+PSB0aGlzLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5hbmltYXRpb25TdGVwcyA9PSAwICYmIHN0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4ICs9IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc1dpZHRoO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4KSA+PSB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnBpY3R1cmVzV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3ggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5kZXRhaWxzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmRldGFpbHMuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWlscy5zeCArPSB0aGlzLmRldGFpbHMuc1dpZHRoO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh0aGlzLmRldGFpbHMuc3gpID49IHRoaXMuZGV0YWlscy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuc3ggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYmxvY2tBbmltYXRpb25zID0gYmxvY2tBbmltYXRpb25zO1xyXG5mdW5jdGlvbiBzdGFpcnNNb3ZlKCkge1xyXG59XHJcbmV4cG9ydHMuc3RhaXJzTW92ZSA9IHN0YWlyc01vdmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vcGFuZWxGb3JtUGFydEdlbmVyYXRvclwiKTtcclxudmFyIGdsb2JhbFZhcmlhYmxlc18xID0gcmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpO1xyXG4vLyA9PT09PT09PT09PT09ICBEaWFsb2cgID09PT09PT09PT09PS8vXHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZ0ZpZWxkcygpIHtcclxuICAgIHZhciBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlT3RoZXJEaWFsb2coX2EpIHtcclxuICAgIHZhciBhbGxEaWFsb2dzID0gX2EuYWxsRGlhbG9ncztcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGlhbG9nRm9ybSwgZmluYWxEaWFsb2dCbG9ja3MsIGFsbElubmVyQnV0dG9uT2JqZWN0cywgaWQsIF9pLCBhbGxEaWFsb2dzXzEsIGRpYWxvZywgcXVlc3Rpb25JdGVtcywgYmxvY2tEYXRhXzEsIGJsb2NrRGF0YTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbERpYWxvZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbERpYWxvZ0Jsb2NrcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBhbGxEaWFsb2dzXzEgPSBhbGxEaWFsb2dzOyBfaSA8IGFsbERpYWxvZ3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nID0gYWxsRGlhbG9nc18xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JdGVtcyA9IGxvYWRRdWVzdGlvbnNTZWN0aW9uKHsgcXVlc3Rpb25CYXNlOiBkaWFsb2cucXVlc3Rpb25zLCBjdXJyZW50SWQ6IGlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbERpYWxvZ0Jsb2NrcyArPSBcIjxkaXYgaWQ9XFxcImRpYWxvZy1ibG9jay13cmFwcGVyLVwiICsgaWQgKyBcIlxcXCIgY2xhc3M9XFxcImRpYWxvZy1ibG9jay13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICA8aDQ+RGlhbG9nIElEOiBcIiArIGRpYWxvZy5pZCArIFwiXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJkaWFsb2ctaWQtZmllbGQtXCIgKyBpZCArIFwiXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlPVxcXCJcIiArIGRpYWxvZy5pZCArIFwiXFxcIj4gICBcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJyZW1vdmUtZGlhbG9nLVwiICsgaWQgKyBcIlxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJ1dHRvbi1yZWplY3RcXFwiPmRlbGV0ZSBkaWFsb2c8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvaDQ+XFxuICAgICAgICAgICAgPHA+RGlhbG9nIGFjdGlvbnMgPHNwYW4+XFxcIm5vbmVcXFwiPC9zcGFuPiAgPHNwYW4+XFxcImdpdmVfb2JqZWN0XFxcIjwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJkaWFsb2ctYWN0aW9uLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcImRpYWxvZyBhY3Rpb25zXFxcIiB2YWx1ZT1cXFwiXCIgKyBkaWFsb2cuYWN0aW9uICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwiZGlhbG9nLWJsb2NrLVwiICsgaWQgKyBcIlxcXCIgbmFtZT1cXFwiXFxcIj5cIiArIGRpYWxvZy50ZXh0ICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJcXFwiPlwiICsgKChxdWVzdGlvbkl0ZW1zKSA/IHF1ZXN0aW9uSXRlbXMucXVlc3Rpb25zIDogJycpICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkLW5ldy1xdWVzdGlvbi1cIiArIGlkICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+KyBBZGQgcXVlc3Rpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxocj5cXG4gICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RhdGFfMSA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Jsb2NrV3JhcHBlcjogXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3RvcjogXCJkaWFsb2ctYmxvY2stXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0lkRmllbGQ6IFwiZGlhbG9nLWlkLWZpZWxkLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGREaWFsb2c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGROZXdRdWVzdGlvbjogXCJhZGQtbmV3LXF1ZXN0aW9uLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVEaWFsb2c6IFwicmVtb3ZlLWRpYWxvZy1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQWN0aW9uRmllbGQ6IFwiZGlhbG9nLWFjdGlvbi1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrSWQ6IGFsbERpYWxvZ3MubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uc0RhdGE6IChxdWVzdGlvbkl0ZW1zKSA/IHF1ZXN0aW9uSXRlbXMuYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gYWxsSW5uZXJCdXR0b25PYmplY3RzLmNvbmNhdChibG9ja0RhdGFfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGlhbG9nQmxvY2tzICs9IFwiPGJ1dHRvbiBpZD1cXFwiYWRkLWRpYWxvZy1cIiArIGlkICsgXCJcXFwiID5cXG4gICAgICAgIDxzcGFuPiArIE5ldyBkaWFsb2c8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCbG9ja1dyYXBwZXI6IFwiZGlhbG9nLWJsb2NrLXdyYXBwZXItXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3RvcjogXCJkaWFsb2ctYmxvY2stXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRGlhbG9nOiBcImFkZC1kaWFsb2ctXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3UXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZURpYWxvZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrSWQ6IGFsbERpYWxvZ3MubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IGFsbElubmVyQnV0dG9uT2JqZWN0cy5jb25jYXQoYmxvY2tEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dGb3JtLmlubmVySFRNTCA9IGZpbmFsRGlhbG9nQmxvY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHsgZGlhbG9nRm9ybTogZGlhbG9nRm9ybSwgYWxsSW5uZXJCdXR0b25PYmplY3RzOiBhbGxJbm5lckJ1dHRvbk9iamVjdHMgfV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYi5zZW50KCldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU90aGVyRGlhbG9nID0gY3JlYXRlT3RoZXJEaWFsb2c7XHJcbmZ1bmN0aW9uIGxvYWRRdWVzdGlvbnNTZWN0aW9uKF9hKSB7XHJcbiAgICB2YXIgcXVlc3Rpb25CYXNlID0gX2EucXVlc3Rpb25CYXNlLCBjdXJyZW50SWQgPSBfYS5jdXJyZW50SWQ7XHJcbiAgICBpZiAoIXF1ZXN0aW9uQmFzZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgYWxsUXVlc3Rpb25zQmxvY2sgPSAnJztcclxuICAgIHZhciBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgPSBbXTtcclxuICAgIHZhciBxdWVzdGlvbnNJZCA9IDA7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHF1ZXN0aW9uQmFzZV8xID0gcXVlc3Rpb25CYXNlOyBfaSA8IHF1ZXN0aW9uQmFzZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHF1ZXN0aW9uQmFzZV8xW19pXTtcclxuICAgICAgICBhbGxRdWVzdGlvbnNCbG9jayArPSBcIjxkaXYgY2xhc3M9XFxcInF1ZXN0aW9uLXdyYXBwZXJcXFwiIGlkPVxcXCJzaW5nbGUtcXVlc3Rpb25CYXNlLWJsb2NrLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiXFxcIj5cXG4gICAgICAgIDxwPlJlbGF0ZWQgSWQgZGlhbG9nPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicmVsYXRlZC1xdWVzdGlvbi1pZC1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiXCIgKyBxdWVzdGlvbi5pZCArIFwiXFxcIiBjbGFzcz1cXFwicmVsYXRlZC1pZC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPSdxdWVzdGlvbi10ZXh0LVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiJz5cIiArIHF1ZXN0aW9uLnRleHQgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwicmVtb3ZlLXF1ZXN0aW9uLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiXFxcIiBjbGFzcz1cXFwicmlnaHQtc2lkZS1idXR0b25cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYnV0dG9uLXJlamVjdFxcXCI+LSByZW1vdmUtcXVlc3Rpb248L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICB2YXIgYmxvY2tEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgICAgICBkaWFsb2dJZDogY3VycmVudElkLFxyXG4gICAgICAgICAgICBxdWVzdGlvbklkOiBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgcmVsYXRlZFF1ZXN0aW9uSWQ6IFwicmVsYXRlZC1xdWVzdGlvbi1pZC1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uV3JhcHBlcjogXCJzaW5nbGUtcXVlc3Rpb25CYXNlLWJsb2NrLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3RvcjogXCJxdWVzdGlvbi10ZXh0LVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgcmVtb3ZlUXVlc3Rpb246IFwicmVtb3ZlLXF1ZXN0aW9uLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyA9IGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cy5jb25jYXQoYmxvY2tEYXRhKTtcclxuICAgICAgICBxdWVzdGlvbnNJZCArPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcXVlc3Rpb25zOiBhbGxRdWVzdGlvbnNCbG9jaywgYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzOiBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgfTtcclxufVxyXG4vLyAgYWRkIG5ldyBlbGVtZW50c1xyXG5mdW5jdGlvbiBkaWFsb2dBbnN3ZXJCdXR0b24oX2EpIHtcclxuICAgIHZhciBhbGxJbm5lckJ1dHRvbk9iamVjdHMgPSBfYS5hbGxJbm5lckJ1dHRvbk9iamVjdHMsIGFsbE90aGVyc0RpYWxvZ3MgPSBfYS5hbGxPdGhlcnNEaWFsb2dzLCBibG9ja0RldGFpbHMgPSBfYS5ibG9ja0RldGFpbHMsIGN1cnJlbnREZXNjcmlwdGlvbklkID0gX2EuY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyLCBpdGVtRGF0YSA9IF9hLml0ZW1EYXRhO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfbG9vcF8xLCBfaSwgYWxsSW5uZXJCdXR0b25PYmplY3RzXzEsIGJ1dHRvbjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGlmICghYWxsSW5uZXJCdXR0b25PYmplY3RzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGROZXdRdWVzdGlvbiA9IChidXR0b24uYWRkTmV3UXVlc3Rpb24pID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uYWRkTmV3UXVlc3Rpb24pIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVEaWFsb2cgPSAoYnV0dG9uLnJlbW92ZURpYWxvZykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5yZW1vdmVEaWFsb2cpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBhZGREaWFsb2cgPSAoYnV0dG9uLmFkZERpYWxvZykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5hZGREaWFsb2cpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dBY3Rpb25GaWVsZCA9IChidXR0b24uZGlhbG9nQWN0aW9uRmllbGQpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uZGlhbG9nQWN0aW9uRmllbGQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dJZEZpZWxkID0gKGJ1dHRvbi5kaWFsb2dJZEZpZWxkKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmRpYWxvZ0lkRmllbGQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0QXJlYVNlbGVjdG9yID0gKGJ1dHRvbi50ZXh0QXJlYVNlbGVjdG9yKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLnRleHRBcmVhU2VsZWN0b3IpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChhZGROZXdRdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5ld1F1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGlhbG9nQmxvY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnV0dG9uLmxhc3RCbG9ja0lkICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLnF1ZXN0aW9ucyA9IGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLnF1ZXN0aW9ucy5jb25jYXQobmV3RGlhbG9nQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaWFsb2cucXVlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZURpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzLnNwbGljZShidXR0b24uaWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlhbG9nRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGlhbG9nQmxvY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYnV0dG9uLmxhc3RCbG9ja0lkICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IGZpZWxkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMgPSBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMuY29uY2F0KG5ld0RpYWxvZ0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRleHRBcmVhU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0udGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nQWN0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dBY3Rpb25GaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLmFjdGlvbiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nSWRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0lkRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5pZCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLy8gc2F2ZSB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJ1dHRvbi5xdWVzdGlvbnNEYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5xdWVzdGlvbnNEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUXVlc3Rpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogYnV0dG9uLnF1ZXN0aW9uc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0czogYWxsSW5uZXJCdXR0b25PYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzOiBhbGxPdGhlcnNEaWFsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YTogaXRlbURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChfaSA9IDAsIGFsbElubmVyQnV0dG9uT2JqZWN0c18xID0gYWxsSW5uZXJCdXR0b25PYmplY3RzOyBfaSA8IGFsbElubmVyQnV0dG9uT2JqZWN0c18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uID0gYWxsSW5uZXJCdXR0b25PYmplY3RzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShidXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGlhbG9nQW5zd2VyQnV0dG9uID0gZGlhbG9nQW5zd2VyQnV0dG9uO1xyXG5mdW5jdGlvbiByZW1vdmVRdWVzdGlvbnMoX2EpIHtcclxuICAgIHZhciBxdWVzdGlvbnNEYXRhID0gX2EucXVlc3Rpb25zRGF0YSwgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gX2EuYWxsSW5uZXJCdXR0b25PYmplY3RzLCBhbGxPdGhlcnNEaWFsb2dzID0gX2EuYWxsT3RoZXJzRGlhbG9ncywgYmxvY2tEZXRhaWxzID0gX2EuYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZCA9IF9hLmN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgaXRlbURhdGEgPSBfYS5pdGVtRGF0YTtcclxuICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGFuc3dlcikge1xyXG4gICAgICAgIHZhciByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgYW5zd2VyLnJlbW92ZVF1ZXN0aW9uKTtcclxuICAgICAgICB2YXIgdGV4dEFyZWFTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBhbnN3ZXIudGV4dEFyZWFTZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIHJlbGF0ZWRRdWVzdGlvbklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGFuc3dlci5yZWxhdGVkUXVlc3Rpb25JZCk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnMuc3BsaWNlKGFuc3dlci5xdWVzdGlvbklkLCAxKTtcclxuICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZXh0QXJlYVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS50ZXh0ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGVkUXVlc3Rpb25JZCkge1xyXG4gICAgICAgICAgICByZWxhdGVkUXVlc3Rpb25JZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkLCAnfHx8Jyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1thbnN3ZXIuZGlhbG9nSWRdLnF1ZXN0aW9uc1thbnN3ZXIucXVlc3Rpb25JZF0uaWQsIHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcXVlc3Rpb25zRGF0YV8xID0gcXVlc3Rpb25zRGF0YTsgX2kgPCBxdWVzdGlvbnNEYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHF1ZXN0aW9uc0RhdGFfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMihhbnN3ZXIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZ0Zvcm0oX2EpIHtcclxuICAgIHZhciBibG9ja0RldGFpbHMgPSBfYS5ibG9ja0RldGFpbHMsIGN1cnJlbnREZXNjcmlwdGlvbklkID0gX2EuY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmYWNlUGljdHVyZSwgaW5uZXJUZXh0LCBpdGVtRGF0YSwgYWxsT3RoZXJzRGlhbG9ncywgbWFpbkRpYWxvZ1dyYXBwZXIsIG90aGVyRGlhbG9ncztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBmYWNlUGljdHVyZSA9IChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSkgPyBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSA6IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxkaXYgaWQ9XFxcIm1haW4tZGlhbG9nLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgIDxoMz5EaWFsb2c8L2gzPlxcbiAgICAgICAgICAgIDxwPkNyZWF0ZSBQZXJzb24gZGlhbG9nPC9wPlxcbiAgICAgICAgICAgIDxkaXY+XCIgKyAoKGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZUFic29sdXRlKSA/ICdQaWN0dXJlIGlzIHNldCcgOiAnWW91IG11c3Qgc2F2ZSB0aGUgcGljdHVyZSBmaXJzdCcpICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICA8aW1nIHdpZHRoPVxcXCIxMDBcXFwiIGlkPVwiICsgKCdkaWFsb2ctZmFjZS1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBmYWNlUGljdHVyZSArIFwiXFxcIj5cXG5cXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJwcmV2aWV3LWRpYWxvZy1mYWNlXFxcIiBkYXRhLXRhcmdldD0ncHJldmlldy1kaWFsb2ctZmFjZSc+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMS5wbmdcXFwiIHNlbGVjdGVkPVxcXCJzZWxlY3RlZFxcXCI+cHJvZmVzc29yPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMy5wbmdcXFwiPm9sZCBtYW48L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS00LnBuZ1xcXCI+bWFuIDE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS03LnBuZ1xcXCI+bWFuIDI8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS04LnBuZ1xcXCI+T2ZmaWNlcjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTIucG5nXFxcIj5Tb2xkaWVyPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNS5wbmdcXFwiPlJvYm90IHJlZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTYucG5nXFxcIj5ZZWxsb3cgcmVkPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJucGMtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgKChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQubmFtZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQubmFtZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOUEMgbmFtZScpICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIiArICgoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUpID8gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUgOiAnTlBDIG5hbWUnKSArIFwiXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWRpYWxvZy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBuYW1lIGFuZCBwaWN0dXJlPC9idXR0b24+IDxocj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGwtb3RoZXJzLWRpYWxvZ3NcXFwiIGlkPVxcXCJhbGwtb3RoZXJzLWRpYWxvZ3NcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbE90aGVyc0RpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1vdGhlcnMtZGlhbG9nc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluRGlhbG9nV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaWFsb2ctd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjcmVhdGVPdGhlckRpYWxvZyh7IGFsbERpYWxvZ3M6IGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2VycyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJEaWFsb2dzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3RoZXJEaWFsb2dzKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhbGxPdGhlcnNEaWFsb2dzLmFwcGVuZENoaWxkKG90aGVyRGlhbG9ncy5kaWFsb2dGb3JtKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRpYWxvZ0Fuc3dlckJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHM6IG90aGVyRGlhbG9ncy5hbGxJbm5lckJ1dHRvbk9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzOiBhbGxPdGhlcnNEaWFsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlRGlhbG9nRm9ybSA9IGNyZWF0ZURpYWxvZ0Zvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBfX0hPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDozMzAwJztcclxuZXhwb3J0cy5fX0hPU1QgPSBfX0hPU1Q7XHJcbnZhciBfX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ibG9ja3MnO1xyXG5leHBvcnRzLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMID0gX19CTE9DS19DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0JMT0NLX0JBQ0tHUk9VTkRfQ09OU1RSVUNUT1JfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWJhY2tncm91bmQtYmxvY2tzJztcclxuZXhwb3J0cy5fX0JMT0NLX0JBQ0tHUk9VTkRfQ09OU1RSVUNUT1JfVVJMID0gX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTDtcclxudmFyIF9fQ0hBUkFDVEVSX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1jaGFyYWN0ZXJzJztcclxuZXhwb3J0cy5fX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwgPSBfX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0VORU1ZX0RFVEFJTFNfVVJMID0gJy9hcGkvZ2V0LWNvbnN0cnVjdG9yLWdyb3VuZC1lbmVteSc7XHJcbnZhciBfX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ncm91bmQtZW5lbXktcmVkYWN0b3InO1xyXG5leHBvcnRzLl9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMID0gX19FTkVNWV9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX01BUF9EQVRBX1VSTCA9ICcvYXBwL2dldC1hbGwtbWFwcyc7XHJcbmV4cG9ydHMuX19NQVBfREFUQV9VUkwgPSBfX01BUF9EQVRBX1VSTDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS92aWV3XCIpO1xyXG52YXIgcmVxdWVzdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXItcmVxdWVzdHMvcmVxdWVzdHNNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGluaXRNYWluRW5naW5lKF9hKSB7XHJcbiAgICB2YXIgTWFpbkdhbWVDb25zdHJ1Y3RvciA9IF9hLk1haW5HYW1lQ29uc3RydWN0b3IsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXBOYW1lLCBibG9ja1NpemUsIGRlZmF1bHRXaWR0aCwgZGVmYXVsdEhlaWdodCwgbWF4SG9yaXpvbnRhbEJsb2NrcywgbWF4VmVydGljYWxCbG9ja3MsIHJlZGFjdG9yRGF0YSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ10ubmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZSA9IDUwLCBkZWZhdWx0V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLyBibG9ja1NpemUpLnRvRml4ZWQoKSwgZGVmYXVsdEhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyBibG9ja1NpemUpLnRvRml4ZWQoKSwgbWF4SG9yaXpvbnRhbEJsb2NrcyA9IDMwMCwgbWF4VmVydGljYWxCbG9ja3MgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFwU2l6ZVRvRm9ybSh7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwTW92ZVNwZWVkOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwV2lkdGg6IGRlZmF1bHRXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwSGVpZ2h0OiBkZWZhdWx0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBEZWZhdWx0V2lkdGg6IGRlZmF1bHRXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGVmYXVsdEhlaWdodDogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SG9yaXpvbnRhbEJsb2NrczogbWF4SG9yaXpvbnRhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmVydGljYWxCbG9ja3M6IG1heFZlcnRpY2FsQmxvY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1NpemU6IGJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVkYWN0b3JCbG9jazogZmlsbEJsb2NrTWFwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2NrQ29uc3RydWN0b3I6IEJsb2NrQ29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQmxvY2tzOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEJsb2NrOiBkZWZhdWx0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBibG9ja1NpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19CTE9DS19DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5ibG9ja0RhdGFiYXNlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmJhY2tncm91bmREYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQ0hBUkFDVEVSX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLmNoYXJhY3RlcnNEYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbNCAvKnlpZWxkKi8sIChfYi5lbmVteURhdGFiYXNlID0gX2Muc2VudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZGFjdG9yRGF0YSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlZGFjdG9yRGF0YS5iYWNrZ3JvdW5kRGF0YWJhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBNYWluR2FtZUNvbnN0cnVjdG9yKF9fYXNzaWduKHt9LCByZWRhY3RvckRhdGEpKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuaW5pdE1haW5FbmdpbmUgPSBpbml0TWFpbkVuZ2luZTtcclxuZnVuY3Rpb24gc2V0TWFwU2l6ZVRvRm9ybShfYSkge1xyXG4gICAgdmFyIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICBmb3JtWydob3Jpem9udGFsQmxvY2snXS52YWx1ZSA9IHdpZHRoO1xyXG4gICAgZm9ybVsndmVydGljYWxCbG9jayddLnZhbHVlID0gaGVpZ2h0O1xyXG59XHJcbmV4cG9ydHMuc2V0TWFwU2l6ZVRvRm9ybSA9IHNldE1hcFNpemVUb0Zvcm07XHJcbmZ1bmN0aW9uIGZpbGxCbG9ja01hcChfYSkge1xyXG4gICAgdmFyIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yLCBob3Jpem9udGFsQmxvY2tzID0gX2EuaG9yaXpvbnRhbEJsb2NrcywgdmVydGljYWxCbG9jayA9IF9hLnZlcnRpY2FsQmxvY2ssIGJsb2NrU2l6ZSA9IF9hLmJsb2NrU2l6ZTtcclxuICAgIHZhciBibG9ja0FycmF5ID0gW107XHJcbiAgICB2YXIgaG9yaXpvbnRhbEVuZHMgPSAwO1xyXG4gICAgdmFyIHZlcnRpY2FsRW5kcyA9IDA7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogYmxvY2tTaXplLFxyXG4gICAgICAgIGhlaWdodDogYmxvY2tTaXplLFxyXG4gICAgICAgIGluZGV4OiAwXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob3Jpem9udGFsQmxvY2tzICogdmVydGljYWxCbG9jazsgaSsrKSB7XHJcbiAgICAgICAgYmxvY2tEYXRhLnkgPSB2ZXJ0aWNhbEVuZHM7XHJcbiAgICAgICAgYmxvY2tEYXRhLnggPSBob3Jpem9udGFsRW5kcztcclxuICAgICAgICBibG9ja0RhdGEuaW5kZXggPSBpO1xyXG4gICAgICAgIHZlcnRpY2FsRW5kcyA9ICh2ZXJ0aWNhbEVuZHMgPCAoKHZlcnRpY2FsQmxvY2sgLSAxKSAqIGJsb2NrU2l6ZSkpID8gdmVydGljYWxFbmRzICsgYmxvY2tTaXplIDogMDtcclxuICAgICAgICBob3Jpem9udGFsRW5kcyA9ICh2ZXJ0aWNhbEVuZHMgPT0gMCkgPyBob3Jpem9udGFsRW5kcyArIGJsb2NrU2l6ZSA6IGhvcml6b250YWxFbmRzO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgICAgIGJsb2NrQXJyYXkgPSBibG9ja0FycmF5LmNvbmNhdChuZXcgQmxvY2tDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgYmxvY2tEYXRhKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coQmxvY2tDb25zdHJ1Y3RvciwgYmxvY2tBcnJheSk7XHJcbiAgICByZXR1cm4gYmxvY2tBcnJheTtcclxufVxyXG5leHBvcnRzLmZpbGxCbG9ja01hcCA9IGZpbGxCbG9ja01hcDtcclxuZnVuY3Rpb24gYmFja1RvT2JqZWN0KF9hKSB7XHJcbiAgICB2YXIgZGF0YSA9IF9hLmRhdGEsIGNvbnN0cnVjdG9yID0gX2EuY29uc3RydWN0b3I7XHJcbiAgICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3Rvcik7XHJcbiAgICB2YXIgZmluYWxPYmplY3QgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocmVzLnByb3RvdHlwZSksIGRhdGEpO1xyXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xyXG59XHJcbmV4cG9ydHMuYmFja1RvT2JqZWN0ID0gYmFja1RvT2JqZWN0O1xyXG5mdW5jdGlvbiByZW5kZXJCbG9ja0JveChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMueU1vdmUgPiAwIC0gMTAwICYmIHRoaXMueE1vdmUgPiAwIC0gMTAwICYmIHRoaXMueU1vdmUgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDAgJiYgdGhpcy54TW92ZSA8IHdpbmRvdy5pbm5lcldpZHRoICsgMTAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kZXRhaWxzKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3XzEuY3JlYXRlRnJhbWUuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIHZpZXdfMS5iYWNrZ3JvdW5kUmVuZGVyLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdmlld18xLmNyZWF0ZUJsb2NrUGljdHVyZS5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnJlbmRlckJsb2NrQm94ID0gcmVuZGVyQmxvY2tCb3g7XHJcbmZ1bmN0aW9uIGJsb2NrQW5pbWF0aW9uUmVuZGVyKF9hKSB7XHJcbiAgICB2YXIgYmxvY2sgPSBfYS5ibG9jaztcclxuICAgIGJsb2NrLmJsb2NrQW5pbWF0aW9ucygpO1xyXG59XHJcbmV4cG9ydHMuYmxvY2tBbmltYXRpb25SZW5kZXIgPSBibG9ja0FuaW1hdGlvblJlbmRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZXNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKTtcclxudmFyIGRpYWxvZ0Zvcm1Nb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2RpYWxvZ0Zvcm1Nb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlSW5wdXQoX2EpIHtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBibG9ja0RldGFpbHMsIGlubmVyVGV4dCwgaXRlbURhdGEsIGN1cnJlbnREZXNjcmlwdGlvbklkLCBibG9ja0FsZXJ0TWVzc2FnZSwgYmxvY2tQcmV2aWV3SW1hZ2UsIGxvY2FsUGljdHVyZSwgbWFpblBpY3R1cmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzID0gdGFyZ2V0LmRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1hbGVydC1tZXNzYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stcHJldmlldy1pbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xsaXNpb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dHVyZVwiOiBcIi9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9ibG9jay9ibG9jay0zLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc0Rlc3Ryb3lcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgQmxvY2tzIHNldHRpbmdzICYgUGFyYW1ldGVycyAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMT5CbG9jayBzaXplPC9oMT5cXG4gICAgICAgIDxoMz5CbG9jayB3aWR0aDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayB3aWR0aCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjIwMFxcXCIgaWQ9XCIgKyAoJ3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LndpZHRoKSA/IHRhcmdldC53aWR0aCA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXdpZHRoLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIHdpZHRoPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIGhlaWdodDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayBoZWlnaHQgaW4gcGl4ZWxzPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMDBcXFwiIGlkPVwiICsgKCdoZWlnaHQtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuaGVpZ2h0KSA/IHRhcmdldC5oZWlnaHQgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1oZWlnaHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgaGVpZ2h0PC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay13aWR0aC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIlxcbiAgICAgICAgICAgIDxoMT5CbG9jayBQb3NpdGlvbjwvaDE+XFxuICAgICAgICAgICAgPGgzPkJsb2NrIFg8L2gzPlxcbiAgICAgICAgICAgIDxwPlggcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCItNTBcXFwiIG1heD1cXFwiNTBcXFwiIGlkPVwiICsgKCd4LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5ibG9ja1JlbGF0aXZlWFBvcykgPyB0YXJnZXQuYmxvY2tSZWxhdGl2ZVhQb3MgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS14LXBvcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBYIFBvc2l0aW9uPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIFk8L2gzPlxcbiAgICAgICAgICAgIDxwPlkgcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCItNTBcXFwiIG1heD1cXFwiNTBcXFwiIGlkPVwiICsgKCd5LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5ibG9ja1JlbGF0aXZlWVBvcykgPyB0YXJnZXQuYmxvY2tSZWxhdGl2ZVlQb3MgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS15LXBvcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBZIFBvc2l0aW9uPC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay14LXBvcy0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgRGVzY3JpcHRpb24gID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+RGVzY3JpcHRpb248L2gzPlxcbiAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdkZXNjcmlwdGlvbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgYmxvY2tEZXRhaWxzLmRlc2NyaXB0aW9uICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1kZXNjcmlwdGlvbi1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBEZXNjcmlwdGlvbjwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgcnVsZXJzICYgdGlwcyAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5ydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlRpcHM8L2gzPlxcbiAgICAgICAgICAgIDxwPkEgdGlwcyBob3cgdG8gdXMgdGhpcyBvYmplY3RzLCBpdCBjb3VsZCBiZSBhIHBhcnQgb2Ygc29tZSBtZXNzYWdlLCBcXFwiVXNlICogIHRvIHN0YXJ0IG5ldyBsaW5lXFxcIjwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3RpcHMtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnRpcHMgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS10aXBzLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFRpcHM8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi10aXBzLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlN1Y2Nlc3MgVGV4dDwvaDM+XFxuICAgICAgICAgICAgPHA+RGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiB5b3UgZG8gZXZlcnl0aGluZyB3cml0ZTogY29sbGVjdCBkYXRlL2tleSwgYnJpbmcgZGF0YS9rZXkgPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnN1Y2Nlc3NUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5zdWNjZXNzVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBUZXh0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tc3VjY2Vzc1RleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+UmVxdWlyZSBUZXh0PC9oMz5cXG4gICAgICAgICAgICA8cD5EaXNwbGF5IGEgbWVzc2FnZSBkZXNjcmliZSBzb21lIFJlcXVpcmVtZW50IGZvciB0aGlzIG9iamVjdCB0byB3b3JrPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArICgoYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmVUZXh0KSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlVGV4dCA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtdGV4dC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIFRleHQ8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlJlcXVpcmUgT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5SZXF1aXJlIG1lc3NhZ2UsIGRpc3BsYXkgb2JqZWN0IG5lZWRzIGZvciB0aGlzIGJsb2NrIHRvIGV2ZXJ5dGhpbmcgd29yayBmaW5lIDxzcGFuPmNvbXB1dGVyX2RhdGFcXG4gICAgICAgICAgICA8L3NwYW4+PHNwYW4+Ymx1ZV9jYXJkPC9zcGFuPjxzcGFuPmdyZWVuX2NhcmQ8L3NwYW4+IDxzcGFuPnllbGxvd19jYXJkPC9zcGFuPiA8c3Bhbj5yZWRfY2FyZDwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdyZXF1aXJlLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtcmVxdWlyZS1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBSZXF1aXJlIE9iamVjdDwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUGljdHVyZSA9IChibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyBibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5QaWN0dXJlID0gKGJsb2NrRGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIDogZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBsb2NhbFBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPkNvbnRhaW4gT2JqZWN0PC9oMz5cXG4gICAgICAgICAgICA8cD5PYmplY3Qgb3IgZGF0YSBpbnNpZGUgdGhpcyBvYmplY3QgcHJlc3MgJ0UnIGJ1dHRvbiB0byBjb2xsZWN0IFxcbiBleGl0ICAtIHNwZWNpYWwgb2JqZWN0IHRvIGZpbmlzaCB0aGUgbGV2ZWxcXG4gICAgICAgICAgICA8c3Bhbj5jb21wdXRlcl9kYXRhPC9zcGFuPjxzcGFuPmJsdWVfY2FyZDwvc3Bhbj48c3Bhbj5ncmVlbl9jYXJkPC9zcGFuPiA8c3Bhbj55ZWxsb3dfY2FyZDwvc3Bhbj4gPHNwYW4+cmVkX2NhcmQ8L3NwYW4+IDxzcGFuPmV4aXQ8L3NwYW4+ICBleGl0ICAtIGVuZCB0aGUgbGV2ZWw8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdjb250YWluLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5jb250YWluKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5jb250YWluIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XFxcIjEwMFxcXCIgaWQ9XCIgKyAoJ2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCJcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgbWFpblBpY3R1cmUgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwicHJldmlldy1jb250YWluLW9iamVjdFxcXCIgZGF0YS10YXJnZXQ9J3NlbGVjdC1wcmV2aWV3LWJ0bic+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImNvbXB1dGVyLWRhdGEucG5nXFxcIj5Db21wdXRlciBkYXRhPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInJlZC1jYXJkLnBuZ1xcXCI+UmVkIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYmx1ZS1jYXJkLnBuZ1xcXCI+Qmx1ZSBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImdyZWVuLWNhcmQucG5nXFxcIj5HcmVlbiBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInllbGxvdy1jYXJkLnBuZ1xcXCI+WWVsbG93IGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicG93ZXItY2VsbC5wbmdcXFwiPlBvd2VyIENlbGw8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWNvbnRhaW4tYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmU8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJsb2NrRGV0YWlscy5kaWFsb2cpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRpYWxvZ0Zvcm1Nb2R1bGVfMS5jcmVhdGVEaWFsb2dGb3JtKHsgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCwgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lciB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLmlubmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2Utc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSwgZmllbGRSZXN1bHRzLCBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS13aWR0aC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWhlaWdodC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXgtcG9zLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUteS1wb3MtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1kZXNjcmlwdGlvbi1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXRpcHMtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtc3VjY2Vzcy10ZXh0LWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXJlcXVpcmUtdGV4dC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWNvbnRhaW4tYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtZGlhbG9nLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDIxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnd2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjd2lkdGgtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3dpZHRoIGlzIHNldCcgOiAnIHNhdmUgd2lkdGggZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnaGVpZ2h0J10gPSB0YXJnZXQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdoZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjaGVpZ2h0LXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnYmxvY2tSZWxhdGl2ZVhQb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjeC1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3dpZHRoIGlzIHNldCcgOiAnIHNhdmUgd2lkdGggZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnYmxvY2tSZWxhdGl2ZVlQb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjeS1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3dpZHRoIGlzIHNldCcgOiAnIHNhdmUgd2lkdGggZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjZGVzY3JpcHRpb24tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2Rlc2NyaXB0aW9uIGZpZWxkJyA6ICcgc2F2ZSBkZXNjcmlwdGlvbiBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0aXBzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3RpcHMtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3RpcHMgZmllbGQnIDogJyBzYXZlIHRpcHMgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc3VjY2Vzc1RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2Rlc2NyaXB0aW9uIGZpZWxkJyA6ICcgc2F2ZSBkZXNjcmlwdGlvbiBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdyZXF1aXJlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNyZXF1aXJlVGV4dC1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAncmVxdWlyZSB0ZXh0IGZpZWxkJyA6ICcgc2F2ZSByZXF1aXJlIHRleHQgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNyZXF1aXJlLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdyZXF1aXJlIGZpZWxkJyA6ICcgc2F2ZSByZXF1aXJlIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjY29udGFpbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnY29udGFpbiBvYmplY3QnIDogJyBzYXZlIGNvbnRhaW4gb2JqZWN0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNucGMtbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qZmllbGRSZXN1bHRzID0gYXdhaXQgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNkZWZhdWx0LWRpYWxvZy10ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5kaWFsb2cuZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmZpZWxkUmVzdWx0cyA9IGF3YWl0IGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2RlZmF1bHQtZGlhbG9nLXRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2NvbnRhaW4gb2JqZWN0JyA6ICcgc2F2ZSBjb250YWluIG9iamVjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gKGZpZWxkUmVzdWx0cykgPyBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLXN1Y2Nlc3NcXFwiID4gU3VjY2Vzc2Z1bGx5IHNhdmVkICdcIiArIGZpZWxkTmFtZSArIFwiJyA8L3A+XCIgOiBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLWVycm9yXFxcIiA+VGhlcmUgaXMgYSBwcm9ibGVtIGluICdcIiArIGZpZWxkTmFtZSArIFwiJyBpIGNhbid0IHNhdmU8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBkYXRhQ2hlY2tfMSwgcmVxdWlyZWRQcmV2aWV3UGljXzEsIHBpY18xLCBsaW5rXzEsIGRhdGFGYWNlLCBwaWN0dXJlLCBkYXRhQ2hlY2ssIHJlcXVpcmVkUHJldmlld1BpYywgcGljLCBsaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0LXByZXZpZXctYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJldmlldy1kaWFsb2ctZmFjZSc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ29iamVjdFBpY3R1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcHJldmlldy1yZXF1aXJlLW9iamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hlY2tfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNvbnRhaW4tb2JqZWN0JylbJ3ZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY18xID0gKHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rXzEgPSBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2lubmVyLW9iamVjdHMvJyArIGRhdGFDaGVja18xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA9IGxpbmtfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNfMVsnc3JjJ10gPSBsaW5rXzE7IC8vY29tcHV0ZXItZGF0YS5wbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWRpYWxvZy1mYWNlJylbJ3ZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSA9IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvZW5lbXlPYmplY3QvYXZhdGFyLycgKyBkYXRhRmFjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWZhY2UtcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVsnc3JjJ10gPSBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNvbnRhaW4tb2JqZWN0JylbJ3ZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWMgPSAodGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIDogJ2NvbXB1dGVyLWRhdGEucG5nJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsgPSBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2NoYXJhY3RlcnNPYmplY3RzL2lubmVyLW9iamVjdHMvJyArIGRhdGFDaGVjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgPSBsaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUHJldmlld1BpY1snc3JjJ10gPSBsaW5rOyAvL2NvbXB1dGVyLWRhdGEucG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZW5lcmF0ZUlucHV0ID0gZ2VuZXJhdGVJbnB1dDtcclxuZnVuY3Rpb24gY2hhbmdlRGF0YUluQmxvY2soX2EpIHtcclxuICAgIHZhciBrZXkgPSBfYS5rZXksIGZpZWxkU2VsZWN0b3IgPSBfYS5maWVsZFNlbGVjdG9yLCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrQWxlcnRNZXNzYWdlLCBjdXJyZW50RmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stYWxlcnQtbWVzc2FnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmllbGRTZWxlY3RvcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWVsZCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWVsZC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBcIkludmFsaWQgVmFsdWUgb2YgXCIgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gKGN1cnJlbnRGaWVsZC52YWx1ZSkgPyBjdXJyZW50RmllbGQudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoY3VycmVudEZpZWxkLnZhbHVlICYmIHRhcmdldFtrZXldICYmIGtleSAmJiBmaWVsZFNlbGVjdG9yKSA/IHRydWUgOiBmYWxzZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbm5lckRhdGEoX2EpIHtcclxuICAgIHZhciBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgdmFyIGJsb2NrRGV0YWlscyA9IHRhcmdldC5kZXRhaWxzO1xyXG4gICAgdmFyIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UgPSAoYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddKSA/IGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSA6IGJsb2NrRGV0YWlsc1sndGV4dHVyZSddOyAvLyBwcmV2aWV3VGV4dHVyZVxyXG4gICAgaXRlbUJhY2tncm91bmRJbWFnZSA9ICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUgJiYgYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddKSA/IHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZVsncHJldmlld1RleHR1cmUnXSA6XHJcbiAgICAgICAgKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSkgPyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUudGV4dHVyZSA6IGJsb2NrRGV0YWlsc1sndGV4dHVyZSddO1xyXG4gICAgdmFyIGl0ZW1JbWFnZSA9IChibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10pID8gYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddIDogYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ107XHJcbiAgICB2YXIgYmFja2dyb3VuZEltYWdlID0gKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSkgPyBcIjxpbWcgd2lkdGg9XFxcIjUwXFxcIiBzcmM9XFxcIlwiICsgKGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UpICsgXCJcXFwiIGFsdD1cXFwiXCIgKyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUuaWQgKyBcIlxcXCI+XCIgOiBcIlwiO1xyXG4gICAgdmFyIGlubmVyVGV4dCA9IFwiPGRpdiBjbGFzcz1cXFwiYmxvY2stZGVzY3JpcHRpb24td3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hdGVyaWFsLXByZXZpZXctd3JhcHBlclxcXCI+XFxuICAgICAgICA8aW1nIGlkPVxcXCJibG9jay1wcmV2aWV3LWltYWdlXFxcIiB3aWR0aD1cXFwiMjAwXFxcIiBzcmM9XFxcIlwiICsgKGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGl0ZW1JbWFnZSkgKyBcIlxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8dWw+PGRpdiBpZD1cXFwiYmxvY2stYWxlcnQtbWVzc2FnZVxcXCI+PC9kaXY+XFxuICAgICAgICA8bGk+TmFtZTogXCIgKyBibG9ja0RldGFpbHMuaWQgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+SW5kZXg6IFwiICsgdGFyZ2V0LmluZGV4ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlR5cGU6IFwiICsgKChibG9ja0RldGFpbHMudHlwZSkgPyBibG9ja0RldGFpbHMudHlwZSA6ICcnKSArIFwiPC9saT5cXG4gICAgICAgIDxsaT53aWR0aDogXCIgKyB0YXJnZXQud2lkdGggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+aGVpZ2h0OiBcIiArIHRhcmdldC5oZWlnaHQgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+WDogXCIgKyB0YXJnZXQueCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5ZOiBcIiArIHRhcmdldC55ICsgXCI8L2xpPlxcblxcbiAgICA8cD5cIiArICgodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IFwiQmFja2dyb3VuZCB0ZXh0dXJlXCIgOiBcIlwiKSArIFwiPC9wPlxcbiAgICBcIiArIGJhY2tncm91bmRJbWFnZSArIFwiXFxuICAgIDwvdWw+PC9kaXY+PGhyPlwiO1xyXG4gICAgdmFyIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICBpZE5hbWU6IG51bGxcclxuICAgIH0pO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkSW5uZXJEYXRhID0gbG9hZElubmVyRGF0YTtcclxuZnVuY3Rpb24gZWxlbWVudENyZWF0b3IoX2EpIHtcclxuICAgIHZhciB0YWduYW1lID0gX2EudGFnbmFtZSwgY2xhc3NMaXN0ID0gX2EuY2xhc3NMaXN0LCBpbm5lclRleHQgPSBfYS5pbm5lclRleHQsIGlkTmFtZSA9IF9hLmlkTmFtZTtcclxuICAgIHZhciBuZXdEb2N1bWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcbiAgICBuZXdEb2N1bWVudC5jbGFzc05hbWUgPSAoY2xhc3NMaXN0KSA/IGNsYXNzTGlzdCA6IGZhbHNlO1xyXG4gICAgbmV3RG9jdW1lbnQuaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xyXG4gICAgaWYgKGlkTmFtZSlcclxuICAgICAgICBuZXdEb2N1bWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZE5hbWUpO1xyXG4gICAgcmV0dXJuIG5ld0RvY3VtZW50O1xyXG59XHJcbmV4cG9ydHMuZWxlbWVudENyZWF0b3IgPSBlbGVtZW50Q3JlYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbnZhciByZXF1ZXN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL3NlcnZlci1yZXF1ZXN0cy9yZXF1ZXN0c01vZHVsZVwiKTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS9wcmV2aWV3XCIpO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi9pbml0U3RhcnRPYmplY3RcIik7XHJcbnZhciBibG9ja0NvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi4vY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3JcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4vYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIHNldE1hcFNpemUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgdmFyIGVycm9yRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLXNpemUtZXJyb3InKTtcclxuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0LW1hcC1zaXplJyk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEsIF9pLCBmb3JtXzEsIGZpZWxkLCBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGZvcm1fMSA9IGZvcm07IF9pIDwgZm9ybV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBmb3JtXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgJiYgZmllbGQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgJiYgIWZpZWxkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoZm9ybURhdGFbJ2hvcml6b250YWxCbG9jayddKSA8IHBhcnNlSW50KG1haW5PYmplY3QubWFwRGVmYXVsdFdpZHRoKSB8fCBwYXJzZUludChmb3JtRGF0YVsndmVydGljYWxCbG9jayddKSA8IHBhcnNlSW50KG1haW5PYmplY3QubWFwRGVmYXVsdEhlaWdodCkpKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5NYXAgbWluIHNpemUgaXMgXCIgKyBtYWluT2JqZWN0Lm1hcERlZmF1bHRXaWR0aCArIFwiIHggXCIgKyBtYWluT2JqZWN0Lm1hcERlZmF1bHRIZWlnaHQgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSkgPiBwYXJzZUludChtYWluT2JqZWN0Lm1heEhvcml6b250YWxCbG9ja3MpIHx8IHBhcnNlSW50KGZvcm1EYXRhWyd2ZXJ0aWNhbEJsb2NrJ10pID4gcGFyc2VJbnQobWFpbk9iamVjdC5tYXhWZXJ0aWNhbEJsb2NrcykpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5NYXAgbWF4IHNpemUgaXMgXCIgKyBtYWluT2JqZWN0Lm1heEhvcml6b250YWxCbG9ja3MgKyBcIiB4IFwiICsgbWFpbk9iamVjdC5tYXhWZXJ0aWNhbEJsb2NrcyArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBlcnJvckZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBcIjxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5QbGVhc2Ugd2FpdCBtYXAgaXMgYnVpbGQuLi48L3A+XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuaW5uZXJIVE1MID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLmNoYW5nZUJsb2NrQXJyYXlTaXplKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZm9ybURhdGE6IGZvcm1EYXRhLCBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLXN1Y2Nlc3NcXFwiPm1hcCBzaXplIHNldCBcIiArIGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSArIFwiIHggXCIgKyBmb3JtRGF0YVsndmVydGljYWxCbG9jayddICsgXCIgYmxvY2tzPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zZXRNYXBTaXplID0gc2V0TWFwU2l6ZTtcclxuZnVuY3Rpb24gZ2V0TWFwRGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1hcE5hbWUsIHJlcywgY29udmVydFRvT2JqZWN0LCBzaXplRm9ybTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBtYXBOYW1lID0gZG9jdW1lbnQuZm9ybXNbJ25ldy1tYXAnXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5hbGxNYXBPYmplY3RzLm1hcChmdW5jdGlvbiAoYmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0U3RhcnRPYmplY3RfMS5iYWNrVG9PYmplY3QoeyBkYXRhOiBibG9jaywgY29uc3RydWN0b3I6IGJsb2NrQ29uc3RydWN0b3JfMS5CbG9ja0NvbnN0cnVjdG9yIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydFRvT2JqZWN0ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUudmFsdWUgPSByZXMubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0Lm1hcFdpZHRoID0gcmVzLm1hcFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5tYXBIZWlnaHQgPSByZXMubWFwU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbWFwLXNpemUnXTtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybS5ob3Jpem9udGFsQmxvY2sudmFsdWUgPSBtYWluT2JqZWN0Lm1hcFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtLnZlcnRpY2FsQmxvY2sudmFsdWUgPSBtYWluT2JqZWN0Lm1hcEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2sgPSBjb252ZXJ0VG9PYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVOZXdNYXAoKSB7XHJcbiAgICB2YXIgY3JlYXRlTWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVNYXBcIik7XHJcbiAgICBjcmVhdGVNYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlTmV3TWFwID0gY3JlYXRlTmV3TWFwO1xyXG5mdW5jdGlvbiBsb2FkTWFwKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9wZW5CdXR0b24sIHNlbGVjdEZpbGVzLCBmaWxlQ29udGFpbmVyLCBjbG9zZURpYWxvZztcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbk1hcFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0RmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1maWxlc1wiKTtcclxuICAgICAgICAgICAgZmlsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5uZXItY29udGVudFwiKTtcclxuICAgICAgICAgICAgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFwRmlsZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX01BUF9EQVRBX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRmlsZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29udGVudCh7IGRpc3BsYXlFbGVtZW50OiBmaWxlQ29udGFpbmVyLCBkYXRhOiBtYXBGaWxlLCBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBzZWxlY3RGaWxlczogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubG9hZE1hcCA9IGxvYWRNYXA7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChfYSkge1xyXG4gICAgdmFyIGRpc3BsYXlFbGVtZW50ID0gX2EuZGlzcGxheUVsZW1lbnQsIGRhdGEgPSBfYS5kYXRhLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgc2VsZWN0RmlsZXMgPSBfYS5zZWxlY3RGaWxlcztcclxuICAgIGlmICghZGF0YSB8fCAhZGlzcGxheUVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZGlzcGxheUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgdmFyIGlubmVyRmlsZSA9IGJsb2NrQ3JlYXRvcih7IHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6ICdzaW5nbGUtaXRlbS13cmFwcGVyJyxcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxoMj5cIiArIGZpbGUubmFtZSArIFwiPC9oMj5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubmVyRmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2V0TWFwRGF0YSh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGZpbGUubGluayArICcvJyArIGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIG1haW5PYmplY3Q6IG1haW5PYmplY3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BsYXlFbGVtZW50LmFwcGVuZENoaWxkKGlubmVyRmlsZSk7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZmlsZSA9IGRhdGFfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShmaWxlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBibG9ja0NyZWF0b3IoX2EpIHtcclxuICAgIHZhciB0YWcgPSBfYS50YWcsIHN0eWxlQ2xhc3MgPSBfYS5zdHlsZUNsYXNzLCBpbm5lckNvbnRlbnQgPSBfYS5pbm5lckNvbnRlbnQ7XHJcbiAgICB2YXIgbmV3QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBuZXdCbG9jay5jbGFzc05hbWUgPSBzdHlsZUNsYXNzO1xyXG4gICAgbmV3QmxvY2suaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xyXG4gICAgcmV0dXJuIG5ld0Jsb2NrO1xyXG59XHJcbmV4cG9ydHMuYmxvY2tDcmVhdG9yID0gYmxvY2tDcmVhdG9yO1xyXG5mdW5jdGlvbiBzYXZlTWFwKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZvcm0sIGJ1dHRvbiwgbWVzc2FnZUZpZWxkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ107XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLW1hcC1idXR0b24nKTtcclxuICAgICAgICAgICAgbWVzc2FnZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUtbWFwLWVycm9yJyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEZvcm0sIHNhdmVEYXRhLCBtYXBGaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybSA9IGdldEZvcm1EYXRhKHsgZm9ybTogZm9ybSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdEZvcm0pIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRGb3JtWydzdGF0dXMnXSA9PT0gJ3JlamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9XFxcInNpZGUtcGFuZWwtZXJyb3JcXFwiPkZhaWwgdG8gc2F2ZSBtYXAsIGNoZWNrIG1hcCBOYW1lPC9wPiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybVsnbWFwU2l6ZSddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWFpbk9iamVjdC5tYXBXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0Lm1hcEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZURhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ2NyZWF0aW5nVGltZSddID0gc2F2ZURhdGEuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ2FsbE1hcE9iamVjdHMnXSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRGb3JtLCAnc2F2ZScsIG1haW5PYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEucG9zdERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRGb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRmlsZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwRmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gXCI8cD5TYXZlIHRpbWU6IFwiICsgKHNhdmVEYXRhLmdldEhvdXJzKCkgLSAxKSArIFwiIDogXCIgKyBzYXZlRGF0YS5nZXRNaW51dGVzKCkgKyBcIiA6IFwiICsgc2F2ZURhdGEuZ2V0U2Vjb25kcygpICsgXCI8L3A+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIgKyBtYXBGaWxlLnVybCArIFwiIG9uY2xpY2s9XFxcIihmdW5jdGlvbigpeyB3aW5kb3cub3BlbignXCIgKyBtYXBGaWxlLnVybCArIFwiJyl9KSgpXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+T3BlbiBpbiBuZXcgd2luZG93PC9hPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNhdmVNYXAgPSBzYXZlTWFwO1xyXG5mdW5jdGlvbiBnZXRGb3JtRGF0YShfYSkge1xyXG4gICAgdmFyIGZvcm0gPSBfYS5mb3JtO1xyXG4gICAgaWYgKCFmb3JtKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBvYmplY3QgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZm9ybV8yID0gZm9ybTsgX2kgPCBmb3JtXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGZvcm1JdGVtcyA9IGZvcm1fMltfaV07XHJcbiAgICAgICAgaWYgKGZvcm1JdGVtcy5uYW1lICYmIGZvcm1JdGVtcy52YWx1ZSkge1xyXG4gICAgICAgICAgICBvYmplY3RbZm9ybUl0ZW1zLm5hbWVdID0gZm9ybUl0ZW1zLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtSXRlbXMubmFtZSAmJiAhZm9ybUl0ZW1zLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiSW5jb3JyZWN0IERhdGFcIiwgc3RhdHVzOiBcInJlamVjdFwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBnZXREYXRhKF9hKSB7XHJcbiAgICB2YXIgdXJsID0gX2EudXJsLCBtZXRob2QgPSBfYS5tZXRob2QsIGRhdGEgPSBfYS5kYXRhLCBoZWFkZXJzID0gX2EuaGVhZGVycztcclxuICAgIHZhciByZXN1bHRIZWFkZXIgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LCBoZWFkZXJzIHx8IGZhbHNlKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgaGVhZGVyczogcmVzdWx0SGVhZGVyLFxyXG4gICAgICAgIGJvZHk6IChkYXRhKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ3JlamVjdCcsIG1lc3NhZ2U6IHJlcy5zdGF0dXNUZXh0IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIjUwMCBObyBzZXJ2ZXIgY29ubmVjdGlvbiFcIiwgc3RhdHVzOiBcImVycm9yXCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldERhdGEgPSBnZXREYXRhO1xyXG5mdW5jdGlvbiBwb3N0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAobWV0aG9kKSA/IG1ldGhvZCA6ICdQT1NUJyxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXHJcbiAgICAgICAgaGVhZGVyczogcmVzdWx0SGVhZGVyLFxyXG4gICAgICAgIGJvZHk6IChkYXRhKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KTtcclxufVxyXG5leHBvcnRzLnBvc3REYXRhID0gcG9zdERhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG5mdW5jdGlvbiBwcmV2aWV3T2ZCbG9jayhfYSkge1xyXG4gICAgdmFyIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBfYS5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBldmVudCA9IF9hLmV2ZW50O1xyXG4gICAgdmFyIHByZXZpZXdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdGVkLWl0ZW0nKTtcclxuICAgIGlmICghc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSlcclxuICAgICAgICBoaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHByZXZpZXdFbGVtZW50IH0pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGl0ZW1JbWFnZSA9IChzZWxlY3RlZEJsb2NrUGFuZWxJdGVtWydwcmV2aWV3VGV4dHVyZSddKSA/IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW1bJ3ByZXZpZXdUZXh0dXJlJ10gOiBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtWyd0ZXh0dXJlJ107XHJcbiAgICAgICAgc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBwcmV2aWV3RWxlbWVudCB9KTtcclxuICAgICAgICBwcmV2aWV3RWxlbWVudFsnc3R5bGUnXSA9IFwibWFyZ2luLXRvcDogXCIgKyAoZXZlbnQuY2xpZW50WSArIDEwKSArIFwicHg7IG1hcmdpbi1sZWZ0OiBcIiArIChldmVudC5jbGllbnRYICsgMTApICsgXCJweDtcIjtcclxuICAgICAgICBwcmV2aWV3RWxlbWVudC5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPVwiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGl0ZW1JbWFnZSkgKyBcIiA+XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wcmV2aWV3T2ZCbG9jayA9IHByZXZpZXdPZkJsb2NrO1xyXG5mdW5jdGlvbiBoaWRlRWxlbWVudChfYSkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBfYS5lbGVtZW50O1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsZW1lbnQuc3R5bGUgPSAnZGlzcGxheTogbm9uZSc7XHJcbn1cclxuZXhwb3J0cy5oaWRlRWxlbWVudCA9IGhpZGVFbGVtZW50O1xyXG5mdW5jdGlvbiBzaG93RWxlbWVudChfYSkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBfYS5lbGVtZW50O1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsZW1lbnQuc3R5bGUgPSAnZGlzcGxheTogYmxvY2snO1xyXG59XHJcbmV4cG9ydHMuc2hvd0VsZW1lbnQgPSBzaG93RWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJsb2NrSW50ZXJhY3RNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlXCIpO1xyXG52YXIgcHJldmlld18xID0gcmVxdWlyZShcIi4vcHJldmlld1wiKTtcclxudmFyIHNpZGVQYW5lbEFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9zaWRlUGFuZWxBY3Rpb25zXCIpO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja0RhdGFSZWRhY3Rvck1vZHVsZVwiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzIgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcmVkYWN0b3IvZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxuZnVuY3Rpb24gaW5pdFZpZXcoKSB7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZGFjdG9yLWZpZWxkJyk7XHJcbiAgICB0aGlzLmNvbnRleHRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdGhpcy5jb250ZXh0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5jb250ZXh0V2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jb250ZXh0SGVpZ2h0O1xyXG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxufVxyXG5leHBvcnRzLmluaXRWaWV3ID0gaW5pdFZpZXc7XHJcbmZ1bmN0aW9uIG1hcE1vdmVDb250cm9sbGVycyhfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciB4TW92ZVZhbHVlID0gMCwgeU1vdmVWYWx1ZSA9IDA7XHJcbiAgICAgICAgaWYgKG1haW5PYmplY3QuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSA4NzpcclxuICAgICAgICAgICAgICAgIHlNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY4OlxyXG4gICAgICAgICAgICAgICAgeE1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkICogLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4MzpcclxuICAgICAgICAgICAgICAgIHlNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZCAqIC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjU6XHJcbiAgICAgICAgICAgICAgICB4TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA3NzpcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzIubWluaU1hcHBlcih7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvY2tJbnRlcmFjdE1vZHVsZV8xLm1vdmVBbGxTY2VuZSh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHhNb3ZlVmFsdWU6IHhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWU6IHlNb3ZlVmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXRbJ25vZGVOYW1lJ10gIT0gJ0NBTlZBUycpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYmxvY2tJbnRlcmFjdE1vZHVsZV8xLmNvbGxpc2lvbkRldGVjdG9yKHsgb2JqZWN0OiBibG9jaywgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0TGVmdCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXRbJ29mZnNldFRvcCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNVxyXG4gICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggYmxvY2suaW5kZXgsIFwiIDwgQmxvY2sgaW5kZXhcIilcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEub3BlblJlZGFjdG9yV2luZG93KHsgYmxvY2tEYXRhOiBibG9jaywgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgIGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5jaGFuZ2VPYmplY3RNb2RlbCh7IHJlc3VsdDogcmVzdWx0LCBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHByZXZpZXdfMS5wcmV2aWV3T2ZCbG9jayh7IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW06IG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBidXR0b25JZCA9IGV2ZW50LnRhcmdldFsnZGF0YXNldCddLmJ1dHRvbklkO1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JCbG9ja3MnOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuYmxvY2tEYXRhYmFzZSwgc2VsZWN0SXRlbTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckRlY29yYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuYmFja2dyb3VuZERhdGFiYXNlLCBzZWxlY3RJdGVtOiBidXR0b25JZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckNoYXJhY3RlcnMnOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuY2hhcmFjdGVyc0RhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yRW5lbXknOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXNUb1NpZGVMaXN0KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZGF0YUJhc2U6IG1haW5PYmplY3QuZW5lbXlEYXRhYmFzZSwgc2VsZWN0SXRlbTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmVteScpICBlbmVteURhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLm1hcE1vdmVDb250cm9sbGVycyA9IG1hcE1vdmVDb250cm9sbGVycztcclxuZnVuY3Rpb24gcmVuZGVySXRlbXNUb1NpZGVMaXN0KF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGRhdGFCYXNlID0gX2EuZGF0YUJhc2UsIHNlbGVjdEl0ZW0gPSBfYS5zZWxlY3RJdGVtO1xyXG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLWluc3RydW1lbnRhbC1wYW5lbCcpO1xyXG4gICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoYmxvY2tJdGVtKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhibG9ja0l0ZW0pXHJcbiAgICAgICAgdmFyIGl0ZW1JbWFnZSA9IChibG9ja0l0ZW1bJ3ByZXZpZXdUZXh0dXJlJ10pID8gYmxvY2tJdGVtWydwcmV2aWV3VGV4dHVyZSddIDogYmxvY2tJdGVtWyd0ZXh0dXJlJ107XHJcbiAgICAgICAgdmFyIG9iaiA9IHNpZGVQYW5lbEFjdGlvbnNfMS5ibG9ja0NyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiAnc2luZ2xlLWJsb2NrLWl0ZW0nLFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiPGltZyB3aWR0aD1cXFwiMTAwJVxcXCIgdGl0bGU9XFxcIlwiICsgKChibG9ja0l0ZW0uZGV0YWlscykgPyBibG9ja0l0ZW0uZGV0YWlscy5kZXNjcmlwdGlvbiA6IGJsb2NrSXRlbS5kZXNjcmlwdGlvbikgKyBcIlxcXCIgc3JjPSdcIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCInPlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbTogYmxvY2tJdGVtIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChvYmopO1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YUJhc2VfMSA9IGRhdGFCYXNlOyBfaSA8IGRhdGFCYXNlXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrSXRlbSA9IGRhdGFCYXNlXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoYmxvY2tJdGVtKTtcclxuICAgIH1cclxuICAgIHRhcmdldC5wcmVwZW5kKGNyZWF0ZURlc3Ryb3lCbG9jayh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHNlbGVjdEl0ZW06IHNlbGVjdEl0ZW0gfSkpO1xyXG59XHJcbmV4cG9ydHMucmVuZGVySXRlbXNUb1NpZGVMaXN0ID0gcmVuZGVySXRlbXNUb1NpZGVMaXN0O1xyXG5mdW5jdGlvbiBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgYmxvY2tJdGVtID0gX2EuYmxvY2tJdGVtO1xyXG4gICAgLy9jb25zb2xlLmxvZyhibG9ja0l0ZW0pXHJcbiAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtKSB7XHJcbiAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gKGJsb2NrSXRlbS5pZCAhPSBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uaWQpID8gYmxvY2tJdGVtIDogbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBibG9ja0l0ZW07XHJcbiAgICBwcmV2aWV3XzEucHJldmlld09mQmxvY2soeyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtOiBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50OiBldmVudCB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEZXN0cm95QmxvY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgc2VsZWN0SXRlbSA9IF9hLnNlbGVjdEl0ZW07XHJcbiAgICB2YXIgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvYmouY2xhc3NOYW1lID0gJ3NpbmdsZS1ibG9jay1pdGVtJztcclxuICAgIG9iai5pbm5lckhUTUwgPSBcIjxpbWcgdGl0bGU9XFxcIlwiICsgKChzZWxlY3RJdGVtID09PSBcInJlZGFjdG9yRGVjb3JhdGlvblwiKSA/ICdEZWxldGUgb25seSBiYWNrZ3JvdW5kJyA6ICdEZWxldGUgYmxvY2sgaXRlbScpICsgXCJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svZGVzdHJveS5wbmcnKSArIFwiJz5cIjtcclxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzdHJveWVyOiAoc2VsZWN0SXRlbSkgPyBzZWxlY3RJdGVtIDogJ2Rlc3Ryb3llcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Rlc3Ryb3kucG5nJ1xyXG4gICAgICAgICAgICB9IH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyVmlldygpIHtcclxuICAgIGlmICghdGhpcy5jdHgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29udGV4dFdpZHRoLCB0aGlzLmNvbnRleHRIZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJWaWV3ID0gY2xlYXJWaWV3O1xyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kUmVuZGVyKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZ0JhY2tncm91bmQsIHN4LCBzeTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0YWlscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYmFja2dyb3VuZFRleHR1cmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0JhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kLnNyYyA9IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIHRoaXMuYmFja2dyb3VuZFRleHR1cmUudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBzeCA9ICh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4KSA/IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3ggOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ID0gKHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3kpID8gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZ0JhY2tncm91bmQsIHN4LCBzeSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zV2lkdGgsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc0hlaWdodCwgdGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS53aWR0aCwgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSlcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5iYWNrZ3JvdW5kUmVuZGVyID0gYmFja2dyb3VuZFJlbmRlcjtcclxuZnVuY3Rpb24gY3JlYXRlQmxvY2tQaWN0dXJlKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZywgc1dpZHRoLCBzSGVpZ2h0LCBzeCwgc3k7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYWluT2JqZWN0LmN0eC5zYXZlKCk7IC8vIHNXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmRldGFpbHMudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBzV2lkdGggPSAodGhpcy5kZXRhaWxzLnNXaWR0aCkgPyB0aGlzLmRldGFpbHMuc1dpZHRoIDogdGhpcy5kZXRhaWxzLmltYWdlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgc0hlaWdodCA9ICh0aGlzLmRldGFpbHMuc0hlaWdodCkgPyB0aGlzLmRldGFpbHMuc0hlaWdodCA6IHRoaXMuZGV0YWlscy5pbWFnZUhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzeCA9ICh0aGlzLmRldGFpbHMuc3gpID8gdGhpcy5kZXRhaWxzLnN4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzeSA9ICh0aGlzLmRldGFpbHMuc3kpID8gdGhpcy5kZXRhaWxzLnN5IDogMDtcclxuICAgICAgICAgICAgICAgICAgICAvLy5kZXRhaWxzLnN4XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbk9iamVjdC5jdHguZHJhd0ltYWdlKGltZywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHRoaXMueE1vdmUgKyBwYXJzZUludCh0aGlzLmJsb2NrUmVsYXRpdmVYUG9zKSwgdGhpcy55TW92ZSArIHBhcnNlSW50KHRoaXMuYmxvY2tSZWxhdGl2ZVlQb3MpLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFpbk9iamVjdC5jdHgucmVzdG9yZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAvLy5kZXRhaWxzLnN4XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVCbG9ja1BpY3R1cmUgPSBjcmVhdGVCbG9ja1BpY3R1cmU7XHJcbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICBpZiAoIW1haW5PYmplY3QuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyMjUsIDI1NSwgMjU1LCAuMylcIjtcclxuICAgIG1haW5PYmplY3QuY3R4LmZpbGxUZXh0KHRoaXMuaW5kZXgsIHRoaXMueE1vdmUgKyA1LCB0aGlzLnlNb3ZlICsgMTUpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDE1MywyNTUsMC40KSc7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5iZWdpblBhdGgoKTtcclxuICAgIG1haW5PYmplY3QuY3R4LnJlY3QodGhpcy54TW92ZSwgdGhpcy55TW92ZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgbWFpbk9iamVjdC5jdHguc3Ryb2tlKCk7XHJcbiAgICAvL21haW5PYmplY3QuY3R4LnN0cm9rZSgpXHJcbn1cclxuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9