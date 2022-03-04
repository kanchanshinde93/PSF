const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userLoginSchema = mongoose.Schema ({

    userEmail : String ,
    userPassword : String

});

const userLoginModel = mongoose.model('usersLogin', userLoginSchema);

module.exports = userLoginModel;
