var express = require('express');
var router = express.Router();

var Template = require('../models/template.js');

router.get('/', function(req, res, next) {

	Template.find().exec(function(err, result){
		if(err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err
			});
		}
		console.log(result);
		res.status(200).json({
			message: 'success',
			obj: result
		});
	});

}); 


module.exports = router;