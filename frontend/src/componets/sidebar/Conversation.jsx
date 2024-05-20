import React from 'react'
import  useConversation  from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';
import { unreadNotification } from '../../utils/unreadNotification';
import { useNotificationContext } from '../../context/NotificationContext';

export const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation,notification } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const { markThisUserNotificationsAsRead } = useNotificationContext();
	const isOnline = onlineUsers?.includes(conversation?._id);
    const unreadNotifications = unreadNotification(notification)
    const thisUserNotifications = unreadNotifications?.filter(
	n => n?.senderId === conversation?._id
    );

  return (
    <>
     			<div className={`flex gap-2 items-center hover:bg-slate-400 rounded-xl p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-600" : ""}
			`}
				onClick={() => {setSelectedConversation(conversation);
					if(thisUserNotifications?.length !== 0){
						markThisUserNotificationsAsRead(thisUserNotifications,notification)
					}
				}}
			>
     				<div className={`avatar ${isOnline ? "online" : ""}`}>
    					<div className='w-10 rounded-full'>
     						<img className=' border-gray-500 border-2'
     							src={conversation?.profilePic}
    							alt='user avatar'
    						/>
    					</div>
    				</div>
    
    				<div className='flex flex-col flex-1'>
     					<div className='flex gap-3 justify-between'>
     						<p className='font-bold text-gray-200'>{conversation?.fullName}</p>
     						<span className='text-md text-white'>{thisUserNotifications?.length > 0 ? thisUserNotifications?.length : null}</span>
     					</div>
     				</div>
    		</div>
    
    			{!lastIdx ? <div className='divider my-0 py-0 h-1' /> : null}
     		</>
  )
}
