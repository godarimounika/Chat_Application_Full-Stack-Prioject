const express = require("express");
const app = express();
const chatRoutes = require("./Routes/chatRoutes")
const messageRoutes = require("./Routes/messageRoutes")
// const userController = require("../Controllers/userController")
const port = 8080;

const cors = require("cors");

const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const { Server, Socket } = require("socket.io");

app.use(  cors() );
app.use( express.json() );

app.use(userRoutes);


mongoose.connect("mongodb+srv://Mounika:<mounu96181>@cluster1.80jappe.mongodb.net/?retryWrites=true&w=majority" )
.then( () => { 
    
    console.log(`DB Connected`) } )
.catch(  () => {  console.log(`Db Connection failed`) } )  


app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);




const server =app.listen( port , () => {
    console.log(`server started running on port ${port}`)
} )


const io =require("socket.io")(server,{
    cors:{
        origin:"*",
    },
    pingTimeout:60000,
});

io.on("connection",(socket)=>{
    socket.on("setup",(user)=>{
        socket.join(user.data._id);
        socket.emit("connected")
    });
    socket.on("join chat",(room)=>{
        socket.join(room);
    });
    socket.on("new message",(newMessageStatus)=>{
        if (!newMessageStatus || !newMessageStatus.chat) {
            return console.log("newMessageStatus or chat not defined");
        }
        var chat = newMessageStatus.chat;
        if(!chat.users){
            return console.log("chat.users not defined");
        }
        chat.users.forEach((user)=>{
            if(user._id == newMessageStatus.sender._id)
            return;
        socket.in(user._id).emit("message recived",newMessageRecieved);
        });
    });
  
});

