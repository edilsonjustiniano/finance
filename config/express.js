var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    // define a few environment variables
    app.set('port', 3000);

    // define the middleware
    app.use(express.static('./public'));

    // configure the body Parser in order to express accept the method put and delete correctly
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    // using the express-load to load the models and controllers and routes
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}
