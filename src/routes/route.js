const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           name: "manish",
           dob: "1/1/1995",
           gender: "male",
           city: "jalandhar",
           sports: [
               "swimming"
           ]
       },
       {
           name: "gopal",
           dob: "1/09/1995",
           gender: "male",
           city: "delhi",
           sports: [
               "soccer"
           ],
       },
       {
           name: "lokesh",
           dob: "1/1/1990",
           gender: "male",
           city: "mumbai",
           sports: [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
      let data = req.body.players
    for( let i=0; i<length.players; i++);
    if (req.body.name == data[i].name) {
        retrun = true;
        res.send("already user exists")
        break;
    }
}

if (retrun == false) {
    let obj = {
        nmae: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        city: req.body.city,
        sports: [req.body.sports]
    }
    data.push(obj);
    res.send({ data: players, status: true })
}

else
res.send("insert all valid details")
});




//    router.post('/test-post2', function (req, res) {
//     let data= req.body
//     console.log(data)
//     res.send( {  msg: "hi guys..my 2nd post req"  }   )
// });

module.exports = router;
