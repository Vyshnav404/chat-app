const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie = require("../utils/generateToken");

module.exports.signup = async (req, res) => {
    try {
        const { fullName, userName, password, gender, confirmPassword, profilePic } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //https://avatar.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        await newUser.save();

        if (newUser) {
            //Generate jwt token here
            generateTokenAndSetCookie(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }

    }
    catch (error) {
        console.log("Error in signup controller", error);
        res.status(400).json({ message: "Internal server error" });
    }
}
module.exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid userName or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        });
        
    } catch (error) {
        console.log("Error in login controller", error);
        res.status(400).json({ message: "Internal server error" });
    }

}

module.exports.logout = (req, res) => {
  try {
    res.cookie('jwt',"",{maxAge:0});
    res.status(200).json({message:"Logged out successfully"})
  } catch (error) {
    console.log("Error in logout controller", error);
    res.status(400).json({ message: "Internal server error" });
  }
}