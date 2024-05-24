import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useSideConversation = () => {
    const [conversationList, setConversationList] = useState([]);
 
    useEffect(() => {
        const getUserConverstions = async () => {

            try {
                const res = await fetch("/api/messages/user/conversations");
                const data = await res.json();
                setConversationList(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        getUserConverstions()
    }, [])
    return {conversationList}
}

export default useSideConversation
