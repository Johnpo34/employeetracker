DROP DATABASE IF EXISTS
CREATE DATABASE

USE

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
    --id is primary key
    id INT NOT NULL
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    -- id is primary key
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);