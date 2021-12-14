const model = require('./profile.model');

const findAllProfile = () => model.find().sort({$natural: -1});
const updateProfile = (profile) => model.updateOne({_id: profile.id}, {$set: profile});


module.exports = {
    findAllProfile, updateProfile
};
