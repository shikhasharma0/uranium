const axios = require('axios')

let getMemesdata = async function(req, res){

try{
    let options = {
        method : "GET",
        url : "https://api.imgflip.com/get_memes"
    }
    let result = await axios(options)
    res.status(200).send({status: true, msg: result.data})
}catch(error){
    res.status(500).send({error: error.message})
}
}

let createMemesdata = async function(req, res){

    try{
        let meme_id = req.query.template_id
        let topText = req.query.text0
        let bottomText = req.query.text1
        let userName = req.query.username
        let password = req.query.password

        if(meme_id && topText && bottomText && userName && pass){
            let options = {
                method : "POST",
                url : `https://api.imgflip.com/caption_image?template_id=${meme_id}&text0=${topText}&text1=${bottomText}&username=${userName}&password=${password}`
            }
            let result = await axios(options)
            res.status(200).send({status: true, msg: result.data})
        }else{
            res.status(400).send({status:false, msg:"Please given valid input data"})
        }
    }catch(error){
        res.status(500).send({error: error.message})
    }
    }

module.exports.getMemesdata = getMemesdata
module.exports.createMemesdata =  createMemesdata 





// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
