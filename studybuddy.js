var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('views/homepage.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port', process.env.PORT);
});