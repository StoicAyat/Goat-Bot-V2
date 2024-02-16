var http = require('http');


http.createserver(function (req,res) {
  res.write("I am Alive");
  res.end();
}).Litsen(8080);
