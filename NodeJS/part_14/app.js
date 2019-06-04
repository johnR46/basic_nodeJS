const  http = require('http');
const fs = require('fs');
let myuser = {
    "name":"John Nonphala",
    "job":"Programmer",
    "age":80
}

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application/json'});

//let myStream = fs.createReadStream(__dirname + "/index.html",'utf8');
//myStream.pipe(res);
res.end(JSON.stringify(myuser));
}).listen(8081,"127.0.0.1");


