#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import fs, { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url"; // for getting the path of current directory
// import path from "path";
class Student {
  //------------------Variables here -----------//

  public static id_count: number = 10000;
  public balance: number;
  public id: string;
  public name: string;
  public enollment_year: number;
  public major: string;
  public courses: { name: string; fee: number, paid: boolean }[];

  //_--------------------------------------------//

  // constructor
  constructor(name: string, enrollment_year: number, major: string) {
    this.name = name;
    this.enollment_year = enrollment_year;
    this.major = major;
    this.id = this.generate_id(enrollment_year);
    console.log("ID generated: ", this.id);
    this.balance = 1000;
    this.courses = [];

  }

  private generate_id(enrollment_year: number): string {
    console.log("Generating ID:" + Student.id_count);
    Student.id_count += 1;
    return (
      Student.id_count.toString().padStart(5, "0") +
      (enrollment_year % 100).toString().padStart(2, "0")
    );
  }


}

class Stu_Manag_Sys {
  public students: Student[] = [];

  constructor() {
    this.load_data();
    if (this.students.length === 0) {
      console.log(chalk.redBright("No Previous Data found"));
    } else {
      console.log(chalk.greenBright("Data Loaded Successfully"));
      Student.id_count = parseInt(
        (parseInt(this.students[this.students.length - 1].id) / 100).toString()
      );
      // Student.id_count = parseInt(String(Student.id_count).split(".")[0]);

      console.log(chalk.red("ID count set to : ", Student.id_count));
      console.warn("this worked!!");
    }
  }
  private load_data() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    if (fs.existsSync(path.join(__dirname, "records", "students.json"))) {
      if (
        fs.readFileSync(
          path.join(__dirname, "records", "students.json"),
          "utf-8"
        ) === ""
      ) {
        console.log(chalk.redBright("No Previous Data of students found"));
        return;
      } else {
        this.students = JSON.parse(
          fs.readFileSync(path.join(__dirname, "records", "students.json"), "utf-8")
        );
      }
    } else {
      console.log(chalk.redBright("No Previous data found"));
      return;
    }
  }

  // get the student details here
  private async get_student_details(available_majors: string[]): Promise<number> {
    const st_input = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "Enter student's name : ",
        validate: (input) => {
          if (!isNaN(input)) {
            return chalk.redBright("Please Enter string input!");
          } else if (input.trim() === "") {
            return chalk.redBright("Please enter valid input");
          } else if (input.lenght < 3) {
            return chalk.redBright("Lenght of name cannot be less than 3");
          } else {
            return true;
          }
        },
      },
      {
        name: "id",
        type: "number",
        message:
          "Enter student's id in format" + chalk.bgWhite.greenBright(" (00000) "),
        validate: (input) => {
          if (isNaN(input)) {
            return chalk.redBright("Please Enter integer input!");
          } else if (input.trim === "") {
            return chalk.redBright("Please enter valid input");
          } else if (String(input).length !== 5) {
            console.log(chalk.redBright("Lenght of id should be exactly 5"));
          } else {
            return true;
          }
        },
      },
      {
        name: "en_year",
        type: "number",
        message:
          "Enter student's enrollment year in format" +
          chalk.bgWhite.greenBright("( 2024 ) "),
        validate: (input) => {
          if (isNaN(input)) {
            return chalk.redBright("Please Enter integer input!");
          } else if (input.trim === "") {
            return chalk.redBright("Please enter valid input");
          } else if (String(input).length !== 4) {
            console.log(chalk.redBright("Lenght of Year should be exactly 4"));
          } else {
            return true;
          }
        },
      },
    ]);

    // convert the input to lowercase
    st_input.name = st_input.name.toString().toLowerCase().trim();
    st_input.en_year = parseInt(st_input.en_year);

    const index = this.students.findIndex((value) => {
      return (
        value.name.toLowerCase() === st_input.name &&
        value.id.substring(0, 5) === String(st_input.id) &&
        parseInt(value.enollment_year.toString()) === st_input.en_year
      );
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

  private async commit(index: number) {
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
      fs.writeFileSync(
        path.join(__dirname, "records", "students.json"),
        JSON.stringify(this.students, null, 2)
      );
      console.log(
        chalk.green.bold(
          `Data saved for ${this.students[index].name} with ID ${this.students[index].id}`
        )
      );
    } else {
      fs.mkdirSync(path.join(__dirname, "records"));
      fs.writeFileSync(
        path.join(__dirname, "records", "students.json"),
        JSON.stringify(this.students, null, 2)
      );
      console.log(
        chalk.green.bold(
          `Data saved for ${this.students[this.students.length - 1].name} with ID ${
            this.students[this.students.length - 1].id
          }`
        )
      );
    }
  }
  public async main(): Promise<void> {
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
    console.log(chalk.bgWhite.redBright("Welcome to Student Management System"));
    console.log(chalk.bgGray.redBright("======================================"));
    const input = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        message: "Select your action : ",
        choices: [
          "Register a Student",
          "Enroll/ Unenroll in course",
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
              } else if (!isNaN(input)) {
                return "Invalid Name, enter a string name";
              } else if (input.length < 3) {
                return "Name too short";
              }
              //check if it contains special characters
              else if (!/^[a-zA-Z ]+$/.test(input)) {
                return "Invalid Name, enter a valid name";
              } else {
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
              } else if (input.length !== 4) {
                return "Invalid Year, lenght should be 4 digits";
              } else if (input < 2000 || input > 2024) {
                return "Invalid Year, enter a year between 2000 and 2024";
              } else {
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
              } else if (!isNaN(input)) {
                return "Invalid Major, enter a string major";
              } else if (input.length < 3) {
                return "Major too short";
              } else {
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
      case "Enroll/ Unenroll in course":
        const st_index = await this.get_student_details(available_majors);
        if (st_index === -1) {
          console.log(chalk.redBright("Student does not exists "));
          // continue;
        } else 
        {
          console.log(chalk.greenBright("Student exists"));
          console.log(chalk.greenBright("Student Details : "));
          const student = this.students[st_index];
          const formattedStudents = {
             ...student,
             courses: student.courses.map(
               (course) => `${course.name} ($${course.fee})`
             ),
           };
          const option = await inquirer.prompt([
            {
              name: "option",
              type: "list",
              choices: ["Enroll", "Unenroll"],
              message: "Select your action : ",
            },
          ]);
          if (option.option === "Unenroll"){
            if (student.courses.length === 0){
              console.log(chalk.redBright("No courses to unenroll"));
              break;
            }
            const course_input = await inquirer.prompt([
                {
                  name: "course",
                  type: "list",
                  choices: student.courses.map((course) => ({
                    name: `${course.name} ($${course.fee})`,
                    value: course,
                  })),
                  message: "Select your desired course: ",
                },
              ]);
              const index = student.courses.findIndex(
                (course) => course.name.toLowerCase() === course_input.course.name.toLowerCase()
              );
              student.courses.splice(index, 1);
              student.balance += course_input.course.fee;
              console.log(chalk.greenBright("Course removed successfully"));
              this.commit(st_index);
              console.table([formattedStudents]);

            }
            else if (option.option === "Enroll")
              {

                console.table([formattedStudents]);
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
                      } else if (!isNaN(input)) {
                        return "Invalid Course, enter a string course";
                      } else if (input.length < 3) {
                        return "Course too short";
                      }
                      // else if (this.students[st_index].courses.find( (course) => course.name.toLowerCase() === course_input.course.name.toLowerCase()))
                      //     {
                      //       return "Course already enrolled";
                      //     }
                       else {
                        return true;
                      }
                    },
                  },
                ]);
                if (
                   course_input.course.name.toLowerCase() 
                                  ===
                  this.students[st_index].courses.find(
                    (course) =>
                      course.name.toLowerCase()) ?.name.toLowerCase()  )
                {   
                  console.log(chalk.redBright("Course already enrolled"));
                  break;
                }
                //save the new details in students' array
                this.students[st_index].courses.push(course_input.course);
                this.students[st_index].courses[
                  this.students[st_index].courses.length - 1
                ].paid = false;
               
                
                console.log(chalk.greenBright("Course added successfully"));
                this.commit(st_index);

                // after the student is enrolled display it
                const enrolled_formatted_student ={
                  ...this.students[st_index], courses: this.students[st_index].courses.map((course)=> `${course.name} ($${course.fee})`),
                };
                console.table([enrolled_formatted_student]);
              }
          }
          break;
      case "View Pending Balance":
        const index = await this.get_student_details(available_majors);

        if (index === -1) {
          console.log(chalk.redBright("Student does not exists "));
          // continue;
        } else {
          console.log(chalk.greenBright("Student exists"));
          console.log(chalk.greenBright("Student Details : "));
          const student = this.students[index];
    
          const formatted_students = {
            ...student, courses: student.courses.map( (course) => `${course.name} $${course.fee}`),};
          console.table([formatted_students]);
        
          const pending_amount = this.students[index].courses.reduce( (total, course) => total + course.fee, 0);
          console.log(`Your pending amount is : ${pending_amount}`);
        }
        break;
      case "Pay Tution Fees":
        const id = await this.get_student_details(available_majors);
        if (id === -1) {
          console.log(chalk.redBright("Student does not exists "));
          // continue;
        } else {
          console.log(chalk.bgGray.blackBright("Student exists"));
          const student = this.students[id];
          const formatted_students = {
            ...student,
            courses: student.courses.map(
              (course) => `${course.name} $${course.fee}`
            ),
          };
          console.table([formatted_students]);
          const pending_amount = 1000 - formatted_students.balance;
          console.log(`Your pending amount is : ${pending_amount}`);
          if (this.students[id].balance === 0) {
            console.log(chalk.greenBright("Please recharge your account to pay fees, free version expired"));
            break;
          } else {
            const unpaid_courses = this.students[id].courses.filter(
              (course) => !course.paid
            );
            const course = await inquirer.prompt([
              {
                name: "course",
                type: "list",
                choices: unpaid_courses.map((course) => ({
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
            else if (this.students[id].balance < fees) {
              console.log(chalk.redBright("Insufficient balance"));
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
          courses: student.courses.map(
            (course) => `${course.name} ($${course.fee})`
          ),
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



  
