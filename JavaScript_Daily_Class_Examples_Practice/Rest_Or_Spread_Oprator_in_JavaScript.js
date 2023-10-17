// Rest() --> rest parameter syntax ,syntax allows a function to accept N Number of Arguments as An array To functionwe use three dot (...) to specify the Rest Oprator 

// We have these parameter dots before parameter same to that JavaScript Understand This Is The Rest Parameter , the function defination if there are multiple Argument NAme Rest Parameter Must Last Parameter 

// EXAMPLE [1]

// function show(...names) {
//     console.log(names);
// }

// show("Abc")
// show("abc","Zbc","Xbc","xbc")


// function display(id,...marks) {
//     console.log("Id",id);
//     console.log("Marks",marks);
// }

// display(50,60,30,10,5,0)     // id =50 and all are marks   

// (...) it is a known as Rest Oprator
// It converts into Array




// Spread Oprator  ----> the spread oprator allows iterable object such as Array  , string , object to expand Number Of Arguments , (Unpack)

    // for Example
        // console.log(Math.max(9,11,10));  ---> The max function accept n numbeer of arguments if we try to execute fillowing code 

        // let arr = [9,12,50,10]
        // console.log(Math.max(arr)); // it will give the NaN value beacuase we are passing array as a prameter So to unpack the value from the array we use , Spread Oprator 
        // As Follows 
        
        // let arr = [9,10,11,12,18]
        // console.log(Math.max(...arr)); // spread oprator 

        // it will  unpack the value present in the array And Pass Parameter To The Max function

        // let arr2 = [1,2,3]
        // let arr3 = [...arr2,100,200]
        //             // |=========================>  It will unpack
        // console.log(arr3);


    //  We can use With Object 

        // object

        // let obj = {id:1,fname:"Aniket"}
        // let obj2 ={...obj,address:"dubai"}
        //            | ============================>> unpack
        // console.log(obj2);


    // Example 2

    function show(...names) {
        console.log(names);
    }

    let arr = ["a","b","c","d"]
    show(...arr)
