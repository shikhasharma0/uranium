const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weathercontroller= require("../controllers/weatherController")
const memescontroller = require("../controllers/memesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/TempLondon", weathercontroller.TempLondon)
router.get("/weather/weatherKey", weathercontroller.getWeatherdata)
router.get("/cowin/getCities", weathercontroller.tempOfCities)
router.get("/cowin/getBydistrict", CowinController.getdistrictdata)
router.get("/cowin/getmemes",memescontroller.getMemesdata )
router.post("/memes/Memesdata", memescontroller.createMemesdata)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;