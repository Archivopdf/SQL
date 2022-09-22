const mysql = require("mysql2")


const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "reto2"
    }
)

connection.connect((err) => {

    if (!err) {
        console.log("Connected to bdd_shool");
    } else {
        console.log(err);
    }
})

module.exports = connection;