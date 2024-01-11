// const mongoose = require("mongoose")
// const chatModel = mongoose.Schema({
//     chatName:{
//         type:String
//     },
//     isGroupChat:{
//         type:Boolean
//     },
//     users :[{
//         type : mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     }],
//     latestMessage:{
//         type : mongoose.Schema.Types.ObjectId,
//         ref:"Message"
//     },
//     groupAdmin:{
//         type : mongoose.Schema.Types.ObjectId,
//         ref:"User",
//     }
// },
// {
//     timeStamp:true,
// })
// const Chat = mongoose.model("Chat",chatModel)
// module.exports = Chat;
const mongoose = require("mongoose");
// const userSchema = require("./userSchema");
// const User = require("../modals/userModel");
const chatModel = mongoose.Schema(
  {
    chatName: { type: String },
    isGroupChat: { type: Boolean },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamp: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
