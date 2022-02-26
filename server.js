const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'courses_db'
  },
  console.log(`Connected to the courses_db database.`)
);

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainQuestion',
            message: 'What would you like to do?',
            choices: ['View All', 'View Employees', 'View Departments', 'View Roles', 'Add Employee', 'Add Department', 'Add Role', 'Update Employees Role']
        }
      ]).then(answer => {
        if(answer.mainQuestion === 'View All') {
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

// what would you like to do?
    // view all employees -- show table employee data, enployee ids, first name, last name, job titles, departments, salaries, their manager

    // view all departments -- show table with departments and ids

    // view all roles -- show job title, role id, department role, salary

    // add department -- prompt departments

    // add role -- name, salary, department

    // add emplyee -- first name, last name, employees role, employees manager
    
    // update employee role -- new role 

    // quit


    // update managers
    // view emplyees by manager
    // view emplyees by department
    // delete departments, roles and employees
    // view salaries of departments