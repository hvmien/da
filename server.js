var mongoose = require('mongoose');
var express = require('express');

var routes = require('./routes');

var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var ect = require('ect');
var app = express();
var middleware   = require('./middleware/index');




mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err;
	
	
	app.listen(3000,function(){
		console.log('now listen on http://localhost:3000');
	});

	middleware(app);
	var ectRenderer = ect({ watch: true, root: __dirname + '/views', ext : '.ect' });
	app.set('view engine', 'ect');
	app.engine('ect', ectRenderer.render);


	app.use(express.static(__dirname + '/app'));

	routes(app);

})
