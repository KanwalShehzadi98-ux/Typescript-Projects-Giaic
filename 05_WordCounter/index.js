#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter Your Sentence/Paragraph to Find Word Count:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
