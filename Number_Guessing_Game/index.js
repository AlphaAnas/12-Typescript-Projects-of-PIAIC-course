import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "input",
        message: "Guess a number between 1 and 10: ",
    },
]);
if (answers.userGuessedNumber == randomNumber) {
    console.log("You guessed right!! ");
}
else {
    console.error("You guessed wrong!");
}
