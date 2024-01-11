import React ,{useState}from 'react'
import "./myStyles.css";
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Register from './Register';
import Users_Groups from './Users';
import { Outlet } from 'react-router-dom';

import ConversationItem from "./ConversationItem"
// import WorkArea from './WorkArea';
import { useDispatch, useSelector } from "react-redux";
// import myContext from "./Sidebar"
import { createContext } from 'react';
 export const myContext = createContext();
function MainContainer() {
   const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);

  return (
    // <div className='main-container'>

    //   <Sidebar/>
    //   <Outlet/>
   
    //     {/* <Register/> */}
    //     {/* <Welcome/> */}
    //     {/* <CreateGroups/> */}
    //     {/* <WorkArea/> */}
    //     {/* <ChatArea  props={conversations[0]}/> */}
    //     {/* <Users_Groups/> */}
    // </div>

    <div className={"main-container" + (lightTheme ? "" : " dark")}>
    <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
      <Sidebar />
      {/* <CreateGroups setRefresh={setRefresh} /> */}
      {/* <ConversationItem/> */}
      <Outlet />
    </myContext.Provider>
    </div>
  )
}

export default MainContainer;


// import "./myStyles.css";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// export const myContext = createContext();
// function MainContainer() {
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   const [refresh, setRefresh] = useState(true);

//   return (
    // <div className={"main-container" + (lightTheme ? "" : " dark")}>
    //   <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
    //     <Sidebar />
    //     <Outlet />
    //   </myContext.Provider>
  //     {/* <Welcome /> */}
  //     {/* <CreateGroups /> */}
  //     {/* <ChatArea props={conversations[0]} /> */}
  //     {/* <Users /> */}
  //     {/* <Groups /> */}
  //   </div>
  // );
// }

// export default MainContainer;
