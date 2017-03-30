var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

// Set server port
var port = process.env.PORT || 3000;

// Logger
app.use(morgan('dev'));

// Body parser
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

// Serve static assets from client folder
app.use(express.static(path.join(__dirname, '../client')));

// Start server
app.listen(port, function() {
  console.log('Server now running on port: ' + port);
});
