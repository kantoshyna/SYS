var profiles = require('../data/profiles');
var db = require('./db');
var loggedUser;

exports.getLoggedUser = function (req, res) {
    res.send(loggedUser);
};

exports.loadProfile = function (req, res) {
    var userattributes = req.body;
    db.setupUser(userattributes.email, userattributes.password, function (error, data) {
        if (error) {
            res.send(error);
        } else {
            loggedUser = data;
            console.log('--loggedUser equals ' + loggedUser + '\n--I see it in scripts-backend/api.js loadProfile');
        }
    });
};

exports.getProfiles = function (req, res) {
    db.getUsers(function (error, arr) {
        if (error) {
            console.log("--could not get users from DB in api.js.getProfiles");
        }
        console.log("--got users from DB in api.js.getProfiles");
        res.send(arr);
    });
};

exports.createProfile = function (req, res) {
    var register_info = req.body;
    console.log("--Creating Profile", register_info);

    db.saveUser(register_info, function (error, data) {
        if (error) {
            console.log('--register error: ' + error);
            res.send({
                success: false,
                error: [error]
            });
        } else {
            res.send({
                success: true
            });
            console.log("--user saved");
        }
    });
};

exports.offersBrain = function (req, res) {
    db.getBrainUsers(function (error, arr) {
        if (error) { // = NEVER
            console.log("--could not get users from DB in api.js.getBrainUsers");
        }
        console.log("--got users from DB in api.js.getBrainUsers");
        res.send(arr);
    });
};

exports.offersLeftKidney = function (req, res) {
    db.getLKUsers(function (error, arr) {
        console.log("--got users from DB in api.js.getLKUsers");
        res.send(arr);
    });
};

exports.offersRightKidney = function (req, res) {
    db.getRKUsers(function (error, arr) {
        console.log("--got users from DB in api.js.getRKUsers");
        res.send(arr);
    });
};
exports.offersLeftLung = function (req, res) {
    db.getLLUsers(function (error, arr) {
        console.log("--got users from DB in api.js.getLLUsers");
        res.send(arr);
    });
};
exports.offersRightLung = function (req, res) {
    db.getRLUsers(function (error, arr) {
        console.log("--got users from DB in api.js.getRLUsers");
        res.send(arr);
    });
};
exports.offersStomach = function (req, res) {
    db.getSUsers(function (error, arr) {
        console.log("--got users from DB in api.js.getSUsers");
        res.send(arr);
    });
};
exports.offersLiver = function (req, res) {
    db.getLUsers(function (error, arr) {
        console.log("--got users from DB in api.js.getLUsers");
        res.send(arr);
    });
};