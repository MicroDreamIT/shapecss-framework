export class Modal {
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