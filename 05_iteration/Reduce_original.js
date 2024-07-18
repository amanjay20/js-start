const nums=[1,2,3]
const result=nums.reduce( function (acc,currval) {
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc+currval
},0)
// console.log(result)
// acc : 0 and currval : 1
// acc : 1 and currval : 2
// acc : 3 and currval : 3
// 6

const arrowResult=nums.reduce( (acc,currval)=> (acc+currval),0 )
console.log(arrowResult)
// acc : 0 and currval : 1
// acc : 1 and currval : 2
// acc : 3 and currval : 3
// 6
