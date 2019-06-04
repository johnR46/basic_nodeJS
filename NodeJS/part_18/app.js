const express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello User </h1>")
});

app.get('/user/profile/:name',(req,res)=>{
    res.send("<h1>Node JS tutorial  by  " + req.params.name +  " </h1>")
});
app.listen(3000);