import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	notification:[],
	setNotification: (notification) => set({ notification }),
	allUsers: [],
	setAllUsers: (allUsers) => set({ allUsers }),
}));

export default useConversation;