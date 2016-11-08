var express = require('express');
var http = require('http');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendfile('static/login.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
