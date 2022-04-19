const BatchModel= require("../models/batchModel")

const createbatch= async function (req, res) {
    let branch= req.body
    let branchCreated = await BatchModel.create(branch)
    res.send({data: branchCreated})
}



module.exports.createbatch= createbatch
