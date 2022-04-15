const mongoose = require('mongoose');
const validator = require('validator');

const psUserSchema = mongoose.Schema({
    //psId : String,
    psName:{type:String,
            required: true,
            unique: [true, "This name already exist"]} ,
    // zone: String,
    // pincode : Number,
    // city : String,
    
    email : {
        type :String, 
        required: true ,
        unique: [true, "Email Id already present"],
        validate(value) {
            if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
            }
        }
    },

    password :  {type: String, required: true}
    //psName: String
    //createdBy : String
})



const psUserModel = mongoose.model('Police-Station-User', psUserSchema);

module.exports = psUserModel;