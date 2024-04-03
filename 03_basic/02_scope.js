var c=300000// no change c=100 fixed
let a=200// now a =200 print

if (true) {
    let a=10
    const b=50
    var c=100
    console.log("Inner",a);// Inner 10 print
    
}
console.log(a);// error a is in local scope
// console.log(b);// same error 
console.log(c);// print 100 (VAR) that why var is not used

function one(){
    const username="amajaychaudhary"
    console.log("hello function one");
    function two(){
        const website="http//hiteshyoutobe"
        console.log(username);
    }
    // console.log(website);// Give error because website is in local space(function two)
    two()
}
one()// first this function print then upper function (funct two)

/**********************************************INTERESTING ***********************************/
console.log(ADDONE(5))// 6
function ADDONE(num) {
    return num+1
    
}

console.log(addtwo(5))//Cannot access 'addtwo' before initialization

const addtwo=function (num) {
    return num+2
    
}
addtwo(5)