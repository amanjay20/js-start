const myobject={
    js:"javascript",
    py:"python",
    rb:"ruby",
}
for (const key in myobject) {
    console.log(`${key} SHORTCUT IS FOR ${myobject[key]}`);//object and array used for in 
}

const myarray=[1,2,3,4,5,6,7]
for (const item in myarray) {
    console.log(`myarray contains ${item}`);
    
}