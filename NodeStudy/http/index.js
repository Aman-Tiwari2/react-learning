const http = require('http')


const server = http.createServer(
    (req, res)=>{
        console.log("Hello from server");
        res.end("Welcome to the home Page");})



server.listen(8000, ()=>{
    console.log("Server is running on port 3000")
})