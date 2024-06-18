#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

let currency : any = {
  "PKR": 1,
  "dollar": 1 / 278,
  "euro": 1 / 298,
  "yen": 1 / 2.5,
  "pound": 1 / 353,
  "indian rupee": 1 / 3.5
};

const input = await inquirer.prompt(
    [
        {
            name: 'from',
            type: 'list',
            message: 'Select currency to convert from: ',
            choices: Object.keys(currency)
        },
        {
            name: 'to',
            type: 'list',
            message: 'Select currency to convert to: ',
            choices: Object.keys(currency)
        },
        {
            name: 'amount',
            type: 'number',
            message: 'Enter amount to convert: '
        }
     

    ],
);


    const { from, to, amount } = input;
    const result =(amount / currency[from] ) * currency[to];
    console.log(chalk.bgGreen.yellowBright.bold(`${amount} ${from} is equal to ${ result.toFixed(2) } ${to}`));
