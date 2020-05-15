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
        - dynamic spawn


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9kaWFsb2dGb3JtTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91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QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLDZCQUE2QjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9zZXJ2ZXIvcHVibGljL2xldmVsLWNyZWF0b3IvZGlzdC1zY3JpcHRzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmNhbnZhcyB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDUzNGI7IH1cXG5cXG4uc2lkZS1tZW51LXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjYmJiYmJiO1xcbiAgICBoZWlnaHQ6IDk2dmg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi5nYW1lLWZpZWxkLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5tYWluLWJhbm5lci1jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcblxcbioge1xcbiAgICBjb2xvcjogIzIyMTgyODtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyB9XFxuXFxubGVnZW5kIGgzIHtcXG4gICAgbWFyZ2luOiAwcHg7IH1cXG5cXG5sYWJlbCBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTElO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMHB4OyB9XFxuXFxuLnNpZGUtaW5zdHJ1bWVudGFsLXBhbmVsIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAgIC5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCBsaSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgIC5zaWRlLWluc3RydW1lbnRhbC1wYW5lbCBpbWcge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB3aWR0aDogNTRweDsgfVxcblxcbi5zZWxlY3RlZC1pdGVtLXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcbiAgICAuc2VsZWN0ZWQtaXRlbS1wcmV2aWV3IGltZyB7XFxuICAgICAgICB3aWR0aDogNjBweDsgfVxcblxcbi5pbm5lci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICByaWdodDogMDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgaHIge1xcbiAgICAgICAgY29sb3I6ICNlYWVhZWE7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZDQyNjM7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXI6aG92ZXIgaDIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWdhcDogMjBweDsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBjb2xvcjogIzcxNTE4NDsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gaW5wdXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7IH1cXG4gICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHNwYW4ge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNhNjFiZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiAuYnV0dG9uLXJlamVjdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2FkMDAwMDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmOyB9XFxuICAgICAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gLmJ1dHRvbi1yZWplY3QgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWMxNzIyO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnF1ZXN0aW9uLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLmFjdGl2ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NjFlOyB9XFxuXFxuLnJpZ2h0LXNpZGUtYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLnNpZGUtcGFuZWwtc3VjY2VzcyB7XFxuICAgIGNvbG9yOiAjNTM5NzAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTM5NzAwO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4uc2lkZS1wYW5lbC1lcnJvciB7XFxuICAgIGNvbG9yOiAjYjEwMDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjEwMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4uYmxvY2stZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAuYmxvY2stZGVzY3JpcHRpb24td3JhcHBlciBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDQ2JTsgfVxcbiAgICAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHRleHRhcmVhIHtcXG4gICAgICAgIHdpZHRoOiA5NiU7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiYmI7IH1cXG5cXG4uYWxsLW90aGVycy1kaWFsb2dzIHtcXG4gICAgYmFja2dyb3VuZDogIzgyNmQ2ZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgIC5hbGwtb3RoZXJzLWRpYWxvZ3MgaDQge1xcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cXG4gICAgLmFsbC1vdGhlcnMtZGlhbG9ncyBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnJlbGF0ZWQtaWQtZmllbGQge1xcbiAgICB3aWR0aDogNTBweDsgfVxcblxcbi5jbG9zZS1kaWFsb2cge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDI5cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm1haW4tYnRuIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmYjMwMDtcXG4gICAgYm9yZGVyOiBuYXZham93aGl0ZTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzE1NDdhNjRmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXI7IH1cXG5cXG4ubWFpbi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZlZGMzOyB9XFxuXFxuLm1haW4tYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjFlMDA7IH1cXG5cXG4ubWF0ZXJpYWwtcHJldmlldy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uYnV0dG9uLXJlamVjdCB7XFxuICAgIGJhY2tncm91bmQ6ICNhZDAwMDA7XFxuICAgIGNvbG9yOiAjZmZmZmY7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4vbWFpbi5zYXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIGJsb2NrSW50ZXJhY3RNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlXCIpO1xyXG52YXIgYmxvY2tzRnVuY3Rpb25hbGl0eV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2Nrc0Z1bmN0aW9uYWxpdHlcIik7XHJcbnZhciBCbG9ja0NvbnN0cnVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmxvY2tDb25zdHJ1Y3RvcihfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRNYXBYID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdE1hcFkgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy54TW92ZSA9IGRhdGEueDtcclxuICAgICAgICB0aGlzLnlNb3ZlID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuYmxvY2tSZWxhdGl2ZVhQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMuYmxvY2tSZWxhdGl2ZVlQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGRhdGEuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gKGRhdGEuZGV0YWlscykgPyBkYXRhLmRldGFpbHMgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IChkYXRhLmltYWdlV2lkdGgpID8gZGF0YS5pbWFnZVdpZHRoIDogZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gKGRhdGEuaW1hZ2VIZWlnaHQpID8gZGF0YS5pbWFnZUhlaWdodCA6IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VGV4dHVyZSA9IChkYXRhLnByZXZpZXdUZXh0dXJlKSA/IGRhdGEucHJldmlld1RleHR1cmUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB0aGlzLnN5ID0gMDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLmltYWdlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RGcmFtZSA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQmxvY2tDb25zdHJ1Y3RvcjtcclxufSgpKTtcclxuZXhwb3J0cy5CbG9ja0NvbnN0cnVjdG9yID0gQmxvY2tDb25zdHJ1Y3RvcjtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyQmxvY2tCb3ggPSBpbml0U3RhcnRPYmplY3RfMS5yZW5kZXJCbG9ja0JveDtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUubW92ZVNpbmdsZUJsb2NrID0gYmxvY2tJbnRlcmFjdE1vZHVsZV8xLm1vdmVTaW5nbGVCbG9jaztcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZWxldmF0b3JNb3ZlID0gYmxvY2tzRnVuY3Rpb25hbGl0eV8xLmVsZXZhdG9yTW92ZTtcclxuQmxvY2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuYmxvY2tBbmltYXRpb25zID0gYmxvY2tzRnVuY3Rpb25hbGl0eV8xLmJsb2NrQW5pbWF0aW9ucztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYWluR2FtZUNvbnN0cnVjdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLm1hcE1vdmVTcGVlZCA9IGRhdGEubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMubWFwV2lkdGggPSBkYXRhLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwSGVpZ2h0ID0gZGF0YS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tYXBEZWZhdWx0V2lkdGggPSBkYXRhLm1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwRGVmYXVsdEhlaWdodCA9IGRhdGEubWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYWxsUmVkYWN0b3JCbG9jayA9IGRhdGEuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICB0aGlzLmJhY2tncm91bmREYXRhYmFzZSA9IGRhdGEuYmFja2dyb3VuZERhdGFiYXNlO1xyXG4gICAgICAgIHRoaXMuYmxvY2tEYXRhYmFzZSA9IChkYXRhLmJsb2NrRGF0YWJhc2UpID8gZGF0YS5ibG9ja0RhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnNEYXRhYmFzZSA9IChkYXRhLmNoYXJhY3RlcnNEYXRhYmFzZSkgPyBkYXRhLmNoYXJhY3RlcnNEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbmVteURhdGFiYXNlID0gKGRhdGEuZW5lbXlEYXRhYmFzZSkgPyBkYXRhLmVuZW15RGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gZGF0YS5ibG9ja1NpemU7XHJcbiAgICAgICAgdGhpcy5tYXhIb3Jpem9udGFsQmxvY2tzID0gZGF0YS5tYXhIb3Jpem9udGFsQmxvY2tzO1xyXG4gICAgICAgIHRoaXMubWF4VmVydGljYWxCbG9ja3MgPSBkYXRhLm1heFZlcnRpY2FsQmxvY2tzO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1pbmlNYXBBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYWluR2FtZUNvbnN0cnVjdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLk1haW5HYW1lQ29uc3RydWN0b3IgPSBNYWluR2FtZUNvbnN0cnVjdG9yO1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5pbml0VmlldyA9IHZpZXdfMS5pbml0VmlldztcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY2xlYXJWaWV3ID0gdmlld18xLmNsZWFyVmlldztcclxuTWFpbkdhbWVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVySXRlbXNUb1NpZGVMaXN0ID0gdmlld18xLnJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuLi9zYXNzL21haW4uc2Fzc1wiKTtcclxudmFyIHJlbmRlckNvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnMvcmVuZGVyQ29uc3RydWN0b3JcIik7XHJcbnZhciBibG9ja0NvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RvcnMvYmxvY2tDb25zdHJ1Y3RvclwiKTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuL3VpL3ZpZXdcIik7XHJcbnZhciBpbml0U3RhcnRPYmplY3RfMSA9IHJlcXVpcmUoXCIuL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdFwiKTtcclxudmFyIHNpZGVQYW5lbEFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuL3JlZGFjdG9yL3NpZGVQYW5lbEFjdGlvbnNcIik7XHJcbi8qXHJcblYtIGNyZWF0ZSBtYXAgbmV0XHJcbiAgICBWLSB2ZXJ0aWNhbCBkaXJlY3Rpb24gb2YgYmxvY2tcclxuICAgIFYtIGRlc3Ryb3kgc29tZSBibG9ja3NcclxuICAgIFYtIGJsb2NrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgViAtIGRlbGV0ZSBibG9ja1xyXG4gICAgICAgIFYtIHByZXZpZXdcclxuICAgICAgICBWLSBpbmZvcm1hdGlvblxyXG4gICAgICAgIFYtIGNoYW5nZSBkYXRhXHJcbiAgICAgICAgICAgIFYtIHdpZHRoXHJcbiAgICAgICAgICAgIFYtIGhlaWdodFxyXG4gICAgICAgICAgICBWLSB4XHJcbiAgICAgICAgICAgIFYtIHlcclxuICAgICAgICAgICAgVi0gZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgVi0gcnVsZXJzXHJcbiAgICAgICAgICAgIC0gZWxldmF0b3Igc3BlZWRcclxuICAgICAgICAgICAgLSBkaXJlY3Rpb25cclxuVi0gc2lkZSBwYW5lbFxyXG4gICAgVi0gbmV3IG1hcFxyXG4gICAgICAgIFYtIG1hcCBuYW1lXHJcbiAgICAgICAgVi0gc2F2ZSBtYXAgaW4ganNvblxyXG4gICAgICAgIFYtIGNoYW5nZSBtYXAgc2l6ZVxyXG4gICAgICAgIFYtIG92ZXJ3cml0ZSBtYXBcclxuICAgIFYtIGxvYWQgbWFwXHJcbiAgICBWLSBtaW5pbWFwXHJcbiAgICBWLSBkaWZmZXJlbnQgc2VjdGlvbnMgb2Ygb2JqZWN0c1xyXG4gICAgICAgIFYtIGJsb2NrXHJcbiAgICAgICAgVi0gY2hhcmFjdGVyc1xyXG4gICAgICAgIFYtIGVuZW15XHJcbiAgICAgICAgVi0gYmFja2dyb3VuZFxyXG4gICAgICAgIC0gZHluYW1pYyBzcGF3blxyXG5cclxuXHJcblYtIGFkZCBzdGFpcnNcclxuVi0gYWRkIGxlYWRlcnNcclxuVi0gZG9vcnNcclxuICAgViAtIGRvb3JzIGFjY2VzcyBjYXJkXHJcblYtIGFkZCBob3Jpem9udGFsIGVsZXZhdG9yXHJcblYtIGFkZCBiYWNrZ3JvdW5kIHRleHR1cmUgYW5kIGRpc3BsYXkgaXRcclxuICAgIFYtIGRlc3Ryb3kvIGNoYW5nZSB0ZXh0dXJlcyBzZXBhcmF0ZWx5XHJcbiAgICBWLSBhZGQgdGV4dHVyZSBhbmltYXRpb25zXHJcblYtIGFkZCBOUENcclxuICAgViAtIGRpYWxvZ1xyXG5cclxuXHJcbiovXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVkYWN0b3JFbmdpbmUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfaSwgX2EsIGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5jbGVhclZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gMCwgX2EgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgX2EubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGJsb2NrLnhNb3ZlID4gMCAmJiBibG9jay54TW92ZSA8IHdpbmRvdy5pbm5lcldpZHRoIHx8IGJsb2NrLnlNb3ZlID4gMCAmJiBibG9jay55TW92ZSA8IHdpbmRvdy5pbm5lckhlaWdodCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmxvY2sucmVuZGVyQmxvY2tCb3goeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmxvY2suZWxldmF0b3JNb3ZlKCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0U3RhcnRPYmplY3RfMS5ibG9ja0FuaW1hdGlvblJlbmRlcih7IGJsb2NrOiBibG9jayB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1haW5PYmplY3QsIGVuZ2luZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdFN0YXJ0T2JqZWN0XzEuaW5pdE1haW5FbmdpbmUoeyBNYWluR2FtZUNvbnN0cnVjdG9yOiByZW5kZXJDb25zdHJ1Y3Rvcl8xLk1haW5HYW1lQ29uc3RydWN0b3IsIEJsb2NrQ29uc3RydWN0b3I6IGJsb2NrQ29uc3RydWN0b3JfMS5CbG9ja0NvbnN0cnVjdG9yIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuaW5pdFZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LnJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmJsb2NrRGF0YWJhc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRhY3RvckVuZ2luZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1haW5PYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld18xLm1hcE1vdmVDb250cm9sbGVycyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLnNhdmVNYXAoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5sb2FkTWFwKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuc2V0TWFwU2l6ZSh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3I6IGJsb2NrQ29uc3RydWN0b3JfMS5CbG9ja0NvbnN0cnVjdG9yIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5jcmVhdGVOZXdNYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcHJldmlld18xID0gcmVxdWlyZShcIi4uL3VpL3ByZXZpZXdcIik7XHJcbnZhciBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9wYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXCIpO1xyXG5mdW5jdGlvbiBvcGVuUmVkYWN0b3JXaW5kb3coX2EpIHtcclxuICAgIHZhciBibG9ja0RhdGEgPSBfYS5ibG9ja0RhdGEsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RGaWxlcywgZmlsZUNvbnRhaW5lciwgY2xvc2VEaWFsb2csIGdlbmVyYXRlZEFyZWEsIGFsbEJsb2NrcywgaW5uZXJEZXNjcmlwdGlvbkFyZWE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSB8fCAhYmxvY2tEYXRhLmRldGFpbHMgfHwgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEZpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtZmlsZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5uZXItY29udGVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VEaWFsb2dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkQXJlYSA9IHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdpbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2lubmVyLWRlc2NyaXB0aW9uLWFyZWEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld18xLnNob3dFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZWRBcmVhKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5uZXItZGVzY3JpcHRpb24tYXJlYVwiKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJEZXNjcmlwdGlvbkFyZWEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmxvYWRJbm5lckRhdGEoeyBmaWxlQ29udGFpbmVyOiBpbm5lckRlc2NyaXB0aW9uQXJlYSwgdGFyZ2V0OiBibG9ja0RhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmdlbmVyYXRlSW5wdXQoeyBmaWxlQ29udGFpbmVyOiBpbm5lckRlc2NyaXB0aW9uQXJlYSwgdGFyZ2V0OiBibG9ja0RhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QuYWN0aXZlRGVzY3JpcHRpb25GaWVsZHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLm9wZW5SZWRhY3RvcldpbmRvdyA9IG9wZW5SZWRhY3RvcldpbmRvdztcclxuZnVuY3Rpb24gcG9zaXRpb25SZWR1Y2VyKF9hKSB7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gX2EuYWxsQmxvY2tzO1xyXG4gICAgdmFyIG9sZFhSYW5nZSA9IGFsbEJsb2Nrc1swXS54TW92ZTtcclxuICAgIHZhciBvbGRZUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueU1vdmU7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJsb2Nrc18xID0gYWxsQmxvY2tzOyBfaSA8IGFsbEJsb2Nrc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9jayA9IGFsbEJsb2Nrc18xW19pXTtcclxuICAgICAgICBibG9jay54TW92ZSA9IGJsb2NrLng7XHJcbiAgICAgICAgYmxvY2sueU1vdmUgPSBibG9jay55O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucG9zaXRpb25SZWR1Y2VyID0gcG9zaXRpb25SZWR1Y2VyO1xyXG5mdW5jdGlvbiBjaGFuZ2VCbG9ja0FycmF5U2l6ZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBmb3JtRGF0YSA9IF9hLmZvcm1EYXRhLCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHZhciBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1zaXplLWVycm9yJyk7XHJcbiAgICB2YXIgd2lkdGhTZXQgPSBmb3JtRGF0YS5ob3Jpem9udGFsQmxvY2s7XHJcbiAgICB2YXIgaGVpZ2h0U2V0ID0gZm9ybURhdGEudmVydGljYWxCbG9jaztcclxuICAgIHZhciBjdXJyZW50V2lkdGggPSBtYWluT2JqZWN0Lm1hcFdpZHRoO1xyXG4gICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBtYWluT2JqZWN0Lm1hcEhlaWdodDtcclxuICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICB2YXIgdmVydGljYWxSYW5nZSA9IGhlaWdodFNldCAtIGN1cnJlbnRIZWlnaHQ7XHJcbiAgICB2YXIgdmVydGljYWxDb21wZW5zYXRpb24gPSB2ZXJ0aWNhbFJhbmdlO1xyXG4gICAgdmFyIG5ld1JlYnVpbGRCbG9ja01hcCA9IFtdO1xyXG4gICAgdmFyIG9sZFhSYW5nZSA9IGFsbEJsb2Nrc1swXS54TW92ZTtcclxuICAgIHZhciBvbGRZUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueU1vdmU7XHJcbiAgICAvL2Vycm9yRmllbGQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5QbGVhc2Ugd2FpdCBtYXAgaXMgYnVpbGQuLi48L3A+YDtcclxuICAgIHBvc2l0aW9uUmVkdWNlcih7IGFsbEJsb2NrczogYWxsQmxvY2tzIH0pO1xyXG4gICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgd2lkdGhTZXQ7IGNvbCsrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaXRlbSA9IDA7IGl0ZW0gPCBoZWlnaHRTZXQ7IGl0ZW0rKykge1xyXG4gICAgICAgICAgICB2YXIgcm93SW5kZXggPSAoY29sID09IDApID8gaXRlbSA6IChjb2wgKiBjdXJyZW50SGVpZ2h0KSArIGl0ZW07XHJcbiAgICAgICAgICAgIHZhciBuZXdCbG9ja3NBcnJheUluZGV4ID0gKGNvbCA9PSAwKSA/IGl0ZW0gOiAoY29sICogaGVpZ2h0U2V0KSArIGl0ZW07XHJcbiAgICAgICAgICAgIHZhciBvbGRCbG9ja3NBcnJheUluZGV4ID0gKGl0ZW0gPCBjdXJyZW50SGVpZ2h0KSA/IGFsbEJsb2Nrc1tyb3dJbmRleF0gOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAob2xkQmxvY2tzQXJyYXlJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgb2xkQmxvY2tzQXJyYXlJbmRleC5pbmRleCA9IG5ld0Jsb2Nrc0FycmF5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBuZXdSZWJ1aWxkQmxvY2tNYXAuY29uY2F0KG9sZEJsb2Nrc0FycmF5SW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmVidWlsZEJsb2NrTWFwID0gbmV3UmVidWlsZEJsb2NrTWFwLmNvbmNhdChjcmVhdGVTaW5nbGVNYXBCbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdDogbWFpbk9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBuZXdCbG9ja3NBcnJheUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IGNvbCAqIG1haW5PYmplY3QuYmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGl0ZW0gKiBtYWluT2JqZWN0LmJsb2NrU2l6ZSAvLyArIG9sZFlSYW5nZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjb2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmVydGljYWxDb21wZW5zYXRpb24gKz0gdmVydGljYWxSYW5nZTtcclxuICAgIH1cclxuICAgIG1haW5PYmplY3QubWFwV2lkdGggPSB3aWR0aFNldDtcclxuICAgIG1haW5PYmplY3QubWFwSGVpZ2h0ID0gaGVpZ2h0U2V0O1xyXG4gICAgbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrID0gbmV3UmVidWlsZEJsb2NrTWFwO1xyXG4gICAgdmFyIHNob3cgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2suZmluZChmdW5jdGlvbiAobykgeyByZXR1cm4gby5pbmRleCA9PSAxMDExOyB9KTtcclxuICAgIGNvbnNvbGUubG9nKHNob3csIFwic2hvdyByZXNpemVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2tbMF0pO1xyXG59XHJcbmV4cG9ydHMuY2hhbmdlQmxvY2tBcnJheVNpemUgPSBjaGFuZ2VCbG9ja0FycmF5U2l6ZTtcclxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlTWFwQmxvY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3IsIGluZGV4ID0gX2EuaW5kZXgsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgIHZhciBibG9ja0RhdGEgPSB7XHJcbiAgICAgICAgeDogeCxcclxuICAgICAgICB5OiB5LFxyXG4gICAgICAgIHdpZHRoOiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IG1haW5PYmplY3QuYmxvY2tTaXplLFxyXG4gICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgfTtcclxuICAgIHJldHVybiBuZXcgQmxvY2tDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgYmxvY2tEYXRhKSk7XHJcbn1cclxuZnVuY3Rpb24gbWluaU1hcHBlcihfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgdmFyIHNlbGVjdEZpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtZmlsZXNcIik7XHJcbiAgICB2YXIgZmlsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5uZXItY29udGVudFwiKTtcclxuICAgIHZhciBjbG9zZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VEaWFsb2dcIik7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWCA9IGFsbEJsb2Nrc1swXS54TW92ZTtcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblkgPSBhbGxCbG9ja3NbMF0ueU1vdmU7XHJcbiAgICBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUgPSB0cnVlO1xyXG4gICAgdmFyIG1hcFNpemUgPSA1MCAvIDM7XHJcbiAgICBmaWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIG5ld01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIG1hcFNpemVXaWR0aCA9IG1haW5PYmplY3QubWFwV2lkdGggKiAzO1xyXG4gICAgdmFyIG1hcFNpemVIZWlnaHQgPSBtYWluT2JqZWN0Lm1hcEhlaWdodCAqIDM7XHJcbiAgICBuZXdNYXBbJ3dpZHRoJ10gPSBtYXBTaXplV2lkdGg7XHJcbiAgICBuZXdNYXBbJ2hlaWdodCddID0gbWFwU2l6ZUhlaWdodDtcclxuICAgIHZhciBtaW5pTWFwQ3R4ID0gbmV3TWFwLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01hcCk7XHJcbiAgICBtYXBPYmplY3REcmF3KHtcclxuICAgICAgICBjdHg6IG1pbmlNYXBDdHgsXHJcbiAgICAgICAgYWxsQmxvY2tzOiBhbGxCbG9ja3MsXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25YOiBjYW1lcmFQb3NpdGlvblgsXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25ZOiBjYW1lcmFQb3NpdGlvblksXHJcbiAgICAgICAgbWFwU2l6ZTogbWFwU2l6ZSxcclxuICAgICAgICBtYXBTaXplV2lkdGg6IG1hcFNpemVXaWR0aCxcclxuICAgICAgICBtYXBTaXplSGVpZ2h0OiBtYXBTaXplSGVpZ2h0XHJcbiAgICB9KTtcclxuICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBhbGxCbG9ja3MgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uWCA9IGFsbEJsb2Nrc1swXS54TW92ZTtcclxuICAgICAgICB2YXIgY2FtZXJhUG9zaXRpb25ZID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXRbJ25vZGVOYW1lJ10gPT09ICdDQU5WQVMnKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NYID0gZXZlbnRbJ2NsaWVudFgnXSAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0TGVmdCddO1xyXG4gICAgICAgICAgICB2YXIgcG9zWSA9IGV2ZW50WydjbGllbnRZJ10gLSBldmVudC50YXJnZXRbJ29mZnNldFRvcCddO1xyXG4gICAgICAgICAgICBzZXRNYXBBc0NsaWNrKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgeDogcG9zWCAqIG1hcFNpemUsIHk6IHBvc1kgKiBtYXBTaXplIH0pO1xyXG4gICAgICAgICAgICBtYXBPYmplY3REcmF3KHtcclxuICAgICAgICAgICAgICAgIGN0eDogbWluaU1hcEN0eCxcclxuICAgICAgICAgICAgICAgIGFsbEJsb2NrczogYWxsQmxvY2tzLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25YOiBjYW1lcmFQb3NpdGlvblgsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3NpdGlvblk6IGNhbWVyYVBvc2l0aW9uWSxcclxuICAgICAgICAgICAgICAgIG1hcFNpemU6IG1hcFNpemUsXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplV2lkdGg6IG1hcFNpemVXaWR0aCxcclxuICAgICAgICAgICAgICAgIG1hcFNpemVIZWlnaHQ6IG1hcFNpemVIZWlnaHQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLm1pbmlNYXBwZXIgPSBtaW5pTWFwcGVyO1xyXG5mdW5jdGlvbiBtYXBPYmplY3REcmF3KF9hKSB7XHJcbiAgICB2YXIgY3R4ID0gX2EuY3R4LCBhbGxCbG9ja3MgPSBfYS5hbGxCbG9ja3MsIGNhbWVyYVBvc2l0aW9uWSA9IF9hLmNhbWVyYVBvc2l0aW9uWSwgY2FtZXJhUG9zaXRpb25YID0gX2EuY2FtZXJhUG9zaXRpb25YLCBtYXBTaXplID0gX2EubWFwU2l6ZSwgbWFwU2l6ZVdpZHRoID0gX2EubWFwU2l6ZVdpZHRoLCBtYXBTaXplSGVpZ2h0ID0gX2EubWFwU2l6ZUhlaWdodDtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgbWFwU2l6ZVdpZHRoLCBtYXBTaXplSGVpZ2h0KTtcclxuICAgIGNvbnNvbGUubG9nKGFsbEJsb2Nrcyk7XHJcbiAgICBhbGxCbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IChpdGVtLmRldGFpbHMubWFwQ29sb3IpID8gaXRlbS5kZXRhaWxzLm1hcENvbG9yIDogXCJyZ2JhKDIyNSwgMTY5LCAwLCAxKVwiOyAvL2l0ZW0uZGV0YWlscy5tYXBDb2xvci8vXCJyZ2JhKDIyNSwgMTY5LCAwLCAxKVwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoKGl0ZW0ueCkgPyBpdGVtLnggLyBtYXBTaXplIDogMCwgKGl0ZW0ueU1vdmUpID8gaXRlbS55IC8gbWFwU2l6ZSA6IDAsIDUwIC8gbWFwU2l6ZSwgNTAgLyBtYXBTaXplKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vY3R4LnNhdmUoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyMjUsIDI1NSwgMjU1LCAxKVwiO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LnJlY3QoKGNhbWVyYVBvc2l0aW9uWCAvIG1hcFNpemUpICogLTEsIChjYW1lcmFQb3NpdGlvblkgLyBtYXBTaXplKSAqIC0xLCB3aW5kb3cuaW5uZXJXaWR0aCAvIG1hcFNpemUsIHdpbmRvdy5pbm5lckhlaWdodCAvIG1hcFNpemUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgLy9jdHgucmVzdG9yZSgpXHJcbn1cclxuZnVuY3Rpb24gc2V0TWFwQXNDbGljayhfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWCA9IHggKyBhbGxCbG9ja3NbMF0ueE1vdmU7IC8vTWF0aC5tYXgoYWxsQmxvY2tzWzBdLnhNb3ZlLCB4KSAtIE1hdGgubWluKGFsbEJsb2Nrc1swXS54TW92ZSwgeCk7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25ZID0geSArIGFsbEJsb2Nrc1swXS55TW92ZTsgLy9NYXRoLm1heChhbGxCbG9ja3NbMF0ueU1vdmUsIHkpIC0gTWF0aC5taW4oYWxsQmxvY2tzWzBdLnlNb3ZlLCB5KTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQmxvY2tzXzIgPSBhbGxCbG9ja3M7IF9pIDwgYWxsQmxvY2tzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrID0gYWxsQmxvY2tzXzJbX2ldO1xyXG4gICAgICAgIGJsb2NrLnhNb3ZlIC09IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25YKTtcclxuICAgICAgICBibG9jay55TW92ZSAtPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi9ibG9ja0RhdGFSZWRhY3Rvck1vZHVsZVwiKTtcclxuZnVuY3Rpb24gY29sbGlzaW9uRGV0ZWN0b3IoX2EpIHtcclxuICAgIHZhciBvYmplY3QgPSBfYS5vYmplY3QsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIGlmICghb2JqZWN0IHx8ICF0YXJnZXQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGFyZ2V0LndpZHRoID0gcGFyc2VJbnQodGFyZ2V0LndpZHRoKTtcclxuICAgIHRhcmdldC5oZWlnaHQgPSBwYXJzZUludCh0YXJnZXQuaGVpZ2h0KTtcclxuICAgIG9iamVjdC53aWR0aCA9IHBhcnNlSW50KG9iamVjdC53aWR0aCk7XHJcbiAgICBvYmplY3QuaGVpZ2h0ID0gcGFyc2VJbnQob2JqZWN0LmhlaWdodCk7XHJcbiAgICB2YXIgeE1pbiA9IE1hdGgubWluKG9iamVjdC54TW92ZSwgdGFyZ2V0LngpO1xyXG4gICAgdmFyIHlNaW4gPSBNYXRoLm1pbihvYmplY3QueU1vdmUsIHRhcmdldC55KTtcclxuICAgIHZhciB4TWF4ID0gTWF0aC5tYXgob2JqZWN0LnhNb3ZlICsgb2JqZWN0LndpZHRoLCB0YXJnZXQueCArIHRhcmdldC53aWR0aCk7XHJcbiAgICB2YXIgeU1heCA9IE1hdGgubWF4KG9iamVjdC55TW92ZSArIG9iamVjdC5oZWlnaHQsIHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodCk7XHJcbiAgICB2YXIgcmVzWCA9IHhNYXggLSB4TWluO1xyXG4gICAgdmFyIHJlc1kgPSB5TWF4IC0geU1pbjtcclxuICAgIHZhciBjb2xsaXNpb24gPSAocmVzWCA+IG9iamVjdC53aWR0aCB8fCByZXNZID4gb2JqZWN0LmhlaWdodCkgPyBmYWxzZSA6IFwiY29sbGlzaW9uXCI7XHJcbiAgICBpZiAoY29sbGlzaW9uKVxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuY29sbGlzaW9uRGV0ZWN0b3IgPSBjb2xsaXNpb25EZXRlY3RvcjtcclxuZnVuY3Rpb24gbW92ZVNpbmdsZUJsb2NrKF9hKSB7XHJcbiAgICB2YXIgeE1vdmVWYWx1ZSA9IF9hLnhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWUgPSBfYS55TW92ZVZhbHVlO1xyXG4gICAgaWYgKHhNb3ZlVmFsdWUpXHJcbiAgICAgICAgdGhpcy54TW92ZSArPSB4TW92ZVZhbHVlO1xyXG4gICAgaWYgKHlNb3ZlVmFsdWUpXHJcbiAgICAgICAgdGhpcy55TW92ZSArPSB5TW92ZVZhbHVlO1xyXG59XHJcbmV4cG9ydHMubW92ZVNpbmdsZUJsb2NrID0gbW92ZVNpbmdsZUJsb2NrO1xyXG5mdW5jdGlvbiBtb3ZlQWxsU2NlbmUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgeE1vdmVWYWx1ZSA9IF9hLnhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWUgPSBfYS55TW92ZVZhbHVlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYiA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jazsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2luZ2xlQmxvY2sgPSBfYltfaV07XHJcbiAgICAgICAgc2luZ2xlQmxvY2subW92ZVNpbmdsZUJsb2NrKHsgeE1vdmVWYWx1ZTogeE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZTogeU1vdmVWYWx1ZSB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLm1vdmVBbGxTY2VuZSA9IG1vdmVBbGxTY2VuZTtcclxuZnVuY3Rpb24gY2hhbmdlT2JqZWN0TW9kZWwoX2EpIHtcclxuICAgIHZhciByZXN1bHQgPSBfYS5yZXN1bHQsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgaWYgKCFtYWluT2JqZWN0IHx8ICFyZXN1bHQgfHwgIW1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSB8fCBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUgfHwgbWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcylcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIGN1cnJlbnRCbG9jayA9IGFsbEJsb2Nrc1tyZXN1bHQuaW5kZXhdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIFwiPDxcIiwgY3VycmVudEJsb2NrKVxyXG4gICAgdmFyIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pO1xyXG4gICAgaWYgKCFtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyKSB7XHJcbiAgICAgICAgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS50eXBlID09PSBcImJhY2tncm91bmQtd2FsbFwiICYmIGN1cnJlbnRCbG9jay5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ud2lkdGggPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5oZWlnaHQgPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS54ID0gY3VycmVudEJsb2NrLng7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueSA9IGN1cnJlbnRCbG9jay55O1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnhNb3ZlID0gY3VycmVudEJsb2NrLnhNb3ZlO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnlNb3ZlID0gY3VycmVudEJsb2NrLnlNb3ZlO1xyXG4gICAgICAgICAgICBjdXJyZW50QmxvY2suYmFja2dyb3VuZFRleHR1cmUgPSBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRCbG9jay5kZXRhaWxzID0gc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uZGVzdHJveWVyID09PSAnZGVzdHJveWVyJykge1xyXG4gICAgICAgIGlmIChjdXJyZW50QmxvY2suZGV0YWlscyAmJiBjdXJyZW50QmxvY2suZGV0YWlscy52YWx1ZU9mTW92ZSkge1xyXG4gICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLnBvc2l0aW9uUmVkdWNlcih7IGFsbEJsb2NrczogYWxsQmxvY2tzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1haW5PYmplY3QuYmxvY2tTaXplKVxyXG4gICAgICAgIGN1cnJlbnRCbG9jay53aWR0aCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5oZWlnaHQgPSBtYWluT2JqZWN0LmJsb2NrU2l6ZTtcclxuICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5kZXN0cm95ZXIgPT09ICdyZWRhY3RvckRlY29yYXRpb24nKSB7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNoYW5nZU9iamVjdE1vZGVsID0gY2hhbmdlT2JqZWN0TW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBlbGV2YXRvck1vdmUoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSwgZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLnR5cGUgPT09ICdlbGV2YXRvcicpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5kZXRhaWxzLnZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueU1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueU1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID49IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLCBjdXJyZW50VmFsdWUsIGRlZmF1bHRWYWx1ZSwgXCI8PDw8XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZWxldmF0b3JNb3ZlID0gZWxldmF0b3JNb3ZlO1xyXG4vKlxyXG5cclxuXCJjdXJyZW50VmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY29uc3RydWN0b3JWYWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50RGlyZWN0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgXCJjb25zdHJ1Y3RvckRpcmVjdGlvblwiOiB0cnVlLFxyXG4gXCJpZFwiOiBcImVsZXZhdG9yXzFcIixcclxuICAgICAgICBcInRleHR1cmVcIjogXCIvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvZWxldmF0b3IucG5nXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZXZhdG9yXCIsXHJcbiAgICAgICAgXCJzcGVlZFwiOiA1LFxyXG4gICAgICAgIFwibW92ZURpcmVjdGlvblwiOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgXCJ2YWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50VmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudERpcmVjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgIFwidHlwZVwiOiBcImVsZXZhdG9yXCIsXHJcbiAgICAgICAgXCJjb2xsaXNpb25cIjogdHJ1ZVxyXG4qL1xyXG5mdW5jdGlvbiBibG9ja0FuaW1hdGlvbnMoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gdHJ1ZTsgfVxyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5zeCkgPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZFRleHR1cmUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCArPSB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnNXaWR0aDtcclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCkgPj0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZGV0YWlscykge1xyXG4gICAgICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5kZXRhaWxzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuc3ggKz0gdGhpcy5kZXRhaWxzLnNXaWR0aDtcclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5kZXRhaWxzLnN4KSA+PSB0aGlzLmRldGFpbHMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnN4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmJsb2NrQW5pbWF0aW9ucyA9IGJsb2NrQW5pbWF0aW9ucztcclxuZnVuY3Rpb24gc3RhaXJzTW92ZSgpIHtcclxufVxyXG5leHBvcnRzLnN0YWlyc01vdmUgPSBzdGFpcnNNb3ZlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL3BhbmVsRm9ybVBhcnRHZW5lcmF0b3JcIik7XHJcbnZhciBnbG9iYWxWYXJpYWJsZXNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKTtcclxuLy8gPT09PT09PT09PT09PSAgRGlhbG9nICA9PT09PT09PT09PT0vL1xyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dGaWVsZHMoKSB7XHJcbiAgICB2YXIgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU90aGVyRGlhbG9nKF9hKSB7XHJcbiAgICB2YXIgYWxsRGlhbG9ncyA9IF9hLmFsbERpYWxvZ3M7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpYWxvZ0Zvcm0sIGZpbmFsRGlhbG9nQmxvY2tzLCBhbGxJbm5lckJ1dHRvbk9iamVjdHMsIGlkLCBfaSwgYWxsRGlhbG9nc18xLCBkaWFsb2csIHF1ZXN0aW9uSXRlbXMsIGJsb2NrRGF0YV8xLCBibG9ja0RhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxEaWFsb2dzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgYWxsRGlhbG9nc18xID0gYWxsRGlhbG9nczsgX2kgPCBhbGxEaWFsb2dzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IGFsbERpYWxvZ3NfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSXRlbXMgPSBsb2FkUXVlc3Rpb25zU2VjdGlvbih7IHF1ZXN0aW9uQmFzZTogZGlhbG9nLnF1ZXN0aW9ucywgY3VycmVudElkOiBpZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgKz0gXCI8ZGl2IGlkPVxcXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkICsgXCJcXFwiIGNsYXNzPVxcXCJkaWFsb2ctYmxvY2std3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgPGg0PkRpYWxvZyBJRDogXCIgKyBkaWFsb2cuaWQgKyBcIlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZGlhbG9nLWlkLWZpZWxkLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiXCIgKyBkaWFsb2cuaWQgKyBcIlxcXCI+ICAgXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwicmVtb3ZlLWRpYWxvZy1cIiArIGlkICsgXCJcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJidXR0b24tcmVqZWN0XFxcIj5kZWxldGUgZGlhbG9nPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgIDxwPkRpYWxvZyBhY3Rpb25zIDxzcGFuPlxcXCJub25lXFxcIjwvc3Bhbj4gIDxzcGFuPlxcXCJnaXZlX29iamVjdFxcXCI8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZGlhbG9nLWFjdGlvbi1cIiArIGlkICsgXCJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJkaWFsb2cgYWN0aW9uc1xcXCIgdmFsdWU9XFxcIlwiICsgZGlhbG9nLmFjdGlvbiArIFwiXFxcIj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcImRpYWxvZy1ibG9jay1cIiArIGlkICsgXCJcXFwiIG5hbWU9XFxcIlxcXCI+XCIgKyBkaWFsb2cudGV4dCArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiXFxcIj5cIiArICgocXVlc3Rpb25JdGVtcykgPyBxdWVzdGlvbkl0ZW1zLnF1ZXN0aW9ucyA6ICcnKSArIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImFkZC1uZXctcXVlc3Rpb24tXCIgKyBpZCArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPisgQWRkIHF1ZXN0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8aHI+XFxuICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXRhXzEgPSBPYmplY3QuYXNzaWduKHt9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCbG9ja1dyYXBwZXI6IFwiZGlhbG9nLWJsb2NrLXdyYXBwZXItXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3I6IFwiZGlhbG9nLWJsb2NrLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dJZEZpZWxkOiBcImRpYWxvZy1pZC1maWVsZC1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRGlhbG9nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3UXVlc3Rpb246IFwiYWRkLW5ldy1xdWVzdGlvbi1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGlhbG9nOiBcInJlbW92ZS1kaWFsb2ctXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0FjdGlvbkZpZWxkOiBcImRpYWxvZy1hY3Rpb24tXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCbG9ja0lkOiBhbGxEaWFsb2dzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnNEYXRhOiAocXVlc3Rpb25JdGVtcykgPyBxdWVzdGlvbkl0ZW1zLmFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IGFsbElubmVyQnV0dG9uT2JqZWN0cy5jb25jYXQoYmxvY2tEYXRhXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbERpYWxvZ0Jsb2NrcyArPSBcIjxidXR0b24gaWQ9XFxcImFkZC1kaWFsb2ctXCIgKyBpZCArIFwiXFxcIiA+XFxuICAgICAgICA8c3Bhbj4gKyBOZXcgZGlhbG9nPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQmxvY2tXcmFwcGVyOiBcImRpYWxvZy1ibG9jay13cmFwcGVyLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3I6IFwiZGlhbG9nLWJsb2NrLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZERpYWxvZzogXCJhZGQtZGlhbG9nLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ld1F1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVEaWFsb2c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCbG9ja0lkOiBhbGxEaWFsb2dzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uc0RhdGE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHMgPSBhbGxJbm5lckJ1dHRvbk9iamVjdHMuY29uY2F0KGJsb2NrRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRm9ybS5pbm5lckhUTUwgPSBmaW5hbERpYWxvZ0Jsb2NrcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB7IGRpYWxvZ0Zvcm06IGRpYWxvZ0Zvcm0sIGFsbElubmVyQnV0dG9uT2JqZWN0czogYWxsSW5uZXJCdXR0b25PYmplY3RzIH1dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Iuc2VudCgpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVPdGhlckRpYWxvZyA9IGNyZWF0ZU90aGVyRGlhbG9nO1xyXG5mdW5jdGlvbiBsb2FkUXVlc3Rpb25zU2VjdGlvbihfYSkge1xyXG4gICAgdmFyIHF1ZXN0aW9uQmFzZSA9IF9hLnF1ZXN0aW9uQmFzZSwgY3VycmVudElkID0gX2EuY3VycmVudElkO1xyXG4gICAgaWYgKCFxdWVzdGlvbkJhc2UpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGFsbFF1ZXN0aW9uc0Jsb2NrID0gJyc7XHJcbiAgICB2YXIgYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzID0gW107XHJcbiAgICB2YXIgcXVlc3Rpb25zSWQgPSAwO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBxdWVzdGlvbkJhc2VfMSA9IHF1ZXN0aW9uQmFzZTsgX2kgPCBxdWVzdGlvbkJhc2VfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgcXVlc3Rpb24gPSBxdWVzdGlvbkJhc2VfMVtfaV07XHJcbiAgICAgICAgYWxsUXVlc3Rpb25zQmxvY2sgKz0gXCI8ZGl2IGNsYXNzPVxcXCJxdWVzdGlvbi13cmFwcGVyXFxcIiBpZD1cXFwic2luZ2xlLXF1ZXN0aW9uQmFzZS1ibG9jay1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQgKyBcIlxcXCI+XFxuICAgICAgICA8cD5SZWxhdGVkIElkIGRpYWxvZzwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInJlbGF0ZWQtcXVlc3Rpb24taWQtXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCJcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgdmFsdWU9XFxcIlwiICsgcXVlc3Rpb24uaWQgKyBcIlxcXCIgY2xhc3M9XFxcInJlbGF0ZWQtaWQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD0ncXVlc3Rpb24tdGV4dC1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQgKyBcIic+XCIgKyBxdWVzdGlvbi50ZXh0ICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInJlbW92ZS1xdWVzdGlvbi1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQgKyBcIlxcXCIgY2xhc3M9XFxcInJpZ2h0LXNpZGUtYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJ1dHRvbi1yZWplY3RcXFwiPi0gcmVtb3ZlLXF1ZXN0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgdmFyIGJsb2NrRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgZGlhbG9nSWQ6IGN1cnJlbnRJZCxcclxuICAgICAgICAgICAgcXVlc3Rpb25JZDogcXVlc3Rpb25zSWQsXHJcbiAgICAgICAgICAgIHJlbGF0ZWRRdWVzdGlvbklkOiBcInJlbGF0ZWQtcXVlc3Rpb24taWQtXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICBxdWVzdGlvbldyYXBwZXI6IFwic2luZ2xlLXF1ZXN0aW9uQmFzZS1ibG9jay1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQsXHJcbiAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3I6IFwicXVlc3Rpb24tdGV4dC1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWQsXHJcbiAgICAgICAgICAgIHJlbW92ZVF1ZXN0aW9uOiBcInJlbW92ZS1xdWVzdGlvbi1cIiArIGN1cnJlbnRJZCArIFwiLVwiICsgcXVlc3Rpb25zSWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgPSBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMuY29uY2F0KGJsb2NrRGF0YSk7XHJcbiAgICAgICAgcXVlc3Rpb25zSWQgKz0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHF1ZXN0aW9uczogYWxsUXVlc3Rpb25zQmxvY2ssIGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0czogYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzIH07XHJcbn1cclxuLy8gIGFkZCBuZXcgZWxlbWVudHNcclxuZnVuY3Rpb24gZGlhbG9nQW5zd2VyQnV0dG9uKF9hKSB7XHJcbiAgICB2YXIgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gX2EuYWxsSW5uZXJCdXR0b25PYmplY3RzLCBhbGxPdGhlcnNEaWFsb2dzID0gX2EuYWxsT3RoZXJzRGlhbG9ncywgYmxvY2tEZXRhaWxzID0gX2EuYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZCA9IF9hLmN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgaXRlbURhdGEgPSBfYS5pdGVtRGF0YTtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2xvb3BfMSwgX2ksIGFsbElubmVyQnV0dG9uT2JqZWN0c18xLCBidXR0b247XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBpZiAoIWFsbElubmVyQnV0dG9uT2JqZWN0cylcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIF9sb29wXzEgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkTmV3UXVlc3Rpb24gPSAoYnV0dG9uLmFkZE5ld1F1ZXN0aW9uKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmFkZE5ld1F1ZXN0aW9uKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlRGlhbG9nID0gKGJ1dHRvbi5yZW1vdmVEaWFsb2cpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24ucmVtb3ZlRGlhbG9nKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkRGlhbG9nID0gKGJ1dHRvbi5hZGREaWFsb2cpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uYWRkRGlhbG9nKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nQWN0aW9uRmllbGQgPSAoYnV0dG9uLmRpYWxvZ0FjdGlvbkZpZWxkKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmRpYWxvZ0FjdGlvbkZpZWxkKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nSWRGaWVsZCA9IChidXR0b24uZGlhbG9nSWRGaWVsZCkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5kaWFsb2dJZEZpZWxkKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dEFyZWFTZWxlY3RvciA9IChidXR0b24udGV4dEFyZWFTZWxlY3RvcikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi50ZXh0QXJlYVNlbGVjdG9yKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkTmV3UXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGROZXdRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RpYWxvZ0Jsb2NrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGJ1dHRvbi5sYXN0QmxvY2tJZCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk5ldyBkaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5xdWVzdGlvbnMgPSBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5xdWVzdGlvbnMuY29uY2F0KG5ld0RpYWxvZ0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGlhbG9nLnF1ZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVEaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vycy5zcGxpY2UoYnV0dG9uLmlkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZERpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RpYWxvZ0Jsb2NrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGJ1dHRvbi5sYXN0QmxvY2tJZCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk5ldyBmaWVsZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uczogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzID0gYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzLmNvbmNhdChuZXdEaWFsb2dCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0QXJlYVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWFTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLnRleHQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ0FjdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nQWN0aW9uRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5hY3Rpb24gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ0lkRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dJZEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0uaWQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8vIHNhdmUgdGV4dFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhidXR0b24ucXVlc3Rpb25zRGF0YSlcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24ucXVlc3Rpb25zRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVF1ZXN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uc0RhdGE6IGJ1dHRvbi5xdWVzdGlvbnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHM6IGFsbElubmVyQnV0dG9uT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsT3RoZXJzRGlhbG9nczogYWxsT3RoZXJzRGlhbG9ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAoX2kgPSAwLCBhbGxJbm5lckJ1dHRvbk9iamVjdHNfMSA9IGFsbElubmVyQnV0dG9uT2JqZWN0czsgX2kgPCBhbGxJbm5lckJ1dHRvbk9iamVjdHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiA9IGFsbElubmVyQnV0dG9uT2JqZWN0c18xW19pXTtcclxuICAgICAgICAgICAgICAgIF9sb29wXzEoYnV0dG9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmRpYWxvZ0Fuc3dlckJ1dHRvbiA9IGRpYWxvZ0Fuc3dlckJ1dHRvbjtcclxuZnVuY3Rpb24gcmVtb3ZlUXVlc3Rpb25zKF9hKSB7XHJcbiAgICB2YXIgcXVlc3Rpb25zRGF0YSA9IF9hLnF1ZXN0aW9uc0RhdGEsIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IF9hLmFsbElubmVyQnV0dG9uT2JqZWN0cywgYWxsT3RoZXJzRGlhbG9ncyA9IF9hLmFsbE90aGVyc0RpYWxvZ3MsIGJsb2NrRGV0YWlscyA9IF9hLmJsb2NrRGV0YWlscywgY3VycmVudERlc2NyaXB0aW9uSWQgPSBfYS5jdXJyZW50RGVzY3JpcHRpb25JZCwgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIGl0ZW1EYXRhID0gX2EuaXRlbURhdGE7XHJcbiAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChhbnN3ZXIpIHtcclxuICAgICAgICB2YXIgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGFuc3dlci5yZW1vdmVRdWVzdGlvbik7XHJcbiAgICAgICAgdmFyIHRleHRBcmVhU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgYW5zd2VyLnRleHRBcmVhU2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciByZWxhdGVkUXVlc3Rpb25JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBhbnN3ZXIucmVsYXRlZFF1ZXN0aW9uSWQpO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zLnNwbGljZShhbnN3ZXIucXVlc3Rpb25JZCwgMSk7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGV4dEFyZWFTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1thbnN3ZXIuZGlhbG9nSWRdLnF1ZXN0aW9uc1thbnN3ZXIucXVlc3Rpb25JZF0udGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsYXRlZFF1ZXN0aW9uSWQpIHtcclxuICAgICAgICAgICAgcmVsYXRlZFF1ZXN0aW9uSWQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS5pZCwgJ3x8fCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkLCB0aGlzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS5pZCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHF1ZXN0aW9uc0RhdGFfMSA9IHF1ZXN0aW9uc0RhdGE7IF9pIDwgcXVlc3Rpb25zRGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBxdWVzdGlvbnNEYXRhXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzIoYW5zd2VyKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dGb3JtKF9hKSB7XHJcbiAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2EuYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZCA9IF9hLmN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lcjtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmFjZVBpY3R1cmUsIGlubmVyVGV4dCwgaXRlbURhdGEsIGFsbE90aGVyc0RpYWxvZ3MsIG1haW5EaWFsb2dXcmFwcGVyLCBvdGhlckRpYWxvZ3M7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZVBpY3R1cmUgPSAoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUpID8gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUgOiBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8ZGl2IGlkPVxcXCJtYWluLWRpYWxvZy13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICA8aDM+RGlhbG9nPC9oMz5cXG4gICAgICAgICAgICA8cD5DcmVhdGUgUGVyc29uIGRpYWxvZzwvcD5cXG4gICAgICAgICAgICA8ZGl2PlwiICsgKChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSkgPyAnUGljdHVyZSBpcyBzZXQnIDogJ1lvdSBtdXN0IHNhdmUgdGhlIHBpY3R1cmUgZmlyc3QnKSArIFwiPC9kaXY+XFxuICAgICAgICAgICAgPGltZyB3aWR0aD1cXFwiMTAwXFxcIiBpZD1cIiArICgnZGlhbG9nLWZhY2UtcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCJcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgZmFjZVBpY3R1cmUgKyBcIlxcXCI+XFxuXFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwicHJldmlldy1kaWFsb2ctZmFjZVxcXCIgZGF0YS10YXJnZXQ9J3ByZXZpZXctZGlhbG9nLWZhY2UnPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTEucG5nXFxcIiBzZWxlY3RlZD1cXFwic2VsZWN0ZWRcXFwiPnByb2Zlc3Nvcjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTMucG5nXFxcIj5vbGQgbWFuPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNC5wbmdcXFwiPm1hbiAxPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNy5wbmdcXFwiPm1hbiAyPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtOC5wbmdcXFwiPk9mZmljZXI8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS0yLnBuZ1xcXCI+U29sZGllcjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTUucG5nXFxcIj5Sb2JvdCByZWQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS02LnBuZ1xcXCI+WWVsbG93IHJlZDwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcblxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibnBjLW5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIiArICgoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTlBDIG5hbWUnKSArIFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwiXCIgKyAoKGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5uYW1lKSA/IGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5uYW1lIDogJ05QQyBuYW1lJykgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1kaWFsb2ctYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgbmFtZSBhbmQgcGljdHVyZTwvYnV0dG9uPiA8aHI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxsLW90aGVycy1kaWFsb2dzXFxcIiBpZD1cXFwiYWxsLW90aGVycy1kaWFsb2dzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtb3RoZXJzLWRpYWxvZ3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkRpYWxvZ1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGlhbG9nLXdyYXBwZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3JlYXRlT3RoZXJEaWFsb2coeyBhbGxEaWFsb2dzOiBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyRGlhbG9ncyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW90aGVyRGlhbG9ncykgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYWxsT3RoZXJzRGlhbG9ncy5hcHBlbmRDaGlsZChvdGhlckRpYWxvZ3MuZGlhbG9nRm9ybSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaWFsb2dBbnN3ZXJCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzOiBvdGhlckRpYWxvZ3MuYWxsSW5uZXJCdXR0b25PYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsT3RoZXJzRGlhbG9nczogYWxsT3RoZXJzRGlhbG9ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZURpYWxvZ0Zvcm0gPSBjcmVhdGVEaWFsb2dGb3JtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX19IT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMwMCc7XHJcbmV4cG9ydHMuX19IT1NUID0gX19IT1NUO1xyXG52YXIgX19CTE9DS19DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItYmxvY2tzJztcclxuZXhwb3J0cy5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1iYWNrZ3JvdW5kLWJsb2Nrcyc7XHJcbmV4cG9ydHMuX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItY2hhcmFjdGVycyc7XHJcbmV4cG9ydHMuX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMID0gX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19FTkVNWV9ERVRBSUxTX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ncm91bmQtZW5lbXknO1xyXG52YXIgX19FTkVNWV9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItZ3JvdW5kLWVuZW15LXJlZGFjdG9yJztcclxuZXhwb3J0cy5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCA9IF9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19NQVBfREFUQV9VUkwgPSAnL2FwcC9nZXQtYWxsLW1hcHMnO1xyXG5leHBvcnRzLl9fTUFQX0RBVEFfVVJMID0gX19NQVBfREFUQV9VUkw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIHJlcXVlc3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBpbml0TWFpbkVuZ2luZShfYSkge1xyXG4gICAgdmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSBfYS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFwTmFtZSwgYmxvY2tTaXplLCBkZWZhdWx0V2lkdGgsIGRlZmF1bHRIZWlnaHQsIG1heEhvcml6b250YWxCbG9ja3MsIG1heFZlcnRpY2FsQmxvY2tzLCByZWRhY3RvckRhdGEsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUgPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddLm5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NpemUgPSA1MCwgZGVmYXVsdFdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIGRlZmF1bHRIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIG1heEhvcml6b250YWxCbG9ja3MgPSAzMDAsIG1heFZlcnRpY2FsQmxvY2tzID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hcFNpemVUb0Zvcm0oeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcE1vdmVTcGVlZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEhlaWdodDogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGVmYXVsdFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERlZmF1bHRIZWlnaHQ6IGRlZmF1bHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhvcml6b250YWxCbG9ja3M6IG1heEhvcml6b250YWxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZlcnRpY2FsQmxvY2tzOiBtYXhWZXJ0aWNhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBibG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlZGFjdG9yQmxvY2s6IGZpbGxCbG9ja01hcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEJsb2NrczogZGVmYXVsdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxCbG9jazogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogYmxvY2tTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IuYmxvY2tEYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYi5iYWNrZ3JvdW5kRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5jaGFyYWN0ZXJzRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2IuZW5lbXlEYXRhYmFzZSA9IF9jLnNlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICByZWRhY3RvckRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZWRhY3RvckRhdGEuYmFja2dyb3VuZERhdGFiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgTWFpbkdhbWVDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgcmVkYWN0b3JEYXRhKSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmluaXRNYWluRW5naW5lID0gaW5pdE1haW5FbmdpbmU7XHJcbmZ1bmN0aW9uIHNldE1hcFNpemVUb0Zvcm0oX2EpIHtcclxuICAgIHZhciB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgZm9ybVsnaG9yaXpvbnRhbEJsb2NrJ10udmFsdWUgPSB3aWR0aDtcclxuICAgIGZvcm1bJ3ZlcnRpY2FsQmxvY2snXS52YWx1ZSA9IGhlaWdodDtcclxufVxyXG5leHBvcnRzLnNldE1hcFNpemVUb0Zvcm0gPSBzZXRNYXBTaXplVG9Gb3JtO1xyXG5mdW5jdGlvbiBmaWxsQmxvY2tNYXAoX2EpIHtcclxuICAgIHZhciBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvciwgaG9yaXpvbnRhbEJsb2NrcyA9IF9hLmhvcml6b250YWxCbG9ja3MsIHZlcnRpY2FsQmxvY2sgPSBfYS52ZXJ0aWNhbEJsb2NrLCBibG9ja1NpemUgPSBfYS5ibG9ja1NpemU7XHJcbiAgICB2YXIgYmxvY2tBcnJheSA9IFtdO1xyXG4gICAgdmFyIGhvcml6b250YWxFbmRzID0gMDtcclxuICAgIHZhciB2ZXJ0aWNhbEVuZHMgPSAwO1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IGJsb2NrU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IGJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogMFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9yaXpvbnRhbEJsb2NrcyAqIHZlcnRpY2FsQmxvY2s7IGkrKykge1xyXG4gICAgICAgIGJsb2NrRGF0YS55ID0gdmVydGljYWxFbmRzO1xyXG4gICAgICAgIGJsb2NrRGF0YS54ID0gaG9yaXpvbnRhbEVuZHM7XHJcbiAgICAgICAgYmxvY2tEYXRhLmluZGV4ID0gaTtcclxuICAgICAgICB2ZXJ0aWNhbEVuZHMgPSAodmVydGljYWxFbmRzIDwgKCh2ZXJ0aWNhbEJsb2NrIC0gMSkgKiBibG9ja1NpemUpKSA/IHZlcnRpY2FsRW5kcyArIGJsb2NrU2l6ZSA6IDA7XHJcbiAgICAgICAgaG9yaXpvbnRhbEVuZHMgPSAodmVydGljYWxFbmRzID09IDApID8gaG9yaXpvbnRhbEVuZHMgKyBibG9ja1NpemUgOiBob3Jpem9udGFsRW5kcztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKClcclxuICAgICAgICBibG9ja0FycmF5ID0gYmxvY2tBcnJheS5jb25jYXQobmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKEJsb2NrQ29uc3RydWN0b3IsIGJsb2NrQXJyYXkpO1xyXG4gICAgcmV0dXJuIGJsb2NrQXJyYXk7XHJcbn1cclxuZXhwb3J0cy5maWxsQmxvY2tNYXAgPSBmaWxsQmxvY2tNYXA7XHJcbmZ1bmN0aW9uIGJhY2tUb09iamVjdChfYSkge1xyXG4gICAgdmFyIGRhdGEgPSBfYS5kYXRhLCBjb25zdHJ1Y3RvciA9IF9hLmNvbnN0cnVjdG9yO1xyXG4gICAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUoY29uc3RydWN0b3IpO1xyXG4gICAgdmFyIGZpbmFsT2JqZWN0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHJlcy5wcm90b3R5cGUpLCBkYXRhKTtcclxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcclxufVxyXG5leHBvcnRzLmJhY2tUb09iamVjdCA9IGJhY2tUb09iamVjdDtcclxuZnVuY3Rpb24gcmVuZGVyQmxvY2tCb3goX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLnlNb3ZlID4gMCAtIDEwMCAmJiB0aGlzLnhNb3ZlID4gMCAtIDEwMCAmJiB0aGlzLnlNb3ZlIDwgd2luZG93LmlubmVySGVpZ2h0ICsgMTAwICYmIHRoaXMueE1vdmUgPCB3aW5kb3cuaW5uZXJXaWR0aCArIDEwMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGV0YWlscykgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld18xLmNyZWF0ZUZyYW1lLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCB2aWV3XzEuYmFja2dyb3VuZFJlbmRlci5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHZpZXdfMS5jcmVhdGVCbG9ja1BpY3R1cmUuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yZW5kZXJCbG9ja0JveCA9IHJlbmRlckJsb2NrQm94O1xyXG5mdW5jdGlvbiBibG9ja0FuaW1hdGlvblJlbmRlcihfYSkge1xyXG4gICAgdmFyIGJsb2NrID0gX2EuYmxvY2s7XHJcbiAgICBibG9jay5ibG9ja0FuaW1hdGlvbnMoKTtcclxufVxyXG5leHBvcnRzLmJsb2NrQW5pbWF0aW9uUmVuZGVyID0gYmxvY2tBbmltYXRpb25SZW5kZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2xvYmFsVmFyaWFibGVzXzEgPSByZXF1aXJlKFwiLi9nbG9iYWxWYXJpYWJsZXNcIik7XHJcbnZhciBkaWFsb2dGb3JtTW9kdWxlXzEgPSByZXF1aXJlKFwiLi9kaWFsb2dGb3JtTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUlucHV0KF9hKSB7XHJcbiAgICB2YXIgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmxvY2tEZXRhaWxzLCBpbm5lclRleHQsIGl0ZW1EYXRhLCBjdXJyZW50RGVzY3JpcHRpb25JZCwgYmxvY2tBbGVydE1lc3NhZ2UsIGJsb2NrUHJldmlld0ltYWdlLCBsb2NhbFBpY3R1cmUsIG1haW5QaWN0dXJlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscyA9IHRhcmdldC5kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stYWxlcnQtbWVzc2FnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLXByZXZpZXctaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sbGlzaW9uXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHR1cmVcIjogXCIvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svYmxvY2stMy5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNEZXN0cm95XCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIEJsb2NrcyBzZXR0aW5ncyAmIFBhcmFtZXRlcnMgID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiXFxuICAgICAgICA8aDE+QmxvY2sgc2l6ZTwvaDE+XFxuICAgICAgICA8aDM+QmxvY2sgd2lkdGg8L2gzPlxcbiAgICAgICAgICAgIDxwPlNpemUgb2YgYmxvY2sgd2lkdGggaW4gcGl4ZWxzPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMDBcXFwiIGlkPVwiICsgKCd3aWR0aC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC53aWR0aCkgPyB0YXJnZXQud2lkdGggOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS13aWR0aC1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSB3aWR0aDwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgIDxoMz5CbG9jayBoZWlnaHQ8L2gzPlxcbiAgICAgICAgICAgIDxwPlNpemUgb2YgYmxvY2sgaGVpZ2h0IGluIHBpeGVsczwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBtaW49XFxcIjFcXFwiIG1heD1cXFwiMjAwXFxcIiBpZD1cIiArICgnaGVpZ2h0LXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LmhlaWdodCkgPyB0YXJnZXQuaGVpZ2h0IDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtaGVpZ2h0LWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIGhlaWdodDwvYnV0dG9uPlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnYmxvY2std2lkdGgtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgICAgICA8aDE+QmxvY2sgUG9zaXRpb248L2gxPlxcbiAgICAgICAgICAgIDxoMz5CbG9jayBYPC9oMz5cXG4gICAgICAgICAgICA8cD5YIHBvc2l0aW9uIG9mIGJsb2NrPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiLTUwXFxcIiBtYXg9XFxcIjUwXFxcIiBpZD1cIiArICgneC1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuYmxvY2tSZWxhdGl2ZVhQb3MpID8gdGFyZ2V0LmJsb2NrUmVsYXRpdmVYUG9zIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUteC1wb3MtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgWCBQb3NpdGlvbjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgIDxoMz5CbG9jayBZPC9oMz5cXG4gICAgICAgICAgICA8cD5ZIHBvc2l0aW9uIG9mIGJsb2NrPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiLTUwXFxcIiBtYXg9XFxcIjUwXFxcIiBpZD1cIiArICgneS1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuYmxvY2tSZWxhdGl2ZVlQb3MpID8gdGFyZ2V0LmJsb2NrUmVsYXRpdmVZUG9zIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUteS1wb3MtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgWSBQb3NpdGlvbjwvYnV0dG9uPlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnYmxvY2steC1wb3MtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIERlc2NyaXB0aW9uICA9PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPkRlc2NyaXB0aW9uPC9oMz5cXG4gICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnZGVzY3JpcHRpb24tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiID5cIiArIGJsb2NrRGV0YWlscy5kZXNjcmlwdGlvbiArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtZGVzY3JpcHRpb24tYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgRGVzY3JpcHRpb248L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIHJ1bGVycyAmIHRpcHMgID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMucnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGlwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5UaXBzPC9oMz5cXG4gICAgICAgICAgICA8cD5BIHRpcHMgaG93IHRvIHVzIHRoaXMgb2JqZWN0cywgaXQgY291bGQgYmUgYSBwYXJ0IG9mIHNvbWUgbWVzc2FnZSwgXFxcIlVzZSAqICB0byBzdGFydCBuZXcgbGluZVxcXCI8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCd0aXBzLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy50aXBzKSA/IGJsb2NrRGV0YWlscy5ydWxlcy50aXBzIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtdGlwcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBUaXBzPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tdGlwcy0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5TdWNjZXNzIFRleHQ8L2gzPlxcbiAgICAgICAgICAgIDxwPkRpc3BsYXkgYSBtZXNzYWdlIHdoZW4geW91IGRvIGV2ZXJ5dGhpbmcgd3JpdGU6IGNvbGxlY3QgZGF0ZS9rZXksIGJyaW5nIGRhdGEva2V5IDwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3N1Y2Nlc3NUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5zdWNjZXNzVGV4dCkgPyBibG9ja0RldGFpbHMucnVsZXMuc3VjY2Vzc1RleHQgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1zdWNjZXNzLXRleHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgVGV4dDwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXN1Y2Nlc3NUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlJlcXVpcmUgVGV4dDwvaDM+XFxuICAgICAgICAgICAgPHA+RGlzcGxheSBhIG1lc3NhZ2UgZGVzY3JpYmUgc29tZSBSZXF1aXJlbWVudCBmb3IgdGhpcyBvYmplY3QgdG8gd29yazwvcD5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ3JlcXVpcmVUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5yZXF1aXJlVGV4dCkgPyBibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZVRleHQgOiAnJykgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1yZXF1aXJlLXRleHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgUmVxdWlyZSBUZXh0PC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tcmVxdWlyZVRleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5SZXF1aXJlIE9iamVjdDwvaDM+XFxuICAgICAgICAgICAgPHA+UmVxdWlyZSBtZXNzYWdlLCBkaXNwbGF5IG9iamVjdCBuZWVkcyBmb3IgdGhpcyBibG9jayB0byBldmVyeXRoaW5nIHdvcmsgZmluZSA8c3Bhbj5jb21wdXRlcl9kYXRhXFxuICAgICAgICAgICAgPC9zcGFuPjxzcGFuPmJsdWVfY2FyZDwvc3Bhbj48c3Bhbj5ncmVlbl9jYXJkPC9zcGFuPiA8c3Bhbj55ZWxsb3dfY2FyZDwvc3Bhbj4gPHNwYW4+cmVkX2NhcmQ8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZSkgPyBibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZSA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgUmVxdWlyZSBPYmplY3Q8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBpY3R1cmUgPSAoYmxvY2tEZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluUGljdHVyZSA9IChibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyBibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvaW5uZXItb2JqZWN0cy8nICsgbG9jYWxQaWN0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5Db250YWluIE9iamVjdDwvaDM+XFxuICAgICAgICAgICAgPHA+T2JqZWN0IG9yIGRhdGEgaW5zaWRlIHRoaXMgb2JqZWN0IHByZXNzICdFJyBidXR0b24gdG8gY29sbGVjdCBcXG4gZXhpdCAgLSBzcGVjaWFsIG9iamVjdCB0byBmaW5pc2ggdGhlIGxldmVsXFxuICAgICAgICAgICAgPHNwYW4+Y29tcHV0ZXJfZGF0YTwvc3Bhbj48c3Bhbj5ibHVlX2NhcmQ8L3NwYW4+PHNwYW4+Z3JlZW5fY2FyZDwvc3Bhbj4gPHNwYW4+eWVsbG93X2NhcmQ8L3NwYW4+IDxzcGFuPnJlZF9jYXJkPC9zcGFuPiA8c3Bhbj5leGl0PC9zcGFuPiAgZXhpdCAgLSBlbmQgdGhlIGxldmVsPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgnY29udGFpbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMuY29udGFpbikgPyBibG9ja0RldGFpbHMucnVsZXMuY29udGFpbiA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8aW1nIHdpZHRoPVxcXCIxMDBcXFwiIGlkPVwiICsgKCdjb250YWluLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIG1haW5QaWN0dXJlICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInByZXZpZXctY29udGFpbi1vYmplY3RcXFwiIGRhdGEtdGFyZ2V0PSdzZWxlY3QtcHJldmlldy1idG4nPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjb21wdXRlci1kYXRhLnBuZ1xcXCI+Q29tcHV0ZXIgZGF0YTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJyZWQtY2FyZC5wbmdcXFwiPlJlZCBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImJsdWUtY2FyZC5wbmdcXFwiPkJsdWUgY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJncmVlbi1jYXJkLnBuZ1xcXCI+R3JlZW4gY2FyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ5ZWxsb3ctY2FyZC5wbmdcXFwiPlllbGxvdyBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInBvd2VyLWNlbGwucG5nXFxcIj5Qb3dlciBDZWxsPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1jb250YWluLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tcmVxdWlyZVRleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFibG9ja0RldGFpbHMuZGlhbG9nKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaWFsb2dGb3JtTW9kdWxlXzEuY3JlYXRlRGlhbG9nRm9ybSh7IGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXIgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5pbm5lck9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlLXNpemVcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkUmVzdWx0cywgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtd2lkdGgtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1oZWlnaHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS14LXBvcy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXktcG9zLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtZGVzY3JpcHRpb24tYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS10aXBzLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLXRleHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtcmVxdWlyZS1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1jb250YWluLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWRpYWxvZy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAyMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3dpZHRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2hlaWdodC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Jsb2NrUmVsYXRpdmVYUG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3gtcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Jsb2NrUmVsYXRpdmVZUG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3ktcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2Rlc2NyaXB0aW9uLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGlwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyN0aXBzLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd0aXBzIGZpZWxkJyA6ICcgc2F2ZSB0aXBzIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3N1Y2Nlc3NUZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3N1Y2Nlc3NUZXh0LWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdkZXNjcmlwdGlvbiBmaWVsZCcgOiAnIHNhdmUgZGVzY3JpcHRpb24gZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcmVxdWlyZVRleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3JlcXVpcmUgdGV4dCBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSB0ZXh0IGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3JlcXVpcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjcmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAncmVxdWlyZSBmaWVsZCcgOiAnIHNhdmUgcmVxdWlyZSBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2NvbnRhaW4tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2NvbnRhaW4gb2JqZWN0JyA6ICcgc2F2ZSBjb250YWluIG9iamVjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNjb250YWluLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5kaWFsb2cuZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjbnBjLW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmZpZWxkUmVzdWx0cyA9IGF3YWl0IGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjZGVmYXVsdC1kaWFsb2ctdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypmaWVsZFJlc3VsdHMgPSBhd2FpdCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNkZWZhdWx0LWRpYWxvZy10ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdjb250YWluIG9iamVjdCcgOiAnIHNhdmUgY29udGFpbiBvYmplY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IChmaWVsZFJlc3VsdHMpID8gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIiA+IFN1Y2Nlc3NmdWxseSBzYXZlZCAnXCIgKyBmaWVsZE5hbWUgKyBcIicgPC9wPlwiIDogXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1lcnJvclxcXCIgPlRoZXJlIGlzIGEgcHJvYmxlbSBpbiAnXCIgKyBmaWVsZE5hbWUgKyBcIicgaSBjYW4ndCBzYXZlPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgZGF0YUNoZWNrXzEsIHJlcXVpcmVkUHJldmlld1BpY18xLCBwaWNfMSwgbGlua18xLCBkYXRhRmFjZSwgcGljdHVyZSwgZGF0YUNoZWNrLCByZXF1aXJlZFByZXZpZXdQaWMsIHBpYywgbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdC1wcmV2aWV3LWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXZpZXctZGlhbG9nLWZhY2UnOiByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdvYmplY3RQaWN0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3ByZXZpZXctcmVxdWlyZS1vYmplY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoZWNrXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jb250YWluLW9iamVjdCcpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNfMSA9ICh0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua18xID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBkYXRhQ2hlY2tfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgPSBsaW5rXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljXzFbJ3NyYyddID0gbGlua18xOyAvL2NvbXB1dGVyLWRhdGEucG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1kaWFsb2ctZmFjZScpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGUgPSBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2VuZW15T2JqZWN0L2F2YXRhci8nICsgZGF0YUZhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1mYWNlLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVbJ3NyYyddID0gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jb250YWluLW9iamVjdCcpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljID0gKHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBkYXRhQ2hlY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlID0gbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNbJ3NyYyddID0gbGluazsgLy9jb21wdXRlci1kYXRhLnBuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2VuZXJhdGVJbnB1dCA9IGdlbmVyYXRlSW5wdXQ7XHJcbmZ1bmN0aW9uIGNoYW5nZURhdGFJbkJsb2NrKF9hKSB7XHJcbiAgICB2YXIga2V5ID0gX2Eua2V5LCBmaWVsZFNlbGVjdG9yID0gX2EuZmllbGRTZWxlY3RvciwgdGFyZ2V0ID0gX2EudGFyZ2V0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBibG9ja0FsZXJ0TWVzc2FnZSwgY3VycmVudEZpZWxkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWFsZXJ0LW1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpZWxkU2VsZWN0b3IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RmllbGQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJJbnZhbGlkIFZhbHVlIG9mIFwiICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IChjdXJyZW50RmllbGQudmFsdWUpID8gY3VycmVudEZpZWxkLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgKGN1cnJlbnRGaWVsZC52YWx1ZSAmJiB0YXJnZXRba2V5XSAmJiBrZXkgJiYgZmllbGRTZWxlY3RvcikgPyB0cnVlIDogZmFsc2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkSW5uZXJEYXRhKF9hKSB7XHJcbiAgICB2YXIgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHZhciBibG9ja0RldGFpbHMgPSB0YXJnZXQuZGV0YWlscztcclxuICAgIHZhciBpdGVtQmFja2dyb3VuZEltYWdlID0gKGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSkgPyBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10gOiBibG9ja0RldGFpbHNbJ3RleHR1cmUnXTsgLy8gcHJldmlld1RleHR1cmVcclxuICAgIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UgPSAodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlICYmIGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSkgPyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmVbJ3ByZXZpZXdUZXh0dXJlJ10gOlxyXG4gICAgICAgICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gdGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlLnRleHR1cmUgOiBibG9ja0RldGFpbHNbJ3RleHR1cmUnXTtcclxuICAgIHZhciBpdGVtSW1hZ2UgPSAoYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddKSA/IGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSA6IGJsb2NrRGV0YWlsc1sndGV4dHVyZSddO1xyXG4gICAgdmFyIGJhY2tncm91bmRJbWFnZSA9ICh0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUpID8gXCI8aW1nIHdpZHRoPVxcXCI1MFxcXCIgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBpdGVtQmFja2dyb3VuZEltYWdlKSArIFwiXFxcIiBhbHQ9XFxcIlwiICsgdGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlLmlkICsgXCJcXFwiPlwiIDogXCJcIjtcclxuICAgIHZhciBpbm5lclRleHQgPSBcIjxkaXYgY2xhc3M9XFxcImJsb2NrLWRlc2NyaXB0aW9uLXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYXRlcmlhbC1wcmV2aWV3LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGltZyBpZD1cXFwiYmxvY2stcHJldmlldy1pbWFnZVxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgc3JjPVxcXCJcIiArIChnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCJcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPHVsPjxkaXYgaWQ9XFxcImJsb2NrLWFsZXJ0LW1lc3NhZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgPGxpPk5hbWU6IFwiICsgYmxvY2tEZXRhaWxzLmlkICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPkluZGV4OiBcIiArIHRhcmdldC5pbmRleCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5UeXBlOiBcIiArICgoYmxvY2tEZXRhaWxzLnR5cGUpID8gYmxvY2tEZXRhaWxzLnR5cGUgOiAnJykgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+d2lkdGg6IFwiICsgdGFyZ2V0LndpZHRoICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPmhlaWdodDogXCIgKyB0YXJnZXQuaGVpZ2h0ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlg6IFwiICsgdGFyZ2V0LnggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+WTogXCIgKyB0YXJnZXQueSArIFwiPC9saT5cXG5cXG4gICAgPHA+XCIgKyAoKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSkgPyBcIkJhY2tncm91bmQgdGV4dHVyZVwiIDogXCJcIikgKyBcIjwvcD5cXG4gICAgXCIgKyBiYWNrZ3JvdW5kSW1hZ2UgKyBcIlxcbiAgICA8L3VsPjwvZGl2Pjxocj5cIjtcclxuICAgIHZhciBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgaWROYW1lOiBudWxsXHJcbiAgICB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG59XHJcbmV4cG9ydHMubG9hZElubmVyRGF0YSA9IGxvYWRJbm5lckRhdGE7XHJcbmZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKF9hKSB7XHJcbiAgICB2YXIgdGFnbmFtZSA9IF9hLnRhZ25hbWUsIGNsYXNzTGlzdCA9IF9hLmNsYXNzTGlzdCwgaW5uZXJUZXh0ID0gX2EuaW5uZXJUZXh0LCBpZE5hbWUgPSBfYS5pZE5hbWU7XHJcbiAgICB2YXIgbmV3RG9jdW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG4gICAgbmV3RG9jdW1lbnQuY2xhc3NOYW1lID0gKGNsYXNzTGlzdCkgPyBjbGFzc0xpc3QgOiBmYWxzZTtcclxuICAgIG5ld0RvY3VtZW50LmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICAgIGlmIChpZE5hbWUpXHJcbiAgICAgICAgbmV3RG9jdW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWROYW1lKTtcclxuICAgIHJldHVybiBuZXdEb2N1bWVudDtcclxufVxyXG5leHBvcnRzLmVsZW1lbnRDcmVhdG9yID0gZWxlbWVudENyZWF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9nbG9iYWxWYXJpYWJsZXNcIikpO1xyXG52YXIgcmVxdWVzdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXItcmVxdWVzdHMvcmVxdWVzdHNNb2R1bGVcIik7XHJcbnZhciBwcmV2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvcHJldmlld1wiKTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4vaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgYmxvY2tDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIi4uL2NvbnN0cnVjdG9ycy9ibG9ja0NvbnN0cnVjdG9yXCIpO1xyXG52YXIgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBzZXRNYXBTaXplKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbWFwLXNpemUnXTtcclxuICAgIHZhciBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1zaXplLWVycm9yJyk7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldC1tYXAtc2l6ZScpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhLCBfaSwgZm9ybV8xLCBmaWVsZCwgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBmb3JtXzEgPSBmb3JtOyBfaSA8IGZvcm1fMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZm9ybV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICYmIGZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICYmICFmaWVsZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSkgPCBwYXJzZUludChtYWluT2JqZWN0Lm1hcERlZmF1bHRXaWR0aCkgfHwgcGFyc2VJbnQoZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSkgPCBwYXJzZUludChtYWluT2JqZWN0Lm1hcERlZmF1bHRIZWlnaHQpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+TWFwIG1pbiBzaXplIGlzIFwiICsgbWFpbk9iamVjdC5tYXBEZWZhdWx0V2lkdGggKyBcIiB4IFwiICsgbWFpbk9iamVjdC5tYXBEZWZhdWx0SGVpZ2h0ICsgXCI8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZUludChmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10pID4gcGFyc2VJbnQobWFpbk9iamVjdC5tYXhIb3Jpem9udGFsQmxvY2tzKSB8fCBwYXJzZUludChmb3JtRGF0YVsndmVydGljYWxCbG9jayddKSA+IHBhcnNlSW50KG1haW5PYmplY3QubWF4VmVydGljYWxCbG9ja3MpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+TWFwIG1heCBzaXplIGlzIFwiICsgbWFpbk9iamVjdC5tYXhIb3Jpem9udGFsQmxvY2tzICsgXCIgeCBcIiArIG1haW5PYmplY3QubWF4VmVydGljYWxCbG9ja3MgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXJyb3JGaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgXCI8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPlwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmlubmVySFRNTCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5jaGFuZ2VCbG9ja0FycmF5U2l6ZSh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGZvcm1EYXRhOiBmb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuaW5uZXJIVE1MID0gXCI8cCBjbGFzcz1cXFwic2lkZS1wYW5lbC1zdWNjZXNzXFxcIj5tYXAgc2l6ZSBzZXQgXCIgKyBmb3JtRGF0YVsnaG9yaXpvbnRhbEJsb2NrJ10gKyBcIiB4IFwiICsgZm9ybURhdGFbJ3ZlcnRpY2FsQmxvY2snXSArIFwiIGJsb2NrczwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2V0TWFwU2l6ZSA9IHNldE1hcFNpemU7XHJcbmZ1bmN0aW9uIGdldE1hcERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXBOYW1lLCByZXMsIGNvbnZlcnRUb09iamVjdCwgc2l6ZUZvcm07XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTmFtZSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ10ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuYWxsTWFwT2JqZWN0cy5tYXAoZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdFN0YXJ0T2JqZWN0XzEuYmFja1RvT2JqZWN0KHsgZGF0YTogYmxvY2ssIGNvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRUb09iamVjdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBOYW1lLnZhbHVlID0gcmVzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5tYXBXaWR0aCA9IHJlcy5tYXBTaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3QubWFwSGVpZ2h0ID0gcmVzLm1hcFNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtID0gZG9jdW1lbnQuZm9ybXNbJ21hcC1zaXplJ107XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0uaG9yaXpvbnRhbEJsb2NrLnZhbHVlID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybS52ZXJ0aWNhbEJsb2NrLnZhbHVlID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrID0gY29udmVydFRvT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTmV3TWFwKCkge1xyXG4gICAgdmFyIGNyZWF0ZU1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlTWFwXCIpO1xyXG4gICAgY3JlYXRlTWFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld01hcCA9IGNyZWF0ZU5ld01hcDtcclxuZnVuY3Rpb24gbG9hZE1hcChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcGVuQnV0dG9uLCBzZWxlY3RGaWxlcywgZmlsZUNvbnRhaW5lciwgY2xvc2VEaWFsb2c7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIG9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW5NYXBcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdEZpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtZmlsZXNcIik7XHJcbiAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZURpYWxvZ1wiKTtcclxuICAgICAgICAgICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcEZpbGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7IHVybDogZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgZ2xvYmFsVmFyaWFibGUuX19NQVBfREFUQV9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZpbGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQoeyBkaXNwbGF5RWxlbWVudDogZmlsZUNvbnRhaW5lciwgZGF0YTogbWFwRmlsZSwgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgc2VsZWN0RmlsZXM6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlld18xLmhpZGVFbGVtZW50KHsgZWxlbWVudDogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmxvYWRNYXAgPSBsb2FkTWFwO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQoX2EpIHtcclxuICAgIHZhciBkaXNwbGF5RWxlbWVudCA9IF9hLmRpc3BsYXlFbGVtZW50LCBkYXRhID0gX2EuZGF0YSwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEZpbGVzID0gX2Euc2VsZWN0RmlsZXM7XHJcbiAgICBpZiAoIWRhdGEgfHwgIWRpc3BsYXlFbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIHZhciBpbm5lckZpbGUgPSBibG9ja0NyZWF0b3IoeyB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBzdHlsZUNsYXNzOiAnc2luZ2xlLWl0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8aDI+XCIgKyBmaWxlLm5hbWUgKyBcIjwvaDI+XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbm5lckZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdldE1hcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBmaWxlLmxpbmsgKyAnLycgKyBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtYWluT2JqZWN0OiBtYWluT2JqZWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwbGF5RWxlbWVudC5hcHBlbmRDaGlsZChpbm5lckZpbGUpO1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoZmlsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYmxvY2tDcmVhdG9yKF9hKSB7XHJcbiAgICB2YXIgdGFnID0gX2EudGFnLCBzdHlsZUNsYXNzID0gX2Euc3R5bGVDbGFzcywgaW5uZXJDb250ZW50ID0gX2EuaW5uZXJDb250ZW50O1xyXG4gICAgdmFyIG5ld0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgbmV3QmxvY2suY2xhc3NOYW1lID0gc3R5bGVDbGFzcztcclxuICAgIG5ld0Jsb2NrLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgIHJldHVybiBuZXdCbG9jaztcclxufVxyXG5leHBvcnRzLmJsb2NrQ3JlYXRvciA9IGJsb2NrQ3JlYXRvcjtcclxuZnVuY3Rpb24gc2F2ZU1hcChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb3JtLCBidXR0b24sIG1lc3NhZ2VGaWVsZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1tYXAtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLW1hcC1lcnJvcicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRGb3JtLCBzYXZlRGF0YSwgbWFwRmlsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm0gPSBnZXRGb3JtRGF0YSh7IGZvcm06IGZvcm0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRGb3JtKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Rm9ybVsnc3RhdHVzJ10gPT09ICdyZWplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLWVycm9yXFxcIj5GYWlsIHRvIHNhdmUgbWFwLCBjaGVjayBtYXAgTmFtZTwvcD4gXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ21hcFNpemUnXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1haW5PYmplY3QubWFwV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbWFpbk9iamVjdC5tYXBIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVEYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydjcmVhdGluZ1RpbWUnXSA9IHNhdmVEYXRhLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3JtWydhbGxNYXBPYmplY3RzJ10gPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Rm9ybSwgJ3NhdmUnLCBtYWluT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLnBvc3REYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0Rm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZpbGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9IFwiPHA+U2F2ZSB0aW1lOiBcIiArIChzYXZlRGF0YS5nZXRIb3VycygpIC0gMSkgKyBcIiA6IFwiICsgc2F2ZURhdGEuZ2V0TWludXRlcygpICsgXCIgOiBcIiArIHNhdmVEYXRhLmdldFNlY29uZHMoKSArIFwiPC9wPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiICsgbWFwRmlsZS51cmwgKyBcIiBvbmNsaWNrPVxcXCIoZnVuY3Rpb24oKXsgd2luZG93Lm9wZW4oJ1wiICsgbWFwRmlsZS51cmwgKyBcIicpfSkoKVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPk9wZW4gaW4gbmV3IHdpbmRvdzwvYT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zYXZlTWFwID0gc2F2ZU1hcDtcclxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoX2EpIHtcclxuICAgIHZhciBmb3JtID0gX2EuZm9ybTtcclxuICAgIGlmICghZm9ybSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGZvcm1fMiA9IGZvcm07IF9pIDwgZm9ybV8yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmb3JtSXRlbXMgPSBmb3JtXzJbX2ldO1xyXG4gICAgICAgIGlmIChmb3JtSXRlbXMubmFtZSAmJiBmb3JtSXRlbXMudmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0W2Zvcm1JdGVtcy5uYW1lXSA9IGZvcm1JdGVtcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUl0ZW1zLm5hbWUgJiYgIWZvcm1JdGVtcy52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkluY29ycmVjdCBEYXRhXCIsIHN0YXR1czogXCJyZWplY3RcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZ2V0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdyZWplY3QnLCBtZXNzYWdlOiByZXMuc3RhdHVzVGV4dCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCI1MDAgTm8gc2VydmVyIGNvbm5lY3Rpb24hXCIsIHN0YXR1czogXCJlcnJvclwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXREYXRhID0gZ2V0RGF0YTtcclxuZnVuY3Rpb24gcG9zdERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogKG1ldGhvZCkgPyBtZXRob2QgOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcmVkYWN0b3IvZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxuZnVuY3Rpb24gcHJldmlld09mQmxvY2soX2EpIHtcclxuICAgIHZhciBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gX2Euc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQgPSBfYS5ldmVudDtcclxuICAgIHZhciBwcmV2aWV3RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZC1pdGVtJyk7XHJcbiAgICBpZiAoIXNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pXHJcbiAgICAgICAgaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBwcmV2aWV3RWxlbWVudCB9KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBpdGVtSW1hZ2UgPSAoc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsncHJldmlld1RleHR1cmUnXSkgPyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtWydwcmV2aWV3VGV4dHVyZSddIDogc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsndGV4dHVyZSddO1xyXG4gICAgICAgIHNob3dFbGVtZW50KHsgZWxlbWVudDogcHJldmlld0VsZW1lbnQgfSk7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnRbJ3N0eWxlJ10gPSBcIm1hcmdpbi10b3A6IFwiICsgKGV2ZW50LmNsaWVudFkgKyAxMCkgKyBcInB4OyBtYXJnaW4tbGVmdDogXCIgKyAoZXZlbnQuY2xpZW50WCArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCIgPlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucHJldmlld09mQmxvY2sgPSBwcmV2aWV3T2ZCbG9jaztcclxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG59XHJcbmV4cG9ydHMuaGlkZUVsZW1lbnQgPSBoaWRlRWxlbWVudDtcclxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IGJsb2NrJztcclxufVxyXG5leHBvcnRzLnNob3dFbGVtZW50ID0gc2hvd0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0ludGVyYWN0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tJbnRlcmFjdE1vZHVsZVwiKTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL3ByZXZpZXdcIik7XHJcbnZhciBzaWRlUGFuZWxBY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9uc1wiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3JlZGFjdG9yL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbmZ1bmN0aW9uIGluaXRWaWV3KCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWRhY3Rvci1maWVsZCcpO1xyXG4gICAgdGhpcy5jb250ZXh0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuY29udGV4dEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY29udGV4dFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY29udGV4dEhlaWdodDtcclxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbn1cclxuZXhwb3J0cy5pbml0VmlldyA9IGluaXRWaWV3O1xyXG5mdW5jdGlvbiBtYXBNb3ZlQ29udHJvbGxlcnMoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgeE1vdmVWYWx1ZSA9IDAsIHlNb3ZlVmFsdWUgPSAwO1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgODc6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2ODpcclxuICAgICAgICAgICAgICAgIHhNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZCAqIC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODM6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQgKiAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY1OlxyXG4gICAgICAgICAgICAgICAgeE1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzc6XHJcbiAgICAgICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yLm1pbmlNYXBwZXIoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5tb3ZlQWxsU2NlbmUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCB4TW92ZVZhbHVlOiB4TW92ZVZhbHVlLCB5TW92ZVZhbHVlOiB5TW92ZVZhbHVlIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jazsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddICE9ICdDQU5WQVMnKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJsb2NrSW50ZXJhY3RNb2R1bGVfMS5jb2xsaXNpb25EZXRlY3Rvcih7IG9iamVjdDogYmxvY2ssIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVcclxuICAgICAgICAgICAgICAgIH0gfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGJsb2NrLmluZGV4LCBcIiA8IEJsb2NrIGluZGV4XCIpXHJcbiAgICAgICAgICAgICAgICBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLm9wZW5SZWRhY3RvcldpbmRvdyh7IGJsb2NrRGF0YTogYmxvY2ssIG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBibG9ja0ludGVyYWN0TW9kdWxlXzEuY2hhbmdlT2JqZWN0TW9kZWwoeyByZXN1bHQ6IHJlc3VsdCwgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwcmV2aWV3XzEucHJldmlld09mQmxvY2soeyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtOiBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50OiBldmVudCB9KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgYnV0dG9uSWQgPSBldmVudC50YXJnZXRbJ2RhdGFzZXQnXS5idXR0b25JZDtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yQmxvY2tzJzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmJsb2NrRGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JEZWNvcmF0aW9uJzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmJhY2tncm91bmREYXRhYmFzZSwgc2VsZWN0SXRlbTogYnV0dG9uSWQgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JDaGFyYWN0ZXJzJzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmNoYXJhY3RlcnNEYXRhYmFzZSwgc2VsZWN0SXRlbTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckVuZW15JzpcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zVG9TaWRlTGlzdCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGRhdGFCYXNlOiBtYWluT2JqZWN0LmVuZW15RGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5lbXknKSAgZW5lbXlEYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5tYXBNb3ZlQ29udHJvbGxlcnMgPSBtYXBNb3ZlQ29udHJvbGxlcnM7XHJcbmZ1bmN0aW9uIHJlbmRlckl0ZW1zVG9TaWRlTGlzdChfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0LCBkYXRhQmFzZSA9IF9hLmRhdGFCYXNlLCBzZWxlY3RJdGVtID0gX2Euc2VsZWN0SXRlbTtcclxuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwnKTtcclxuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGJsb2NrSXRlbSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYmxvY2tJdGVtKVxyXG4gICAgICAgIHZhciBpdGVtSW1hZ2UgPSAoYmxvY2tJdGVtWydwcmV2aWV3VGV4dHVyZSddKSA/IGJsb2NrSXRlbVsncHJldmlld1RleHR1cmUnXSA6IGJsb2NrSXRlbVsndGV4dHVyZSddO1xyXG4gICAgICAgIHZhciBvYmogPSBzaWRlUGFuZWxBY3Rpb25zXzEuYmxvY2tDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogJ3NpbmdsZS1ibG9jay1pdGVtJyxcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxpbWcgd2lkdGg9XFxcIjEwMCVcXFwiIHRpdGxlPVxcXCJcIiArICgoYmxvY2tJdGVtLmRldGFpbHMpID8gYmxvY2tJdGVtLmRldGFpbHMuZGVzY3JpcHRpb24gOiBibG9ja0l0ZW0uZGVzY3JpcHRpb24pICsgXCJcXFwiIHNyYz0nXCIgKyAoZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgaXRlbUltYWdlKSArIFwiJz5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBibG9ja0l0ZW06IGJsb2NrSXRlbSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQob2JqKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFCYXNlXzEgPSBkYXRhQmFzZTsgX2kgPCBkYXRhQmFzZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9ja0l0ZW0gPSBkYXRhQmFzZV8xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGJsb2NrSXRlbSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQucHJlcGVuZChjcmVhdGVEZXN0cm95QmxvY2soeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtIH0pKTtcclxufVxyXG5leHBvcnRzLnJlbmRlckl0ZW1zVG9TaWRlTGlzdCA9IHJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuZnVuY3Rpb24gc2lkZVBhbmVsSXRlbXNTZWxlY3RQcm9jZXNzKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGJsb2NrSXRlbSA9IF9hLmJsb2NrSXRlbTtcclxuICAgIC8vY29uc29sZS5sb2coYmxvY2tJdGVtKVxyXG4gICAgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSkge1xyXG4gICAgICAgIG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSA9IChibG9ja0l0ZW0uaWQgIT0gbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmlkKSA/IGJsb2NrSXRlbSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gYmxvY2tJdGVtO1xyXG4gICAgcHJldmlld18xLnByZXZpZXdPZkJsb2NrKHsgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTogbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBldmVudDogZXZlbnQgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGVzdHJveUJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEl0ZW0gPSBfYS5zZWxlY3RJdGVtO1xyXG4gICAgdmFyIG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2JqLmNsYXNzTmFtZSA9ICdzaW5nbGUtYmxvY2staXRlbSc7XHJcbiAgICBvYmouaW5uZXJIVE1MID0gXCI8aW1nIHRpdGxlPVxcXCJcIiArICgoc2VsZWN0SXRlbSA9PT0gXCJyZWRhY3RvckRlY29yYXRpb25cIikgPyAnRGVsZXRlIG9ubHkgYmFja2dyb3VuZCcgOiAnRGVsZXRlIGJsb2NrIGl0ZW0nKSArIFwiXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgc3JjPSdcIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Rlc3Ryb3kucG5nJykgKyBcIic+XCI7XHJcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBzaWRlUGFuZWxJdGVtc1NlbGVjdFByb2Nlc3MoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBibG9ja0l0ZW06IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZGVzdHJveWVyJyxcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3llcjogKHNlbGVjdEl0ZW0pID8gc2VsZWN0SXRlbSA6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9ibG9jay9kZXN0cm95LnBuZydcclxuICAgICAgICAgICAgfSB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBjbGVhclZpZXcoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHRXaWR0aCwgdGhpcy5jb250ZXh0SGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLmNsZWFyVmlldyA9IGNsZWFyVmlldztcclxuZnVuY3Rpb24gYmFja2dyb3VuZFJlbmRlcihfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWdCYWNrZ3JvdW5kLCBzeCwgc3k7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRUZXh0dXJlKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQmFja2dyb3VuZC5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCkgPyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzeSA9ICh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN5KSA/IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3kgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5PYmplY3QuY3R4LmRyYXdJbWFnZShpbWdCYWNrZ3JvdW5kLCBzeCwgc3ksIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc1dpZHRoLCB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnNIZWlnaHQsIHRoaXMueE1vdmUsIHRoaXMueU1vdmUsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUud2lkdGgsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZFRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYmFja2dyb3VuZFJlbmRlciA9IGJhY2tncm91bmRSZW5kZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrUGljdHVyZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWcsIHNXaWR0aCwgc0hlaWdodCwgc3gsIHN5O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFpbk9iamVjdC5jdHguc2F2ZSgpOyAvLyBzV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgdGhpcy5kZXRhaWxzLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgc1dpZHRoID0gKHRoaXMuZGV0YWlscy5zV2lkdGgpID8gdGhpcy5kZXRhaWxzLnNXaWR0aCA6IHRoaXMuZGV0YWlscy5pbWFnZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNIZWlnaHQgPSAodGhpcy5kZXRhaWxzLnNIZWlnaHQpID8gdGhpcy5kZXRhaWxzLnNIZWlnaHQgOiB0aGlzLmRldGFpbHMuaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAodGhpcy5kZXRhaWxzLnN4KSA/IHRoaXMuZGV0YWlscy5zeCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3kgPSAodGhpcy5kZXRhaWxzLnN5KSA/IHRoaXMuZGV0YWlscy5zeSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uZGV0YWlscy5zeFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5PYmplY3QuY3R4LmRyYXdJbWFnZShpbWcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB0aGlzLnhNb3ZlICsgcGFyc2VJbnQodGhpcy5ibG9ja1JlbGF0aXZlWFBvcyksIHRoaXMueU1vdmUgKyBwYXJzZUludCh0aGlzLmJsb2NrUmVsYXRpdmVZUG9zKSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5PYmplY3QuY3R4LnJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uZGV0YWlscy5zeFxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQmxvY2tQaWN0dXJlID0gY3JlYXRlQmxvY2tQaWN0dXJlO1xyXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgaWYgKCFtYWluT2JqZWN0LmN0eClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgLjMpXCI7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5maWxsVGV4dCh0aGlzLmluZGV4LCB0aGlzLnhNb3ZlICsgNSwgdGhpcy55TW92ZSArIDE1KTtcclxuICAgIG1haW5PYmplY3QuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwxNTMsMjU1LDAuNCknO1xyXG4gICAgbWFpbk9iamVjdC5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5yZWN0KHRoaXMueE1vdmUsIHRoaXMueU1vdmUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIG1haW5PYmplY3QuY3R4LnN0cm9rZSgpO1xyXG4gICAgLy9tYWluT2JqZWN0LmN0eC5zdHJva2UoKVxyXG59XHJcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==