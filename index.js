// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title or name of this project?",
      validate:(title) =>{
        if (title){
            return true;
        }else {
            return "Please enter valid title";
        }
      }
    },
    {
      name: "email",
      type: "input",
      
      message: "Please enter your contact email address:",
    },
    {
        name: "github",
        type: "input",
        
        message: "Please enter your github profile url:",
      },
    {
      name: "description",
      type: "input",
      message:
        "Please provide a brief overview description or mission statment for this project:",
    },
    {
      name: "install",
      type: "input",
      message: "Please provide installation instructions for your project:",
    },

    {
      name: "usage",
      type: "input",
      message: "Please provide instructions for using this application:",
    },
    {
      name: "license",
      type: "list",
      message: "Please select the appropriate license for this project:",
      choices: ["BSD 3"," BSD 2","MIT", "Apache 2.0", "None"],
    },
  ])

  .then((answer) => {
    const newFile = generateMarkdown(answer);

    fs.writeFile("./output/newProject.md", newFile, function (err) {
      if (err) throw err;
      else console.log("success");
      console.log(answer);
    });
  });




// // TODO: Create a function to initialize app

