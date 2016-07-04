var mongoose = require('mongoose');
mongoose.set('debug', true);

var UserSchema = mongoose.Schema({
  _id: { type: String, last: String },
  name: { type: String, last: String }, 
  hash: { type: String, required:true },
  salt: { type: String, required: true },
  created:{type:Date, default:Date.now}
});


mongoose.model('User', UserSchema);