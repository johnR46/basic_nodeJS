const express = require('express');

const app  = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('profile');

});
app.listen(3000);