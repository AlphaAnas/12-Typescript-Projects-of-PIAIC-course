import inquirer from "inquirer";
import chalk from "chalk";
//make a todo app

async function main(name: string, array: string[]) {
  let input_item: string = "";
  do {
    const input = await inquirer.prompt([
      {
        name: "input_item",
        type: "input",
        message: "Please keep adding items, and write STOP to exit",
      },
    ]);
    input_item = input.input_item;
    if (input_item !== "STOP") {
      array.push(input.input_item);
    }
  } while (input_item !== "STOP");
  console.log(`Hello ${name}, here are your items:`, array);
}

//////////////start of the application below////////////////////////////
console.log(
  chalk.bold.bgWhite.black("                       Welcome to TO-DO app!!")
);
const name = await inquirer.prompt([
  {
    name: "name",
    type: "string",
    message: "Please enter your name : ",
  },
  {
    name: "password",
    type: "string",
    message: "Please enter a unique password for you : ",
  },
]);

console.log(`Welcome ${name.name}`);
let array: string[] = [];
setTimeout(() => {
  main(name.name, array);
}, 100);

interface person {
  name: string;
  password: string;
  array: string[];
}
