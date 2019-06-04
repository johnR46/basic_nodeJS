// console.log('Hello World');  // ;---------;
// for(let i = 1;i<=10;i++){
//     console.log(i)
// }


let response = require('./method.js')

console.log(response.update());

console.log(response.pi);

console.log(response.data)



response.data.deleteUser();