export class Circle {

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