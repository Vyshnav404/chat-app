import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  console.log("message 1", message)
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (

    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
      </div>


      <div className={`chat-bubble text-white  pb-2 ${bubbleBgColor}  ${shakeClass}`}>{message.message}</div>

      <div className='chat-footer opacity-50 text-white text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>

  )
}

export default Message
