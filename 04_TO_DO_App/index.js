import inquirer from "inquirer";
//make a todo app
const answer = await inquirer.prompt([
    {
        name: "ans1",
        type: "input",
        message: "Enter your name",
    },
]);
console.log(answer.ans1);
