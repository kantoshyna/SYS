var profiles = require('../data/profiles');
var db = require('./db');

exports.getProfiles = function (req, res) {
    //res.send(profiles);
    db.getUsers(function (error, arr) {
        res.send(arr);
    });
};

exports.createProfile = function (req, res) {
    var register_info = req.body;
    console.log("Creating Profile", register_info);

    db.saveUser(register_info, function (error, data) {

    });

    res.send({
        success: true
    });
};