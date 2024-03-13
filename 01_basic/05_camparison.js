console.log("2">1); //T (DATA CONVERSION)
console.log("02">1); //T(DATA CONVERSION)

console.log(null>0); //F
console.log(null==0); //F EQUALITY CHECK AMD COMPARISON WORK DIFFERENTLY
console.log(null>=0); //T  CONVERT NULL TO NUM MEANS TREAT AS 0

console.log(undefined>0); //F
console.log(undefined==0); //F
console.log(undefined<0); //F

//=== => strict check (data+data type)
console.log("2"===2); // F (DATATYPE DIFFERENT)
 
