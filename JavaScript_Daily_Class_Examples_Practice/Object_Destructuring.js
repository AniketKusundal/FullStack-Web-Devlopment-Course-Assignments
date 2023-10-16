//  to demonstrate object we use {} curly braket 
// ---> while destructuring we must use same name as a key name 

function show({id,fname,address}) {
    console.log(id);
    console.log(fname);
    console.log(address);
}

let obj={id:100,fname:"aniket",address:"india"}
show(obj)