// Step-1 : import http library
let http = require("http"); //geting & storing

//Step-2 : create a server using library
//Step-3 : mention the file type
//Step-4 : 8080 port
http.createServer(function(req,res){
    res.writeHead(200,{ 
        'Content-type':'text/html'
    });
    res.end("Hello from my node server"); //sending response
}).listen(8080) //prefered 8080 but can change it as well

