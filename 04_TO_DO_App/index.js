import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
//make a todo app
// if the user exists bring its previous data
//2. add /remove the files
//3. wapis edit that on that exact position or at the last and delete the previous data
// check if the person is already in the array
async function main(person) {
    let input_item = "";
    let index = 0;
    do {
        const input = await inquirer.prompt([
            {
                name: "add_delete_stop",
                type: "list",
                message: "Choose what you want to do",
                choices: ["Add", "Delete", "Stop"],
            },
        ]);
        if (input.add_delete_stop.toUpperCase() === "ADD") {
            const input_item = await inquirer.prompt([
                {
                    name: "item_to_add",
                    type: "input",
                    message: "Enter the item you want to add : ",
                    validate: function (value) {
                        if (value === "") {
                            return "Please enter a valid item.";
                        }
                        else if (value === "STOP") {
                            return "Please enter a valid item.";
                        }
                        else if (!isNaN(parseFloat(value))) {
                            return "You cannot enter numbers.";
                        }
                        else {
                            return true;
                        }
                    },
                },
            ]);
            if (input_item.item_to_add !== "STOP") {
                array.push(input_item.item_to_add);
                index += 1;
                console.clear();
                print_items();
            }
        }
        else if (input.add_delete_stop.toUpperCase() === "DELETE") {
            const input_item = await inquirer.prompt([
                {
                    name: "index_to_delete",
                    type: "input",
                    message: "Enter the index of the item you want to delete or enter -1 to exit : ",
                    validate: function (value) {
                        if (person.array.length === 0 && parseFloat(value) !== -1) {
                            return "There are no items to delete";
                        }
                        else if (isNaN(value) ||
                            value < -1 ||
                            value > person.array.length) {
                            console.clear();
                            return "Please enter a valid index.";
                        }
                        else {
                            return true;
                        }
                    },
                },
            ]); //delete the item at the index
            if (input.index_to_delete === -1) {
                continue;
            }
            // person.array.splice(input_item, 1);
        }
        else if (input.add_delete_stop.toUpperCase() === "STOP") {
            break;
        }
    } while (input_item !== "STOP");
    console.log(`Hello ${person.name}, here are your items:`, array);
    person.array = array;
    //go back to the function call
}
const print_items = () => {
    console.log(chalk.bold.bgWhite.black("Your items are:"));
    for (let i = 0; i < array.length; i++) {
        console.log(chalk.green.bold(`${i + 1}. ${array[i]}`));
    }
};
//////////////start of the application below////////////////////////////
console.log(chalk.bold.bgWhite.black("                       Welcome to TO-DO app!!"));
const input = await inquirer.prompt([
    {
        name: "name",
        type: "string",
        message: "Please enter your name : ",
        validate: function (value) {
            if (!isNaN(Number(value))) {
                return "Name must be a string and cannot be a number.";
            }
            return true;
        },
    },
    {
        name: "password",
        type: "string",
        message: "Please enter a unique password for you : ",
        validate: function (value) {
            if (!isNaN(Number(value)) || value.length < 8) {
                return "Password must be atleast 8 digit long string and cannot be a number.";
            }
            return true;
        },
    },
]);
console.log(chalk.green.bold(`Welcome ${input.name}`));
let array = [];
const person_exists = (name, password, person) => {
    let persons = JSON.parse(fs.readFileSync("persons.json", "utf-8"));
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name === name && persons[i].password === password) {
            console.log("Welcome back", name);
            person = persons[i];
            return i;
        }
    }
    return -1;
};
let person = { name: input.name, password: input.password, array: [] };
if (person_exists(input.name, input.password, person) !== -1) {
    console.log(person.array);
}
else {
    console.log(person.array);
}
let persons = []; // total persons that have used the app
await main(person);
persons.push(person);
fs.writeFileSync("persons.json", JSON.stringify(persons));
console.log("Thank you for using the app");
