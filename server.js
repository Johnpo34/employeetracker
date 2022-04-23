const mysql = require('mysql2');
const inquirer = require('inquirer');
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
    'SELECT role.id, role.title, role.salary FROM role',
    function (err, roleList) {
      console.log(roleList);

      db.query(
        'SELECT employee.first_name, employee.last_name, employee.role_id FROM employee',
        function (err, employeeList) {
          console.log(employeeList);

          employeeList = employeeList.map(employee => {
            return {
              value: employee.id,
              name: employee.first_name + ' ' + employee.last_name
            };
          });

          roleList = roleList.map(role => {
            return {
              value: role.id,
              name: role.title
            };
          });

          employeeList.push({
            value: null,
            name: 'None'
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
            // manager question should go here
          ]).then(answers => {
            db.query(
              'INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?);', [answers.firstName, answers.lastName, answers.roleId],
              (err, res) => {
                if (err) throw err;
                console.log('$(answers.EmployeeName} added to the database');
                init()
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
    db.query('INSERT INTO department (name) VALUES (?);', [answers.departmentName], (err, res) => {
      if (err) throw err;
      console.log('${answers.DepartmentName} added to the database.');
      init()
    }
    )
  })
};

function addRole() {
  `SELECT department.name, department.id`
  db.query(
    'SELECT department.name, department.id FROM department',
    function (err, departmentList) {
      console.log(departmentList);
      // map function
      departmentList = departmentList.map(role => {
        return {
          value: role.id,
          name: role.title
        };
      });

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
            //  departmentList
            'Sales',
            'Engineering',
            "Finance",
            'Legal'
          ]
        },
        // fix then
      ]).then(answers => {
        // add columns for role and ? for values and then array.
        db.query(`INSERT INTO role (role.title, role.salary, role.department_id) VALUES (?,?,?);`[answers.roleTitle, answers.roleSalary, answers.roleDepartmentId], (err, res) => {
          if (err) throw err;
          console.log('$(answers.roleName} added to the database');
          init()
        })
      })
    })
  };

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
        viewEmployee();
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
      } 
    })
  };

  function viewEmployee() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT (manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
      init()
    });
  };

  function viewDepartment() {
    const sql = `SELECT department.id, department.name FROM department`
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
      init()
    })
  }

  function viewRoles() {
    const sql = `SELECT role.id, role.title, department.name FROM role LEFT JOIN department ON role.department_id = department.id`
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
      init()
    })
  }
  // const init = () => {
  //   mainMenu();
  // };

  init();