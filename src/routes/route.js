const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const DeveloperController= require("../controllers/DeveloperController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbatch", batchController.createbatch  )

router.post("/createdevelopers", DeveloperController.createdevelopers)

router.get("/scholarshipdevelopers", DeveloperController.scholarshipdevelopers  )

router.get("/developer", DeveloperController.developer)

//router.get("/getBooksWithAuthorDetails", DeveloperController.getBooksWithAuthorDetails)

module.exports = router;