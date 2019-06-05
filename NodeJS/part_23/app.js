const express = require('express');

const app  = express();

app.set('view engine','ejs');

app.get('/showFrom',(req,res)=>{
  
    res.sendFile(__dirname + "/" + "showForm.html");

});


app.get('/showData',(req,res)=>{
  
    data={
        fname : req.query.fname,
        lname : req.query.lname
    };

    console.log(data);

    res.send(JSON.stringify(data))

});

app.listen(3000);