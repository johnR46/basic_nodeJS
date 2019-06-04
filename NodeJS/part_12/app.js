const fs = require('fs');

let reader =  fs.createReadStream('code.txt');
let writer = fs.createWriteStream('file1.txt');

reader.pipe(writer);


// path 12 โครตว่างยา 5555