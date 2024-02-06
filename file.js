var http = require('http');
var dt = require('./module');

const server =http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write(req.url);
  res.end();
});

const port=3000;


server.listen(port,()=>console.log(`server is running on the port:http://localhost:${port}/harsh`));
