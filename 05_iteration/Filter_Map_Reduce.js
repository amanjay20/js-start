const coding=["js","python","ruby","cpp","c++","java"]
const values=coding.forEach( (item)=>{
    // console.log(item)
    // return item (output is same - undefined)
})
console.log(values)
// js
// python
// ruby
// cpp
// c++
// java
// undefined***********************************(for each never return)

// FOR UPPER PROBLEM WE USED FILTER 
const num=[1,2,3,4,5,6,7,8,9]
const result=num.filter( (item)=>{
    // console.log(item) -----> print []
    return item>4
} )
console.log(result)
// ------->[5,6,7,8,9]

// EXAMPLE OF FILTER METHOD

const book=[
    {
       title:"book one",
       genre:"History",
       publish:"1890" 
    },
    {
        title:"book two",
        genre:"Sci-fic",
        publish:"1998" 
     },
     {
        title:"book three",
        genre:"Economics",
        publish:"1880" 
     },
     {
        title:"book Four",
        genre:"Geography",
        publish:"1780" 
     },

     {
        title:"Book Five",
        genre:"zoology",
        publish:"1690" 
     },
]

const newbooks=book.filter( (bk)=> bk.genre==="zoology"
 )
 console.log(newbooks)
//  [ { title: 'Book Five', genre: 'zoology', publish: '1690' } ]

// MAP SAME AS FILTER BUT MAIN CONCEPT OF MAP IS  (CHAINING)

const number=[1,2,3,4,5,6,7,8,9,10]

const res=number.map( (item)=>item*10 ) /*[10, 20, 30, 40,  50, 60, 70, 80, 90, 100] */
                .map( (item)=> item+1 ) /*[11, 21, 31, 41,  51, 61, 71, 81, 91, 101] */
                .filter( (item)=> item>30) /*[31, 41,  51, 61, 71, 81, 91, 101] */
console.log(res)
// AT EVERY STEP OF MAP VALUE OF ITEM CHANGE OR I CAN SAY ITS UPDAATE