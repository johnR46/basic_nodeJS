const fs = require('fs');
let data = '';
var readStream = fs.createReadStream('readmd.txt');
readStream.setEncoding('utf8');

readStream.on('data',(txt)=>{
    data += txt;
});

readStream.on('end',()=>{
    console.log(data)
})



readStream.on('error',(err)=>{
    console.log(err.stack);
})