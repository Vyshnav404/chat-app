const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");
const { getReceiverSocketId,io } = require("../socket/socket");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports.sendMessage = async (req,res)=>{
try {
    
    const {message} = req.body;
    const {id:receiverId} = req.params;
    const  senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants:{$all:[receiverId,senderId]}
    })
    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,receiverId],
        }); 
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    if(newMessage){
       conversation.messages.push(newMessage._id);
    };


    // await conversation.save(); if this takes 1 second or more
    // await newMessage.save(); this needs to wait for the conversation to be saved

    //this will run in parallel
    await Promise.all([conversation.save(),newMessage.save()]);

        // socket io functionality will go here
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            //io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage);
            io.to(receiverSocketId).emit("getNotification",{
                senderId:newMessage.senderId,
                isRead:false,
                date:new Date(),
            })
        }

    res.status(201).json(newMessage)

} catch (error) {
    console.log("Error in message controller2",error);
    res.status(500).json({message:'interval server error'})
}
}

module.exports.getMessages = async (req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation  = await Conversation.findOne({
            participants :{$all: [senderId,userToChatId]}
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(messages)


    } catch (error) {
        console.log("Error in message controller3",error);
    res.status(500).json({message:'interval server error'})
    }
}

module.exports.getConversations = async (req,res)=>{
    try {
        const userId = req.user._id;
        // const userObjectId = new ObjectId(userId);
        const conversation = await Conversation.find({ participants: userId });
        if(!conversation) return res.status(200).json([]);
        res.status(200).json(conversation)
        
    } catch (error) {
        console.log("Error in message controller4",error);
        res.status(500).json({message:'interval server error'})
    }
}

