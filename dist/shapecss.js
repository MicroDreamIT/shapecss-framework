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














const css = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss")
// import '../test.scss'

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

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvUGFyYWxsZWxvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJB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QUFHbUM7QUFDUjtBQUNEO0FBQ0g7O0FBRWE7QUFDYztBQUNSO0FBQ047O0FBRWpELFlBQVksbUJBQU8sQ0FBQywrQ0FBbUI7QUFDdkM7O0FBRUE7QUFDQSxNQUFNLDhEQUFTO0FBQ2YsTUFBTSxzREFBSztBQUNYLEVBQUUsNkRBQU07QUFDUixNQUFNLGtEQUFHO0FBQ1QsTUFBTSwrREFBTTtBQUNaLE1BQU0sNkVBQWE7QUFDbkIsTUFBTSxxRUFBUztBQUNmLE1BQU0sK0RBQU07O0FBRVo7Ozs7Ozs7Ozs7OztBQ2pDQSx1QyIsImZpbGUiOiJzaGFwZWNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvc2hhcGUuanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQWNjb3JkaW9ue1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY29yZGlvbkRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgaWYodGhpcy5fYWNjb3JkaW9uRGl2cylcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQWNjb3JkaW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9jZXNzQWNjb3JkaW9ucygpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5fYWNjb3JkaW9uRGl2cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25EaXYgPSB0aGlzLl9hY2NvcmRpb25EaXZzW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhbmVsID0gYWNjb3JkaW9uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF1dG9Ub2dnbGU9IGFjY29yZGlvbkRpdi5nZXRBdHRyaWJ1dGUoJ2F1dG8tdG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0QnV0dG9ucyA9IGFjY29yZGlvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0YXJnZXRCdXR0b25zLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEJ1dHRvbnNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWxbal0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9MDsgazxwYW5lbC5sZW5ndGg7aysrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGshPWogJiYgYXV0b1RvZ2dsZSE9J29mZicpIHBhbmVsW2tdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX21vZGFsQ2FsbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGNoLW1vZGFsJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RhbENhbGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb2RhbElkID0gdGhpcy5fbW9kYWxDYWxsZXJzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBtb2RhbElkICYmIGUudGFyZ2V0ID09IG1vZGFsQm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBtb2RhbEJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNvbnRlbnRcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9tb2RhbENhbGxlcnNbaV0uaGFzQXR0cmlidXRlKFwiZG9udC1oaWRlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWxCb2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF0gfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgIC8vc2hvdyBhY3Rpb25cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSB0aGlzLl9tb2RhbENhbGxlcnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgTmF2e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm5hdlwiKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLl9uYXYubGVuZ3RoO2krKylcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTmF2KHRoaXMuX25hdltpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc05hdihuYXYpe1xyXG4gICAgICAgIGxldCBuYXZCdXR0b25zID0gbmF2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3ItbW9iaWxlXCIpWzBdO1xyXG4gICAgICAgIGlmKG5hdkJ1dHRvbnMpe1xyXG4gICAgICAgICAgICBuYXZCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgICAgICBuYXZCdXR0b25zLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgIGxldCB1bEl0ZW1zPSBuYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dWxJdGVtcy5sZW5ndGg7aisrKVxyXG4gICAgICAgICAgICAgICAgICAgIHVsSXRlbXNbal0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCIgICAgZnVuY3Rpb24gYXBwbHlUYWJDaGFuZ2UoZ2V0RGl2VGFyZ2V0LCBnZXRMb2FkT25UYXJnZXRJZCl7XHJcbiAgICAgICAgbGV0IGdldFRhYkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldERpdlRhcmdldCk7XHJcbiAgICAgICAgaWYoZ2V0VGFiRGl2ICYmIGdldFRhYkRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi1jb250ZW50Jykpe1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlRGl2ID0gZ2V0VGFiRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2dldExvYWRPblRhcmdldElkfWApO1xyXG4gICAgICAgICAgICBhY3RpdmVEaXZbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzT25jbGljayhpZCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGxldCBhY3RpdmVDbGFzcyA9IGFjdGl2ZURpdnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYoYWN0aXZlQ2xhc3MpXHJcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8YWN0aXZlQ2xhc3MubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldFRhYigpIHtcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGdldERpdlRhcmdldCxcclxuICAgICAgICAgICAgZ2V0TGlzdEl0ZW1zLFxyXG4gICAgICAgICAgICBnZXRBY3RpdmVDbGFzcyxcclxuICAgICAgICAgICAgbW91c2VPbjtcclxuXHJcbiAgICAgICAgZ2V0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXNlbGVjdG9yJyk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8Z2V0U2VsZWN0b3IubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGdldERpdlRhcmdldCA9IGdldFNlbGVjdG9yW2ldLmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpO1xyXG4gICAgICAgICAgICBtb3VzZU9uID0gZ2V0U2VsZWN0b3JbaV0uZ2V0QXR0cmlidXRlKCdtb3VzZWhvdmVyJyk7XHJcbiAgICAgICAgICAgIGdldEFjdGl2ZUNsYXNzID0gZ2V0U2VsZWN0b3JbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmKGdldEFjdGl2ZUNsYXNzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGFwcGx5VGFiQ2hhbmdlKGdldERpdlRhcmdldCwgZ2V0QWN0aXZlQ2xhc3NbMF0uZ2V0QXR0cmlidXRlKCd0YWItdGFyZ2V0JykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGdldFNlbGVjdG9yW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuVG9FdmVudChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihtb3VzZU9uKXtcclxuICAgICAgICAgICAgICAgIGdldFNlbGVjdG9yW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlblRvRXZlbnQoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpc3RlblRvRXZlbnQoZSkge1xyXG4gICAgICAgICAgICAgICAgZ2V0TGlzdEl0ZW1zID0gZ2V0U2VsZWN0b3JbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajxnZXRMaXN0SXRlbXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TGlzdEl0ZW1zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hcHBseSBjb25kaXRpb25cclxuICAgICAgICAgICAgICAgIGxldCBnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdDtcclxuICAgICAgICAgICAgICAgIGlmKGdldFBhcmVudC5jb250YWlucygndGFiLXNlbGVjdG9yJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzT25jbGljayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVRhYkNoYW5nZShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhYi10YXJnZXQnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZ2V0UGFyZW50LmNvbnRhaW5zKCd0YWItc2VsZWN0b3InKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vayBmb3Igb3RoZXIgbWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5RWxzPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaW5kTGkgPSBxdWVyeUVscy5jbG9zZXN0KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmluZExpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmRMaVRhYiA9IGZpbmRMaS5nZXRBdHRyaWJ1dGUoXCJ0YWItdGFyZ2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kTGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRlZERpdiA9ZmluZExpLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXYtdGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzT25jbGljayh0YXJnZXRlZERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5VGFiQ2hhbmdlKHRhcmdldGVkRGl2LCBmaW5kTGlUYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iLCJleHBvcnQgY2xhc3MgQ2lyY2xlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGNpcmNsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2lyY2xlJyk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZENpcmNsZUVsZW1lbnQoY2lyY2xlc1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNpcmNsZUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXJjbGUnKTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNpcmNsZUNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kQ2lyY2xlRWxlbWVudChjaXJjbGVDbGFzc2VzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmRDaXJjbGVFbGVtZW50KGNpcmNsZSkge1xyXG5cclxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtcmFkaXVzJykpIHtcclxuICAgICAgICAgICAgZ2V0UmFkaXVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpKSB7XHJcbiAgICAgICAgICAgIGdldEJhY2tncm91bmQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJykpIHtcclxuICAgICAgICAgICAgZ2V0Qm9yZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjaXJjbGUuaGFzQXR0cmlidXRlKCd0cmFuc2l0aW9uJykpe1xyXG4gICAgICAgICAgICBnZXRUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zaXRpb24gPWNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nKTtcclxuICAgICAgICAgICAgaWYodHJhbnNpdGlvbj09J29mZicpXHJcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xyXG4gICAgICAgICAgICBsZXQgYm9yZGVyID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm9yZGVyLmluZGV4T2YoJywnKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYm9yZGVyPSBtYXRjaFswXSArICdweCBzb2xpZCAnICsgbWF0Y2hbMV07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlciA9IGJvcmRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyByYWRpdXMgbWV0aG9kIHN0YXJ0XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFkaXVzKCkge1xyXG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtcmFkaXVzJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYWRpdXMucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgICAgICAgICAgbGV0IHVuaXQgPSByYWRpdXMucmVwbGFjZSgvWzAtOV0vZywgJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKSB7XHJcbiAgICAgICAgICAgICAgICB1bml0ID0gJ2VtJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmFkaXVzID0gTnVtYmVyKHZhbHVlKSArIHVuaXQ7XHJcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS53aWR0aCA9IHJhZGl1cztcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmhlaWdodCA9IHJhZGl1cztcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLk1vekJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLldlYmtpdEJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmxpbmVIZWlnaHQ9cmFkaXVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQYXJhbGxlbG9ncmFtIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgcGFyYWxsZWxvZ3JhbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyYWxsZWxvZ3JhbScpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyYWxsZWxvZ3JhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3F1YXJlKHBhcmFsbGVsb2dyYW1zW2ldKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgcGFyYWxsZWxvZ3JhbUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJhbGxlbG9ncmFtJyk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbGxlbG9ncmFtQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTcXVhcmUocGFyYWxsZWxvZ3JhbUNsYXNzZXNbaV0pO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJvY2Vzc1NxdWFyZShwYXJhbGxlbG9ncmFtKXtcclxuXHJcblx0XHRpZiAocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWhlaWdodCcpKXtcclxuXHRcdFx0Z2V0U2hhcGVIZWlnaHQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJykpe1xyXG5cdFx0XHRnZXRTaGFwZVdpZHRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpKXtcclxuXHRcdFx0Z2V0Qm9yZGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHBhcmFsbGVsb2dyYW0uaGFzQXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJykpIHtcclxuXHRcdFx0Z2V0QmFja2dyb3VuZCgpO1xyXG5cdFx0fVxyXG5cdFx0IFxyXG5cclxuXHRcdCBmdW5jdGlvbiBnZXRTaGFwZUhlaWdodCgpe1xyXG5cclxuXHRcdCAgXHRcdGxldCBoZWlnaHQgPSBwYXJhbGxlbG9ncmFtLmdldEF0dHJpYnV0ZSgnc2hhcGUtaGVpZ2h0Jyk7XHJcblx0XHQgIFx0XHQgXHJcblx0XHQgIFx0XHQgbGV0IHggPSBoZWlnaHQucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuXHRcdCAgXHRcdCBsZXQgdW5pdD1oZWlnaHQucmVwbGFjZSgvWzAtOV0vZywgJycpO1xyXG5cdFx0ICBcdFx0IFxyXG5cdFx0ICBcdFx0IGlmICh1bml0ID09ICclJyl7XHJcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XHJcbiAgICAgICAgICAgIFx0XHR9XHJcblxyXG4gICAgICAgIFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLmhlaWdodD0geCt1bml0O1xyXG4gICAgICAgIFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLmxpbmVIZWlnaHQ9aGVpZ2h0O1xyXG5cclxuXHRcdCAgfVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZ2V0U2hhcGVXaWR0aCgpe1xyXG5cdFx0XHRcdGxldCB3aWR0aCA9IHBhcmFsbGVsb2dyYW0uZ2V0QXR0cmlidXRlKCdzaGFwZS13aWR0aCcpO1xyXG5cclxuXHRcdFx0XHQvL3VuaXQgcHJvY2Vzc1xyXG5cclxuXHRcdFx0XHRsZXQgeCA9IHdpZHRoLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdW5pdCA9IHdpZHRoLnJlcGxhY2UoL1swLTldL2csICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICh1bml0ID09ICclJyl7XHJcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XHJcbiAgICAgICAgICAgIFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vcmVjdGFuZ2xlIHByb2Nlc3NcclxuXHRcdFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLndpZHRoPSB4K3VuaXQ7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xyXG5cdCAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gcGFyYWxsZWxvZ3JhbS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKTtcclxuXHQgICAgICAgICAgICBwYXJhbGxlbG9ncmFtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XHJcblx0ICAgICAgICB9XHJcblxyXG5cclxuXHJcblx0ICAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xyXG5cdCAgICAgICAgICAgIGxldCBib3JkZXIgPSBwYXJhbGxlbG9ncmFtLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChib3JkZXIuaW5kZXhPZignLCcpPi0xKSB7XHJcblx0ICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGJvcmRlci5zcGxpdCgvXFxzKixcXHMqLyk7XHJcblx0ICAgICAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgICAgICBwYXJhbGxlbG9ncmFtLnN0eWxlLmJvcmRlcj0gbWF0Y2hbMF0gKyAncHggc29saWQgJyArIG1hdGNoWzFdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgIFx0aWYoYm9yZGVyLm1hdGNoKC9eWzAtOV0rJC8pIT1udWxsKXtcclxuICAgICAgICAgICAgXHRcdFx0cGFyYWxsZWxvZ3JhbS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAncHggc29saWQgZ3JheSc7XHJcblx0ICAgICAgICAgICAgXHR9XHJcblx0ICAgICAgICAgICAgICAgIHBhcmFsbGVsb2dyYW0uc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJyBzb2xpZCBncmF5JztcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdyZWN0YW5nbGUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZWN0YW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWN0YW5nbGUocmVjdGFuZ2xlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlQ2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlY3RhbmdsZScpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlY3RhbmdsZUNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlY3RhbmdsZShyZWN0YW5nbGVDbGFzc2VzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRwcm9jZXNzUmVjdGFuZ2xlKHJlY3RhbmdsZSl7XHJcblxyXG5cdFx0aWYgKHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJykpe1xyXG5cdFx0XHRnZXRTaGFwZVdpZHRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCByZWN0YW5nbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1oZWlnaHQnKSApe1xyXG5cdFx0XHRnZXRTaGFwZUhlaWdodCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpKXtcclxuXHRcdFx0Z2V0Qm9yZGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKSkge1xyXG5cdFx0XHRnZXRCYWNrZ3JvdW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ICBmdW5jdGlvbiBnZXRTaGFwZUhlaWdodCgpe1xyXG5cclxuXHRcdCAgXHRcdGxldCBoZWlnaHQgPSByZWN0YW5nbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1oZWlnaHQnKVxyXG5cdFx0ICBcdFx0IFxyXG5cdFx0ICBcdFx0IGxldCB4ID0gaGVpZ2h0LnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcblx0XHQgIFx0XHQgbGV0IHVuaXQ9aGVpZ2h0LnJlcGxhY2UoL1swLTldL2csICcnKTtcclxuXHRcdCAgXHRcdCBcclxuXHRcdCAgXHRcdCBpZiAodW5pdCA9PSAnJScpe1xyXG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xyXG4gICAgICAgICAgICBcdFx0fVxyXG5cclxuICAgICAgICBcdFx0cmVjdGFuZ2xlLnN0eWxlLmhlaWdodD0geCt1bml0O1xyXG4gICAgICAgIFx0XHRyZWN0YW5nbGUuc3R5bGUubGluZUhlaWdodD1oZWlnaHQ7XHJcblxyXG5cdFx0ICB9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBnZXRTaGFwZVdpZHRoKCl7XHJcblx0XHRcdFx0bGV0IHdpZHRoID0gcmVjdGFuZ2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKTtcclxuXHJcblx0XHRcdFx0Ly91bml0IHByb2Nlc3NcclxuXHJcblx0XHRcdFx0bGV0IHggPSB3aWR0aC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQgPSB3aWR0aC5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAodW5pdCA9PSAnJScpe1xyXG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xyXG4gICAgICAgICAgICBcdFx0fVxyXG5cclxuXHRcdFx0XHQvL3JlY3RhbmdsZSBwcm9jZXNzXHJcblx0XHRcdFx0cmVjdGFuZ2xlLnN0eWxlLndpZHRoPSB4K3VuaXQ7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xyXG5cdCAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gcmVjdGFuZ2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xyXG5cdCAgICAgICAgICAgIHJlY3RhbmdsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xyXG5cdCAgICAgICAgICAgIGxldCBib3JkZXIgPSByZWN0YW5nbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKGJvcmRlci5pbmRleE9mKCcsJyk+LTEpIHtcclxuXHQgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcclxuXHQgICAgICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgICAgIHJlY3RhbmdsZS5zdHlsZS5ib3JkZXI9IG1hdGNoWzBdICsgJ3B4IHNvbGlkICcgKyBtYXRjaFsxXTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICBcdGlmKGJvcmRlci5tYXRjaCgvXlswLTldKyQvKSE9bnVsbCl7XHJcbiAgICAgICAgICAgIFx0XHRcdHJlY3RhbmdsZS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAncHggc29saWQgZ3JheSc7XHJcblx0ICAgICAgICAgICAgXHR9XHJcblx0ICAgICAgICAgICAgICAgIHJlY3RhbmdsZS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAnIHNvbGlkIGdyYXknO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgU3F1YXJlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcXVhcmUnKTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3F1YXJlKHNxdWFyZXNbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBzcXVhcmVDbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3F1YXJlJyk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcXVhcmVDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NxdWFyZShzcXVhcmVDbGFzc2VzW2ldKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByb2Nlc3NTcXVhcmUoc3F1YXJlKXtcclxuXHJcblx0XHRpZiAoc3F1YXJlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKSl7XHJcblx0XHRcdGdldFNoYXBlV2lkdGgoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzcXVhcmUuaGFzQXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKSl7XHJcblx0XHRcdGdldEJvcmRlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzcXVhcmUuaGFzQXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJykpIHtcclxuXHRcdFx0Z2V0QmFja2dyb3VuZCgpO1xyXG5cdFx0fVxyXG5cdFx0IFxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZ2V0U2hhcGVXaWR0aCgpe1xyXG5cdFx0XHRcdHZhciB3aWR0aCA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJyk7XHJcblxyXG5cdFx0XHRcdC8vdW5pdCBwcm9jZXNzXHJcblx0XHRcdFx0dmFyIHZhbHVlID0gd2lkdGgucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgICAgICAgICAgICAgIHZhciB1bml0ID0gd2lkdGgucmVwbGFjZSgvWzAtOV0vZywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKXtcclxuICAgICAgICAgICAgICAgIFx0XHR1bml0ID0gJ2VtJztcclxuICAgICAgICAgICAgXHRcdH1cclxuXHJcblx0XHRcdFx0Ly9zcXVhcmUgcHJvY2Vzc1xyXG5cdFx0XHRcdHNxdWFyZS5zdHlsZS53aWR0aD0gd2lkdGg7XHJcblx0XHRcdFx0c3F1YXJlLnN0eWxlLmhlaWdodD0gdmFsdWUrdW5pdDtcclxuXHRcdFx0XHRzcXVhcmUuc3R5bGUubGluZUhlaWdodD13aWR0aDtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XHJcblx0ICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJyk7XHJcblx0ICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XHJcblx0ICAgICAgICB9XHJcblxyXG5cclxuXHJcblx0ICAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xyXG5cdCAgICAgICAgICAgIHZhciBib3JkZXIgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKGJvcmRlci5pbmRleE9mKCcsJyk+LTEpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcclxuXHQgICAgICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5ib3JkZXI9IG1hdGNoWzBdICsgJ3B4IHNvbGlkICcgKyBtYXRjaFsxXTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcblx0ICAgICAgICAgICAgXHRpZihib3JkZXIubWF0Y2goL15bMC05XSskLykhPW51bGwpe1xyXG4gICAgICAgICAgICBcdFx0XHRzcXVhcmUuc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJ3B4IHNvbGlkIGdyYXknO1xyXG5cdCAgICAgICAgICAgIFx0fVxyXG5cdCAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICcgc29saWQgZ3JheSc7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsIi8qIVxyXG4gKiBTaGFwZWNzcyB2My4wLjBcclxuICogQ29weXJpZ2h0IDIwMTYtMjAxNyBTaGFoYW51ciBTaGFyaWYuXHJcbiAqIGh0dHA6Ly9taWNyb2RyZWFtaXQuY29tXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL01pY3JvRHJlYW1JVC9TaGFwZWNzcy9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5pbXBvcnQge0FjY29yZGlvbn0gZnJvbSBcIi4vY29tcG9uZW50L0FjY29yZGlvblwiO1xyXG5pbXBvcnQge01vZGFsfSBmcm9tIFwiLi9jb21wb25lbnQvTW9kYWxcIjtcclxuaW1wb3J0IHtnZXRUYWJ9IGZyb20gXCIuL2NvbXBvbmVudC9UYWJcIjtcclxuaW1wb3J0IHtOYXZ9IGZyb20gXCIuL2NvbXBvbmVudC9OYXZcIjtcclxuXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL0NpcmNsZVwiO1xyXG5pbXBvcnQge1BhcmFsbGVsb2dyYW19IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvUGFyYWxsZWxvZ3JhbVwiO1xyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vY29tcG9uZW50L3NoYXBlcy9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtTcXVhcmV9IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlXCI7XHJcblxyXG5jb25zdCBjc3MgPSByZXF1aXJlKCcuLi9zYXNzL21haW4uc2NzcycpXHJcbi8vIGltcG9ydCAnLi4vdGVzdC5zY3NzJ1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBuZXcgQWNjb3JkaW9uKCk7XHJcbiAgbmV3IE1vZGFsKCk7XHJcbiAgZ2V0VGFiKCk7XHJcbiAgbmV3IE5hdigpO1xyXG4gIG5ldyBDaXJjbGUoKTtcclxuICBuZXcgUGFyYWxsZWxvZ3JhbSgpO1xyXG4gIG5ldyBSZWN0YW5nbGUoKTtcclxuICBuZXcgU3F1YXJlKCk7XHJcblxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=