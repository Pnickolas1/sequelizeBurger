

var path  = require('path');


//ROUTES
module.exports = function(app) {

//Each of the below routes just handles the HTML page that the user gets sent to


//index route loads views /
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/../views/layouts/main.handlebars"));
});


};