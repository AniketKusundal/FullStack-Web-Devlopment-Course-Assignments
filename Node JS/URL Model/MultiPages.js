const http = require('http')
const url = require('url')



http.createServer((req , res) =>{
    const quary1 = req.url

    switch (quary1) {
        case '/home ':
            console.log(res.end("This is home page"));
            break;
        case '/about':
            res.end("This is About page");
            break;
        case '/contact':
            res.end("This is Contact page");
            break;
    
        default:    
            res.end("Error 404 kas kay re ")
            break;
    }
}).listen(4000 , ()=>{
    console.log("Server is Runing.....");
    
})