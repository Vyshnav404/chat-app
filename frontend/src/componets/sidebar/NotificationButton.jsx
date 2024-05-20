import React, { useState } from 'react'
import { RiNotificationBadgeLine } from "react-icons/ri";
import useConversation from '../../zustand/useConversation';
import { unreadNotification } from '../../utils/unreadNotification';
import { useNotificationContext } from '../../context/NotificationContext';
import { useAuthContext } from '../../context/AuthContext';


export const NotificationButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { authUser } = useAuthContext();
    const {allUsers, notification } = useConversation();
    const { markAllNotificationsAsRead, markNotificationAsRead } = useNotificationContext()

    const unreadNotifiations = unreadNotification(notification);
    const modifiedNotifications = notification.map((n)=>{
        const sender = allUsers.find((u)=> u._id === n.senderId);

        return {
            ...n,
            senderName: sender?.fullName,
        };
    })

  return (
    <div>
        <div className='relative flex'>
        <RiNotificationBadgeLine className='w-6 h-6 text-white cursor-pointer  hover:p-1' onClick={() => setIsOpen(!isOpen)} />
        {
            unreadNotifiations?.length === 0 ? null : <span className='text-red-500'>{unreadNotifiations?.length}</span>
        }
        </div>
        {
            isOpen && ( <div className='absolute bg-blue-500 p-2 rounded'>
             <div className='flex gap-4'> 
            <div className='text-white gap-2 font-bold'>Notifications</div> 
            <div className='text-white cursor-pointer bg-gray-400 rounded-md p-1' onClick={()=> markAllNotificationsAsRead(notification)}>mark as read</div> 
         </div>
         {
            modifiedNotifications?.length === 0 ? (
                <span className='text-white'>No new notifications</span>
            ):null
         }
         {
            modifiedNotifications && 
            modifiedNotifications.reverse()?.map((n, index)=>{
            return (
                <div key={index} className=' py-2' onClick={()=> {markNotificationAsRead(n,allUsers,authUser,notification); setIsOpen(false)}}>
                    <div className={`${n.isRead ? "text-gray-500 bg-blue-400" : "text-green-500 bg-blue-200"} cursor-pointer rounded-md px-1`}>{`${n?.senderName} sent you a message`}</div>
                </div>
            )})
         }
         </div>

            )
        }
       
    </div>
  )
}
