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

    let stack: number = answers.ItemAmount / 64
    let stackout: number = Math.ceil(stack)
    console.log(stackout)
}