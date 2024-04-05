const useremail=[]

if (useremail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}
//FALSY VALUE
//FALSE,0,-0,NULL,UNDEFINED ,NAN,BIGiNT 0n.""

//TRUTHY VALUE
//" ","0","FALSE",[],{},FUNCTION {}

//check if array is present and empty
if (useremail.length===0){
    console.log("Array is empty");
}

// check if object is present and empty
const myobj={}
if (Object.keys(myobj).length===0){
    console.log("Object is empty");
}

//IMPOTANT FOR INTERVIEW PURPOSE
// FALSE==0//TRUE
// FALSE==" "//TRUE
// 0==" "//TRUE

//NULLISH COALESCING OPERATOR(??)
let var1;
var1=5??80
var2=null??29
var3=undefined??23
console.log(var1);//5
console.log(var2);//29
console.log(var3);//23

//TERNARY OPERATOR
//condition ? true:false

const schoolFee=1200
schoolFee>=1000 ? console.log("fees is grater"): console.log("fees is lowerer");

