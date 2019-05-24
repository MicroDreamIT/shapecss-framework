export class Rectangle {

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


