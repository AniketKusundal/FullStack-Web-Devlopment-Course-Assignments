let str = "Aniket Kusndal";
let x =str.length
console.log(x);



console.log("Simple For loop");

for (let i = 0; i <x; i++) {
    console.log(str[i]);
    
}


console.log("By using For In");

for (const i in str) {
    console.log(i);                   // it gives the index number
}

console.log("By using For of loop ");

for (const x of str) {                    // it gives the value
    console.log(x);
}