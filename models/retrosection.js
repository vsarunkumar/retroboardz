var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	SectionID: String,
	SectionName: String,
	SectionSeq: Number,
	MessageSeq: Number,
	BoardID: String,
	Message: String,
	Vote: Number,
	IsActive: Number
});

module.exports = mongoose.model('retrosection', schema);