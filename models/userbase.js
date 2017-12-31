var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	UserID: Number,
	UserName: String,
	email: String,
	AuthenticationAPI: String,
	UserInfo: String,
	Timestamp: String
});

module.exports = mongoose.model('userbase', schema);