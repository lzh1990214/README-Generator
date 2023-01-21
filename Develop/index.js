// Import packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
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

// Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile('README.md', data, (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// function to initialize app (inquirer)
function init() { 
    inquirer
    .prompt(questions)
    .then((response) =>
        {
        generateMarkdown(response);
        writeToFile('README.md', `${generateMarkdown(response)}`);
        }
    );
}

// Function call to initialize app
init();
