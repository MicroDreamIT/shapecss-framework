/*!
 * Shapecss v2.0
 * Copyright 2016-2017 Shahanur Sharif.
 * http://microdreamit.com
 * Licensed under MIT (https://github.com/MicroDreamIT/Shapecss/blob/master/LICENSE)
 */

'use strict';

import {Accordion} from "./component/Accordion";
import {Modal} from "./component/Modal";
import {getTab} from "./component/Tab";
import {Nav} from "./component/Nav";

import {Circle} from "./component/shapes/Circle";
import {Parallelogram} from "./component/shapes/Parallelogram";
import {Rectangle} from "./component/shapes/Rectangle";
import {Square} from "./component/shapes/Square";


window.onload = function () {
  new Accordion();
  new Modal();
  getTab();
  new Nav();
  new Circle();
  new Parallelogram();
  new Rectangle();
  new Square();

}