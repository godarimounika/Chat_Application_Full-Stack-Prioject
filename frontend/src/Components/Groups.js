import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import logo from "../images/live chat2.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { useSelector ,useDispatch} from 'react-redux';
import {AnimatePresence, motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import {myContext}  from "./MainContainer";
// import myContext from "./MainContainer";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
import { refreshSidebarFun } from "../Features/refreshSidebar";


// function Groups({refresh,setRefresh}) {
// const lightTheme=useSelector((state)=>state.themeKey);
// const dispatch = useDispatch();
// // const [refresh, setRefresh] = useState(true);
// // const { refresh, setRefresh } = useContext(myContext);
// const [groups, SetGroups] = useState([]);
// const userData = JSON.parse(sessionStorage.getItem("userData"));
// // console.log("Data from LocalStorage : ", userData);
// const nav = useNavigate();
// if (!userData) {
//   console.log("User not Authenticated");
//   nav("/");
// }

// const user = userData.data;
// useEffect(() => {
//   console.log("Users refreshed : ", user.token);
//   const config = {
//     headers: {
//       Authorization: `Bearer ${user.token}`,
//     },
//   };

//   axios
//     .get("http://localhost:8080/chat/fetchGroups", config)
//     .then((response) => {
//       console.log("Group Data from API ", response.data);
//       SetGroups(response.data);
//     });
// }, [refresh]);
    
// //   return (
// //     <AnimatePresence>
// //     <motion.div 
// //     initial={{opacity:0,scale:0}}
// //     animate={{opacity:1,scale:1}}
// //     exit={{opacity:0,scale:0}}
// //     transition={{ease:"anticipate",
// // duration:"0.3"}}
    
// //     className='list-container'>
   
// //     <div className= {"ug-header"+ (lightTheme ? '' :  "dark")} >
// //      <img src={logo} style={{height:"2rem",width:"2rem"}}/>
// // <p>Available groups</p>
// //     </div>
// //     <div className="sb-search">
// //    <IconButton>
// //    <SearchIcon/>
// //    </IconButton>
// //         <input  placeholder="search"   className="search-Box"/>
// //      </div>
// //      <div className='ug-list'>
    
// //          <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.89}}
// //           className='list-item'>
// //              <p className='con-icon'>T</p>
// //              <p className='con-title'>Text Users</p>

// //          </motion.div>
// //          <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.89}}
// //           className='list-item'>
// //              <p className='con-icon'>T</p>
// //              <p className='con-title'>Text Users</p>

// //          </motion.div>
// //          <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.89}}
// //           className='list-item'>
// //              <p className='con-icon'>T</p>
// //              <p className='con-title'>Text Users</p>

// //          </motion.div>
// //          <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.89}}
// //           className='list-item'>
// //              <p className='con-icon'>T</p>
// //              <p className='con-title'>Text Users</p>

// //          </motion.div>
// //          <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.89}}
// //           className='list-item'>
// //              <p className='con-icon'>T</p>
// //              <p className='con-title'>Text Users</p>

// //          </motion.div>
        

// //      </div>
// //  </motion.div>
// //  </AnimatePresence>
// //   )

// return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0 }}
//         transition={{
//           ease: "anticipate",
//           duration: "0.3",
//         }}
//         className="list-container"
//       >
//         <div className={"ug-header" + (lightTheme ? "" : " dark")}>
//           <img
//             src={logo}
//             style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
//           />
//           <p className={"ug-title" + (lightTheme ? "" : " dark")}>
//             Available Groups
//           </p>
//           <IconButton
//             className={"icon" + (lightTheme ? "" : " dark")}
//             onClick={() => {
//               setRefresh((!refresh));
//             }}
//           >
//             <RefreshIcon />
//           </IconButton>
//         </div>
//         <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//           <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
//             <SearchIcon />
//           </IconButton>
//           <input
//             placeholder="Search"
//             className={"search-box" + (lightTheme ? "" : " dark")}
//           />
//         </div>
//         <div className="ug-list">
//           {groups.map((group, index) => {
//             return (
//               <motion.div
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={"list-tem" + (lightTheme ? "" : " dark")}
//                 key={index}
//                 onClick={() => {
//                   console.log("Creating chat with group", group.name);
//                   // const config = {
//                   //   headers: {
//                   //     Authorization: `Bearer ${userData.data.token}`,
//                   //   },
//                   // };
//                   // axios.post(
//                   //   "http://localhost:8080/chat/",
//                   //   {
//                   //     userId: user._id,
//                   //   },
//                   //   config
//                   // );
//                   dispatch(refreshSidebarFun());
//                 }}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {group.chatName}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
function Groups() {
  // const [refresh, setRefresh] = useState(true);
  const { refresh, setRefresh } = useContext(myContext);

  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [groups, SetGroups] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get("https://chat-application-r22z.onrender.com/chat/fetchGroups", config)
      .then((response) => {
        // console.log("Group Data from API ", response.data);
        SetGroups(response.data);
      });
  }, [refresh]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Groups
          </p>
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
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
        <div className="ug-list">
          {groups.map((group, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={"list-tem" + (lightTheme ? "" : " dark")}
                key={index}
                onClick={() => {
                  console.log("Creating chat with group", group.Name);
                  const config={
                    headers:{
                      Authorization:`Bearer ${userData.data.token}`,
                    },
                  };
                  axios.put("https://chat-application-r22z.onrender.com/chat/addSelfToGroup",
                  {
                    chatId :group._id,
                    userId:userData.data._id,
                  },
                  config
                  )
                  // const config = {
                  //   headers: {
                  //     Authorization: `Bearer ${userData.data.token}`,
                  //   },
                  // };
                  // axios.post(
                  //   "http://localhost:8080/chat/",
                  //   {
                  //     userId: user._id,
                  //   },
                  //   config
                  // );
                  dispatch(refreshSidebarFun());
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {group.chatName}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Groups
