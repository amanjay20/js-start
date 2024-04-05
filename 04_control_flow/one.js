const score=200
if (score>100){
    const power="fly"
    console.log(`user power ${power}`);
}
// console.log(`user power ${power}`);// Give error becasue power is declared inside a function 

amount=1000
if (amount>500) console.log("test");// Implicit  scope (means i suppose that space is scope)

const IsuserLogged=true
const debitCard=true
const isLoggedfromGoggle=false
const isLoggedfromEmail=true
const guesstUserLoggedin=true
if (IsuserLogged && debitCard) console.log("Allow to buy course");//AND 

if (isLoggedfromEmail || isLoggedfromGoggle || guesstUserLoggedin){//OR 
    console.log("user logged in");
}