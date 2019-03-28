var profiles = require('../data/profiles');

exports.getProfiles = function (req, res) {
    res.send(profiles);
};

exports.createProfile = function (req, res) {
    var register_info = req.body;
    console.log("Creating Profile", register_info);

    res.send({
        success: true
    });
};