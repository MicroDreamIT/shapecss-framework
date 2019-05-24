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
/******/ 	__webpack_require__.p = "";
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvUGFyYWxsZWxvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3NoYXBlcy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9zaGFwZXMvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaGFwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtB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UjtBQUNOOzs7QUFHakQ7QUFDQSxNQUFNLDhEQUFTO0FBQ2YsTUFBTSxzREFBSztBQUNYLEVBQUUsNkRBQU07QUFDUixNQUFNLGtEQUFHO0FBQ1QsTUFBTSwrREFBTTtBQUNaLE1BQU0sNkVBQWE7QUFDbkIsTUFBTSxxRUFBUztBQUNmLE1BQU0sK0RBQU07O0FBRVosQyIsImZpbGUiOiJzaGFwZWNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3NoYXBlLmpzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIEFjY29yZGlvbntcbiAgICAgICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgICAgIHRoaXMuX2FjY29yZGlvbkRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb24nKTtcbiAgICAgICAgICAgIGlmKHRoaXMuX2FjY29yZGlvbkRpdnMpXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NBY2NvcmRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0FjY29yZGlvbnMoKSB7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLl9hY2NvcmRpb25EaXZzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25EaXYgPSB0aGlzLl9hY2NvcmRpb25EaXZzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwYW5lbCA9IGFjY29yZGlvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgYXV0b1RvZ2dsZT0gYWNjb3JkaW9uRGl2LmdldEF0dHJpYnV0ZSgnYXV0by10b2dnbGUnKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0QnV0dG9ucyA9IGFjY29yZGlvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dGFyZ2V0QnV0dG9ucy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnV0dG9uc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWxbal0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrPTA7IGs8cGFuZWwubGVuZ3RoO2srKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoayE9aiAmJiBhdXRvVG9nZ2xlIT0nb2ZmJykgcGFuZWxba10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiIsImV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX21vZGFsQ2FsbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGNoLW1vZGFsJyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGFsQ2FsbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBtb2RhbElkID0gdGhpcy5fbW9kYWxDYWxsZXJzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKTtcblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBtb2RhbElkICYmIGUudGFyZ2V0ID09IG1vZGFsQm9keSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT0gbW9kYWxCb2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1jb250ZW50XCIpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuX21vZGFsQ2FsbGVyc1tpXS5oYXNBdHRyaWJ1dGUoXCJkb250LWhpZGVcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbEJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXSB8fCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgIC8vc2hvdyBhY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gdGhpcy5fbW9kYWxDYWxsZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cbn0iLCJleHBvcnQgY2xhc3MgTmF2e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuX25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibmF2XCIpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLl9uYXYubGVuZ3RoO2krKylcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc05hdih0aGlzLl9uYXZbaV0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NOYXYobmF2KXtcbiAgICAgICAgbGV0IG5hdkJ1dHRvbnMgPSBuYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvci1tb2JpbGVcIilbMF07XG4gICAgICAgIGlmKG5hdkJ1dHRvbnMpe1xuICAgICAgICAgICAgbmF2QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgIG5hdkJ1dHRvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGxldCB1bEl0ZW1zPSBuYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbScpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHVsSXRlbXMubGVuZ3RoO2orKylcbiAgICAgICAgICAgICAgICAgICAgdWxJdGVtc1tqXS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG59IiwiICAgIGZ1bmN0aW9uIGFwcGx5VGFiQ2hhbmdlKGdldERpdlRhcmdldCwgZ2V0TG9hZE9uVGFyZ2V0SWQpe1xuICAgICAgICBsZXQgZ2V0VGFiRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0RGl2VGFyZ2V0KTtcbiAgICAgICAgaWYoZ2V0VGFiRGl2ICYmIGdldFRhYkRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi1jb250ZW50Jykpe1xuICAgICAgICAgICAgbGV0IGFjdGl2ZURpdiA9IGdldFRhYkRpdi5xdWVyeVNlbGVjdG9yQWxsKGAjJHtnZXRMb2FkT25UYXJnZXRJZH1gKTtcbiAgICAgICAgICAgIGFjdGl2ZURpdlswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzT25jbGljayhpZCkge1xuICAgICAgICBsZXQgYWN0aXZlRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gYWN0aXZlRGl2cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKTtcbiAgICAgICAgaWYoYWN0aXZlQ2xhc3MpXG4gICAgICAgIGZvcihsZXQgaj0wOyBqPGFjdGl2ZUNsYXNzLmxlbmd0aDsgaisrKVxuICAgICAgICAgICAgYWN0aXZlQ2xhc3Nbal0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRUYWIoKSB7XG4gICAgICAgIGxldCBnZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGdldERpdlRhcmdldCxcbiAgICAgICAgICAgIGdldExpc3RJdGVtcyxcbiAgICAgICAgICAgIGdldEFjdGl2ZUNsYXNzLFxuICAgICAgICAgICAgbW91c2VPbjtcblxuICAgICAgICBnZXRTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc2VsZWN0b3InKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8Z2V0U2VsZWN0b3IubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBnZXREaXZUYXJnZXQgPSBnZXRTZWxlY3RvcltpXS5nZXRBdHRyaWJ1dGUoJ2Rpdi10YXJnZXQnKTtcbiAgICAgICAgICAgIG1vdXNlT24gPSBnZXRTZWxlY3RvcltpXS5nZXRBdHRyaWJ1dGUoJ21vdXNlaG92ZXInKTtcbiAgICAgICAgICAgIGdldEFjdGl2ZUNsYXNzID0gZ2V0U2VsZWN0b3JbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihnZXRBY3RpdmVDbGFzcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgYXBwbHlUYWJDaGFuZ2UoZ2V0RGl2VGFyZ2V0LCBnZXRBY3RpdmVDbGFzc1swXS5nZXRBdHRyaWJ1dGUoJ3RhYi10YXJnZXQnKSk7XG5cblxuICAgICAgICAgICAgZ2V0U2VsZWN0b3JbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgbGlzdGVuVG9FdmVudChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihtb3VzZU9uKXtcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RvcltpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuVG9FdmVudChlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50KGUpIHtcbiAgICAgICAgICAgICAgICBnZXRMaXN0SXRlbXMgPSBnZXRTZWxlY3RvcltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajxnZXRMaXN0SXRlbXMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICAgIGdldExpc3RJdGVtc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9hcHBseSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICBsZXQgZ2V0UGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYoZ2V0UGFyZW50LmNvbnRhaW5zKCd0YWItc2VsZWN0b3InKSl7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBY3RpdmVDbGFzc09uY2xpY2soZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpdi10YXJnZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5VGFiQ2hhbmdlKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXYtdGFyZ2V0JyksIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFiLXRhcmdldCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIWdldFBhcmVudC5jb250YWlucygndGFiLXNlbGVjdG9yJykpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vayBmb3Igb3RoZXIgbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWVyeUVscz0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmRMaSA9IHF1ZXJ5RWxzLmNsb3Nlc3QoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZmluZExpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5kTGlUYWIgPSBmaW5kTGkuZ2V0QXR0cmlidXRlKFwidGFiLXRhcmdldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRMaS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRlZERpdiA9ZmluZExpLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXYtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVBY3RpdmVDbGFzc09uY2xpY2sodGFyZ2V0ZWREaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlUYWJDaGFuZ2UodGFyZ2V0ZWREaXYsIGZpbmRMaVRhYik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuIiwiZXhwb3J0IGNsYXNzIENpcmNsZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IGNpcmNsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2lyY2xlJyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNpcmNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmluZENpcmNsZUVsZW1lbnQoY2lyY2xlc1tpXSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBjaXJjbGVDbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2lyY2xlJyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNpcmNsZUNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmluZENpcmNsZUVsZW1lbnQoY2lyY2xlQ2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZpbmRDaXJjbGVFbGVtZW50KGNpcmNsZSkge1xuXG4gICAgICAgIGlmIChjaXJjbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1yYWRpdXMnKSkge1xuICAgICAgICAgICAgZ2V0UmFkaXVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2lyY2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgICBnZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChjaXJjbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKSkge1xuICAgICAgICAgICAgZ2V0Qm9yZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjaXJjbGUuaGFzQXR0cmlidXRlKCd0cmFuc2l0aW9uJykpe1xuICAgICAgICAgICAgZ2V0VHJhbnNpdGlvbigpO1xuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHRyYW5zaXRpb24gPWNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIGlmKHRyYW5zaXRpb249PSdvZmYnKVxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRCb3JkZXIoKSB7XG4gICAgICAgICAgICBsZXQgYm9yZGVyID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChib3JkZXIuaW5kZXhPZignLCcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcblxuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5ib3JkZXI9IG1hdGNoWzBdICsgJ3B4IHNvbGlkICcgKyBtYXRjaFsxXTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYm9yZGVyID0gYm9yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xuICAgICAgICAgICAgbGV0IGJhY2tncm91bmQgPSBjaXJjbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gcmFkaXVzIG1ldGhvZCBzdGFydFxuICAgICAgICBmdW5jdGlvbiBnZXRSYWRpdXMoKSB7XG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgnc2hhcGUtcmFkaXVzJyk7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhZGl1cy5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgbGV0IHVuaXQgPSByYWRpdXMucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuXG4gICAgICAgICAgICBpZiAodW5pdCA9PSAnJScpIHtcbiAgICAgICAgICAgICAgICB1bml0ID0gJ2VtJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmFkaXVzID0gTnVtYmVyKHZhbHVlKSArIHVuaXQ7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUud2lkdGggPSByYWRpdXM7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuaGVpZ2h0ID0gcmFkaXVzO1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlclJhZGl1cyA9IE51bWJlcih2YWx1ZSkgLyAyICsgdW5pdDtcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5Nb3pCb3JkZXJSYWRpdXMgPSBOdW1iZXIodmFsdWUpIC8gMiArIHVuaXQ7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuV2Via2l0Qm9yZGVyUmFkaXVzID0gTnVtYmVyKHZhbHVlKSAvIDIgKyB1bml0O1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmxpbmVIZWlnaHQ9cmFkaXVzO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBQYXJhbGxlbG9ncmFtIHtcblxuXHRjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHBhcmFsbGVsb2dyYW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhcmFsbGVsb2dyYW0nKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyYWxsZWxvZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NxdWFyZShwYXJhbGxlbG9ncmFtc1tpXSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBwYXJhbGxlbG9ncmFtQ2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhcmFsbGVsb2dyYW0nKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyYWxsZWxvZ3JhbUNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NxdWFyZShwYXJhbGxlbG9ncmFtQ2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cblx0fVxuXG5cblxuXHRwcm9jZXNzU3F1YXJlKHBhcmFsbGVsb2dyYW0pe1xuXG5cdFx0aWYgKHBhcmFsbGVsb2dyYW0uaGFzQXR0cmlidXRlKCdzaGFwZS1oZWlnaHQnKSl7XG5cdFx0XHRnZXRTaGFwZUhlaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJhbGxlbG9ncmFtLmhhc0F0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKSl7XG5cdFx0XHRnZXRTaGFwZVdpZHRoKCk7XG5cdFx0fVxuXG5cdFx0aWYocGFyYWxsZWxvZ3JhbS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpKXtcblx0XHRcdGdldEJvcmRlcigpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJhbGxlbG9ncmFtLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpKSB7XG5cdFx0XHRnZXRCYWNrZ3JvdW5kKCk7XG5cdFx0fVxuXHRcdCBcblxuXHRcdCBmdW5jdGlvbiBnZXRTaGFwZUhlaWdodCgpe1xuXG5cdFx0ICBcdFx0bGV0IGhlaWdodCA9IHBhcmFsbGVsb2dyYW0uZ2V0QXR0cmlidXRlKCdzaGFwZS1oZWlnaHQnKTtcblx0XHQgIFx0XHQgXG5cdFx0ICBcdFx0IGxldCB4ID0gaGVpZ2h0LnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG5cdFx0ICBcdFx0IGxldCB1bml0PWhlaWdodC5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XG5cdFx0ICBcdFx0IFxuXHRcdCAgXHRcdCBpZiAodW5pdCA9PSAnJScpe1xuICAgICAgICAgICAgICAgIFx0XHR1bml0ID0gJ2VtJztcbiAgICAgICAgICAgIFx0XHR9XG5cbiAgICAgICAgXHRcdHBhcmFsbGVsb2dyYW0uc3R5bGUuaGVpZ2h0PSB4K3VuaXQ7XG4gICAgICAgIFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLmxpbmVIZWlnaHQ9aGVpZ2h0O1xuXG5cdFx0ICB9XG5cblx0XHRcdGZ1bmN0aW9uIGdldFNoYXBlV2lkdGgoKXtcblx0XHRcdFx0bGV0IHdpZHRoID0gcGFyYWxsZWxvZ3JhbS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLXdpZHRoJyk7XG5cblx0XHRcdFx0Ly91bml0IHByb2Nlc3NcblxuXHRcdFx0XHRsZXQgeCA9IHdpZHRoLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXQgPSB3aWR0aC5yZXBsYWNlKC9bMC05XS9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh1bml0ID09ICclJyl7XG4gICAgICAgICAgICAgICAgXHRcdHVuaXQgPSAnZW0nO1xuICAgICAgICAgICAgXHRcdH1cblxuXHRcdFx0XHQvL3JlY3RhbmdsZSBwcm9jZXNzXG5cdFx0XHRcdHBhcmFsbGVsb2dyYW0uc3R5bGUud2lkdGg9IHgrdW5pdDtcblx0XHRcdH1cblxuXG5cdFx0XHRmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xuXHQgICAgICAgICAgICBsZXQgYmFja2dyb3VuZCA9IHBhcmFsbGVsb2dyYW0uZ2V0QXR0cmlidXRlKCdzaGFwZS1iYWNrZ3JvdW5kJyk7XG5cdCAgICAgICAgICAgIHBhcmFsbGVsb2dyYW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcblx0ICAgICAgICB9XG5cblxuXG5cdCAgICAgICAgIGZ1bmN0aW9uIGdldEJvcmRlcigpIHtcblx0ICAgICAgICAgICAgbGV0IGJvcmRlciA9IHBhcmFsbGVsb2dyYW0uZ2V0QXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKTtcblxuXHQgICAgICAgICAgICBpZiAoYm9yZGVyLmluZGV4T2YoJywnKT4tMSkge1xuXHQgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcblx0ICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgcGFyYWxsZWxvZ3JhbS5zdHlsZS5ib3JkZXI9IG1hdGNoWzBdICsgJ3B4IHNvbGlkICcgKyBtYXRjaFsxXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBcdGlmKGJvcmRlci5tYXRjaCgvXlswLTldKyQvKSE9bnVsbCl7XG4gICAgICAgICAgICBcdFx0XHRwYXJhbGxlbG9ncmFtLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICdweCBzb2xpZCBncmF5Jztcblx0ICAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgICAgICBwYXJhbGxlbG9ncmFtLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICcgc29saWQgZ3JheSc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0fVxuXG5cbn1cblxuXG4iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcblxuXHRcdGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncmVjdGFuZ2xlJyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZWN0YW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVjdGFuZ2xlKHJlY3RhbmdsZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVDbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVjdGFuZ2xlJyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZWN0YW5nbGVDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVjdGFuZ2xlKHJlY3RhbmdsZUNsYXNzZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG5cdFx0fVxuXG5cblxuXHRwcm9jZXNzUmVjdGFuZ2xlKHJlY3RhbmdsZSl7XG5cblx0XHRpZiAocmVjdGFuZ2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKSl7XG5cdFx0XHRnZXRTaGFwZVdpZHRoKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCByZWN0YW5nbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1oZWlnaHQnKSApe1xuXHRcdFx0Z2V0U2hhcGVIZWlnaHQoKTtcblx0XHR9XG5cblx0XHRpZihyZWN0YW5nbGUuaGFzQXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKSl7XG5cdFx0XHRnZXRCb3JkZXIoKTtcblx0XHR9XG5cblx0XHRpZiAocmVjdGFuZ2xlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYmFja2dyb3VuZCcpKSB7XG5cdFx0XHRnZXRCYWNrZ3JvdW5kKCk7XG5cdFx0fVxuXG5cdFx0ICBmdW5jdGlvbiBnZXRTaGFwZUhlaWdodCgpe1xuXG5cdFx0ICBcdFx0bGV0IGhlaWdodCA9IHJlY3RhbmdsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWhlaWdodCcpXG5cdFx0ICBcdFx0IFxuXHRcdCAgXHRcdCBsZXQgeCA9IGhlaWdodC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuXHRcdCAgXHRcdCBsZXQgdW5pdD1oZWlnaHQucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuXHRcdCAgXHRcdCBcblx0XHQgIFx0XHQgaWYgKHVuaXQgPT0gJyUnKXtcbiAgICAgICAgICAgICAgICBcdFx0dW5pdCA9ICdlbSc7XG4gICAgICAgICAgICBcdFx0fVxuXG4gICAgICAgIFx0XHRyZWN0YW5nbGUuc3R5bGUuaGVpZ2h0PSB4K3VuaXQ7XG4gICAgICAgIFx0XHRyZWN0YW5nbGUuc3R5bGUubGluZUhlaWdodD1oZWlnaHQ7XG5cblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0U2hhcGVXaWR0aCgpe1xuXHRcdFx0XHRsZXQgd2lkdGggPSByZWN0YW5nbGUuZ2V0QXR0cmlidXRlKCdzaGFwZS13aWR0aCcpO1xuXG5cdFx0XHRcdC8vdW5pdCBwcm9jZXNzXG5cblx0XHRcdFx0bGV0IHggPSB3aWR0aC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgIGxldCB1bml0ID0gd2lkdGgucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodW5pdCA9PSAnJScpe1xuICAgICAgICAgICAgICAgIFx0XHR1bml0ID0gJ2VtJztcbiAgICAgICAgICAgIFx0XHR9XG5cblx0XHRcdFx0Ly9yZWN0YW5nbGUgcHJvY2Vzc1xuXHRcdFx0XHRyZWN0YW5nbGUuc3R5bGUud2lkdGg9IHgrdW5pdDtcblx0XHRcdH1cblxuXG5cdFx0XHRmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xuXHQgICAgICAgICAgICBsZXQgYmFja2dyb3VuZCA9IHJlY3RhbmdsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKTtcblx0ICAgICAgICAgICAgcmVjdGFuZ2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG5cdCAgICAgICAgfVxuXG5cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEJvcmRlcigpIHtcblx0ICAgICAgICAgICAgbGV0IGJvcmRlciA9IHJlY3RhbmdsZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJvcmRlcicpO1xuXG5cdCAgICAgICAgICAgIGlmIChib3JkZXIuaW5kZXhPZignLCcpPi0xKSB7XG5cdCAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBib3JkZXIuc3BsaXQoL1xccyosXFxzKi8pO1xuXHQgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICByZWN0YW5nbGUuc3R5bGUuYm9yZGVyPSBtYXRjaFswXSArICdweCBzb2xpZCAnICsgbWF0Y2hbMV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgXHRpZihib3JkZXIubWF0Y2goL15bMC05XSskLykhPW51bGwpe1xuICAgICAgICAgICAgXHRcdFx0cmVjdGFuZ2xlLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICdweCBzb2xpZCBncmF5Jztcblx0ICAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgICAgICByZWN0YW5nbGUuc3R5bGUuYm9yZGVyID0gYm9yZGVyICsgJyBzb2xpZCBncmF5Jztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHR9XG5cblxufVxuXG5cbiIsImV4cG9ydCBjbGFzcyBTcXVhcmUge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcXVhcmUnKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3F1YXJlKHNxdWFyZXNbaV0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgc3F1YXJlQ2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NxdWFyZScpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcXVhcmVDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTcXVhcmUoc3F1YXJlQ2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cblx0fVxuXG5cblxuXHRwcm9jZXNzU3F1YXJlKHNxdWFyZSl7XG5cblx0XHRpZiAoc3F1YXJlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKSl7XG5cdFx0XHRnZXRTaGFwZVdpZHRoKCk7XG5cdFx0fVxuXG5cdFx0aWYoc3F1YXJlLmhhc0F0dHJpYnV0ZSgnc2hhcGUtYm9yZGVyJykpe1xuXHRcdFx0Z2V0Qm9yZGVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNxdWFyZS5oYXNBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKSkge1xuXHRcdFx0Z2V0QmFja2dyb3VuZCgpO1xuXHRcdH1cblx0XHQgXG5cblx0XHRcdGZ1bmN0aW9uIGdldFNoYXBlV2lkdGgoKXtcblx0XHRcdFx0dmFyIHdpZHRoID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnc2hhcGUtd2lkdGgnKTtcblxuXHRcdFx0XHQvL3VuaXQgcHJvY2Vzc1xuXHRcdFx0XHR2YXIgdmFsdWUgPSB3aWR0aC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgIHZhciB1bml0ID0gd2lkdGgucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodW5pdCA9PSAnJScpe1xuICAgICAgICAgICAgICAgIFx0XHR1bml0ID0gJ2VtJztcbiAgICAgICAgICAgIFx0XHR9XG5cblx0XHRcdFx0Ly9zcXVhcmUgcHJvY2Vzc1xuXHRcdFx0XHRzcXVhcmUuc3R5bGUud2lkdGg9IHdpZHRoO1xuXHRcdFx0XHRzcXVhcmUuc3R5bGUuaGVpZ2h0PSB2YWx1ZSt1bml0O1xuXHRcdFx0XHRzcXVhcmUuc3R5bGUubGluZUhlaWdodD13aWR0aDtcblx0XHRcdH1cblxuXG5cdFx0XHRmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xuXHQgICAgICAgICAgICB2YXIgYmFja2dyb3VuZCA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlLWJhY2tncm91bmQnKTtcblx0ICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG5cdCAgICAgICAgfVxuXG5cblxuXHQgICAgICAgICBmdW5jdGlvbiBnZXRCb3JkZXIoKSB7XG5cdCAgICAgICAgICAgIHZhciBib3JkZXIgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdzaGFwZS1ib3JkZXInKTtcblxuXHQgICAgICAgICAgICBpZiAoYm9yZGVyLmluZGV4T2YoJywnKT4tMSkge1xuXHQgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gYm9yZGVyLnNwbGl0KC9cXHMqLFxccyovKTtcblx0ICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJvcmRlcj0gbWF0Y2hbMF0gKyAncHggc29saWQgJyArIG1hdGNoWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cblx0ICAgICAgICAgICAgXHRpZihib3JkZXIubWF0Y2goL15bMC05XSskLykhPW51bGwpe1xuICAgICAgICAgICAgXHRcdFx0c3F1YXJlLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICdweCBzb2xpZCBncmF5Jztcblx0ICAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJvcmRlciA9IGJvcmRlciArICcgc29saWQgZ3JheSc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0fVxuXG5cbn1cblxuXG4iLCIvKiFcbiAqIFNoYXBlY3NzIHYzLjAuMFxuICogQ29weXJpZ2h0IDIwMTYtMjAxNyBTaGFoYW51ciBTaGFyaWYuXG4gKiBodHRwOi8vbWljcm9kcmVhbWl0LmNvbVxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vTWljcm9EcmVhbUlUL1NoYXBlY3NzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge0FjY29yZGlvbn0gZnJvbSBcIi4vY29tcG9uZW50L0FjY29yZGlvblwiO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSBcIi4vY29tcG9uZW50L01vZGFsXCI7XG5pbXBvcnQge2dldFRhYn0gZnJvbSBcIi4vY29tcG9uZW50L1RhYlwiO1xuaW1wb3J0IHtOYXZ9IGZyb20gXCIuL2NvbXBvbmVudC9OYXZcIjtcblxuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvQ2lyY2xlXCI7XG5pbXBvcnQge1BhcmFsbGVsb2dyYW19IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvUGFyYWxsZWxvZ3JhbVwiO1xuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL2NvbXBvbmVudC9zaGFwZXMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQge1NxdWFyZX0gZnJvbSBcIi4vY29tcG9uZW50L3NoYXBlcy9TcXVhcmVcIjtcblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBuZXcgQWNjb3JkaW9uKCk7XG4gIG5ldyBNb2RhbCgpO1xuICBnZXRUYWIoKTtcbiAgbmV3IE5hdigpO1xuICBuZXcgQ2lyY2xlKCk7XG4gIG5ldyBQYXJhbGxlbG9ncmFtKCk7XG4gIG5ldyBSZWN0YW5nbGUoKTtcbiAgbmV3IFNxdWFyZSgpO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==