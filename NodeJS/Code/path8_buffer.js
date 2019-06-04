 //let buf = new Buffer("John Nonphala","utf8");
// console.log(buf.toString());
// console.log(buf);



// let buf = new Buffer(200);

// len = buf.write('John Nonphala');

// // console.log(len);


// console.log(buf.toLocaleString());


let buf = new Buffer(26);

for (let i = 0;i<26;i++){
    buf[i] = i+97;
}

console.log(buf.toString('utf8'))