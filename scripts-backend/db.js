var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@mongodb-1536-0.cloudclusters.net:10003/sell-yourself?authSource=admin');

var db = mongoose.connection;
db.on('error', function (err) {
    console.log('--connection	error:', err.message);
});
db.once('open', function callback() {
    console.log("Connected	to	DB!");
});

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    nickname: String,
    icon: String,
    sex: Boolean,
    country: String,
    bloodgroup: Number,
    resus: Boolean,
    brain: Number,
    leftkidney: Number,
    rightkidney: Number,
    leftlung: Number,
    rightlung: Number,
    stomach: Number,
    liver: Number
});

//При створенні моделі задається назва колекції (таблиці)
var User = mongoose.model('user', UserSchema);

exports.getUsers = function (callback) {
    User.find({}, function (error, arr) {
        callback(error, arr);
    });
};

function hasUser(email, password) {
    User.find({
        'email': email,
        'password': password
    }, function (error, arr) {
        if (arr.length > 0) {
            return true; // == such user exists
        } else {
            return false;
        }
    });
}

function hasUser(email) {
    User.find({
        'email': email
    }, function (error, arr) {
        if (arr.length > 0) {
            return true; // == such user exists
        } else {
            return false;
        }
    });
}

function saveUser(newUser, cb) {
    var newEmail = newUser.email;
    if (hasUser(newEmail)) {
        alert("Користувач із таким email уже зареєстрований.");
        cb(new Error("--such user exists in db.js.saveUser"));
    }
    var user1 = new User(newUser);
    user1.save(cb);
}

exports.saveUser = saveUser;

exports.setupUser = function (email, password, cb) {
    User.find({
        'email': email,
        'password': password
    }, function (error, arr) {
        if (error || arr.length == 0) {
            cb(new Error("--Error while setting up user in db.js.setupUser. Such user doesn`t exist."));
        } else {
            console.log('--user exists in db.js.setupUser');
            cb(null, arr[0]);
        }
    });
};

// повертає масив відсортованих у порядку зростання ціни на орган користувачів
function topSales(organ, cb) {
    User.find({
        [organ]: {
            $gt: 0
        }
    }).sort({
        [organ]: 1
    }).exec(function (error, arr) {
        if (error) {
            cb(new Error("--Error while finding up user in db.js.topSales"));
        } else {
            if (arr.length > 0) {
                console.log('--users exist in db.js.topSales');
                cb(null, arr);
            } else {
                cb(new Error("--users don`t exist in db.js.topSales"));
            }
        }
    });
}


exports.getBrainUsers = function (callback) {
    topSales('brain', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};
exports.getLKUsers = function (callback) {
    topSales('leftkidney', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};
exports.getRKUsers = function (callback) {
    topSales('rightkidney', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};
exports.getLLUsers = function (callback) {
    topSales('leftlung', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};
exports.getRLUsers = function (callback) {
    topSales('rightlung', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};
exports.getSUsers = function (callback) {
    topSales('stomach', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};
exports.getLUsers = function (callback) {
    topSales('liver', function (error, data) {
        if (error) {
            console.log(error);
        } else {
            callback(null, data);
        }
    });
};