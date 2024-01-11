import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import axios from "axios";
import  {myContext}  from "./MainContainer";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { use } from "../../../backend/Routes/chatRoutes";


// import ChatArea from "./ChatArea";




function Sidebar(){
let navigate = useNavigate();
const dispatch=useDispatch();
const{refresh,setRefresh }=useContext(myContext);
const[conversations,setConversations] = useState([]);
const lightTheme = useSelector((state) => state.themeKey);
const userData = JSON.parse(sessionStorage.getItem("userData"));
// console.log("Data from LocalStorage : ", userData);
// const nav= useNavigate();
if(!userData){
    console.log("user not authenticated")
    navigate("/")
}

const user = userData.data;
useEffect(()=>{
    const config={
        headers:{
            Authorization:`Bearer ${user.token}`,
        },
    };

    axios.get("http://localhost:8080/chat/",config).then((response)=>{
        setConversations(response.data);
    })
},[conversations])


// const lightTheme=useSelector((state)=>state.themeKey);
// const[conversations ,setConversations]=useState([
//     {
//      name:"Test#1",
//      lastMessage :"LastMessage #1",
//      timeStamp:"today"  
//     },
//     {
//         name:"pest#2",
//         lastMessage :"LastMessage #2",
//         timeStamp:"today"  
//        },{
//         name:"zst#3",
//         lastMessage :"LastMessage #3",
//         timeStamp:"today"  
//        },
// ]);
// let navigate = useNavigate();

// const toggleTheme = () => {
//     dispatch(toggleTheme);
//     // Here you can apply changes to your theme based on lightTheme value
//     // For example, you can have a class on the body element to change themes
//     document.body.classList.toggle("dark-theme", !lightTheme);
//   };

//     return(
      
// //         <div className="sidebar-container ">
// //         <div className="sb-header">
// //             <div className="other-icons">
// //           <IconButton>
// //           <AccountCircleIcon className="icon" />
// //           </IconButton>
// //           </div>
// //           <div>
// //           <IconButton onClick={()=>{navigate("Users")}}>
// //           <PersonAddIcon className="icon"/>
// //           </IconButton> 
// //            <IconButton onClick={()=>{navigate("Groups")}}>
// //           <GroupAddIcon className="icon"/>
// //           </IconButton > 
// //            <IconButton onClick={()=>{navigate("CreateGroups")}}>
// //           <AddCircleIcon className="icon"/>
// //           </IconButton> 
// //            <IconButton onClick={()=>{dispatch(toggleTheme)}}> 
// //           <NightlightIcon/>
// //          {/* {lightTheme && (
// //          <NightlightIcon 
// //          className={"icon"+  (lightTheme ? "" : "dark")}/>)}
// //           {!lightTheme && (
// //          <LightModeIcon
// //          className={"icon"+  (lightTheme ? '' : "dark")}/>)} */}
// //           </IconButton>
// //           </div>
// //         </div>

// //         <div  className="sb-search"  >
// //       <IconButton>
// //       <SearchIcon/>
// //       </IconButton>
// //            <input  placeholder="search"  className="search-Box"  />
// //         </div>
       
// //         <div   className="sb-conversation">
// //             {/* {conversations.map((conversation=>{
// //                 return   <ConversationItem props={conversation} 
// //                 key={conversation.name}
// //                 onClick={()=>{navigate('ChatArea')}}
// //                 />
// //             }))} */}
// //           {conversations.map((conversation,index)=>{
// //             var chatName ="";
// //             if(conversation.isGroupChat){
// //                 chatName=conversation.chatName;
// //             }else{
// //                 conversation.users.map((user=>{
// //                     if(user._id != userData._id){
// //                         chatName=user.Name;
// //                     }
// //                 }))
// //             }
// //             if(conversation.latestMessage == undefined){
// //                 return(
// //                <div key={index} onClick={()=>{
// //                 setRefresh(!refresh)
// //                }}>

// // <div key={index} className="conversation-container"
// // onClick={()=>{
// //     navigate("/chat" + conversation._id + "&" +chatName);
// // }}>
// //     <p className="con-icon">{chatName[0]}</p>
// //     <p className="con-title">{chatName}</p>
// //     <p className="con-lastMessage">
// //         no previous message , click here to start a new chat
// //     </p>
// // </div>
// //     </div>
// //     );
// //             }else{
// //                 return(
// //                     <div key={index}
// //                     className="conversation-container"
// //                     onClick={()=>{
// //                         navigate("chat/" +conversation._id + "&" + chatName);

// //                     }}
// //                     >
// //                         <p className="con-icon">{chatName[0]}</p>
// //     <p className="con-title">{chatName}</p>
// //     <p className="con-lastMessage">
// //       {conversation.latestMessage.content}
// //     </p>
// //                         </div>
// //                 )
// //             }
// //           })}
// //         </div>

// //         </div>
//     )
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton
            onClick={() => {
              navigate("/app/welcome");
            }}
          >
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              sessionStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation, index) => {
          var chatName = "";
          if(conversation.isGroupChat){
            chatName = conversation.chatName;
          }else{
            conversation.users.map((user)=>{
              if(user._id != userData.data._id){
                chatName = user.Name;
              }
            })
          }
          // console.log("current convo : ", conversation);
          // if (conversation.users.length === 1) {
          //   return <div key={index}></div>;
          // }
          if (conversation.latestMessage === undefined) {
            // console.log("No Latest Message with ", conversation.users[1]);
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  // dispatch(refreshSidebarFun());
                  setRefresh(!refresh);
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        // conversation.users[1].Name
                        chatName
                    );
                  }}
                  // dispatch change to refresh so as to update chatArea
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {/* {conversation.users[1].Name[0]} */}
                    {chatName[0]}
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {/* {conversation.users[1].Name} */}
                    {chatName}
                  </p>

                  <p className="con-lastMessage">
                    No previous Messages, click here to start a new chat
                  </p>
                  {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
                {conversation.timeStamp}
              </p> */}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "chat/" +
                      conversation._id +
                      "&" +
                      // conversation.users[1].Name
                      chatName
                  );
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {/* {conversation.users[1].Name[0]} */}
                  {chatName[0]}
                </p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {/* {conversation.users[1].Name} */}
                  {chatName}
                </p>

                <p className="con-lastMessage">
                  {conversation.latestMessage.content}
                </p>
                {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
                {conversation.timeStamp}
              </p> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Sidebar;

