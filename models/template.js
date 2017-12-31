var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	TemplateName: String,
	SectionName: String,
	SectionSeq: Number
});

module.exports = mongoose.model('template', schema);