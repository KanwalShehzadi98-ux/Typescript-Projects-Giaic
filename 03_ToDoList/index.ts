#! /usr/bin/env node
import inquirer from "inquirer";

let todos : string[] = [];
let loop = true;

while(loop){
    const answers : {
        toDo : string,
        addMore : boolean
    } = await inquirer.prompt([
        {
            type : "input",
            name : "toDo",
            message : "What do you want to add in your todo?"
        },
        {
            type : "confirm",
            name : "addMore",
            message : "Do you want to add more todo?",
            default : false //agr user koi value enter kiye baghir enter press krrha tw false ho jaye ga
        }
    ]);

    const {toDo,addMore} = answers;
    loop = addMore;
    if(toDo){
        todos.push(toDo);
    }
    else{
        console.log("Kindly add valid input");
    }
}

if(todos.length > 0){
    console.log("-----------------TODO LIST------------------");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else{
    console.log("No TODOS found!!!");
}