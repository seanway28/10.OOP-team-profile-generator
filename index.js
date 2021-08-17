 
const inquirer =require("inquirer");
const fs = require("fs");

// sources
const Manager = require("./lib/Manager");
const Engineer = required('./lib/Engineer');
const Intern = require('./lib/Intern');

//html template
const pageTemplate = require('./lib/page-template');
const employeeArray = [];

// questions to ask
const employeeForm = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s full name?',
        validate: nameEntry => {
            if (nameEntry) {
                return true;
            } else {
                console.log('Employee name is required.');
                return false;
            }
        }
},
{
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee?',
    validate: nameEntry => {
        if (nameEntry) {
            return true;
        } else {
            console.log('Employee name is required.');
            return false;
        }
},
            type: "input",
            name: "id",
            message: 'What is the employee id number?',
            validate: idEntry => {
                if (!isNaN(parseInt(idEntry))) {
                    return true;
                } else {
                    console.log('Valid ID number required!');
                    return false;
                }
             }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the emploee email address?',
            validate: emailEntry => {
                if (emailEntry) {
                    return true;
                } else {
                    console.log('Valid email address required!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee? Select one of the following options:',
            choices:
                () => {
                    if (employeeArray.some(employee => employee.role === 'Manager')) {
                        return ['Engineer', 'Engineer', 'Intern']
                    } else {
                        return ['Manager', 'Engineer', 'Intern']
                    }
                    
                }
        },
    // If Manager, ask for office number
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Managers office phone number?',
            when: ({ role}) => {
                if (role === 'Manager') {
                     return true;
                } else {
                    return false;
                }     
            }        
        },
    // If Engineer ask for gitHub username
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers gitHub username?',
            when: ({ role }) => {
                if (role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // If intern, ask for the school information
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend?',
            when: ({ role }) => {
                if (role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            default: true
        },
]

const userPrompt = () => {
    return inquirer.prompt(employyForm)
    .then(responseData => {
        // moves employee data to array
        employeeArray.push(responseData);
        // If option to add employee is taken
        if (responseData.addEmploee) {
            return userPrompt();
        } else {
            return employeeArray;

        }; 
    });
};

// Function to write file with html template
const pageCreation = (pageContent) => {
    fs.writeFile('./dist/index.html'), pageContent, err => {
        if (err) {
            throw err
        };
        console.log ('Team Profile Page Created in dist folder.,')
    };
};


// Greeting

console.log('Hello amd Welcome to the Team Profile Generator!');

userPrompt()
.then(teamData => pageCTemplate(teamData))
.then(completedHTML => pageCreation(completedHTML))
.thrn(err => console.log(err));



