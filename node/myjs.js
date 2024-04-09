const http=require('http');

const hostname='127.0.0.1'; //ip address
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end("Hello from me shivi");
})
server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})