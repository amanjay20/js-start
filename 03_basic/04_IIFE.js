//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
(function chai() {
    console.log(`DB CONNECTED`);
    
})();// ( all function part)(one more paranthese ) at last ; 

((name)=>{ 
    // Named IIFE 
    console.log(`DB CONNECTED  TWO ${name}`);
})("amanjay");

((num1,num2)=>{
    console.log(num1*num2)

})(2,8)