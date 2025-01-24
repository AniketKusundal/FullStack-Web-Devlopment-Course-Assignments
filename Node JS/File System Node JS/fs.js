const fs = require('fs')
const path = require('path')



//  file write in async function

// fs.writeFile("demo1.txt" , "Hello Aniket Welcome to File System in node js " , (err)=>{
//     if(err) throw err
//     console.log("File is Created...");
// })


//  Read File
// fs.readFile("demo1.txt" , 'utf-8' , (err , data)=>{
    //     if (err) {
        //         return console.log(err)
        //     }
        //     else
        //     {
            //         console.log("Data is :" , data)
            //     }
// })



// append File 

fs.appendFile('demo1.txt' , '\n You Are Grate' ,(err)=>{
    if(err) throw err
    console.log("File Appended Succesfully ");
});


//  Delete File

fs.unlink('demo1.txt' , (err)=>{
    if (err)
        throw err
    console.log("File is Deleted Succesfully ");
    
})
