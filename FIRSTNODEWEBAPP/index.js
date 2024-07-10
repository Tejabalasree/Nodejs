//http protocol
import http, { Server } from "http";
//server logic
http.createServer((req,res)  =>  {
    res.end("welcome to node.js world!!!");
}).listen(4000);

console.log("Server running on port 4000!!");