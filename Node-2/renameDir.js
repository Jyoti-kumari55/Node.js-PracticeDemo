const fs = require("fs");
// renameSync function rename the old path name to new path name....
        // fs.renameSync("./lib/config.dir.js" , "./lib/projectConfig.js");
        // console.log("config.js file renamed ...");

    // fs.rename("./lib/notes.md", "./notes.md" ,function(err){
    //     if(err){
    //         throw err;
    //     }else{
    //         console.log("File has been renamed..");
    //     }
    // });

    // unlinkSync function delete the file path
//fs.unlinkSync("./lib/projectConfig.js");

fs.unlink("./notes.md", function(err){
    if(err){
        console.log("ERROR");
    }
    else{
        console.log("File is gone..")
    }
});