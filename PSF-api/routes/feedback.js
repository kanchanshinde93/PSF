var express = require('express');
const bodyParser = require('body-parser')
var router = express.Router();

var mongoose = require('mongoose');

const feedbackModel = require('../models/feedback.model')

/* Add new Feedback */
router.post('/addFeedback', (async (req, res, next) =>{
    let feedbackObj = new feedbackModel({
        visitorId: req.body.visitorId,
        attender : req.body.attender,
        satisfy : req.body.satisfy,
        behaviour : req.body.behaviour,
        cleaniness : req.body.cleaniness,
        atmosphere : req.body.atmosphere,
        rating : req.body.rating,
       
    })

    const feedbackList = await feedbackObj.save();

    if(feedbackList){
        var resp = {
            success : true,
            message : 'feedback added successfully',
            data : feedbackList
        }
        res.send(resp)
    }
    else{
        res.status(404).send({success : false, message : 'Cannot add Feedback'})
    }
}))
module.exports = router;