var express = require('express');
var http = require('http');
var app = express();
var index1 = require('./routes/index1');
var index2 = require('./routes/index2');

app.set('port', process.env.PORT || 3000);

app.use(express.static('static'));
app.get('/', index1.view1);
app.get('/new', index2.view2);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
