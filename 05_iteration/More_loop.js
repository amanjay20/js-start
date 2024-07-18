// for of loop
const array=[1,2,3,4,5]
for (const num of array) {
    // console.log(num);
    
}
const greeting="hello?"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}
// output 
// each char is h
// each char is e
// each char is l
// each char is l
// each char is o
// each char is ?
//MAP
const mymap=new Map()
mymap.set('In','India')
mymap.set('UK','united kingdom')
mymap.set('US','united state')
console.log(mymap);
for (const [key,value ]of mymap) {// for map we used for of 
    console.log(key,':-',value);
}
// output 
// Map(3) {
//   'In' => 'India',
//   'UK' => 'united kingdom',
//   'US' => 'united state'
// }
// In :- India
// UK :- united kingdom
// US :- united state
/*MAP IS ITERATABLE  BUT OBJECT IS NOT ITERATABLE */
/*WHY OBJECT IS NOT ITERATABLE*/
Let myobj={
    'game1':"NFS",
    'game2':"IGI"
}
for (const [key,value] of myobj){
    console.log(key,'-',value) // OUTPUT :- OBJECT IS NOT ITERABLE
}




    
}
