const https = require("http");

const url = require("url");

const server = https.createServer(function(req, res){

    res.writeHead(200, ("Content-Type", "text/html"));
    console.log(req.url)
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
});

server.listen(8082);