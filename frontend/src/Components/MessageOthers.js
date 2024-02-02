import React from 'react'
import "./myStyles.css";
import { useDispatch, useSelector } from "react-redux";
function MessageOthers({props}) {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  
    // var props1 ={name:"RandomUser" , message:"This is a sample"}
    // var props ={name:"RandomUser" , message:"This is a sample"}
//   return (
   
// //     <div className='other-message-container'>

// // <div className='conversation-container'>
// //         <p className='con-icon'>{props1.name[0]}</p>
// //         {/* <p className='con-title'>{props.name}</p>
// //         <p className='con-lastMessage'>{props.lastMessage}</p>
// //         <p className='con-timeStamp'>{props.timeStamp}</p> */}
// // <div className='other-text-content'>

// //         <p className='con-title'>{props1.name}</p>
// //         <p className='con-lastMessage'>{props1.message}</p>
// //         <p className='self-timeStamp'>12:00AM</p>

// // </div>

// //     </div>



// //     </div>




//   )
return (
  <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
    <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
      <p className={"con-icon" + (lightTheme ? "" : " dark")}>
        {props.sender.Name[0]}
      </p>
      <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>
          {props.sender.Name}
        </p>
        <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>
          {props.content}
        </p>
        {/* <p className="self-timeStamp">{props.timestamp}</p> */}
      </div>
    </div>
  </div>
);


}

export default MessageOthers
