#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("Minecraft Stack Calculator");
prompts();
function prompts() {
    inquirer_1.default.prompt([{
            name: 'ItemAmount',
            type: 'number',
            message: 'Please enter your number of items.'
        }, {
            name: 'action',
            type: 'checkbox',
            message: 'Select Actions',
            choices: [{ name: 'Display only relevant variables' }, { name: 'Calculate Shulkers' }],
        }]).then((answers) => {
        actions(answers);
    });
}
function actions(answers) {
    let compact = false;
    let calcshulker = false;
    for (let i = 0; i < answers.action.length; i++) {
        if (answers.action[i] == 'Display only relevant variables')
            compact = true;
        if (answers.action[i] == 'Calculate Shulkers')
            calcshulker = true;
    }
    const stack = Math.ceil(answers.ItemAmount / 64);
    const shulker = Math.ceil(stack / 27);
    let out = `-- Output --\nStack: ${stack}\n-- Output --`;
    if (compact && calcshulker) {
        if ((Math.ceil(stack / 27)) == (Math.round(stack / 27)))
            out = `-- Output --\nShulker: ${shulker}\n-- Output --`;
    }
    else if (calcshulker)
        out = `-- Output --\nStack: ${stack}\nShulker: ${shulker}\n-- Output --`;
    console.log(out);
}
