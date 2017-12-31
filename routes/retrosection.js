var express = require('express');
var router = express.Router();
var RetroSection = require('../models/retrosection');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', function(req, res, next){

    var retroSection = new RetroSection({
        SectionID: req.body.SectionID,
        SectionName: req.body.SectionName,
        SectionSeq: req.body.SectionSeq,
        MessageSeq: req.body.MessageSeq,
        BoardID: req.body.BoardID,
        Message: req.body.Message,
        Vote: req.body.Vote,
        IsActive: req.body.IsActive
    });

    retroSection.save(function(err, result){
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

router.get('/:id', function(req, res, next) {
    RetroSection.find({BoardID: req.params.id})
        .exec(function(err, retroSections) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurres',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: retroSections
            });
        });
});

router.patch('/', function(req, res, next) {
    var ObjectId = require('mongodb').ObjectID;
    RetroSection.find({_id: ObjectId(req.body.SectionID)})
        .exec(function(err, msg) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!msg) {
                return res.status(500).json({
                    title: 'No message found',
                    error: { message: 'Message not found'}
                });
            }
            msg[0].Message = req.body.Message;
            msg[0].save(function(err, result) {
                if(err) {
                    return res.status(500).json({
                        title: 'An error occurres',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: result
                });
            });
        });
});


router.delete('/:id', function(req, res, next) {
    var ObjectId = require('mongodb').ObjectID;
    RetroSection.find({_id: ObjectId(req.params.id)})
        .exec(function(err, msg) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!msg) {
                return res.status(500).json({
                    title: 'No message found',
                    error: { message: 'Message not found'}
                });
            }
            msg[0].IsActive = 0;
            msg[0].save(function(err, result) {
                if(err) {
                    return res.status(500).json({
                        title: 'An error occurres',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: result
                });
            });
        });
});


router.get('/addVote/:id', function(req, res, next) {
    var ObjectId = require('mongodb').ObjectID;
    RetroSection.find({_id: ObjectId(req.params.id)})
        .exec(function(err, msg) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!msg) {
                return res.status(500).json({
                    title: 'No message found',
                    error: { message: 'Message not found'}
                });
            }
            msg[0].Vote = msg[0].Vote + 1;
            msg[0].save(function(err, result) {
                if(err) {
                    return res.status(500).json({
                        title: 'An error occurres',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: result
                });
            });
        });
});

module.exports = router;