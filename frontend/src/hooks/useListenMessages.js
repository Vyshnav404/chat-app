import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '/notification.wav';

export const useListenMessages = () => {
const {  socket } = useSocketContext();
const { messages,setMessages,selectedConversation } = useConversation();
console.log("hei message 1",selectedConversation,messages);

useEffect(() => {

    socket?.on("newMessage", (newMessage) => {
        console.log("message",newMessage)
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
       
    });


    return () => socket?.off("newMessages");
},[socket,setMessages,messages])
}
