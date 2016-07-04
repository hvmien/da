var express = require('express');
var http = require('http'),
    fs = require('fs');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");

module.exports = function(app){

	app.use(express.static('assets'));
	app.use(express.static('public'));
	app.use(cookieParser());
	app.use(session({secret: 'building a webchat'}));
	app.use(bodyParser());

	app.use(function(req,res,next){
		
		console.log('set session loggedin');
	   	res.locals.session = req.session;	  
	   	
	next();
	});
}