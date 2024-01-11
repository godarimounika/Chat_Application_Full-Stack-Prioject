import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./myStyles.css";

function ConversationItem({props}) {
  let navigate=useNavigate();
  return (
    <div className='conversation-container'
    onClick={()=>{navigate('ChatArea')}}
    >
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastMessage'>{props.lastMessage}</p>
        <p className='con-timeStamp'>{props.timeStamp}</p>


    </div>
  )
}

export default ConversationItem