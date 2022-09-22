const connection = require("./database")

let getMark = (req, res) => {
    console.log(req.query.id);
    let sql;
    if (req.query.id == null)
        sql = "SELECT * FROM marks";
    else
        sql = "SELECT student_id, subject_id, ,mark from marks WHERE id_student=" + req.query.id;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }

    })
}

let postMark = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO marks (student_id, subject_id, date, mark)" +
        "VALUES ('" + req.body.student_id + "','" + req.body.subject_id + "' ,'" + req.body.date + "', '" + req.body.mark + "')"
    console.log(sql);
    connection.query(sql, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
                res.send("-1")
        }
    })
}

let putMark = (req, res) => {
    console.log(req.body);

    let sql = `UPDATE marks SET student_id = ${req.body.student_id}, 
                    subject_id = ${req.body.subject_id}, 
                    date = "${req.body.date}", 
                    mark = ${req.body.mark} 
                WHERE id_mark = ${req.body.mark_id}`

    console.log(sql);
    connection.query(sql, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.send(result);
        }
    })
}

let deleteMark = (req, result) => {
    console.log(req.body);
    let sql = `DELETE FROM marks WHERE id_mark = ${req.body.marks_id}`
    console.log(sql);
    connection.query(sql, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.send(result);
        }
    })
}

module.exports = { getMark, postMark, putMark, deleteMark }