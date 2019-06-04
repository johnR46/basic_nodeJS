const express = require('express');

const app  = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello User </h1>")
});

app.use('/user/profile/:name',(req,res,next)=>{
    console.log("Request: " + req.params.name +" " + new Date(),req.method,req.url);
})

// app.get('/user/profile/:name',(req,res)=>{
//     res.send("<h1>Node JS tutorial  by  " + req.params.name +  " </h1>")
// });
app.listen(3000);