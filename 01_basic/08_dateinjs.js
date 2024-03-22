let myDate= new Date()
console.log(myDate);//2024-03-22T09:45:36.908Z (PATA NII) 
console.log(myDate.toDateString());//Fri Mar 22 2024
console.log(myDate.toISOString());//2024-03-22T09:47:33.684Z
console.log(myDate.toLocaleDateString());//3/22/2024
console.log(myDate.toLocaleString());//3/22/2024, 9:49:58 AM
console.log(myDate.toLocaleTimeString());//9:49:58 AM

let mycreatedDate= new Date(2024,1,11) // MONTH START FROM '0'
console.log(mycreatedDate.toDateString());// JAN DENOTE 0 , FEB DENOTE 1 LIKE THIS ....

let timedate = new Date(2024,1,11,10,30)// 11/02/2024 10:30 
console.log(timedate.toLocaleString());

// let myTimestamp=Date.now()
// console.log(Math.floor(myTimestamp.now()/1000));//change to sec 

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`hello user so i am learning the concept of date time of js . so  the current  month is ${newDate.getMonth()} and current date is ${newDate.getDate()} so that it.`);  