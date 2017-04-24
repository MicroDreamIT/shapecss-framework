
'use strict';

import {Accordion} from "./component/Accordion";
import {Modal} from "./component/Modal";
import {getTab} from "./component/Tab";


window.onload = function () {
  new Accordion();
  new Modal();
  getTab();
}