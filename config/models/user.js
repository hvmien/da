var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');


var UserSchema = mongoose.Schema({
  _id: { type: String, lasr: String },
  name: { type: String, last: String },  
  hash: { type: String, required:true },
  salt: { type: String, required: true },
  created:{type:Date, default:Date.now}
});
UserSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

UserSchema.method({

});

/**
 * Statics
 */

UserSchema.static({

});

mongoose.model('User', UserSchema);