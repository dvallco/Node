var express = require('express');
var app = express();

app.get('/suma', function (req, res) {
  var num1 = req.arg1;
  var num2 = req.arg2;
  var resultado = num1 + num2;
  res.send('Suma =' + resultado);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000 + suma!');
});