const fs = require("fs");

let md = `This is a new file
==============================

read write and append a new file`;

fs.writeFile("NewFile.md", md.trim(), function(){
    console.log("Markdown Created")
});