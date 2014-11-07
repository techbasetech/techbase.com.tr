var http = require('http');
var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendfile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);

server.listen(5000, function(){
  console.log("Server listening on port " + 5000);
});

