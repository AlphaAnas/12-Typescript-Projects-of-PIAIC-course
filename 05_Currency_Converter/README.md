# Currency Converter in Typescript

# ATM System

## Application Walkthrough

A currency converter application made in Typescript made using Inquirer module, chalk module and logical conditions

### Features

1. **User Input**: 
2. **Input validtion**
3. **Currency conversion**


## Run the Application on CLI:

```
npm i @alpha_anas/05_currency_converter
npx @alpha_anas/05_currency_converter

(and the game will start running on your Command Prompt / Terminal)

### Compiling and Running on IDE

when all the [dependencies](#Prerequisites) (as mentioned below) are successfully installed you can build and run the project using the
below mentioned command :
`tsc && node index.js`

### Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/AlphaAnas/Typescript-Projects-PIAIC-course.git
   cd "05_Currency_Converter"
   ```

2. **Install the dependencies**:

   ```
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

1. **Menu Display**:

   ```
   Welcome to the Currency Converter APP
   1. Input prompts user to select the currency to convert from.
   2.  Input prompts user to select the currency to convert to.
   3. Input then prompts the user the AMOUNT to convert
   3a. (system validates the input in between)
   4. Output is displayed in beautiful color output. 
   ```


## Development

### Run/ Edit the Application on IDE to add more options:

        Clone or download the zip of the folder from : `https://github.com/AlphaAnas/12-Typescript-Projects-of-PIAIC-course/tree/main/05_Currency_Converter`
        `Then run the following commands to install the DEPENDENCIES (if already not installed, however i have already installed and pushed the following for you in the repository): `

        ```
                tsc --init
                npm init -y
                npm install inquirer
                npm i --save-dev @types/inquirer

        ```

