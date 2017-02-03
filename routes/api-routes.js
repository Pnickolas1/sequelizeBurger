
var db = require('../models');

module.exports = function(app) {

	app.get('/', function (req,res) {
		db.Burger.findAll({})
		.then(function (dbPost) {
			res.json(dbPost);
		});
	});


	app.post('/api/burgers', function(req, res) {
		console.log(req.body);
		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(dbPost) {
			res.json(dbPost);
		});
	});


};