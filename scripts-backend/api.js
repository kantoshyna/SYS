var profiles = require('../data/profiles');
var db = require('./db');

exports.getProfiles = function (req, res) {
    db.getUsers(function (error, arr) {
        if (error) {
            console.log("could not get users from DB in api.js.getProfiles");
        }
        console.log("got users from DB in api.js.getProfiles");
        res.send(arr);
    });
};

exports.createProfile = function (req, res) {
    var register_info = req.body;
    console.log("Creating Profile", register_info);

    db.saveUser(register_info, function (error, data) {
        if (error) {
            res.send({
                success: false
            });
        } else {
            res.send({
                success: true
            });
            console.log("save user");
        }
    });
};

exports.loadProfile = function (req, res) {
    var userattributes = req.body;
    db.setupUser(userattributes.email, userattributes.password);
};