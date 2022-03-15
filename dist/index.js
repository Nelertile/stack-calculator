import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.yellowBright("Minecraft Stack Calculator"))
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
        choices: [{name: 'Round up', checked: true}, {name: 'Display only relevant variables'},{name: 'Calculate Shulkers'}],
    }]).then((answers) =>{
        actions(answers)
    })
}

function actions(answers) {
    let round = false;
    let compact = false;
    let calcshulker = false;
    for (let i = 0; i < answers.action.length; i++) {
        if(answers.action[i] == 'Round up') round = true;
        if(answers.action[i] == 'Display only relevant variables') compact = true;
        if(answers.action[i] == 'Calculate Shulkers') calcshulker = true;
    }

    let stack = answers.ItemAmount / 64
    let stackout = stack.toFixed(0)
    if(round && stack.toFixed(0) < stack) stackout = stack.toFixed(0) + 1
    console.log(stackout)
}