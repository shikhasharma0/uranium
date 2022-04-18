const authordetails = require("../models/authorModel")
const bookdetails = require("../models/bookModel")
const publisherdetails = require("../models/PublisherModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }


const createBook = async function (req, res) {

    let book = req.body
    const data = await bookdetails.create(book)
    res.send({ msg: data })


//==================================================================================

//a)	The authorId is present in the request body. If absent send an error message that this detail is required


const allDetails = req.body
if (allDetails.author == undefined) {
    res.send("Error!!! Author Id Destails is required.... ")
}

//=================================================================================

//b)	If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.


if (allDetails.author != undefined) {
    const getdetails = await authordetails.find()
    if (getdetails[0]._id != allDetails.author) {
        res.send("Author Id is not present ")
    }
}


//===================================================================================

//c)	The publisherId is present in the request body. If absent send an error message that this detail is required

if (allDetails.publisher == undefined) {
    res.send("Error!!! Publisher id Details is required.... ")
}

//==========================================================================================

//d)	If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

if (allDetails.publisher != undefined) {
    const getdetails = await publisherdetails.find()
    if (getdetails[0]._id != allDetails.publisher) {
        res.send("Publisher id Is not present ......")
    }
}
}
//========================================================================================

//Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this)

const Bookdetails = async function (req, res) {
    const data = await bookdetails.find().populate("author").populate("publisher")
    res.send({ msg: data })
}


/// solution 5//////

const fetchbooks = async function (req, res) {
    const data = await bookdetails.find().populate("author publisher")
    res.send({ msg: data })
}

const Updatebooks = async function (req, res) {

    let hardpublisher = await publisherdetails.find({name :{ $in:['Penguin', 'HarperCollins']}}).select({id:1})
    let book = await bookdetails.updateMany({_id: {$in: hardpublisher} },{ IshardCover: true})
 res.send ({msg: hardpublisher })

}


module.exports.createBook = createBook
module.exports.Bookdetails = Bookdetails
module.exports.fetchbooks = fetchbooks
module.exports.Updatebooks= Updatebooks