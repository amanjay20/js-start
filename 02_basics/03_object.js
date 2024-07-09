// object literal
const mysymb= Symbol("key")
const myobj={
    name:"amanjay",
    [mysymb]:"new",
    "last name":"chaudhary",
    city:"jehanabad",
    age:22,
    lastlogin:["monday","saturday"]

}
// console.log(myobj.last name);
console.log(myobj["last name"]);
console.log(typeof myobj[mysymb]);

myobj.city="bhopal"
//Object.freeze(myobj)// AFTERWARD VALUE DON'T CHANGE
myobj.city="kota"


console.log(myobj);//[Symbol(key)]: 'new' MAIN THINNG IN ALL LINE

myobj.greeting= function(){
    console.log("hello js user");
}
myobj.greeting2=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(myobj.greeting());

console.log(myobj.greeting2());

console.log(myobj);

// hello js user
// undefined
// hello js user amanjay
// undefined
// {
//   name: 'amanjay',
//   'last name': 'chaudhary',
//   city: 'jehanabad',
//   age: 22,
//   lastlogin: [ 'monday', 'saturday' ],
//   greeting: [Function (anonymous)],
//   greeting2: [Function (anonymous)],
//   [Symbol(key)]: 'new'
// }
