var express = require('express');
var http = require('http');
var app = express();
var index1 = require('./routes/index1');
var index2 = require('./routes/index2');
app.use(express.static('static'));
app.get('/', index1.view1);
app.get('/new', index2.view2);

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});
