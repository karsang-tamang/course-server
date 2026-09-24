const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let mineLookup = {
    ".html" : "text/html",
    ".js" : "text/javascript",
    ".json" : "application/json",
    ".png" : "image/png",
    ".jpg" : "image/jpeg"
}

function send404(res){
    res.writeHead(404, {'Content-Type' : 'text/plain'});
    res.write("Error 404: Resource not found.");
    res.end();
}

const server = http.createServer( (req, res) => {
    // let method = req.method = " ";
    // let url = req.url + "\n\n";
    // let headers = JSON.stringify(req.headers, null, 4);

    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    // res.write(method);
    // res.write(url);
    // res.write(headers);
    // res.end();

    // res.write("Hello, Node.");
    // res.end();

    let file_url = (req.url === "/") ? "index.html" : decodeURI(req.url)
    let filepath =path.join(__dirname, req.url)

    if (!fs.existsSync(filepath)){
        send404(res)
        return
    }

    let fileExt = path.extname(filepath)
    let minetype = mineLookup(fileExt)

    if (!minetype){
        send404(res)
        return
    }

    res.writeHead(200, {'Content-Type' : minetype});
    fs.createReadStream(filepath).pipe(res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});



