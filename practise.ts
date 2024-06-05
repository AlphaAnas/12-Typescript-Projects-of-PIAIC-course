import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    name: "Q1",
    type: "input",
    message: "What is your name ? ",
  },
  {
    name: "Q2",
    type: "list",
    message: "What is your gender ? ",
    choices: ["Male", "Female"],
  },
]);
console.log(answer);
console.log("Hello", answer.Q1);
console.log(`Your gender is ${answer.Q2}`);


let color : "red" | "green" |"blue" = "blue";

let number = 123.1111111111
console.log(number.toFixed(4));

let num1=18;
console.log(typeof num1);


//narrowing

let newAge = Math.random() > 0.6 ? 18 : "Hamza";

if (typeof newAge === "number")
    {
        console.log(newAge.toFixed(10));
    }
else{
    console.log(newAge.toUpperCase());
}
