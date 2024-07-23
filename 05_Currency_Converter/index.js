#! /usr/bin/env node
import inquirer from 'inquirer';
let currency = {
    "PKR": 1,
    "dollar": 1 / 278,
    "euro": 1 / 298,
    "yen": 1 / 2.5,
    "pound": 1 / 353,
    "indian rupee": 1 / 3.5
};
const input = inquirer.prompt([
    {
        name: 'from',
        type: 'list',
        message: 'Select currency to convert from: ',
        choices: Object.keys(currency),
        validate: function (input) {
            if (currency[input] === undefined) {
                return 'Please enter a valid currency';
            }
            return true;
        }
    },
    {
        name: 'to',
        type: 'list',
        message: 'Select currency to convert to: ',
        choices: Object.keys(currency),
        validate: function (input) {
            if (currency[input] === undefined) {
                return 'Please enter a valid currency';
            }
            return true;
        }
    },
    {
        name: 'amount',
        type: 'number',
        message: 'Enter amount to convert: ',
        validate: function (input) {
            if (isNaN(input)) {
                return 'Please enter a valid amount in integers';
            }
            else if (input < 0) {
                return 'Please enter a positive amount';
            }
            else if (input === 0) {
                return 'Please enter a non-zero amount';
            }
            return true;
        }
    }
]);
console.log(input);
console.log("program ended ---");
// const { from, to, amount } = input;
// const result =(amount / currency[from] ) * currency[to];
// console.log(chalk.bgGreen.yellowBright.bold(`${amount} ${from} is equal to ${ result.toFixed(2) } ${to}`));
