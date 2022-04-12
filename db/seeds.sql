-- departments
-- 1 sales
-- 2 enigineering
-- 3 finance
-- 4 legal

-- roles
-- 1 sales lead
-- 2 salesperson
-- 3 lead engineer
-- 4 software engineer
-- 5 account manager
-- 6 accountant
-- 7 legal team lead
-- 8 lawyer

-- employee names

INSERT INTO departments (id, department)
VALUES (01, 'Sales'),
        (02, 'Engineering'),
        (03, 'Finance'),
        (04, 'Legal');

INSERT INTO roles (id, title, salary, department_id)
VALUES  (01, 'Sales lead', ),
        (02, 'Salesperson'),
        (03, 'Lead Engineer'),
        (04, 'Software Engineer'),
        (05, 'Account Manager'),
        (06, 'Accountant'),
        (07, 'Legal Team Lead'),
        (08, 'Lawyer');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (01, 'John', 'Pohl'),
        (02, 'Marc', 'Petrell'),
        (03, 'Jordan', 'Cantley'),
        (04, 'Larry', 'David'),
        (05, 'Cooper', 'Jackson');