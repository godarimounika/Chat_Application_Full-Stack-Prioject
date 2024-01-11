import React from 'react'

function MessageSelf({props}) {
    // var props2 ={name:"you" , message:"this is sample msg"}
  // return (
  //   <div className='self-message-container'>
  //       <div className='messageBox'>
  //           <p>{props2.message}</p>
  //           <p className='self-timeStamp'>12:00AM</p>

  //       </div>
  //   </div>
  // )
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props.content}</p>
        {/* <p className="self-timeStamp" style={{ color: "black" }}>
          12:00am
        </p> */}
      </div>
    </div>
  );

}

export default MessageSelf
