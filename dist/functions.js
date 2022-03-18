"use strict";
// Dev functions for using stack calculator in other applications.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
function calculate(itemcount, returnShulker = false) {
    if (!itemcount)
        return console.error("itemcount is undefined");
    if (itemcount < 64)
        return console.error("itemcount is less then 64");
    const stack = Math.ceil(itemcount / 64);
    const shulker = Math.ceil(stack / 27);
    const returnarray = new Array(stack, shulker);
    if (returnShulker)
        return returnarray;
    return stack;
}
exports.calculate = calculate;
