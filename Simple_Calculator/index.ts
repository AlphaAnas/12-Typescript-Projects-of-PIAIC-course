#! /usr/bin/env node

import inquirer from "inquirer";
//we used awaait as
const input = await inquirer.prompt([
  {
    message: "Enter the first number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter the second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select the operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (input.operator === "Addition") {
  console.log(input.firstNumber + input.secondNumber);
} else if (input.operator === "Subtraction") {
  console.log(input.firstNumber - input.secondNumber);
} else if (input.operator === "Multiplication") {
  console.log(input.firstNumber * input.secondNumber);
} else if (input.operator === "Division") {
  console.log(input.firstNumber / input.secondNumber);
}
