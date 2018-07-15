let names = ['James','Jon','Babatola'];
//
// names.forEach(function (name) {
//     console.log('forEach',name);
// });
//
// names.forEach((name)=>{
//     console.log('arrFunc',name);
// });
//
// names.forEach( (name) => console.log('singlforEach',name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jon'));

var person = {
    name: 'Jon',
    greet: function () {
        names.forEach( (name) => {
            console.log(this.name + 'says hi to '+name);
        })
    }
};

// person.greet();

function add(a,b) {
    return a+b;
}
// console.log(add(4,7));
// console.log(add(9,0));

var addStmt = (a,b) =>{
    return a+b;
};
// console.log(addStmt(9,8));

var addExprStmt = (a,b) => a+b;

console.log(addExprStmt(79,-88));
