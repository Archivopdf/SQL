const connection = require("./database")

let getAverage = (req, res) => {
    console.log(req.query.id);
    let sql;
    if (req.query.id != "")
        sql = "SELECT student_id, AVG (mark) FROM marks WHERE student_id=" + req.query.id

    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

module.exports = { getAverage }