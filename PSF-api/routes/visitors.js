var express = require('express');
const bodyParser = require('body-parser')
var router = express.Router();



//router.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');

const visitorModel = require('../models/visitors.model');





/* Add new Visitor all visitors */

router.post('/add', (async (req, res, next) => {
  let visitorObj = new visitorModel({
    visitorName: req.body.visitorName,
    visitorFatherName: req.body.visitorFatherName,
    visitorPhone: req.body.visitorPhone,
    visitorAddress: req.body.visitorAddress,
    purpose: req.body.purpose,
    attenderName: req.body.attenderName,
  });
  const createdVisitorsList = await visitorObj.save();

  if (createdVisitorsList) {
    var resp = {
      success: true,
      message: 'VisitorsList created Successfully',
      data: createdVisitorsList
    }

    res.send(resp);
  } else {
    res.status(404).send({ success: false, message: 'VisitorsList  Not Created' });
  }
})
);

/* router.post('/add', function (req, res, next) {
  let data = req.body

    let visitorName = req.body.visitorName;
    let visitorFatherName = req.body.visitorFatherName;
    let visitorPhone = req.body.visitorPhone;
    let visitorAddress = req.body.visitorAddress;
    let purpose = req.body.purpose;
    let attenderName = req.body.attenderName; 

  console.log(data)
  res.send(data)*/
/*  let visitorObj = new visitorModel ({
  
    visitorName : visitorName,
    visitorFatherName : visitorFatherName,
    visitorPhone : visitorPhone,
    visitorAddress : visitorAddress,
    purpose : purpose,
    attenderName : attenderName *
});  */

// data.save(function(err, visitorObj){
//   if(err){
//     res.send({status: 500, message: 'Unable to add Visitor'});
//   }
//   else{
//     res.send({status: 200, message: 'Visitor added successfully', visitorDetails: visitorObj});
//   }
// });
// });


/* GET all visitors */
router.get('/list', function (req, res, next) {
  data.find(function (err, visitorListResponse) {

    if (err) {
      res.send({ status: 500, message: 'Unable to find Visitor' });
    }
    else {
      const recordCount = visitorListResponse.length;
      res.send({ status: 200, recordCount: recordCount, results: visitorListResponse });
    }
  });
});


/* GET a specific visitors */
router.get('/view', function (req, res, next) {

  const userId = req.query.userId;
  visitorModel.findById(userId, function (err, visitorResponse) {

    if (err) {
      res.send({ status: 500, message: 'Unable to find the Visitor' });
    }
    else {
      res.send({ status: 200, results: visitorResponse });
    }
  });
});

/* Update existing visitor */
router.put('/update', function (req, res, next) {

  const userId = req.query.userId;

  let visitorName = req.body.visitorName;
  let visitorFatherName = req.body.visitorFatherName;
  let visitorPhone = req.body.visitorPhone;
  let visitorAddress = req.body.visitorAddress;
  let purpose = req.body.purpose;
  let attenderName = req.body.attenderName;

  let visitorObj = ({
    visitorName: visitorName,
    visitorFatherName: visitorFatherName,
    visitorPhone: visitorPhone,
    visitorAddress: visitorAddress,
    purpose: purpose,
    attenderName: attenderName
  });

  visitorModel.findByIdAndUpdate(userId, visitorObj, function (err, visitorResponse) {

    if (err) {
      res.send({ status: 500, message: 'Unable to update the Visitor' });
    }
    else {
      res.send({ status: 200, results: visitorObj, message: 'Visitor updated successfully' });
    }
  });
});



/* Delete existing visitor */
router.delete('/delete', function (req, res, next) {
  const userId = req.query.userId;

  visitorModel.findByIdAndDelete(userId, function (err, visitorResponse) {

    if (err) {
      res.send({ status: 500, message: 'Unable to delete the Visitor' });
    }

    else {
      res.send({ status: 200, results: visitorResponse, message: 'Visitor deleted successfully' });
    }
  });
});

/* Search existing visitor */
router.get('/search', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
