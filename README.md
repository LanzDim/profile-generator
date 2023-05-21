# Object-Oriented Programming Challenge: Team Profile Generator

This Node.js command-line application takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Installation

To install the required dependencies, run the following command in your project folder:

```bash
npm install inquirer@8.2.4
```
# Usage
To start the application, use the following command:

```bash
node index.js
```

Follow the prompts to enter the team members' information. Once you finish building your team, an HTML file will be generated with a nicely formatted team roster based on the user input.

# User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

Acceptance Criteria
- The application should accept user input through a command-line interface.
- An HTML file should be generated, displaying a nicely formatted team roster based on the user input.
- Clicking on an email address in the HTML should open the default email program with the address populated in the TO field.
- Clicking on a GitHub username should open the corresponding GitHub profile in a new tab.
- The application should start by prompting for the team manager's name, employee ID, email address, and office number.
- After entering the team manager's information, a menu should be presented with options to add an engineer or an intern or finish building the team.
- When selecting the engineer option, the user should be prompted to enter the engineer's name, ID, email, and GitHub username, and then taken back to the menu.
- When selecting the intern option, the user should be prompted to enter the intern's name, ID, email, and school, and then taken back to the menu.
- Choosing to finish building the team should exit the application and generate the HTML file.

# Classes
The application should have the following classes:

- Employee: The parent class with properties and methods for all employees.
- Manager: Extends Employee and includes additional properties and methods specific to managers.
- Engineer: Extends Employee and includes additional properties and methods specific to engineers.
- Intern: Extends Employee and includes additional properties and methods specific to interns.

# Testing
The application should be thoroughly tested using the Jest framework. The test files for each class should be placed in the __tests__ directory.

# Deliverables

Sample HTML file generated using the application.
GitHub repository containing your application code.
Walkthrough video demonstrating the functionality of the Team Profile Generator and passing tests. Include a link to the video in your README file.
