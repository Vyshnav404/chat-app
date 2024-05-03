const User = require("../models/userModel");
const bcrypt = require('bcryptjs')

module.exports.signup = async(req,res)=>{
    try{
        const {fullName,userName,password,gender,confirmPassword,profilePic} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({message:"Passwords do not match"});
        }

        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //https://avatar.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
       
        const newUser = new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic:gender === "male" ? boyProfilePic : girlProfilePic,
        })

        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        })
    }
    catch(error){
        console.log("Error in signup controller",error);
        res.status(400).json({message:"Internal server error"});
    }
}
module.exports.login = (req,res)=>{
    res.send("Login route");
}

module.exports.logout = (req,res)=>{
    res.send("Logout route");
}