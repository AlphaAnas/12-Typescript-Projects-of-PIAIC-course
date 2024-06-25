# Student Management System in Typescript


This project is a simple console-based Student Management System written in TypeScript. It includes features such as adding new students, generating unique student IDs, enrolling students in courses, viewing student records, paying tuition fees, and displaying student details. The project utilizes `chalk` for colored terminal output and `inquirer` for interactive command-line prompts.

## Features

1. **User Data Saving**: Save and load student data to/from a JSON file.
2. **Add Student**: Add new students with unique IDs and other details.
3. **Enroll in Courses (to be developed)**: Enroll students in available courses.
4. **View Balance**: Check the tuition balance of a student.
5. **Pay Tuition Fees**: Pay the tuition fees for a student.
6. **Show Student Status**: Display the details of a student, including name, ID, courses enrolled, and balance.
7. **View All Students**: View the details of all students.
8. **Interactive CLI**: Uses `inquirer` for interactive prompts and `chalk` for colored output.


## Usage

### Adding a Student

1. Run the application:
    ```bash
    'tsc && node index.js'
    ```
2. Follow the prompts to add a new student by providing the necessary details such as name, enrollment year, major, etc.

### Paying Tuition Fees

1. Choose the option to pay tuition fees.
2. Follow the prompts to select the student and enter the payment amount.

### Viewing Student Records

1. Choose the option to view student records.
2. Follow the prompts to select the student whose records you want to view.

### Viewing All Students

1. Choose the option to view all students.
2. The details of all students will be displayed.

## Example Interaction

```text
Welcome to the Student Management System!

? What would you like to do? (Use arrow keys)
❯ Add a new student
  Pay tuition fees
  View student records
  View all students
  Exit

? Enter student's name: John Doe
? Enter student's ID in format (00000): 10001
? Enter student's enrollment year in format (2024): 2024
? Enter Major: Computer Science

Student added successfully!
```

## Run the Application on CLI:


npm i @alpha_anas/07_student_management_system
npx @alpha_anas/07_student_management_system

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
   cd "07_Student_Management_System"
  
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

## Development

### Run/ Edit the Application on IDE:

        Clone or download the zip of the folder from : `https://github.com/AlphaAnas/12-Typescript-Projects-of-PIAIC-course/tree/main/07_Student_Management_System`
        `Then run the following commands to install the DEPENDENCIES (if already not installed, however i have already installed and pushed the following for you in the repository): `

        ```
                tsc --init
                npm init -y
                npm install inquirer
                npm i --save-dev @types/inquirer

        ```

