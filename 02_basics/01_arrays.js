/*Array declaration */
const Myarr=[0,1,2,3,4,5]
const myHero=["ironman","hulk"]

const myArr2=new Array(1,2,3,4,true)
console.log(myArr2[4]);//true

/*Array methods */

myArr2.push(8)//add 8 in end
myArr2.push(9)// add 9 in end
myArr2.pop() // remove the last element
myArr2.unshift(9) // shift and add to first place of array
myArr2.shift()// we add 9 in upper line and when we  use shift it delete first element
console.log(myArr2.includes(19));// if not present it give -1 else gove bool value (t or f) 
console.log(myArr2.indexOf(3));//3
console.log(myArr2);

const newArr=myArr2.join()
console.log(newArr);// 1,2,3,4,true,8 ..change array into string



/* MAIN DIFFERENCE BETWEEN SLICE AND SPLICE  */
console.log("a",Myarr);// a [0,1,2,3,4,5]
const myn1=Myarr.slice//(1,3)
console.log(myn1);//[1,2]

console.log("B",Myarr); // B [0,1,2,3,4,5]
const my2=Myarr.splice(1,3)
console.log(my2);//[1,2,3] ELEMENT THAT REMOVE GIVE OUTPUT IN SPLICE 

