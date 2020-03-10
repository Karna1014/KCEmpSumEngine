const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


async function basicInfo() {

    const inqAnswer = await inquirer
         //prompts for basic info
        .prompt([
            {
                message: "What is the Employees's Name?",
                name: "name"
            },
            {
                message: "What is their ID #?",
                name: "ID"
            },
            {
                message: "What is their email",
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
                }
                ]
            }
      

            //creates the manager
            //pushes it into employee array
            //promptNext()
        ])
        .then(answer => {
           if (answer.Role === 0) {
               console.log("hello");
                inquirer.prompt(managerInfo());
           } else if (answer.Role === 1) {
                inquirer.prompt(engineerInfo());
           } else {
                inquirer.prompt(internInfo());
           }
        }) 
        .catch(error => {
            if (error.isTtyError) {
                throw (error);
            } else {
                console.log("Oops!");
                // answers.push[];
            }
        });

        // console.info(answer);
    }
    
    async function managerInfo () {
        const inqAns = await inquirer
        .prompt ([
            {
                message: "What is their Office Number?",
                name: "officeNumber"
            }
        ]);
            // next();
    }
    async function engineerInfo () {
        const inqAns = await inquirer
        .prompt ([
            {
                message: "What is your Github UserName?",
                name: "github"
            }   
        ]);
            // next();
    }
    async function internInfo () {
        const inqAns = await inquirer
        .prompt ([
            {
                message: "What school did you attend?",
                name: "school"
            }
        ]);
        // next();
    }
    // fs.appendFile('./output/team.html', (answer.data), function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
    // writeFile(answer);
    // console.log(response.data);

    // async function next () {
    //     const inqAns = await inquirer
    //     .prompt ([
    //         {
    //             type: "confirm",
    //             message: "Do you want to enter another team member?",
    //             name: "nextUp"
    //         }, function(answer) {
    //             if(answer.nextUp) {
    //                 Inquirer.prompt([questions], cb);
    //             } 
    //         }
    //     ]);

    // };

             basicInfo();

    // function writeFile(answer) {
    // const writeStream = fs.writeFile('./Employees.html');

    // const pathName = writeStream.path;

    // writeStream.on('finish', () => {
    //     console.log(`wrote all the array data to file ${pathName}`);
    //  });
     
    //  // handle the errors on the write process
    //  writeStream.on('error', (err) => {
    //      console.error(`There is an error writing the file ${pathName} => ${err}`)
    //  });
     
    //  // close the stream
    //  writeStream.end();
    //  };
     

            //.then(function(engineer) {
                
             //use basicInfo and engineerInfo to build a engineer object using the constructor
    //             //push into the arroy of employess
    //             //ask what the user wants to do next
    //        // })
    // }
    // function promptNext() {
    //     //inquirer.prompt to ask if the user would like to add another employee
    //         //if yes, run basicInfo
    //         //if no, end program
    // }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
