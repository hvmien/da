var errors = require('./errors');

var login = require('./login.js');
var logout = require('./logout.js');

var message = require('./message.js');
var express = require('express');
/*
var router = express.Router();
router.get('/', function(req, res) {
  res.render('../app/views/index.ect', { title: 'home' });
});

console.log('index routes');

module.exports = router;
*/



module.exports = function(app){
	//homepage

	app.get('/', function(req, res) {
		console.log(req.session.singed);
	  res.render('../app/views/index.ect', { title: 'Quản lý hàng Bufer'});

	});

	//login
	login(app);

	message(app);

	logout(app);
	//errors handlers
	errors(app);
}