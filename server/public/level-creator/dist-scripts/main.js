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
exports.push([module.i, "body {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden; }\n\ncanvas {\n    background: #00534b; }\n\n.side-menu-wrapper {\n    background: #bbbbbb;\n    height: 96vh;\n    right: 0;\n    max-width: 300px;\n    min-width: 100px;\n    padding: 10px;\n    position: absolute;\n    overflow-y: scroll; }\n\n.game-field-wrapper {\n    overflow: hidden; }\n\nfooter {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    color: #ffffff; }\n\n.main-banner-cover {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.1);\n    width: 100vw;\n    height: 100vh;\n    z-index: 100; }\n\n* {\n    color: #221828;\n    font-family: 'Roboto', sans-serif; }\n\nlegend h3 {\n    margin: 0px; }\n\nlabel p {\n    font-size: 14px; }\n\ninput {\n    padding: 10px;\n    width: 91%;\n    border-radius: 7px;\n    border: 0px; }\n\n.side-instrumental-panel {\n    overflow-y: scroll;\n    max-height: 85vh;\n    display: flex;\n    flex-wrap: wrap; }\n    .side-instrumental-panel li {\n        list-style: none; }\n    .side-instrumental-panel img {\n        padding: 10px;\n        display: block;\n        margin: 0 auto;\n        width: 54px; }\n\n.selected-item-preview {\n    position: absolute;\n    z-index: 100; }\n    .selected-item-preview img {\n        width: 60px; }\n\n.inner-content {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    max-width: 70%;\n    min-height: 85vh;\n    overflow-y: scroll;\n    right: 0;\n    float: right;\n    max-height: 90%; }\n    .inner-content hr {\n        color: #eaeaea; }\n    .inner-content .single-item-wrapper {\n        cursor: pointer;\n        padding: 5px; }\n    .inner-content .single-item-wrapper:hover {\n        background: #4d4263;\n        color: #fff; }\n        .inner-content .single-item-wrapper:hover h2 {\n            color: #ffffff; }\n\n.inner-description-fields-wrapper {\n    background: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 20px; }\n    .inner-description-fields-wrapper .single-block-description {\n        color: #715184; }\n        .inner-description-fields-wrapper .single-block-description input {\n            background: #bbb; }\n        .inner-description-fields-wrapper .single-block-description span {\n            border-radius: 10px;\n            background: #3a61bd;\n            padding: 5px;\n            margin-top: 5px;\n            position: relative;\n            display: inline-block;\n            font-size: 12px;\n            color: #ffffff; }\n        .inner-description-fields-wrapper .single-block-description .button-reject {\n            background: #ad0000;\n            color: #fffff; }\n            .inner-description-fields-wrapper .single-block-description .button-reject textarea {\n                background: #1c1722;\n                color: #ffffff; }\n    .inner-description-fields-wrapper .question-wrapper {\n        background: #eaeaea;\n        padding: 5px;\n        overflow: auto;\n        display: flex; }\n        .inner-description-fields-wrapper .question-wrapper p {\n            font-size: 11px;\n            font-weight: 900; }\n    .inner-description-fields-wrapper .requirement-item-wrapper {\n        display: flex; }\n\n.active-button {\n    background: #ff961e; }\n\n.right-side-button {\n    float: right; }\n\n.side-panel-success {\n    color: #539700;\n    border: 1px solid #539700;\n    padding: 5px; }\n\n.side-panel-error {\n    color: #b10000;\n    border: 1px solid #b10000;\n    padding: 5px; }\n\n.block-description-wrapper {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap; }\n    .block-description-wrapper img {\n        max-width: 100%; }\n\n.single-block-description {\n    text-align: left;\n    padding: 5px;\n    width: 46%; }\n    .single-block-description textarea {\n        width: 96%;\n        padding: 5px;\n        margin-top: 10px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        border: 1px solid #dfdfdf;\n        background: #bbb; }\n\n.all-others-dialogs {\n    background: #826d6d;\n    padding: 5px;\n    border-radius: 5px;\n    color: #ffffff; }\n    .all-others-dialogs h4 {\n        color: #ffffff; }\n    .all-others-dialogs button {\n        background: none;\n        border: 0px;\n        cursor: pointer; }\n\n.related-id-field {\n    width: 50px;\n    width: 29px;\n    margin: 24px; }\n\n.close-dialog {\n    color: #ffffff;\n    background: none;\n    padding: 20px;\n    border: none;\n    font-size: 32px;\n    position: absolute;\n    cursor: pointer;\n    margin-top: 20%; }\n\n.close-dialog:after {\n    content: ' Close'; }\n\n.main-btn {\n    background: #ffb300;\n    border: navajowhite;\n    padding: 7px;\n    border-radius: 5px;\n    margin-top: 5px;\n    box-shadow: 1px 1px 5px #1547a64f;\n    cursor: pointer;\n    transition: .3s linear; }\n\n.main-btn:hover {\n    background: #ffedc3; }\n\n.main-btn:active {\n    background: #ff1e00; }\n\n.material-preview-wrapper {\n    width: 100%; }\n\n.button-reject {\n    background: #ad0000;\n    color: #fffff; }\n\n.destroy-block-wrapper {\n    position: fixed;\n    right: 31px;\n    bottom: 59px; }\n\n.copy-block-wrapper {\n    position: fixed;\n    right: 31px;\n    bottom: 0; }\n\n.container h1, .container p {\n    color: #ffffff; }\n\n.dialog-panel-block {\n    width: 100%; }\n", ""]);
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
                            if (!(block.xMove > 0 - block.width && block.xMove < window.innerWidth + block.width && block.yMove > 0 - block.height && block.yMove < window.innerHeight + block.height)) return [3 /*break*/, 5];
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
var view_1 = __webpack_require__(/*! ../ui/view */ "./src/ui/view.ts");
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
    //console.log(mainObject.selectedBlockPanelItem, "|")
    if (mainObject.selectedBlockPanelItem.copyBlock) {
        if (!currentBlock.details)
            return false;
        view_1.sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: currentBlock.details });
    }
    else if (!mainObject.selectedBlockPanelItem.destroyer) {
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
                    innerText = "<div id=\"main-dialog-wrapper\">\n            <h3>Dialog</h3>\n            <p>Create Person dialog</p>\n            <div>" + ((blockDetails.dialog.default.facePictureAbsolute) ? 'Picture is set' : 'You must save the picture first') + "</div>\n            <img width=\"100\" id=" + ('dialog-face-picture-' + currentDescriptionId) + "\n            src=\"" + facePicture + "\">\n\n            <select id=\"preview-dialog-face\" data-target='preview-dialog-face'>\n                <option value=\"face-1.png\" selected=\"selected\">professor</option>\n                <option value=\"face-3.png\">old man</option>\n                <option value=\"face-4.png\">man 1</option>\n                <option value=\"face-7.png\">man 2</option>\n                <option value=\"face-8.png\">General</option>\n                <option value=\"face-2.png\">Soldier</option>\n                <option value=\"face-5.png\">Robot red</option>\n                <option value=\"face-6.png\">Yellow red</option>\n                <option value=\"face-9.png\">man 3</option>\n                <option value=\"face-10.png\">officer</option>\n                <option value=\"face-11.png\">officer 1</option>\n                <option value=\"face-12.png\">officer 2</option>\n                <option value=\"face-13.png\">computer 1</option>\n                <option value=\"face-14.png\">computer 2</option>\n                <option value=\"face-15.png\">documents</option>\n            </select>\n\n            <input id=\"npc-name\" type=\"text\" value=\"" + ((blockDetails.dialog.default.name) ?
                        blockDetails.dialog.default.name :
                        'NPC name') + "\" placeholder=\"" + ((blockDetails.dialog.default.name) ? blockDetails.dialog.default.name : 'NPC name') + "\">\n            <button data-target='save-dialog-btn' class=\"main-btn\">Save name and picture</button> <hr></div>\n            <div class=\"all-others-dialogs\" id=\"all-others-dialogs\"></div>\n            ";
                    itemData = panelFormPartGenerator_1.elementCreator({
                        tagname: "div",
                        classList: 'single-block-description dialog-panel-block',
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
                    blockSize = 50, defaultWidth = (window.innerWidth / blockSize).toFixed(), defaultHeight = (window.innerHeight / blockSize).toFixed(), maxHorizontalBlocks = 400, maxVerticalBlocks = 200;
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
                    if (!(this.yMove > 0 - this.height && this.xMove > 0 - this.width && this.yMove < window.innerHeight + this.height && this.xMove < window.innerWidth + this.width)) return [3 /*break*/, 4];
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
    if (this.yMove > 0 - this.height && this.xMove > 0 - this.width && this.yMove < window.innerHeight + this.height && this.xMove < window.innerWidth + this.width) {
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
                    if (blockDetails.renderType) {
                        innerText = "\n        <h1>Block size</h1>\n        <h3>Block width</h3>\n            <p>Size of block width in pixels</p>\n            <input type='number' min=\"1\" id=" + ('width-property-' + currentDescriptionId) + " value=" + ((target.width) ? target.width : 0) + " />\n            <button data-target='save-width-btn' class=\"main-btn\">Save width</button>\n\n            <h3>Block height</h3>\n            <p>Size of block height in pixels</p>\n            <input type='number' min=\"1\" id=" + ('height-property-' + currentDescriptionId) + " value=" + ((target.height) ? target.height : 0) + " />\n            <button data-target='save-height-btn' class=\"main-btn\">Save height</button>\n            ";
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
                    }
                    else {
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
                    }
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
                        innerText = "<h3>Require Object</h3>\n            <p>Require message, display object needs for this block to everything work fine\n            <span>computer_data</span>\n            <span>blue_card</span>\n            <span>green_card</span>\n            <span>yellow_card</span>\n            <span>red_card</span>\n            <span>power_cell</span>\n            <span>enemy_helmet</span>\n            <span>enemy_details</span>\n            <span>med_kit</span>\n            <span>laptop_with_data</span>\n            <span>tools_case</span>\n            <span>access_card</span>\n            <span>enemy_gun</span>\n            <span>plane_key</span>\n            <span>special_access</span>\n            <span>data_card</span>\n            <span>blue_crystal</span>\n            <span>red_crystal</span>\n            <span>green_crystal</span>\n            <span>yellow_crystal</span>\n            <span>electric_details</span>\n            <span>power_cube</span>\n            <span>power_cube</span>\n            <span>access_badge</span>\n            <span>ammunition</span>\n            <span>server_data</span>\n            </p>\n            <textarea type='text' id=" + ('require-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.require) ? blockDetails.rules.require : '') + "</textarea>\n            <button data-target='save-require-btn' class=\"main-btn\">Save Require Object</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'description-requireText-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                        localPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : 'computer-data.png';
                        mainPicture = (blockDetails.rules.objectPicture) ? blockDetails.rules.objectPicture : globalVariables_1.__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + localPicture;
                        innerText = "<h3>Contain Object</h3>\n            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level\n            <span>computer_data</span>\n            <span>blue_card</span>\n            <span>green_card</span>\n            <span>yellow_card</span>\n            <span>red_card</span>\n            <span>exit</span>  exit  - end the level\n            <span>power_cell</span>\n            <span>enemy_helmet</span>\n            <span>enemy_details</span>\n            <span>med_kit</span>\n            <span>laptop_with_data</span>\n            <span>tools_case</span>\n            <span>access_card</span>\n            <span>enemy_gun</span>\n            <span>plane_key</span>\n            <span>special_access</span>\n            <span>data_card</span>\n            <span>blue_crystal</span>\n            <span>red_crystal</span>\n            <span>green_crystal</span>\n            <span>yellow_crystal</span>\n            <span>electric_details</span>\n            <span>power_cube</span>\n            <span>power_cube</span>\n            <span>access_badge</span>\n            <span>ammunition</span>\n            <span>server_data</span>\n            </p>\n\n            <textarea type='text' id=" + ('contain-field-' + currentDescriptionId) + " >" + ((blockDetails.rules.contain) ? blockDetails.rules.contain : '') + "</textarea>\n            <img width=\"100\" id=" + ('contain-picture-' + currentDescriptionId) + "\n            src=\"" + mainPicture + "\">\n            <select id=\"preview-contain-object\" data-target='select-preview-btn'>\n                <option value=\"computer-data.png\">Computer data</option>\n                <option value=\"red-card.png\">Red card</option>\n                <option value=\"blue-card.png\">Blue card</option>\n                <option value=\"green-card.png\">Green card</option>\n                <option value=\"yellow-card.png\">Yellow card</option>\n                <option value=\"power-cell.png\">Power Cell</option>\n                <option value=\"med-kit.png\">Med kit</option>\n                <option value=\"laptop.png\">Laptop case</option>\n                <option value=\"tools-case.png\">Tools case</option>\n                <option value=\"Enemy-head.png\">Enemy helmet A</option>\n                <option value=\"enemy-details.png\">Enemy detail 1</option>\n                <option value=\"Access-card.png\">Acess card</option>\n                <option value=\"enemy-guns.png\">Enemy gun</option>\n                <option value=\"plane-key.png\">Plane key</option>\n                <option value=\"importent-data.png\">Importent data</option>\n                <option value=\"cube.png\">space box 1</option>\n                <option value=\"black-box-1.png\">box 2</option>\n                <option value=\"black-box-2.png\">box 3</option>\n                <option value=\"access-2.png\">access card 2</option>\n                <option value=\"blue-crystal.png\">blue crystal</option>\n                <option value=\"red-crystal.png\">red crystal</option>\n                <option value=\"green-crystal.png\">green crystal</option>\n                <option value=\"yellow-crystal.png\">yellow crystal</option>\n                <option value=\"block_details.png\">Details</option>\n            </select>\n            <button data-target='save-contain-btn' class=\"main-btn\">Save</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'description-requireText-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                        if (blockDetails.rules.targetId) {
                            innerText = "<h3>Teleport settings</h3>\n            <p>Set teleport target and id</p>\n            <lable>\n                <p>Id of this door side</p>\n                <input id=\"teleport-set-id-" + currentDescriptionId + "\" type=\"number\" min=\"1\" value=" + blockDetails.rules.doorId + ">\n            </lable>\n            <lable>\n                <p>Id of target door side</p>\n                <input id=\"teleport-target-set-id-" + currentDescriptionId + "\" type=\"number\" min=\"1\" value=" + blockDetails.rules.targetId + ">\n            </lable>\n            <button data-target='save-door-settings-btn' class=\"main-btn\">Save teleport door data</button> <hr>";
                            itemData = elementCreator({
                                tagname: "div",
                                classList: 'single-block-description',
                                innerText: innerText,
                                idName: 'teleport-settings-' + currentDescriptionId
                            });
                            fileContainer.appendChild(itemData);
                        }
                    }
                    if (blockDetails.type === "npc_spawner" || blockDetails.type === "enemy_spawner") {
                        innerText = "<h3>NPC default behavior</h3>\n        <p>Set Scenario name</p>\n        <span>destroy</span>\n        <span>find</span>\n        <span>stand</span>\n        <span>static</span>\n        <lable>\n            <textarea id=\"npc-behavior-id-" + currentDescriptionId + "\"  min=\"3\">" + ((target.details.behavior) ? target.details.behavior : '') + "</textarea>\n        </lable>\n\n        <button data-target='save-npc-behavior-btn' class=\"main-btn\">Save behavior</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'behavior-settings-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                    }
                    if (!blockDetails.dialog) return [3 /*break*/, 2];
                    innerText = "<h3>Task to Jornal</h3>\n        <p>Enter default task text that have been added to ship journal</p>\n        <lable>\n            <textarea id=\"npc-journal-task-id-" + currentDescriptionId + "\"  min=\"3\">" + ((target.details.dialog.default.journalTask) ? target.details.dialog.default.journalTask : '') + "</textarea>\n        </lable>\n        <lable>\n            <p>Default dialog when require object is set and add to journal</p>\n            <input id=\"default-request-dialog-id-" + currentDescriptionId + "\" type=\"number\" value=\"" + ((target.details.defaultRequestDialogId) ? target.details.defaultRequestDialogId : 0) + "\">\n        </lable>\n        <lable>\n            <p>Default dialog when task was completed</p>\n            <input id=\"default-success-dialog-id-" + currentDescriptionId + "\" type=\"number\" value=\"" + ((target.details.defaultSuccessDialogId) ? target.details.defaultSuccessDialogId : 0) + "\">\n        </lable>\n\n        <button data-target='save-npc-journal-task-btn' class=\"main-btn\">Save journal task</button> <hr>";
                    itemData = elementCreator({
                        tagname: "div",
                        classList: 'single-block-description',
                        innerText: innerText,
                        idName: 'journal-task-' + currentDescriptionId
                    });
                    fileContainer.appendChild(itemData);
                    return [4 /*yield*/, dialogFormModule_1.createDialogForm({ blockDetails: blockDetails, currentDescriptionId: currentDescriptionId, fileContainer: fileContainer })];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    if (blockDetails.innerObject) {
                        //console.log('inner object')
                    }
                    if (blockDetails.type === "scenario_object") {
                        innerText = "<h3>Scenario object name</h3>\n            <p>Set Scenario name</p>\n            <lable>\n                <p>Name</p>\n                <textarea id=\"scenario-object-name-id-" + currentDescriptionId + "\"  min=\"3\">" + blockDetails.objectName + "</textarea>\n            </lable>\n\n            <button data-target='save-scenario-object-name-btn' class=\"main-btn\">Save object name</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'object-name-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                    }
                    if (blockDetails.spawnSeconds) {
                        innerText = "<h3>Scenario object name</h3>\n            <p>Set Scenario name</p>\n            <lable>\n                <p>Spawn Seconds</p>\n                <input type=\"number\" id=\"spawn-seconds-id-" + currentDescriptionId + "\"  min=\"1\" value=" + ((blockDetails.spawnSeconds) ? blockDetails.spawnSeconds : 0) + " >\n            </lable>\n            <lable>\n                <p>Max Number Of Items</p>\n                <input type=\"number\" id=\"next-number-of-items-id-" + currentDescriptionId + "\"  min=\"1\" value=" + ((blockDetails.maxNumberOfItem) ? blockDetails.maxNumberOfItem : 0) + " >\n            </lable>\n            <button data-target='save-object-spawn-data-btn' class=\"main-btn\">Save spawn data</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'object-spawn-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                    }
                    if (blockDetails.spawnerHiddenId) {
                        innerText = "<h3>Set target spawner id</h3>\n        <lable>\n            <p>id of hidden spawner</p>\n            <input type=\"number\" id=\"hidden-spawner-id-" + currentDescriptionId + "\"  min=\"1\" value=" + ((blockDetails.spawnerHiddenId) ? blockDetails.spawnerHiddenId : 1) + " >\n        </lable>\n        <button data-target='save-hidden-spawn-id-btn' class=\"main-btn\">Save spawn hidden id</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'object-spawn-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                    }
                    if (blockDetails.targetSpawnerId) {
                        innerText = "<h3>Set spawn hidden id</h3>\n        <p>1, 2, 3 ....</p>\n        <lable>\n            <p>array of all target hidden spawner id</p>\n            <input type=\"text\" id=\"target-hidden-spawner-id-" + currentDescriptionId + "\"  min=\"1\" value=" + ((blockDetails.targetSpawnerId) ? blockDetails.targetSpawnerId : '1, 2') + " >\n        </lable>\n        <button data-target='save-target-hidden-spawn-id-btn' class=\"main-btn\">Save hidden spawner data</button> <hr>";
                        itemData = elementCreator({
                            tagname: "div",
                            classList: 'single-block-description',
                            innerText: innerText,
                            idName: 'object-spawn-' + currentDescriptionId
                        });
                        fileContainer.appendChild(itemData);
                    }
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
                                            case 'save-npc-behavior-btn': return [3 /*break*/, 23];
                                            case 'save-npc-journal-task-btn': return [3 /*break*/, 25];
                                            case 'save-dialog-btn': return [3 /*break*/, 29];
                                            case 'save-door-settings-btn': return [3 /*break*/, 32];
                                            case 'save-scenario-object-name-btn': return [3 /*break*/, 35];
                                            case 'save-object-spawn-data-btn': return [3 /*break*/, 37];
                                            case 'save-hidden-spawn-id-btn': return [3 /*break*/, 40];
                                            case 'save-target-hidden-spawn-id-btn': return [3 /*break*/, 42];
                                        }
                                        return [3 /*break*/, 44];
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
                                        return [3 /*break*/, 45];
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
                                        return [3 /*break*/, 45];
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
                                        return [3 /*break*/, 45];
                                    case 7: return [4 /*yield*/, changeDataInBlock({
                                            key: 'blockRelativeXPos',
                                            fieldSelector: '#x-pos-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 8:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        console.log(target);
                                        return [3 /*break*/, 45];
                                    case 9: return [4 /*yield*/, changeDataInBlock({
                                            key: 'blockRelativeYPos',
                                            fieldSelector: '#y-pos-property-' + currentDescriptionId,
                                            target: target
                                        })];
                                    case 10:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'width is set' : ' save width field';
                                        console.log(target);
                                        return [3 /*break*/, 45];
                                    case 11: return [4 /*yield*/, changeDataInBlock({
                                            key: 'description',
                                            fieldSelector: '#description-field-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 12:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'description field' : ' save description field';
                                        return [3 /*break*/, 45];
                                    case 13: return [4 /*yield*/, changeDataInBlock({
                                            key: 'tips',
                                            fieldSelector: '#tips-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 14:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'tips field' : ' save tips field';
                                        return [3 /*break*/, 45];
                                    case 15: return [4 /*yield*/, changeDataInBlock({
                                            key: 'successText',
                                            fieldSelector: '#successText-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 16:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'description field' : ' save description field';
                                        return [3 /*break*/, 45];
                                    case 17: return [4 /*yield*/, changeDataInBlock({
                                            key: 'requireText',
                                            fieldSelector: '#requireText-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 18:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'require text field' : ' save require text field';
                                        return [3 /*break*/, 45];
                                    case 19: return [4 /*yield*/, changeDataInBlock({
                                            key: 'require',
                                            fieldSelector: '#require-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 20:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'require field' : ' save require field';
                                        return [3 /*break*/, 45];
                                    case 21: return [4 /*yield*/, changeDataInBlock({
                                            key: 'contain',
                                            fieldSelector: '#contain-field-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 22:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        return [3 /*break*/, 45];
                                    case 23: return [4 /*yield*/, changeDataInBlock({
                                            key: 'behavior',
                                            fieldSelector: '#npc-behavior-id-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 24:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        return [3 /*break*/, 45];
                                    case 25: return [4 /*yield*/, changeDataInBlock({
                                            key: 'journalTask',
                                            fieldSelector: '#npc-journal-task-id-' + currentDescriptionId,
                                            target: target.details.dialog.default
                                        })
                                        // default-request-dialog-id-
                                    ];
                                    case 26:
                                        fieldResults = _b.sent();
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'defaultRequestDialogId',
                                                fieldSelector: '#default-request-dialog-id-' + currentDescriptionId,
                                                target: target.details
                                            })];
                                    case 27:
                                        // default-request-dialog-id-
                                        fieldResults = _b.sent();
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'defaultSuccessDialogId',
                                                fieldSelector: '#default-success-dialog-id-' + currentDescriptionId,
                                                target: target.details
                                            })];
                                    case 28:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        return [3 /*break*/, 45];
                                    case 29: return [4 /*yield*/, changeDataInBlock({
                                            key: 'contain',
                                            fieldSelector: '#contain-field-' + currentDescriptionId,
                                            target: target.details.dialog.default
                                        })];
                                    case 30:
                                        fieldResults = _b.sent();
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'name',
                                                fieldSelector: '#npc-name',
                                                target: target.details.dialog.default
                                            })];
                                    case 31:
                                        fieldResults = _b.sent();
                                        fieldName = (fieldResults) ? 'contain object' : ' save contain object';
                                        return [3 /*break*/, 45];
                                    case 32: return [4 /*yield*/, changeDataInBlock({
                                            key: 'doorId',
                                            fieldSelector: '#teleport-set-id-' + currentDescriptionId,
                                            target: target.details.rules
                                        })];
                                    case 33:
                                        fieldResults = _b.sent();
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'targetId',
                                                fieldSelector: '#teleport-target-set-id-' + currentDescriptionId,
                                                target: target.details.rules
                                            })];
                                    case 34:
                                        fieldResults = _b.sent();
                                        return [3 /*break*/, 45];
                                    case 35: return [4 /*yield*/, changeDataInBlock({
                                            key: 'objectName',
                                            fieldSelector: '#scenario-object-name-id-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 36:
                                        fieldResults = _b.sent();
                                        return [3 /*break*/, 45];
                                    case 37: return [4 /*yield*/, changeDataInBlock({
                                            key: 'spawnSeconds',
                                            fieldSelector: '#spawn-seconds-id-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 38:
                                        fieldResults = _b.sent();
                                        return [4 /*yield*/, changeDataInBlock({
                                                key: 'maxNumberOfItem',
                                                fieldSelector: '#next-number-of-items-id-' + currentDescriptionId,
                                                target: target.details
                                            })];
                                    case 39:
                                        fieldResults = _b.sent();
                                        return [3 /*break*/, 45];
                                    case 40: return [4 /*yield*/, changeDataInBlock({
                                            key: 'spawnerHiddenId',
                                            fieldSelector: '#hidden-spawner-id-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 41:
                                        fieldResults = _b.sent();
                                        return [3 /*break*/, 45];
                                    case 42: return [4 /*yield*/, changeDataInBlock({
                                            key: 'targetSpawnerId',
                                            fieldSelector: '#target-hidden-spawner-id-' + currentDescriptionId,
                                            target: target.details
                                        })];
                                    case 43:
                                        fieldResults = _b.sent();
                                        return [3 /*break*/, 45];
                                    case 44: return [2 /*return*/, false];
                                    case 45:
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
                                    messageField.innerHTML = "<p>Save time: " + (saveData.getHours() - 1) + " : " + saveData.getMinutes() + " : " + saveData.getSeconds() + "</p>\n                <p>Size: " + mapFile.fileSize + "</p>\n                <a href=" + mapFile.url + " onclick=\"(function(){ window.open('" + mapFile.url + "')})()\" target=\"_blank\">Open in new window</a>";
                                }
                                console.log(mapFile);
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
        switch (true) {
            case (event.keyCode == 87 || event.keyCode == 38):
                yMoveValue = mainObject.mapMoveSpeed;
                break;
            case (event.keyCode == 68 || event.keyCode == 39):
                xMoveValue = mainObject.mapMoveSpeed * -1;
                break;
            case (event.keyCode == 83 || event.keyCode == 40):
                yMoveValue = mainObject.mapMoveSpeed * -1;
                break;
            case (event.keyCode == 65 || event.keyCode == 37):
                xMoveValue = mainObject.mapMoveSpeed;
                break;
            case event.keyCode == 77:
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
    target.prepend(createCopyBlock({ mainObject: mainObject, selectItem: selectItem }));
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
exports.sidePanelItemsSelectProcess = sidePanelItemsSelectProcess;
function createDestroyBlock(_a) {
    var mainObject = _a.mainObject, selectItem = _a.selectItem;
    var obj = document.createElement('div');
    obj.className = 'single-block-item destroy-block-wrapper';
    obj.innerHTML = "<img title=\"Copy selected object\" width=\"100%\" src='" + (globalVariable.__HOST + '/level-creator/assets/block/destroy.png') + "'>";
    obj.addEventListener('click', function (event) {
        sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: {
                id: 'destroyer',
                destroyer: 'destroyer',
                texture: '/level-creator/assets/block/destroy.png'
            } });
    });
    return obj;
}
function createCopyBlock(_a) {
    var mainObject = _a.mainObject, selectItem = _a.selectItem;
    var obj = document.createElement('div');
    obj.className = 'single-block-item copy-block-wrapper';
    obj.innerHTML = "<img title=\"Copy selected object\" width=\"100%\" src='" + (globalVariable.__HOST + '/level-creator/assets/block/copy-block.png') + "'>";
    obj.addEventListener('click', function (event) {
        sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: {
                id: 'copy',
                copyBlock: 'copy-block',
                texture: '/level-creator/assets/block/copy-block.png'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja0ludGVyYWN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9ibG9ja3NGdW5jdGlvbmFsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9kaWFsb2dGb3JtTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRhY3Rvci9nbG9iYWxWYXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGFjdG9yL2luaXRTdGFydE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3IvcGFuZWxGb3JtUGFydEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy91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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDhFQUE4RSx1R0FBdUc7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL3NlcnZlci9wdWJsaWMvbGV2ZWwtY3JlYXRvci9kaXN0LXNjcmlwdHNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuY2FudmFzIHtcXG4gICAgYmFja2dyb3VuZDogIzAwNTM0YjsgfVxcblxcbi5zaWRlLW1lbnUtd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6ICNiYmJiYmI7XFxuICAgIGhlaWdodDogOTZ2aDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuXFxuLmdhbWUtZmllbGQtd3JhcHBlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3R0b206IDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLm1haW4tYmFubmVyLWNvdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogMTAwOyB9XFxuXFxuKiB7XFxuICAgIGNvbG9yOiAjMjIxODI4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IH1cXG5cXG5sZWdlbmQgaDMge1xcbiAgICBtYXJnaW46IDBweDsgfVxcblxcbmxhYmVsIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA5MSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiAwcHg7IH1cXG5cXG4uc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG1heC1oZWlnaHQ6IDg1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICAuc2lkZS1pbnN0cnVtZW50YWwtcGFuZWwgaW1nIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDU0cHg7IH1cXG5cXG4uc2VsZWN0ZWQtaXRlbS1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG4gICAgLnNlbGVjdGVkLWl0ZW0tcHJldmlldyBpbWcge1xcbiAgICAgICAgd2lkdGg6IDYwcHg7IH1cXG5cXG4uaW5uZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogODV2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICByaWdodDogMDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgaHIge1xcbiAgICAgICAgY29sb3I6ICNlYWVhZWE7IH1cXG4gICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIC5pbm5lci1jb250ZW50IC5zaW5nbGUtaXRlbS13cmFwcGVyOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZDQyNjM7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmlubmVyLWNvbnRlbnQgLnNpbmdsZS1pdGVtLXdyYXBwZXI6aG92ZXIgaDIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWdhcDogMjBweDsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBjb2xvcjogIzcxNTE4NDsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gaW5wdXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7IH1cXG4gICAgICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAuc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHNwYW4ge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNhNjFiZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxuICAgICAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnNpbmdsZS1ibG9jay1kZXNjcmlwdGlvbiAuYnV0dG9uLXJlamVjdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2FkMDAwMDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmOyB9XFxuICAgICAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gLmJ1dHRvbi1yZWplY3QgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWMxNzIyO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXIgLnF1ZXN0aW9uLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmlubmVyLWRlc2NyaXB0aW9uLWZpZWxkcy13cmFwcGVyIC5xdWVzdGlvbi13cmFwcGVyIHAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgIC5pbm5lci1kZXNjcmlwdGlvbi1maWVsZHMtd3JhcHBlciAucmVxdWlyZW1lbnQtaXRlbS13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uYWN0aXZlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk2MWU7IH1cXG5cXG4ucmlnaHQtc2lkZS1idXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uc2lkZS1wYW5lbC1zdWNjZXNzIHtcXG4gICAgY29sb3I6ICM1Mzk3MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Mzk3MDA7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbi5zaWRlLXBhbmVsLWVycm9yIHtcXG4gICAgY29sb3I6ICNiMTAwMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMTAwMDA7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbi5ibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAgIC5ibG9jay1kZXNjcmlwdGlvbi13cmFwcGVyIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNDYlOyB9XFxuICAgIC5zaW5nbGUtYmxvY2stZGVzY3JpcHRpb24gdGV4dGFyZWEge1xcbiAgICAgICAgd2lkdGg6IDk2JTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2JiYjsgfVxcblxcbi5hbGwtb3RoZXJzLWRpYWxvZ3Mge1xcbiAgICBiYWNrZ3JvdW5kOiAjODI2ZDZkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7IH1cXG4gICAgLmFsbC1vdGhlcnMtZGlhbG9ncyBoNCB7XFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuYWxsLW90aGVycy1kaWFsb2dzIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ucmVsYXRlZC1pZC1maWVsZCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgbWFyZ2luOiAyNHB4OyB9XFxuXFxuLmNsb3NlLWRpYWxvZyB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwJTsgfVxcblxcbi5jbG9zZS1kaWFsb2c6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIENsb3NlJzsgfVxcblxcbi5tYWluLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmIzMDA7XFxuICAgIGJvcmRlcjogbmF2YWpvd2hpdGU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMxNTQ3YTY0ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyOyB9XFxuXFxuLm1haW4tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZWRjMzsgfVxcblxcbi5tYWluLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYxZTAwOyB9XFxuXFxuLm1hdGVyaWFsLXByZXZpZXctd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJ1dHRvbi1yZWplY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjYWQwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmOyB9XFxuXFxuLmRlc3Ryb3ktYmxvY2std3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDMxcHg7XFxuICAgIGJvdHRvbTogNTlweDsgfVxcblxcbi5jb3B5LWJsb2NrLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAzMXB4O1xcbiAgICBib3R0b206IDA7IH1cXG5cXG4uY29udGFpbmVyIGgxLCAuY29udGFpbmVyIHAge1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5kaWFsb2ctcGFuZWwtYmxvY2sge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9tYWluLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgYmxvY2tJbnRlcmFjdE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrSW50ZXJhY3RNb2R1bGVcIik7XHJcbnZhciBibG9ja3NGdW5jdGlvbmFsaXR5XzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tzRnVuY3Rpb25hbGl0eVwiKTtcclxudmFyIEJsb2NrQ29uc3RydWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCbG9ja0NvbnN0cnVjdG9yKF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLnggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdE1hcFggPSBkYXRhLng7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TWFwWSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnhNb3ZlID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueU1vdmUgPSBkYXRhLnk7XHJcbiAgICAgICAgdGhpcy5ibG9ja1JlbGF0aXZlWFBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1JlbGF0aXZlWVBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gZGF0YS5pbmRleDtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSAoZGF0YS5kZXRhaWxzKSA/IGRhdGEuZGV0YWlscyA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gKGRhdGEuaW1hZ2VXaWR0aCkgPyBkYXRhLmltYWdlV2lkdGggOiBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSAoZGF0YS5pbWFnZUhlaWdodCkgPyBkYXRhLmltYWdlSGVpZ2h0IDogZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpZXdUZXh0dXJlID0gKGRhdGEucHJldmlld1RleHR1cmUpID8gZGF0YS5wcmV2aWV3VGV4dHVyZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIHRoaXMuc3kgPSAwO1xyXG4gICAgICAgIHRoaXMucGljdHVyZXNXaWR0aCA9IGRhdGEuaW1hZ2VXaWR0aDtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBCbG9ja0NvbnN0cnVjdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkJsb2NrQ29uc3RydWN0b3IgPSBCbG9ja0NvbnN0cnVjdG9yO1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW5kZXJCbG9ja0JveCA9IGluaXRTdGFydE9iamVjdF8xLnJlbmRlckJsb2NrQm94O1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5tb3ZlU2luZ2xlQmxvY2sgPSBibG9ja0ludGVyYWN0TW9kdWxlXzEubW92ZVNpbmdsZUJsb2NrO1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5lbGV2YXRvck1vdmUgPSBibG9ja3NGdW5jdGlvbmFsaXR5XzEuZWxldmF0b3JNb3ZlO1xyXG5CbG9ja0NvbnN0cnVjdG9yLnByb3RvdHlwZS5ibG9ja0FuaW1hdGlvbnMgPSBibG9ja3NGdW5jdGlvbmFsaXR5XzEuYmxvY2tBbmltYXRpb25zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS92aWV3XCIpO1xyXG52YXIgTWFpbkdhbWVDb25zdHJ1Y3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1haW5HYW1lQ29uc3RydWN0b3IoX2EpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9fcmVzdChfYSwgW10pO1xyXG4gICAgICAgIHRoaXMubWFwTW92ZVNwZWVkID0gZGF0YS5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5tYXBXaWR0aCA9IGRhdGEubWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5tYXBIZWlnaHQgPSBkYXRhLm1hcEhlaWdodDtcclxuICAgICAgICB0aGlzLm1hcERlZmF1bHRXaWR0aCA9IGRhdGEubWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5tYXBEZWZhdWx0SGVpZ2h0ID0gZGF0YS5tYXBIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hbGxSZWRhY3RvckJsb2NrID0gZGF0YS5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZERhdGFiYXNlID0gZGF0YS5iYWNrZ3JvdW5kRGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy5ibG9ja0RhdGFiYXNlID0gKGRhdGEuYmxvY2tEYXRhYmFzZSkgPyBkYXRhLmJsb2NrRGF0YWJhc2UgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyc0RhdGFiYXNlID0gKGRhdGEuY2hhcmFjdGVyc0RhdGFiYXNlKSA/IGRhdGEuY2hhcmFjdGVyc0RhdGFiYXNlIDogbnVsbDtcclxuICAgICAgICB0aGlzLmVuZW15RGF0YWJhc2UgPSAoZGF0YS5lbmVteURhdGFiYXNlKSA/IGRhdGEuZW5lbXlEYXRhYmFzZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBkYXRhLmJsb2NrU2l6ZTtcclxuICAgICAgICB0aGlzLm1heEhvcml6b250YWxCbG9ja3MgPSBkYXRhLm1heEhvcml6b250YWxCbG9ja3M7XHJcbiAgICAgICAgdGhpcy5tYXhWZXJ0aWNhbEJsb2NrcyA9IGRhdGEubWF4VmVydGljYWxCbG9ja3M7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluaU1hcEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1haW5HYW1lQ29uc3RydWN0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWFpbkdhbWVDb25zdHJ1Y3RvciA9IE1haW5HYW1lQ29uc3RydWN0b3I7XHJcbk1haW5HYW1lQ29uc3RydWN0b3IucHJvdG90eXBlLmluaXRWaWV3ID0gdmlld18xLmluaXRWaWV3O1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jbGVhclZpZXcgPSB2aWV3XzEuY2xlYXJWaWV3O1xyXG5NYWluR2FtZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW5kZXJJdGVtc1RvU2lkZUxpc3QgPSB2aWV3XzEucmVuZGVySXRlbXNUb1NpZGVMaXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4uL3Nhc3MvbWFpbi5zYXNzXCIpO1xyXG52YXIgcmVuZGVyQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdG9ycy9yZW5kZXJDb25zdHJ1Y3RvclwiKTtcclxudmFyIGJsb2NrQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdG9ycy9ibG9ja0NvbnN0cnVjdG9yXCIpO1xyXG52YXIgdmlld18xID0gcmVxdWlyZShcIi4vdWkvdmlld1wiKTtcclxudmFyIGluaXRTdGFydE9iamVjdF8xID0gcmVxdWlyZShcIi4vcmVkYWN0b3IvaW5pdFN0YXJ0T2JqZWN0XCIpO1xyXG52YXIgc2lkZVBhbmVsQWN0aW9uc18xID0gcmVxdWlyZShcIi4vcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9uc1wiKTtcclxuLypcclxuVi0gY3JlYXRlIG1hcCBuZXRcclxuICAgIFYtIHZlcnRpY2FsIGRpcmVjdGlvbiBvZiBibG9ja1xyXG4gICAgVi0gZGVzdHJveSBzb21lIGJsb2Nrc1xyXG4gICAgVi0gYmxvY2sgaW5mb3JtYXRpb25cclxuICAgICAgICBWIC0gZGVsZXRlIGJsb2NrXHJcbiAgICAgICAgVi0gcHJldmlld1xyXG4gICAgICAgIFYtIGluZm9ybWF0aW9uXHJcbiAgICAgICAgVi0gY2hhbmdlIGRhdGFcclxuICAgICAgICAgICAgVi0gd2lkdGhcclxuICAgICAgICAgICAgVi0gaGVpZ2h0XHJcbiAgICAgICAgICAgIFYtIHhcclxuICAgICAgICAgICAgVi0geVxyXG4gICAgICAgICAgICBWLSBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBWLSBydWxlcnNcclxuICAgICAgICAgICAgVi0gZWxldmF0b3Igc3BlZWRcclxuVi0gc2lkZSBwYW5lbFxyXG4gICAgVi0gbmV3IG1hcFxyXG4gICAgICAgIFYtIG1hcCBuYW1lXHJcbiAgICAgICAgVi0gc2F2ZSBtYXAgaW4ganNvblxyXG4gICAgICAgIFYtIGNoYW5nZSBtYXAgc2l6ZVxyXG4gICAgICAgIFYtIG92ZXJ3cml0ZSBtYXBcclxuICAgIFYtIGxvYWQgbWFwXHJcbiAgICBWLSBtaW5pbWFwXHJcbiAgICBWLSBkaWZmZXJlbnQgc2VjdGlvbnMgb2Ygb2JqZWN0c1xyXG4gICAgICAgIFYtIGJsb2NrXHJcbiAgICAgICAgVi0gY2hhcmFjdGVyc1xyXG4gICAgICAgIFYtIGVuZW15XHJcbiAgICAgICAgVi0gYmFja2dyb3VuZFxyXG4gICAgICAgIFYtIGR5bmFtaWMgc3Bhd25cclxuXHJcblxyXG5WLSBhZGQgc3RhaXJzXHJcblYtIGFkZCBsZWFkZXJzXHJcblYtIGRvb3JzXHJcbiAgIFYgLSBkb29ycyBhY2Nlc3MgY2FyZFxyXG5WLSBhZGQgaG9yaXpvbnRhbCBlbGV2YXRvclxyXG5WLSBhZGQgYmFja2dyb3VuZCB0ZXh0dXJlIGFuZCBkaXNwbGF5IGl0XHJcbiAgICBWLSBkZXN0cm95LyBjaGFuZ2UgdGV4dHVyZXMgc2VwYXJhdGVseVxyXG4gICAgVi0gYWRkIHRleHR1cmUgYW5pbWF0aW9uc1xyXG5WLSBhZGQgTlBDXHJcbiAgIFYgLSBkaWFsb2dcclxuICAgICAgICAtIDcgLSA4IGxldmVsc1xyXG4gICAgICAgICAgICAtIHN0YXJ0IGJhc2UgYmFzZVxyXG4gICAgICAgICAgICAgICAgLSBmaW5kIHNoaXBcclxuICAgICAgICAgICAgLSBjb21tYW5kIGNlbnRlclxyXG4gICAgICAgICAgICAgICAgLSBnZXQgaW1wb3J0ZW5kIGRhdGFcclxuICAgICAgICAgICAgICAgIC0gdXJuIG9uIGRlZmVuY2Ugc3lzdGVtXHJcbiAgICAgICAgICAgIC0gZGVzZXJ0IGFyY2hlb2xvZ2ljYWwgZXhjYXZhdGlvbnNcclxuICAgICAgICAgICAgICAgIC0gZmluZCBhbmNpZW50IGFydGlmYWN0XHJcbiAgICAgICAgICAgIC0gc2t5IGNpdHlcclxuICAgICAgICAgICAgICAgIC0gdGFsayB3aXRoIGNvbW1hbmRlciBhbmQgc2NpZW50aXN0XHJcbiAgICAgICAgICAgICAgICAtIGdldCBpbXBvcnRlbmQgZGF0YVxyXG4gICAgICAgICAgICAtIG1vb24gYmFzZVxyXG4gICAgICAgICAgICAgICAgLSBmaXhlZCB0cmFuc3BvcnRhdGlvbiBnYXRlIGNlbnRlclxyXG4gICAgICAgICAgICAgICAgLSByZXNjdWUgZmFjaWxpdHkgcGVyc29uYWxcclxuICAgICAgICAgICAgLSB2ZW51c1xyXG4gICAgICAgICAgICAgICAgLSBzYXZlIHBsYXRmb3JtXHJcbiAgICAgICAgICAgICAgICAtIHJlcGFyZSBzdGF0aW9uXHJcbiAgICAgICAgICAgICAgICAtIGFjdGl2ZXRlIGRlZmVuY2Ugc3lzdGVtXHJcbiAgICAgICAgICAgICAgICAtIHJlY2hhcmdlIHlvdSBzaGlwXHJcbiAgICAgICAgICAgIC0gbWFyc1xyXG4gICAgICAgICAgICAgICAgLSBhY3RpdmF0ZSB0cmFja2luZyBzeXN0ZW1cclxuICAgICAgICAgICAgICAgIC0gdHJhY2Ugb2YgZW5lbXlcclxuICAgICAgICAgICAgICAgIC0gYWN0aXZhdGUgdHJhbnNwb3RydCBzeXN0ZW1cclxuXHJcbiAgICAgICAgICAgIC0gSnVwaXRlciA/XHJcbiAgICAgICAgICAgICAgICAtIDBHXHJcbiAgICAgICAgICAgICAgICAtIHNwYWNlU3RhdGlvbiBJb1xyXG5cclxuXHJcbiovXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVkYWN0b3JFbmdpbmUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfaSwgX2EsIGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5jbGVhclZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gMCwgX2EgPSBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgX2EubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGJsb2NrLnhNb3ZlID4gMCAtIGJsb2NrLndpZHRoICYmIGJsb2NrLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggKyBibG9jay53aWR0aCAmJiBibG9jay55TW92ZSA+IDAgLSBibG9jay5oZWlnaHQgJiYgYmxvY2sueU1vdmUgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyBibG9jay5oZWlnaHQpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrLnJlbmRlckJsb2NrQm94KHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJsb2NrLmVsZXZhdG9yTW92ZSgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdFN0YXJ0T2JqZWN0XzEuYmxvY2tBbmltYXRpb25SZW5kZXIoeyBibG9jazogYmxvY2sgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluT2JqZWN0LCBlbmdpbmU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRTdGFydE9iamVjdF8xLmluaXRNYWluRW5naW5lKHsgTWFpbkdhbWVDb25zdHJ1Y3RvcjogcmVuZGVyQ29uc3RydWN0b3JfMS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmluaXRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5yZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkYWN0b3JFbmdpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5tYXBNb3ZlQ29udHJvbGxlcnMoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVQYW5lbEFjdGlvbnNfMS5zYXZlTWFwKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEubG9hZE1hcCh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsQWN0aW9uc18xLnNldE1hcFNpemUoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBCbG9ja0NvbnN0cnVjdG9yOiBibG9ja0NvbnN0cnVjdG9yXzEuQmxvY2tDb25zdHJ1Y3RvciB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlUGFuZWxBY3Rpb25zXzEuY3JlYXRlTmV3TWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS9wcmV2aWV3XCIpO1xyXG52YXIgcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vcGFuZWxGb3JtUGFydEdlbmVyYXRvclwiKTtcclxuZnVuY3Rpb24gb3BlblJlZGFjdG9yV2luZG93KF9hKSB7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0gX2EuYmxvY2tEYXRhLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZWN0RmlsZXMsIGZpbGVDb250YWluZXIsIGNsb3NlRGlhbG9nLCBnZW5lcmF0ZWRBcmVhLCBhbGxCbG9ja3MsIGlubmVyRGVzY3JpcHRpb25BcmVhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gfHwgIWJsb2NrRGF0YS5kZXRhaWxzIHx8IG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZEFyZWEgPSBwYW5lbEZvcm1QYXJ0R2VuZXJhdG9yXzEuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnaW5uZXItZGVzY3JpcHRpb24tZmllbGRzLXdyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdpbm5lci1kZXNjcmlwdGlvbi1hcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkQXJlYSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWRlc2NyaXB0aW9uLWFyZWFcIildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRGVzY3JpcHRpb25BcmVhID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5sb2FkSW5uZXJEYXRhKHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMS5nZW5lcmF0ZUlucHV0KHsgZmlsZUNvbnRhaW5lcjogaW5uZXJEZXNjcmlwdGlvbkFyZWEsIHRhcmdldDogYmxvY2tEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5vcGVuUmVkYWN0b3JXaW5kb3cgPSBvcGVuUmVkYWN0b3JXaW5kb3c7XHJcbmZ1bmN0aW9uIHBvc2l0aW9uUmVkdWNlcihfYSkge1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IF9hLmFsbEJsb2NrcztcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhbGxCbG9ja3NfMSA9IGFsbEJsb2NrczsgX2kgPCBhbGxCbG9ja3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBhbGxCbG9ja3NfMVtfaV07XHJcbiAgICAgICAgYmxvY2sueE1vdmUgPSBibG9jay54O1xyXG4gICAgICAgIGJsb2NrLnlNb3ZlID0gYmxvY2sueTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBvc2l0aW9uUmVkdWNlciA9IHBvc2l0aW9uUmVkdWNlcjtcclxuZnVuY3Rpb24gY2hhbmdlQmxvY2tBcnJheVNpemUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZm9ybURhdGEgPSBfYS5mb3JtRGF0YSwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtc2l6ZS1lcnJvcicpO1xyXG4gICAgdmFyIHdpZHRoU2V0ID0gZm9ybURhdGEuaG9yaXpvbnRhbEJsb2NrO1xyXG4gICAgdmFyIGhlaWdodFNldCA9IGZvcm1EYXRhLnZlcnRpY2FsQmxvY2s7XHJcbiAgICB2YXIgY3VycmVudFdpZHRoID0gbWFpbk9iamVjdC5tYXBXaWR0aDtcclxuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQ7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIHZlcnRpY2FsUmFuZ2UgPSBoZWlnaHRTZXQgLSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgdmFyIHZlcnRpY2FsQ29tcGVuc2F0aW9uID0gdmVydGljYWxSYW5nZTtcclxuICAgIHZhciBuZXdSZWJ1aWxkQmxvY2tNYXAgPSBbXTtcclxuICAgIHZhciBvbGRYUmFuZ2UgPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgb2xkWVJhbmdlID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgLy9lcnJvckZpZWxkLmlubmVySFRNTCA9IGA8cCBjbGFzcz0nc2lkZS1wYW5lbC1lcnJvcic+UGxlYXNlIHdhaXQgbWFwIGlzIGJ1aWxkLi4uPC9wPmA7XHJcbiAgICBwb3NpdGlvblJlZHVjZXIoeyBhbGxCbG9ja3M6IGFsbEJsb2NrcyB9KTtcclxuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdpZHRoU2V0OyBjb2wrKykge1xyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gPSAwOyBpdGVtIDwgaGVpZ2h0U2V0OyBpdGVtKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gKGNvbCA9PSAwKSA/IGl0ZW0gOiAoY29sICogY3VycmVudEhlaWdodCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgbmV3QmxvY2tzQXJyYXlJbmRleCA9IChjb2wgPT0gMCkgPyBpdGVtIDogKGNvbCAqIGhlaWdodFNldCkgKyBpdGVtO1xyXG4gICAgICAgICAgICB2YXIgb2xkQmxvY2tzQXJyYXlJbmRleCA9IChpdGVtIDwgY3VycmVudEhlaWdodCkgPyBhbGxCbG9ja3Nbcm93SW5kZXhdIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG9sZEJsb2Nrc0FycmF5SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9sZEJsb2Nrc0FycmF5SW5kZXguaW5kZXggPSBuZXdCbG9ja3NBcnJheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbmV3UmVidWlsZEJsb2NrTWFwID0gbmV3UmVidWlsZEJsb2NrTWFwLmNvbmNhdChvbGRCbG9ja3NBcnJheUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlYnVpbGRCbG9ja01hcCA9IG5ld1JlYnVpbGRCbG9ja01hcC5jb25jYXQoY3JlYXRlU2luZ2xlTWFwQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmplY3Q6IG1haW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tDb25zdHJ1Y3RvcjogQmxvY2tDb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogbmV3QmxvY2tzQXJyYXlJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjb2wgKiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBpdGVtICogbWFpbk9iamVjdC5ibG9ja1NpemUgLy8gKyBvbGRZUmFuZ2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcnRpY2FsQ29tcGVuc2F0aW9uICs9IHZlcnRpY2FsUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBtYWluT2JqZWN0Lm1hcFdpZHRoID0gd2lkdGhTZXQ7XHJcbiAgICBtYWluT2JqZWN0Lm1hcEhlaWdodCA9IGhlaWdodFNldDtcclxuICAgIG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jayA9IG5ld1JlYnVpbGRCbG9ja01hcDtcclxuICAgIHZhciBzaG93ID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrLmZpbmQoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uaW5kZXggPT0gMTAxMTsgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzaG93LCBcInNob3cgcmVzaXplXCIpO1xyXG4gICAgY29uc29sZS5sb2cobWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrWzBdKTtcclxufVxyXG5leHBvcnRzLmNoYW5nZUJsb2NrQXJyYXlTaXplID0gY2hhbmdlQmxvY2tBcnJheVNpemU7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZU1hcEJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIEJsb2NrQ29uc3RydWN0b3IgPSBfYS5CbG9ja0NvbnN0cnVjdG9yLCBpbmRleCA9IF9hLmluZGV4LCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICB2YXIgYmxvY2tEYXRhID0ge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgICB3aWR0aDogbWFpbk9iamVjdC5ibG9ja1NpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0LmJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogaW5kZXhcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpO1xyXG59XHJcbmZ1bmN0aW9uIG1pbmlNYXBwZXIoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIHZhciBzZWxlY3RGaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWZpbGVzXCIpO1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lubmVyLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICB2YXIgY2FtZXJhUG9zaXRpb25ZID0gYWxsQmxvY2tzWzBdLnlNb3ZlO1xyXG4gICAgbWFpbk9iamVjdC5taW5pTWFwQWN0aXZlID0gdHJ1ZTtcclxuICAgIHZhciBtYXBTaXplID0gNTAgLyAzO1xyXG4gICAgZmlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHZhciBuZXdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBtYXBTaXplV2lkdGggPSBtYWluT2JqZWN0Lm1hcFdpZHRoICogMztcclxuICAgIHZhciBtYXBTaXplSGVpZ2h0ID0gbWFpbk9iamVjdC5tYXBIZWlnaHQgKiAzO1xyXG4gICAgbmV3TWFwWyd3aWR0aCddID0gbWFwU2l6ZVdpZHRoO1xyXG4gICAgbmV3TWFwWydoZWlnaHQnXSA9IG1hcFNpemVIZWlnaHQ7XHJcbiAgICB2YXIgbWluaU1hcEN0eCA9IG5ld01hcC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNYXApO1xyXG4gICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgY3R4OiBtaW5pTWFwQ3R4LFxyXG4gICAgICAgIGFsbEJsb2NrczogYWxsQmxvY2tzLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWTogY2FtZXJhUG9zaXRpb25ZLFxyXG4gICAgICAgIG1hcFNpemU6IG1hcFNpemUsXHJcbiAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgbWFwU2l6ZUhlaWdodDogbWFwU2l6ZUhlaWdodFxyXG4gICAgfSk7XHJcbiAgICBwcmV2aWV3XzEuc2hvd0VsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSBhbGxCbG9ja3NbMF0ueE1vdmU7XHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IGFsbEJsb2Nrc1swXS55TW92ZTtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wydub2RlTmFtZSddID09PSAnQ0FOVkFTJykge1xyXG4gICAgICAgICAgICB2YXIgcG9zWCA9IGV2ZW50WydjbGllbnRYJ10gLSBldmVudC50YXJnZXRbJ29mZnNldExlZnQnXTtcclxuICAgICAgICAgICAgdmFyIHBvc1kgPSBldmVudFsnY2xpZW50WSddIC0gZXZlbnQudGFyZ2V0WydvZmZzZXRUb3AnXTtcclxuICAgICAgICAgICAgc2V0TWFwQXNDbGljayh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHg6IHBvc1ggKiBtYXBTaXplLCB5OiBwb3NZICogbWFwU2l6ZSB9KTtcclxuICAgICAgICAgICAgbWFwT2JqZWN0RHJhdyh7XHJcbiAgICAgICAgICAgICAgICBjdHg6IG1pbmlNYXBDdHgsXHJcbiAgICAgICAgICAgICAgICBhbGxCbG9ja3M6IGFsbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uWDogY2FtZXJhUG9zaXRpb25YLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25ZOiBjYW1lcmFQb3NpdGlvblksXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplOiBtYXBTaXplLFxyXG4gICAgICAgICAgICAgICAgbWFwU2l6ZVdpZHRoOiBtYXBTaXplV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBtYXBTaXplSGVpZ2h0OiBtYXBTaXplSGVpZ2h0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5PYmplY3QubWluaU1hcEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5taW5pTWFwcGVyID0gbWluaU1hcHBlcjtcclxuZnVuY3Rpb24gbWFwT2JqZWN0RHJhdyhfYSkge1xyXG4gICAgdmFyIGN0eCA9IF9hLmN0eCwgYWxsQmxvY2tzID0gX2EuYWxsQmxvY2tzLCBjYW1lcmFQb3NpdGlvblkgPSBfYS5jYW1lcmFQb3NpdGlvblksIGNhbWVyYVBvc2l0aW9uWCA9IF9hLmNhbWVyYVBvc2l0aW9uWCwgbWFwU2l6ZSA9IF9hLm1hcFNpemUsIG1hcFNpemVXaWR0aCA9IF9hLm1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCA9IF9hLm1hcFNpemVIZWlnaHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIG1hcFNpemVXaWR0aCwgbWFwU2l6ZUhlaWdodCk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxCbG9ja3MpO1xyXG4gICAgYWxsQmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAoaXRlbS5kZXRhaWxzLm1hcENvbG9yKSA/IGl0ZW0uZGV0YWlscy5tYXBDb2xvciA6IFwicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjsgLy9pdGVtLmRldGFpbHMubWFwQ29sb3IvL1wicmdiYSgyMjUsIDE2OSwgMCwgMSlcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChpdGVtLngpID8gaXRlbS54IC8gbWFwU2l6ZSA6IDAsIChpdGVtLnlNb3ZlKSA/IGl0ZW0ueSAvIG1hcFNpemUgOiAwLCA1MCAvIG1hcFNpemUsIDUwIC8gbWFwU2l6ZSk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2N0eC5zYXZlKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgMSlcIjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5yZWN0KChjYW1lcmFQb3NpdGlvblggLyBtYXBTaXplKSAqIC0xLCAoY2FtZXJhUG9zaXRpb25ZIC8gbWFwU2l6ZSkgKiAtMSwgd2luZG93LmlubmVyV2lkdGggLyBtYXBTaXplLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyBtYXBTaXplKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vY3R4LnJlc3RvcmUoKVxyXG59XHJcbmZ1bmN0aW9uIHNldE1hcEFzQ2xpY2soX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgdmFyIGFsbEJsb2NrcyA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgIHZhciBjYW1lcmFQb3NpdGlvblggPSB4ICsgYWxsQmxvY2tzWzBdLnhNb3ZlOyAvL01hdGgubWF4KGFsbEJsb2Nrc1swXS54TW92ZSwgeCkgLSBNYXRoLm1pbihhbGxCbG9ja3NbMF0ueE1vdmUsIHgpO1xyXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uWSA9IHkgKyBhbGxCbG9ja3NbMF0ueU1vdmU7IC8vTWF0aC5tYXgoYWxsQmxvY2tzWzBdLnlNb3ZlLCB5KSAtIE1hdGgubWluKGFsbEJsb2Nrc1swXS55TW92ZSwgeSk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJsb2Nrc18yID0gYWxsQmxvY2tzOyBfaSA8IGFsbEJsb2Nrc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBibG9jayA9IGFsbEJsb2Nrc18yW19pXTtcclxuICAgICAgICBibG9jay54TW92ZSAtPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWCk7XHJcbiAgICAgICAgYmxvY2sueU1vdmUgLT0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblkpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4vYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxuZnVuY3Rpb24gY29sbGlzaW9uRGV0ZWN0b3IoX2EpIHtcclxuICAgIHZhciBvYmplY3QgPSBfYS5vYmplY3QsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIGlmICghb2JqZWN0IHx8ICF0YXJnZXQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGFyZ2V0LndpZHRoID0gcGFyc2VJbnQodGFyZ2V0LndpZHRoKTtcclxuICAgIHRhcmdldC5oZWlnaHQgPSBwYXJzZUludCh0YXJnZXQuaGVpZ2h0KTtcclxuICAgIG9iamVjdC53aWR0aCA9IHBhcnNlSW50KG9iamVjdC53aWR0aCk7XHJcbiAgICBvYmplY3QuaGVpZ2h0ID0gcGFyc2VJbnQob2JqZWN0LmhlaWdodCk7XHJcbiAgICB2YXIgeE1pbiA9IE1hdGgubWluKG9iamVjdC54TW92ZSwgdGFyZ2V0LngpO1xyXG4gICAgdmFyIHlNaW4gPSBNYXRoLm1pbihvYmplY3QueU1vdmUsIHRhcmdldC55KTtcclxuICAgIHZhciB4TWF4ID0gTWF0aC5tYXgob2JqZWN0LnhNb3ZlICsgb2JqZWN0LndpZHRoLCB0YXJnZXQueCArIHRhcmdldC53aWR0aCk7XHJcbiAgICB2YXIgeU1heCA9IE1hdGgubWF4KG9iamVjdC55TW92ZSArIG9iamVjdC5oZWlnaHQsIHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodCk7XHJcbiAgICB2YXIgcmVzWCA9IHhNYXggLSB4TWluO1xyXG4gICAgdmFyIHJlc1kgPSB5TWF4IC0geU1pbjtcclxuICAgIHZhciBjb2xsaXNpb24gPSAocmVzWCA+IG9iamVjdC53aWR0aCB8fCByZXNZID4gb2JqZWN0LmhlaWdodCkgPyBmYWxzZSA6IFwiY29sbGlzaW9uXCI7XHJcbiAgICBpZiAoY29sbGlzaW9uKVxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuY29sbGlzaW9uRGV0ZWN0b3IgPSBjb2xsaXNpb25EZXRlY3RvcjtcclxuZnVuY3Rpb24gbW92ZVNpbmdsZUJsb2NrKF9hKSB7XHJcbiAgICB2YXIgeE1vdmVWYWx1ZSA9IF9hLnhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWUgPSBfYS55TW92ZVZhbHVlO1xyXG4gICAgaWYgKHhNb3ZlVmFsdWUpXHJcbiAgICAgICAgdGhpcy54TW92ZSArPSB4TW92ZVZhbHVlO1xyXG4gICAgaWYgKHlNb3ZlVmFsdWUpXHJcbiAgICAgICAgdGhpcy55TW92ZSArPSB5TW92ZVZhbHVlO1xyXG59XHJcbmV4cG9ydHMubW92ZVNpbmdsZUJsb2NrID0gbW92ZVNpbmdsZUJsb2NrO1xyXG5mdW5jdGlvbiBtb3ZlQWxsU2NlbmUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgeE1vdmVWYWx1ZSA9IF9hLnhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWUgPSBfYS55TW92ZVZhbHVlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYiA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jazsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2luZ2xlQmxvY2sgPSBfYltfaV07XHJcbiAgICAgICAgc2luZ2xlQmxvY2subW92ZVNpbmdsZUJsb2NrKHsgeE1vdmVWYWx1ZTogeE1vdmVWYWx1ZSwgeU1vdmVWYWx1ZTogeU1vdmVWYWx1ZSB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLm1vdmVBbGxTY2VuZSA9IG1vdmVBbGxTY2VuZTtcclxuZnVuY3Rpb24gY2hhbmdlT2JqZWN0TW9kZWwoX2EpIHtcclxuICAgIHZhciByZXN1bHQgPSBfYS5yZXN1bHQsIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgaWYgKCFtYWluT2JqZWN0IHx8ICFyZXN1bHQgfHwgIW1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSB8fCBtYWluT2JqZWN0Lm1pbmlNYXBBY3RpdmUgfHwgbWFpbk9iamVjdC5hY3RpdmVEZXNjcmlwdGlvbkZpZWxkcylcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgYWxsQmxvY2tzID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrO1xyXG4gICAgdmFyIGN1cnJlbnRCbG9jayA9IGFsbEJsb2Nrc1tyZXN1bHQuaW5kZXhdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIFwiPDxcIiwgY3VycmVudEJsb2NrKVxyXG4gICAgdmFyIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyggbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBjdXJyZW50QmxvY2sgKVxyXG4gICAgLy9jb25zb2xlLmxvZyhtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIFwifFwiKVxyXG4gICAgaWYgKG1haW5PYmplY3Quc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS5jb3B5QmxvY2spIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRCbG9jay5kZXRhaWxzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmlld18xLnNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbTogY3VycmVudEJsb2NrLmRldGFpbHMgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmRlc3Ryb3llcikge1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0udHlwZSA9PT0gXCJiYWNrZ3JvdW5kLXdhbGxcIiAmJiBjdXJyZW50QmxvY2suZGV0YWlscykge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLndpZHRoID0gbWFpbk9iamVjdC5ibG9ja1NpemU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uaGVpZ2h0ID0gbWFpbk9iamVjdC5ibG9ja1NpemU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0ueCA9IGN1cnJlbnRCbG9jay54O1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtLnkgPSBjdXJyZW50QmxvY2sueTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS54TW92ZSA9IGN1cnJlbnRCbG9jay54TW92ZTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbS55TW92ZSA9IGN1cnJlbnRCbG9jay55TW92ZTtcclxuICAgICAgICAgICAgY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlID0gc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50QmxvY2suZGV0YWlscyA9IHNlbGVjdGVkQmxvY2tQYW5lbEl0ZW07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZEJsb2NrUGFuZWxJdGVtKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmRlc3Ryb3llciA9PT0gJ2Rlc3Ryb3llcicpIHtcclxuICAgICAgICBpZiAoY3VycmVudEJsb2NrLmRldGFpbHMgJiYgY3VycmVudEJsb2NrLmRldGFpbHMudmFsdWVPZk1vdmUpIHtcclxuICAgICAgICAgICAgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5wb3NpdGlvblJlZHVjZXIoeyBhbGxCbG9ja3M6IGFsbEJsb2NrcyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEJsb2NrLndpZHRoID0gbWFpbk9iamVjdC5ibG9ja1NpemU7XHJcbiAgICAgICAgY3VycmVudEJsb2NrLmhlaWdodCA9IG1haW5PYmplY3QuYmxvY2tTaXplO1xyXG4gICAgICAgIGN1cnJlbnRCbG9jay5kZXRhaWxzID0gbnVsbDtcclxuICAgICAgICBjdXJyZW50QmxvY2suYmFja2dyb3VuZFRleHR1cmUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLmRlc3Ryb3llciA9PT0gJ3JlZGFjdG9yRGVjb3JhdGlvbicpIHtcclxuICAgICAgICBjdXJyZW50QmxvY2suYmFja2dyb3VuZFRleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIGlmICghY3VycmVudEJsb2NrLmJhY2tncm91bmRUZXh0dXJlICYmIGN1cnJlbnRCbG9jay5kZXRhaWxzLnR5cGUgPT09ICdiYWNrZ3JvdW5kLXdhbGwnKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jay5kZXRhaWxzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIFwifHxcIilcclxufVxyXG5leHBvcnRzLmNoYW5nZU9iamVjdE1vZGVsID0gY2hhbmdlT2JqZWN0TW9kZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBlbGV2YXRvck1vdmUoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSwgZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLnR5cGUgPT09ICdlbGV2YXRvcicpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5kZXRhaWxzLnZhbHVlT2ZNb3ZlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzLmNvbnN0cnVjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueU1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgKz0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlIC09IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvckRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy55TW92ZSAtPSB0aGlzLmRldGFpbHMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlscy5tb3ZlRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueU1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbHMubW92ZURpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueE1vdmUgLT0gdGhpcy5kZXRhaWxzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5jb25zdHJ1Y3RvclZhbHVlT2ZNb3ZlICs9IHRoaXMuZGV0YWlscy5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID49IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuY29uc3RydWN0b3JEaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLCBjdXJyZW50VmFsdWUsIGRlZmF1bHRWYWx1ZSwgXCI8PDw8XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZWxldmF0b3JNb3ZlID0gZWxldmF0b3JNb3ZlO1xyXG4vKlxyXG5cclxuXCJjdXJyZW50VmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY29uc3RydWN0b3JWYWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50RGlyZWN0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgXCJjb25zdHJ1Y3RvckRpcmVjdGlvblwiOiB0cnVlLFxyXG4gXCJpZFwiOiBcImVsZXZhdG9yXzFcIixcclxuICAgICAgICBcInRleHR1cmVcIjogXCIvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvZWxldmF0b3IucG5nXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZXZhdG9yXCIsXHJcbiAgICAgICAgXCJzcGVlZFwiOiA1LFxyXG4gICAgICAgIFwibW92ZURpcmVjdGlvblwiOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgXCJ2YWx1ZU9mTW92ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJjdXJyZW50VmFsdWVPZk1vdmVcIjogMTAwLFxyXG4gICAgICAgIFwiY3VycmVudERpcmVjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgIFwidHlwZVwiOiBcImVsZXZhdG9yXCIsXHJcbiAgICAgICAgXCJjb2xsaXNpb25cIjogdHJ1ZVxyXG4qL1xyXG5mdW5jdGlvbiBibG9ja0FuaW1hdGlvbnMoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gdHJ1ZTsgfVxyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5zV2lkdGg7XHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5zeCkgPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZFRleHR1cmUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RGcmFtZSAlIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuYW5pbWF0aW9uU3RlcHMgPT0gMCAmJiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCArPSB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnNXaWR0aDtcclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCkgPj0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuZGV0YWlscykge1xyXG4gICAgICAgIGlmICh0aGlzLmRldGVjdEZyYW1lICUgdGhpcy5kZXRhaWxzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuc3ggKz0gdGhpcy5kZXRhaWxzLnNXaWR0aDtcclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodGhpcy5kZXRhaWxzLnN4KSA+PSB0aGlzLmRldGFpbHMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnN4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmJsb2NrQW5pbWF0aW9ucyA9IGJsb2NrQW5pbWF0aW9ucztcclxuZnVuY3Rpb24gc3RhaXJzTW92ZSgpIHtcclxufVxyXG5leHBvcnRzLnN0YWlyc01vdmUgPSBzdGFpcnNNb3ZlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBhbmVsRm9ybVBhcnRHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL3BhbmVsRm9ybVBhcnRHZW5lcmF0b3JcIik7XHJcbnZhciBnbG9iYWxWYXJpYWJsZXNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKTtcclxuLy8gPT09PT09PT09PT09PSAgRGlhbG9nICA9PT09PT09PT09PT0vL1xyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dGaWVsZHMoKSB7XHJcbiAgICB2YXIgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU90aGVyRGlhbG9nKF9hKSB7XHJcbiAgICB2YXIgYWxsRGlhbG9ncyA9IF9hLmFsbERpYWxvZ3M7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpYWxvZ0Zvcm0sIGZpbmFsRGlhbG9nQmxvY2tzLCBhbGxJbm5lckJ1dHRvbk9iamVjdHMsIGlkLCBfaSwgYWxsRGlhbG9nc18xLCBkaWFsb2csIHF1ZXN0aW9uSXRlbXMsIGJsb2NrRGF0YV8xLCBibG9ja0RhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxEaWFsb2dzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgYWxsRGlhbG9nc18xID0gYWxsRGlhbG9nczsgX2kgPCBhbGxEaWFsb2dzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IGFsbERpYWxvZ3NfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSXRlbXMgPSBsb2FkUXVlc3Rpb25zU2VjdGlvbih7IHF1ZXN0aW9uQmFzZTogZGlhbG9nLnF1ZXN0aW9ucywgY3VycmVudElkOiBpZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgKz0gXCI8ZGl2IGlkPVxcXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkICsgXCJcXFwiIGNsYXNzPVxcXCJkaWFsb2ctYmxvY2std3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgPGg0PkRpYWxvZyBJRDogXCIgKyBkaWFsb2cuaWQgKyBcIlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZGlhbG9nLWlkLWZpZWxkLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiXCIgKyBkaWFsb2cuaWQgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwicmVtb3ZlLWRpYWxvZy1cIiArIGlkICsgXCJcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJidXR0b24tcmVqZWN0XFxcIj5kZWxldGUgZGlhbG9nPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlcXVpcmVtZW50LWl0ZW0td3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJsZT5cXG4gICAgICAgICAgICAgICAgICAgIDxwPkRpYWxvZyBhY3Rpb25zIDxzcGFuPlxcXCJub25lXFxcIjwvc3Bhbj4gIDxzcGFuPlxcXCJnaXZlX29iamVjdFxcXCI8L3NwYW4+IDxzcGFuPlxcXCJyZXF1aXJlX29iamVjdFxcXCI8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJkaWFsb2ctYWN0aW9uLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcImRpYWxvZyBhY3Rpb25zXFxcIiB2YWx1ZT1cXFwiXCIgKyBkaWFsb2cuYWN0aW9uICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmxlPlxcbiAgICAgICAgICAgICAgICA8bGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8cD5OdW1iZXIgb2YgcmVxdWlyZSBvYmplY3RzIHRvIGFjdGl2YXRlIGRpYWxvZzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibnVtYmVyLW9mLWVsZW1lbnRzLVwiICsgaWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwibnVtYmVyIG9mIHJlcXVpcmUgZWxlbWVudHNcXFwiIHZhbHVlPVxcXCJcIiArICgoZGlhbG9nLm51bWJlck9mUmVxdWlyZUl0ZW1zKSA/IGRpYWxvZy5udW1iZXJPZlJlcXVpcmVJdGVtcyA6IFwiXCIpICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2xhYmxlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxwPkRpYWxvZyBtYWluIHRleHQ8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJkaWFsb2ctYmxvY2stXCIgKyBpZCArIFwiXFxcIiBuYW1lPVxcXCJcXFwiPlwiICsgZGlhbG9nLnRleHQgKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIlxcXCI+XCIgKyAoKHF1ZXN0aW9uSXRlbXMpID8gcXVlc3Rpb25JdGVtcy5xdWVzdGlvbnMgOiAnJykgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJhZGQtbmV3LXF1ZXN0aW9uLVwiICsgaWQgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rIEFkZCBxdWVzdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YV8xID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQmxvY2tXcmFwcGVyOiBcImRpYWxvZy1ibG9jay13cmFwcGVyLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yOiBcImRpYWxvZy1ibG9jay1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nSWRGaWVsZDogXCJkaWFsb2ctaWQtZmllbGQtXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZERpYWxvZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ld1F1ZXN0aW9uOiBcImFkZC1uZXctcXVlc3Rpb24tXCIgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZURpYWxvZzogXCJyZW1vdmUtZGlhbG9nLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dBY3Rpb25GaWVsZDogXCJkaWFsb2ctYWN0aW9uLVwiICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiBcIm51bWJlci1vZi1lbGVtZW50cy1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdDogXCJ0ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2tJZDogYWxsRGlhbG9ncy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogKHF1ZXN0aW9uSXRlbXMpID8gcXVlc3Rpb25JdGVtcy5hbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHMgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxJbm5lckJ1dHRvbk9iamVjdHMgPSBhbGxJbm5lckJ1dHRvbk9iamVjdHMuY29uY2F0KGJsb2NrRGF0YV8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEaWFsb2dCbG9ja3MgKz0gXCI8YnV0dG9uIGlkPVxcXCJhZGQtZGlhbG9nLVwiICsgaWQgKyBcIlxcXCIgPlxcbiAgICAgICAgPHNwYW4+ICsgTmV3IGRpYWxvZzwvc3Bhbj5cXG4gICAgPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Jsb2NrV3JhcHBlcjogXCJkaWFsb2ctYmxvY2std3JhcHBlci1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yOiBcImRpYWxvZy1ibG9jay1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dJZEZpZWxkOiBcImRpYWxvZy1pZC1maWVsZC1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGREaWFsb2c6IFwiYWRkLWRpYWxvZy1cIiArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROZXdRdWVzdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGlhbG9nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2tJZDogYWxsRGlhbG9ncy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnNEYXRhOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gYWxsSW5uZXJCdXR0b25PYmplY3RzLmNvbmNhdChibG9ja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvcm0uaW5uZXJIVE1MID0gZmluYWxEaWFsb2dCbG9ja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgeyBkaWFsb2dGb3JtOiBkaWFsb2dGb3JtLCBhbGxJbm5lckJ1dHRvbk9iamVjdHM6IGFsbElubmVyQnV0dG9uT2JqZWN0cyB9XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9iLnNlbnQoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlT3RoZXJEaWFsb2cgPSBjcmVhdGVPdGhlckRpYWxvZztcclxuZnVuY3Rpb24gbG9hZFF1ZXN0aW9uc1NlY3Rpb24oX2EpIHtcclxuICAgIHZhciBxdWVzdGlvbkJhc2UgPSBfYS5xdWVzdGlvbkJhc2UsIGN1cnJlbnRJZCA9IF9hLmN1cnJlbnRJZDtcclxuICAgIGlmICghcXVlc3Rpb25CYXNlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBhbGxRdWVzdGlvbnNCbG9jayA9ICcnO1xyXG4gICAgdmFyIGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyA9IFtdO1xyXG4gICAgdmFyIHF1ZXN0aW9uc0lkID0gMDtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcXVlc3Rpb25CYXNlXzEgPSBxdWVzdGlvbkJhc2U7IF9pIDwgcXVlc3Rpb25CYXNlXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gcXVlc3Rpb25CYXNlXzFbX2ldO1xyXG4gICAgICAgIGFsbFF1ZXN0aW9uc0Jsb2NrICs9IFwiPGRpdiBjbGFzcz1cXFwicXVlc3Rpb24td3JhcHBlclxcXCIgaWQ9XFxcInNpbmdsZS1xdWVzdGlvbkJhc2UtYmxvY2stXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCJcXFwiPlxcbiAgICAgICAgPHA+UmVsYXRlZCBJZCBkaWFsb2c8L3A+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJyZWxhdGVkLXF1ZXN0aW9uLWlkLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCArIFwiXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlPVxcXCJcIiArIHF1ZXN0aW9uLmlkICsgXCJcXFwiIGNsYXNzPVxcXCJyZWxhdGVkLWlkLWZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9J3F1ZXN0aW9uLXRleHQtXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCInPlwiICsgcXVlc3Rpb24udGV4dCArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJyZW1vdmUtcXVlc3Rpb24tXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkICsgXCJcXFwiIGNsYXNzPVxcXCJyaWdodC1zaWRlLWJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJidXR0b24tcmVqZWN0XFxcIj4tIHJlbW92ZS1xdWVzdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgIHZhciBibG9ja0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB7XHJcbiAgICAgICAgICAgIGRpYWxvZ0lkOiBjdXJyZW50SWQsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSWQ6IHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICByZWxhdGVkUXVlc3Rpb25JZDogXCJyZWxhdGVkLXF1ZXN0aW9uLWlkLVwiICsgY3VycmVudElkICsgXCItXCIgKyBxdWVzdGlvbnNJZCxcclxuICAgICAgICAgICAgcXVlc3Rpb25XcmFwcGVyOiBcInNpbmdsZS1xdWVzdGlvbkJhc2UtYmxvY2stXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICB0ZXh0QXJlYVNlbGVjdG9yOiBcInF1ZXN0aW9uLXRleHQtXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkLFxyXG4gICAgICAgICAgICByZW1vdmVRdWVzdGlvbjogXCJyZW1vdmUtcXVlc3Rpb24tXCIgKyBjdXJyZW50SWQgKyBcIi1cIiArIHF1ZXN0aW9uc0lkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzID0gYWxsSW5uZXJRdWVzdGlvbnNCdXR0b25PYmplY3RzLmNvbmNhdChibG9ja0RhdGEpO1xyXG4gICAgICAgIHF1ZXN0aW9uc0lkICs9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBxdWVzdGlvbnM6IGFsbFF1ZXN0aW9uc0Jsb2NrLCBhbGxJbm5lclF1ZXN0aW9uc0J1dHRvbk9iamVjdHM6IGFsbElubmVyUXVlc3Rpb25zQnV0dG9uT2JqZWN0cyB9O1xyXG59XHJcbi8vICBhZGQgbmV3IGVsZW1lbnRzXHJcbmZ1bmN0aW9uIGRpYWxvZ0Fuc3dlckJ1dHRvbihfYSkge1xyXG4gICAgdmFyIGFsbElubmVyQnV0dG9uT2JqZWN0cyA9IF9hLmFsbElubmVyQnV0dG9uT2JqZWN0cywgYWxsT3RoZXJzRGlhbG9ncyA9IF9hLmFsbE90aGVyc0RpYWxvZ3MsIGJsb2NrRGV0YWlscyA9IF9hLmJsb2NrRGV0YWlscywgY3VycmVudERlc2NyaXB0aW9uSWQgPSBfYS5jdXJyZW50RGVzY3JpcHRpb25JZCwgZmlsZUNvbnRhaW5lciA9IF9hLmZpbGVDb250YWluZXIsIGl0ZW1EYXRhID0gX2EuaXRlbURhdGE7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9sb29wXzEsIF9pLCBhbGxJbm5lckJ1dHRvbk9iamVjdHNfMSwgYnV0dG9uO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgaWYgKCFhbGxJbm5lckJ1dHRvbk9iamVjdHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICBfbG9vcF8xID0gZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZE5ld1F1ZXN0aW9uID0gKGJ1dHRvbi5hZGROZXdRdWVzdGlvbikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5hZGROZXdRdWVzdGlvbikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZURpYWxvZyA9IChidXR0b24ucmVtb3ZlRGlhbG9nKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLnJlbW92ZURpYWxvZykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZERpYWxvZyA9IChidXR0b24uYWRkRGlhbG9nKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmFkZERpYWxvZykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0FjdGlvbkZpZWxkID0gKGJ1dHRvbi5kaWFsb2dBY3Rpb25GaWVsZCkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJ1dHRvbi5kaWFsb2dBY3Rpb25GaWVsZCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0lkRmllbGQgPSAoYnV0dG9uLmRpYWxvZ0lkRmllbGQpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uZGlhbG9nSWRGaWVsZCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHMgPSAoYnV0dG9uLm51bWJlck9mRWxlbWVudHMpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24ubnVtYmVyT2ZFbGVtZW50cykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRBcmVhU2VsZWN0b3IgPSAoYnV0dG9uLnRleHRBcmVhU2VsZWN0b3IpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24udGV4dEFyZWFTZWxlY3RvcikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkZE5ld1F1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTmV3UXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdEaWFsb2dCbG9jayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBidXR0b24ubGFzdEJsb2NrSWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0ucXVlc3Rpb25zID0gYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0ucXVlc3Rpb25zLmNvbmNhdChuZXdEaWFsb2dCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2RpYWxvZy5xdWVzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlhbG9nRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMuc3BsaWNlKGJ1dHRvbi5pZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZGREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGREaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdEaWFsb2dCbG9jayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBidXR0b24ubGFzdEJsb2NrSWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgZmllbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2VycyA9IGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vycy5jb25jYXQobmV3RGlhbG9nQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlhbG9nRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbklkOiBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXI6IGZpbGVDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dEFyZWFTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS50ZXh0ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dBY3Rpb25GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0FjdGlvbkZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2J1dHRvbi5pZF0uYWN0aW9uID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dJZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nSWRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1tidXR0b24uaWRdLmlkID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24ubnVtYmVyT2ZFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mRWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYnV0dG9uLmlkXS5udW1iZXJPZlJlcXVpcmVJdGVtcyA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLy8gc2F2ZSB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJ1dHRvbi5xdWVzdGlvbnNEYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5xdWVzdGlvbnNEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUXVlc3Rpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zRGF0YTogYnV0dG9uLnF1ZXN0aW9uc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbElubmVyQnV0dG9uT2JqZWN0czogYWxsSW5uZXJCdXR0b25PYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzOiBhbGxPdGhlcnNEaWFsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YTogaXRlbURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChfaSA9IDAsIGFsbElubmVyQnV0dG9uT2JqZWN0c18xID0gYWxsSW5uZXJCdXR0b25PYmplY3RzOyBfaSA8IGFsbElubmVyQnV0dG9uT2JqZWN0c18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uID0gYWxsSW5uZXJCdXR0b25PYmplY3RzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShidXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGlhbG9nQW5zd2VyQnV0dG9uID0gZGlhbG9nQW5zd2VyQnV0dG9uO1xyXG5mdW5jdGlvbiByZW1vdmVRdWVzdGlvbnMoX2EpIHtcclxuICAgIHZhciBxdWVzdGlvbnNEYXRhID0gX2EucXVlc3Rpb25zRGF0YSwgYWxsSW5uZXJCdXR0b25PYmplY3RzID0gX2EuYWxsSW5uZXJCdXR0b25PYmplY3RzLCBhbGxPdGhlcnNEaWFsb2dzID0gX2EuYWxsT3RoZXJzRGlhbG9ncywgYmxvY2tEZXRhaWxzID0gX2EuYmxvY2tEZXRhaWxzLCBjdXJyZW50RGVzY3JpcHRpb25JZCA9IF9hLmN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyID0gX2EuZmlsZUNvbnRhaW5lciwgaXRlbURhdGEgPSBfYS5pdGVtRGF0YTtcclxuICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGFuc3dlcikge1xyXG4gICAgICAgIHZhciByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgYW5zd2VyLnJlbW92ZVF1ZXN0aW9uKTtcclxuICAgICAgICB2YXIgdGV4dEFyZWFTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBhbnN3ZXIudGV4dEFyZWFTZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIHJlbGF0ZWRRdWVzdGlvbklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGFuc3dlci5yZWxhdGVkUXVlc3Rpb25JZCk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnMuc3BsaWNlKGFuc3dlci5xdWVzdGlvbklkLCAxKTtcclxuICAgICAgICAgICAgaXRlbURhdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0Zvcm0oe1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzOiBibG9ja0RldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZDogY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZXh0QXJlYVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRleHRBcmVhU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEZXRhaWxzLmRpYWxvZy5kaWFsb2dBbnN3ZXJzW2Fuc3dlci5kaWFsb2dJZF0ucXVlc3Rpb25zW2Fuc3dlci5xdWVzdGlvbklkXS50ZXh0ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxhdGVkUXVlc3Rpb25JZCkge1xyXG4gICAgICAgICAgICByZWxhdGVkUXVlc3Rpb25JZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkLCAnfHx8Jyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJsb2NrRGV0YWlscy5kaWFsb2cuZGlhbG9nQW5zd2Vyc1thbnN3ZXIuZGlhbG9nSWRdLnF1ZXN0aW9uc1thbnN3ZXIucXVlc3Rpb25JZF0uaWQsIHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnNbYW5zd2VyLmRpYWxvZ0lkXS5xdWVzdGlvbnNbYW5zd2VyLnF1ZXN0aW9uSWRdLmlkID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcXVlc3Rpb25zRGF0YV8xID0gcXVlc3Rpb25zRGF0YTsgX2kgPCBxdWVzdGlvbnNEYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHF1ZXN0aW9uc0RhdGFfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMihhbnN3ZXIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZ0Zvcm0oX2EpIHtcclxuICAgIHZhciBibG9ja0RldGFpbHMgPSBfYS5ibG9ja0RldGFpbHMsIGN1cnJlbnREZXNjcmlwdGlvbklkID0gX2EuY3VycmVudERlc2NyaXB0aW9uSWQsIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmYWNlUGljdHVyZSwgaW5uZXJUZXh0LCBpdGVtRGF0YSwgYWxsT3RoZXJzRGlhbG9ncywgbWFpbkRpYWxvZ1dyYXBwZXIsIG90aGVyRGlhbG9ncztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBmYWNlUGljdHVyZSA9IChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSkgPyBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSA6IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxkaXYgaWQ9XFxcIm1haW4tZGlhbG9nLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgIDxoMz5EaWFsb2c8L2gzPlxcbiAgICAgICAgICAgIDxwPkNyZWF0ZSBQZXJzb24gZGlhbG9nPC9wPlxcbiAgICAgICAgICAgIDxkaXY+XCIgKyAoKGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdC5mYWNlUGljdHVyZUFic29sdXRlKSA/ICdQaWN0dXJlIGlzIHNldCcgOiAnWW91IG11c3Qgc2F2ZSB0aGUgcGljdHVyZSBmaXJzdCcpICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICA8aW1nIHdpZHRoPVxcXCIxMDBcXFwiIGlkPVwiICsgKCdkaWFsb2ctZmFjZS1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBmYWNlUGljdHVyZSArIFwiXFxcIj5cXG5cXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJwcmV2aWV3LWRpYWxvZy1mYWNlXFxcIiBkYXRhLXRhcmdldD0ncHJldmlldy1kaWFsb2ctZmFjZSc+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMS5wbmdcXFwiIHNlbGVjdGVkPVxcXCJzZWxlY3RlZFxcXCI+cHJvZmVzc29yPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMy5wbmdcXFwiPm9sZCBtYW48L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS00LnBuZ1xcXCI+bWFuIDE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS03LnBuZ1xcXCI+bWFuIDI8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS04LnBuZ1xcXCI+R2VuZXJhbDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTIucG5nXFxcIj5Tb2xkaWVyPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtNS5wbmdcXFwiPlJvYm90IHJlZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTYucG5nXFxcIj5ZZWxsb3cgcmVkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtOS5wbmdcXFwiPm1hbiAzPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMTAucG5nXFxcIj5vZmZpY2VyPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhY2UtMTEucG5nXFxcIj5vZmZpY2VyIDE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFjZS0xMi5wbmdcXFwiPm9mZmljZXIgMjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTEzLnBuZ1xcXCI+Y29tcHV0ZXIgMTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTE0LnBuZ1xcXCI+Y29tcHV0ZXIgMjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWNlLTE1LnBuZ1xcXCI+ZG9jdW1lbnRzPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJucGMtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcIlwiICsgKChibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQubmFtZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQubmFtZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOUEMgbmFtZScpICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIiArICgoYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUpID8gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0Lm5hbWUgOiAnTlBDIG5hbWUnKSArIFwiXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWRpYWxvZy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBuYW1lIGFuZCBwaWN0dXJlPC9idXR0b24+IDxocj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGwtb3RoZXJzLWRpYWxvZ3NcXFwiIGlkPVxcXCJhbGwtb3RoZXJzLWRpYWxvZ3NcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gcGFuZWxGb3JtUGFydEdlbmVyYXRvcl8xLmVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uIGRpYWxvZy1wYW5lbC1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxPdGhlcnNEaWFsb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtb3RoZXJzLWRpYWxvZ3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkRpYWxvZ1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGlhbG9nLXdyYXBwZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3JlYXRlT3RoZXJEaWFsb2coeyBhbGxEaWFsb2dzOiBibG9ja0RldGFpbHMuZGlhbG9nLmRpYWxvZ0Fuc3dlcnMgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyRGlhbG9ncyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW90aGVyRGlhbG9ncykgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYWxsT3RoZXJzRGlhbG9ncy5hcHBlbmRDaGlsZChvdGhlckRpYWxvZ3MuZGlhbG9nRm9ybSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaWFsb2dBbnN3ZXJCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsSW5uZXJCdXR0b25PYmplY3RzOiBvdGhlckRpYWxvZ3MuYWxsSW5uZXJCdXR0b25PYmplY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsT3RoZXJzRGlhbG9nczogYWxsT3RoZXJzRGlhbG9ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGV0YWlsczogYmxvY2tEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lcjogZmlsZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZURpYWxvZ0Zvcm0gPSBjcmVhdGVEaWFsb2dGb3JtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX19IT1NUID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMwMCc7XHJcbmV4cG9ydHMuX19IT1NUID0gX19IT1NUO1xyXG52YXIgX19CTE9DS19DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItYmxvY2tzJztcclxuZXhwb3J0cy5fX0JMT0NLX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1iYWNrZ3JvdW5kLWJsb2Nrcyc7XHJcbmV4cG9ydHMuX19CTE9DS19CQUNLR1JPVU5EX0NPTlNUUlVDVE9SX1VSTCA9IF9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkw7XHJcbnZhciBfX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItY2hhcmFjdGVycyc7XHJcbmV4cG9ydHMuX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMID0gX19DSEFSQUNURVJfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19FTkVNWV9ERVRBSUxTX1VSTCA9ICcvYXBpL2dldC1jb25zdHJ1Y3Rvci1ncm91bmQtZW5lbXknO1xyXG52YXIgX19FTkVNWV9DT05TVFJVQ1RPUl9VUkwgPSAnL2FwaS9nZXQtY29uc3RydWN0b3ItZ3JvdW5kLWVuZW15LXJlZGFjdG9yJztcclxuZXhwb3J0cy5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCA9IF9fRU5FTVlfQ09OU1RSVUNUT1JfVVJMO1xyXG52YXIgX19NQVBfREFUQV9VUkwgPSAnL2FwcC9nZXQtYWxsLW1hcHMnO1xyXG5leHBvcnRzLl9fTUFQX0RBVEFfVVJMID0gX19NQVBfREFUQV9VUkw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdWkvdmlld1wiKTtcclxudmFyIHJlcXVlc3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vc2VydmVyLXJlcXVlc3RzL3JlcXVlc3RzTW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBpbml0TWFpbkVuZ2luZShfYSkge1xyXG4gICAgdmFyIE1haW5HYW1lQ29uc3RydWN0b3IgPSBfYS5NYWluR2FtZUNvbnN0cnVjdG9yLCBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFwTmFtZSwgYmxvY2tTaXplLCBkZWZhdWx0V2lkdGgsIGRlZmF1bHRIZWlnaHQsIG1heEhvcml6b250YWxCbG9ja3MsIG1heFZlcnRpY2FsQmxvY2tzLCByZWRhY3RvckRhdGEsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUgPSBkb2N1bWVudC5mb3Jtc1snbmV3LW1hcCddLm5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NpemUgPSA1MCwgZGVmYXVsdFdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIGRlZmF1bHRIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC8gYmxvY2tTaXplKS50b0ZpeGVkKCksIG1heEhvcml6b250YWxCbG9ja3MgPSA0MDAsIG1heFZlcnRpY2FsQmxvY2tzID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hcFNpemVUb0Zvcm0oeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcE1vdmVTcGVlZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEhlaWdodDogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGVmYXVsdFdpZHRoOiBkZWZhdWx0V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERlZmF1bHRIZWlnaHQ6IGRlZmF1bHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhvcml6b250YWxCbG9ja3M6IG1heEhvcml6b250YWxCbG9ja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZlcnRpY2FsQmxvY2tzOiBtYXhWZXJ0aWNhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBibG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlZGFjdG9yQmxvY2s6IGZpbGxCbG9ja01hcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEJsb2NrczogZGVmYXVsdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxCbG9jazogZGVmYXVsdEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogYmxvY2tTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgZGF0YTogbnVsbCwgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IuYmxvY2tEYXRhYmFzZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0c01vZHVsZV8xLmdldERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQkFDS0dST1VORF9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYi5iYWNrZ3JvdW5kRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0NIQVJBQ1RFUl9DT05TVFJVQ1RPUl9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCBkYXRhOiBudWxsLCBoZWFkZXJzOiBudWxsIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5jaGFyYWN0ZXJzRGF0YWJhc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX0VORU1ZX0NPTlNUUlVDVE9SX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGRhdGE6IG51bGwsIGhlYWRlcnM6IG51bGwgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2IuZW5lbXlEYXRhYmFzZSA9IF9jLnNlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICByZWRhY3RvckRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZWRhY3RvckRhdGEuYmFja2dyb3VuZERhdGFiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgTWFpbkdhbWVDb25zdHJ1Y3RvcihfX2Fzc2lnbih7fSwgcmVkYWN0b3JEYXRhKSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmluaXRNYWluRW5naW5lID0gaW5pdE1haW5FbmdpbmU7XHJcbmZ1bmN0aW9uIHNldE1hcFNpemVUb0Zvcm0oX2EpIHtcclxuICAgIHZhciB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgZm9ybVsnaG9yaXpvbnRhbEJsb2NrJ10udmFsdWUgPSB3aWR0aDtcclxuICAgIGZvcm1bJ3ZlcnRpY2FsQmxvY2snXS52YWx1ZSA9IGhlaWdodDtcclxufVxyXG5leHBvcnRzLnNldE1hcFNpemVUb0Zvcm0gPSBzZXRNYXBTaXplVG9Gb3JtO1xyXG5mdW5jdGlvbiBmaWxsQmxvY2tNYXAoX2EpIHtcclxuICAgIHZhciBCbG9ja0NvbnN0cnVjdG9yID0gX2EuQmxvY2tDb25zdHJ1Y3RvciwgaG9yaXpvbnRhbEJsb2NrcyA9IF9hLmhvcml6b250YWxCbG9ja3MsIHZlcnRpY2FsQmxvY2sgPSBfYS52ZXJ0aWNhbEJsb2NrLCBibG9ja1NpemUgPSBfYS5ibG9ja1NpemU7XHJcbiAgICB2YXIgYmxvY2tBcnJheSA9IFtdO1xyXG4gICAgdmFyIGhvcml6b250YWxFbmRzID0gMDtcclxuICAgIHZhciB2ZXJ0aWNhbEVuZHMgPSAwO1xyXG4gICAgdmFyIGJsb2NrRGF0YSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IGJsb2NrU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IGJsb2NrU2l6ZSxcclxuICAgICAgICBpbmRleDogMFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9yaXpvbnRhbEJsb2NrcyAqIHZlcnRpY2FsQmxvY2s7IGkrKykge1xyXG4gICAgICAgIGJsb2NrRGF0YS55ID0gdmVydGljYWxFbmRzO1xyXG4gICAgICAgIGJsb2NrRGF0YS54ID0gaG9yaXpvbnRhbEVuZHM7XHJcbiAgICAgICAgYmxvY2tEYXRhLmluZGV4ID0gaTtcclxuICAgICAgICB2ZXJ0aWNhbEVuZHMgPSAodmVydGljYWxFbmRzIDwgKCh2ZXJ0aWNhbEJsb2NrIC0gMSkgKiBibG9ja1NpemUpKSA/IHZlcnRpY2FsRW5kcyArIGJsb2NrU2l6ZSA6IDA7XHJcbiAgICAgICAgaG9yaXpvbnRhbEVuZHMgPSAodmVydGljYWxFbmRzID09IDApID8gaG9yaXpvbnRhbEVuZHMgKyBibG9ja1NpemUgOiBob3Jpem9udGFsRW5kcztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKClcclxuICAgICAgICBibG9ja0FycmF5ID0gYmxvY2tBcnJheS5jb25jYXQobmV3IEJsb2NrQ29uc3RydWN0b3IoX19hc3NpZ24oe30sIGJsb2NrRGF0YSkpKTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coQmxvY2tDb25zdHJ1Y3RvciwgYmxvY2tBcnJheSlcclxuICAgIHJldHVybiBibG9ja0FycmF5O1xyXG59XHJcbmV4cG9ydHMuZmlsbEJsb2NrTWFwID0gZmlsbEJsb2NrTWFwO1xyXG5mdW5jdGlvbiBiYWNrVG9PYmplY3QoX2EpIHtcclxuICAgIHZhciBkYXRhID0gX2EuZGF0YSwgY29uc3RydWN0b3IgPSBfYS5jb25zdHJ1Y3RvcjtcclxuICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yKTtcclxuICAgIHZhciBmaW5hbE9iamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShyZXMucHJvdG90eXBlKSwgZGF0YSk7XHJcbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XHJcbn1cclxuZXhwb3J0cy5iYWNrVG9PYmplY3QgPSBiYWNrVG9PYmplY3Q7XHJcbmZ1bmN0aW9uIHJlbmRlckJsb2NrQm94KF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy55TW92ZSA+IDAgLSB0aGlzLmhlaWdodCAmJiB0aGlzLnhNb3ZlID4gMCAtIHRoaXMud2lkdGggJiYgdGhpcy55TW92ZSA8IHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuaGVpZ2h0ICYmIHRoaXMueE1vdmUgPCB3aW5kb3cuaW5uZXJXaWR0aCArIHRoaXMud2lkdGgpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRldGFpbHMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdfMS5jcmVhdGVGcmFtZS5jYWxsKHRoaXMsIHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdmlld18xLmJhY2tncm91bmRSZW5kZXIuY2FsbCh0aGlzLCB7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2aWV3XzEuY3JlYXRlQmxvY2tQaWN0dXJlLmNhbGwodGhpcywgeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyQmxvY2tCb3ggPSByZW5kZXJCbG9ja0JveDtcclxuZnVuY3Rpb24gYmxvY2tBbmltYXRpb25SZW5kZXIoX2EpIHtcclxuICAgIHZhciBibG9jayA9IF9hLmJsb2NrO1xyXG4gICAgaWYgKHRoaXMueU1vdmUgPiAwIC0gdGhpcy5oZWlnaHQgJiYgdGhpcy54TW92ZSA+IDAgLSB0aGlzLndpZHRoICYmIHRoaXMueU1vdmUgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLmhlaWdodCAmJiB0aGlzLnhNb3ZlIDwgd2luZG93LmlubmVyV2lkdGggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgYmxvY2suYmxvY2tBbmltYXRpb25zKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5ibG9ja0FuaW1hdGlvblJlbmRlciA9IGJsb2NrQW5pbWF0aW9uUmVuZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlc18xID0gcmVxdWlyZShcIi4vZ2xvYmFsVmFyaWFibGVzXCIpO1xyXG52YXIgZGlhbG9nRm9ybU1vZHVsZV8xID0gcmVxdWlyZShcIi4vZGlhbG9nRm9ybU1vZHVsZVwiKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGVJbnB1dChfYSkge1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyLCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrRGV0YWlscywgaW5uZXJUZXh0LCBpdGVtRGF0YSwgY3VycmVudERlc2NyaXB0aW9uSWQsIGJsb2NrQWxlcnRNZXNzYWdlLCBibG9ja1ByZXZpZXdJbWFnZSwgbG9jYWxQaWN0dXJlLCBtYWluUGljdHVyZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0RldGFpbHMgPSB0YXJnZXQuZGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb25JZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWFsZXJ0LW1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1wcmV2aWV3LWltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBcImNvbGxpc2lvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0dXJlXCI6IFwiL2xldmVsLWNyZWF0b3IvYXNzZXRzL2Jsb2NrL2Jsb2NrLTMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzRGVzdHJveVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBCbG9ja3Mgc2V0dGluZ3MgJiBQYXJhbWV0ZXJzICA9PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnJlbmRlclR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMT5CbG9jayBzaXplPC9oMT5cXG4gICAgICAgIDxoMz5CbG9jayB3aWR0aDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayB3aWR0aCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBpZD1cIiArICgnd2lkdGgtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQud2lkdGgpID8gdGFyZ2V0LndpZHRoIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtd2lkdGgtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgd2lkdGg8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8aDM+QmxvY2sgaGVpZ2h0PC9oMz5cXG4gICAgICAgICAgICA8cD5TaXplIG9mIGJsb2NrIGhlaWdodCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBpZD1cIiArICgnaGVpZ2h0LXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LmhlaWdodCkgPyB0YXJnZXQuaGVpZ2h0IDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtaGVpZ2h0LWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIGhlaWdodDwvYnV0dG9uPlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay13aWR0aC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgICAgICA8aDE+QmxvY2sgUG9zaXRpb248L2gxPlxcbiAgICAgICAgICAgIDxoMz5CbG9jayBYPC9oMz5cXG4gICAgICAgICAgICA8cD5YIHBvc2l0aW9uIG9mIGJsb2NrPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiLTUwXFxcIiBtYXg9XFxcIjUwXFxcIiBpZD1cIiArICgneC1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuYmxvY2tSZWxhdGl2ZVhQb3MpID8gdGFyZ2V0LmJsb2NrUmVsYXRpdmVYUG9zIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUteC1wb3MtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgWCBQb3NpdGlvbjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgIDxoMz5CbG9jayBZPC9oMz5cXG4gICAgICAgICAgICA8cD5ZIHBvc2l0aW9uIG9mIGJsb2NrPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiLTUwXFxcIiBtYXg9XFxcIjUwXFxcIiBpZD1cIiArICgneS1wb3MtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuYmxvY2tSZWxhdGl2ZVlQb3MpID8gdGFyZ2V0LmJsb2NrUmVsYXRpdmVZUG9zIDogMCkgKyBcIiAvPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUteS1wb3MtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgWSBQb3NpdGlvbjwvYnV0dG9uPlxcbiAgICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdibG9jay14LXBvcy0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9ja0RldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCJcXG4gICAgICAgIDxoMT5CbG9jayBzaXplPC9oMT5cXG4gICAgICAgIDxoMz5CbG9jayB3aWR0aDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayB3aWR0aCBpbiBwaXhlbHM8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjIwMFxcXCIgaWQ9XCIgKyAoJ3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiB2YWx1ZT1cIiArICgodGFyZ2V0LndpZHRoKSA/IHRhcmdldC53aWR0aCA6IDApICsgXCIgLz5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXdpZHRoLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIHdpZHRoPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIGhlaWdodDwvaDM+XFxuICAgICAgICAgICAgPHA+U2l6ZSBvZiBibG9jayBoZWlnaHQgaW4gcGl4ZWxzPC9wPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMDBcXFwiIGlkPVwiICsgKCdoZWlnaHQtcHJvcGVydHktJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKSArIFwiIHZhbHVlPVwiICsgKCh0YXJnZXQuaGVpZ2h0KSA/IHRhcmdldC5oZWlnaHQgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1oZWlnaHQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgaGVpZ2h0PC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Jsb2NrLXdpZHRoLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ3dpZHRoJ10gPSB0YXJnZXQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIlxcbiAgICAgICAgICAgIDxoMT5CbG9jayBQb3NpdGlvbjwvaDE+XFxuICAgICAgICAgICAgPGgzPkJsb2NrIFg8L2gzPlxcbiAgICAgICAgICAgIDxwPlggcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCItNTBcXFwiIG1heD1cXFwiNTBcXFwiIGlkPVwiICsgKCd4LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5ibG9ja1JlbGF0aXZlWFBvcykgPyB0YXJnZXQuYmxvY2tSZWxhdGl2ZVhQb3MgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS14LXBvcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBYIFBvc2l0aW9uPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPGgzPkJsb2NrIFk8L2gzPlxcbiAgICAgICAgICAgIDxwPlkgcG9zaXRpb24gb2YgYmxvY2s8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbWluPVxcXCItNTBcXFwiIG1heD1cXFwiNTBcXFwiIGlkPVwiICsgKCd5LXBvcy1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgdmFsdWU9XCIgKyAoKHRhcmdldC5ibG9ja1JlbGF0aXZlWVBvcykgPyB0YXJnZXQuYmxvY2tSZWxhdGl2ZVlQb3MgOiAwKSArIFwiIC8+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS15LXBvcy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBZIFBvc2l0aW9uPC9idXR0b24+XFxuICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Jsb2NrLXgtcG9zLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2NrRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMudHlwZSA9PT0gJ2VsZXZhdG9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIlxcbiAgICAgICAgPGgxPkVsZXZhdG9yIHJhbmdlPC9oMT5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiZWxldmF0b3ItcmFuZ2UtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMTAwXFxcIiB2YWx1ZT1cIiArIGJsb2NrRGV0YWlscy52YWx1ZU9mTW92ZSArIFwiPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1lbGV2YXRvci1yYW5nZS1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBFbGV2YXRvciBSYW5nZTwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBEZXNjcmlwdGlvbiAgPT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5EZXNjcmlwdGlvbjwvaDM+XFxuICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgaWQ9XCIgKyAoJ2Rlc2NyaXB0aW9uLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyBibG9ja0RldGFpbHMuZGVzY3JpcHRpb24gKyBcIjwvdGV4dGFyZWE+XFxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLWRlc2NyaXB0aW9uLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIERlc2NyaXB0aW9uPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBydWxlcnMgJiB0aXBzICA9PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+VGlwczwvaDM+XFxuICAgICAgICAgICAgPHA+QSB0aXBzIGhvdyB0byB1cyB0aGlzIG9iamVjdHMsIGl0IGNvdWxkIGJlIGEgcGFydCBvZiBzb21lIG1lc3NhZ2UsIFxcXCJVc2UgKiAgdG8gc3RhcnQgbmV3IGxpbmVcXFwiPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgndGlwcy1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMudGlwcykgPyBibG9ja0RldGFpbHMucnVsZXMudGlwcyA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXRpcHMtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgVGlwczwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXRpcHMtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzc1RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+U3VjY2VzcyBUZXh0PC9oMz5cXG4gICAgICAgICAgICA8cD5EaXNwbGF5IGEgbWVzc2FnZSB3aGVuIHlvdSBkbyBldmVyeXRoaW5nIHdyaXRlOiBjb2xsZWN0IGRhdGUva2V5LCBicmluZyBkYXRhL2tleSA8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdzdWNjZXNzVGV4dC1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMuc3VjY2Vzc1RleHQpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnN1Y2Nlc3NUZXh0IDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtc3VjY2Vzcy10ZXh0LWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFRleHQ8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1zdWNjZXNzVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5SZXF1aXJlIFRleHQ8L2gzPlxcbiAgICAgICAgICAgIDxwPkRpc3BsYXkgYSBtZXNzYWdlIGRlc2NyaWJlIHNvbWUgUmVxdWlyZW1lbnQgZm9yIHRoaXMgb2JqZWN0IHRvIHdvcms8L3A+XFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdyZXF1aXJlVGV4dC1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZVRleHQpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLnJlcXVpcmVUZXh0IDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtcmVxdWlyZS10ZXh0LWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIFJlcXVpcmUgVGV4dDwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ2Rlc2NyaXB0aW9uLXJlcXVpcmVUZXh0LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+UmVxdWlyZSBPYmplY3Q8L2gzPlxcbiAgICAgICAgICAgIDxwPlJlcXVpcmUgbWVzc2FnZSwgZGlzcGxheSBvYmplY3QgbmVlZHMgZm9yIHRoaXMgYmxvY2sgdG8gZXZlcnl0aGluZyB3b3JrIGZpbmVcXG4gICAgICAgICAgICA8c3Bhbj5jb21wdXRlcl9kYXRhPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmJsdWVfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5ncmVlbl9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnllbGxvd19jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnJlZF9jYXJkPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnBvd2VyX2NlbGw8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+ZW5lbXlfaGVsbWV0PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmVuZW15X2RldGFpbHM8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+bWVkX2tpdDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5sYXB0b3Bfd2l0aF9kYXRhPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnRvb2xzX2Nhc2U8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+YWNjZXNzX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+ZW5lbXlfZ3VuPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnBsYW5lX2tleTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5zcGVjaWFsX2FjY2Vzczwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5kYXRhX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+Ymx1ZV9jcnlzdGFsPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnJlZF9jcnlzdGFsPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmdyZWVuX2NyeXN0YWw8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+eWVsbG93X2NyeXN0YWw8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+ZWxlY3RyaWNfZGV0YWlsczwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5wb3dlcl9jdWJlPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnBvd2VyX2N1YmU8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+YWNjZXNzX2JhZGdlPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmFtbXVuaXRpb248L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+c2VydmVyX2RhdGE8L3NwYW4+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBpZD1cIiArICgncmVxdWlyZS1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCIgPlwiICsgKChibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZSkgPyBibG9ja0RldGFpbHMucnVsZXMucmVxdWlyZSA6ICcnKSArIFwiPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXJlcXVpcmUtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgUmVxdWlyZSBPYmplY3Q8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdkZXNjcmlwdGlvbi1yZXF1aXJlVGV4dC0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBpY3R1cmUgPSAoYmxvY2tEZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gYmxvY2tEZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluUGljdHVyZSA9IChibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSkgPyBibG9ja0RldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6IGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvY2hhcmFjdGVyc09iamVjdHMvaW5uZXItb2JqZWN0cy8nICsgbG9jYWxQaWN0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5Db250YWluIE9iamVjdDwvaDM+XFxuICAgICAgICAgICAgPHA+T2JqZWN0IG9yIGRhdGEgaW5zaWRlIHRoaXMgb2JqZWN0IHByZXNzICdFJyBidXR0b24gdG8gY29sbGVjdCBcXG4gZXhpdCAgLSBzcGVjaWFsIG9iamVjdCB0byBmaW5pc2ggdGhlIGxldmVsXFxuICAgICAgICAgICAgPHNwYW4+Y29tcHV0ZXJfZGF0YTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5ibHVlX2NhcmQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+Z3JlZW5fY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj55ZWxsb3dfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5yZWRfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5leGl0PC9zcGFuPiAgZXhpdCAgLSBlbmQgdGhlIGxldmVsXFxuICAgICAgICAgICAgPHNwYW4+cG93ZXJfY2VsbDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbmVteV9oZWxtZXQ8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+ZW5lbXlfZGV0YWlsczwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5tZWRfa2l0PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmxhcHRvcF93aXRoX2RhdGE8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+dG9vbHNfY2FzZTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5hY2Nlc3NfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbmVteV9ndW48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cGxhbmVfa2V5PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnNwZWNpYWxfYWNjZXNzPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPmRhdGFfY2FyZDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5ibHVlX2NyeXN0YWw8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cmVkX2NyeXN0YWw8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+Z3JlZW5fY3J5c3RhbDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj55ZWxsb3dfY3J5c3RhbDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5lbGVjdHJpY19kZXRhaWxzPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuPnBvd2VyX2N1YmU8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+cG93ZXJfY3ViZTwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5hY2Nlc3NfYmFkZ2U8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4+YW1tdW5pdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3Bhbj5zZXJ2ZXJfZGF0YTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3A+XFxuXFxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGlkPVwiICsgKCdjb250YWluLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCkgKyBcIiA+XCIgKyAoKGJsb2NrRGV0YWlscy5ydWxlcy5jb250YWluKSA/IGJsb2NrRGV0YWlscy5ydWxlcy5jb250YWluIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XFxcIjEwMFxcXCIgaWQ9XCIgKyAoJ2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpICsgXCJcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgbWFpblBpY3R1cmUgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwicHJldmlldy1jb250YWluLW9iamVjdFxcXCIgZGF0YS10YXJnZXQ9J3NlbGVjdC1wcmV2aWV3LWJ0bic+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImNvbXB1dGVyLWRhdGEucG5nXFxcIj5Db21wdXRlciBkYXRhPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInJlZC1jYXJkLnBuZ1xcXCI+UmVkIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYmx1ZS1jYXJkLnBuZ1xcXCI+Qmx1ZSBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImdyZWVuLWNhcmQucG5nXFxcIj5HcmVlbiBjYXJkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInllbGxvdy1jYXJkLnBuZ1xcXCI+WWVsbG93IGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicG93ZXItY2VsbC5wbmdcXFwiPlBvd2VyIENlbGw8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibWVkLWtpdC5wbmdcXFwiPk1lZCBraXQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibGFwdG9wLnBuZ1xcXCI+TGFwdG9wIGNhc2U8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidG9vbHMtY2FzZS5wbmdcXFwiPlRvb2xzIGNhc2U8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiRW5lbXktaGVhZC5wbmdcXFwiPkVuZW15IGhlbG1ldCBBPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImVuZW15LWRldGFpbHMucG5nXFxcIj5FbmVteSBkZXRhaWwgMTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJBY2Nlc3MtY2FyZC5wbmdcXFwiPkFjZXNzIGNhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZW5lbXktZ3Vucy5wbmdcXFwiPkVuZW15IGd1bjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJwbGFuZS1rZXkucG5nXFxcIj5QbGFuZSBrZXk8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiaW1wb3J0ZW50LWRhdGEucG5nXFxcIj5JbXBvcnRlbnQgZGF0YTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjdWJlLnBuZ1xcXCI+c3BhY2UgYm94IDE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYmxhY2stYm94LTEucG5nXFxcIj5ib3ggMjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJibGFjay1ib3gtMi5wbmdcXFwiPmJveCAzPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImFjY2Vzcy0yLnBuZ1xcXCI+YWNjZXNzIGNhcmQgMjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJibHVlLWNyeXN0YWwucG5nXFxcIj5ibHVlIGNyeXN0YWw8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicmVkLWNyeXN0YWwucG5nXFxcIj5yZWQgY3J5c3RhbDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJncmVlbi1jcnlzdGFsLnBuZ1xcXCI+Z3JlZW4gY3J5c3RhbDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ5ZWxsb3ctY3J5c3RhbC5wbmdcXFwiPnllbGxvdyBjcnlzdGFsPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImJsb2NrX2RldGFpbHMucG5nXFxcIj5EZXRhaWxzPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1jb250YWluLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnZGVzY3JpcHRpb24tcmVxdWlyZVRleHQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5ydWxlcy50YXJnZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+VGVsZXBvcnQgc2V0dGluZ3M8L2gzPlxcbiAgICAgICAgICAgIDxwPlNldCB0ZWxlcG9ydCB0YXJnZXQgYW5kIGlkPC9wPlxcbiAgICAgICAgICAgIDxsYWJsZT5cXG4gICAgICAgICAgICAgICAgPHA+SWQgb2YgdGhpcyBkb29yIHNpZGU8L3A+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidGVsZXBvcnQtc2V0LWlkLVwiICsgY3VycmVudERlc2NyaXB0aW9uSWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjFcXFwiIHZhbHVlPVwiICsgYmxvY2tEZXRhaWxzLnJ1bGVzLmRvb3JJZCArIFwiPlxcbiAgICAgICAgICAgIDwvbGFibGU+XFxuICAgICAgICAgICAgPGxhYmxlPlxcbiAgICAgICAgICAgICAgICA8cD5JZCBvZiB0YXJnZXQgZG9vciBzaWRlPC9wPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInRlbGVwb3J0LXRhcmdldC1zZXQtaWQtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgdmFsdWU9XCIgKyBibG9ja0RldGFpbHMucnVsZXMudGFyZ2V0SWQgKyBcIj5cXG4gICAgICAgICAgICA8L2xhYmxlPlxcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtZG9vci1zZXR0aW5ncy1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSB0ZWxlcG9ydCBkb29yIGRhdGE8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ3RlbGVwb3J0LXNldHRpbmdzLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tEZXRhaWxzLnR5cGUgPT09IFwibnBjX3NwYXduZXJcIiB8fCBibG9ja0RldGFpbHMudHlwZSA9PT0gXCJlbmVteV9zcGF3bmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+TlBDIGRlZmF1bHQgYmVoYXZpb3I8L2gzPlxcbiAgICAgICAgPHA+U2V0IFNjZW5hcmlvIG5hbWU8L3A+XFxuICAgICAgICA8c3Bhbj5kZXN0cm95PC9zcGFuPlxcbiAgICAgICAgPHNwYW4+ZmluZDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuPnN0YW5kPC9zcGFuPlxcbiAgICAgICAgPHNwYW4+c3RhdGljPC9zcGFuPlxcbiAgICAgICAgPGxhYmxlPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibnBjLWJlaGF2aW9yLWlkLVwiICsgY3VycmVudERlc2NyaXB0aW9uSWQgKyBcIlxcXCIgIG1pbj1cXFwiM1xcXCI+XCIgKyAoKHRhcmdldC5kZXRhaWxzLmJlaGF2aW9yKSA/IHRhcmdldC5kZXRhaWxzLmJlaGF2aW9yIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgPC9sYWJsZT5cXG5cXG4gICAgICAgIDxidXR0b24gZGF0YS10YXJnZXQ9J3NhdmUtbnBjLWJlaGF2aW9yLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIGJlaGF2aW9yPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnYmVoYXZpb3Itc2V0dGluZ3MtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFibG9ja0RldGFpbHMuZGlhbG9nKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQgPSBcIjxoMz5UYXNrIHRvIEpvcm5hbDwvaDM+XFxuICAgICAgICA8cD5FbnRlciBkZWZhdWx0IHRhc2sgdGV4dCB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byBzaGlwIGpvdXJuYWw8L3A+XFxuICAgICAgICA8bGFibGU+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJucGMtam91cm5hbC10YXNrLWlkLVwiICsgY3VycmVudERlc2NyaXB0aW9uSWQgKyBcIlxcXCIgIG1pbj1cXFwiM1xcXCI+XCIgKyAoKHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmpvdXJuYWxUYXNrKSA/IHRhcmdldC5kZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmpvdXJuYWxUYXNrIDogJycpICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgPC9sYWJsZT5cXG4gICAgICAgIDxsYWJsZT5cXG4gICAgICAgICAgICA8cD5EZWZhdWx0IGRpYWxvZyB3aGVuIHJlcXVpcmUgb2JqZWN0IGlzIHNldCBhbmQgYWRkIHRvIGpvdXJuYWw8L3A+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJkZWZhdWx0LXJlcXVlc3QtZGlhbG9nLWlkLVwiICsgY3VycmVudERlc2NyaXB0aW9uSWQgKyBcIlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiXCIgKyAoKHRhcmdldC5kZXRhaWxzLmRlZmF1bHRSZXF1ZXN0RGlhbG9nSWQpID8gdGFyZ2V0LmRldGFpbHMuZGVmYXVsdFJlcXVlc3REaWFsb2dJZCA6IDApICsgXCJcXFwiPlxcbiAgICAgICAgPC9sYWJsZT5cXG4gICAgICAgIDxsYWJsZT5cXG4gICAgICAgICAgICA8cD5EZWZhdWx0IGRpYWxvZyB3aGVuIHRhc2sgd2FzIGNvbXBsZXRlZDwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImRlZmF1bHQtc3VjY2Vzcy1kaWFsb2ctaWQtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlPVxcXCJcIiArICgodGFyZ2V0LmRldGFpbHMuZGVmYXVsdFN1Y2Nlc3NEaWFsb2dJZCkgPyB0YXJnZXQuZGV0YWlscy5kZWZhdWx0U3VjY2Vzc0RpYWxvZ0lkIDogMCkgKyBcIlxcXCI+XFxuICAgICAgICA8L2xhYmxlPlxcblxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1ucGMtam91cm5hbC10YXNrLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIGpvdXJuYWwgdGFzazwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdqb3VybmFsLXRhc2stJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGlhbG9nRm9ybU1vZHVsZV8xLmNyZWF0ZURpYWxvZ0Zvcm0oeyBibG9ja0RldGFpbHM6IGJsb2NrRGV0YWlscywgY3VycmVudERlc2NyaXB0aW9uSWQ6IGN1cnJlbnREZXNjcmlwdGlvbklkLCBmaWxlQ29udGFpbmVyOiBmaWxlQ29udGFpbmVyIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuaW5uZXJPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW5uZXIgb2JqZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy50eXBlID09PSBcInNjZW5hcmlvX29iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlNjZW5hcmlvIG9iamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICA8cD5TZXQgU2NlbmFyaW8gbmFtZTwvcD5cXG4gICAgICAgICAgICA8bGFibGU+XFxuICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwic2NlbmFyaW8tb2JqZWN0LW5hbWUtaWQtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiAgbWluPVxcXCIzXFxcIj5cIiArIGJsb2NrRGV0YWlscy5vYmplY3ROYW1lICsgXCI8L3RleHRhcmVhPlxcbiAgICAgICAgICAgIDwvbGFibGU+XFxuXFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1zY2VuYXJpby1vYmplY3QtbmFtZS1idG4nIGNsYXNzPVxcXCJtYWluLWJ0blxcXCI+U2F2ZSBvYmplY3QgbmFtZTwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ29iamVjdC1uYW1lLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMuc3Bhd25TZWNvbmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlNjZW5hcmlvIG9iamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICA8cD5TZXQgU2NlbmFyaW8gbmFtZTwvcD5cXG4gICAgICAgICAgICA8bGFibGU+XFxuICAgICAgICAgICAgICAgIDxwPlNwYXduIFNlY29uZHM8L3A+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGlkPVxcXCJzcGF3bi1zZWNvbmRzLWlkLVwiICsgY3VycmVudERlc2NyaXB0aW9uSWQgKyBcIlxcXCIgIG1pbj1cXFwiMVxcXCIgdmFsdWU9XCIgKyAoKGJsb2NrRGV0YWlscy5zcGF3blNlY29uZHMpID8gYmxvY2tEZXRhaWxzLnNwYXduU2Vjb25kcyA6IDApICsgXCIgPlxcbiAgICAgICAgICAgIDwvbGFibGU+XFxuICAgICAgICAgICAgPGxhYmxlPlxcbiAgICAgICAgICAgICAgICA8cD5NYXggTnVtYmVyIE9mIEl0ZW1zPC9wPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBpZD1cXFwibmV4dC1udW1iZXItb2YtaXRlbXMtaWQtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiAgbWluPVxcXCIxXFxcIiB2YWx1ZT1cIiArICgoYmxvY2tEZXRhaWxzLm1heE51bWJlck9mSXRlbSkgPyBibG9ja0RldGFpbHMubWF4TnVtYmVyT2ZJdGVtIDogMCkgKyBcIiA+XFxuICAgICAgICAgICAgPC9sYWJsZT5cXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLW9iamVjdC1zcGF3bi1kYXRhLWJ0bicgY2xhc3M9XFxcIm1haW4tYnRuXFxcIj5TYXZlIHNwYXduIGRhdGE8L2J1dHRvbj4gPGhyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGF0YSA9IGVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdzaW5nbGUtYmxvY2stZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBpbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE5hbWU6ICdvYmplY3Qtc3Bhd24tJyArIGN1cnJlbnREZXNjcmlwdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRGV0YWlscy5zcGF3bmVySGlkZGVuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0ID0gXCI8aDM+U2V0IHRhcmdldCBzcGF3bmVyIGlkPC9oMz5cXG4gICAgICAgIDxsYWJsZT5cXG4gICAgICAgICAgICA8cD5pZCBvZiBoaWRkZW4gc3Bhd25lcjwvcD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBpZD1cXFwiaGlkZGVuLXNwYXduZXItaWQtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiAgbWluPVxcXCIxXFxcIiB2YWx1ZT1cIiArICgoYmxvY2tEZXRhaWxzLnNwYXduZXJIaWRkZW5JZCkgPyBibG9ja0RldGFpbHMuc3Bhd25lckhpZGRlbklkIDogMSkgKyBcIiA+XFxuICAgICAgICA8L2xhYmxlPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRhcmdldD0nc2F2ZS1oaWRkZW4tc3Bhd24taWQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgc3Bhd24gaGlkZGVuIGlkPC9idXR0b24+IDxocj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGEgPSBlbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lOiBcImRpdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWROYW1lOiAnb2JqZWN0LXNwYXduLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RldGFpbHMudGFyZ2V0U3Bhd25lcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dCA9IFwiPGgzPlNldCBzcGF3biBoaWRkZW4gaWQ8L2gzPlxcbiAgICAgICAgPHA+MSwgMiwgMyAuLi4uPC9wPlxcbiAgICAgICAgPGxhYmxlPlxcbiAgICAgICAgICAgIDxwPmFycmF5IG9mIGFsbCB0YXJnZXQgaGlkZGVuIHNwYXduZXIgaWQ8L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0YXJnZXQtaGlkZGVuLXNwYXduZXItaWQtXCIgKyBjdXJyZW50RGVzY3JpcHRpb25JZCArIFwiXFxcIiAgbWluPVxcXCIxXFxcIiB2YWx1ZT1cIiArICgoYmxvY2tEZXRhaWxzLnRhcmdldFNwYXduZXJJZCkgPyBibG9ja0RldGFpbHMudGFyZ2V0U3Bhd25lcklkIDogJzEsIDInKSArIFwiID5cXG4gICAgICAgIDwvbGFibGU+XFxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFyZ2V0PSdzYXZlLXRhcmdldC1oaWRkZW4tc3Bhd24taWQtYnRuJyBjbGFzcz1cXFwibWFpbi1idG5cXFwiPlNhdmUgaGlkZGVuIHNwYXduZXIgZGF0YTwvYnV0dG9uPiA8aHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3NpbmdsZS1ibG9jay1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTmFtZTogJ29iamVjdC1zcGF3bi0nICsgY3VycmVudERlc2NyaXB0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkUmVzdWx0cywgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtZWxldmF0b3ItcmFuZ2UtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS13aWR0aC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWhlaWdodC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXgtcG9zLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUteS1wb3MtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1kZXNjcmlwdGlvbi1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS10aXBzLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXN1Y2Nlc3MtdGV4dC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1yZXF1aXJlLXRleHQtYnRuJzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUtcmVxdWlyZS1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAxOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1jb250YWluLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDIxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLW5wYy1iZWhhdmlvci1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAyM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1ucGMtam91cm5hbC10YXNrLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWRpYWxvZy1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCAyOV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS1kb29yLXNldHRpbmdzLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDMyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLXNjZW5hcmlvLW9iamVjdC1uYW1lLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDM1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLW9iamVjdC1zcGF3bi1kYXRhLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDM3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzYXZlLWhpZGRlbi1zcGF3bi1pZC1idG4nOiByZXR1cm4gWzMgLypicmVhayovLCA0MF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZS10YXJnZXQtaGlkZGVuLXNwYXduLWlkLWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDQyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndmFsdWVPZk1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjZWxldmF0b3ItcmFuZ2UtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3dpZHRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3dpZHRoLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWyd3aWR0aCddID0gdGFyZ2V0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tQcmV2aWV3SW1hZ2VbJ2hlaWdodCddID0gdGFyZ2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2hlaWdodC1wcm9wZXJ0eS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1ByZXZpZXdJbWFnZVsnd2lkdGgnXSA9IHRhcmdldC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrUHJldmlld0ltYWdlWydoZWlnaHQnXSA9IHRhcmdldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Jsb2NrUmVsYXRpdmVYUG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3gtcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICd3aWR0aCBpcyBzZXQnIDogJyBzYXZlIHdpZHRoIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2Jsb2NrUmVsYXRpdmVZUG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3ktcG9zLXByb3BlcnR5LScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnd2lkdGggaXMgc2V0JyA6ICcgc2F2ZSB3aWR0aCBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjZGVzY3JpcHRpb24tZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2Rlc2NyaXB0aW9uIGZpZWxkJyA6ICcgc2F2ZSBkZXNjcmlwdGlvbiBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0aXBzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3RpcHMtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ3RpcHMgZmllbGQnIDogJyBzYXZlIHRpcHMgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc3VjY2Vzc1RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjc3VjY2Vzc1RleHQtZmllbGQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IChmaWVsZFJlc3VsdHMpID8gJ2Rlc2NyaXB0aW9uIGZpZWxkJyA6ICcgc2F2ZSBkZXNjcmlwdGlvbiBmaWVsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdyZXF1aXJlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNyZXF1aXJlVGV4dC1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAncmVxdWlyZSB0ZXh0IGZpZWxkJyA6ICcgc2F2ZSByZXF1aXJlIHRleHQgZmllbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE5OiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmVxdWlyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNyZXF1aXJlLWZpZWxkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzLnJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdyZXF1aXJlIGZpZWxkJyA6ICcgc2F2ZSByZXF1aXJlIGZpZWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjY29udGFpbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnY29udGFpbiBvYmplY3QnIDogJyBzYXZlIGNvbnRhaW4gb2JqZWN0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2JlaGF2aW9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI25wYy1iZWhhdmlvci1pZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnY29udGFpbiBvYmplY3QnIDogJyBzYXZlIGNvbnRhaW4gb2JqZWN0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2pvdXJuYWxUYXNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI25wYy1qb3VybmFsLXRhc2staWQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0LXJlcXVlc3QtZGlhbG9nLWlkLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkZWZhdWx0UmVxdWVzdERpYWxvZ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNkZWZhdWx0LXJlcXVlc3QtZGlhbG9nLWlkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQtcmVxdWVzdC1kaWFsb2ctaWQtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2RlZmF1bHRTdWNjZXNzRGlhbG9nSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI2RlZmF1bHQtc3VjY2Vzcy1kaWFsb2ctaWQtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gKGZpZWxkUmVzdWx0cykgPyAnY29udGFpbiBvYmplY3QnIDogJyBzYXZlIGNvbnRhaW4gb2JqZWN0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOTogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjY29udGFpbi1maWVsZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5kaWFsb2cuZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNucGMtbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMuZGlhbG9nLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSAoZmllbGRSZXN1bHRzKSA/ICdjb250YWluIG9iamVjdCcgOiAnIHNhdmUgY29udGFpbiBvYmplY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnZG9vcklkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3RlbGVwb3J0LXNldC1pZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlscy5ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0YXJnZXRJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjdGVsZXBvcnQtdGFyZ2V0LXNldC1pZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzU6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdvYmplY3ROYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3NjZW5hcmlvLW9iamVjdC1uYW1lLWlkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5kZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlc3VsdHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0NV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzc6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzcGF3blNlY29uZHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU2VsZWN0b3I6ICcjc3Bhd24tc2Vjb25kcy1pZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdtYXhOdW1iZXJPZkl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI25leHQtbnVtYmVyLW9mLWl0ZW1zLWlkLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVzdWx0cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDQ1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hhbmdlRGF0YUluQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NwYXduZXJIaWRkZW5JZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTZWxlY3RvcjogJyNoaWRkZW4tc3Bhd25lci1pZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VEYXRhSW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGFyZ2V0U3Bhd25lcklkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3RhcmdldC1oaWRkZW4tc3Bhd25lci1pZC0nICsgY3VycmVudERlc2NyaXB0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZXN1bHRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gKGZpZWxkUmVzdWx0cykgPyBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLXN1Y2Nlc3NcXFwiID4gU3VjY2Vzc2Z1bGx5IHNhdmVkICdcIiArIGZpZWxkTmFtZSArIFwiJyA8L3A+XCIgOiBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLWVycm9yXFxcIiA+VGhlcmUgaXMgYSBwcm9ibGVtIGluICdcIiArIGZpZWxkTmFtZSArIFwiJyBpIGNhbid0IHNhdmU8L3A+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBkYXRhQ2hlY2tfMSwgcmVxdWlyZWRQcmV2aWV3UGljXzEsIHBpY18xLCBsaW5rXzEsIF9iLCBkYXRhRmFjZSwgZmFjZUxpbmssIF9jLCBwaWN0dXJlLCBkYXRhQ2hlY2ssIHJlcXVpcmVkUHJldmlld1BpYywgcGljLCBsaW5rLCBfZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdC1wcmV2aWV3LWJ0bic6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXZpZXctZGlhbG9nLWZhY2UnOiByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoYW5nZURhdGFJbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdvYmplY3RQaWN0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNlbGVjdG9yOiAnI3ByZXZpZXctcmVxdWlyZS1vYmplY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmRldGFpbHMucnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoZWNrXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jb250YWluLW9iamVjdCcpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbi1waWN0dXJlLScgKyBjdXJyZW50RGVzY3JpcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNfMSA9ICh0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlKSA/IHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUgOiAnY29tcHV0ZXItZGF0YS5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua18xID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBkYXRhQ2hlY2tfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA9IGxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYiA9IHRhcmdldC5kZXRhaWxzLnJ1bGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3JlYXRlQmFzZTY0RW5jb2RpbmdQaWN0dXJlKHsgcGljdHVyZUxpbms6IGxpbmtfMSwgdGFyZ2V0T2JqZWN0OiB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlID0gbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLm9iamVjdFBpY3R1cmUgPSBfZS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFByZXZpZXdQaWNfMVsnc3JjJ10gPSB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlOyAvLyBsaW5rOyAvL2NvbXB1dGVyLWRhdGEucG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1kaWFsb2ctZmFjZScpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZUxpbmsgPSBnbG9iYWxWYXJpYWJsZXNfMS5fX0hPU1QgKyAnL2xldmVsLWNyZWF0b3IvYXNzZXRzL2VuZW15T2JqZWN0L2F2YXRhci8nICsgZGF0YUZhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyA9IGJsb2NrRGV0YWlscy5kaWFsb2cuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyZWF0ZUJhc2U2NEVuY29kaW5nUGljdHVyZSh7IHBpY3R1cmVMaW5rOiBmYWNlTGluaywgdGFyZ2V0T2JqZWN0OiBibG9ja0RldGFpbHMuZGlhbG9nLmRlZmF1bHQuZmFjZVBpY3R1cmVBYnNvbHV0ZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmZhY2VQaWN0dXJlQWJzb2x1dGUgPSBfZS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1mYWNlLXBpY3R1cmUtJyArIGN1cnJlbnREZXNjcmlwdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVbJ3NyYyddID0gYmxvY2tEZXRhaWxzLmRpYWxvZy5kZWZhdWx0LmZhY2VQaWN0dXJlQWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jb250YWluLW9iamVjdCcpWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRQcmV2aWV3UGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW4tcGljdHVyZS0nICsgY3VycmVudERlc2NyaXB0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljID0gKHRhcmdldC5kZXRhaWxzLnJ1bGVzLm9iamVjdFBpY3R1cmUpID8gdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSA6ICdjb21wdXRlci1kYXRhLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gZ2xvYmFsVmFyaWFibGVzXzEuX19IT1NUICsgJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9jaGFyYWN0ZXJzT2JqZWN0cy9pbm5lci1vYmplY3RzLycgKyBkYXRhQ2hlY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZCA9IHRhcmdldC5kZXRhaWxzLnJ1bGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3JlYXRlQmFzZTY0RW5jb2RpbmdQaWN0dXJlKHsgcGljdHVyZUxpbms6IGxpbmssIHRhcmdldE9iamVjdDogdGFyZ2V0LmRldGFpbHMucnVsZXMub2JqZWN0UGljdHVyZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kLm9iamVjdFBpY3R1cmUgPSBfZS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUHJldmlld1BpY1snc3JjJ10gPSB0YXJnZXQuZGV0YWlscy5ydWxlcy5vYmplY3RQaWN0dXJlOyAvL2NvbXB1dGVyLWRhdGEucG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZW5lcmF0ZUlucHV0ID0gZ2VuZXJhdGVJbnB1dDtcclxuZnVuY3Rpb24gY3JlYXRlQmFzZTY0RW5jb2RpbmdQaWN0dXJlKF9hKSB7XHJcbiAgICB2YXIgcGljdHVyZUxpbmsgPSBfYS5waWN0dXJlTGluaywgdGFyZ2V0T2JqZWN0ID0gX2EudGFyZ2V0T2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgaWYgKCFwaWN0dXJlTGluaylcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzcG9uc2UsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSA1ODtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBwaWN0dXJlTGluaztcclxuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVVSTCwgZ2V0UGljdHVyZUJhc2UsIHBpY3R1cmVCYXNlVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjYW52YXMudG9EYXRhVVJMKCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UGljdHVyZUJhc2UgPSBkYXRhVVJMLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvKHBuZ3xqcGcpO2Jhc2U2NCwvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZUJhc2VVcmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBnZXRQaWN0dXJlQmFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwaWN0dXJlQmFzZVVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T2JqZWN0ID0gcGljdHVyZUJhc2VVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZSh0YXJnZXRPYmplY3QpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IH07XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnQgcmViYXNlJyk7XHJcbiAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VEYXRhSW5CbG9jayhfYSkge1xyXG4gICAgdmFyIGtleSA9IF9hLmtleSwgZmllbGRTZWxlY3RvciA9IF9hLmZpZWxkU2VsZWN0b3IsIHRhcmdldCA9IF9hLnRhcmdldDtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmxvY2tBbGVydE1lc3NhZ2UsIGN1cnJlbnRGaWVsZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0FsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1hbGVydC1tZXNzYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWVsZFNlbGVjdG9yKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZWxkID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEZpZWxkLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IFwiSW52YWxpZCBWYWx1ZSBvZiBcIiArIGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSAoY3VycmVudEZpZWxkLnZhbHVlKSA/IGN1cnJlbnRGaWVsZC52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChjdXJyZW50RmllbGQudmFsdWUgJiYgdGFyZ2V0W2tleV0gJiYga2V5ICYmIGZpZWxkU2VsZWN0b3IpID8gdHJ1ZSA6IGZhbHNlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZElubmVyRGF0YShfYSkge1xyXG4gICAgdmFyIGZpbGVDb250YWluZXIgPSBfYS5maWxlQ29udGFpbmVyLCB0YXJnZXQgPSBfYS50YXJnZXQ7XHJcbiAgICB2YXIgYmxvY2tEZXRhaWxzID0gdGFyZ2V0LmRldGFpbHM7XHJcbiAgICB2YXIgaXRlbUJhY2tncm91bmRJbWFnZSA9IChibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10pID8gYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddIDogYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ107IC8vIHByZXZpZXdUZXh0dXJlXHJcbiAgICBpdGVtQmFja2dyb3VuZEltYWdlID0gKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSAmJiBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10pID8gdGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlWydwcmV2aWV3VGV4dHVyZSddIDpcclxuICAgICAgICAodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZS50ZXh0dXJlIDogYmxvY2tEZXRhaWxzWyd0ZXh0dXJlJ107XHJcbiAgICB2YXIgaXRlbUltYWdlID0gKGJsb2NrRGV0YWlsc1sncHJldmlld1RleHR1cmUnXSkgPyBibG9ja0RldGFpbHNbJ3ByZXZpZXdUZXh0dXJlJ10gOiBibG9ja0RldGFpbHNbJ3RleHR1cmUnXTtcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSwgYmxvY2tEZXRhaWxzWydwcmV2aWV3VGV4dHVyZSddLCBibG9ja0RldGFpbHNbJ3RleHR1cmUnXSwgaXRlbUJhY2tncm91bmRJbWFnZSk7XHJcbiAgICB2YXIgYmFja2dyb3VuZEltYWdlID0gKHRhcmdldC5iYWNrZ3JvdW5kVGV4dHVyZSkgPyBcIjxpbWcgd2lkdGg9XFxcIjUwXFxcIiBzcmM9XFxcIlwiICsgKGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGl0ZW1CYWNrZ3JvdW5kSW1hZ2UpICsgXCJcXFwiIGFsdD1cXFwiXCIgKyB0YXJnZXQuYmFja2dyb3VuZFRleHR1cmUuaWQgKyBcIlxcXCI+XCIgOiBcIlwiO1xyXG4gICAgdmFyIGlubmVyVGV4dCA9IFwiPGRpdiBjbGFzcz1cXFwiYmxvY2stZGVzY3JpcHRpb24td3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hdGVyaWFsLXByZXZpZXctd3JhcHBlclxcXCI+XFxuICAgICAgICA8aW1nIGlkPVxcXCJibG9jay1wcmV2aWV3LWltYWdlXFxcIiB3aWR0aD1cXFwiMjAwXFxcIiBzcmM9XFxcIlwiICsgKGdsb2JhbFZhcmlhYmxlc18xLl9fSE9TVCArIGl0ZW1JbWFnZSkgKyBcIlxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8dWw+PGRpdiBpZD1cXFwiYmxvY2stYWxlcnQtbWVzc2FnZVxcXCI+PC9kaXY+XFxuICAgICAgICA8bGk+TmFtZTogXCIgKyBibG9ja0RldGFpbHMuaWQgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+SW5kZXg6IFwiICsgdGFyZ2V0LmluZGV4ICsgXCI8L2xpPlxcbiAgICAgICAgPGxpPlR5cGU6IFwiICsgKChibG9ja0RldGFpbHMudHlwZSkgPyBibG9ja0RldGFpbHMudHlwZSA6ICcnKSArIFwiPC9saT5cXG4gICAgICAgIDxsaT53aWR0aDogXCIgKyB0YXJnZXQud2lkdGggKyBcIjwvbGk+XFxuICAgICAgICA8bGk+aGVpZ2h0OiBcIiArIHRhcmdldC5oZWlnaHQgKyBcIjwvbGk+XFxuICAgICAgICA8bGk+WDogXCIgKyB0YXJnZXQueCArIFwiPC9saT5cXG4gICAgICAgIDxsaT5ZOiBcIiArIHRhcmdldC55ICsgXCI8L2xpPlxcblxcbiAgICA8cD5cIiArICgodGFyZ2V0LmJhY2tncm91bmRUZXh0dXJlKSA/IFwiQmFja2dyb3VuZCB0ZXh0dXJlXCIgOiBcIlwiKSArIFwiPC9wPlxcbiAgICBcIiArIGJhY2tncm91bmRJbWFnZSArIFwiXFxuICAgIDwvdWw+PC9kaXY+PGhyPlwiO1xyXG4gICAgdmFyIGl0ZW1EYXRhID0gZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgIHRhZ25hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgY2xhc3NMaXN0OiAnc2luZ2xlLWJsb2NrLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICBpbm5lclRleHQ6IGlubmVyVGV4dCxcclxuICAgICAgICBpZE5hbWU6IG51bGxcclxuICAgIH0pO1xyXG4gICAgZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGF0YSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkSW5uZXJEYXRhID0gbG9hZElubmVyRGF0YTtcclxuZnVuY3Rpb24gZWxlbWVudENyZWF0b3IoX2EpIHtcclxuICAgIHZhciB0YWduYW1lID0gX2EudGFnbmFtZSwgY2xhc3NMaXN0ID0gX2EuY2xhc3NMaXN0LCBpbm5lclRleHQgPSBfYS5pbm5lclRleHQsIGlkTmFtZSA9IF9hLmlkTmFtZTtcclxuICAgIHZhciBuZXdEb2N1bWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcbiAgICBuZXdEb2N1bWVudC5jbGFzc05hbWUgPSAoY2xhc3NMaXN0KSA/IGNsYXNzTGlzdCA6IGZhbHNlO1xyXG4gICAgbmV3RG9jdW1lbnQuaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xyXG4gICAgaWYgKGlkTmFtZSlcclxuICAgICAgICBuZXdEb2N1bWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZE5hbWUpO1xyXG4gICAgcmV0dXJuIG5ld0RvY3VtZW50O1xyXG59XHJcbmV4cG9ydHMuZWxlbWVudENyZWF0b3IgPSBlbGVtZW50Q3JlYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGdsb2JhbFZhcmlhYmxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbnZhciByZXF1ZXN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL3NlcnZlci1yZXF1ZXN0cy9yZXF1ZXN0c01vZHVsZVwiKTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuLi91aS9wcmV2aWV3XCIpO1xyXG52YXIgaW5pdFN0YXJ0T2JqZWN0XzEgPSByZXF1aXJlKFwiLi9pbml0U3RhcnRPYmplY3RcIik7XHJcbnZhciBibG9ja0NvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwiLi4vY29uc3RydWN0b3JzL2Jsb2NrQ29uc3RydWN0b3JcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xID0gcmVxdWlyZShcIi4vYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIHNldE1hcFNpemUoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgQmxvY2tDb25zdHJ1Y3RvciA9IF9hLkJsb2NrQ29uc3RydWN0b3I7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydtYXAtc2l6ZSddO1xyXG4gICAgdmFyIGVycm9yRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLXNpemUtZXJyb3InKTtcclxuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0LW1hcC1zaXplJyk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEsIF9pLCBmb3JtXzEsIGZpZWxkLCBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGZvcm1fMSA9IGZvcm07IF9pIDwgZm9ybV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBmb3JtXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgJiYgZmllbGQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgJiYgIWZpZWxkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoZm9ybURhdGFbJ2hvcml6b250YWxCbG9jayddKSA8IHBhcnNlSW50KG1haW5PYmplY3QubWFwRGVmYXVsdFdpZHRoKSB8fCBwYXJzZUludChmb3JtRGF0YVsndmVydGljYWxCbG9jayddKSA8IHBhcnNlSW50KG1haW5PYmplY3QubWFwRGVmYXVsdEhlaWdodCkpKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5NYXAgbWluIHNpemUgaXMgXCIgKyBtYWluT2JqZWN0Lm1hcERlZmF1bHRXaWR0aCArIFwiIHggXCIgKyBtYWluT2JqZWN0Lm1hcERlZmF1bHRIZWlnaHQgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSkgPiBwYXJzZUludChtYWluT2JqZWN0Lm1heEhvcml6b250YWxCbG9ja3MpIHx8IHBhcnNlSW50KGZvcm1EYXRhWyd2ZXJ0aWNhbEJsb2NrJ10pID4gcGFyc2VJbnQobWFpbk9iamVjdC5tYXhWZXJ0aWNhbEJsb2NrcykpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5NYXAgbWF4IHNpemUgaXMgXCIgKyBtYWluT2JqZWN0Lm1heEhvcml6b250YWxCbG9ja3MgKyBcIiB4IFwiICsgbWFpbk9iamVjdC5tYXhWZXJ0aWNhbEJsb2NrcyArIFwiPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBlcnJvckZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBcIjxwIGNsYXNzPSdzaWRlLXBhbmVsLWVycm9yJz5QbGVhc2Ugd2FpdCBtYXAgaXMgYnVpbGQuLi48L3A+XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuaW5uZXJIVE1MID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8xLmNoYW5nZUJsb2NrQXJyYXlTaXplKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgZm9ybURhdGE6IGZvcm1EYXRhLCBCbG9ja0NvbnN0cnVjdG9yOiBCbG9ja0NvbnN0cnVjdG9yIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBcIjxwIGNsYXNzPVxcXCJzaWRlLXBhbmVsLXN1Y2Nlc3NcXFwiPm1hcCBzaXplIHNldCBcIiArIGZvcm1EYXRhWydob3Jpem9udGFsQmxvY2snXSArIFwiIHggXCIgKyBmb3JtRGF0YVsndmVydGljYWxCbG9jayddICsgXCIgYmxvY2tzPC9wPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zZXRNYXBTaXplID0gc2V0TWFwU2l6ZTtcclxuZnVuY3Rpb24gZ2V0TWFwRGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1hcE5hbWUsIHJlcywgY29udmVydFRvT2JqZWN0LCBzaXplRm9ybTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBtYXBOYW1lID0gZG9jdW1lbnQuZm9ybXNbJ25ldy1tYXAnXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5hbGxNYXBPYmplY3RzLm1hcChmdW5jdGlvbiAoYmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0U3RhcnRPYmplY3RfMS5iYWNrVG9PYmplY3QoeyBkYXRhOiBibG9jaywgY29uc3RydWN0b3I6IGJsb2NrQ29uc3RydWN0b3JfMS5CbG9ja0NvbnN0cnVjdG9yIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydFRvT2JqZWN0ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcE5hbWUudmFsdWUgPSByZXMubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0Lm1hcFdpZHRoID0gcmVzLm1hcFNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbk9iamVjdC5tYXBIZWlnaHQgPSByZXMubWFwU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUZvcm0gPSBkb2N1bWVudC5mb3Jtc1snbWFwLXNpemUnXTtcclxuICAgICAgICAgICAgICAgICAgICBzaXplRm9ybS5ob3Jpem9udGFsQmxvY2sudmFsdWUgPSBtYWluT2JqZWN0Lm1hcFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVGb3JtLnZlcnRpY2FsQmxvY2sudmFsdWUgPSBtYWluT2JqZWN0Lm1hcEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqZWN0LmFsbFJlZGFjdG9yQmxvY2sgPSBjb252ZXJ0VG9PYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVOZXdNYXAoKSB7XHJcbiAgICB2YXIgY3JlYXRlTWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVNYXBcIik7XHJcbiAgICBjcmVhdGVNYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlTmV3TWFwID0gY3JlYXRlTmV3TWFwO1xyXG5mdW5jdGlvbiBsb2FkTWFwKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9wZW5CdXR0b24sIHNlbGVjdEZpbGVzLCBmaWxlQ29udGFpbmVyLCBjbG9zZURpYWxvZztcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbk1hcFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0RmlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1maWxlc1wiKTtcclxuICAgICAgICAgICAgZmlsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5uZXItY29udGVudFwiKTtcclxuICAgICAgICAgICAgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlRGlhbG9nXCIpO1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFwRmlsZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfMS5zaG93RWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdHNNb2R1bGVfMS5nZXREYXRhKHsgdXJsOiBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBnbG9iYWxWYXJpYWJsZS5fX01BUF9EQVRBX1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRmlsZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29udGVudCh7IGRpc3BsYXlFbGVtZW50OiBmaWxlQ29udGFpbmVyLCBkYXRhOiBtYXBGaWxlLCBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBzZWxlY3RGaWxlczogc2VsZWN0RmlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3XzEuaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBzZWxlY3RGaWxlcyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubG9hZE1hcCA9IGxvYWRNYXA7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChfYSkge1xyXG4gICAgdmFyIGRpc3BsYXlFbGVtZW50ID0gX2EuZGlzcGxheUVsZW1lbnQsIGRhdGEgPSBfYS5kYXRhLCBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgc2VsZWN0RmlsZXMgPSBfYS5zZWxlY3RGaWxlcztcclxuICAgIGlmICghZGF0YSB8fCAhZGlzcGxheUVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZGlzcGxheUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgdmFyIGlubmVyRmlsZSA9IGJsb2NrQ3JlYXRvcih7IHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6ICdzaW5nbGUtaXRlbS13cmFwcGVyJyxcclxuICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxoMj5cIiArIGZpbGUubmFtZSArIFwiPC9oMj5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubmVyRmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2V0TWFwRGF0YSh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGZpbGUubGluayArICcvJyArIGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIG1haW5PYmplY3Q6IG1haW5PYmplY3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZpZXdfMS5oaWRlRWxlbWVudCh7IGVsZW1lbnQ6IHNlbGVjdEZpbGVzIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BsYXlFbGVtZW50LmFwcGVuZENoaWxkKGlubmVyRmlsZSk7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZmlsZSA9IGRhdGFfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShmaWxlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBibG9ja0NyZWF0b3IoX2EpIHtcclxuICAgIHZhciB0YWcgPSBfYS50YWcsIHN0eWxlQ2xhc3MgPSBfYS5zdHlsZUNsYXNzLCBpbm5lckNvbnRlbnQgPSBfYS5pbm5lckNvbnRlbnQ7XHJcbiAgICB2YXIgbmV3QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBuZXdCbG9jay5jbGFzc05hbWUgPSBzdHlsZUNsYXNzO1xyXG4gICAgbmV3QmxvY2suaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xyXG4gICAgcmV0dXJuIG5ld0Jsb2NrO1xyXG59XHJcbmV4cG9ydHMuYmxvY2tDcmVhdG9yID0gYmxvY2tDcmVhdG9yO1xyXG5mdW5jdGlvbiBzYXZlTWFwKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3Q7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZvcm0sIGJ1dHRvbiwgbWVzc2FnZUZpZWxkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LmZvcm1zWyduZXctbWFwJ107XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLW1hcC1idXR0b24nKTtcclxuICAgICAgICAgICAgbWVzc2FnZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUtbWFwLWVycm9yJyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEZvcm0sIHNhdmVEYXRhLCBtYXBGaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybSA9IGdldEZvcm1EYXRhKHsgZm9ybTogZm9ybSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdEZvcm0pIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRGb3JtWydzdGF0dXMnXSA9PT0gJ3JlamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9XFxcInNpZGUtcGFuZWwtZXJyb3JcXFwiPkZhaWwgdG8gc2F2ZSBtYXAsIGNoZWNrIG1hcCBOYW1lPC9wPiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybVsnbWFwU2l6ZSddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWFpbk9iamVjdC5tYXBXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0Lm1hcEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZURhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ2NyZWF0aW5nVGltZSddID0gc2F2ZURhdGEuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZvcm1bJ2FsbE1hcE9iamVjdHMnXSA9IG1haW5PYmplY3QuYWxsUmVkYWN0b3JCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRGb3JtLCAnc2F2ZScsIG1haW5PYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RzTW9kdWxlXzEucG9zdERhdGEoeyB1cmw6IGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGdsb2JhbFZhcmlhYmxlLl9fQkxPQ0tfQ09OU1RSVUNUT1JfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRGb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbnVsbCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRmlsZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwRmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gXCI8cD5TYXZlIHRpbWU6IFwiICsgKHNhdmVEYXRhLmdldEhvdXJzKCkgLSAxKSArIFwiIDogXCIgKyBzYXZlRGF0YS5nZXRNaW51dGVzKCkgKyBcIiA6IFwiICsgc2F2ZURhdGEuZ2V0U2Vjb25kcygpICsgXCI8L3A+XFxuICAgICAgICAgICAgICAgIDxwPlNpemU6IFwiICsgbWFwRmlsZS5maWxlU2l6ZSArIFwiPC9wPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiICsgbWFwRmlsZS51cmwgKyBcIiBvbmNsaWNrPVxcXCIoZnVuY3Rpb24oKXsgd2luZG93Lm9wZW4oJ1wiICsgbWFwRmlsZS51cmwgKyBcIicpfSkoKVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPk9wZW4gaW4gbmV3IHdpbmRvdzwvYT5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFwRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zYXZlTWFwID0gc2F2ZU1hcDtcclxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoX2EpIHtcclxuICAgIHZhciBmb3JtID0gX2EuZm9ybTtcclxuICAgIGlmICghZm9ybSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGZvcm1fMiA9IGZvcm07IF9pIDwgZm9ybV8yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBmb3JtSXRlbXMgPSBmb3JtXzJbX2ldO1xyXG4gICAgICAgIGlmIChmb3JtSXRlbXMubmFtZSAmJiBmb3JtSXRlbXMudmFsdWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0W2Zvcm1JdGVtcy5uYW1lXSA9IGZvcm1JdGVtcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUl0ZW1zLm5hbWUgJiYgIWZvcm1JdGVtcy52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkluY29ycmVjdCBEYXRhXCIsIHN0YXR1czogXCJyZWplY3RcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZ2V0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdyZWplY3QnLCBtZXNzYWdlOiByZXMuc3RhdHVzVGV4dCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCI1MDAgTm8gc2VydmVyIGNvbm5lY3Rpb24hXCIsIHN0YXR1czogXCJlcnJvclwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXREYXRhID0gZ2V0RGF0YTtcclxuZnVuY3Rpb24gcG9zdERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogKG1ldGhvZCkgPyBtZXRob2QgOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbG9iYWxWYXJpYWJsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vcmVkYWN0b3IvZ2xvYmFsVmFyaWFibGVzXCIpKTtcclxuZnVuY3Rpb24gcHJldmlld09mQmxvY2soX2EpIHtcclxuICAgIHZhciBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gX2Euc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbSwgZXZlbnQgPSBfYS5ldmVudDtcclxuICAgIHZhciBwcmV2aWV3RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZC1pdGVtJyk7XHJcbiAgICBpZiAoIXNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0pXHJcbiAgICAgICAgaGlkZUVsZW1lbnQoeyBlbGVtZW50OiBwcmV2aWV3RWxlbWVudCB9KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBpdGVtSW1hZ2UgPSAoc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsncHJldmlld1RleHR1cmUnXSkgPyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtWydwcmV2aWV3VGV4dHVyZSddIDogc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbVsndGV4dHVyZSddO1xyXG4gICAgICAgIHNob3dFbGVtZW50KHsgZWxlbWVudDogcHJldmlld0VsZW1lbnQgfSk7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnRbJ3N0eWxlJ10gPSBcIm1hcmdpbi10b3A6IFwiICsgKGV2ZW50LmNsaWVudFkgKyAxMCkgKyBcInB4OyBtYXJnaW4tbGVmdDogXCIgKyAoZXZlbnQuY2xpZW50WCArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgcHJldmlld0VsZW1lbnQuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cIiArIChnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyBpdGVtSW1hZ2UpICsgXCIgPlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucHJldmlld09mQmxvY2sgPSBwcmV2aWV3T2ZCbG9jaztcclxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG59XHJcbmV4cG9ydHMuaGlkZUVsZW1lbnQgPSBoaWRlRWxlbWVudDtcclxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoX2EpIHtcclxuICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBlbGVtZW50LnN0eWxlID0gJ2Rpc3BsYXk6IGJsb2NrJztcclxufVxyXG5leHBvcnRzLnNob3dFbGVtZW50ID0gc2hvd0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibG9ja0ludGVyYWN0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tJbnRlcmFjdE1vZHVsZVwiKTtcclxudmFyIHByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL3ByZXZpZXdcIik7XHJcbnZhciBzaWRlUGFuZWxBY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3Ivc2lkZVBhbmVsQWN0aW9uc1wiKTtcclxudmFyIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vcmVkYWN0b3IvYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVcIik7XHJcbnZhciBibG9ja0RhdGFSZWRhY3Rvck1vZHVsZV8yID0gcmVxdWlyZShcIi4uL3JlZGFjdG9yL2Jsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXCIpO1xyXG52YXIgZ2xvYmFsVmFyaWFibGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL3JlZGFjdG9yL2dsb2JhbFZhcmlhYmxlc1wiKSk7XHJcbmZ1bmN0aW9uIGluaXRWaWV3KCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWRhY3Rvci1maWVsZCcpO1xyXG4gICAgdGhpcy5jb250ZXh0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuY29udGV4dEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY29udGV4dFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY29udGV4dEhlaWdodDtcclxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbn1cclxuZXhwb3J0cy5pbml0VmlldyA9IGluaXRWaWV3O1xyXG5mdW5jdGlvbiBtYXBNb3ZlQ29udHJvbGxlcnMoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgeE1vdmVWYWx1ZSA9IDAsIHlNb3ZlVmFsdWUgPSAwO1xyXG4gICAgICAgIGlmIChtYWluT2JqZWN0LmFjdGl2ZURlc2NyaXB0aW9uRmllbGRzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgKGV2ZW50LmtleUNvZGUgPT0gODcgfHwgZXZlbnQua2V5Q29kZSA9PSAzOCk6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAoZXZlbnQua2V5Q29kZSA9PSA2OCB8fCBldmVudC5rZXlDb2RlID09IDM5KTpcclxuICAgICAgICAgICAgICAgIHhNb3ZlVmFsdWUgPSBtYWluT2JqZWN0Lm1hcE1vdmVTcGVlZCAqIC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKGV2ZW50LmtleUNvZGUgPT0gODMgfHwgZXZlbnQua2V5Q29kZSA9PSA0MCk6XHJcbiAgICAgICAgICAgICAgICB5TW92ZVZhbHVlID0gbWFpbk9iamVjdC5tYXBNb3ZlU3BlZWQgKiAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIChldmVudC5rZXlDb2RlID09IDY1IHx8IGV2ZW50LmtleUNvZGUgPT0gMzcpOlxyXG4gICAgICAgICAgICAgICAgeE1vdmVWYWx1ZSA9IG1haW5PYmplY3QubWFwTW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXZlbnQua2V5Q29kZSA9PSA3NzpcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVJlZGFjdG9yTW9kdWxlXzIubWluaU1hcHBlcih7IG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvY2tJbnRlcmFjdE1vZHVsZV8xLm1vdmVBbGxTY2VuZSh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIHhNb3ZlVmFsdWU6IHhNb3ZlVmFsdWUsIHlNb3ZlVmFsdWU6IHlNb3ZlVmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbWFpbk9iamVjdC5hbGxSZWRhY3RvckJsb2NrOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXRbJ25vZGVOYW1lJ10gIT0gJ0NBTlZBUycpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYmxvY2tJbnRlcmFjdE1vZHVsZV8xLmNvbGxpc2lvbkRldGVjdG9yKHsgb2JqZWN0OiBibG9jaywgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldFsnb2Zmc2V0TGVmdCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXRbJ29mZnNldFRvcCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNVxyXG4gICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhUmVkYWN0b3JNb2R1bGVfMS5vcGVuUmVkYWN0b3JXaW5kb3coeyBibG9ja0RhdGE6IGJsb2NrLCBtYWluT2JqZWN0OiBtYWluT2JqZWN0IH0pO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tJbnRlcmFjdE1vZHVsZV8xLmNoYW5nZU9iamVjdE1vZGVsKHsgcmVzdWx0OiByZXN1bHQsIG1haW5PYmplY3Q6IG1haW5PYmplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcHJldmlld18xLnByZXZpZXdPZkJsb2NrKHsgc2VsZWN0ZWRCbG9ja1BhbmVsSXRlbTogbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbklkID0gZXZlbnQudGFyZ2V0WydkYXRhc2V0J10uYnV0dG9uSWQ7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b25JZCkge1xyXG4gICAgICAgICAgICBjYXNlICdyZWRhY3RvckJsb2Nrcyc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5ibG9ja0RhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yRGVjb3JhdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5iYWNrZ3JvdW5kRGF0YWJhc2UsIHNlbGVjdEl0ZW06IGJ1dHRvbklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZGFjdG9yQ2hhcmFjdGVycyc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5jaGFyYWN0ZXJzRGF0YWJhc2UsIHNlbGVjdEl0ZW06IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVkYWN0b3JFbmVteSc6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtc1RvU2lkZUxpc3QoeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBkYXRhQmFzZTogbWFpbk9iamVjdC5lbmVteURhdGFiYXNlLCBzZWxlY3RJdGVtOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZW15JykgIGVuZW15RGF0YWJhc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubWFwTW92ZUNvbnRyb2xsZXJzID0gbWFwTW92ZUNvbnRyb2xsZXJzO1xyXG5mdW5jdGlvbiByZW5kZXJJdGVtc1RvU2lkZUxpc3QoX2EpIHtcclxuICAgIHZhciBtYWluT2JqZWN0ID0gX2EubWFpbk9iamVjdCwgZGF0YUJhc2UgPSBfYS5kYXRhQmFzZSwgc2VsZWN0SXRlbSA9IF9hLnNlbGVjdEl0ZW07XHJcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtaW5zdHJ1bWVudGFsLXBhbmVsJyk7XHJcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChibG9ja0l0ZW0pIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJsb2NrSXRlbSlcclxuICAgICAgICB2YXIgY29weU9mQmxvY2tEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgYmxvY2tJdGVtKTtcclxuICAgICAgICB2YXIgaXRlbUltYWdlID0gKGNvcHlPZkJsb2NrRGF0YVsncHJldmlld1RleHR1cmUnXSkgPyBjb3B5T2ZCbG9ja0RhdGFbJ3ByZXZpZXdUZXh0dXJlJ10gOiBjb3B5T2ZCbG9ja0RhdGFbJ3RleHR1cmUnXTtcclxuICAgICAgICB2YXIgb2JqID0gc2lkZVBhbmVsQWN0aW9uc18xLmJsb2NrQ3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIHN0eWxlQ2xhc3M6ICdzaW5nbGUtYmxvY2staXRlbScsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCI8aW1nIHdpZHRoPVxcXCIxMDAlXFxcIiB0aXRsZT1cXFwiXCIgKyAoKGNvcHlPZkJsb2NrRGF0YS5kZXRhaWxzKSA/IGNvcHlPZkJsb2NrRGF0YS5kZXRhaWxzLmRlc2NyaXB0aW9uIDogY29weU9mQmxvY2tEYXRhLmRlc2NyaXB0aW9uKSArIFwiXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArIGl0ZW1JbWFnZSkgKyBcIic+XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc2lkZVBhbmVsSXRlbXNTZWxlY3RQcm9jZXNzKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgYmxvY2tJdGVtOiBjb3B5T2ZCbG9ja0RhdGEgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG9iaik7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhQmFzZV8xID0gZGF0YUJhc2U7IF9pIDwgZGF0YUJhc2VfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgYmxvY2tJdGVtID0gZGF0YUJhc2VfMVtfaV07XHJcbiAgICAgICAgX2xvb3BfMShibG9ja0l0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0LnByZXBlbmQoY3JlYXRlRGVzdHJveUJsb2NrKHsgbWFpbk9iamVjdDogbWFpbk9iamVjdCwgc2VsZWN0SXRlbTogc2VsZWN0SXRlbSB9KSk7XHJcbiAgICB0YXJnZXQucHJlcGVuZChjcmVhdGVDb3B5QmxvY2soeyBtYWluT2JqZWN0OiBtYWluT2JqZWN0LCBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtIH0pKTtcclxufVxyXG5leHBvcnRzLnJlbmRlckl0ZW1zVG9TaWRlTGlzdCA9IHJlbmRlckl0ZW1zVG9TaWRlTGlzdDtcclxuZnVuY3Rpb24gc2lkZVBhbmVsSXRlbXNTZWxlY3RQcm9jZXNzKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIGJsb2NrSXRlbSA9IF9hLmJsb2NrSXRlbTtcclxuICAgIC8vY29uc29sZS5sb2coYmxvY2tJdGVtKVxyXG4gICAgdmFyIGNvcHlPZmJsb2NrSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGJsb2NrSXRlbSk7XHJcbiAgICBpZiAobWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtKSB7XHJcbiAgICAgICAgbWFpbk9iamVjdC5zZWxlY3RlZEJsb2NrUGFuZWxJdGVtID0gKGNvcHlPZmJsb2NrSXRlbS5pZCAhPSBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0uaWQpID8gY29weU9mYmxvY2tJdGVtIDogbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0gPSBjb3B5T2ZibG9ja0l0ZW07XHJcbiAgICBwcmV2aWV3XzEucHJldmlld09mQmxvY2soeyBzZWxlY3RlZEJsb2NrUGFuZWxJdGVtOiBtYWluT2JqZWN0LnNlbGVjdGVkQmxvY2tQYW5lbEl0ZW0sIGV2ZW50OiBldmVudCB9KTtcclxufVxyXG5leHBvcnRzLnNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2VzcyA9IHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2VzcztcclxuZnVuY3Rpb24gY3JlYXRlRGVzdHJveUJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEl0ZW0gPSBfYS5zZWxlY3RJdGVtO1xyXG4gICAgdmFyIG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2JqLmNsYXNzTmFtZSA9ICdzaW5nbGUtYmxvY2staXRlbSBkZXN0cm95LWJsb2NrLXdyYXBwZXInO1xyXG4gICAgb2JqLmlubmVySFRNTCA9IFwiPGltZyB0aXRsZT1cXFwiQ29weSBzZWxlY3RlZCBvYmplY3RcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svZGVzdHJveS5wbmcnKSArIFwiJz5cIjtcclxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdkZXN0cm95ZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzdHJveWVyOiAnZGVzdHJveWVyJyxcclxuICAgICAgICAgICAgICAgIHRleHR1cmU6ICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svZGVzdHJveS5wbmcnXHJcbiAgICAgICAgICAgIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ29weUJsb2NrKF9hKSB7XHJcbiAgICB2YXIgbWFpbk9iamVjdCA9IF9hLm1haW5PYmplY3QsIHNlbGVjdEl0ZW0gPSBfYS5zZWxlY3RJdGVtO1xyXG4gICAgdmFyIG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2JqLmNsYXNzTmFtZSA9ICdzaW5nbGUtYmxvY2staXRlbSBjb3B5LWJsb2NrLXdyYXBwZXInO1xyXG4gICAgb2JqLmlubmVySFRNTCA9IFwiPGltZyB0aXRsZT1cXFwiQ29weSBzZWxlY3RlZCBvYmplY3RcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBzcmM9J1wiICsgKGdsb2JhbFZhcmlhYmxlLl9fSE9TVCArICcvbGV2ZWwtY3JlYXRvci9hc3NldHMvYmxvY2svY29weS1ibG9jay5wbmcnKSArIFwiJz5cIjtcclxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNpZGVQYW5lbEl0ZW1zU2VsZWN0UHJvY2Vzcyh7IG1haW5PYmplY3Q6IG1haW5PYmplY3QsIGJsb2NrSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb3B5JyxcclxuICAgICAgICAgICAgICAgIGNvcHlCbG9jazogJ2NvcHktYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogJy9sZXZlbC1jcmVhdG9yL2Fzc2V0cy9ibG9jay9jb3B5LWJsb2NrLnBuZydcclxuICAgICAgICAgICAgfSB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBjbGVhclZpZXcoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3R4KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHRXaWR0aCwgdGhpcy5jb250ZXh0SGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLmNsZWFyVmlldyA9IGNsZWFyVmlldztcclxuZnVuY3Rpb24gYmFja2dyb3VuZFJlbmRlcihfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWdCYWNrZ3JvdW5kLCBzeCwgc3k7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRUZXh0dXJlKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWdCYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nQmFja2dyb3VuZC5zcmMgPSBnbG9iYWxWYXJpYWJsZS5fX0hPU1QgKyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZS5zeCkgPyB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICBzeSA9ICh0aGlzLmJhY2tncm91bmRUZXh0dXJlLnN5KSA/IHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc3kgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5PYmplY3QuY3R4LmRyYXdJbWFnZShpbWdCYWNrZ3JvdW5kLCBzeCwgc3ksIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuc1dpZHRoLCB0aGlzLmJhY2tncm91bmRUZXh0dXJlLnNIZWlnaHQsIHRoaXMueE1vdmUsIHRoaXMueU1vdmUsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUud2lkdGgsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZFRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYmFja2dyb3VuZFJlbmRlciA9IGJhY2tncm91bmRSZW5kZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrUGljdHVyZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWcsIHNXaWR0aCwgc0hlaWdodCwgc3gsIHN5O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFpbk9iamVjdC5jdHguc2F2ZSgpOyAvLyBzV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZ2xvYmFsVmFyaWFibGUuX19IT1NUICsgdGhpcy5kZXRhaWxzLnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgc1dpZHRoID0gKHRoaXMuZGV0YWlscy5zV2lkdGgpID8gdGhpcy5kZXRhaWxzLnNXaWR0aCA6IHRoaXMuZGV0YWlscy5pbWFnZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNIZWlnaHQgPSAodGhpcy5kZXRhaWxzLnNIZWlnaHQpID8gdGhpcy5kZXRhaWxzLnNIZWlnaHQgOiB0aGlzLmRldGFpbHMuaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAodGhpcy5kZXRhaWxzLnN4KSA/IHRoaXMuZGV0YWlscy5zeCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3kgPSAodGhpcy5kZXRhaWxzLnN5KSA/IHRoaXMuZGV0YWlscy5zeSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uZGV0YWlscy5zeFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5PYmplY3QuY3R4LmRyYXdJbWFnZShpbWcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB0aGlzLnhNb3ZlICsgcGFyc2VJbnQodGhpcy5ibG9ja1JlbGF0aXZlWFBvcyksIHRoaXMueU1vdmUgKyBwYXJzZUludCh0aGlzLmJsb2NrUmVsYXRpdmVZUG9zKSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5PYmplY3QuY3R4LnJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uZGV0YWlscy5zeFxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlQmxvY2tQaWN0dXJlID0gY3JlYXRlQmxvY2tQaWN0dXJlO1xyXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShfYSkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSBfYS5tYWluT2JqZWN0O1xyXG4gICAgaWYgKCFtYWluT2JqZWN0LmN0eClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjI1LCAyNTUsIDI1NSwgLjMpXCI7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5maWxsVGV4dCh0aGlzLmluZGV4LCB0aGlzLnhNb3ZlICsgNSwgdGhpcy55TW92ZSArIDE1KTtcclxuICAgIG1haW5PYmplY3QuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwxNTMsMjU1LDAuNCknO1xyXG4gICAgbWFpbk9iamVjdC5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBtYWluT2JqZWN0LmN0eC5yZWN0KHRoaXMueE1vdmUsIHRoaXMueU1vdmUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIG1haW5PYmplY3QuY3R4LnN0cm9rZSgpO1xyXG4gICAgLy9tYWluT2JqZWN0LmN0eC5zdHJva2UoKVxyXG59XHJcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==