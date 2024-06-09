# ATM System

## Application Walkthrough

This ATM System application simulates basic ATM functionalities such as checking account balance, depositing money, withdrawing money, and exiting the system.

### Features

1. **Check Balance**: View the current balance in your account.
2. **Deposit Money**: Add a specified amount of money to your account.
3. **Withdraw Money**: Withdraw a specified amount of money from your account.
4. **Exit**: Exit the ATM system.

For testing purposes there are two users
user1 : _name : anas_
_account No.: : 0901_
_pin : qwe123_
,
user2 : _name : abdullah_
_account No.: : 0900_
_pin : abc123_

## Run the Application on CLI:

```
npm i @alpha_anas/atm-system
npx @alpha_anas/atm-system
```

### Compiling and Running on IDE

when all the [dependencies](#Prerequisites) are successfully installed you can build and run the project using the
below mentioned command :
`tsc && node index.js`

### Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/yourusername/atm-system.git
   cd atm-system
   ```

2. **Install the dependencies**:
   ```
   npm install
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

        Clone or download the zip of the folder from : `LINK TO BE INSERTED HERE`
        `Then run the following commands to install the DEPENDENCIES : `

        ```
                tsc --init
                npm init -y
                npm install inquirer
                npm i --save-dev @types/inquirer

        ```

## To contribute to the development of the ATM System:

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```
   git clone https://github.com/yourusername/atm-system.git
   cd atm-system
   ```
3. **Create a new branch** for your feature or bugfix:
   ```
   git checkout -b feature-or-bugfix-name
   ```
4. **Make your changes** and commit them:
   ```
   git add .
   git commit -m "Description of changes"
   ```
5. **Push your changes** to your fork:
   ```
   git push origin feature-or-bugfix-name
   ```
6. **Create a pull request** on GitHub.
