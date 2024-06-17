# TO DO APP in Typescript

# ATM System

## Application Walkthrough

A TODO app which consists of user validation, item addition/ deletion, and saving user's data features.

### Features

1. **Saving users's data**: if the user uses the app first time the todo app saves their data in persons.json file.
2. **Add items**: After adding name and unique password users can add their todo items.
3. **Delete items**: Users also have option to delete the item if they change their mind.
4. **Exit**: Finally after adding the items if they write *stop* the app will log them out and display their items added.

For testing purposes (let's say) there are two users

#### user1 :

      *name : anas
      *items: ["apple", "mango", "banana"]*
      *pin :  qwe123*
      ,

#### user2 :

      *name : abdullah*
      *items: []*
      *pin :  abc123*

## Run the Application on CLI:

```
npm i @alpha_anas/to_do_app (yeh abhi likhna hei)
npx @alpha_anas/to_do_app

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
   cd "04_TO_DO_APP"
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
   Welcome to the TODO APP
   1. Enter your name
   2. Enter a password
   3. (system validates if its a new user or an old one)
   4. system allocates an array if its a new user else bring back the previous items that exist
   ```


## Development

### Run/ Edit the Application on IDE:

        Clone or download the zip of the folder from : `https://github.com/AlphaAnas/12-Typescript-Projects-of-PIAIC-course/tree/main/04_TO_DO_App`
        `Then run the following commands to install the DEPENDENCIES (if already not installed, however i have already installed and pushed the following for you in the repository): `

        ```
                tsc --init
                npm init -y
                npm install inquirer
                npm i --save-dev @types/inquirer

        ```

