const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const inquirer = require('inquirer');
const special = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const teamArray = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Who is the manager?',
        validate: nameInput => {
          if (nameInput.trim()) {
            return true;
          } else {
            return 'Enter manager name';
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter manager ID',
        validate: idInput => {
          if (isNaN(idInput)) {
            return 'Please enter a valid ID';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email",
        validate: emailInput => {
          const isValidEmail = special.test(emailInput);
          if (isValidEmail) {
            return true;
          } else {
            return 'Enter a valid email address';
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number",
        validate: officeNumberInput => {
          if (isNaN(officeNumberInput)) {
            return 'Enter a valid office number!';
          } else {
            return true;
          }
        },
      },
    ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
    });
};

const addEmployee = () => {
  console.log('Adding employee to the team');

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "Choose the employee's role",
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name",
        validate: nameInput => {
          if (nameInput.trim()) {
            return true;
          } else {
            return "Enter an employee's name";
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the employee's ID",
        validate: idInput => {
          if (isNaN(idInput)) {
            return "Please enter a valid ID";
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email",
        validate: emailInput => {
          const isValidEmail = special.test(emailInput);
          if (isValidEmail) {
            return true;
          } else {
            return 'Enter a valid email address';
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter the employee's GitHub username",
        when: input => input.role === 'Engineer',
        validate: githubInput => {
          if (githubInput.trim()) {
            return true;
          } else {
            return "Enter the employee's GitHub username";
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school",
        when: input => input.role === 'Intern',
        validate: schoolInput => {
          if (schoolInput.trim()) {
            return true;
          } else {
            return "Enter the intern's school";
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do you want to add more team members?',
        default: false,
      },
    ])
    .then(employeeData => {
      const { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee();
      } else {
        return teamArray;
      }
    });
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Team profile has been successfully created!');
    }
  });
};

addManager()
  .then(addEmployee)
  .then(teamArray => generateHTML(teamArray))
  .then(pageHTML => writeFile(pageHTML))
  .catch(err => {
    console.log(err);
  });
