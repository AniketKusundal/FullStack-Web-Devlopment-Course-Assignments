
// Filter()--->  the filter function used to apply arrow function to each item and select that item only whwn condition is satisfied otherwise that object is rejected 

let arr = [
        {id:1,fname:"aniket"},
        {id:2,fname:"jack"},
        {id:3,fname:"jhon"}
    ]

    let arr1 = arr.filter((ob)=>ob.id<4)

    console.log(arr1);