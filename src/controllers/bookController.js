const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel");


const createAuthor= async function (req, res) {
    let data= req.body;
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let authordetails = await BookModel.find( {authorName : "Chetan Bhagat" } )
    const id = authordetails[0].author_id
  const Booksname = await  BookModel.find({author_id: id}).select({name:1})
  res.send ({msg: Booksname })
}

 
const updateBooks= async function (req, res) {
const databook = await  BookModel. find({name:" Two States"})
const id = databook[0].author_id
const authorname = await authordetails.find({ author_id: id }).select({ author_name: 1, _id: 0 })
const bookname = data[0].name
const priceupdate = await  BookModel.findOneAndUpdate({ name: bookname }, { price: 100 }, { new: true }).select({ price: 1, _id: 0 })
res.send({ msg:  authorname,priceupdate})
}


const deleteBooks= async function (req, res) {
    const data = await  BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    const id = data.map(input => input.author_id)
    let arr = []
    for (let i = 0; i < id.length; i++) {
        let a = id[i]
        const author = await AuthorModel.find({ author_id: a }).select({ author_name: 1, _id: 0 })
        arr.push(author)
    }
    const authorname = arr.flat()
    res.send({ msg: authorname })
}



// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.createAuthor= createAuthor

