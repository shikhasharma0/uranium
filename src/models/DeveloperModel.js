const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {

    name: String,
    gender: {
        type : String,
        enum: ["male", "female", "LGBTQ"]
    }, 
    
    percentage:Number,
     batch: {
        type: ObjectId,
        ref: "Branch"
    }


}, { timestamps: true });


module.exports = mongoose.model('Developer', developerSchema)

