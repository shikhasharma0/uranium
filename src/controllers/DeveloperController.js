
const DeveloperModel= require("../models/DeveloperModel")
//const BatchModel= require("../models/batchModel")

const createdevelopers= async function (req, res) {
    let Developer = req.body
    let DeveloperCreated = await DeveloperModel.create(Developer)
    res.send({data: DeveloperCreated})
}


//3. Write an api GET /scholarship-developers that fetches the list of eligible developers for scholarship. 
//An eligible developer is female with percentage greater than or equal to 70

const scholarshipdevelopers = async function (req, res) {
    const data = await DeveloperModel.find()({percentage:{$gte:70},gender:"female"})
    res.send({ msg: data })
}




//4. Write an api GET /developers?percentage=value1&program=value2 that only 
//returns the developers for a given program with a percentage greater than or equal to the received value. 
//Please note the batch name and the program values are received in the request as query params


const developer = async function (req, res) {
 let batchDetails=req.query.percentage
    let developerDetails= req.query.program
    const data=await DeveloperModel.find({percentage:batchDetails,"program": developerDetails}).populate("batch")//.select({batch:1,_id:0})
    res.send({data:data})

}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createdevelopers= createdevelopers
module.exports.scholarshipdevelopers= scholarshipdevelopers
module.exports.developer = developer
