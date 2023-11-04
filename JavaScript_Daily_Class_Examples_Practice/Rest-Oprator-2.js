let  arr = ["abc" , "xyz" , "ZXZX","xoxo"]

let [fname,lname,...arr1]=arr

console.log(fname);
console.log(lname);
console.log(arr1);

//in the above example first item of array storedd inside  fname , second item stored inside the lname and Rest of the item stored in the arr1 this is called the rest oprator


// We have to give three dots to idicates the rest of the element pack into arr1
