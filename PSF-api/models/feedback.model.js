const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    visitorId: String,
    attender: Number,
    satisfy: Number,
    behaviour : Number,
    cleaniness : Number,
    atmosphere : Number,
    rating : Number,
   

})

const feedbackModel = mongoose.model('Feedback', feedbackSchema)

module.exports = feedbackModel;