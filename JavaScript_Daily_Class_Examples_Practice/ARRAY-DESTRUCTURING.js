
// // with destructuring    ------------>>>      --------->>>


// let arr = [10,20,30,40,50,60,70,80,90]
// function show([a,b]) {    // []---> we can pass array using square braket as a parameter 
    
//     console.log(a);
//     console.log(b);
// }
// show(arr)




// in above example we are passing complete array to the function but in the function we are using destructuring it will unpack first two value of the array and stored into ( a & b)




// without  destructuring ----->    ------>>       ----->>>

// let arr1 = [10,20,30,40,50,60,70,80,90]
// function show(arr1) {
//     console.log(arr1[0],arr1[1],arr1[2]);
// }

// show(arr1)






// with destructuring  ------------>>>            -------->>>>              ----------->>> 

// let arr =  ["aniket", "kusundal"]
// function show([fname,lname]) {
    //     console.log(fname,lname);
    // }
    
    // show(arr)
    
    



// without  destructuring  ------------>>>            -------->>>>              ----------->>> 

 
// let arr1 =  ["aniket", "kusundal"]
// let fname = arr1[0]
// let lname = arr1[1]

// console.log(fname);
// console.log(lname);





// With  destructuring  ------------>>>            -------->>>>              ----------->>> 


let arr2 =  ["aniket", "kusundal"]

let [fname , lname]=arr2
console.log(fname , lname);
