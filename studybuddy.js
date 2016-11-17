var express = require('express');
var http = require('http');
var app = express();

app.get('/', function (req, res) {
  app.use(express.static('static'));
  res.sendfile('static/login.html');
});

app.get('/new', function (req, res){
  app.use(express.static('new/static'));
  res.sendfile('static/login.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});
