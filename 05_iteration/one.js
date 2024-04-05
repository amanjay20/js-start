//FOR LOOP
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(i);
    
}
for (let i = 0; i <=5; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j <=5; j++) {
        // console.log(`inner loop is ${j}`);
        // console.log(`${i}*${j}=${i*j}`);
        
    }
    
}

for (let i = 0; i <=10; i++) {
    if (i==5){
        console.log("Detected 5");
        break
    }
    console.log(`valoe if i is ${i}`);
    
}
for (let i = 0; i <=10; i++) {
    if (i==5){
        console.log("Detected 5");
        continue
    }
    console.log(`valoe if i is ${i}`);
    
}