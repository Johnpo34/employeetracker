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
VALUES  (01, 'Sales lead', 80000, 1),
        (02, 'Salesperson', 50000, 1),
        (03, 'Lead Engineer' 130000, 2),
        (04, 'Software Engineer' 100000, 2),
        (05, 'Account Manager' 90000, 3),
        (06, 'Accountant' 70000, 3),
        (07, 'Legal Team Lead' 85000, 4),
        (08, 'Lawyer' 65000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (01, 'John', 'Pohl', 2, null),
        (02, 'Marc', 'Petrell', 3, 5),
        (03, 'Jordan', 'Cantley', 1, null),
        (04, 'Larry', 'David', 4, 7),
        (05, 'Cooper', 'Jackson', 2, 3);