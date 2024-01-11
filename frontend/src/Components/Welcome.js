import React from 'react'
import logo from "../images/livechat3.jpeg"
import "./myStyles.css";
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const userData = JSON.parse(sessionStorage.getItem("userData"))
 
  console.log(userData)
  const nav = useNavigate();
  if(!userData){
    console.log("user not Authenticated" );
    nav("/")
  }
  return (
    <div className='welcome-container'>
        <img className='welcome-logo' 
        src={logo} alt='logo'/>
        <b> hii...{userData.data.Name}</b>
        <p>View and text directly to people present in the chat room.</p>
    </div>
  )
}

export default Welcome
// import React from "react";
// import logo from "../images/live chat2.png";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Welcome() {
//   const lightTheme = useSelector((state) => state.themeKey);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   console.log(userData);
//   const nav = useNavigate();
//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }

//   return (
//     <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
//       <motion.img
//         drag
//         whileTap={{ scale: 1.05, rotate: 360 }}
//         src={logo}
//         alt="Logo"
//         className="welcome-logo"
//       />
//       <b>Hi , {userData.data.name} 👋</b>
//       <p>View and text directly to people present in the chat Rooms.</p>
//     </div>
//   );
// }

// export default Welcome;