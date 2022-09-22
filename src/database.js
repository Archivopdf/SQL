const mysql = require("mysql2")


const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "01121995",
        database: "reto2"
    }
)

connection.connect((err) => {

    if (!err) {
        console.log("Connected to school data base");
    } else {
        console.log(err);
    }
})

module.exports = connection;