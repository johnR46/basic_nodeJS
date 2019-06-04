const fs = require('fs');
let data = "UMPG Publishing, Sony ATV Publishing, and 6 Music Rights Societies";


let writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',()=>{
    console.log('finish');
})


