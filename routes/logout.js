
var message = require('./message.js');
var express = require('express');

module.exports = function(app){
	//homepage

	app.get('/logout', function(req, res) {
		console.log('logout');
		req.session.isLoggedIn = false;
	  res.render('../app/views/index.ect', { title: 'home'});

	});


}