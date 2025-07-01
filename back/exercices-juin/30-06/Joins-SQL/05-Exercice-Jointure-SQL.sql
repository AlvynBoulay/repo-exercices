-- Création de la base de données
CREATE DATABASE IF NOT EXISTS AcademyAFEC;
USE AcademyAFEC;

-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS Exam;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS Course;

-- Table des cours
CREATE TABLE Course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    course_level VARCHAR(50)
);

-- Table des étudiants
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_year INT,
    registration_year INT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);

-- Table des examens
CREATE TABLE Exam (
    exam_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    score DECIMAL(4,2),
    exam_type VARCHAR(50),
    exam_date DATE,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);

-- Données pour les cours
INSERT INTO Course (course_id, course_name, course_level) VALUES
(1, 'Développement Web', 'Bac+2'),
(2, 'Data Analyst', 'Bac+3'),
(3, 'Cybersécurité', 'Bac+3'),
(4, 'Intelligence Artificielle', 'Master');

-- Données pour les étudiants
INSERT INTO Student (student_id, first_name, last_name, birth_year, registration_year, course_id) VALUES
(1, 'Sofia', 'Martin', 2000, 2023, 1),
(2, 'Ali', 'Kacem', 1999, 2023, 2),
(3, 'Julie', 'Durand', 2001, 2022, 3),
(4, 'Karim', 'Belaid', 2000, 2023, NULL),
(5, 'Emma', 'Rossi', 1998, 2021, 4),
(6, 'Tom', 'Lemoine', 2002, 2023, 2),
(7, 'Ines', 'Ndiaye', 2001, 2022, NULL);

-- Données pour les examens
INSERT INTO Exam (exam_id, student_id, course_id, score, exam_type, exam_date) VALUES
(1, 1, 1, 15.5, 'Projet', '2024-01-15'),
(2, 2, 2, 13.0, 'Écrit', '2024-02-10'),
(3, 2, 2, 16.0, 'Oral', '2024-02-18'),
(4, 3, 3, 14.0, 'Écrit', '2024-01-20'),
(5, 5, 4, 17.5, 'Mémoire', '2024-03-01'),
(6, 6, 2, 10.5, 'Écrit', '2024-02-10'),
(7, 1, 1, 18.0, 'Oral', '2024-01-30');
