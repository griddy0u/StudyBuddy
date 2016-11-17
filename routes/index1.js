var data = require('../static/data.json');
var jsonfile = require('jsonfile');

exports.view1 = function(req,res){
  data.new = false;
  jsonfile.writeFile('static/data.json', data, function(err){
    if(err) throw err;
  });
  res.sendfile('static/login.html');
};
