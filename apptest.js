var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    //sending html
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    
    res.writeHead(200, {'Content-Type' : 'application/json'});
    let myObj = {
        name: 'Braga',
        job: 'Developer',
        age: 26
    };
    res.end(JSON.stringify(myObj));
});


server.listen(2000, '127.0.0.1' );
console.log('now listening to port 2000');