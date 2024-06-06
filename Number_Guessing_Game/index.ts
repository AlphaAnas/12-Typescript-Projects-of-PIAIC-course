#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 10) + 1;

const main = async (total: number, randomNumber: number) => {
  let attempts = 0;

  while (true) {
    console.log("Attempts left : ", total - attempts);
    if (attempts == total) {
      console.log(chalk.red.bold("You have exhausted all your attempts!"));
      console.log(chalk.green.bold(`The number was ${randomNumber}`));
      break;
    }

    const answers = await inquirer.prompt([
      {
        name: "userGuessedNumber",
        type: "input",
        message: "Guess a number between 1 and 10: ",
      },
    ]);

    if (answers.userGuessedNumber == randomNumber) {
      console.log(chalk.green.bold("You guessed right!! "));
      break;
    } else if (isNaN(answers.userGuessedNumber)) {
      console.error(
        chalk.yellow(
          "Invalid data type. Please enter a number between 1 and 10"
        )
      );
      continue;
    } else {
      if (answers.userGuessedNumber > 10 || answers.userGuessedNumber < 1) {
        console.error(chalk.yellow("Please enter a number between 1 and 10"));
        console.log(" ");
        continue;
      }
      console.error(chalk.red.bold("You guessed wrong!"));
      if (answers.userGuessedNumber > randomNumber) {
        console.log("Too High");
      } else if (answers.userGuessedNumber < randomNumber) {
        console.log("Too Low");
      }
      attempts += 1;
      if (total - attempts == 1) {
        console.log(
          chalk.green(
            `The number is between ${randomNumber - 3} and ${randomNumber + 2}`
          )
        );
      }
    }
  }
};
const total = 5;
console.log("******* Welcome to the Number guessing Game !   *************");
console.log();
console.log(`You have ${total} attempts to guess the number between 1 and 10`);

main(total, randomNumber);
