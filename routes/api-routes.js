
var db = require('../models');

module.exports = function(app) {

	//index route loads views /
	// app.get("/", function(req, res, next) {
	// 	res.render("index", {burgers: [{burger_name:'something'}]});
	// });
	app.get('/', function (req,res) {
		console.log('here');
		db.Burger.findAll({})
		.then(function (dbPosts) {
			res.render("index",{burgers:dbPosts});
		});
	});

	app.post('/burgers', function(req, res) {
		console.log(req.body);
		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(dbPost) {
			res.redirect('/');
			// res.render("index",{burgers: dbPost});
		});
	});


	app.put('/burgers/:id', function (req, res, next) {
		console.log(req.params, req.body); 
		///next();

		db.Burger.update(req.body,
			{
				where: {
					id:req.params.id
				}
			})
			.then(function(dbPost) {
				console.log('got here');
				res.redirect('/');
			});
	});




};