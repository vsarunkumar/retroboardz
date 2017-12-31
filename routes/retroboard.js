var express = require('express');
var router = express.Router();
var Retroboardz = require('../models/retroboardz');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', function(req, res, next){
	var retroboardz = new  Retroboardz({
		BoardID: req.body.BoardID,
		BoardName: req.body.BoardName,
		UserGroup: req.body.UserGroup,
		BoardLink: req.body.BoardLink,
		IsActive: req.body.IsActive
	});
	retroboardz.save(function(err, result){
		if(err){
			return res.status(500).json({
				title: 'An error occurred',
				error: err
			});
		}
		res.status(201).json({
			message: 'saved message',
			obj: result
		});
	});
});

router.get('/:id', function(req, res, next){
	var ObjectId = require('mongodb').ObjectID;
	Retroboardz.find({_id: ObjectId(req.params.id)})
						.exec(function(err, board) {
							if (err) {
								return res.status(500).json({
									title: 'An error occurred',
									error: err
								});
							}
							res.status(200).json({
								message: 'Success',
								obj: board
							});
						});
});

module.exports = router;