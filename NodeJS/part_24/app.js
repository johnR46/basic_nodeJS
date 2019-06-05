const express = require('express');
const body  =require('body-parser')
const app  = express();
app.use(body());

app.set('view engine','ejs');

app.get('/showForm',(req,res)=>{
  
    res.sendFile(__dirname + "/" + "showForm.html");

});


app.post('/showData',(req,res)=>{
  
    data={
        fname : req.body.fname,
        lname : req.body.lname
    };

    console.log(data);

    res.send("<h1>" + data.fname  + "</h1>")

});

app.listen(3000);