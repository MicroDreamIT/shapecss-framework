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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/shape.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/component/Accordion.js":
/*!***************************************!*\
  !*** ./src/js/component/Accordion.js ***!
  \***************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
class Accordion{
        constructor(){
            this._accordionDivs = document.getElementsByClassName('accordion');
            if(this._accordionDivs)
            this.processAccordions();
        }
        processAccordions() {
            for(let i=0; i<this._accordionDivs.length;i++){
                let accordionDiv = this._accordionDivs[i];
                let panel = accordionDiv.querySelectorAll('.panel');
                let autoToggle= accordionDiv.getAttribute('auto-toggle');
                let targetButtons = accordionDiv.querySelectorAll('.target');
                for(let j=0; j<targetButtons.length;j++){
                    targetButtons[j].addEventListener('click', (e)=>{
                        panel[j].classList.toggle('active');
                            for(let k=0; k<panel.length;k++)
                                if(k!=j && autoToggle!='off') panel[k].classList.remove('active');
                    });
                }
            }
        }
        
    }



/***/ }),

/***/ "./src/js/component/Modal.js":
/*!***********************************!*\
  !*** ./src/js/component/Modal.js ***!
  \***********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
class Modal {
    constructor() {
        this._modalCallers = document.getElementsByClassName('catch-modal');
        window.addEventListener('click', function (e) {
            for (let i = 0; i < this._modalCallers.length; i++) {
                let modalId = this._modalCallers[i].getAttribute("data-target");
                let modalBody = document.getElementById(modalId);

                if (e.target != modalId && e.target == modalBody) {
                    if (e.target != modalBody.getElementsByClassName("modal-content") ) {
                        if(!this._modalCallers[i].hasAttribute("dont-hide")){
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
    }


}

/***/ }),

/***/ "./src/js/component/Nav.js":
/*!*********************************!*\
  !*** ./src/js/component/Nav.js ***!
  \*********************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
class Nav{
    constructor(){
        this._nav = document.getElementsByTagName("nav");
        for(let i=0; i<this._nav.length;i++)
            this.processNav(this._nav[i]);
    }

    processNav(nav){
        let navButtons = nav.getElementsByClassName("for-mobile")[0];
        if(navButtons){
            navButtons.addEventListener('click', (e)=>{
                navButtons.classList.toggle('open');
                let ulItems= nav.getElementsByClassName('item');
                for(let j=0; j<ulItems.length;j++)
                    ulItems[j].classList.toggle('show-menu');
            });
        }

    }
}

/***/ }),

/***/ "./src/js/component/Tab.js":
/*!*********************************!*\
  !*** ./src/js/component/Tab.js ***!
  \*********************************/
/*! exports provided: getTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTab", function() { return getTab; });
    function applyTabChange(getDivTarget, getLoadOnTargetId){
        let getTabDiv = document.getElementById(getDivTarget);
        if(getTabDiv && getTabDiv.classList.contains('tab-content')){
            let activeDiv = getTabDiv.querySelectorAll(`#${getLoadOnTargetId}`);
            activeDiv[0].classList.add('active');
        }
    }

    function removeActiveClassOnclick(id) {
        let activeDivs = document.getElementById(id);
        let activeClass = activeDivs.getElementsByClassName('active');
        if(activeClass)
        for(let j=0; j<activeClass.length; j++)
            activeClass[j].classList.remove('active')
    }
     function getTab() {
        let getSelector,
            getDivTarget,
            getListItems,
            getActiveClass,
            mouseOn;

        getSelector = document.querySelectorAll('.tab-selector');
        for(let i=0; i<getSelector.length;i++){
            getDivTarget = getSelector[i].getAttribute('div-target');
            mouseOn = getSelector[i].getAttribute('mousehover');
            getActiveClass = getSelector[i].getElementsByClassName('active');
            if(getActiveClass.length)
                applyTabChange(getDivTarget, getActiveClass[0].getAttribute('tab-target'));


            getSelector[i].addEventListener( 'click', function(e){
                listenToEvent(e);
            });
            
            if(mouseOn){
                getSelector[i].addEventListener('mouseover', function(e){
                    listenToEvent(e);
                });
            }


            function listenToEvent(e) {
                getListItems = getSelector[i].getElementsByClassName('active');
                for(let j=0; j<getListItems.length;j++){
                    getListItems[j].classList.remove('active');
                }
                //apply condition
                let getParent = e.target.parentElement.classList;
                if(getParent.contains('tab-selector')){
                    e.target.classList.add('active');
                    removeActiveClassOnclick(e.target.parentElement.getAttribute('div-target'));
                    applyTabChange(e.target.parentElement.getAttribute('div-target'), e.target.getAttribute('tab-target'));
                }
                if(!getParent.contains('tab-selector')){

                    //look for other member
                    let queryEls= e.target.parentElement;
                    let findLi = queryEls.closest("li");
                    if(findLi){
                        let findLiTab = findLi.getAttribute("tab-target");
                        findLi.classList.add('active');
                        let targetedDiv =findLi.parentElement.getAttribute('div-target');
                        removeActiveClassOnclick(targetedDiv);
                        applyTabChange(targetedDiv, findLiTab);
                    }

                }
            }
        }

    }


/***/ }),

/***/ "./src/js/component/shapes/Circle.js":
/*!*******************************************!*\
  !*** ./src/js/component/shapes/Circle.js ***!
  \*******************************************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
class Circle {

    constructor() {

        let i;
        let circles = document.getElementsByTagName('circle');

        for (i = 0; i < circles.length; i++) {
            this.findCircleElement(circles[i]);
        }


        let circleClasses = document.getElementsByClassName('circle');

        for (i = 0; i < circleClasses.length; i++) {
            this.findCircleElement(circleClasses[i]);
        }
    }


    findCircleElement(circle) {

        if (circle.hasAttribute('shape-radius')) {
            getRadius();
        }

        if (circle.hasAttribute('shape-background')) {
            getBackground();
        }


        if (circle.hasAttribute('shape-border')) {
            getBorder();
        }

        if(circle.hasAttribute('transition')){
            getTransition();
        }


        function getTransition() {
            let transition =circle.getAttribute('transition');
            if(transition=='off')
            circle.style.transition = 'none';
        }

        function getBorder() {
            let border = circle.getAttribute('shape-border');

            if (border.indexOf(',')) {
                let match = border.split(/\s*,\s*/);

                circle.style.border= match[0] + 'px solid ' + match[1];

            } else {
                circle.style.border = border;
            }
        }


        function getBackground() {
            let background = circle.getAttribute('shape-background');
            circle.style.backgroundColor = background;
        }


        // radius method start
        function getRadius() {
            let radius = circle.getAttribute('shape-radius');

            let value = radius.replace(/[^0-9]/g, '');
            let unit = radius.replace(/[0-9]/g, '');

            if (unit == '%') {
                unit = 'em';
            }

            radius = Number(value) + unit;
            circle.style.width = radius;
            circle.style.height = radius;
            circle.style.borderRadius = Number(value) / 2 + unit;
            circle.style.MozBorderRadius = Number(value) / 2 + unit;
            circle.style.WebkitBorderRadius = Number(value) / 2 + unit;
            circle.style.lineHeight=radius;
        }
    }
}

/***/ }),

/***/ "./src/js/component/shapes/Parallelogram.js":
/*!**************************************************!*\
  !*** ./src/js/component/shapes/Parallelogram.js ***!
  \**************************************************/
/*! exports provided: Parallelogram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallelogram", function() { return Parallelogram; });
class Parallelogram {

	constructor(){
        let i;
        let parallelograms = document.getElementsByTagName('parallelogram');

        for (i = 0; i < parallelograms.length; i++) {
            this.processSquare(parallelograms[i]);
        }


        let parallelogramClasses = document.getElementsByClassName('parallelogram');

        for (i = 0; i < parallelogramClasses.length; i++) {
            this.processSquare(parallelogramClasses[i]);
        }
	}



	processSquare(parallelogram){

		if (parallelogram.hasAttribute('shape-height')){
			getShapeHeight();
		}

		if (parallelogram.hasAttribute('shape-width')){
			getShapeWidth();
		}

		if(parallelogram.hasAttribute('shape-border')){
			getBorder();
		}

		if (parallelogram.hasAttribute('shape-background')) {
			getBackground();
		}
		 

		 function getShapeHeight(){

		  		let height = parallelogram.getAttribute('shape-height');
		  		 
		  		 let x = height.replace(/[^0-9]/g, '');
		  		 let unit=height.replace(/[0-9]/g, '');
		  		 
		  		 if (unit == '%'){
                		unit = 'em';
            		}

        		parallelogram.style.height= x+unit;
        		parallelogram.style.lineHeight=height;

		  }

			function getShapeWidth(){
				let width = parallelogram.getAttribute('shape-width');

				//unit process

				let x = width.replace(/[^0-9]/g, '');
                let unit = width.replace(/[0-9]/g, '');

                  if (unit == '%'){
                		unit = 'em';
            		}

				//rectangle process
				parallelogram.style.width= x+unit;
			}


			function getBackground() {
	            let background = parallelogram.getAttribute('shape-background');
	            parallelogram.style.backgroundColor = background;
	        }



	         function getBorder() {
	            let border = parallelogram.getAttribute('shape-border');

	            if (border.indexOf(',')>-1) {
	                let match = border.split(/\s*,\s*/);
	                
	                parallelogram.style.border= match[0] + 'px solid ' + match[1];
	                            
	            } else {
	            	if(border.match(/^[0-9]+$/)!=null){
            			parallelogram.style.border = border + 'px solid gray';
	            	}
	                parallelogram.style.border = border + ' solid gray';
	            }
	        }

	}


}




/***/ }),

/***/ "./src/js/component/shapes/Rectangle.js":
/*!**********************************************!*\
  !*** ./src/js/component/shapes/Rectangle.js ***!
  \**********************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
class Rectangle {

		constructor(){

            let i;
            let rectangles = document.getElementsByTagName('rectangle');

            for (i = 0; i < rectangles.length; i++) {
                this.processRectangle(rectangles[i]);
            }


            let rectangleClasses = document.getElementsByClassName('rectangle');

            for (i = 0; i < rectangleClasses.length; i++) {
                this.processRectangle(rectangleClasses[i]);
            }

		}



	processRectangle(rectangle){

		if (rectangle.hasAttribute('shape-width')){
			getShapeWidth();
		}

		if ( rectangle.hasAttribute('shape-height') ){
			getShapeHeight();
		}

		if(rectangle.hasAttribute('shape-border')){
			getBorder();
		}

		if (rectangle.hasAttribute('shape-background')) {
			getBackground();
		}

		  function getShapeHeight(){

		  		let height = rectangle.getAttribute('shape-height')
		  		 
		  		 let x = height.replace(/[^0-9]/g, '');
		  		 let unit=height.replace(/[0-9]/g, '');
		  		 
		  		 if (unit == '%'){
                		unit = 'em';
            		}

        		rectangle.style.height= x+unit;
        		rectangle.style.lineHeight=height;

		  }

			function getShapeWidth(){
				let width = rectangle.getAttribute('shape-width');

				//unit process

				let x = width.replace(/[^0-9]/g, '');
                let unit = width.replace(/[0-9]/g, '');

                  if (unit == '%'){
                		unit = 'em';
            		}

				//rectangle process
				rectangle.style.width= x+unit;
			}


			function getBackground() {
	            let background = rectangle.getAttribute('shape-background');
	            rectangle.style.backgroundColor = background;
	        }



	        function getBorder() {
	            let border = rectangle.getAttribute('shape-border');

	            if (border.indexOf(',')>-1) {
	                let match = border.split(/\s*,\s*/);
	                
	                rectangle.style.border= match[0] + 'px solid ' + match[1];
	                            
	            } else {
	            	if(border.match(/^[0-9]+$/)!=null){
            			rectangle.style.border = border + 'px solid gray';
	            	}
	                rectangle.style.border = border + ' solid gray';
	            }
	        }

	}


}




/***/ }),

/***/ "./src/js/component/shapes/Square.js":
/*!*******************************************!*\
  !*** ./src/js/component/shapes/Square.js ***!
  \*******************************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return Square; });
class Square {

	constructor(){
        let i;
        let squares = document.getElementsByTagName('square');

        for (i = 0; i < squares.length; i++) {
            this.processSquare(squares[i]);
        }


        let squareClasses = document.getElementsByClassName('square');

        for (i = 0; i < squareClasses.length; i++) {
            this.processSquare(squareClasses[i]);
        }
	}



	processSquare(square){

		if (square.hasAttribute('shape-width')){
			getShapeWidth();
		}

		if(square.hasAttribute('shape-border')){
			getBorder();
		}

		if (square.hasAttribute('shape-background')) {
			getBackground();
		}
		 

			function getShapeWidth(){
				var width = square.getAttribute('shape-width');

				//unit process
				var value = width.replace(/[^0-9]/g, '');
                var unit = width.replace(/[0-9]/g, '');

                  if (unit == '%'){
                		unit = 'em';
            		}

				//square process
				square.style.width= width;
				square.style.height= value+unit;
				square.style.lineHeight=width;
			}


			function getBackground() {
	            var background = square.getAttribute('shape-background');
	            square.style.backgroundColor = background;
	        }



	         function getBorder() {
	            var border = square.getAttribute('shape-border');

	            if (border.indexOf(',')>-1) {
	                var match = border.split(/\s*,\s*/);
	                
	                square.style.border= match[0] + 'px solid ' + match[1];
	                            
	            } else {

	            	if(border.match(/^[0-9]+$/)!=null){
            			square.style.border = border + 'px solid gray';
	            	}
	                    square.style.border = border + ' solid gray';
	            }
	        }

	}


}




/***/ }),

/***/ "./src/js/shape.js":
/*!*************************!*\
  !*** ./src/js/shape.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/Accordion */ "./src/js/component/Accordion.js");
/* harmony import */ var _component_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Modal */ "./src/js/component/Modal.js");
/* harmony import */ var _component_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Tab */ "./src/js/component/Tab.js");
/* harmony import */ var _component_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Nav */ "./src/js/component/Nav.js");
/* harmony import */ var _component_shapes_Circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/shapes/Circle */ "./src/js/component/shapes/Circle.js");
/* harmony import */ var _component_shapes_Parallelogram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/shapes/Parallelogram */ "./src/js/component/shapes/Parallelogram.js");
/* harmony import */ var _component_shapes_Rectangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/shapes/Rectangle */ "./src/js/component/shapes/Rectangle.js");
/* harmony import */ var _component_shapes_Square__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/shapes/Square */ "./src/js/component/shapes/Square.js");
/*!
 * Shapecss v3.0.0
 * Copyright 2016-2017 Shahanur Sharif.
 * http://microdreamit.com
 * Licensed under MIT (https://github.com/MicroDreamIT/Shapecss/blob/master/LICENSE)
 */












const css = __webpack_require__(/*! ../../test.scss */ "./test.scss")

window.onload = function () {
  new _component_Accordion__WEBPACK_IMPORTED_MODULE_0__["Accordion"]();
  new _component_Modal__WEBPACK_IMPORTED_MODULE_1__["Modal"]();
  Object(_component_Tab__WEBPACK_IMPORTED_MODULE_2__["getTab"])();
  new _component_Nav__WEBPACK_IMPORTED_MODULE_3__["Nav"]();
  new _component_shapes_Circle__WEBPACK_IMPORTED_MODULE_4__["Circle"]();
  new _component_shapes_Parallelogram__WEBPACK_IMPORTED_MODULE_5__["Parallelogram"]();
  new _component_shapes_Rectangle__WEBPACK_IMPORTED_MODULE_6__["Rectangle"]();
  new _component_shapes_Square__WEBPACK_IMPORTED_MODULE_7__["Square"]();

}


/***/ }),

/***/ "./test.scss":
/*!*******************!*\
  !*** ./test.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nReferenceError: window is not defined\n    at /Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:260:2\n    at /Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:249:46\n    at module.exports../node_modules/style-loader/lib/addStyles.js.module.exports (/Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:317:88)\n    at Object../node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./test.scss (/Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:223:133)\n    at __webpack_require__ (/Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:21:30)\n    at /Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:85:18\n    at Object.<anonymous> (/Users/shahanur/Php/shapecss-framework/node_modules/style-loader/index.js!/Users/shahanur/Php/shapecss-framework/node_modules/css-loader/dist/cjs.js!/Users/shahanur/Php/shapecss-framework/node_modules/sass-loader/lib/loader.js!/Users/shahanur/Php/shapecss-framework/test.scss:88:10)\n    at Module._compile (/Users/shahanur/Php/shapecss-framework/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\n    at exec (/Users/shahanur/Php/shapecss-framework/node_modules/mini-css-extract-plugin/dist/loader.js:58:10)\n    at childCompiler.runAsChild (/Users/shahanur/Php/shapecss-framework/node_modules/mini-css-extract-plugin/dist/loader.js:151:14)\n    at compile (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compiler.js:306:11)\n    at hooks.afterCompile.callAsync.err (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compiler.js:631:15)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/Hook.js:154:20)\n    at compilation.seal.err (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compiler.js:628:31)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/Hook.js:154:20)\n    at hooks.optimizeAssets.callAsync.err (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compilation.js:1329:35)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/Hook.js:154:20)\n    at hooks.optimizeChunkAssets.callAsync.err (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compilation.js:1320:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/Hook.js:154:20)\n    at hooks.additionalAssets.callAsync.err (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compilation.js:1315:36)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/Hook.js:154:20)\n    at hooks.optimizeTree.callAsync.err (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compilation.js:1311:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (/Users/shahanur/Php/shapecss-framework/node_modules/tapable/lib/Hook.js:154:20)\n    at Compilation.seal (/Users/shahanur/Php/shapecss-framework/node_modules/webpack/lib/Compilation.js:1248:27)");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvUGFyYWxsZWxvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaGFwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtB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UjtBQUNOO0FBQ2pELFlBQVksbUJBQU8sQ0FBQyxvQ0FBaUI7O0FBRXJDO0FBQ0EsTUFBTSw4REFBUztBQUNmLE1BQU0sc0RBQUs7QUFDWCxFQUFFLDZEQUFNO0FBQ1IsTUFBTSxrREFBRztBQUNULE1BQU0sK0RBQU07QUFDWixNQUFNLDZFQUFhO0FBQ25CLE1BQU0scUVBQVM7QUFDZixNQUFNLCtEQUFNOztBQUVaIiwiZmlsZSI6InNoYXBlY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9zaGFwZS5qc1wiKTtcbiIsImV4cG9ydCBjbGFzcyBBY2NvcmRpb257XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgICAgICB0aGlzLl9hY2NvcmRpb25EaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkaW9uJyk7XG4gICAgICAgICAgICBpZih0aGlzLl9hY2NvcmRpb25EaXZzKVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQWNjb3JkaW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NBY2NvcmRpb25zKCkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5fYWNjb3JkaW9uRGl2cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uRGl2ID0gdGhpcy5fYWNjb3JkaW9uRGl2c1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGFuZWwgPSBhY2NvcmRpb25EaXYucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGF1dG9Ub2dnbGU9IGFjY29yZGlvbkRpdi5nZXRBdHRyaWJ1dGUoJ2F1dG8tdG9nZ2xlJyk7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEJ1dHRvbnMgPSBhY2NvcmRpb25EaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRhcmdldEJ1dHRvbnMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEJ1dHRvbnNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsW2pdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wOyBrPHBhbmVsLmxlbmd0aDtrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGshPWogJiYgYXV0b1RvZ2dsZSE9J29mZicpIHBhbmVsW2tdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4iLCJleHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9tb2RhbENhbGxlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXRjaC1tb2RhbCcpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RhbENhbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kYWxJZCA9IHRoaXMuX21vZGFsQ2FsbGVyc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT0gbW9kYWxJZCAmJiBlLnRhcmdldCA9PSBtb2RhbEJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9IG1vZGFsQm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY29udGVudFwiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9tb2RhbENhbGxlcnNbaV0uaGFzQXR0cmlidXRlKFwiZG9udC1oaWRlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWxCb2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF0gfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAvL3Nob3cgYWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IHRoaXMuX21vZGFsQ2FsbGVyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuXG59IiwiZXhwb3J0IGNsYXNzIE5hdntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm5hdlwiKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5fbmF2Lmxlbmd0aDtpKyspXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NOYXYodGhpcy5fbmF2W2ldKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzTmF2KG5hdil7XG4gICAgICAgIGxldCBuYXZCdXR0b25zID0gbmF2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3ItbW9iaWxlXCIpWzBdO1xuICAgICAgICBpZihuYXZCdXR0b25zKXtcbiAgICAgICAgICAgIG5hdkJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgICAgICBuYXZCdXR0b25zLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBsZXQgdWxJdGVtcz0gbmF2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW0nKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajx1bEl0ZW1zLmxlbmd0aDtqKyspXG4gICAgICAgICAgICAgICAgICAgIHVsSXRlbXNbal0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsIiAgICBmdW5jdGlvbiBhcHBseVRhYkNoYW5nZShnZXREaXZUYXJnZXQsIGdldExvYWRPblRhcmdldElkKXtcbiAgICAgICAgbGV0IGdldFRhYkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldERpdlRhcmdldCk7XG4gICAgICAgIGlmKGdldFRhYkRpdiAmJiBnZXRUYWJEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWItY29udGVudCcpKXtcbiAgICAgICAgICAgIGxldCBhY3RpdmVEaXYgPSBnZXRUYWJEaXYucXVlcnlTZWxlY3RvckFsbChgIyR7Z2V0TG9hZE9uVGFyZ2V0SWR9YCk7XG4gICAgICAgICAgICBhY3RpdmVEaXZbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzc09uY2xpY2soaWQpIHtcbiAgICAgICAgbGV0IGFjdGl2ZURpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGxldCBhY3RpdmVDbGFzcyA9IGFjdGl2ZURpdnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XG4gICAgICAgIGlmKGFjdGl2ZUNsYXNzKVxuICAgICAgICBmb3IobGV0IGo9MDsgajxhY3RpdmVDbGFzcy5sZW5ndGg7IGorKylcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0VGFiKCkge1xuICAgICAgICBsZXQgZ2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBnZXREaXZUYXJnZXQsXG4gICAgICAgICAgICBnZXRMaXN0SXRlbXMsXG4gICAgICAgICAgICBnZXRBY3RpdmVDbGFzcyxcbiAgICAgICAgICAgIG1vdXNlT247XG5cbiAgICAgICAgZ2V0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXNlbGVjdG9yJyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGdldFNlbGVjdG9yLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgZ2V0RGl2VGFyZ2V0ID0gZ2V0U2VsZWN0b3JbaV0uZ2V0QXR0cmlidXRlKCdkaXYtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBtb3VzZU9uID0gZ2V0U2VsZWN0b3JbaV0uZ2V0QXR0cmlidXRlKCdtb3VzZWhvdmVyJyk7XG4gICAgICAgICAgICBnZXRBY3RpdmVDbGFzcyA9IGdldFNlbGVjdG9yW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoZ2V0QWN0aXZlQ2xhc3MubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGFwcGx5VGFiQ2hhbmdlKGdldERpdlRhcmdldCwgZ2V0QWN0aXZlQ2xhc3NbMF0uZ2V0QXR0cmlidXRlKCd0YWItdGFyZ2V0JykpO1xuXG5cbiAgICAgICAgICAgIGdldFNlbGVjdG9yW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGxpc3RlblRvRXZlbnQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYobW91c2VPbil7XG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0b3JbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlblRvRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gbGlzdGVuVG9FdmVudChlKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGlzdEl0ZW1zID0gZ2V0U2VsZWN0b3JbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8Z2V0TGlzdEl0ZW1zLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgICAgICBnZXRMaXN0SXRlbXNbal0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vYXBwbHkgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgbGV0IGdldFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgIGlmKGdldFBhcmVudC5jb250YWlucygndGFiLXNlbGVjdG9yJykpe1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3NPbmNsaWNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXYtdGFyZ2V0JykpO1xuICAgICAgICAgICAgICAgICAgICBhcHBseVRhYkNoYW5nZShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhYi10YXJnZXQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFnZXRQYXJlbnQuY29udGFpbnMoJ3RhYi1zZWxlY3RvcicpKXtcblxuICAgICAgICAgICAgICAgICAgICAvL2xvb2sgZm9yIG90aGVyIG1lbWJlclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnlFbHM9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaW5kTGkgPSBxdWVyeUVscy5jbG9zZXN0KFwibGlcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGZpbmRMaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluZExpVGFiID0gZmluZExpLmdldEF0dHJpYnV0ZShcInRhYi10YXJnZXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kTGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ZWREaXYgPWZpbmRMaS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3NPbmNsaWNrKHRhcmdldGVkRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5VGFiQ2hhbmdlKHRhcmdldGVkRGl2LCBmaW5kTGlUYWIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiIsImV4cG9ydCBjbGFzcyBDaXJjbGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBjaXJjbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NpcmNsZScpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmRDaXJjbGVFbGVtZW50KGNpcmNsZXNbaV0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgY2lyY2xlQ2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpcmNsZScpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaXJjbGVDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmRDaXJjbGVFbGVtZW50KGNpcmNsZUNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmaW5kQ2lyY2xlRWxlbWVudChjaXJjbGUpIHtcblxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtcmFkaXVzJykpIHtcbiAgICAgICAgICAgIGdldFJhZGl1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNpcmNsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKSkge1xuICAgICAgICAgICAgZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJykpIHtcbiAgICAgICAgICAgIGdldEJvcmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY2lyY2xlLmhhc0F0dHJpYnV0ZSgndHJhbnNpdGlvbicpKXtcbiAgICAgICAgICAgIGdldFRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbigpIHtcbiAgICAgICAgICAgIGxldCB0cmFuc2l0aW9uID1jaXJjbGUuZ2V0QXR0cmlidXRlKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICBpZih0cmFuc2l0aW9uPT0nb2ZmJylcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xuICAgICAgICAgICAgbGV0IGJvcmRlciA9IGNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpO1xuXG4gICAgICAgICAgICBpZiAoYm9yZGVyLmluZGV4T2YoJywnKSkge1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGJvcmRlci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYm9yZGVyPSBtYXRjaFswXSArICdweCBzb2xpZCAnICsgbWF0Y2hbMV07XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlciA9IGJvcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZCgpIHtcbiAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIHJhZGl1cyBtZXRob2Qgc3RhcnRcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFkaXVzKCkge1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLXJhZGl1cycpO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYWRpdXMucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgIGxldCB1bml0ID0gcmFkaXVzLnJlcGxhY2UoL1swLTldL2csICcnKTtcblxuICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKSB7XG4gICAgICAgICAgICAgICAgdW5pdCA9ICdlbSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJhZGl1cyA9IE51bWJlcih2YWx1ZSkgKyB1bml0O1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLndpZHRoID0gcmFkaXVzO1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmhlaWdodCA9IHJhZGl1cztcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBOdW1iZXIodmFsdWUpIC8gMiArIHVuaXQ7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuTW96Qm9yZGVyUmFkaXVzID0gTnVtYmVyKHZhbHVlKSAvIDIgKyB1bml0O1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLldlYmtpdEJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5saW5lSGVpZ2h0PXJhZGl1cztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgUGFyYWxsZWxvZ3JhbSB7XG5cblx0Y29uc3RydWN0b3IoKXtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBwYXJhbGxlbG9ncmFtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwYXJhbGxlbG9ncmFtJyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmFsbGVsb2dyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTcXVhcmUocGFyYWxsZWxvZ3JhbXNbaV0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgcGFyYWxsZWxvZ3JhbUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJhbGxlbG9ncmFtJyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmFsbGVsb2dyYW1DbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTcXVhcmUocGFyYWxsZWxvZ3JhbUNsYXNzZXNbaV0pO1xuICAgICAgICB9XG5cdH1cblxuXG5cblx0cHJvY2Vzc1NxdWFyZShwYXJhbGxlbG9ncmFtKXtcblxuXHRcdGlmIChwYXJhbGxlbG9ncmFtLmhhc0F0dHJpYnV0ZSgnc2hhcGUtaGVpZ2h0Jykpe1xuXHRcdFx0Z2V0U2hhcGVIZWlnaHQoKTtcblx0XHR9XG5cblx0XHRpZiAocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJykpe1xuXHRcdFx0Z2V0U2hhcGVXaWR0aCgpO1xuXHRcdH1cblxuXHRcdGlmKHBhcmFsbGVsb2dyYW0uaGFzQXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKSl7XG5cdFx0XHRnZXRCb3JkZXIoKTtcblx0XHR9XG5cblx0XHRpZiAocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKSkge1xuXHRcdFx0Z2V0QmFja2dyb3VuZCgpO1xuXHRcdH1cblx0XHQgXG5cblx0XHQgZnVuY3Rpb24gZ2V0U2hhcGVIZWlnaHQoKXtcblxuXHRcdCAgXHRcdGxldCBoZWlnaHQgPSBwYXJhbGxlbG9ncmFtLmdldEF0dHJpYnV0ZSgnc2hhcGUtaGVpZ2h0Jyk7XG5cdFx0ICBcdFx0IFxuXHRcdCAgXHRcdCBsZXQgeCA9IGhlaWdodC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuXHRcdCAgXHRcdCBsZXQgdW5pdD1oZWlnaHQucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuXHRcdCAgXHRcdCBcblx0XHQgIFx0XHQgaWYgKHVuaXQgPT0gJyUnKXtcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XG4gICAgICAgICAgICBcdFx0fVxuXG4gICAgICAgIFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLmhlaWdodD0geCt1bml0O1xuICAgICAgICBcdFx0cGFyYWxsZWxvZ3JhbS5zdHlsZS5saW5lSGVpZ2h0PWhlaWdodDtcblxuXHRcdCAgfVxuXG5cdFx0XHRmdW5jdGlvbiBnZXRTaGFwZVdpZHRoKCl7XG5cdFx0XHRcdGxldCB3aWR0aCA9IHBhcmFsbGVsb2dyYW0uZ2V0QXR0cmlidXRlKCdzaGFwZS13aWR0aCcpO1xuXG5cdFx0XHRcdC8vdW5pdCBwcm9jZXNzXG5cblx0XHRcdFx0bGV0IHggPSB3aWR0aC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgIGxldCB1bml0ID0gd2lkdGgucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodW5pdCA9PSAnJScpe1xuICAgICAgICAgICAgICAgIFx0XHR1bml0ID0gJ2VtJztcbiAgICAgICAgICAgIFx0XHR9XG5cblx0XHRcdFx0Ly9yZWN0YW5nbGUgcHJvY2Vzc1xuXHRcdFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLndpZHRoPSB4K3VuaXQ7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0QmFja2dyb3VuZCgpIHtcblx0ICAgICAgICAgICAgbGV0IGJhY2tncm91bmQgPSBwYXJhbGxlbG9ncmFtLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xuXHQgICAgICAgICAgICBwYXJhbGxlbG9ncmFtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG5cdCAgICAgICAgfVxuXG5cblxuXHQgICAgICAgICBmdW5jdGlvbiBnZXRCb3JkZXIoKSB7XG5cdCAgICAgICAgICAgIGxldCBib3JkZXIgPSBwYXJhbGxlbG9ncmFtLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XG5cblx0ICAgICAgICAgICAgaWYgKGJvcmRlci5pbmRleE9mKCcsJyk+LTEpIHtcblx0ICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGJvcmRlci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cdCAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIHBhcmFsbGVsb2dyYW0uc3R5bGUuYm9yZGVyPSBtYXRjaFswXSArICdweCBzb2xpZCAnICsgbWF0Y2hbMV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgXHRpZihib3JkZXIubWF0Y2goL15bMC05XSskLykhPW51bGwpe1xuICAgICAgICAgICAgXHRcdFx0cGFyYWxsZWxvZ3JhbS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAncHggc29saWQgZ3JheSc7XG5cdCAgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgICAgICAgcGFyYWxsZWxvZ3JhbS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAnIHNvbGlkIGdyYXknO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdH1cblxuXG59XG5cblxuIiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG5cblx0XHRjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3JlY3RhbmdsZScpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVjdGFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlY3RhbmdsZShyZWN0YW5nbGVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlQ2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlY3RhbmdsZScpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVjdGFuZ2xlQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlY3RhbmdsZShyZWN0YW5nbGVDbGFzc2VzW2ldKTtcbiAgICAgICAgICAgIH1cblxuXHRcdH1cblxuXG5cblx0cHJvY2Vzc1JlY3RhbmdsZShyZWN0YW5nbGUpe1xuXG5cdFx0aWYgKHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJykpe1xuXHRcdFx0Z2V0U2hhcGVXaWR0aCgpO1xuXHRcdH1cblxuXHRcdGlmICggcmVjdGFuZ2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtaGVpZ2h0JykgKXtcblx0XHRcdGdldFNoYXBlSGVpZ2h0KCk7XG5cdFx0fVxuXG5cdFx0aWYocmVjdGFuZ2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJykpe1xuXHRcdFx0Z2V0Qm9yZGVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKSkge1xuXHRcdFx0Z2V0QmFja2dyb3VuZCgpO1xuXHRcdH1cblxuXHRcdCAgZnVuY3Rpb24gZ2V0U2hhcGVIZWlnaHQoKXtcblxuXHRcdCAgXHRcdGxldCBoZWlnaHQgPSByZWN0YW5nbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1oZWlnaHQnKVxuXHRcdCAgXHRcdCBcblx0XHQgIFx0XHQgbGV0IHggPSBoZWlnaHQucmVwbGFjZSgvW14wLTldL2csICcnKTtcblx0XHQgIFx0XHQgbGV0IHVuaXQ9aGVpZ2h0LnJlcGxhY2UoL1swLTldL2csICcnKTtcblx0XHQgIFx0XHQgXG5cdFx0ICBcdFx0IGlmICh1bml0ID09ICclJyl7XG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xuICAgICAgICAgICAgXHRcdH1cblxuICAgICAgICBcdFx0cmVjdGFuZ2xlLnN0eWxlLmhlaWdodD0geCt1bml0O1xuICAgICAgICBcdFx0cmVjdGFuZ2xlLnN0eWxlLmxpbmVIZWlnaHQ9aGVpZ2h0O1xuXG5cdFx0ICB9XG5cblx0XHRcdGZ1bmN0aW9uIGdldFNoYXBlV2lkdGgoKXtcblx0XHRcdFx0bGV0IHdpZHRoID0gcmVjdGFuZ2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKTtcblxuXHRcdFx0XHQvL3VuaXQgcHJvY2Vzc1xuXG5cdFx0XHRcdGxldCB4ID0gd2lkdGgucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdCA9IHdpZHRoLnJlcGxhY2UoL1swLTldL2csICcnKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKXtcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XG4gICAgICAgICAgICBcdFx0fVxuXG5cdFx0XHRcdC8vcmVjdGFuZ2xlIHByb2Nlc3Ncblx0XHRcdFx0cmVjdGFuZ2xlLnN0eWxlLndpZHRoPSB4K3VuaXQ7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0QmFja2dyb3VuZCgpIHtcblx0ICAgICAgICAgICAgbGV0IGJhY2tncm91bmQgPSByZWN0YW5nbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJyk7XG5cdCAgICAgICAgICAgIHJlY3RhbmdsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kO1xuXHQgICAgICAgIH1cblxuXG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRCb3JkZXIoKSB7XG5cdCAgICAgICAgICAgIGxldCBib3JkZXIgPSByZWN0YW5nbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKTtcblxuXHQgICAgICAgICAgICBpZiAoYm9yZGVyLmluZGV4T2YoJywnKT4tMSkge1xuXHQgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcblx0ICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgcmVjdGFuZ2xlLnN0eWxlLmJvcmRlcj0gbWF0Y2hbMF0gKyAncHggc29saWQgJyArIG1hdGNoWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIFx0aWYoYm9yZGVyLm1hdGNoKC9eWzAtOV0rJC8pIT1udWxsKXtcbiAgICAgICAgICAgIFx0XHRcdHJlY3RhbmdsZS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAncHggc29saWQgZ3JheSc7XG5cdCAgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgICAgICAgcmVjdGFuZ2xlLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICcgc29saWQgZ3JheSc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0fVxuXG5cbn1cblxuXG4iLCJleHBvcnQgY2xhc3MgU3F1YXJlIHtcblxuXHRjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3F1YXJlJyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NxdWFyZShzcXVhcmVzW2ldKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHNxdWFyZUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcXVhcmUnKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3F1YXJlQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3F1YXJlKHNxdWFyZUNsYXNzZXNbaV0pO1xuICAgICAgICB9XG5cdH1cblxuXG5cblx0cHJvY2Vzc1NxdWFyZShzcXVhcmUpe1xuXG5cdFx0aWYgKHNxdWFyZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJykpe1xuXHRcdFx0Z2V0U2hhcGVXaWR0aCgpO1xuXHRcdH1cblxuXHRcdGlmKHNxdWFyZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpKXtcblx0XHRcdGdldEJvcmRlcigpO1xuXHRcdH1cblxuXHRcdGlmIChzcXVhcmUuaGFzQXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJykpIHtcblx0XHRcdGdldEJhY2tncm91bmQoKTtcblx0XHR9XG5cdFx0IFxuXG5cdFx0XHRmdW5jdGlvbiBnZXRTaGFwZVdpZHRoKCl7XG5cdFx0XHRcdHZhciB3aWR0aCA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJyk7XG5cblx0XHRcdFx0Ly91bml0IHByb2Nlc3Ncblx0XHRcdFx0dmFyIHZhbHVlID0gd2lkdGgucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgdW5pdCA9IHdpZHRoLnJlcGxhY2UoL1swLTldL2csICcnKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKXtcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XG4gICAgICAgICAgICBcdFx0fVxuXG5cdFx0XHRcdC8vc3F1YXJlIHByb2Nlc3Ncblx0XHRcdFx0c3F1YXJlLnN0eWxlLndpZHRoPSB3aWR0aDtcblx0XHRcdFx0c3F1YXJlLnN0eWxlLmhlaWdodD0gdmFsdWUrdW5pdDtcblx0XHRcdFx0c3F1YXJlLnN0eWxlLmxpbmVIZWlnaHQ9d2lkdGg7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0QmFja2dyb3VuZCgpIHtcblx0ICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJyk7XG5cdCAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kO1xuXHQgICAgICAgIH1cblxuXG5cblx0ICAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xuXHQgICAgICAgICAgICB2YXIgYm9yZGVyID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XG5cblx0ICAgICAgICAgICAgaWYgKGJvcmRlci5pbmRleE9mKCcsJyk+LTEpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGJvcmRlci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cdCAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5ib3JkZXI9IG1hdGNoWzBdICsgJ3B4IHNvbGlkICcgKyBtYXRjaFsxXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXG5cdCAgICAgICAgICAgIFx0aWYoYm9yZGVyLm1hdGNoKC9eWzAtOV0rJC8pIT1udWxsKXtcbiAgICAgICAgICAgIFx0XHRcdHNxdWFyZS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAncHggc29saWQgZ3JheSc7XG5cdCAgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAnIHNvbGlkIGdyYXknO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdH1cblxuXG59XG5cblxuIiwiLyohXG4gKiBTaGFwZWNzcyB2My4wLjBcbiAqIENvcHlyaWdodCAyMDE2LTIwMTcgU2hhaGFudXIgU2hhcmlmLlxuICogaHR0cDovL21pY3JvZHJlYW1pdC5jb21cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL01pY3JvRHJlYW1JVC9TaGFwZWNzcy9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtBY2NvcmRpb259IGZyb20gXCIuL2NvbXBvbmVudC9BY2NvcmRpb25cIjtcbmltcG9ydCB7TW9kYWx9IGZyb20gXCIuL2NvbXBvbmVudC9Nb2RhbFwiO1xuaW1wb3J0IHtnZXRUYWJ9IGZyb20gXCIuL2NvbXBvbmVudC9UYWJcIjtcbmltcG9ydCB7TmF2fSBmcm9tIFwiLi9jb21wb25lbnQvTmF2XCI7XG5cbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL0NpcmNsZVwiO1xuaW1wb3J0IHtQYXJhbGxlbG9ncmFtfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL1BhcmFsbGVsb2dyYW1cIjtcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlXCI7XG5jb25zdCBjc3MgPSByZXF1aXJlKCcuLi8uLi90ZXN0LnNjc3MnKVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBuZXcgQWNjb3JkaW9uKCk7XG4gIG5ldyBNb2RhbCgpO1xuICBnZXRUYWIoKTtcbiAgbmV3IE5hdigpO1xuICBuZXcgQ2lyY2xlKCk7XG4gIG5ldyBQYXJhbGxlbG9ncmFtKCk7XG4gIG5ldyBSZWN0YW5nbGUoKTtcbiAgbmV3IFNxdWFyZSgpO1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9