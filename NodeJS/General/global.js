console.log(__filename)
console.log(__dirname) // global obj



function printHello(){
console.log('hello ');
}

// let t = setTimeout(printHello,2000);

// clearTimeout(t)



setInterval(printHello,2000); // loop call 