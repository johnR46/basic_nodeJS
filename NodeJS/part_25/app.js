const express = require('express');
const cookie = require('cookie-parser')
const app  = express();
app.use(cookie());

app.set('view engine','ejs');

app.get('/createCookie',(req,res)=>{
  
    res.cookie('myCookie','johnNonphala');
    res.end('Create Cookie');

});


app.get('/delCookie',(req,res)=>{
  
    res.clearCookie('myCookie');
    res.end('delete Cookie');

});




app.listen(3000);