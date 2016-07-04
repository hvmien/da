var mongoose = require('mongoose');
var model = require('../app/models/user.js');

var crypto = require('crypto');
var bodyParser = require("body-parser");
var express = require('express');
var middleware   = require('../middleware/index.js');
var User = mongoose.model('User');
var ect = require('ect');


module.exports = function(app){

	middleware(app);
	app.get('/signup', function(req,res){
	
		res.render('../app/views/login/signup.ect');
	});

	app.use(bodyParser.urlencoded({ extended: false }));

	//create new account
	app.post('/signup',function(req,res,next){
		var _name = (req.param('name'));
		var email = (req.param('email'));
		var pass = (req.param('pass'));
		console.log('%s',req.param('email'));
		console.log('%s',req.param('pass'));
		if(!(email && pass)){
			console.log('0----');
			return invalid();
		}

		User.findById(email,function(err,user){

			if(err) return next(err);

			if(user){
				console.log('1----');
				return res.render('../app/views/login/signup.ect',{exists:true});				
			}

			

			crypto.randomBytes(16,function(err,bytes){
				if(err) return next(err);
				var user ={_id:email};
				user.salt = bytes.toString('utf8');
				user.hash = hash(pass, user.salt);
				user.name = _name;

				User.create(user,function(err,newUser){
					if(err){
						if (err instanceof mongoose.Error.ValidationError){
								console.log('3----');		
							return invalid();
						}
						return next(err);
					}

					console.log('4----');
					//user created succesfully

					req.session.singed = true;
					req.session.user = email;
					console.log('created user:%s',email);
					return res.render('../app/views/login/signup.ect',{invalidsign:true});
					//return res.redirect('/');
				})
			})
		})

		function invalid(){
			return res.render('../app/views/login/signup.ect',{invalid:true});
		}
	});

	//LOGIN METHOD
	app.get('/user/login',function(req,res){
		console.log('get login');
		
		res.render('../app/views/login/loginform.ect');
	})

	app.post('/user/login',function(req,res,next){

		var email = (req.param('email'));
		var pass = (req.param('pass'));
		
		console.log(email);
    	console.log(pass);
		if(!(email && pass)){
			console.log('---0 Blank user or pass----');
			return invalid();
		}
		User.findById(email,function(err,user){
			if(err) return next(err);

			if(!user){
				console.log('---1 Not User----');
				return invalid();				
			}
			if(user.hash !=hash(pass,user.salt))
			{
				console.log('---2 Fail pass----');
				return invalid();
			}

			console.log('---3 succesfully----')
			req.session.isLoggedIn = true;
			req.session.user = email;
			req.session.name = 'NameUser';
			res.redirect('/user/message');
		})
		function invalid(){
			return res.render('../app/views/login/loginform.ect',{invalid:true});
		}
	})


}

