var http = require('http');
var app = require('./config/express')(); // using () because the return is a function
require('./config/database.js')('mongodb://localhost/finance');
// create server
http.createServer(app).listen(app.get('port'), function() {
    console.log('express server listening in port ' + app.get('port'));
});
