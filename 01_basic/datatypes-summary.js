// TWO TYPE OD DATA TYPES IN JS
//1.PRIMITIVE
//2.NON-PRIMITIVE(REFERENCE TYPE)

// PRIMITIVE DATA TYPE
// 7 TYPES : STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL , BIGINT

const id= Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId); // false (symbol)

const bignumber=565553453345335435433n // just n it changed to BIGINT
console.log(typeof(bignumber));

//REFERENCE (N0N - PRIMITIVE)
// ARRAY ,OBJECT , FUNCTION

const hero=["shkatiman","krrish","naagraj"] // array
let myobj={ // object same as dict in python
    name:"amanjay",
    age:23
}

const myfunction= function(){ // function
    console.log("hello world");
}
console.log(typeof(myobj));

// EVERY NON PRIMITIVE DATA TYPE IS OBJECT