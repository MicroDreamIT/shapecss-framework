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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_Accordion__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_Modal__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_Tab__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_Nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_shapes_Circle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_shapes_Parallelogram__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_shapes_Rectangle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_shapes_Square__ = __webpack_require__(9);
/*!
 * Shapecss v2.0
 * Copyright 2016-2017 Shahanur Sharif.
 * http://microdreamit.com
 * Licensed under MIT (https://github.com/MicroDreamIT/Shapecss/blob/master/LICENSE)
 */













window.onload = function () {
  new __WEBPACK_IMPORTED_MODULE_0__component_Accordion__["a" /* Accordion */]();
  new __WEBPACK_IMPORTED_MODULE_1__component_Modal__["a" /* Modal */]();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__component_Tab__["a" /* getTab */])();
  new __WEBPACK_IMPORTED_MODULE_3__component_Nav__["a" /* Nav */]();
  new __WEBPACK_IMPORTED_MODULE_4__component_shapes_Circle__["a" /* Circle */]();
  new __WEBPACK_IMPORTED_MODULE_5__component_shapes_Parallelogram__["a" /* Parallelogram */]();
  new __WEBPACK_IMPORTED_MODULE_6__component_shapes_Rectangle__["a" /* Rectangle */]();
  new __WEBPACK_IMPORTED_MODULE_7__component_shapes_Square__["a" /* Square */]();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
    function Nav() {
        _classCallCheck(this, Nav);

        this._nav = document.getElementsByTagName("nav");
        for (var i = 0; i < this._nav.length; i++) {
            this.processNav(this._nav[i]);
        }
    }

    _createClass(Nav, [{
        key: "processNav",
        value: function processNav(nav) {
            var navButtons = nav.getElementsByClassName("for-mobile")[0];
            if (navButtons) {
                navButtons.addEventListener('click', function (e) {
                    navButtons.classList.toggle('open');
                    var ulItems = nav.getElementsByClassName('item');
                    for (var j = 0; j < ulItems.length; j++) {
                        ulItems[j].classList.toggle('show-menu');
                    }
                });
            }
        }
    }]);

    return Nav;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTab;
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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
    function Circle() {
        _classCallCheck(this, Circle);

        var i = void 0;
        var circles = document.getElementsByTagName('circle');

        for (i = 0; i < circles.length; i++) {
            this.findCircleElement(circles[i]);
        }

        var circleClasses = document.getElementsByClassName('circle');

        for (i = 0; i < circleClasses.length; i++) {
            this.findCircleElement(circleClasses[i]);
        }
    }

    _createClass(Circle, [{
        key: 'findCircleElement',
        value: function findCircleElement(circle) {

            if (circle.hasAttribute('shape-radius')) {
                getRadius();
            }

            if (circle.hasAttribute('shape-background')) {
                getBackground();
            }

            if (circle.hasAttribute('shape-border')) {
                getBorder();
            }

            if (circle.hasAttribute('transition')) {
                getTransition();
            }

            function getTransition() {
                var transition = circle.getAttribute('transition');
                if (transition == 'off') circle.style.transition = 'none';
            }

            function getBorder() {
                var border = circle.getAttribute('shape-border');

                if (border.indexOf(',')) {
                    var match = border.split(/\s*,\s*/);

                    circle.style.border = match[0] + 'px solid ' + match[1];
                } else {
                    circle.style.border = border;
                }
            }

            function getBackground() {
                var background = circle.getAttribute('shape-background');
                circle.style.backgroundColor = background;
            }

            // radius method start
            function getRadius() {
                var radius = circle.getAttribute('shape-radius');

                var value = radius.replace(/[^0-9]/g, '');
                var unit = radius.replace(/[0-9]/g, '');

                if (unit == '%') {
                    unit = 'em';
                }

                radius = Number(value) + unit;
                circle.style.width = radius;
                circle.style.height = radius;
                circle.style.borderRadius = Number(value) / 2 + unit;
                circle.style.MozBorderRadius = Number(value) / 2 + unit;
                circle.style.WebkitBorderRadius = Number(value) / 2 + unit;
                circle.style.lineHeight = radius;
            }
        }
    }]);

    return Circle;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parallelogram; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallelogram = function () {
	function Parallelogram() {
		_classCallCheck(this, Parallelogram);

		var i = void 0;
		var parallelograms = document.getElementsByTagName('parallelogram');

		for (i = 0; i < parallelograms.length; i++) {
			this.processSquare(parallelograms[i]);
		}

		var parallelogramClasses = document.getElementsByClassName('parallelogram');

		for (i = 0; i < parallelogramClasses.length; i++) {
			this.processSquare(parallelogramClasses[i]);
		}
	}

	_createClass(Parallelogram, [{
		key: 'processSquare',
		value: function processSquare(parallelogram) {

			if (parallelogram.hasAttribute('shape-height')) {
				getShapeHeight();
			}

			if (parallelogram.hasAttribute('shape-width')) {
				getShapeWidth();
			}

			if (parallelogram.hasAttribute('shape-border')) {
				getBorder();
			}

			if (parallelogram.hasAttribute('shape-background')) {
				getBackground();
			}

			function getShapeHeight() {

				var height = parallelogram.getAttribute('shape-height');

				var x = height.replace(/[^0-9]/g, '');
				var unit = height.replace(/[0-9]/g, '');

				if (unit == '%') {
					unit = 'em';
				}

				parallelogram.style.height = x + unit;
				parallelogram.style.lineHeight = height;
			}

			function getShapeWidth() {
				var width = parallelogram.getAttribute('shape-width');

				//unit process

				var x = width.replace(/[^0-9]/g, '');
				var unit = width.replace(/[0-9]/g, '');

				if (unit == '%') {
					unit = 'em';
				}

				//rectangle process
				parallelogram.style.width = x + unit;
			}

			function getBackground() {
				var background = parallelogram.getAttribute('shape-background');
				parallelogram.style.backgroundColor = background;
			}

			function getBorder() {
				var border = parallelogram.getAttribute('shape-border');

				if (border.indexOf(',') > -1) {
					var match = border.split(/\s*,\s*/);

					parallelogram.style.border = match[0] + 'px solid ' + match[1];
				} else {
					if (border.match(/^[0-9]+$/) != null) {
						parallelogram.style.border = border + 'px solid gray';
					}
					parallelogram.style.border = border + ' solid gray';
				}
			}
		}
	}]);

	return Parallelogram;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
	function Rectangle() {
		_classCallCheck(this, Rectangle);

		var i = void 0;
		var rectangles = document.getElementsByTagName('rectangle');

		for (i = 0; i < rectangles.length; i++) {
			this.processRectangle(rectangles[i]);
		}

		var rectangleClasses = document.getElementsByClassName('rectangle');

		for (i = 0; i < rectangleClasses.length; i++) {
			this.processRectangle(rectangleClasses[i]);
		}
	}

	_createClass(Rectangle, [{
		key: 'processRectangle',
		value: function processRectangle(rectangle) {

			if (rectangle.hasAttribute('shape-width')) {
				getShapeWidth();
			}

			if (rectangle.hasAttribute('shape-height')) {
				getShapeHeight();
			}

			if (rectangle.hasAttribute('shape-border')) {
				getBorder();
			}

			if (rectangle.hasAttribute('shape-background')) {
				getBackground();
			}

			function getShapeHeight() {

				var height = rectangle.getAttribute('shape-height');

				var x = height.replace(/[^0-9]/g, '');
				var unit = height.replace(/[0-9]/g, '');

				if (unit == '%') {
					unit = 'em';
				}

				rectangle.style.height = x + unit;
				rectangle.style.lineHeight = height;
			}

			function getShapeWidth() {
				var width = rectangle.getAttribute('shape-width');

				//unit process

				var x = width.replace(/[^0-9]/g, '');
				var unit = width.replace(/[0-9]/g, '');

				if (unit == '%') {
					unit = 'em';
				}

				//rectangle process
				rectangle.style.width = x + unit;
			}

			function getBackground() {
				var background = rectangle.getAttribute('shape-background');
				rectangle.style.backgroundColor = background;
			}

			function getBorder() {
				var border = rectangle.getAttribute('shape-border');

				if (border.indexOf(',') > -1) {
					var match = border.split(/\s*,\s*/);

					rectangle.style.border = match[0] + 'px solid ' + match[1];
				} else {
					if (border.match(/^[0-9]+$/) != null) {
						rectangle.style.border = border + 'px solid gray';
					}
					rectangle.style.border = border + ' solid gray';
				}
			}
		}
	}]);

	return Rectangle;
}();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Square; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Square = function () {
	function Square() {
		_classCallCheck(this, Square);

		var i = void 0;
		var squares = document.getElementsByTagName('square');

		for (i = 0; i < squares.length; i++) {
			this.processSquare(squares[i]);
		}

		var squareClasses = document.getElementsByClassName('square');

		for (i = 0; i < squareClasses.length; i++) {
			this.processSquare(squareClasses[i]);
		}
	}

	_createClass(Square, [{
		key: 'processSquare',
		value: function processSquare(square) {

			if (square.hasAttribute('shape-width')) {
				getShapeWidth();
			}

			if (square.hasAttribute('shape-border')) {
				getBorder();
			}

			if (square.hasAttribute('shape-background')) {
				getBackground();
			}

			function getShapeWidth() {
				var width = square.getAttribute('shape-width');

				//unit process
				var value = width.replace(/[^0-9]/g, '');
				var unit = width.replace(/[0-9]/g, '');

				if (unit == '%') {
					unit = 'em';
				}

				//square process
				square.style.width = width;
				square.style.height = value + unit;
				square.style.lineHeight = width;
			}

			function getBackground() {
				var background = square.getAttribute('shape-background');
				square.style.backgroundColor = background;
			}

			function getBorder() {
				var border = square.getAttribute('shape-border');

				if (border.indexOf(',') > -1) {
					var match = border.split(/\s*,\s*/);

					square.style.border = match[0] + 'px solid ' + match[1];
				} else {

					if (border.match(/^[0-9]+$/) != null) {
						square.style.border = border + 'px solid gray';
					}
					square.style.border = border + ' solid gray';
				}
			}
		}
	}]);

	return Square;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);