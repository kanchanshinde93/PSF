var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLoginModel = require('../models/userLogin.model');


/* POST/CREATE Add User  */
router.post('/add', function(req, res, next){
  
  //let userEmail = req.body.userEmail;
   bcrypt.hash(req.body.userPassword,10,(err, hash)=>{
    if(err){     
       res.send({status: 500, message: 'error'})
    }
    else{
      let userLoginObj = new userLoginModel({
        userEmail : req.body.userEmail, 
        userPassword : hash,
        isAdmin: false,
        isControlAdmin:true,
       isVisitorAdmin: false
      });

      userLoginObj.save(function(err, userLoginObj){
        if(err){
          res.send({status : 500, message: 'Unable to add'});
        }
        else{
          res.send({status: 200, message: 'User added successfully', userLoginDetails: userLoginObj});
        }
      });
    }
  });  
});

/* POST Login User */

router.post('/login', function(req, res, next){
  userLoginModel.find({userEmail: req.body.userEmail})
  .exec()
  .then(userLoginObj=>{
    if(userLoginObj.length < 1 ){
       res.send({status: 500, message: 'User does not exist'});
    }
    
    bcrypt.compare(req.body.userPassword, userLoginObj[0].userPassword, (err, result) =>{
      if(!result){
        res.send({status: 500, message: 'Password does not match'})
      }
      if(result){
          const token = jwt.sign({
            userEmail: userLoginObj[0].userEmail  
          },
          'to check token',
          {
            expiresIn: "24h"
          }
          );
          res.send({status: 200, userEmail:userLoginObj[0].userEmail, _id:userLoginObj[0]._id, 
            isVisitorAdmin: userLoginObj[0].isVisitorAdmin, isControlAdmin: userLoginObj[0].isControlAdmin, token: token, message: 'Login Successful'})
      }
    })
  })
 
  .catch(err =>{
    res.send({status: 500, message: 'Error'})
  })

})



/* GET users listing. */
router.get('/list', function(req, res, next){
  userLoginModel.find(function(err, userListResponse){
    
    if(err){
      res.send({status: 500, message: 'Unable to find User'});
    }
    else{
      const recordCount = userListResponse.length;
      res.send({status: 200, recordCount: recordCount, results: userListResponse});
    }
  });
});
module.exports = router;
