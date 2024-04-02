function saynyname() {
    console.log("helllo");
    console.log("this is jay ");
    
}

saynyname()// only saymyname meaans REFRENCE  and () this means exceution

function addTwoNumber(number1,number2){
    return number1+number2
}
const result=addTwoNumber(3,8)
console.log("Result",result);
 
function loginusermessage(username) {//if we write userame="bob " we are giving a default value bob 
    if (!username){//username===undefined
       console.log("please enter a user name");
       return 

    }
    return `${username} just logged in `
    
}
console.log(loginusermessage(""));

function calculateCartPrice(var1,var2,...num1){//... is REST operator. (var1,var2,...num1) then first two argument takes var1 and var2 position rest goes in num1 .
    return num1

}
console.log(calculateCartPrice(200,400,300,400,500));//[300,400,500]

/* ADD OBJECT IN FUNCTION */

const user={//make an object for below function
    username:"hitesh",
    age:22
}
function handleObject(anyObject){//make an object with parameter named (anyobject)
    console.log(`hello my name is ${anyObject.username} and my age is ${anyObject.age}.`);

}
// handleObject(user);// pass user as argument 
handleObject({
    username:"sam",
    age:21

})
/* Pass array in function */
const mynewarray=[100,200,300,500]
function returnSecondValue(getanarray) {
    return getanarray[1]
    
}
console.log(returnSecondValue(mynewarray))