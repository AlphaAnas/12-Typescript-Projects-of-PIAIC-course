# Word Counter in Typescript

## Overview

This project is a simple word counter application written in TypeScript. The application reads a text file (`input.txt`) and counts the number of words in it. It includes professional-level features such as:

1. Ignoring multiple spaces.
2. Supporting punctuation.
3. Handling new lines.
4. Generating a detailed report.

## Features

1. **Word Counting**: Counts the number of words in a given text file.
2. **Detailed Report**: Provides a breakdown of word counts, unique words, and punctuation handling.
3. **Error Handling**: Ensures the input is valid and handles edge cases.
## Run the Application on CLI:

```
npm i @alpha_anas/06_word_counter
npx @alpha_anas/06_word_counter

(and the game will start running on your Command Prompt / Terminal)

### Compiling and Running on IDE

when all the [dependencies](#Prerequisites) (as mentioned below) are successfully installed you can build and run the project using the
below mentioned command :
`tsc && node index.js`

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. **Clone the repository**:

   
   git clone "https://github.com/AlphaAnas/12-Typescript-Projects-of-PIAIC-course"
   cd "06_Word_Counter"
  
2. **Install the dependencies**:

 
   npm install (to install node modules folder)
   npm install inquirer
   npm i --save-dev @types/inquirer
   tsc --init   (to install tsconfig.json)
   npm init -y (to install package.json) (keep pressing enter to make a general tsconfig.json file)

   
### Important changes to make (note I have already made this following changes for you, so you do not have to make the same, however remember to make the same in your own version)

   ```
   In tsconfig.json file on line No.:14 change the *target* to *ESNext* i.e. `"target": "ESNext"` 
   also tsconfig.json file on line No.:28 change the *module* to *NodeNext* i.e. `"module": "NodeNext"`
   also tsconfig.json file on line No.:28 change the *moduleResolution* to *NodeNext* i.e. `"moduleResolution": "NodeNext"`

   Then in package.json file on line No.:10 after ( "main": "index.js",) enter the following two lines
   ```
    "bin": "index.js",
    "type": "module",
   ```
### Example Interaction

1. **User enters their input in a .txt file in the same folder**:

   ```
   Welcome to the Wordcounter APP
   1. Enter the file name you entered the input in (.txt only)
   2. (system checks if such file exists)
   3. if yes: the system runs the process and gives ,word count, character count and sentence count.
   3. if no: the system generates relevant error . 
   ```


## Development

### Run/ Edit the Application on IDE:

        Clone or download the zip of the folder from : `https://github.com/AlphaAnas/12-Typescript-Projects-of-PIAIC-course/tree/main/06_Word_Counter`
        `Then run the following commands to install the DEPENDENCIES (if already not installed, however i have already installed and pushed the following for you in the repository): `

        ```
                tsc --init
                npm init -y
                npm install inquirer
                npm i --save-dev @types/inquirer

        ```

