//Create a simple HTTP server that responds with "Hello, Node.js!".
/*const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hello world\n");
});
server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});

//Create a server that listens on port 5000 and responds with "Server is running".
 const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/plain'});
    res.end("Server is running");
});
server.listen(5000,()=>{
    console.log("server is running at http://localhost:5000");
});

//Send an HTML page as a response with a heading and paragraph.
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'});
    res.end("<h1> Server </h1><br><p>This is my fist server</p>");
});
server.listen(4000,()=>{
    console.log("server is running at http://localhost:4000");
});

//Send a JSON object as a response: { "name": "Alice", "age": 25 }.
const http=require('http');
const server=http.createServer((req,res)=>{
    const data={
        name:"Alice",
        age:25
    };

    res.writeHead(200,{"content-text":'application/json'});
    res.end(JSON.stringify(data));
});
server.listen(7000,()=>{
    console.log("server is running at http://localhost:7000");
});
*/
