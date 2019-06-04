const pi = 3.14;


let obj = {};
obj.updateData =(()=>{
    console.log('Update Data');
})
obj.deleteUser=(()=>{
    console.log('delete  User');
})



let update = (()=>{
    return "Update server ...";
    });
    
    let add = ((a, b) => {
        return a + b;
    });

exports.pi = pi;
exports.add = add;
exports.update = update;

exports.data = obj;