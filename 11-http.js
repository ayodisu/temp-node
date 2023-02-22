const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(`
        <h1>Oops! This page does not exist</h1>
        <p>We cant find the page you are looking for</p>
        <a href="/">Home</a>
    `)
})

server.listen(5000)