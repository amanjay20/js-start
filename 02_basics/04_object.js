const tinderuser={}
tinderuser.id="aarnav"
tinderuser.age=24
tinderuser.isLoggedIn=false

// console.log(tinderuser);

const reguser={
    email:"chaudhary@gmail.com",
    fullname:{
        ussrfullname:{
            firstname:"arnav",
            lastname:"chaudhary"

        }

    }
}
console.log(reguser.fullname.ussrfullname);

/* ADD TWO OBJECT */
const arr1={1:"a",2:"c"}
const arr2={3:"d",4:"k"}

const arr3={arr1,arr2}
console.log(arr3);//{ arr1: { '1': 'a', '2': 'c' }, arr2: { '3': 'd', '4': 'k' } }
const new_method=({},arr1,arr2)// target,audience same output 
const arr4={...arr1,...arr2}// spread method 
console.log(arr4);

console.log(Object.keys(tinderuser))//[ 'id', 'age', 'isLoggedIn' ] RETURN ARRAY
console.log(Object.values(tinderuser));//[ 'aarnav', 24, false ] SAME RETURN ARRAY

console.log(tinderuser.hasOwnProperty("age"));// hasownproperty to check either it exits in object or not (res-TRUE)