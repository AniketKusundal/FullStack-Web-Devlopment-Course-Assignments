// Reduce() -->>  it used to calculate single value of array based on a item 
    // reduce function has two parameters 
        // [1]--> current array item
        // [2]--> initial value of Acumulator
        
        
        // --- Arrow function has two parameter 
            // (1) current array item
            // (2) current index (optional)


            // example 1

            let arr = [10,20,30,40,50,60,70,80,90,100]
            let x = arr.reduce((sum,n)=>sum+n,0)
            console.log(x);