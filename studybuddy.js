var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/views/homepage.html'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port', process.env.PORT);
});