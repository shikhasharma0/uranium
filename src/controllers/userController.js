const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//1 - Write a POST api to register a user from the user details in request body. 
const createUser = async function (abcd, xyz) {
  try{
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  res.send ({ msg: savedData})
}catch{
  console.log(abcd.newAtribute);
  xyz.send({ msg: "Error Msg" });


  }
};


//2 - Write a POST api to login a user that takes user details like email and password from the request body.
 //If the credentials don't match with any user's data return a suitable error.
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
  }catch(err){
    res.status(400).send({msg:"Request not send "})
  }
  
};

//3- Write a GET api to fetch user details. Pass the userId as path param in the url. 
//Check that request must contain x-auth-token header. If absent, return a suitable error.

const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });

  
}catch(error){
  return res.status(400).send({ status: false, msg: "isupdate not exit"});
}
};


//- Write a PUT api to update user details. Pass the userId as path param in the 
//url and update the attributes received in the reauest body. 
//Check that request must contain x-auth-token header. If absent, return a suitable error.


const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: user, data: updatedUser });
  
}catch(error){
  return res.status(400).send({ status: false, msg: "isupdate not exit"});
}
};


const deleteUser  = async function( req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId); //find the value that I inserted!
    if (!user) {
      return res.send("Invalid User ID!");
    }
    let userData = req.body;
    userData.deleteUser= true;
    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: user, data: deletedUser });
  }catch(error){
    return res.status(400).send({ status: false, msg: "isdeleted not exit"});

  }
  };


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;


// const postMessage = async function (req, res) {
//     let message = req.body.message
//     // Check if the token is present
//     // Check if the token present is a valid token
//     // Return a different error message in both these cases
//     let token = req.headers["x-auth-token"]
//     if(!token) return res.send({status: false, msg: "token must be present in the request header"})
//     let decodedToken = jwt.verify(token, 'functionup-thorium')

//     if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
//     //userId for which the request is made. In this case message to be posted.
//     let userToBeModified = req.params.userId
//     //userId for the logged-in user
//     let userLoggedIn = decodedToken.userId

//     //userId comparision to check if the logged-in user is requesting for their own data
//     if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

//     let user = await userModel.findById(req.params.userId)
//     if(!user) return res.send({status: false, msg: 'No such user exists'})
    
//     let updatedPosts = user.posts
//     //add the message to user's posts
//     updatedPosts.push(message)
//     let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

//     //return the updated user document
//     return res.send({status: true, data: updatedUser})
// }