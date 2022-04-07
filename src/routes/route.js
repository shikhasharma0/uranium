const express = require('express');
const loggerfix = require('../logger/logger');
const Helper = require('../util/helper');
const Formatter = require('../validater/formattar');
const lodash = require('lodash');
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('Welcome to my application. I am <Shikha Sharma> and a part of FunctionUp Uraninam cohort.')
    loggerfix.endpoint()
    Helper.printDate()
    Helper.printMonth()
    Helper.getBatchInfo()
    Formatter.Printfunctionup("Shikha Sharma");
    Formatter.changetoLowerCase("Shikha Sharma");
    Formatter.changetoUpperCase("Shikha Sharma");
    res.send('My first ever api!')
}); 


module.exports = router;
// adding this comment for no reason



router.get('/hello', function (req, res) {

    let arr = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"]
    console.log(lodash.chunk(arr, 4));

    let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(arr2));

    let first = [5, 7, 23, 8, 4, 2, 9]
    let second = [2, 5, 7, 9, 12, 34]
    let third = [7, 32, 12, 5, 11, 9]
    let fourth = [2, 4, 5, 12, 7, 3, 8]
    let fifth = [12, 3, 23, 4, 51, 21 ,11, 32]

    console.log(lodash.union(first, second, third, fourth, fifth));

    let pairs = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']]
    console.log(lodash.fromPairs(pairs));

    res.send('hey there i am using lodash')
})