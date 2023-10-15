// Map() --> map data type used to store item in an the form of key plus vlauein other words every item contain key and value key must be unique value may be Duplicate

// create  Map Object

let m1 = new Map()
console.log(m1);


//  add item to map 
// [1] Set()--> insert item in the map

    m1.set(100,"a")
    m1.set(200,"b")
    m1.set(300,"c")
    m1.set(400,"d")

    console.log(m1);

// // Keys() -->   
//     let mkeys = m1.keys()
//     for (const key of mkeys) {
//         console.log(key);
//     }

// Value
//  console.log("Values");
//  let mvalue = m1.values()

//  for (const mval of mvalue) {
//     console.log(mval);
//  }


//  key + Value 


for (const item of m1.entries()) {
    console.log((item));
}

console.log(m1.has(100));     // true
console.log(m1.has(500));     //false



// // [2] get()  -->

// console.log("Get Function");
// console.log(m1.get(400));
// // console.log(m1.get(500)); // undefined








// // [3] Size() --->
//     console.log("Size Method");
//     console.log(m1.size);







// //  [4] Delete() -->
//     console.log("Delete Method");
//     m1.delete(400)
//     console.log(m1);