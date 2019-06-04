const express = require('express');

let routeing = express();
routeing.get('/home',(req,res)=>{
    res.send("<h1>HelloWorld</h1>");
});

routeing.listen(3000);