//  Destructuringassignment means is a speacial syntax that allows us to unpack array or object into bunch of variable which is convinent  some time

// Example [1]

    // let arr = [100,"Abc"]
    // let id = arr[0]
    // let fname = arr[1]
    // console.log(id);
    // console.log(fname);


    //  DESTRUCTURING 

    //     let arr = [1,"Aniket"]
    //     let = [id,fname] = arr
    //     console.log(id);
    //     console.log(fname);


    // let arr = [100,"abc" , "Address"]
    // let = [id,fname,adr] = arr
    // console.log(id);
    // console.log(fname);
    // console.log(adr);









// function show(id,fname,adrrs) {  // jr square braket kadla tr value saglya id madhe store Hotil
//     console.log(id);
//     console.log(fname);
//     console.log(adrrs);
// }
// let arr = [1,"anii","india"]
// show(arr)


function show([id,fname,adr]) {   // Ani jr square braket laval tr saglya parameters la value yetil
    console.log(id);
    console.log(fname);
    console.log(adr);
}

let arr = [1,"anii","india"]
show(arr)