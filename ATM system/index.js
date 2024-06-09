#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//requirements :
//  1. Check Balance
//    2. Deposit Money
//    3. Withdraw Money
//    4. Exit
//    ```
const main = async () => {
    const [user_id, user_exists] = await validate_user();
    if (user_id === -1 || !user_exists) {
        return chalk.cyan.bold("The requested user does not exists! Please try again. ");
    }
    const input = await inquirer.prompt([
        {
            name: "first_question",
            type: "list",
            message: "Select your desired operation: ",
            choices: [
                "1. check balance",
                "2. deposit money",
                "3. withdraw money",
                "4. exit ",
            ],
        },
    ]);
    console.log("You selected number : " + chalk.bold(input.first_question));
    const user = users[user_id];
    console.log();
    switch (input.first_question) {
        case "1. check balance":
            console.log(chalk.black.bgWhite.bold(`      Your total balance is : ${user.amount} `));
            break;
        case "2. deposit money":
            const input_amount = await inquirer.prompt({
                name: "amount",
                type: "input",
                message: "Please enter the amount to deposit",
                validate: function (input) {
                    const floatValue = parseFloat(input);
                    if (isNaN(floatValue) || floatValue <= 0) {
                        return "Invalid input. Please enter a positive number.";
                    }
                    return true;
                },
            });
            console.log(chalk.black.bgWhite(`Please wait ...`));
            user.amount += parseFloat(input_amount.amount);
            setTimeout(() => {
                // Code to execute after the delay
                console.log("Deposit operation completed.");
            }, 250); // 250 milliseconds delay
            console.log(`The new amount is ${user.amount.toFixed(3)}`);
            break;
        case "3. withdraw money":
            const input_amount2 = await inquirer.prompt({
                name: "amount",
                type: "input",
                message: "Please enter the amount to withdraw",
                validate: function (input) {
                    const floatValue = parseFloat(input);
                    if (isNaN(floatValue) || floatValue <= 0) {
                        return "Invalid input. Please enter a positive number.";
                    }
                    else if (floatValue > user.amount) {
                        return "Withdrawal amount cannot be more than total balance !!";
                    }
                    return true;
                },
            });
            console.log(chalk.black.bgWhite(`Please wait ...`));
            user.amount -= parseFloat(input_amount2.amount);
            setTimeout(() => {
                // Code to execute after the delay
                console.log("Transaction completed successfully.");
            }, 250); // 250 milliseconds delay
            console.log(`The new amount is ${user.amount.toFixed(3)}`);
            break;
        case "4. exit ":
            console.log(chalk.yellow("Exiting......."));
            setTimeout(() => {
                console.log("Logged out successfully");
            }, 250);
            break;
        default:
            console.log(chalk.red("Invalid choice"));
    }
};
const validate_user = async () => {
    const user_data = await inquirer.prompt([
        {
            name: "user_question1",
            type: "input",
            message: "Please Enter your name: ",
        },
        {
            name: "user_question2",
            type: "input",
            message: "Please Enter your account number: ",
        },
        {
            name: "user_question3",
            type: "input",
            message: "Please Enter your pin: ",
        },
    ]);
    if (typeof user_data.user_question1 !== "string") {
        console.error(chalk.red.bold("Error : Invalid Input, please enter valid name!"));
        return [-1, false];
    }
    if (isNaN(Number(user_data.user_question2))) {
        console.error(chalk.red.bold("Invalid input, Please enter a valid account number!"));
        return [-1, false];
    }
    if (user_data.user_question3.length !== 6 ||
        typeof user_data.user_question3 !== "string") {
        console.error(chalk.red.bold("Invalid input, Please enter a valid pin of 6 digits!"));
        return [-1, false];
    }
    for (let i = 0; i < users.length; i++) {
        if (user_data.user_question1 === users[i].name.toLowerCase() &&
            user_data.user_question2 === users[i].account &&
            user_data.user_question3 === users[i].pin) {
            console.log(chalk.green.bold("User validated successfully!"));
            return [i, true];
        }
    }
    console.error(chalk.red.bold("Invalid user, please try again!"));
    return [-1, false];
};
const users = [
    {
        name: "Abdullah",
        account: "0900",
        pin: "abc123",
        amount: 2000,
    },
    {
        name: "Anas",
        account: "0901",
        pin: "qwe123",
        amount: 25000,
    },
];
console.log("Welcome to the ATM system ! ");
console.log();
main();
