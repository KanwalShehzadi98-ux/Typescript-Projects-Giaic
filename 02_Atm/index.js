#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your ID:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawal"],
        message: "Select Your Transaction:",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000, 50000],
        message: "Select Your Amount:",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount:",
        when(answers) {
            return answers.transactionType == "Withdrawal";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    const { amount } = answers;
    if (balance > amount) {
        const remaining = balance - amount;
        console.log("Remaining Balance is : ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
