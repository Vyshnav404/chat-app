import React, { useEffect } from 'react'
import { Conversation } from './Conversation'
import useGetConversations from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis';
import useConversation from '../../zustand/useConversation';
import useSideConversation from '../../hooks/useSideConversation';
import useSearch from '../../hooks/useSearch';

export const Conversations = () => {
const { loading, conversations } = 	useGetConversations();
const { allUsers } = useConversation()
const {conversationList} = useSideConversation()
const conversationUserIds = conversationList.flatMap(conversation => conversation.participants);
const filteredUsers = conversations.filter(user => 
	conversationUserIds.includes(user._id)
  );
  
console.log("conversations",filteredUsers)
const {search} = useSearch()
console.log("searched user",search)


  return (
    <div className='py-2 flex flex-col overflow-auto'>
    			
			{filteredUsers?.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}

     		</div>
  )
}
