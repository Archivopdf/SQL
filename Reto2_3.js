let mysql = require("mysql2");
// const express = require('express');

// Create connection
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "01121995",
        database: "reto2"
    });

// Connect to MySQL
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected.");
    }
});

//insertar datos en la tabla

// let sql1 = "INSERT INTO students (first_name, last_name, group_id, yearEntry) VALUES (\"Jose\", \"Fernandez\", 1, 2022-08-23)";

// connection.query(sql1, function (err, result) {
//     if (err)
//         console.log(err);

//     else {
//         console.log("The Data was introduced");
//         console.log(result);
//     }
// }
// )


//Setear las notas a 0

// let sql2 = "UPDATE marks SET mark = 0";
// connection.query(sql2, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("The Data was updated");
//         console.log(result);
//     }
// })

// Obtener el nombre y el apellido de los estudiantes

// let sql3 = "SELECT first_name FROM students"

// connection.query(sql3, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("This is the data");
//         console.log(result);
//     }
// })

// let sql99 = "SELECT last_name FROM students"

// connection.query(sql99, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("This is the data");
//         console.log(result);
//     }
// })

// Datos profesores

// let sql4 = "SELECT * FROM teachers"

// connection.query(sql4, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("This is the data");
//         console.log(result);
//     }
// })

//Borrar +10años

// let sql5 = "DELETE FROM marks WHERE date <= (2012)"
// connection.query(sql5, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("The marks with more than 10 years where deleted");
//         console.log(result);
//     }
// })

// // actualizar notas inferiores de 5

// let sql6 = "UPDATE (mark) FROM (marks) SET (mark) = 5  WHERE (mark) <= 5";

// connection.query(sql6, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("The marks had been updated");
//         console.log(result);
//     }
// })

// // Reto1 dia 2

// let sql7 = "SELECT AVG (mark) FROM marks WHERE subject_id =1";

// connection.query(sql7, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("The average mark is:");
//         console.log(result);
//     }
// })

// // sumatorio de alumnos

// let sql8 = "SELECT COUNT (*) AS number_students FROM students"

// connection.query(sql8, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("There are this number of students:");
//         console.log(result);
//     }
// })

// // Listar

// let sql9 = "SELECT (*) FROM groups"

// connection.query(sql9, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("This is the list of groups");
//         console.log(result);
//     }
// })


// // Delete las notas que esten por encima de 5 y sean del año pasado

// let sql10 = "DELETE FROM marks WHERE mark > 5 AND (`date` >= '2021-01-01' AND `date` <= '2021-12-31')"

// connection.query(sql10, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("The marks with more than 5 and a date from a year has been deleted");
//         console.log(result);
//     }
// })

// // Todos los de este año

// let sql11 = "SELECT * FROM students WHERE yearEntry = 2022"

// connection.query(sql11, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("This is the list of the students for this year");
//         console.log(result);
//     }
// })

// // Nº de profesores

// let sql12 = "SELECT  subject_id, COUNT(id_profesor) AS num_profesor FROM subject_teacher BY subject_id";

// connection.query(sql12, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("This is the number of profesors by subject:");
//         console.log(result);
//     }
// })

// // Reto 2 Dia 2

// let sql13 = "SELECT student_id, mark FROM marks WHERE (idstudent BETWEEN 1 AND 20) OR (mark > 8 AND `date` BETWEEN '2021-01-01' AND '2021-12-31')"

// connection.query(sql13, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("Id and mark from the students");
//         console.log(result);
//     }
// })


// // Nota media por asignatura

// let sql14 = "SELECT AVG (mark) FROM marks WHERE subject_id = 1 AND date BETWEEN "2021-01-01" AND "2021-12-30" "

// connection.query(sql14, function (err, result) {

//     if (err)
//         console.log(err);
//     else {
//         console.log("Average mark from subjects: ");
//         console.log(result);
//     }
// })

//  Media aritmetica last year

// let sql15 = "SELECT idstudent, AVG (mark) FROM marks WHERE idstudent AND date BETWEEN "2022-01-01" AND "2022-06-30" GROUP BY idstudent"

// connection.query(sql15, function (err, result) {

//     if (err)
//         console.log(err);
//     else {
//         console.log("Average mark from subjects in the last year: ");
//         console.log(result);
//     }
// })

// Reto1 Dia3

// let sql16 = "SELECT CONCAT (students.first_name, ' ' , students.last_name) AS student, subject.title AS subject FROM marks JOIN students ON marks.student_id = students.student_id JOIN subject ON marks.subject_id = subject.subject_id ORDER BY estudent"

// connection.query(sql16, function (err, result) {

//     if (err)
//         console.log(err);
//     else {
//         console.log("First_name, Last_name and the subjects ");
//         console.log(result);
//     }
// })

// students/signatures, profesor que imparte la asignatura

// let sql17 = "SELECT CONCAT(teachers.first_name, ' ', teachers.last_name) as teacher, subject.title AS subject FROM teachers JOIN subject_teacher ON teachers.teachers_id = subject_teacher.teacher_id JOIN subject ON subject_teacher.subject_id = subject.idsubjects ORDER BY profesor"

// connection.query(sql17, function (err, result) {

//     if (err)
//         console.log(err);
//     else {
//         console.log("First_name, Last_name and the subjects ");
//         console.log(result);
//     }
// })

// numero total de alumnos, la asignatura y el profesor

// let sql18 = "SELECT subject.title AS subject, COUNT(idstudent) AS students_num, CONCAT(teachers.first_name, ' ', teachers.last_name) AS teachers_fullname FROM marks JOIN subjects ON marks.idsubjects = subject.idsubjects JOIN subject_teacher ON subjects.idsubjects = subject_teacher.idsubjects JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id GROUP BY subject ORDER BY subject"

// connection.query(sql18, function (err, result) {

//     if (err)
//         console.log(err);
//     else {
//         console.log("First_name, Last_name and the subjects ");
//         console.log(result);
//     }
// })