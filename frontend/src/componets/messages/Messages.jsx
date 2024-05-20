import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import { useListenMessages } from '../../hooks/useListenMessages'
import useConversation from '../../zustand/useConversation'

export const Messages = () => {
	const { loading, messages } = useGetMessages()
	const { selectedConversation } = useConversation();
	const filteredMessages = messages.filter(msg => 
		msg.senderId === selectedConversation._id || msg.receiverId === selectedConversation._id
	  );

	// useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [filteredMessages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
		{!loading &&
				filteredMessages.length > 0 &&
				filteredMessages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
				
			{loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && filteredMessages.length === 0 && (
				<p className='text-center text-gray-500'>Send a message to start the conversation</p>
			)}
     		</div>
  )
}
