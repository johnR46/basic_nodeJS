const fs = require('fs');

let readMe = fs.readFileSync("code.txt", "utf8");

fs.mkdir('Project', () => { // สร้างโฟล์เดอร์เสร็จละทำไรต่อ 
    console.log(readMe);
    fs.writeFileSync('./Project/Readme.txt', readMe);

});

