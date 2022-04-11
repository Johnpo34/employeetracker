const fs = require('fs');

const mainPrompts = [
    {
        type: 'list',
        name: 'mainPrompts',
        mesaage: 'What would you like to do?',
        choices: [
            'view departments',
            'view roles',
            'view employees',
            'add department',
            'add role',
            'add an employee',
            'update employees role',
            'update emplyees manager',
            'view a managers team',
        ]
    },
];

const departmentPrompts = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the new department called?',
    }
];

module.exports = {mainPrompts, departmentPrompts}