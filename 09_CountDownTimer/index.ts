#! /usr/bin/env node
import inquirer from 'inquirer';

// Function to start the countdown
const startCountdown = (seconds: number) => {
    console.log(`Countdown started for ${seconds} seconds.`);

    const interval = setInterval(() => {
        if (seconds > 0) {
            console.log(`Time remaining: ${seconds} seconds`);
            seconds--;
        } else {
            clearInterval(interval);
            console.log('Countdown complete!');
        }
    }, 1000);
};

// Function to prompt user for countdown time
const promptUser = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'userInput',
            message: 'Enter Seconds:',
            validate: (input) => {
                const number = parseInt(input, 10);
                if (isNaN(number) || number <= 0) {
                    return 'Please enter a valid positive number';
                }
                return true;
            }
        }
    ]);

    const seconds = parseInt(answers.userInput, 10);
    startCountdown(seconds);
};

// Start the prompt
promptUser();
