export class Accordion{
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

