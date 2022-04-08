const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});


/////// First Api////
router.get('/movies', function (req, res) {
    let moviesnames = ["Rang de bsanti", "DDLJ","Hiro", "Tubelight"]
    console.log(moviesnames)
    
     res.send('My first ever api!')
 });
 
 ///// second Api///////
 router.get('/movies/:index', function (req, res) {
         let movies = ["Rang de bsanti", "Dil", "College Life", "Veer", "DDLJ","Hiro", "Tubelight"];
         let index = req.params.index
         if(index >= movies.length || index < 1 ){
             res.send("Noo input")
         }else{
         res.send(movies[index])
         } 
 });
 
 
 router.get('/films', function (req, res) {
     const filmData = [ {
         id : 1,
         name: "The Shining"
        }, {
         id: 2,
         name: "Incendies"
        }, {
         id: 3,
         name: "Rang de Basanti"
        }, {
         id: 4,
         name: "Finding Nemo"
        }]
         
     res.send(filmData)
 });
 
 router.get('/films/:filmId', function (req, res) {
     let filmid = req.params.filmId
       const filmData = [ {
         id : 1,
         name: "The Shining"
        }, {
         id: 2,
         name: "Incendies"
        }, {
         id: 3,
         name: "Rang de Basanti"
        }, {
         id: 4,
         name: "Finding Nemo"
        }]
        let result = filmData[filmid]
        if(result.length <= 0) {
            res.send('no movie found')
        }else {
            res.send(result)
        }
     
 });




module.exports = router;
// adding this comment for no reason