// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

//internal module
const markdown = require("./utils/generateMarkdown.js");
const github = require("./utils/github.js");

// TODO: Create an array of questions for user input
inquirer
.prompt([   
{
    type: 'input',
    message: 'What is your Github user name?',
    name: 'userName',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required.");
        }
        return true;
    }
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "userEmail",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required.");
        }
        return true;
    } 
    },
  {
    type: 'input',
    message: 'What is the name of your Github repo?',
    name: 'userRepo',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub repois required.");
        }
        return true;
  },
},
{
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid project title is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Write a description of your project.",
    name: 'description',
    default: 'Project Description',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid project description is required.");
        }
        return true;
    }
},
{
    type: "input",
    message: "What is the path for this project's screenshot?",
    default: "image/screenshot.png",
    name: "projectImgSRC",
},
{
    type: "input",
    message: "What is your demo of this project?",
    default: "image/Demo.gif",
    name: "projectDemoSRC",
},
{
    type: "input",
    message: "What command should be run to install dependencies?",
    default: "`npm install`",
    name: "projectInstall",
},
{
    type: "input",
    message: "What command should be run to run the program?",
    default: "`node index.js`",
    name: "projectRun",
},
{
    type: "input",
    message: "What command should be run to start tests?",
    default: "`npm test`",
    name: "projectTest",
},
{
    type: "input",
    message: "Any additional information about the project?",
    name: "projectInfo",
},
{
    type: "input",
    message: "Please input an appropriate license type for this project",
    default: "MIT",
    name: "projectLicense",
}

])
.then((inquirerResponses) => {

    console.log(inquirerResponses);
    github.getUser(inquirerResponses.userName)
        .then((githubResponse) => {
            console.log(githubResponse)
            // Add user avatar to project details
            inquirerResponses.avatarURL = githubResponse.data.avatar_url
            // Parse the README details to create markdown version
            let markdownReadme = markdown(inquirerResponses);
            // Parse the markdown README version to write it to file
            fs.writeFileSync('output.md', markdownReadme);
        })
})

// Create a README file from markdown README version
function writeToFile(file, data) {
    fs.writeFile(file, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}




// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
