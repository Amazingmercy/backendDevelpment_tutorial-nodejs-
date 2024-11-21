const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        //get the file path
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                //include header
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server error');
                res.end()
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
        return;
    }


    if (req.url === '/styles.css') {
        //get the file path
        fs.readFile(path.join(__dirname, 'styles.css'), (err, data) => {
            if (err) {
                //include header
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Server Error');
                res.end()
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end()
        });
        return;
    }



})






const port = 4000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
