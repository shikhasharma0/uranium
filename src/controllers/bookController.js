const { count } = require("console")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
  let allBooks = await bookModel.find( {BookName:"Royal Book" , AuthorName: "ShikhaSharma"} )
  res.send({msg: allBooks})


}


  const getByYear= async function (req, res) {
 let year = req.body
 let yearFilter =  await bookModel.find(year)
 res.send({msg: yearFilter })

  }

  const getXINRBooks= async function (req, res) {
      let InnRupee = await bookModel.find( {"Prices.IndianPrice":{$in:[100,200,500]} })
      res.send({InrBook: InnRupee })

  }
      

  const getRandomBooks= async function (req, res) {
    let Random = await bookModel.find( {$or: [{stockAvaliable:true},{totalPages:{$gt:500}} ] })
    res.send({randomBook: Random })


  }
      //{stockAvaliable:true},{totalPa
      
      //ges:($gt:500)
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // //let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
//     //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
//     console.log(allBooks)
//     let b = 14
//     b= b+ 10
//     console.log(b)
//     res.send({msg: allBooks})
// }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getByYear= getByYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks

