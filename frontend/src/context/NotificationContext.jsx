import { createContext, useCallback, useContext } from "react";
import useConversation from "../zustand/useConversation";



export const NotificationContext = createContext();
export const useNotificationContext = () => useContext(NotificationContext);

export const NotificationContextProvider = ({ children }) => {
    const { setNotification,setSelectedConversation } = useConversation();
    const markAllNotificationsAsRead = useCallback((notification) => {
        const mNotifications = notification.map((n)=>{
            return { ...n, isRead: true };
        })
        setNotification(mNotifications);
    },[]);

   const markNotificationAsRead = useCallback((n,allUsers,user,notifications)=>{
    //find chat to open
    const desiredChat = allUsers.find((chat)=>{
        const chatMembers = [user._id, n.senderId];
        const isDesiredChat = chat._id === n.senderId || chat._id === n.receiverId;
        return isDesiredChat;
    });
    //mark notification as read
    const mNotifications = notifications.map((el)=>{
        if(n.senderId === el.senderId){
            return { ...n, isRead: true };
        }else{
            return el;
        }
    })
    setSelectedConversation(desiredChat);
    setNotification(mNotifications);
   })   

   const markThisUserNotificationsAsRead = useCallback((thisUserNotification,notifications)=>{
    //mark notifications as read

    const mNotifications = notifications.map((el)=>{
        let notification;
        thisUserNotification.forEach((n)=>{
            if(n.senderId === el.senderId){
                notification = { ...n, isRead: true };
            }else{
                notification = el;
            }
        });

        return notification;
   });

    setNotification(mNotifications);

   },[]);

    return (
        <NotificationContext.Provider value={{markAllNotificationsAsRead,markNotificationAsRead,markThisUserNotificationsAsRead}}>{children}</NotificationContext.Provider>
    );
}