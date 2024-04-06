// for of loop
const array=[1,2,3,4,5]
for (const num of array) {
    // console.log(num);
    
}
const greeting="hello user how are you ?"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}
//MAP
const mymap=new Map()
mymap.set('In','India')
mymap.set('UK','united kingdom')
mymap.set('US','united state')
console.log(mymap);
for (const [key,value ]of mymap) {
    console.log(key,':-',value);
}
/*MAP IS ITERATABLE  BUT OBJECT IS NOT ITERATABLE */