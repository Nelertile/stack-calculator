#!/usr/bin/env node
import inquirer from 'inquirer';

console.log("Minecraft Stack Calculator")
prompts()

function prompts(){
    inquirer.prompt([{
        name: 'ItemAmount',
        type: 'number',
        message: 'Please enter your number of items.'
    },{
        name: 'action',
        type: 'checkbox',
        message: 'Select Actions',
        choices: [{name: 'Display only relevant variables'},{name: 'Calculate Shulkers'}],
    }]).then((answers) =>{
        actions(answers)
    })
}

function actions(answers: any) {
    let compact: boolean = false;
    let calcshulker: boolean = false;
    for (let i = 0; i < answers.action.length; i++) {
        if(answers.action[i] == 'Display only relevant variables') compact = true;
        if(answers.action[i] == 'Calculate Shulkers') calcshulker = true;
    }

    const stack: number = Math.ceil(answers.ItemAmount / 64)
    const shulker: number = Math.ceil(stack / 27)
    
    let out: string = `-- Output --\nStack: ${stack}\n-- Output --`;

    if(compact && calcshulker) {
        if((Math.ceil(stack / 27)) == (Math.round(stack / 27))) out =  `-- Output --\nShulker: ${shulker}\n-- Output --`;
    }
    else if(calcshulker) out = `-- Output --\nStack: ${stack}\nShulker: ${shulker}\n-- Output --`;
    

    console.log(out)
}