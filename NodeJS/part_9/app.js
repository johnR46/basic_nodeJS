let buf1  = new Buffer("John nonphala ");
let buf2  = new Buffer("tutorial");
let buf3  = Buffer.concat([buf1,buf2]);


console.log(buf3.toString());
// let json = buf3.toJSON(buf3);
// console.log(json);