const marvelhero=["ironman","spiderman","thor"]
const dchero=["superman","joker","batman"]

/* push , concateanation  , spread in   TWO    ARRAY */

//marvelhero.push(dchero);
//console.log(marvelhero);//[ 'ironman', 'spiderman', 'thor', [ 'superman', 'joker', 'batman' ] ] array inside another array

//const newhero=marvelhero.concat(dchero)// WE HAVE TO STORE IN NEW ARRAY TO USE CONCAT
//console.log(newhero);//[ 'ironman', 'spiderman', 'thor', 'superman', 'joker', 'batman' ]

const all_hero=[...marvelhero,...dchero]
console.log(all_hero);//easy among all 3 method

const real_another_array=[1,2,3,[4,5,6],7,[6,7,[4,5,8]]]
console.log(real_another_array.flat(Infinity));// open all the complex array under another arraay

console.log(Array.isArray("amanjay"));//false
console.log(Array.from("amanjay"));//["a","m","a","n"....] change into array
console.log(Array.from({name:"amanjay"}));//[] empty array means can't change

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]


