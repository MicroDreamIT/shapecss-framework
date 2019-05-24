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
     export function getTab() {
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
