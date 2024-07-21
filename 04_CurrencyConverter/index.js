import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Conversion Currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount you want to convert:"
    }
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} = ${result}`);
}
else {
    console.log("Invalid Inputs");
}
