'use strict';

import {Accordion} from "./component/Accordion";
import {Modal} from "./component/Modal";
import {getTab} from "./component/Tab";
import {Circle} from "./component/shapes/Circle";
import {Nav} from "./component/Nav";


window.onload = function () {
  new Accordion();
  new Modal();
  getTab();
  new Circle();
  new Nav();
}