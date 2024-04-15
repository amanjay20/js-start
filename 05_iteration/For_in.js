const myobject={
    js:"javascript",
    py:"python",
    rb:"ruby",
}
for (const key in myobject) {
    console.log(`${key} SHORTCUT IS FOR ${myobject[key]}`);//object and array used for in 
}
//output is 
//js SHORTCUT IS FOR javascript
// py SHORTCUT IS FOR python
// rb SHORTCUT IS FOR ruby

const myarray=[1,2,3,4,5,6,7]
for (const item in myarray) {
    console.log(`myarray contains ${item}`);
    
}
//output 
// myarray contains 0
// myarray contains 1
// myarray contains 2
// myarray contains 3
// myarray contains 4
// myarray contains 5
// myarray contains 6
