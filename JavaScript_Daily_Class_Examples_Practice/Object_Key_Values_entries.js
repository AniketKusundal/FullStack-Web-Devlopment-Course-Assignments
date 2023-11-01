// object


console.log("Object");

let obj ={Id:1,Fname:"Aniket",Address:"Manwath"}

    console.log("Object Keys");
    arr = Object.keys(obj)
    for (const x of arr) {
        console.log(x);
    }

    console.log("----------------------------------------------------------------------------");

    console.log("Object Values");

    arr1 = Object.values(obj)
    for (const y of arr1) {
        console.log(y);
    }


    console.log("-----------------------------------------------------------------------------");

    console.log("Object Entries");
    arr2 = Object.entries(obj)
    for (const z of arr2) {
        console.log(z);
    }