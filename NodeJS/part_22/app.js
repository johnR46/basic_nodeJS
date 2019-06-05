const express = require('express');

const app  = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let data = {name:"john nonphala",age:22,job:"programmer"};

    res.render('profile',{user:data});

});

app.get('/contact',(req,res)=>{
  

    res.render('contact');

});


app.get('/database',(req,res)=>{
  

    res.render('database');

});

app.listen(3000);