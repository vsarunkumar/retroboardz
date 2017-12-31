var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	BoardID: String,
	BoardName: String,
	UserGroup: String,
	BoardLink: String,
	IsActive: String
});

module.exports = mongoose.model('retroboardz', schema);
