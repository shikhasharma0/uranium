const express = require('express');
const router = express.Router();
 const bookModel= require("../models/bookModel.js")
//const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

//router.post("/getParticularBooks", bookController.getParticularBooks )

router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)

router.post("/getByYear", bookController.getByYear)

module.exports = router;

