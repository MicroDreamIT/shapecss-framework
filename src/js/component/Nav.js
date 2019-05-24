export class Nav{
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