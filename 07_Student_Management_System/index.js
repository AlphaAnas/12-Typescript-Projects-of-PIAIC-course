#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // for getting the path of current directory
// import path from "path";
class Student {
    //------------------Variables here -----------//
    static id_count = 10000;
    balance;
    id;
    name;
    enollment_year;
    major;
    courses;
    //_--------------------------------------------//
    // constructor
    constructor(name, enrollment_year, major) {
        this.name = name;
        this.enollment_year = enrollment_year;
        this.major = major;
        this.id = this.generate_id(enrollment_year);
        console.log("ID generated: ", this.id);
        this.balance = 0;
        this.courses = [];
    }
    generate_id(enrollment_year) {
        console.log("Generating ID:" + Student.id_count);
        Student.id_count += 1;
        return (Student.id_count.toString().padStart(5, "0") +
            (enrollment_year % 100).toString().padStart(2, "0"));
    }
}
class Stu_Manag_Sys {
    students = [];
    constructor() {
        this.load_data();
        if (this.students.length === 0) {
            console.log(chalk.redBright("No Previous Data found"));
        }
        else {
            console.log(chalk.greenBright("Data Loaded Successfully"));
            Student.id_count = parseInt((parseInt(this.students[this.students.length - 1].id) / 100).toString());
            // Student.id_count = parseInt(String(Student.id_count).split(".")[0]);
            console.log(chalk.red("ID count set to : ", Student.id_count));
            console.warn("this worked!!");
        }
    }
    load_data() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        if (fs.existsSync(path.join(__dirname, "records", "students.json"))) {
            if (fs.readFileSync(path.join(__dirname, "records", "students.json"), "utf-8") === "") {
                console.log(chalk.redBright("No Previous Data of students found"));
                return;
            }
            else {
                this.students = JSON.parse(fs.readFileSync(path.join(__dirname, "records", "students.json"), "utf-8"));
            }
        }
        else {
            console.log(chalk.redBright("No Previous data found"));
            return;
        }
    }
    // get the student details here
    async get_student_details(available_majors) {
        const st_input = await inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Enter student's name : ",
                validate: (input) => {
                    if (!isNaN(input)) {
                        return chalk.redBright("Please Enter string input!");
                    }
                    else if (input.trim() === "") {
                        return chalk.redBright("Please enter valid input");
                    }
                    else if (input.lenght < 3) {
                        return chalk.redBright("Lenght of name cannot be less than 3");
                    }
                    else {
                        return true;
                    }
                },
            },
            {
                name: "id",
                type: "number",
                message: "Enter student's id in format" + chalk.bgGray.blackBright(" (00000) "),
                validate: (input) => {
                    if (isNaN(input)) {
                        return chalk.redBright("Please Enter integer input!");
                    }
                    else if (input.trim === "") {
                        return chalk.redBright("Please enter valid input");
                    }
                    else if (String(input).length !== 5) {
                        console.log(chalk.redBright("Lenght of id should be exactly 5"));
                    }
                    else {
                        return true;
                    }
                },
            },
            {
                name: "en_year",
                type: "number",
                message: "Enter student's enrollment year in format" +
                    chalk.bgGray.blackBright("( 2024 ) "),
                validate: (input) => {
                    if (isNaN(input)) {
                        return chalk.redBright("Please Enter integer input!");
                    }
                    else if (input.trim === "") {
                        return chalk.redBright("Please enter valid input");
                    }
                    else if (String(input).length !== 4) {
                        console.log(chalk.redBright("Lenght of Year should be exactly 4"));
                    }
                    else {
                        return true;
                    }
                },
            },
            {
                name: "major",
                type: "list",
                choices: available_majors,
                message: "Enter Major : ",
                validate: (input) => {
                    if (input.trim() === "") {
                        return "Invalid Major";
                    }
                    else if (!isNaN(input)) {
                        return "Invalid Major, enter a string major";
                    }
                    else if (input.length < 3) {
                        return "Major too short";
                    }
                    else {
                        return true;
                    }
                },
            },
        ]);
        // convert the input to lowercase
        st_input.name = st_input.name.toString().toLowerCase().trim();
        st_input.major = st_input.major.toString().toLowerCase().trim();
        st_input.en_year = parseInt(st_input.en_year);
        const index = this.students.findIndex((value) => {
            return (value.name.toLowerCase() === st_input.name &&
                value.id.substring(0, 5) === String(st_input.id) &&
                parseInt(value.enollment_year.toString()) === st_input.en_year &&
                value.major.toLowerCase() === st_input.major);
        });
        console.log("this index is :" + index);
        return index;
    }
    //**************************/
    // public enrollCourse(course: { name: string; fee: number }) {
    //   this.courses.push(course);
    //   this.balance += course.fee;
    // }
    //************************ */
    async commit(index) {
        // save the data to a file
        // console.log("Commiting data called");
        // Get the current file URL
        const __filename = fileURLToPath(import.meta.url);
        // Get the directory name of the current file
        const __dirname = path.dirname(__filename);
        // console.log("Current directory:", __dirname);
        const exists = fs.existsSync(path.join(__dirname, "records", "students.json"));
        console.log(exists);
        if (exists) {
            fs.writeFileSync(path.join(__dirname, "records", "students.json"), JSON.stringify(this.students, null, 2));
            console.log(chalk.green.bold(`Data saved for ${this.students[index].name} with ID ${this.students[index].id}`));
        }
        else {
            fs.mkdirSync(path.join(__dirname, "records"));
            fs.writeFileSync(path.join(__dirname, "records", "students.json"), JSON.stringify(this.students, null, 2));
            console.log(chalk.green.bold(`Data saved for ${this.students[this.students.length - 1].name} with ID ${this.students[this.students.length - 1].id}`));
        }
    }
    async main() {
        const available_majors = [
            "computer science",
            "computer engineering",
            "social science",
        ];
        const courses = [
            { name: "Mathematics", fee: 500 },
            { name: "Physics", fee: 600 },
            { name: "Chemistry", fee: 700 },
        ];
        // while (true) {
        console.log(chalk.bgGray.redBright("======================================"));
        console.log(chalk.bgYellow.redBright("Welcome to Student Management System"));
        console.log(chalk.bgGray.redBright("======================================"));
        const input = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Select your action : ",
                choices: [
                    "Register a Student",
                    "Enroll in course",
                    "View Pending Balance",
                    "Pay Tution Fees",
                    "show All Students",
                    "Exit",
                ],
            },
        ]);
        switch (input.option) {
            case "Register a Student":
                const std_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter Student Name : ",
                        validate: (input) => {
                            if (input.trim() === "") {
                                return "Invalid Name";
                            }
                            else if (!isNaN(input)) {
                                return "Invalid Name, enter a string name";
                            }
                            else if (input.length < 3) {
                                return "Name too short";
                            }
                            //check if it contains special characters
                            else if (!/^[a-zA-Z ]+$/.test(input)) {
                                return "Invalid Name, enter a valid name";
                            }
                            else {
                                return true;
                            }
                        },
                    },
                    {
                        name: "year",
                        type: "input",
                        message: "Enter Enrollment Year : ",
                        validate: (input) => {
                            if (isNaN(input)) {
                                return "Invalid Year, enter a number";
                            }
                            else if (input.length !== 4) {
                                return "Invalid Year, lenght should be 4 digits";
                            }
                            else if (input < 2000 || input > 2024) {
                                return "Invalid Year, enter a year between 2000 and 2024";
                            }
                            else {
                                return true;
                            }
                        },
                    },
                    {
                        name: "major",
                        type: "list",
                        choices: available_majors,
                        message: "Enter Major : ",
                        validate: (input) => {
                            if (input.trim() === "") {
                                return "Invalid Major";
                            }
                            else if (!isNaN(input)) {
                                return "Invalid Major, enter a string major";
                            }
                            else if (input.length < 3) {
                                return "Major too short";
                            }
                            else {
                                return true;
                            }
                        },
                    },
                ]);
                // add the new student in the list
                const { name, year, major } = std_input;
                const student = new Student(name, year, major);
                this.students.push(student);
                this.commit(this.students.length - 1);
                break;
            case "Enroll in course":
                const st_index = await this.get_student_details(available_majors);
                if (st_index === -1) {
                    console.log(chalk.redBright("Student does not exists "));
                    // continue;
                }
                else {
                    console.log(chalk.greenBright("Student exists"));
                    console.log(chalk.greenBright("Student Details : "));
                    console.table(this.students[st_index]);
                    const course_input = await inquirer.prompt([
                        {
                            name: "course",
                            type: "list",
                            choices: courses.map((course) => ({
                                name: `${course.name} ($${course.fee})`,
                                value: course,
                            })),
                            message: "Select your desired course: ",
                            validate: (input) => {
                                if (input.trim() === "") {
                                    return "Invalid Course";
                                }
                                else if (!isNaN(input)) {
                                    return "Invalid Course, enter a string course";
                                }
                                else if (input.length < 3) {
                                    return "Course too short";
                                }
                                else {
                                    return true;
                                }
                            },
                        },
                    ]);
                    //save the new details in students' array
                    this.students[st_index].courses.push(course_input.course);
                    this.students[st_index].courses[this.students[st_index].courses.length - 1].paid = false;
                    this.students[st_index].balance += course_input.course.fee;
                    console.log(chalk.greenBright("Course added successfully"));
                    this.commit(st_index);
                    console.table(this.students[st_index]);
                }
                break;
            case "View Pending Balance":
                const index = await this.get_student_details(available_majors);
                if (index === -1) {
                    console.log(chalk.redBright("Student does not exists "));
                    // continue;
                }
                else {
                    console.log(chalk.greenBright("Student exists"));
                    console.log(chalk.greenBright("Student Details : "));
                    console.table(this.students[index]);
                    console.log(`Your pending amount is : ${this.students[index].balance}`);
                }
                break;
            case "Pay Tution Fees":
                const id = await this.get_student_details(available_majors);
                if (id === -1) {
                    console.log(chalk.redBright("Student does not exists "));
                    // continue;
                }
                else {
                    console.log(chalk.bgGray.blackBright("Student exists"));
                    console.log(`Your pending amount is : ${this.students[id].balance}`);
                    if (this.students[id].balance === 0) {
                        console.log(chalk.greenBright("No pending fees"));
                        break;
                    }
                    else {
                        const course = await inquirer.prompt([
                            {
                                name: "course",
                                type: "list",
                                choices: this.students[id].courses.map((course) => ({
                                    name: `${course.name} ($${course.fee})`,
                                    value: course,
                                })),
                                message: "Select the course you want to pay for : ",
                            },
                        ]);
                        if (course.course.paid) {
                            console.log(chalk.redBright("Course already paid for"));
                            break;
                        }
                        let fees = course.course.fee;
                        console.log(`Your pending amount is : ${fees}`);
                        const payFees = await inquirer.prompt([
                            {
                                name: "confirm",
                                type: "confirm",
                                message: "Do you want to pay the fees?",
                            },
                        ]);
                        if (!payFees.confirm) {
                            console.log(chalk.redBright("Payment cancelled"));
                            break;
                        }
                        else {
                            course.course.paid = true;
                            this.students[id].balance -= fees;
                            console.log(chalk.greenBright("Fees added successfully"));
                            this.commit(id);
                        }
                    }
                }
                break;
            case "show All Students":
                // Create a copy of students array with courses formatted
                const formattedStudents = this.students.map((student) => ({
                    ...student,
                    courses: student.courses.map((course) => `${course.name} ($${course.fee})`),
                }));
                console.table(formattedStudents);
                break;
            case "Exit":
                console.clear();
                console.log("Please Wait!");
                setTimeout(() => {
                    console.log(chalk.bgGray.black("Exited successfully !"));
                }, 1500);
                break;
            default:
                console.log("Invalid Option");
        } //switch statement ends here***
        // } // while loop ends
    }
}
const sms = new Stu_Manag_Sys();
sms.main();
