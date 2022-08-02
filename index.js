// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = 
inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title or name of this project?",
    },
    {
      name: "description",
      type: "input",
      message: "Please provide a brief overview description or mission statment for this project",
    },
    {
        name: "install",
        type: "input",
        message: "Please provide installation instructions for your project",
      },
    {
      name: "contents",
      type: "input",
      message: "Please provide Table of Contents headings for each section you woild like to include. Please use the following format: '##heading1', '##heading'2, '##heading3', etc",
    },
    {
      name: "usage",
      type: "input",
      message: "Please provide instructions for using this application",
    },
    {
      name: "license",
      type: "input",
      message: "Please select the appropriate license for this project",
    },
    
  ])

  .then((answer) => {

    const newFile = generateMarkdown(answer)

    fs.writeFile("newProject.md", newFile, function (err) {
        if (err) throw err;
        else console.log("success");
        console.log(answer)
        
  });

});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const generateHTML = (answer) => {

//     return`#${answer.title}
//     ##${answer.contents}
//     ##${answer.description}
//     ##${answer.install}
//     ##${answer.usage}
//     ##${answer.license}`
    


// }
// // TODO: Create a function to initialize app
// function init() {
    
// }

// // Function call to initialize app
// init() {

// };
