const num=400

const balance = new Number(400);

console.log(num);
console.log(balance);

console.log(balance.toString().length);// chnaged the num to string
console.log(balance.toFixed(3));// (2)->400.00 , (3)-> 400.000
console.log(balance.toFixed(1));//(1)-> 400.0

const newnumber=123.567
console.log(newnumber.toPrecision(2)); // 1.2 e+2
console.log(newnumber.toPrecision(3));// 124
console.log(newnumber.toPrecision(5));// 123.57

const hundreds=1000000
console.log(hundreds.toLocaleString());// 1,000,000 in US format
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//*******************************************MATHS **************************************************/

console.log(Math);
console.log(Math.abs(-35));// ABSOLUTE MEANS ALL NEG TO POS
console.log(Math.round(7.9));//8
console.log(Math.max(2,8,9,7));//9
console.log(Math.min(2,9,5,6));// 2

console.log(Math.random());// EVERYTIME VALUE FROM 0 TO 1 


console.log((Math.random()*10))+1;// NOW MIN VALUE IS 1 TO 9

console.log(Math.floor(Math.random()*10)+1);// floor to get a number not a decimal number 

//****we want a range (min , max) ***********/
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);// we get  num  range from 10 to 20