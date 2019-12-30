var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    //sending json
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/people') {
        let people = [{name: 'Braga', age: 26}, {name: 'Jack', age: 27}];
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(people))
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(2000, '127.0.0.1' );
console.log('now listening to port 2000');
