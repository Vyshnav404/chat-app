import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '/notification.wav';

export const useListenMessages = () => {
const {  socket } = useSocketContext();
const { messages,setMessages,selectedConversation,notification,setNotification } = useConversation();

useEffect(() => {
//   alert("hai")
    socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
       
    });

    socket?.on("getNotification",(res)=>{
        const isChatOpen = selectedConversation?._id === res?.senderId;

        if(isChatOpen){
            setNotification([...notification,{...res,isRead:true}]);
        }else{
            setNotification([...notification,res]);
        }
    })


    return () => {
        socket?.off("newMessages");
        socket?.off("getNotification");
    };
},[socket,setMessages,messages])
}
