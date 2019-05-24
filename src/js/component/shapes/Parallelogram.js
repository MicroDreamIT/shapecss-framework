export class Parallelogram {

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


