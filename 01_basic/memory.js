//TWO TYPE OF MEMORY 
//STACK
// HEAP 

// STACK(Primitive) , HEAP(non-primitive)
let youtubename="hieshchaudharycom"
let anothername=youtubename
anothername="amanjayoutube"

console.log(youtubename);
console.log(anothername); // STACK diagram 

let userone={
    email:"amanjay@google",
    upi:"jay@ybl",

}
let usertwo=userone
usertwo.email="chaudhary@gmail.com"

console.log(userone.email);
console.log(usertwo.email); // both same chaudhary@gmail