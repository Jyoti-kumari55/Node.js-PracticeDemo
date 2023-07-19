const express = require("express");
const {operation} = require("./Calculate")
const demo = express();

const port  = 8081;

demo.listen(port, () => {
    console.log(`Demo for express module ${port}`)
});

// demo.get("/" , function(req, res) {
//     console.log(req.query)
//     // const value = operation(req.query.x, req.query.y, req.query.op)
//     const {x,y,op} = req.query;
//     const value = operation(x, y,op)
//     res.send(`Result : ${value}`)

// });

demo.get("/:opr" , function(req, res) {
    console.log(req.query,req.params)
    // const value = operation(req.query.x, req.query.y, req.query.op)
    const {x,y} = req.query;
    const value = operation(x, y,req.params.opr)
    res.send(`Result : ${value}`)

});