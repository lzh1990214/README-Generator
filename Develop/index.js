// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Md = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project briefly:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide some instructions and examples for use:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, third-party assets, and tutorials with links to their GitHub profiles or primary websites:',
        name: 'credit',
    },
    {
        type: 'list',
        message: 'Which license do you use?',
        name: 'license',
        choices: ['MIT License', 'ISC License', 'Apache License 2.0', 'GNU General Public License v3.0', 'N/A']
    },
];

inquirer
    .prompt(questions)
    .then((response) =>
        {generateMarkdown(response);
        writeToFile(response.title, response);}
    );



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { 
    
// }

// // Function call to initialize app
// init();
