// -->> if array is a larger than list of left variable the extra item from the array item is Skip
// --> if you want to collect extra item we can use rest oprator As Follows 

// EXAMPLE
        // let arr = [100,"abc","xyz",12]
        // const [a,b,...c] = arr
//                  |============================> pack the Value // rest Oprator

// console.log(a);
// console.log(b);
// console.log(c);





// EXAMPLE [2]
    let obj ={id:100,fname:"aniket",lastname:"kusudnal",address:"india"}
    let {id,fname,...t1} = obj 
    //              |========================> Prints key plus value beacuase of object

    console.log(id);
    console.log(fname);
    console.log(t1);
