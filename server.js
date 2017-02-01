var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var port  = process.env.PORT || 8000;


// require the models for syncing
var db = require('./models');


//sets up the Express ap to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//SERVE STATIC CONTENT FOR THE APP FORM THE "PUBLIC" DIRECTORY IN TEH APPLICATION DIRECTORY
app.use(express.static( "./public"));


// ROUTES ================================================

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars");


require("./routes/html-routes.js")(app);


//Syncing the sequelize app and starting our express app
db.sequelize.sync({ force: true }).then(function() {
	app.listen(port, function () {
		console.log("App Listening on PORT: " + port);
	});
  });

