let http = require('http');

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/plain'});
res.end("HelloWorld");
}).listen(8081,'127.0.0.1');


