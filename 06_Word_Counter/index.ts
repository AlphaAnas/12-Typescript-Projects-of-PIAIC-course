import inquirer from "inquirer";
import fs from "fs";
import chalk from "chalk";

function countWords(input: string): number {
  return input.trim().split(/\s+/).length;
}

function countCharacters(input: string): number {
  return input.length;
}

function countSentences(input: string): number {
  return input.split(/[.!?]/).filter(Boolean).length;
}

async function main() {
  try {
    const { inputType } = await inquirer.prompt([
      {
        name: "inputType",
        type: "list",
        message: "Choose input type:",
        choices: ["File", "Text"],
      },
    ]);

    let input: string;

    if (inputType === "File") {
      const { fileName } = await inquirer.prompt([
        {
          name: "fileName",
          type: "input",
          message: "Enter the file name:",
        },
      ]);

      if (!fs.existsSync(fileName)) {
        console.log(
          chalk.red("File does not exist. Please provide a valid file name.")
        );
        return;
      }

      input = fs.readFileSync(fileName, "utf8");
    } else {
      const { textInput } = await inquirer.prompt([
        {
          name: "textInput",
          type: "input",
          message: "Enter the text:",
        },
      ]);
      input = textInput;
    }

    const wordCount = countWords(input);
    const characterCount = countCharacters(input);
    const sentenceCount = countSentences(input);

    console.log(chalk.bgGrey.black.bold("Word Count: " + wordCount));
    console.log(chalk.bgGrey.black.bold("Character Count: " + characterCount));
    console.log(chalk.bgGrey.black.bold("Sentence Count: " + sentenceCount));
  } catch (error) {
    console.error(chalk.red("An error occurred:"), error);
  }
}

main();
