var mongoose = require('mongoose');
var math = require('mathjs');
var model = require('../app/models/home.js');
var crypto = require('crypto');
var bodyParser = require("body-parser");
var express = require('express');
var connectJade   = require('../middleware/index.js');
var Mess = mongoose.model('Mess');
var http = require('http')
  , fs = require('fs');
var ect = require('ect');
var Random = require('../middleware/random.js');

module.exports = function(app){
 
	app.get('/user/message', function(req,res){
		res.render('../app/views/message/mes.ect',{tilogin:req.session.user});
	});

	app.post('/user/message',function(req,res){
		
		var receiermess = (req.param('emailto'));//nguoi nhan
		var content = (req.param('messcontent'));//noi dung
		var sendermess = req.session.user;//nguoi gui?
		var time = ("2016-05-05");//thoi gian gui
		var id =math.randomInt(1, 400);
		console.log(id);

		console.log(req.session.user);

		if(!(receiermess && content)){
			console.log('0----');
			return invalid();
		}

		Mess.findById(id,function(err,mess){

			if(err) return next(err);
		//create message
			var mess ={_id:id};//ng gui tin nhan
				mess.sender = sendermess;
				mess.receicer = receiermess;//nguoi nhan tin nhan
				mess.messcontent=content;//noi dung gui
				mess.senttime = time;//thoi gian gui

				console.log(mess.sender);
				console.log(mess.receier);
				console.log(mess.messcontent);
				console.log(mess.senttime);

				Mess.create(mess,function(err,newMess){
					if(err){
						if (err instanceof mongoose.Error.ValidationError){
								console.log('3----');		
							return invalid();
						}
						return next(err);
					}

					console.log('4----');
					//user created succesfully
					
					console.log('created mess with :%s',req.session.user);
					return res.redirect('/user/message');
				})
			})

		function invalid(){
			return res.render('../app/views/message/mes.ect',{tilogin:req.session.user});
		}
	});	
}