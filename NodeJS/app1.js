const fs = require('fs');

let readMe  = fs.readFileSync("code.txt","utf8");
console.log(readMe);
