//  create our own server

const http = require('http')
const server = http.createServer((req , res)=>{
    res.end("<h1>Server is created</h1>")
    res.statusCode = 404
    res.setHeader('content-type' , 'text/html')
    console.log(res.end("Hello World"));
    
})


server.listen(8000, () => { 
    console.log("Server is running....");
})