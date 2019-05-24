export class Square {

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


