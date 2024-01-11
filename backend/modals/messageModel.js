// const mongoose = require("mongoose")

// const messageModel = mongoose.Schema({
//   sender :{
//     type : mongoose.Schema.Types.ObjectId,
//     ref:"User"
//   },
//   reciver:{
//     type : mongoose.Schema.Types.ObjectId,
//     ref:"User",
//   },

//   chat:{
//     type : mongoose.Schema.Types.ObjectId,
//     ref:"Chat",
//   },

// },

// {
//     timeStamp :true
// });

// const Message = mongoose.Model("Message",messageModel);
// module.exports = Message;

const mongoose = require("mongoose");
// const User = require("../modals/userModel");
const messageModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timeStamp: true,
  }
);

const Message = mongoose.model("Message", messageModel);
module.exports = Message;
