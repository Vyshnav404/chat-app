import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '/notification.wav';

export const useListenMessages = () => {
const {  socket } = useSocketContext();
const { messages,setMessages,selectedConversation } = useConversation();

const isMessageFromSelectedConversation = selectedConversation?.messages?.some(
    (msg) => msg.senderId === messages?.senderId
  );

useEffect(() => {
    if(isMessageFromSelectedConversation){
    socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
       
    });
}

    return () => socket?.off("newMessages");
},[socket,setMessages,messages])
}
