import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a JS Millioner? \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am process on your computer
        If you get any question wrong I will be ${chalk.bgRed('killed')}
        So get all the questions ${chalk.bgGreen('right!')}
    `)
}


async function askName(){
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
    });

    playerName = answer.player_name;
}


async function question1(){
    const answer = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'What symbols are used to make up the Python language? \n',
        choices: [
            'Words',
            'Runes',
            'Hieroglyphics',
            'Sprites',
        ]
    });

    return handleAnswer(answer.question_1 == 'Words');
}

async function question2(){
    const answer = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What are people who write computer code called? \n',
        choices: [
            'Professors',
            'Cryptographers',
            'Programmers',
            'Manufacturers',
        ]
    });

    return handleAnswer(answer.question_2 == 'Programmers');
}

async function question3(){
    const answer = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Which of these is NOT a programming language?  \n',
        choices: [
            'Java',
            'Python',
            'Banana',
            'Ruby',
        ]
    });

    return handleAnswer(answer.question_3 == 'Banana');
}


async function handleAnswer(isCorrect){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(isCorrect){
        spinner.success({ text: `Nice work ${playerName}!`});
    }else{
        spinner.error({ text: `Game over, you lose ${playerName}!`});
        process.exit(1);
    }
}


function winner(){
    console.clear();
    const msg = `Congrats, ${playerName}! \n $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await welcome()
await askName()
await question1()
await question2()
await question3()
await winner()