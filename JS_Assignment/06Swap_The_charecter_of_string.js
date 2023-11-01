// [6] write a program to get single string from two given string ,seprated by a space and swap the first character each string

let s1="abc xyz"

let arr=s1.split(" ")
let s2=arr[0]
let s3=arr[1]

let s4=s2.substring(1,s2.length)
let s5=s3.substring(1,s3.length)

console.log(s3[0]+s4);
console.log(s2[0]+s5);