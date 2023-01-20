// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Provide any contribution guidelines if needed:',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'Which license do you use?',
        name: 'license',
        choices: ['MIT License', 'ISC License', 'Apache License 2.0', 'N/A']
    },
    {
        type: 'input',
        message: 'Describe any tests that needed for this application',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub name?',
        name: 'githubName',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

inquirer
    .prompt(questions)
    .then((response) =>
        {
        generateMarkdown(response);
        writeToFile('README.md', `${generateMarkdown(response)}`);
        }
    );


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile('README.md', data, (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// // TODO: Create a function to initialize app
// function init() { 
    
// }

// // Function call to initialize app
// init();
