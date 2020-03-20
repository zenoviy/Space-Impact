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
exports.push([module.i, ".btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer; }\n\n.btn-main {\n    padding: 10px;\n    border: 0px;\n    border-radius: 5px; }\n\n.selected-items {\n    background: #161325; }\n\n.btn-sticky {\n    position: fixed;\n    top: 90%;\n    z-index: 100;\n    left: 0;\n    width: 220px;\n    cursor: pointer; }\n\nbody {\n    font-family: 'Roboto';\n    color: #ffffff;\n    background: #333;\n    margin: 0;\n    padding: 0;\n    -khtml-user-select: none;\n    user-select: none; }\n    body #preloader {\n        visibility: hidden;\n        width: 0px;\n        height: 0px; }\n\n.static-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100vw; }\n    .static-wrapper asside.menu-backgroud {\n        background: #2f2231; }\n    .static-wrapper asside {\n        z-index: 10; }\n        .static-wrapper asside .main-menu {\n            top: 10px; }\n            .static-wrapper asside .main-menu ul {\n                display: block;\n                top: 105px;\n                position: relative;\n                text-transform: uppercase; }\n                .static-wrapper asside .main-menu ul li {\n                    min-width: 160px;\n                    padding: 10px;\n                    list-style: none; }\n                .static-wrapper asside .main-menu ul a {\n                    color: #ffc800;\n                    text-decoration: none;\n                    font-size: 17px; }\n                .static-wrapper asside .main-menu ul a:active {\n                    color: red; }\n\n.content-wrapper {\n    width: 100%;\n    max-height: 100vh;\n    overflow-y: scroll; }\n    .content-wrapper .menu-pages-wrapper {\n        background: #161325;\n        margin-top: -20px;\n        min-height: 100vh;\n        padding: 20px; }\n\n.content-wrapper::-webkit-scrollbar {\n    width: 12px; }\n\n.content-wrapper::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n    border-radius: 10px; }\n\n.content-wrapper::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(71, 6, 83, 0.8);\n    -webkit-box-shadow: inset 0 0 6px black; }\n\n.content-wrapper::-webkit-scrollbar-thumb:window-inactive {\n    background: rgba(255, 0, 0, 0.1); }\n\n.dialog-box {\n    position: absolute;\n    margin: 0 auto;\n    padding: 10px;\n    min-width: 100%;\n    min-height: 100vh;\n    position: fixed;\n    left: 0; }\n    .dialog-box .dialog-wrapper {\n        display: flex;\n        height: 100vh;\n        justify-content: center;\n        align-items: center; }\n        .dialog-box .dialog-wrapper .dialog-window {\n            background: #340054;\n            padding: 20px;\n            min-width: 300px;\n            min-height: 80px;\n            border-radius: 5px; }\n            .dialog-box .dialog-wrapper .dialog-window div {\n                padding: 10px; }\n            .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area {\n                display: flex;\n                justify-content: space-evenly; }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.accept-btn {\n                    background: #4bae60;\n                    width: calc(100% / 3); }\n                .dialog-box .dialog-wrapper .dialog-window .dialog-btn-area button.reject-btn {\n                    background: #b9004f;\n                    width: calc(100% / 3); }\n\n#wrapper section {\n    z-index: 5;\n    top: 0; }\n\n.gameBackground {\n    background: #000; }\n\n.game-fields {\n    position: absolute; }\n\n.game-field-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    align-items: center; }\n\n.hide-menu {\n    display: none; }\n\nul.show-result-area {\n    list-style: none; }\n    ul.show-result-area li {\n        padding: 10px; }\n        ul.show-result-area li .rate-number {\n            color: red; }\n        ul.show-result-area li .item-name {\n            color: orange; }\n        ul.show-result-area li .item-points {\n            color: green; }\n        ul.show-result-area li p {\n            display: flex;\n            justify-content: space-evenly; }\n    ul.show-result-area li:nth-child(odd) {\n        background: #000; }\n", ""]);
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

Object.defineProperty(exports, "__esModule", { value: true });
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
    var gameData = this.gameInitData.gameData, levelData = gameData.levelData, enemyData = gameData.enemyData, levelUserData = this.getLevelUserData(), bosPresent = (levelUserData.sourse.levelData.bosPresents) ? levelUserData.sourse.levelData.bosPresents : null;
    if (!this.gameInitData.gameData.levelChange && !bosPresent) {
        enemySpawn.call(this);
    }
    else {
        if (this.gameInitData.allGameEnemies.length == 0) {
            var enemyShipObject = this.createNewEnemy(enemyData[0], EnemyObject);
            enemyShipObject.loadEnemyes();
            this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
        }
    }
    function enemySpawn() {
        var checkSpawnType = this.gameRandomizer(levelData.enemyProbability);
        if (checkSpawnType <= levelData.enemyRandomizerIndex) {
            var numberEnemyPerSpawn = this.gameRandomizer(levelData.enemyMaxNumber);
            for (var i = numberEnemyPerSpawn; i < levelData.enemyMaxNumber; i++) {
                var enemyShip = enemyData[this.gameRandomizer(enemyData.length)];
                var enemyShipObject = this.createNewEnemy(enemyShip, EnemyObject);
                enemyShipObject.loadEnemyes();
                this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
            }
        }
    }
}
exports.spawnEnemyLogic = spawnEnemyLogic;
function createNewEnemy(enemyData, EnemyObject) {
    var x = this.gameInitData.screen.width + 300, y = this.gameRandomizer(this.gameInitData.screen.height - 200, 100);
    if (enemyData.details) {
        var shipDetails = enemyData.details;
        var behavior = (shipDetails.behavior) ? shipDetails.behavior[this.gameRandomizer(shipDetails.behavior.length)] : null;
        return new EnemyObject({
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
            isBoss: (shipDetails.isBoss) ? shipDetails.isBoss : false
        });
    }
}
exports.createNewEnemy = createNewEnemy;
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
        var windowElement, gameData, index, _i, gameData_1, item, newElement;
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
                        newElement = pagesBuilder_1.createElements({
                            tagName: "li",
                            styleClass: "winner-list",
                            inlineStyle: null,
                            pictureUrl: null,
                            linkUrl: null,
                            text: null,
                            innerContent: "<p class=\"single-item\"><span class=\"rate-number\">" + index + "</span>name:<span class=\"item-name\">" + item.userName + "</span> points:<span class=\"item-points\"> " + item.gamePoints + "</span></p>",
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
        console.log(item.name, item.value);
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
function takeDamage(damage, hitObject, mainGameObject) {
    if (this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "enemy" ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint') ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint') ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint') ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint')) {
        gameSideObjectsModule_1.explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
        return this.objectPresent = false;
    }
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
function hitDetection(object1, objectsArr, mainGameObject) {
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
                object1.takeDamage((object2.damage) ? object2.damage : 0, object2, mainGameObject);
                object2.takeDamage((object1.damage) ? object1.damage : 0, object1, mainGameObject);
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
        this.img.src = info.imageDirrection + this.extraMap;
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
function levelInit(backgroundConstructor, ctx, mainGameObject) {
    var gameData = this.showLevelData();
    var allBackgroundElements = gameData.levelBackgroundElements;
    mainGameObject.gameInitData.backScreenPause = false;
    for (var _i = 0, allBackgroundElements_1 = allBackgroundElements; _i < allBackgroundElements_1.length; _i++) {
        var mapObject = allBackgroundElements_1[_i];
        var mapItem = new backgroundConstructor(mapObject.levelMap, mapObject.speed, this.gameInitData.screen, ctx, (this.gameInitData.mapBackgroundObjects.length % 2 == 0) ? true : null, (mapObject.extraMap) ? mapObject.extraMap : null, (mapObject.timeToExtraMapSeconds) ? mapObject.timeToExtraMapSeconds : null, (mapObject.timeToExtraMapMinutes) ? mapObject.timeToExtraMapMinutes : null);
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
        //alert("Win Game Screen ")
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
    var gameSecond = 1000 / this.gameInitData.intervalCount;
    if (this.gameInitData.gemeExtraSeconds % gameSecond == 0) {
        this.gameInitData.gemeExtraSeconds = 0;
        if (callback)
            return callback.call.apply(callback, __spreadArrays([this], data));
        return gameSecond;
    }
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
                            levelData: serverNewData.levelData,
                            levelObjects: serverNewData.levelObjects,
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
        var serverLocation, levelData, levelObjects, gameSetings, userData, enemyData;
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
                            url: serverLocation.host + serverLocation.gameSetings.url,
                            method: serverLocation.gameSetings.method,
                            data: null,
                            headers: null
                        })];
                case 3:
                    gameSetings = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.userShip.url,
                            method: serverLocation.userShip.method,
                            data: null,
                            headers: { 'usership': gameInformation.shipConfiguration }
                        })];
                case 4:
                    userData = _a.sent();
                    return [4 /*yield*/, serverRequestModules_1.getData({
                            url: serverLocation.host + serverLocation.enemylData.url,
                            method: serverLocation.enemylData.method,
                            data: null,
                            headers: { 'ship-type-number': levelData.enemyType }
                        })];
                case 5:
                    enemyData = _a.sent();
                    engineModules_1.preloadImage(enemyData);
                    engineModules_1.preloadImage(levelData);
                    engineModules_1.preloadImage(levelObjects);
                    return [2 /*return*/, {
                            levelData: levelData,
                            levelObjects: levelObjects,
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
        var gameField, gameActionField, gameUIfield, level, shipType, shipLife, res, levelData, levelObjects, gameSetings, userData, enemyData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameField = document.querySelector('#gamefield'), gameActionField = document.querySelector('#gameObjectsfield'), gameUIfield = document.querySelector('#gameUifield');
                    level = 5, shipType = 1, shipLife = 5;
                    return [4 /*yield*/, serverRequest({ level: level, shipConfiguration: shipType })];
                case 1:
                    res = _a.sent();
                    levelData = res.levelData;
                    levelObjects = res.levelObjects;
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
                                    playerObject: new PlayerShip(userData, 0, 300, shipLife, 100, 100, userData.size.width, userData.size.height, userData.damage),
                                    levelData: levelData,
                                    levelObjects: levelObjects,
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
    this.getSecondMeasure(mapObjectSpawner, levelObjects, SideObject, allGameSideObjects);
    function mapObjectSpawner(levelObjects, SideObject, allGameSideObjects) {
        var _this = this;
        var gameData = this.showGameInfo().gameData;
        var levelData = gameData.levelData;
        var spawnProbability = this.gameRandomizer(levelData.objectProbability);
        if (spawnProbability < levelData.objectMinTimeSpawn) {
            var screenData = this.getScreenSize();
            var levelObjectProps = levelObjects[this.gameRandomizer(levelObjects.length)];
            var yPosition = (levelObjectProps.spawnDetails.position == "bottom" && typeof levelObjectProps.spawnDetails.position === "string")
                ? screenData.height - this.gameRandomizer(levelObjectProps.height)
                : (levelObjectProps.spawnDetails.position == "top" && typeof levelObjectProps.spawnDetails.position === "string")
                    ? this.gameRandomizer(levelObjectProps.height)
                    : (typeof levelObjectProps.spawnDetails.position === "string") ? this.gameRandomizer(screenData.height)
                        : levelObjectProps.spawnDetails.position;
            var explosionData = {
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
                pointsPerUnit: levelObjectProps.pointsPerUnit
            };
            var sideObject_1 = new SideObject(__assign({}, explosionData));
            sideObject_1.img.src = sideObject_1.texture;
            sideObject_1.img.onload = function () {
                _this.gameInitData.allGameSideObjects = _this.gameInitData.allGameSideObjects.concat(sideObject_1);
            }; /**/
        }
    }
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
                            if (gameObject.gameInitData.allGameBullets.length > 0) {
                                for (_i = 0, _a = gameObject.gameInitData.allGameBullets; _i < _a.length; _i++) {
                                    bullet = _a[_i];
                                    bullet.moveBullets(playerShipData, gameObject);
                                    bullet.createBullets(gameObject);
                                    gameObject.deleteBullet(bullet);
                                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject);
                                    gameObject.hitDetection(playerShipData, [bullet], gameObject);
                                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameSideObjects, gameObject);
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
                                    gameObject.hitDetection(playerShipData, [enemy], gameObject);
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
                                        if (object.objectOwner == "enemy" || object.objectOwner == "collide") {
                                            gameObject.hitDetection(playerShipData, [object], gameObject);
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
    }).then(function (res) { console.log(res); return res.json(); }).then(function (data) { return data; });
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
    }).then(function (res) { return res.json(); }).then(function (data) { return data; });
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
            text: info.points,
            description: "Game part the name",
            clicked: false,
            fontSize: "light 18px Roboto",
            propertyes: {
                ctx: ctx,
                width: -50,
                height: 0,
                x: width / 2,
                y: 50,
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
                //this.backToStartScreen.call(this, constructors.PlayerShip)
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
                var res = enemiesModules_1.hitDetection(elementsOnScreen[item], [].concat({ x: x, y: y, width: 10, height: 10, name: "cursor" }), this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9tYWluLnNhc3M/MTliMCIsIndlYnBhY2s6Ly8vLi9zcmMvYWkvcmVndWxhckVuZW15QWlNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBNZW51L2FwcE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE1lbnUvZ2FtZVJlc3VsdE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwTWVudS9wYWdlc0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9idWxsZXRDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL2VuZW15Q29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9nYW1lU2lkZU9iamVjdENvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdG9ycy9sZXZlbENvbnN0cnVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0b3JzL21haW5HYW1lQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJ1Y3RvcnMvdXNlckNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVtaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYXBwRXJyb3JMaXN0TW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYmFja2dyb3VuZE1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2J1bGxldHNNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9lbmdpbmVNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvY2hhbmdlTGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZU1vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lTW9kdWxlcy9zYXRhcnRHYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvZ2FtZVVpTG9hZE1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lVWlTZXR0aW5nc01lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZGVscy9nYW1lV2luU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9nYW1lVWlNb2RlbHMvdWlNb2RlbE1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2dhbWVVaU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheU1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZWxlbWVudHMvdWlFbGVtZW50TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9lbGVtZW50cy93YXJwRWxlbWVudERyb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvd2VhcG9ucy93ZWFwb25zRGlzcGxheU1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy93aW5kb3cvZGlzcGxheVVpV2luZG93TW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKCdlbGVjdHJvbicpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVB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Ozs7OztBQ1RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLHNEQUFrQjtBQUNuQyxTQUFTLG1CQUFPLENBQUMsNEVBQTZCO0FBQzlDLFNBQVMsbUJBQU8sQ0FBQyxnREFBWTs7Ozs7Ozs7Ozs7OztBQ1BoQjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSEFBZ0g7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0hBQWdIO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBLHFDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1tYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5zZWxlY3RlZC1pdGVtcyB7XFxuICAgIGJhY2tncm91bmQ6ICMxNjEzMjU7IH1cXG5cXG4uYnRuLXN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA5MCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYnRuLW1haW4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLnNlbGVjdGVkLWl0ZW1zIHtcXG4gICAgYmFja2dyb3VuZDogIzE2MTMyNTsgfVxcblxcbi5idG4tc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgYm9keSAjcHJlbG9hZGVyIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDBweDsgfVxcblxcbi5zdGF0aWMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7IH1cXG4gICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZS5tZW51LWJhY2tncm91ZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmYyMjMxOyB9XFxuICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUge1xcbiAgICAgICAgei1pbmRleDogMTA7IH1cXG4gICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB7XFxuICAgICAgICAgICAgdG9wOiAxMHB4OyB9XFxuICAgICAgICAgICAgLnN0YXRpYy13cmFwcGVyIGFzc2lkZSAubWFpbi1tZW51IHVsIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgICAgICAgICAgICAgICAuc3RhdGljLXdyYXBwZXIgYXNzaWRlIC5tYWluLW1lbnUgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgICAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCBhIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZjODAwO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4OyB9XFxuICAgICAgICAgICAgICAgIC5zdGF0aWMtd3JhcHBlciBhc3NpZGUgLm1haW4tbWVudSB1bCBhOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuICAgIC5jb250ZW50LXdyYXBwZXIgLm1lbnUtcGFnZXMtd3JhcHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTYxMzI1O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4uY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMnB4OyB9XFxuXFxuLmNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg3MSwgNiwgODMsIDAuOCk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCBibGFjazsgfVxcblxcbi5jb250ZW50LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjEpOyB9XFxuXFxuLmRpYWxvZy1ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7IH1cXG4gICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDAwNTQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IGRpdiB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgICAgICAuZGlhbG9nLWJveCAuZGlhbG9nLXdyYXBwZXIgLmRpYWxvZy13aW5kb3cgLmRpYWxvZy1idG4tYXJlYSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuICAgICAgICAgICAgICAgIC5kaWFsb2ctYm94IC5kaWFsb2ctd3JhcHBlciAuZGlhbG9nLXdpbmRvdyAuZGlhbG9nLWJ0bi1hcmVhIGJ1dHRvbi5hY2NlcHQtYnRuIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0YmFlNjA7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7IH1cXG4gICAgICAgICAgICAgICAgLmRpYWxvZy1ib3ggLmRpYWxvZy13cmFwcGVyIC5kaWFsb2ctd2luZG93IC5kaWFsb2ctYnRuLWFyZWEgYnV0dG9uLnJlamVjdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2I5MDA0ZjtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTsgfVxcblxcbiN3cmFwcGVyIHNlY3Rpb24ge1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICB0b3A6IDA7IH1cXG5cXG4uZ2FtZUJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwOyB9XFxuXFxuLmdhbWUtZmllbGRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLmdhbWUtZmllbGQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmhpZGUtbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG51bC5zaG93LXJlc3VsdC1hcmVhIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgLnJhdGUtbnVtYmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuICAgICAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpIC5pdGVtLW5hbWUge1xcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgLml0ZW0tcG9pbnRzIHtcXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47IH1cXG4gICAgICAgIHVsLnNob3ctcmVzdWx0LWFyZWEgbGkgcCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcbiAgICB1bC5zaG93LXJlc3VsdC1hcmVhIGxpOm50aC1jaGlsZChvZGQpIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4vbWFpbi5zYXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGVuZW15U2hpcExvZ2ljVmVydGljYWwodGFyZ2V0LCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIG1heFBvc2l0aW9uWCA9IE1hdGgubWF4KHRhcmdldC54LCB0aGlzLngpO1xyXG4gICAgdmFyIG1pblBvc2l0aW9uWCA9IE1hdGgubWluKHRhcmdldC54LCB0aGlzLngpO1xyXG4gICAgdmFyIG1heFBvc2l0aW9uWSA9IE1hdGgubWF4KHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnkpO1xyXG4gICAgdmFyIG1pblBvc2l0aW9uWSA9IE1hdGgubWluKHRhcmdldC55IC0gdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnkpO1xyXG4gICAgdmFyIGRpc3RhbmNlVG9UYXJnZXRYID0gbWF4UG9zaXRpb25YIC0gbWluUG9zaXRpb25YO1xyXG4gICAgdmFyIGRpc3RhbmNlVG9UYXJnZXRZID0gbWF4UG9zaXRpb25ZIC0gbWluUG9zaXRpb25ZO1xyXG4gICAgaWYgKHRoaXMuaXNNb3ZlICYmIHRoaXMuYmVoYXZpb3IpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgY2FzZSAncGF0cm9vbCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcnJlY3Rpb25SYW5kb20gPSBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplcigyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IChkaXJyZWN0aW9uUmFuZG9tID09IDEpID8gXCJ1cFwiIDogXCJkb3duXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXRyb29sLmNhbGwodGhpcywgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpbmQnOlxyXG4gICAgICAgICAgICAgICAgc3RyYWZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYXR0YWNrJzpcclxuICAgICAgICAgICAgICAgIGF0dGFjay5jYWxsKHRoaXMsIGRpc3RhbmNlVG9UYXJnZXRZLCBkaXN0YW5jZVRvVGFyZ2V0WCwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb21lRW5kRmluZCc6XHJcbiAgICAgICAgICAgICAgICBzdHJhZmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHVuaXRTdG9wLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN0cmFmZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVuaXRTdG9wKCkge1xyXG4gICAgICAgIHZhciBzY3JlZW5EYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnggPCBzY3JlZW5EYXRhLndpZHRoIC0gdGhpcy53aWR0aCAqIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RyYWZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwb3REaXN0YW5jZSA+IGRpc3RhbmNlVG9UYXJnZXRYIHx8IHRoaXMuc3BvdERpc3RhbmNlID4gZGlzdGFuY2VUb1RhcmdldFkpIHtcclxuICAgICAgICAgICAgdGhpcy55RmluYWwgPSB0YXJnZXQueSAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uKGRpc3RhbmNlVG9UYXJnZXRZKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXR0YWNrKGRpc3RhbmNlVG9UYXJnZXRZLCBkaXN0YW5jZVRvVGFyZ2V0WCwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy55RmluYWwgPSB0YXJnZXQueSAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICBpZiAoZGlzdGFuY2VUb1RhcmdldFggPCAxMDApXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXRyb29sKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXRZID0gTWF0aC5tYXgodGhpcy55LCB0aGlzLnlGaW5hbCkgLSBNYXRoLm1pbih0aGlzLnksIHRoaXMueUZpbmFsKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy55RmluYWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSAtIHRoaXMuaGVpZ2h0IDwgdGhpcy55RmluYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlGaW5hbCA9IHNjcmVlbkRhdGEuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy55RmluYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwidXBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy55RmluYWwgPSBzY3JlZW5EYXRhLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lbmVteVNoaXBMb2dpY1ZlcnRpY2FsID0gZW5lbXlTaGlwTG9naWNWZXJ0aWNhbDtcclxuZnVuY3Rpb24gZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbihkaXN0YW5jZVRvVGFyZ2V0WSkge1xyXG4gICAgdmFyIHlBZGogPSBkaXN0YW5jZVRvVGFyZ2V0WSAvIHRoaXMudmVydGljYWxTcGVlZDtcclxuICAgIHlBZGogPSAoTWF0aC5zaWduKHlBZGopID4gMCkgPyB5QWRqIDogeUFkaiAqIC0xO1xyXG4gICAgeUFkaiA9ICh5QWRqID4gdGhpcy52ZXJ0aWNhbFNwZWVkKSA/IHRoaXMudmVydGljYWxTcGVlZCA6IHlBZGo7XHJcbiAgICB0aGlzLnkgPSAodGhpcy55ID4gdGhpcy55RmluYWwpID8gdGhpcy55IC0geUFkaiA6XHJcbiAgICAgICAgKHRoaXMueSA8IHRoaXMueUZpbmFsKSA/IHRoaXMueSArIHlBZGogOiB0aGlzLnlGaW5hbDtcclxufVxyXG5leHBvcnRzLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb24gPSBlbmVteVZlcnRpY2FsTW92ZUNhbGN1bGF0aW9uO1xyXG5mdW5jdGlvbiBzcGF3bkVuZW15TG9naWMoRW5lbXlPYmplY3QpIHtcclxuICAgIHZhciBnYW1lRGF0YSA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLCBsZXZlbERhdGEgPSBnYW1lRGF0YS5sZXZlbERhdGEsIGVuZW15RGF0YSA9IGdhbWVEYXRhLmVuZW15RGF0YSwgbGV2ZWxVc2VyRGF0YSA9IHRoaXMuZ2V0TGV2ZWxVc2VyRGF0YSgpLCBib3NQcmVzZW50ID0gKGxldmVsVXNlckRhdGEuc291cnNlLmxldmVsRGF0YS5ib3NQcmVzZW50cykgPyBsZXZlbFVzZXJEYXRhLnNvdXJzZS5sZXZlbERhdGEuYm9zUHJlc2VudHMgOiBudWxsO1xyXG4gICAgaWYgKCF0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbENoYW5nZSAmJiAhYm9zUHJlc2VudCkge1xyXG4gICAgICAgIGVuZW15U3Bhd24uY2FsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgZW5lbXlTaGlwT2JqZWN0ID0gdGhpcy5jcmVhdGVOZXdFbmVteShlbmVteURhdGFbMF0sIEVuZW15T2JqZWN0KTtcclxuICAgICAgICAgICAgZW5lbXlTaGlwT2JqZWN0LmxvYWRFbmVteWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuY29uY2F0KGVuZW15U2hpcE9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZW5lbXlTcGF3bigpIHtcclxuICAgICAgICB2YXIgY2hlY2tTcGF3blR5cGUgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5lbmVteVByb2JhYmlsaXR5KTtcclxuICAgICAgICBpZiAoY2hlY2tTcGF3blR5cGUgPD0gbGV2ZWxEYXRhLmVuZW15UmFuZG9taXplckluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJFbmVteVBlclNwYXduID0gdGhpcy5nYW1lUmFuZG9taXplcihsZXZlbERhdGEuZW5lbXlNYXhOdW1iZXIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbnVtYmVyRW5lbXlQZXJTcGF3bjsgaSA8IGxldmVsRGF0YS5lbmVteU1heE51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5lbXlTaGlwID0gZW5lbXlEYXRhW3RoaXMuZ2FtZVJhbmRvbWl6ZXIoZW5lbXlEYXRhLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZW15U2hpcE9iamVjdCA9IHRoaXMuY3JlYXRlTmV3RW5lbXkoZW5lbXlTaGlwLCBFbmVteU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBlbmVteVNoaXBPYmplY3QubG9hZEVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzID0gdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMuY29uY2F0KGVuZW15U2hpcE9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zcGF3bkVuZW15TG9naWMgPSBzcGF3bkVuZW15TG9naWM7XHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0VuZW15KGVuZW15RGF0YSwgRW5lbXlPYmplY3QpIHtcclxuICAgIHZhciB4ID0gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoICsgMzAwLCB5ID0gdGhpcy5nYW1lUmFuZG9taXplcih0aGlzLmdhbWVJbml0RGF0YS5zY3JlZW4uaGVpZ2h0IC0gMjAwLCAxMDApO1xyXG4gICAgaWYgKGVuZW15RGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgdmFyIHNoaXBEZXRhaWxzID0gZW5lbXlEYXRhLmRldGFpbHM7XHJcbiAgICAgICAgdmFyIGJlaGF2aW9yID0gKHNoaXBEZXRhaWxzLmJlaGF2aW9yKSA/IHNoaXBEZXRhaWxzLmJlaGF2aW9yW3RoaXMuZ2FtZVJhbmRvbWl6ZXIoc2hpcERldGFpbHMuYmVoYXZpb3IubGVuZ3RoKV0gOiBudWxsO1xyXG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlPYmplY3Qoe1xyXG4gICAgICAgICAgICB4OiB4LCB5OiB5LFxyXG4gICAgICAgICAgICBzeDogc2hpcERldGFpbHMuc3gsIHN5OiBzaGlwRGV0YWlscy5zeSxcclxuICAgICAgICAgICAgc1dpZHRoOiBzaGlwRGV0YWlscy5pbWFnZVdpZHRoIC8gc2hpcERldGFpbHMubnVtYmVyT2ZJdGVtcywgc0hlaWdodDogc2hpcERldGFpbHMuaW1hZ2VIZWlnaHQsXHJcbiAgICAgICAgICAgIHBpY3R1cmVzV2lkdGg6IHNoaXBEZXRhaWxzLmltYWdlV2lkdGgsIG51bWJlck9mSXRlbXM6IHNoaXBEZXRhaWxzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgIHdpZHRoOiBzaGlwRGV0YWlscy53aWR0aCwgaGVpZ2h0OiBzaGlwRGV0YWlscy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHNoaXBUZXh0dXJlOiBzaGlwRGV0YWlscy5za2luTmFtZSxcclxuICAgICAgICAgICAgc3BlZWQ6IHNoaXBEZXRhaWxzLnNwZWVkLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHNoaXBEZXRhaWxzLnN0YXR1cywgbmFtZTogc2hpcERldGFpbHMubmFtZSxcclxuICAgICAgICAgICAgYnVsbGV0VHlwZU51bWJlcjogc2hpcERldGFpbHMuYnVsbGV0VHlwZSwgcmFwaWRGaXJlOiBzaGlwRGV0YWlscy5yYXBpZEZpcmUsIHBvaW50c1BlclVuaXQ6IHNoaXBEZXRhaWxzLnBvaW50c1BlclVuaXQsXHJcbiAgICAgICAgICAgIGhlYWx0aFBvaW50OiBzaGlwRGV0YWlscy5oZWFsdGhQb2ludCwgYW5pbWF0aW9uU3RlcHM6IHNoaXBEZXRhaWxzLmFuaW1hdGlvblN0ZXBzLCBkYW1hZ2U6IHNoaXBEZXRhaWxzLmRhbWFnZSxcclxuICAgICAgICAgICAgb2JqZWN0T3duZXI6IHNoaXBEZXRhaWxzLm9iamVjdE93bmVyLCBndW5zOiAoc2hpcERldGFpbHMuZ3VucykgPyBzaGlwRGV0YWlscy5ndW5zIDogW10sIGV4cGxvc2lvbjogc2hpcERldGFpbHMuZXhwbG9zaW9uQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICBudW1iZXJPZlZlcnRpY2FsSXRlbXM6IHNoaXBEZXRhaWxzLm51bWJlck9mVmVydGljYWxJdGVtcywgaXNNb3ZlOiBzaGlwRGV0YWlscy5pc01vdmUsIGlzU2hvb3Q6IHNoaXBEZXRhaWxzLmlzU2hvb3QsXHJcbiAgICAgICAgICAgIHNwb3REaXN0YW5jZTogc2hpcERldGFpbHMuc3BvdERpc3RhbmNlLCBiZWhhdmlvcjogYmVoYXZpb3IsIHZlcnRpY2FsU3BlZWQ6IChzaGlwRGV0YWlscy52ZXJ0aWNhbFNwZWVkKSA/IHNoaXBEZXRhaWxzLnZlcnRpY2FsU3BlZWQgOiBudWxsLFxyXG4gICAgICAgICAgICBpc0Jvc3M6IChzaGlwRGV0YWlscy5pc0Jvc3MpID8gc2hpcERldGFpbHMuaXNCb3NzIDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNyZWF0ZU5ld0VuZW15ID0gY3JlYXRlTmV3RW5lbXk7XHJcbmZ1bmN0aW9uIGdhbWVSYW5kb21pemVyKG1heE51bWJlciwgbWluTnVtYmVyKSB7XHJcbiAgICBpZiAobWluTnVtYmVyID09PSB2b2lkIDApIHsgbWluTnVtYmVyID0gMDsgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bWJlciArIG1pbk51bWJlcik7XHJcbn1cclxuZXhwb3J0cy5nYW1lUmFuZG9taXplciA9IGdhbWVSYW5kb21pemVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxudmFyIGdhbWVSZXN1bHRNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2dhbWVSZXN1bHRNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIHNob3coZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbmV4cG9ydHMuc2hvdyA9IHNob3c7XHJcbmZ1bmN0aW9uIGhpZGUoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZXhwb3J0cy5oaWRlID0gaGlkZTtcclxuZnVuY3Rpb24gdG9nZ2xlcihlbCkge1xyXG4gICAgKGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSA/IHNob3coZWwpIDogaGlkZShlbCk7XHJcbn1cclxuZXhwb3J0cy50b2dnbGVyID0gdG9nZ2xlcjtcclxuZnVuY3Rpb24gYWRkQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLmFkZENsYXNzTGlzdCA9IGFkZENsYXNzTGlzdDtcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NMaXN0KGVsLCBjbGFzc0xpc3QpIHtcclxuICAgIGlmICghZWwuY2xhc3NMaXN0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0KTtcclxufVxyXG5leHBvcnRzLnJlbW92ZUNsYXNzTGlzdCA9IHJlbW92ZUNsYXNzTGlzdDtcclxuZnVuY3Rpb24gYXBwTWVudShnYW1lT2JqZWN0LCBkaWFsb2dXaW5kb3cpIHtcclxuICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gbnVsbDtcclxuICAgIHZhciBuYXZpZ2F0aW9uID0ge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWRNZW51SXRlbTogc2VsZWN0ZWRNZW51SXRlbSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25UZW1wbGF0ZTogJy5zZWN0aW9uLXRlbXBsYXRlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXI6ICcjd3JhcHBlcicsXHJcbiAgICAgICAgICAgICAgICBzaWRlTWVudVdyYXBwZXI6ICcjbWFpbi1tZW51J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbXBvcnRTZWN0aW9uc1RvRE9NOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImltcG9ydFwiXScpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKG5hdmlnYXRpb24ubWVudS5jb25zdGFudHMuc2VjdGlvblRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2aWdhdGlvbi5tZW51LmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyKS5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0TWVudU9uQ2xpY2tFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkFjdG9uKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJ1dHRvbkFjdG9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5kYXRhc2V0LnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24ubWVudS5zaG93U2VjdGlvbi5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2VsZWN0aW9uKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuZGF0YXNldC5zZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYW1lLXJlc3VsdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHRNb2R1bGVfMS5zaG93UmVzdWx0U2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2dhbWUtcmVzdWx0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdleGl0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVyKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dXaW5kb3coeyB0ZXh0RGF0YTogJ0V4aXQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdvaycgfSwgZ2FtZU9iamVjdC5leGl0VGhlR2FtZSwgbmF2aWdhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbG9zZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5tZW51LmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vZGlhbG9nV2luZG93KHt0ZXh0RGF0YTogJ0V4aXQgdGhlIGdhbWU/JywgcmVqZWN0VGV4dDogJ2NhbmNlbCcsIGFjY2VwdFRleHQ6ICdvayd9LCBnYW1lT2JqZWN0LmV4aXRUaGVHYW1lLCBuYXZpZ2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWVudVNlbGVjdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09IFwiTElcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUFyZWEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkLWl0ZW1zXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8xID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVBcmVhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NMaXN0KG1lbnVJdGVtLCBcInNlbGVjdGVkLWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW0gPSAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uSWQgIT0gXCJjbG9zZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImNhbmNlbFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5idXR0b25JZCAhPSBcImV4aXRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQpID8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBzZWxlY3RlZE1lbnVJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzc0xpc3QoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQsIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93U2VjdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbklkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIHNob3coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHNlY3Rpb25JZCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV8yID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVBcmVhXzJbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzTGlzdChpdGVtLCBcIm1lbnUtYmFja2dyb3VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFnZXNCdWlsZGVyXzEucGFnZUJ1aWxkZXIoeyB0YXJnZXQ6IFwiI2Fib3V0LXNlY3Rpb24tY29udGVudFwiLCBkYXRhOiBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldExvY2FsRGF0YSh7IGZpbGVOYW1lOiAnYWJvdXQtcGFnZS5qc29uJyB9KSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUFsbFNlY3Rpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbk5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnN0YW50cy5jb250ZW50Q29udGFpbmVyICsgXCIgc2VjdGlvblwiKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlY3Rpb25Ob2Rlc18xID0gc2VjdGlvbk5vZGVzOyBfaSA8IHNlY3Rpb25Ob2Rlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VjdGlvbk5vZGVzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUJhY2tncm91bmRBcmVhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBtZW51QmFja2dyb3VuZEFyZWFfMSA9IG1lbnVCYWNrZ3JvdW5kQXJlYTsgX2EgPCBtZW51QmFja2dyb3VuZEFyZWFfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnVCYWNrZ3JvdW5kQXJlYV8xW19hXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QoaXRlbSwgXCJtZW51LWJhY2tncm91ZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBtZW51QXJlYV8zID0gbWVudUFyZWE7IF9iIDwgbWVudUFyZWFfMy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV8zW19iXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0U2VjdGlvbnNUb0RPTSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZW51T25DbGlja0V2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGxTZWN0aW9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xyXG59XHJcbmV4cG9ydHMuYXBwTWVudSA9IGFwcE1lbnU7XHJcbmZ1bmN0aW9uIGhpZGVTaG93TWVudShtYWluTWVudSwgbmF2aWdhdGlvbk1lbnUsIGdhbWVXaW4sIGdhbWVTdGF0dXMsIGdhbWVVaVBhdXNlKSB7XHJcbiAgICBpZiAoIWdhbWVTdGF0dXMgfHwgZ2FtZVVpUGF1c2UpIHtcclxuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1tZW51XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGUtbWVudVwiKTtcclxuICAgICAgICBuYXZpZ2F0aW9uTWVudS5oaWRlQWxsU2VjdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmhpZGVTaG93TWVudSA9IGhpZGVTaG93TWVudTtcclxuZnVuY3Rpb24gZGlhbG9nV2luZG93KF9hLCBjYWxsYmFjaywgbmF2aWdhdGlvbikge1xyXG4gICAgdmFyIHRleHREYXRhID0gX2EudGV4dERhdGEsIHJlamVjdFRleHQgPSBfYS5yZWplY3RUZXh0LCBhY2NlcHRUZXh0ID0gX2EuYWNjZXB0VGV4dDtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgd2luZG93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLWJveFwiKTtcclxuICAgIHZhciBkaWFsb2dCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1ib2R5Jyk7XHJcbiAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmdW5jdGlvbiBkaWFsb2dCdXR0b25FdmVudChldmVudCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZE1lbnVJdGVtID0gKG5hdmlnYXRpb24pID8gbmF2aWdhdGlvbi5zaG93U2VsZWN0ZWRJdGVtKCkgOiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29rJzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51QXJlYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWQtaXRlbXNcIikpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtZW51QXJlYV80ID0gbWVudUFyZWE7IF9pIDwgbWVudUFyZWFfNC5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBtZW51QXJlYV80W19pXTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0xpc3QobWVudUl0ZW0sIFwic2VsZWN0ZWQtaXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRNZW51SXRlbS5zZWxlY3RlZE1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3NMaXN0KHNlbGVjdGVkTWVudUl0ZW0uc2VsZWN0ZWRNZW51SXRlbSwgXCJzZWxlY3RlZC1pdGVtc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZXN0YXJ0JzpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwuYXBwbHkoY2FsbGJhY2ssIHJlc3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvd0VsZW1lbnQpXHJcbiAgICAgICAgc2hvdyh3aW5kb3dFbGVtZW50KTtcclxuICAgIHZhciBkaWFsb2dEYXRhID0gW1xyXG4gICAgICAgIHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogXCJhY2NlcHQtYnRuIGJ0bi1tYWluXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBpbm5lckNvbnRlbnQ6IFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLXRleHRcXFwiPlwiICsgdGV4dERhdGEgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRpYWxvZy1idXR0b24tYXJlYVxcXCIgY2xhc3M9XFxcImRpYWxvZy1idG4tYXJlYVxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWJ1dHRvbi1pZD1cIiArIGFjY2VwdFRleHQgKyBcIiBjbGFzcz1cXFwiYWNjZXB0LWJ0biBidG4tbWFpblxcXCI+XCIgKyBhY2NlcHRUZXh0ICsgXCI8L2J1dHRvbj5cXG4gICAgICAgICAgIDxidXR0b24gZGF0YS1idXR0b24taWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcInJlamVjdC1idG4gYnRuLW1haW5cXFwiPmNhbmNlbDwvYnV0dG9uPlxcbiAgICAgICA8L2Rpdj5cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ2RhdGEtYnV0dG9uLWlkJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBhY2NlcHRUZXh0LFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lMTogbnVsbCxcclxuICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2IgPSAwLCBkaWFsb2dEYXRhXzEgPSBkaWFsb2dEYXRhOyBfYiA8IGRpYWxvZ0RhdGFfMS5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IGRpYWxvZ0RhdGFfMVtfYl07XHJcbiAgICAgICAgZGlhbG9nQm9keS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIHZhciBkaWFsb2dCdXR0b25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idXR0b24tYXJlYScpO1xyXG4gICAgZGlhbG9nQnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpYWxvZ0J1dHRvbkV2ZW50KTtcclxufVxyXG5leHBvcnRzLmRpYWxvZ1dpbmRvdyA9IGRpYWxvZ1dpbmRvdztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi9hcHBNZW51XCIpO1xyXG52YXIgcGFnZXNCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9wYWdlc0J1aWxkZXJcIik7XHJcbnZhciBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3NlcnZlci9zZXJ2ZXJSZXF1ZXN0TW9kdWxlc1wiKTtcclxuZnVuY3Rpb24gc2hvd1Jlc3VsdFNjcmVlbigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd2luZG93RWxlbWVudCwgZ2FtZURhdGEsIGluZGV4LCBfaSwgZ2FtZURhdGFfMSwgaXRlbSwgbmV3RWxlbWVudDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcmVzdWx0LWFyZWEnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuSE9TVCArICdhcGkvZ2FtZS1yZXN1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZURhdGEuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IGdhbWVEYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgZ2FtZURhdGFfMSA9IGdhbWVEYXRhOyBfaSA8IGdhbWVEYXRhXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBnYW1lRGF0YV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IHBhZ2VzQnVpbGRlcl8xLmNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IFwibGlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M6IFwid2lubmVyLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZVVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZW50OiBcIjxwIGNsYXNzPVxcXCJzaW5nbGUtaXRlbVxcXCI+PHNwYW4gY2xhc3M9XFxcInJhdGUtbnVtYmVyXFxcIj5cIiArIGluZGV4ICsgXCI8L3NwYW4+bmFtZTo8c3BhbiBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj5cIiArIGl0ZW0udXNlck5hbWUgKyBcIjwvc3Bhbj4gcG9pbnRzOjxzcGFuIGNsYXNzPVxcXCJpdGVtLXBvaW50c1xcXCI+IFwiICsgaXRlbS5nYW1lUG9pbnRzICsgXCI8L3NwYW4+PC9wPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ2RhdGEtYnV0dG9uLWlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlMTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93RWxlbWVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaG93UmVzdWx0U2NyZWVuID0gc2hvd1Jlc3VsdFNjcmVlbjtcclxuZnVuY3Rpb24gaW5pdFJlc3VsdFNjcmVlbihtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIHdpbmRvd0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1yZXN1bHQtYm94Jyk7XHJcbiAgICB2YXIgZm9ybUxvYWRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbG9hZC1hcmVhJyk7XHJcbiAgICBmb3JtTG9hZEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGFwcE1lbnVfMS5zaG93KHdpbmRvd0VsZW1lbnQpO1xyXG4gICAgdmFyIGRpYWxvZ0RhdGEgPSBbXHJcbiAgICAgICAgcGFnZXNCdWlsZGVyXzEuY3JlYXRlRWxlbWVudHMoe1xyXG4gICAgICAgICAgICB0YWdOYW1lOiBcImZvcm1cIixcclxuICAgICAgICAgICAgc3R5bGVDbGFzczogXCJhY2NlcHQtYnRuIGJ0bi1tYWluXCIsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlOiBudWxsLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiBudWxsLFxyXG4gICAgICAgICAgICBsaW5rVXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0OiBcInNhdmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGlubmVyQ29udGVudDogXCJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3UgbmFtZTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXhsZW5ndGg9XFxcIjMwXFxcIiBtaW5sZW5ndGg9XFxcIjNcXFwiIG5hbWU9XFxcInVzZXJOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3UgbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgZW50ZXIgeW91IGVtYWlsPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcInVzZXJFbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHJlcXVpcmUgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdSBuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZGlhbG9nLWJvdHRvbS1hcmVhXFxcIiBjbGFzcz1cXFwiZGlhbG9nLWJ0bi1hcmVhXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBkYXRhLWJ1dHRvbi1pZD1cXFwic2F2ZS1yZXN1bHRcXFwiIGNsYXNzPVxcXCJhY2NlcHQtYnRuIGJ0bi1tYWluXFxcIj5zYXZlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtYnV0dG9uLWlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJyZWplY3QtYnRuIGJ0bi1tYWluXFxcIj5jYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBcInNhdmUtcmVzdWx0LWZvcm1cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTE6IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICB9KSxcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRpYWxvZ0RhdGFfMSA9IGRpYWxvZ0RhdGE7IF9pIDwgZGlhbG9nRGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZGlhbG9nRGF0YV8xW19pXTtcclxuICAgICAgICBmb3JtTG9hZEFyZWEuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydzYXZlLXJlc3VsdC1mb3JtJ107XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJvdHRvbS1hcmVhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaWFsb2dCdXR0b25FdmVudCk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1BY3Rpb24pO1xyXG4gICAgZnVuY3Rpb24gZGlhbG9nQnV0dG9uRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5kYXRhc2V0LmJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NhdmUtcmVzdWx0JzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICAgICAgICAgICAgZm9ybUxvYWRBcmVhLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBhcHBNZW51XzEuaGlkZSh3aW5kb3dFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybUFjdGlvbihldmVudCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1SZXN1bHQsIHJlcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVJlc3VsdCA9IHRyYW5zZmVyRGF0YVRvT2JqZWN0KGZvcm0sIG1haW5HYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtUmVzdWx0KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHByb2Nlc3MuZW52LkhPU1QgKyAnYXBpL2dhbWUtcmVzdWx0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtUmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIiwgZm9ybVJlc3VsdCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRSZXN1bHRTY3JlZW4gPSBpbml0UmVzdWx0U2NyZWVuO1xyXG5mdW5jdGlvbiB0cmFuc2ZlckRhdGFUb09iamVjdChkYXRhLCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgaWYgKCFkYXRhKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwiTm8gZGF0YSB0byB0cmFuc2Zvcm1cIik7XHJcbiAgICB2YXIgb2JqID0geyB1c2VyTmFtZTogbnVsbCwgdXNlckVtYWlsOiBudWxsLCBnYW1lUG9pbnRzOiBudWxsIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFfMSA9IGRhdGE7IF9pIDwgZGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZGF0YV8xW19pXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIGlmIChpdGVtLm5hbWUgJiYgaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSAmJiAhaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGdhbWVEYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgb2JqLmdhbWVQb2ludHMgPSBnYW1lRGF0YS5wb2ludHM7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBwYWdlQnVpbGRlcihfYSkge1xyXG4gICAgdmFyIHRhcmdldCA9IF9hLnRhcmdldCwgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9iLCB0YXJnZXROb2RlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCAhdGFyZ2V0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYiA9IChfYy5zZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYikgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgIWRhdGFdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iID0gKF9jLnNlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJjYW50IGZldGNoIHRoZSBkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFfMSA9IGRhdGE7IF9pIDwgZGF0YV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09iamVjdCA9IGNyZWF0ZUVsZW1lbnRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiBpdGVtLnRhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNsYXNzOiBpdGVtLmNsYXNzbGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZTogaXRlbS5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlVXJsOiBpdGVtLmltYWdlTGluayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiBpdGVtLmxpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZW50OiBpdGVtLmh0bWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsIGF0dHJpYnV0ZU5hbWUxOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTE6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChuZXdPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnBhZ2VCdWlsZGVyID0gcGFnZUJ1aWxkZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzKF9hKSB7XHJcbiAgICB2YXIgdGFnTmFtZSA9IF9hLnRhZ05hbWUsIHN0eWxlQ2xhc3MgPSBfYS5zdHlsZUNsYXNzLCBpbmxpbmVTdHlsZSA9IF9hLmlubGluZVN0eWxlLCBwaWN0dXJlVXJsID0gX2EucGljdHVyZVVybCwgbGlua1VybCA9IF9hLmxpbmtVcmwsIHRleHQgPSBfYS50ZXh0LCBpbm5lckNvbnRlbnQgPSBfYS5pbm5lckNvbnRlbnQsIGF0dHJpYnV0ZU5hbWUgPSBfYS5hdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGUgPSBfYS5hdHRyaWJ1dGUsIGF0dHJpYnV0ZU5hbWUxID0gX2EuYXR0cmlidXRlTmFtZTEsIGF0dHJpYnV0ZTEgPSBfYS5hdHRyaWJ1dGUxO1xyXG4gICAgdmFyIHJlc3QgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIChzdHlsZUNsYXNzKSA/IGVsZW1lbnQuY2xhc3NOYW1lID0gc3R5bGVDbGFzcyA6IGZhbHNlO1xyXG4gICAgKGlubGluZVN0eWxlKSA/IGVsZW1lbnQuc3R5bGUgPSBpbmxpbmVTdHlsZSA6IGZhbHNlO1xyXG4gICAgKHRhZ05hbWUgPT09IFwiaW1nXCIgJiYgcGljdHVyZVVybCkgPyBlbGVtZW50LnNyYyA9IF9fZGlybmFtZSArIHBpY3R1cmVVcmwgOiBmYWxzZTtcclxuICAgICh0ZXh0KSA/IGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dCA6IGZhbHNlO1xyXG4gICAgKGlubmVyQ29udGVudCkgPyBlbGVtZW50LmlubmVySFRNTCA9IGlubmVyQ29udGVudCA6IGZhbHNlO1xyXG4gICAgKGF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlKSA/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZSkgOiBmYWxzZTtcclxuICAgIChhdHRyaWJ1dGVOYW1lMSAmJiBhdHRyaWJ1dGUxKSA/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUxLCBhdHRyaWJ1dGUxKSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVFbGVtZW50cyA9IGNyZWF0ZUVsZW1lbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYnVsbGV0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9idWxsZXRzTW9kdWxlXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG52YXIgQnVsbGV0Q29uc3RydWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnVsbGV0Q29uc3RydWN0KHgsIHksIGJ1bGxldFR5cGUsIGJ1bGxldFRleHR1cmUsIG9iamVjdE93bmVyLCBidWxsZXRTcGVlZCwgd2lkdGgsIGhlaWdodCwgZGFtYWdlLCB0eXBlLCB0ZXh0dXJlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZXhwbG9zaW9uKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYnVsbGV0VHlwZSA9IGJ1bGxldFR5cGU7XHJcbiAgICAgICAgdGhpcy5idWxsZXRUZXh0dXJlID0gYnVsbGV0VGV4dHVyZTtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gb2JqZWN0T3duZXI7XHJcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gX19kaXJuYW1lICsgdGV4dHVyZTtcclxuICAgICAgICB0aGlzLnN4ID0gc3g7XHJcbiAgICAgICAgdGhpcy5zeSA9IHN5O1xyXG4gICAgICAgIHRoaXMuc1dpZHRoID0gc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IHNIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24gPSBleHBsb3Npb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQnVsbGV0Q29uc3RydWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLkJ1bGxldENvbnN0cnVjdCA9IEJ1bGxldENvbnN0cnVjdDtcclxuQnVsbGV0Q29uc3RydWN0LnByb3RvdHlwZS5jcmVhdGVCdWxsZXRzID0gYnVsbGV0c01vZHVsZV8xLmNyZWF0ZUJ1bGxldHM7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuaW5pdEJ1bGxldHMgPSBidWxsZXRzTW9kdWxlXzEuaW5pdEJ1bGxldHM7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUubW92ZUJ1bGxldHMgPSBidWxsZXRzTW9kdWxlXzEubW92ZUJ1bGxldHM7XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUuZ2V0T2JqZWN0UG9zaXRpb24gPSBlbmdpbmVNb2R1bGVzXzEuZ2V0T2JqZWN0UG9zaXRpb247XHJcbkJ1bGxldENvbnN0cnVjdC5wcm90b3R5cGUudGFrZURhbWFnZSA9IGVuZW1pZXNNb2R1bGVzXzEudGFrZURhbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBlbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmVcIik7XHJcbnZhciBFbmVteU9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVuZW15T2JqZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IGRhdGEuc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IGRhdGEuc0hlaWdodDtcclxuICAgICAgICB0aGlzLnBpY3R1cmVzV2lkdGggPSBkYXRhLnBpY3R1cmVzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gZGF0YS5udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zaGlwVGV4dHVyZSA9IF9fZGlybmFtZSArIGRhdGEuc2hpcFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5idWxsZXRUeXBlTnVtYmVyID0gZGF0YS5idWxsZXRUeXBlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMucmFwaWRGaXJlID0gZGF0YS5yYXBpZEZpcmU7XHJcbiAgICAgICAgdGhpcy5wb2ludHNQZXJVbml0ID0gZGF0YS5wb2ludHNQZXJVbml0O1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcHMgPSBkYXRhLmFuaW1hdGlvblN0ZXBzO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGF0YS5kYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5ndW5zID0gZGF0YS5ndW5zO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IGRhdGEub2JqZWN0T3duZXI7XHJcbiAgICAgICAgdGhpcy5ndW5zID0gZGF0YS5ndW5zO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uID0gZGF0YS5leHBsb3Npb247XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlZlcnRpY2FsSXRlbXMgPSBkYXRhLm51bWJlck9mVmVydGljYWxJdGVtcztcclxuICAgICAgICB0aGlzLm9yaWdpbmFsSGVhbHRoUG9pbnQgPSBkYXRhLmhlYWx0aFBvaW50O1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZGF0YS5pc01vdmU7XHJcbiAgICAgICAgdGhpcy5pc1Nob290ID0gZGF0YS5pc1Nob290O1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTcGVlZCA9IChkYXRhLnZlcnRpY2FsU3BlZWQpID8gZGF0YS52ZXJ0aWNhbFNwZWVkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcGVlZCArIDEpO1xyXG4gICAgICAgIHRoaXMuc3BvdERpc3RhbmNlID0gKGRhdGEuaXNCb3NzKSA/IGRhdGEuc3BvdERpc3RhbmNlIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zcG90RGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMueUZpbmFsID0gMDtcclxuICAgICAgICB0aGlzLnhGaW5hbCA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IGRhdGEuYmVoYXZpb3I7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNCb3NzID0gZGF0YS5pc0Jvc3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW5lbXlPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW5lbXlPYmplY3QgPSBFbmVteU9iamVjdDtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLnBsYWNlRW5lbXllcyA9IGVuZW1pZXNNb2R1bGVzXzEucGxhY2VFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUubW92ZUVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLm1vdmVFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUubG9hZEVuZW15ZXMgPSBlbmVtaWVzTW9kdWxlc18xLmxvYWRFbmVteWVzO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuc2hvb3QgPSBlbmVtaWVzTW9kdWxlc18xLnNob290O1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlBbmltYXRpb24gPSBlbmVtaWVzTW9kdWxlc18xLmVuZW15QW5pbWF0aW9uO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZ2V0T2JqZWN0UG9zaXRpb24gPSBlbmdpbmVfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15RGFtYWdlQW5pbWF0aW9uID0gZW5lbWllc01vZHVsZXNfMS5lbmVteURhbWFnZUFuaW1hdGlvbjtcclxuRW5lbXlPYmplY3QucHJvdG90eXBlLmVuZW15U2hpcExvZ2ljVmVydGljYWwgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5lbmVteVNoaXBMb2dpY1ZlcnRpY2FsO1xyXG5FbmVteU9iamVjdC5wcm90b3R5cGUuZW5lbXlWZXJ0aWNhbE1vdmVDYWxjdWxhdGlvbiA9IHJlZ3VsYXJFbmVteUFpTW9kdWxlc18xLmVuZW15VmVydGljYWxNb3ZlQ2FsY3VsYXRpb247XHJcbkVuZW15T2JqZWN0LnByb3RvdHlwZS50YWtlRGFtYWdlID0gZW5lbWllc01vZHVsZXNfMS50YWtlRGFtYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZW5lbXlNb2R1bGVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9lbmVtaWVzXCIpKTtcclxudmFyIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9nYW1lU2lkZU9iamVjdHNNb2R1bGVcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBTaWRlT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2lkZU9iamVjdChfYSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gX19yZXN0KF9hLCBbXSk7XHJcbiAgICAgICAgdGhpcy54ID0gZGF0YS54O1xyXG4gICAgICAgIHRoaXMueSA9IGRhdGEueTtcclxuICAgICAgICB0aGlzLnN4ID0gZGF0YS5zeDtcclxuICAgICAgICB0aGlzLnN5ID0gZGF0YS5zeTtcclxuICAgICAgICB0aGlzLnNXaWR0aCA9IGRhdGEuc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuc0hlaWdodCA9IGRhdGEuc0hlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gX19kaXJuYW1lICsgZGF0YS50ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcHMgPSBkYXRhLmFuaW1hdGlvblN0ZXBzO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcyA9IGRhdGEubnVtYmVyT2ZJdGVtcztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IGRhdGEudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlc1dpZHRoID0gZGF0YS5waWN0dXJlc1dpZHRoO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gKGRhdGEuZGFtYWdlKSA/IGRhdGEuZGFtYWdlIDogbnVsbDtcclxuICAgICAgICB0aGlzLm9iamVjdE93bmVyID0gKGRhdGEub2JqZWN0T3duZXIpID8gZGF0YS5vYmplY3RPd25lciA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IChkYXRhLmhlYWx0aFBvaW50KSA/IGRhdGEuaGVhbHRoUG9pbnQgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gKGRhdGEuaXNCYWNrZ3JvdW5kKSA/IGRhdGEuaXNCYWNrZ3JvdW5kIDogbnVsbDtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbiA9IChkYXRhLmV4cGxvc2lvbikgPyBkYXRhLmV4cGxvc2lvbiA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb2ludHNQZXJVbml0ID0gKGRhdGEucG9pbnRzUGVyVW5pdCkgPyBkYXRhLnBvaW50c1BlclVuaXQgOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNpZGVPYmplY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2lkZU9iamVjdCA9IFNpZGVPYmplY3Q7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLmVuZW15QW5pbWF0aW9uID0gZW5lbXlNb2R1bGVzLmVuZW15QW5pbWF0aW9uO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5wbGFjZUVuZW15ZXMgPSBlbmVteU1vZHVsZXMucGxhY2VFbmVteWVzO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5maXJlQW5pbWF0aW9uRW5kZWQgPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5maXJlQW5pbWF0aW9uRW5kZWQ7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLnRha2VEYW1hZ2UgPSBlbmVtaWVzTW9kdWxlc18xLnRha2VEYW1hZ2U7XHJcblNpZGVPYmplY3QucHJvdG90eXBlLm1hcE9iamVjdE1vdmUgPSBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMS5tYXBPYmplY3RNb3ZlO1xyXG5TaWRlT2JqZWN0LnByb3RvdHlwZS5lbmVteURhbWFnZUFuaW1hdGlvbiA9IGVuZW1pZXNNb2R1bGVzXzEuZW5lbXlEYW1hZ2VBbmltYXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYWluR2FtZUNvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xldmVsQ29uc3RydWN0b3JzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZW5lbXlDb25zdHJ1Y3RvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3VzZXJDb25zdHJ1Y3RvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2J1bGxldENvbnN0cnVjdG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2FtZVNpZGVPYmplY3RDb25zdHJ1Y3RvclwiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbmdpbmVNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciBiYWNrZ3JvdW5kTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2JhY2tncm91bmRNb2R1bGVcIik7XHJcbnZhciBHYW1lQmFja2dyb3VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVCYWNrZ3JvdW5kKGJhY2tncm91bmRUZXh0dXJlLCBiYWNrZ3JvdW5kU3BlZWQsIHNjcmVlbkRhdGEsIGN0eCwgcGFydE9mU2NyZWVuU3RhdHVzLCBleHRyYU1hcCwgdGltZVRvRXh0cmFNYXBTZWNvbmRzLCB0aW1lVG9FeHRyYU1hcE1pbnV0ZXMpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSA9IGJhY2tncm91bmRUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFNwZWVkID0gYmFja2dyb3VuZFNwZWVkO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuRGF0YSA9IHNjcmVlbkRhdGE7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy54ID0gKHBhcnRPZlNjcmVlblN0YXR1cykgPyAwIDogc2NyZWVuRGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5leHRyYU1hcCA9IGV4dHJhTWFwO1xyXG4gICAgICAgIHRoaXMudGltZVRvRXJlc3NMZXZlbCA9IDQ7XHJcbiAgICAgICAgdGhpcy53YXJwT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGltZVRvRXh0cmFNYXBTZWNvbmRzID0gdGltZVRvRXh0cmFNYXBTZWNvbmRzO1xyXG4gICAgICAgIHRoaXMudGltZVRvRXh0cmFNYXBNaW51dGVzID0gdGltZVRvRXh0cmFNYXBNaW51dGVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdhbWVCYWNrZ3JvdW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWVCYWNrZ3JvdW5kID0gR2FtZUJhY2tncm91bmQ7XHJcbkdhbWVCYWNrZ3JvdW5kLnByb3RvdHlwZS51cGRhdGVNYXAgPSBiYWNrZ3JvdW5kTW9kdWxlXzEudXBkYXRlTWFwO1xyXG5HYW1lQmFja2dyb3VuZC5wcm90b3R5cGUud2FycEVmZmVjdCA9IGVuZ2luZU1vZHVsZXNfMS53YXJwRWZmZWN0O1xyXG5HYW1lQmFja2dyb3VuZC5wcm90b3R5cGUuY2hhbmdlUGFydE9mVGV4dHVyZSA9IGJhY2tncm91bmRNb2R1bGVfMS5jaGFuZ2VQYXJ0T2ZUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vL2ltcG9ydCB7IHZpZXdNb2R1bGVzIH0gZnJvbSAnLi4vdmlldy9kaXNwbGF5TW9kdWxlcyc7XHJcbnZhciByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9haS9yZWd1bGFyRW5lbXlBaU1vZHVsZXNcIik7XHJcbnZhciBlbmVtaWVzTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZW1pZXMvZW5lbWllc01vZHVsZXNcIik7XHJcbnZhciBjaGFuZ2VMZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZU1vZHVsZXMvY2hhbmdlTGV2ZWxzXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9lbmdpbmVNb2R1bGVzXCIpO1xyXG52YXIgcGxheWVyU2hpcE1vZHVsZV8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9wbGF5ZXJTaGlwTW9kdWxlXCIpO1xyXG52YXIgZ2FtZVVpTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3VpL2dhbWVVaU1vZHVsZXNcIik7XHJcbnZhciBzYXRhcnRHYW1lXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVNb2R1bGVzL3NhdGFydEdhbWVcIik7XHJcbnZhciBnYW1lU2lkZU9iamVjdHNNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZ2FtZVNpZGVPYmplY3RzTW9kdWxlXCIpO1xyXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWUoZ2FtZUluaXREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEgPSBnYW1lSW5pdERhdGE7XHJcbiAgICB9XHJcbiAgICBHYW1lLnByb3RvdHlwZS5jaGFuZ2VMZXZlbCA9IGZ1bmN0aW9uIChuZXh0TGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWwgPSBuZXh0TGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbDtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zaG93R2FtZUluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGV2ZWxUb0NoYW5nZTogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50UG9pbnQ6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmN1cnJlbnRQb2ludCxcclxuICAgICAgICAgICAgZ2FtZURhdGE6IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhLFxyXG4gICAgICAgICAgICBpbWFnZURpcnJlY3Rpb246IF9fZGlybmFtZSArICcvcHVibGljL2ltYWdlcy8nLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2hvd0xldmVsRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEubGV2ZWxEYXRhO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJldHVybkNvbnRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmdhbWVGaWVsZCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQgJiZcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVJRmllbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGdhbWVGaWVsZDogdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZ2FtZUFjdGlvbkZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCxcclxuICAgICAgICAgICAgICAgIGdhbWVVSUZpZWxkOiB0aGlzLmdhbWVJbml0RGF0YS5nYW1lVUlGaWVsZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lID0gR2FtZTtcclxuR2FtZS5wcm90b3R5cGUuY3JlYXRlQ29udGV4dCA9IGVuZ2luZU1vZHVsZXNfMS5jcmVhdGVDb250ZXh0O1xyXG5HYW1lLnByb3RvdHlwZS5pbml0RmllbGQgPSBlbmdpbmVNb2R1bGVzXzEuaW5pdEZpZWxkO1xyXG5HYW1lLnByb3RvdHlwZS5sZXZlbEluaXQgPSBlbmdpbmVNb2R1bGVzXzEubGV2ZWxJbml0OyAvLyBjcmVhdGVDb250ZXh0IGluaXRQbGF5ZXJTaGlwXHJcbkdhbWUucHJvdG90eXBlLnNldEdhbWVGaWVsZHMgPSBlbmdpbmVNb2R1bGVzXzEuc2V0R2FtZUZpZWxkcztcclxuR2FtZS5wcm90b3R5cGUud2FycEVmZmVjdCA9IGVuZ2luZU1vZHVsZXNfMS53YXJwRWZmZWN0OyAvLyB3YXJwRWZmZWN0XHJcbkdhbWUucHJvdG90eXBlLmdldFNjcmVlblNpemUgPSBlbmdpbmVNb2R1bGVzXzEuZ2V0U2NyZWVuU2l6ZTtcclxuR2FtZS5wcm90b3R5cGUuZ2V0TGV2ZWxVc2VyRGF0YSA9IGVuZ2luZU1vZHVsZXNfMS5nZXRMZXZlbFVzZXJEYXRhO1xyXG5HYW1lLnByb3RvdHlwZS5sZXZlbFRpbWVyID0gZW5naW5lTW9kdWxlc18xLmxldmVsVGltZXI7XHJcbkdhbWUucHJvdG90eXBlLmdldFNlY29uZE1lYXN1cmUgPSBlbmdpbmVNb2R1bGVzXzEuZ2V0U2Vjb25kTWVhc3VyZTtcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVNlY29uZHNJbmNyZWFzZSA9IGVuZ2luZU1vZHVsZXNfMS5nYW1lU2Vjb25kc0luY3JlYXNlO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0UGxheWVyU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5pbml0UGxheWVyU2hpcDtcclxuLy9HYW1lLnByb3RvdHlwZS5wbGFjZVBsYXllclNoaXAgPSBwbGFjZVBsYXllclNoaXA7XHJcbkdhbWUucHJvdG90eXBlLmRlbGV0ZUJ1bGxldCA9IGVuZ2luZU1vZHVsZXNfMS5kZWxldGVCdWxsZXQ7XHJcbkdhbWUucHJvdG90eXBlLmRlbGV0ZU9iamVjdHMgPSBlbmdpbmVNb2R1bGVzXzEuZGVsZXRlT2JqZWN0cztcclxuR2FtZS5wcm90b3R5cGUuZGVsYXRlU2lkZU9iamVjdCA9IGVuZ2luZU1vZHVsZXNfMS5kZWxhdGVTaWRlT2JqZWN0O1xyXG5HYW1lLnByb3RvdHlwZS5oaXREZXRlY3Rpb24gPSBlbmVtaWVzTW9kdWxlc18xLmhpdERldGVjdGlvbjtcclxuR2FtZS5wcm90b3R5cGUuY29sbGVjdFBvaW50cyA9IGVuZ2luZU1vZHVsZXNfMS5jb2xsZWN0UG9pbnRzO1xyXG5HYW1lLnByb3RvdHlwZS5zcGF3bkVuZW15TG9naWMgPSByZWd1bGFyRW5lbXlBaU1vZHVsZXNfMS5zcGF3bkVuZW15TG9naWM7XHJcbkdhbWUucHJvdG90eXBlLmNyZWF0ZU5ld0VuZW15ID0gcmVndWxhckVuZW15QWlNb2R1bGVzXzEuY3JlYXRlTmV3RW5lbXk7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVSYW5kb21pemVyID0gcmVndWxhckVuZW15QWlNb2R1bGVzXzEuZ2FtZVJhbmRvbWl6ZXI7XHJcbkdhbWUucHJvdG90eXBlLnVpQ29udHJvbGxlciA9IGdhbWVVaU1vZHVsZXNfMS51aUNvbnRyb2xsZXI7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVVaVBhdXNlID0gZ2FtZVVpTW9kdWxlc18xLmdhbWVVaVBhdXNlO1xyXG5HYW1lLnByb3RvdHlwZS5nYW1lVWlNZW51ID0gZ2FtZVVpTW9kdWxlc18xLmdhbWVVaU1lbnU7XHJcbkdhbWUucHJvdG90eXBlLnNob3dNZW51V2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dNZW51V2luZG93O1xyXG5HYW1lLnByb3RvdHlwZS5zaG93VWlQb3B1cFdpbmRvdyA9IGdhbWVVaU1vZHVsZXNfMS5zaG93VWlQb3B1cFdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd1N0YXJ0V2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dTdGFydFdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd1BhdXNlV2luZG93ID0gZ2FtZVVpTW9kdWxlc18xLnNob3dQYXVzZVdpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXJXaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZU92ZXJXaW5kb3c7XHJcbkdhbWUucHJvdG90eXBlLmdhbWVXaW5XaW5kb3cgPSBnYW1lVWlNb2R1bGVzXzEuZ2FtZVdpbldpbmRvdztcclxuR2FtZS5wcm90b3R5cGUuc2hvd0dhbWVTdGF0cyA9IGdhbWVVaU1vZHVsZXNfMS5zaG93R2FtZVN0YXRzO1xyXG5HYW1lLnByb3RvdHlwZS5pbml0VWlFbGVtZW50cyA9IGdhbWVVaU1vZHVsZXNfMS5pbml0VWlFbGVtZW50cztcclxuR2FtZS5wcm90b3R5cGUuZ2FtZVN0YXJ0ID0gc2F0YXJ0R2FtZV8xLmdhbWVTdGFydDtcclxuR2FtZS5wcm90b3R5cGUuYmFja1RvU3RhcnRTY3JlZW4gPSBzYXRhcnRHYW1lXzEuYmFja1RvU3RhcnRTY3JlZW47XHJcbkdhbWUucHJvdG90eXBlLmV4aXRUaGVHYW1lID0gc2F0YXJ0R2FtZV8xLmV4aXRUaGVHYW1lO1xyXG5HYW1lLnByb3RvdHlwZS5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gY2hhbmdlTGV2ZWxzXzEubmV4dExldmVsRGF0YVJlbG9hZDtcclxuR2FtZS5wcm90b3R5cGUuY2hhbmdlTGV2ZWxQcm9jZWR1cmUgPSBlbmdpbmVNb2R1bGVzXzEuY2hhbmdlTGV2ZWxQcm9jZWR1cmU7XHJcbkdhbWUucHJvdG90eXBlLmdldFJhbmRvbUNvbG9yID0gZW5naW5lTW9kdWxlc18xLmdldFJhbmRvbUNvbG9yO1xyXG5HYW1lLnByb3RvdHlwZS5tYXBSYW5vbU9iamVjdFNwYXduID0gZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEubWFwUmFub21PYmplY3RTcGF3bjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBsYXllclNoaXBNb2R1bGVfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvcGxheWVyU2hpcE1vZHVsZVwiKTtcclxudmFyIGVuZ2luZU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvZW5naW5lTW9kdWxlc1wiKTtcclxudmFyIGVuZW1pZXNNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vZW5lbWllcy9lbmVtaWVzTW9kdWxlc1wiKTtcclxudmFyIFBsYXllclNoaXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJTaGlwKGRhdGEsIHBvaW50cywgaGVhbHRoUG9pbnQsIG51bWJlck9mbGlmZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgZGFtYWdlKSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMTAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMTAwOyB9XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcclxuICAgICAgICB0aGlzLm51bWJlck9mbGlmZSA9IG51bWJlck9mbGlmZTtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gaGVhbHRoUG9pbnQgKyBkYXRhLmFybW9yO1xyXG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoUG9pbnQgKyBkYXRhLmFybW9yO1xyXG4gICAgICAgIHRoaXMueCA9IHggLSAod2lkdGggLyAyKTtcclxuICAgICAgICB0aGlzLnkgPSB5IC0gKGhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMueEZpbmFsID0geDtcclxuICAgICAgICB0aGlzLnlGaW5hbCA9IHk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25BbGxvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RPd25lciA9IFwicGxheWVyXCI7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueEFkaiA9IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb24gPSBkYXRhLmV4cGxvc2lvbjtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuICAgIH1cclxuICAgIHJldHVybiBQbGF5ZXJTaGlwO1xyXG59KCkpO1xyXG5leHBvcnRzLlBsYXllclNoaXAgPSBQbGF5ZXJTaGlwO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5pbml0UGxheWVyU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5pbml0UGxheWVyU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUubW92ZVBsYXllclNoaXAgPSBwbGF5ZXJTaGlwTW9kdWxlXzEubW92ZVBsYXllclNoaXA7XHJcblBsYXllclNoaXAucHJvdG90eXBlLnNoaXBDb250cm9sID0gcGxheWVyU2hpcE1vZHVsZV8xLnNoaXBDb250cm9sO1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5tb3ZlU2hpcCA9IHBsYXllclNoaXBNb2R1bGVfMS5tb3ZlU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUucGxhY2VTaGlwID0gcGxheWVyU2hpcE1vZHVsZV8xLnBsYWNlU2hpcDtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUuc2V0Q29udGV4dCA9IHBsYXllclNoaXBNb2R1bGVfMS5zZXRDb250ZXh0O1xyXG5QbGF5ZXJTaGlwLnByb3RvdHlwZS5nZXRPYmplY3RQb3NpdGlvbiA9IGVuZ2luZU1vZHVsZXNfMS5nZXRPYmplY3RQb3NpdGlvbjtcclxuUGxheWVyU2hpcC5wcm90b3R5cGUudGFrZURhbWFnZSA9IGVuZW1pZXNNb2R1bGVzXzEudGFrZURhbWFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG52YXIgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKTtcclxudmFyIGNvc3RydWN0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9jb25zdHJ1Y3RvcnNcIikpO1xyXG5mdW5jdGlvbiBwbGFjZUVuZW15ZXMobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlSW1hZ2UobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eEFjdGlvbkZpZWxkLCB0aGlzLmltZywgdGhpcy5zeCwgdGhpcy5zeSwgdGhpcy5zV2lkdGgsIHRoaXMuc0hlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLnBsYWNlRW5lbXllcyA9IHBsYWNlRW5lbXllcztcclxuZnVuY3Rpb24gbW92ZUVuZW15ZXMobW92ZVgsIG1vdmVZKSB7XHJcbiAgICBpZiAobW92ZVkgPT09IHZvaWQgMCkgeyBtb3ZlWSA9IDA7IH1cclxuICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgdGhpcy55IC09IG1vdmVZO1xyXG59XHJcbmV4cG9ydHMubW92ZUVuZW15ZXMgPSBtb3ZlRW5lbXllcztcclxuZnVuY3Rpb24gbG9hZEVuZW15ZXMoKSB7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gdGhpcy5zaGlwVGV4dHVyZTtcclxufVxyXG5leHBvcnRzLmxvYWRFbmVteWVzID0gbG9hZEVuZW15ZXM7XHJcbmZ1bmN0aW9uIHNob290KEJ1bGxldENvbnN0cnVjdG9yLCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgaWYgKG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgfHwgIXRoaXMuaXNTaG9vdClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvL2xldCByYW5kb21TaG9vdCA9IG1haW5HYW1lT2JqZWN0LmdhbWVSYW5kb21pemVyKCBNYXRoLnBvdyh0aGlzLnJhcGlkRmlyZSwgMikgKTtcclxuICAgIC8vbGV0IHNob290UHJvYmFiaWxpdHkgPSBtYWluR2FtZU9iamVjdC5nYW1lUmFuZG9taXplciggdGhpcy5yYXBpZEZpcmUgKTtcclxuICAgIHZhciBndW5zID0gdGhpcy5ndW5zO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmICgxID4gbWFpbkdhbWVPYmplY3QuZ2FtZVJhbmRvbWl6ZXIoaXRlbS5maXJlUmVwZWFkKSkge1xyXG4gICAgICAgICAgICB2YXIgYnVsbGV0XzEgPSBuZXcgQnVsbGV0Q29uc3RydWN0b3IodGhpc18xLngsIHRoaXNfMS55ICsgKChpdGVtLmZpcmVQb3NpdGlvbikgPyBpdGVtLmZpcmVQb3NpdGlvbiA6IG1haW5HYW1lT2JqZWN0LmdhbWVSYW5kb21pemVyKHRoaXNfMS5oZWlnaHQpKSwgaXRlbS5uYW1lLCBpdGVtLmNvbG9yLCBcImVuZW15XCIsIGl0ZW0uc3BlZWQgKyB0aGlzXzEuc3BlZWQsIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0LCBpdGVtLmRhbWFnZSwgaXRlbS50eXBlLCBpdGVtLnRleHR1cmUsIGl0ZW0uc3gsIGl0ZW0uc3ksIGl0ZW0uc1dpZHRoLCBpdGVtLnNIZWlnaHQsIGl0ZW0uZXhwbG9zaW9uQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgYnVsbGV0XzEuaW1nLnNyYyA9IGJ1bGxldF8xLnRleHR1cmU7XHJcbiAgICAgICAgICAgIGJ1bGxldF8xLmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMuY29uY2F0KGJ1bGxldF8xKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHRoaXNfMSA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGd1bnNfMSA9IGd1bnM7IF9pIDwgZ3Vuc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gZ3Vuc18xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc2hvb3QgPSBzaG9vdDtcclxuZnVuY3Rpb24gZW5lbXlBbmltYXRpb24oc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gdHJ1ZTsgfVxyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDAgJiYgc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuc1dpZHRoO1xyXG4gICAgICAgIGlmICh0aGlzLnN4ID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lbmVteUFuaW1hdGlvbiA9IGVuZW15QW5pbWF0aW9uO1xyXG5mdW5jdGlvbiBlbmVteURhbWFnZUFuaW1hdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcyA+IDEpIHtcclxuICAgICAgICB2YXIgZGFtYWdlQW5pbWF0aW9uUG9pbnRfMSA9IHRoaXMub3JpZ2luYWxIZWFsdGhQb2ludCAvIHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zO1xyXG4gICAgICAgIHZhciBkYW1hZ2VQb2ludCA9IG5ldyBBcnJheSh0aGlzLm51bWJlck9mVmVydGljYWxJdGVtcykuZmlsbChudWxsKTtcclxuICAgICAgICBkYW1hZ2VQb2ludCA9IGRhbWFnZVBvaW50Lm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHsgcmV0dXJuIGRhbWFnZUFuaW1hdGlvblBvaW50XzEgKiAoaW5kZXggKyAxKTsgfSkuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhbWFnZVBvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50IDwgZGFtYWdlUG9pbnRbaV0gJiYgdGhpcy5oZWFsdGhQb2ludCA+IGRhbWFnZVBvaW50W2kgKyAxXSAmJiBkYW1hZ2VQb2ludFtpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3kgPSB0aGlzLnNIZWlnaHQgKiAoaSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghZGFtYWdlUG9pbnRbaSArIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5ID0gdGhpcy5zSGVpZ2h0ICogKHRoaXMubnVtYmVyT2ZWZXJ0aWNhbEl0ZW1zIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lbmVteURhbWFnZUFuaW1hdGlvbiA9IGVuZW15RGFtYWdlQW5pbWF0aW9uO1xyXG4vLyBjb21wbGV4IGVuZW15IGFuaW1hdGlvbiBmb3IgZGFtYWdlXHJcbmZ1bmN0aW9uIHRha2VEYW1hZ2UoZGFtYWdlLCBoaXRPYmplY3QsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGhpdE9iamVjdC5vYmplY3RPd25lciA9PSBcInBsYXllclwiIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnYnVsbGV0VHlwZScpICYmIHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbnZpcm9ubWVudFwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiY29sbGlkZVwiICYmIGhpdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2J1bGxldFR5cGUnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIgJiYgaGl0T2JqZWN0Lmhhc093blByb3BlcnR5KCdoZWFsdGhQb2ludCcpKSB7XHJcbiAgICAgICAgZ2FtZVNpZGVPYmplY3RzTW9kdWxlXzEuZXhwbG9zaW9uRmlyZSh0aGlzLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBjb3N0cnVjdG9ycy5TaWRlT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImNvbGxpZGVcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImNvbGxpZGVcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiIHx8XHJcbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwiZW52aXJvbm1lbnRcIiAmJiBoaXRPYmplY3Qub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIiB8fFxyXG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoJ2hlYWx0aFBvaW50JykgJiYgdGhpcy5vYmplY3RPd25lciA9PSBcImVudmlyb25tZW50XCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW5lbXlcIikge1xyXG4gICAgICAgIHVuaXREYW1hZ2UuY2FsbCh0aGlzLCBudWxsLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5lbmVteURhbWFnZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RQcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdhbWVTaWRlT2JqZWN0c01vZHVsZV8xLmV4cGxvc2lvbkZpcmUodGhpcywgbWFpbkdhbWVPYmplY3QsIGhpdE9iamVjdCwgY29zdHJ1Y3RvcnMuU2lkZU9iamVjdCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQm9zcylcclxuICAgICAgICAgICAgICAgIGJvc3NFbmVteURlc3RydWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnaGVhbHRoUG9pbnQnKSAmJiB0aGlzLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgaGl0T2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW5lbXlcIikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkFsbG93KSB7XHJcbiAgICAgICAgICAgIHVuaXREYW1hZ2UuY2FsbCh0aGlzLCBtYWluR2FtZU9iamVjdC5nZXRMZXZlbFVzZXJEYXRhKCksIG1haW5HYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gdW5pdERhbWFnZShkYXRhLCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnQgLT0gZGFtYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50IDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5saWZlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zb3Vyc2UucGxheWVyT2JqZWN0Lm51bWJlck9mbGlmZSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc291cnNlLnBsYXllck9iamVjdC5udW1iZXJPZmxpZmUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5HYW1lT2JqZWN0LmdhbWVPdmVyV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuYmFja1RvU3RhcnRTY3JlZW4oY29zdHJ1Y3RvcnMuUGxheWVyU2hpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gZGF0YS5zb3Vyc2UucGxheWVyT2JqZWN0Lm1heEhlYWx0aDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluR2FtZU9iamVjdC5jb2xsZWN0UG9pbnRzKHRoaXMucG9pbnRzUGVyVW5pdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBib3NzRW5lbXlEZXN0cnVjdGlvbigpIHtcclxuICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudGFrZURhbWFnZSA9IHRha2VEYW1hZ2U7XHJcbmZ1bmN0aW9uIGhpdERldGVjdGlvbihvYmplY3QxLCBvYmplY3RzQXJyLCBtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIGNvbGxpc2lvbiA9IG51bGw7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIG9iamVjdHNBcnJfMSA9IG9iamVjdHNBcnI7IF9pIDwgb2JqZWN0c0Fycl8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBvYmplY3QyID0gb2JqZWN0c0Fycl8xW19pXTtcclxuICAgICAgICB2YXIgb2JqZWN0MVBvc2l0aW9uID0gb2JqZWN0MS5nZXRPYmplY3RQb3NpdGlvbi5jYWxsKG9iamVjdDEpO1xyXG4gICAgICAgIHZhciB4TWluID0gTWF0aC5tYXgob2JqZWN0MVBvc2l0aW9uLngsIG9iamVjdDIueCk7XHJcbiAgICAgICAgdmFyIHlNaW4gPSBNYXRoLm1heChvYmplY3QxUG9zaXRpb24ueSwgb2JqZWN0Mi55KTtcclxuICAgICAgICB2YXIgeE1heCA9IE1hdGgubWluKG9iamVjdDFQb3NpdGlvbi54ICsgKG9iamVjdDEud2lkdGggfHwgb2JqZWN0MVBvc2l0aW9uLndpZHRoKSwgb2JqZWN0Mi54ICsgb2JqZWN0Mi53aWR0aCk7XHJcbiAgICAgICAgdmFyIHlNYXggPSBNYXRoLm1pbihvYmplY3QxUG9zaXRpb24ueSArIChvYmplY3QxLmhlaWdodCB8fCBvYmplY3QxUG9zaXRpb24uaGVpZ2h0KSwgb2JqZWN0Mi55ICsgb2JqZWN0Mi5oZWlnaHQpO1xyXG4gICAgICAgIHZhciByZXNYID0geE1heCAtIHhNaW47XHJcbiAgICAgICAgdmFyIHJlc1kgPSB5TWF4IC0geU1pbjtcclxuICAgICAgICBjb2xsaXNpb24gPSAoTWF0aC5zaWduKHJlc1gpIDwgMCB8fCBNYXRoLnNpZ24ocmVzWSkgPCAwKSA/IGZhbHNlIDogXCJjb2xsaXNpb25cIjtcclxuICAgICAgICBpZiAoY29sbGlzaW9uID09IFwiY29sbGlzaW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdDEudGFrZURhbWFnZSAmJiBvYmplY3QyLnRha2VEYW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDEudGFrZURhbWFnZSgob2JqZWN0Mi5kYW1hZ2UpID8gb2JqZWN0Mi5kYW1hZ2UgOiAwLCBvYmplY3QyLCBtYWluR2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QyLnRha2VEYW1hZ2UoKG9iamVjdDEuZGFtYWdlKSA/IG9iamVjdDEuZGFtYWdlIDogMCwgb2JqZWN0MSwgbWFpbkdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoY29sbGlzaW9uID09IFwiY29sbGlzaW9uXCIpID8gb2JqZWN0MSA6IGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaGl0RGV0ZWN0aW9uID0gaGl0RGV0ZWN0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZW5lbWllc01vZHVsZXNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9EYXRhID0gJ1RoZXJlIGlzIG5vIGRhdGEnLCBub09iamVjdCA9ICdUaGVyZSBpcyBubyBPYmplY3QnO1xyXG5leHBvcnRzLm5vRGF0YSA9IG5vRGF0YTtcclxuZXhwb3J0cy5ub09iamVjdCA9IG5vT2JqZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiB1cGRhdGVNYXAoKSB7XHJcbiAgICB2YXIgYmFja2dyb3VuZE9iamVjdCA9IHRoaXM7XHJcbiAgICB0aGlzLnggLT0gdGhpcy5iYWNrZ3JvdW5kU3BlZWQ7XHJcbiAgICBpZiAoTWF0aC5zaWduKHRoaXMuYmFja2dyb3VuZFNwZWVkKSA+IDAgJiYgdGhpcy54ICsgdGhpcy5zY3JlZW5EYXRhLndpZHRoIDwgMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuc2NyZWVuRGF0YS53aWR0aDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKE1hdGguc2lnbih0aGlzLmJhY2tncm91bmRTcGVlZCkgPCAwICYmIHRoaXMueCA+IHRoaXMuc2NyZWVuRGF0YS53aWR0aCkge1xyXG4gICAgICAgIHRoaXMueCA9IDAgLSB0aGlzLnNjcmVlbkRhdGEud2lkdGg7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUltYWdlKGJhY2tncm91bmRPYmplY3QuY3R4LCBiYWNrZ3JvdW5kT2JqZWN0LmltZywgYmFja2dyb3VuZE9iamVjdC54LCAwLCBiYWNrZ3JvdW5kT2JqZWN0LnNjcmVlbkRhdGEud2lkdGggKyAyLCBiYWNrZ3JvdW5kT2JqZWN0LnNjcmVlbkRhdGEuaGVpZ2h0KTtcclxufVxyXG5leHBvcnRzLnVwZGF0ZU1hcCA9IHVwZGF0ZU1hcDtcclxuZnVuY3Rpb24gY2hhbmdlUGFydE9mVGV4dHVyZShtYWluR2FtZU9iamVjdCwgYmFja2dyb3VuZEFycmF5KSB7XHJcbiAgICB2YXIgbGV2ZWxEYXRhID0gbWFpbkdhbWVPYmplY3QuZ2V0TGV2ZWxVc2VyRGF0YSgpO1xyXG4gICAgdmFyIHNjcmVlbkRhdGEgPSBtYWluR2FtZU9iamVjdC5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICBpZiAobGV2ZWxEYXRhLm1pbnV0ZXMgPD0gdGhpcy50aW1lVG9FeHRyYU1hcE1pbnV0ZXNcclxuICAgICAgICAmJiBsZXZlbERhdGEuc2Vjb25kcyA8PSB0aGlzLnRpbWVUb0V4dHJhTWFwU2Vjb25kc1xyXG4gICAgICAgICYmIHRoaXMuZXh0cmFNYXAgJiYgdGhpcy54ID49IHNjcmVlbkRhdGEud2lkdGggLSAyMDApIHtcclxuICAgICAgICB2YXIgaW5mbyA9IG1haW5HYW1lT2JqZWN0LnNob3dHYW1lSW5mbygpO1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IGluZm8uaW1hZ2VEaXJyZWN0aW9uICsgdGhpcy5leHRyYU1hcDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNoYW5nZVBhcnRPZlRleHR1cmUgPSBjaGFuZ2VQYXJ0T2ZUZXh0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGlzcGxheU1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2Rpc3BsYXlNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBjcmVhdGVCdWxsZXRzKG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZUxhc2VyQnVsbGV0KHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMsXHJcbiAgICAgICAgb2JqZWN0T3duZXI6IHRoaXMub2JqZWN0T3duZXIsXHJcbiAgICAgICAgY3R4OiBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4QWN0aW9uRmllbGQsXHJcbiAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgIHk6IHRoaXMueSxcclxuICAgICAgICBjb2xvcjogdGhpcy5idWxsZXRUZXh0dXJlLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgcmFkaXVzOiA1LFxyXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICBpbWc6IHRoaXMuaW1nLFxyXG4gICAgICAgIHN4OiB0aGlzLnN4LCBzeTogdGhpcy5zeSwgc1dpZHRoOiB0aGlzLnNXaWR0aCwgc0hlaWdodDogdGhpcy5zSGVpZ2h0XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUJ1bGxldHMgPSBjcmVhdGVCdWxsZXRzO1xyXG5mdW5jdGlvbiBpbml0QnVsbGV0cygpIHtcclxufVxyXG5leHBvcnRzLmluaXRCdWxsZXRzID0gaW5pdEJ1bGxldHM7XHJcbmZ1bmN0aW9uIG1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJibGFzdGVyXCI6XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJlYW1cIjpcclxuICAgICAgICAgICAgYmVhbS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG1vdmUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0T3duZXIgPT0gXCJwbGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJlYW0oKSB7XHJcbiAgICAgICAgdmFyIHNjcmVlbkRhdGEgPSBnYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICBpZiAodGhpcy54ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHRoaXMuYnVsbGV0U3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggLT0gdGhpcy5idWxsZXRTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tb3ZlQnVsbGV0cyA9IG1vdmVCdWxsZXRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxuLy9pbXBvcnQgeyBsZXZlbENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vY29uc3RydWN0b3JzL2xldmVsQ29uc3RydWN0b3JzJztcclxuZnVuY3Rpb24gaW5pdEZpZWxkKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpIHtcclxuICAgIGlmIChzY3JlZW5XaWR0aCA9PT0gdm9pZCAwKSB7IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7IH1cclxuICAgIGlmIChzY3JlZW5IZWlnaHQgPT09IHZvaWQgMCkgeyBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IH1cclxuICAgIHZhciBnYW1lRmllbGQgPSBbXS5jb25jYXQodGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLCB0aGlzLmdhbWVJbml0RGF0YS5nYW1lQWN0aW9uRmllbGQsIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkKTtcclxuICAgIGlmICghZ2FtZUZpZWxkKVxyXG4gICAgICAgIHRocm93IEVycm9yKCdFcnJvcicpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBnYW1lRmllbGRfMSA9IGdhbWVGaWVsZDsgX2kgPCBnYW1lRmllbGRfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2NyZWVuXzEgPSBnYW1lRmllbGRfMVtfaV07XHJcbiAgICAgICAgc2NyZWVuXzEgPSBPYmplY3QuYXNzaWduKHNjcmVlbl8xLCB7IHdpZHRoOiBzY3JlZW5XaWR0aCAtIDQsIGhlaWdodDogc2NyZWVuSGVpZ2h0IC0gNCB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmluaXRGaWVsZCA9IGluaXRGaWVsZDtcclxuZnVuY3Rpb24gc2V0R2FtZUZpZWxkcygpIHtcclxuICAgIHRoaXMuaW5pdEZpZWxkKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRleHQoKTtcclxuICAgIHRoaXMuaW5pdFBsYXllclNoaXAoKTtcclxufVxyXG5leHBvcnRzLnNldEdhbWVGaWVsZHMgPSBzZXRHYW1lRmllbGRzO1xyXG5mdW5jdGlvbiB3YXJwRWZmZWN0KCkge1xyXG4gICAgdmFyIHNjcmVlblNpeiA9IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpO1xyXG4gICAgdmFyIGN0eCA9IHRoaXMuZ2FtZUluaXREYXRhLmN0eDtcclxuICAgIHZhciBnYW1lV2FycE9iamVjdHMgPSB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cztcclxuICAgIHRoaXMuZ2V0U2Vjb25kTWVhc3VyZSh3YXJwVGltZXIsIHsgdGltZVRvRXJlc3NMZXZlbDogdGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCwgY3R4OiBjdHgsIHNjcmVlblNpejogdGhpcy5nZXRTY3JlZW5TaXplKCkgfSk7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS53YXJwT2JqZWN0cyA9IChnYW1lV2FycE9iamVjdHMubGVuZ3RoIDwgMzUwKSA/IHRoaXMuZ2FtZUluaXREYXRhLndhcnBPYmplY3RzLmNvbmNhdCh7XHJcbiAgICAgICAgeDogc2NyZWVuU2l6LndpZHRoLFxyXG4gICAgICAgIHk6IHRoaXMuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuU2l6LmhlaWdodCksXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWVSYW5kb21pemVyKDIwLCAxMCksXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIHNwZWVkOiB0aGlzLmdhbWVSYW5kb21pemVyKDEwLCA1KSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmdldFJhbmRvbUNvbG9yKCksXHJcbiAgICB9KSA6IHRoaXMuZ2FtZUluaXREYXRhLndhcnBPYmplY3RzO1xyXG4gICAgaWYgKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBnYW1lV2FycE9iamVjdHNfMSA9IGdhbWVXYXJwT2JqZWN0czsgX2kgPCBnYW1lV2FycE9iamVjdHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHdhcnBlciA9IGdhbWVXYXJwT2JqZWN0c18xW19pXTtcclxuICAgICAgICAgICAgd2FycGVyLnggLT0gKHdhcnBlci54ID4gMCkgPyB3YXJwZXIuc3BlZWQgOiAwO1xyXG4gICAgICAgICAgICB3YXJwZXIud2lkdGggPSAoZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDE1MCkgPyB3YXJwZXIud2lkdGggLSB3YXJwZXIuc3BlZWRcclxuICAgICAgICAgICAgICAgIDogKGdhbWVXYXJwT2JqZWN0cy5sZW5ndGggPiAxNTAgJiYgZ2FtZVdhcnBPYmplY3RzLmxlbmd0aCA8IDM1MCkgPyB3YXJwZXIud2lkdGggKyB3YXJwZXIuc3BlZWQgOiB3YXJwZXIud2lkdGggLSB3YXJwZXIuc3BlZWQ7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB3YXJwZXIuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5kcmF3KGN0eCwgJ2ZpbGxSZWN0Jywgd2FycGVyLngsIHdhcnBlci55LCB3YXJwZXIud2lkdGgsIHdhcnBlci5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhcnBUaW1lcihsZXZlbERhdGEpIHtcclxuICAgICAgICB2YXIgbGV2ZUNoYW5nZVN0YXR1cyA9ICh0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID49IDApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVJbml0RGF0YS50aW1lVG9FcmVzc0xldmVsID49IDAgJiYgIWxldmVDaGFuZ2VTdGF0dXMpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLnRpbWVUb0VyZXNzTGV2ZWwgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA8IDAgJiYgIWxldmVDaGFuZ2VTdGF0dXMpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGV2ZWxQcm9jZWR1cmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLndhcnBFZmZlY3QgPSB3YXJwRWZmZWN0O1xyXG5mdW5jdGlvbiBsZXZlbEluaXQoYmFja2dyb3VuZENvbnN0cnVjdG9yLCBjdHgsIG1haW5HYW1lT2JqZWN0KSB7XHJcbiAgICB2YXIgZ2FtZURhdGEgPSB0aGlzLnNob3dMZXZlbERhdGEoKTtcclxuICAgIHZhciBhbGxCYWNrZ3JvdW5kRWxlbWVudHMgPSBnYW1lRGF0YS5sZXZlbEJhY2tncm91bmRFbGVtZW50cztcclxuICAgIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5iYWNrU2NyZWVuUGF1c2UgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQmFja2dyb3VuZEVsZW1lbnRzXzEgPSBhbGxCYWNrZ3JvdW5kRWxlbWVudHM7IF9pIDwgYWxsQmFja2dyb3VuZEVsZW1lbnRzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIG1hcE9iamVjdCA9IGFsbEJhY2tncm91bmRFbGVtZW50c18xW19pXTtcclxuICAgICAgICB2YXIgbWFwSXRlbSA9IG5ldyBiYWNrZ3JvdW5kQ29uc3RydWN0b3IobWFwT2JqZWN0LmxldmVsTWFwLCBtYXBPYmplY3Quc3BlZWQsIHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbiwgY3R4LCAodGhpcy5nYW1lSW5pdERhdGEubWFwQmFja2dyb3VuZE9iamVjdHMubGVuZ3RoICUgMiA9PSAwKSA/IHRydWUgOiBudWxsLCAobWFwT2JqZWN0LmV4dHJhTWFwKSA/IG1hcE9iamVjdC5leHRyYU1hcCA6IG51bGwsIChtYXBPYmplY3QudGltZVRvRXh0cmFNYXBTZWNvbmRzKSA/IG1hcE9iamVjdC50aW1lVG9FeHRyYU1hcFNlY29uZHMgOiBudWxsLCAobWFwT2JqZWN0LnRpbWVUb0V4dHJhTWFwTWludXRlcykgPyBtYXBPYmplY3QudGltZVRvRXh0cmFNYXBNaW51dGVzIDogbnVsbCk7XHJcbiAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzLmNvbmNhdChtYXBJdGVtKTtcclxuICAgICAgICBtYXBJdGVtLmltZy5zcmMgPSBfX2Rpcm5hbWUgKyBtYXBJdGVtLmJhY2tncm91bmRUZXh0dXJlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubGV2ZWxJbml0ID0gbGV2ZWxJbml0O1xyXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuY3R4ID0gdGhpcy5nYW1lSW5pdERhdGEuZ2FtZUZpZWxkLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVBY3Rpb25GaWVsZC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVSUZpZWxkLmdldENvbnRleHQoJzJkJyk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcclxuZnVuY3Rpb24gZ2V0U2NyZWVuU2l6ZSgpIHtcclxuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgaGVpZ2h0ID0gdGhpcy5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodDtcclxuICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxyXG5leHBvcnRzLmdldFNjcmVlblNpemUgPSBnZXRTY3JlZW5TaXplO1xyXG5mdW5jdGlvbiBjaGFuZ2VMZXZlbFByb2NlZHVyZSgpIHtcclxuICAgIC8vIGFuaW1hdGlvbiBmb3Igd2FycCwgaHR0cCByZXF1ZXN0IGZvciBsZXZlbCBhbmQgZW5lbXllcywgMTAgbGV2ZWxzIG11c3QgYmVcclxuICAgIC8vIHNvbWUgbGV2ZWxzIG11c3QgY29udGFpbiBib3NzIGF0IGxlYXN0IDIgYm9zc1xyXG4gICAgLy8gbGFzdCBsZXZlbCBpcyBmaW5hbCB0aXRsZXMgdGhlIGVuZCBzYXZlIHNjb3JlXHJcbiAgICB2YXIgbGV2ZWxEYXRhID0gdGhpcy5zaG93R2FtZUluZm8oKTtcclxuICAgIHZhciBsZXZlbCA9IHRoaXMuY2hhbmdlTGV2ZWwobGV2ZWxEYXRhLmdhbWVEYXRhLmN1cnJlbnRMZXZlbCArIDEpO1xyXG4gICAgaWYgKGxldmVsIDw9IGxldmVsRGF0YS5nYW1lRGF0YS5sZXZlbERhdGEuYWxsTGV2ZWxzKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWxEYXRhUmVsb2FkKGxldmVsRGF0YSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvL2FsZXJ0KFwiV2luIEdhbWUgU2NyZWVuIFwiKVxyXG4gICAgICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVXaW4gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY2hhbmdlTGV2ZWxQcm9jZWR1cmUgPSBjaGFuZ2VMZXZlbFByb2NlZHVyZTtcclxuZnVuY3Rpb24gbGV2ZWxUaW1lcigpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICBpZiAoIWRhdGEuc291cnNlLmxldmVsRGF0YS5ib3NQcmVzZW50cykge1xyXG4gICAgICAgIHZhciBsZXZlbFRpbWUgPSBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzOyAvLyB7IGxldmVsTWludXRlczogMywgbGV2ZWxTZWNvbmRzOiA0MyB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5nZXRTZWNvbmRNZWFzdXJlKGxldmVsVGltZUFjdGlvbiwgZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmxldmVsRGV0YWlscyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkYXRhLnNvdXJzZS5sZXZlbERhdGEubGV2ZWxEZXRhaWxzLmxldmVsU2Vjb25kcyA9IG51bGw7XHJcbiAgICAgICAgZGF0YS5zb3Vyc2UubGV2ZWxEYXRhLmxldmVsRGV0YWlscy5sZXZlbE1pbnV0ZXMgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGV2ZWxUaW1lQWN0aW9uKHRpbWUpIHtcclxuICAgICAgICBpZiAodGltZS5sZXZlbFNlY29uZHMgPD0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGltZS5sZXZlbE1pbnV0ZXMgPT0gMCAmJiB0aW1lLmxldmVsU2Vjb25kcyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lLmxldmVsU2Vjb25kcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5sZXZlbENoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGltZS5sZXZlbE1pbnV0ZXMgPSAodGltZS5sZXZlbE1pbnV0ZXMgPiAwKSA/IHRpbWUubGV2ZWxNaW51dGVzIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWUubGV2ZWxTZWNvbmRzID0gKHRpbWUubGV2ZWxTZWNvbmRzID4gMCkgPyB0aW1lLmxldmVsU2Vjb25kcyAtIDEgOiAodGhpcy5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UpID8gMCA6IDU5O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubGV2ZWxUaW1lciA9IGxldmVsVGltZXI7XHJcbmZ1bmN0aW9uIGdldFNlY29uZE1lYXN1cmUoY2FsbGJhY2spIHtcclxuICAgIHZhciBkYXRhID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGRhdGFbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgZ2FtZVNlY29uZCA9IDEwMDAgLyB0aGlzLmdhbWVJbml0RGF0YS5pbnRlcnZhbENvdW50O1xyXG4gICAgaWYgKHRoaXMuZ2FtZUluaXREYXRhLmdlbWVFeHRyYVNlY29uZHMgJSBnYW1lU2Vjb25kID09IDApIHtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nZW1lRXh0cmFTZWNvbmRzID0gMDtcclxuICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsLmFwcGx5KGNhbGxiYWNrLCBfX3NwcmVhZEFycmF5cyhbdGhpc10sIGRhdGEpKTtcclxuICAgICAgICByZXR1cm4gZ2FtZVNlY29uZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdldFNlY29uZE1lYXN1cmUgPSBnZXRTZWNvbmRNZWFzdXJlO1xyXG5mdW5jdGlvbiBnYW1lU2Vjb25kc0luY3JlYXNlKCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2VtZUV4dHJhU2Vjb25kcyArPSAxO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVNlY29uZHNJbmNyZWFzZSA9IGdhbWVTZWNvbmRzSW5jcmVhc2U7XHJcbmZ1bmN0aW9uIGdldExldmVsVXNlckRhdGEoKSB7XHJcbiAgICB2YXIgZGF0YVNvdXJzZSA9IHRoaXMuZ2FtZUluaXREYXRhLmdhbWVEYXRhO1xyXG4gICAgdmFyIGxldmVsVGltZSA9IGRhdGFTb3Vyc2UubGV2ZWxEYXRhLmxldmVsRGV0YWlscztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc291cnNlOiBkYXRhU291cnNlLFxyXG4gICAgICAgIGN1cnJlbnRMZXZlbDogZGF0YVNvdXJzZS5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgYWxsTGV2ZWxzOiBkYXRhU291cnNlLmxldmVsRGF0YS5hbGxMZXZlbHMsXHJcbiAgICAgICAgcG9pbnRzOiBkYXRhU291cnNlLmN1cnJlbnRQb2ludCxcclxuICAgICAgICBsaWZlOiBkYXRhU291cnNlLnBsYXllck9iamVjdC5udW1iZXJPZmxpZmUsXHJcbiAgICAgICAgbWludXRlczogbGV2ZWxUaW1lLmxldmVsTWludXRlcyxcclxuICAgICAgICBzZWNvbmRzOiBsZXZlbFRpbWUubGV2ZWxTZWNvbmRzXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZ2V0TGV2ZWxVc2VyRGF0YSA9IGdldExldmVsVXNlckRhdGE7XHJcbmZ1bmN0aW9uIGRlbGV0ZUJ1bGxldChidWxsZXQpIHtcclxuICAgIGlmIChidWxsZXQueCA+IHRoaXMuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aFxyXG4gICAgICAgIHx8IGJ1bGxldC54IDwgYnVsbGV0LndpZHRoICogLTFcclxuICAgICAgICB8fCAhYnVsbGV0Lm9iamVjdFByZXNlbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5pbmRleE9mKGJ1bGxldCk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlbGV0ZUJ1bGxldCA9IGRlbGV0ZUJ1bGxldDtcclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0cyhvYmplY3QpIHtcclxuICAgIGlmIChvYmplY3QueCArIG9iamVjdC5zV2lkdGggPCAwIHx8ICFvYmplY3Qub2JqZWN0UHJlc2VudCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVsZXRlT2JqZWN0cyA9IGRlbGV0ZU9iamVjdHM7XHJcbmZ1bmN0aW9uIGRlbGF0ZVNpZGVPYmplY3Qob2JqZWN0KSB7XHJcbiAgICBpZiAoIW9iamVjdC5vYmplY3RQcmVzZW50IHx8IG9iamVjdC54IDwgMCAtIG9iamVjdC53aWR0aCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWxhdGVTaWRlT2JqZWN0ID0gZGVsYXRlU2lkZU9iamVjdDtcclxuZnVuY3Rpb24gY29sbGVjdFBvaW50cyhwb2ludCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudFBvaW50ICs9IHBvaW50O1xyXG59XHJcbmV4cG9ydHMuY29sbGVjdFBvaW50cyA9IGNvbGxlY3RQb2ludHM7XHJcbmZ1bmN0aW9uIGdldE9iamVjdFBvc2l0aW9uKCkge1xyXG4gICAgdmFyIG1haW5PYmplY3QgPSB0aGlzO1xyXG4gICAgdmFyIHBvc2l0aW9uID0ge1xyXG4gICAgICAgIHg6IG1haW5PYmplY3QueCxcclxuICAgICAgICB5OiBtYWluT2JqZWN0LnksXHJcbiAgICAgICAgd2lkdGg6IG1haW5PYmplY3Qud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYWluT2JqZWN0LmhlaWdodCxcclxuICAgIH07XHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbn1cclxuZXhwb3J0cy5nZXRPYmplY3RQb3NpdGlvbiA9IGdldE9iamVjdFBvc2l0aW9uO1xyXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcclxuICAgIHZhciBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xyXG4gICAgdmFyIGNvbG9yID0gJyMnO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbn1cclxuZXhwb3J0cy5nZXRSYW5kb21Db2xvciA9IGdldFJhbmRvbUNvbG9yO1xyXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2UoaXRlbXMpIHtcclxuICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpO1xyXG4gICAgbG9vcFZlcnRpY2FsKGl0ZW1zKTtcclxuICAgIGZ1bmN0aW9uIGxvb3BWZXJ0aWNhbChvYmplY3QpIHtcclxuICAgICAgICBpZiAoIW9iamVjdClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhvYmplY3QpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWwgPSBfYlsxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgbG9vcFZlcnRpY2FsKG9iamVjdFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhc3NpZ25pbWFnZShrZXksIHZhbCwgaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFzc2lnbmltYWdlKGtleSwgdmFsLCBpbWFnZSkge1xyXG4gICAgICAgIGlmIChrZXkgPT0gJ3NraW5OYW1lJyB8fCBrZXkgPT0gJ3RleHR1cmUnIHx8IGtleSA9PSAnbGV2ZWxNYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwpXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBfX2Rpcm5hbWUgKyB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucHJlbG9hZEltYWdlID0gcHJlbG9hZEltYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNhdGFydEdhbWVfMSA9IHJlcXVpcmUoXCIuL3NhdGFydEdhbWVcIik7XHJcbmZ1bmN0aW9uIG5leHRMZXZlbERhdGFSZWxvYWQobGV2ZWxEYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gaG9yaXpvbnRhbFZlcnRpY2FsU2VhcmNoKG1haW5PYmplY3QpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG1haW5PYmplY3QpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWFpbk9iamVjdFtrZXldID09ICdvYmplY3QnICYmIHZhbHVlICE9IG51bGwgJiYgIW1haW5PYmplY3Rba2V5XS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsVmVydGljYWxTZWFyY2gobWFpbk9iamVjdFtrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFzc2lnblZhbHVlLmNhbGwodGhpcywga2V5LCBtYWluT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBhc3NpZ25WYWx1ZShpbmNvbWVLZXksIG1haW5EYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhyZWZyZXNoTGV2ZWwpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGluY29tZUtleSAmJiB2YWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUluaXREYXRhW2tleV0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5leHRMZXZlbCwgc2VydmVyTmV3RGF0YSwgY29udGV4dCwgcmVmcmVzaExldmVsO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRMZXZlbCA9IGxldmVsRGF0YS5nYW1lRGF0YS5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2F0YXJ0R2FtZV8xLnNlcnZlclJlcXVlc3QoeyBsZXZlbDogbmV4dExldmVsLCBzaGlwQ29uZmlndXJhdGlvbjogMSB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyTmV3RGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICByZWZyZXNoTGV2ZWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWw6IG5leHRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb2ludDogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY3VycmVudFBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT2JqZWN0OiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5wbGF5ZXJPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGE6IHNlcnZlck5ld0RhdGEubGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzOiBzZXJ2ZXJOZXdEYXRhLmxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBjb250ZXh0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogc2VydmVyTmV3RGF0YS5lbmVteURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyczogY29udGV4dC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuY29udHJvbGxlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lU2lkZU9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lRW5lbWllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVCdWxsZXRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZU1hcE9CamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBCYWNrZ3JvdW5kT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVaVBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja1NjcmVlblBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbWVFeHRyYVNlY29uZHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEud2FycE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nYW1lSW5pdERhdGEudGltZVRvRXJlc3NMZXZlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbFZlcnRpY2FsU2VhcmNoLmNhbGwodGhpcywgdGhpcy5nYW1lSW5pdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5uZXh0TGV2ZWxEYXRhUmVsb2FkID0gbmV4dExldmVsRGF0YVJlbG9hZDtcclxuZnVuY3Rpb24gY2hhbmdlU2hpcCgpIHtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VXZWFwb24oKSB7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NhdGFydEdhbWVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jaGFuZ2VMZXZlbHNcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmVyL3NlcnZlclJlcXVlc3RNb2R1bGVzXCIpO1xyXG52YXIgZW5naW5lTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL2VuZ2luZU1vZHVsZXNcIik7XHJcbnZhciByZW1vdGUgPSByZXF1aXJlKCdlbGVjdHJvbicpLnJlbW90ZTtcclxuZnVuY3Rpb24gc2VydmVyUmVxdWVzdChnYW1lSW5mb3JtYXRpb24pIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VydmVyTG9jYXRpb24sIGxldmVsRGF0YSwgbGV2ZWxPYmplY3RzLCBnYW1lU2V0aW5ncywgdXNlckRhdGEsIGVuZW15RGF0YTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgcHJvY2Vzcy5lbnYuSE9TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkhPU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzRGlyZWN0aW9uOiBfX2Rpcm5hbWUgKyAnL3B1YmxpYy9pbWFnZXMvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2xldmVsLWRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJhcGkvbGV2ZWwtb2JqZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2dhbWUtc2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2hpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImFwaS91c2VyLXNoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteWxEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiYXBpL2VuZW15LXNoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24ubGV2ZWxEYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24ubGV2ZWxEYXRhLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdtYXBsZXZlbCc6IGdhbWVJbmZvcm1hdGlvbi5sZXZlbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbERhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmxldmVsT2JqZWN0cy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmxldmVsT2JqZWN0cy5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnbWFwT2JqZWN0JzogbGV2ZWxEYXRhLmxldmVsT0JqZWN0cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2VydmVyUmVxdWVzdE1vZHVsZXNfMS5nZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyTG9jYXRpb24uaG9zdCArIHNlcnZlckxvY2F0aW9uLmdhbWVTZXRpbmdzLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VydmVyTG9jYXRpb24uZ2FtZVNldGluZ3MubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3RNb2R1bGVzXzEuZ2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlckxvY2F0aW9uLmhvc3QgKyBzZXJ2ZXJMb2NhdGlvbi51c2VyU2hpcC51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLnVzZXJTaGlwLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICd1c2Vyc2hpcCc6IGdhbWVJbmZvcm1hdGlvbi5zaGlwQ29uZmlndXJhdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXJ2ZXJSZXF1ZXN0TW9kdWxlc18xLmdldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXJMb2NhdGlvbi5ob3N0ICsgc2VydmVyTG9jYXRpb24uZW5lbXlsRGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlcnZlckxvY2F0aW9uLmVuZW15bERhdGEubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ3NoaXAtdHlwZS1udW1iZXInOiBsZXZlbERhdGEuZW5lbXlUeXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmVNb2R1bGVzXzEucHJlbG9hZEltYWdlKGVuZW15RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lTW9kdWxlc18xLnByZWxvYWRJbWFnZShsZXZlbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZU1vZHVsZXNfMS5wcmVsb2FkSW1hZ2UobGV2ZWxPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxEYXRhOiBsZXZlbERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IGxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTZXRpbmdzOiBnYW1lU2V0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhOiB1c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15RGF0YTogZW5lbXlEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNlcnZlclJlcXVlc3QgPSBzZXJ2ZXJSZXF1ZXN0O1xyXG5mdW5jdGlvbiBnYW1lRGF0YUluaXQoUGxheWVyU2hpcCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBnYW1lRmllbGQsIGdhbWVBY3Rpb25GaWVsZCwgZ2FtZVVJZmllbGQsIGxldmVsLCBzaGlwVHlwZSwgc2hpcExpZmUsIHJlcywgbGV2ZWxEYXRhLCBsZXZlbE9iamVjdHMsIGdhbWVTZXRpbmdzLCB1c2VyRGF0YSwgZW5lbXlEYXRhO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lZmllbGQnKSwgZ2FtZUFjdGlvbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPYmplY3RzZmllbGQnKSwgZ2FtZVVJZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZVVpZmllbGQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IDUsIHNoaXBUeXBlID0gMSwgc2hpcExpZmUgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNlcnZlclJlcXVlc3QoeyBsZXZlbDogbGV2ZWwsIHNoaXBDb25maWd1cmF0aW9uOiBzaGlwVHlwZSB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YSA9IHJlcy5sZXZlbERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxPYmplY3RzID0gcmVzLmxldmVsT2JqZWN0cztcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU2V0aW5ncyA9IHJlcy5nYW1lU2V0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IHJlcy51c2VyRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteURhdGEgPSByZXMuZW5lbXlEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUZpZWxkOiAoZ2FtZUZpZWxkKSA/IGdhbWVGaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUFjdGlvbkZpZWxkOiAoZ2FtZUFjdGlvbkZpZWxkKSA/IGdhbWVBY3Rpb25GaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVVJRmllbGQ6IChnYW1lVUlmaWVsZCkgPyBnYW1lVUlmaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExldmVsOiBsZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvaW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPYmplY3Q6IG5ldyBQbGF5ZXJTaGlwKHVzZXJEYXRhLCAwLCAzMDAsIHNoaXBMaWZlLCAxMDAsIDEwMCwgdXNlckRhdGEuc2l6ZS53aWR0aCwgdXNlckRhdGEuc2l6ZS5oZWlnaHQsIHVzZXJEYXRhLmRhbWFnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsRGF0YTogbGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE9iamVjdHM6IGxldmVsT2JqZWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNldGluZ3M6IGdhbWVTZXRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteURhdGE6IGVuZW15RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbENvdW50OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZVNpZGVPYmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxHYW1lRW5lbWllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsR2FtZUJ1bGxldHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdhbWVNYXBPQmplY3RzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBCYWNrZ3JvdW5kT2JqZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycE9iamVjdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVUb0VyZXNzTGV2ZWw6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVVpUGF1c2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tTY3JlZW5QYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdpbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VtZUV4dHJhU2Vjb25kczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2FtZURhdGFJbml0ID0gZ2FtZURhdGFJbml0O1xyXG5mdW5jdGlvbiBnYW1lRW5naW5lKGdhbWVEYXRhSW5pdCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nYW1lRW5naW5lID0gZ2FtZUVuZ2luZTtcclxuZnVuY3Rpb24gZ2FtZVN0YXJ0KCkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMgPSB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVN0YXJ0ID0gZ2FtZVN0YXJ0O1xyXG5mdW5jdGlvbiBiYWNrVG9TdGFydFNjcmVlbihQbGF5ZXJTaGlwKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5ld0luaXRkYXRhLCBfaSwgX2EsIF9iLCBrZXksIHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnYW1lRGF0YUluaXQoUGxheWVyU2hpcCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luaXRkYXRhID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG5ld0luaXRkYXRhLmRhdGEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmJhY2tUb1N0YXJ0U2NyZWVuID0gYmFja1RvU3RhcnRTY3JlZW47XHJcbmZ1bmN0aW9uIGV4aXRUaGVHYW1lKCkge1xyXG4gICAgdmFyIHcgPSByZW1vdGUuZ2V0Q3VycmVudFdpbmRvdygpO1xyXG4gICAgdy5jbG9zZSgpO1xyXG59XHJcbmV4cG9ydHMuZXhpdFRoZUdhbWUgPSBleGl0VGhlR2FtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gZXhwbG9zaW9uRmlyZSh0YXJnZXREYXRhLCBtYWluR2FtZU9iamVjdCwgaGl0T2JqZWN0LCBTaWRlT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhpdFgsIHRhcmdldFgsIGFkanVzdCwgY29tcGVuc2F0aW9uLCBleHBsb3Npb25EYXRhLCBzaWRlT2JqZWN0LCBfYTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoaXRYID0gaGl0T2JqZWN0LnggKyBoaXRPYmplY3Qud2lkdGggLyAyLCB0YXJnZXRYID0gdGFyZ2V0RGF0YS54ICsgdGFyZ2V0RGF0YS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0ID0gTWF0aC5tYXgoaGl0WCwgdGFyZ2V0WCkgLSBNYXRoLm1pbihoaXRYLCB0YXJnZXRYKTtcclxuICAgICAgICAgICAgICAgICAgICBjb21wZW5zYXRpb24gPSAoaGl0T2JqZWN0LnggPiB0YXJnZXREYXRhLngpID8gYWRqdXN0IDogYWRqdXN0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBleHBsb3Npb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0YXJnZXREYXRhLnggLSB0YXJnZXREYXRhLmV4cGxvc2lvbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6ICh0YXJnZXREYXRhLmJ1bGxldFR5cGUpID8gdGFyZ2V0RGF0YS55IC0gdGFyZ2V0RGF0YS5leHBsb3Npb24ud2lkdGggLyAyIDogdGFyZ2V0RGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE93bmVyOiBcImV4cGxvc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzV2lkdGg6IHRhcmdldERhdGEuZXhwbG9zaW9uLmltYWdlV2lkdGggLyB0YXJnZXREYXRhLmV4cGxvc2lvbi5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzSGVpZ2h0OiB0YXJnZXREYXRhLmV4cGxvc2lvbi5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldERhdGEuZXhwbG9zaW9uLndpZHRoICogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXREYXRhLmV4cGxvc2lvbi53aWR0aCAqIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBzOiB0YXJnZXREYXRhLmV4cGxvc2lvbi5hbmltYXRpb25TdGVwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBoaXRPYmplY3Qub2JqZWN0T3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mSXRlbXM6IHRhcmdldERhdGEuZXhwbG9zaW9uLmltYWdlV2lkdGggLyB0YXJnZXREYXRhLmV4cGxvc2lvbi5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB0YXJnZXREYXRhLmV4cGxvc2lvbi50ZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogaGl0T2JqZWN0LnNwZWVkIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZXNXaWR0aDogdGFyZ2V0RGF0YS5leHBsb3Npb24uaW1hZ2VXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdCA9IG5ldyBTaWRlT2JqZWN0KF9fYXNzaWduKHt9LCBleHBsb3Npb25EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZU9iamVjdC5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cy5jb25jYXQoc2lkZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IHNpZGVPYmplY3QuaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNpZGVPYmplY3QudGV4dHVyZV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc3JjID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5leHBsb3Npb25GaXJlID0gZXhwbG9zaW9uRmlyZTtcclxuZnVuY3Rpb24gZmlyZUFuaW1hdGlvbkVuZGVkKGFsbEdhbWVTaWRlT2JqZWN0cykge1xyXG4gICAgdGhpcy5kZXRlY3RGcmFtZSArPSAxO1xyXG4gICAgaWYgKHRoaXMuZGV0ZWN0RnJhbWUgJSB0aGlzLmFuaW1hdGlvblN0ZXBzID09IDApIHtcclxuICAgICAgICB0aGlzLmRldGVjdEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuc1dpZHRoO1xyXG4gICAgICAgIGlmICh0aGlzLnN4ID49IHRoaXMucGljdHVyZXNXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdFByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3ggPj0gdGhpcy5waWN0dXJlc1dpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZmlyZUFuaW1hdGlvbkVuZGVkID0gZmlyZUFuaW1hdGlvbkVuZGVkO1xyXG5mdW5jdGlvbiBtYXBPYmplY3RNb3ZlKCkge1xyXG4gICAgdGhpcy54IC09ICh0aGlzLnNwZWVkKSA/IHRoaXMuc3BlZWQgOiAzO1xyXG59XHJcbmV4cG9ydHMubWFwT2JqZWN0TW92ZSA9IG1hcE9iamVjdE1vdmU7XHJcbmZ1bmN0aW9uIG1hcFJhbm9tT2JqZWN0U3Bhd24obGV2ZWxPYmplY3RzLCBTaWRlT2JqZWN0LCBhbGxHYW1lU2lkZU9iamVjdHMpIHtcclxuICAgIHRoaXMuZ2V0U2Vjb25kTWVhc3VyZShtYXBPYmplY3RTcGF3bmVyLCBsZXZlbE9iamVjdHMsIFNpZGVPYmplY3QsIGFsbEdhbWVTaWRlT2JqZWN0cyk7XHJcbiAgICBmdW5jdGlvbiBtYXBPYmplY3RTcGF3bmVyKGxldmVsT2JqZWN0cywgU2lkZU9iamVjdCwgYWxsR2FtZVNpZGVPYmplY3RzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZ2FtZURhdGEgPSB0aGlzLnNob3dHYW1lSW5mbygpLmdhbWVEYXRhO1xyXG4gICAgICAgIHZhciBsZXZlbERhdGEgPSBnYW1lRGF0YS5sZXZlbERhdGE7XHJcbiAgICAgICAgdmFyIHNwYXduUHJvYmFiaWxpdHkgPSB0aGlzLmdhbWVSYW5kb21pemVyKGxldmVsRGF0YS5vYmplY3RQcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgaWYgKHNwYXduUHJvYmFiaWxpdHkgPCBsZXZlbERhdGEub2JqZWN0TWluVGltZVNwYXduKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JlZW5EYXRhID0gdGhpcy5nZXRTY3JlZW5TaXplKCk7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbE9iamVjdFByb3BzID0gbGV2ZWxPYmplY3RzW3RoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gKGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09IFwiYm90dG9tXCIgJiYgdHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgPyBzY3JlZW5EYXRhLmhlaWdodCAtIHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RQcm9wcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICA6IChsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PSBcInRvcFwiICYmIHR5cGVvZiBsZXZlbE9iamVjdFByb3BzLnNwYXduRGV0YWlscy5wb3NpdGlvbiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2FtZVJhbmRvbWl6ZXIobGV2ZWxPYmplY3RQcm9wcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIGxldmVsT2JqZWN0UHJvcHMuc3Bhd25EZXRhaWxzLnBvc2l0aW9uID09PSBcInN0cmluZ1wiKSA/IHRoaXMuZ2FtZVJhbmRvbWl6ZXIoc2NyZWVuRGF0YS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbGV2ZWxPYmplY3RQcm9wcy5zcGF3bkRldGFpbHMucG9zaXRpb247XHJcbiAgICAgICAgICAgIHZhciBleHBsb3Npb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgeDogc2NyZWVuRGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgIHk6IHlQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIHN4OiAwLFxyXG4gICAgICAgICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RPd25lcjogbGV2ZWxPYmplY3RQcm9wcy5vYmplY3RPd25lcixcclxuICAgICAgICAgICAgICAgIHNXaWR0aDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZVdpZHRoIC8gbGV2ZWxPYmplY3RQcm9wcy5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgc0hlaWdodDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBsZXZlbE9iamVjdFByb3BzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBsZXZlbE9iamVjdFByb3BzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBzOiBsZXZlbE9iamVjdFByb3BzLmFuaW1hdGlvblN0ZXBzLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZJdGVtczogbGV2ZWxPYmplY3RQcm9wcy5udW1iZXJPZkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogbGV2ZWxPYmplY3RQcm9wcy5za2luTmFtZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiBsZXZlbE9iamVjdFByb3BzLnNwZWVkLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXNXaWR0aDogbGV2ZWxPYmplY3RQcm9wcy5pbWFnZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVhbHRoUG9pbnQ6IGxldmVsT2JqZWN0UHJvcHMuaGVhbHRoUG9pbnQsXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2U6IGxldmVsT2JqZWN0UHJvcHMuZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgaXNCYWNrZ3JvdW5kOiBsZXZlbE9iamVjdFByb3BzLmlzQmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIGV4cGxvc2lvbjogbGV2ZWxPYmplY3RQcm9wcy5leHBsb3Npb25BbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICBwb2ludHNQZXJVbml0OiBsZXZlbE9iamVjdFByb3BzLnBvaW50c1BlclVuaXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHNpZGVPYmplY3RfMSA9IG5ldyBTaWRlT2JqZWN0KF9fYXNzaWduKHt9LCBleHBsb3Npb25EYXRhKSk7XHJcbiAgICAgICAgICAgIHNpZGVPYmplY3RfMS5pbWcuc3JjID0gc2lkZU9iamVjdF8xLnRleHR1cmU7XHJcbiAgICAgICAgICAgIHNpZGVPYmplY3RfMS5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyA9IF90aGlzLmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMuY29uY2F0KHNpZGVPYmplY3RfMSk7XHJcbiAgICAgICAgICAgIH07IC8qKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5tYXBSYW5vbU9iamVjdFNwYXduID0gbWFwUmFub21PYmplY3RTcGF3bjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhbWVTaWRlT2JqZWN0c01vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BsYXllclNoaXBNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbmdpbmVNb2R1bGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYnVsbGV0c01vZHVsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2JhY2tncm91bmRNb2R1bGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hcHBFcnJvckxpc3RNb2R1bGVcIikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL2NvbnN0cnVjdG9ycy9cIikpO1xyXG52YXIgdmlldyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vdmlldy9cIikpO1xyXG5mdW5jdGlvbiBpbml0UGxheWVyU2hpcChtYWluR2FtZU9iamVjdCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLmN0eCkge1xyXG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGF0YS50ZXh0dXJlLCBpbWFnZUxvY2F0aW9uID0gbWFpbkdhbWVPYmplY3Quc2hvd0dhbWVJbmZvKCkuaW1hZ2VEaXJyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucGxhY2VQbGF5ZXJTaGlwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wbGFjZVBsYXllclNoaXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaW1nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gaW1hZ2VMb2NhdGlvbiArIGltYWdlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW5pdFBsYXllclNoaXAgPSBpbml0UGxheWVyU2hpcDtcclxuZnVuY3Rpb24gbW92ZVBsYXllclNoaXAoKSB7XHJcbiAgICBpZiAodGhpcy5pbWcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdHggJiYgdGhpcy5pbWcpIHtcclxuICAgICAgICAgICAgdmlldy5jcmVhdGVJbWFnZSh0aGlzLmN0eCwgdGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMubW92ZVBsYXllclNoaXAgPSBtb3ZlUGxheWVyU2hpcDtcclxuZnVuY3Rpb24gc2hpcENvbnRyb2wobWFpbkdhbWVPYmplY3QpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgY29udHJvbEtleXMgPSBtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEuZ2FtZVNldGluZ3Mua2V5Q29udHJvbHM7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmRvd24uc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IDAsIHlQb3M6IF90aGlzLmRhdGEuc3BlZWQgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmxlZnQuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IF90aGlzLmRhdGEuc3BlZWQgKiAtMSwgeVBvczogMCB9KTtcclxuICAgICAgICBpZiAoY29udHJvbEtleXMucmlnaHQuc29tZShmdW5jdGlvbiAobykgeyByZXR1cm4gZS5rZXlDb2RlID09IG87IH0pKVxyXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU2hpcCh7IHhQb3M6IF90aGlzLmRhdGEuc3BlZWQsIHlQb3M6IDAgfSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLnVwLnNvbWUoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIGUua2V5Q29kZSA9PSBvOyB9KSlcclxuICAgICAgICAgICAgX3RoaXMubW92ZVNoaXAoeyB4UG9zOiAwLCB5UG9zOiBfdGhpcy5kYXRhLnNwZWVkICogLTEgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAobWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIkNBTlZBU1wiXHJcbiAgICAgICAgICAgICYmICFtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlXHJcbiAgICAgICAgICAgICYmIG1haW5HYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgeSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgX3RoaXMueEZpbmFsID0gKCh4ICUgX3RoaXMuZGF0YS5zcGVlZCA9PSAwKSA/IHggOiBfdGhpcy5kYXRhLnNwZWVkICogTWF0aC5mbG9vcih4IC8gX3RoaXMuZGF0YS5zcGVlZCkpIC0gKF90aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIF90aGlzLnlGaW5hbCA9ICgoeSAlIF90aGlzLmRhdGEuc3BlZWQgPT0gMCkgPyB5IDogX3RoaXMuZGF0YS5zcGVlZCAqIE1hdGguZmxvb3IoeSAvIF90aGlzLmRhdGEuc3BlZWQpKSAtIChfdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChtYWluR2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGd1bnMgPSBfdGhpcy5kYXRhLmd1bnM7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gbmV3IGNvbnN0cnVjdG9ycy5CdWxsZXRDb25zdHJ1Y3QoX3RoaXMueCwgX3RoaXMueSArIGl0ZW0uZmlyZVBvc2l0aW9uLCBpdGVtLm5hbWUsIGl0ZW0uY29sb3IsIFwicGxheWVyXCIsIGl0ZW0uc3BlZWQgKyBfdGhpcy54QWRqLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCwgaXRlbS5kYW1hZ2UsIGl0ZW0udHlwZSwgaXRlbS50ZXh0dXJlLCBpdGVtLnN4LCBpdGVtLnN5LCBpdGVtLnNXaWR0aCwgaXRlbS5zSGVpZ2h0LCBpdGVtLmV4cGxvc2lvbkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGJ1bGxldC5pbWcuc3JjID0gYnVsbGV0LnRleHR1cmU7XHJcbiAgICAgICAgICAgIGJ1bGxldC5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzID0gbWFpbkdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVCdWxsZXRzLmNvbmNhdChidWxsZXQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBndW5zXzEgPSBndW5zOyBfaSA8IGd1bnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBndW5zXzFbX2ldO1xyXG4gICAgICAgICAgICBfbG9vcF8xKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hpcENvbnRyb2wgPSBzaGlwQ29udHJvbDtcclxuZnVuY3Rpb24gc2V0Q29udGV4dChjb250ZXh0KSB7XHJcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XHJcbn1cclxuZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcclxuZnVuY3Rpb24gcGxhY2VTaGlwKCkge1xyXG4gICAgdmFyIHhBZGogPSAodGhpcy54RmluYWwgLSB0aGlzLngpIC8gdGhpcy5kYXRhLnNwZWVkO1xyXG4gICAgdmFyIHlBZGogPSAodGhpcy55RmluYWwgLSB0aGlzLnkpIC8gdGhpcy5kYXRhLnNwZWVkO1xyXG4gICAgeEFkaiA9IChNYXRoLnNpZ24oeEFkaikgPiAwKSA/IHhBZGogOiB4QWRqICogLTE7XHJcbiAgICB5QWRqID0gKE1hdGguc2lnbih5QWRqKSA+IDApID8geUFkaiA6IHlBZGogKiAtMTtcclxuICAgIHhBZGogPSAoeEFkaiA+IHRoaXMuZGF0YS5taW5TcGVlZCkgPyB0aGlzLmRhdGEubWluU3BlZWQgOiB4QWRqO1xyXG4gICAgeUFkaiA9ICh5QWRqID4gdGhpcy5kYXRhLm1pblNwZWVkKSA/IHRoaXMuZGF0YS5taW5TcGVlZCA6IHlBZGo7XHJcbiAgICB0aGlzLnhBZGogPSAodGhpcy54ID4gdGhpcy54RmluYWwpID8gMCA6IHhBZGo7XHJcbiAgICB0aGlzLnggPSAodGhpcy54ID4gdGhpcy54RmluYWwpID8gdGhpcy54IC0geEFkaiA6XHJcbiAgICAgICAgKHRoaXMueCA8IHRoaXMueEZpbmFsKSA/IHRoaXMueCArIHhBZGogOiB0aGlzLnhGaW5hbDtcclxuICAgIHRoaXMueSA9ICh0aGlzLnkgPiB0aGlzLnlGaW5hbCkgPyB0aGlzLnkgLSB5QWRqIDpcclxuICAgICAgICAodGhpcy55IDwgdGhpcy55RmluYWwpID8gdGhpcy55ICsgeUFkaiA6IHRoaXMueUZpbmFsO1xyXG59XHJcbmV4cG9ydHMucGxhY2VTaGlwID0gcGxhY2VTaGlwO1xyXG5mdW5jdGlvbiBtb3ZlU2hpcChfYSkge1xyXG4gICAgdmFyIF9iID0gX2EueFBvcywgeFBvcyA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIF9jID0gX2EueVBvcywgeVBvcyA9IF9jID09PSB2b2lkIDAgPyAwIDogX2M7XHJcbiAgICB0aGlzLnggKz0geFBvcztcclxuICAgIHRoaXMueSArPSB5UG9zO1xyXG59XHJcbmV4cG9ydHMubW92ZVNoaXAgPSBtb3ZlU2hpcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4uL3Nhc3MvbWFpbi5zYXNzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxudmFyIGdhbWVEYXRhTW9kdWxlcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9lbmdpbmUvZ2FtZU1vZHVsZXNcIikpO1xyXG52YXIgY29uc3RydWN0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbnN0cnVjdG9yc1wiKSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4vdmlldy9kaXNwbGF5TW9kdWxlc1wiKTtcclxudmFyIGFwcE1lbnVfMSA9IHJlcXVpcmUoXCIuL2FwcE1lbnUvYXBwTWVudVwiKTtcclxuKGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyogICBnYW1lIGVuZ2luIHJ1bmluZyAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2FtZUludGVydmFsKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2ksIF9hLCBidWxsZXQsIF9iLCBfYywgZW5lbXksIF9kLCBfZSwgb2JqZWN0LCBfZiwgX2csIGJhY2tncm91bmRNYXA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jbGVhckZpZWxkKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eFVJRmllbGQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLnNjcmVlbi53aWR0aCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCAmJiAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY2xlYXJGaWVsZChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5jdHhBY3Rpb25GaWVsZCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4uaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmJhY2tTY3JlZW5QYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmxldmVsSW5pdChjb25zdHJ1Y3RvcnMuR2FtZUJhY2tncm91bmQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eCwgZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlICYmIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEubGV2ZWxDaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zcGF3bkVuZW15TG9naWMoY29uc3RydWN0b3JzLkVuZW15T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lQnVsbGV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9hID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUJ1bGxldHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldCA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0Lm1vdmVCdWxsZXRzKHBsYXllclNoaXBEYXRhLCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmNyZWF0ZUJ1bGxldHMoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZGVsZXRlQnVsbGV0KGJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuaGl0RGV0ZWN0aW9uKGJ1bGxldCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZUVuZW1pZXMsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW2J1bGxldF0sIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihidWxsZXQsIGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cywgZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9iID0gMCwgX2MgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lRW5lbWllczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkgPSBfY1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZUVuZW15ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlTaGlwTG9naWNWZXJ0aWNhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwbGF5ZXJTaGlwRGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcGxheWVyU2hpcERhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZW5lbXlBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnNob290KGNvbnN0cnVjdG9ycy5CdWxsZXRDb25zdHJ1Y3QsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlbGV0ZU9iamVjdHMoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW2VuZW15XSwgZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLnBsYWNlU2hpcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLm1vdmVQbGF5ZXJTaGlwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuYWxsR2FtZVNpZGVPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9kID0gMCwgX2UgPSBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHM7IF9kIDwgX2UubGVuZ3RoOyBfZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IF9lW19kXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnBsYWNlRW5lbXllcyhnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vYmplY3RPd25lciA9PSBcImV4cGxvc2lvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZmlyZUFuaW1hdGlvbkVuZGVkKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmFsbEdhbWVTaWRlT2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdE93bmVyID09IFwiZW5lbXlcIiB8fCBvYmplY3Qub2JqZWN0T3duZXIgPT0gXCJjb2xsaWRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmhpdERldGVjdGlvbihwbGF5ZXJTaGlwRGF0YSwgW29iamVjdF0sIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmVuZW15QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1hcE9iamVjdE1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5kZWxhdGVTaWRlT2JqZWN0KG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVEYXRhLmxldmVsT2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QubWFwUmFub21PYmplY3RTcGF3bihnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lRGF0YS5sZXZlbE9iamVjdHMsIGNvbnN0cnVjdG9ycy5TaWRlT2JqZWN0LCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5hbGxHYW1lU2lkZU9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5nYW1lU2Vjb25kc0luY3JlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmxldmVsVGltZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmJhY2tTY3JlZW5QYXVzZSB8fCAhZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlIHx8ICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlIHx8ICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jbGVhckZpZWxkKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmN0eCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuc2NyZWVuLndpZHRoLCBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5zY3JlZW4uaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2YgPSAwLCBfZyA9IGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLm1hcEJhY2tncm91bmRPYmplY3RzOyBfZiA8IF9nLmxlbmd0aDsgX2YrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRNYXAgPSBfZ1tfZl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZE1hcC51cGRhdGVNYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTWFwLmNoYW5nZVBhcnRPZlRleHR1cmUoZ2FtZU9iamVjdCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEubWFwQmFja2dyb3VuZE9iamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmxldmVsQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Qud2FycEVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLyAgIGdhbWUgVUkgbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dTdGFydFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNob3dHYW1lU3RhdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVQYXVzZSAmJiBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd1BhdXNlV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSAmJiBnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3Quc2hvd01lbnVXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5zaG93UGF1c2VXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZU92ZXJXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVXaW4gJiYgIWdhbWVPYmplY3QuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlICYmICFnYW1lT2JqZWN0LmdhbWVJbml0RGF0YS5nYW1lUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5nYW1lV2luV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFwcE1lbnVfMS5oaWRlU2hvd01lbnUobWFpbk1lbnUsIG5hdmlnYXRpb24ubWVudSwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVdpbiwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cywgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdyYXBwZXIsIG1haW5NZW51LCBnYW1lU3RhdGUsIGdhbWVPYmplY3QsIHBsYXllclNoaXBEYXRhLCBlbmdpbmUsIGNvbnRleHRzLCBuYXZpZ2F0aW9uO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuSE9TVCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LkhPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwicHJvZHVjdGlvbiBtb2RlIGNoZWNrIEhPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2FtZURhdGFNb2R1bGVzLmdhbWVEYXRhSW5pdChjb25zdHJ1Y3RvcnMuUGxheWVyU2hpcCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZXcgY29uc3RydWN0b3JzLkdhbWUoZ2FtZVN0YXRlLmRhdGEpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhID0gZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuZ2FtZURhdGEucGxheWVyT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSA9IHNldEludGVydmFsKGdhbWVJbnRlcnZhbCwgZ2FtZU9iamVjdC5nYW1lSW5pdERhdGEuaW50ZXJ2YWxDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9iamVjdC51aUNvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnNldEdhbWVGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0cyA9IGdhbWVPYmplY3QucmV0dXJuQ29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBjcmVhdGUgY29udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBEYXRhLmN0eCA9IGNvbnRleHRzLmdhbWVBY3Rpb25GaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzaGlwIG1vdmVcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5pbml0UGxheWVyU2hpcChnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwRGF0YS5zaGlwQ29udHJvbChnYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uID0gYXBwTWVudV8xLmFwcE1lbnUoZ2FtZU9iamVjdCwgYXBwTWVudV8xLmRpYWxvZ1dpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5tZW51LmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxuZnVuY3Rpb24gZ2V0RGF0YShfYSkge1xyXG4gICAgdmFyIHVybCA9IF9hLnVybCwgbWV0aG9kID0gX2EubWV0aG9kLCBkYXRhID0gX2EuZGF0YSwgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICB2YXIgcmVzdWx0SGVhZGVyID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSwgaGVhZGVycyB8fCBmYWxzZSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdEhlYWRlcixcclxuICAgICAgICBib2R5OiAoZGF0YSkgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyBjb25zb2xlLmxvZyhyZXMpOyByZXR1cm4gcmVzLmpzb24oKTsgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXREYXRhID0gZ2V0RGF0YTtcclxuZnVuY3Rpb24gZ2V0TG9jYWxEYXRhKF9hKSB7XHJcbiAgICB2YXIgZmlsZU5hbWUgPSBfYS5maWxlTmFtZTtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgaWYgKCFmaWxlTmFtZSlcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwibm8gbG9jYWwgZmlsZXNcIik7XHJcbiAgICAgICAgICAgIHJlcyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGZzLnJlYWRGaWxlKF9fZGlybmFtZSArICcvcHVibGljL2RhdGEvJyArIGZpbGVOYW1lLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJnb3Qgc29tZSBwb2JsZW0gaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldExvY2FsRGF0YSA9IGdldExvY2FsRGF0YTtcclxuZnVuY3Rpb24gcG9zdERhdGEoX2EpIHtcclxuICAgIHZhciB1cmwgPSBfYS51cmwsIG1ldGhvZCA9IF9hLm1ldGhvZCwgZGF0YSA9IF9hLmRhdGEsIGhlYWRlcnMgPSBfYS5oZWFkZXJzO1xyXG4gICAgdmFyIHJlc3VsdEhlYWRlciA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sIGhlYWRlcnMgfHwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcclxuICAgICAgICBoZWFkZXJzOiByZXN1bHRIZWFkZXIsXHJcbiAgICAgICAgYm9keTogKGRhdGEpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pO1xyXG59XHJcbmV4cG9ydHMucG9zdERhdGEgPSBwb3N0RGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZU92ZXJTY3JlZW4oZGF0YSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJQYXVzZSB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiR2FtZSBPdmVyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInRleHQgZm9yIGdhbWUgb3ZlciB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTEwcHggQXJpYWxcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZU92ZXJTY3JlZW4gPSBnYW1lT3ZlclNjcmVlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZVBhdXNlKGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUGF1c2UgdGV4dFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBhdXNlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInBhcnQgb2YgcGF1c2Ugd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjYwcHggQXJpYWxcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAxNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn1cclxuZXhwb3J0cy5nYW1lUGF1c2UgPSBnYW1lUGF1c2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vICBwb2ludHMgICBsaWZlLCB0aW1lIHRvIGVuZHMsIGxldmVsXHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbmZ1bmN0aW9uIGdhbWVJbmZvcm1hdGlvblNjcmVlbihleHRyYSwgY3R4LCB3aWR0aCwgaGVpZ2h0LCBwaWN0dXJlRGlycmVjdGlvbiwgaW5mbykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibGlmZVBvaW50XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogaW5mby5saWZlLFxyXG4gICAgICAgICAgICBzdGVwOiBbaW5mby5saWZlXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkgKiA1MDsgfSksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgbG9nb3R5cGVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCxcclxuICAgICAgICAgICAgICAgIHNXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc0hlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgICAgeDogMTAsXHJcbiAgICAgICAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZFBpY3R1cmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHllcy5iYWNrZ3JvdW5kLnNyYyA9IHBpY3R1cmVEaXJyZWN0aW9uICsgJ21pc2MvcnVieS5wbmcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2FsbGJhY2ssIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSAoZGF0YSkgPyBkYXRhIDogdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IEFycmF5KGluZm8ubGlmZSkuZmlsbCgwKS5tYXAoZnVuY3Rpb24gKG8sIGkpIHsgcmV0dXJuIGkgKiAzMDsgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLnggPSAoaSA9PSAwKSA/IG1hcmdpbkxlZnQgOiAwICsgc3RlcHNbaV0gKyAoKGkgIT0gMCkgPyBtYXJnaW5MZWZ0IDogMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibGV2ZWxcIixcclxuICAgICAgICAgICAgdGV4dDogXCJDdXJyZW50IExldmVsIFwiICsgaW5mby5jdXJyZW50TGV2ZWwgKyBcIi9cIiArIGluZm8uYWxsTGV2ZWxzICsgXCIgXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiYm9sZCAxNnB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogMzAsXHJcbiAgICAgICAgICAgICAgICB5OiA3MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJUaW1lIHRvIGVuZCBmIGxldmVsXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IChpbmZvLm1pbnV0ZXMgfHwgaW5mby5zZWNvbmRzKSA/IFwiVGltZSB0byBsZXZlbCBlbmQgXCIgKyAoKGluZm8ubWludXRlcyAtIDEwID49IDApID8gJycgOiAwKSArIGluZm8ubWludXRlcyArIFwiOlwiICsgKChpbmZvLnNlY29uZHMgLSAxMCA+PSAwKSA/ICcnIDogMCkgKyBpbmZvLnNlY29uZHMgOiAnQm9zcyBsZXZlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbWUgcGFydCB0aGUgbmFtZVwiLFxyXG4gICAgICAgICAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibGlnaHQgMTZweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgcHJvcGVydHllczoge1xyXG4gICAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAtIDMwMCxcclxuICAgICAgICAgICAgICAgIHk6IDMwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgcG9pbnRzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGluZm8ucG9pbnRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0IDE4cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC01MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVJbmZvcm1hdGlvblNjcmVlbiA9IGdhbWVJbmZvcm1hdGlvblNjcmVlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxuZnVuY3Rpb24gZ2FtZUxvYWRNZW51KGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3RhcnQgYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUHJlc3MgU3RhcnQgdG8gYmVnaW5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWFpbiBzdGFydCBnYW1lIGJ1dHRvbiBpbiB0aGUgbWFpbiBsb2FkIHNjcmVlblwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4IEFyaWFsXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMTY1LFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiArIDE1MCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAwKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgICAgICB0b3BQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nOiA0MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMb2dvdHlwZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIGxvZ290eXBlXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIHNXaWR0aDogMTAyNCxcclxuICAgICAgICAgICAgICAgIHNIZWlnaHQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSA3NSxcclxuICAgICAgICAgICAgICAgIHk6IDkwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMzcsIDIxLCA1NCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkUGljdHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eWVzLmJhY2tncm91bmQuc3JjID0gcGljdHVyZURpcnJlY3Rpb24gKyAnbWlzYy9sb2dvLTEwMjR4MTAyNC5wbmcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR2FtZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU3BhY2VcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2FtZSBwYXJ0IHRoZSBuYW1lXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJib2xkIDEwMHB4IFJvYm90b1wiLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtMjkwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogMzcwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdhbWUgbmFtZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkF0dGFja1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHYW1lIHBhcnQgdGhlIG5hbWVcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImxpZ2h0ZXIgMTAwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAzNzAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoODksIDAsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZUxvYWRNZW51ID0gZ2FtZUxvYWRNZW51O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aU1vZGVsTWV0aG9kc18xID0gcmVxdWlyZShcIi4vdWlNb2RlbE1ldGhvZHNcIik7XHJcbnZhciBjb25zdHJ1Y3RvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uLy4uL2NvbnN0cnVjdG9yc1wiKSk7XHJcbnZhciBhcHBNZW51XzEgPSByZXF1aXJlKFwiLi4vLi4vYXBwTWVudS9hcHBNZW51XCIpO1xyXG5mdW5jdGlvbiBnYW1lU2V0dGluZ3NNZW51KGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJtZW51IGJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayBwYXJ0IG9mIG1lbnUgXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHggQXJpYWxcIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAwLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrR3JvdW5kRmluYWw6IFwiIzM4MDI0MFwiLFxyXG4gICAgICAgICAgICAgICAgdG9wWDogMCxcclxuICAgICAgICAgICAgICAgIHRvcFk6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b21YOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbVk6IDEwMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMkYyMjMxJyxcclxuICAgICAgICAgICAgICAgIGlzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiA1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dG9uIGVuZCBnYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiZ28gdG8gc3RhcnRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgLSAxNTAsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuZGlhbG9nV2luZG93KHsgdGV4dERhdGE6ICdyZXN0YXJ0IHRoZSBnYW1lPycsIHJlamVjdFRleHQ6ICdjYW5jZWwnLCBhY2NlcHRUZXh0OiAncmVzdGFydCcgfSwgdGhpcy5iYWNrVG9TdGFydFNjcmVlbiwgbnVsbCwgdGhpcywgY29uc3RydWN0b3JzLlBsYXllclNoaXApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmJhY2tUb1N0YXJ0U2NyZWVuLmNhbGwodGhpcywgY29uc3RydWN0b3JzLlBsYXllclNoaXApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJNYWluIGdhbWUgbWVudSBuYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXh0IGluIG1haW4gdG9wXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI1cHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtNDUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB5OiAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVNldHRpbmdzTWVudSA9IGdhbWVTZXR0aW5nc01lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpTW9kZWxNZXRob2RzXzEgPSByZXF1aXJlKFwiLi91aU1vZGVsTWV0aG9kc1wiKTtcclxudmFyIGNvbnN0cnVjdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vY29uc3RydWN0b3JzXCIpKTtcclxudmFyIGFwcE1lbnVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcHBNZW51L2FwcE1lbnVcIik7XHJcbnZhciBnYW1lUmVzdWx0TW9kdWxlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXBwTWVudS9nYW1lUmVzdWx0TW9kdWxlXCIpO1xyXG5mdW5jdGlvbiBnYW1lV2luU2NyZWVuKGRhdGEsIGN0eCwgd2lkdGgsIGhlaWdodCwgcGljdHVyZURpcnJlY3Rpb24sIGluZm8pIHtcclxuICAgIHJldHVybiBkYXRhIHx8IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2NyZWVuIHRpdGxlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiWU9VIFdJTiBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidGV4dCBmb3IgZ2FtZSBvdmVyIHdpbmRvd1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIgYm9sZCAxMjBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIGhlaWdodCAvIDQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNjcmVlbiB0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQ29uZ3JhdHVsYXRpb24gXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInRleHQgZm9yIGdhbWUgb3ZlciB3aW5kb3dcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiIGJvbGQgMzBweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gMjUwLFxyXG4gICAgICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIDUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzY29yZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIllvdSBzY29yZSBpcyBcIiArIGluZm8ucG9pbnRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0ZXh0IGZvciBnYW1lIG92ZXIgd2luZG93XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIiBib2xkIDMwcHggUm9ib3RvXCIsXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIHg6IHdpZHRoIC8gMiAtIDI1MCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IHVpTW9kZWxNZXRob2RzXzEuaW5pdCxcclxuICAgICAgICAgICAgZ2V0T2JqZWN0UG9zaXRpb246IHVpTW9kZWxNZXRob2RzXzEuZ2V0VUlPYmplY3RQb3NpdGlvblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCdXR0b24gZW5kIGdhbWVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJTYXZlIHJlc3VsdHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiB3aWR0aCAvIDIgKyB3aWR0aCAvIDMsXHJcbiAgICAgICAgICAgICAgICB5OiBoZWlnaHQgLyAyICsgMTUwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgaXNCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjUxNTM2JyxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgzNywgMjEsIDU0LCAxKScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0UHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZVJlc3VsdE1vZHVsZV8xLmluaXRSZXN1bHRTY3JlZW4odGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVVaU1lbnUodGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiB1aU1vZGVsTWV0aG9kc18xLmluaXQsXHJcbiAgICAgICAgICAgIGdldE9iamVjdFBvc2l0aW9uOiB1aU1vZGVsTWV0aG9kc18xLmdldFVJT2JqZWN0UG9zaXRpb25cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dG9uIGVuZCBnYW1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiZ28gdG8gc3RhcnRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYmFjayB0byBzdGFydCBzY3JlZW5cIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweCBSb2JvdG9cIixcclxuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb3BlcnR5ZXM6IHtcclxuICAgICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICB4OiAyMCxcclxuICAgICAgICAgICAgICAgIHk6IGhlaWdodCAvIDIgKyAxNTAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzI1MTUzNicsXHJcbiAgICAgICAgICAgICAgICBpc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyNTE1MzYnLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDM3LCAyMSwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgIHRleHRQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUGFkZGluZzogNyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBhZGRpbmc6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21QYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBNZW51XzEuZGlhbG9nV2luZG93KHsgdGV4dERhdGE6ICdyZXN0YXJ0IHRoZSBnYW1lPycsIHJlamVjdFRleHQ6ICdjYW5jZWwnLCBhY2NlcHRUZXh0OiAncmVzdGFydCcgfSwgdGhpcy5iYWNrVG9TdGFydFNjcmVlbiwgbnVsbCwgdGhpcywgY29uc3RydWN0b3JzLlBsYXllclNoaXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lVWlNZW51KHRoaXMuZ2FtZUluaXREYXRhLmdhbWVVaVBhdXNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogdWlNb2RlbE1ldGhvZHNfMS5pbml0LFxyXG4gICAgICAgICAgICBnZXRPYmplY3RQb3NpdGlvbjogdWlNb2RlbE1ldGhvZHNfMS5nZXRVSU9iamVjdFBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufVxyXG5leHBvcnRzLmdhbWVXaW5TY3JlZW4gPSBnYW1lV2luU2NyZWVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbml0KGNhbGxiYWNrLCBkYXRhKSB7XHJcbiAgICBkYXRhID0gKGRhdGEpID8gZGF0YSA6IHRoaXM7XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxufVxyXG5leHBvcnRzLmluaXQgPSBpbml0O1xyXG5mdW5jdGlvbiBnZXRVSU9iamVjdFBvc2l0aW9uKCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBjb250ZXh0LnByb3BlcnR5ZXMueCxcclxuICAgICAgICB5OiBjb250ZXh0LnByb3BlcnR5ZXMueSxcclxuICAgICAgICB3aWR0aDogY29udGV4dC5wcm9wZXJ0eWVzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogY29udGV4dC5wcm9wZXJ0eWVzLmhlaWdodCxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5nZXRVSU9iamVjdFBvc2l0aW9uID0gZ2V0VUlPYmplY3RQb3NpdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkaXNwbGF5TW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3ZpZXcvZGlzcGxheU1vZHVsZXNcIik7XHJcbnZhciBnYW1lVWlMb2FkTWVudV8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVVaUxvYWRNZW51XCIpO1xyXG52YXIgZ2FtZVVpU2V0dGluZ3NNZW51XzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVVpU2V0dGluZ3NNZW51XCIpO1xyXG52YXIgZ2FtZVBhdXNlU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVBhdXNlU2NyZWVuXCIpO1xyXG52YXIgZ2FtZVN0YXRzU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZVN0YXRzU2NyZWVuXCIpO1xyXG52YXIgZ2FtZUdhbWVPdmVyU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9nYW1lVWlNb2RlbHMvZ2FtZUdhbWVPdmVyU2NyZWVuXCIpO1xyXG52YXIgZ2FtZVdpblNjcmVlbl8xID0gcmVxdWlyZShcIi4vZ2FtZVVpTW9kZWxzL2dhbWVXaW5TY3JlZW5cIik7XHJcbnZhciB1aUVsZW1lbnRNb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdmlldy9lbGVtZW50cy91aUVsZW1lbnRNb2R1bGVzXCIpO1xyXG52YXIgZW5lbWllc01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9lbmVtaWVzL2VuZW1pZXNNb2R1bGVzXCIpO1xyXG5mdW5jdGlvbiBnYW1lVWlQYXVzZSgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgJiYgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cylcclxuICAgICAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVBhdXNlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpUGF1c2UgPSBnYW1lVWlQYXVzZTtcclxuZnVuY3Rpb24gZ2FtZVVpTWVudShnYW1lVWlQYXVzZSkge1xyXG4gICAgdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UgPSAhdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2U7XHJcbiAgICB0aGlzLmdhbWVJbml0RGF0YS5nYW1lUGF1c2UgPSAoZ2FtZVVpUGF1c2UpID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuZ2FtZVVpTWVudSA9IGdhbWVVaU1lbnU7XHJcbmZ1bmN0aW9uIHVpQ29udHJvbGxlcigpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgY29udHJvbEtleXMgPSB0aGlzLmdhbWVJbml0RGF0YS5nYW1lRGF0YS5nYW1lU2V0aW5ncy5rZXlDb250cm9scztcclxuICAgIHZhciBnYW1lT2JqZWN0ID0gdGhpcztcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xLZXlzLmVzY2FwZS5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVVpTWVudShfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVVpUGF1c2UpO1xyXG4gICAgICAgIGlmIChjb250cm9sS2V5cy5wYXVzZS5zb21lKGZ1bmN0aW9uIChvKSB7IHJldHVybiBlLmtleUNvZGUgPT0gbzsgfSkpXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuZ2FtZVVpUGF1c2UoKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfdGhpcy5nZXRMZXZlbFVzZXJEYXRhKCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiQ0FOVkFTXCIpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBlLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LCB5ID0gZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudHNPblNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBjdHggPSBfdGhpcy5nYW1lSW5pdERhdGEuY3R4VUlGaWVsZCwgc2NyZWVuU2l6ZSA9IF90aGlzLmdldFNjcmVlblNpemUoKTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5nYW1lSW5pdERhdGEuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbiA9IGdhbWVVaUxvYWRNZW51XzEuZ2FtZUxvYWRNZW51KG51bGwsIGN0eCwgc2NyZWVuU2l6ZS53aWR0aCwgc2NyZWVuU2l6ZS5oZWlnaHQsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tEZXRlY3Rpb24uY2FsbChfdGhpcywgZWxlbWVudHNPblNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmdhbWVJbml0RGF0YS5nYW1lVWlQYXVzZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNPblNjcmVlbiA9IGdhbWVVaVNldHRpbmdzTWVudV8xLmdhbWVTZXR0aW5nc01lbnUobnVsbCwgY3R4LCBzY3JlZW5TaXplLndpZHRoLCBzY3JlZW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0RldGVjdGlvbi5jYWxsKF90aGlzLCBlbGVtZW50c09uU2NyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZ2FtZUluaXREYXRhLmdhbWVXaW4pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25TY3JlZW4gPSBnYW1lV2luU2NyZWVuXzEuZ2FtZVdpblNjcmVlbihudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBudWxsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRGV0ZWN0aW9uLmNhbGwoX3RoaXMsIGVsZW1lbnRzT25TY3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrRGV0ZWN0aW9uKGVsZW1lbnRzT25TY3JlZW4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBlbGVtZW50c09uU2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gZW5lbWllc01vZHVsZXNfMS5oaXREZXRlY3Rpb24oZWxlbWVudHNPblNjcmVlbltpdGVtXSwgW10uY29uY2F0KHsgeDogeCwgeTogeSwgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBuYW1lOiBcImN1cnNvclwiIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgZWxlbWVudHNPblNjcmVlbltpdGVtXS5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c09uU2NyZWVuW2l0ZW1dLmFjdGlvbi5jYWxsKHRoaXMsIGdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy51aUNvbnRyb2xsZXIgPSB1aUNvbnRyb2xsZXI7XHJcbmZ1bmN0aW9uIHNob3dVaVBvcHVwV2luZG93KCkge1xyXG4gICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVXaW5kb3cuY2FsbCh0aGlzKTtcclxufVxyXG5leHBvcnRzLnNob3dVaVBvcHVwV2luZG93ID0gc2hvd1VpUG9wdXBXaW5kb3c7XHJcbmZ1bmN0aW9uIHNob3dTdGFydFdpbmRvdygpIHtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aUltYWdlLFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVVaUxvYWRNZW51XzEuZ2FtZUxvYWRNZW51KTtcclxufVxyXG5leHBvcnRzLnNob3dTdGFydFdpbmRvdyA9IHNob3dTdGFydFdpbmRvdztcclxuZnVuY3Rpb24gc2hvd01lbnVXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyLFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVVaVNldHRpbmdzTWVudV8xLmdhbWVTZXR0aW5nc01lbnUpO1xyXG59XHJcbmV4cG9ydHMuc2hvd01lbnVXaW5kb3cgPSBzaG93TWVudVdpbmRvdztcclxuZnVuY3Rpb24gc2hvd1BhdXNlV2luZG93KCkge1xyXG4gICAgdmFyIGRyYXdNZXRob2RzID0gW1xyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lUGF1c2VTY3JlZW5fMS5nYW1lUGF1c2UpO1xyXG59XHJcbmV4cG9ydHMuc2hvd1BhdXNlV2luZG93ID0gc2hvd1BhdXNlV2luZG93O1xyXG5mdW5jdGlvbiBzaG93R2FtZVN0YXRzKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlJbWFnZSxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVTdGF0c1NjcmVlbl8xLmdhbWVJbmZvcm1hdGlvblNjcmVlbiwgZGF0YSk7XHJcbn1cclxuZXhwb3J0cy5zaG93R2FtZVN0YXRzID0gc2hvd0dhbWVTdGF0cztcclxuZnVuY3Rpb24gZ2FtZU92ZXJXaW5kb3coKSB7XHJcbiAgICB2YXIgZHJhd01ldGhvZHMgPSBbXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHRcclxuICAgIF07XHJcbiAgICB0aGlzLmluaXRVaUVsZW1lbnRzKGRyYXdNZXRob2RzLCBnYW1lR2FtZU92ZXJTY3JlZW5fMS5nYW1lT3ZlclNjcmVlbik7XHJcbn1cclxuZXhwb3J0cy5nYW1lT3ZlcldpbmRvdyA9IGdhbWVPdmVyV2luZG93O1xyXG5mdW5jdGlvbiBnYW1lV2luV2luZG93KCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmdldExldmVsVXNlckRhdGEoKTtcclxuICAgIC8vY29uc29sZS5sb2coZGF0YSlcclxuICAgIHZhciBkcmF3TWV0aG9kcyA9IFtcclxuICAgICAgICB1aUVsZW1lbnRNb2R1bGVzXzEudWlUZXh0LFxyXG4gICAgICAgIHVpRWxlbWVudE1vZHVsZXNfMS51aVRleHQsXHJcbiAgICAgICAgdWlFbGVtZW50TW9kdWxlc18xLnVpVGV4dCxcclxuICAgICAgICBkaXNwbGF5TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uLFxyXG4gICAgICAgIGRpc3BsYXlNb2R1bGVzXzEuY3JlYXRlUm91bmRCdXR0b24sXHJcbiAgICAgICAgZGlzcGxheU1vZHVsZXNfMS5jcmVhdGVSb3VuZEJ1dHRvblxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFVpRWxlbWVudHMoZHJhd01ldGhvZHMsIGdhbWVXaW5TY3JlZW5fMS5nYW1lV2luU2NyZWVuLCBkYXRhKTtcclxufVxyXG5leHBvcnRzLmdhbWVXaW5XaW5kb3cgPSBnYW1lV2luV2luZG93O1xyXG5mdW5jdGlvbiBpbml0VWlFbGVtZW50cyhkcmF3TWV0aG9kcywgY2FsbGJhY2spIHtcclxuICAgIHZhciBwcm9wcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwcm9wc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBjdHggPSB0aGlzLmdhbWVJbml0RGF0YS5jdHhVSUZpZWxkLCBzY3JlZW5TaXplID0gdGhpcy5nZXRTY3JlZW5TaXplKCksIHBpY0RpcmVjdGlvbiA9IHRoaXMuc2hvd0dhbWVJbmZvKCkuaW1hZ2VEaXJyZWN0aW9uO1xyXG4gICAgdmFyIHNjcmVlbk9iamVjdHMgPSBjYWxsYmFjay5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFtudWxsLCBjdHgsIHNjcmVlblNpemUud2lkdGgsIHNjcmVlblNpemUuaGVpZ2h0LCBwaWNEaXJlY3Rpb25dLCBwcm9wcykpO1xyXG4gICAgZm9yICh2YXIgaXRlbUluZGV4ID0gMDsgaXRlbUluZGV4IDwgc2NyZWVuT2JqZWN0cy5sZW5ndGg7IGl0ZW1JbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKHNjcmVlbk9iamVjdHNbaXRlbUluZGV4XS5oYXNPd25Qcm9wZXJ0eSgnbG9hZFBpY3R1cmUnKSlcclxuICAgICAgICAgICAgc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmxvYWRQaWN0dXJlKCk7XHJcbiAgICAgICAgc2NyZWVuT2JqZWN0c1tpdGVtSW5kZXhdLmluaXQoZHJhd01ldGhvZHNbaXRlbUluZGV4XSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbml0VWlFbGVtZW50cyA9IGluaXRVaUVsZW1lbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuL3dpbmRvdy9kaXNwbGF5VWlXaW5kb3dNb2R1bGVzXCIpO1xyXG5leHBvcnRzLmNyZWF0ZVdpbmRvdyA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVXaW5kb3c7XHJcbmV4cG9ydHMuY3JlYXRlU2hhcGVSb3VuZEJvcmRlciA9IGRpc3BsYXlVaVdpbmRvd01vZHVsZXNfMS5jcmVhdGVTaGFwZVJvdW5kQm9yZGVyO1xyXG5leHBvcnRzLmNyZWF0ZVJvdW5kQnV0dG9uID0gZGlzcGxheVVpV2luZG93TW9kdWxlc18xLmNyZWF0ZVJvdW5kQnV0dG9uO1xyXG52YXIgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMSA9IHJlcXVpcmUoXCIuL3dlYXBvbnMvd2VhcG9uc0Rpc3BsYXlNb2R1bGVcIik7XHJcbmZ1bmN0aW9uIGRyYXcoY29udGV4dCwgZWxlbWVudCkge1xyXG4gICAgdmFyIHByb3BlcnR5ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHByb3BlcnR5W19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29udGV4dFtlbGVtZW50XS5hcHBseShjb250ZXh0LCBwcm9wZXJ0eSk7XHJcbn1cclxuZXhwb3J0cy5kcmF3ID0gZHJhdztcclxuZnVuY3Rpb24gY3JlYXRlTGFzZXJCdWxsZXQoZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhLmN0eClcclxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwibm8gY29udGV4dFwiKTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwicGxheWVyXCIgJiYgZGF0YS50eXBlID09IFwiYmxhc3RlclwiKVxyXG4gICAgICAgIHdlYXBvbnNEaXNwbGF5TW9kdWxlXzEud2VhcG9uMShkYXRhLCBkcmF3KTtcclxuICAgIGlmIChkYXRhLm9iamVjdE93bmVyID09IFwiZW5lbXlcIiAmJiBkYXRhLnR5cGUgPT0gXCJibGFzdGVyXCIpXHJcbiAgICAgICAgd2VhcG9uc0Rpc3BsYXlNb2R1bGVfMS53ZWFwb24xKGRhdGEsIGRyYXcpO1xyXG4gICAgaWYgKGRhdGEub2JqZWN0T3duZXIgPT0gXCJlbmVteVwiICYmIGRhdGEudHlwZSA9PSBcImJlYW1cIilcclxuICAgICAgICB3ZWFwb25zRGlzcGxheU1vZHVsZV8xLndlYXBvbjEoZGF0YSwgZHJhdyk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVMYXNlckJ1bGxldCA9IGNyZWF0ZUxhc2VyQnVsbGV0O1xyXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShjdHgsIHBpY3R1cmVOYW1lKSB7XHJcbiAgICB2YXIgcHJvcHMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcHJvcHNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBkcmF3LmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW2N0eCwgJ2RyYXdJbWFnZScsIHBpY3R1cmVOYW1lXSwgcHJvcHMpKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUltYWdlID0gY3JlYXRlSW1hZ2U7XHJcbmZ1bmN0aW9uIGNsZWFyRmllbGQoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBkcmF3KGN0eCwgJ2NsZWFyUmVjdCcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJGaWVsZCA9IGNsZWFyRmllbGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi91aUVsZW1lbnRNb2R1bGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vd2FycEVsZW1lbnREcm93XCIpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gdWlJbWFnZShzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmRyYXdJbWFnZShwcm9wZXJ0eWVzLmJhY2tncm91bmQsIDAsIDAsIHByb3BlcnR5ZXMuc1dpZHRoLCBwcm9wZXJ0eWVzLnNIZWlnaHQsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbn1cclxuZXhwb3J0cy51aUltYWdlID0gdWlJbWFnZTtcclxuZnVuY3Rpb24gdWlUZXh0KHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIC8vcHJvcGVydHllcy5jdHguc2F2ZSgpO1xyXG4gICAgdmFyIHRleHRXaWR0aCA9IHByb3BlcnR5ZXMuY3R4Lm1lYXN1cmVUZXh0KHNoYXBlUHJvcGVydHllcy50ZXh0KS53aWR0aCAvIDMuMjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguZm9udCA9IHNoYXBlUHJvcGVydHllcy5mb250U2l6ZTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMuYm9yZGVyQ29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsVGV4dChzaGFwZVByb3BlcnR5ZXMudGV4dCwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgLy9wcm9wZXJ0eWVzLmN0eC5zYXZlKCk7XHJcbiAgICAvL3Byb3BlcnR5ZXMuY3R4LnRyYW5zbGF0ZSgwLDApO1xyXG4gICAgLy8gcHJvcGVydHllcy5jdHgucmVzdG9yZSgpO1xyXG59XHJcbmV4cG9ydHMudWlUZXh0ID0gdWlUZXh0O1xyXG5mdW5jdGlvbiB1aVJlcGVhdEltYWdlKHNoYXBlUHJvcGVydHllcykge1xyXG4gICAgdmFyIHByb3BlcnR5ZXMgPSBzaGFwZVByb3BlcnR5ZXMucHJvcGVydHllcztcclxuICAgIHZhciBwYXQgPSBwcm9wZXJ0eWVzLmN0eC5jcmVhdGVQYXR0ZXJuKHByb3BlcnR5ZXMuYmFja2dyb3VuZCwgJ3JlcGVhdC14Jyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIC8vcHJvcGVydHllcy5jdHgucmVjdChwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucmVjdChwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcGF0O1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbCgpO1xyXG59XHJcbmV4cG9ydHMudWlSZXBlYXRJbWFnZSA9IHVpUmVwZWF0SW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHdhcnBFbGVtZW50KCkge1xyXG4gICAgdmFyIGN0eCA9IG51bGw7XHJcbiAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMTcwLCAwKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjBcIiwgXCJtYWdlbnRhXCIpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiYmx1ZVwiKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjEuMFwiLCBcInJlZFwiKTtcclxufVxyXG5leHBvcnRzLndhcnBFbGVtZW50ID0gd2FycEVsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kaXNwbGF5TW9kdWxlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VsZW1lbnRzL3VpRWxlbWVudE1vZHVsZXNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGVtZW50c1wiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHdlYXBvbjEoZGF0YSwgZHJhdykge1xyXG4gICAgZHJhdyhkYXRhLmN0eCwgJ2RyYXdJbWFnZScsIGRhdGEuaW1nLCBkYXRhLnN4LCBkYXRhLnN5LCBkYXRhLnNXaWR0aCwgZGF0YS5zSGVpZ2h0LCBkYXRhLngsIGRhdGEueSwgZGF0YS53aWR0aCArIDEwLCBkYXRhLmhlaWdodCArIDEwKTtcclxufVxyXG5leHBvcnRzLndlYXBvbjEgPSB3ZWFwb24xO1xyXG5mdW5jdGlvbiB3ZWFwb24xYmFja3dhcmQoZGF0YSwgZHJhdykge1xyXG4gICAgZHJhdyhkYXRhLmN0eCwgJ2RyYXdJbWFnZScsIGRhdGEuaW1nLCAwLCAwLCBkYXRhLndpZHRoLCBkYXRhLmhlaWdodCwgZGF0YS54LCBkYXRhLnksIGRhdGEud2lkdGggKyAxMCwgZGF0YS5oZWlnaHQgKyAxMCk7XHJcbn1cclxuZXhwb3J0cy53ZWFwb24xYmFja3dhcmQgPSB3ZWFwb24xYmFja3dhcmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdyhjdHgsIHByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBfYSA9IHRoaXMuZ2V0U2NyZWVuU2l6ZSgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICBjdHguZmlsbFJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIDtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVdpbmRvdyA9IGNyZWF0ZVdpbmRvdztcclxuZnVuY3Rpb24gY3JlYXRlU2hhcGVSb3VuZEJvcmRlcihzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBwcm9wZXJ0eWVzLmJhY2tncm91bmQ7XHJcbiAgICBpZiAocHJvcGVydHllcy5ncmFkaWVudCkge1xyXG4gICAgICAgIHZhciBncmFkaWVudCA9IHByb3BlcnR5ZXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHByb3BlcnR5ZXMudG9wWCwgcHJvcGVydHllcy50b3BZLCBwcm9wZXJ0eWVzLmJvdHRvbVgsIHByb3BlcnR5ZXMuYm90dG9tWSk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHByb3BlcnR5ZXMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHByb3BlcnR5ZXMuYmFja0dyb3VuZEZpbmFsKTtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgIH1cclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0NvbG9yID0gcHJvcGVydHllcy5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5tb3ZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCAtIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLndpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAtIHByb3BlcnR5ZXMucmFkaXVzKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnF1YWRyYXRpY0N1cnZlVG8ocHJvcGVydHllcy54ICsgcHJvcGVydHllcy53aWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMud2lkdGggLSBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQgLSBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55LCBwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55KTsgLyoqL1xyXG4gICAgaWYgKHByb3BlcnR5ZXMuaXNCb3JkZXIpIHtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5zdHJva2VTdHlsZSA9IHByb3BlcnR5ZXMuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGwoKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVNoYXBlUm91bmRCb3JkZXIgPSBjcmVhdGVTaGFwZVJvdW5kQm9yZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVSb3VuZEJ1dHRvbihzaGFwZVByb3BlcnR5ZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eWVzID0gc2hhcGVQcm9wZXJ0eWVzLnByb3BlcnR5ZXM7XHJcbiAgICB2YXIgdGV4dFdpZHRoID0gcHJvcGVydHllcy5jdHgubWVhc3VyZVRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQpLndpZHRoIC8gMy4yO1xyXG4gICAgdmFyIGJ1dHRvbldpZHRoID0gcHJvcGVydHllcy50ZXh0UHJvcGVydHkubGVmdFBhZGRpbmcgKyB0ZXh0V2lkdGggKyBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5yaWdodFBhZGRpbmc7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dDb2xvciA9IHByb3BlcnR5ZXMuc2hhZG93Q29sb3I7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmZpbGxTdHlsZSA9IHByb3BlcnR5ZXMuYmFja2dyb3VuZDtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubW92ZVRvKHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMucmFkaXVzLCBwcm9wZXJ0eWVzLnkpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLnJhZGl1cyk7XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5saW5lVG8ocHJvcGVydHllcy54ICsgYnV0dG9uV2lkdGgsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLnggKyBidXR0b25XaWR0aCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQsIHByb3BlcnR5ZXMueCArIGJ1dHRvbldpZHRoIC0gcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmxpbmVUbyhwcm9wZXJ0eWVzLnggKyBwcm9wZXJ0eWVzLnJhZGl1cywgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5oZWlnaHQpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0LCBwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSArIHByb3BlcnR5ZXMuaGVpZ2h0IC0gcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgubGluZVRvKHByb3BlcnR5ZXMueCwgcHJvcGVydHllcy55ICsgcHJvcGVydHllcy5yYWRpdXMpO1xyXG4gICAgcHJvcGVydHllcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwcm9wZXJ0eWVzLngsIHByb3BlcnR5ZXMueSwgcHJvcGVydHllcy54ICsgcHJvcGVydHllcy5yYWRpdXMsIHByb3BlcnR5ZXMueSk7IC8qKi9cclxuICAgIC8vcHJvcGVydHllcy5jdHguZmlsbFJlY3QocHJvcGVydHllcy54LCBwcm9wZXJ0eWVzLnksIHByb3BlcnR5ZXMud2lkdGgsIHByb3BlcnR5ZXMuaGVpZ2h0KTtcclxuICAgIHByb3BlcnR5ZXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbCgpO1xyXG4gICAgaWYgKHByb3BlcnR5ZXMuaXNCb3JkZXIpIHtcclxuICAgICAgICBwcm9wZXJ0eWVzLmN0eC5zdHJva2VTdHlsZSA9IHByb3BlcnR5ZXMuYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHgubGluZVdpZHRoID0gcHJvcGVydHllcy5ib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgcHJvcGVydHllcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eWVzLmN0eC5mb250ID0gc2hhcGVQcm9wZXJ0eWVzLmZvbnRTaXplO1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFN0eWxlID0gcHJvcGVydHllcy50ZXh0UHJvcGVydHkudGV4dENvbG9yO1xyXG4gICAgcHJvcGVydHllcy5jdHguc2hhZG93Q29sb3IgPSBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS5zaGFkb3dDb2xvcjtcclxuICAgIHByb3BlcnR5ZXMuY3R4LnNoYWRvd0JsdXIgPSA4O1xyXG4gICAgcHJvcGVydHllcy5jdHguZmlsbFRleHQoc2hhcGVQcm9wZXJ0eWVzLnRleHQsIHByb3BlcnR5ZXMueCArIHByb3BlcnR5ZXMudGV4dFByb3BlcnR5LmxlZnRQYWRkaW5nLCBwcm9wZXJ0eWVzLnkgKyBwcm9wZXJ0eWVzLmhlaWdodCAvIDIgKyBwcm9wZXJ0eWVzLnRleHRQcm9wZXJ0eS50b3BQYWRkaW5nKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVJvdW5kQnV0dG9uID0gY3JlYXRlUm91bmRCdXR0b247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZWxlY3Ryb24nKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=