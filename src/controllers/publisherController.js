//2. Write a POST api that creates a publisher from the details in the request body
const publisherModel = require("../models/PublisherModel")

const publisherBook = async function (req, res) {
    let publisher = req.body
    let publisherBook = await publisherModel.create(publisher)
     res.send({data: publisherBook});
}



module.exports.publisherBook = publisherBook