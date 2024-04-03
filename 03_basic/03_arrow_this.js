const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.username}, welcome to this website`);
        // console.log(this);

        
    }
}
// user.welcomeMessage()//hitesh,welcome...
// user.username="sam"
// user.welcomeMessage()//sam,welcome ....
console.log(this);//{} BUT IN BROWSER IT GIVE WINDOW AS INPUT 

function chai() {
    let username="jay"
    console.log(this.username);
    
}
chai()//undefined (because this is not used in function)

const chai2=()=>{// ARROR FUNCTION DECLARATION
    let username="hitesh"
    console.log(this.username);//undefined (for only this we get {})
}
chai2()
/*******************************ARROW FUNCTION****************/

const addtwo=(num1,num2)=>{// Arrow function intro+syntax
    return num1+num2
}
console.log(addtwo(3,6));
//ANOTHER METHOD 
const addthree=(num1,num2,num3)=> (num1+num2+num3)// second method (Implicit ) if { }=>use return (line no-31) but if () donot use return (line=35)
console.log(addthree(2,3,4));

//we want to return object 
const name=(num1,num2)=>({username:"amanjay"})
console.log(name(2,7)); //{ username: 'amanjay' }