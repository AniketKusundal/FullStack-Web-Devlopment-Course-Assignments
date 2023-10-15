// Map() ---> this will apply function to each item of the array


let arr = [10,20,30,40,50]

    let arr1 = arr.map((n)=>n*n) 
    console.log(arr1);


    let arr2 = arr.map((n)=>{
        let p = n*n
        return p
    })

    console.log(arr2);