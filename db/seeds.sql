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

INSERT INTO department (name)
VALUES ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales lead', 80000, 1),
        ('Salesperson', 50000, 1),
        ('Lead Engineer', 130000, 2),
        ('Software Engineer', 100000, 2),
        ('Account Manager', 90000, 3),
        ('Accountant', 70000, 3),
        ('Legal Team Lead', 85000, 4),
        ('Lawyer', 65000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Pohl', 2, null),
        ('Marc', 'Petrell', 3, null),
        ('Jordan', 'Cantley', 1, null),
        ('Larry', 'David', 4, null),
        ('Cooper', 'Jackson', 2, null);