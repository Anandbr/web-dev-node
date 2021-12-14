// let profile = require("../data/profile.json");

const dao = require("../profile/profile.dao");
module.exports = (app) => {

    const findAllProfile= (req, res) =>
        dao.findAllProfile()
            .then(profile => res.json(profile));

    const updateProfile = (req, res) =>
    {console.log(req.body)
        dao.updateProfile(req.body)
            .then(status => res.send(status));}

    // const updateProfile = (req,res) => {
    //     const prof = {
    //                     "firstName": req.body.profile.firstName,
    //                     "lastName": req.body.profile.lastName,
    //                     "userName": "an",
    //                     "handle": req.body.profile.handle,
    //                     "profilePicture": req.body.profile.profilePicture,
    //                     "bannerPicture": req.body.profile.bannerPicture,
    //                     "bio": req.body.profile.bio,
    //                     "website": req.body.profile.website,
    //                     "location": req.body.profile.location,
    //                     "dateOfBirth": req.body.profile.dateOfBirth,
    //                     "dateJoined": req.body.profile.dateJoined,
    //                     "followingCount": req.body.profile.followingCount,
    //                     "followersCount": req.body.profile.followersCount
    //
    //                 }
    //     dao.updateProfile(prof)
    //         .then(status => res.send(status));
    // }

    // const updatCurrentProfile = (req, res) => {
    //     const id = req.params['id'];
    //
    //     if (profile._id === id) {
    //         const prof = {
    //             "firstName": req.body.profile.firstName,
    //             "lastName": req.body.profile.lastName,
    //             "userName": req.body.profile.userName,
    //             "handle": req.body.profile.handle,
    //             "profilePicture": req.body.profile.profilePicture,
    //             "bannerPicture": req.body.profile.bannerPicture,
    //             "bio": req.body.profile.bio,
    //             "website": req.body.profile.website,
    //             "location": req.body.profile.location,
    //             "dateOfBirth": req.body.profile.dateOfBirth,
    //             "dateJoined": req.body.profile.dateJoined,
    //             "followingCount": req.body.profile.followingCount,
    //             "followersCount": req.body.profile.followersCount
    //
    //         }
    //         profile.firstName = prof.firstName;
    //         profile.lastName = prof.lastName;
    //         profile.userName = prof.userName;
    //         profile.handle = prof.handle;
    //         profile.profilePicture = prof.profilePicture;
    //         profile.bannerPicture = prof.bannerPicture;
    //         profile.bio = prof.bio;
    //         profile.website = prof.website;
    //         profile.location = prof.location;
    //         profile.dateOfBirth = prof.dateOfBirth;
    //         profile.dateJoined = prof.dateJoined;
    //         profile.followingCount = prof.followingCount;
    //         profile.followersCount = prof.followersCount;
    //         // console.log(prof);
    //         console.log(id);
    //         console.log(profile._id);
    //         res.json(prof);
    //         // res.json(prof);
    //
    //     }
    // }
    // app.put('/api/profile/:id', updatCurrentProfile);
    //
    //
    // const getCurrentProfile = (req, res) => {
    //
    //     res.json(profile);
    //     // console.log(profile)
    //     // res.sendStatus(200);
    // }
    // app.get('/api/profile', getCurrentProfile);

    app.get('/api/profile/', findAllProfile);
    app.put('/api/profile', updateProfile);


};

