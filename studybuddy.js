var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendfile('static/homepage.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});