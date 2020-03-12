const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const newEmployees = async (inputs = []) => {
    const prompts = [
        {
            message: "What is the Employees's Name?",
            name: "name"
        },
        {
            message: "What is their ID #?",
            name: "ID"
        },
        {
            message: "What is their email?",
            name: "email" 
        },
        {
            type: "list",
            message: "What position do they hold?",
            name: "Role",
            choices: [ {
                name: "Manager",
                value: 0
            },
            {   
                name: "Engineer",
                value: 1
            },
            {
                name: "Intern",
                value: 2
            }],
        },
        {
            message: "What is their Office Number?",
            name: "officeNumber",
            when: (answers) => answers.Role == 0
        },
        {
            message: "What is your Github UserName?",
            name: "github",
            when: (answers) => answers.Role == 1
        },
        {
            message: "What school did you attend?",
            name: "school",
            when: (answers) => answers.Role == 2
        },
        {
            type: "confirm",
            name: 'again',
            message: 'Enter another employee?',
            default: true
        }
    ];

    // Give the user the questions
    const { again, ...answers } = await inquirer.prompt(prompts);

    // Create new inputs in anticipation of the user selecting to enter another Employee
    const newInputs = [...inputs, answers];

    // If else ternary statement 
    // If the user select to enter another Employee then run through the prompts again
    // Else return the inputs (employees) the user has already created. 
    return again ? newEmployees(newInputs) : newInputs;
}
    
   
    const main = async () => {

        // Await prompts to be answered
        const employeesAdded = await newEmployees();

        // Go back through the answers given & create the necessary employee objects
        employees = [];
        for (var i = 0; i < employeesAdded.length; i++) {
            if (employeesAdded[i].Role == 0) {
                employees.push(new Manager(employeesAdded[i].name, employeesAdded[i].ID, employeesAdded[i].email, employeesAdded[i].officeNumber));
            } else if (employeesAdded[i].Role == 1) {
                employees.push(new Engineer(employeesAdded[i].name, employeesAdded[i].ID, employeesAdded[i].email, employeesAdded[i].github));
            } else {
                employees.push(new Intern(employeesAdded[i].name, employeesAdded[i].ID, employeesAdded[i].email, employeesAdded[i].school));
            }
        }

        // Render the html using the newly created employees array filled with employee objects(Manager, Engineer, Intern)
        template = render(employees);
        fs.writeFileSync(path.resolve(OUTPUT_DIR, "test.html"), template);
    }

    main();

       