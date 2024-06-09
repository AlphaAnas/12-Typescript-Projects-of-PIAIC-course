# ATM System

## Application Walkthrough

This ATM System application simulates basic ATM functionalities such as checking account balance, depositing money, withdrawing money, and exiting the system.

### Features

1. **Check Balance**: View the current balance in your account.
2. **Deposit Money**: Add a specified amount of money to your account.
3. **Withdraw Money**: Withdraw a specified amount of money from your account.
4. **Exit**: Exit the ATM system.

For testing purposes there are two users

#### user1 :

      *name : anas*
      *account No.: : 0901*
      *pin :  qwe123*
      ,

#### user2 :

      *name : abdullah*
      *account No.: : 0900*
      *pin :  abc123*

## Run the Application on CLI:

```
npm i @alpha_anas/atm-system
npx @alpha_anas/atm-system
```

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
   cd "ATM system"
   ```

2. **Install the dependencies**:

   ```
   npm install (to install node modules folder)
   npm install inquirer
   npm i --save-dev @types/inquirer
   tsc --init   (to install tsconfig.json)
   npm init -y (to install package.json) (keep pressing enter to make a general tsconfig.json file)


   ```
   In tsconfig.json file on line No.:14 change the *target* to *ESNext* i.e. `"target": "ESNext"` 
   also tsconfig.json file on line No.:28 change the *module* to *NodeNext* i.e. `"module": "NodeNext"`
   also tsconfig.json file on line No.:28 change the *moduleResolution* to *NodeNext* i.e. `"moduleResolution": "NodeNext"`

   Then in package.json file on line No.:10 after ( "main": "index.js",) enter the following two lines
   ```
    "bin": "index.js",
    "type": "module",
   ```


### Usage

1. **Start the application**:

   ```
   npm start
   ```

2. **Follow the on-screen prompts** to interact with the ATM system.

### User Guide

1. **Starting the ATM System**:
   - Upon running the application, you will be presented with a menu of options.
2. **Options Menu**:
   - `1. Check Balance`: Displays the current balance in your account.
   - `2. Deposit Money`: Prompts you to enter an amount to deposit. After entering the amount, your balance will be updated accordingly.
   - `3. Withdraw Money`: Prompts you to enter an amount to withdraw. If the amount is available in your balance, it will be deducted. Otherwise, an error message will be displayed.
   - `4. Exit`: Exits the ATM system.

### Example Interaction

1. **Menu Display**:

   ```
   Welcome to the ATM System
   1. Check Balance
   2. Deposit Money
   3. Withdraw Money
   4. Exit
   ```

2. **Checking Balance**:

   ```
   Your current balance is $1000
   ```

3. **Depositing Money**:

   ```
   Enter the amount to deposit: 200
   You have successfully deposited $200. Your new balance is $1200.
   ```

4. **Withdrawing Money**:

   ```
   Enter the amount to withdraw: 500
   You have successfully withdrawn $500. Your new balance is $700.
   ```

5. **Exiting the System**:
   ```
   Thank you for using the ATM System. Goodbye!
   ```

## Development

### Run/ Edit the Application on IDE:

        Clone or download the zip of the folder from : `https://github.com/AlphaAnas/Typescript-Projects-PIAIC-course/tree/main/ATM%20system`
        `Then run the following commands to install the DEPENDENCIES : `

        ```
                tsc --init
                npm init -y
                npm install inquirer
                npm i --save-dev @types/inquirer

        ```

