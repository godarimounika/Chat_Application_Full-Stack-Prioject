import React, {useContext, useEffect, useState } from 'react'
import "./myStyles.css";
import logo from "../images/live chat2.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import {myContext}  from "./MainContainer";



function Users_Groups() {
    const { refresh, setRefresh } = useContext(myContext);
    // const [refresh, setRefresh] = useState(false); 
    const[users,setUsers] = useState([]);
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const nav = useNavigate();
    const dispatch = useDispatch();
    if(!userData){
        console.log("User Not Authenticated")
        nav(-1);
    }

//  useEffect(()=>{
//     // console.log("user Refreshed")
//     const config ={
//         headers :{
//             Authorization :` Bearer ${userData.data.token}`
//         },
//     };

//     axios.get("http://localhost:8080/user/fetchUsers",config)
//     .then((data) => {
//        // Handle successful response
//        setUsers(data.data);
//     })
//     .catch((error) => {
//        // Handle error
//        console.error("Error fetching data:", error);
//        // Check the error message and response status
//        console.log(error.message);
//        console.log(error.response.status);
//     });


//  });
useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("https://chat-application-r22z.onrender.com/user/fetchUsers", config).then((data) => {
      console.log("UData refreshed in Users panel ",data);
      setUsers(data.data);
      // setRefresh(!refresh);
    });
  }, [refresh]);






  return (
    <AnimatePresence>
    <motion.div 
    
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",
duration:"0.3"}}
    
    className='list-container'>
   
       <div className='ug-header'>
        <img src={logo} style={{height:"2rem",width:"2rem"}}/>
   <p className='ug-title'>Online Users</p>
   <IconButton className='logo'     onClick={() => {
              setRefresh(!refresh);
            }}>
      <RefreshIcon/>
      </IconButton>
       </div>
       <div className="sb-search">
      <IconButton>
      <SearchIcon/>
      </IconButton>
           <input  placeholder="search"   className="search-Box"/>
        </div>
        <div className='ug-list'>

            {users.map((user,index)=>{
                return(
                    <motion.div
                    whileHover={{scale:1.01}}
                    whileTap={{scale:0.98}}
                    className='list-item'
                    key={index}
                    onClick={()=>{
                        const config={
                            headers:{
                                Authorization:`Bearer ${userData.data.token}`,
                            },
                        };
                        axios.post("https://chat-application-r22z.onrender.com/chat/",
                        {
                            userId:user._id,
                        },
                        config
                        )
                      //   .then((response) => {
                      //     // Handle successful response if needed
                      //     console.log("Chat created successfully:", response);
                      //     // dispatch(refreshSidebarFun());
                      // })
                        dispatch(refreshSidebarFun());
                    }}>
                          <p className='con-icon'>{user.Name[0]}</p>
                <p className='con-title'>{user.Name}</p>
                </motion.div>
                )
            })}


            </div>

        </motion.div>

    </AnimatePresence>
  )
}

export default Users_Groups
// import React, { useContext, useEffect, useState } from "react";
// import "./myStyles.css";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import logo from "../images/live chat2.png";
// import { useDispatch, useSelector } from "react-redux";
// import { AnimatePresence, motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import myContext  from "./MainContainer";

// function Users() {
//   // const [refresh, setRefresh] = useState(true);
//   const { refresh, setRefresh } = useContext(myContext);

//   const lightTheme = useSelector((state) => state.themeKey);
//   const [users, setUsers] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   // console.log("Data from LocalStorage : ", userData);
//   const nav = useNavigate();
//   const dispatch = useDispatch();

//   if (!userData) {
//     console.log("User not Authenticated");
//     nav(-1);
//   }

//   useEffect(() => {
//     console.log("Users refreshed");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${userData.data.token}`,
//       },
//     };
//     axios.get("http://localhost:8080/user/fetchUsers", config).then((data) => {
//       console.log("UData refreshed in Users panel ");
//       setUsers(data.data);
//       // setRefresh(!refresh);
//     });
//   }, [refresh]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0 }}
//         transition={{
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
//             Available Users
//           </p>
//           <IconButton
//             className={"icon" + (lightTheme ? "" : " dark")}
//             onClick={() => {
//               setRefresh(!refresh);
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
//           {users.map((user, index) => {
//             return (
//               <motion.div
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={"list-tem" + (lightTheme ? "" : " dark")}
//                 key={index}
//                 onClick={() => {
//                   console.log("Creating chat with ", user.Name);
//                   const config = {
//                     headers: {
//                       Authorization: `Bearer ${userData.data.token}`,
//                     },
//                   };
//                   axios.post(
//                     "http://localhost:8080/chat/",
//                     {
//                       userId: user._id,
//                     },
//                     config
//                   );
//                   dispatch(refreshSidebarFun());
//                 }}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {user.name}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Users;