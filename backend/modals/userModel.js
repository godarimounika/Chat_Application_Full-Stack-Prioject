// // const mongoose = require("mongoose");

// // const userModel = new mongoose.Schema({
// //     Name : {
// //         type : String,
// //         required : true,
       
// //     }, 
// //     Email : {
// //         type : String,
// //         required : true,
// //         unique:false,
// //     }, 

// //     Password : {
// //         type : String,
// //         required : true,
// //     },

// //     confirmPassword : {
// //         type : String,
// //         required : true,
// //     },
// //     isAdmin : {
// //         type : Boolean,
// //         required : false,
// //     }
// // },
// // {timestamps:true}
// // )

// // // module.exports = mongoose.model( "user" , userSchema )  ;
// // // const User = mongoose.model("User", userModel);
// // // module.exports = User;
// // const User = mongoose.model("user",userModel);
// // module.exports = User;

// const mongoose = require("mongoose");

// const userModel = new mongoose.Schema({
    // Name : {
    //     type : String,
    //     required : true,
       
    // }, 
    // Email : {
    //     type : String,
    //     required : true,
    //     unique:false,
    // }, 

    // Password : {
    //     type : String,
    //     required : true
    // },

    // confirmPassword : {
    //     type : String,
    //     required : true
    // },
    // isAdmin : {
    //     type : Boolean,
    //     required : false
    // }
// },
// {timestamps:true})

//  const User= mongoose.model( "user" , userModel )
//  module.exports=User



const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
       
    }, 
    Email : {
        type : String,
        required : true,
        unique:false,
    }, 

    Password : {
        type : String,
        required : true
    },

    confirmPassword : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        required : false
    }
}, { timestamps: true });

const User = mongoose.model("User", userModel);
module.exports = User;
