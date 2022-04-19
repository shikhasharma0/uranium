const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema( {
   
    author_name: String,
    size: Number,
program: String


}, { timestamps: true });

module.exports = mongoose.model('Branch', BatchSchema)
