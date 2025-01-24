const http = require('http')
const url = require('url')
const fs = require('fs')


http.createServer((req , res)=>{
    const q = url.parse(req.url , true)
    console.log(q);

    var fileName = "." + q.pathname
    fs.readFile(fileName , 'utf-8' , (err , data)=>{
        if (err){

            res.writeHead(400 , {'content-type' : 'text/plain'})
            res.write("404 Not found")
            res.end();
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();

    })
}).listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
