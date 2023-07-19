const mysql = require("mysql");
const bodyparser = require("body-parser");

const express = require("express")
const app = express();
const port = 8081;
app.listen(port, () => {
    console.log(`Demo for express module ${port}`)
});

app.use(bodyparser.json());

const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"root123",
    database: "empl",
    multipleStatements: true

});

conn.connect((err) => {
    if(err){
        console.log("Connection failed" + JSON.stringify(err, undefined, 2),err);
    }else{
        console.log("Connection has been established !!");
    }
});

////Creating GET Router to fetch all the learner details from the MySQL Database

app.get("/emp" , (req, res) => {
    conn.query("Select * from employee", (err, rows, fields) => {
        if(err){
            console.log("ERROR");
        }else{
            res.send(rows);
        }
    })

});

// //Router to GET specific learner detail from the MySQL database

app.get("/emp/:id", (req, res) => {
    conn.query("Select * from employee where learner_id =?", [req.params.id], (err, rows, fields) => {
        if(err){
            console.log("ERROR");
        }else{
            res.send(rows);
        }
    });
})

// insert the learner employee

app.post("/emp", (req, res) => {
    let learner = req.body;
    console.log(learner);
    var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddorEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
conn.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
if (!err)
rows.forEach(element => {
if(element.constructor == Array)
res.send('New Learner ID : '+ element[0].learner_id);
});
else
console.log(err);
})
});

// update the date into employee table
app.put("/emp", (req, res) => {
    let learner = req.body;
    console.log(learner);
    var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddorEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
conn.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
if (!err)
rows.forEach(element => {
if(element.constructor == Array)
res.send("employee details updated !!");
});
else
console.log(err);
})
});

//delete employee details 

app.delete("/emp/:id", (req, res) => {
    conn.query("delete from employee where learner_id = ?", [req.params.id] , (err, rows, fields) => {
        if(err){
            console.log("ERROR", err);
        }else{
            res.send("Employee details has been deleted !!")
        }
    })
})



