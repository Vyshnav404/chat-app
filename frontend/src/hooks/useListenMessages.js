import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '/notification.wav';

export const useListenMessages = () => {
const {  socket } = useSocketContext();
const { messages,setMessages,selectedConversation } = useConversation();

useEffect(() => {
   
    socket?.on("newMessage", (newMessage) => {
        if(selectedConversation?._id === newMessage?.senderId){
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        }
    });

    return () => socket?.off("newMessages");
},[socket,setMessages,messages])
}
