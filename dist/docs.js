"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
/* Dev documentation for Stack Calculator

    import { calculate } from 'stack-calculator'


    calculate(itemcount: number, returnShulker?)

    returns the calculated stack count, and optionally shulkers

    if returnShulker is true, returns [ stack, shulker ]
    else, returns stack
*/
//EXAMPLES
console.log((0, functions_1.calculate)(10000, true));
