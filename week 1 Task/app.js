const http = require('http');
const fs = require('fs')


const server = http.createServer((req,res)=>{
    if (req.url == '/'){
        fs.readFile('pages/home.html', 'utf-8', (err, data)=>{
            if (err){
                console.log(err)
                res.write("<h1>Error Getting requested page</h1>")
                res.end();
            }
            let home = data;
            res.writeHead(200, {
                'content-type':'text/html'
            })
            res.write(home);
            res.end();
        })
        
    }
    if (req.url == '/home'){
        res.writeHead(302, {
            'content-type':'text/html',
            'location':'/'
        })
        res.end();
        
    }

    if (req.url == '/contact'){
        fs.readFile('pages/contact.html', 'utf-8', (err, data)=>{
            if (err){
                console.log(err)
                res.write("<h1>Error Getting requested page</h1>")
                res.end();
            }
            res.writeHead(200, {
                'content-type':'text/html'
            })
            res.write(data);
            res.end();
        })
        
    }
    if (req.url == '/about'){
        fs.readFile('pages/about.html', 'utf-8', (err, data)=>{
            if (err){
                console.log(err)
                res.write("<h1>Error Getting requested page</h1>")
                res.end();
            }
            res.writeHead(200, {
                'content-type':'text/html'
            })
            res.write(data);
            res.end();
        })
        
    }
})



server.listen(5000, ()=>{
    console.log("server listening on port 5000...")
})