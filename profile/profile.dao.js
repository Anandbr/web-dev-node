const userModel = require('./profile.model');

const findAllProfile = () => userModel.find().sort({$natural: -1});
const updateProfile = (user) =>

    userModel.updateOne({_id: user._id}, {$set: user});
    // console.log("profileServer" + JSON.stringify(user));



module.exports = {
    findAllProfile, updateProfile
};
