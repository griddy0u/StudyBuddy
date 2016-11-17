var data = require('../static/data.json');
var jsonfile = require('jsonfile');

exports.view2 = function(req,res){
  data.new = true;
  jsonfile.writeFile('static/data.json', data, function(err){
    if(err) throw err;
  });
  res.sendfile('static/login.html');
};
