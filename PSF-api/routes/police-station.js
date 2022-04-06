var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const policeStationModel = require('../models/police-station.model')

/*  Add Police Station*/ 
router.post('/add', async(req, res, next) => {
    let psObj = new policeStationModel({
        _id : req.body._id,
        name : req.body.name,
        zone : req.body.zone,
        pincode : req.body.pincode,
        city : req.body.city

    });

    const psList = await psObj.save();

    if(psList){
        var resp = {
            success : true,
            message : 'Police Station added successfully',
            data : psList
        }

        res.send(resp)
    }
    else{
        res.status(404).send({ success : false, message: 'Cannot add Police Station'})
    }
})

/* GET all Police Station List*/
router.get('/list', function(req, res, next){
    policeStationModel.find(function(err, psListResponse){

        if(err){
            res.send({ status: 500, message: 'Unable to find Visitor' });
        }

        else{
            const recordCount = psListResponse.length;
            res.send({status:200 , recordCount: recordCount, results : psListResponse})
        }
    })
})

module.exports = router;