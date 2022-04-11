const express = require('express');
const router = express.Router();
 
// let players =
//    [
//        {
//            name: "manish",
//            dob: "1/1/1995",
//            gender: "male",
//            city: "jalandhar",
//            sports: [
//                "swimming"
//            ]
//        },
//        {
//            name: "gopal",
//            dob: "1/09/1995",
//            gender: "male",
//            city: "delhi",
//            sports: [
//                "soccer"
//            ],
//        },
//        {
//            name: "lokesh",
//            dob: "1/1/1990",
//            gender: "male",
//            city: "mumbai",
//            sports: [
//                "soccer"
//            ],
//        },
//    ]
 
 
       //LOGIC WILL COME HERE
       const players= [ ]

       router.post('/players', function (req, res) {
           let player = req.body;
           let playername = player.name;
           for (let i = 0; i < players.length; i++) {
               if (players[i].name == playername)
                  return res.send('Player already exists');
           }
           players.push(player);
           res.send(players);
       })



   
//    router.post('/test-post2', function (req, res) {
//     let data= req.body
//     console.log(data)
//     res.send( {  msg: "hi guys..my 2nd post req"  }   )
// });

module.exports = router;
