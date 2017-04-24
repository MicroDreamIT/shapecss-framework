/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_Accordion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_Modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_Tab__ = __webpack_require__(8);







window.onload = function () {
  new __WEBPACK_IMPORTED_MODULE_0__component_Accordion__["a" /* Accordion */]();
  new __WEBPACK_IMPORTED_MODULE_1__component_Modal__["a" /* Modal */]();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__component_Tab__["a" /* getTab */])();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accordion = function () {
    function Accordion() {
        _classCallCheck(this, Accordion);

        this._accordionDivs = document.getElementsByClassName('accordion');
        if (this._accordionDivs) this.processAccordions();
    }

    _createClass(Accordion, [{
        key: 'processAccordions',
        value: function processAccordions() {
            var _this = this;

            var _loop = function _loop(i) {
                var accordionDiv = _this._accordionDivs[i];
                var panel = accordionDiv.querySelectorAll('.panel');
                var autoToggle = accordionDiv.getAttribute('auto-toggle');
                var targetButtons = accordionDiv.querySelectorAll('.target');

                var _loop2 = function _loop2(j) {
                    targetButtons[j].addEventListener('click', function (e) {
                        panel[j].classList.toggle('active');
                        for (var k = 0; k < panel.length; k++) {
                            if (k != j && autoToggle != 'off') panel[k].classList.remove('active');
                        }
                    });
                };

                for (var j = 0; j < targetButtons.length; j++) {
                    _loop2(j);
                }
            };

            for (var i = 0; i < this._accordionDivs.length; i++) {
                _loop(i);
            }
        }
    }]);

    return Accordion;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function Modal() {
    _classCallCheck(this, Modal);

    this._modalCallers = document.getElementsByClassName('catch-modal');
    window.addEventListener('click', function (e) {
        for (var i = 0; i < this._modalCallers.length; i++) {
            var modalId = this._modalCallers[i].getAttribute("data-target");
            var modalBody = document.getElementById(modalId);

            if (e.target != modalId && e.target == modalBody) {
                if (e.target != modalBody.getElementsByClassName("modal-content")) {
                    if (!this._modalCallers[i].hasAttribute("dont-hide")) {
                        modalBody.classList.remove('active');
                    }
                }
            }

            if (e.target == modalBody.getElementsByClassName('close')[0] || e.target.getAttribute('type') == 'close') {
                modalBody.classList.remove('active');
            }
            //
            //                    //show action
            if (e.target == this._modalCallers[i]) {
                modalBody.classList.add('active');
            }
        }
    }.bind(this));
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTab;
/* unused harmony export tab */
function applyTabChange(getDivTarget, getLoadOnTargetId) {
    var getTabDiv = document.getElementById(getDivTarget);
    if (getTabDiv && getTabDiv.classList.contains('tab-content')) {
        var activeDiv = getTabDiv.querySelectorAll('#' + getLoadOnTargetId);
        activeDiv[0].classList.add('active');
    }
}

function removeActiveClassOnclick(id) {
    var activeDivs = document.getElementById(id);
    var activeClass = activeDivs.getElementsByClassName('active');
    if (activeClass) for (var j = 0; j < activeClass.length; j++) {
        activeClass[j].classList.remove('active');
    }
}
function getTab() {
    var getSelector = void 0,
        getDivTarget = void 0,
        getListItems = void 0,
        getActiveClass = void 0;

    getSelector = document.querySelectorAll('.tab-selector');

    var _loop = function _loop(i) {
        getDivTarget = getSelector[i].getAttribute('div-target');

        getActiveClass = getSelector[i].getElementsByClassName('active');
        if (getActiveClass.length) applyTabChange(getDivTarget, getActiveClass[0].getAttribute('tab-target'));

        getSelector[i].addEventListener('click', function (e) {
            getListItems = getSelector[i].getElementsByClassName('active');
            for (var j = 0; j < getListItems.length; j++) {
                getListItems[j].classList.remove('active');
            }
            //apply condition
            var getParent = e.target.parentElement.classList;
            if (getParent.contains('tab-selector')) {
                e.target.classList.add('active');
                removeActiveClassOnclick(e.target.parentElement.getAttribute('div-target'));
                applyTabChange(e.target.parentElement.getAttribute('div-target'), e.target.getAttribute('tab-target'));
            }
        });
    };

    for (var i = 0; i < getSelector.length; i++) {
        _loop(i);
    }
}



/***/ })
/******/ ]);