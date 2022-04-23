const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {
        type: String,
      required: true
    },
    age: Number,

   
}, { timestamps: true });

module.exports = mongoose.model('NewauthUser', userSchema)
