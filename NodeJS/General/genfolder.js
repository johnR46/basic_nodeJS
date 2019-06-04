const fs = require('fs');

for(let i = 1; i < 20;i++){
    fs.mkdirSync('part_' + i);
}