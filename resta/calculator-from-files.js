var express = require('express');
require('./utils-functions.js')();
var app = express();

app.get('/multiplica',function(req,res){
	 	res.send('Multiplicación: '+multiplica(req.query.arg1, req.query.arg2));;
});

app.listen(3000, 	function () {
  console.log('Example app listening on port 3000 + calculator!');
});