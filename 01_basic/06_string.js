// STRING INTERPOLATION

const name=  new String("amanjay")
const age = 23


console.log(`hello i am ${name} and my age is ${age} . thank you this`);

//Another method to declare String

const gameName= new String("I-am-aman-jay") // declare new string
console.log(gameName.indexOf('j'));
console.log(gameName.charAt(3));
console.log(gameName[5]);
console.log(gameName.__proto__);//object

// DIFF in SLICING AND SUBSTRING

const newString=gameName.substring(0,4)
console.log(newString);//Iama

const anotherstring=gameName.slice(-8,4)
console.log(anotherstring);//

const newstringone="  aman  "
console.log(newstringone);
console.log(newstringone.trim());// TRIM both side white-space 

const url="http://amanjay.com/amanjay%20chaudhary"
console.log(url.replace('%20','kumar')); // replace %20 to kumar 

console.log(url.includes('amanjay'));// INCLUDE check the string either it present or not

console.log(gameName.split('-'));//RETURN ARRAY[I,AM,AMAN]
