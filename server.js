const express = require("express");
const mysql = require('mysql2');
const inquirer = require('inquire');
const { mainPrompts, departmentPrompts} = require('./lib/prompts');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'employee_db'
    // differnet database?
  },
  console.log(`Connected to the employee_db database.`)
);

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'Employee name',
      message: 'Employees name?'
    }
  ]).then(answers => {
    db.query('INSERT INTO employee (name) VALUES')
    ('${answer.EmployeeName}'), (err, res) => {
      if (err) throw err;
      console.log('$(answers.EmployeeName} added to the database');
    }
  })};

  function addDepartment() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'Department Name',
        message: 'Name of department?'
      }
    ]).then(answers => {
      db.query('INSERT INTO departments (name) VALUES')
        ('${answer.DepartmentName}'), (err, res) => {
          if (err) throw err;
          console.log('${answers.DepartmentName} added to the database.');
        }
    })};

    function addRole() {
      inquirer.prompt([
        {
          type: 'input',
          name: 'Role name',
          message: 'Name of role?'
        }
      ]).then(answers => {
        db.query("INSERT INTO roles (name) VALUES")
          ('${answer.RoleName}'), (err, res) => {
            if (err) throw err;
            console.log('$answers.RoleName} added to the database.');
          }
    })};

      // insert query to add data to employee table
      function init() {
        inquirer.prompt([
          {
            type: 'list',
            name: 'mainQuestion',
            message: 'What would you like to do?',
            choices: ['View All', 'View Employees', 'View Departments', 'View Roles', 'Add Employee', 'Add Department', 'Add Role', 'Update Employees Role']
          }
        ]).then(answer => {
          if (answer.mainQuestion === 'View All') {
            viewAll()
          } else if (answer.mainQuestion === 'View Employees') {
            viewEmployee()
          } else if (answer.mainQuestion === 'View Departments') {
            viewDepartment()
          } else if (answer.mainQuestion === 'View Roles') {
            viewRoles()
          } else if (answer.mainQuestion === 'Add Employee') {
            addEmployee()
          } else if (answer.mainQuestion === 'Add Department') {
            addDepartment()
          } else if (answer.mainQuestion === 'Add Role') {
            addRole()
          } else if (answer.mainQuestion === 'Update Emplyees Role')
            updateEmployeeRole()
        })
      };

      db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role ON emplyee_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;")

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });