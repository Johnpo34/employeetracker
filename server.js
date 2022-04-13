const mysql = require('mysql2');
const inquirer = require('inquire');
const { mainPrompts, departmentPrompts } = require('./lib/prompts');


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
  db.query(
    'SELECT * FROM "role"',
    function (err, roleList) {
      console.log(roleList);

      roleList = roleList.map(role => {
        return {
          value: role.id,
          name: role.title,
        };
      });

      db.query(
        'SELECT * FROM "employee"',
        function (err, employeeList) {
          console.log(employeeList);

          employeeList = employeeList.map(role => {
            return {
              value: department.id,
            };
          });

          inquirer.prompt([
            {
              type: 'input',
              name: 'firstName',
              message: 'Employees first name?'
            },
            {
              type: 'input',
              name: 'lastName',
              message: 'Employee last name?'
            },
            {
              type: 'list',
              choices: roleList,
              name: 'roleId',
              message: 'Please select a role for the user.',
            }
          ]).then(answers => {
            db.query(
              'INSERT INTO employee (first_name) VALUES (?);', [answers.firstName],
              (err, res) => {
                if (err) throw err;
                console.log('$(answers.EmployeeName} added to the database');
              }
            )
          }
          )
        }
      )
    }
  )
};

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'Name of department?'
    }
    // fix then.
  ]).then(answers => {
    db.query('INSERT INTO department (name) VALUES (?);', [answers.department], (err, res) => {
      if (err) throw err;
      console.log('${answers.DepartmentName} added to the database.');
    }
    )
  })
};

function addRole() {
  db.query
  inquirer.prompt([
    {
      type: 'input',
      name: 'Role name',
      message: 'Name of role?'
    },
    {
      type: 'number',
      name: 'name',
      message: 'What is the name of the role?',
    },
    {
      type: 'list',
      name: 'department',
      message: 'What department does the role go to?',
      choices: [
        'Sales',
        'Engineering',
        'Finance',
        'Legal'
      ]
    },
    // fix then
  ]).then(answers => {
    db.query("INSERT INTO role (name) VALUES")
      ('${answer.RoleName}'), (err, res) => {
        if (err) throw err;
        console.log('$answers.RoleName} added to the database.');
      }
  })
};

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

// const init = () => {
//   mainMenu();
// };

init();