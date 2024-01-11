const express = require("express");
const router = express.Router();
const User = require("../modals/userModel");
const generateToken = require("../Config/generateToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const { body, validationResult } = require('express-validator');
const expressAsyncHandler  = require("express-async-handler")



const registerUser =async (req,res)  => {
  console.log("hello checking")
  let Result =  validationResult(req);
  if(Result.errors.length < 1 ){
     console.log("NO Errors")
  }
  else{
     console.log(Result.errors)
     return res.json(Result.errors)
  }
 console.log("hello checking-3")
 console.log(req.body,"body")
  const{Name,Email,Password,confirmPassword,isAdmin,token}= req.body;
  if(Password != confirmPassword){
      return res.json({Error:"incorrect Password"})
  }
  const hashedPassword = bcrypt.hashSync(Password,5)
  // console.log(hashedPassword)
let user = new User({Name,Email,Password:hashedPassword,confirmPassword:hashedPassword,isAdmin,token});
if (user) {
  res.status(201).json({
    _id: user._id,
    Name: user.Name,
    Email: user.Email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
} else {
  res.status(400);
  throw new Error("Registration Error");
}
// let token = jwt.sign( { _id : user._id   } , "shh" )

//  res.json({ _id : user._id  , Name:user.Name,Success : "Register  Successfully" , token })
user.save()
// const newUser= user.save();
// console.log(newUser)
//  return res.json(newUser);
return res.json(user)
// console.log("hello checking-4")
// return res.json(user)

};

  
  
  const userLogin =   async (req,res) => {
    const {Name,Email,Password} = req.body;
    let user = await User.findOne({ Email : Email })
    console.log(user,"checking")
   
  //   if(user == null){
  //     res.json({"Error":"not user found with this email"})
  // }else{
  //   res.json(user)
  // }
  // let isPasswordValid = bcrypt.compareSync(  Password , user.Password);
  
  // if( isPasswordValid == false){
  //     return res.json({"Error":"Incorrect Password"})
  //  }
  if (user == null) {
    return res.json({ Error: "no user found with this email" });
  } else if (!bcrypt.compareSync(Password, user.Password)) {
    return res.json({ Error: "Incorrect Password" });
  }

    // if( Password != user.Password ){
    //     return res.json({ Error : "Incorrect password"  });
    // }
 
    let token = jwt.sign( { _id : user._id   } , "shh" )

    return res.json({ _id : user._id ,Name:user.Name,Success : "Login Success" ,token })
 
}

const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { Name: { $regex: req.query.search, $options: "i" } },
          { Email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id },
  });
  res.send(users);
});

// const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ Error: "User not authenticated" });
//     }

//     const keyword = req.query.search
//       ? {
//           $or: [
//             { Name: { $regex: req.query.search, $options: "i" } },
//             { Email: { $regex: req.query.search, $options: "i" } },
//           ],
//         }
//       : {};

//     const users = await User.find({ ...keyword, _id: { $ne: req.user._id } });
//     res.send(users);
//   } catch (error) {
//     res.status(500).json({ Error: "Internal server error" });
//   }
// });

  module.exports = {
    registerUser, userLogin, fetchAllUsersController,
  }