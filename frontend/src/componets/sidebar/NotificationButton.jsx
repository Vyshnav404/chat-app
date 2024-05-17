import React, { useState } from 'react'
import { RiNotificationBadgeLine } from "react-icons/ri";
import useConversation from '../../zustand/useConversation';
import { unreadNotification } from '../../utils/unreadNotification';


export const NotificationButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {allUsers, notification } = useConversation();

    const unreadNotifiations = unreadNotification(notification);
    const modifiedNotifications = notification.map((n)=>{
        const sender = allUsers.find((u)=> u._id === n.senderId);

        return {
            ...n,
            senderName: sender?.fullName,
        };
    })
    console.log("un===",unreadNotifiations)
    console.log("mn",modifiedNotifications)
  return (
    <div>
        <div className='flex'>
        <RiNotificationBadgeLine className='w-6 h-6 text-white cursor-pointer  hover:p-1' onClick={() => setIsOpen(!isOpen)} />
        {
            unreadNotifiations?.length === 0 ? null : <span className='text-red-500'>{unreadNotifiations?.length}</span>
        }
        </div>
        {
            isOpen && ( <div>
             <div className='flex'> 
            <div className='text-white gap-2'>Notifications</div> 
            <div className='text-white'>mark as read</div> 
         </div>
         {
            modifiedNotifications?.length === 0 ? (
                <span className='text-white'>No new notifications</span>
            ):null
         }
         {
            modifiedNotifications && 
            modifiedNotifications?.map((n, index)=>{
            return (
                <div key={index} className=' p-2'>
                    <div className={`${n.isRead ? "text-red-500" : "text-green-500 bg-white"}`}>{`${n?.senderName} sent you a message`}</div>
                </div>
            )})
         }
         </div>

            )
        }
       
    </div>
  )
}
