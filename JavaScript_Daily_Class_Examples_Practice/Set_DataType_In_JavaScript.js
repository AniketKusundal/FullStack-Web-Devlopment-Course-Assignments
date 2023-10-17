// Set() ---> it is a collection of unique value we can not add duplicate value in a set


// Crate set 

let s1 = new Set([10,20,30,40,50,10,20,30])
console.log(s1);


//  Add() -->  add value to set
    s1.add(90)
    s1.add(60)
    s1.add(50)

    console.log(s1);

// Delete() --> Remove value from a set

    s1.delete(90)
    s1.delete(60)
    console.log(s1);

//  Has()  ---> Return Truw if the value is exist otherwise return false

    console.log(s1.has(50));
    console.log(s1.has(60));


// Size()   --->   defines The Size Of the

    console.log(s1.size);


//  Clear() --> Clear all the Item 
    // s1.clear()
    // console.log(s1);



// -------------------------------------------------------------------------------------\\
// -------------------------------------------------------------------------------------\\
// -------------------------------------------------------------------------------------\\
// -------------------------------------------------------------------------------------\\
// -------------------------------------------------------------------------------------\\
// -------------------------------------------------------------------------------------\\










// ForEach() --> it is used with array Map Or Set


let arr = [10,20,30,40]
let n1 = new Map()

n1.set(100,"a")
n1.set(200,"b")


let z1 = new Set ([80,90,100])
console.log((n)=>console.log(n));

 console.log("For Map"); 
 n1.forEach((n)=>console.log(n))

 console.log("For Set");
 z1.forEach((n)=>console.log(n))


