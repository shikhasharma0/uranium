// const bookModel = require("../models/bookModels")
// //const mongoose = require("mongoose")
// const aws= require("aws-sdk")

// aws.config.update({
//     accessKeyId: "AKIAY3L35MCRUJ6WPO6J",
//     secretAccessKey: "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",
//     region: "ap-south-1"
// })



// let uploadFile= async ( file) =>{
//     return new Promise( function(resolve, reject) {
//      // this function will upload file to aws and return the link
//      let s3= new aws.S3({apiVersion: '2006-03-01'}); // we will be using the s3 service of aws
 
//      var uploadParams= {
//          ACL: "public-read",
//          Bucket: "classroom-training-bucket",  //HERE
//          Key: "abc/" + file.originalname, //HERE 
//          Body: file.buffer
//      }
 
 
//      s3.upload( uploadParams, function (err, data ){
//          if(err) {
//              return reject({"error": err})
//          }
//          console.log(data)
//          console.log("file uploaded succesfully")
//          return resolve(data.Location)
//      })
 
//     })
//  }
 

// const bookcreate = async function (req, res) {
//     try {
//         const requestBody = req.body;
//         if (!Validation.isValidRequestBody(requestBody))
//             return res.status(400).send({ status: false, massage: "request is unvalid" })


//         if (!Validation.isValidField(requestBody.title))
//             return res.status(400).send({ status: false, message: 'title is required!' });

//         let titleExist = await bookModel.findOne({ title: requestBody.title })
//         if (titleExist)
//             return res.status(400).send({ status: false, message: 'title is alredy exist' })


//         if (!Validation.isValidField(requestBody.excerpt))
//             return res.status(400).send({ status: false, message: 'excerpt is required!' });


//         if (!Validation.isValidField(requestBody.userId))
//             return res.status(400).send({ status: false, message: 'userId is required!' });


//         if (!Validation.isValidField(requestBody.ISBN))
//             return res.status(400).send({ status: false, message: 'ISBN No. is required!' });

//         let ISBNexist = await bookModel.findOne({ ISBN: requestBody.ISBN })
//         if (ISBNexist)
//             return res.status(400).send({ status: false, message: 'ISBN no. is already exist!' })

//         if (!Validation.isValidField(requestBody.category))
//             return res.status(400).send({ status: false, message: 'category is required!' });


//         if (!Validation.isValidField(requestBody.subcategory))
//             return res.status(400).send({ status: false, message: 'subcategory is required!' });

//         if (!Validation.isValidField(requestBody.releasedAt))
//             return res.status(400).send({ status: false, message: 'releasedAt is required!' });

//         if (requestBody.isDeleted == true) {
//             return res
//                 .status(400)
//                 .send({ status: false, message: "Cannot input isDeleted as true while creating a book" });
//         }


//         //console.log(`requestBody.releasedAt is ${requestBody.releasedAt}`);
//         if (!Validation.isValidReleaseDate(requestBody.releasedAt)) {
//             return res.status(400).send({ status: false, message: 'Invalid format releasedAt' });
//         }



//         if (requestBody.isPublished)

//             requestBody.publishedAt = new Date();

//             let files= req.files
//             if(files && files.length>0){
//                 //upload to s3 and get the uploaded link
//                 // res.send the link back to frontend/postman
//                 let uploadedFileURL= await uploadFile( files[0] )
//                 res.status(201).send({msg: "file uploaded succesfully", data: uploadedFileURL})
//             }
//             else{
//                 res.status(400).send({ msg: "No file found" })
//             }
//         let newBook = await bookModel.create(requestBody);
//         return res.status(201).send({ status: true, message: 'New book created successfully.', data: newBook });
//         //console.log({ status: true, data: newBook });

//     }
//     catch (error) {
//         console.log(error)
//         return res.status(500).send({ status: false, message: error.message })
//     }
// }


// module.exports.bookcreate = bookcreate;