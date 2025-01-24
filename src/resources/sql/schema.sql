CREATE DATABASE p_00104; USE
    p_00104;
    -- Users table
CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(20) NOT NULL,
    -- Consider hashing passwords in a real application
    user_type ENUM('admin','manager','employee','user') DEFAULT 'manager'
);
-- Employees table
CREATE TABLE employees(
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(255) NOT NULL,
    emp_image TEXT NOT NULL,
    emp_email VARCHAR(255) UNIQUE NOT NULL,
    emp_designation VARCHAR(255) NOT NULL,
    emp_phone_no VARCHAR(20)
);
-- Clients table
CREATE TABLE clients(
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_place VARCHAR(255),
    client_image TEXT NOT NULL
);
-- Projects table
CREATE TABLE projects(
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_desc TEXT,
    project_type VARCHAR(255),
    project_start_date DATE,
    project_end_date DATE,
    project_place VARCHAR(255),
    project_image TEXT,
    client_id INT,
    FOREIGN KEY(client_id) REFERENCES clients(client_id)
);