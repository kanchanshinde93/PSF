const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userLoginSchema = mongoose.Schema ({

    userEmail : String ,
    userPassword : String,
    
    isAdmin: {type: Boolean, default: false, required: true},
    isVisitorAdmin: {type: Boolean, default: false, required: true},
    isControlAdmin: {type: Boolean, default: false, required: true}

});

const userLoginModel = mongoose.model('usersLogin', userLoginSchema);

module.exports = userLoginModel;
