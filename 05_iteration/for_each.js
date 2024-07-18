const coding=["js","python","ruby","cpp"]
coding.forEach(function(val){
    // console.log(val)
})
// js
// python
// ruby
// cpp

// USING CALL BACK FUNCTION

// coding.forEach( (item)=>{
//     console.log(item)
// }) give same ouput as above code

// NOW MAKE A FUNCTION WITH BASIC WORKING AND THEN CALL IT
function printme(item){
    console.log(item)
}
coding.forEach(printme) 
// same output as above but writing style is different

// FOR EACH CONSISTS OF  INDEX , ARR

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})
// js 0 [ 'js', 'python', 'ruby', 'cpp' ]
// python 1 [ 'js', 'python', 'ruby', 'cpp' ]
// ruby 2 [ 'js', 'python', 'ruby', 'cpp' ]
// cpp 3 [ 'js', 'python', 'ruby', 'cpp' ]

// VERY IMPORTANT [{}] (OBJECT IN ARRRAY)
const mycodinglang=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"c++",
        languageFileName:"cpp" 
    },
    {
        languageName:"python",
        languageFileName:"py"
    }

]
mycodinglang.forEach( (item)=>{
    console.log(item.languageFileName)
    console.log(item.languageName)
})
// first console output
// js
// javascript
// cpp

// second console output
// c++
// py
// python