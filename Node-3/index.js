import express from "express";
import data from "./data/MOCK_DATA.json" assert {type:"json"};
const app = express();
const port = 8083;

//get request
app.get("/", (req, res) =>{
    res.json(data);
})
// Redirect method
app.get("/redirect", (req, res) => {
    res.redirect("http://www.linkedin.com")
});

//Route chaining
app.route("/class")
.get((res, req) => {
    res.send("Retrieve class info.")
})
.post((res, req) => {
    res.send("Create class info.")
})
.put((res, req) =>{
    res.send("Update class info.")
})

app.listen(port, () => {
    console.log(`The server is running on the port ${port}`)
});