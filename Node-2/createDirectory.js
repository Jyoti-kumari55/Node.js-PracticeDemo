const fs = require("fs");

// existsSync function Returns true if the path exists, false otherwise.
if (fs.existsSync("Our-file-dir")){
    console.log("file already there...")
}else{
    //mkdir function is used to create a directory...
    fs.mkdir("Our-file-dir", function(err){
        if(err){
            console.log("ERROR Occur !!");
        }else{
            console.log("directory created...")
        }
        });
    };

       
                

