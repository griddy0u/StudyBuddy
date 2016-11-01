var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('public/homepage.handlebars');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port', process.env.PORT);
});