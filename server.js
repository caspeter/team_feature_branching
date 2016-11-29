'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function (req, res) {
  res.send('This is the GET response');
});

app.listen('3000', function() {
  console.log('Listening on port ', 3000);
});
