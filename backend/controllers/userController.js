const User = require("../models/userModel");

module.exports.getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({
            _id:{$ne:loggedInUserId}
        }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.getSearchedUser = async (req,res) =>{
try {
    const searchVal = req.body.searchVal;
    const regex = new RegExp(searchVal, 'i');
    const users = await User.find({
        $or: [
            { fullName: { $regex: regex } },
            { userName: { $regex: regex } }
          ]
    })    
    res.status(200).json(users);
} catch (error) {
    console.error("Error searching users: ", error.message);
    res.status(500).json({ message: 'Internal server error' });
}
}