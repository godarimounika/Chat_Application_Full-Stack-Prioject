import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Components/Register";
import "./App.css"
import MainContainer from "./Components/MainContainer";
// import Login from "./pages/Login";
import Login from "./Components/Login"
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import Groups from "./Components/Groups"
import CreateGroups from "./Components/CreateGroups";
function App(){
  return(


    <BrowserRouter>
    
    {/* <Register/> */}
    {/* <MainContainer/> */}
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="app" element={<MainContainer/>} >
        <Route path="Welcome" element={<Welcome/>}/>
        <Route path="chat/:_id" element={<ChatArea/>}/> 
        <Route path="Users" element={<Users/>}/> 
        <Route path="groups" element={<Groups/>}/>
        <Route path="create-groups" element={<CreateGroups/>}/> 
        
        </Route>
        <Route path="Register" element={<Register/>}/> 
    </Routes>
 
    </BrowserRouter>
    
  )
}
export default App;

//  <BrowserRouter> 

// <MainContainer/> 
// <Register/>
// <Routes>
//  <Route path="/" element={<Register/>}/>
  
//  <Route path="/Register" element={<Register/>}/>
//    <Route path="/Login" element={<Login/>}/>


//  </Routes>
//  </BrowserRouter>


// import React from "react";
// import "./App.css";
// import MainContainer from "./Components/MainContainer";
// import Login from "./Components/Login";
// import { Route, Routes } from "react-router-dom";
// import Welcome from "./Components/Welcome";
// import ChatArea from "./Components/ChatArea";
// import Users from "./Components/Users";
// import CreateGroups from "./Components/CreateGroups";
// import Groups from "./Components/Groups";
// import { useDispatch, useSelector } from "react-redux";

// import Register from "./Components/Register";


// function App() {
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   return (
//     <div className={"App" + (lightTheme ? "" : "-dark")}>
//       {/* <MainContainer /> */}
//       {/* <Login /> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="app" element={<MainContainer />}>
//           <Route path="welcome" element={<Welcome />}></Route>
//           <Route path="chat/:_id" element={<ChatArea />}></Route>
//           <Route path="users" element={<Users />}></Route>
//           <Route path="groups" element={<Groups />}></Route>
//           <Route path="create-groups" element={<CreateGroups />}></Route>
//         </Route>
//         <Route path="Register" element={<Register/>}/> 
//       </Routes>
//     </div>
//   );
// }

// export default App;