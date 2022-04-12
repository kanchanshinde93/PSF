var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const psUserModel = require('../models/ps-user.model')


/*  Add Police Station User*/
router.post('/add', function(req, res, next){
    bcrypt.hash(req.body.password,10,(err, hash) => {
        if(err){     
            res.send({status: 500, message: 'error'})
         }
         else{
            let psUserObj = new psUserModel({
                psId: req.body.psId,
                email: req.body.email,
                password : hash,
                psName: req.body.psName,
                createdBy : req.body.createdBy
            })

            psUserObj.save(function(err, psUserObj){
                if(err){
                    res.send({status : 500, message: 'Unable to add'});
                  }
                  else{
                    res.send({status: 200, message: 'User added successfully', psUserLoginDetails: psUserObj});
                  }
            })
         }
    })
})

/*  Login Police Station */
router.post('/login', function(req, res, next){
    psUserModel.find({email: req.body.email})
    .exec()
    .then(psUserObj =>  {
        if(psUserObj.length < 1){
            res.send({status: 500, message: 'User does not exist'});
        }
        bcrypt.compare(req.body.password, psUserObj[0].password, (err,result) =>{
            if(!result){
                res.send({status: 500, message: 'Password does not match'})
            }
            if(result){
                const token = jwt.sign({
                    email: psUserObj[0].email 
                // res.send({status:200, email: psUserObj[0].email, message: 'Login Successful'})
            },
            'to check token',
            {
                expiresIn: "24h"
            }
            );
            res.send({status: 200, psUserInfo: psUserObj, token: token, message: 'Login Successful'})
        }
    
    })
})
    .catch(err =>{
        res.send({status: 500, message: 'Error'})
    })
})


// router.post('/add', async(req, res, next) => {
//     let psUserObj = new psUserModel({
//         psId: req.body.psId,
//         email: req.body.email,
//          password : req.body.password,
//         createdBy : req.body.createdBy
//     });

//     const psUserList = await psUserObj.save();

//     if(psUserList){
//         var resp = {
//             success : true,
//             message : 'Police Station added successfully',
//             data : psUserList
//         }
//         res.send(resp)
//     }
//     else{
//         res.status(404).send({ success : false, message: 'Cannot add Police Station'})
//     }

// })

/* GET users list */
router.get('/list', function(req, res, next){
    psUserModel.find(function (err, psUserListResponse){
        if(err){
            res.send({status: 500, message: 'Unable to find User'});
        }
        else{
            const recordCount = psUserListResponse.length
            res.send({status: 200, recordCount: recordCount, results: psUserListResponse});
        }
    })
})



module.exports = router;