// Create web server and listen to port 8080
// This server will handle comments and store them in a file

// Load the http module to create an http server.
var http = require('http');
var fs = require("fs");

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            fs.appendFile('comments.txt', body + "\n", function (err) {
                if (err) throw err;
            });
        });
    }
    fs.readFile('comments.txt', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(data);
    });
});

// Listen on port 8080, IP defaults to

