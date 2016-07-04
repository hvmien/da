var mongoose = require('mongoose');
mongoose.set('debug', true);

var MessSchema = mongoose.Schema({
  _id : Number, 
  sender: { type: String, last: String },  //ng gui
  receicer: { type: String, last: String },// ng nhan
  messcontent: { type: String, last: String}, //noi dung
  senttime:{type:Date, default:Date.now} // thoi gian gui
});


mongoose.model('Mess', MessSchema);