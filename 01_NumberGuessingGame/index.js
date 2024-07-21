#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess between 1-10:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "User Guess", systemGeneratedNumber, "System Guess");
if (userGuess === systemGeneratedNumber) {
    console.log("Your answer is correct\nYou Win!");
}
else {
    console.log("Please Try Again\nBetter Luck next time");
}
