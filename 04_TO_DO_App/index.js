#! /usr/bin/env node
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
            print_items(person.array);
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
                person.array.push(input_item.item_to_add);
                index += 1;
                console.clear();
                print_items(person.array);
            }
        }
        else if (input.add_delete_stop.toUpperCase() === "DELETE") {
            print_items(person.array);
            const input_item = await inquirer.prompt([
                {
                    name: "index_to_delete",
                    type: "input",
                    message: "Enter the index of the item you want to delete or enter -1 to exit : ",
                    validate: function (value) {
                        if (person.array.length === 0 && parseFloat(value) !== -1) {
                            return "There are no items to delete";
                        }
                        else if (isNaN(value) || value < -1 || value > person.array.length) {
                            console.clear();
                            return "Please enter a valid index.";
                        }
                        else {
                            return true;
                        }
                    },
                },
            ]); //delete the item at the index
            const int_index = parseInt(input_item.index_to_delete, 10) - 1; // Convert to zero-based index
            if (int_index + 1 === -1) {
                continue; // go back to the start of the loop and ask for the next input
            }
            else {
                //delete the item at the index
                console.log("Item to delete: ", person.array[int_index], " at index: ", int_index + 1);
                person.array.splice(int_index, 1);
                console.log("Item deleted successfully");
                // console.clear();
                print_items(person.array);
            }
        }
        else if (input.add_delete_stop.toUpperCase() === "STOP") {
            break;
        }
    } while (input_item !== "STOP");
    console.log(`Hello ${person.name}, here are your items:`, person.array);
    //go back to the function call
}
const print_items = (array) => {
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
// let array: string[] = [];
//check if the file exists
let persons = []; // total persons that have used the app
if (fs.existsSync("persons.json")) {
    persons = JSON.parse(fs.readFileSync("persons.json", "utf-8"));
}
let person = { name: input.name, password: input.password, array: [] };
let person_exists = false;
const checkExistingPerson = persons.findIndex((element) => element.name === person.name && element.password === person.password);
if (checkExistingPerson !== -1) {
    console.clear();
    console.log(`Welcome back : ${person.name}`); // the person exists
    person.array = persons[checkExistingPerson].array;
    person_exists = true;
}
await main(person);
// the person exists
if (person_exists) {
    persons[checkExistingPerson] = person;
}
else {
    // add the new person to the array
    persons.push(person);
}
// here null is for the replacer and 2 is for the spacing
fs.writeFileSync("persons.json", JSON.stringify(persons, null, 2));
console.log("Thank you for using the app");
