// Eat-Da-Burger application

// require npm packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

// setup express server
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api + json"}));

// serve the static css file from the public directory
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/html-routes.js");
require("./routes/api-routes.js");

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

// set default handlebars layout to main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// include routes
var routes = require('./controllers/burgers_controller');

// use routes
app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

// initialize server on port

app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});
