var http = require('http');

const server=http.createServer(function (req, res) {
if(req.url === '/')
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  res.end();
}
else{
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>  Oops!, you are on wrong track</h1><a href="/" >welcome</a>');
}

})
server.listen(5000);