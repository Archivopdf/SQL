let mysql = require("mysql2");
// const express = require('express');

// Create connection
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "01121995",
        database: "codenotch"
    });

// Connect to MySQL
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected.");
    }
});

// Crear una tabla
let sql1 = "CREATE TABLE curso (id INT AUTO_INCREMENT PRIMARY KEY, participantes INT , año INT)";

connection.query(sql1, function (err, result) {
    if (err)
        console.log(err);
    else
        console.log("Tabla creada");
    console.log(result);

})

// insertar un dato en la tabla
let sql2 = "INSERT INTO curso (participantes, año) VALUES ( 38, 2020)";

connection.query(sql2, function (err, result) {
    if (err)
        console.log(err);

    else {
        console.log("Inserted data");
        console.log(result);
    }
})

// borrar una tabla
let sql3 = "DROP TABLE curso";

connection.query(sql3, function (err, result) {
    if (err) throw err;
    console.log("Successfully deleted");
})

// connection.end();