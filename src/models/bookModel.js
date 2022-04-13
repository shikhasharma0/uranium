const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required : true
    },
  
    authorName: String, 
    totalPages: Number,
    stockAvaliable:  Boolean,
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year: {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover



// "bookName":"The Little Book of Encouragement",
// "authorName" : "Dalai Lama ",
//     "totalPages":8746,
//     "tags": ["fgdfgdf","ssdfdg"],
//     "stockAvailable": true,
//     "year" :2021,
//       "prices" : {
//                     "indianPrice" :100,
//                     "europePrice" :2  
//                  }