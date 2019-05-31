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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvUGFyYWxsZWxvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJB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QUFHbUM7QUFDUjtBQUNEO0FBQ0g7O0FBRWE7QUFDYztBQUNSO0FBQ047O0FBRWpELFlBQVksbUJBQU8sQ0FBQywrQ0FBbUI7QUFDdkM7O0FBRUE7QUFDQSxNQUFNLDhEQUFTO0FBQ2YsTUFBTSxzREFBSztBQUNYLEVBQUUsNkRBQU07QUFDUixNQUFNLGtEQUFHO0FBQ1QsTUFBTSwrREFBTTtBQUNaLE1BQU0sNkVBQWE7QUFDbkIsTUFBTSxxRUFBUztBQUNmLE1BQU0sK0RBQU07O0FBRVo7Ozs7Ozs7Ozs7OztBQ2pDQSx1QyIsImZpbGUiOiJzaGFwZWNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvc2hhcGUuanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQWNjb3JkaW9ue1xuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgICAgdGhpcy5fYWNjb3JkaW9uRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGlvbicpO1xuICAgICAgICAgICAgaWYodGhpcy5fYWNjb3JkaW9uRGl2cylcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0FjY29yZGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzQWNjb3JkaW9ucygpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuX2FjY29yZGlvbkRpdnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkRpdiA9IHRoaXMuX2FjY29yZGlvbkRpdnNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBhbmVsID0gYWNjb3JkaW9uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpO1xuICAgICAgICAgICAgICAgIGxldCBhdXRvVG9nZ2xlPSBhY2NvcmRpb25EaXYuZ2V0QXR0cmlidXRlKCdhdXRvLXRvZ2dsZScpO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRCdXR0b25zID0gYWNjb3JkaW9uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0YXJnZXRCdXR0b25zLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRCdXR0b25zW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lbFtqXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9MDsgazxwYW5lbC5sZW5ndGg7aysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihrIT1qICYmIGF1dG9Ub2dnbGUhPSdvZmYnKSBwYW5lbFtrXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fbW9kYWxDYWxsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2F0Y2gtbW9kYWwnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kYWxDYWxsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsSWQgPSB0aGlzLl9tb2RhbENhbGxlcnNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9IG1vZGFsSWQgJiYgZS50YXJnZXQgPT0gbW9kYWxCb2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBtb2RhbEJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNvbnRlbnRcIikgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fbW9kYWxDYWxsZXJzW2ldLmhhc0F0dHJpYnV0ZShcImRvbnQtaGlkZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsQm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdIHx8IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgLy9zaG93IGFjdGlvblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSB0aGlzLl9tb2RhbENhbGxlcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxufSIsImV4cG9ydCBjbGFzcyBOYXZ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5fbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJuYXZcIik7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuX25hdi5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTmF2KHRoaXMuX25hdltpXSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc05hdihuYXYpe1xuICAgICAgICBsZXQgbmF2QnV0dG9ucyA9IG5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9yLW1vYmlsZVwiKVswXTtcbiAgICAgICAgaWYobmF2QnV0dG9ucyl7XG4gICAgICAgICAgICBuYXZCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgbmF2QnV0dG9ucy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgbGV0IHVsSXRlbXM9IG5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtJyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dWxJdGVtcy5sZW5ndGg7aisrKVxuICAgICAgICAgICAgICAgICAgICB1bEl0ZW1zW2pdLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbWVudScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iLCIgICAgZnVuY3Rpb24gYXBwbHlUYWJDaGFuZ2UoZ2V0RGl2VGFyZ2V0LCBnZXRMb2FkT25UYXJnZXRJZCl7XG4gICAgICAgIGxldCBnZXRUYWJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXREaXZUYXJnZXQpO1xuICAgICAgICBpZihnZXRUYWJEaXYgJiYgZ2V0VGFiRGl2LmNsYXNzTGlzdC5jb250YWlucygndGFiLWNvbnRlbnQnKSl7XG4gICAgICAgICAgICBsZXQgYWN0aXZlRGl2ID0gZ2V0VGFiRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2dldExvYWRPblRhcmdldElkfWApO1xuICAgICAgICAgICAgYWN0aXZlRGl2WzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3NPbmNsaWNrKGlkKSB7XG4gICAgICAgIGxldCBhY3RpdmVEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBsZXQgYWN0aXZlQ2xhc3MgPSBhY3RpdmVEaXZzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpO1xuICAgICAgICBpZihhY3RpdmVDbGFzcylcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8YWN0aXZlQ2xhc3MubGVuZ3RoOyBqKyspXG4gICAgICAgICAgICBhY3RpdmVDbGFzc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldFRhYigpIHtcbiAgICAgICAgbGV0IGdldFNlbGVjdG9yLFxuICAgICAgICAgICAgZ2V0RGl2VGFyZ2V0LFxuICAgICAgICAgICAgZ2V0TGlzdEl0ZW1zLFxuICAgICAgICAgICAgZ2V0QWN0aXZlQ2xhc3MsXG4gICAgICAgICAgICBtb3VzZU9uO1xuXG4gICAgICAgIGdldFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1zZWxlY3RvcicpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxnZXRTZWxlY3Rvci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGdldERpdlRhcmdldCA9IGdldFNlbGVjdG9yW2ldLmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpO1xuICAgICAgICAgICAgbW91c2VPbiA9IGdldFNlbGVjdG9yW2ldLmdldEF0dHJpYnV0ZSgnbW91c2Vob3ZlcicpO1xuICAgICAgICAgICAgZ2V0QWN0aXZlQ2xhc3MgPSBnZXRTZWxlY3RvcltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmKGdldEFjdGl2ZUNsYXNzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBhcHBseVRhYkNoYW5nZShnZXREaXZUYXJnZXQsIGdldEFjdGl2ZUNsYXNzWzBdLmdldEF0dHJpYnV0ZSgndGFiLXRhcmdldCcpKTtcblxuXG4gICAgICAgICAgICBnZXRTZWxlY3RvcltpXS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBsaXN0ZW5Ub0V2ZW50KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKG1vdXNlT24pe1xuICAgICAgICAgICAgICAgIGdldFNlbGVjdG9yW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5Ub0V2ZW50KGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpc3RlblRvRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgIGdldExpc3RJdGVtcyA9IGdldFNlbGVjdG9yW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPGdldExpc3RJdGVtcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgZ2V0TGlzdEl0ZW1zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2FwcGx5IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIGxldCBnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgICAgICAgICAgICBpZihnZXRQYXJlbnQuY29udGFpbnMoJ3RhYi1zZWxlY3RvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzT25jbGljayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGl2LXRhcmdldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlUYWJDaGFuZ2UoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpdi10YXJnZXQnKSwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0YWItdGFyZ2V0JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighZ2V0UGFyZW50LmNvbnRhaW5zKCd0YWItc2VsZWN0b3InKSl7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9sb29rIGZvciBvdGhlciBtZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5RWxzPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmluZExpID0gcXVlcnlFbHMuY2xvc2VzdChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihmaW5kTGkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmRMaVRhYiA9IGZpbmRMaS5nZXRBdHRyaWJ1dGUoXCJ0YWItdGFyZ2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluZExpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldGVkRGl2ID1maW5kTGkucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpdi10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzT25jbGljayh0YXJnZXRlZERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseVRhYkNoYW5nZSh0YXJnZXRlZERpdiwgZmluZExpVGFiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4iLCJleHBvcnQgY2xhc3MgQ2lyY2xlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgY2lyY2xlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjaXJjbGUnKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5maW5kQ2lyY2xlRWxlbWVudChjaXJjbGVzW2ldKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IGNpcmNsZUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXJjbGUnKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2lyY2xlQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5maW5kQ2lyY2xlRWxlbWVudChjaXJjbGVDbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZmluZENpcmNsZUVsZW1lbnQoY2lyY2xlKSB7XG5cbiAgICAgICAgaWYgKGNpcmNsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLXJhZGl1cycpKSB7XG4gICAgICAgICAgICBnZXRSYWRpdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaXJjbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJykpIHtcbiAgICAgICAgICAgIGdldEJhY2tncm91bmQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGNpcmNsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpKSB7XG4gICAgICAgICAgICBnZXRCb3JkZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNpcmNsZS5oYXNBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nKSl7XG4gICAgICAgICAgICBnZXRUcmFuc2l0aW9uKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRyYW5zaXRpb24oKSB7XG4gICAgICAgICAgICBsZXQgdHJhbnNpdGlvbiA9Y2lyY2xlLmdldEF0dHJpYnV0ZSgndHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgaWYodHJhbnNpdGlvbj09J29mZicpXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEJvcmRlcigpIHtcbiAgICAgICAgICAgIGxldCBib3JkZXIgPSBjaXJjbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKTtcblxuICAgICAgICAgICAgaWYgKGJvcmRlci5pbmRleE9mKCcsJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBib3JkZXIuc3BsaXQoL1xccyosXFxzKi8pO1xuXG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlcj0gbWF0Y2hbMF0gKyAncHggc29saWQgJyArIG1hdGNoWzFdO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5ib3JkZXIgPSBib3JkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKTtcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyByYWRpdXMgbWV0aG9kIHN0YXJ0XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhZGl1cygpIHtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBjaXJjbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1yYWRpdXMnKTtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmFkaXVzLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBsZXQgdW5pdCA9IHJhZGl1cy5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XG5cbiAgICAgICAgICAgIGlmICh1bml0ID09ICclJykge1xuICAgICAgICAgICAgICAgIHVuaXQgPSAnZW0nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByYWRpdXMgPSBOdW1iZXIodmFsdWUpICsgdW5pdDtcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS53aWR0aCA9IHJhZGl1cztcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5oZWlnaHQgPSByYWRpdXM7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gTnVtYmVyKHZhbHVlKSAvIDIgKyB1bml0O1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLk1vekJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5XZWJraXRCb3JkZXJSYWRpdXMgPSBOdW1iZXIodmFsdWUpIC8gMiArIHVuaXQ7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUubGluZUhlaWdodD1yYWRpdXM7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFBhcmFsbGVsb2dyYW0ge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgcGFyYWxsZWxvZ3JhbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyYWxsZWxvZ3JhbScpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbGxlbG9ncmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3F1YXJlKHBhcmFsbGVsb2dyYW1zW2ldKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHBhcmFsbGVsb2dyYW1DbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFyYWxsZWxvZ3JhbScpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbGxlbG9ncmFtQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3F1YXJlKHBhcmFsbGVsb2dyYW1DbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuXHR9XG5cblxuXG5cdHByb2Nlc3NTcXVhcmUocGFyYWxsZWxvZ3JhbSl7XG5cblx0XHRpZiAocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWhlaWdodCcpKXtcblx0XHRcdGdldFNoYXBlSGVpZ2h0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmFsbGVsb2dyYW0uaGFzQXR0cmlidXRlKCdzaGFwZS13aWR0aCcpKXtcblx0XHRcdGdldFNoYXBlV2lkdGgoKTtcblx0XHR9XG5cblx0XHRpZihwYXJhbGxlbG9ncmFtLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJykpe1xuXHRcdFx0Z2V0Qm9yZGVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmFsbGVsb2dyYW0uaGFzQXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJykpIHtcblx0XHRcdGdldEJhY2tncm91bmQoKTtcblx0XHR9XG5cdFx0IFxuXG5cdFx0IGZ1bmN0aW9uIGdldFNoYXBlSGVpZ2h0KCl7XG5cblx0XHQgIFx0XHRsZXQgaGVpZ2h0ID0gcGFyYWxsZWxvZ3JhbS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWhlaWdodCcpO1xuXHRcdCAgXHRcdCBcblx0XHQgIFx0XHQgbGV0IHggPSBoZWlnaHQucmVwbGFjZSgvW14wLTldL2csICcnKTtcblx0XHQgIFx0XHQgbGV0IHVuaXQ9aGVpZ2h0LnJlcGxhY2UoL1swLTldL2csICcnKTtcblx0XHQgIFx0XHQgXG5cdFx0ICBcdFx0IGlmICh1bml0ID09ICclJyl7XG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xuICAgICAgICAgICAgXHRcdH1cblxuICAgICAgICBcdFx0cGFyYWxsZWxvZ3JhbS5zdHlsZS5oZWlnaHQ9IHgrdW5pdDtcbiAgICAgICAgXHRcdHBhcmFsbGVsb2dyYW0uc3R5bGUubGluZUhlaWdodD1oZWlnaHQ7XG5cblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0U2hhcGVXaWR0aCgpe1xuXHRcdFx0XHRsZXQgd2lkdGggPSBwYXJhbGxlbG9ncmFtLmdldEF0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKTtcblxuXHRcdFx0XHQvL3VuaXQgcHJvY2Vzc1xuXG5cdFx0XHRcdGxldCB4ID0gd2lkdGgucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdCA9IHdpZHRoLnJlcGxhY2UoL1swLTldL2csICcnKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgPT0gJyUnKXtcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XG4gICAgICAgICAgICBcdFx0fVxuXG5cdFx0XHRcdC8vcmVjdGFuZ2xlIHByb2Nlc3Ncblx0XHRcdFx0cGFyYWxsZWxvZ3JhbS5zdHlsZS53aWR0aD0geCt1bml0O1xuXHRcdFx0fVxuXG5cblx0XHRcdGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XG5cdCAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gcGFyYWxsZWxvZ3JhbS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKTtcblx0ICAgICAgICAgICAgcGFyYWxsZWxvZ3JhbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kO1xuXHQgICAgICAgIH1cblxuXG5cblx0ICAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xuXHQgICAgICAgICAgICBsZXQgYm9yZGVyID0gcGFyYWxsZWxvZ3JhbS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpO1xuXG5cdCAgICAgICAgICAgIGlmIChib3JkZXIuaW5kZXhPZignLCcpPi0xKSB7XG5cdCAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBib3JkZXIuc3BsaXQoL1xccyosXFxzKi8pO1xuXHQgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICBwYXJhbGxlbG9ncmFtLnN0eWxlLmJvcmRlcj0gbWF0Y2hbMF0gKyAncHggc29saWQgJyArIG1hdGNoWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIFx0aWYoYm9yZGVyLm1hdGNoKC9eWzAtOV0rJC8pIT1udWxsKXtcbiAgICAgICAgICAgIFx0XHRcdHBhcmFsbGVsb2dyYW0uc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJ3B4IHNvbGlkIGdyYXknO1xuXHQgICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICAgICAgIHBhcmFsbGVsb2dyYW0uc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJyBzb2xpZCBncmF5Jztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHR9XG5cblxufVxuXG5cbiIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuXG5cdFx0Y29uc3RydWN0b3IoKXtcblxuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdyZWN0YW5nbGUnKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlY3RhbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWN0YW5nbGUocmVjdGFuZ2xlc1tpXSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWN0YW5nbGUnKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlY3RhbmdsZUNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWN0YW5nbGUocmVjdGFuZ2xlQ2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICB9XG5cblx0XHR9XG5cblxuXG5cdHByb2Nlc3NSZWN0YW5nbGUocmVjdGFuZ2xlKXtcblxuXHRcdGlmIChyZWN0YW5nbGUuaGFzQXR0cmlidXRlKCdzaGFwZS13aWR0aCcpKXtcblx0XHRcdGdldFNoYXBlV2lkdGgoKTtcblx0XHR9XG5cblx0XHRpZiAoIHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWhlaWdodCcpICl7XG5cdFx0XHRnZXRTaGFwZUhlaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmKHJlY3RhbmdsZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpKXtcblx0XHRcdGdldEJvcmRlcigpO1xuXHRcdH1cblxuXHRcdGlmIChyZWN0YW5nbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJykpIHtcblx0XHRcdGdldEJhY2tncm91bmQoKTtcblx0XHR9XG5cblx0XHQgIGZ1bmN0aW9uIGdldFNoYXBlSGVpZ2h0KCl7XG5cblx0XHQgIFx0XHRsZXQgaGVpZ2h0ID0gcmVjdGFuZ2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtaGVpZ2h0Jylcblx0XHQgIFx0XHQgXG5cdFx0ICBcdFx0IGxldCB4ID0gaGVpZ2h0LnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG5cdFx0ICBcdFx0IGxldCB1bml0PWhlaWdodC5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XG5cdFx0ICBcdFx0IFxuXHRcdCAgXHRcdCBpZiAodW5pdCA9PSAnJScpe1xuICAgICAgICAgICAgICAgIFx0XHR1bml0ID0gJ2VtJztcbiAgICAgICAgICAgIFx0XHR9XG5cbiAgICAgICAgXHRcdHJlY3RhbmdsZS5zdHlsZS5oZWlnaHQ9IHgrdW5pdDtcbiAgICAgICAgXHRcdHJlY3RhbmdsZS5zdHlsZS5saW5lSGVpZ2h0PWhlaWdodDtcblxuXHRcdCAgfVxuXG5cdFx0XHRmdW5jdGlvbiBnZXRTaGFwZVdpZHRoKCl7XG5cdFx0XHRcdGxldCB3aWR0aCA9IHJlY3RhbmdsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJyk7XG5cblx0XHRcdFx0Ly91bml0IHByb2Nlc3NcblxuXHRcdFx0XHRsZXQgeCA9IHdpZHRoLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXQgPSB3aWR0aC5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh1bml0ID09ICclJyl7XG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xuICAgICAgICAgICAgXHRcdH1cblxuXHRcdFx0XHQvL3JlY3RhbmdsZSBwcm9jZXNzXG5cdFx0XHRcdHJlY3RhbmdsZS5zdHlsZS53aWR0aD0geCt1bml0O1xuXHRcdFx0fVxuXG5cblx0XHRcdGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XG5cdCAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gcmVjdGFuZ2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xuXHQgICAgICAgICAgICByZWN0YW5nbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcblx0ICAgICAgICB9XG5cblxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0Qm9yZGVyKCkge1xuXHQgICAgICAgICAgICBsZXQgYm9yZGVyID0gcmVjdGFuZ2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XG5cblx0ICAgICAgICAgICAgaWYgKGJvcmRlci5pbmRleE9mKCcsJyk+LTEpIHtcblx0ICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGJvcmRlci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cdCAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgIHJlY3RhbmdsZS5zdHlsZS5ib3JkZXI9IG1hdGNoWzBdICsgJ3B4IHNvbGlkICcgKyBtYXRjaFsxXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBcdGlmKGJvcmRlci5tYXRjaCgvXlswLTldKyQvKSE9bnVsbCl7XG4gICAgICAgICAgICBcdFx0XHRyZWN0YW5nbGUuc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJ3B4IHNvbGlkIGdyYXknO1xuXHQgICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICAgICAgIHJlY3RhbmdsZS5zdHlsZS5ib3JkZXIgPSBib3JkZXIgKyAnIHNvbGlkIGdyYXknO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdH1cblxuXG59XG5cblxuIiwiZXhwb3J0IGNsYXNzIFNxdWFyZSB7XG5cblx0Y29uc3RydWN0b3IoKXtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NxdWFyZScpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTcXVhcmUoc3F1YXJlc1tpXSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBzcXVhcmVDbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3F1YXJlJyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNxdWFyZUNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NxdWFyZShzcXVhcmVDbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuXHR9XG5cblxuXG5cdHByb2Nlc3NTcXVhcmUoc3F1YXJlKXtcblxuXHRcdGlmIChzcXVhcmUuaGFzQXR0cmlidXRlKCdzaGFwZS13aWR0aCcpKXtcblx0XHRcdGdldFNoYXBlV2lkdGgoKTtcblx0XHR9XG5cblx0XHRpZihzcXVhcmUuaGFzQXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKSl7XG5cdFx0XHRnZXRCb3JkZXIoKTtcblx0XHR9XG5cblx0XHRpZiAoc3F1YXJlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpKSB7XG5cdFx0XHRnZXRCYWNrZ3JvdW5kKCk7XG5cdFx0fVxuXHRcdCBcblxuXHRcdFx0ZnVuY3Rpb24gZ2V0U2hhcGVXaWR0aCgpe1xuXHRcdFx0XHR2YXIgd2lkdGggPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdzaGFwZS13aWR0aCcpO1xuXG5cdFx0XHRcdC8vdW5pdCBwcm9jZXNzXG5cdFx0XHRcdHZhciB2YWx1ZSA9IHdpZHRoLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIHVuaXQgPSB3aWR0aC5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh1bml0ID09ICclJyl7XG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xuICAgICAgICAgICAgXHRcdH1cblxuXHRcdFx0XHQvL3NxdWFyZSBwcm9jZXNzXG5cdFx0XHRcdHNxdWFyZS5zdHlsZS53aWR0aD0gd2lkdGg7XG5cdFx0XHRcdHNxdWFyZS5zdHlsZS5oZWlnaHQ9IHZhbHVlK3VuaXQ7XG5cdFx0XHRcdHNxdWFyZS5zdHlsZS5saW5lSGVpZ2h0PXdpZHRoO1xuXHRcdFx0fVxuXG5cblx0XHRcdGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XG5cdCAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpO1xuXHQgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcblx0ICAgICAgICB9XG5cblxuXG5cdCAgICAgICAgIGZ1bmN0aW9uIGdldEJvcmRlcigpIHtcblx0ICAgICAgICAgICAgdmFyIGJvcmRlciA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpO1xuXG5cdCAgICAgICAgICAgIGlmIChib3JkZXIuaW5kZXhPZignLCcpPi0xKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBib3JkZXIuc3BsaXQoL1xccyosXFxzKi8pO1xuXHQgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYm9yZGVyPSBtYXRjaFswXSArICdweCBzb2xpZCAnICsgbWF0Y2hbMV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblxuXHQgICAgICAgICAgICBcdGlmKGJvcmRlci5tYXRjaCgvXlswLTldKyQvKSE9bnVsbCl7XG4gICAgICAgICAgICBcdFx0XHRzcXVhcmUuc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJ3B4IHNvbGlkIGdyYXknO1xuXHQgICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJyBzb2xpZCBncmF5Jztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHR9XG5cblxufVxuXG5cbiIsIi8qIVxuICogU2hhcGVjc3MgdjMuMC4wXG4gKiBDb3B5cmlnaHQgMjAxNi0yMDE3IFNoYWhhbnVyIFNoYXJpZi5cbiAqIGh0dHA6Ly9taWNyb2RyZWFtaXQuY29tXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb0RyZWFtSVQvU2hhcGVjc3MvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IHtBY2NvcmRpb259IGZyb20gXCIuL2NvbXBvbmVudC9BY2NvcmRpb25cIjtcbmltcG9ydCB7TW9kYWx9IGZyb20gXCIuL2NvbXBvbmVudC9Nb2RhbFwiO1xuaW1wb3J0IHtnZXRUYWJ9IGZyb20gXCIuL2NvbXBvbmVudC9UYWJcIjtcbmltcG9ydCB7TmF2fSBmcm9tIFwiLi9jb21wb25lbnQvTmF2XCI7XG5cbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL0NpcmNsZVwiO1xuaW1wb3J0IHtQYXJhbGxlbG9ncmFtfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL1BhcmFsbGVsb2dyYW1cIjtcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9jb21wb25lbnQvc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlXCI7XG5cbmNvbnN0IGNzcyA9IHJlcXVpcmUoJy4uL3Nhc3MvbWFpbi5zY3NzJylcbi8vIGltcG9ydCAnLi4vdGVzdC5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBuZXcgQWNjb3JkaW9uKCk7XG4gIG5ldyBNb2RhbCgpO1xuICBnZXRUYWIoKTtcbiAgbmV3IE5hdigpO1xuICBuZXcgQ2lyY2xlKCk7XG4gIG5ldyBQYXJhbGxlbG9ncmFtKCk7XG4gIG5ldyBSZWN0YW5nbGUoKTtcbiAgbmV3IFNxdWFyZSgpO1xuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9